
var gs = (() => {
  var _scriptName = import.meta.url;
  
  return (
async function(moduleArg = {}) {
  var moduleRtn;

var e = moduleArg, aa, ba, ca = new Promise((a, b) => {
  aa = a;
  ba = b;
});
["_memory", "___indirect_function_table", "___emscripten_embedded_file_data", "_main", "onRuntimeInitialized"].forEach(a => {
  Object.getOwnPropertyDescriptor(ca, a) || Object.defineProperty(ca, a, {get:() => k("You are getting " + a + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"), set:() => k("You are setting " + a + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),});
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
}, q = "", na, oa;
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
  q = require("url").fileURLToPath(new URL("./", import.meta.url));
  oa = a => {
    a = sa(a) ? new URL(a) : ra.normalize(a);
    a = fs.readFileSync(a);
    t(a.buffer);
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
  ea ? q = self.location.href : "undefined" != typeof document && document.currentScript && (q = document.currentScript.src);
  _scriptName && (q = _scriptName);
  q.startsWith("blob:") ? q = "" : q = q.substr(0, q.replace(/[?#].*/, "").lastIndexOf("/") + 1);
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
Object.getOwnPropertyDescriptor(e, "fetchSettings") && k("`Module.fetchSettings` was supplied but `fetchSettings` not included in INCOMING_MODULE_JS_API");
e.arguments && (ka = e.arguments);
w("arguments", "arguments_");
e.thisProgram && (la = e.thisProgram);
w("thisProgram", "thisProgram");
e.quit && (ma = e.quit);
w("quit", "quit_");
t("undefined" == typeof e.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
t("undefined" == typeof e.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
t("undefined" == typeof e.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
t("undefined" == typeof e.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
t("undefined" == typeof e.read, "Module.read option was removed");
t("undefined" == typeof e.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
t("undefined" == typeof e.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
t("undefined" == typeof e.setWindowTitle, "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
t("undefined" == typeof e.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
w("asm", "wasmExports");
w("readAsync", "readAsync");
w("readBinary", "readBinary");
w("setWindowTitle", "setWindowTitle");
t(!ia, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
var ua;
e.wasmBinary && (ua = e.wasmBinary);
w("wasmBinary", "wasmBinary");
"object" != typeof WebAssembly && u("no native wasm support detected");
var va, wa = !1, xa;
function t(a, b) {
  a || k("Assertion failed" + (b ? ": " + b : ""));
}
var x, ya, Aa, y, A, C;
function Ba() {
  var a = va.buffer;
  e.HEAP8 = x = new Int8Array(a);
  e.HEAP16 = Aa = new Int16Array(a);
  e.HEAPU8 = ya = new Uint8Array(a);
  e.HEAPU16 = new Uint16Array(a);
  e.HEAP32 = y = new Int32Array(a);
  e.HEAPU32 = A = new Uint32Array(a);
  e.HEAPF32 = new Float32Array(a);
  e.HEAPF64 = new Float64Array(a);
  e.HEAP64 = C = new BigInt64Array(a);
  e.HEAPU64 = new BigUint64Array(a);
}
t(!e.STACK_SIZE, "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
t("undefined" != typeof Int32Array && "undefined" !== typeof Float64Array && void 0 != Int32Array.prototype.subarray && void 0 != Int32Array.prototype.set, "JS engine does not provide full typed array support");
t(!e.wasmMemory, "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");
t(!e.INITIAL_MEMORY, "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
function Ca() {
  var a = Da();
  t(0 == (a & 3));
  0 == a && (a += 4);
  A[a >> 2] = 34821223;
  A[a + 4 >> 2] = 2310721022;
  A[0] = 1668509029;
}
function Ea() {
  if (!wa) {
    var a = Da();
    0 == a && (a += 4);
    var b = A[a >> 2], c = A[a + 4 >> 2];
    34821223 == b && 2310721022 == c || k(`Stack overflow! Stack cookie has been overwritten at ${Fa(a)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Fa(c)} ${Fa(b)}`);
    1668509029 != A[0] && k("Runtime error: The application has corrupted its heap memory area (address zero)!");
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
t(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
t(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
t(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
t(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var G = 0, H = null, Oa = null, Pa = {};
function Qa(a) {
  for (var b = a;;) {
    if (!Pa[a]) {
      return a;
    }
    a = b + Math.random();
  }
}
function Ra(a) {
  G++;
  e.monitorRunDependencies?.(G);
  a ? (t(!Pa[a]), Pa[a] = 1, null === H && "undefined" != typeof setInterval && (H = setInterval(() => {
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
  G--;
  e.monitorRunDependencies?.(G);
  a ? (t(Pa[a]), delete Pa[a]) : u("warning: run dependency removed without ID");
  0 == G && (null !== H && (clearInterval(H), H = null), Oa && (a = Oa, Oa = null, a()));
}
function k(a) {
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
function Ua(a, b) {
  return (...c) => {
    t(Ma, `native function \`${a}\` called before runtime initialization`);
    var d = J[a];
    t(d, `exported native function \`${a}\` not found`);
    t(c.length <= b, `native function \`${a}\` called with ${c.length} args but expects ${b}`);
    return d(...c);
  };
}
var Va;
function Wa(a) {
  if (a == Va && ua) {
    return new Uint8Array(ua);
  }
  if (oa) {
    return oa(a);
  }
  throw "both async and sync fetching of the wasm failed";
}
function Xa(a) {
  return ua ? Promise.resolve().then(() => Wa(a)) : na(a).then(b => new Uint8Array(b), () => Wa(a));
}
function Ya(a, b, c) {
  return Xa(a).then(d => WebAssembly.instantiate(d, b)).then(c, d => {
    u(`failed to asynchronously prepare wasm: ${d}`);
    sa(Va) && u(`warning: Loading from a file URI (${Va}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
    k(d);
  });
}
function Za(a, b) {
  var c = Va;
  return ua || "function" != typeof WebAssembly.instantiateStreaming || Ta(c) || sa(c) || l || "function" != typeof fetch ? Ya(c, a, b) : fetch(c, {credentials:"same-origin"}).then(d => WebAssembly.instantiateStreaming(d, a).then(b, function(f) {
    u(`wasm streaming compile failed: ${f}`);
    u("falling back to ArrayBuffer instantiation");
    return Ya(c, a, b);
  }));
}
function w(a, b) {
  Object.getOwnPropertyDescriptor(e, a) || Object.defineProperty(e, a, {configurable:!0, get() {
    k(`\`Module.${a}\` has been replaced by \`${b}\`` + " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }});
}
function $a(a) {
  return "FS_createPath" === a || "FS_createDataFile" === a || "FS_createPreloadedFile" === a || "FS_unlink" === a || "addRunDependency" === a || "FS_createLazyFile" === a || "FS_createDevice" === a || "removeRunDependency" === a;
}
function ab(a, b) {
  "undefined" != typeof globalThis && Object.defineProperty(globalThis, a, {configurable:!0, get() {
    K(`\`${a}\` is not longer defined by emscripten. ${b}`);
  }});
}
ab("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
ab("asm", "Please use wasmExports instead");
function bb(a) {
  Object.getOwnPropertyDescriptor(e, a) || Object.defineProperty(e, a, {configurable:!0, get() {
    var b = `'${a}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
    $a(a) && (b += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
    k(b);
  }});
}
function cb(a) {
  this.name = "ExitStatus";
  this.message = `Program terminated with exit(${a})`;
  this.status = a;
}
var db = a => {
  for (; 0 < a.length;) {
    a.shift()(e);
  }
}, eb = e.noExitRuntime || !0, Fa = a => {
  t("number" === typeof a);
  return "0x" + (a >>> 0).toString(16).padStart(8, "0");
}, K = a => {
  K.ga || (K.ga = {});
  K.ga[a] || (K.ga[a] = 1, l && (a = "warning: " + a), u(a));
}, fb = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0, gb = (a, b) => {
  for (var c = b + NaN, d = b; a[d] && !(d >= c);) {
    ++d;
  }
  if (16 < d - b && a.buffer && fb) {
    return fb.decode(a.subarray(b, d));
  }
  for (c = ""; b < d;) {
    var f = a[b++];
    if (f & 128) {
      var g = a[b++] & 63;
      if (192 == (f & 224)) {
        c += String.fromCharCode((f & 31) << 6 | g);
      } else {
        var h = a[b++] & 63;
        224 == (f & 240) ? f = (f & 15) << 12 | g << 6 | h : (240 != (f & 248) && K("Invalid UTF-8 leading byte " + Fa(f) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), f = (f & 7) << 18 | g << 12 | h << 6 | a[b++] & 63);
        65536 > f ? c += String.fromCharCode(f) : (f -= 65536, c += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023));
      }
    } else {
      c += String.fromCharCode(f);
    }
  }
  return c;
}, L = a => {
  t("number" == typeof a, `UTF8ToString expects a number (got ${typeof a})`);
  return a ? gb(ya, a) : "";
}, hb = (a, b) => {
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
}, M = a => {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = hb(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}, ib = a => {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b &&= b.substr(0, b.length - 1);
  return a + b;
}, N = a => {
  if ("/" === a) {
    return "/";
  }
  a = M(a);
  a = a.replace(/\/$/, "");
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}, jb = (a, b) => M(a + "/" + b), kb = () => {
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
  k("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
}, lb = a => (lb = kb())(a), P = (...a) => {
  for (var b = "", c = !1, d = a.length - 1; -1 <= d && !c; d--) {
    c = 0 <= d ? a[d] : O.cwd();
    if ("string" != typeof c) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!c) {
      return "";
    }
    b = c + "/" + b;
    c = "/" === c.charAt(0);
  }
  b = hb(b.split("/").filter(f => !!f), !c).join("/");
  return (c ? "/" : "") + b || ".";
}, mb = (a, b) => {
  function c(h) {
    for (var m = 0; m < h.length && "" === h[m]; m++) {
    }
    for (var p = h.length - 1; 0 <= p && "" === h[p]; p--) {
    }
    return m > p ? [] : h.slice(m, p - m + 1);
  }
  a = P(a).substr(1);
  b = P(b).substr(1);
  a = c(a.split("/"));
  b = c(b.split("/"));
  for (var d = Math.min(a.length, b.length), f = d, g = 0; g < d; g++) {
    if (a[g] !== b[g]) {
      f = g;
      break;
    }
  }
  d = [];
  for (g = f; g < a.length; g++) {
    d.push("..");
  }
  d = d.concat(b.slice(f));
  return d.join("/");
}, nb = [], ob = a => {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var d = a.charCodeAt(c);
    127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
  }
  return b;
}, pb = (a, b, c, d) => {
  t("string" === typeof a, `stringToUTF8Array expects a string (got ${typeof a})`);
  if (!(0 < d)) {
    return 0;
  }
  var f = c;
  d = c + d - 1;
  for (var g = 0; g < a.length; ++g) {
    var h = a.charCodeAt(g);
    if (55296 <= h && 57343 >= h) {
      var m = a.charCodeAt(++g);
      h = 65536 + ((h & 1023) << 10) | m & 1023;
    }
    if (127 >= h) {
      if (c >= d) {
        break;
      }
      b[c++] = h;
    } else {
      if (2047 >= h) {
        if (c + 1 >= d) {
          break;
        }
        b[c++] = 192 | h >> 6;
      } else {
        if (65535 >= h) {
          if (c + 2 >= d) {
            break;
          }
          b[c++] = 224 | h >> 12;
        } else {
          if (c + 3 >= d) {
            break;
          }
          1114111 < h && K("Invalid Unicode code point " + Fa(h) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
          b[c++] = 240 | h >> 18;
          b[c++] = 128 | h >> 12 & 63;
        }
        b[c++] = 128 | h >> 6 & 63;
      }
      b[c++] = 128 | h & 63;
    }
  }
  b[c] = 0;
  return c - f;
};
function qb(a) {
  var b = Array(ob(a) + 1);
  a = pb(a, b, 0, b.length);
  b.length = a;
  return b;
}
var rb = [];
function sb(a, b) {
  rb[a] = {input:[], output:[], I:b};
  tb(a, ub);
}
var ub = {open(a) {
  var b = rb[a.node.rdev];
  if (!b) {
    throw new O.g(43);
  }
  a.tty = b;
  a.seekable = !1;
}, close(a) {
  a.tty.I.fsync(a.tty);
}, fsync(a) {
  a.tty.I.fsync(a.tty);
}, read(a, b, c, d) {
  if (!a.tty || !a.tty.I.na) {
    throw new O.g(60);
  }
  for (var f = 0, g = 0; g < d; g++) {
    try {
      var h = a.tty.I.na(a.tty);
    } catch (m) {
      throw new O.g(29);
    }
    if (void 0 === h && 0 === f) {
      throw new O.g(6);
    }
    if (null === h || void 0 === h) {
      break;
    }
    f++;
    b[c + g] = h;
  }
  f && (a.node.timestamp = Date.now());
  return f;
}, write(a, b, c, d) {
  if (!a.tty || !a.tty.I.da) {
    throw new O.g(60);
  }
  try {
    for (var f = 0; f < d; f++) {
      a.tty.I.da(a.tty, b[c + f]);
    }
  } catch (g) {
    throw new O.g(29);
  }
  d && (a.node.timestamp = Date.now());
  return f;
},}, vb = {na() {
  a: {
    if (!nb.length) {
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
      nb = qb(a);
    }
    a = nb.shift();
  }
  return a;
}, da(a, b) {
  null === b || 10 === b ? (ta(gb(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, fsync(a) {
  a.output && 0 < a.output.length && (ta(gb(a.output, 0)), a.output = []);
}, Ea() {
  return {Ta:25856, Va:5, Sa:191, Ua:35387, Ra:[3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]};
}, Fa() {
  return 0;
}, Ga() {
  return [24, 80];
},}, wb = {da(a, b) {
  null === b || 10 === b ? (u(gb(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, fsync(a) {
  a.output && 0 < a.output.length && (u(gb(a.output, 0)), a.output = []);
},}, xb = () => {
  k("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported");
};
function yb(a, b) {
  var c = a.j ? a.j.length : 0;
  c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.j, a.j = new Uint8Array(b), 0 < a.m && a.j.set(c.subarray(0, a.m), 0));
}
var Q = {F:null, o() {
  return Q.createNode(null, "/", 16895, 0);
}, createNode(a, b, c, d) {
  if (24576 === (c & 61440) || O.isFIFO(c)) {
    throw new O.g(63);
  }
  Q.F || (Q.F = {dir:{node:{C:Q.h.C, s:Q.h.s, lookup:Q.h.lookup, H:Q.h.H, rename:Q.h.rename, unlink:Q.h.unlink, rmdir:Q.h.rmdir, readdir:Q.h.readdir, symlink:Q.h.symlink}, stream:{u:Q.i.u}}, file:{node:{C:Q.h.C, s:Q.h.s}, stream:{u:Q.i.u, read:Q.i.read, write:Q.i.write, O:Q.i.O, N:Q.i.N, R:Q.i.R}}, link:{node:{C:Q.h.C, s:Q.h.s, readlink:Q.h.readlink}, stream:{}}, ia:{node:{C:Q.h.C, s:Q.h.s}, stream:O.za}});
  c = O.createNode(a, b, c, d);
  R(c.mode) ? (c.h = Q.F.dir.node, c.i = Q.F.dir.stream, c.j = {}) : O.isFile(c.mode) ? (c.h = Q.F.file.node, c.i = Q.F.file.stream, c.m = 0, c.j = null) : 40960 === (c.mode & 61440) ? (c.h = Q.F.link.node, c.i = Q.F.link.stream) : 8192 === (c.mode & 61440) && (c.h = Q.F.ia.node, c.i = Q.F.ia.stream);
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
  R(a.mode) ? b.size = 4096 : O.isFile(a.mode) ? b.size = a.m : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
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
  throw O.Y[44];
}, H(a, b, c, d) {
  return Q.createNode(a, b, c, d);
}, rename(a, b, c) {
  if (R(a.mode)) {
    try {
      var d = S(b, c);
    } catch (g) {
    }
    if (d) {
      for (var f in d.j) {
        throw new O.g(55);
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
  var c = S(a, b), d;
  for (d in c.j) {
    throw new O.g(55);
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
  a = Q.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, readlink(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new O.g(28);
  }
  return a.link;
},}, i:{read(a, b, c, d, f) {
  var g = a.node.j;
  if (f >= a.node.m) {
    return 0;
  }
  a = Math.min(a.node.m - f, d);
  t(0 <= a);
  if (8 < a && g.subarray) {
    b.set(g.subarray(f, f + a), c);
  } else {
    for (d = 0; d < a; d++) {
      b[c + d] = g[f + d];
    }
  }
  return a;
}, write(a, b, c, d, f, g) {
  t(!(b instanceof ArrayBuffer));
  b.buffer === x.buffer && (g = !1);
  if (!d) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (b.subarray && (!a.j || a.j.subarray)) {
    if (g) {
      return t(0 === f, "canOwn must imply no weird position inside the file"), a.j = b.subarray(c, c + d), a.m = d;
    }
    if (0 === a.m && 0 === f) {
      return a.j = b.slice(c, c + d), a.m = d;
    }
    if (f + d <= a.m) {
      return a.j.set(b.subarray(c, c + d), f), d;
    }
  }
  yb(a, f + d);
  if (a.j.subarray && b.subarray) {
    a.j.set(b.subarray(c, c + d), f);
  } else {
    for (g = 0; g < d; g++) {
      a.j[f + g] = b[c + g];
    }
  }
  a.m = Math.max(a.m, f + d);
  return d;
}, u(a, b, c) {
  1 === c ? b += a.position : 2 === c && O.isFile(a.node.mode) && (b += a.node.m);
  if (0 > b) {
    throw new O.g(28);
  }
  return b;
}, O(a, b, c) {
  yb(a.node, b + c);
  a.node.m = Math.max(a.node.m, b + c);
}, N(a, b, c, d, f) {
  if (!O.isFile(a.node.mode)) {
    throw new O.g(43);
  }
  a = a.node.j;
  if (f & 2 || a.buffer !== x.buffer) {
    if (0 < c || c + b < a.length) {
      a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
    }
    c = !0;
    b = xb();
    if (!b) {
      throw new O.g(48);
    }
    x.set(a, b);
  } else {
    c = !1, b = a.byteOffset;
  }
  return {Oa:b, wa:c};
}, R(a, b, c, d) {
  Q.i.write(a, b, 0, d, c, !1);
  return 0;
},},}, zb = (a, b, c) => {
  var d = Qa(`al ${a}`);
  na(a).then(f => {
    t(f, `Loading data file "${a}" failed (no arrayBuffer).`);
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
}, Ab = e.preloadPlugins || [], Bb = (a, b, c, d) => {
  "undefined" != typeof Browser && Browser.M();
  var f = !1;
  Ab.forEach(g => {
    !f && g.canHandle(b) && (g.handle(a, b, c, d), f = !0);
  });
  return f;
}, Cb = (a, b, c, d, f, g, h, m, p, r) => {
  function z(D) {
    function B(E) {
      r?.();
      m || O.T(a, b, E, d, f, p);
      g?.();
      Sa(v);
    }
    Bb(D, n, B, () => {
      h?.();
      Sa(v);
    }) || B(D);
  }
  var n = b ? P(M(a + "/" + b)) : a, v = Qa(`cp ${n}`);
  Ra(v);
  "string" == typeof c ? zb(c, z, h) : z(c);
}, Db = (a, b) => {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
}, Eb = {EPERM:63, ENOENT:44, ESRCH:71, EINTR:27, EIO:29, ENXIO:60, E2BIG:1, ENOEXEC:45, EBADF:8, ECHILD:12, EAGAIN:6, EWOULDBLOCK:6, ENOMEM:48, EACCES:2, EFAULT:21, ENOTBLK:105, EBUSY:10, EEXIST:20, EXDEV:75, ENODEV:43, ENOTDIR:54, EISDIR:31, EINVAL:28, ENFILE:41, EMFILE:33, ENOTTY:59, ETXTBSY:74, EFBIG:22, ENOSPC:51, ESPIPE:70, EROFS:69, EMLINK:34, EPIPE:64, EDOM:18, ERANGE:68, ENOMSG:49, EIDRM:24, ECHRNG:106, EL2NSYNC:156, EL3HLT:107, EL3RST:108, ELNRNG:109, EUNATCH:110, ENOCSI:111, EL2HLT:112, 
EDEADLK:16, ENOLCK:46, EBADE:113, EBADR:114, EXFULL:115, ENOANO:104, EBADRQC:103, EBADSLT:102, EDEADLOCK:16, EBFONT:101, ENOSTR:100, ENODATA:116, ETIME:117, ENOSR:118, ENONET:119, ENOPKG:120, EREMOTE:121, ENOLINK:47, EADV:122, ESRMNT:123, ECOMM:124, EPROTO:65, EMULTIHOP:36, EDOTDOT:125, EBADMSG:9, ENOTUNIQ:126, EBADFD:127, EREMCHG:128, ELIBACC:129, ELIBBAD:130, ELIBSCN:131, ELIBMAX:132, ELIBEXEC:133, ENOSYS:52, ENOTEMPTY:55, ENAMETOOLONG:37, ELOOP:32, EOPNOTSUPP:138, EPFNOSUPPORT:139, ECONNRESET:15, 
ENOBUFS:42, EAFNOSUPPORT:5, EPROTOTYPE:67, ENOTSOCK:57, ENOPROTOOPT:50, ESHUTDOWN:140, ECONNREFUSED:14, EADDRINUSE:3, ECONNABORTED:13, ENETUNREACH:40, ENETDOWN:38, ETIMEDOUT:73, EHOSTDOWN:142, EHOSTUNREACH:23, EINPROGRESS:26, EALREADY:7, EDESTADDRREQ:17, EMSGSIZE:35, EPROTONOSUPPORT:66, ESOCKTNOSUPPORT:137, EADDRNOTAVAIL:4, ENETRESET:39, EISCONN:30, ENOTCONN:53, ETOOMANYREFS:141, EUSERS:136, EDQUOT:19, ESTALE:72, ENOTSUP:138, ENOMEDIUM:148, EILSEQ:25, EOVERFLOW:61, ECANCELED:11, ENOTRECOVERABLE:56, 
EOWNERDEAD:62, ESTRPIPE:135,};
function tb(a, b) {
  O.la[a] = {i:b};
}
function R(a) {
  return 16384 === (a & 61440);
}
function S(a, b) {
  var c = R(a.mode) ? (c = Fb(a, "x")) ? c : a.h.lookup ? 0 : 2 : 54;
  if (c) {
    throw new O.g(c);
  }
  for (c = O.D[Gb(a.id, b)]; c; c = c.L) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) {
      return c;
    }
  }
  return O.lookup(a, b);
}
function T(a, b = {}) {
  a = P(a);
  if (!a) {
    return {path:"", node:null};
  }
  b = Object.assign({X:!0, fa:0}, b);
  if (8 < b.fa) {
    throw new O.g(32);
  }
  a = a.split("/").filter(h => !!h);
  for (var c = O.root, d = "/", f = 0; f < a.length; f++) {
    var g = f === a.length - 1;
    if (g && b.parent) {
      break;
    }
    c = S(c, a[f]);
    d = M(d + "/" + a[f]);
    c.v && (!g || g && b.X) && (c = c.v.root);
    if (!g || b.B) {
      for (g = 0; 40960 === (c.mode & 61440);) {
        if (c = O.readlink(d), d = P(ib(d), c), c = T(d, {fa:b.fa + 1}).node, 40 < g++) {
          throw new O.g(32);
        }
      }
    }
  }
  return {path:d, node:c};
}
function Hb(a) {
  for (var b;;) {
    if (O.V(a)) {
      return a = a.o.sa, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
    }
    b = b ? `${a.name}/${b}` : a.name;
    a = a.parent;
  }
}
function Gb(a, b) {
  for (var c = 0, d = 0; d < b.length; d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0;
  }
  return (a + c >>> 0) % O.D.length;
}
function Ib(a) {
  var b = Gb(a.parent.id, a.name);
  a.L = O.D[b];
  O.D[b] = a;
}
function Jb(a) {
  var b = Gb(a.parent.id, a.name);
  if (O.D[b] === a) {
    O.D[b] = a.L;
  } else {
    for (b = O.D[b]; b;) {
      if (b.L === a) {
        b.L = a.L;
        break;
      }
      b = b.L;
    }
  }
}
function Kb(a) {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}
function Fb(a, b) {
  if (O.oa) {
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
function Lb(a, b) {
  try {
    return S(a, b), 20;
  } catch (c) {
  }
  return Fb(a, "wx");
}
function Mb(a, b, c) {
  try {
    var d = S(a, b);
  } catch (f) {
    return f.l;
  }
  if (a = Fb(a, "wx")) {
    return a;
  }
  if (c) {
    if (!R(d.mode)) {
      return 54;
    }
    if (O.V(d) || Hb(d) === O.cwd()) {
      return 10;
    }
  } else {
    if (R(d.mode)) {
      return 31;
    }
  }
  return 0;
}
function U(a) {
  a = O.ma(a);
  if (!a) {
    throw new O.g(8);
  }
  return a;
}
function Nb(a, b = -1) {
  t(-1 <= b);
  a = Object.assign(new O.va(), a);
  if (-1 == b) {
    a: {
      for (b = 0; b <= O.ha; b++) {
        if (!O.streams[b]) {
          break a;
        }
      }
      throw new O.g(33);
    }
  }
  a.fd = b;
  return O.streams[b] = a;
}
function Ob(a, b = -1) {
  a = Nb(a, b);
  a.i?.Ya?.(a);
  return a;
}
function Pb(a) {
  var b = [];
  for (a = [a]; a.length;) {
    var c = a.pop();
    b.push(c);
    a.push(...c.P);
  }
  return b;
}
function Qb(a, b, c) {
  "undefined" == typeof c && (c = b, b = 438);
  return O.H(a, b | 8192, c);
}
function Rb(a, b) {
  try {
    var c = T(a, {B:!b});
    a = c.path;
  } catch (f) {
  }
  var d = {V:!1, exists:!1, error:0, name:null, path:null, object:null, La:!1, Na:null, Ma:null};
  try {
    c = T(a, {parent:!0}), d.La = !0, d.Na = c.path, d.Ma = c.node, d.name = N(a), c = T(a, {B:!b}), d.exists = !0, d.path = c.path, d.object = c.node, d.name = c.node.name, d.V = "/" === c.path;
  } catch (f) {
    d.error = f.l;
  }
  return d;
}
function Sb(a, b, c, d) {
  a = "string" == typeof a ? a : Hb(a);
  b = M(a + "/" + b);
  return O.create(b, Db(c, d));
}
function Tb(a) {
  if (!(a.Ha || a.Ia || a.link || a.j)) {
    if ("undefined" != typeof XMLHttpRequest) {
      throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    }
    try {
      a.j = oa(a.url), a.m = a.j.length;
    } catch (b) {
      throw new O.g(29);
    }
  }
}
var O = {root:null, P:[], la:{}, streams:[], Ja:1, D:null, ka:"/", U:!1, oa:!0, g:class extends Error {
  constructor(a) {
    super(Ma ? L(Ub(a)) : "");
    this.name = "ErrnoError";
    this.l = a;
    for (var b in Eb) {
      if (Eb[b] === a) {
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
    this.id = O.Ja++;
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
    return R(this.mode);
  }
  get Ha() {
    return 8192 === (this.mode & 61440);
  }
}, createNode(a, b, c, d) {
  t("object" == typeof a);
  a = new O.ua(a, b, c, d);
  Ib(a);
  return a;
}, V(a) {
  return a === a.parent;
}, isFile(a) {
  return 32768 === (a & 61440);
}, isFIFO(a) {
  return 4096 === (a & 61440);
}, isSocket(a) {
  return 49152 === (a & 49152);
}, ha:4096, ma:a => O.streams[a], za:{open(a) {
  a.i = O.Da(a.node.rdev).i;
  a.i.open?.(a);
}, u() {
  throw new O.g(70);
},}, ba:a => a >> 8, cb:a => a & 255, K:(a, b) => a << 8 | b, Da:a => O.la[a], ta(a, b) {
  function c(h) {
    t(0 < O.S);
    O.S--;
    return b(h);
  }
  function d(h) {
    if (h) {
      if (!d.Ba) {
        return d.Ba = !0, c(h);
      }
    } else {
      ++g >= f.length && c(null);
    }
  }
  "function" == typeof a && (b = a, a = !1);
  O.S++;
  1 < O.S && u(`warning: ${O.S} FS.syncfs operations in flight at once, probably just doing extra work`);
  var f = Pb(O.root.o), g = 0;
  f.forEach(h => {
    if (!h.type.ta) {
      return d(null);
    }
    h.type.ta(h, a, d);
  });
}, o(a, b, c) {
  if ("string" == typeof a) {
    throw a;
  }
  var d = "/" === c, f = !c;
  if (d && O.root) {
    throw new O.g(10);
  }
  if (!d && !f) {
    var g = T(c, {X:!1});
    c = g.path;
    g = g.node;
    if (g.v) {
      throw new O.g(10);
    }
    if (!R(g.mode)) {
      throw new O.g(54);
    }
  }
  b = {type:a, gb:b, sa:c, P:[]};
  a = a.o(b);
  a.o = b;
  b.root = a;
  d ? O.root = a : g && (g.v = b, g.o && g.o.P.push(b));
  return a;
}, jb(a) {
  a = T(a, {X:!1});
  if (!a.node.v) {
    throw new O.g(28);
  }
  a = a.node;
  var b = a.v, c = Pb(b);
  Object.keys(O.D).forEach(d => {
    for (d = O.D[d]; d;) {
      var f = d.L;
      c.includes(d.o) && Jb(d);
      d = f;
    }
  });
  a.v = null;
  b = a.o.P.indexOf(b);
  t(-1 !== b);
  a.o.P.splice(b, 1);
}, lookup(a, b) {
  return a.h.lookup(a, b);
}, H(a, b, c) {
  var d = T(a, {parent:!0}).node;
  a = N(a);
  if (!a || "." === a || ".." === a) {
    throw new O.g(28);
  }
  var f = Lb(d, a);
  if (f) {
    throw new O.g(f);
  }
  if (!d.h.H) {
    throw new O.g(63);
  }
  return d.h.H(d, a, b, c);
}, create(a, b) {
  return O.H(a, (void 0 !== b ? b : 438) & 4095 | 32768, 0);
}, mkdir(a, b) {
  return O.H(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0);
}, eb(a, b) {
  a = a.split("/");
  for (var c = "", d = 0; d < a.length; ++d) {
    if (a[d]) {
      c += "/" + a[d];
      try {
        O.mkdir(c, b);
      } catch (f) {
        if (20 != f.l) {
          throw f;
        }
      }
    }
  }
}, symlink(a, b) {
  if (!P(a)) {
    throw new O.g(44);
  }
  var c = T(b, {parent:!0}).node;
  if (!c) {
    throw new O.g(44);
  }
  b = N(b);
  var d = Lb(c, b);
  if (d) {
    throw new O.g(d);
  }
  if (!c.h.symlink) {
    throw new O.g(63);
  }
  return c.h.symlink(c, b, a);
}, rename(a, b) {
  var c = ib(a), d = ib(b), f = N(a), g = N(b);
  var h = T(a, {parent:!0});
  var m = h.node;
  h = T(b, {parent:!0});
  h = h.node;
  if (!m || !h) {
    throw new O.g(44);
  }
  if (m.o !== h.o) {
    throw new O.g(75);
  }
  var p = S(m, f);
  a = mb(a, d);
  if ("." !== a.charAt(0)) {
    throw new O.g(28);
  }
  a = mb(b, c);
  if ("." !== a.charAt(0)) {
    throw new O.g(55);
  }
  try {
    var r = S(h, g);
  } catch (z) {
  }
  if (p !== r) {
    b = R(p.mode);
    if (f = Mb(m, f, b)) {
      throw new O.g(f);
    }
    if (f = r ? Mb(h, g, b) : Lb(h, g)) {
      throw new O.g(f);
    }
    if (!m.h.rename) {
      throw new O.g(63);
    }
    if (p.v || r && r.v) {
      throw new O.g(10);
    }
    if (h !== m && (f = Fb(m, "w"))) {
      throw new O.g(f);
    }
    Jb(p);
    try {
      m.h.rename(p, h, g), p.parent = h;
    } catch (z) {
      throw z;
    } finally {
      Ib(p);
    }
  }
}, rmdir(a) {
  var b = T(a, {parent:!0}).node;
  a = N(a);
  var c = S(b, a), d = Mb(b, a, !0);
  if (d) {
    throw new O.g(d);
  }
  if (!b.h.rmdir) {
    throw new O.g(63);
  }
  if (c.v) {
    throw new O.g(10);
  }
  b.h.rmdir(b, a);
  Jb(c);
}, readdir(a) {
  a = T(a, {B:!0}).node;
  if (!a.h.readdir) {
    throw new O.g(54);
  }
  return a.h.readdir(a);
}, unlink(a) {
  var b = T(a, {parent:!0}).node;
  if (!b) {
    throw new O.g(44);
  }
  a = N(a);
  var c = S(b, a), d = Mb(b, a, !1);
  if (d) {
    throw new O.g(d);
  }
  if (!b.h.unlink) {
    throw new O.g(63);
  }
  if (c.v) {
    throw new O.g(10);
  }
  b.h.unlink(b, a);
  Jb(c);
}, readlink(a) {
  a = T(a).node;
  if (!a) {
    throw new O.g(44);
  }
  if (!a.h.readlink) {
    throw new O.g(28);
  }
  return P(Hb(a.parent), a.h.readlink(a));
}, stat(a, b) {
  a = T(a, {B:!b}).node;
  if (!a) {
    throw new O.g(44);
  }
  if (!a.h.C) {
    throw new O.g(63);
  }
  return a.h.C(a);
}, lstat(a) {
  return O.stat(a, !0);
}, chmod(a, b, c) {
  a = "string" == typeof a ? T(a, {B:!c}).node : a;
  if (!a.h.s) {
    throw new O.g(63);
  }
  a.h.s(a, {mode:b & 4095 | a.mode & -4096, timestamp:Date.now()});
}, lchmod(a, b) {
  O.chmod(a, b, !0);
}, fchmod(a, b) {
  a = U(a);
  O.chmod(a.node, b);
}, chown(a, b, c, d) {
  a = "string" == typeof a ? T(a, {B:!d}).node : a;
  if (!a.h.s) {
    throw new O.g(63);
  }
  a.h.s(a, {timestamp:Date.now()});
}, lchown(a, b, c) {
  O.chown(a, b, c, !0);
}, fchown(a, b, c) {
  a = U(a);
  O.chown(a.node, b, c);
}, truncate(a, b) {
  if (0 > b) {
    throw new O.g(28);
  }
  a = "string" == typeof a ? T(a, {B:!0}).node : a;
  if (!a.h.s) {
    throw new O.g(63);
  }
  if (R(a.mode)) {
    throw new O.g(31);
  }
  if (!O.isFile(a.mode)) {
    throw new O.g(28);
  }
  var c = Fb(a, "w");
  if (c) {
    throw new O.g(c);
  }
  a.h.s(a, {size:b, timestamp:Date.now()});
}, $a(a, b) {
  a = U(a);
  if (0 === (a.flags & 2097155)) {
    throw new O.g(28);
  }
  O.truncate(a.node, b);
}, kb(a, b, c) {
  a = T(a, {B:!0}).node;
  a.h.s(a, {timestamp:Math.max(b, c)});
}, open(a, b, c) {
  if ("" === a) {
    throw new O.g(44);
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
    a = M(a);
    try {
      f = T(a, {B:!(b & 131072)}).node;
    } catch (g) {
    }
  }
  d = !1;
  if (b & 64) {
    if (f) {
      if (b & 128) {
        throw new O.g(20);
      }
    } else {
      f = O.H(a, c, 0), d = !0;
    }
  }
  if (!f) {
    throw new O.g(44);
  }
  8192 === (f.mode & 61440) && (b &= -513);
  if (b & 65536 && !R(f.mode)) {
    throw new O.g(54);
  }
  if (!d && (c = f ? 40960 === (f.mode & 61440) ? 32 : R(f.mode) && ("r" !== Kb(b) || b & 512) ? 31 : Fb(f, Kb(b)) : 44)) {
    throw new O.g(c);
  }
  b & 512 && !d && O.truncate(f, 0);
  b &= -131713;
  f = Nb({node:f, path:Hb(f), flags:b, seekable:!0, position:0, i:f.i, Pa:[], error:!1});
  f.i.open && f.i.open(f);
  !e.logReadFiles || b & 1 || (O.ea || (O.ea = {}), a in O.ea || (O.ea[a] = 1));
  return f;
}, close(a) {
  if (null === a.fd) {
    throw new O.g(8);
  }
  a.J && (a.J = null);
  try {
    a.i.close && a.i.close(a);
  } catch (b) {
    throw b;
  } finally {
    O.streams[a.fd] = null;
  }
  a.fd = null;
}, u(a, b, c) {
  if (null === a.fd) {
    throw new O.g(8);
  }
  if (!a.seekable || !a.i.u) {
    throw new O.g(70);
  }
  if (0 != c && 1 != c && 2 != c) {
    throw new O.g(28);
  }
  a.position = a.i.u(a, b, c);
  a.Pa = [];
  return a.position;
}, read(a, b, c, d, f) {
  t(0 <= c);
  if (0 > d || 0 > f) {
    throw new O.g(28);
  }
  if (null === a.fd) {
    throw new O.g(8);
  }
  if (1 === (a.flags & 2097155)) {
    throw new O.g(8);
  }
  if (R(a.node.mode)) {
    throw new O.g(31);
  }
  if (!a.i.read) {
    throw new O.g(28);
  }
  var g = "undefined" != typeof f;
  if (!g) {
    f = a.position;
  } else if (!a.seekable) {
    throw new O.g(70);
  }
  b = a.i.read(a, b, c, d, f);
  g || (a.position += b);
  return b;
}, write(a, b, c, d, f, g) {
  t(0 <= c);
  if (0 > d || 0 > f) {
    throw new O.g(28);
  }
  if (null === a.fd) {
    throw new O.g(8);
  }
  if (0 === (a.flags & 2097155)) {
    throw new O.g(8);
  }
  if (R(a.node.mode)) {
    throw new O.g(31);
  }
  if (!a.i.write) {
    throw new O.g(28);
  }
  a.seekable && a.flags & 1024 && O.u(a, 0, 2);
  var h = "undefined" != typeof f;
  if (!h) {
    f = a.position;
  } else if (!a.seekable) {
    throw new O.g(70);
  }
  b = a.i.write(a, b, c, d, f, g);
  h || (a.position += b);
  return b;
}, O(a, b, c) {
  if (null === a.fd) {
    throw new O.g(8);
  }
  if (0 > b || 0 >= c) {
    throw new O.g(28);
  }
  if (0 === (a.flags & 2097155)) {
    throw new O.g(8);
  }
  if (!O.isFile(a.node.mode) && !R(a.node.mode)) {
    throw new O.g(43);
  }
  if (!a.i.O) {
    throw new O.g(138);
  }
  a.i.O(a, b, c);
}, N(a, b, c, d, f) {
  if (0 !== (d & 2) && 0 === (f & 2) && 2 !== (a.flags & 2097155)) {
    throw new O.g(2);
  }
  if (1 === (a.flags & 2097155)) {
    throw new O.g(2);
  }
  if (!a.i.N) {
    throw new O.g(43);
  }
  return a.i.N(a, b, c, d, f);
}, R(a, b, c, d, f) {
  t(0 <= c);
  return a.i.R ? a.i.R(a, b, c, d, f) : 0;
}, aa(a, b, c) {
  if (!a.i.aa) {
    throw new O.g(59);
  }
  return a.i.aa(a, b, c);
}, readFile(a, b = {}) {
  b.flags = b.flags || 0;
  b.encoding = b.encoding || "binary";
  if ("utf8" !== b.encoding && "binary" !== b.encoding) {
    throw Error(`Invalid encoding type "${b.encoding}"`);
  }
  var c, d = O.open(a, b.flags);
  a = O.stat(a).size;
  var f = new Uint8Array(a);
  O.read(d, f, 0, a, 0);
  "utf8" === b.encoding ? c = gb(f, 0) : "binary" === b.encoding && (c = f);
  O.close(d);
  return c;
}, writeFile(a, b, c = {}) {
  c.flags = c.flags || 577;
  a = O.open(a, c.flags, c.mode);
  if ("string" == typeof b) {
    var d = new Uint8Array(ob(b) + 1);
    b = pb(b, d, 0, d.length);
    O.write(a, d, 0, b, void 0, c.ya);
  } else if (ArrayBuffer.isView(b)) {
    O.write(a, b, 0, b.byteLength, void 0, c.ya);
  } else {
    throw Error("Unsupported data type");
  }
  O.close(a);
}, cwd:() => O.ka, chdir(a) {
  a = T(a, {B:!0});
  if (null === a.node) {
    throw new O.g(44);
  }
  if (!R(a.node.mode)) {
    throw new O.g(54);
  }
  var b = Fb(a.node, "x");
  if (b) {
    throw new O.g(b);
  }
  O.ka = a.path;
}, M(a, b, c) {
  t(!O.M.U, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
  O.M.U = !0;
  e.stdin = a || e.stdin;
  e.stdout = b || e.stdout;
  e.stderr = c || e.stderr;
  e.stdin ? O.A("/dev", "stdin", e.stdin) : O.symlink("/dev/tty", "/dev/stdin");
  e.stdout ? O.A("/dev", "stdout", null, e.stdout) : O.symlink("/dev/tty", "/dev/stdout");
  e.stderr ? O.A("/dev", "stderr", null, e.stderr) : O.symlink("/dev/tty1", "/dev/stderr");
  a = O.open("/dev/stdin", 0);
  b = O.open("/dev/stdout", 1);
  c = O.open("/dev/stderr", 1);
  t(0 === a.fd, `invalid handle for stdin (${a.fd})`);
  t(1 === b.fd, `invalid handle for stdout (${b.fd})`);
  t(2 === c.fd, `invalid handle for stderr (${c.fd})`);
}, hb() {
  O.M.U = !1;
  Vb(0);
  for (var a = 0; a < O.streams.length; a++) {
    var b = O.streams[a];
    b && O.close(b);
  }
}, Za(a, b) {
  a = Rb(a, b);
  return a.exists ? a.object : null;
}, W(a, b) {
  a = "string" == typeof a ? a : Hb(a);
  for (b = b.split("/").reverse(); b.length;) {
    var c = b.pop();
    if (c) {
      var d = M(a + "/" + c);
      try {
        O.mkdir(d);
      } catch (f) {
      }
      a = d;
    }
  }
  return d;
}, T(a, b, c, d, f, g) {
  var h = b;
  a && (a = "string" == typeof a ? a : Hb(a), h = b ? M(a + "/" + b) : a);
  a = Db(d, f);
  h = O.create(h, a);
  if (c) {
    if ("string" == typeof c) {
      b = Array(c.length);
      d = 0;
      for (f = c.length; d < f; ++d) {
        b[d] = c.charCodeAt(d);
      }
      c = b;
    }
    O.chmod(h, a | 146);
    b = O.open(h, 577);
    O.write(b, c, 0, c.length, 0, g);
    O.close(b);
    O.chmod(h, a);
  }
}, A(a, b, c, d) {
  a = jb("string" == typeof a ? a : Hb(a), b);
  b = Db(!!c, !!d);
  O.A.ba || (O.A.ba = 64);
  var f = O.K(O.A.ba++, 0);
  tb(f, {open(g) {
    g.seekable = !1;
  }, close() {
    d?.buffer?.length && d(10);
  }, read(g, h, m, p) {
    for (var r = 0, z = 0; z < p; z++) {
      try {
        var n = c();
      } catch (v) {
        throw new O.g(29);
      }
      if (void 0 === n && 0 === r) {
        throw new O.g(6);
      }
      if (null === n || void 0 === n) {
        break;
      }
      r++;
      h[m + z] = n;
    }
    r && (g.node.timestamp = Date.now());
    return r;
  }, write(g, h, m, p) {
    for (var r = 0; r < p; r++) {
      try {
        d(h[m + r]);
      } catch (z) {
        throw new O.g(29);
      }
    }
    p && (g.node.timestamp = Date.now());
    return r;
  }});
  return Qb(a, b, f);
}, ja(a, b, c, d, f) {
  function g(n, v, D, B, E) {
    n = n.node.j;
    if (E >= n.length) {
      return 0;
    }
    B = Math.min(n.length - E, B);
    t(0 <= B);
    if (n.slice) {
      for (var F = 0; F < B; F++) {
        v[D + F] = n[E + F];
      }
    } else {
      for (F = 0; F < B; F++) {
        v[D + F] = n.get(E + F);
      }
    }
    return B;
  }
  class h {
    constructor() {
      this.$ = !1;
      this.G = [];
      this.Z = void 0;
      this.pa = this.qa = 0;
    }
    get(n) {
      if (!(n > this.length - 1 || 0 > n)) {
        var v = n % this.chunkSize;
        return this.Z(n / this.chunkSize | 0)[v];
      }
    }
    Ka(n) {
      this.Z = n;
    }
    ra() {
      var n = new XMLHttpRequest();
      n.open("HEAD", c, !1);
      n.send(null);
      if (!(200 <= n.status && 300 > n.status || 304 === n.status)) {
        throw Error("Couldn't load " + c + ". Status: " + n.status);
      }
      var v = Number(n.getResponseHeader("Content-length")), D, B = (D = n.getResponseHeader("Accept-Ranges")) && "bytes" === D;
      n = (D = n.getResponseHeader("Content-Encoding")) && "gzip" === D;
      var E = 1048576;
      B || (E = v);
      var F = this;
      F.Ka(fa => {
        var za = fa * E, ha = (fa + 1) * E - 1;
        ha = Math.min(ha, v - 1);
        if ("undefined" == typeof F.G[fa]) {
          var oc = F.G;
          if (za > ha) {
            throw Error("invalid range (" + za + ", " + ha + ") or no bytes requested!");
          }
          if (ha > v - 1) {
            throw Error("only " + v + " bytes available! programmer error!");
          }
          var I = new XMLHttpRequest();
          I.open("GET", c, !1);
          v !== E && I.setRequestHeader("Range", "bytes=" + za + "-" + ha);
          I.responseType = "arraybuffer";
          I.overrideMimeType && I.overrideMimeType("text/plain; charset=x-user-defined");
          I.send(null);
          if (!(200 <= I.status && 300 > I.status || 304 === I.status)) {
            throw Error("Couldn't load " + c + ". Status: " + I.status);
          }
          za = void 0 !== I.response ? new Uint8Array(I.response || []) : qb(I.responseText || "");
          oc[fa] = za;
        }
        if ("undefined" == typeof F.G[fa]) {
          throw Error("doXHR failed!");
        }
        return F.G[fa];
      });
      if (n || !v) {
        E = v = 1, E = v = this.Z(0).length, ta("LazyFiles on gzip forces download of the whole file when length is accessed");
      }
      this.qa = v;
      this.pa = E;
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
    var m = new h();
    var p = void 0;
  } else {
    p = c, m = void 0;
  }
  var r = Sb(a, b, d, f);
  m ? r.j = m : p && (r.j = null, r.url = p);
  Object.defineProperties(r, {m:{get:function() {
    return this.j.length;
  }}});
  var z = {};
  Object.keys(r.i).forEach(n => {
    var v = r.i[n];
    z[n] = (...D) => {
      Tb(r);
      return v(...D);
    };
  });
  z.read = (n, v, D, B, E) => {
    Tb(r);
    return g(n, v, D, B, E);
  };
  z.N = (n, v, D) => {
    Tb(r);
    var B = xb();
    if (!B) {
      throw new O.g(48);
    }
    g(n, x, B, v, D);
    return {Oa:B, wa:!0};
  };
  r.i = z;
  return r;
}, Qa() {
  k("FS.absolutePath has been removed; use PATH_FS.resolve instead");
}, Wa() {
  k("FS.createFolder has been removed; use FS.mkdir instead");
}, Xa() {
  k("FS.createLink has been removed; use FS.symlink instead");
}, bb() {
  k("FS.joinPath has been removed; use PATH.join instead");
}, fb() {
  k("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
}, ib() {
  k("FS.standardizePath has been removed; use PATH.normalize instead");
},};
function Wb(a, b, c) {
  if ("/" === b.charAt(0)) {
    return b;
  }
  a = -100 === a ? O.cwd() : U(a).path;
  if (0 == b.length) {
    if (!c) {
      throw new O.g(44);
    }
    return a;
  }
  return M(a + "/" + b);
}
function Xb(a, b, c) {
  a = a(b);
  y[c >> 2] = a.dev;
  y[c + 4 >> 2] = a.mode;
  A[c + 8 >> 2] = a.nlink;
  y[c + 12 >> 2] = a.uid;
  y[c + 16 >> 2] = a.gid;
  y[c + 20 >> 2] = a.rdev;
  C[c + 24 >> 3] = BigInt(a.size);
  y[c + 32 >> 2] = 4096;
  y[c + 36 >> 2] = a.blocks;
  b = a.atime.getTime();
  var d = a.mtime.getTime(), f = a.ctime.getTime();
  C[c + 40 >> 3] = BigInt(Math.floor(b / 1000));
  A[c + 48 >> 2] = b % 1000 * 1000;
  C[c + 56 >> 3] = BigInt(Math.floor(d / 1000));
  A[c + 64 >> 2] = d % 1000 * 1000;
  C[c + 72 >> 3] = BigInt(Math.floor(f / 1000));
  A[c + 80 >> 2] = f % 1000 * 1000;
  C[c + 88 >> 3] = BigInt(a.ino);
  return 0;
}
var Yb = void 0;
function V() {
  t(void 0 != Yb);
  var a = y[+Yb >> 2];
  Yb += 4;
  return a;
}
var Zb = (a, b, c) => {
  t("number" == typeof c, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  pb(a, ya, b, c);
}, $b = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], ac = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], bc = {}, dc = () => {
  if (!cc) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:la || "./this.program"}, b;
    for (b in bc) {
      void 0 === bc[b] ? delete a[b] : a[b] = bc[b];
    }
    var c = [];
    for (b in a) {
      c.push(`${b}=${a[b]}`);
    }
    cc = c;
  }
  return cc;
}, cc, fc = (a, b) => {
  xa = a;
  ec();
  eb && !b && (b = `program exited (with status: ${a}), but keepRuntimeAlive() is set (counter=${0}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`, ba(b), u(b));
  xa = a;
  eb || (e.onExit?.(a), wa = !0);
  ma(a, new cb(a));
}, gc = (a, b, c, d) => {
  for (var f = 0, g = 0; g < c; g++) {
    var h = A[b >> 2], m = A[b + 4 >> 2];
    b += 8;
    h = O.read(a, x, h, m, d);
    if (0 > h) {
      return -1;
    }
    f += h;
    if (h < m) {
      break;
    }
    "undefined" != typeof d && (d += h);
  }
  return f;
}, hc = (a, b, c, d) => {
  for (var f = 0, g = 0; g < c; g++) {
    var h = A[b >> 2], m = A[b + 4 >> 2];
    b += 8;
    h = O.write(a, x, h, m, d);
    if (0 > h) {
      return -1;
    }
    f += h;
    "undefined" != typeof d && (d += h);
  }
  return f;
}, ic = a => {
  if (a instanceof cb || "unwind" == a) {
    return xa;
  }
  Ea();
  a instanceof WebAssembly.RuntimeError && 0 >= W() && u("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 262144)");
  ma(1, a);
}, jc = [], kc, X = a => {
  var b = jc[a];
  b || (a >= jc.length && (jc.length = a + 1), jc[a] = b = kc.get(a));
  t(kc.get(a) == b, "JavaScript-side Wasm function table mirror is out of date!");
  return b;
}, lc = O.W, mc = O.ja, nc = O.A;
O.Aa = Cb;
[44].forEach(a => {
  O.Y[a] = new O.g(a);
  O.Y[a].stack = "<generic error, no stack>";
});
O.D = Array(4096);
O.o(Q, {}, "/");
O.mkdir("/tmp");
O.mkdir("/home");
O.mkdir("/home/web_user");
(function() {
  O.mkdir("/dev");
  tb(O.K(1, 3), {read:() => 0, write:(d, f, g, h) => h,});
  Qb("/dev/null", O.K(1, 3));
  sb(O.K(5, 0), vb);
  sb(O.K(6, 0), wb);
  Qb("/dev/tty", O.K(5, 0));
  Qb("/dev/tty1", O.K(6, 0));
  var a = new Uint8Array(1024), b = 0, c = () => {
    0 === b && (b = lb(a).byteLength);
    return a[--b];
  };
  O.A("/dev", "random", c);
  O.A("/dev", "urandom", c);
  O.mkdir("/dev/shm");
  O.mkdir("/dev/shm/tmp");
})();
(function() {
  O.mkdir("/proc");
  var a = O.mkdir("/proc/self");
  O.mkdir("/proc/self/fd");
  O.o({o() {
    var b = O.createNode(a, "fd", 16895, 73);
    b.h = {lookup(c, d) {
      var f = U(+d);
      c = {parent:null, o:{sa:"fake"}, h:{readlink:() => f.path},};
      return c.parent = c;
    }};
    return b;
  }}, {}, "/proc/self/fd");
})();
O.Ca = {MEMFS:Q,};
e.FS_createPath = O.W;
e.FS_createDataFile = O.T;
e.FS_createPreloadedFile = O.Aa;
e.FS_unlink = O.unlink;
e.FS_createLazyFile = O.ja;
e.FS_createDevice = O.A;
var yc = {__assert_fail:(a, b, c, d) => {
  k(`Assertion failed: ${L(a)}, at: ` + [b ? L(b) : "unknown filename", c, d ? L(d) : "unknown function"]);
}, __syscall_dup:function(a) {
  try {
    var b = U(a);
    return Ob(b).fd;
  } catch (c) {
    if ("undefined" == typeof O || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.l;
  }
}, __syscall_dup3:function(a, b, c) {
  try {
    var d = U(a);
    t(!c);
    if (d.fd === b) {
      return -28;
    }
    if (0 > b || b >= O.ha) {
      return -8;
    }
    var f = O.ma(b);
    f && O.close(f);
    return Ob(d, b).fd;
  } catch (g) {
    if ("undefined" == typeof O || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.l;
  }
}, __syscall_fcntl64:function(a, b, c) {
  Yb = c;
  try {
    var d = U(a);
    switch(b) {
      case 0:
        var f = V();
        if (0 > f) {
          break;
        }
        for (; O.streams[f];) {
          f++;
        }
        return Ob(d, f).fd;
      case 1:
      case 2:
        return 0;
      case 3:
        return d.flags;
      case 4:
        return f = V(), d.flags |= f, 0;
      case 12:
        return f = V(), Aa[f + 0 >> 1] = 2, 0;
      case 13:
      case 14:
        return 0;
    }
    return -28;
  } catch (g) {
    if ("undefined" == typeof O || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.l;
  }
}, __syscall_fstat64:function(a, b) {
  try {
    var c = U(a);
    return Xb(O.stat, c.path, b);
  } catch (d) {
    if ("undefined" == typeof O || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.l;
  }
}, __syscall_getdents64:function(a, b, c) {
  try {
    var d = U(a);
    d.J || (d.J = O.readdir(d.path));
    a = 0;
    for (var f = O.u(d, 0, 1), g = Math.floor(f / 280); g < d.J.length && a + 280 <= c;) {
      var h = d.J[g];
      if ("." === h) {
        var m = d.node.id;
        var p = 4;
      } else if (".." === h) {
        m = T(d.path, {parent:!0}).node.id, p = 4;
      } else {
        var r = S(d.node, h);
        m = r.id;
        p = 8192 === (r.mode & 61440) ? 2 : R(r.mode) ? 4 : 40960 === (r.mode & 61440) ? 10 : 8;
      }
      t(m);
      C[b + a >> 3] = BigInt(m);
      C[b + a + 8 >> 3] = BigInt(280 * (g + 1));
      Aa[b + a + 16 >> 1] = 280;
      x[b + a + 18] = p;
      Zb(h, b + a + 19, 256);
      a += 280;
      g += 1;
    }
    O.u(d, 280 * g, 0);
    return a;
  } catch (z) {
    if ("undefined" == typeof O || "ErrnoError" !== z.name) {
      throw z;
    }
    return -z.l;
  }
}, __syscall_ioctl:function(a, b, c) {
  Yb = c;
  try {
    var d = U(a);
    switch(b) {
      case 21509:
        return d.tty ? 0 : -59;
      case 21505:
        if (!d.tty) {
          return -59;
        }
        if (d.tty.I.Ea) {
          a = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
          var f = V();
          y[f >> 2] = 25856;
          y[f + 4 >> 2] = 5;
          y[f + 8 >> 2] = 191;
          y[f + 12 >> 2] = 35387;
          for (var g = 0; 32 > g; g++) {
            x[f + g + 17] = a[g] || 0;
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
          for (f = V(), a = [], g = 0; 32 > g; g++) {
            a.push(x[f + g + 17]);
          }
        }
        return 0;
      case 21519:
        if (!d.tty) {
          return -59;
        }
        f = V();
        return y[f >> 2] = 0;
      case 21520:
        return d.tty ? -28 : -59;
      case 21531:
        return f = V(), O.aa(d, b, f);
      case 21523:
        if (!d.tty) {
          return -59;
        }
        d.tty.I.Ga && (g = [24, 80], f = V(), Aa[f >> 1] = g[0], Aa[f + 2 >> 1] = g[1]);
        return 0;
      case 21524:
        return d.tty ? 0 : -59;
      case 21515:
        return d.tty ? 0 : -59;
      default:
        return -28;
    }
  } catch (h) {
    if ("undefined" == typeof O || "ErrnoError" !== h.name) {
      throw h;
    }
    return -h.l;
  }
}, __syscall_lstat64:function(a, b) {
  try {
    return a = L(a), Xb(O.lstat, a, b);
  } catch (c) {
    if ("undefined" == typeof O || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.l;
  }
}, __syscall_newfstatat:function(a, b, c, d) {
  try {
    b = L(b);
    var f = d & 256, g = d & 4096;
    d &= -6401;
    t(!d, `unknown flags in __syscall_newfstatat: ${d}`);
    b = Wb(a, b, g);
    return Xb(f ? O.lstat : O.stat, b, c);
  } catch (h) {
    if ("undefined" == typeof O || "ErrnoError" !== h.name) {
      throw h;
    }
    return -h.l;
  }
}, __syscall_openat:function(a, b, c, d) {
  Yb = d;
  try {
    b = L(b);
    b = Wb(a, b);
    var f = d ? V() : 0;
    return O.open(b, c, f).fd;
  } catch (g) {
    if ("undefined" == typeof O || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.l;
  }
}, __syscall_renameat:function(a, b, c, d) {
  try {
    return b = L(b), d = L(d), b = Wb(a, b), d = Wb(c, d), O.rename(b, d), 0;
  } catch (f) {
    if ("undefined" == typeof O || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.l;
  }
}, __syscall_rmdir:function(a) {
  try {
    return a = L(a), O.rmdir(a), 0;
  } catch (b) {
    if ("undefined" == typeof O || "ErrnoError" !== b.name) {
      throw b;
    }
    return -b.l;
  }
}, __syscall_stat64:function(a, b) {
  try {
    return a = L(a), Xb(O.stat, a, b);
  } catch (c) {
    if ("undefined" == typeof O || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.l;
  }
}, __syscall_unlinkat:function(a, b, c) {
  try {
    return b = L(b), b = Wb(a, b), 0 === c ? O.unlink(b) : 512 === c ? O.rmdir(b) : k("Invalid flags passed to unlinkat"), 0;
  } catch (d) {
    if ("undefined" == typeof O || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.l;
  }
}, _emscripten_fs_load_embedded_files:a => {
  do {
    var b = A[a >> 2];
    a += 4;
    var c = A[a >> 2];
    a += 4;
    var d = A[a >> 2];
    a += 4;
    b = L(b);
    O.W("/", ib(b), !0, !0);
    O.T(b, null, x.subarray(d, d + c), !0, !0, !0);
  } while (A[a >> 2]);
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
  y[b + 28 >> 2] = (0 !== c % 4 || 0 === c % 100 && 0 !== c % 400 ? ac : $b)[a.getMonth()] + a.getDate() - 1 | 0;
  y[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
  c = (new Date(a.getFullYear(), 6, 1)).getTimezoneOffset();
  var d = (new Date(a.getFullYear(), 0, 1)).getTimezoneOffset();
  y[b + 32 >> 2] = (c != d && a.getTimezoneOffset() == Math.min(d, c)) | 0;
}, _tzset_js:(a, b, c, d) => {
  var f = (new Date()).getFullYear(), g = new Date(f, 0, 1), h = new Date(f, 6, 1);
  f = g.getTimezoneOffset();
  var m = h.getTimezoneOffset();
  A[a >> 2] = 60 * Math.max(f, m);
  y[b >> 2] = Number(f != m);
  a = p => p.toLocaleTimeString(void 0, {hour12:!1, timeZoneName:"short"}).split(" ")[1];
  g = a(g);
  h = a(h);
  t(g);
  t(h);
  t(16 >= ob(g), `timezone name truncated to fit in TZNAME_MAX (${g})`);
  t(16 >= ob(h), `timezone name truncated to fit in TZNAME_MAX (${h})`);
  m < f ? (Zb(g, c, 17), Zb(h, d, 17)) : (Zb(g, d, 17), Zb(h, c, 17));
}, emscripten_date_now:() => Date.now(), emscripten_get_now:() => performance.now(), emscripten_resize_heap:a => {
  var b = ya.length;
  a >>>= 0;
  t(a > b);
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
      var g = va.buffer, h = (d - g.byteLength + 65535) / 65536;
      try {
        va.grow(h);
        Ba();
        var m = 1;
        break a;
      } catch (p) {
        u(`growMemory: Attempted to grow heap from ${g.byteLength} bytes to ${d} bytes, but got error: ${p}`);
      }
      m = void 0;
    }
    if (m) {
      return !0;
    }
  }
  u(`Failed to grow the heap from ${b} bytes to ${f} bytes, not enough memory!`);
  return !1;
}, environ_get:(a, b) => {
  var c = 0;
  dc().forEach((d, f) => {
    var g = b + c;
    f = A[a + 4 * f >> 2] = g;
    for (g = 0; g < d.length; ++g) {
      t(d.charCodeAt(g) === (d.charCodeAt(g) & 255)), x[f++] = d.charCodeAt(g);
    }
    x[f] = 0;
    c += d.length + 1;
  });
  return 0;
}, environ_sizes_get:(a, b) => {
  var c = dc();
  A[a >> 2] = c.length;
  var d = 0;
  c.forEach(f => d += f.length + 1);
  A[b >> 2] = d;
  return 0;
}, exit:fc, fd_close:function(a) {
  try {
    var b = U(a);
    O.close(b);
    return 0;
  } catch (c) {
    if ("undefined" == typeof O || "ErrnoError" !== c.name) {
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
    var g = U(a), h = gc(g, b, c, d);
    A[f >> 2] = h;
    return 0;
  } catch (m) {
    if ("undefined" == typeof O || "ErrnoError" !== m.name) {
      throw m;
    }
    return m.l;
  }
}, fd_pwrite:function(a, b, c, d, f) {
  d = -9007199254740992 > d || 9007199254740992 < d ? NaN : Number(d);
  try {
    if (isNaN(d)) {
      return 61;
    }
    var g = U(a), h = hc(g, b, c, d);
    A[f >> 2] = h;
    return 0;
  } catch (m) {
    if ("undefined" == typeof O || "ErrnoError" !== m.name) {
      throw m;
    }
    return m.l;
  }
}, fd_read:function(a, b, c, d) {
  try {
    var f = U(a), g = gc(f, b, c);
    A[d >> 2] = g;
    return 0;
  } catch (h) {
    if ("undefined" == typeof O || "ErrnoError" !== h.name) {
      throw h;
    }
    return h.l;
  }
}, fd_seek:function(a, b, c, d) {
  b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
  try {
    if (isNaN(b)) {
      return 61;
    }
    var f = U(a);
    O.u(f, b, c);
    C[d >> 3] = BigInt(f.position);
    f.J && 0 === b && 0 === c && (f.J = null);
    return 0;
  } catch (g) {
    if ("undefined" == typeof O || "ErrnoError" !== g.name) {
      throw g;
    }
    return g.l;
  }
}, fd_write:function(a, b, c, d) {
  try {
    var f = U(a), g = hc(f, b, c);
    A[d >> 2] = g;
    return 0;
  } catch (h) {
    if ("undefined" == typeof O || "ErrnoError" !== h.name) {
      throw h;
    }
    return h.l;
  }
}, invoke_ii:pc, invoke_iii:qc, invoke_iiii:rc, invoke_iiiii:sc, invoke_iiiiiii:tc, invoke_vi:uc, invoke_vii:vc, invoke_viii:wc, invoke_viiii:xc}, J = function() {
  function a(d) {
    J = d.exports;
    va = J.memory;
    t(va, "memory not found in wasm exports");
    Ba();
    kc = J.__indirect_function_table;
    t(kc, "table not found in wasm exports");
    Ja.unshift(J.__wasm_call_ctors);
    Sa("wasm-instantiate");
    return J;
  }
  var b = {env:yc, wasi_snapshot_preview1:yc,};
  Ra("wasm-instantiate");
  var c = e;
  if (e.instantiateWasm) {
    try {
      return e.instantiateWasm(b, a);
    } catch (d) {
      u(`Module.instantiateWasm callback failed with error: ${d}`), ba(d);
    }
  }
  Va ||= e.locateFile ? Ta("gs.wasm") ? "gs.wasm" : e.locateFile ? e.locateFile("gs.wasm", q) : q + "gs.wasm" : (new URL("gs.wasm", import.meta.url)).href;
  Za(b, function(d) {
    t(e === c, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    c = null;
    a(d.instance);
  }).catch(ba);
  return {};
}(), zc = e._main = Ua("__main_argc_argv", 2), Ub = Ua("strerror", 1), Vb = Ua("fflush", 1), Y = Ua("setThrew", 2), Ac = () => (Ac = J.emscripten_stack_init)(), Da = () => (Da = J.emscripten_stack_get_end)(), Z = a => (Z = J._emscripten_stack_restore)(a), Bc = a => (Bc = J._emscripten_stack_alloc)(a), W = () => (W = J.emscripten_stack_get_current)();
e.___emscripten_embedded_file_data = 6123296;
function pc(a, b) {
  var c = W();
  try {
    return X(a)(b);
  } catch (d) {
    Z(c);
    if (d !== d + 0) {
      throw d;
    }
    Y(1, 0);
  }
}
function vc(a, b, c) {
  var d = W();
  try {
    X(a)(b, c);
  } catch (f) {
    Z(d);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function qc(a, b, c) {
  var d = W();
  try {
    return X(a)(b, c);
  } catch (f) {
    Z(d);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function rc(a, b, c, d) {
  var f = W();
  try {
    return X(a)(b, c, d);
  } catch (g) {
    Z(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function uc(a, b) {
  var c = W();
  try {
    X(a)(b);
  } catch (d) {
    Z(c);
    if (d !== d + 0) {
      throw d;
    }
    Y(1, 0);
  }
}
function wc(a, b, c, d) {
  var f = W();
  try {
    X(a)(b, c, d);
  } catch (g) {
    Z(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function sc(a, b, c, d, f) {
  var g = W();
  try {
    return X(a)(b, c, d, f);
  } catch (h) {
    Z(g);
    if (h !== h + 0) {
      throw h;
    }
    Y(1, 0);
  }
}
function tc(a, b, c, d, f, g, h) {
  var m = W();
  try {
    return X(a)(b, c, d, f, g, h);
  } catch (p) {
    Z(m);
    if (p !== p + 0) {
      throw p;
    }
    Y(1, 0);
  }
}
function xc(a, b, c, d, f) {
  var g = W();
  try {
    X(a)(b, c, d, f);
  } catch (h) {
    Z(g);
    if (h !== h + 0) {
      throw h;
    }
    Y(1, 0);
  }
}
e.addRunDependency = Ra;
e.removeRunDependency = Sa;
e.callMain = Cc;
e.FS_createPreloadedFile = Cb;
e.FS_unlink = a => O.unlink(a);
e.FS_createPath = lc;
e.FS_createDevice = nc;
e.FS = O;
e.FS_createDataFile = (a, b, c, d, f, g) => {
  O.T(a, b, c, d, f, g);
};
e.FS_createLazyFile = mc;
"writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 getTempRet0 setTempRet0 arraySum addDays inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr emscriptenLog readEmAsmArgs jstoi_q listenOnce autoResumeAudioContext getDynCaller dynCall runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asmjsMangle HandleAllocator getNativeTypeSize STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS getCFunc ccall cwrap uleb128Encode sigToWasmTypes generateFuncType convertJsFunctionToWasm getEmptyTableSlot updateTableMap getFunctionAddress addFunction removeFunction reallyNegative unSign strLen reSign formatString intArrayToString AsciiToString UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 stringToNewUTF8 writeArrayToMemory registerKeyEventCallback maybeCStringToJsString findEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData battery registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace getCallstack convertPCtoSourceLocation checkWasiClock wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags createDyncallWrapper safeSetTimeout setImmediateWrapped clearImmediateWrapped polyfillSetImmediate getPromise makePromise idsToPromises makePromiseCallback ExceptionInfo findMatchingCatch Browser_asyncPrepareDataCounter setMainLoop getSocketFromFD getSocketAddress FS_mkdirTree _setNetworkCallback heapObjectForWebGLType toTypedArrayIndex webgl_enable_ANGLE_instanced_arrays webgl_enable_OES_vertex_array_object webgl_enable_WEBGL_draw_buffers webgl_enable_WEBGL_multi_draw emscriptenWebGLGet computeUnpackAlignedImageSize colorChannelsInGlTextureFormat emscriptenWebGLGetTexPixelData emscriptenWebGLGetUniform webglGetUniformLocation webglPrepareUniformLocationsBeforeFirstUse webglGetLeftBracePos emscriptenWebGLGetVertexAttrib __glGetActiveAttribOrUniform writeGLArray registerWebGlEventCallback runAndAbortIfError ALLOC_NORMAL ALLOC_STACK allocate writeStringToMemory writeAsciiToMemory setErrNo demangle stackTrace".split(" ").forEach(function(a) {
  "undefined" == typeof globalThis || Object.getOwnPropertyDescriptor(globalThis, a) || Object.defineProperty(globalThis, a, {configurable:!0, get() {
    var b = `\`${a}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`, c = a;
    c.startsWith("_") || (c = "$" + a);
    b += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`;
    $a(a) && (b += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
    K(b);
  }});
  bb(a);
});
"run addOnPreRun addOnInit addOnPreMain addOnExit addOnPostRun out err abort wasmMemory wasmExports writeStackCookie checkStackCookie MAX_INT53 MIN_INT53 bigintToI53Checked stackSave stackRestore stackAlloc ptrToString zeroMemory exitJS getHeapMax growMemory ENV MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE isLeapYear ydayFromDate ERRNO_CODES strError DNS Protocols Sockets initRandomFill randomFill timers warnOnce readEmAsmArgsArray jstoi_s getExecutableName handleException keepRuntimeAlive asyncLoad alignMemory mmapAlloc wasmTable noExitRuntime freeTableIndexes functionsInTableMap setValue getValue PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString stringToUTF8Array stringToUTF8 lengthBytesUTF8 intArrayFromString stringToAscii UTF16Decoder stringToUTF8OnStack JSEvents specialHTMLTargets findCanvasEventTarget currentFullscreenStrategy restoreOldWindowedStyle UNWIND_CACHE ExitStatus getEnvStrings doReadv doWritev promiseMap uncaughtExceptionCount exceptionLast exceptionCaught Browser getPreloadedImageData__data wget SYSCALLS preloadPlugins FS_modeStringToFlags FS_getMode FS_stdin_getChar_buffer FS_stdin_getChar FS_readFile MEMFS TTY PIPEFS SOCKFS tempFixedLengthArray miniTempWebGLFloatBuffers miniTempWebGLIntBuffers GL AL GLUT EGL GLEW IDBStore SDL SDL_gfx allocateUTF8 allocateUTF8OnStack print printErr".split(" ").forEach(bb);
var Dc;
Oa = function Ec() {
  Dc || Fc();
  Dc || (Oa = Ec);
};
function Cc(a = []) {
  t(0 == G, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
  t(0 == Ia.length, "cannot call main when preRun functions remain to be called");
  a.unshift(la);
  var b = a.length, c = Bc(4 * (b + 1)), d = c;
  a.forEach(g => {
    var h = A, m = d >> 2, p = ob(g) + 1, r = Bc(p);
    Zb(g, r, p);
    h[m] = r;
    d += 4;
  });
  A[d >> 2] = 0;
  try {
    var f = zc(b, c);
    fc(f, !0);
    return f;
  } catch (g) {
    return ic(g);
  }
}
function Fc() {
  var a = ka;
  function b() {
    if (!Dc && (Dc = !0, e.calledRun = !0, !wa)) {
      t(!Ma);
      Ma = !0;
      Ea();
      e.noFSInit || O.M.U || O.M();
      O.oa = !1;
      db(Ja);
      Ea();
      db(Ka);
      aa(e);
      e.onRuntimeInitialized?.();
      Gc && Cc(a);
      Ea();
      if (e.postRun) {
        for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) {
          var c = e.postRun.shift();
          La.unshift(c);
        }
      }
      db(La);
    }
  }
  if (!(0 < G)) {
    Ac();
    Ca();
    if (e.preRun) {
      for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) {
        Na();
      }
    }
    db(Ia);
    0 < G || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        e.setStatus("");
      }, 1);
      b();
    }, 1)) : b(), Ea());
  }
}
function ec() {
  var a = ta, b = u, c = !1;
  ta = u = () => {
    c = !0;
  };
  try {
    Vb(0), ["stdout", "stderr"].forEach(function(d) {
      (d = Rb("/dev/" + d)) && rb[d.object.rdev]?.output?.length && (c = !0);
    });
  } catch (d) {
  }
  ta = a;
  u = b;
  c && K("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.");
}
if (e.preInit) {
  for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;) {
    e.preInit.pop()();
  }
}
var Gc = !1;
e.noInitialRun && (Gc = !1);
Fc();
moduleRtn = ca;
for (const a of Object.keys(e)) {
  a in moduleArg || Object.defineProperty(moduleArg, a, {configurable:!0, get() {
    k(`Access to module property ('${a}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
  }});
}
;


  return moduleRtn;
}
);
})();
export default gs;
