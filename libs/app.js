// app.js
import gs from "./gs.js";

let wasmInstance;
let FS;

async function loadWasm() {
    wasmInstance = await gs();
    FS = wasmInstance.FS;
}


function postProcessing() {
    const carray = FS.readFile("colors.txt", { encoding: 'utf8' }).split('\n');
    const capturingRegex = /^ 0.00000  0.00000  0.00000/;
    // if we filter the "null" elements, we might also count empty lines that do not correspond to any pages
    const occursin = carray.map((x) => x.match(capturingRegex)).filter((x) => x !== null);
    const Nbw = occursin.length;
    return Nbw;
}


async function analyzePdf(file) {
    const fileReader = new FileReader();

    fileReader.onload = async function(event) {
        // Copy source file to virtual filesystem
        FS.writeFile("input.pdf", new Uint8Array(event.target.result));

        // Ghostscript arguments and run Ghostscript asynchronously
        const gsargs = [
            "-q",
            "-ocolors.txt",
            "-sDEVICE=inkcov",
            "input.pdf"
        ];

        wasmInstance.callMain(gsargs);

        try {
            const result = postProcessing();

            document.getElementById('result').innerText = `Processing Result: ${result} black/white pages`;

            document.getElementById('pdfUpload').style.display = 'none';
            document.getElementById('analyzeButton').style.display = 'none';
            document.getElementById('newUploadButton').style.display = 'inline';
        } catch (error) {
            document.getElementById('result').innerText = `Processing Error: ${error.message}`;
        }
    };

    fileReader.readAsArrayBuffer(file);
}

document.getElementById('analyzeButton').addEventListener('click', () => {
    const fileInput = document.getElementById('pdfUpload');
    if (fileInput.files.length > 0) {
        analyzePdf(fileInput.files[0]);
    } else {
        alert('Please upload a PDF file first.');
    }
});

document.getElementById('newUploadButton').addEventListener('click', () => {
    document.getElementById('pdfUpload').style.display = 'inline';
    document.getElementById('analyzeButton').style.display = 'inline';
    document.getElementById('newUploadButton').style.display = 'none';
    document.getElementById('result').innerText = '';
    document.getElementById('pdfUpload').value = '';
});

window.onload = loadWasm;
