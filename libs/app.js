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
    // regex for detecting black and white / blank pages
    const bwRegex = /^ 0.00000  0.00000  0.00000/;
    const blankRegex = /^ 0.00000  0.00000  0.00000  0.00000/;
    // there is always one additional blank line at the end, total pages
    const Npages = carray.length - 1;
    // first, filter blank pages
    const blank = carray.map((x) => x.match(blankRegex)).filter((x) => x !== null);
    const Nblank = blank.length;
    // now, filter black and white, substract blanks
    const bw = carray.map((x) => x.match(bwRegex)).filter((x) => x !== null);
    const Nbw = bw.length - Nblank;
    // finally, colorful pages
    const Ncolor = Npages - Nblank - Nbw;
   
    return {
        nPages: Npages,
        cPages: Ncolor,
        bwPages: Nbw,
        blankPages: Nblank,
    };
}


async function analyzePdf(file, fn) {
    const fileReader = new FileReader();

    fileReader.onload = async function(event) {
        // Copy source file to virtual filesystem
        FS.writeFile("input.pdf", new Uint8Array(event.target.result));

        // Ghostscript arguments and run Ghostscript asynchronously
        const gsargs = [
            "-sDEVICE=inkcov",
            "-I/Resource/Init",
            "-ocolors.txt",
            "-q",
            "input.pdf",
        ];

        // const start = performance.now();
        wasmInstance.callMain(gsargs);
        // const end = performance.now();
        // console.log(`Execution time: ${end - start} ms`);

        const result = postProcessing();
        document.getElementById('nPages').style.display = 'block';
        document.getElementById('results').style.display = 'block';

        document.getElementById('nPages').innerHTML = `Found ${result["nPages"]} pages in the file "${fn}". Thereof,`;
        document.getElementById('cPages').innerHTML = `${result["cPages"]} contain color,`;
        document.getElementById('bwPages').innerHTML = `${result["bwPages"]} are black and white,`;
        document.getElementById('blankPages').innerHTML = `and ${result["blankPages"]} are blank.`;

        document.getElementById('pdfUpload').style.display = 'none';
        document.getElementById('analyzeButton').style.display = 'none';
        document.getElementById('newUploadButton').style.display = 'inline';
    };

    fileReader.readAsArrayBuffer(file);
}

document.getElementById('analyzeButton').addEventListener('click', () => {
    const fileInput = document.getElementById('pdfUpload');
    if (fileInput.files.length > 0) {
        analyzePdf(fileInput.files[0], fileInput.files[0].name);
    } else {
        alert('Please upload a PDF file first.');
    }
});

document.getElementById('newUploadButton').addEventListener('click', () => {
    document.getElementById('pdfUpload').style.display = 'block';
    document.getElementById('analyzeButton').style.display = 'block';
    document.getElementById('newUploadButton').style.display = 'none';
    document.getElementById('pdfUpload').value = '';
    document.getElementById('nPages').style.display = 'none';
    document.getElementById('results').style.display = 'none';
});

window.onload = loadWasm;
