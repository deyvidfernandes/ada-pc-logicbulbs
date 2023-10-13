// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iGaHM":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "1a068cfc4473d963";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5XAc8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "relottie", ()=>Nn) //# sourceMappingURL=out.js.map
;
var _chunkU2GK2GFRMjs = require("./chunk-U2GK2GFR.mjs");
var _chunkXNFEUXDSMjs = require("./chunk-XNFEUXDS.mjs");
var global = arguments[3];
var ua = (0, _chunkU2GK2GFRMjs.a)((a, n)=>{
    var i = 200, s = "__lodash_hash_undefined__", f = 800, m = 16, S = 9007199254740991, b = "[object Arguments]", w = "[object Array]", x = "[object AsyncFunction]", T = "[object Boolean]", A = "[object Date]", Y = "[object Error]", H = "[object Function]", X = "[object GeneratorFunction]", V = "[object Map]", P = "[object Number]", O = "[object Null]", F = "[object Object]", Q = "[object Proxy]", ee = "[object RegExp]", ne = "[object Set]", z = "[object String]", R = "[object Undefined]", J = "[object WeakMap]", ie = "[object ArrayBuffer]", et = "[object DataView]", tt = "[object Float32Array]", Ne = "[object Float64Array]", ke = "[object Int8Array]", at = "[object Int16Array]", rt = "[object Int32Array]", nt = "[object Uint8Array]", it = "[object Uint8ClampedArray]", ot = "[object Uint16Array]", Fe = "[object Uint32Array]", lt = /[\\^$.*+?()[\]{}|]/g, Ge = /^\[object .+?Constructor\]$/, st = /^(?:0|[1-9]\d*)$/, M = {};
    M[tt] = M[Ne] = M[ke] = M[at] = M[rt] = M[nt] = M[it] = M[ot] = M[Fe] = !0, M[b] = M[w] = M[ie] = M[T] = M[et] = M[A] = M[Y] = M[H] = M[V] = M[P] = M[F] = M[ee] = M[ne] = M[z] = M[J] = !1;
    var Ke = typeof global == "object" && global && global.Object === Object && global, g = typeof self == "object" && self && self.Object === Object && self, v = Ke || g || Function("return this")(), E = typeof a == "object" && a && !a.nodeType && a, L = E && typeof n == "object" && n && !n.nodeType && n, W = L && L.exports === E, te = W && Ke.process, B = function() {
        try {
            var r = L && L.require && L.require("util").types;
            return r || te && te.binding && te.binding("util");
        } catch  {}
    }(), ae = B && B.isTypedArray;
    function K(r, o, u) {
        switch(u.length){
            case 0:
                return r.call(o);
            case 1:
                return r.call(o, u[0]);
            case 2:
                return r.call(o, u[0], u[1]);
            case 3:
                return r.call(o, u[0], u[1], u[2]);
        }
        return r.apply(o, u);
    }
    function se(r, o) {
        for(var u = -1, k = Array(r); ++u < r;)k[u] = o(u);
        return k;
    }
    function Te(r) {
        return function(o) {
            return r(o);
        };
    }
    function Ae(r, o) {
        return r?.[o];
    }
    function _e(r, o) {
        return function(u) {
            return r(o(u));
        };
    }
    var je = Array.prototype, oe = Function.prototype, fe = Object.prototype, G = v["__core-js_shared__"], y = oe.toString, h = fe.hasOwnProperty, _ = function() {
        var r = /[^.]+$/.exec(G && G.keys && G.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
    }(), N = fe.toString, me = y.call(Object), ct = RegExp("^" + y.call(h).replace(lt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), $e = W ? v.Buffer : void 0, _t = v.Symbol, jt = v.Uint8Array, Et = $e ? $e.allocUnsafe : void 0, Lt = _e(Object.getPrototypeOf, Object), Dt = Object.create, ba = fe.propertyIsEnumerable, va = je.splice, be = _t ? _t.toStringTag : void 0, Ue = function() {
        try {
            var r = ft(Object, "defineProperty");
            return r({}, "", {}), r;
        } catch  {}
    }(), xa = $e ? $e.isBuffer : void 0, It = Math.max, wa = Date.now, zt = ft(v, "Map"), Ee = ft(Object, "create"), Ta = function() {
        function r() {}
        return function(o) {
            if (!xe(o)) return {};
            if (Dt) return Dt(o);
            r.prototype = o;
            var u = new r;
            return r.prototype = void 0, u;
        };
    }();
    function ve(r) {
        var o = -1, u = r == null ? 0 : r.length;
        for(this.clear(); ++o < u;){
            var k = r[o];
            this.set(k[0], k[1]);
        }
    }
    function Pa() {
        this.__data__ = Ee ? Ee(null) : {}, this.size = 0;
    }
    function Va(r) {
        var o = this.has(r) && delete this.__data__[r];
        return this.size -= o ? 1 : 0, o;
    }
    function Oa(r) {
        var o = this.__data__;
        if (Ee) {
            var u = o[r];
            return u === s ? void 0 : u;
        }
        return h.call(o, r) ? o[r] : void 0;
    }
    function Ca(r) {
        var o = this.__data__;
        return Ee ? o[r] !== void 0 : h.call(o, r);
    }
    function Aa(r, o) {
        var u = this.__data__;
        return this.size += this.has(r) ? 0 : 1, u[r] = Ee && o === void 0 ? s : o, this;
    }
    ve.prototype.clear = Pa, ve.prototype.delete = Va, ve.prototype.get = Oa, ve.prototype.has = Ca, ve.prototype.set = Aa;
    function he(r) {
        var o = -1, u = r == null ? 0 : r.length;
        for(this.clear(); ++o < u;){
            var k = r[o];
            this.set(k[0], k[1]);
        }
    }
    function _a() {
        this.__data__ = [], this.size = 0;
    }
    function ja(r) {
        var o = this.__data__, u = He(o, r);
        if (u < 0) return !1;
        var k = o.length - 1;
        return u == k ? o.pop() : va.call(o, u, 1), --this.size, !0;
    }
    function Ea(r) {
        var o = this.__data__, u = He(o, r);
        return u < 0 ? void 0 : o[u][1];
    }
    function La(r) {
        return He(this.__data__, r) > -1;
    }
    function Da(r, o) {
        var u = this.__data__, k = He(u, r);
        return k < 0 ? (++this.size, u.push([
            r,
            o
        ])) : u[k][1] = o, this;
    }
    he.prototype.clear = _a, he.prototype.delete = ja, he.prototype.get = Ea, he.prototype.has = La, he.prototype.set = Da;
    function Pe(r) {
        var o = -1, u = r == null ? 0 : r.length;
        for(this.clear(); ++o < u;){
            var k = r[o];
            this.set(k[0], k[1]);
        }
    }
    function Ia() {
        this.size = 0, this.__data__ = {
            hash: new ve,
            map: new (zt || he),
            string: new ve
        };
    }
    function za(r) {
        var o = Ze(this, r).delete(r);
        return this.size -= o ? 1 : 0, o;
    }
    function Ma(r) {
        return Ze(this, r).get(r);
    }
    function Ra(r) {
        return Ze(this, r).has(r);
    }
    function Ba(r, o) {
        var u = Ze(this, r), k = u.size;
        return u.set(r, o), this.size += u.size == k ? 0 : 1, this;
    }
    Pe.prototype.clear = Ia, Pe.prototype.delete = za, Pe.prototype.get = Ma, Pe.prototype.has = Ra, Pe.prototype.set = Ba;
    function Ve(r) {
        var o = this.__data__ = new he(r);
        this.size = o.size;
    }
    function Na() {
        this.__data__ = new he, this.size = 0;
    }
    function Fa(r) {
        var o = this.__data__, u = o.delete(r);
        return this.size = o.size, u;
    }
    function Ga(r) {
        return this.__data__.get(r);
    }
    function Ka(r) {
        return this.__data__.has(r);
    }
    function $a(r, o) {
        var u = this.__data__;
        if (u instanceof he) {
            var k = u.__data__;
            if (!zt || k.length < i - 1) return k.push([
                r,
                o
            ]), this.size = ++u.size, this;
            u = this.__data__ = new Pe(k);
        }
        return u.set(r, o), this.size = u.size, this;
    }
    Ve.prototype.clear = Na, Ve.prototype.delete = Fa, Ve.prototype.get = Ga, Ve.prototype.has = Ka, Ve.prototype.set = $a;
    function Ua(r, o) {
        var u = ht(r), k = !u && yt(r), I = !u && !k && Ft(r), $ = !u && !k && !I && Kt(r), q = u || k || I || $, D = q ? se(r.length, String) : [], Z = D.length;
        for(var ce in r)(o || h.call(r, ce)) && !(q && (ce == "length" || I && (ce == "offset" || ce == "parent") || $ && (ce == "buffer" || ce == "byteLength" || ce == "byteOffset") || Bt(ce, Z))) && D.push(ce);
        return D;
    }
    function ut(r, o, u) {
        (u !== void 0 && !We(r[o], u) || u === void 0 && !(o in r)) && pt(r, o, u);
    }
    function Ha(r, o, u) {
        var k = r[o];
        (!(h.call(r, o) && We(k, u)) || u === void 0 && !(o in r)) && pt(r, o, u);
    }
    function He(r, o) {
        for(var u = r.length; u--;)if (We(r[u][0], o)) return u;
        return -1;
    }
    function pt(r, o, u) {
        o == "__proto__" && Ue ? Ue(r, o, {
            configurable: !0,
            enumerable: !0,
            value: u,
            writable: !0
        }) : r[o] = u;
    }
    var qa = or();
    function qe(r) {
        return r == null ? r === void 0 ? R : O : be && be in Object(r) ? lr(r) : mr(r);
    }
    function Mt(r) {
        return Le(r) && qe(r) == b;
    }
    function Za(r) {
        if (!xe(r) || pr(r)) return !1;
        var o = gt(r) ? ct : Ge;
        return o.test(gr(r));
    }
    function Wa(r) {
        return Le(r) && Gt(r.length) && !!M[qe(r)];
    }
    function Xa(r) {
        if (!xe(r)) return fr(r);
        var o = Nt(r), u = [];
        for(var k in r)k == "constructor" && (o || !h.call(r, k)) || u.push(k);
        return u;
    }
    function Rt(r, o, u, k, I) {
        r !== o && qa(o, function($, q) {
            if (I || (I = new Ve), xe($)) Ja(r, o, q, u, Rt, k, I);
            else {
                var D = k ? k(mt(r, q), $, q + "", r, o, I) : void 0;
                D === void 0 && (D = $), ut(r, q, D);
            }
        }, $t);
    }
    function Ja(r, o, u, k, I, $, q) {
        var D = mt(r, u), Z = mt(o, u), ce = q.get(Z);
        if (ce) {
            ut(r, u, ce);
            return;
        }
        var le = $ ? $(D, Z, u + "", r, o, q) : void 0, De = le === void 0;
        if (De) {
            var St = ht(Z), kt = !St && Ft(Z), Ht = !St && !kt && Kt(Z);
            le = Z, St || kt || Ht ? ht(D) ? le = D : Sr(D) ? le = rr(D) : kt ? (De = !1, le = er(Z, !0)) : Ht ? (De = !1, le = ar(Z, !0)) : le = [] : kr(Z) || yt(Z) ? (le = D, yt(D) ? le = br(D) : (!xe(D) || gt(D)) && (le = sr(Z))) : De = !1;
        }
        De && (q.set(Z, le), I(le, Z, k, $, q), q.delete(Z)), ut(r, u, le);
    }
    function Ya(r, o) {
        return hr(yr(r, o, Ut), r + "");
    }
    var Qa = Ue ? function(r, o) {
        return Ue(r, "toString", {
            configurable: !0,
            enumerable: !1,
            value: xr(o),
            writable: !0
        });
    } : Ut;
    function er(r, o) {
        if (o) return r.slice();
        var u = r.length, k = Et ? Et(u) : new r.constructor(u);
        return r.copy(k), k;
    }
    function tr(r) {
        var o = new r.constructor(r.byteLength);
        return new jt(o).set(new jt(r)), o;
    }
    function ar(r, o) {
        var u = o ? tr(r.buffer) : r.buffer;
        return new r.constructor(u, r.byteOffset, r.length);
    }
    function rr(r, o) {
        var u = -1, k = r.length;
        for(o || (o = Array(k)); ++u < k;)o[u] = r[u];
        return o;
    }
    function nr(r, o, u, k) {
        var I = !u;
        u || (u = {});
        for(var $ = -1, q = o.length; ++$ < q;){
            var D = o[$], Z = k ? k(u[D], r[D], D, u, r) : void 0;
            Z === void 0 && (Z = r[D]), I ? pt(u, D, Z) : Ha(u, D, Z);
        }
        return u;
    }
    function ir(r) {
        return Ya(function(o, u) {
            var k = -1, I = u.length, $ = I > 1 ? u[I - 1] : void 0, q = I > 2 ? u[2] : void 0;
            for($ = r.length > 3 && typeof $ == "function" ? (I--, $) : void 0, q && cr(u[0], u[1], q) && ($ = I < 3 ? void 0 : $, I = 1), o = Object(o); ++k < I;){
                var D = u[k];
                D && r(o, D, k, $);
            }
            return o;
        });
    }
    function or(r) {
        return function(o, u, k) {
            for(var I = -1, $ = Object(o), q = k(o), D = q.length; D--;){
                var Z = q[r ? D : ++I];
                if (u($[Z], Z, $) === !1) break;
            }
            return o;
        };
    }
    function Ze(r, o) {
        var u = r.__data__;
        return ur(o) ? u[typeof o == "string" ? "string" : "hash"] : u.map;
    }
    function ft(r, o) {
        var u = Ae(r, o);
        return Za(u) ? u : void 0;
    }
    function lr(r) {
        var o = h.call(r, be), u = r[be];
        try {
            r[be] = void 0;
            var k = !0;
        } catch  {}
        var I = N.call(r);
        return k && (o ? r[be] = u : delete r[be]), I;
    }
    function sr(r) {
        return typeof r.constructor == "function" && !Nt(r) ? Ta(Lt(r)) : {};
    }
    function Bt(r, o) {
        var u = typeof r;
        return o = o ?? S, !!o && (u == "number" || u != "symbol" && st.test(r)) && r > -1 && r % 1 == 0 && r < o;
    }
    function cr(r, o, u) {
        if (!xe(u)) return !1;
        var k = typeof o;
        return (k == "number" ? dt(u) && Bt(o, u.length) : k == "string" && o in u) ? We(u[o], r) : !1;
    }
    function ur(r) {
        var o = typeof r;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? r !== "__proto__" : r === null;
    }
    function pr(r) {
        return !!_ && _ in r;
    }
    function Nt(r) {
        var o = r && r.constructor, u = typeof o == "function" && o.prototype || fe;
        return r === u;
    }
    function fr(r) {
        var o = [];
        if (r != null) for(var u in Object(r))o.push(u);
        return o;
    }
    function mr(r) {
        return N.call(r);
    }
    function yr(r, o, u) {
        return o = It(o === void 0 ? r.length - 1 : o, 0), function() {
            for(var k = arguments, I = -1, $ = It(k.length - o, 0), q = Array($); ++I < $;)q[I] = k[o + I];
            I = -1;
            for(var D = Array(o + 1); ++I < o;)D[I] = k[I];
            return D[o] = u(q), K(r, this, D);
        };
    }
    function mt(r, o) {
        if (!(o === "constructor" && typeof r[o] == "function") && o != "__proto__") return r[o];
    }
    var hr = dr(Qa);
    function dr(r) {
        var o = 0, u = 0;
        return function() {
            var k = wa(), I = m - (k - u);
            if (u = k, I > 0) {
                if (++o >= f) return arguments[0];
            } else o = 0;
            return r.apply(void 0, arguments);
        };
    }
    function gr(r) {
        if (r != null) {
            try {
                return y.call(r);
            } catch  {}
            try {
                return r + "";
            } catch  {}
        }
        return "";
    }
    function We(r, o) {
        return r === o || r !== r && o !== o;
    }
    var yt = Mt(function() {
        return arguments;
    }()) ? Mt : function(r) {
        return Le(r) && h.call(r, "callee") && !ba.call(r, "callee");
    }, ht = Array.isArray;
    function dt(r) {
        return r != null && Gt(r.length) && !gt(r);
    }
    function Sr(r) {
        return Le(r) && dt(r);
    }
    var Ft = xa || wr;
    function gt(r) {
        if (!xe(r)) return !1;
        var o = qe(r);
        return o == H || o == X || o == x || o == Q;
    }
    function Gt(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= S;
    }
    function xe(r) {
        var o = typeof r;
        return r != null && (o == "object" || o == "function");
    }
    function Le(r) {
        return r != null && typeof r == "object";
    }
    function kr(r) {
        if (!Le(r) || qe(r) != F) return !1;
        var o = Lt(r);
        if (o === null) return !0;
        var u = h.call(o, "constructor") && o.constructor;
        return typeof u == "function" && u instanceof u && y.call(u) == me;
    }
    var Kt = ae ? Te(ae) : Wa;
    function br(r) {
        return nr(r, $t(r));
    }
    function $t(r) {
        return dt(r) ? Ua(r, !0) : Xa(r);
    }
    var vr = ir(function(r, o, u) {
        Rt(r, o, u);
    });
    function xr(r) {
        return function() {
            return r;
        };
    }
    function Ut(r) {
        return r;
    }
    function wr() {
        return !1;
    }
    n.exports = vr;
}), Tr = (0, _chunkU2GK2GFRMjs.a)((a)=>{
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var n = "[", i = "]", s = "{", f = "}", m = ":", S = ",", b = "true", w = "false", x = "null", T = '"', A = new Map([
        [
            "t",
            b
        ],
        [
            "f",
            w
        ],
        [
            "n",
            x
        ]
    ]), Y = new Map([
        [
            T,
            T
        ],
        [
            "\\",
            "\\"
        ],
        [
            "/",
            "/"
        ],
        [
            "b",
            "\b"
        ],
        [
            "n",
            `
`
        ],
        [
            "f",
            "\f"
        ],
        [
            "r",
            "\r"
        ],
        [
            "t",
            "	"
        ]
    ]), H = new Map([
        [
            n,
            "Punctuator"
        ],
        [
            i,
            "Punctuator"
        ],
        [
            s,
            "Punctuator"
        ],
        [
            f,
            "Punctuator"
        ],
        [
            m,
            "Punctuator"
        ],
        [
            S,
            "Punctuator"
        ],
        [
            b,
            "Boolean"
        ],
        [
            w,
            "Boolean"
        ],
        [
            x,
            "Null"
        ]
    ]), X = class extends Error {
        constructor(g, { line: v, column: E, index: L }){
            super(`${g} (${v}:${E})`), this.line = v, this.column = E, this.index = L;
        }
    }, V = class extends X {
        constructor(g, v){
            super(`Unexpected character ${g} found.`, v);
        }
    }, P = class extends X {
        constructor(g){
            super(`Unexpected token ${g.type}(${g.value}) found.`, g.loc.start);
        }
    }, O = class extends X {
        constructor(g){
            super("Unexpected end of input found.", g);
        }
    }, F = '"', Q = "/", ee = "*", ne = {
        comments: !1,
        ranges: !1
    };
    function z(g) {
        return /[\s\n]/.test(g);
    }
    function R(g) {
        return g >= "0" && g <= "9";
    }
    function J(g) {
        return R(g) || /[a-f]/i.test(g);
    }
    function ie(g) {
        return g >= "1" && g <= "9";
    }
    function et(g) {
        return /[tfn]/.test(g);
    }
    function tt(g) {
        return R(g) || g === "." || g === "-";
    }
    function Ne(g, v) {
        v = Object.freeze({
            ...ne,
            ...v
        });
        let E = -1, L = 1, W = 0, te = !1, B = [];
        function ae(y, h, _, N) {
            let me = _.offset + h.length, ct = v.ranges ? {
                range: [
                    _.offset,
                    me
                ]
            } : void 0;
            return {
                type: y,
                value: h,
                loc: {
                    start: _,
                    end: N || {
                        line: _.line,
                        column: _.column + h.length,
                        offset: me
                    }
                },
                ...ct
            };
        }
        function K() {
            let y = g.charAt(++E);
            return te ? (L++, W = 1, te = !1) : W++, y === "\r" ? (te = !0, g.charAt(E + 1) === `
` && E++) : y === `
` && (te = !0), y;
        }
        function se() {
            return {
                line: L,
                column: W,
                offset: E
            };
        }
        function Te(y) {
            let h = A.get(y);
            if (g.slice(E, E + h.length) === h) return E += h.length - 1, W += h.length - 1, {
                value: h,
                c: K()
            };
            for(let _ = 1; _ < h.length; _++)h[_] !== g.charAt(E + _) && oe(K());
        }
        function Ae(y) {
            let h = y;
            for(y = K(); y && y !== F;){
                if (y === "\\") {
                    if (h += y, y = K(), Y.has(y)) h += y;
                    else if (y === "u") {
                        h += y;
                        for(let _ = 0; _ < 4; _++)y = K(), J(y) ? h += y : oe(y);
                    } else oe(y);
                } else h += y;
                y = K();
            }
            return y || fe(), h += y, {
                value: h,
                c: K()
            };
        }
        function _e(y) {
            let h = "";
            if (y === "-" && (h += y, y = K(), R(y) || oe(y)), y === "0") h += y, y = K(), R(y) && oe(y);
            else {
                ie(y) || oe(y);
                do h += y, y = K();
                while (R(y));
            }
            if (y === ".") do h += y, y = K();
            while (R(y));
            if (y === "e" || y === "E") for(h += y, y = K(), (y === "+" || y === "-") && (h += y, y = K()); R(y);)h += y, y = K();
            return {
                value: h,
                c: y
            };
        }
        function je(y) {
            let h = y;
            if (y = K(), y === "/") {
                do h += y, y = K();
                while (y && y !== "\r" && y !== `
`);
                return {
                    value: h,
                    c: y
                };
            }
            if (y === ee) {
                for(; y;)if (h += y, y = K(), y === ee && (h += y, y = K(), y === Q)) return h += y, y = K(), {
                    value: h,
                    c: y
                };
                fe();
            }
            oe(y);
        }
        function oe(y) {
            throw new V(y, se());
        }
        function fe() {
            throw new O(se());
        }
        let G = K();
        for(; E < g.length;){
            for(; z(G);)G = K();
            if (!G) break;
            let y = se();
            if (H.has(G)) B.push(ae(H.get(G), G, y)), G = K();
            else if (et(G)) {
                let h = Te(G), _ = h.value;
                G = h.c, B.push(ae(H.get(_), _, y));
            } else if (tt(G)) {
                let h = _e(G), _ = h.value;
                G = h.c, B.push(ae("Number", _, y));
            } else if (G === F) {
                let h = Ae(G), _ = h.value;
                G = h.c, B.push(ae("String", _, y));
            } else if (G === Q && v.comments) {
                let h = je(G), _ = h.value;
                G = h.c, B.push(ae(_.startsWith("//") ? "LineComment" : "BlockComment", _, y, se()));
            } else oe(G);
        }
        return B;
    }
    var ke = {
        document (g, v = {}) {
            return {
                type: "Document",
                body: g,
                ...v
            };
        },
        string (g, v = {}) {
            return {
                type: "String",
                value: g,
                ...v
            };
        },
        number (g, v = {}) {
            return {
                type: "Number",
                value: g,
                ...v
            };
        },
        boolean (g, v = {}) {
            return {
                type: "Boolean",
                value: g,
                ...v
            };
        },
        null (g = {}) {
            return {
                type: "Null",
                value: "null",
                ...g
            };
        },
        array (g, v = {}) {
            return {
                type: "Array",
                elements: g,
                ...v
            };
        },
        object (g, v = {}) {
            return {
                type: "Object",
                members: g,
                ...v
            };
        },
        member (g, v, E = {}) {
            return {
                type: "Member",
                name: g,
                value: v,
                ...E
            };
        }
    }, at = {
        tokens: !1,
        comments: !1,
        ranges: !1
    };
    function rt(g) {
        let v = g.value.slice(1, -1), E = "", L = v.indexOf("\\"), W = 0;
        for(; L >= 0;){
            E += v.slice(W, L);
            let te = v.charAt(L + 1);
            if (Y.has(te)) E += Y.get(te), W = L + 2;
            else if (te === "u") {
                let B = v.slice(L + 2, L + 6);
                if (B.length < 4 || /[^0-9a-f]/i.test(B)) throw new X(`Invalid unicode escape \\u${B}.`, {
                    line: g.loc.start.line,
                    column: g.loc.start.column + L,
                    offset: g.loc.start.offset + L
                });
                E += String.fromCharCode(parseInt(B, 16)), W = L + 6;
            } else throw new X(`Invalid escape \\${te}.`, {
                line: g.loc.start.line,
                column: g.loc.start.column + L,
                offset: g.loc.start.offset + L
            });
            L = v.indexOf("\\", W);
        }
        return E += v.slice(W), E;
    }
    function nt(g) {
        switch(g.type){
            case "Boolean":
                return g.value === "true";
            case "Number":
                return Number(g.value);
            case "Null":
                return null;
            case "String":
                return rt(g);
        }
    }
    function it(g, v) {
        v = Object.freeze({
            ...at,
            ...v
        });
        let E = Ne(g, {
            comments: !!v.comments,
            ranges: !!v.ranges
        }), L = 0;
        function W() {
            return E[L++];
        }
        function te() {
            let h = E[L++];
            return h && h.type.endsWith("Comment") ? te() : h;
        }
        let B = v.comments ? te : W;
        function ae(h, _) {
            if (!h || h.value !== _) throw new P(h);
        }
        function K(h, _) {
            if (!h || h.type !== _) throw new P(h);
        }
        function se(h, _) {
            return v.ranges ? {
                range: [
                    h.offset,
                    _.offset
                ]
            } : void 0;
        }
        function Te(h) {
            let _ = se(h.loc.start, h.loc.end);
            return {
                type: h.type,
                value: nt(h),
                loc: {
                    start: {
                        ...h.loc.start
                    },
                    end: {
                        ...h.loc.end
                    }
                },
                ..._
            };
        }
        function Ae(h) {
            K(h, "String");
            let _ = Te(h);
            h = B(), ae(h, ":");
            let N = oe(), me = se(_.loc.start, N.loc.end);
            return ke.member(_, N, {
                loc: {
                    start: {
                        ..._.loc.start
                    },
                    end: {
                        ...N.loc.end
                    }
                },
                ...me
            });
        }
        function _e(h) {
            ae(h, "{");
            let _ = [], N = B();
            if (N && N.value !== "}") do if (_.push(Ae(N)), N = B(), N.value === ",") N = B();
            else break;
            while (N);
            ae(N, "}");
            let me = se(h.loc.start, N.loc.end);
            return ke.object(_, {
                loc: {
                    start: {
                        ...h.loc.start
                    },
                    end: {
                        ...N.loc.end
                    }
                },
                ...me
            });
        }
        function je(h) {
            ae(h, "[");
            let _ = [], N = B();
            if (N && N.value !== "]") do if (_.push(oe(N)), N = B(), N.value === ",") N = B();
            else break;
            while (N);
            ae(N, "]");
            let me = se(h.loc.start, N.loc.end);
            return ke.array(_, {
                type: "Array",
                elements: _,
                loc: {
                    start: {
                        ...h.loc.start
                    },
                    end: {
                        ...N.loc.end
                    }
                },
                ...me
            });
        }
        function oe(h) {
            switch(h = h || B(), h.type){
                case "String":
                case "Boolean":
                case "Number":
                case "Null":
                    return Te(h);
                case "Punctuator":
                    if (h.value === "{") return _e(h);
                    if (h.value === "[") return je(h);
                default:
                    throw new P(h);
            }
        }
        let fe = oe(), G = B();
        if (G) throw new P(G);
        let y = {
            loc: {
                start: {
                    line: 1,
                    column: 1,
                    offset: 0
                },
                end: {
                    ...fe.loc.end
                }
            }
        };
        return v.tokens && (y.tokens = E), v.ranges && (y.range = se(y.loc.start, y.loc.end)), ke.document(fe, y);
    }
    var ot = new Map([
        [
            "Document",
            [
                "body"
            ]
        ],
        [
            "Object",
            [
                "members"
            ]
        ],
        [
            "Member",
            [
                "name",
                "value"
            ]
        ],
        [
            "Array",
            [
                "elements"
            ]
        ],
        [
            "String",
            []
        ],
        [
            "Number",
            []
        ],
        [
            "Boolean",
            []
        ],
        [
            "Null",
            []
        ]
    ]);
    function Fe(g) {
        return g && typeof g == "object";
    }
    function lt(g) {
        return Fe(g) && typeof g.type == "string";
    }
    function Ge(g, v) {
        function E(L, W) {
            typeof v.enter == "function" && v.enter(L, W);
            for (let te of ot.get(L.type)){
                let B = L[te];
                Fe(B) && (Array.isArray(B) ? B.forEach((ae)=>E(ae, L)) : lt(B) && E(B, L));
            }
            typeof v.exit == "function" && v.exit(L, W);
        }
        E(g);
    }
    function st(g, v = ()=>!0) {
        let E = [];
        return Ge(g, {
            enter (L, W) {
                E.push({
                    node: L,
                    parent: W,
                    phase: "enter"
                });
            },
            exit (L, W) {
                E.push({
                    node: L,
                    parent: W,
                    phase: "exit"
                });
            }
        }), E.filter(v).values();
    }
    function M(g) {
        switch(g.type){
            case "String":
            case "Number":
            case "Boolean":
                return g.value;
            case "Null":
                return null;
            case "Array":
                return g.elements.map(M);
            case "Object":
                {
                    let v = {};
                    return g.members.forEach((E)=>{
                        v[M(E.name)] = M(E.value);
                    }), v;
                }
            case "Document":
                return M(g.body);
            case "Property":
                throw new Error("Cannot evaluate object property outside of an object.");
            default:
                throw new Error(`Unknown node type ${g.type}.`);
        }
    }
    function Ke(g, { indent: v = 0 } = {}) {
        let E = M(g);
        return JSON.stringify(E, null, v);
    }
    a.evaluate = M, a.iterator = st, a.parse = it, a.print = Ke, a.tokenize = Ne, a.traverse = Ge, a.types = ke;
}), pa = (0, _chunkU2GK2GFRMjs.a)((a, n)=>{
    n.exports = function(i) {
        return i != null && i.constructor != null && typeof i.constructor.isBuffer == "function" && i.constructor.isBuffer(i);
    };
}), Pr = (0, _chunkU2GK2GFRMjs.a)((a, n)=>{
    var i = Object.prototype.hasOwnProperty, s = Object.prototype.toString, f = Object.defineProperty, m = Object.getOwnPropertyDescriptor, S = function(T) {
        return typeof Array.isArray == "function" ? Array.isArray(T) : s.call(T) === "[object Array]";
    }, b = function(T) {
        if (!T || s.call(T) !== "[object Object]") return !1;
        var A = i.call(T, "constructor"), Y = T.constructor && T.constructor.prototype && i.call(T.constructor.prototype, "isPrototypeOf");
        if (T.constructor && !A && !Y) return !1;
        var H;
        for(H in T);
        return typeof H > "u" || i.call(T, H);
    }, w = function(T, A) {
        f && A.name === "__proto__" ? f(T, A.name, {
            enumerable: !0,
            configurable: !0,
            value: A.newValue,
            writable: !0
        }) : T[A.name] = A.newValue;
    }, x = function(T, A) {
        if (A === "__proto__") {
            if (i.call(T, A)) {
                if (m) return m(T, A).value;
            } else return;
        }
        return T[A];
    };
    n.exports = function T() {
        var A, Y, H, X, V, P, O = arguments[0], F = 1, Q = arguments.length, ee = !1;
        for(typeof O == "boolean" && (ee = O, O = arguments[1] || {}, F = 2), (O == null || typeof O != "object" && typeof O != "function") && (O = {}); F < Q; ++F)if (A = arguments[F], A != null) for(Y in A)H = x(O, Y), X = x(A, Y), O !== X && (ee && X && (b(X) || (V = S(X))) ? (V ? (V = !1, P = H && S(H) ? H : []) : P = H && b(H) ? H : {}, w(O, {
            name: Y,
            newValue: T(ee, P, X)
        })) : typeof X < "u" && w(O, {
            name: Y,
            newValue: X
        }));
        return O;
    };
}), Vr = (0, _chunkU2GK2GFRMjs.b)(ua(), 1), qt = (0, _chunkU2GK2GFRMjs.b)(Tr(), 1), fa = {
    custom: "custom",
    string: {
        assetImageType: "asset-image-type",
        assetType: "asset-type",
        author: "author",
        character: "character",
        cssClass: "css-class",
        description: "description",
        expression: "expression",
        filename: "filename",
        fontCssClass: "font-css-class",
        fontFamily: "font-family",
        fontName: "font-name",
        fontPath: "font-path",
        fontStyle: "font-style",
        fontWeight: "font-weight",
        generator: "generator",
        hexColor: "hex-color",
        id: "id",
        idDataSource: "data-source-id",
        idImage: "image-id",
        idLayerXml: "layer-xml-id",
        idReference: "reference-id",
        idSound: "sound-id",
        keyword: "keyword",
        layerXmlTagName: "layer-xml-tag-name",
        markerComment: "marker-comment",
        maskMode: "mask-mode",
        matchName: "match-name",
        name: "name",
        path: "path",
        referenceId: "reference-id",
        shapeType: "shape-type",
        strokeDashType: "stroke-dash-type",
        text: "text",
        themeColor: "theme-color",
        version: "version"
    },
    number: {
        adaptiveSampleLimit: "adaptive-sample-limit",
        ascent: "ascent",
        basedOn: "based-on",
        baselineShift: "baseline-shift",
        blendMode: "blend-mode",
        composite: "composite",
        compositionIndex: "composition-index",
        count: "count",
        dataSourceType: "data-source-type",
        effectListIndex: "effect-list-index",
        effectParametersIndex: "effect-parameters-index",
        effectType: "effect-type",
        effectValueType: "effect-value-type",
        expressionPropertyIndex: "expression-property-index",
        fillRuleValue: "fill-rule-value",
        fontSize: "font-size",
        framerate: "framerate",
        gradientType: "gradient-type",
        height: "height",
        inPoint: "in-point",
        layerStyleType: "layer-style-type",
        layerType: "layer-type",
        length: "length",
        lineCapType: "line-cap-type",
        lineHeight: "line-height",
        lineJoin: "line-join",
        lineJoinType: "line-join-type",
        markerDuration: "marker-duration",
        markerTime: "marker-time",
        matteMode: "matte-mode",
        matteTarget: "matte-target",
        mergeMode: "merge-mode",
        miterLimitValue: "miter-limit-value",
        multiple: "multiple",
        numberOfProperties: "number-of-properties",
        outPoint: "out-point",
        parentIndex: "parent-index",
        propertyIndex: "property-index",
        rangeUnits: "range-units",
        samplesPerFrame: "samples-per-frame",
        shapeDirection: "shape-direction",
        shapePathIndex: "shape-path-index",
        shapePolygonStarType: "shape-polygon-star-type",
        shutterAngle: "shutter-angle",
        shutterPhase: "shutter-phase",
        staticValue: "static-value",
        textMask: "text-mask",
        textRangeSelectorMode: "text-range-selector-mode",
        textTracking: "text-tracking",
        textType: "text-type",
        textTypeCaps: "text-type-caps",
        textTypeGrouping: "text-type-grouping",
        textTypeJustify: "text-type-justify",
        textTypeShape: "text-type-shape",
        textTypeVerticalJustify: "text-type-vertical-justify",
        time: "time",
        timeStart: "start-time",
        timeStretch: "time-stretch",
        value: "value",
        width: "width"
    },
    intBoolean: {
        animated: "animated",
        autoOrient: "auto-orient",
        embedded: "embedded",
        enabled: "enabled",
        expressible: "expressible",
        extraComposition: "extra-composition",
        hold: "hold",
        randomize: "randomize",
        threedimensional: "threedimensional",
        xAxisValue: "x-axis-value",
        yAxisValue: "y-axis-value"
    },
    boolean: {
        closed: "closed",
        collapseTransform: "collapse-transform",
        hasMask: "has-mask",
        hidden: "hidden",
        inverted: "inverted",
        motionBlurEnabled: "motion-blur-enabled",
        splitEnabled: "split-enabled",
        strokeOverFill: "stroke-over-fill"
    },
    object: {
        animatedColor: "animated-color",
        animatedColorStatic: "animated-color-static",
        animatedMultidimensional: "animated-multidimensional",
        animatedMultidimensionalStatic: "animated-multidimensional-static",
        animatedPosition: "animated-position",
        animatedPositionStatic: "animated-position-static",
        animatedShape: "animated-shape",
        animatedShapeStatic: "animated-shape-static",
        animatedValue: "animated-value",
        animatedValueStatic: "animated-value-static",
        animation: "animation",
        assetDataSource: "asset-data-source",
        assetImage: "asset-image",
        assetPrecomposition: "asset-precomposition",
        bezier: "bezier",
        characterData: "character-data",
        characterPrecomp: "character-precomp",
        characterShapes: "character-shapes",
        effect: "effect",
        effectCustom: "effect-custom",
        effectDisplacementMap: "effect-displacement-map",
        effectDropShadow: "effect-drop-shadow",
        effectFill: "effect-fill",
        effectGaussianBlur: "effect-gaussian-blur",
        effectMatte3: "effect-matte3",
        effectMeshWarp: "effect-mesh-warp",
        effectPaintOverTransparent: "effect-paint-over-transparent",
        effectProLevels: "effect-pro-levels",
        effectPuppet: "effect-puppet",
        effectRadialWipe: "effect-radial-wipe",
        effectSpherize: "effect-spherize",
        effectStroke: "effect-stroke",
        effectTint: "effect-tint",
        effectTritone: "effect-tritone",
        effectValueAngle: "effect-value-angle",
        effectValueCheckbox: "effect-value-checkbox",
        effectValueColor: "effect-value-color",
        effectValueDropdown: "effect-value-dropdown",
        effectValueIgnored: "effect-value-ignored",
        effectValueLayer: "effect-value-layer",
        effectValueNoValue: "effect-value-no-value",
        effectValuePoint: "effect-value-point",
        effectValueSlider: "effect-value-slider",
        effectWavy: "effect-wavy",
        endOpacity: "end-opacity",
        gradientOverlay: "gradient-overlay",
        keyframe: "keyframe",
        keyframeBezierHandle: "keyframe-bezier-handle",
        layerAdjustment: "layer-adjustment",
        layerAudio: "layer-audio",
        layerCamera: "layer-camera",
        layerData: "layer-data",
        layerGuide: "layer-guide",
        layerImage: "layer-image",
        layerImagePlaceholder: "layer-image-placeholder",
        layerImageSequence: "layer-image-sequence",
        layerLight: "layer-light",
        layerNull: "layer-null",
        layerPrecomposition: "layer-precomposition",
        layerShape: "layer-shape",
        layerSolidColor: "layer-solid-color",
        layerStyleBevelEmboss: "layer-style-bevel-emboss",
        layerStyleChokeSpread: "layer-style-choke-spread",
        layerStyleColorOverlay: "layer-style-color-overlay",
        layerStyleDropShadow: "layer-style-drop-shadow",
        layerStyleGradientOverlay: "layer-style-gradient-overlay",
        layerStyleInnerGlow: "layer-style-inner-glow",
        layerStyleInnerShadow: "layer-style-inner-shadow",
        layerStyleOuterGlow: "layer-style-outer-glow",
        layerStyleSatin: "layer-style-satin",
        layerStyleStroke: "layer-style-stroke",
        layerText: "layer-text",
        layerVideo: "layer-video",
        layerVideoPlaceholder: "layer-video-placeholder",
        marker: "marker",
        mask: "mask",
        positionKeyframe: "position-keyframe",
        shapeEllipse: "shape-ellipse",
        shapeFill: "shape-fill",
        shapeGradientFill: "shape-gradient-fill",
        shapeGradientStroke: "shape-gradient-stroke",
        shapeGroup: "shape-group",
        shapeKeyframe: "shape-keyframe",
        shapeMerge: "shape-merge",
        shapeOffsetPath: "shape-offset-path",
        shapePath: "shape-path",
        shapePolygon: "shape-polygon",
        shapePolyStar: "shape-poly-star",
        shapePuckerBloat: "shape-pucker-bloat",
        shapeRectangle: "shape-rectangle",
        shapeRepeater: "shape-repeater",
        shapeRoundedCorners: "shape-rounded-corners",
        shapeStar: "shape-star",
        shapeStroke: "shape-stroke",
        shapeTransform: "shape-transform",
        shapeTrim: "shape-trim",
        shapeTwist: "shape-twist",
        shapeZigZags: "shape-zig-zag",
        splitVector: "split-vector",
        strokeDashDefault: "stroke-dash-default",
        strokeDashGap: "stroke-dash-gap",
        strokeDashLength: "stroke-dash-length",
        strokeDashOffset: "stroke-dash-offset",
        textFont: "text-font",
        textRange: "text-range",
        textDocumentKeyframe: "text-document-keyframe"
    },
    array: {
        outTangentsValue: "out-tangents-value"
    },
    collection: {
        assets: "assets",
        composition: "composition",
        effectList: "effect-list",
        effectParameters: "effect-parameters",
        extraCompositions: "extra-compositions",
        inTangents: "in-tangents",
        keyframeEndValue: "keyframe-end-value",
        keyframeList: "keyframe-list",
        keyframeValue: "keyframe-value",
        keywords: "keywords",
        layerStyle: "layer-style",
        layerStyleList: "layer-style-list",
        markers: "markers",
        masksProperties: "masks-properties",
        outTangents: "out-tangents",
        positionKeyframeList: "position-keyframe-list",
        shapeKeyframeList: "shape-keyframe-list",
        shapeKeyframeStart: "shape-keyframe-start",
        shapeList: "shape-list",
        staticValues: "static-values",
        strokeDashList: "stroke-dash-list",
        textRanges: "text-ranges",
        textCharacters: "text-characters",
        textDocumentKeyframes: "text-document-keyframes",
        textFontList: "text-font-list",
        valueInTangent: "value-in-tangent",
        valueOutTangent: "value-out-tangent",
        vertices: "vertices",
        xAxis: "x-axis",
        yAxis: "y-axis",
        colorRgba: "color-rgba",
        documentFillColor: "document-fill-color",
        documentStrokeColor: "document-stroke-color",
        wrapPosition: "wrap-position",
        wrapSize: "wrap-size"
    },
    element: {
        align: "align",
        altitude: "altitude",
        amount: "amount",
        anchorPoint: "anchor-point",
        angle: "angle",
        animatedColorProp: "animated-color-prop",
        animatedGradientColors: "animated-gradient-colors",
        animatedMultidimensionalProp: "animated-multidimensional-prop",
        animatedPositionProp: "animated-position-prop",
        animatedShapeBezier: "animated-shape-bezier",
        animatedShapeProp: "animated-shape-prop",
        animatedValueProp: "animated-value-prop",
        bevelStyle: "bevel-style",
        blur: "blur",
        blurSize: "blur-size",
        center: "center",
        chokeSpread: "choke-spread",
        copies: "copies",
        dilate: "dilate",
        distance: "distance",
        effectValueAngleValue: "effect-value-angle-value",
        effectValueCheckboxValue: "effect-value-checkbox-value",
        effectValueColorValue: "effect-value-color-value",
        effectValueDropdownValue: "effect-value-dropdown-value",
        effectValueIgnoredValue: "effect-value-ignored-value",
        effectValueLayerValue: "effect-value-layer-value",
        effectValuePointValue: "effect-value-point-value",
        effectValueSliderValue: "effect-value-slider-value",
        endPoint: "end-point",
        fillBrightness: "fill-brightness",
        fillColor: "fill-color",
        fillHue: "fill-hue",
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        fillSaturation: "fill-saturation",
        firstMargin: "first-margin",
        forceAlignment: "force-alignment",
        globalAngle: "global-angle",
        gradientOverlayScale: "gradient-overlay-scale",
        highlightAngle: "highlight-angle",
        highlightColor: "highlight-color",
        highlightLength: "highlight-length",
        highlightMode: "highlight-mode",
        highlightOpacity: "highlight-opacity",
        innerRadius: "inner-radius",
        innerRoundness: "inner-roundness",
        invert: "invert",
        inTangent: "in-tangent",
        jitter: "jitter",
        lastMargin: "last-margin",
        layerAudioSettings: "layer-audio-settings",
        layerConceal: "layer-conceal",
        layerStyleBlendMode: "layer-style-blend-mode",
        layerStyleColor: "layer-style-color",
        layerTransform: "layer-transform",
        level: "level",
        lineSpacing: "line-spacing",
        maskOpacity: "mask-opacity",
        maskVertices: "mask-vertices",
        maxAmount: "max-amount",
        maxEase: "max-ease",
        metadata: "metadata",
        minEase: "min-ease",
        miterLimit: "miter-limit",
        miterLimitAlternative: "miter-limit-alternative",
        motionBlur: "motion-blur",
        noise: "noise",
        offset: "offset",
        opacity: "opacity",
        orientation: "orientation",
        outerRadius: "outer-radius",
        outerRoundness: "outer-roundness",
        outTangent: "out-tangent",
        perpendicularToPath: "perpendicular-to-path",
        perspective: "perspective",
        points: "points",
        polygonRotationClockwise: "polygon-rotation-clockwise",
        radius: "radius",
        range: "range",
        reverse: "reverse",
        reversePath: "reverse-path",
        rotationClockwise: "rotation-clockwise",
        rotationX: "rotation-x",
        rotationY: "rotation-y",
        rotationZ: "rotation-z",
        rounded: "rounded",
        roundness: "roundness",
        scale: "scale",
        selectorSmoothness: "selector-smoothness",
        shadowColor: "shadow-color",
        shadowMode: "shadow-mode",
        shadowOpacity: "shadow-opacity",
        shape: "shape",
        shapeEllipseSize: "shape-ellipse-size",
        shapeFillColor: "shape-fill-color",
        shapeStrokeColor: "shape-stroke-color",
        shapeTrimEnd: "shape-trim-end",
        shapeTrimStart: "shape-trim-start",
        shapeZigZagSize: "shape-zig-zag-size",
        size: "size",
        skew: "skew",
        skewAxis: "skew-axis",
        smoothness: "smoothness",
        soften: "soften",
        source: "source",
        splitX: "split-x",
        splitY: "split-y",
        splitZ: "split-z",
        startOpacity: "start-opacity",
        startPoint: "start-point",
        strength: "strength",
        strokeBrightness: "stroke-brightness",
        strokeColor: "stroke-color",
        strokeHue: "stroke-hue",
        strokeLength: "stroke-length",
        strokeOpacity: "stroke-opacity",
        strokeSaturation: "stroke-saturation",
        strokeWidth: "stroke-width",
        technique: "technique",
        textAnimatorData: "text-animator-data",
        textCharacterData: "text-character-data",
        textData: "text-data",
        textStyle: "text-style",
        textAnimatedDocument: "text-animated-document",
        textDocument: "text-document",
        textFonts: "text-fonts",
        textGroupAlignment: "text-group-alignment",
        textFollowPath: "text-follow-path",
        textAlignmentOptions: "text-alignment-options",
        textSelector: "text-selector",
        textSelectorEnd: "text-selector-end",
        textSelectorStart: "text-selector-start",
        timeRemapping: "time-remapping",
        letterSpacing: "letter-spacing",
        transformOpacity: "transform-opacity",
        transformRepeater: "transform-repeater",
        translation: "translation",
        userMetadata: "user-metadata"
    }
}, Se = function(a, n, i) {
    var s = {
        type: String(a)
    };
    return i == null && (typeof n == "string" || Array.isArray(n)) ? i = n : Object.assign(s, n), Array.isArray(i) ? s.children = i : i != null && (s.value = String(i)), s;
};
function Xe(a) {
    if (Array.isArray(a)) return a;
    if (typeof a == "function") {
        let n = a();
        return Xe(n);
    } else return typeof a > "u" ? [] : [
        a
    ];
}
function Je(a) {
    if (Array.isArray(a)) return a.length > 0 ? [
        a[0]
    ] : [];
    if (typeof a == "function") {
        let n = a();
        return Je(n);
    } else return typeof a > "u" ? [] : [
        a
    ];
}
function Or(a) {
    return a === void 0 ? "empty" : a;
}
var Cr = (a, n)=>Se("primitive", {
        value: Or(a),
        ...n
    }), Ar = (a, n)=>Se("key", {
        ...n
    }, a), Zt = (a, n, i)=>Se("object", {
        title: a,
        ...i
    }, [
        ...Xe(n)
    ]), Wt = (a, n, i)=>Se("array", {
        title: a,
        ...i
    }, [
        ...Xe(n)
    ]), _r = (a, n, i, s)=>Se("attribute", {
        key: a,
        title: n,
        ...s
    }, Je(i)), jr = (a, n, i, s)=>Se("element", {
        key: a,
        title: n,
        ...s
    }, Je(i)), Er = (a, n, i, s)=>Se("collection", {
        key: a,
        title: n,
        ...s
    }, Je(i)), Lr = (a, n)=>Se("root", {
        title: fa.object.animation,
        hasExpressions: !1,
        ...n
    }, [
        ...Xe(a)
    ]), Dr = (0, _chunkU2GK2GFRMjs.b)(ua(), 1), Ce = function a(n, i, s, f, m) {
    let S = ma(i);
    if (s != null && (typeof s != "number" || s < 0 || s === Number.POSITIVE_INFINITY)) throw new Error("Expected positive finite index");
    if (f != null && (!a(f) || !f.children)) throw new Error("Expected parent node");
    if (f == null != (s == null)) throw new Error("Expected both parent and index");
    return n && n.type && typeof n.type == "string" ? !!S.call(m, n, s, f) : !1;
}, ma = function(a) {
    if (a == null) return Rr;
    if (typeof a == "string") return Mr(a);
    if (typeof a == "object") return Array.isArray(a) ? Ir(a) : zr(a);
    if (typeof a == "function") return Ye(a);
    throw new Error("Expected function, string, or object as test");
};
function Ir(a) {
    let n = [], i = -1;
    for(; ++i < a.length;)n[i] = ma(a[i]);
    return Ye(s);
    function s(...f) {
        let m = -1;
        for(; ++m < n.length;)if (n[m].call(this, ...f)) return !0;
        return !1;
    }
}
function zr(a) {
    return Ye(n);
    function n(i) {
        let s;
        for(s in a)if (i[s] !== a[s]) return !1;
        return !0;
    }
}
function Mr(a) {
    return Ye(n);
    function n(i) {
        return i && i.type === a;
    }
}
function Ye(a) {
    return n;
    function n(...i) {
        return !!a.call(this, ...i);
    }
}
function Rr() {
    return !0;
}
var Br = Object.defineProperty, Nr = (a, n, i)=>n in a ? Br(a, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : a[n] = i, Xt = (a, n, i)=>(Nr(a, typeof n != "symbol" ? n + "" : n, i), i), { boolean: U, collection: l, custom: Me, element: t, intBoolean: C, number: c, object: e, string: p } = fa, Re = (a, n)=>({
        defaultTitle: `${a}-static`,
        dependents: [
            {
                key: "k",
                type: "Array",
                title: n,
                childType: "Object",
                parentTitle: a
            },
            {
                key: "a",
                type: "Constant",
                title: C.animated,
                parentTitle: {
                    defaultValue: 0,
                    values: {
                        0: `${a}-static`,
                        1: a
                    }
                }
            }
        ]
    }), d = {
    ...Re(e.animatedValue, l.keyframeList)
}, bt = {
    ...Re(e.animatedShape, l.shapeKeyframeList)
}, Jt = {
    ...Re(e.animatedPosition, l.positionKeyframeList)
}, ge = {
    ...Re(e.animatedColor, l.keyframeList)
}, ue = {
    ...Re(e.animatedMultidimensional, l.keyframeList)
}, ya = {
    [l.composition]: {
        defaultTitle: e.layerPrecomposition,
        dependents: [
            {
                key: "ty",
                type: "Constant",
                title: c.layerType,
                parentTitle: {
                    prefix: "layer",
                    defaultValue: 0,
                    values: {
                        0: "precomposition",
                        1: "solid-color",
                        2: "image",
                        3: "null",
                        4: "shape",
                        5: "text",
                        6: "audio",
                        7: "video-placeholder",
                        8: "image-sequence",
                        9: "video",
                        10: "image-placeholder",
                        11: "guide",
                        12: "adjustment",
                        13: "camera",
                        14: "light",
                        15: "data"
                    }
                }
            }
        ]
    },
    [l.shapeList]: {
        defaultTitle: e.shapeRectangle,
        dependents: [
            {
                key: "ty",
                type: "Constant",
                title: p.shapeType,
                parentTitle: {
                    prefix: "shape",
                    defaultValue: "rc",
                    values: {
                        rc: "rectangle",
                        el: "ellipse",
                        sr: "star",
                        sh: "path",
                        fl: "fill",
                        st: "stroke",
                        gf: "gradient-fill",
                        gs: "gradient-stroke",
                        gr: "group",
                        tr: "transform",
                        rd: "rounded-corners",
                        pb: "pucker-bloat",
                        mm: "merge",
                        tw: "twist",
                        op: "offset-path",
                        zz: "zig-zag",
                        "": "modifier",
                        rp: "repeater",
                        tm: "trim"
                    }
                }
            },
            {
                key: "sy",
                type: "Constant",
                title: c.shapePolygonStarType,
                parentTitle: {
                    prefix: "shape",
                    defaultValue: 1,
                    values: {
                        1: "star",
                        2: "polygon"
                    }
                }
            }
        ]
    },
    assets: {
        defaultTitle: e.assetPrecomposition,
        dependents: [
            {
                key: "w",
                type: "Number",
                title: c.width,
                parentTitle: e.assetImage
            },
            {
                key: "h",
                type: "Number",
                title: c.height,
                parentTitle: e.assetImage
            },
            {
                key: "t",
                type: "Constant",
                title: p.assetType,
                parentTitle: {
                    prefix: "asset",
                    defaultValue: "seq",
                    values: {
                        seq: "image",
                        3: "data-source"
                    }
                }
            },
            {
                key: "layers",
                type: "Array",
                title: l.composition,
                parentTitle: e.assetPrecomposition
            },
            {
                key: "mn",
                type: "String",
                title: p.matchName,
                parentTitle: e.assetPrecomposition
            },
            {
                key: "fr",
                type: "Number",
                title: c.framerate,
                parentTitle: e.assetPrecomposition
            },
            {
                key: "xt",
                type: "Number",
                title: C.extraComposition,
                parentTitle: e.assetPrecomposition
            }
        ]
    },
    [l.effectList]: {
        defaultTitle: e.effectCustom,
        dependents: [
            {
                key: "ty",
                type: "Constant",
                title: c.effectType,
                parentTitle: {
                    prefix: "effect",
                    defaultValue: 5,
                    values: {
                        25: "drop-shadow",
                        21: "fill",
                        29: "gaussian-blur",
                        28: "matte3",
                        24: "pro-levels",
                        22: "stroke",
                        20: "tint",
                        23: "tritone",
                        26: "radial-wipe",
                        32: "wavy",
                        34: "puppet",
                        33: "spherize",
                        7: "paint-over-transparent",
                        31: "mesh-warp",
                        27: "displacement-map",
                        5: "custom"
                    }
                }
            }
        ]
    },
    [l.effectParameters]: {
        defaultTitle: e.effectValueSlider,
        dependents: [
            {
                key: "ty",
                type: "Constant",
                title: c.effectValueType,
                parentTitle: {
                    defaultValue: 0,
                    prefix: "effect-value",
                    values: {
                        4: "checkbox",
                        2: "color",
                        7: "dropdown",
                        6: "ignored",
                        10: "layer",
                        3: "point",
                        0: "slider",
                        1: "angle"
                    }
                }
            }
        ]
    },
    [l.layerStyleList]: {
        defaultTitle: e.layerStyleStroke,
        dependents: [
            {
                key: "ty",
                type: "Constant",
                title: c.layerStyleType,
                parentTitle: {
                    prefix: l.layerStyle,
                    defaultValue: 0,
                    values: {
                        0: "stroke",
                        1: "drop-shadow",
                        2: "inner-shadow",
                        3: "outer-glow",
                        4: "inner-glow",
                        5: "bevel-emboss",
                        6: "satin",
                        7: "color-overlay",
                        8: "gradient-overlay"
                    }
                }
            }
        ]
    },
    [t.animatedPositionProp]: {
        ...Jt
    },
    [t.animatedShapeProp]: {
        ...bt
    },
    [t.animatedShapeBezier]: {
        defaultTitle: e.bezier
    },
    [t.animatedColorProp]: {
        ...ge
    },
    [t.animatedMultidimensionalProp]: {
        ...ue
    },
    [t.anchorPoint]: {
        ...Jt
    },
    [l.keyframeList]: {
        defaultTitle: e.keyframe
    },
    [l.keyframeValue]: {
        defaultTitle: e.bezier
    },
    [l.keyframeEndValue]: {
        defaultTitle: e.bezier
    },
    [l.positionKeyframeList]: {
        defaultTitle: e.positionKeyframe
    },
    [t.inTangent]: {
        defaultTitle: e.keyframeBezierHandle
    },
    [t.outTangent]: {
        defaultTitle: e.keyframeBezierHandle
    },
    [t.translation]: {
        defaultTitle: e.animatedPositionStatic,
        dependents: [
            {
                key: "k",
                type: "Array",
                title: l.positionKeyframeList,
                childType: "Object",
                parentTitle: e.animatedPosition
            },
            {
                key: "a",
                type: "Constant",
                title: C.animated,
                parentTitle: {
                    defaultValue: 0,
                    values: {
                        0: e.animatedPositionStatic,
                        1: e.animatedPosition
                    }
                }
            },
            {
                key: "s",
                type: "Boolean",
                title: U.splitEnabled,
                parentTitle: e.splitVector
            },
            {
                key: "x",
                type: "Object",
                title: t.animatedValueProp,
                parentTitle: e.splitVector
            },
            {
                key: "y",
                type: "Object",
                title: t.animatedValueProp,
                parentTitle: e.splitVector
            },
            {
                key: "z",
                type: "Object",
                title: t.animatedValueProp,
                parentTitle: e.splitVector
            }
        ]
    },
    [t.scale]: {
        ...ue
    },
    [t.rotationClockwise]: {
        ...d
    },
    [t.polygonRotationClockwise]: {
        ...d
    },
    [t.rotationX]: {
        ...d
    },
    [t.rotationY]: {
        ...d
    },
    [t.rotationZ]: {
        ...d
    },
    [t.skew]: {
        ...d
    },
    [t.skewAxis]: {
        ...d
    },
    [t.orientation]: {
        ...ue
    },
    [t.size]: {
        ...ue
    },
    [t.rounded]: {
        ...d
    },
    [t.level]: {
        ...ue
    },
    [t.shapeEllipseSize]: {
        ...ue
    },
    [t.startPoint]: {
        ...ue
    },
    [t.endPoint]: {
        ...ue
    },
    [t.splitX]: {
        ...d
    },
    [t.splitY]: {
        ...d
    },
    [t.splitZ]: {
        ...d
    },
    [t.effectValueAngleValue]: {
        ...d
    },
    [t.effectValueCheckboxValue]: {
        ...d
    },
    [t.effectValueColorValue]: {
        ...ge
    },
    [t.effectValueDropdownValue]: {
        ...d
    },
    [t.effectValueLayerValue]: {
        ...d
    },
    [t.effectValuePointValue]: {
        ...ue
    },
    [t.effectValueSliderValue]: {
        ...d
    },
    [t.opacity]: {
        ...d
    },
    [t.transformOpacity]: {
        ...d
    },
    [t.maskOpacity]: {
        ...d
    },
    [t.timeRemapping]: {
        ...d
    },
    [t.dilate]: {
        ...d
    },
    [t.perspective]: {
        ...d
    },
    [t.highlightLength]: {
        ...d
    },
    [t.highlightAngle]: {
        ...d
    },
    [e.strokeDashDefault]: {
        ...d
    },
    [t.miterLimitAlternative]: {
        ...d
    },
    [t.strokeWidth]: {
        ...d
    },
    [t.outerRadius]: {
        ...d
    },
    [t.outerRoundness]: {
        ...d
    },
    [t.points]: {
        ...d
    },
    [t.innerRadius]: {
        ...d
    },
    [t.innerRoundness]: {
        ...d
    },
    [t.amount]: {
        ...d
    },
    [t.copies]: {
        ...d
    },
    [t.offset]: {
        ...d
    },
    [t.radius]: {
        ...d
    },
    [l.shapeKeyframeList]: {
        defaultTitle: e.shapeKeyframe
    },
    [l.shapeKeyframeStart]: {
        defaultTitle: e.bezier
    },
    [e.animatedShapeStatic]: {
        defaultTitle: e.bezier
    },
    [t.shapeTrimStart]: {
        ...d
    },
    [t.shapeTrimEnd]: {
        ...d
    },
    [t.angle]: {
        ...d
    },
    [t.miterLimit]: {
        ...d
    },
    [t.roundness]: {
        ...d
    },
    [t.shapeZigZagSize]: {
        ...d
    },
    [e.layerStyleChokeSpread]: {
        ...d
    },
    [t.chokeSpread]: {
        ...d
    },
    [t.layerStyleBlendMode]: {
        ...d
    },
    [t.blurSize]: {
        ...d
    },
    [t.noise]: {
        ...d
    },
    [t.distance]: {
        ...d
    },
    [t.layerStyleColor]: {
        ...ge
    },
    [t.layerConceal]: {
        ...d
    },
    [t.range]: {
        ...d
    },
    [t.jitter]: {
        ...d
    },
    [t.source]: {
        ...d
    },
    [t.strength]: {
        ...d
    },
    [t.bevelStyle]: {
        ...d
    },
    [t.technique]: {
        ...d
    },
    [t.soften]: {
        ...d
    },
    [t.globalAngle]: {
        ...d
    },
    [t.altitude]: {
        ...d
    },
    [t.highlightMode]: {
        ...d
    },
    [t.highlightColor]: {
        ...d
    },
    [t.highlightOpacity]: {
        ...d
    },
    [t.shadowMode]: {
        ...d
    },
    [t.shadowColor]: {
        ...ge
    },
    [t.shadowOpacity]: {
        ...d
    },
    [t.invert]: {
        ...d
    },
    [t.smoothness]: {
        ...d
    },
    [t.reverse]: {
        ...d
    },
    [t.align]: {
        ...d
    },
    [e.gradientOverlay]: {
        ...d
    },
    [t.firstMargin]: {
        ...d
    },
    [t.lastMargin]: {
        ...d
    },
    [t.reversePath]: {
        ...d
    },
    [t.forceAlignment]: {
        ...d
    },
    [t.perpendicularToPath]: {
        ...d
    },
    [t.strokeWidth]: {
        ...d
    },
    [t.strokeHue]: {
        ...d
    },
    [t.strokeSaturation]: {
        ...d
    },
    [t.strokeBrightness]: {
        ...d
    },
    [t.strokeOpacity]: {
        ...d
    },
    [t.strokeHue]: {
        ...d
    },
    [t.fillColor]: {
        ...ge
    },
    [t.fillHue]: {
        ...d
    },
    [t.fillSaturation]: {
        ...d
    },
    [t.fillOpacity]: {
        ...d
    },
    [t.fillBrightness]: {
        ...d
    },
    [t.letterSpacing]: {
        ...d
    },
    [t.blur]: {
        ...d
    },
    [t.lineSpacing]: {
        ...d
    },
    [t.minEase]: {
        ...d
    },
    [t.maxEase]: {
        ...d
    },
    [t.maxAmount]: {
        ...d
    },
    [t.textSelectorStart]: {
        ...d
    },
    [t.textSelectorEnd]: {
        ...d
    },
    [t.shape]: {
        ...bt
    },
    [t.maskVertices]: {
        ...bt
    },
    [t.shapeFillColor]: {
        ...ge
    },
    [t.shapeStrokeColor]: {
        ...ue
    },
    [l.documentStrokeColor]: {
        ...ge
    },
    [l.documentFillColor]: {
        ...ge
    },
    [t.center]: {
        ...ue
    },
    [t.textGroupAlignment]: {
        ...ue
    },
    [l.masksProperties]: {
        defaultTitle: e.mask
    },
    [l.textFontList]: {
        defaultTitle: e.textFont
    },
    [t.startOpacity]: {
        ...d
    },
    [e.endOpacity]: {
        ...d
    },
    [l.strokeDashList]: {
        defaultTitle: e.strokeDashDefault,
        dependents: [
            {
                key: "n",
                type: "Constant",
                title: p.strokeDashType,
                parentTitle: {
                    prefix: "stroke-dash",
                    defaultValue: "d",
                    values: {
                        d: "default",
                        g: "gap",
                        o: "offset"
                    }
                }
            }
        ]
    },
    [t.strokeLength]: {
        ...d
    },
    [l.markers]: {
        defaultTitle: e.marker
    },
    [t.textCharacterData]: {
        defaultTitle: e.characterShapes,
        dependents: [
            {
                key: "shapes",
                type: "Array",
                title: l.shapeList,
                parentTitle: e.characterShapes
            },
            {
                key: "refId",
                type: "String",
                title: p.referenceId,
                parentTitle: e.characterPrecomp
            },
            {
                key: "ks",
                type: "Object",
                title: t.layerTransform,
                parentTitle: e.characterPrecomp
            },
            {
                key: "ip",
                type: "Number",
                title: c.inPoint,
                parentTitle: e.characterPrecomp
            },
            {
                key: "op",
                type: "Number",
                title: c.outPoint,
                parentTitle: e.characterPrecomp
            },
            {
                key: "sr",
                type: "Number",
                title: c.timeStretch,
                parentTitle: e.characterPrecomp
            },
            {
                key: "st",
                type: "Number",
                title: c.timeStart,
                parentTitle: e.characterPrecomp
            }
        ]
    },
    [l.textDocumentKeyframes]: {
        defaultTitle: e.textDocumentKeyframe
    },
    [l.textRanges]: {
        defaultTitle: e.textRange
    }
}, j = (a, n, i = "ty")=>{
    let s = ya[a]?.dependents?.find((x)=>x.key === i);
    if (s?.type !== "Constant") return {};
    let { prefix: f, values: m } = s.parentTitle, S = f ? `${f}-` : "", b = Object.values(m), w = {};
    for (let x of b)typeof x == "string" && (w[S + x] = n);
    return w;
}, Fr = {}, ha = (a, n)=>{
    switch(a.type){
        case "Object":
            return ya[n] || {
                defaultTitle: n
            };
        case "Array":
            return Fr[n] || {
                defaultTitle: n
            };
        default:
            throw new Error("The node.type has to be 'Array' or 'Object'");
    }
}, Gr = {
    required: {
        p: {
            [e.assetImage]: p.filename,
            [e.assetPrecomposition]: p.filename,
            [e.assetDataSource]: p.filename
        },
        sc: {
            [e.layerSolidColor]: p.hexColor
        },
        ch: {
            [l.textCharacters]: p.character
        },
        fName: {
            [e.textFont]: p.fontName
        },
        fStyle: {
            [e.textFont]: p.fontStyle
        },
        style: {
            [l.textCharacters]: p.fontStyle
        },
        fFamily: {
            [e.textFont]: p.fontFamily,
            [l.textCharacters]: p.fontFamily
        },
        f: {
            [t.textDocument]: p.fontFamily
        },
        t: {
            [t.textDocument]: p.text
        }
    },
    known: {
        x: {
            [e.animatedValue]: p.expression,
            [e.animatedValueStatic]: p.expression,
            [e.animatedShape]: p.expression,
            [e.animatedShapeStatic]: p.expression,
            [e.animatedPosition]: p.expression,
            [e.animatedPositionStatic]: p.expression,
            [e.animatedColor]: p.expression,
            [e.animatedColorStatic]: p.expression,
            [e.animatedMultidimensional]: p.expression,
            [e.animatedMultidimensionalStatic]: p.expression,
            [t.textAnimatedDocument]: p.expression
        },
        v: {
            [e.animation]: p.version
        },
        cm: {
            [e.marker]: p.markerComment
        },
        a: {
            [t.metadata]: p.author
        },
        k: {
            [t.metadata]: p.keyword
        },
        d: {
            [t.metadata]: p.description
        },
        tc: {
            [t.metadata]: p.themeColor
        },
        g: {
            [t.metadata]: p.generator
        },
        id: {
            [e.assetImage]: p.id,
            [e.assetPrecomposition]: p.id,
            [e.assetDataSource]: p.id
        },
        refId: {
            [e.layerAudio]: p.idSound,
            [e.layerPrecomposition]: p.idReference,
            [e.layerImage]: p.idImage,
            [e.layerData]: p.idDataSource,
            [e.characterPrecomp]: p.idReference
        },
        u: {
            [e.assetImage]: p.path,
            [e.assetPrecomposition]: p.path,
            [e.assetDataSource]: p.path
        },
        nm: {
            [e.animation]: p.name,
            [e.assetImage]: p.name,
            [e.assetPrecomposition]: p.name,
            [e.assetDataSource]: p.name,
            [e.textRange]: p.name,
            [t.transformRepeater]: p.name,
            [e.animatedValue]: p.name,
            [e.animatedValueStatic]: p.name,
            [e.animatedShape]: p.name,
            [e.animatedShapeStatic]: p.name,
            [e.animatedPosition]: p.name,
            [e.animatedPositionStatic]: p.name,
            [e.animatedColor]: p.name,
            [e.animatedColorStatic]: p.name,
            [e.animatedMultidimensional]: p.name,
            [e.animatedMultidimensionalStatic]: p.name,
            ...j(l.effectParameters, p.name),
            ...j(l.effectList, p.name),
            [e.mask]: p.name,
            ...j(l.composition, p.name),
            ...j(l.shapeList, p.name),
            [e.strokeDashDefault]: p.name,
            [e.strokeDashGap]: p.name,
            [e.strokeDashOffset]: p.name,
            [e.layerStyleBevelEmboss]: p.name,
            [e.layerStyleColorOverlay]: p.name,
            [e.layerStyleDropShadow]: p.name,
            [e.layerStyleGradientOverlay]: p.name,
            [e.layerStyleInnerShadow]: p.name,
            [e.layerStyleOuterGlow]: p.name,
            [e.layerStyleSatin]: p.name,
            [e.layerStyleStroke]: p.name,
            [t.layerTransform]: p.name
        },
        mn: {
            [e.animation]: p.matchName,
            [e.animatedValue]: p.matchName,
            [e.animatedValueStatic]: p.matchName,
            [e.animatedShape]: p.matchName,
            [e.animatedShapeStatic]: p.matchName,
            [e.animatedPosition]: p.matchName,
            [e.animatedPositionStatic]: p.matchName,
            [e.animatedColor]: p.matchName,
            [e.animatedColorStatic]: p.matchName,
            [e.animatedMultidimensional]: p.matchName,
            [e.animatedMultidimensionalStatic]: p.matchName,
            ...j(l.effectParameters, p.matchName),
            ...j(l.effectList, p.matchName),
            [e.mask]: p.matchName,
            ...j(l.composition, p.matchName),
            ...j(l.shapeList, p.matchName),
            [e.strokeDashDefault]: p.matchName,
            [e.strokeDashGap]: p.matchName,
            [e.strokeDashOffset]: p.matchName,
            [e.layerStyleBevelEmboss]: p.name,
            [e.layerStyleColorOverlay]: p.name,
            [e.layerStyleDropShadow]: p.name,
            [e.layerStyleGradientOverlay]: p.name,
            [e.layerStyleInnerShadow]: p.name,
            [e.layerStyleOuterGlow]: p.name,
            [e.layerStyleSatin]: p.name,
            [e.layerStyleStroke]: p.name,
            [t.transformRepeater]: p.matchName
        },
        ln: {
            ...j(l.composition, p.idLayerXml),
            ...j(l.shapeList, p.idLayerXml)
        },
        cl: {
            ...j(l.composition, p.cssClass),
            ...j(l.shapeList, p.cssClass)
        },
        fPath: {
            [e.textFont]: p.fontPath
        },
        fWeight: {
            [e.textFont]: p.fontWeight
        },
        fClass: {
            [e.textFont]: p.fontCssClass
        },
        tg: {
            ...j(l.composition, p.layerXmlTagName)
        },
        t: {
            [e.assetImage]: p.assetImageType
        }
    }
}, Kr = {
    required: {
        ty: {
            ...j(l.composition, c.layerType),
            ...j(l.shapeList, p.shapeType)
        }
    },
    known: {
        mode: {
            [e.mask]: p.maskMode
        },
        n: {
            [e.strokeDashDefault]: p.strokeDashType,
            [e.strokeDashGap]: p.strokeDashType,
            [e.strokeDashOffset]: p.strokeDashType
        },
        t: {
            [e.assetImage]: p.assetImageType
        }
    }
}, $r = {
    required: {
        ip: {
            [e.animation]: c.inPoint,
            ...j(l.composition, c.inPoint)
        },
        op: {
            [e.animation]: c.outPoint,
            ...j(l.composition, c.outPoint),
            [e.characterPrecomp]: c.outPoint
        },
        p: {
            [t.animatedGradientColors]: c.count
        },
        k: {
            [e.animatedValueStatic]: c.staticValue,
            [e.animatedMultidimensionalStatic]: c.staticValue,
            [e.animatedPositionStatic]: c.staticValue,
            [e.animatedValue]: c.staticValue
        },
        w: {
            [e.animation]: c.width,
            [e.assetImage]: c.width,
            [e.assetPrecomposition]: c.width,
            [l.textCharacters]: c.width,
            [e.layerPrecomposition]: c.width
        },
        sw: {
            [e.layerSolidColor]: c.width
        },
        h: {
            [e.animation]: c.height,
            [e.assetImage]: c.height,
            [e.assetPrecomposition]: c.height,
            [e.layerPrecomposition]: c.height
        },
        sh: {
            [e.layerSolidColor]: c.height
        },
        size: {
            [l.textCharacters]: c.fontSize
        },
        ls: {
            [t.textDocument]: c.baselineShift
        },
        t: {
            [e.keyframe]: c.time,
            [l.keyframeList]: c.time,
            [l.keyframeValue]: c.time,
            [e.positionKeyframe]: c.time,
            [l.positionKeyframeList]: c.time,
            [e.keyframeBezierHandle]: c.time,
            [e.shapeKeyframe]: c.time,
            [e.textDocumentKeyframe]: c.timeStart
        },
        s: {
            [t.textDocument]: c.fontSize
        }
    },
    known: {
        v: {
            [e.effectValueIgnored]: c.value
        },
        tm: {
            [e.marker]: c.markerTime
        },
        dr: {
            [e.marker]: c.markerDuration
        },
        sa: {
            [t.motionBlur]: c.shutterAngle
        },
        sp: {
            [t.motionBlur]: c.shutterPhase
        },
        spf: {
            [t.motionBlur]: c.samplesPerFrame
        },
        asl: {
            [t.motionBlur]: c.adaptiveSampleLimit
        },
        ix: {
            ...j(l.shapeList, c.propertyIndex),
            ...j(l.effectList, c.propertyIndex),
            ...j(l.effectParameters, c.propertyIndex),
            [e.animatedValue]: c.propertyIndex,
            [e.animatedValueStatic]: c.propertyIndex,
            [e.animatedShape]: c.propertyIndex,
            [e.animatedShapeStatic]: c.propertyIndex,
            [e.animatedPosition]: c.propertyIndex,
            [e.animatedPositionStatic]: c.propertyIndex,
            [e.animatedColor]: c.propertyIndex,
            [e.animatedColorStatic]: c.propertyIndex,
            [e.animatedMultidimensional]: c.propertyIndex,
            [e.animatedMultidimensionalStatic]: c.propertyIndex
        },
        ind: {
            ...j(l.composition, c.compositionIndex),
            [e.shapePath]: c.shapePathIndex,
            ...j(l.effectParameters, c.effectParametersIndex),
            ...j(l.effectList, c.effectListIndex)
        },
        cix: {
            ...j(l.shapeList, c.expressionPropertyIndex)
        },
        fr: {
            [e.animation]: c.framerate,
            [e.assetPrecomposition]: c.framerate
        },
        sr: {
            ...j(l.composition, c.timeStretch),
            [e.characterPrecomp]: c.timeStretch
        },
        st: {
            ...j(l.composition, c.timeStart),
            [e.characterPrecomp]: c.timeStart
        },
        l: {
            [e.animatedMultidimensional]: c.length,
            [e.animatedMultidimensionalStatic]: c.length,
            [e.animatedPosition]: c.length,
            [e.animatedPositionStatic]: c.length,
            [t.translation]: c.length
        },
        parent: {
            ...j(l.composition, c.parentIndex)
        },
        td: {
            [e.layerPrecomposition]: c.matteTarget,
            [e.layerShape]: c.matteTarget,
            [e.layerSolidColor]: c.matteTarget,
            [e.layerImage]: c.matteTarget,
            [e.layerNull]: c.matteTarget,
            [e.layerText]: c.matteTarget
        },
        ml: {
            [e.shapeGradientStroke]: c.miterLimitValue,
            [e.shapeStroke]: c.miterLimitValue
        },
        np: {
            [e.shapeGroup]: c.numberOfProperties,
            [t.effectValueAngleValue]: c.numberOfProperties,
            [t.effectValueCheckboxValue]: c.numberOfProperties,
            [t.effectValueColorValue]: c.numberOfProperties,
            [t.effectValueDropdownValue]: c.numberOfProperties,
            [t.effectValueIgnoredValue]: c.numberOfProperties,
            [t.effectValueLayerValue]: c.numberOfProperties,
            [t.effectValuePointValue]: c.numberOfProperties,
            [t.effectValueSliderValue]: c.numberOfProperties,
            [e.effect]: c.numberOfProperties,
            [l.effectList]: c.numberOfProperties,
            [l.effectParameters]: c.numberOfProperties,
            ...j(l.effectList, c.numberOfProperties),
            ...j(l.effectParameters, c.numberOfProperties)
        },
        mm: {
            [e.shapeMerge]: c.mergeMode
        },
        ip: {
            [e.characterPrecomp]: c.inPoint
        },
        ascent: {
            [e.textFont]: c.ascent
        },
        r: {
            [t.textSelector]: c.rangeUnits
        },
        lh: {
            [t.textDocument]: c.lineHeight
        },
        tr: {
            [t.textDocument]: c.textTracking
        },
        ls: {
            [t.textDocument]: c.baselineShift
        }
    }
}, Ur = {
    required: {
        ty: {
            ...j(l.composition, c.layerType),
            ...j(l.layerStyleList, c.layerStyleType),
            ...j(l.effectParameters, c.effectType),
            ...j(l.effectList, c.effectType)
        },
        bm: {
            ...j(l.composition, c.blendMode),
            ...j(l.shapeList, c.blendMode)
        },
        d: {
            [e.shapeEllipse]: c.shapeDirection,
            [e.shapePath]: c.shapeDirection,
            [e.shapePolygon]: c.shapeDirection,
            [e.shapeStar]: c.shapeDirection,
            [e.shapeRectangle]: c.shapeDirection
        },
        t: {
            [e.assetDataSource]: c.dataSourceType
        },
        origin: {
            [e.textFont]: c.textType
        },
        b: {
            [t.textSelector]: c.basedOn
        },
        sh: {
            [t.textSelector]: c.textTypeShape
        }
    },
    known: {
        tt: {
            [e.layerPrecomposition]: c.matteMode,
            [e.layerShape]: c.matteMode,
            [e.layerSolidColor]: c.matteMode,
            [e.layerImage]: c.matteMode,
            [e.layerNull]: c.matteMode,
            [e.layerText]: c.matteMode
        },
        m: {
            [e.shapeRepeater]: c.composite,
            [e.shapeTrim]: c.multiple,
            [t.textFollowPath]: c.textMask
        },
        r: {
            [e.shapeFill]: c.fillRuleValue,
            [e.shapeGradientFill]: c.fillRuleValue
        },
        t: {
            [e.shapeGradientFill]: c.gradientType,
            [e.shapeGradientStroke]: c.gradientType
        },
        gt: {
            [e.layerStyleGradientOverlay]: c.gradientType
        },
        lc: {
            [e.shapeGradientStroke]: c.lineCapType,
            [e.shapeStroke]: c.lineCapType
        },
        lj: {
            [e.shapeGradientStroke]: c.lineJoinType,
            [e.shapeStroke]: c.lineJoinType,
            [e.shapeOffsetPath]: c.lineJoin
        },
        sy: {
            [e.shapePolygon]: c.shapePolygonStarType,
            [e.shapeStar]: c.shapePolygonStarType
        },
        g: {
            [t.textAlignmentOptions]: c.textTypeGrouping
        },
        j: {
            [t.textDocument]: c.textTypeJustify
        },
        ca: {
            [t.textDocument]: c.textTypeCaps
        },
        vj: {
            [t.textDocument]: c.textTypeVerticalJustify
        }
    }
}, Hr = {
    required: {},
    known: {}
}, qr = {
    required: {
        x: {
            [e.keyframe]: C.xAxisValue,
            [l.keyframeList]: C.xAxisValue,
            [l.keyframeValue]: C.xAxisValue,
            [e.positionKeyframe]: C.xAxisValue,
            [l.positionKeyframeList]: C.xAxisValue,
            [e.keyframeBezierHandle]: C.xAxisValue
        },
        y: {
            [e.keyframe]: C.yAxisValue,
            [l.keyframeList]: C.yAxisValue,
            [l.keyframeValue]: C.yAxisValue,
            [e.positionKeyframe]: C.yAxisValue,
            [l.positionKeyframeList]: C.yAxisValue,
            [e.keyframeBezierHandle]: C.yAxisValue
        },
        t: {
            [t.textSelector]: C.expressible
        }
    },
    known: {
        rn: {
            [t.textSelector]: C.randomize
        },
        ddd: {
            [e.animation]: C.threedimensional,
            ...j(l.composition, C.threedimensional)
        },
        ao: {
            [e.layerPrecomposition]: C.autoOrient,
            [e.layerShape]: C.autoOrient,
            [e.layerSolidColor]: C.autoOrient,
            [e.layerImage]: C.autoOrient,
            [e.layerNull]: C.autoOrient,
            [e.layerText]: C.autoOrient
        },
        a: {
            [e.animatedValue]: C.animated,
            [e.animatedValueStatic]: C.animated,
            [e.animatedShape]: C.animated,
            [e.animatedShapeStatic]: C.animated,
            [e.animatedPosition]: C.animated,
            [e.animatedPositionStatic]: C.animated,
            [e.animatedColor]: C.animated,
            [e.animatedColorStatic]: C.animated,
            [e.animatedMultidimensional]: C.animated,
            [e.animatedMultidimensionalStatic]: C.animated
        },
        e: {
            [e.assetImage]: C.embedded,
            [e.assetDataSource]: C.embedded
        },
        en: {
            ...j(l.effectList, C.enabled)
        },
        xt: {
            [e.assetPrecomposition]: C.extraComposition
        },
        h: {
            [e.keyframe]: C.hold,
            [l.keyframeList]: C.hold,
            [l.keyframeValue]: C.hold,
            [e.positionKeyframe]: C.hold,
            [l.positionKeyframeList]: C.hold,
            [e.keyframeBezierHandle]: C.hold,
            [e.shapeKeyframe]: C.hold
        }
    }
}, Zr = {
    required: {
        s: {
            [e.splitVector]: U.splitEnabled
        }
    },
    known: {
        c: {
            [e.bezier]: U.closed
        },
        inv: {
            [e.mask]: U.inverted
        },
        hd: {
            ...j(l.composition, U.hidden),
            ...j(l.shapeList, U.hidden)
        },
        cp: {
            [e.layerPrecomposition]: U.collapseTransform,
            [e.layerShape]: U.collapseTransform,
            [e.layerSolidColor]: U.collapseTransform,
            [e.layerImage]: U.collapseTransform,
            [e.layerNull]: U.collapseTransform,
            [e.layerText]: U.collapseTransform
        },
        hasMask: {
            [e.layerPrecomposition]: U.hasMask,
            [e.layerShape]: U.hasMask,
            [e.layerSolidColor]: U.hasMask,
            [e.layerImage]: U.hasMask,
            [e.layerNull]: U.hasMask,
            [e.layerText]: U.hasMask
        },
        mb: {
            [e.layerPrecomposition]: U.motionBlurEnabled,
            [e.layerShape]: U.motionBlurEnabled,
            [e.layerSolidColor]: U.motionBlurEnabled,
            [e.layerImage]: U.motionBlurEnabled,
            [e.layerNull]: U.motionBlurEnabled,
            [e.layerText]: U.motionBlurEnabled
        },
        of: {
            [t.textDocument]: U.strokeOverFill
        }
    }
}, Wr = {
    required: {
        assets: {
            [e.animation]: l.assets
        },
        layers: {
            [e.animation]: l.composition,
            [e.assetPrecomposition]: l.composition
        },
        shapes: {
            [e.layerShape]: l.shapeList,
            [e.characterShapes]: l.shapeList
        },
        ef: {
            [e.effect]: l.effectParameters,
            ...j(l.effectList, l.effectParameters)
        },
        i: {
            [e.bezier]: l.inTangents
        },
        o: {
            [e.bezier]: l.outTangents
        },
        v: {
            [e.bezier]: l.vertices
        },
        k: {
            [t.textAnimatedDocument]: l.textDocumentKeyframes,
            [e.animatedValue]: l.keyframeList,
            [e.animatedValueStatic]: l.staticValues,
            [e.animatedMultidimensional]: l.keyframeList,
            [e.animatedMultidimensionalStatic]: l.staticValues,
            [e.animatedPosition]: l.positionKeyframeList,
            [e.animatedPositionStatic]: l.staticValues,
            [e.animatedColor]: l.keyframeList,
            [e.animatedShape]: l.shapeKeyframeList,
            [e.animatedColorStatic]: l.colorRgba
        },
        a: {
            [t.textAnimatorData]: l.textRanges
        },
        x: {
            [e.keyframeBezierHandle]: l.xAxis
        },
        y: {
            [e.keyframeBezierHandle]: l.yAxis
        },
        s: {
            [e.shapeKeyframe]: l.shapeKeyframeStart
        },
        fc: {
            [t.textDocument]: l.documentFillColor
        }
    },
    known: {
        k: {
            [t.metadata]: l.keywords
        },
        comps: {
            [e.animation]: l.extraCompositions
        },
        chars: {
            [e.animation]: l.textCharacters
        },
        markers: {
            [e.animation]: l.markers
        },
        masksProperties: {
            [e.layerPrecomposition]: l.masksProperties,
            [e.layerShape]: l.masksProperties,
            [e.layerSolidColor]: l.masksProperties,
            [e.layerImage]: l.masksProperties,
            [e.layerNull]: l.masksProperties,
            [e.layerText]: l.masksProperties
        },
        ef: {
            [e.layerPrecomposition]: l.effectList,
            [e.layerShape]: l.effectList,
            [e.layerSolidColor]: l.effectList,
            [e.layerImage]: l.effectList,
            [e.layerNull]: l.effectList,
            [e.layerText]: l.effectList
        },
        sy: {
            [e.layerPrecomposition]: l.layerStyle,
            [e.layerShape]: l.layerStyle,
            [e.layerSolidColor]: l.layerStyle,
            [e.layerImage]: l.layerStyle,
            [e.layerNull]: l.layerStyle,
            [e.layerText]: l.layerStyle
        },
        d: {
            [e.shapeGradientStroke]: l.strokeDashList,
            [e.shapeStroke]: l.strokeDashList
        },
        it: {
            [e.shapeGroup]: l.shapeList
        },
        s: {
            [e.keyframe]: l.keyframeValue,
            [l.keyframeList]: l.keyframeValue,
            [e.positionKeyframe]: l.keyframeValue,
            [l.positionKeyframeList]: l.keyframeValue,
            [e.keyframeBezierHandle]: l.keyframeValue
        },
        e: {
            [e.keyframe]: l.keyframeEndValue,
            [l.keyframeList]: l.keyframeEndValue,
            [l.keyframeValue]: l.keyframeEndValue,
            [e.positionKeyframe]: l.keyframeEndValue,
            [l.positionKeyframeList]: l.keyframeEndValue,
            [e.keyframeBezierHandle]: l.keyframeEndValue,
            [e.shapeKeyframe]: l.keyframeEndValue
        },
        to: {
            [e.positionKeyframe]: l.valueOutTangent
        },
        ti: {
            [e.positionKeyframe]: l.valueInTangent
        },
        sz: {
            [t.textDocument]: l.wrapSize
        },
        sc: {
            [t.textDocument]: l.documentStrokeColor
        },
        ps: {
            [t.textDocument]: l.wrapPosition
        },
        list: {
            [t.textFonts]: l.textFontList
        }
    }
}, Xr = {
    required: {
        r: {
            [t.layerTransform]: t.rotationClockwise,
            [e.shapeTransform]: t.rotationClockwise,
            [t.transformRepeater]: t.rotationClockwise,
            [t.textStyle]: t.rotationClockwise,
            [e.shapePolygon]: t.polygonRotationClockwise,
            [e.shapeStar]: t.polygonRotationClockwise,
            [e.shapeRectangle]: t.rounded,
            [e.shapeRoundedCorners]: t.radius
        },
        au: {
            [e.layerAudio]: t.layerAudioSettings
        },
        t: {
            [e.layerText]: t.textAnimatorData
        },
        pe: {
            [e.layerCamera]: t.perspective
        },
        ks: {
            [e.layerPrecomposition]: t.layerTransform,
            [e.layerShape]: t.layerTransform,
            [e.layerSolidColor]: t.layerTransform,
            [e.layerImage]: t.layerTransform,
            [e.layerNull]: t.layerTransform,
            [e.layerText]: t.layerTransform,
            [e.layerCamera]: t.layerTransform,
            [e.shapePath]: t.animatedShapeProp
        },
        p: {
            [e.shapeEllipse]: t.animatedPositionProp,
            [e.shapePolygon]: t.animatedPositionProp,
            [e.shapeStar]: t.animatedPositionProp,
            [e.shapeRectangle]: t.animatedPositionProp,
            [t.textAnimatorData]: t.textFollowPath
        },
        s: {
            [e.shapeEllipse]: t.shapeEllipseSize,
            [e.shapeGradientFill]: t.startPoint,
            [e.shapeGradientStroke]: t.startPoint,
            [e.shapeRectangle]: t.size,
            [e.shapeTrim]: t.shapeTrimStart,
            [e.textDocumentKeyframe]: t.textDocument,
            [e.layerStyleStroke]: t.blurSize,
            [e.layerStyleDropShadow]: t.blurSize,
            [e.layerStyleInnerShadow]: t.blurSize,
            [e.layerStyleBevelEmboss]: t.blurSize,
            [e.layerStyleSatin]: t.blurSize
        },
        o: {
            [e.shapeFill]: t.opacity,
            [e.shapeGradientFill]: t.opacity,
            [e.shapeTrim]: t.offset,
            [e.shapeGradientStroke]: t.strokeOpacity,
            [e.shapeStroke]: t.strokeOpacity
        },
        c: {
            [e.shapeFill]: t.shapeFillColor,
            [e.shapeRepeater]: t.copies,
            [e.shapeStroke]: t.shapeStrokeColor
        },
        e: {
            [e.shapeGradientFill]: t.endPoint,
            [e.shapeGradientStroke]: t.endPoint,
            [e.shapeTrim]: t.shapeTrimEnd
        },
        g: {
            [e.shapeGradientFill]: t.animatedGradientColors,
            [e.shapeGradientStroke]: t.animatedGradientColors
        },
        or: {
            [e.shapePolygon]: t.outerRadius,
            [e.shapeStar]: t.outerRadius
        },
        os: {
            [e.shapePolygon]: t.outerRoundness,
            [e.shapeStar]: t.outerRoundness
        },
        pt: {
            [e.shapePolygon]: t.points,
            [e.shapeStar]: t.points
        },
        ir: {
            [e.shapeStar]: t.innerRadius
        },
        is: {
            [e.shapeStar]: t.innerRoundness
        },
        tr: {
            [e.shapeRepeater]: t.transformRepeater
        },
        data: {
            [l.textCharacters]: t.textCharacterData
        },
        a: {
            [t.textSelector]: t.maxAmount
        },
        d: {
            [t.textAnimatorData]: t.textAnimatedDocument
        },
        k: {
            [e.animatedShapeStatic]: t.animatedShapeBezier,
            [t.animatedGradientColors]: t.animatedMultidimensionalProp
        },
        lv: {
            [t.layerAudioSettings]: t.level
        },
        x: {
            [e.splitVector]: t.splitX
        },
        y: {
            [e.splitVector]: t.splitY
        },
        z: {
            [e.splitVector]: t.splitZ
        },
        lc: {
            [e.layerStyleDropShadow]: t.layerConceal
        },
        m: {
            [t.textAnimatorData]: t.textAlignmentOptions
        },
        w: {
            [e.shapeGradientStroke]: t.strokeWidth,
            [e.shapeStroke]: t.strokeWidth
        }
    },
    known: {
        xe: {
            [t.textSelector]: t.maxEase
        },
        ne: {
            [t.textSelector]: t.minEase
        },
        meta: {
            [e.animation]: t.metadata
        },
        [t.metadata]: {
            [e.animation]: t.userMetadata
        },
        mb: {
            [e.animation]: t.motionBlur
        },
        fonts: {
            [e.animation]: t.textFonts
        },
        v: {
            ...j(l.effectParameters, c.value),
            [e.strokeDashDefault]: t.strokeLength,
            [e.strokeDashGap]: t.strokeLength,
            [e.strokeDashOffset]: t.strokeLength,
            [e.effectValueAngle]: t.effectValueAngleValue,
            [e.effectValueCheckbox]: t.effectValueCheckboxValue,
            [e.effectValueColor]: t.effectValueColorValue,
            [e.effectValueDropdown]: t.effectValueDropdownValue,
            [e.effectValueIgnored]: t.effectValueIgnoredValue,
            [e.effectValueLayer]: t.effectValueLayerValue,
            [e.effectValuePoint]: t.effectValuePointValue,
            [e.effectValueSlider]: t.effectValueSliderValue
        },
        rx: {
            [t.layerTransform]: t.rotationX,
            [e.shapeTransform]: t.rotationX,
            [t.transformRepeater]: t.rotationX,
            [t.textStyle]: t.rotationX
        },
        ry: {
            [t.layerTransform]: t.rotationY,
            [e.shapeTransform]: t.rotationY,
            [t.transformRepeater]: t.rotationY,
            [t.textStyle]: t.rotationY
        },
        rz: {
            [t.layerTransform]: t.rotationZ,
            [e.shapeTransform]: t.rotationZ,
            [t.transformRepeater]: t.rotationZ,
            [t.textStyle]: t.rotationZ
        },
        or: {
            [t.layerTransform]: t.orientation,
            [e.shapeTransform]: t.orientation,
            [t.transformRepeater]: t.orientation,
            [t.textStyle]: t.orientation
        },
        a: {
            [t.layerTransform]: t.anchorPoint,
            [t.transformRepeater]: t.anchorPoint,
            [e.shapeTransform]: t.anchorPoint,
            [t.textStyle]: t.anchorPoint,
            [e.shapeGradientFill]: t.highlightAngle,
            [e.shapeGradientStroke]: t.highlightAngle,
            [e.shapePuckerBloat]: t.amount,
            [e.shapeTwist]: t.angle,
            [e.shapeOffsetPath]: t.amount,
            [e.textRange]: t.textStyle,
            [t.textFollowPath]: t.forceAlignment,
            [t.textSelector]: t.maxAmount,
            [t.textAlignmentOptions]: t.textGroupAlignment,
            [e.layerStyleDropShadow]: t.angle,
            [e.layerStyleInnerShadow]: t.angle,
            [e.layerStyleBevelEmboss]: t.angle,
            [e.layerStyleSatin]: t.angle,
            [e.layerStyleGradientOverlay]: t.angle
        },
        s: {
            [t.layerTransform]: t.scale,
            [e.shapeTransform]: t.scale,
            [t.transformRepeater]: t.scale,
            [t.textStyle]: t.scale,
            [e.shapeZigZags]: t.shapeZigZagSize,
            [e.textRange]: t.textSelector,
            [e.layerStyleStroke]: t.size,
            [e.layerStyleGradientOverlay]: t.gradientOverlayScale,
            [t.textSelector]: t.textSelectorStart
        },
        o: {
            [t.layerTransform]: t.transformOpacity,
            [e.shapeTransform]: t.transformOpacity,
            [t.transformRepeater]: t.transformOpacity,
            [t.textStyle]: t.transformOpacity,
            [t.textSelector]: t.offset,
            [e.shapeFill]: t.opacity,
            [e.shapeGradientFill]: t.opacity,
            [e.shapeGradientStroke]: t.opacity,
            [e.shapeStroke]: t.opacity,
            [e.mask]: t.maskOpacity,
            [e.shapeGradientFill]: t.opacity,
            [e.shapeRepeater]: t.offset,
            [e.keyframe]: t.outTangent,
            [l.keyframeList]: t.outTangent,
            [l.keyframeValue]: t.outTangent,
            [e.positionKeyframe]: t.outTangent,
            [l.positionKeyframeList]: t.outTangent,
            [e.keyframeBezierHandle]: t.outTangent,
            [e.shapeKeyframe]: t.outTangent,
            [e.layerStyleDropShadow]: t.opacity,
            [e.layerStyleInnerShadow]: t.opacity,
            [e.layerStyleBevelEmboss]: t.opacity,
            [e.layerStyleSatin]: t.opacity,
            [e.layerStyleColorOverlay]: t.opacity,
            [e.layerStyleGradientOverlay]: t.opacity
        },
        i: {
            [e.keyframe]: t.inTangent,
            [l.keyframeList]: t.inTangent,
            [l.keyframeValue]: t.inTangent,
            [e.positionKeyframe]: t.inTangent,
            [l.positionKeyframeList]: t.inTangent,
            [e.keyframeBezierHandle]: t.inTangent,
            [e.shapeKeyframe]: t.inTangent
        },
        sk: {
            [t.layerTransform]: t.skew,
            [e.shapeTransform]: t.skew,
            [t.transformRepeater]: t.skew,
            [t.textStyle]: t.skew
        },
        sa: {
            [t.layerTransform]: t.skewAxis,
            [e.shapeTransform]: t.skewAxis,
            [t.transformRepeater]: t.skewAxis,
            [t.textStyle]: t.skewAxis
        },
        p: {
            [t.layerTransform]: t.translation,
            [e.shapeTransform]: t.translation,
            [t.transformRepeater]: t.translation,
            [t.textStyle]: t.translation,
            [t.textFollowPath]: t.perpendicularToPath
        },
        pt: {
            [e.mask]: t.maskVertices,
            [e.shapeZigZags]: t.points
        },
        x: {
            [e.mask]: t.dilate
        },
        tm: {
            [e.layerPrecomposition]: t.timeRemapping
        },
        h: {
            [e.shapeGradientFill]: t.highlightLength,
            [e.shapeGradientStroke]: t.highlightLength
        },
        r: {
            [e.shapeGradientFill]: t.fillRule,
            [e.shapeZigZags]: t.roundness,
            [t.textFollowPath]: t.reversePath,
            [e.layerStyleOuterGlow]: t.range
        },
        ml2: {
            [e.shapeGradientStroke]: t.miterLimitAlternative,
            [e.shapeStroke]: t.miterLimitAlternative
        },
        w: {
            [e.shapeGradientStroke]: t.strokeWidth,
            [e.shapeStroke]: t.strokeWidth
        },
        c: {
            [e.shapeTrim]: t.center,
            [e.layerStyleStroke]: t.layerStyleColor,
            [e.layerStyleDropShadow]: t.layerStyleColor,
            [e.layerStyleInnerShadow]: t.layerStyleColor,
            [e.layerStyleBevelEmboss]: t.layerStyleColor,
            [e.layerStyleOuterGlow]: t.layerStyleColor
        },
        ml: {
            [e.shapeOffsetPath]: t.miterLimit
        },
        so: {
            [e.layerStyleBevelEmboss]: t.shadowOpacity,
            [e.layerStyleColorOverlay]: t.opacity,
            [t.transformRepeater]: t.startOpacity
        },
        eo: {
            [t.transformRepeater]: t.startOpacity
        },
        ks: {
            [e.characterPrecomp]: t.layerTransform,
            [e.shapePath]: t.shape
        },
        f: {
            [t.textFollowPath]: t.firstMargin
        },
        l: {
            [t.textFollowPath]: t.lastMargin
        },
        sw: {
            [t.textStyle]: t.strokeWidth,
            [t.textDocument]: t.strokeWidth
        },
        sc: {
            [t.textStyle]: t.strokeColor,
            [t.textDocument]: t.strokeColor,
            [e.layerStyleBevelEmboss]: t.shadowColor
        },
        sh: {
            [t.textStyle]: t.strokeHue
        },
        ss: {
            [t.textStyle]: t.strokeSaturation
        },
        sb: {
            [t.textStyle]: t.strokeBrightness
        },
        fc: {
            [t.textStyle]: t.fillColor
        },
        fh: {
            [t.textStyle]: t.fillHue
        },
        fs: {
            [t.textStyle]: t.fillSaturation
        },
        fo: {
            [t.textStyle]: t.fillOpacity
        },
        fb: {
            [t.textStyle]: t.fillBrightness
        },
        t: {
            [t.textStyle]: t.letterSpacing
        },
        bl: {
            [t.textStyle]: t.blur
        },
        ls: {
            [t.textStyle]: t.lineSpacing
        },
        sm: {
            [t.textSelector]: t.selectorSmoothness,
            [e.layerStyleBevelEmboss]: t.shadowMode
        },
        e: {
            [t.textSelector]: t.textSelectorEnd
        },
        gf: {
            [e.layerStyleGradientOverlay]: t.animatedGradientColors
        },
        ch: {
            [e.layerStyleDropShadow]: t.chokeSpread,
            [e.layerStyleInnerShadow]: t.chokeSpread,
            [e.layerStyleBevelEmboss]: t.chokeSpread,
            [e.layerStyleOuterGlow]: t.chokeSpread
        },
        bm: {
            [e.layerStyleDropShadow]: t.layerStyleBlendMode,
            [e.layerStyleInnerShadow]: t.layerStyleBlendMode,
            [e.layerStyleBevelEmboss]: t.layerStyleBlendMode,
            [e.layerStyleSatin]: t.layerStyleBlendMode,
            [e.layerStyleColorOverlay]: t.layerStyleBlendMode,
            [e.layerStyleGradientOverlay]: t.layerStyleBlendMode
        },
        no: {
            [e.layerStyleDropShadow]: t.noise,
            [e.layerStyleInnerShadow]: t.noise,
            [e.layerStyleOuterGlow]: t.noise,
            [e.layerStyleInnerGlow]: t.noise
        },
        d: {
            [e.layerStyleDropShadow]: t.distance,
            [e.layerStyleInnerShadow]: t.distance,
            [e.layerStyleBevelEmboss]: t.distance,
            [e.layerStyleOuterGlow]: t.distance
        },
        j: {
            [e.layerStyleOuterGlow]: t.jitter
        },
        sr: {
            [e.layerStyleInnerGlow]: t.source,
            [e.layerStyleBevelEmboss]: t.strength
        },
        bs: {
            [e.layerStyleBevelEmboss]: t.bevelStyle
        },
        bt: {
            [e.layerStyleBevelEmboss]: t.technique
        },
        sf: {
            [e.layerStyleBevelEmboss]: t.soften
        },
        ga: {
            [e.layerStyleBevelEmboss]: t.globalAngle
        },
        ll: {
            [e.layerStyleBevelEmboss]: t.altitude
        },
        hm: {
            [e.layerStyleBevelEmboss]: t.highlightMode
        },
        hc: {
            [e.layerStyleBevelEmboss]: t.highlightColor
        },
        ho: {
            [e.layerStyleBevelEmboss]: t.highlightOpacity
        },
        in: {
            [e.layerStyleSatin]: t.invert
        },
        gs: {
            [e.layerStyleGradientOverlay]: t.smoothness
        },
        re: {
            [e.layerStyleGradientOverlay]: t.reverse
        },
        al: {
            [e.layerStyleGradientOverlay]: t.align
        },
        of: {
            [e.layerStyleGradientOverlay]: t.offset
        }
    }
}, de = (a, n, i, s)=>{
    let f = (i.required[a] || {})[n];
    if (f) return {
        type: s,
        title: f,
        parentTitle: n,
        required: !0
    };
    let m = (i.known[a] || {})[n] || Me;
    return {
        type: s,
        title: m,
        parentTitle: n,
        required: !1
    };
}, Jr = (a, n)=>de(a, n, Wr, "collection"), Yr = (a, n)=>de(a, n, Xr, "element"), Qr = (a, n, i)=>{
    switch(n.value.type){
        case "String":
            let s = de(a, i, Gr, "attribute");
            return s.title === Me ? de(a, i, Kr, "constant") : s;
        case "Boolean":
            return de(a, i, Zr, "attribute");
        case "Number":
            let f = de(a, i, $r, "attribute");
            if (f.title === Me) {
                let m = de(a, i, Ur, "constant");
                return m.title === Me ? de(a, i, qr, "integer-boolean") : m;
            } else return f;
        case "Null":
            return de(a, i, Hr, "attribute");
        default:
            return {
                type: "missing",
                title: Me,
                parentTitle: i,
                required: !1
            };
    }
}, en = (a, n, i)=>{
    switch(n.value.type){
        case "Array":
            return Jr(a, i);
        case "Object":
            return Yr(a, i);
        default:
            return Qr(a, n, i);
    }
}, tn = class {
    constructor(a = 1 / 0){
        this._capacity = a, Xt(this, "_keys", []), Xt(this, "_storage", new WeakMap);
    }
    peek() {
        let a = this.size(), n = this._keys[a - 1];
        return n ? this._storage.get(n) : void 0;
    }
    pop() {
        let a = this._keys.pop();
        if (a !== void 0) {
            let n = this._storage.get(a);
            return this._storage.delete(a), n;
        }
    }
    push(a) {
        if (this.size() === this._capacity) throw Error("Stack has reached max capacity, you cannot add more items");
        let n = {
            i: this._keys.length
        };
        this._storage.set(n, a), this._keys.push(n);
    }
    size() {
        return this._keys.length;
    }
}, an = {
    position: !0,
    valueType: !0,
    messages: {
        warning: !1
    }
}, Yt = (a, n, i)=>{
    i.messages.warning && a.message(n);
}, rn = (a, n)=>!n.valueType || a.type === "Array" || a.type === "Object" || a.type === "Document" ? {} : {
        valueType: a.type.toLowerCase()
    }, Qe = (a, n)=>n.position ? {
        position: {
            ...a.loc
        }
    } : {}, Qt = (a, n)=>{
    let i = Qe(a, n), s = rn(a, n);
    return Cr(a.value, {
        ...i,
        ...s
    });
}, nn = (a, n)=>{
    let i = a.name.value;
    if (n.position) {
        let s = Qe(a.name, n);
        return Ar(i, {
            ...s
        });
    } else return i;
}, on = (a, n, i)=>{
    let s = nn(a, i), f = typeof s == "string" ? s : s.value, m = {
        ...Qe(a, i)
    }, { title: S } = en(f, a, n);
    switch(a.value.type){
        case "Array":
            return Er(s, S, [], {
                ...m
            });
        case "Object":
            return jr(s, S, [], {
                ...m
            });
        default:
            return _r(s, S, [], {
                ...m
            });
    }
}, da = (a, n)=>n.loc.end.column === a.loc.end.column;
function re(a, n, i) {
    Ce(a, n) || i.fail(`Unexpected node type found ${a?.type}, has to be 'array'`);
}
var ln = (a)=>{
    let n = [];
    return a.elements.forEach((i)=>{
        Ce(i, "Object") && i.members.forEach((s)=>n.push(s));
    }), n;
}, sn = (a, n, i, s, f)=>{
    let { key: m, parentTitle: S, type: b } = i;
    switch(b){
        case "Constant":
            if (!Ce(a, "String") && !Ce(a, "Number")) break;
            let { defaultValue: w, prefix: x, values: T } = S, A = T[w];
            if (!A) throw new Error(`[${n}] '${w}' has to present in "dependent.parentTitle.values"`);
            let Y = a.value, H = T[Y];
            if (!H) {
                let P = `[${n}] '${Y}' is missing in "dependent.parentTitle.values"`;
                Yt(s, P, f);
            }
            let X = typeof H > "u" ? A : H;
            return x && x.length > 0 ? `${x}-${X}` : X;
        case "Array":
            if (!Ce(a, "Array")) break;
            let V = i.childType;
            if (!(V && a.elements.find((P)=>P.type === V))) break;
            return S;
        default:
            if (b !== a.type) {
                let P = `${n}'s '${m}' type is ${a.type} but has to be ${b}`;
                Yt(s, P, f);
                break;
            }
            return S;
    }
}, ga = (a, n, i, s, f)=>{
    let m = n.reduce((S, b)=>{
        let w = b.name.value;
        return S[w] = b.value, S;
    }, {});
    for (let S of i){
        let { key: b } = S, w = m[b];
        if (!w) continue;
        let x = sn(w, a, S, s, f);
        if (x) return x;
    }
}, ea = (a, n, i, s)=>{
    let f = ha(a, n), { defaultTitle: m, dependents: S } = f;
    return S && ga(n, a.members, S, i, s) || m;
}, ta = (a, n, i, s)=>{
    let f = ha(a, n), { defaultTitle: m, dependents: S } = f;
    if (!S) return m;
    let b = ln(a);
    return ga(n, b, S, i, s) || m;
}, cn = (a, n, i, s, f)=>{
    let m = Qe(a, f);
    switch(a.type){
        case "Document":
            a.body.type !== "Object" && s.fail(new Error(`Lottie must be "Object" but it's "${a.body.type}"`));
            break;
        case "Member":
            let S = i.peek();
            i.push(on(a, S.title, f));
            break;
        case "Object":
            switch(n.type){
                case "Document":
                    i.push(Lr([], {
                        ...m
                    }));
                    break;
                case "Member":
                    let b = i.peek();
                    re(b, "element", s);
                    let w = ea(a, b.title, s, f);
                    i.push(Zt(w, [], {
                        ...m
                    }));
                    break;
                case "Array":
                    let x = i.peek();
                    re(x, "array", s);
                    let T = ea(a, x.title, s, f);
                    i.push(Zt(T, [], {
                        ...m
                    }));
                    break;
            }
            break;
        case "Array":
            switch(n.type){
                case "Member":
                    let b1 = i.peek();
                    re(b1, "collection", s);
                    let w1 = ta(a, b1.title, s, f);
                    i.push(Wt(w1, [], {
                        ...m
                    }));
                    break;
                case "Array":
                    let x1 = i.peek();
                    re(x1, "array", s);
                    let T1 = ta(a, x1.title, s, f);
                    i.push(Wt(T1, [], {
                        ...m
                    }));
                    break;
            }
            break;
        default:
            switch(n.type){
                case "Member":
                    da(a, n) && i.push(Qt(a, f));
                    break;
                case "Array":
                    i.push(Qt(a, f));
                    break;
            }
            break;
    }
}, un = (a, n, i, s, f, m)=>{
    switch(a.type){
        case "Document":
            break;
        case "Member":
            let S = i.pop();
            switch(S.type){
                case "element":
                    break;
                case "collection":
                    break;
                case "attribute":
                    !m.hasExpressions && S.title === "expression" && (m.hasExpressions = !0);
                    break;
                default:
                    s.fail("Node's type has to be 'element', 'collection or 'attribute'");
            }
            let b = i.peek();
            switch(b.type){
                case "object":
                    break;
                case "root":
                    break;
                default:
                    s.fail("ParentNode's type has to be 'object' or 'root'");
            }
            b.children.push(S);
            break;
        case "Object":
            switch(n.type){
                case "Document":
                    break;
                case "Member":
                    let w = i.pop();
                    re(w, "object", s);
                    let x = i.peek();
                    re(x, "element", s), w.title === x.title && (w.title = `${x.title}-children`), x.children = [
                        w
                    ];
                    break;
                case "Array":
                    let T = i.pop();
                    re(T, "object", s);
                    let A = i.peek();
                    re(A, "array", s), A.children.push(T);
                    break;
            }
            break;
        case "Array":
            switch(n.type){
                case "Member":
                    let w1 = i.pop();
                    re(w1, "array", s);
                    let x1 = i.peek();
                    re(x1, "collection", s), w1.title === x1.title && (w1.title = `${x1.title}-children`), x1.children = [
                        w1
                    ];
                    break;
                case "Array":
                    let T1 = i.pop();
                    re(T1, "array", s);
                    let A1 = i.peek();
                    re(A1, "array", s), A1.children.push(T1);
                    break;
            }
            break;
        default:
            switch(n.type){
                case "Member":
                    if (da(a, n)) {
                        let T = i.pop();
                        re(T, "primitive", s);
                        let A = i.peek();
                        re(A, "attribute", s), A.children = [
                            T
                        ];
                    }
                    break;
                case "Array":
                    let w2 = i.pop();
                    re(w2, "primitive", s);
                    let x2 = i.peek();
                    re(x2, "array", s), x2.children.push(w2);
                    break;
            }
            break;
    }
};
function pn(a, n, i = {}) {
    let s = (0, qt.parse)(a, {
        tokens: !0
    }), f = (0, Dr.default)(an, i.parse), m = s.tokens.length, S = new tn(m), b = {
        hasExpressions: !1
    };
    (0, qt.traverse)(s, {
        enter (T, A) {
            cn(T, A, S, n, f);
        },
        exit (T, A) {
            un(T, A, S, n, f, b);
        }
    });
    let w = {
        parse: {
            ...f.messages.warning && n.messages.length > 0 ? {
                messages: n.messages
            } : {}
        }
    };
    Object.assign(n.data, w);
    let x = S.pop();
    if (Ce(x, "root")) return x.hasExpressions = b.hasExpressions, x;
    n.fail(`Stack's last item has to be "root" but it's "${x?.type}"`, x);
}
var fn = function(a = {}) {
    let n = this.data("settings") || {
        parse: {}
    };
    n.parse = (0, Vr.default)(n.parse, a), Object.assign(this, {
        Parser: (i, s)=>pn(i, s, n)
    });
}, mn = fn;
function Oe(a) {
    let n = (i)=>{
        let s = {};
        return i.children.forEach((f)=>{
            let m = typeof f.key == "string" ? f.key : f.key.value, S = f.children[0];
            S && (s[m] = Oe(S));
        }), s;
    };
    switch(a.type){
        case "primitive":
            switch(typeof a.value){
                case "number":
                    return a.value;
                case "string":
                    return a.value;
                case "boolean":
                    return a.value;
                case "object":
                    return null;
                default:
                    throw new Error(`Unknown Primitive type ${a.type}.`);
            }
        case "attribute":
            return a.children[0] ? Oe(a.children[0]) : null;
        case "collection":
            return a.children[0] ? Oe(a.children[0]) : null;
        case "element":
            return a.children[0] ? Oe(a.children[0]) : null;
        case "array":
            return a.children.map(Oe);
        case "root":
            return n(a);
        case "object":
            return n(a);
        default:
            throw new Error(`Unknown node type ${a.type}.`);
    }
}
var yn = {
    indent: 0
};
function hn(a, n, i = {}) {
    let s = {
        ...yn,
        ...i.stringify
    }, f = Oe(a);
    return JSON.stringify(f, null, s.indent);
}
var dn = function(a = {}) {
    let n = this.data("settings") || {
        stringify: {}
    };
    n.stringify = {
        ...n.stringify,
        ...a
    }, Object.assign(this, {
        Compiler: (i, s)=>hn(i, s, n)
    });
}, gn = dn;
function aa(a) {
    if (a) throw a;
}
var Sn = (0, _chunkU2GK2GFRMjs.b)(pa(), 1), ra = (0, _chunkU2GK2GFRMjs.b)(Pr(), 1);
function Ot(a) {
    if (typeof a != "object" || a === null) return !1;
    let n = Object.getPrototypeOf(a);
    return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a);
}
function kn() {
    let a = [], n = {
        run: i,
        use: s
    };
    return n;
    function i(...f) {
        let m = -1, S = f.pop();
        if (typeof S != "function") throw new TypeError("Expected function as last argument, not " + S);
        b(null, ...f);
        function b(w, ...x) {
            let T = a[++m], A = -1;
            if (w) {
                S(w);
                return;
            }
            for(; ++A < f.length;)(x[A] === null || x[A] === void 0) && (x[A] = f[A]);
            f = x, T ? bn(T, b)(...x) : S(null, ...x);
        }
    }
    function s(f) {
        if (typeof f != "function") throw new TypeError("Expected `middelware` to be a function, not " + f);
        return a.push(f), n;
    }
}
function bn(a, n) {
    let i;
    return s;
    function s(...S) {
        let b = a.length > S.length, w;
        b && S.push(f);
        try {
            w = a.apply(this, S);
        } catch (x) {
            let T = x;
            if (b && i) throw T;
            return f(T);
        }
        b || (w instanceof Promise ? w.then(m, f) : w instanceof Error ? f(w) : m(w));
    }
    function f(S, ...b) {
        i || (i = !0, n(S, ...b));
    }
    function m(S) {
        f(null, S);
    }
}
var vn = (0, _chunkU2GK2GFRMjs.b)(pa(), 1);
function xn(a) {
    return !a || typeof a != "object" ? "" : "position" in a || "type" in a ? na(a.position) : "start" in a || "end" in a ? na(a) : "line" in a || "column" in a ? Ct(a) : "";
}
function Ct(a) {
    return ia(a && a.line) + ":" + ia(a && a.column);
}
function na(a) {
    return Ct(a && a.start) + "-" + Ct(a && a.end);
}
function ia(a) {
    return a && typeof a == "number" ? a : 1;
}
var pe = class extends Error {
    constructor(a, n, i){
        let s = [
            null,
            null
        ], f = {
            start: {
                line: null,
                column: null
            },
            end: {
                line: null,
                column: null
            }
        };
        if (super(), typeof n == "string" && (i = n, n = void 0), typeof i == "string") {
            let m = i.indexOf(":");
            m === -1 ? s[1] = i : (s[0] = i.slice(0, m), s[1] = i.slice(m + 1));
        }
        n && ("type" in n || "position" in n ? n.position && (f = n.position) : "start" in n || "end" in n ? f = n : ("line" in n || "column" in n) && (f.start = n)), this.name = xn(n) || "1:1", this.message = typeof a == "object" ? a.message : a, this.stack = "", typeof a == "object" && a.stack && (this.stack = a.stack), this.reason = this.message, this.fatal, this.line = f.start.line, this.column = f.start.column, this.position = f, this.source = s[0], this.ruleId = s[1], this.file, this.actual, this.expected, this.url, this.note;
    }
};
pe.prototype.file = "";
pe.prototype.name = "";
pe.prototype.reason = "";
pe.prototype.message = "";
pe.prototype.stack = "";
pe.prototype.fatal = null;
pe.prototype.column = null;
pe.prototype.line = null;
pe.prototype.source = null;
pe.prototype.ruleId = null;
pe.prototype.position = null;
var ye = {
    basename: wn,
    dirname: Tn,
    extname: Pn,
    join: Vn,
    sep: "/"
};
function wn(a, n) {
    if (n !== void 0 && typeof n != "string") throw new TypeError('"ext" argument must be a string');
    Be(a);
    let i = 0, s = -1, f = a.length, m;
    if (n === void 0 || n.length === 0 || n.length > a.length) {
        for(; f--;)if (a.charCodeAt(f) === 47) {
            if (m) {
                i = f + 1;
                break;
            }
        } else s < 0 && (m = !0, s = f + 1);
        return s < 0 ? "" : a.slice(i, s);
    }
    if (n === a) return "";
    let S = -1, b = n.length - 1;
    for(; f--;)if (a.charCodeAt(f) === 47) {
        if (m) {
            i = f + 1;
            break;
        }
    } else S < 0 && (m = !0, S = f + 1), b > -1 && (a.charCodeAt(f) === n.charCodeAt(b--) ? b < 0 && (s = f) : (b = -1, s = S));
    return i === s ? s = S : s < 0 && (s = a.length), a.slice(i, s);
}
function Tn(a) {
    if (Be(a), a.length === 0) return ".";
    let n = -1, i = a.length, s;
    for(; --i;)if (a.charCodeAt(i) === 47) {
        if (s) {
            n = i;
            break;
        }
    } else s || (s = !0);
    return n < 0 ? a.charCodeAt(0) === 47 ? "/" : "." : n === 1 && a.charCodeAt(0) === 47 ? "//" : a.slice(0, n);
}
function Pn(a) {
    Be(a);
    let n = a.length, i = -1, s = 0, f = -1, m = 0, S;
    for(; n--;){
        let b = a.charCodeAt(n);
        if (b === 47) {
            if (S) {
                s = n + 1;
                break;
            }
            continue;
        }
        i < 0 && (S = !0, i = n + 1), b === 46 ? f < 0 ? f = n : m !== 1 && (m = 1) : f > -1 && (m = -1);
    }
    return f < 0 || i < 0 || m === 0 || m === 1 && f === i - 1 && f === s + 1 ? "" : a.slice(f, i);
}
function Vn(...a) {
    let n = -1, i;
    for(; ++n < a.length;)Be(a[n]), a[n] && (i = i === void 0 ? a[n] : i + "/" + a[n]);
    return i === void 0 ? "." : On(i);
}
function On(a) {
    Be(a);
    let n = a.charCodeAt(0) === 47, i = Cn(a, !n);
    return i.length === 0 && !n && (i = "."), i.length > 0 && a.charCodeAt(a.length - 1) === 47 && (i += "/"), n ? "/" + i : i;
}
function Cn(a, n) {
    let i = "", s = 0, f = -1, m = 0, S = -1, b, w;
    for(; ++S <= a.length;){
        if (S < a.length) b = a.charCodeAt(S);
        else {
            if (b === 47) break;
            b = 47;
        }
        if (b === 47) {
            if (!(f === S - 1 || m === 1)) {
                if (f !== S - 1 && m === 2) {
                    if (i.length < 2 || s !== 2 || i.charCodeAt(i.length - 1) !== 46 || i.charCodeAt(i.length - 2) !== 46) {
                        if (i.length > 2) {
                            if (w = i.lastIndexOf("/"), w !== i.length - 1) {
                                w < 0 ? (i = "", s = 0) : (i = i.slice(0, w), s = i.length - 1 - i.lastIndexOf("/")), f = S, m = 0;
                                continue;
                            }
                        } else if (i.length > 0) {
                            i = "", s = 0, f = S, m = 0;
                            continue;
                        }
                    }
                    n && (i = i.length > 0 ? i + "/.." : "..", s = 2);
                } else i.length > 0 ? i += "/" + a.slice(f + 1, S) : i = a.slice(f + 1, S), s = S - f - 1;
            }
            f = S, m = 0;
        } else b === 46 && m > -1 ? m++ : m = -1;
    }
    return i;
}
function Be(a) {
    if (typeof a != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(a));
}
var An = {
    cwd: _n
};
function _n() {
    return "/";
}
function At(a) {
    return a !== null && typeof a == "object" && a.href && a.origin;
}
function jn(a) {
    if (typeof a == "string") a = new URL(a);
    else if (!At(a)) {
        let n = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + a + "`");
        throw n.code = "ERR_INVALID_ARG_TYPE", n;
    }
    if (a.protocol !== "file:") {
        let n = new TypeError("The URL must be of scheme file");
        throw n.code = "ERR_INVALID_URL_SCHEME", n;
    }
    return En(a);
}
function En(a) {
    if (a.hostname !== "") {
        let s = new TypeError('File URL host must be "localhost" or empty on darwin');
        throw s.code = "ERR_INVALID_FILE_URL_HOST", s;
    }
    let n = a.pathname, i = -1;
    for(; ++i < n.length;)if (n.charCodeAt(i) === 37 && n.charCodeAt(i + 1) === 50) {
        let s = n.charCodeAt(i + 2);
        if (s === 70 || s === 102) {
            let f = new TypeError("File URL path must not include encoded / characters");
            throw f.code = "ERR_INVALID_FILE_URL_PATH", f;
        }
    }
    return decodeURIComponent(n);
}
var vt = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
], Ln = class {
    constructor(a){
        let n;
        a ? typeof a == "string" || Dn(a) ? n = {
            value: a
        } : At(a) ? n = {
            path: a
        } : n = a : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = An.cwd(), this.value, this.stored, this.result, this.map;
        let i = -1;
        for(; ++i < vt.length;){
            let f = vt[i];
            f in n && n[f] !== void 0 && n[f] !== null && (this[f] = f === "history" ? [
                ...n[f]
            ] : n[f]);
        }
        let s;
        for(s in n)vt.includes(s) || (this[s] = n[s]);
    }
    get path() {
        return this.history[this.history.length - 1];
    }
    set path(a) {
        At(a) && (a = jn(a)), wt(a, "path"), this.path !== a && this.history.push(a);
    }
    get dirname() {
        return typeof this.path == "string" ? ye.dirname(this.path) : void 0;
    }
    set dirname(a) {
        oa(this.basename, "dirname"), this.path = ye.join(a || "", this.basename);
    }
    get basename() {
        return typeof this.path == "string" ? ye.basename(this.path) : void 0;
    }
    set basename(a) {
        wt(a, "basename"), xt(a, "basename"), this.path = ye.join(this.dirname || "", a);
    }
    get extname() {
        return typeof this.path == "string" ? ye.extname(this.path) : void 0;
    }
    set extname(a) {
        if (xt(a, "extname"), oa(this.dirname, "extname"), a) {
            if (a.charCodeAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (a.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = ye.join(this.dirname, this.stem + (a || ""));
    }
    get stem() {
        return typeof this.path == "string" ? ye.basename(this.path, this.extname) : void 0;
    }
    set stem(a) {
        wt(a, "stem"), xt(a, "stem"), this.path = ye.join(this.dirname || "", a + (this.extname || ""));
    }
    toString(a) {
        return (this.value || "").toString(a || void 0);
    }
    message(a, n, i) {
        let s = new pe(a, n, i);
        return this.path && (s.name = this.path + ":" + s.name, s.file = this.path), s.fatal = !1, this.messages.push(s), s;
    }
    info(a, n, i) {
        let s = this.message(a, n, i);
        return s.fatal = null, s;
    }
    fail(a, n, i) {
        let s = this.message(a, n, i);
        throw s.fatal = !0, s;
    }
};
function xt(a, n) {
    if (a && a.includes(ye.sep)) throw new Error("`" + n + "` cannot be a path: did not expect `" + ye.sep + "`");
}
function wt(a, n) {
    if (!a) throw new Error("`" + n + "` cannot be empty");
}
function oa(a, n) {
    if (!a) throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function Dn(a) {
    return (0, vn.default)(a);
}
var In = ka().freeze(), Sa = {}.hasOwnProperty;
function ka() {
    let a = kn(), n = [], i = {}, s, f = -1;
    return m.data = S, m.Parser = void 0, m.Compiler = void 0, m.freeze = b, m.attachers = n, m.use = w, m.parse = x, m.stringify = T, m.run = A, m.runSync = Y, m.process = H, m.processSync = X, m;
    function m() {
        let V = ka(), P = -1;
        for(; ++P < n.length;)V.use(...n[P]);
        return V.data((0, ra.default)(!0, {}, i)), V;
    }
    function S(V, P) {
        return typeof V == "string" ? arguments.length === 2 ? (Vt("data", s), i[V] = P, m) : Sa.call(i, V) && i[V] || null : V ? (Vt("data", s), i = V, m) : i;
    }
    function b() {
        if (s) return m;
        for(; ++f < n.length;){
            let [V, ...P] = n[f];
            if (P[0] === !1) continue;
            P[0] === !0 && (P[0] = void 0);
            let O = V.call(m, ...P);
            typeof O == "function" && a.use(O);
        }
        return s = !0, f = Number.POSITIVE_INFINITY, m;
    }
    function w(V, ...P) {
        let O;
        if (Vt("use", s), V != null) {
            if (typeof V == "function") ne(V, ...P);
            else if (typeof V == "object") Array.isArray(V) ? ee(V) : Q(V);
            else throw new TypeError("Expected usable value, not `" + V + "`");
        }
        return O && (i.settings = Object.assign(i.settings || {}, O)), m;
        function F(z) {
            if (typeof z == "function") ne(z);
            else if (typeof z == "object") {
                if (Array.isArray(z)) {
                    let [R, ...J] = z;
                    ne(R, ...J);
                } else Q(z);
            } else throw new TypeError("Expected usable value, not `" + z + "`");
        }
        function Q(z) {
            ee(z.plugins), z.settings && (O = Object.assign(O || {}, z.settings));
        }
        function ee(z) {
            let R = -1;
            if (z != null) {
                if (Array.isArray(z)) for(; ++R < z.length;){
                    let J = z[R];
                    F(J);
                }
                else throw new TypeError("Expected a list of plugins, not `" + z + "`");
            }
        }
        function ne(z, R) {
            let J = -1, ie;
            for(; ++J < n.length;)if (n[J][0] === z) {
                ie = n[J];
                break;
            }
            ie ? (Ot(ie[1]) && Ot(R) && (R = (0, ra.default)(!0, ie[1], R)), ie[1] = R) : n.push([
                ...arguments
            ]);
        }
    }
    function x(V) {
        m.freeze();
        let P = ze(V), O = m.Parser;
        return Tt("parse", O), la(O, "parse") ? new O(String(P), P).parse() : O(String(P), P);
    }
    function T(V, P) {
        m.freeze();
        let O = ze(P), F = m.Compiler;
        return Pt("stringify", F), sa(V), la(F, "compile") ? new F(V, O).compile() : F(V, O);
    }
    function A(V, P, O) {
        if (sa(V), m.freeze(), !O && typeof P == "function" && (O = P, P = void 0), !O) return new Promise(F);
        F(null, O);
        function F(Q, ee) {
            a.run(V, ze(P), ne);
            function ne(z, R, J) {
                R = R || V, z ? ee(z) : Q ? Q(R) : O(null, R, J);
            }
        }
    }
    function Y(V, P) {
        let O, F;
        return m.run(V, P, Q), ca("runSync", "run", F), O;
        function Q(ee, ne) {
            aa(ee), O = ne, F = !0;
        }
    }
    function H(V, P) {
        if (m.freeze(), Tt("process", m.Parser), Pt("process", m.Compiler), !P) return new Promise(O);
        O(null, P);
        function O(F, Q) {
            let ee = ze(V);
            m.run(m.parse(ee), ee, (z, R, J)=>{
                if (z || !R || !J) ne(z);
                else {
                    let ie = m.stringify(R, J);
                    ie == null || (Rn(ie) ? J.value = ie : J.result = ie), ne(z, J);
                }
            });
            function ne(z, R) {
                z || !R ? Q(z) : F ? F(R) : P(null, R);
            }
        }
    }
    function X(V) {
        let P;
        m.freeze(), Tt("processSync", m.Parser), Pt("processSync", m.Compiler);
        let O = ze(V);
        return m.process(O, F), ca("processSync", "process", P), O;
        function F(Q) {
            P = !0, aa(Q);
        }
    }
}
function la(a, n) {
    return typeof a == "function" && a.prototype && (zn(a.prototype) || n in a.prototype);
}
function zn(a) {
    let n;
    for(n in a)if (Sa.call(a, n)) return !0;
    return !1;
}
function Tt(a, n) {
    if (typeof n != "function") throw new TypeError("Cannot `" + a + "` without `Parser`");
}
function Pt(a, n) {
    if (typeof n != "function") throw new TypeError("Cannot `" + a + "` without `Compiler`");
}
function Vt(a, n) {
    if (n) throw new Error("Cannot call `" + a + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function sa(a) {
    if (!Ot(a) || typeof a.type != "string") throw new TypeError("Expected node, got `" + a + "`");
}
function ca(a, n, i) {
    if (!i) throw new Error("`" + a + "` finished async. Use `" + n + "` instead");
}
function ze(a) {
    return Mn(a) ? a : new Ln(a);
}
function Mn(a) {
    return !!(a && typeof a == "object" && "message" in a && "messages" in a);
}
function Rn(a) {
    return typeof a == "string" || (0, Sn.default)(a);
}
var Nn = In().use(mn).use(gn).freeze(); /*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/ 

},{"./chunk-U2GK2GFR.mjs":"bBhes","./chunk-XNFEUXDS.mjs":"4Lvnj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iGaHM"], null, "parcelRequire8861")

//# sourceMappingURL=dist-AIQGIF54-ZRQFFVOU.4473d963.js.map