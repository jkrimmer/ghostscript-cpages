
var gs = (() => {
  var _scriptName = import.meta.url;
  
  return (
async function(moduleArg = {}) {
  var moduleRtn;

var e = moduleArg, aa, ba, ca = new Promise((a, b) => {
  aa = a;
  ba = b;
});
["_memory", "___emscripten_embedded_file_data", "___indirect_function_table", "_main", "onRuntimeInitialized"].forEach(a => {
  Object.getOwnPropertyDescriptor(ca, a) || Object.defineProperty(ca, a, {get:() => g("You are getting " + a + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"), set:() => g("You are setting " + a + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),});
});
var da = "object" == typeof window, ea = "function" == typeof importScripts, l = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, ia = !da && !l && !ea;
if (e.ENVIRONMENT) {
  throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
}
if (l) {
  const {createRequire:a} = await import("module");
  var require = a(import.meta.url);
}
var ja = Object.assign({}, e), ka = [], la = "./this.program", ma = (a, b) => {
  throw b;
}, m = "", na, oa;
if (l) {
  if ("undefined" == typeof process || !process.release || "node" !== process.release.name) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  var pa = process.versions.node, qa = pa.split(".").slice(0, 3);
  qa = 10000 * qa[0] + 100 * qa[1] + 1 * qa[2].split("-")[0];
  if (160000 > qa) {
    throw Error("This emscripten-generated code requires node v16.0.0 (detected v" + pa + ")");
  }
  var fs = require("fs"), ra = require("path");
  m = require("url").fileURLToPath(new URL("./", import.meta.url));
  oa = a => {
    a = sa(a) ? new URL(a) : ra.normalize(a);
    a = fs.readFileSync(a);
    r(a.buffer);
    return a;
  };
  na = a => {
    a = sa(a) ? new URL(a) : ra.normalize(a);
    return new Promise((b, c) => {
      fs.readFile(a, void 0, (d, f) => {
        d ? c(d) : b(f.buffer);
      });
    });
  };
  !e.thisProgram && 1 < process.argv.length && (la = process.argv[1].replace(/\\/g, "/"));
  ka = process.argv.slice(2);
  ma = (a, b) => {
    process.exitCode = a;
    throw b;
  };
} else if (ia) {
  if ("object" == typeof process && "function" === typeof require || "object" == typeof window || "function" == typeof importScripts) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
} else if (da || ea) {
  ea ? m = self.location.href : "undefined" != typeof document && document.currentScript && (m = document.currentScript.src);
  _scriptName && (m = _scriptName);
  m.startsWith("blob:") ? m = "" : m = m.substr(0, m.replace(/[?#].*/, "").lastIndexOf("/") + 1);
  if ("object" != typeof window && "function" != typeof importScripts) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  ea && (oa = a => {
    var b = new XMLHttpRequest();
    b.open("GET", a, !1);
    b.responseType = "arraybuffer";
    b.send(null);
    return new Uint8Array(b.response);
  });
  na = a => sa(a) ? new Promise((b, c) => {
    var d = new XMLHttpRequest();
    d.open("GET", a, !0);
    d.responseType = "arraybuffer";
    d.onload = () => {
      (200 == d.status || 0 == d.status && d.response) && c(d.response);
      b(d.status);
    };
    d.onerror = b;
    d.send(null);
  }) : fetch(a, {credentials:"same-origin"}).then(b => b.ok ? b.arrayBuffer() : Promise.reject(Error(b.status + " : " + b.url)));
} else {
  throw Error("environment detection error");
}
var ta = e.print || console.log.bind(console), u = e.printErr || console.error.bind(console);
Object.assign(e, ja);
ja = null;
Object.getOwnPropertyDescriptor(e, "fetchSettings") && g("`Module.fetchSettings` was supplied but `fetchSettings` not included in INCOMING_MODULE_JS_API");
e.arguments && (ka = e.arguments);
v("arguments", "arguments_");
e.thisProgram && (la = e.thisProgram);
v("thisProgram", "thisProgram");
e.quit && (ma = e.quit);
v("quit", "quit_");
r("undefined" == typeof e.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
r("undefined" == typeof e.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
r("undefined" == typeof e.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
r("undefined" == typeof e.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
r("undefined" == typeof e.read, "Module.read option was removed");
r("undefined" == typeof e.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
r("undefined" == typeof e.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
r("undefined" == typeof e.setWindowTitle, "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
r("undefined" == typeof e.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
v("asm", "wasmExports");
v("readAsync", "readAsync");
v("readBinary", "readBinary");
v("setWindowTitle", "setWindowTitle");
r(!ia, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
var ua;
e.wasmBinary && (ua = e.wasmBinary);
v("wasmBinary", "wasmBinary");
"object" != typeof WebAssembly && u("no native wasm support detected");
var va, wa = !1, xa;
function r(a, b) {
  a || g("Assertion failed" + (b ? ": " + b : ""));
}
var x, ya, Aa, y, z, B;
function Ba() {
  var a = va.buffer;
  e.HEAP8 = x = new Int8Array(a);
  e.HEAP16 = Aa = new Int16Array(a);
  e.HEAPU8 = ya = new Uint8Array(a);
  e.HEAPU16 = new Uint16Array(a);
  e.HEAP32 = y = new Int32Array(a);
  e.HEAPU32 = z = new Uint32Array(a);
  e.HEAPF32 = new Float32Array(a);
  e.HEAPF64 = new Float64Array(a);
  e.HEAP64 = B = new BigInt64Array(a);
  e.HEAPU64 = new BigUint64Array(a);
}
r(!e.STACK_SIZE, "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
r("undefined" != typeof Int32Array && "undefined" !== typeof Float64Array && void 0 != Int32Array.prototype.subarray && void 0 != Int32Array.prototype.set, "JS engine does not provide full typed array support");
r(!e.wasmMemory, "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");
r(!e.INITIAL_MEMORY, "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
function Ca() {
  var a = Da();
  r(0 == (a & 3));
  0 == a && (a += 4);
  z[a >> 2] = 34821223;
  z[a + 4 >> 2] = 2310721022;
  z[0] = 1668509029;
}
function Ea() {
  if (!wa) {
    var a = Da();
    0 == a && (a += 4);
    var b = z[a >> 2], c = z[a + 4 >> 2];
    34821223 == b && 2310721022 == c || g(`Stack overflow! Stack cookie has been overwritten at ${Fa(a)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Fa(c)} ${Fa(b)}`);
    1668509029 != z[0] && g("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
}
var Ga = new Int16Array(1), Ha = new Int8Array(Ga.buffer);
Ga[0] = 25459;
if (115 !== Ha[0] || 99 !== Ha[1]) {
  throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
}
var Ia = [], Ja = [], Ka = [], La = [], Ma = !1;
function Na() {
  var a = e.preRun.shift();
  Ia.unshift(a);
}
r(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
r(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
r(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
r(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var D = 0, H = null, Oa = null, Pa = {};
function Qa(a) {
  for (var b = a;;) {
    if (!Pa[a]) {
      return a;
    }
    a = b + Math.random();
  }
}
function Ra(a) {
  D++;
  e.monitorRunDependencies?.(D);
  a ? (r(!Pa[a]), Pa[a] = 1, null === H && "undefined" != typeof setInterval && (H = setInterval(() => {
    if (wa) {
      clearInterval(H), H = null;
    } else {
      var b = !1, c;
      for (c in Pa) {
        b || (b = !0, u("still waiting on run dependencies:")), u(`dependency: ${c}`);
      }
      b && u("(end of list)");
    }
  }, 10000))) : u("warning: run dependency added without ID");
}
function Sa(a) {
  D--;
  e.monitorRunDependencies?.(D);
  a ? (r(Pa[a]), delete Pa[a]) : u("warning: run dependency removed without ID");
  0 == D && (null !== H && (clearInterval(H), H = null), Oa && (a = Oa, Oa = null, a()));
}
function g(a) {
  e.onAbort?.(a);
  a = "Aborted(" + a + ")";
  u(a);
  wa = !0;
  xa = 1;
  a = new WebAssembly.RuntimeError(a);
  ba(a);
  throw a;
}
var Ta = a => a.startsWith("data:application/octet-stream;base64,"), sa = a => a.startsWith("file://");
function I(a, b) {
  return (...c) => {
    r(Ma, `native function \`${a}\` called before runtime initialization`);
    var d = K[a];
    r(d, `exported native function \`${a}\` not found`);
    r(c.length <= b, `native function \`${a}\` called with ${c.length} args but expects ${b}`);
    return d(...c);
  };
}
var Ua;
function Va(a) {
  if (a == Ua && ua) {
    return new Uint8Array(ua);
  }
  if (oa) {
    return oa(a);
  }
  throw "both async and sync fetching of the wasm failed";
}
function Wa(a) {
  return ua ? Promise.resolve().then(() => Va(a)) : na(a).then(b => new Uint8Array(b), () => Va(a));
}
function Xa(a, b, c) {
  return Wa(a).then(d => WebAssembly.instantiate(d, b)).then(c, d => {
    u(`failed to asynchronously prepare wasm: ${d}`);
    sa(Ua) && u(`warning: Loading from a file URI (${Ua}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
    g(d);
  });
}
function Ya(a, b) {
  var c = Ua;
  return ua || "function" != typeof WebAssembly.instantiateStreaming || Ta(c) || sa(c) || l || "function" != typeof fetch ? Xa(c, a, b) : fetch(c, {credentials:"same-origin"}).then(d => WebAssembly.instantiateStreaming(d, a).then(b, function(f) {
    u(`wasm streaming compile failed: ${f}`);
    u("falling back to ArrayBuffer instantiation");
    return Xa(c, a, b);
  }));
}
function v(a, b) {
  Object.getOwnPropertyDescriptor(e, a) || Object.defineProperty(e, a, {configurable:!0, get() {
    g(`\`Module.${a}\` has been replaced by \`${b}\`` + " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }});
}
function Za(a) {
  return "FS_createPath" === a || "FS_createDataFile" === a || "FS_createPreloadedFile" === a || "FS_unlink" === a || "addRunDependency" === a || "FS_createLazyFile" === a || "FS_createDevice" === a || "removeRunDependency" === a;
}
function $a(a, b) {
  "undefined" != typeof globalThis && Object.defineProperty(globalThis, a, {configurable:!0, get() {
    L(`\`${a}\` is not longer defined by emscripten. ${b}`);
  }});
}
$a("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
$a("asm", "Please use wasmExports instead");
function ab(a) {
  Object.getOwnPropertyDescriptor(e, a) || Object.defineProperty(e, a, {configurable:!0, get() {
    var b = `'${a}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
    Za(a) && (b += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
    g(b);
  }});
}
function bb(a) {
  this.name = "ExitStatus";
  this.message = `Program terminated with exit(${a})`;
  this.status = a;
}
var cb = a => {
  for (; 0 < a.length;) {
    a.shift()(e);
  }
}, db = e.noExitRuntime || !0, Fa = a => {
  r("number" === typeof a);
  return "0x" + (a >>> 0).toString(16).padStart(8, "0");
}, L = a => {
  L.ga || (L.ga = {});
  L.ga[a] || (L.ga[a] = 1, l && (a = "warning: " + a), u(a));
}, eb = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0, fb = (a, b) => {
  for (var c = b + NaN, d = b; a[d] && !(d >= c);) {
    ++d;
  }
  if (16 < d - b && a.buffer && eb) {
    return eb.decode(a.subarray(b, d));
  }
  for (c = ""; b < d;) {
    var f = a[b++];
    if (f & 128) {
      var h = a[b++] & 63;
      if (192 == (f & 224)) {
        c += String.fromCharCode((f & 31) << 6 | h);
      } else {
        var k = a[b++] & 63;
        224 == (f & 240) ? f = (f & 15) << 12 | h << 6 | k : (240 != (f & 248) && L("Invalid UTF-8 leading byte " + Fa(f) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), f = (f & 7) << 18 | h << 12 | k << 6 | a[b++] & 63);
        65536 > f ? c += String.fromCharCode(f) : (f -= 65536, c += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023));
      }
    } else {
      c += String.fromCharCode(f);
    }
  }
  return c;
}, M = a => {
  r("number" == typeof a, `UTF8ToString expects a number (got ${typeof a})`);
  return a ? fb(ya, a) : "";
}, gb = (a, b) => {
  for (var c = 0, d = a.length - 1; 0 <= d; d--) {
    var f = a[d];
    "." === f ? a.splice(d, 1) : ".." === f ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
  }
  if (b) {
    for (; c; c--) {
      a.unshift("..");
    }
  }
  return a;
}, N = a => {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = gb(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}, hb = a => {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b &&= b.substr(0, b.length - 1);
  return a + b;
}, O = a => {
  if ("/" === a) {
    return "/";
  }
  a = N(a);
  a = a.replace(/\/$/, "");
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}, ib = (a, b) => N(a + "/" + b), jb = () => {
  if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
    return c => crypto.getRandomValues(c);
  }
  if (l) {
    try {
      var a = require("crypto");
      if (a.randomFillSync) {
        return c => a.randomFillSync(c);
      }
      var b = a.randomBytes;
      return c => (c.set(b(c.byteLength)), c);
    } catch (c) {
    }
  }
  g("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
}, kb = a => (kb = jb())(a), Q = (...a) => {
  for (var b = "", c = !1, d = a.length - 1; -1 <= d && !c; d--) {
    c = 0 <= d ? a[d] : P.cwd();
    if ("string" != typeof c) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!c) {
      return "";
    }
    b = c + "/" + b;
    c = "/" === c.charAt(0);
  }
  b = gb(b.split("/").filter(f => !!f), !c).join("/");
  return (c ? "/" : "") + b || ".";
}, lb = (a, b) => {
  function c(k) {
    for (var n = 0; n < k.length && "" === k[n]; n++) {
    }
    for (var q = k.length - 1; 0 <= q && "" === k[q]; q--) {
    }
    return n > q ? [] : k.slice(n, q - n + 1);
  }
  a = Q(a).substr(1);
  b = Q(b).substr(1);
  a = c(a.split("/"));
  b = c(b.split("/"));
  for (var d = Math.min(a.length, b.length), f = d, h = 0; h < d; h++) {
    if (a[h] !== b[h]) {
      f = h;
      break;
    }
  }
  d = [];
  for (h = f; h < a.length; h++) {
    d.push("..");
  }
  d = d.concat(b.slice(f));
  return d.join("/");
}, mb = [], nb = a => {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var d = a.charCodeAt(c);
    127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
  }
  return b;
}, ob = (a, b, c, d) => {
  r("string" === typeof a, `stringToUTF8Array expects a string (got ${typeof a})`);
  if (!(0 < d)) {
    return 0;
  }
  var f = c;
  d = c + d - 1;
  for (var h = 0; h < a.length; ++h) {
    var k = a.charCodeAt(h);
    if (55296 <= k && 57343 >= k) {
      var n = a.charCodeAt(++h);
      k = 65536 + ((k & 1023) << 10) | n & 1023;
    }
    if (127 >= k) {
      if (c >= d) {
        break;
      }
      b[c++] = k;
    } else {
      if (2047 >= k) {
        if (c + 1 >= d) {
          break;
        }
        b[c++] = 192 | k >> 6;
      } else {
        if (65535 >= k) {
          if (c + 2 >= d) {
            break;
          }
          b[c++] = 224 | k >> 12;
        } else {
          if (c + 3 >= d) {
            break;
          }
          1114111 < k && L("Invalid Unicode code point " + Fa(k) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
          b[c++] = 240 | k >> 18;
          b[c++] = 128 | k >> 12 & 63;
        }
        b[c++] = 128 | k >> 6 & 63;
      }
      b[c++] = 128 | k & 63;
    }
  }
  b[c] = 0;
  return c - f;
};
function pb(a) {
  var b = Array(nb(a) + 1);
  a = ob(a, b, 0, b.length);
  b.length = a;
  return b;
}
var qb = [];
function rb(a, b) {
  qb[a] = {input:[], output:[], I:b};
  sb(a, tb);
}
var tb = {open(a) {
  var b = qb[a.node.rdev];
  if (!b) {
    throw new P.g(43);
  }
  a.tty = b;
  a.seekable = !1;
}, close(a) {
  a.tty.I.fsync(a.tty);
}, fsync(a) {
  a.tty.I.fsync(a.tty);
}, read(a, b, c, d) {
  if (!a.tty || !a.tty.I.na) {
    throw new P.g(60);
  }
  for (var f = 0, h = 0; h < d; h++) {
    try {
      var k = a.tty.I.na(a.tty);
    } catch (n) {
      throw new P.g(29);
    }
    if (void 0 === k && 0 === f) {
      throw new P.g(6);
    }
    if (null === k || void 0 === k) {
      break;
    }
    f++;
    b[c + h] = k;
  }
  f && (a.node.timestamp = Date.now());
  return f;
}, write(a, b, c, d) {
  if (!a.tty || !a.tty.I.da) {
    throw new P.g(60);
  }
  try {
    for (var f = 0; f < d; f++) {
      a.tty.I.da(a.tty, b[c + f]);
    }
  } catch (h) {
    throw new P.g(29);
  }
  d && (a.node.timestamp = Date.now());
  return f;
},}, ub = {na() {
  a: {
    if (!mb.length) {
      var a = null;
      if (l) {
        var b = Buffer.alloc(256), c = 0, d = process.stdin.fd;
        try {
          c = fs.readSync(d, b, 0, 256);
        } catch (f) {
          if (f.toString().includes("EOF")) {
            c = 0;
          } else {
            throw f;
          }
        }
        0 < c && (a = b.slice(0, c).toString("utf-8"));
      } else {
        "undefined" != typeof window && "function" == typeof window.prompt && (a = window.prompt("Input: "), null !== a && (a += "\n"));
      }
      if (!a) {
        a = null;
        break a;
      }
      mb = pb(a);
    }
    a = mb.shift();
  }
  return a;
}, da(a, b) {
  null === b || 10 === b ? (ta(fb(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, fsync(a) {
  a.output && 0 < a.output.length && (ta(fb(a.output, 0)), a.output = []);
}, Ea() {
  return {Ta:25856, Va:5, Sa:191, Ua:35387, Ra:[3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]};
}, Fa() {
  return 0;
}, Ga() {
  return [24, 80];
},}, vb = {da(a, b) {
  null === b || 10 === b ? (u(fb(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, fsync(a) {
  a.output && 0 < a.output.length && (u(fb(a.output, 0)), a.output = []);
},}, wb = () => {
  g("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported");
};
function xb(a, b) {
  var c = a.j ? a.j.length : 0;
  c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.j, a.j = new Uint8Array(b), 0 < a.m && a.j.set(c.subarray(0, a.m), 0));
}
var R = {F:null, o() {
  return R.createNode(null, "/", 16895, 0);
}, createNode(a, b, c, d) {
  if (24576 === (c & 61440) || P.isFIFO(c)) {
    throw new P.g(63);
  }
  R.F || (R.F = {dir:{node:{C:R.h.C, s:R.h.s, lookup:R.h.lookup, H:R.h.H, rename:R.h.rename, unlink:R.h.unlink, rmdir:R.h.rmdir, readdir:R.h.readdir, symlink:R.h.symlink}, stream:{u:R.i.u}}, file:{node:{C:R.h.C, s:R.h.s}, stream:{u:R.i.u, read:R.i.read, write:R.i.write, O:R.i.O, N:R.i.N, R:R.i.R}}, link:{node:{C:R.h.C, s:R.h.s, readlink:R.h.readlink}, stream:{}}, ia:{node:{C:R.h.C, s:R.h.s}, stream:P.za}});
  c = P.createNode(a, b, c, d);
  S(c.mode) ? (c.h = R.F.dir.node, c.i = R.F.dir.stream, c.j = {}) : P.isFile(c.mode) ? (c.h = R.F.file.node, c.i = R.F.file.stream, c.m = 0, c.j = null) : 40960 === (c.mode & 61440) ? (c.h = R.F.link.node, c.i = R.F.link.stream) : 8192 === (c.mode & 61440) && (c.h = R.F.ia.node, c.i = R.F.ia.stream);
  c.timestamp = Date.now();
  a && (a.j[b] = c, a.timestamp = c.timestamp);
  return c;
}, ab(a) {
  return a.j ? a.j.subarray ? a.j.subarray(0, a.m) : new Uint8Array(a.j) : new Uint8Array(0);
}, h:{C(a) {
  var b = {};
  b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
  b.ino = a.id;
  b.mode = a.mode;
  b.nlink = 1;
  b.uid = 0;
  b.gid = 0;
  b.rdev = a.rdev;
  S(a.mode) ? b.size = 4096 : P.isFile(a.mode) ? b.size = a.m : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
  b.atime = new Date(a.timestamp);
  b.mtime = new Date(a.timestamp);
  b.ctime = new Date(a.timestamp);
  b.xa = 4096;
  b.blocks = Math.ceil(b.size / b.xa);
  return b;
}, s(a, b) {
  void 0 !== b.mode && (a.mode = b.mode);
  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  if (void 0 !== b.size && (b = b.size, a.m != b)) {
    if (0 == b) {
      a.j = null, a.m = 0;
    } else {
      var c = a.j;
      a.j = new Uint8Array(b);
      c && a.j.set(c.subarray(0, Math.min(b, a.m)));
      a.m = b;
    }
  }
}, lookup() {
  throw P.Y[44];
}, H(a, b, c, d) {
  return R.createNode(a, b, c, d);
}, rename(a, b, c) {
  if (S(a.mode)) {
    try {
      var d = T(b, c);
    } catch (h) {
    }
    if (d) {
      for (var f in d.j) {
        throw new P.g(55);
      }
    }
  }
  delete a.parent.j[a.name];
  a.parent.timestamp = Date.now();
  a.name = c;
  b.j[c] = a;
  b.timestamp = a.parent.timestamp;
}, unlink(a, b) {
  delete a.j[b];
  a.timestamp = Date.now();
}, rmdir(a, b) {
  var c = T(a, b), d;
  for (d in c.j) {
    throw new P.g(55);
  }
  delete a.j[b];
  a.timestamp = Date.now();
}, readdir(a) {
  var b = [".", ".."], c;
  for (c of Object.keys(a.j)) {
    b.push(c);
  }
  return b;
}, symlink(a, b, c) {
  a = R.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, readlink(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new P.g(28);
  }
  return a.link;
},}, i:{read(a, b, c, d, f) {
  var h = a.node.j;
  if (f >= a.node.m) {
    return 0;
  }
  a = Math.min(a.node.m - f, d);
  r(0 <= a);
  if (8 < a && h.subarray) {
    b.set(h.subarray(f, f + a), c);
  } else {
    for (d = 0; d < a; d++) {
      b[c + d] = h[f + d];
    }
  }
  return a;
}, write(a, b, c, d, f, h) {
  r(!(b instanceof ArrayBuffer));
  b.buffer === x.buffer && (h = !1);
  if (!d) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (b.subarray && (!a.j || a.j.subarray)) {
    if (h) {
      return r(0 === f, "canOwn must imply no weird position inside the file"), a.j = b.subarray(c, c + d), a.m = d;
    }
    if (0 === a.m && 0 === f) {
      return a.j = b.slice(c, c + d), a.m = d;
    }
    if (f + d <= a.m) {
      return a.j.set(b.subarray(c, c + d), f), d;
    }
  }
  xb(a, f + d);
  if (a.j.subarray && b.subarray) {
    a.j.set(b.subarray(c, c + d), f);
  } else {
    for (h = 0; h < d; h++) {
      a.j[f + h] = b[c + h];
    }
  }
  a.m = Math.max(a.m, f + d);
  return d;
}, u(a, b, c) {
  1 === c ? b += a.position : 2 === c && P.isFile(a.node.mode) && (b += a.node.m);
  if (0 > b) {
    throw new P.g(28);
  }
  return b;
}, O(a, b, c) {
  xb(a.node, b + c);
  a.node.m = Math.max(a.node.m, b + c);
}, N(a, b, c, d, f) {
  if (!P.isFile(a.node.mode)) {
    throw new P.g(43);
  }
  a = a.node.j;
  if (f & 2 || a.buffer !== x.buffer) {
    if (0 < c || c + b < a.length) {
      a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
    }
    c = !0;
    b = wb();
    if (!b) {
      throw new P.g(48);
    }
    x.set(a, b);
  } else {
    c = !1, b = a.byteOffset;
  }
  return {Oa:b, wa:c};
}, R(a, b, c, d) {
  R.i.write(a, b, 0, d, c, !1);
  return 0;
},},}, yb = (a, b, c) => {
  var d = Qa(`al ${a}`);
  na(a).then(f => {
    r(f, `Loading data file "${a}" failed (no arrayBuffer).`);
    b(new Uint8Array(f));
    d && Sa(d);
  }, () => {
    if (c) {
      c();
    } else {
      throw `Loading data file "${a}" failed.`;
    }
  });
  d && Ra(d);
}, zb = e.preloadPlugins || [], Ab = (a, b, c, d) => {
  "undefined" != typeof Browser && Browser.M();
  var f = !1;
  zb.forEach(h => {
    !f && h.canHandle(b) && (h.handle(a, b, c, d), f = !0);
  });
  return f;
}, Bb = (a, b, c, d, f, h, k, n, q, t) => {
  function A(E) {
    function C(F) {
      t?.();
      n || P.T(a, b, F, d, f, q);
      h?.();
      Sa(w);
    }
    Ab(E, p, C, () => {
      k?.();
      Sa(w);
    }) || C(E);
  }
  var p = b ? Q(N(a + "/" + b)) : a, w = Qa(`cp ${p}`);
  Ra(w);
  "string" == typeof c ? yb(c, A, k) : A(c);
}, Cb = (a, b) => {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
}, Db = {EPERM:63, ENOENT:44, ESRCH:71, EINTR:27, EIO:29, ENXIO:60, E2BIG:1, ENOEXEC:45, EBADF:8, ECHILD:12, EAGAIN:6, EWOULDBLOCK:6, ENOMEM:48, EACCES:2, EFAULT:21, ENOTBLK:105, EBUSY:10, EEXIST:20, EXDEV:75, ENODEV:43, ENOTDIR:54, EISDIR:31, EINVAL:28, ENFILE:41, EMFILE:33, ENOTTY:59, ETXTBSY:74, EFBIG:22, ENOSPC:51, ESPIPE:70, EROFS:69, EMLINK:34, EPIPE:64, EDOM:18, ERANGE:68, ENOMSG:49, EIDRM:24, ECHRNG:106, EL2NSYNC:156, EL3HLT:107, EL3RST:108, ELNRNG:109, EUNATCH:110, ENOCSI:111, EL2HLT:112, 
EDEADLK:16, ENOLCK:46, EBADE:113, EBADR:114, EXFULL:115, ENOANO:104, EBADRQC:103, EBADSLT:102, EDEADLOCK:16, EBFONT:101, ENOSTR:100, ENODATA:116, ETIME:117, ENOSR:118, ENONET:119, ENOPKG:120, EREMOTE:121, ENOLINK:47, EADV:122, ESRMNT:123, ECOMM:124, EPROTO:65, EMULTIHOP:36, EDOTDOT:125, EBADMSG:9, ENOTUNIQ:126, EBADFD:127, EREMCHG:128, ELIBACC:129, ELIBBAD:130, ELIBSCN:131, ELIBMAX:132, ELIBEXEC:133, ENOSYS:52, ENOTEMPTY:55, ENAMETOOLONG:37, ELOOP:32, EOPNOTSUPP:138, EPFNOSUPPORT:139, ECONNRESET:15, 
ENOBUFS:42, EAFNOSUPPORT:5, EPROTOTYPE:67, ENOTSOCK:57, ENOPROTOOPT:50, ESHUTDOWN:140, ECONNREFUSED:14, EADDRINUSE:3, ECONNABORTED:13, ENETUNREACH:40, ENETDOWN:38, ETIMEDOUT:73, EHOSTDOWN:142, EHOSTUNREACH:23, EINPROGRESS:26, EALREADY:7, EDESTADDRREQ:17, EMSGSIZE:35, EPROTONOSUPPORT:66, ESOCKTNOSUPPORT:137, EADDRNOTAVAIL:4, ENETRESET:39, EISCONN:30, ENOTCONN:53, ETOOMANYREFS:141, EUSERS:136, EDQUOT:19, ESTALE:72, ENOTSUP:138, ENOMEDIUM:148, EILSEQ:25, EOVERFLOW:61, ECANCELED:11, ENOTRECOVERABLE:56, 
EOWNERDEAD:62, ESTRPIPE:135,};
function sb(a, b) {
  P.la[a] = {i:b};
}
function S(a) {
  return 16384 === (a & 61440);
}
function T(a, b) {
  var c = S(a.mode) ? (c = Eb(a, "x")) ? c : a.h.lookup ? 0 : 2 : 54;
  if (c) {
    throw new P.g(c);
  }
  for (c = P.D[Fb(a.id, b)]; c; c = c.L) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) {
      return c;
    }
  }
  return P.lookup(a, b);
}
function U(a, b = {}) {
  a = Q(a);
  if (!a) {
    return {path:"", node:null};
  }
  b = Object.assign({X:!0, fa:0}, b);
  if (8 < b.fa) {
    throw new P.g(32);
  }
  a = a.split("/").filter(k => !!k);
  for (var c = P.root, d = "/", f = 0; f < a.length; f++) {
    var h = f === a.length - 1;
    if (h && b.parent) {
      break;
    }
    c = T(c, a[f]);
    d = N(d + "/" + a[f]);
    c.v && (!h || h && b.X) && (c = c.v.root);
    if (!h || b.B) {
      for (h = 0; 40960 === (c.mode & 61440);) {
        if (c = P.readlink(d), d = Q(hb(d), c), c = U(d, {fa:b.fa + 1}).node, 40 < h++) {
          throw new P.g(32);
        }
      }
    }
  }
  return {path:d, node:c};
}
function Gb(a) {
  for (var b;;) {
    if (P.V(a)) {
      return a = a.o.sa, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
    }
    b = b ? `${a.name}/${b}` : a.name;
    a = a.parent;
  }
}
function Fb(a, b) {
  for (var c = 0, d = 0; d < b.length; d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0;
  }
  return (a + c >>> 0) % P.D.length;
}
function Hb(a) {
  var b = Fb(a.parent.id, a.name);
  a.L = P.D[b];
  P.D[b] = a;
}
function Ib(a) {
  var b = Fb(a.parent.id, a.name);
  if (P.D[b] === a) {
    P.D[b] = a.L;
  } else {
    for (b = P.D[b]; b;) {
      if (b.L === a) {
        b.L = a.L;
        break;
      }
      b = b.L;
    }
  }
}
function Jb(a) {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}
function Eb(a, b) {
  if (P.oa) {
    return 0;
  }
  if (!b.includes("r") || a.mode & 292) {
    if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
      return 2;
    }
  } else {
    return 2;
  }
  return 0;
}
function Kb(a, b) {
  try {
    return T(a, b), 20;
  } catch (c) {
  }
  return Eb(a, "wx");
}
function Lb(a, b, c) {
  try {
    var d = T(a, b);
  } catch (f) {
    return f.l;
  }
  if (a = Eb(a, "wx")) {
    return a;
  }
  if (c) {
    if (!S(d.mode)) {
      return 54;
    }
    if (P.V(d) || Gb(d) === P.cwd()) {
      return 10;
    }
  } else {
    if (S(d.mode)) {
      return 31;
    }
  }
  return 0;
}
function V(a) {
  a = P.ma(a);
  if (!a) {
    throw new P.g(8);
  }
  return a;
}
function Mb(a, b = -1) {
  r(-1 <= b);
  a = Object.assign(new P.va(), a);
  if (-1 == b) {
    a: {
      for (b = 0; b <= P.ha; b++) {
        if (!P.streams[b]) {
          break a;
        }
      }
      throw new P.g(33);
    }
  }
  a.fd = b;
  return P.streams[b] = a;
}
function Nb(a, b = -1) {
  a = Mb(a, b);
  a.i?.Ya?.(a);
  return a;
}
function Ob(a) {
  var b = [];
  for (a = [a]; a.length;) {
    var c = a.pop();
    b.push(c);
    a.push(...c.P);
  }
  return b;
}
function Pb(a, b, c) {
  "undefined" == typeof c && (c = b, b = 438);
  return P.H(a, b | 8192, c);
}
function Qb(a, b) {
  try {
    var c = U(a, {B:!b});
    a = c.path;
  } catch (f) {
  }
  var d = {V:!1, exists:!1, error:0, name:null, path:null, object:null, La:!1, Na:null, Ma:null};
  try {
    c = U(a, {parent:!0}), d.La = !0, d.Na = c.path, d.Ma = c.node, d.name = O(a), c = U(a, {B:!b}), d.exists = !0, d.path = c.path, d.object = c.node, d.name = c.node.name, d.V = "/" === c.path;
  } catch (f) {
    d.error = f.l;
  }
  return d;
}
function Rb(a, b, c, d) {
  a = "string" == typeof a ? a : Gb(a);
  b = N(a + "/" + b);
  return P.create(b, Cb(c, d));
}
function Sb(a) {
  if (!(a.Ha || a.Ia || a.link || a.j)) {
    if ("undefined" != typeof XMLHttpRequest) {
      throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    }
    try {
      a.j = oa(a.url), a.m = a.j.length;
    } catch (b) {
      throw new P.g(29);
    }
  }
}
var P = {root:null, P:[], la:{}, streams:[], Ja:1, D:null, ka:"/", U:!1, oa:!0, g:class extends Error {
  constructor(a) {
    super(Ma ? M(Tb(a)) : "");
    this.name = "ErrnoError";
    this.l = a;
    for (var b in Db) {
      if (Db[b] === a) {
        this.code = b;
        break;
      }
    }
  }
}, Y:{}, Ca:null, S:0, va:class {
  constructor() {
    this.G = {};
    this.node = null;
  }
  get object() {
    return this.node;
  }
  set object(a) {
    this.node = a;
  }
  get flags() {
    return this.G.flags;
  }
  set flags(a) {
    this.G.flags = a;
  }
  get position() {
    return this.G.position;
  }
  set position(a) {
    this.G.position = a;
  }
}, ua:class {
  constructor(a, b, c, d) {
    a ||= this;
    this.parent = a;
    this.o = a.o;
    this.v = null;
    this.id = P.Ja++;
    this.name = b;
    this.mode = c;
    this.h = {};
    this.i = {};
    this.rdev = d;
  }
  get read() {
    return 365 === (this.mode & 365);
  }
  set read(a) {
    a ? this.mode |= 365 : this.mode &= -366;
  }
  get write() {
    return 146 === (this.mode & 146);
  }
  set write(a) {
    a ? this.mode |= 146 : this.mode &= -147;
  }
  get Ia() {
    return S(this.mode);
  }
  get Ha() {
    return 8192 === (this.mode & 61440);
  }
}, createNode(a, b, c, d) {
  r("object" == typeof a);
  a = new P.ua(a, b, c, d);
  Hb(a);
  return a;
}, V(a) {
  return a === a.parent;
}, isFile(a) {
  return 32768 === (a & 61440);
}, isFIFO(a) {
  return 4096 === (a & 61440);
}, isSocket(a) {
  return 49152 === (a & 49152);
}, ha:4096, ma:a => P.streams[a], za:{open(a) {
  a.i = P.Da(a.node.rdev).i;
  a.i.open?.(a);
}, u() {
  throw new P.g(70);
},}, ba:a => a >> 8, cb:a => a & 255, K:(a, b) => a << 8 | b, Da:a => P.la[a], ta(a, b) {
  function c(k) {
    r(0 < P.S);
    P.S--;
    return b(k);
  }
  function d(k) {
    if (k) {
      if (!d.Ba) {
        return d.Ba = !0, c(k);
      }
    } else {
      ++h >= f.length && c(null);
    }
  }
  "function" == typeof a && (b = a, a = !1);
  P.S++;
  1 < P.S && u(`warning: ${P.S} FS.syncfs operations in flight at once, probably just doing extra work`);
  var f = Ob(P.root.o), h = 0;
  f.forEach(k => {
    if (!k.type.ta) {
      return d(null);
    }
    k.type.ta(k, a, d);
  });
}, o(a, b, c) {
  if ("string" == typeof a) {
    throw a;
  }
  var d = "/" === c, f = !c;
  if (d && P.root) {
    throw new P.g(10);
  }
  if (!d && !f) {
    var h = U(c, {X:!1});
    c = h.path;
    h = h.node;
    if (h.v) {
      throw new P.g(10);
    }
    if (!S(h.mode)) {
      throw new P.g(54);
    }
  }
  b = {type:a, gb:b, sa:c, P:[]};
  a = a.o(b);
  a.o = b;
  b.root = a;
  d ? P.root = a : h && (h.v = b, h.o && h.o.P.push(b));
  return a;
}, jb(a) {
  a = U(a, {X:!1});
  if (!a.node.v) {
    throw new P.g(28);
  }
  a = a.node;
  var b = a.v, c = Ob(b);
  Object.keys(P.D).forEach(d => {
    for (d = P.D[d]; d;) {
      var f = d.L;
      c.includes(d.o) && Ib(d);
      d = f;
    }
  });
  a.v = null;
  b = a.o.P.indexOf(b);
  r(-1 !== b);
  a.o.P.splice(b, 1);
}, lookup(a, b) {
  return a.h.lookup(a, b);
}, H(a, b, c) {
  var d = U(a, {parent:!0}).node;
  a = O(a);
  if (!a || "." === a || ".." === a) {
    throw new P.g(28);
  }
  var f = Kb(d, a);
  if (f) {
    throw new P.g(f);
  }
  if (!d.h.H) {
    throw new P.g(63);
  }
  return d.h.H(d, a, b, c);
}, create(a, b) {
  return P.H(a, (void 0 !== b ? b : 438) & 4095 | 32768, 0);
}, mkdir(a, b) {
  return P.H(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0);
}, eb(a, b) {
  a = a.split("/");
  for (var c = "", d = 0; d < a.length; ++d) {
    if (a[d]) {
      c += "/" + a[d];
      try {
        P.mkdir(c, b);
      } catch (f) {
        if (20 != f.l) {
          throw f;
        }
      }
    }
  }
}, symlink(a, b) {
  if (!Q(a)) {
    throw new P.g(44);
  }
  var c = U(b, {parent:!0}).node;
  if (!c) {
    throw new P.g(44);
  }
  b = O(b);
  var d = Kb(c, b);
  if (d) {
    throw new P.g(d);
  }
  if (!c.h.symlink) {
    throw new P.g(63);
  }
  return c.h.symlink(c, b, a);
}, rename(a, b) {
  var c = hb(a), d = hb(b), f = O(a), h = O(b);
  var k = U(a, {parent:!0});
  var n = k.node;
  k = U(b, {parent:!0});
  k = k.node;
  if (!n || !k) {
    throw new P.g(44);
  }
  if (n.o !== k.o) {
    throw new P.g(75);
  }
  var q = T(n, f);
  a = lb(a, d);
  if ("." !== a.charAt(0)) {
    throw new P.g(28);
  }
  a = lb(b, c);
  if ("." !== a.charAt(0)) {
    throw new P.g(55);
  }
  try {
    var t = T(k, h);
  } catch (A) {
  }
  if (q !== t) {
    b = S(q.mode);
    if (f = Lb(n, f, b)) {
      throw new P.g(f);
    }
    if (f = t ? Lb(k, h, b) : Kb(k, h)) {
      throw new P.g(f);
    }
    if (!n.h.rename) {
      throw new P.g(63);
    }
    if (q.v || t && t.v) {
      throw new P.g(10);
    }
    if (k !== n && (f = Eb(n, "w"))) {
      throw new P.g(f);
    }
    Ib(q);
    try {
      n.h.rename(q, k, h), q.parent = k;
    } catch (A) {
      throw A;
    } finally {
      Hb(q);
    }
  }
}, rmdir(a) {
  var b = U(a, {parent:!0}).node;
  a = O(a);
  var c = T(b, a), d = Lb(b, a, !0);
  if (d) {
    throw new P.g(d);
  }
  if (!b.h.rmdir) {
    throw new P.g(63);
  }
  if (c.v) {
    throw new P.g(10);
  }
  b.h.rmdir(b, a);
  Ib(c);
}, readdir(a) {
  a = U(a, {B:!0}).node;
  if (!a.h.readdir) {
    throw new P.g(54);
  }
  return a.h.readdir(a);
}, unlink(a) {
  var b = U(a, {parent:!0}).node;
  if (!b) {
    throw new P.g(44);
  }
  a = O(a);
  var c = T(b, a), d = Lb(b, a, !1);
  if (d) {
    throw new P.g(d);
  }
  if (!b.h.unlink) {
    throw new P.g(63);
  }
  if (c.v) {
    throw new P.g(10);
  }
  b.h.unlink(b, a);
  Ib(c);
}, readlink(a) {
  a = U(a).node;
  if (!a) {
    throw new P.g(44);
  }
  if (!a.h.readlink) {
    throw new P.g(28);
  }
  return Q(Gb(a.parent), a.h.readlink(a));
}, stat(a, b) {
  a = U(a, {B:!b}).node;
  if (!a) {
    throw new P.g(44);
  }
  if (!a.h.C) {
    throw new P.g(63);
  }
  return a.h.C(a);
}, lstat(a) {
  return P.stat(a, !0);
}, chmod(a, b, c) {
  a = "string" == typeof a ? U(a, {B:!c}).node : a;
  if (!a.h.s) {
    throw new P.g(63);
  }
  a.h.s(a, {mode:b & 4095 | a.mode & -4096, timestamp:Date.now()});
}, lchmod(a, b) {
  P.chmod(a, b, !0);
}, fchmod(a, b) {
  a = V(a);
  P.chmod(a.node, b);
}, chown(a, b, c, d) {
  a = "string" == typeof a ? U(a, {B:!d}).node : a;
  if (!a.h.s) {
    throw new P.g(63);
  }
  a.h.s(a, {timestamp:Date.now()});
}, lchown(a, b, c) {
  P.chown(a, b, c, !0);
}, fchown(a, b, c) {
  a = V(a);
  P.chown(a.node, b, c);
}, truncate(a, b) {
  if (0 > b) {
    throw new P.g(28);
  }
  a = "string" == typeof a ? U(a, {B:!0}).node : a;
  if (!a.h.s) {
    throw new P.g(63);
  }
  if (S(a.mode)) {
    throw new P.g(31);
  }
  if (!P.isFile(a.mode)) {
    throw new P.g(28);
  }
  var c = Eb(a, "w");
  if (c) {
    throw new P.g(c);
  }
  a.h.s(a, {size:b, timestamp:Date.now()});
}, $a(a, b) {
  a = V(a);
  if (0 === (a.flags & 2097155)) {
    throw new P.g(28);
  }
  P.truncate(a.node, b);
}, kb(a, b, c) {
  a = U(a, {B:!0}).node;
  a.h.s(a, {timestamp:Math.max(b, c)});
}, open(a, b, c) {
  if ("" === a) {
    throw new P.g(44);
  }
  if ("string" == typeof b) {
    var d = {r:0, "r+":2, w:577, "w+":578, a:1089, "a+":1090,}[b];
    if ("undefined" == typeof d) {
      throw Error(`Unknown file open mode: ${b}`);
    }
    b = d;
  }
  c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
  if ("object" == typeof a) {
    var f = a;
  } else {
    a = N(a);
    try {
      f = U(a, {B:!(b & 131072)}).node;
    } catch (h) {
    }
  }
  d = !1;
  if (b & 64) {
    if (f) {
      if (b & 128) {
        throw new P.g(20);
      }
    } else {
      f = P.H(a, c, 0), d = !0;
    }
  }
  if (!f) {
    throw new P.g(44);
  }
  8192 === (f.mode & 61440) && (b &= -513);
  if (b & 65536 && !S(f.mode)) {
    throw new P.g(54);
  }
  if (!d && (c = f ? 40960 === (f.mode & 61440) ? 32 : S(f.mode) && ("r" !== Jb(b) || b & 512) ? 31 : Eb(f, Jb(b)) : 44)) {
    throw new P.g(c);
  }
  b & 512 && !d && P.truncate(f, 0);
  b &= -131713;
  f = Mb({node:f, path:Gb(f), flags:b, seekable:!0, position:0, i:f.i, Pa:[], error:!1});
  f.i.open && f.i.open(f);
  !e.logReadFiles || b & 1 || (P.ea || (P.ea = {}), a in P.ea || (P.ea[a] = 1));
  return f;
}, close(a) {
  if (null === a.fd) {
    throw new P.g(8);
  }
  a.J && (a.J = null);
  try {
    a.i.close && a.i.close(a);
  } catch (b) {
    throw b;
  } finally {
    P.streams[a.fd] = null;
  }
  a.fd = null;
}, u(a, b, c) {
  if (null === a.fd) {
    throw new P.g(8);
  }
  if (!a.seekable || !a.i.u) {
    throw new P.g(70);
  }
  if (0 != c && 1 != c && 2 != c) {
    throw new P.g(28);
  }
  a.position = a.i.u(a, b, c);
  a.Pa = [];
  return a.position;
}, read(a, b, c, d, f) {
  r(0 <= c);
  if (0 > d || 0 > f) {
    throw new P.g(28);
  }
  if (null === a.fd) {
    throw new P.g(8);
  }
  if (1 === (a.flags & 2097155)) {
    throw new P.g(8);
  }
  if (S(a.node.mode)) {
    throw new P.g(31);
  }
  if (!a.i.read) {
    throw new P.g(28);
  }
  var h = "undefined" != typeof f;
  if (!h) {
    f = a.position;
  } else if (!a.seekable) {
    throw new P.g(70);
  }
  b = a.i.read(a, b, c, d, f);
  h || (a.position += b);
  return b;
}, write(a, b, c, d, f, h) {
  r(0 <= c);
  if (0 > d || 0 > f) {
    throw new P.g(28);
  }
  if (null === a.fd) {
    throw new P.g(8);
  }
  if (0 === (a.flags & 2097155)) {
    throw new P.g(8);
  }
  if (S(a.node.mode)) {
    throw new P.g(31);
  }
  if (!a.i.write) {
    throw new P.g(28);
  }
  a.seekable && a.flags & 1024 && P.u(a, 0, 2);
  var k = "undefined" != typeof f;
  if (!k) {
    f = a.position;
  } else if (!a.seekable) {
    throw new P.g(70);
  }
  b = a.i.write(a, b, c, d, f, h);
  k || (a.position += b);
  return b;
}, O(a, b, c) {
  if (null === a.fd) {
    throw new P.g(8);
  }
  if (0 > b || 0 >= c) {
    throw new P.g(28);
  }
  if (0 === (a.flags & 2097155)) {
    throw new P.g(8);
  }
  if (!P.isFile(a.node.mode) && !S(a.node.mode)) {
    throw new P.g(43);
  }
  if (!a.i.O) {
    throw new P.g(138);
  }
  a.i.O(a, b, c);
}, N(a, b, c, d, f) {
  if (0 !== (d & 2) && 0 === (f & 2) && 2 !== (a.flags & 2097155)) {
    throw new P.g(2);
  }
  if (1 === (a.flags & 2097155)) {
    throw new P.g(2);
  }
  if (!a.i.N) {
    throw new P.g(43);
  }
  return a.i.N(a, b, c, d, f);
}, R(a, b, c, d, f) {
  r(0 <= c);
  return a.i.R ? a.i.R(a, b, c, d, f) : 0;
}, aa(a, b, c) {
  if (!a.i.aa) {
    throw new P.g(59);
  }
  return a.i.aa(a, b, c);
}, readFile(a, b = {}) {
  b.flags = b.flags || 0;
  b.encoding = b.encoding || "binary";
  if ("utf8" !== b.encoding && "binary" !== b.encoding) {
    throw Error(`Invalid encoding type "${b.encoding}"`);
  }
  var c, d = P.open(a, b.flags);
  a = P.stat(a).size;
  var f = new Uint8Array(a);
  P.read(d, f, 0, a, 0);
  "utf8" === b.encoding ? c = fb(f, 0) : "binary" === b.encoding && (c = f);
  P.close(d);
  return c;
}, writeFile(a, b, c = {}) {
  c.flags = c.flags || 577;
  a = P.open(a, c.flags, c.mode);
  if ("string" == typeof b) {
    var d = new Uint8Array(nb(b) + 1);
    b = ob(b, d, 0, d.length);
    P.write(a, d, 0, b, void 0, c.ya);
  } else if (ArrayBuffer.isView(b)) {
    P.write(a, b, 0, b.byteLength, void 0, c.ya);
  } else {
    throw Error("Unsupported data type");
  }
  P.close(a);
}, cwd:() => P.ka, chdir(a) {
  a = U(a, {B:!0});
  if (null === a.node) {
    throw new P.g(44);
  }
  if (!S(a.node.mode)) {
    throw new P.g(54);
  }
  var b = Eb(a.node, "x");
  if (b) {
    throw new P.g(b);
  }
  P.ka = a.path;
}, M(a, b, c) {
  r(!P.M.U, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
  P.M.U = !0;
  e.stdin = a || e.stdin;
  e.stdout = b || e.stdout;
  e.stderr = c || e.stderr;
  e.stdin ? P.A("/dev", "stdin", e.stdin) : P.symlink("/dev/tty", "/dev/stdin");
  e.stdout ? P.A("/dev", "stdout", null, e.stdout) : P.symlink("/dev/tty", "/dev/stdout");
  e.stderr ? P.A("/dev", "stderr", null, e.stderr) : P.symlink("/dev/tty1", "/dev/stderr");
  a = P.open("/dev/stdin", 0);
  b = P.open("/dev/stdout", 1);
  c = P.open("/dev/stderr", 1);
  r(0 === a.fd, `invalid handle for stdin (${a.fd})`);
  r(1 === b.fd, `invalid handle for stdout (${b.fd})`);
  r(2 === c.fd, `invalid handle for stderr (${c.fd})`);
}, hb() {
  P.M.U = !1;
  Ub(0);
  for (var a = 0; a < P.streams.length; a++) {
    var b = P.streams[a];
    b && P.close(b);
  }
}, Za(a, b) {
  a = Qb(a, b);
  return a.exists ? a.object : null;
}, W(a, b) {
  a = "string" == typeof a ? a : Gb(a);
  for (b = b.split("/").reverse(); b.length;) {
    var c = b.pop();
    if (c) {
      var d = N(a + "/" + c);
      try {
        P.mkdir(d);
      } catch (f) {
      }
      a = d;
    }
  }
  return d;
}, T(a, b, c, d, f, h) {
  var k = b;
  a && (a = "string" == typeof a ? a : Gb(a), k = b ? N(a + "/" + b) : a);
  a = Cb(d, f);
  k = P.create(k, a);
  if (c) {
    if ("string" == typeof c) {
      b = Array(c.length);
      d = 0;
      for (f = c.length; d < f; ++d) {
        b[d] = c.charCodeAt(d);
      }
      c = b;
    }
    P.chmod(k, a | 146);
    b = P.open(k, 577);
    P.write(b, c, 0, c.length, 0, h);
    P.close(b);
    P.chmod(k, a);
  }
}, A(a, b, c, d) {
  a = ib("string" == typeof a ? a : Gb(a), b);
  b = Cb(!!c, !!d);
  P.A.ba || (P.A.ba = 64);
  var f = P.K(P.A.ba++, 0);
  sb(f, {open(h) {
    h.seekable = !1;
  }, close() {
    d?.buffer?.length && d(10);
  }, read(h, k, n, q) {
    for (var t = 0, A = 0; A < q; A++) {
      try {
        var p = c();
      } catch (w) {
        throw new P.g(29);
      }
      if (void 0 === p && 0 === t) {
        throw new P.g(6);
      }
      if (null === p || void 0 === p) {
        break;
      }
      t++;
      k[n + A] = p;
    }
    t && (h.node.timestamp = Date.now());
    return t;
  }, write(h, k, n, q) {
    for (var t = 0; t < q; t++) {
      try {
        d(k[n + t]);
      } catch (A) {
        throw new P.g(29);
      }
    }
    q && (h.node.timestamp = Date.now());
    return t;
  }});
  return Pb(a, b, f);
}, ja(a, b, c, d, f) {
  function h(p, w, E, C, F) {
    p = p.node.j;
    if (F >= p.length) {
      return 0;
    }
    C = Math.min(p.length - F, C);
    r(0 <= C);
    if (p.slice) {
      for (var G = 0; G < C; G++) {
        w[E + G] = p[F + G];
      }
    } else {
      for (G = 0; G < C; G++) {
        w[E + G] = p.get(F + G);
      }
    }
    return C;
  }
  class k {
    constructor() {
      this.$ = !1;
      this.G = [];
      this.Z = void 0;
      this.pa = this.qa = 0;
    }
    get(p) {
      if (!(p > this.length - 1 || 0 > p)) {
        var w = p % this.chunkSize;
        return this.Z(p / this.chunkSize | 0)[w];
      }
    }
    Ka(p) {
      this.Z = p;
    }
    ra() {
      var p = new XMLHttpRequest();
      p.open("HEAD", c, !1);
      p.send(null);
      if (!(200 <= p.status && 300 > p.status || 304 === p.status)) {
        throw Error("Couldn't load " + c + ". Status: " + p.status);
      }
      var w = Number(p.getResponseHeader("Content-length")), E, C = (E = p.getResponseHeader("Accept-Ranges")) && "bytes" === E;
      p = (E = p.getResponseHeader("Content-Encoding")) && "gzip" === E;
      var F = 1048576;
      C || (F = w);
      var G = this;
      G.Ka(fa => {
        var za = fa * F, ha = (fa + 1) * F - 1;
        ha = Math.min(ha, w - 1);
        if ("undefined" == typeof G.G[fa]) {
          var mc = G.G;
          if (za > ha) {
            throw Error("invalid range (" + za + ", " + ha + ") or no bytes requested!");
          }
          if (ha > w - 1) {
            throw Error("only " + w + " bytes available! programmer error!");
          }
          var J = new XMLHttpRequest();
          J.open("GET", c, !1);
          w !== F && J.setRequestHeader("Range", "bytes=" + za + "-" + ha);
          J.responseType = "arraybuffer";
          J.overrideMimeType && J.overrideMimeType("text/plain; charset=x-user-defined");
          J.send(null);
          if (!(200 <= J.status && 300 > J.status || 304 === J.status)) {
            throw Error("Couldn't load " + c + ". Status: " + J.status);
          }
          za = void 0 !== J.response ? new Uint8Array(J.response || []) : pb(J.responseText || "");
          mc[fa] = za;
        }
        if ("undefined" == typeof G.G[fa]) {
          throw Error("doXHR failed!");
        }
        return G.G[fa];
      });
      if (p || !w) {
        F = w = 1, F = w = this.Z(0).length, ta("LazyFiles on gzip forces download of the whole file when length is accessed");
      }
      this.qa = w;
      this.pa = F;
      this.$ = !0;
    }
    get length() {
      this.$ || this.ra();
      return this.qa;
    }
    get chunkSize() {
      this.$ || this.ra();
      return this.pa;
    }
  }
  if ("undefined" != typeof XMLHttpRequest) {
    if (!ea) {
      throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    }
    var n = new k();
    var q = void 0;
  } else {
    q = c, n = void 0;
  }
  var t = Rb(a, b, d, f);
  n ? t.j = n : q && (t.j = null, t.url = q);
  Object.defineProperties(t, {m:{get:function() {
    return this.j.length;
  }}});
  var A = {};
  Object.keys(t.i).forEach(p => {
    var w = t.i[p];
    A[p] = (...E) => {
      Sb(t);
      return w(...E);
    };
  });
  A.read = (p, w, E, C, F) => {
    Sb(t);
    return h(p, w, E, C, F);
  };
  A.N = (p, w, E) => {
    Sb(t);
    var C = wb();
    if (!C) {
      throw new P.g(48);
    }
    h(p, x, C, w, E);
    return {Oa:C, wa:!0};
  };
  t.i = A;
  return t;
}, Qa() {
  g("FS.absolutePath has been removed; use PATH_FS.resolve instead");
}, Wa() {
  g("FS.createFolder has been removed; use FS.mkdir instead");
}, Xa() {
  g("FS.createLink has been removed; use FS.symlink instead");
}, bb() {
  g("FS.joinPath has been removed; use PATH.join instead");
}, fb() {
  g("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
}, ib() {
  g("FS.standardizePath has been removed; use PATH.normalize instead");
},};
function Vb(a, b, c) {
  if ("/" === b.charAt(0)) {
    return b;
  }
  a = -100 === a ? P.cwd() : V(a).path;
  if (0 == b.length) {
    if (!c) {
      throw new P.g(44);
    }
    return a;
  }
  return N(a + "/" + b);
}
function Wb(a, b, c) {
  a = a(b);
  y[c >> 2] = a.dev;
  y[c + 4 >> 2] = a.mode;
  z[c + 8 >> 2] = a.nlink;
  y[c + 12 >> 2] = a.uid;
  y[c + 16 >> 2] = a.gid;
  y[c + 20 >> 2] = a.rdev;
  B[c + 24 >> 3] = BigInt(a.size);
  y[c + 32 >> 2] = 4096;
  y[c + 36 >> 2] = a.blocks;
  b = a.atime.getTime();
  var d = a.mtime.getTime(), f = a.ctime.getTime();
  B[c + 40 >> 3] = BigInt(Math.floor(b / 1000));
  z[c + 48 >> 2] = b % 1000 * 1000;
  B[c + 56 >> 3] = BigInt(Math.floor(d / 1000));
  z[c + 64 >> 2] = d % 1000 * 1000;
  B[c + 72 >> 3] = BigInt(Math.floor(f / 1000));
  z[c + 80 >> 2] = f % 1000 * 1000;
  B[c + 88 >> 3] = BigInt(a.ino);
  return 0;
}
var Xb = void 0;
function W() {
  r(void 0 != Xb);
  var a = y[+Xb >> 2];
  Xb += 4;
  return a;
}
var Yb = (a, b, c) => {
  r("number" == typeof c, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  ob(a, ya, b, c);
}, Zb = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], $b = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], ac = {}, cc = () => {
  if (!bc) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:la || "./this.program"}, b;
    for (b in ac) {
      void 0 === ac[b] ? delete a[b] : a[b] = ac[b];
    }
    var c = [];
    for (b in a) {
      c.push(`${b}=${a[b]}`);
    }
    bc = c;
  }
  return bc;
}, bc, ec = (a, b) => {
  xa = a;
  dc();
  db && !b && (b = `program exited (with status: ${a}), but keepRuntimeAlive() is set (counter=${0}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`, ba(b), u(b));
  xa = a;
  db || (e.onExit?.(a), wa = !0);
  ma(a, new bb(a));
}, fc = (a, b, c, d) => {
  for (var f = 0, h = 0; h < c; h++) {
    var k = z[b >> 2], n = z[b + 4 >> 2];
    b += 8;
    k = P.read(a, x, k, n, d);
    if (0 > k) {
      return -1;
    }
    f += k;
    if (k < n) {
      break;
    }
    "undefined" != typeof d && (d += k);
  }
  return f;
}, gc = (a, b, c, d) => {
  for (var f = 0, h = 0; h < c; h++) {
    var k = z[b >> 2], n = z[b + 4 >> 2];
    b += 8;
    k = P.write(a, x, k, n, d);
    if (0 > k) {
      return -1;
    }
    f += k;
    "undefined" != typeof d && (d += k);
  }
  return f;
}, hc = a => {
  if (a instanceof bb || "unwind" == a) {
    return xa;
  }
  Ea();
  a instanceof WebAssembly.RuntimeError && 0 >= X() && u("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 262144)");
  ma(1, a);
}, ic, jc = P.W, kc = P.ja, lc = P.A;
P.Aa = Bb;
[44].forEach(a => {
  P.Y[a] = new P.g(a);
  P.Y[a].stack = "<generic error, no stack>";
});
P.D = Array(4096);
P.o(R, {}, "/");
P.mkdir("/tmp");
P.mkdir("/home");
P.mkdir("/home/web_user");
(function() {
  P.mkdir("/dev");
  sb(P.K(1, 3), {read:() => 0, write:(d, f, h, k) => k,});
  Pb("/dev/null", P.K(1, 3));
  rb(P.K(5, 0), ub);
  rb(P.K(6, 0), vb);
  Pb("/dev/tty", P.K(5, 0));
  Pb("/dev/tty1", P.K(6, 0));
  var a = new Uint8Array(1024), b = 0, c = () => {
    0 === b && (b = kb(a).byteLength);
    return a[--b];
  };
  P.A("/dev", "random", c);
  P.A("/dev", "urandom", c);
  P.mkdir("/dev/shm");
  P.mkdir("/dev/shm/tmp");
})();
(function() {
  P.mkdir("/proc");
  var a = P.mkdir("/proc/self");
  P.mkdir("/proc/self/fd");
  P.o({o() {
    var b = P.createNode(a, "fd", 16895, 73);
    b.h = {lookup(c, d) {
      var f = V(+d);
      c = {parent:null, o:{sa:"fake"}, h:{readlink:() => f.path},};
      return c.parent = c;
    }};
    return b;
  }}, {}, "/proc/self/fd");
})();
P.Ca = {MEMFS:R,};
e.FS_createPath = P.W;
e.FS_createDataFile = P.T;
e.FS_createPreloadedFile = P.Aa;
e.FS_unlink = P.unlink;
e.FS_createLazyFile = P.ja;
e.FS_createDevice = P.A;
var wc = {__assert_fail:(a, b, c, d) => {
  g(`Assertion failed: ${M(a)}, at: ` + [b ? M(b) : "unknown filename", c, d ? M(d) : "unknown function"]);
}, __syscall_dup:function(a) {
  try {
    var b = V(a);
    return Nb(b).fd;
  } catch (c) {
    if ("undefined" == typeof P || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.l;
  }
}, __syscall_dup3:function(a, b, c) {
  try {
    var d = V(a);
    r(!c);
    if (d.fd === b) {
      return -28;
    }
    if (0 > b || b >= P.ha) {
      return -8;
    }
    var f = P.ma(b);
    f && P.close(f);
    return Nb(d, b).fd;
  } catch (h) {
    if ("undefined" == typeof P || "ErrnoError" !== h.name) {
      throw h;
    }
    return -h.l;
  }
}, __syscall_fcntl64:function(a, b, c) {
  Xb = c;
  try {
    var d = V(a);
    switch(b) {
      case 0:
        var f = W();
        if (0 > f) {
          break;
        }
        for (; P.streams[f];) {
          f++;
        }
        return Nb(d, f).fd;
      case 1:
      case 2:
        return 0;
      case 3:
        return d.flags;
      case 4:
        return f = W(), d.flags |= f, 0;
      case 12:
        return f = W(), Aa[f + 0 >> 1] = 2, 0;
      case 13:
      case 14:
        return 0;
    }
    return -28;
  } catch (h) {
    if ("undefined" == typeof P || "ErrnoError" !== h.name) {
      throw h;
    }
    return -h.l;
  }
}, __syscall_fstat64:function(a, b) {
  try {
    var c = V(a);
    return Wb(P.stat, c.path, b);
  } catch (d) {
    if ("undefined" == typeof P || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.l;
  }
}, __syscall_getdents64:function(a, b, c) {
  try {
    var d = V(a);
    d.J || (d.J = P.readdir(d.path));
    a = 0;
    for (var f = P.u(d, 0, 1), h = Math.floor(f / 280); h < d.J.length && a + 280 <= c;) {
      var k = d.J[h];
      if ("." === k) {
        var n = d.node.id;
        var q = 4;
      } else if (".." === k) {
        n = U(d.path, {parent:!0}).node.id, q = 4;
      } else {
        var t = T(d.node, k);
        n = t.id;
        q = 8192 === (t.mode & 61440) ? 2 : S(t.mode) ? 4 : 40960 === (t.mode & 61440) ? 10 : 8;
      }
      r(n);
      B[b + a >> 3] = BigInt(n);
      B[b + a + 8 >> 3] = BigInt(280 * (h + 1));
      Aa[b + a + 16 >> 1] = 280;
      x[b + a + 18] = q;
      Yb(k, b + a + 19, 256);
      a += 280;
      h += 1;
    }
    P.u(d, 280 * h, 0);
    return a;
  } catch (A) {
    if ("undefined" == typeof P || "ErrnoError" !== A.name) {
      throw A;
    }
    return -A.l;
  }
}, __syscall_ioctl:function(a, b, c) {
  Xb = c;
  try {
    var d = V(a);
    switch(b) {
      case 21509:
        return d.tty ? 0 : -59;
      case 21505:
        if (!d.tty) {
          return -59;
        }
        if (d.tty.I.Ea) {
          a = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
          var f = W();
          y[f >> 2] = 25856;
          y[f + 4 >> 2] = 5;
          y[f + 8 >> 2] = 191;
          y[f + 12 >> 2] = 35387;
          for (var h = 0; 32 > h; h++) {
            x[f + h + 17] = a[h] || 0;
          }
        }
        return 0;
      case 21510:
      case 21511:
      case 21512:
        return d.tty ? 0 : -59;
      case 21506:
      case 21507:
      case 21508:
        if (!d.tty) {
          return -59;
        }
        if (d.tty.I.Fa) {
          for (f = W(), a = [], h = 0; 32 > h; h++) {
            a.push(x[f + h + 17]);
          }
        }
        return 0;
      case 21519:
        if (!d.tty) {
          return -59;
        }
        f = W();
        return y[f >> 2] = 0;
      case 21520:
        return d.tty ? -28 : -59;
      case 21531:
        return f = W(), P.aa(d, b, f);
      case 21523:
        if (!d.tty) {
          return -59;
        }
        d.tty.I.Ga && (h = [24, 80], f = W(), Aa[f >> 1] = h[0], Aa[f + 2 >> 1] = h[1]);
        return 0;
      case 21524:
        return d.tty ? 0 : -59;
      case 21515:
        return d.tty ? 0 : -59;
      default:
        return -28;
    }
  } catch (k) {
    if ("undefined" == typeof P || "ErrnoError" !== k.name) {
      throw k;
    }
    return -k.l;
  }
}, __syscall_lstat64:function(a, b) {
  try {
    return a = M(a), Wb(P.lstat, a, b);
  } catch (c) {
    if ("undefined" == typeof P || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.l;
  }
}, __syscall_newfstatat:function(a, b, c, d) {
  try {
    b = M(b);
    var f = d & 256, h = d & 4096;
    d &= -6401;
    r(!d, `unknown flags in __syscall_newfstatat: ${d}`);
    b = Vb(a, b, h);
    return Wb(f ? P.lstat : P.stat, b, c);
  } catch (k) {
    if ("undefined" == typeof P || "ErrnoError" !== k.name) {
      throw k;
    }
    return -k.l;
  }
}, __syscall_openat:function(a, b, c, d) {
  Xb = d;
  try {
    b = M(b);
    b = Vb(a, b);
    var f = d ? W() : 0;
    return P.open(b, c, f).fd;
  } catch (h) {
    if ("undefined" == typeof P || "ErrnoError" !== h.name) {
      throw h;
    }
    return -h.l;
  }
}, __syscall_renameat:function(a, b, c, d) {
  try {
    return b = M(b), d = M(d), b = Vb(a, b), d = Vb(c, d), P.rename(b, d), 0;
  } catch (f) {
    if ("undefined" == typeof P || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.l;
  }
}, __syscall_rmdir:function(a) {
  try {
    return a = M(a), P.rmdir(a), 0;
  } catch (b) {
    if ("undefined" == typeof P || "ErrnoError" !== b.name) {
      throw b;
    }
    return -b.l;
  }
}, __syscall_stat64:function(a, b) {
  try {
    return a = M(a), Wb(P.stat, a, b);
  } catch (c) {
    if ("undefined" == typeof P || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.l;
  }
}, __syscall_unlinkat:function(a, b, c) {
  try {
    return b = M(b), b = Vb(a, b), 0 === c ? P.unlink(b) : 512 === c ? P.rmdir(b) : g("Invalid flags passed to unlinkat"), 0;
  } catch (d) {
    if ("undefined" == typeof P || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.l;
  }
}, _emscripten_fs_load_embedded_files:a => {
  do {
    var b = z[a >> 2];
    a += 4;
    var c = z[a >> 2];
    a += 4;
    var d = z[a >> 2];
    a += 4;
    b = M(b);
    P.W("/", hb(b), !0, !0);
    P.T(b, null, x.subarray(d, d + c), !0, !0, !0);
  } while (z[a >> 2]);
}, _emscripten_get_now_is_monotonic:() => 1, _emscripten_throw_longjmp:() => {
  throw Infinity;
}, _gmtime_js:function(a, b) {
  a = -9007199254740992 > a || 9007199254740992 < a ? NaN : Number(a);
  a = new Date(1000 * a);
  y[b >> 2] = a.getUTCSeconds();
  y[b + 4 >> 2] = a.getUTCMinutes();
  y[b + 8 >> 2] = a.getUTCHours();
  y[b + 12 >> 2] = a.getUTCDate();
  y[b + 16 >> 2] = a.getUTCMonth();
  y[b + 20 >> 2] = a.getUTCFullYear() - 1900;
  y[b + 24 >> 2] = a.getUTCDay();
  y[b + 28 >> 2] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
}, _localtime_js:function(a, b) {
  a = -9007199254740992 > a || 9007199254740992 < a ? NaN : Number(a);
  a = new Date(1000 * a);
  y[b >> 2] = a.getSeconds();
  y[b + 4 >> 2] = a.getMinutes();
  y[b + 8 >> 2] = a.getHours();
  y[b + 12 >> 2] = a.getDate();
  y[b + 16 >> 2] = a.getMonth();
  y[b + 20 >> 2] = a.getFullYear() - 1900;
  y[b + 24 >> 2] = a.getDay();
  var c = a.getFullYear();
  y[b + 28 >> 2] = (0 !== c % 4 || 0 === c % 100 && 0 !== c % 400 ? $b : Zb)[a.getMonth()] + a.getDate() - 1 | 0;
  y[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
  c = (new Date(a.getFullYear(), 6, 1)).getTimezoneOffset();
  var d = (new Date(a.getFullYear(), 0, 1)).getTimezoneOffset();
  y[b + 32 >> 2] = (c != d && a.getTimezoneOffset() == Math.min(d, c)) | 0;
}, _tzset_js:(a, b, c, d) => {
  var f = (new Date()).getFullYear(), h = new Date(f, 0, 1), k = new Date(f, 6, 1);
  f = h.getTimezoneOffset();
  var n = k.getTimezoneOffset();
  z[a >> 2] = 60 * Math.max(f, n);
  y[b >> 2] = Number(f != n);
  a = q => q.toLocaleTimeString(void 0, {hour12:!1, timeZoneName:"short"}).split(" ")[1];
  h = a(h);
  k = a(k);
  r(h);
  r(k);
  r(16 >= nb(h), `timezone name truncated to fit in TZNAME_MAX (${h})`);
  r(16 >= nb(k), `timezone name truncated to fit in TZNAME_MAX (${k})`);
  n < f ? (Yb(h, c, 17), Yb(k, d, 17)) : (Yb(h, d, 17), Yb(k, c, 17));
}, emscripten_date_now:() => Date.now(), emscripten_get_now:() => performance.now(), emscripten_resize_heap:a => {
  var b = ya.length;
  a >>>= 0;
  r(a > b);
  if (2147483648 < a) {
    return u(`Cannot enlarge memory, requested ${a} bytes, but the limit is ${2147483648} bytes!`), !1;
  }
  for (var c = 1; 4 >= c; c *= 2) {
    var d = b * (1 + 0.2 / c);
    d = Math.min(d, a + 100663296);
    var f = Math;
    d = Math.max(a, d);
    f = f.min.call(f, 2147483648, d + (65536 - d % 65536) % 65536);
    a: {
      d = f;
      var h = va.buffer, k = (d - h.byteLength + 65535) / 65536;
      try {
        va.grow(k);
        Ba();
        var n = 1;
        break a;
      } catch (q) {
        u(`growMemory: Attempted to grow heap from ${h.byteLength} bytes to ${d} bytes, but got error: ${q}`);
      }
      n = void 0;
    }
    if (n) {
      return !0;
    }
  }
  u(`Failed to grow the heap from ${b} bytes to ${f} bytes, not enough memory!`);
  return !1;
}, environ_get:(a, b) => {
  var c = 0;
  cc().forEach((d, f) => {
    var h = b + c;
    f = z[a + 4 * f >> 2] = h;
    for (h = 0; h < d.length; ++h) {
      r(d.charCodeAt(h) === (d.charCodeAt(h) & 255)), x[f++] = d.charCodeAt(h);
    }
    x[f] = 0;
    c += d.length + 1;
  });
  return 0;
}, environ_sizes_get:(a, b) => {
  var c = cc();
  z[a >> 2] = c.length;
  var d = 0;
  c.forEach(f => d += f.length + 1);
  z[b >> 2] = d;
  return 0;
}, exit:ec, fd_close:function(a) {
  try {
    var b = V(a);
    P.close(b);
    return 0;
  } catch (c) {
    if ("undefined" == typeof P || "ErrnoError" !== c.name) {
      throw c;
    }
    return c.l;
  }
}, fd_pread:function(a, b, c, d, f) {
  d = -9007199254740992 > d || 9007199254740992 < d ? NaN : Number(d);
  try {
    if (isNaN(d)) {
      return 61;
    }
    var h = V(a), k = fc(h, b, c, d);
    z[f >> 2] = k;
    return 0;
  } catch (n) {
    if ("undefined" == typeof P || "ErrnoError" !== n.name) {
      throw n;
    }
    return n.l;
  }
}, fd_pwrite:function(a, b, c, d, f) {
  d = -9007199254740992 > d || 9007199254740992 < d ? NaN : Number(d);
  try {
    if (isNaN(d)) {
      return 61;
    }
    var h = V(a), k = gc(h, b, c, d);
    z[f >> 2] = k;
    return 0;
  } catch (n) {
    if ("undefined" == typeof P || "ErrnoError" !== n.name) {
      throw n;
    }
    return n.l;
  }
}, fd_read:function(a, b, c, d) {
  try {
    var f = V(a), h = fc(f, b, c);
    z[d >> 2] = h;
    return 0;
  } catch (k) {
    if ("undefined" == typeof P || "ErrnoError" !== k.name) {
      throw k;
    }
    return k.l;
  }
}, fd_seek:function(a, b, c, d) {
  b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
  try {
    if (isNaN(b)) {
      return 61;
    }
    var f = V(a);
    P.u(f, b, c);
    B[d >> 3] = BigInt(f.position);
    f.J && 0 === b && 0 === c && (f.J = null);
    return 0;
  } catch (h) {
    if ("undefined" == typeof P || "ErrnoError" !== h.name) {
      throw h;
    }
    return h.l;
  }
}, fd_write:function(a, b, c, d) {
  try {
    var f = V(a), h = gc(f, b, c);
    z[d >> 2] = h;
    return 0;
  } catch (k) {
    if ("undefined" == typeof P || "ErrnoError" !== k.name) {
      throw k;
    }
    return k.l;
  }
}, invoke_ii:nc, invoke_iii:oc, invoke_iiii:pc, invoke_iiiii:qc, invoke_iiiiiii:rc, invoke_vi:sc, invoke_vii:tc, invoke_viii:uc, invoke_viiii:vc}, K = function() {
  function a(d) {
    K = d.exports;
    va = K.memory;
    r(va, "memory not found in wasm exports");
    Ba();
    ic = K.__indirect_function_table;
    r(ic, "table not found in wasm exports");
    Ja.unshift(K.__wasm_call_ctors);
    Sa("wasm-instantiate");
    return K;
  }
  var b = {env:wc, wasi_snapshot_preview1:wc,};
  Ra("wasm-instantiate");
  var c = e;
  if (e.instantiateWasm) {
    try {
      return e.instantiateWasm(b, a);
    } catch (d) {
      u(`Module.instantiateWasm callback failed with error: ${d}`), ba(d);
    }
  }
  Ua ||= e.locateFile ? Ta("gs.wasm") ? "gs.wasm" : e.locateFile ? e.locateFile("gs.wasm", m) : m + "gs.wasm" : (new URL("gs.wasm", import.meta.url)).href;
  Ya(b, function(d) {
    r(e === c, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    c = null;
    a(d.instance);
  }).catch(ba);
  return {};
}(), xc = e._main = I("__main_argc_argv", 2), Tb = I("strerror", 1), Ub = I("fflush", 1), Y = I("setThrew", 2), yc = () => (yc = K.emscripten_stack_init)(), Da = () => (Da = K.emscripten_stack_get_end)(), Z = a => (Z = K._emscripten_stack_restore)(a), zc = a => (zc = K._emscripten_stack_alloc)(a), X = () => (X = K.emscripten_stack_get_current)();
e.dynCall_jiji = I("dynCall_jiji", 4);
var Ac = e.dynCall_iiii = I("dynCall_iiii", 4), Bc = e.dynCall_ii = I("dynCall_ii", 2);
e.dynCall_iidiiii = I("dynCall_iidiiii", 7);
var dynCall_vii = e.dynCall_vii = I("dynCall_vii", 3), dynCall_v = e.dynCall_v = I("dynCall_v", 1);
e.dynCall_iiiiii = I("dynCall_iiiiii", 6);
e.dynCall_iiiiiiii = I("dynCall_iiiiiiii", 8);
var dynCall_iii = e.dynCall_iii = I("dynCall_iii", 3), Cc = e.dynCall_viii = I("dynCall_viii", 4), dynCall_vi = e.dynCall_vi = I("dynCall_vi", 2), Dc = e.dynCall_iiiiiii = I("dynCall_iiiiiii", 7), Ec = e.dynCall_iiiii = I("dynCall_iiiii", 5);
e.dynCall_iiiiiiiii = I("dynCall_iiiiiiiii", 9);
e.dynCall_iiiiiiiiiiii = I("dynCall_iiiiiiiiiiii", 12);
e.dynCall_iiiiiiiiiii = I("dynCall_iiiiiiiiiii", 11);
e.dynCall_iiiiiiiiiiiiiiiii = I("dynCall_iiiiiiiiiiiiiiiii", 17);
e.dynCall_iiiiiiiiii = I("dynCall_iiiiiiiiii", 10);
e.dynCall_iiji = I("dynCall_iiji", 4);
e.dynCall_jii = I("dynCall_jii", 3);
e.dynCall_iiiiiiijjii = I("dynCall_iiiiiiijjii", 11);
e.dynCall_iiiiiiiiiiji = I("dynCall_iiiiiiiiiiji", 12);
e.dynCall_iiiiiiiiiijj = I("dynCall_iiiiiiiiiijj", 12);
e.dynCall_iiiiiij = I("dynCall_iiiiiij", 7);
e.dynCall_iiiiiiiiiiiiii = I("dynCall_iiiiiiiiiiiiii", 14);
e.dynCall_iddii = I("dynCall_iddii", 5);
e.dynCall_fdi = I("dynCall_fdi", 3);
e.dynCall_fdii = I("dynCall_fdii", 4);
e.dynCall_viiiiiiiiijiiii = I("dynCall_viiiiiiiiijiiii", 15);
e.dynCall_iiijiii = I("dynCall_iiijiii", 7);
e.dynCall_iijiii = I("dynCall_iijiii", 6);
e.dynCall_iij = I("dynCall_iij", 3);
var Fc = e.dynCall_viiii = I("dynCall_viiii", 5);
e.dynCall_iidiii = I("dynCall_iidiii", 6);
e.dynCall_viiiii = I("dynCall_viiiii", 6);
e.dynCall_viiiiiii = I("dynCall_viiiiiii", 8);
e.dynCall_viiiiii = I("dynCall_viiiiii", 7);
e.dynCall_idii = I("dynCall_idii", 4);
e.dynCall_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiijiiiiii = I("dynCall_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiijiiiiii", 40);
e.dynCall_viiiiiiiiiiiiiijiiiii = I("dynCall_viiiiiiiiiiiiiijiiiii", 21);
e.dynCall_viiiiiiiii = I("dynCall_viiiiiiiii", 10);
e.dynCall_iji = I("dynCall_iji", 3);
e.dynCall_jji = I("dynCall_jji", 3);
e.dynCall_iiiiiiiiiiiii = I("dynCall_iiiiiiiiiiiii", 13);
e.dynCall_iiiiiiiiiiiiiiii = I("dynCall_iiiiiiiiiiiiiiii", 16);
e.dynCall_id = I("dynCall_id", 2);
e.dynCall_dd = I("dynCall_dd", 2);
e.dynCall_viiiiiiii = I("dynCall_viiiiiiii", 9);
e.dynCall_fdd = I("dynCall_fdd", 3);
e.dynCall_iijii = I("dynCall_iijii", 5);
e.dynCall_iiiij = I("dynCall_iiiij", 5);
e.dynCall_iiddi = I("dynCall_iiddi", 5);
e.dynCall_iiiijj = I("dynCall_iiiijj", 6);
e.dynCall_iiiiijiiii = I("dynCall_iiiiijiiii", 10);
e.dynCall_iiiiiiiifi = I("dynCall_iiiiiiiifi", 10);
e.dynCall_iiiijii = I("dynCall_iiiijii", 7);
e.dynCall_iiiiijiiiii = I("dynCall_iiiiijiiiii", 11);
e.dynCall_vijii = I("dynCall_vijii", 5);
e.dynCall_ji = I("dynCall_ji", 2);
e.dynCall_diiid = I("dynCall_diiid", 5);
e.dynCall_iidi = I("dynCall_iidi", 4);
e.dynCall_iiiji = I("dynCall_iiiji", 5);
e.dynCall_iijj = I("dynCall_iijj", 4);
e.dynCall_iijjjjjj = I("dynCall_iijjjjjj", 8);
e.dynCall_iiijii = I("dynCall_iiijii", 6);
e.dynCall_iiiijiiii = I("dynCall_iiiijiiii", 9);
e.___emscripten_embedded_file_data = 1452628;
function sc(a, b) {
  var c = X();
  try {
    dynCall_vi(a, b);
  } catch (d) {
    Z(c);
    if (d !== d + 0) {
      throw d;
    }
    Y(1, 0);
  }
}
function nc(a, b) {
  var c = X();
  try {
    return Bc(a, b);
  } catch (d) {
    Z(c);
    if (d !== d + 0) {
      throw d;
    }
    Y(1, 0);
  }
}
function tc(a, b, c) {
  var d = X();
  try {
    dynCall_vii(a, b, c);
  } catch (f) {
    Z(d);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function oc(a, b, c) {
  var d = X();
  try {
    return dynCall_iii(a, b, c);
  } catch (f) {
    Z(d);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function pc(a, b, c, d) {
  var f = X();
  try {
    return Ac(a, b, c, d);
  } catch (h) {
    Z(f);
    if (h !== h + 0) {
      throw h;
    }
    Y(1, 0);
  }
}
function uc(a, b, c, d) {
  var f = X();
  try {
    Cc(a, b, c, d);
  } catch (h) {
    Z(f);
    if (h !== h + 0) {
      throw h;
    }
    Y(1, 0);
  }
}
function qc(a, b, c, d, f) {
  var h = X();
  try {
    return Ec(a, b, c, d, f);
  } catch (k) {
    Z(h);
    if (k !== k + 0) {
      throw k;
    }
    Y(1, 0);
  }
}
function rc(a, b, c, d, f, h, k) {
  var n = X();
  try {
    return Dc(a, b, c, d, f, h, k);
  } catch (q) {
    Z(n);
    if (q !== q + 0) {
      throw q;
    }
    Y(1, 0);
  }
}
function vc(a, b, c, d, f) {
  var h = X();
  try {
    Fc(a, b, c, d, f);
  } catch (k) {
    Z(h);
    if (k !== k + 0) {
      throw k;
    }
    Y(1, 0);
  }
}
e.addRunDependency = Ra;
e.removeRunDependency = Sa;
e.callMain = Gc;
e.FS_createPreloadedFile = Bb;
e.FS_unlink = a => P.unlink(a);
e.FS_createPath = jc;
e.FS_createDevice = lc;
e.FS = P;
e.FS_createDataFile = (a, b, c, d, f, h) => {
  P.T(a, b, c, d, f, h);
};
e.FS_createLazyFile = kc;
"writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 getTempRet0 setTempRet0 arraySum addDays inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr emscriptenLog readEmAsmArgs jstoi_q listenOnce autoResumeAudioContext dynCallLegacy getDynCaller dynCall runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asmjsMangle HandleAllocator getNativeTypeSize STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS getCFunc ccall cwrap uleb128Encode sigToWasmTypes generateFuncType convertJsFunctionToWasm getEmptyTableSlot updateTableMap getFunctionAddress addFunction removeFunction reallyNegative unSign strLen reSign formatString intArrayToString AsciiToString UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 stringToNewUTF8 writeArrayToMemory registerKeyEventCallback maybeCStringToJsString findEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData battery registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace getCallstack convertPCtoSourceLocation checkWasiClock wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags createDyncallWrapper safeSetTimeout setImmediateWrapped clearImmediateWrapped polyfillSetImmediate getPromise makePromise idsToPromises makePromiseCallback ExceptionInfo findMatchingCatch Browser_asyncPrepareDataCounter setMainLoop getSocketFromFD getSocketAddress FS_mkdirTree _setNetworkCallback heapObjectForWebGLType toTypedArrayIndex webgl_enable_ANGLE_instanced_arrays webgl_enable_OES_vertex_array_object webgl_enable_WEBGL_draw_buffers webgl_enable_WEBGL_multi_draw emscriptenWebGLGet computeUnpackAlignedImageSize colorChannelsInGlTextureFormat emscriptenWebGLGetTexPixelData emscriptenWebGLGetUniform webglGetUniformLocation webglPrepareUniformLocationsBeforeFirstUse webglGetLeftBracePos emscriptenWebGLGetVertexAttrib __glGetActiveAttribOrUniform writeGLArray registerWebGlEventCallback runAndAbortIfError ALLOC_NORMAL ALLOC_STACK allocate writeStringToMemory writeAsciiToMemory setErrNo demangle stackTrace".split(" ").forEach(function(a) {
  "undefined" == typeof globalThis || Object.getOwnPropertyDescriptor(globalThis, a) || Object.defineProperty(globalThis, a, {configurable:!0, get() {
    var b = `\`${a}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`, c = a;
    c.startsWith("_") || (c = "$" + a);
    b += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`;
    Za(a) && (b += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
    L(b);
  }});
  ab(a);
});
"run addOnPreRun addOnInit addOnPreMain addOnExit addOnPostRun out err abort wasmMemory wasmExports writeStackCookie checkStackCookie MAX_INT53 MIN_INT53 bigintToI53Checked stackSave stackRestore stackAlloc ptrToString zeroMemory exitJS getHeapMax growMemory ENV MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE isLeapYear ydayFromDate ERRNO_CODES strError DNS Protocols Sockets initRandomFill randomFill timers warnOnce readEmAsmArgsArray jstoi_s getExecutableName handleException keepRuntimeAlive asyncLoad alignMemory mmapAlloc wasmTable noExitRuntime freeTableIndexes functionsInTableMap setValue getValue PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString stringToUTF8Array stringToUTF8 lengthBytesUTF8 intArrayFromString stringToAscii UTF16Decoder stringToUTF8OnStack JSEvents specialHTMLTargets findCanvasEventTarget currentFullscreenStrategy restoreOldWindowedStyle UNWIND_CACHE ExitStatus getEnvStrings doReadv doWritev promiseMap uncaughtExceptionCount exceptionLast exceptionCaught Browser getPreloadedImageData__data wget SYSCALLS preloadPlugins FS_modeStringToFlags FS_getMode FS_stdin_getChar_buffer FS_stdin_getChar FS_readFile MEMFS TTY PIPEFS SOCKFS tempFixedLengthArray miniTempWebGLFloatBuffers miniTempWebGLIntBuffers GL AL GLUT EGL GLEW IDBStore SDL SDL_gfx allocateUTF8 allocateUTF8OnStack print printErr".split(" ").forEach(ab);
var Hc;
Oa = function Ic() {
  Hc || Jc();
  Hc || (Oa = Ic);
};
function Gc(a = []) {
  r(0 == D, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
  r(0 == Ia.length, "cannot call main when preRun functions remain to be called");
  a.unshift(la);
  var b = a.length, c = zc(4 * (b + 1)), d = c;
  a.forEach(h => {
    var k = z, n = d >> 2, q = nb(h) + 1, t = zc(q);
    Yb(h, t, q);
    k[n] = t;
    d += 4;
  });
  z[d >> 2] = 0;
  try {
    var f = xc(b, c);
    ec(f, !0);
    return f;
  } catch (h) {
    return hc(h);
  }
}
function Jc() {
  var a = ka;
  function b() {
    if (!Hc && (Hc = !0, e.calledRun = !0, !wa)) {
      r(!Ma);
      Ma = !0;
      Ea();
      e.noFSInit || P.M.U || P.M();
      P.oa = !1;
      cb(Ja);
      Ea();
      cb(Ka);
      aa(e);
      e.onRuntimeInitialized?.();
      Kc && Gc(a);
      Ea();
      if (e.postRun) {
        for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) {
          var c = e.postRun.shift();
          La.unshift(c);
        }
      }
      cb(La);
    }
  }
  if (!(0 < D)) {
    yc();
    Ca();
    if (e.preRun) {
      for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) {
        Na();
      }
    }
    cb(Ia);
    0 < D || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        e.setStatus("");
      }, 1);
      b();
    }, 1)) : b(), Ea());
  }
}
function dc() {
  var a = ta, b = u, c = !1;
  ta = u = () => {
    c = !0;
  };
  try {
    Ub(0), ["stdout", "stderr"].forEach(function(d) {
      (d = Qb("/dev/" + d)) && qb[d.object.rdev]?.output?.length && (c = !0);
    });
  } catch (d) {
  }
  ta = a;
  u = b;
  c && L("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.");
}
if (e.preInit) {
  for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;) {
    e.preInit.pop()();
  }
}
var Kc = !1;
e.noInitialRun && (Kc = !1);
Jc();
moduleRtn = ca;
for (const a of Object.keys(e)) {
  a in moduleArg || Object.defineProperty(moduleArg, a, {configurable:!0, get() {
    g(`Access to module property ('${a}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
  }});
}
;


  return moduleRtn;
}
);
})();
export default gs;
