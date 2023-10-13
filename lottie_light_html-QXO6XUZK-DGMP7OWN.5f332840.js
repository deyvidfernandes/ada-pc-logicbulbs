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
})({"1GHcK":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e7d1ac105f332840";
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

},{}],"beD3L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Da) //# sourceMappingURL=out.js.map
;
var _chunkU2GK2GFRMjs = require("./chunk-U2GK2GFR.mjs");
var _chunkXNFEUXDSMjs = require("./chunk-XNFEUXDS.mjs");
var wa = (0, _chunkU2GK2GFRMjs.a)((Be, ss)=>{
    typeof navigator < "u" && function(ve, le) {
        typeof Be == "object" && typeof ss < "u" ? ss.exports = le() : typeof define == "function" && define.amd ? define(le) : (ve = typeof globalThis < "u" ? globalThis : ve || self, ve.lottie = le());
    }(Be, function() {
        var ve = "http://www.w3.org/2000/svg", le = "", ks = !1, is = -999999, vi = function(t) {
            ks = !!t;
        }, bi = function() {
            return ks;
        }, xi = function(t) {
            le = t;
        }, bt = function() {
            return le;
        };
        function nt(t) {
            return document.createElement(t);
        }
        function W(t, e) {
            var s, i = t.length, a;
            for(s = 0; s < i; s += 1){
                a = t[s].prototype;
                for(var r in a)Object.prototype.hasOwnProperty.call(a, r) && (e.prototype[r] = a[r]);
            }
        }
        function _i(t) {
            function e() {}
            return e.prototype = t, e;
        }
        var ki = function() {
            function t(e) {
                this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1;
            }
            return t.prototype = {
                addAudio: function(e) {
                    this.audios.push(e);
                },
                pause: function() {
                    var e, s = this.audios.length;
                    for(e = 0; e < s; e += 1)this.audios[e].pause();
                },
                resume: function() {
                    var e, s = this.audios.length;
                    for(e = 0; e < s; e += 1)this.audios[e].resume();
                },
                setRate: function(e) {
                    var s, i = this.audios.length;
                    for(s = 0; s < i; s += 1)this.audios[s].setRate(e);
                },
                createAudio: function(e) {
                    return this.audioFactory ? this.audioFactory(e) : window.Howl ? new window.Howl({
                        src: [
                            e
                        ]
                    }) : {
                        isPlaying: !1,
                        play: function() {
                            this.isPlaying = !0;
                        },
                        seek: function() {
                            this.isPlaying = !1;
                        },
                        playing: function() {},
                        rate: function() {},
                        setVolume: function() {}
                    };
                },
                setAudioFactory: function(e) {
                    this.audioFactory = e;
                },
                setVolume: function(e) {
                    this._volume = e, this._updateVolume();
                },
                mute: function() {
                    this._isMuted = !0, this._updateVolume();
                },
                unmute: function() {
                    this._isMuted = !1, this._updateVolume();
                },
                getVolume: function() {
                    return this._volume;
                },
                _updateVolume: function() {
                    var e, s = this.audios.length;
                    for(e = 0; e < s; e += 1)this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1));
                }
            }, function() {
                return new t;
            };
        }(), ht = function() {
            function t(s, i) {
                var a = 0, r = [], n;
                switch(s){
                    case "int16":
                    case "uint8c":
                        n = 1;
                        break;
                    default:
                        n = 1.1;
                        break;
                }
                for(a = 0; a < i; a += 1)r.push(n);
                return r;
            }
            function e(s, i) {
                return s === "float32" ? new Float32Array(i) : s === "int16" ? new Int16Array(i) : s === "uint8c" ? new Uint8ClampedArray(i) : t(s, i);
            }
            return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
        }();
        function K(t) {
            return Array.apply(null, {
                length: t
            });
        }
        var Ps = !0, ws = null, Ss = "", Pi = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), mt = Math.pow, ze = Math.sqrt, ee = Math.floor, Ve = Math.max, be = Math.min, Ds = 150, J = Math.PI / 180, Ht = .5519;
        function Wt(t) {
            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
        }
        function as(t, e, s, i) {
            this.type = t, this.currentTime = e, this.totalTime = s, this.direction = i < 0 ? -1 : 1;
        }
        function Cs(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1;
        }
        function Ms(t, e, s, i) {
            this.type = t, this.currentLoop = s, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
        }
        function Es(t, e, s) {
            this.type = t, this.firstFrame = e, this.totalFrames = s;
        }
        function Ts(t, e) {
            this.type = t, this.target = e;
        }
        function wi(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
        }
        function Si(t) {
            this.type = "configError", this.nativeError = t;
        }
        var ut = function() {
            var t = 0;
            return function() {
                return t += 1, Ss + "__lottie_element_" + t;
            };
        }();
        function rs(t, e, s) {
            var i, a, r, n, d, o, c, y;
            switch(n = Math.floor(t * 6), d = t * 6 - n, o = s * (1 - e), c = s * (1 - d * e), y = s * (1 - (1 - d) * e), n % 6){
                case 0:
                    i = s, a = y, r = o;
                    break;
                case 1:
                    i = c, a = s, r = o;
                    break;
                case 2:
                    i = o, a = s, r = y;
                    break;
                case 3:
                    i = o, a = c, r = s;
                    break;
                case 4:
                    i = y, a = o, r = s;
                    break;
                case 5:
                    i = s, a = o, r = c;
                    break;
            }
            return [
                i,
                a,
                r
            ];
        }
        function ns(t, e, s) {
            var i = Math.max(t, e, s), a = Math.min(t, e, s), r = i - a, n, d = i === 0 ? 0 : r / i, o = i / 255;
            switch(i){
                case a:
                    n = 0;
                    break;
                case t:
                    n = e - s + r * (e < s ? 6 : 0), n /= 6 * r;
                    break;
                case e:
                    n = s - t + r * 2, n /= 6 * r;
                    break;
                case s:
                    n = t - e + r * 4, n /= 6 * r;
                    break;
            }
            return [
                n,
                d,
                o
            ];
        }
        function As(t, e) {
            var s = ns(t[0] * 255, t[1] * 255, t[2] * 255);
            return s[1] += e, s[1] > 1 ? s[1] = 1 : s[1] <= 0 && (s[1] = 0), rs(s[0], s[1], s[2]);
        }
        function Fs(t, e) {
            var s = ns(t[0] * 255, t[1] * 255, t[2] * 255);
            return s[2] += e, s[2] > 1 ? s[2] = 1 : s[2] < 0 && (s[2] = 0), rs(s[0], s[1], s[2]);
        }
        function Is(t, e) {
            var s = ns(t[0] * 255, t[1] * 255, t[2] * 255);
            return s[0] += e / 360, s[0] > 1 ? s[0] -= 1 : s[0] < 0 && (s[0] += 1), rs(s[0], s[1], s[2]);
        }
        (function() {
            var t = [], e, s;
            for(e = 0; e < 256; e += 1)s = e.toString(16), t[e] = s.length === 1 ? "0" + s : s;
            return function(i, a, r) {
                return i < 0 && (i = 0), a < 0 && (a = 0), r < 0 && (r = 0), "#" + t[i] + t[a] + t[r];
            };
        })();
        var Di = function(t) {
            Ps = !!t;
        }, Ci = function() {
            return Ps;
        }, Mi = function(t) {
            ws = t;
        }, Re = function() {
            return ws;
        }, Oe = function(t) {
            Ds = t;
        }, Ne = function() {
            return Ds;
        }, Ei = function(t) {
            Ss = t;
        };
        function R(t) {
            return document.createElementNS(ve, t);
        }
        function je(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? je = function(e) {
                return typeof e;
            } : je = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, je(t);
        }
        var xe = function() {
            var t = 1, e = [], s, i, a = {
                onmessage: function() {},
                postMessage: function(f) {
                    s({
                        data: f
                    });
                }
            }, r = {
                postMessage: function(f) {
                    a.onmessage({
                        data: f
                    });
                }
            };
            function n(f) {
                if (window.Worker && window.Blob && bi()) {
                    var P = new Blob([
                        "var _workerSelf = self; self.onmessage = ",
                        f.toString()
                    ], {
                        type: "text/javascript"
                    }), w = URL.createObjectURL(P);
                    return new Worker(w);
                }
                return s = f, a;
            }
            function d() {
                i || (i = n(function(f) {
                    function P() {
                        function _(A, F) {
                            var u, b, h = A.length, v, M, S, H;
                            for(b = 0; b < h; b += 1)if (u = A[b], "ks" in u && !u.completed) {
                                if (u.completed = !0, u.hasMask) {
                                    var z = u.masksProperties;
                                    for(M = z.length, v = 0; v < M; v += 1)if (z[v].pt.k.i) m(z[v].pt.k);
                                    else for(H = z[v].pt.k.length, S = 0; S < H; S += 1)z[v].pt.k[S].s && m(z[v].pt.k[S].s[0]), z[v].pt.k[S].e && m(z[v].pt.k[S].e[0]);
                                }
                                u.ty === 0 ? (u.layers = l(u.refId, F), _(u.layers, F)) : u.ty === 4 ? p(u.shapes) : u.ty === 5 && B(u);
                            }
                        }
                        function D(A, F) {
                            if (A) {
                                var u = 0, b = A.length;
                                for(u = 0; u < b; u += 1)A[u].t === 1 && (A[u].data.layers = l(A[u].data.refId, F), _(A[u].data.layers, F));
                            }
                        }
                        function g(A, F) {
                            for(var u = 0, b = F.length; u < b;){
                                if (F[u].id === A) return F[u];
                                u += 1;
                            }
                            return null;
                        }
                        function l(A, F) {
                            var u = g(A, F);
                            return u ? u.layers.__used ? JSON.parse(JSON.stringify(u.layers)) : (u.layers.__used = !0, u.layers) : null;
                        }
                        function p(A) {
                            var F, u = A.length, b, h;
                            for(F = u - 1; F >= 0; F -= 1)if (A[F].ty === "sh") {
                                if (A[F].ks.k.i) m(A[F].ks.k);
                                else for(h = A[F].ks.k.length, b = 0; b < h; b += 1)A[F].ks.k[b].s && m(A[F].ks.k[b].s[0]), A[F].ks.k[b].e && m(A[F].ks.k[b].e[0]);
                            } else A[F].ty === "gr" && p(A[F].it);
                        }
                        function m(A) {
                            var F, u = A.i.length;
                            for(F = 0; F < u; F += 1)A.i[F][0] += A.v[F][0], A.i[F][1] += A.v[F][1], A.o[F][0] += A.v[F][0], A.o[F][1] += A.v[F][1];
                        }
                        function x(A, F) {
                            var u = F ? F.split(".") : [
                                100,
                                100,
                                100
                            ];
                            return A[0] > u[0] ? !0 : u[0] > A[0] ? !1 : A[1] > u[1] ? !0 : u[1] > A[1] ? !1 : A[2] > u[2] ? !0 : u[2] > A[2] ? !1 : null;
                        }
                        var C = function() {
                            var A = [
                                4,
                                4,
                                14
                            ];
                            function F(b) {
                                var h = b.t.d;
                                b.t.d = {
                                    k: [
                                        {
                                            s: h,
                                            t: 0
                                        }
                                    ]
                                };
                            }
                            function u(b) {
                                var h, v = b.length;
                                for(h = 0; h < v; h += 1)b[h].ty === 5 && F(b[h]);
                            }
                            return function(b) {
                                if (x(A, b.v) && (u(b.layers), b.assets)) {
                                    var h, v = b.assets.length;
                                    for(h = 0; h < v; h += 1)b.assets[h].layers && u(b.assets[h].layers);
                                }
                            };
                        }(), E = function() {
                            var A = [
                                4,
                                7,
                                99
                            ];
                            return function(F) {
                                if (F.chars && !x(A, F.v)) {
                                    var u, b = F.chars.length;
                                    for(u = 0; u < b; u += 1){
                                        var h = F.chars[u];
                                        h.data && h.data.shapes && (p(h.data.shapes), h.data.ip = 0, h.data.op = 99999, h.data.st = 0, h.data.sr = 1, h.data.ks = {
                                            p: {
                                                k: [
                                                    0,
                                                    0
                                                ],
                                                a: 0
                                            },
                                            s: {
                                                k: [
                                                    100,
                                                    100
                                                ],
                                                a: 0
                                            },
                                            a: {
                                                k: [
                                                    0,
                                                    0
                                                ],
                                                a: 0
                                            },
                                            r: {
                                                k: 0,
                                                a: 0
                                            },
                                            o: {
                                                k: 100,
                                                a: 0
                                            }
                                        }, F.chars[u].t || (h.data.shapes.push({
                                            ty: "no"
                                        }), h.data.shapes[0].it.push({
                                            p: {
                                                k: [
                                                    0,
                                                    0
                                                ],
                                                a: 0
                                            },
                                            s: {
                                                k: [
                                                    100,
                                                    100
                                                ],
                                                a: 0
                                            },
                                            a: {
                                                k: [
                                                    0,
                                                    0
                                                ],
                                                a: 0
                                            },
                                            r: {
                                                k: 0,
                                                a: 0
                                            },
                                            o: {
                                                k: 100,
                                                a: 0
                                            },
                                            sk: {
                                                k: 0,
                                                a: 0
                                            },
                                            sa: {
                                                k: 0,
                                                a: 0
                                            },
                                            ty: "tr"
                                        })));
                                    }
                                }
                            };
                        }(), T = function() {
                            var A = [
                                5,
                                7,
                                15
                            ];
                            function F(b) {
                                var h = b.t.p;
                                typeof h.a == "number" && (h.a = {
                                    a: 0,
                                    k: h.a
                                }), typeof h.p == "number" && (h.p = {
                                    a: 0,
                                    k: h.p
                                }), typeof h.r == "number" && (h.r = {
                                    a: 0,
                                    k: h.r
                                });
                            }
                            function u(b) {
                                var h, v = b.length;
                                for(h = 0; h < v; h += 1)b[h].ty === 5 && F(b[h]);
                            }
                            return function(b) {
                                if (x(A, b.v) && (u(b.layers), b.assets)) {
                                    var h, v = b.assets.length;
                                    for(h = 0; h < v; h += 1)b.assets[h].layers && u(b.assets[h].layers);
                                }
                            };
                        }(), L = function() {
                            var A = [
                                4,
                                1,
                                9
                            ];
                            function F(b) {
                                var h, v = b.length, M, S;
                                for(h = 0; h < v; h += 1)if (b[h].ty === "gr") F(b[h].it);
                                else if (b[h].ty === "fl" || b[h].ty === "st") {
                                    if (b[h].c.k && b[h].c.k[0].i) for(S = b[h].c.k.length, M = 0; M < S; M += 1)b[h].c.k[M].s && (b[h].c.k[M].s[0] /= 255, b[h].c.k[M].s[1] /= 255, b[h].c.k[M].s[2] /= 255, b[h].c.k[M].s[3] /= 255), b[h].c.k[M].e && (b[h].c.k[M].e[0] /= 255, b[h].c.k[M].e[1] /= 255, b[h].c.k[M].e[2] /= 255, b[h].c.k[M].e[3] /= 255);
                                    else b[h].c.k[0] /= 255, b[h].c.k[1] /= 255, b[h].c.k[2] /= 255, b[h].c.k[3] /= 255;
                                }
                            }
                            function u(b) {
                                var h, v = b.length;
                                for(h = 0; h < v; h += 1)b[h].ty === 4 && F(b[h].shapes);
                            }
                            return function(b) {
                                if (x(A, b.v) && (u(b.layers), b.assets)) {
                                    var h, v = b.assets.length;
                                    for(h = 0; h < v; h += 1)b.assets[h].layers && u(b.assets[h].layers);
                                }
                            };
                        }(), N = function() {
                            var A = [
                                4,
                                4,
                                18
                            ];
                            function F(b) {
                                var h, v = b.length, M, S;
                                for(h = v - 1; h >= 0; h -= 1)if (b[h].ty === "sh") {
                                    if (b[h].ks.k.i) b[h].ks.k.c = b[h].closed;
                                    else for(S = b[h].ks.k.length, M = 0; M < S; M += 1)b[h].ks.k[M].s && (b[h].ks.k[M].s[0].c = b[h].closed), b[h].ks.k[M].e && (b[h].ks.k[M].e[0].c = b[h].closed);
                                } else b[h].ty === "gr" && F(b[h].it);
                            }
                            function u(b) {
                                var h, v, M = b.length, S, H, z, Z;
                                for(v = 0; v < M; v += 1){
                                    if (h = b[v], h.hasMask) {
                                        var X = h.masksProperties;
                                        for(H = X.length, S = 0; S < H; S += 1)if (X[S].pt.k.i) X[S].pt.k.c = X[S].cl;
                                        else for(Z = X[S].pt.k.length, z = 0; z < Z; z += 1)X[S].pt.k[z].s && (X[S].pt.k[z].s[0].c = X[S].cl), X[S].pt.k[z].e && (X[S].pt.k[z].e[0].c = X[S].cl);
                                    }
                                    h.ty === 4 && F(h.shapes);
                                }
                            }
                            return function(b) {
                                if (x(A, b.v) && (u(b.layers), b.assets)) {
                                    var h, v = b.assets.length;
                                    for(h = 0; h < v; h += 1)b.assets[h].layers && u(b.assets[h].layers);
                                }
                            };
                        }();
                        function O(A) {
                            A.__complete || (L(A), C(A), E(A), T(A), N(A), _(A.layers, A.assets), D(A.chars, A.assets), A.__complete = !0);
                        }
                        function B(A) {
                            A.t.a.length === 0 && A.t.p;
                        }
                        var j = {};
                        return j.completeData = O, j.checkColors = L, j.checkChars = E, j.checkPathProperties = T, j.checkShapes = N, j.completeLayers = _, j;
                    }
                    if (r.dataManager || (r.dataManager = P()), r.assetLoader || (r.assetLoader = function() {
                        function _(g) {
                            var l = g.getResponseHeader("content-type");
                            return l && g.responseType === "json" && l.indexOf("json") !== -1 || g.response && je(g.response) === "object" ? g.response : g.response && typeof g.response == "string" ? JSON.parse(g.response) : g.responseText ? JSON.parse(g.responseText) : null;
                        }
                        function D(g, l, p, m) {
                            var x, C = new XMLHttpRequest;
                            try {
                                C.responseType = "json";
                            } catch  {}
                            C.onreadystatechange = function() {
                                if (C.readyState === 4) {
                                    if (C.status === 200) x = _(C), p(x);
                                    else try {
                                        x = _(C), p(x);
                                    } catch (E) {
                                        m && m(E);
                                    }
                                }
                            };
                            try {
                                C.open([
                                    "G",
                                    "E",
                                    "T"
                                ].join(""), g, !0);
                            } catch  {
                                C.open([
                                    "G",
                                    "E",
                                    "T"
                                ].join(""), l + "/" + g, !0);
                            }
                            C.send();
                        }
                        return {
                            load: D
                        };
                    }()), f.data.type === "loadAnimation") r.assetLoader.load(f.data.path, f.data.fullPath, function(_) {
                        r.dataManager.completeData(_), r.postMessage({
                            id: f.data.id,
                            payload: _,
                            status: "success"
                        });
                    }, function() {
                        r.postMessage({
                            id: f.data.id,
                            status: "error"
                        });
                    });
                    else if (f.data.type === "complete") {
                        var w = f.data.animation;
                        r.dataManager.completeData(w), r.postMessage({
                            id: f.data.id,
                            payload: w,
                            status: "success"
                        });
                    } else f.data.type === "loadData" && r.assetLoader.load(f.data.path, f.data.fullPath, function(_) {
                        r.postMessage({
                            id: f.data.id,
                            payload: _,
                            status: "success"
                        });
                    }, function() {
                        r.postMessage({
                            id: f.data.id,
                            status: "error"
                        });
                    });
                }), i.onmessage = function(f) {
                    var P = f.data, w = P.id, _ = e[w];
                    e[w] = null, P.status === "success" ? _.onComplete(P.payload) : _.onError && _.onError();
                });
            }
            function o(f, P) {
                t += 1;
                var w = "processId_" + t;
                return e[w] = {
                    onComplete: f,
                    onError: P
                }, w;
            }
            function c(f, P, w) {
                d();
                var _ = o(P, w);
                i.postMessage({
                    type: "loadAnimation",
                    path: f,
                    fullPath: window.location.origin + window.location.pathname,
                    id: _
                });
            }
            function y(f, P, w) {
                d();
                var _ = o(P, w);
                i.postMessage({
                    type: "loadData",
                    path: f,
                    fullPath: window.location.origin + window.location.pathname,
                    id: _
                });
            }
            function k(f, P, w) {
                d();
                var _ = o(P, w);
                i.postMessage({
                    type: "complete",
                    animation: f,
                    id: _
                });
            }
            return {
                loadAnimation: c,
                loadData: y,
                completeAnimation: k
            };
        }(), Ti = function() {
            var t = function() {
                var g = nt("canvas");
                g.width = 1, g.height = 1;
                var l = g.getContext("2d");
                return l.fillStyle = "rgba(0,0,0,0)", l.fillRect(0, 0, 1, 1), g;
            }();
            function e() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function s() {
                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function i(g, l, p) {
                var m = "";
                if (g.e) m = g.p;
                else if (l) {
                    var x = g.p;
                    x.indexOf("images/") !== -1 && (x = x.split("/")[1]), m = l + x;
                } else m = p, m += g.u ? g.u : "", m += g.p;
                return m;
            }
            function a(g) {
                var l = 0, p = setInterval((function() {
                    var m = g.getBBox();
                    (m.width || l > 500) && (this._imageLoaded(), clearInterval(p)), l += 1;
                }).bind(this), 50);
            }
            function r(g) {
                var l = i(g, this.assetsPath, this.path), p = R("image");
                Pi ? this.testImageLoaded(p) : p.addEventListener("load", this._imageLoaded, !1), p.addEventListener("error", (function() {
                    m.img = t, this._imageLoaded();
                }).bind(this), !1), p.setAttributeNS("http://www.w3.org/1999/xlink", "href", l), this._elementHelper.append ? this._elementHelper.append(p) : this._elementHelper.appendChild(p);
                var m = {
                    img: p,
                    assetData: g
                };
                return m;
            }
            function n(g) {
                var l = i(g, this.assetsPath, this.path), p = nt("img");
                p.crossOrigin = "anonymous", p.addEventListener("load", this._imageLoaded, !1), p.addEventListener("error", (function() {
                    m.img = t, this._imageLoaded();
                }).bind(this), !1), p.src = l;
                var m = {
                    img: p,
                    assetData: g
                };
                return m;
            }
            function d(g) {
                var l = {
                    assetData: g
                }, p = i(g, this.assetsPath, this.path);
                return xe.loadData(p, (function(m) {
                    l.img = m, this._footageLoaded();
                }).bind(this), (function() {
                    l.img = {}, this._footageLoaded();
                }).bind(this)), l;
            }
            function o(g, l) {
                this.imagesLoadedCb = l;
                var p, m = g.length;
                for(p = 0; p < m; p += 1)g[p].layers || (!g[p].t || g[p].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(g[p]))) : g[p].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(g[p]))));
            }
            function c(g) {
                this.path = g || "";
            }
            function y(g) {
                this.assetsPath = g || "";
            }
            function k(g) {
                for(var l = 0, p = this.images.length; l < p;){
                    if (this.images[l].assetData === g) return this.images[l].img;
                    l += 1;
                }
                return null;
            }
            function f() {
                this.imagesLoadedCb = null, this.images.length = 0;
            }
            function P() {
                return this.totalImages === this.loadedAssets;
            }
            function w() {
                return this.totalFootages === this.loadedFootagesCount;
            }
            function _(g, l) {
                g === "svg" ? (this._elementHelper = l, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
            }
            function D() {
                this._imageLoaded = e.bind(this), this._footageLoaded = s.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = d.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
            }
            return D.prototype = {
                loadAssets: o,
                setAssetsPath: y,
                setPath: c,
                loadedImages: P,
                loadedFootages: w,
                destroy: f,
                getAsset: k,
                createImgData: n,
                createImageData: r,
                imageLoaded: e,
                footageLoaded: s,
                setCacheType: _
            }, D;
        }();
        function Ls() {}
        Ls.prototype = {
            triggerEvent: function(t, e) {
                if (this._cbs[t]) for(var s = this._cbs[t], i = 0; i < s.length; i += 1)s[i](e);
            },
            addEventListener: function(t, e) {
                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), (function() {
                    this.removeEventListener(t, e);
                }).bind(this);
            },
            removeEventListener: function(t, e) {
                if (!e) this._cbs[t] = null;
                else if (this._cbs[t]) {
                    for(var s = 0, i = this._cbs[t].length; s < i;)this._cbs[t][s] === e && (this._cbs[t].splice(s, 1), s -= 1, i -= 1), s += 1;
                    this._cbs[t].length || (this._cbs[t] = null);
                }
            }
        };
        var Ai = function() {
            function t(e) {
                for(var s = e.split(`\r
`), i = {}, a, r = 0, n = 0; n < s.length; n += 1)a = s[n].split(":"), a.length === 2 && (i[a[0]] = a[1].trim(), r += 1);
                if (r === 0) throw new Error;
                return i;
            }
            return function(e) {
                for(var s = [], i = 0; i < e.length; i += 1){
                    var a = e[i], r = {
                        time: a.tm,
                        duration: a.dr
                    };
                    try {
                        r.payload = JSON.parse(e[i].cm);
                    } catch  {
                        try {
                            r.payload = t(e[i].cm);
                        } catch  {
                            r.payload = {
                                name: e[i].cm
                            };
                        }
                    }
                    s.push(r);
                }
                return s;
            };
        }(), Fi = function() {
            function t(e) {
                this.compositions.push(e);
            }
            return function() {
                function e(s) {
                    for(var i = 0, a = this.compositions.length; i < a;){
                        if (this.compositions[i].data && this.compositions[i].data.nm === s) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                        i += 1;
                    }
                    return null;
                }
                return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
            };
        }(), _e = {}, Ii = function(t, e) {
            _e[t] = e;
        };
        function Li(t) {
            return _e[t];
        }
        function Bi() {
            if (_e.canvas) return "canvas";
            for(var t in _e)if (_e[t]) return t;
            return "";
        }
        function ke(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ke = function(e) {
                return typeof e;
            } : ke = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, ke(t);
        }
        var q = function() {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = ut(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = Ci(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = Fi(), this.imagePreloader = new Ti, this.audioController = ki(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new as("drawnFrame", 0, 0, 0), this.expressionsPlugin = Re();
        };
        W([
            Ls
        ], q), q.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            t.animType ? e = t.animType : t.renderer && (e = t.renderer);
            var s = Li(e);
            this.renderer = new s(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : !0, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), xe.loadAnimation(t.path, this.configAnimation, this.onSetupError));
        }, q.prototype.onSetupError = function() {
            this.trigger("data_failed");
        }, q.prototype.setupAnimation = function(t) {
            xe.completeAnimation(t, this.configAnimation);
        }, q.prototype.setData = function(t, e) {
            e && ke(e) !== "object" && (e = JSON.parse(e));
            var s = {
                wrapper: t,
                animationData: e
            }, i = t.attributes;
            s.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", s.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : Bi() || "canvas";
            var a = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
            a === "false" ? s.loop = !1 : a === "true" ? s.loop = !0 : a !== "" && (s.loop = parseInt(a, 10));
            var r = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : !0;
            s.autoplay = r !== "false", s.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
            var n = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
            n === "false" && (s.prerender = !1), s.path ? this.setParams(s) : this.trigger("destroy");
        }, q.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e = this.animationData.layers, s, i = e.length, a = t.layers, r, n = a.length;
            for(r = 0; r < n; r += 1)for(s = 0; s < i;){
                if (e[s].id === a[r].id) {
                    e[s] = a[r];
                    break;
                }
                s += 1;
            }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for(i = t.assets.length, s = 0; s < i; s += 1)this.animationData.assets.push(t.assets[s]);
            this.animationData.__complete = !1, xe.completeAnimation(this.animationData, this.onSegmentComplete);
        }, q.prototype.onSegmentComplete = function(t) {
            this.animationData = t;
            var e = Re();
            e && e.initExpressions(this), this.loadNextSegment();
        }, q.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || t.length === 0 || !this.autoloadSegments) {
                this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                return;
            }
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var s = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, xe.loadData(s, this.includeLayers.bind(this), (function() {
                this.trigger("data_failed");
            }).bind(this));
        }, q.prototype.loadSegments = function() {
            var t = this.animationData.segments;
            t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
        }, q.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"), this.checkLoaded();
        }, q.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
        }, q.prototype.configAnimation = function(t) {
            if (this.renderer) try {
                this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = Ai(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
            } catch (e) {
                this.triggerConfigError(e);
            }
        }, q.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
        }, q.prototype.checkLoaded = function() {
            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                this.isLoaded = !0;
                var t = Re();
                t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
                    this.trigger("DOMLoaded");
                }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
            }
        }, q.prototype.resize = function(t, e) {
            var s = typeof t == "number" ? t : void 0, i = typeof e == "number" ? e : void 0;
            this.renderer.updateContainerSize(s, i);
        }, q.prototype.setSubframe = function(t) {
            this.isSubframeEnabled = !!t;
        }, q.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
        }, q.prototype.renderFrame = function() {
            if (!(this.isLoaded === !1 || !this.renderer)) try {
                this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
            } catch (t) {
                this.triggerRenderFrameError(t);
            }
        }, q.prototype.play = function(t) {
            t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
        }, q.prototype.pause = function(t) {
            t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
        }, q.prototype.togglePause = function(t) {
            t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause());
        }, q.prototype.stop = function(t) {
            t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
        }, q.prototype.getMarkerData = function(t) {
            for(var e, s = 0; s < this.markers.length; s += 1)if (e = this.markers[s], e.payload && e.payload.name === t) return e;
            return null;
        }, q.prototype.goToAndStop = function(t, e, s) {
            if (!(s && this.name !== s)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var a = this.getMarkerData(t);
                    a && this.goToAndStop(a.time, !0);
                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause();
            }
        }, q.prototype.goToAndPlay = function(t, e, s) {
            if (!(s && this.name !== s)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var a = this.getMarkerData(t);
                    a && (a.duration ? this.playSegments([
                        a.time,
                        a.time + a.duration
                    ], !0) : this.goToAndStop(a.time, !0));
                } else this.goToAndStop(i, e, s);
                this.play();
            }
        }, q.prototype.advanceTime = function(t) {
            if (!(this.isPaused === !0 || this.isLoaded === !1)) {
                var e = this.currentRawFrame + t * this.frameModifier, s = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (s = !0, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (s = !0, e = 0)) : this.setCurrentRawFrameValue(e), s && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
            }
        }, q.prototype.adjustSegment = function(t, e) {
            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart");
        }, q.prototype.setSegment = function(t, e) {
            var s = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? s = t : this.currentRawFrame + this.firstFrame > e && (s = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, s !== -1 && this.goToAndStop(s, !0);
        }, q.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0), ke(t[0]) === "object") {
                var s, i = t.length;
                for(s = 0; s < i; s += 1)this.segments.push(t[s]);
            } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
        }, q.prototype.resetSegments = function(t) {
            this.segments.length = 0, this.segments.push([
                this.animationData.ip,
                this.animationData.op
            ]), t && this.checkSegments(0);
        }, q.prototype.checkSegments = function(t) {
            return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), !0) : !1;
        }, q.prototype.destroy = function(t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
        }, q.prototype.setCurrentRawFrameValue = function(t) {
            this.currentRawFrame = t, this.gotoFrame();
        }, q.prototype.setSpeed = function(t) {
            this.playSpeed = t, this.updaFrameModifier();
        }, q.prototype.setDirection = function(t) {
            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
        }, q.prototype.setLoop = function(t) {
            this.loop = t;
        }, q.prototype.setVolume = function(t, e) {
            e && this.name !== e || this.audioController.setVolume(t);
        }, q.prototype.getVolume = function() {
            return this.audioController.getVolume();
        }, q.prototype.mute = function(t) {
            t && this.name !== t || this.audioController.mute();
        }, q.prototype.unmute = function(t) {
            t && this.name !== t || this.audioController.unmute();
        }, q.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
        }, q.prototype.getPath = function() {
            return this.path;
        }, q.prototype.getAssetsPath = function(t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
                var s = t.p;
                s.indexOf("images/") !== -1 && (s = s.split("/")[1]), e = this.assetsPath + s;
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e;
        }, q.prototype.getAssetData = function(t) {
            for(var e = 0, s = this.assets.length; e < s;){
                if (t === this.assets[e].id) return this.assets[e];
                e += 1;
            }
            return null;
        }, q.prototype.hide = function() {
            this.renderer.hide();
        }, q.prototype.show = function() {
            this.renderer.show();
        }, q.prototype.getDuration = function(t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate;
        }, q.prototype.updateDocumentData = function(t, e, s) {
            try {
                var i = this.renderer.getElementByPath(t);
                i.updateDocumentData(e, s);
            } catch  {}
        }, q.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t]) switch(t){
                case "enterFrame":
                    this.triggerEvent(t, new as(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "drawnFrame":
                    this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new Ms(t, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new Cs(t, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new Es(t, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new Ts(t, this));
                    break;
                default:
                    this.triggerEvent(t);
            }
            t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new as(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new Ms(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new Cs(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new Es(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new Ts(t, this));
        }, q.prototype.triggerRenderFrameError = function(t) {
            var e = new wi(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
        }, q.prototype.triggerConfigError = function(t) {
            var e = new Si(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
        };
        var st = function() {
            var t = {}, e = [], s = 0, i = 0, a = 0, r = !0, n = !1;
            function d(u) {
                for(var b = 0, h = u.target; b < i;)e[b].animation === h && (e.splice(b, 1), b -= 1, i -= 1, h.isPaused || k()), b += 1;
            }
            function o(u, b) {
                if (!u) return null;
                for(var h = 0; h < i;){
                    if (e[h].elem === u && e[h].elem !== null) return e[h].animation;
                    h += 1;
                }
                var v = new q;
                return f(v, u), v.setData(u, b), v;
            }
            function c() {
                var u, b = e.length, h = [];
                for(u = 0; u < b; u += 1)h.push(e[u].animation);
                return h;
            }
            function y() {
                a += 1, N();
            }
            function k() {
                a -= 1;
            }
            function f(u, b) {
                u.addEventListener("destroy", d), u.addEventListener("_active", y), u.addEventListener("_idle", k), e.push({
                    elem: b,
                    animation: u
                }), i += 1;
            }
            function P(u) {
                var b = new q;
                return f(b, null), b.setParams(u), b;
            }
            function w(u, b) {
                var h;
                for(h = 0; h < i; h += 1)e[h].animation.setSpeed(u, b);
            }
            function _(u, b) {
                var h;
                for(h = 0; h < i; h += 1)e[h].animation.setDirection(u, b);
            }
            function D(u) {
                var b;
                for(b = 0; b < i; b += 1)e[b].animation.play(u);
            }
            function g(u) {
                var b = u - s, h;
                for(h = 0; h < i; h += 1)e[h].animation.advanceTime(b);
                s = u, a && !n ? window.requestAnimationFrame(g) : r = !0;
            }
            function l(u) {
                s = u, window.requestAnimationFrame(g);
            }
            function p(u) {
                var b;
                for(b = 0; b < i; b += 1)e[b].animation.pause(u);
            }
            function m(u, b, h) {
                var v;
                for(v = 0; v < i; v += 1)e[v].animation.goToAndStop(u, b, h);
            }
            function x(u) {
                var b;
                for(b = 0; b < i; b += 1)e[b].animation.stop(u);
            }
            function C(u) {
                var b;
                for(b = 0; b < i; b += 1)e[b].animation.togglePause(u);
            }
            function E(u) {
                var b;
                for(b = i - 1; b >= 0; b -= 1)e[b].animation.destroy(u);
            }
            function T(u, b, h) {
                var v = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), M, S = v.length;
                for(M = 0; M < S; M += 1)h && v[M].setAttribute("data-bm-type", h), o(v[M], u);
                if (b && S === 0) {
                    h || (h = "svg");
                    var H = document.getElementsByTagName("body")[0];
                    H.innerText = "";
                    var z = nt("div");
                    z.style.width = "100%", z.style.height = "100%", z.setAttribute("data-bm-type", h), H.appendChild(z), o(z, u);
                }
            }
            function L() {
                var u;
                for(u = 0; u < i; u += 1)e[u].animation.resize();
            }
            function N() {
                !n && a && r && (window.requestAnimationFrame(l), r = !1);
            }
            function O() {
                n = !0;
            }
            function B() {
                n = !1, N();
            }
            function j(u, b) {
                var h;
                for(h = 0; h < i; h += 1)e[h].animation.setVolume(u, b);
            }
            function A(u) {
                var b;
                for(b = 0; b < i; b += 1)e[b].animation.mute(u);
            }
            function F(u) {
                var b;
                for(b = 0; b < i; b += 1)e[b].animation.unmute(u);
            }
            return t.registerAnimation = o, t.loadAnimation = P, t.setSpeed = w, t.setDirection = _, t.play = D, t.pause = p, t.stop = x, t.togglePause = C, t.searchAnimations = T, t.resize = L, t.goToAndStop = m, t.destroy = E, t.freeze = O, t.unfreeze = B, t.setVolume = j, t.mute = A, t.unmute = F, t.getRegisteredAnimations = c, t;
        }(), Pe = function() {
            var t = {};
            t.getBezierEasing = s;
            var e = {};
            function s(l, p, m, x, C) {
                var E = C || ("bez_" + l + "_" + p + "_" + m + "_" + x).replace(/\./g, "p");
                if (e[E]) return e[E];
                var T = new g([
                    l,
                    p,
                    m,
                    x
                ]);
                return e[E] = T, T;
            }
            var i = 4, a = .001, r = 1e-7, n = 10, d = 11, o = 1 / (d - 1), c = typeof Float32Array == "function";
            function y(l, p) {
                return 1 - 3 * p + 3 * l;
            }
            function k(l, p) {
                return 3 * p - 6 * l;
            }
            function f(l) {
                return 3 * l;
            }
            function P(l, p, m) {
                return ((y(p, m) * l + k(p, m)) * l + f(p)) * l;
            }
            function w(l, p, m) {
                return 3 * y(p, m) * l * l + 2 * k(p, m) * l + f(p);
            }
            function _(l, p, m, x, C) {
                var E, T, L = 0;
                do T = p + (m - p) / 2, E = P(T, x, C) - l, E > 0 ? m = T : p = T;
                while (Math.abs(E) > r && ++L < n);
                return T;
            }
            function D(l, p, m, x) {
                for(var C = 0; C < i; ++C){
                    var E = w(p, m, x);
                    if (E === 0) return p;
                    var T = P(p, m, x) - l;
                    p -= T / E;
                }
                return p;
            }
            function g(l) {
                this._p = l, this._mSampleValues = c ? new Float32Array(d) : new Array(d), this._precomputed = !1, this.get = this.get.bind(this);
            }
            return g.prototype = {
                get: function(l) {
                    var p = this._p[0], m = this._p[1], x = this._p[2], C = this._p[3];
                    return this._precomputed || this._precompute(), p === m && x === C ? l : l === 0 ? 0 : l === 1 ? 1 : P(this._getTForX(l), m, C);
                },
                _precompute: function() {
                    var l = this._p[0], p = this._p[1], m = this._p[2], x = this._p[3];
                    this._precomputed = !0, (l !== p || m !== x) && this._calcSampleValues();
                },
                _calcSampleValues: function() {
                    for(var l = this._p[0], p = this._p[2], m = 0; m < d; ++m)this._mSampleValues[m] = P(m * o, l, p);
                },
                _getTForX: function(l) {
                    for(var p = this._p[0], m = this._p[2], x = this._mSampleValues, C = 0, E = 1, T = d - 1; E !== T && x[E] <= l; ++E)C += o;
                    --E;
                    var L = (l - x[E]) / (x[E + 1] - x[E]), N = C + L * o, O = w(N, p, m);
                    return O >= a ? D(l, N, p, m) : O === 0 ? N : _(l, C, C + o, p, m);
                }
            }, t;
        }(), Bs = function() {
            function t(e) {
                return e.concat(K(e.length));
            }
            return {
                double: t
            };
        }(), qe = function() {
            return function(t, e, s) {
                var i = 0, a = t, r = K(a), n = {
                    newElement: d,
                    release: o
                };
                function d() {
                    var c;
                    return i ? (i -= 1, c = r[i]) : c = e(), c;
                }
                function o(c) {
                    i === a && (r = Bs.double(r), a *= 2), s && s(c), r[i] = c, i += 1;
                }
                return n;
            };
        }(), zs = function() {
            function t() {
                return {
                    addedLength: 0,
                    percents: ht("float32", Ne()),
                    lengths: ht("float32", Ne())
                };
            }
            return qe(8, t);
        }(), Vs = function() {
            function t() {
                return {
                    lengths: [],
                    totalLength: 0
                };
            }
            function e(s) {
                var i, a = s.lengths.length;
                for(i = 0; i < a; i += 1)zs.release(s.lengths[i]);
                s.lengths.length = 0;
            }
            return qe(8, t, e);
        }();
        function zi() {
            var t = Math;
            function e(f, P, w, _, D, g) {
                var l = f * _ + P * D + w * g - D * _ - g * f - w * P;
                return l > -0.001 && l < .001;
            }
            function s(f, P, w, _, D, g, l, p, m) {
                if (w === 0 && g === 0 && m === 0) return e(f, P, _, D, l, p);
                var x = t.sqrt(t.pow(_ - f, 2) + t.pow(D - P, 2) + t.pow(g - w, 2)), C = t.sqrt(t.pow(l - f, 2) + t.pow(p - P, 2) + t.pow(m - w, 2)), E = t.sqrt(t.pow(l - _, 2) + t.pow(p - D, 2) + t.pow(m - g, 2)), T;
                return x > C ? x > E ? T = x - C - E : T = E - C - x : E > C ? T = E - C - x : T = C - x - E, T > -0.0001 && T < 1e-4;
            }
            var i = function() {
                return function(f, P, w, _) {
                    var D = Ne(), g, l, p, m, x, C = 0, E, T = [], L = [], N = zs.newElement();
                    for(p = w.length, g = 0; g < D; g += 1){
                        for(x = g / (D - 1), E = 0, l = 0; l < p; l += 1)m = mt(1 - x, 3) * f[l] + 3 * mt(1 - x, 2) * x * w[l] + 3 * (1 - x) * mt(x, 2) * _[l] + mt(x, 3) * P[l], T[l] = m, L[l] !== null && (E += mt(T[l] - L[l], 2)), L[l] = T[l];
                        E && (E = ze(E), C += E), N.percents[g] = x, N.lengths[g] = C;
                    }
                    return N.addedLength = C, N;
                };
            }();
            function a(f) {
                var P = Vs.newElement(), w = f.c, _ = f.v, D = f.o, g = f.i, l, p = f._length, m = P.lengths, x = 0;
                for(l = 0; l < p - 1; l += 1)m[l] = i(_[l], _[l + 1], D[l], g[l + 1]), x += m[l].addedLength;
                return w && p && (m[l] = i(_[l], _[0], D[l], g[0]), x += m[l].addedLength), P.totalLength = x, P;
            }
            function r(f) {
                this.segmentLength = 0, this.points = new Array(f);
            }
            function n(f, P) {
                this.partialLength = f, this.point = P;
            }
            var d = function() {
                var f = {};
                return function(P, w, _, D) {
                    var g = (P[0] + "_" + P[1] + "_" + w[0] + "_" + w[1] + "_" + _[0] + "_" + _[1] + "_" + D[0] + "_" + D[1]).replace(/\./g, "p");
                    if (!f[g]) {
                        var l = Ne(), p, m, x, C, E, T = 0, L, N, O = null;
                        P.length === 2 && (P[0] !== w[0] || P[1] !== w[1]) && e(P[0], P[1], w[0], w[1], P[0] + _[0], P[1] + _[1]) && e(P[0], P[1], w[0], w[1], w[0] + D[0], w[1] + D[1]) && (l = 2);
                        var B = new r(l);
                        for(x = _.length, p = 0; p < l; p += 1){
                            for(N = K(x), E = p / (l - 1), L = 0, m = 0; m < x; m += 1)C = mt(1 - E, 3) * P[m] + 3 * mt(1 - E, 2) * E * (P[m] + _[m]) + 3 * (1 - E) * mt(E, 2) * (w[m] + D[m]) + mt(E, 3) * w[m], N[m] = C, O !== null && (L += mt(N[m] - O[m], 2));
                            L = ze(L), T += L, B.points[p] = new n(L, N), O = N;
                        }
                        B.segmentLength = T, f[g] = B;
                    }
                    return f[g];
                };
            }();
            function o(f, P) {
                var w = P.percents, _ = P.lengths, D = w.length, g = ee((D - 1) * f), l = f * P.addedLength, p = 0;
                if (g === D - 1 || g === 0 || l === _[g]) return w[g];
                for(var m = _[g] > l ? -1 : 1, x = !0; x;)if (_[g] <= l && _[g + 1] > l ? (p = (l - _[g]) / (_[g + 1] - _[g]), x = !1) : g += m, g < 0 || g >= D - 1) {
                    if (g === D - 1) return w[g];
                    x = !1;
                }
                return w[g] + (w[g + 1] - w[g]) * p;
            }
            function c(f, P, w, _, D, g) {
                var l = o(D, g), p = 1 - l, m = t.round((p * p * p * f[0] + (l * p * p + p * l * p + p * p * l) * w[0] + (l * l * p + p * l * l + l * p * l) * _[0] + l * l * l * P[0]) * 1e3) / 1e3, x = t.round((p * p * p * f[1] + (l * p * p + p * l * p + p * p * l) * w[1] + (l * l * p + p * l * l + l * p * l) * _[1] + l * l * l * P[1]) * 1e3) / 1e3;
                return [
                    m,
                    x
                ];
            }
            var y = ht("float32", 8);
            function k(f, P, w, _, D, g, l) {
                D < 0 ? D = 0 : D > 1 && (D = 1);
                var p = o(D, l);
                g = g > 1 ? 1 : g;
                var m = o(g, l), x, C = f.length, E = 1 - p, T = 1 - m, L = E * E * E, N = p * E * E * 3, O = p * p * E * 3, B = p * p * p, j = E * E * T, A = p * E * T + E * p * T + E * E * m, F = p * p * T + E * p * m + p * E * m, u = p * p * m, b = E * T * T, h = p * T * T + E * m * T + E * T * m, v = p * m * T + E * m * m + p * T * m, M = p * m * m, S = T * T * T, H = m * T * T + T * m * T + T * T * m, z = m * m * T + T * m * m + m * T * m, Z = m * m * m;
                for(x = 0; x < C; x += 1)y[x * 4] = t.round((L * f[x] + N * w[x] + O * _[x] + B * P[x]) * 1e3) / 1e3, y[x * 4 + 1] = t.round((j * f[x] + A * w[x] + F * _[x] + u * P[x]) * 1e3) / 1e3, y[x * 4 + 2] = t.round((b * f[x] + h * w[x] + v * _[x] + M * P[x]) * 1e3) / 1e3, y[x * 4 + 3] = t.round((S * f[x] + H * w[x] + z * _[x] + Z * P[x]) * 1e3) / 1e3;
                return y;
            }
            return {
                getSegmentsLength: a,
                getNewSegment: k,
                getPointInSegment: c,
                buildBezierData: d,
                pointOnLine2D: e,
                pointOnLine3D: s
            };
        }
        var Et = zi(), se = is, Rs = Math.abs;
        function Os(t, e) {
            var s = this.offsetTime, i;
            this.propType === "multidimensional" && (i = ht("float32", this.pv.length));
            for(var a = e.lastIndex, r = a, n = this.keyframes.length - 1, d = !0, o, c, y; d;){
                if (o = this.keyframes[r], c = this.keyframes[r + 1], r === n - 1 && t >= c.t - s) {
                    o.h && (o = c), a = 0;
                    break;
                }
                if (c.t - s > t) {
                    a = r;
                    break;
                }
                r < n - 1 ? r += 1 : (a = 0, d = !1);
            }
            y = this.keyframesMetadata[r] || {};
            var k, f, P, w, _, D, g = c.t - s, l = o.t - s, p;
            if (o.to) {
                y.bezierData || (y.bezierData = Et.buildBezierData(o.s, c.s || o.e, o.to, o.ti));
                var m = y.bezierData;
                if (t >= g || t < l) {
                    var x = t >= g ? m.points.length - 1 : 0;
                    for(f = m.points[x].point.length, k = 0; k < f; k += 1)i[k] = m.points[x].point[k];
                } else {
                    y.__fnct ? D = y.__fnct : (D = Pe.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, y.__fnct = D), P = D((t - l) / (g - l));
                    var C = m.segmentLength * P, E, T = e.lastFrame < t && e._lastKeyframeIndex === r ? e._lastAddedLength : 0;
                    for(_ = e.lastFrame < t && e._lastKeyframeIndex === r ? e._lastPoint : 0, d = !0, w = m.points.length; d;){
                        if (T += m.points[_].partialLength, C === 0 || P === 0 || _ === m.points.length - 1) {
                            for(f = m.points[_].point.length, k = 0; k < f; k += 1)i[k] = m.points[_].point[k];
                            break;
                        } else if (C >= T && C < T + m.points[_ + 1].partialLength) {
                            for(E = (C - T) / m.points[_ + 1].partialLength, f = m.points[_].point.length, k = 0; k < f; k += 1)i[k] = m.points[_].point[k] + (m.points[_ + 1].point[k] - m.points[_].point[k]) * E;
                            break;
                        }
                        _ < w - 1 ? _ += 1 : d = !1;
                    }
                    e._lastPoint = _, e._lastAddedLength = T - m.points[_].partialLength, e._lastKeyframeIndex = r;
                }
            } else {
                var L, N, O, B, j;
                if (n = o.s.length, p = c.s || o.e, this.sh && o.h !== 1) {
                    if (t >= g) i[0] = p[0], i[1] = p[1], i[2] = p[2];
                    else if (t <= l) i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2];
                    else {
                        var A = Ns(o.s), F = Ns(p), u = (t - l) / (g - l);
                        Ri(i, Vi(A, F, u));
                    }
                } else for(r = 0; r < n; r += 1)o.h !== 1 && (t >= g ? P = 1 : t < l ? P = 0 : (o.o.x.constructor === Array ? (y.__fnct || (y.__fnct = []), y.__fnct[r] ? D = y.__fnct[r] : (L = o.o.x[r] === void 0 ? o.o.x[0] : o.o.x[r], N = o.o.y[r] === void 0 ? o.o.y[0] : o.o.y[r], O = o.i.x[r] === void 0 ? o.i.x[0] : o.i.x[r], B = o.i.y[r] === void 0 ? o.i.y[0] : o.i.y[r], D = Pe.getBezierEasing(L, N, O, B).get, y.__fnct[r] = D)) : y.__fnct ? D = y.__fnct : (L = o.o.x, N = o.o.y, O = o.i.x, B = o.i.y, D = Pe.getBezierEasing(L, N, O, B).get, o.keyframeMetadata = D), P = D((t - l) / (g - l)))), p = c.s || o.e, j = o.h === 1 ? o.s[r] : o.s[r] + (p[r] - o.s[r]) * P, this.propType === "multidimensional" ? i[r] = j : i = j;
            }
            return e.lastIndex = a, i;
        }
        function Vi(t, e, s) {
            var i = [], a = t[0], r = t[1], n = t[2], d = t[3], o = e[0], c = e[1], y = e[2], k = e[3], f, P, w, _, D;
            return P = a * o + r * c + n * y + d * k, P < 0 && (P = -P, o = -o, c = -c, y = -y, k = -k), 1 - P > 1e-6 ? (f = Math.acos(P), w = Math.sin(f), _ = Math.sin((1 - s) * f) / w, D = Math.sin(s * f) / w) : (_ = 1 - s, D = s), i[0] = _ * a + D * o, i[1] = _ * r + D * c, i[2] = _ * n + D * y, i[3] = _ * d + D * k, i;
        }
        function Ri(t, e) {
            var s = e[0], i = e[1], a = e[2], r = e[3], n = Math.atan2(2 * i * r - 2 * s * a, 1 - 2 * i * i - 2 * a * a), d = Math.asin(2 * s * i + 2 * a * r), o = Math.atan2(2 * s * r - 2 * i * a, 1 - 2 * s * s - 2 * a * a);
            t[0] = n / J, t[1] = d / J, t[2] = o / J;
        }
        function Ns(t) {
            var e = t[0] * J, s = t[1] * J, i = t[2] * J, a = Math.cos(e / 2), r = Math.cos(s / 2), n = Math.cos(i / 2), d = Math.sin(e / 2), o = Math.sin(s / 2), c = Math.sin(i / 2), y = a * r * n - d * o * c, k = d * o * n + a * r * c, f = d * r * n + a * o * c, P = a * o * n - d * r * c;
            return [
                k,
                f,
                P,
                y
            ];
        }
        function js() {
            var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t === this._caching.lastFrame || this._caching.lastFrame !== se && (this._caching.lastFrame >= s && t >= s || this._caching.lastFrame < e && t < e))) {
                this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var i = this.interpolateValue(t, this._caching);
                this.pv = i;
            }
            return this._caching.lastFrame = t, this.pv;
        }
        function He(t) {
            var e;
            if (this.propType === "unidimensional") e = t * this.mult, Rs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
            else for(var s = 0, i = this.v.length; s < i;)e = t[s] * this.mult, Rs(this.v[s] - e) > 1e-5 && (this.v[s] = e, this._mdf = !0), s += 1;
        }
        function We() {
            if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                if (this.lock) {
                    this.setVValue(this.pv);
                    return;
                }
                this.lock = !0, this._mdf = this._isFirstFrame;
                var t, e = this.effectsSequence.length, s = this.kf ? this.pv : this.data.k;
                for(t = 0; t < e; t += 1)s = this.effectsSequence[t](s);
                this.setVValue(s), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
        }
        function Xe(t) {
            this.effectsSequence.push(t), this.container.addDynamicProperty(this);
        }
        function Oi(t, e, s, i) {
            this.propType = "unidimensional", this.mult = s || 1, this.data = e, this.v = s ? e.k * s : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = We, this.setVValue = He, this.addEffect = Xe;
        }
        function Ni(t, e, s, i) {
            this.propType = "multidimensional", this.mult = s || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
            var a, r = e.k.length;
            for(this.v = ht("float32", r), this.pv = ht("float32", r), this.vel = ht("float32", r), a = 0; a < r; a += 1)this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = We, this.setVValue = He, this.addEffect = Xe;
        }
        function ji(t, e, s, i) {
            this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                lastFrame: se,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            }, this.k = !0, this.kf = !0, this.data = e, this.mult = s || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = se, this.pv = se, this._isFirstFrame = !0, this.getValue = We, this.setVValue = He, this.interpolateValue = Os, this.effectsSequence = [
                js.bind(this)
            ], this.addEffect = Xe;
        }
        function qi(t, e, s, i) {
            this.propType = "multidimensional";
            var a, r = e.k.length, n, d, o, c;
            for(a = 0; a < r - 1; a += 1)e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (n = e.k[a].s, d = e.k[a + 1].s, o = e.k[a].to, c = e.k[a].ti, (n.length === 2 && !(n[0] === d[0] && n[1] === d[1]) && Et.pointOnLine2D(n[0], n[1], d[0], d[1], n[0] + o[0], n[1] + o[1]) && Et.pointOnLine2D(n[0], n[1], d[0], d[1], d[0] + c[0], d[1] + c[1]) || n.length === 3 && !(n[0] === d[0] && n[1] === d[1] && n[2] === d[2]) && Et.pointOnLine3D(n[0], n[1], n[2], d[0], d[1], d[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && Et.pointOnLine3D(n[0], n[1], n[2], d[0], d[1], d[2], d[0] + c[0], d[1] + c[1], d[2] + c[2])) && (e.k[a].to = null, e.k[a].ti = null), n[0] === d[0] && n[1] === d[1] && o[0] === 0 && o[1] === 0 && c[0] === 0 && c[1] === 0 && (n.length === 2 || n[2] === d[2] && o[2] === 0 && c[2] === 0) && (e.k[a].to = null, e.k[a].ti = null));
            this.effectsSequence = [
                js.bind(this)
            ], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = s || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = We, this.setVValue = He, this.interpolateValue = Os, this.frameId = -1;
            var y = e.k[0].s.length;
            for(this.v = ht("float32", y), this.pv = ht("float32", y), a = 0; a < y; a += 1)this.v[a] = se, this.pv[a] = se;
            this._caching = {
                lastFrame: se,
                lastIndex: 0,
                value: ht("float32", y)
            }, this.addEffect = Xe;
        }
        var I = function() {
            function t(s, i, a, r, n) {
                i.sid && (i = s.globalData.slotManager.getProp(i));
                var d;
                if (!i.k.length) d = new Oi(s, i, r, n);
                else if (typeof i.k[0] == "number") d = new Ni(s, i, r, n);
                else switch(a){
                    case 0:
                        d = new ji(s, i, r, n);
                        break;
                    case 1:
                        d = new qi(s, i, r, n);
                        break;
                }
                return d.effectsSequence.length && n.addDynamicProperty(d), d;
            }
            var e = {
                getProp: t
            };
            return e;
        }();
        function ot() {}
        ot.prototype = {
            addDynamicProperty: function(t) {
                this.dynamicProperties.indexOf(t) === -1 && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0);
            },
            iterateDynamicProperties: function() {
                this._mdf = !1;
                var t, e = this.dynamicProperties.length;
                for(t = 0; t < e; t += 1)this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0);
            },
            initDynamicPropertyContainer: function(t) {
                this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
            }
        };
        var ie = function() {
            function t() {
                return ht("float32", 2);
            }
            return qe(8, t);
        }();
        function Vt() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = K(this._maxLength), this.o = K(this._maxLength), this.i = K(this._maxLength);
        }
        Vt.prototype.setPathData = function(t, e) {
            this.c = t, this.setLength(e);
            for(var s = 0; s < e;)this.v[s] = ie.newElement(), this.o[s] = ie.newElement(), this.i[s] = ie.newElement(), s += 1;
        }, Vt.prototype.setLength = function(t) {
            for(; this._maxLength < t;)this.doubleArrayLength();
            this._length = t;
        }, Vt.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(K(this._maxLength)), this.i = this.i.concat(K(this._maxLength)), this.o = this.o.concat(K(this._maxLength)), this._maxLength *= 2;
        }, Vt.prototype.setXYAt = function(t, e, s, i, a) {
            var r;
            switch(this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), s){
                case "v":
                    r = this.v;
                    break;
                case "i":
                    r = this.i;
                    break;
                case "o":
                    r = this.o;
                    break;
                default:
                    r = [];
                    break;
            }
            (!r[i] || r[i] && !a) && (r[i] = ie.newElement()), r[i][0] = t, r[i][1] = e;
        }, Vt.prototype.setTripleAt = function(t, e, s, i, a, r, n, d) {
            this.setXYAt(t, e, "v", n, d), this.setXYAt(s, i, "o", n, d), this.setXYAt(a, r, "i", n, d);
        }, Vt.prototype.reverse = function() {
            var t = new Vt;
            t.setPathData(this.c, this._length);
            var e = this.v, s = this.o, i = this.i, a = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], s[0][0], s[0][1], 0, !1), a = 1);
            var r = this._length - 1, n = this._length, d;
            for(d = a; d < n; d += 1)t.setTripleAt(e[r][0], e[r][1], i[r][0], i[r][1], s[r][0], s[r][1], d, !1), r -= 1;
            return t;
        }, Vt.prototype.length = function() {
            return this._length;
        };
        var pt = function() {
            function t() {
                return new Vt;
            }
            function e(a) {
                var r = a._length, n;
                for(n = 0; n < r; n += 1)ie.release(a.v[n]), ie.release(a.i[n]), ie.release(a.o[n]), a.v[n] = null, a.i[n] = null, a.o[n] = null;
                a._length = 0, a.c = !1;
            }
            function s(a) {
                var r = i.newElement(), n, d = a._length === void 0 ? a.v.length : a._length;
                for(r.setLength(d), r.c = a.c, n = 0; n < d; n += 1)r.setTripleAt(a.v[n][0], a.v[n][1], a.o[n][0], a.o[n][1], a.i[n][0], a.i[n][1], n);
                return r;
            }
            var i = qe(4, t, e);
            return i.clone = s, i;
        }();
        function hs() {
            this._length = 0, this._maxLength = 4, this.shapes = K(this._maxLength);
        }
        hs.prototype.addShape = function(t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(K(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
        }, hs.prototype.releaseShapes = function() {
            var t;
            for(t = 0; t < this._length; t += 1)pt.release(this.shapes[t]);
            this._length = 0;
        };
        var pe = function() {
            var t = {
                newShapeCollection: a,
                release: r
            }, e = 0, s = 4, i = K(s);
            function a() {
                var n;
                return e ? (e -= 1, n = i[e]) : n = new hs, n;
            }
            function r(n) {
                var d, o = n._length;
                for(d = 0; d < o; d += 1)pt.release(n.shapes[d]);
                n._length = 0, e === s && (i = Bs.double(i), s *= 2), i[e] = n, e += 1;
            }
            return t;
        }(), Ze = function() {
            var t = -999999;
            function e(g, l, p) {
                var m = p.lastIndex, x, C, E, T, L, N, O, B, j, A = this.keyframes;
                if (g < A[0].t - this.offsetTime) x = A[0].s[0], E = !0, m = 0;
                else if (g >= A[A.length - 1].t - this.offsetTime) x = A[A.length - 1].s ? A[A.length - 1].s[0] : A[A.length - 2].e[0], E = !0;
                else {
                    for(var F = m, u = A.length - 1, b = !0, h, v, M; b && (h = A[F], v = A[F + 1], !(v.t - this.offsetTime > g));)F < u - 1 ? F += 1 : b = !1;
                    if (M = this.keyframesMetadata[F] || {}, E = h.h === 1, m = F, !E) {
                        if (g >= v.t - this.offsetTime) B = 1;
                        else if (g < h.t - this.offsetTime) B = 0;
                        else {
                            var S;
                            M.__fnct ? S = M.__fnct : (S = Pe.getBezierEasing(h.o.x, h.o.y, h.i.x, h.i.y).get, M.__fnct = S), B = S((g - (h.t - this.offsetTime)) / (v.t - this.offsetTime - (h.t - this.offsetTime)));
                        }
                        C = v.s ? v.s[0] : h.e[0];
                    }
                    x = h.s[0];
                }
                for(N = l._length, O = x.i[0].length, p.lastIndex = m, T = 0; T < N; T += 1)for(L = 0; L < O; L += 1)j = E ? x.i[T][L] : x.i[T][L] + (C.i[T][L] - x.i[T][L]) * B, l.i[T][L] = j, j = E ? x.o[T][L] : x.o[T][L] + (C.o[T][L] - x.o[T][L]) * B, l.o[T][L] = j, j = E ? x.v[T][L] : x.v[T][L] + (C.v[T][L] - x.v[T][L]) * B, l.v[T][L] = j;
            }
            function s() {
                var g = this.comp.renderedFrame - this.offsetTime, l = this.keyframes[0].t - this.offsetTime, p = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, m = this._caching.lastFrame;
                return m !== t && (m < l && g < l || m > p && g > p) || (this._caching.lastIndex = m < g ? this._caching.lastIndex : 0, this.interpolateShape(g, this.pv, this._caching)), this._caching.lastFrame = g, this.pv;
            }
            function i() {
                this.paths = this.localShapeCollection;
            }
            function a(g, l) {
                if (g._length !== l._length || g.c !== l.c) return !1;
                var p, m = g._length;
                for(p = 0; p < m; p += 1)if (g.v[p][0] !== l.v[p][0] || g.v[p][1] !== l.v[p][1] || g.o[p][0] !== l.o[p][0] || g.o[p][1] !== l.o[p][1] || g.i[p][0] !== l.i[p][0] || g.i[p][1] !== l.i[p][1]) return !1;
                return !0;
            }
            function r(g) {
                a(this.v, g) || (this.v = pt.clone(g), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
            }
            function n() {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (!this.effectsSequence.length) {
                        this._mdf = !1;
                        return;
                    }
                    if (this.lock) {
                        this.setVValue(this.pv);
                        return;
                    }
                    this.lock = !0, this._mdf = !1;
                    var g;
                    this.kf ? g = this.pv : this.data.ks ? g = this.data.ks.k : g = this.data.pt.k;
                    var l, p = this.effectsSequence.length;
                    for(l = 0; l < p; l += 1)g = this.effectsSequence[l](g);
                    this.setVValue(g), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                }
            }
            function d(g, l, p) {
                this.propType = "shape", this.comp = g.comp, this.container = g, this.elem = g, this.data = l, this.k = !1, this.kf = !1, this._mdf = !1;
                var m = p === 3 ? l.pt.k : l.ks.k;
                this.v = pt.clone(m), this.pv = pt.clone(this.v), this.localShapeCollection = pe.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
            }
            function o(g) {
                this.effectsSequence.push(g), this.container.addDynamicProperty(this);
            }
            d.prototype.interpolateShape = e, d.prototype.getValue = n, d.prototype.setVValue = r, d.prototype.addEffect = o;
            function c(g, l, p) {
                this.propType = "shape", this.comp = g.comp, this.elem = g, this.container = g, this.offsetTime = g.data.st, this.keyframes = p === 3 ? l.pt.k : l.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                var m = this.keyframes[0].s[0].i.length;
                this.v = pt.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, m), this.pv = pt.clone(this.v), this.localShapeCollection = pe.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                    lastFrame: t,
                    lastIndex: 0
                }, this.effectsSequence = [
                    s.bind(this)
                ];
            }
            c.prototype.getValue = n, c.prototype.interpolateShape = e, c.prototype.setVValue = r, c.prototype.addEffect = o;
            var y = function() {
                var g = Ht;
                function l(p, m) {
                    this.v = pt.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = pe.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = m.d, this.elem = p, this.comp = p.comp, this.frameId = -1, this.initDynamicPropertyContainer(p), this.p = I.getProp(p, m.p, 1, 0, this), this.s = I.getProp(p, m.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
                }
                return l.prototype = {
                    reset: i,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function() {
                        var p = this.p.v[0], m = this.p.v[1], x = this.s.v[0] / 2, C = this.s.v[1] / 2, E = this.d !== 3, T = this.v;
                        T.v[0][0] = p, T.v[0][1] = m - C, T.v[1][0] = E ? p + x : p - x, T.v[1][1] = m, T.v[2][0] = p, T.v[2][1] = m + C, T.v[3][0] = E ? p - x : p + x, T.v[3][1] = m, T.i[0][0] = E ? p - x * g : p + x * g, T.i[0][1] = m - C, T.i[1][0] = E ? p + x : p - x, T.i[1][1] = m - C * g, T.i[2][0] = E ? p + x * g : p - x * g, T.i[2][1] = m + C, T.i[3][0] = E ? p - x : p + x, T.i[3][1] = m + C * g, T.o[0][0] = E ? p + x * g : p - x * g, T.o[0][1] = m - C, T.o[1][0] = E ? p + x : p - x, T.o[1][1] = m + C * g, T.o[2][0] = E ? p - x * g : p + x * g, T.o[2][1] = m + C, T.o[3][0] = E ? p - x : p + x, T.o[3][1] = m - C * g;
                    }
                }, W([
                    ot
                ], l), l;
            }(), k = function() {
                function g(l, p) {
                    this.v = pt.newElement(), this.v.setPathData(!0, 0), this.elem = l, this.comp = l.comp, this.data = p, this.frameId = -1, this.d = p.d, this.initDynamicPropertyContainer(l), p.sy === 1 ? (this.ir = I.getProp(l, p.ir, 0, 0, this), this.is = I.getProp(l, p.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = I.getProp(l, p.pt, 0, 0, this), this.p = I.getProp(l, p.p, 1, 0, this), this.r = I.getProp(l, p.r, 0, J, this), this.or = I.getProp(l, p.or, 0, 0, this), this.os = I.getProp(l, p.os, 0, .01, this), this.localShapeCollection = pe.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
                }
                return g.prototype = {
                    reset: i,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function() {
                        var l = Math.floor(this.pt.v) * 2, p = Math.PI * 2 / l, m = !0, x = this.or.v, C = this.ir.v, E = this.os.v, T = this.is.v, L = 2 * Math.PI * x / (l * 2), N = 2 * Math.PI * C / (l * 2), O, B, j, A, F = -Math.PI / 2;
                        F += this.r.v;
                        var u = this.data.d === 3 ? -1 : 1;
                        for(this.v._length = 0, O = 0; O < l; O += 1){
                            B = m ? x : C, j = m ? E : T, A = m ? L : N;
                            var b = B * Math.cos(F), h = B * Math.sin(F), v = b === 0 && h === 0 ? 0 : h / Math.sqrt(b * b + h * h), M = b === 0 && h === 0 ? 0 : -b / Math.sqrt(b * b + h * h);
                            b += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(b, h, b - v * A * j * u, h - M * A * j * u, b + v * A * j * u, h + M * A * j * u, O, !0), m = !m, F += p * u;
                        }
                    },
                    convertPolygonToPath: function() {
                        var l = Math.floor(this.pt.v), p = Math.PI * 2 / l, m = this.or.v, x = this.os.v, C = 2 * Math.PI * m / (l * 4), E, T = -Math.PI * .5, L = this.data.d === 3 ? -1 : 1;
                        for(T += this.r.v, this.v._length = 0, E = 0; E < l; E += 1){
                            var N = m * Math.cos(T), O = m * Math.sin(T), B = N === 0 && O === 0 ? 0 : O / Math.sqrt(N * N + O * O), j = N === 0 && O === 0 ? 0 : -N / Math.sqrt(N * N + O * O);
                            N += +this.p.v[0], O += +this.p.v[1], this.v.setTripleAt(N, O, N - B * C * x * L, O - j * C * x * L, N + B * C * x * L, O + j * C * x * L, E, !0), T += p * L;
                        }
                        this.paths.length = 0, this.paths[0] = this.v;
                    }
                }, W([
                    ot
                ], g), g;
            }(), f = function() {
                function g(l, p) {
                    this.v = pt.newElement(), this.v.c = !0, this.localShapeCollection = pe.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = l, this.comp = l.comp, this.frameId = -1, this.d = p.d, this.initDynamicPropertyContainer(l), this.p = I.getProp(l, p.p, 1, 0, this), this.s = I.getProp(l, p.s, 1, 0, this), this.r = I.getProp(l, p.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
                }
                return g.prototype = {
                    convertRectToPath: function() {
                        var l = this.p.v[0], p = this.p.v[1], m = this.s.v[0] / 2, x = this.s.v[1] / 2, C = be(m, x, this.r.v), E = C * (1 - Ht);
                        this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(l + m, p - x + C, l + m, p - x + C, l + m, p - x + E, 0, !0), this.v.setTripleAt(l + m, p + x - C, l + m, p + x - E, l + m, p + x - C, 1, !0), C !== 0 ? (this.v.setTripleAt(l + m - C, p + x, l + m - C, p + x, l + m - E, p + x, 2, !0), this.v.setTripleAt(l - m + C, p + x, l - m + E, p + x, l - m + C, p + x, 3, !0), this.v.setTripleAt(l - m, p + x - C, l - m, p + x - C, l - m, p + x - E, 4, !0), this.v.setTripleAt(l - m, p - x + C, l - m, p - x + E, l - m, p - x + C, 5, !0), this.v.setTripleAt(l - m + C, p - x, l - m + C, p - x, l - m + E, p - x, 6, !0), this.v.setTripleAt(l + m - C, p - x, l + m - E, p - x, l + m - C, p - x, 7, !0)) : (this.v.setTripleAt(l - m, p + x, l - m + E, p + x, l - m, p + x, 2), this.v.setTripleAt(l - m, p - x, l - m, p - x + E, l - m, p - x, 3))) : (this.v.setTripleAt(l + m, p - x + C, l + m, p - x + E, l + m, p - x + C, 0, !0), C !== 0 ? (this.v.setTripleAt(l + m - C, p - x, l + m - C, p - x, l + m - E, p - x, 1, !0), this.v.setTripleAt(l - m + C, p - x, l - m + E, p - x, l - m + C, p - x, 2, !0), this.v.setTripleAt(l - m, p - x + C, l - m, p - x + C, l - m, p - x + E, 3, !0), this.v.setTripleAt(l - m, p + x - C, l - m, p + x - E, l - m, p + x - C, 4, !0), this.v.setTripleAt(l - m + C, p + x, l - m + C, p + x, l - m + E, p + x, 5, !0), this.v.setTripleAt(l + m - C, p + x, l + m - E, p + x, l + m - C, p + x, 6, !0), this.v.setTripleAt(l + m, p + x - C, l + m, p + x - C, l + m, p + x - E, 7, !0)) : (this.v.setTripleAt(l - m, p - x, l - m + E, p - x, l - m, p - x, 1, !0), this.v.setTripleAt(l - m, p + x, l - m, p + x - E, l - m, p + x, 2, !0), this.v.setTripleAt(l + m, p + x, l + m - E, p + x, l + m, p + x, 3, !0)));
                    },
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                    },
                    reset: i
                }, W([
                    ot
                ], g), g;
            }();
            function P(g, l, p) {
                var m;
                if (p === 3 || p === 4) {
                    var x = p === 3 ? l.pt : l.ks, C = x.k;
                    C.length ? m = new c(g, l, p) : m = new d(g, l, p);
                } else p === 5 ? m = new f(g, l) : p === 6 ? m = new y(g, l) : p === 7 && (m = new k(g, l));
                return m.k && g.addDynamicProperty(m), m;
            }
            function w() {
                return d;
            }
            function _() {
                return c;
            }
            var D = {};
            return D.getShapeProp = P, D.getConstructorFunction = w, D.getKeyframedConstructorFunction = _, D;
        }(), it = function() {
            var t = Math.cos, e = Math.sin, s = Math.tan, i = Math.round;
            function a() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
            }
            function r(h) {
                if (h === 0) return this;
                var v = t(h), M = e(h);
                return this._t(v, -M, 0, 0, M, v, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function n(h) {
                if (h === 0) return this;
                var v = t(h), M = e(h);
                return this._t(1, 0, 0, 0, 0, v, -M, 0, 0, M, v, 0, 0, 0, 0, 1);
            }
            function d(h) {
                if (h === 0) return this;
                var v = t(h), M = e(h);
                return this._t(v, 0, M, 0, 0, 1, 0, 0, -M, 0, v, 0, 0, 0, 0, 1);
            }
            function o(h) {
                if (h === 0) return this;
                var v = t(h), M = e(h);
                return this._t(v, -M, 0, 0, M, v, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function c(h, v) {
                return this._t(1, v, h, 1, 0, 0);
            }
            function y(h, v) {
                return this.shear(s(h), s(v));
            }
            function k(h, v) {
                var M = t(v), S = e(v);
                return this._t(M, S, 0, 0, -S, M, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, s(h), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(M, -S, 0, 0, S, M, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function f(h, v, M) {
                return !M && M !== 0 && (M = 1), h === 1 && v === 1 && M === 1 ? this : this._t(h, 0, 0, 0, 0, v, 0, 0, 0, 0, M, 0, 0, 0, 0, 1);
            }
            function P(h, v, M, S, H, z, Z, X, tt, et, gt, Bt, yt, lt, Pt, G) {
                return this.props[0] = h, this.props[1] = v, this.props[2] = M, this.props[3] = S, this.props[4] = H, this.props[5] = z, this.props[6] = Z, this.props[7] = X, this.props[8] = tt, this.props[9] = et, this.props[10] = gt, this.props[11] = Bt, this.props[12] = yt, this.props[13] = lt, this.props[14] = Pt, this.props[15] = G, this;
            }
            function w(h, v, M) {
                return M = M || 0, h !== 0 || v !== 0 || M !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, h, v, M, 1) : this;
            }
            function _(h, v, M, S, H, z, Z, X, tt, et, gt, Bt, yt, lt, Pt, G) {
                var V = this.props;
                if (h === 1 && v === 0 && M === 0 && S === 0 && H === 0 && z === 1 && Z === 0 && X === 0 && tt === 0 && et === 0 && gt === 1 && Bt === 0) return V[12] = V[12] * h + V[15] * yt, V[13] = V[13] * z + V[15] * lt, V[14] = V[14] * gt + V[15] * Pt, V[15] *= G, this._identityCalculated = !1, this;
                var Ot = V[0], Qt = V[1], Nt = V[2], zt = V[3], jt = V[4], qt = V[5], vt = V[6], $t = V[7], Kt = V[8], Ct = V[9], te = V[10], Mt = V[11], oe = V[12], Ke = V[13], ts = V[14], es = V[15];
                return V[0] = Ot * h + Qt * H + Nt * tt + zt * yt, V[1] = Ot * v + Qt * z + Nt * et + zt * lt, V[2] = Ot * M + Qt * Z + Nt * gt + zt * Pt, V[3] = Ot * S + Qt * X + Nt * Bt + zt * G, V[4] = jt * h + qt * H + vt * tt + $t * yt, V[5] = jt * v + qt * z + vt * et + $t * lt, V[6] = jt * M + qt * Z + vt * gt + $t * Pt, V[7] = jt * S + qt * X + vt * Bt + $t * G, V[8] = Kt * h + Ct * H + te * tt + Mt * yt, V[9] = Kt * v + Ct * z + te * et + Mt * lt, V[10] = Kt * M + Ct * Z + te * gt + Mt * Pt, V[11] = Kt * S + Ct * X + te * Bt + Mt * G, V[12] = oe * h + Ke * H + ts * tt + es * yt, V[13] = oe * v + Ke * z + ts * et + es * lt, V[14] = oe * M + Ke * Z + ts * gt + es * Pt, V[15] = oe * S + Ke * X + ts * Bt + es * G, this._identityCalculated = !1, this;
            }
            function D(h) {
                var v = h.props;
                return this.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]);
            }
            function g() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
            }
            function l(h) {
                for(var v = 0; v < 16;){
                    if (h.props[v] !== this.props[v]) return !1;
                    v += 1;
                }
                return !0;
            }
            function p(h) {
                var v;
                for(v = 0; v < 16; v += 1)h.props[v] = this.props[v];
                return h;
            }
            function m(h) {
                var v;
                for(v = 0; v < 16; v += 1)this.props[v] = h[v];
            }
            function x(h, v, M) {
                return {
                    x: h * this.props[0] + v * this.props[4] + M * this.props[8] + this.props[12],
                    y: h * this.props[1] + v * this.props[5] + M * this.props[9] + this.props[13],
                    z: h * this.props[2] + v * this.props[6] + M * this.props[10] + this.props[14]
                };
            }
            function C(h, v, M) {
                return h * this.props[0] + v * this.props[4] + M * this.props[8] + this.props[12];
            }
            function E(h, v, M) {
                return h * this.props[1] + v * this.props[5] + M * this.props[9] + this.props[13];
            }
            function T(h, v, M) {
                return h * this.props[2] + v * this.props[6] + M * this.props[10] + this.props[14];
            }
            function L() {
                var h = this.props[0] * this.props[5] - this.props[1] * this.props[4], v = this.props[5] / h, M = -this.props[1] / h, S = -this.props[4] / h, H = this.props[0] / h, z = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / h, Z = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / h, X = new it;
                return X.props[0] = v, X.props[1] = M, X.props[4] = S, X.props[5] = H, X.props[12] = z, X.props[13] = Z, X;
            }
            function N(h) {
                var v = this.getInverseMatrix();
                return v.applyToPointArray(h[0], h[1], h[2] || 0);
            }
            function O(h) {
                var v, M = h.length, S = [];
                for(v = 0; v < M; v += 1)S[v] = N(h[v]);
                return S;
            }
            function B(h, v, M) {
                var S = ht("float32", 6);
                if (this.isIdentity()) S[0] = h[0], S[1] = h[1], S[2] = v[0], S[3] = v[1], S[4] = M[0], S[5] = M[1];
                else {
                    var H = this.props[0], z = this.props[1], Z = this.props[4], X = this.props[5], tt = this.props[12], et = this.props[13];
                    S[0] = h[0] * H + h[1] * Z + tt, S[1] = h[0] * z + h[1] * X + et, S[2] = v[0] * H + v[1] * Z + tt, S[3] = v[0] * z + v[1] * X + et, S[4] = M[0] * H + M[1] * Z + tt, S[5] = M[0] * z + M[1] * X + et;
                }
                return S;
            }
            function j(h, v, M) {
                var S;
                return this.isIdentity() ? S = [
                    h,
                    v,
                    M
                ] : S = [
                    h * this.props[0] + v * this.props[4] + M * this.props[8] + this.props[12],
                    h * this.props[1] + v * this.props[5] + M * this.props[9] + this.props[13],
                    h * this.props[2] + v * this.props[6] + M * this.props[10] + this.props[14]
                ], S;
            }
            function A(h, v) {
                if (this.isIdentity()) return h + "," + v;
                var M = this.props;
                return Math.round((h * M[0] + v * M[4] + M[12]) * 100) / 100 + "," + Math.round((h * M[1] + v * M[5] + M[13]) * 100) / 100;
            }
            function F() {
                for(var h = 0, v = this.props, M = "matrix3d(", S = 1e4; h < 16;)M += i(v[h] * S) / S, M += h === 15 ? ")" : ",", h += 1;
                return M;
            }
            function u(h) {
                var v = 1e4;
                return h < 1e-6 && h > 0 || h > -0.000001 && h < 0 ? i(h * v) / v : h;
            }
            function b() {
                var h = this.props, v = u(h[0]), M = u(h[1]), S = u(h[4]), H = u(h[5]), z = u(h[12]), Z = u(h[13]);
                return "matrix(" + v + "," + M + "," + S + "," + H + "," + z + "," + Z + ")";
            }
            return function() {
                this.reset = a, this.rotate = r, this.rotateX = n, this.rotateY = d, this.rotateZ = o, this.skew = y, this.skewFromAxis = k, this.shear = c, this.scale = f, this.setTransform = P, this.translate = w, this.transform = _, this.multiply = D, this.applyToPoint = x, this.applyToX = C, this.applyToY = E, this.applyToZ = T, this.applyToPointArray = j, this.applyToTriplePoints = B, this.applyToPointStringified = A, this.toCSS = F, this.to2dCSS = b, this.clone = p, this.cloneFromProps = m, this.equals = l, this.inversePoints = O, this.inversePoint = N, this.getInverseMatrix = L, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = ht("float32", 16), this.reset();
            };
        }();
        function Ue(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ue = function(e) {
                return typeof e;
            } : Ue = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, Ue(t);
        }
        var U = {};
        function Hi(t) {
            xi(t);
        }
        function qs() {
            st.searchAnimations();
        }
        function Wi(t) {
            Di(t);
        }
        function Xi(t) {
            Ei(t);
        }
        function Zi(t) {
            return st.loadAnimation(t);
        }
        function Ui(t) {
            if (typeof t == "string") switch(t){
                case "high":
                    Oe(200);
                    break;
                default:
                case "medium":
                    Oe(50);
                    break;
                case "low":
                    Oe(10);
                    break;
            }
            else !isNaN(t) && t > 1 && Oe(t);
        }
        function Gi() {
            return typeof navigator < "u";
        }
        function Ji(t, e) {
            t === "expressions" && Mi(e);
        }
        function Yi(t) {
            switch(t){
                case "propertyFactory":
                    return I;
                case "shapePropertyFactory":
                    return Ze;
                case "matrix":
                    return it;
                default:
                    return null;
            }
        }
        U.play = st.play, U.pause = st.pause, U.setLocationHref = Hi, U.togglePause = st.togglePause, U.setSpeed = st.setSpeed, U.setDirection = st.setDirection, U.stop = st.stop, U.searchAnimations = qs, U.registerAnimation = st.registerAnimation, U.loadAnimation = Zi, U.setSubframeRendering = Wi, U.resize = st.resize, U.goToAndStop = st.goToAndStop, U.destroy = st.destroy, U.setQuality = Ui, U.inBrowser = Gi, U.installPlugin = Ji, U.freeze = st.freeze, U.unfreeze = st.unfreeze, U.setVolume = st.setVolume, U.mute = st.mute, U.unmute = st.unmute, U.getRegisteredAnimations = st.getRegisteredAnimations, U.useWebWorker = vi, U.setIDPrefix = Xi, U.__getFactory = Yi, U.version = "5.12.2";
        function Qi() {
            document.readyState === "complete" && (clearInterval(ta), qs());
        }
        function $i(t) {
            for(var e = Hs.split("&"), s = 0; s < e.length; s += 1){
                var i = e[s].split("=");
                if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
            }
            return null;
        }
        var Hs = "";
        var Ws = document.getElementsByTagName("script"), Ki = Ws.length - 1, Xs = Ws[Ki] || {
            src: ""
        };
        Hs = Xs.src ? Xs.src.replace(/^[^\?]+\??/, "") : "", $i("renderer");
        var ta = setInterval(Qi, 100);
        try {
            !((typeof Be > "u" ? "undefined" : Ue(Be)) === "object" && typeof ss < "u") && !(typeof define == "function" && define.amd) && (window.bodymovin = U);
        } catch  {}
        var Xt = function() {
            var t = {}, e = {};
            t.registerModifier = s, t.getModifier = i;
            function s(a, r) {
                e[a] || (e[a] = r);
            }
            function i(a, r, n) {
                return new e[a](r, n);
            }
            return t;
        }();
        function wt() {}
        wt.prototype.initModifierProperties = function() {}, wt.prototype.addShapeToModifier = function() {}, wt.prototype.addShape = function(t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: pe.newShapeCollection()
                };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
            }
        }, wt.prototype.init = function(t, e) {
            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = is, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
        }, wt.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
        }, W([
            ot
        ], wt);
        function St() {}
        W([
            wt
        ], St), St.prototype.initModifierProperties = function(t, e) {
            this.s = I.getProp(t, e.s, 0, .01, this), this.e = I.getProp(t, e.e, 0, .01, this), this.o = I.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
        }, St.prototype.addShapeToModifier = function(t) {
            t.pathsData = [];
        }, St.prototype.calculateShapeEdges = function(t, e, s, i, a) {
            var r = [];
            e <= 1 ? r.push({
                s: t,
                e
            }) : t >= 1 ? r.push({
                s: t - 1,
                e: e - 1
            }) : (r.push({
                s: t,
                e: 1
            }), r.push({
                s: 0,
                e: e - 1
            }));
            var n = [], d, o = r.length, c;
            for(d = 0; d < o; d += 1)if (c = r[d], !(c.e * a < i || c.s * a > i + s)) {
                var y, k;
                c.s * a <= i ? y = 0 : y = (c.s * a - i) / s, c.e * a >= i + s ? k = 1 : k = (c.e * a - i) / s, n.push([
                    y,
                    k
                ]);
            }
            return n.length || n.push([
                0,
                0
            ]), n;
        }, St.prototype.releasePathsData = function(t) {
            var e, s = t.length;
            for(e = 0; e < s; e += 1)Vs.release(t[e]);
            return t.length = 0, t;
        }, St.prototype.processShapes = function(t) {
            var e, s;
            if (this._mdf || t) {
                var i = this.o.v % 360 / 360;
                if (i < 0 && (i += 1), this.s.v > 1 ? e = 1 + i : this.s.v < 0 ? e = 0 + i : e = this.s.v + i, this.e.v > 1 ? s = 1 + i : this.e.v < 0 ? s = 0 + i : s = this.e.v + i, e > s) {
                    var a = e;
                    e = s, s = a;
                }
                e = Math.round(e * 1e4) * 1e-4, s = Math.round(s * 1e4) * 1e-4, this.sValue = e, this.eValue = s;
            } else e = this.sValue, s = this.eValue;
            var r, n, d = this.shapes.length, o, c, y, k, f, P = 0;
            if (s === e) for(n = 0; n < d; n += 1)this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
            else if (s === 1 && e === 0 || s === 0 && e === 1) {
                if (this._mdf) for(n = 0; n < d; n += 1)this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0;
            } else {
                var w = [], _, D;
                for(n = 0; n < d; n += 1)if (_ = this.shapes[n], !_.shape._mdf && !this._mdf && !t && this.m !== 2) _.shape.paths = _.localShapeCollection;
                else {
                    if (r = _.shape.paths, c = r._length, f = 0, !_.shape._mdf && _.pathsData.length) f = _.totalShapeLength;
                    else {
                        for(y = this.releasePathsData(_.pathsData), o = 0; o < c; o += 1)k = Et.getSegmentsLength(r.shapes[o]), y.push(k), f += k.totalLength;
                        _.totalShapeLength = f, _.pathsData = y;
                    }
                    P += f, _.shape._mdf = !0;
                }
                var g = e, l = s, p = 0, m;
                for(n = d - 1; n >= 0; n -= 1)if (_ = this.shapes[n], _.shape._mdf) {
                    for(D = _.localShapeCollection, D.releaseShapes(), this.m === 2 && d > 1 ? (m = this.calculateShapeEdges(e, s, _.totalShapeLength, p, P), p += _.totalShapeLength) : m = [
                        [
                            g,
                            l
                        ]
                    ], c = m.length, o = 0; o < c; o += 1){
                        g = m[o][0], l = m[o][1], w.length = 0, l <= 1 ? w.push({
                            s: _.totalShapeLength * g,
                            e: _.totalShapeLength * l
                        }) : g >= 1 ? w.push({
                            s: _.totalShapeLength * (g - 1),
                            e: _.totalShapeLength * (l - 1)
                        }) : (w.push({
                            s: _.totalShapeLength * g,
                            e: _.totalShapeLength
                        }), w.push({
                            s: 0,
                            e: _.totalShapeLength * (l - 1)
                        }));
                        var x = this.addShapes(_, w[0]);
                        if (w[0].s !== w[0].e) {
                            if (w.length > 1) {
                                var C = _.shape.paths.shapes[_.shape.paths._length - 1];
                                if (C.c) {
                                    var E = x.pop();
                                    this.addPaths(x, D), x = this.addShapes(_, w[1], E);
                                } else this.addPaths(x, D), x = this.addShapes(_, w[1]);
                            }
                            this.addPaths(x, D);
                        }
                    }
                    _.shape.paths = D;
                }
            }
        }, St.prototype.addPaths = function(t, e) {
            var s, i = t.length;
            for(s = 0; s < i; s += 1)e.addShape(t[s]);
        }, St.prototype.addSegment = function(t, e, s, i, a, r, n) {
            a.setXYAt(e[0], e[1], "o", r), a.setXYAt(s[0], s[1], "i", r + 1), n && a.setXYAt(t[0], t[1], "v", r), a.setXYAt(i[0], i[1], "v", r + 1);
        }, St.prototype.addSegmentFromArray = function(t, e, s, i) {
            e.setXYAt(t[1], t[5], "o", s), e.setXYAt(t[2], t[6], "i", s + 1), i && e.setXYAt(t[0], t[4], "v", s), e.setXYAt(t[3], t[7], "v", s + 1);
        }, St.prototype.addShapes = function(t, e, s) {
            var i = t.pathsData, a = t.shape.paths.shapes, r, n = t.shape.paths._length, d, o, c = 0, y, k, f, P, w = [], _, D = !0;
            for(s ? (k = s._length, _ = s._length) : (s = pt.newElement(), k = 0, _ = 0), w.push(s), r = 0; r < n; r += 1){
                for(f = i[r].lengths, s.c = a[r].c, o = a[r].c ? f.length : f.length + 1, d = 1; d < o; d += 1)if (y = f[d - 1], c + y.addedLength < e.s) c += y.addedLength, s.c = !1;
                else if (c > e.e) {
                    s.c = !1;
                    break;
                } else e.s <= c && e.e >= c + y.addedLength ? (this.addSegment(a[r].v[d - 1], a[r].o[d - 1], a[r].i[d], a[r].v[d], s, k, D), D = !1) : (P = Et.getNewSegment(a[r].v[d - 1], a[r].v[d], a[r].o[d - 1], a[r].i[d], (e.s - c) / y.addedLength, (e.e - c) / y.addedLength, f[d - 1]), this.addSegmentFromArray(P, s, k, D), D = !1, s.c = !1), c += y.addedLength, k += 1;
                if (a[r].c && f.length) {
                    if (y = f[d - 1], c <= e.e) {
                        var g = f[d - 1].addedLength;
                        e.s <= c && e.e >= c + g ? (this.addSegment(a[r].v[d - 1], a[r].o[d - 1], a[r].i[0], a[r].v[0], s, k, D), D = !1) : (P = Et.getNewSegment(a[r].v[d - 1], a[r].v[0], a[r].o[d - 1], a[r].i[0], (e.s - c) / g, (e.e - c) / g, f[d - 1]), this.addSegmentFromArray(P, s, k, D), D = !1, s.c = !1);
                    } else s.c = !1;
                    c += y.addedLength, k += 1;
                }
                if (s._length && (s.setXYAt(s.v[_][0], s.v[_][1], "i", _), s.setXYAt(s.v[s._length - 1][0], s.v[s._length - 1][1], "o", s._length - 1)), c > e.e) break;
                r < n - 1 && (s = pt.newElement(), D = !0, w.push(s), k = 0);
            }
            return w;
        };
        function we() {}
        W([
            wt
        ], we), we.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = I.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
        }, we.prototype.processPath = function(t, e) {
            var s = e / 100, i = [
                0,
                0
            ], a = t._length, r = 0;
            for(r = 0; r < a; r += 1)i[0] += t.v[r][0], i[1] += t.v[r][1];
            i[0] /= a, i[1] /= a;
            var n = pt.newElement();
            n.c = t.c;
            var d, o, c, y, k, f;
            for(r = 0; r < a; r += 1)d = t.v[r][0] + (i[0] - t.v[r][0]) * s, o = t.v[r][1] + (i[1] - t.v[r][1]) * s, c = t.o[r][0] + (i[0] - t.o[r][0]) * -s, y = t.o[r][1] + (i[1] - t.o[r][1]) * -s, k = t.i[r][0] + (i[0] - t.i[r][0]) * -s, f = t.i[r][1] + (i[1] - t.i[r][1]) * -s, n.setTripleAt(d, o, c, y, k, f, r);
            return n;
        }, we.prototype.processShapes = function(t) {
            var e, s, i = this.shapes.length, a, r, n = this.amount.v;
            if (n !== 0) {
                var d, o;
                for(s = 0; s < i; s += 1){
                    if (d = this.shapes[s], o = d.localShapeCollection, !(!d.shape._mdf && !this._mdf && !t)) for(o.releaseShapes(), d.shape._mdf = !0, e = d.shape.paths.shapes, r = d.shape.paths._length, a = 0; a < r; a += 1)o.addShape(this.processPath(e[a], n));
                    d.shape.paths = d.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        var os = function() {
            var t = [
                0,
                0
            ];
            function e(o) {
                var c = this._mdf;
                this.iterateDynamicProperties(), this._mdf = this._mdf || c, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            function s(o) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o) {
                        var c;
                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                            var y, k;
                            if (c = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (y = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / c, 0), k = this.p.getValueAtTime(this.p.keyframes[0].t / c, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (y = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / c, 0), k = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / c, 0)) : (y = this.p.pv, k = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / c, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                y = [], k = [];
                                var f = this.px, P = this.py;
                                f._caching.lastFrame + f.offsetTime <= f.keyframes[0].t ? (y[0] = f.getValueAtTime((f.keyframes[0].t + .01) / c, 0), y[1] = P.getValueAtTime((P.keyframes[0].t + .01) / c, 0), k[0] = f.getValueAtTime(f.keyframes[0].t / c, 0), k[1] = P.getValueAtTime(P.keyframes[0].t / c, 0)) : f._caching.lastFrame + f.offsetTime >= f.keyframes[f.keyframes.length - 1].t ? (y[0] = f.getValueAtTime(f.keyframes[f.keyframes.length - 1].t / c, 0), y[1] = P.getValueAtTime(P.keyframes[P.keyframes.length - 1].t / c, 0), k[0] = f.getValueAtTime((f.keyframes[f.keyframes.length - 1].t - .01) / c, 0), k[1] = P.getValueAtTime((P.keyframes[P.keyframes.length - 1].t - .01) / c, 0)) : (y = [
                                    f.pv,
                                    P.pv
                                ], k[0] = f.getValueAtTime((f._caching.lastFrame + f.offsetTime - .01) / c, f.offsetTime), k[1] = P.getValueAtTime((P._caching.lastFrame + P.offsetTime - .01) / c, P.offsetTime));
                            } else k = t, y = k;
                            this.v.rotate(-Math.atan2(y[1] - k[1], y[0] - k[0]));
                        }
                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    }
                    this.frameId = this.elem.globalData.frameId;
                }
            }
            function i() {
                if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length) this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
                else return;
                if (!this.s.effectsSequence.length) this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
                else return;
                if (this.sk) {
                    if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
                    else return;
                }
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
            }
            function a() {}
            function r(o) {
                this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = !0;
            }
            function n(o, c, y) {
                if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = c, this.v = new it, this.pre = new it, this.appliedTransformations = 0, this.initDynamicPropertyContainer(y || o), c.p && c.p.s ? (this.px = I.getProp(o, c.p.x, 0, 0, this), this.py = I.getProp(o, c.p.y, 0, 0, this), c.p.z && (this.pz = I.getProp(o, c.p.z, 0, 0, this))) : this.p = I.getProp(o, c.p || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), c.rx) {
                    if (this.rx = I.getProp(o, c.rx, 0, J, this), this.ry = I.getProp(o, c.ry, 0, J, this), this.rz = I.getProp(o, c.rz, 0, J, this), c.or.k[0].ti) {
                        var k, f = c.or.k.length;
                        for(k = 0; k < f; k += 1)c.or.k[k].to = null, c.or.k[k].ti = null;
                    }
                    this.or = I.getProp(o, c.or, 1, J, this), this.or.sh = !0;
                } else this.r = I.getProp(o, c.r || {
                    k: 0
                }, 0, J, this);
                c.sk && (this.sk = I.getProp(o, c.sk, 0, J, this), this.sa = I.getProp(o, c.sa, 0, J, this)), this.a = I.getProp(o, c.a || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), this.s = I.getProp(o, c.s || {
                    k: [
                        100,
                        100,
                        100
                    ]
                }, 1, .01, this), c.o ? this.o = I.getProp(o, c.o, 0, .01, o) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
            }
            n.prototype = {
                applyToMatrix: e,
                getValue: s,
                precalculateMatrix: i,
                autoOrient: a
            }, W([
                ot
            ], n), n.prototype.addDynamicProperty = r, n.prototype._addDynamicProperty = ot.prototype.addDynamicProperty;
            function d(o, c, y) {
                return new n(o, c, y);
            }
            return {
                getTransformProperty: d
            };
        }();
        function Tt() {}
        W([
            wt
        ], Tt), Tt.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = I.getProp(t, e.c, 0, null, this), this.o = I.getProp(t, e.o, 0, null, this), this.tr = os.getTransformProperty(t, e.tr, this), this.so = I.getProp(t, e.tr.so, 0, .01, this), this.eo = I.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new it, this.rMatrix = new it, this.sMatrix = new it, this.tMatrix = new it, this.matrix = new it;
        }, Tt.prototype.applyTransforms = function(t, e, s, i, a, r) {
            var n = r ? -1 : 1, d = i.s.v[0] + (1 - i.s.v[0]) * (1 - a), o = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
            t.translate(i.p.v[0] * n * a, i.p.v[1] * n * a, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * a), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), s.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), s.scale(r ? 1 / d : d, r ? 1 / o : o), s.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
        }, Tt.prototype.init = function(t, e, s, i) {
            for(this.elem = t, this.arr = e, this.pos = s, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[s]); s > 0;)s -= 1, this._elements.unshift(e[s]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
        }, Tt.prototype.resetElements = function(t) {
            var e, s = t.length;
            for(e = 0; e < s; e += 1)t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it);
        }, Tt.prototype.cloneElements = function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e;
        }, Tt.prototype.changeGroupRender = function(t, e) {
            var s, i = t.length;
            for(s = 0; s < i; s += 1)t[s]._render = e, t[s].ty === "gr" && this.changeGroupRender(t[s].it, e);
        }, Tt.prototype.processShapes = function(t) {
            var e, s, i, a, r, n = !1;
            if (this._mdf || t) {
                var d = Math.ceil(this.c.v);
                if (this._groups.length < d) {
                    for(; this._groups.length < d;){
                        var o = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        o.it.push({
                            a: {
                                a: 0,
                                ix: 1,
                                k: [
                                    0,
                                    0
                                ]
                            },
                            nm: "Transform",
                            o: {
                                a: 0,
                                ix: 7,
                                k: 100
                            },
                            p: {
                                a: 0,
                                ix: 2,
                                k: [
                                    0,
                                    0
                                ]
                            },
                            r: {
                                a: 1,
                                ix: 6,
                                k: [
                                    {
                                        s: 0,
                                        e: 0,
                                        t: 0
                                    },
                                    {
                                        s: 0,
                                        e: 0,
                                        t: 1
                                    }
                                ]
                            },
                            s: {
                                a: 0,
                                ix: 3,
                                k: [
                                    100,
                                    100
                                ]
                            },
                            sa: {
                                a: 0,
                                ix: 5,
                                k: 0
                            },
                            sk: {
                                a: 0,
                                ix: 4,
                                k: 0
                            },
                            ty: "tr"
                        }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1;
                    }
                    this.elem.reloadShapes(), n = !0;
                }
                r = 0;
                var c;
                for(i = 0; i <= this._groups.length - 1; i += 1){
                    if (c = r < d, this._groups[i]._render = c, this.changeGroupRender(this._groups[i].it, c), !c) {
                        var y = this.elemsData[i].it, k = y[y.length - 1];
                        k.transform.op.v !== 0 ? (k.transform.op._mdf = !0, k.transform.op.v = 0) : k.transform.op._mdf = !1;
                    }
                    r += 1;
                }
                this._currentCopies = d;
                var f = this.o.v, P = f % 1, w = f > 0 ? Math.floor(f) : Math.ceil(f), _ = this.pMatrix.props, D = this.rMatrix.props, g = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var l = 0;
                if (f > 0) {
                    for(; l < w;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), l += 1;
                    P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, P, !1), l += P);
                } else if (f < 0) {
                    for(; l > w;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), l -= 1;
                    P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -P, !0), l -= P);
                }
                i = this.data.m === 1 ? 0 : this._currentCopies - 1, a = this.data.m === 1 ? 1 : -1, r = this._currentCopies;
                for(var p, m; r;){
                    if (e = this.elemsData[i].it, s = e[e.length - 1].transform.mProps.v.props, m = s.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), l !== 0) {
                        for((i !== 0 && a === 1 || i !== this._currentCopies - 1 && a === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(D[0], D[1], D[2], D[3], D[4], D[5], D[6], D[7], D[8], D[9], D[10], D[11], D[12], D[13], D[14], D[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(_[0], _[1], _[2], _[3], _[4], _[5], _[6], _[7], _[8], _[9], _[10], _[11], _[12], _[13], _[14], _[15]), p = 0; p < m; p += 1)s[p] = this.matrix.props[p];
                        this.matrix.reset();
                    } else for(this.matrix.reset(), p = 0; p < m; p += 1)s[p] = this.matrix.props[p];
                    l += 1, r -= 1, i += a;
                }
            } else for(r = this._currentCopies, i = 0, a = 1; r;)e = this.elemsData[i].it, s = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, r -= 1, i += a;
            return n;
        }, Tt.prototype.addShape = function() {};
        function Se() {}
        W([
            wt
        ], Se), Se.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.rd = I.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
        }, Se.prototype.processPath = function(t, e) {
            var s = pt.newElement();
            s.c = t.c;
            var i, a = t._length, r, n, d, o, c, y, k = 0, f, P, w, _, D, g;
            for(i = 0; i < a; i += 1)r = t.v[i], d = t.o[i], n = t.i[i], r[0] === d[0] && r[1] === d[1] && r[0] === n[0] && r[1] === n[1] ? (i === 0 || i === a - 1) && !t.c ? (s.setTripleAt(r[0], r[1], d[0], d[1], n[0], n[1], k), k += 1) : (i === 0 ? o = t.v[a - 1] : o = t.v[i - 1], c = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)), y = c ? Math.min(c / 2, e) / c : 0, D = r[0] + (o[0] - r[0]) * y, f = D, g = r[1] - (r[1] - o[1]) * y, P = g, w = f - (f - r[0]) * Ht, _ = P - (P - r[1]) * Ht, s.setTripleAt(f, P, w, _, D, g, k), k += 1, i === a - 1 ? o = t.v[0] : o = t.v[i + 1], c = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)), y = c ? Math.min(c / 2, e) / c : 0, w = r[0] + (o[0] - r[0]) * y, f = w, _ = r[1] + (o[1] - r[1]) * y, P = _, D = f - (f - r[0]) * Ht, g = P - (P - r[1]) * Ht, s.setTripleAt(f, P, w, _, D, g, k), k += 1) : (s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], k), k += 1);
            return s;
        }, Se.prototype.processShapes = function(t) {
            var e, s, i = this.shapes.length, a, r, n = this.rd.v;
            if (n !== 0) {
                var d, o;
                for(s = 0; s < i; s += 1){
                    if (d = this.shapes[s], o = d.localShapeCollection, !(!d.shape._mdf && !this._mdf && !t)) for(o.releaseShapes(), d.shape._mdf = !0, e = d.shape.paths.shapes, r = d.shape.paths._length, a = 0; a < r; a += 1)o.addShape(this.processPath(e[a], n));
                    d.shape.paths = d.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function Ge(t, e) {
            return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
        }
        function ls(t) {
            return Math.abs(t) <= 1e-5;
        }
        function Zs(t, e, s) {
            return t * (1 - s) + e * s;
        }
        function Zt(t, e, s) {
            return [
                Zs(t[0], e[0], s),
                Zs(t[1], e[1], s)
            ];
        }
        function ea(t, e, s) {
            if (t === 0) return [];
            var i = e * e - 4 * t * s;
            if (i < 0) return [];
            var a = -e / (2 * t);
            if (i === 0) return [
                a
            ];
            var r = Math.sqrt(i) / (2 * t);
            return [
                a - r,
                a + r
            ];
        }
        function Us(t, e, s, i) {
            return [
                -t + 3 * e - 3 * s + i,
                3 * t - 6 * e + 3 * s,
                -3 * t + 3 * e,
                t
            ];
        }
        function Gs(t) {
            return new $(t, t, t, t, !1);
        }
        function $(t, e, s, i, a) {
            a && de(t, e) && (e = Zt(t, i, 1 / 3)), a && de(s, i) && (s = Zt(t, i, 2 / 3));
            var r = Us(t[0], e[0], s[0], i[0]), n = Us(t[1], e[1], s[1], i[1]);
            this.a = [
                r[0],
                n[0]
            ], this.b = [
                r[1],
                n[1]
            ], this.c = [
                r[2],
                n[2]
            ], this.d = [
                r[3],
                n[3]
            ], this.points = [
                t,
                e,
                s,
                i
            ];
        }
        $.prototype.point = function(t) {
            return [
                ((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0],
                ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]
            ];
        }, $.prototype.derivative = function(t) {
            return [
                (3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0],
                (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]
            ];
        }, $.prototype.tangentAngle = function(t) {
            var e = this.derivative(t);
            return Math.atan2(e[1], e[0]);
        }, $.prototype.normalAngle = function(t) {
            var e = this.derivative(t);
            return Math.atan2(e[0], e[1]);
        }, $.prototype.inflectionPoints = function() {
            var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (ls(t)) return [];
            var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, s = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
            if (s < 0) return [];
            var i = Math.sqrt(s);
            return ls(i) ? i > 0 && i < 1 ? [
                e
            ] : [] : [
                e - i,
                e + i
            ].filter(function(a) {
                return a > 0 && a < 1;
            });
        }, $.prototype.split = function(t) {
            if (t <= 0) return [
                Gs(this.points[0]),
                this
            ];
            if (t >= 1) return [
                this,
                Gs(this.points[this.points.length - 1])
            ];
            var e = Zt(this.points[0], this.points[1], t), s = Zt(this.points[1], this.points[2], t), i = Zt(this.points[2], this.points[3], t), a = Zt(e, s, t), r = Zt(s, i, t), n = Zt(a, r, t);
            return [
                new $(this.points[0], e, a, n, !0),
                new $(n, r, i, this.points[3], !0)
            ];
        };
        function Js(t, e) {
            var s = t.points[0][e], i = t.points[t.points.length - 1][e];
            if (s > i) {
                var a = i;
                i = s, s = a;
            }
            for(var r = ea(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < r.length; n += 1)if (r[n] > 0 && r[n] < 1) {
                var d = t.point(r[n])[e];
                d < s ? s = d : d > i && (i = d);
            }
            return {
                min: s,
                max: i
            };
        }
        $.prototype.bounds = function() {
            return {
                x: Js(this, 0),
                y: Js(this, 1)
            };
        }, $.prototype.boundingBox = function() {
            var t = this.bounds();
            return {
                left: t.x.min,
                right: t.x.max,
                top: t.y.min,
                bottom: t.y.max,
                width: t.x.max - t.x.min,
                height: t.y.max - t.y.min,
                cx: (t.x.max + t.x.min) / 2,
                cy: (t.y.max + t.y.min) / 2
            };
        };
        function Je(t, e, s) {
            var i = t.boundingBox();
            return {
                cx: i.cx,
                cy: i.cy,
                width: i.width,
                height: i.height,
                bez: t,
                t: (e + s) / 2,
                t1: e,
                t2: s
            };
        }
        function Ys(t) {
            var e = t.bez.split(.5);
            return [
                Je(e[0], t.t1, t.t),
                Je(e[1], t.t, t.t2)
            ];
        }
        function sa(t, e) {
            return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
        }
        function De(t, e, s, i, a, r) {
            if (sa(t, e)) {
                if (s >= r || t.width <= i && t.height <= i && e.width <= i && e.height <= i) {
                    a.push([
                        t.t,
                        e.t
                    ]);
                    return;
                }
                var n = Ys(t), d = Ys(e);
                De(n[0], d[0], s + 1, i, a, r), De(n[0], d[1], s + 1, i, a, r), De(n[1], d[0], s + 1, i, a, r), De(n[1], d[1], s + 1, i, a, r);
            }
        }
        $.prototype.intersections = function(t, e, s) {
            e === void 0 && (e = 2), s === void 0 && (s = 7);
            var i = [];
            return De(Je(this, 0, 1), Je(t, 0, 1), 0, e, i, s), i;
        }, $.shapeSegment = function(t, e) {
            var s = (e + 1) % t.length();
            return new $(t.v[e], t.o[e], t.i[s], t.v[s], !0);
        }, $.shapeSegmentInverted = function(t, e) {
            var s = (e + 1) % t.length();
            return new $(t.v[s], t.i[s], t.o[e], t.v[e], !0);
        };
        function ps(t, e) {
            return [
                t[1] * e[2] - t[2] * e[1],
                t[2] * e[0] - t[0] * e[2],
                t[0] * e[1] - t[1] * e[0]
            ];
        }
        function Ye(t, e, s, i) {
            var a = [
                t[0],
                t[1],
                1
            ], r = [
                e[0],
                e[1],
                1
            ], n = [
                s[0],
                s[1],
                1
            ], d = [
                i[0],
                i[1],
                1
            ], o = ps(ps(a, r), ps(n, d));
            return ls(o[2]) ? null : [
                o[0] / o[2],
                o[1] / o[2]
            ];
        }
        function fe(t, e, s) {
            return [
                t[0] + Math.cos(e) * s,
                t[1] - Math.sin(e) * s
            ];
        }
        function fs(t, e) {
            return Math.hypot(t[0] - e[0], t[1] - e[1]);
        }
        function de(t, e) {
            return Ge(t[0], e[0]) && Ge(t[1], e[1]);
        }
        function Ce() {}
        W([
            wt
        ], Ce), Ce.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amplitude = I.getProp(t, e.s, 0, null, this), this.frequency = I.getProp(t, e.r, 0, null, this), this.pointsType = I.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
        };
        function Qs(t, e, s, i, a, r, n) {
            var d = s - Math.PI / 2, o = s + Math.PI / 2, c = e[0] + Math.cos(s) * i * a, y = e[1] - Math.sin(s) * i * a;
            t.setTripleAt(c, y, c + Math.cos(d) * r, y - Math.sin(d) * r, c + Math.cos(o) * n, y - Math.sin(o) * n, t.length());
        }
        function ia(t, e) {
            var s = [
                e[0] - t[0],
                e[1] - t[1]
            ], i = -Math.PI * .5, a = [
                Math.cos(i) * s[0] - Math.sin(i) * s[1],
                Math.sin(i) * s[0] + Math.cos(i) * s[1]
            ];
            return a;
        }
        function aa(t, e) {
            var s = e === 0 ? t.length() - 1 : e - 1, i = (e + 1) % t.length(), a = t.v[s], r = t.v[i], n = ia(a, r);
            return Math.atan2(0, 1) - Math.atan2(n[1], n[0]);
        }
        function $s(t, e, s, i, a, r, n) {
            var d = aa(e, s), o = e.v[s % e._length], c = e.v[s === 0 ? e._length - 1 : s - 1], y = e.v[(s + 1) % e._length], k = r === 2 ? Math.sqrt(Math.pow(o[0] - c[0], 2) + Math.pow(o[1] - c[1], 2)) : 0, f = r === 2 ? Math.sqrt(Math.pow(o[0] - y[0], 2) + Math.pow(o[1] - y[1], 2)) : 0;
            Qs(t, e.v[s % e._length], d, n, i, f / ((a + 1) * 2), k / ((a + 1) * 2));
        }
        function ra(t, e, s, i, a, r) {
            for(var n = 0; n < i; n += 1){
                var d = (n + 1) / (i + 1), o = a === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, c = e.normalAngle(d), y = e.point(d);
                Qs(t, y, c, r, s, o / ((i + 1) * 2), o / ((i + 1) * 2)), r = -r;
            }
            return r;
        }
        Ce.prototype.processPath = function(t, e, s, i) {
            var a = t._length, r = pt.newElement();
            if (r.c = t.c, t.c || (a -= 1), a === 0) return r;
            var n = -1, d = $.shapeSegment(t, 0);
            $s(r, t, 0, e, s, i, n);
            for(var o = 0; o < a; o += 1)n = ra(r, d, e, s, i, -n), o === a - 1 && !t.c ? d = null : d = $.shapeSegment(t, (o + 1) % a), $s(r, t, o + 1, e, s, i, n);
            return r;
        }, Ce.prototype.processShapes = function(t) {
            var e, s, i = this.shapes.length, a, r, n = this.amplitude.v, d = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
            if (n !== 0) {
                var c, y;
                for(s = 0; s < i; s += 1){
                    if (c = this.shapes[s], y = c.localShapeCollection, !(!c.shape._mdf && !this._mdf && !t)) for(y.releaseShapes(), c.shape._mdf = !0, e = c.shape.paths.shapes, r = c.shape.paths._length, a = 0; a < r; a += 1)y.addShape(this.processPath(e[a], n, d, o));
                    c.shape.paths = c.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function ds(t, e, s) {
            var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
            return [
                fe(t, i, s),
                fe(e, i, s)
            ];
        }
        function me(t, e) {
            var s, i, a, r, n, d, o;
            o = ds(t.points[0], t.points[1], e), s = o[0], i = o[1], o = ds(t.points[1], t.points[2], e), a = o[0], r = o[1], o = ds(t.points[2], t.points[3], e), n = o[0], d = o[1];
            var c = Ye(s, i, a, r);
            c === null && (c = i);
            var y = Ye(n, d, a, r);
            return y === null && (y = n), new $(s, c, y, d);
        }
        function Ks(t, e, s, i, a) {
            var r = e.points[3], n = s.points[0];
            if (i === 3 || de(r, n)) return r;
            if (i === 2) {
                var d = -e.tangentAngle(1), o = -s.tangentAngle(0) + Math.PI, c = Ye(r, fe(r, d + Math.PI / 2, 100), n, fe(n, d + Math.PI / 2, 100)), y = c ? fs(c, r) : fs(r, n) / 2, k = fe(r, d, 2 * y * Ht);
                return t.setXYAt(k[0], k[1], "o", t.length() - 1), k = fe(n, o, 2 * y * Ht), t.setTripleAt(n[0], n[1], n[0], n[1], k[0], k[1], t.length()), n;
            }
            var f = de(r, e.points[2]) ? e.points[0] : e.points[2], P = de(n, s.points[1]) ? s.points[3] : s.points[1], w = Ye(f, r, n, P);
            return w && fs(w, r) < a ? (t.setTripleAt(w[0], w[1], w[0], w[1], w[0], w[1], t.length()), w) : r;
        }
        function ti(t, e) {
            var s = t.intersections(e);
            return s.length && Ge(s[0][0], 1) && s.shift(), s.length ? s[0] : null;
        }
        function ei(t, e) {
            var s = t.slice(), i = e.slice(), a = ti(t[t.length - 1], e[0]);
            return a && (s[t.length - 1] = t[t.length - 1].split(a[0])[0], i[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = ti(t[0], e[e.length - 1]), a) ? [
                [
                    t[0].split(a[0])[0]
                ],
                [
                    e[e.length - 1].split(a[1])[1]
                ]
            ] : [
                s,
                i
            ];
        }
        function na(t) {
            for(var e, s = 1; s < t.length; s += 1)e = ei(t[s - 1], t[s]), t[s - 1] = e[0], t[s] = e[1];
            return t.length > 1 && (e = ei(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
        }
        function si(t, e) {
            var s = t.inflectionPoints(), i, a, r, n;
            if (s.length === 0) return [
                me(t, e)
            ];
            if (s.length === 1 || Ge(s[1], 1)) return r = t.split(s[0]), i = r[0], a = r[1], [
                me(i, e),
                me(a, e)
            ];
            r = t.split(s[0]), i = r[0];
            var d = (s[1] - s[0]) / (1 - s[0]);
            return r = r[1].split(d), n = r[0], a = r[1], [
                me(i, e),
                me(n, e),
                me(a, e)
            ];
        }
        function Me() {}
        W([
            wt
        ], Me), Me.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = I.getProp(t, e.a, 0, null, this), this.miterLimit = I.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
        }, Me.prototype.processPath = function(t, e, s, i) {
            var a = pt.newElement();
            a.c = t.c;
            var r = t.length();
            t.c || (r -= 1);
            var n, d, o, c = [];
            for(n = 0; n < r; n += 1)o = $.shapeSegment(t, n), c.push(si(o, e));
            if (!t.c) for(n = r - 1; n >= 0; n -= 1)o = $.shapeSegmentInverted(t, n), c.push(si(o, e));
            c = na(c);
            var y = null, k = null;
            for(n = 0; n < c.length; n += 1){
                var f = c[n];
                for(k && (y = Ks(a, k, f[0], s, i)), k = f[f.length - 1], d = 0; d < f.length; d += 1)o = f[d], y && de(o.points[0], y) ? a.setXYAt(o.points[1][0], o.points[1][1], "o", a.length() - 1) : a.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], a.length()), a.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], a.length()), y = o.points[3];
            }
            return c.length && Ks(a, k, c[0][0], s, i), a;
        }, Me.prototype.processShapes = function(t) {
            var e, s, i = this.shapes.length, a, r, n = this.amount.v, d = this.miterLimit.v, o = this.lineJoin;
            if (n !== 0) {
                var c, y;
                for(s = 0; s < i; s += 1){
                    if (c = this.shapes[s], y = c.localShapeCollection, !(!c.shape._mdf && !this._mdf && !t)) for(y.releaseShapes(), c.shape._mdf = !0, e = c.shape.paths.shapes, r = c.shape.paths._length, a = 0; a < r; a += 1)y.addShape(this.processPath(e[a], n, o, d));
                    c.shape.paths = c.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function ii(t) {
            for(var e = t.fStyle ? t.fStyle.split(" ") : [], s = "normal", i = "normal", a = e.length, r, n = 0; n < a; n += 1)switch(r = e[n].toLowerCase(), r){
                case "italic":
                    i = "italic";
                    break;
                case "bold":
                    s = "700";
                    break;
                case "black":
                    s = "900";
                    break;
                case "medium":
                    s = "500";
                    break;
                case "regular":
                case "normal":
                    s = "400";
                    break;
                case "light":
                case "thin":
                    s = "200";
                    break;
            }
            return {
                style: i,
                weight: t.fWeight || s
            };
        }
        var ae = function() {
            var t = 5e3, e = {
                w: 0,
                size: 0,
                shapes: [],
                data: {
                    shapes: []
                }
            }, s = [];
            s = s.concat([
                2304,
                2305,
                2306,
                2307,
                2362,
                2363,
                2364,
                2364,
                2366,
                2367,
                2368,
                2369,
                2370,
                2371,
                2372,
                2373,
                2374,
                2375,
                2376,
                2377,
                2378,
                2379,
                2380,
                2381,
                2382,
                2383,
                2387,
                2388,
                2389,
                2390,
                2391,
                2402,
                2403
            ]);
            var i = 127988, a = 917631, r = 917601, n = 917626, d = 65039, o = 8205, c = 127462, y = 127487, k = [
                "d83cdffb",
                "d83cdffc",
                "d83cdffd",
                "d83cdffe",
                "d83cdfff"
            ];
            function f(u) {
                var b = u.split(","), h, v = b.length, M = [];
                for(h = 0; h < v; h += 1)b[h] !== "sans-serif" && b[h] !== "monospace" && M.push(b[h]);
                return M.join(",");
            }
            function P(u, b) {
                var h = nt("span");
                h.setAttribute("aria-hidden", !0), h.style.fontFamily = b;
                var v = nt("span");
                v.innerText = "giItT1WQy@!-/#", h.style.position = "absolute", h.style.left = "-10000px", h.style.top = "-10000px", h.style.fontSize = "300px", h.style.fontVariant = "normal", h.style.fontStyle = "normal", h.style.fontWeight = "normal", h.style.letterSpacing = "0", h.appendChild(v), document.body.appendChild(h);
                var M = v.offsetWidth;
                return v.style.fontFamily = f(u) + ", " + b, {
                    node: v,
                    w: M,
                    parent: h
                };
            }
            function w() {
                var u, b = this.fonts.length, h, v, M = b;
                for(u = 0; u < b; u += 1)this.fonts[u].loaded ? M -= 1 : this.fonts[u].fOrigin === "n" || this.fonts[u].origin === 0 ? this.fonts[u].loaded = !0 : (h = this.fonts[u].monoCase.node, v = this.fonts[u].monoCase.w, h.offsetWidth !== v ? (M -= 1, this.fonts[u].loaded = !0) : (h = this.fonts[u].sansCase.node, v = this.fonts[u].sansCase.w, h.offsetWidth !== v && (M -= 1, this.fonts[u].loaded = !0)), this.fonts[u].loaded && (this.fonts[u].sansCase.parent.parentNode.removeChild(this.fonts[u].sansCase.parent), this.fonts[u].monoCase.parent.parentNode.removeChild(this.fonts[u].monoCase.parent)));
                M !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            }
            function _(u, b) {
                var h = document.body && b ? "svg" : "canvas", v, M = ii(u);
                if (h === "svg") {
                    var S = R("text");
                    S.style.fontSize = "100px", S.setAttribute("font-family", u.fFamily), S.setAttribute("font-style", M.style), S.setAttribute("font-weight", M.weight), S.textContent = "1", u.fClass ? (S.style.fontFamily = "inherit", S.setAttribute("class", u.fClass)) : S.style.fontFamily = u.fFamily, b.appendChild(S), v = S;
                } else {
                    var H = new OffscreenCanvas(500, 500).getContext("2d");
                    H.font = M.style + " " + M.weight + " 100px " + u.fFamily, v = H;
                }
                function z(Z) {
                    return h === "svg" ? (v.textContent = Z, v.getComputedTextLength()) : v.measureText(Z).width;
                }
                return {
                    measureText: z
                };
            }
            function D(u, b) {
                if (!u) {
                    this.isLoaded = !0;
                    return;
                }
                if (this.chars) {
                    this.isLoaded = !0, this.fonts = u.list;
                    return;
                }
                if (!document.body) {
                    this.isLoaded = !0, u.list.forEach(function(gt) {
                        gt.helper = _(gt), gt.cache = {};
                    }), this.fonts = u.list;
                    return;
                }
                var h = u.list, v, M = h.length, S = M;
                for(v = 0; v < M; v += 1){
                    var H = !0, z, Z;
                    if (h[v].loaded = !1, h[v].monoCase = P(h[v].fFamily, "monospace"), h[v].sansCase = P(h[v].fFamily, "sans-serif"), !h[v].fPath) h[v].loaded = !0, S -= 1;
                    else if (h[v].fOrigin === "p" || h[v].origin === 3) {
                        if (z = document.querySelectorAll('style[f-forigin="p"][f-family="' + h[v].fFamily + '"], style[f-origin="3"][f-family="' + h[v].fFamily + '"]'), z.length > 0 && (H = !1), H) {
                            var X = nt("style");
                            X.setAttribute("f-forigin", h[v].fOrigin), X.setAttribute("f-origin", h[v].origin), X.setAttribute("f-family", h[v].fFamily), X.type = "text/css", X.innerText = "@font-face {font-family: " + h[v].fFamily + "; font-style: normal; src: url('" + h[v].fPath + "');}", b.appendChild(X);
                        }
                    } else if (h[v].fOrigin === "g" || h[v].origin === 1) {
                        for(z = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), Z = 0; Z < z.length; Z += 1)z[Z].href.indexOf(h[v].fPath) !== -1 && (H = !1);
                        if (H) {
                            var tt = nt("link");
                            tt.setAttribute("f-forigin", h[v].fOrigin), tt.setAttribute("f-origin", h[v].origin), tt.type = "text/css", tt.rel = "stylesheet", tt.href = h[v].fPath, document.body.appendChild(tt);
                        }
                    } else if (h[v].fOrigin === "t" || h[v].origin === 2) {
                        for(z = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), Z = 0; Z < z.length; Z += 1)h[v].fPath === z[Z].src && (H = !1);
                        if (H) {
                            var et = nt("link");
                            et.setAttribute("f-forigin", h[v].fOrigin), et.setAttribute("f-origin", h[v].origin), et.setAttribute("rel", "stylesheet"), et.setAttribute("href", h[v].fPath), b.appendChild(et);
                        }
                    }
                    h[v].helper = _(h[v], b), h[v].cache = {}, this.fonts.push(h[v]);
                }
                S === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
            function g(u) {
                if (u) {
                    this.chars || (this.chars = []);
                    var b, h = u.length, v, M = this.chars.length, S;
                    for(b = 0; b < h; b += 1){
                        for(v = 0, S = !1; v < M;)this.chars[v].style === u[b].style && this.chars[v].fFamily === u[b].fFamily && this.chars[v].ch === u[b].ch && (S = !0), v += 1;
                        S || (this.chars.push(u[b]), M += 1);
                    }
                }
            }
            function l(u, b, h) {
                for(var v = 0, M = this.chars.length; v < M;){
                    if (this.chars[v].ch === u && this.chars[v].style === b && this.chars[v].fFamily === h) return this.chars[v];
                    v += 1;
                }
                return (typeof u == "string" && u.charCodeAt(0) !== 13 || !u) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", u, b, h)), e;
            }
            function p(u, b, h) {
                var v = this.getFontByName(b), M = u;
                if (!v.cache[M]) {
                    var S = v.helper;
                    if (u === " ") {
                        var H = S.measureText("|" + u + "|"), z = S.measureText("||");
                        v.cache[M] = (H - z) / 100;
                    } else v.cache[M] = S.measureText(u) / 100;
                }
                return v.cache[M] * h;
            }
            function m(u) {
                for(var b = 0, h = this.fonts.length; b < h;){
                    if (this.fonts[b].fName === u) return this.fonts[b];
                    b += 1;
                }
                return this.fonts[0];
            }
            function x(u) {
                var b = 0, h = u.charCodeAt(0);
                if (h >= 55296 && h <= 56319) {
                    var v = u.charCodeAt(1);
                    v >= 56320 && v <= 57343 && (b = (h - 55296) * 1024 + v - 56320 + 65536);
                }
                return b;
            }
            function C(u, b) {
                var h = u.toString(16) + b.toString(16);
                return k.indexOf(h) !== -1;
            }
            function E(u) {
                return u === o;
            }
            function T(u) {
                return u === d;
            }
            function L(u) {
                var b = x(u);
                return b >= c && b <= y;
            }
            function N(u) {
                return L(u.substr(0, 2)) && L(u.substr(2, 2));
            }
            function O(u) {
                return s.indexOf(u) !== -1;
            }
            function B(u, b) {
                var h = x(u.substr(b, 2));
                if (h !== i) return !1;
                var v = 0;
                for(b += 2; v < 5;){
                    if (h = x(u.substr(b, 2)), h < r || h > n) return !1;
                    v += 1, b += 2;
                }
                return x(u.substr(b, 2)) === a;
            }
            function j() {
                this.isLoaded = !0;
            }
            var A = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
            };
            A.isModifier = C, A.isZeroWidthJoiner = E, A.isFlagEmoji = N, A.isRegionalCode = L, A.isCombinedCharacter = O, A.isRegionalFlag = B, A.isVariationSelector = T, A.BLACK_FLAG_CODE_POINT = i;
            var F = {
                addChars: g,
                addFonts: D,
                getCharData: l,
                getFontByName: m,
                measureText: p,
                checkLoadedFonts: w,
                setIsLoaded: j
            };
            return A.prototype = F, A;
        }();
        function ai(t) {
            this.animationData = t;
        }
        ai.prototype.getProp = function(t) {
            return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
        };
        function ha(t) {
            return new ai(t);
        }
        function ue() {}
        ue.prototype = {
            initRenderable: function() {
                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
            },
            addRenderableComponent: function(t) {
                this.renderableComponents.indexOf(t) === -1 && this.renderableComponents.push(t);
            },
            removeRenderableComponent: function(t) {
                this.renderableComponents.indexOf(t) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
            },
            prepareRenderableFrame: function(t) {
                this.checkLayerLimits(t);
            },
            checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
            },
            checkLayerLimits: function(t) {
                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
            },
            renderRenderable: function() {
                var t, e = this.renderableComponents.length;
                for(t = 0; t < e; t += 1)this.renderableComponents[t].renderFrame(this._isFirstFrame);
            },
            sourceRectAtTime: function() {
                return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                };
            },
            getLayerSize: function() {
                return this.data.ty === 5 ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {
                    w: this.data.width,
                    h: this.data.height
                };
            }
        };
        var ms = function() {
            var t = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            };
            return function(e) {
                return t[e] || "";
            };
        }();
        function oa(t, e, s) {
            this.p = I.getProp(e, t.v, 0, 0, s);
        }
        function la(t, e, s) {
            this.p = I.getProp(e, t.v, 0, 0, s);
        }
        function pa(t, e, s) {
            this.p = I.getProp(e, t.v, 1, 0, s);
        }
        function fa(t, e, s) {
            this.p = I.getProp(e, t.v, 1, 0, s);
        }
        function da(t, e, s) {
            this.p = I.getProp(e, t.v, 0, 0, s);
        }
        function ma(t, e, s) {
            this.p = I.getProp(e, t.v, 0, 0, s);
        }
        function ua(t, e, s) {
            this.p = I.getProp(e, t.v, 0, 0, s);
        }
        function ca() {
            this.p = {};
        }
        function ri(t, e) {
            var s = t.ef || [];
            this.effectElements = [];
            var i, a = s.length, r;
            for(i = 0; i < a; i += 1)r = new Ee(s[i], e), this.effectElements.push(r);
        }
        function Ee(t, e) {
            this.init(t, e);
        }
        W([
            ot
        ], Ee), Ee.prototype.getValue = Ee.prototype.iterateDynamicProperties, Ee.prototype.init = function(t, e) {
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var s, i = this.data.ef.length, a, r = this.data.ef;
            for(s = 0; s < i; s += 1){
                switch(a = null, r[s].ty){
                    case 0:
                        a = new oa(r[s], e, this);
                        break;
                    case 1:
                        a = new la(r[s], e, this);
                        break;
                    case 2:
                        a = new pa(r[s], e, this);
                        break;
                    case 3:
                        a = new fa(r[s], e, this);
                        break;
                    case 4:
                    case 7:
                        a = new ua(r[s], e, this);
                        break;
                    case 10:
                        a = new da(r[s], e, this);
                        break;
                    case 11:
                        a = new ma(r[s], e, this);
                        break;
                    case 5:
                        a = new ri(r[s], e);
                        break;
                    default:
                        a = new ca(r[s]);
                        break;
                }
                a && this.effectElements.push(a);
            }
        };
        function xt() {}
        xt.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask) return !1;
                for(var t = 0, e = this.data.masksProperties.length; t < e;){
                    if (this.data.masksProperties[t].mode !== "n" && this.data.masksProperties[t].cl !== !1) return !0;
                    t += 1;
                }
                return !1;
            },
            initExpressions: function() {},
            setBlendMode: function() {
                var t = ms(this.data.bm), e = this.baseElement || this.layerElement;
                e.style["mix-blend-mode"] = t;
            },
            initBaseData: function(t, e, s) {
                this.globalData = e, this.comp = s, this.data = t, this.layerId = ut(), this.data.sr || (this.data.sr = 1), this.effectsManager = new ri(this.data, this, this.dynamicProperties);
            },
            getType: function() {
                return this.type;
            },
            sourceRectAtTime: function() {}
        };
        function _t() {}
        _t.prototype = {
            initFrame: function() {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
            },
            prepareProperties: function(t, e) {
                var s, i = this.dynamicProperties.length;
                for(s = 0; s < i; s += 1)(e || this._isParent && this.dynamicProperties[s].propType === "transform") && (this.dynamicProperties[s].getValue(), this.dynamicProperties[s]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
            },
            addDynamicProperty: function(t) {
                this.dynamicProperties.indexOf(t) === -1 && this.dynamicProperties.push(t);
            }
        };
        function Ut(t, e, s) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, s);
        }
        Ut.prototype.prepareFrame = function() {}, W([
            ue,
            xt,
            _t
        ], Ut), Ut.prototype.getBaseElement = function() {
            return null;
        }, Ut.prototype.renderFrame = function() {}, Ut.prototype.destroy = function() {}, Ut.prototype.initExpressions = function() {}, Ut.prototype.getFootageData = function() {
            return this.footageData;
        };
        function ct(t, e, s) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, s), this._isPlaying = !1, this._canPlay = !1;
            var i = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? I.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }, this.lv = I.getProp(this, t.au && t.au.lv ? t.au.lv : {
                k: [
                    100
                ]
            }, 1, .01, this);
        }
        ct.prototype.prepareFrame = function(t) {
            if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
            else {
                var e = this.tm.v;
                this._currentTime = e;
            }
            this._volume = this.lv.v[0];
            var s = this._volume * this._volumeMultiplier;
            this._previousVolume !== s && (this._previousVolume = s, this.audio.volume(s));
        }, W([
            ue,
            xt,
            _t
        ], ct), ct.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
        }, ct.prototype.show = function() {}, ct.prototype.hide = function() {
            this.audio.pause(), this._isPlaying = !1;
        }, ct.prototype.pause = function() {
            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
        }, ct.prototype.resume = function() {
            this._canPlay = !0;
        }, ct.prototype.setRate = function(t) {
            this.audio.rate(t);
        }, ct.prototype.volume = function(t) {
            this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
        }, ct.prototype.getBaseElement = function() {
            return null;
        }, ct.prototype.destroy = function() {}, ct.prototype.sourceRectAtTime = function() {}, ct.prototype.initExpressions = function() {};
        function at() {}
        at.prototype.checkLayers = function(t) {
            var e, s = this.layers.length, i;
            for(this.completeLayers = !0, e = s - 1; e >= 0; e -= 1)this.elements[e] || (i = this.layers[e], i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
            this.checkPendingElements();
        }, at.prototype.createItem = function(t) {
            switch(t.ty){
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t);
                default:
                    return this.createNull(t);
            }
        }, at.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.");
        }, at.prototype.createAudio = function(t) {
            return new ct(t, this.globalData, this);
        }, at.prototype.createFootage = function(t) {
            return new Ut(t, this.globalData, this);
        }, at.prototype.buildAllItems = function() {
            var t, e = this.layers.length;
            for(t = 0; t < e; t += 1)this.buildItem(t);
            this.checkPendingElements();
        }, at.prototype.includeLayers = function(t) {
            this.completeLayers = !1;
            var e, s = t.length, i, a = this.layers.length;
            for(e = 0; e < s; e += 1)for(i = 0; i < a;){
                if (this.layers[i].id === t[e].id) {
                    this.layers[i] = t[e];
                    break;
                }
                i += 1;
            }
        }, at.prototype.setProjectInterface = function(t) {
            this.globalData.projectInterface = t;
        }, at.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems();
        }, at.prototype.buildElementParenting = function(t, e, s) {
            for(var i = this.elements, a = this.layers, r = 0, n = a.length; r < n;)a[r].ind == e && (!i[r] || i[r] === !0 ? (this.buildItem(r), this.addPendingElement(t)) : (s.push(i[r]), i[r].setAsParent(), a[r].parent !== void 0 ? this.buildElementParenting(t, a[r].parent, s) : t.setHierarchy(s))), r += 1;
        }, at.prototype.addPendingElement = function(t) {
            this.pendingElements.push(t);
        }, at.prototype.searchExtraCompositions = function(t) {
            var e, s = t.length;
            for(e = 0; e < s; e += 1)if (t[e].xt) {
                var i = this.createComp(t[e]);
                i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
            }
        }, at.prototype.getElementById = function(t) {
            var e, s = this.elements.length;
            for(e = 0; e < s; e += 1)if (this.elements[e].data.ind === t) return this.elements[e];
            return null;
        }, at.prototype.getElementByPath = function(t) {
            var e = t.shift(), s;
            if (typeof e == "number") s = this.elements[e];
            else {
                var i, a = this.elements.length;
                for(i = 0; i < a; i += 1)if (this.elements[i].data.nm === e) {
                    s = this.elements[i];
                    break;
                }
            }
            return t.length === 0 ? s : s.getElementByPath(t);
        }, at.prototype.setupGlobalData = function(t, e) {
            this.globalData.fontManager = new ae, this.globalData.slotManager = ha(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                w: t.w,
                h: t.h
            };
        };
        var ga = {
            TRANSFORM_EFFECT: "transformEFfect"
        };
        function At() {}
        At.prototype = {
            initTransform: function() {
                var t = new it;
                this.finalTransform = {
                    mProp: this.data.ks ? os.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _localMatMdf: !1,
                    _opMdf: !1,
                    mat: t,
                    localMat: t,
                    localOpacity: 1
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
            },
            renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var t, e = this.finalTransform.mat, s = 0, i = this.hierarchy.length;
                    if (!this.finalTransform._matMdf) for(; s < i;){
                        if (this.hierarchy[s].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = !0;
                            break;
                        }
                        s += 1;
                    }
                    if (this.finalTransform._matMdf) for(t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), s = 0; s < i; s += 1)e.multiply(this.hierarchy[s].finalTransform.mProp.v);
                }
                this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
            },
            renderLocalTransform: function() {
                if (this.localTransforms) {
                    var t = 0, e = this.localTransforms.length;
                    if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for(; t < e;)this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
                    if (this.finalTransform._localMatMdf) {
                        var s = this.finalTransform.localMat;
                        for(this.localTransforms[0].matrix.clone(s), t = 1; t < e; t += 1){
                            var i = this.localTransforms[t].matrix;
                            s.multiply(i);
                        }
                        s.multiply(this.finalTransform.mat);
                    }
                    if (this.finalTransform._opMdf) {
                        var a = this.finalTransform.localOpacity;
                        for(t = 0; t < e; t += 1)a *= this.localTransforms[t].opacity * .01;
                        this.finalTransform.localOpacity = a;
                    }
                }
            },
            searchEffectTransforms: function() {
                if (this.renderableEffectsManager) {
                    var t = this.renderableEffectsManager.getEffects(ga.TRANSFORM_EFFECT);
                    if (t.length) {
                        this.localTransforms = [], this.finalTransform.localMat = new it;
                        var e = 0, s = t.length;
                        for(e = 0; e < s; e += 1)this.localTransforms.push(t[e]);
                    }
                }
            },
            globalToLocal: function(t) {
                var e = [];
                e.push(this.finalTransform);
                for(var s = !0, i = this.comp; s;)i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : s = !1;
                var a, r = e.length, n;
                for(a = 0; a < r; a += 1)n = e[a].mat.applyToPointArray(0, 0, 0), t = [
                    t[0] - n[0],
                    t[1] - n[1],
                    0
                ];
                return t;
            },
            mHelper: new it
        };
        function Gt(t, e, s) {
            this.data = t, this.element = e, this.globalData = s, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var i = this.globalData.defs, a, r = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = K(r), this.solidPath = "";
            var n, d = this.masksProperties, o = 0, c = [], y, k, f = ut(), P, w, _, D, g = "clipPath", l = "clip-path";
            for(a = 0; a < r; a += 1)if ((d[a].mode !== "a" && d[a].mode !== "n" || d[a].inv || d[a].o.k !== 100 || d[a].o.x) && (g = "mask", l = "mask"), (d[a].mode === "s" || d[a].mode === "i") && o === 0 ? (P = R("rect"), P.setAttribute("fill", "#ffffff"), P.setAttribute("width", this.element.comp.data.w || 0), P.setAttribute("height", this.element.comp.data.h || 0), c.push(P)) : P = null, n = R("path"), d[a].mode === "n") this.viewData[a] = {
                op: I.getProp(this.element, d[a].o, 0, .01, this.element),
                prop: Ze.getShapeProp(this.element, d[a], 3),
                elem: n,
                lastPath: ""
            }, i.appendChild(n);
            else {
                o += 1, n.setAttribute("fill", d[a].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero");
                var p;
                if (d[a].x.k !== 0 ? (g = "mask", l = "mask", D = I.getProp(this.element, d[a].x, 0, null, this.element), p = ut(), w = R("filter"), w.setAttribute("id", p), _ = R("feMorphology"), _.setAttribute("operator", "erode"), _.setAttribute("in", "SourceGraphic"), _.setAttribute("radius", "0"), w.appendChild(_), i.appendChild(w), n.setAttribute("stroke", d[a].mode === "s" ? "#000000" : "#ffffff")) : (_ = null, D = null), this.storedData[a] = {
                    elem: n,
                    x: D,
                    expan: _,
                    lastPath: "",
                    lastOperator: "",
                    filterId: p,
                    lastRadius: 0
                }, d[a].mode === "i") {
                    k = c.length;
                    var m = R("g");
                    for(y = 0; y < k; y += 1)m.appendChild(c[y]);
                    var x = R("mask");
                    x.setAttribute("mask-type", "alpha"), x.setAttribute("id", f + "_" + o), x.appendChild(n), i.appendChild(x), m.setAttribute("mask", "url(" + bt() + "#" + f + "_" + o + ")"), c.length = 0, c.push(m);
                } else c.push(n);
                d[a].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[a] = {
                    elem: n,
                    lastPath: "",
                    op: I.getProp(this.element, d[a].o, 0, .01, this.element),
                    prop: Ze.getShapeProp(this.element, d[a], 3),
                    invRect: P
                }, this.viewData[a].prop.k || this.drawPath(d[a], this.viewData[a].prop.v, this.viewData[a]);
            }
            for(this.maskElement = R(g), r = c.length, a = 0; a < r; a += 1)this.maskElement.appendChild(c[a]);
            o > 0 && (this.maskElement.setAttribute("id", f), this.element.maskedElement.setAttribute(l, "url(" + bt() + "#" + f + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
        }
        Gt.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop;
        }, Gt.prototype.renderFrame = function(t) {
            var e = this.element.finalTransform.mat, s, i = this.masksProperties.length;
            for(s = 0; s < i; s += 1)if ((this.viewData[s].prop._mdf || t) && this.drawPath(this.masksProperties[s], this.viewData[s].prop.v, this.viewData[s]), (this.viewData[s].op._mdf || t) && this.viewData[s].elem.setAttribute("fill-opacity", this.viewData[s].op.v), this.masksProperties[s].mode !== "n" && (this.viewData[s].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[s].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[s].x && (this.storedData[s].x._mdf || t))) {
                var a = this.storedData[s].expan;
                this.storedData[s].x.v < 0 ? (this.storedData[s].lastOperator !== "erode" && (this.storedData[s].lastOperator = "erode", this.storedData[s].elem.setAttribute("filter", "url(" + bt() + "#" + this.storedData[s].filterId + ")")), a.setAttribute("radius", -this.storedData[s].x.v)) : (this.storedData[s].lastOperator !== "dilate" && (this.storedData[s].lastOperator = "dilate", this.storedData[s].elem.setAttribute("filter", null)), this.storedData[s].elem.setAttribute("stroke-width", this.storedData[s].x.v * 2));
            }
        }, Gt.prototype.getMaskelement = function() {
            return this.maskElement;
        }, Gt.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
        }, Gt.prototype.drawPath = function(t, e, s) {
            var i = " M" + e.v[0][0] + "," + e.v[0][1], a, r;
            for(r = e._length, a = 1; a < r; a += 1)i += " C" + e.o[a - 1][0] + "," + e.o[a - 1][1] + " " + e.i[a][0] + "," + e.i[a][1] + " " + e.v[a][0] + "," + e.v[a][1];
            if (e.c && r > 1 && (i += " C" + e.o[a - 1][0] + "," + e.o[a - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), s.lastPath !== i) {
                var n = "";
                s.elem && (e.c && (n = t.inv ? this.solidPath + i : i), s.elem.setAttribute("d", n)), s.lastPath = i;
            }
        }, Gt.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
        };
        var Te = function() {
            var t = {};
            t.createFilter = e, t.createAlphaToLuminanceFilter = s;
            function e(i, a) {
                var r = R("filter");
                return r.setAttribute("id", i), a !== !0 && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r;
            }
            function s() {
                var i = R("feColorMatrix");
                return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i;
            }
            return t;
        }(), ni = function() {
            var t = {
                maskType: !0,
                svgLumaHidden: !0,
                offscreenCanvas: typeof OffscreenCanvas < "u"
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t;
        }(), us = {}, hi = "filter_result_";
        function cs(t) {
            var e, s = "SourceGraphic", i = t.data.ef ? t.data.ef.length : 0, a = ut(), r = Te.createFilter(a, !0), n = 0;
            this.filters = [];
            var d;
            for(e = 0; e < i; e += 1){
                d = null;
                var o = t.data.ef[e].ty;
                if (us[o]) {
                    var c = us[o].effect;
                    d = new c(r, t.effectsManager.effectElements[e], t, hi + n, s), s = hi + n, us[o].countsAsEffect && (n += 1);
                }
                d && this.filters.push(d);
            }
            n && (t.globalData.defs.appendChild(r), t.layerElement.setAttribute("filter", "url(" + bt() + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this);
        }
        cs.prototype.renderFrame = function(t) {
            var e, s = this.filters.length;
            for(e = 0; e < s; e += 1)this.filters[e].renderFrame(t);
        }, cs.prototype.getEffects = function(t) {
            var e, s = this.filters.length, i = [];
            for(e = 0; e < s; e += 1)this.filters[e].type === t && i.push(this.filters[e]);
            return i;
        };
        function ce() {}
        ce.prototype = {
            initRendererElement: function() {
                this.layerElement = R("g");
            },
            createContainerElements: function() {
                this.matteElement = R("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var t = null;
                if (this.data.td) {
                    this.matteMasks = {};
                    var e = R("g");
                    e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e);
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
                    var s = R("clipPath"), i = R("path");
                    i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var a = ut();
                    if (s.setAttribute("id", a), s.appendChild(i), this.globalData.defs.appendChild(s), this.checkMasks()) {
                        var r = R("g");
                        r.setAttribute("clip-path", "url(" + bt() + "#" + a + ")"), r.appendChild(this.layerElement), this.transformedElement = r, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
                    } else this.layerElement.setAttribute("clip-path", "url(" + bt() + "#" + a + ")");
                }
                this.data.bm !== 0 && this.setBlendMode();
            },
            renderElement: function() {
                this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
            },
            destroyBaseElement: function() {
                this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
            },
            getBaseElement: function() {
                return this.data.hd ? null : this.baseElement;
            },
            createRenderableComponents: function() {
                this.maskManager = new Gt(this.data, this, this.globalData), this.renderableEffectsManager = new cs(this), this.searchEffectTransforms();
            },
            getMatte: function(t) {
                if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                    var e = this.layerId + "_" + t, s, i, a, r;
                    if (t === 1 || t === 3) {
                        var n = R("mask");
                        n.setAttribute("id", e), n.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), a = R("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(a), this.globalData.defs.appendChild(n), !ni.maskType && t === 1 && (n.setAttribute("mask-type", "luminance"), s = ut(), i = Te.createFilter(s), this.globalData.defs.appendChild(i), i.appendChild(Te.createAlphaToLuminanceFilter()), r = R("g"), r.appendChild(a), n.appendChild(r), r.setAttribute("filter", "url(" + bt() + "#" + s + ")"));
                    } else if (t === 2) {
                        var d = R("mask");
                        d.setAttribute("id", e), d.setAttribute("mask-type", "alpha");
                        var o = R("g");
                        d.appendChild(o), s = ut(), i = Te.createFilter(s);
                        var c = R("feComponentTransfer");
                        c.setAttribute("in", "SourceGraphic"), i.appendChild(c);
                        var y = R("feFuncA");
                        y.setAttribute("type", "table"), y.setAttribute("tableValues", "1.0 0.0"), c.appendChild(y), this.globalData.defs.appendChild(i);
                        var k = R("rect");
                        k.setAttribute("width", this.comp.data.w), k.setAttribute("height", this.comp.data.h), k.setAttribute("x", "0"), k.setAttribute("y", "0"), k.setAttribute("fill", "#ffffff"), k.setAttribute("opacity", "0"), o.setAttribute("filter", "url(" + bt() + "#" + s + ")"), o.appendChild(k), a = R("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o.appendChild(a), ni.maskType || (d.setAttribute("mask-type", "luminance"), i.appendChild(Te.createAlphaToLuminanceFilter()), r = R("g"), o.appendChild(k), r.appendChild(this.layerElement), o.appendChild(r)), this.globalData.defs.appendChild(d);
                    }
                    this.matteMasks[t] = e;
                }
                return this.matteMasks[t];
            },
            setMatte: function(t) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + bt() + "#" + t + ")");
            }
        };
        function Dt() {}
        Dt.prototype = {
            initHierarchy: function() {
                this.hierarchy = [], this._isParent = !1, this.checkParenting();
            },
            setHierarchy: function(t) {
                this.hierarchy = t;
            },
            setAsParent: function() {
                this._isParent = !0;
            },
            checkParenting: function() {
                this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
            }
        };
        function re() {}
        (function() {
            var t = {
                initElement: function(e, s, i) {
                    this.initFrame(), this.initBaseData(e, s, i), this.initTransform(e, s, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
                },
                hide: function() {
                    if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                        var e = this.baseElement || this.layerElement;
                        e.style.display = "none", this.hidden = !0;
                    }
                },
                show: function() {
                    if (this.isInRange && !this.isTransparent) {
                        if (!this.data.hd) {
                            var e = this.baseElement || this.layerElement;
                            e.style.display = "block";
                        }
                        this.hidden = !1, this._isFirstFrame = !0;
                    }
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
                },
                renderInnerContent: function() {},
                prepareFrame: function(e) {
                    this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency();
                },
                destroy: function() {
                    this.innerElem = null, this.destroyBaseElement();
                }
            };
            W([
                ue,
                _i(t)
            ], re);
        })();
        function ge(t, e, s) {
            this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, s), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            };
        }
        W([
            xt,
            At,
            ce,
            Dt,
            _t,
            re
        ], ge), ge.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = R("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
        }, ge.prototype.sourceRectAtTime = function() {
            return this.sourceRect;
        };
        function ya(t, e) {
            this.elem = t, this.pos = e;
        }
        function oi() {}
        oi.prototype = {
            addShapeToModifiers: function(t) {
                var e, s = this.shapeModifiers.length;
                for(e = 0; e < s; e += 1)this.shapeModifiers[e].addShape(t);
            },
            isShapeInAnimatedModifiers: function(t) {
                for(var e = 0, s = this.shapeModifiers.length; e < s;)if (this.shapeModifiers[e].isAnimatedWithShape(t)) return !0;
                return !1;
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var t, e = this.shapes.length;
                    for(t = 0; t < e; t += 1)this.shapes[t].sh.reset();
                    e = this.shapeModifiers.length;
                    var s;
                    for(t = e - 1; t >= 0 && (s = this.shapeModifiers[t].processShapes(this._isFirstFrame), !s); t -= 1);
                }
            },
            searchProcessedElement: function(t) {
                for(var e = this.processedElements, s = 0, i = e.length; s < i;){
                    if (e[s].elem === t) return e[s].pos;
                    s += 1;
                }
                return 0;
            },
            addProcessedElement: function(t, e) {
                for(var s = this.processedElements, i = s.length; i;)if (i -= 1, s[i].elem === t) {
                    s[i].pos = e;
                    return;
                }
                s.push(new ya(t, e));
            },
            prepareFrame: function(t) {
                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
            }
        };
        var gs = {
            1: "butt",
            2: "round",
            3: "square"
        }, ys = {
            1: "miter",
            2: "round",
            3: "bevel"
        };
        function li(t, e, s) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = s, this.lvl = e, this._isAnimated = !!s.k;
            for(var i = 0, a = t.length; i < a;){
                if (t[i].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break;
                }
                i += 1;
            }
        }
        li.prototype.setAsAnimated = function() {
            this._isAnimated = !0;
        };
        function pi(t, e) {
            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = t.hd === !0, this.pElem = R("path"), this.msElem = null;
        }
        pi.prototype.reset = function() {
            this.d = "", this._mdf = !1;
        };
        function Qe(t, e, s, i) {
            this.elem = t, this.frameId = -1, this.dataProps = K(e.length), this.renderer = s, this.k = !1, this.dashStr = "", this.dashArray = ht("float32", e.length ? e.length - 1 : 0), this.dashoffset = ht("float32", 1), this.initDynamicPropertyContainer(i);
            var a, r = e.length || 0, n;
            for(a = 0; a < r; a += 1)n = I.getProp(t, e[a].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[a] = {
                n: e[a].n,
                p: n
            };
            this.k || this.getValue(!0), this._isAnimated = this.k;
        }
        Qe.prototype.getValue = function(t) {
            if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0, s = this.dataProps.length;
                for(this.renderer === "svg" && (this.dashStr = ""), e = 0; e < s; e += 1)this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
            }
        }, W([
            ot
        ], Qe);
        function fi(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = I.getProp(t, e.o, 0, .01, this), this.w = I.getProp(t, e.w, 0, null, this), this.d = new Qe(t, e.d || {}, "svg", this), this.c = I.getProp(t, e.c, 1, 255, this), this.style = s, this._isAnimated = !!this._isAnimated;
        }
        W([
            ot
        ], fi);
        function di(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = I.getProp(t, e.o, 0, .01, this), this.c = I.getProp(t, e.c, 1, 255, this), this.style = s;
        }
        W([
            ot
        ], di);
        function mi(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = s;
        }
        W([
            ot
        ], mi);
        function Ae(t, e, s) {
            this.data = e, this.c = ht("uint8c", e.p * 4);
            var i = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
            this.o = ht("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(s), this.prop = I.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
        }
        Ae.prototype.comparePoints = function(t, e) {
            for(var s = 0, i = this.o.length / 2, a; s < i;){
                if (a = Math.abs(t[s * 4] - t[e * 4 + s * 2]), a > .01) return !1;
                s += 1;
            }
            return !0;
        }, Ae.prototype.checkCollapsable = function() {
            if (this.o.length / 2 !== this.c.length / 4) return !1;
            if (this.data.k.k[0].s) for(var t = 0, e = this.data.k.k.length; t < e;){
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                t += 1;
            }
            else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0;
        }, Ae.prototype.getValue = function(t) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                var e, s = this.data.p * 4, i, a;
                for(e = 0; e < s; e += 1)i = e % 4 === 0 ? 100 : 255, a = Math.round(this.prop.v[e] * i), this.c[e] !== a && (this.c[e] = a, this._cmdf = !t);
                if (this.o.length) for(s = this.prop.v.length, e = this.data.p * 4; e < s; e += 1)i = e % 2 === 0 ? 100 : 1, a = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== a && (this.o[e - this.data.p * 4] = a, this._omdf = !t);
                this._mdf = !t;
            }
        }, W([
            ot
        ], Ae);
        function ye(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, s);
        }
        ye.prototype.initGradientData = function(t, e, s) {
            this.o = I.getProp(t, e.o, 0, .01, this), this.s = I.getProp(t, e.s, 1, null, this), this.e = I.getProp(t, e.e, 1, null, this), this.h = I.getProp(t, e.h || {
                k: 0
            }, 0, .01, this), this.a = I.getProp(t, e.a || {
                k: 0
            }, 0, J, this), this.g = new Ae(t, e.g, this), this.style = s, this.stops = [], this.setGradientData(s.pElem, e), this.setGradientOpacity(e, s), this._isAnimated = !!this._isAnimated;
        }, ye.prototype.setGradientData = function(t, e) {
            var s = ut(), i = R(e.t === 1 ? "linearGradient" : "radialGradient");
            i.setAttribute("id", s), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
            var a = [], r, n, d;
            for(d = e.g.p * 4, n = 0; n < d; n += 4)r = R("stop"), i.appendChild(r), a.push(r);
            t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + bt() + "#" + s + ")"), this.gf = i, this.cst = a;
        }, ye.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var s, i, a, r = R("mask"), n = R("path");
                r.appendChild(n);
                var d = ut(), o = ut();
                r.setAttribute("id", o);
                var c = R(t.t === 1 ? "linearGradient" : "radialGradient");
                c.setAttribute("id", d), c.setAttribute("spreadMethod", "pad"), c.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var y = this.stops;
                for(i = t.g.p * 4; i < a; i += 2)s = R("stop"), s.setAttribute("stop-color", "rgb(255,255,255)"), c.appendChild(s), y.push(s);
                n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + bt() + "#" + d + ")"), t.ty === "gs" && (n.setAttribute("stroke-linecap", gs[t.lc || 2]), n.setAttribute("stroke-linejoin", ys[t.lj || 2]), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), this.of = c, this.ms = r, this.ost = y, this.maskId = o, e.msElem = n;
            }
        }, W([
            ot
        ], ye);
        function ui(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = I.getProp(t, e.w, 0, null, this), this.d = new Qe(t, e.d || {}, "svg", this), this.initGradientData(t, e, s), this._isAnimated = !!this._isAnimated;
        }
        W([
            ye,
            ot
        ], ui);
        function va() {
            this.it = [], this.prevViewData = [], this.gr = R("g");
        }
        function ba(t, e, s) {
            this.transform = {
                mProps: t,
                op: e,
                container: s
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
        }
        var ci = function(t, e, s, i) {
            if (e === 0) return "";
            var a = t.o, r = t.i, n = t.v, d, o = " M" + i.applyToPointStringified(n[0][0], n[0][1]);
            for(d = 1; d < e; d += 1)o += " C" + i.applyToPointStringified(a[d - 1][0], a[d - 1][1]) + " " + i.applyToPointStringified(r[d][0], r[d][1]) + " " + i.applyToPointStringified(n[d][0], n[d][1]);
            return s && e && (o += " C" + i.applyToPointStringified(a[d - 1][0], a[d - 1][1]) + " " + i.applyToPointStringified(r[0][0], r[0][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]), o += "z"), o;
        }, xa = function() {
            var t = new it, e = new it, s = {
                createRenderFunction: i
            };
            function i(k) {
                switch(k.ty){
                    case "fl":
                        return d;
                    case "gf":
                        return c;
                    case "gs":
                        return o;
                    case "st":
                        return y;
                    case "sh":
                    case "el":
                    case "rc":
                    case "sr":
                        return n;
                    case "tr":
                        return a;
                    case "no":
                        return r;
                    default:
                        return null;
                }
            }
            function a(k, f, P) {
                (P || f.transform.op._mdf) && f.transform.container.setAttribute("opacity", f.transform.op.v), (P || f.transform.mProps._mdf) && f.transform.container.setAttribute("transform", f.transform.mProps.v.to2dCSS());
            }
            function r() {}
            function n(k, f, P) {
                var w, _, D, g, l, p, m = f.styles.length, x = f.lvl, C, E, T, L;
                for(p = 0; p < m; p += 1){
                    if (g = f.sh._mdf || P, f.styles[p].lvl < x) {
                        for(E = e.reset(), T = x - f.styles[p].lvl, L = f.transformers.length - 1; !g && T > 0;)g = f.transformers[L].mProps._mdf || g, T -= 1, L -= 1;
                        if (g) for(T = x - f.styles[p].lvl, L = f.transformers.length - 1; T > 0;)E.multiply(f.transformers[L].mProps.v), T -= 1, L -= 1;
                    } else E = t;
                    if (C = f.sh.paths, _ = C._length, g) {
                        for(D = "", w = 0; w < _; w += 1)l = C.shapes[w], l && l._length && (D += ci(l, l._length, l.c, E));
                        f.caches[p] = D;
                    } else D = f.caches[p];
                    f.styles[p].d += k.hd === !0 ? "" : D, f.styles[p]._mdf = g || f.styles[p]._mdf;
                }
            }
            function d(k, f, P) {
                var w = f.style;
                (f.c._mdf || P) && w.pElem.setAttribute("fill", "rgb(" + ee(f.c.v[0]) + "," + ee(f.c.v[1]) + "," + ee(f.c.v[2]) + ")"), (f.o._mdf || P) && w.pElem.setAttribute("fill-opacity", f.o.v);
            }
            function o(k, f, P) {
                c(k, f, P), y(k, f, P);
            }
            function c(k, f, P) {
                var w = f.gf, _ = f.g._hasOpacity, D = f.s.v, g = f.e.v;
                if (f.o._mdf || P) {
                    var l = k.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                    f.style.pElem.setAttribute(l, f.o.v);
                }
                if (f.s._mdf || P) {
                    var p = k.t === 1 ? "x1" : "cx", m = p === "x1" ? "y1" : "cy";
                    w.setAttribute(p, D[0]), w.setAttribute(m, D[1]), _ && !f.g._collapsable && (f.of.setAttribute(p, D[0]), f.of.setAttribute(m, D[1]));
                }
                var x, C, E, T;
                if (f.g._cmdf || P) {
                    x = f.cst;
                    var L = f.g.c;
                    for(E = x.length, C = 0; C < E; C += 1)T = x[C], T.setAttribute("offset", L[C * 4] + "%"), T.setAttribute("stop-color", "rgb(" + L[C * 4 + 1] + "," + L[C * 4 + 2] + "," + L[C * 4 + 3] + ")");
                }
                if (_ && (f.g._omdf || P)) {
                    var N = f.g.o;
                    for(f.g._collapsable ? x = f.cst : x = f.ost, E = x.length, C = 0; C < E; C += 1)T = x[C], f.g._collapsable || T.setAttribute("offset", N[C * 2] + "%"), T.setAttribute("stop-opacity", N[C * 2 + 1]);
                }
                if (k.t === 1) (f.e._mdf || P) && (w.setAttribute("x2", g[0]), w.setAttribute("y2", g[1]), _ && !f.g._collapsable && (f.of.setAttribute("x2", g[0]), f.of.setAttribute("y2", g[1])));
                else {
                    var O;
                    if ((f.s._mdf || f.e._mdf || P) && (O = Math.sqrt(Math.pow(D[0] - g[0], 2) + Math.pow(D[1] - g[1], 2)), w.setAttribute("r", O), _ && !f.g._collapsable && f.of.setAttribute("r", O)), f.e._mdf || f.h._mdf || f.a._mdf || P) {
                        O || (O = Math.sqrt(Math.pow(D[0] - g[0], 2) + Math.pow(D[1] - g[1], 2)));
                        var B = Math.atan2(g[1] - D[1], g[0] - D[0]), j = f.h.v;
                        j >= 1 ? j = .99 : j <= -1 && (j = -0.99);
                        var A = O * j, F = Math.cos(B + f.a.v) * A + D[0], u = Math.sin(B + f.a.v) * A + D[1];
                        w.setAttribute("fx", F), w.setAttribute("fy", u), _ && !f.g._collapsable && (f.of.setAttribute("fx", F), f.of.setAttribute("fy", u));
                    }
                }
            }
            function y(k, f, P) {
                var w = f.style, _ = f.d;
                _ && (_._mdf || P) && _.dashStr && (w.pElem.setAttribute("stroke-dasharray", _.dashStr), w.pElem.setAttribute("stroke-dashoffset", _.dashoffset[0])), f.c && (f.c._mdf || P) && w.pElem.setAttribute("stroke", "rgb(" + ee(f.c.v[0]) + "," + ee(f.c.v[1]) + "," + ee(f.c.v[2]) + ")"), (f.o._mdf || P) && w.pElem.setAttribute("stroke-opacity", f.o.v), (f.w._mdf || P) && (w.pElem.setAttribute("stroke-width", f.w.v), w.msElem && w.msElem.setAttribute("stroke-width", f.w.v));
            }
            return s;
        }();
        function Q(t, e, s) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, s), this.prevViewData = [];
        }
        W([
            xt,
            At,
            ce,
            oi,
            Dt,
            _t,
            re
        ], Q), Q.prototype.initSecondaryElement = function() {}, Q.prototype.identityMatrix = new it, Q.prototype.buildExpressionInterface = function() {}, Q.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
        }, Q.prototype.filterUniqueShapes = function() {
            var t, e = this.shapes.length, s, i, a = this.stylesList.length, r, n = [], d = !1;
            for(i = 0; i < a; i += 1){
                for(r = this.stylesList[i], d = !1, n.length = 0, t = 0; t < e; t += 1)s = this.shapes[t], s.styles.indexOf(r) !== -1 && (n.push(s), d = s._isAnimated || d);
                n.length > 1 && d && this.setShapesAsAnimated(n);
            }
        }, Q.prototype.setShapesAsAnimated = function(t) {
            var e, s = t.length;
            for(e = 0; e < s; e += 1)t[e].setAsAnimated();
        }, Q.prototype.createStyleElement = function(t, e) {
            var s, i = new pi(t, e), a = i.pElem;
            if (t.ty === "st") s = new fi(this, t, i);
            else if (t.ty === "fl") s = new di(this, t, i);
            else if (t.ty === "gf" || t.ty === "gs") {
                var r = t.ty === "gf" ? ye : ui;
                s = new r(this, t, i), this.globalData.defs.appendChild(s.gf), s.maskId && (this.globalData.defs.appendChild(s.ms), this.globalData.defs.appendChild(s.of), a.setAttribute("mask", "url(" + bt() + "#" + s.maskId + ")"));
            } else t.ty === "no" && (s = new mi(this, t, i));
            return (t.ty === "st" || t.ty === "gs") && (a.setAttribute("stroke-linecap", gs[t.lc || 2]), a.setAttribute("stroke-linejoin", ys[t.lj || 2]), a.setAttribute("fill-opacity", "0"), t.lj === 1 && a.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = ms(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, s), s;
        }, Q.prototype.createGroupElement = function(t) {
            var e = new va;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = ms(t.bm)), e;
        }, Q.prototype.createTransformElement = function(t, e) {
            var s = os.getTransformProperty(this, t, this), i = new ba(s, s.o, e);
            return this.addToAnimatedContents(t, i), i;
        }, Q.prototype.createShapeElement = function(t, e, s) {
            var i = 4;
            t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7);
            var a = Ze.getShapeProp(this, t, i, this), r = new li(e, s, a);
            return this.shapes.push(r), this.addShapeToModifiers(r), this.addToAnimatedContents(t, r), r;
        }, Q.prototype.addToAnimatedContents = function(t, e) {
            for(var s = 0, i = this.animatedContents.length; s < i;){
                if (this.animatedContents[s].element === e) return;
                s += 1;
            }
            this.animatedContents.push({
                fn: xa.createRenderFunction(t),
                element: e,
                data: t
            });
        }, Q.prototype.setElementStyles = function(t) {
            var e = t.styles, s, i = this.stylesList.length;
            for(s = 0; s < i; s += 1)this.stylesList[s].closed || e.push(this.stylesList[s]);
        }, Q.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for(t = 0; t < e; t += 1)this.prevViewData[t] = this.itemsData[t];
            for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)this.dynamicProperties[t].getValue();
            this.renderModifiers();
        }, Q.prototype.searchShapes = function(t, e, s, i, a, r, n) {
            var d = [].concat(r), o, c = t.length - 1, y, k, f = [], P = [], w, _, D;
            for(o = c; o >= 0; o -= 1){
                if (D = this.searchProcessedElement(t[o]), D ? e[o] = s[D - 1] : t[o]._render = n, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") D ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], a), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), f.push(e[o].style);
                else if (t[o].ty === "gr") {
                    if (!D) e[o] = this.createGroupElement(t[o]);
                    else for(k = e[o].it.length, y = 0; y < k; y += 1)e[o].prevViewData[y] = e[o].it[y];
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, d, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr);
                } else t[o].ty === "tr" ? (D || (e[o] = this.createTransformElement(t[o], i)), w = e[o].transform, d.push(w)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (D || (e[o] = this.createShapeElement(t[o], d, a)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (D ? (_ = e[o], _.closed = !1) : (_ = Xt.getModifier(t[o].ty), _.init(this, t[o]), e[o] = _, this.shapeModifiers.push(_)), P.push(_)) : t[o].ty === "rp" && (D ? (_ = e[o], _.closed = !0) : (_ = Xt.getModifier(t[o].ty), e[o] = _, _.init(this, t, o, e), this.shapeModifiers.push(_), n = !1), P.push(_));
                this.addProcessedElement(t[o], o + 1);
            }
            for(c = f.length, o = 0; o < c; o += 1)f[o].closed = !0;
            for(c = P.length, o = 0; o < c; o += 1)P[o].closed = !0;
        }, Q.prototype.renderInnerContent = function() {
            this.renderModifiers();
            var t, e = this.stylesList.length;
            for(t = 0; t < e; t += 1)this.stylesList[t].reset();
            for(this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
        }, Q.prototype.renderShape = function() {
            var t, e = this.animatedContents.length, s;
            for(t = 0; t < e; t += 1)s = this.animatedContents[t], (this._isFirstFrame || s.element._isAnimated) && s.data !== !0 && s.fn(s.data, s.element, this._isFirstFrame);
        }, Q.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
        };
        function vs(t, e, s, i, a, r) {
            this.o = t, this.sw = e, this.sc = s, this.fc = i, this.m = a, this.p = r, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!s,
                fc: !!i,
                m: !0,
                p: !0
            };
        }
        vs.prototype.update = function(t, e, s, i, a, r) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var n = !1;
            return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== s && (this.sc = s, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), r.length && (this.p[0] !== r[0] || this.p[1] !== r[1] || this.p[4] !== r[4] || this.p[5] !== r[5] || this.p[12] !== r[12] || this.p[13] !== r[13]) && (this.p = r, this._mdf.p = !0, n = !0), n;
        };
        function dt(t, e) {
            this._frameId = is, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
        }
        dt.prototype.defaultBoxWidth = [
            0,
            0
        ], dt.prototype.copyData = function(t, e) {
            for(var s in e)Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            return t;
        }, dt.prototype.setCurrentData = function(t) {
            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
        }, dt.prototype.searchProperty = function() {
            return this.searchKeyframes();
        }, dt.prototype.searchKeyframes = function() {
            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
        }, dt.prototype.addEffect = function(t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
        }, dt.prototype.getValue = function(t) {
            if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData, s = this.keysIndex;
                if (this.lock) {
                    this.setCurrentData(this.currentData);
                    return;
                }
                this.lock = !0, this._mdf = !1;
                var i, a = this.effectsSequence.length, r = t || this.data.d.k[this.keysIndex].s;
                for(i = 0; i < a; i += 1)s !== this.keysIndex ? r = this.effectsSequence[i](r, r.t) : r = this.effectsSequence[i](this.currentData, r.t);
                e !== r && this.setCurrentData(r), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
        }, dt.prototype.getKeyframeValue = function() {
            for(var t = this.data.d.k, e = this.elem.comp.renderedFrame, s = 0, i = t.length; s <= i - 1 && !(s === i - 1 || t[s + 1].t > e);)s += 1;
            return this.keysIndex !== s && (this.keysIndex = s), this.data.d.k[this.keysIndex].s;
        }, dt.prototype.buildFinalText = function(t) {
            for(var e = [], s = 0, i = t.length, a, r, n = !1, d = !1, o = ""; s < i;)n = d, d = !1, a = t.charCodeAt(s), o = t.charAt(s), ae.isCombinedCharacter(a) ? n = !0 : a >= 55296 && a <= 56319 ? ae.isRegionalFlag(t, s) ? o = t.substr(s, 14) : (r = t.charCodeAt(s + 1), r >= 56320 && r <= 57343 && (ae.isModifier(a, r) ? (o = t.substr(s, 2), n = !0) : ae.isFlagEmoji(t.substr(s, 4)) ? o = t.substr(s, 4) : o = t.substr(s, 2))) : a > 56319 ? (r = t.charCodeAt(s + 1), ae.isVariationSelector(a) && (n = !0)) : ae.isZeroWidthJoiner(a) && (n = !0, d = !0), n ? (e[e.length - 1] += o, n = !1) : e.push(o), s += o.length;
            return e;
        }, dt.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e = this.elem.globalData.fontManager, s = this.data, i = [], a, r, n, d = 0, o, c = s.m.g, y = 0, k = 0, f = 0, P = [], w = 0, _ = 0, D, g, l = e.getFontByName(t.f), p, m = 0, x = ii(l);
            t.fWeight = x.weight, t.fStyle = x.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
            var C = t.tr / 1e3 * t.finalSize, E;
            if (t.sz) for(var T = !0, L = t.sz[0], N = t.sz[1], O, B; T;){
                B = this.buildFinalText(t.t), O = 0, w = 0, r = B.length, C = t.tr / 1e3 * t.finalSize;
                var j = -1;
                for(a = 0; a < r; a += 1)E = B[a].charCodeAt(0), n = !1, B[a] === " " ? j = a : (E === 13 || E === 3) && (w = 0, n = !0, O += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (p = e.getCharData(B[a], l.fStyle, l.fFamily), m = n ? 0 : p.w * t.finalSize / 100) : m = e.measureText(B[a], t.f, t.finalSize), w + m > L && B[a] !== " " ? (j === -1 ? r += 1 : a = j, O += t.finalLineHeight || t.finalSize * 1.2, B.splice(a, j === a ? 1 : 0, "\r"), j = -1, w = 0) : (w += m, w += C);
                O += l.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && N < O ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = B, r = t.finalText.length, T = !1);
            }
            w = -C, m = 0;
            var A = 0, F;
            for(a = 0; a < r; a += 1)if (n = !1, F = t.finalText[a], E = F.charCodeAt(0), E === 13 || E === 3 ? (A = 0, P.push(w), _ = w > _ ? w : _, w = -2 * C, o = "", n = !0, f += 1) : o = F, e.chars ? (p = e.getCharData(F, l.fStyle, e.getFontByName(t.f).fFamily), m = n ? 0 : p.w * t.finalSize / 100) : m = e.measureText(o, t.f, t.finalSize), F === " " ? A += m + C : (w += m + C + A, A = 0), i.push({
                l: m,
                an: m,
                add: y,
                n,
                anIndexes: [],
                val: o,
                line: f,
                animatorJustifyOffset: 0
            }), c == 2) {
                if (y += m, o === "" || o === " " || a === r - 1) {
                    for((o === "" || o === " ") && (y -= m); k <= a;)i[k].an = y, i[k].ind = d, i[k].extra = m, k += 1;
                    d += 1, y = 0;
                }
            } else if (c == 3) {
                if (y += m, o === "" || a === r - 1) {
                    for(o === "" && (y -= m); k <= a;)i[k].an = y, i[k].ind = d, i[k].extra = m, k += 1;
                    y = 0, d += 1;
                }
            } else i[d].ind = d, i[d].extra = 0, d += 1;
            if (t.l = i, _ = w > _ ? w : _, P.push(w), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch(t.boxWidth = _, t.j){
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0;
            }
            t.lineWidths = P;
            var u = s.a, b, h;
            g = u.length;
            var v, M, S = [];
            for(D = 0; D < g; D += 1){
                for(b = u[D], b.a.sc && (t.strokeColorAnim = !0), b.a.sw && (t.strokeWidthAnim = !0), (b.a.fc || b.a.fh || b.a.fs || b.a.fb) && (t.fillColorAnim = !0), M = 0, v = b.s.b, a = 0; a < r; a += 1)h = i[a], h.anIndexes[D] = M, (v == 1 && h.val !== "" || v == 2 && h.val !== "" && h.val !== " " || v == 3 && (h.n || h.val == " " || a == r - 1) || v == 4 && (h.n || a == r - 1)) && (b.s.rn === 1 && S.push(M), M += 1);
                s.a[D].s.totalChars = M;
                var H = -1, z;
                if (b.s.rn === 1) for(a = 0; a < r; a += 1)h = i[a], H != h.anIndexes[D] && (H = h.anIndexes[D], z = S.splice(Math.floor(Math.random() * S.length), 1)[0]), h.anIndexes[D] = z;
            }
            t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = l.ascent * t.finalSize / 100;
        }, dt.prototype.updateDocumentData = function(t, e) {
            e = e === void 0 ? this.keysIndex : e;
            var s = this.copyData({}, this.data.d.k[e].s);
            s = this.copyData(s, t), this.data.d.k[e].s = s, this.recalculate(e), this.setCurrentData(s), this.elem.addDynamicProperty(this);
        }, dt.prototype.recalculate = function(t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);
        }, dt.prototype.canResizeFont = function(t) {
            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        }, dt.prototype.setMinimumFontSize = function(t) {
            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        };
        var _a = function() {
            var t = Math.max, e = Math.min, s = Math.floor;
            function i(r, n) {
                this._currentTextLength = -1, this.k = !1, this.data = n, this.elem = r, this.comp = r.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(r), this.s = I.getProp(r, n.s || {
                    k: 0
                }, 0, 0, this), "e" in n ? this.e = I.getProp(r, n.e, 0, 0, this) : this.e = {
                    v: 100
                }, this.o = I.getProp(r, n.o || {
                    k: 0
                }, 0, 0, this), this.xe = I.getProp(r, n.xe || {
                    k: 0
                }, 0, 0, this), this.ne = I.getProp(r, n.ne || {
                    k: 0
                }, 0, 0, this), this.sm = I.getProp(r, n.sm || {
                    k: 100
                }, 0, 0, this), this.a = I.getProp(r, n.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
            }
            i.prototype = {
                getMult: function(r) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var n = 0, d = 0, o = 1, c = 1;
                    this.ne.v > 0 ? n = this.ne.v / 100 : d = -this.ne.v / 100, this.xe.v > 0 ? o = 1 - this.xe.v / 100 : c = 1 + this.xe.v / 100;
                    var y = Pe.getBezierEasing(n, d, o, c).get, k = 0, f = this.finalS, P = this.finalE, w = this.data.sh;
                    if (w === 2) P === f ? k = r >= P ? 1 : 0 : k = t(0, e(.5 / (P - f) + (r - f) / (P - f), 1)), k = y(k);
                    else if (w === 3) P === f ? k = r >= P ? 0 : 1 : k = 1 - t(0, e(.5 / (P - f) + (r - f) / (P - f), 1)), k = y(k);
                    else if (w === 4) P === f ? k = 0 : (k = t(0, e(.5 / (P - f) + (r - f) / (P - f), 1)), k < .5 ? k *= 2 : k = 1 - 2 * (k - .5)), k = y(k);
                    else if (w === 5) {
                        if (P === f) k = 0;
                        else {
                            var _ = P - f;
                            r = e(t(0, r + .5 - f), P - f);
                            var D = -_ / 2 + r, g = _ / 2;
                            k = Math.sqrt(1 - D * D / (g * g));
                        }
                        k = y(k);
                    } else w === 6 ? (P === f ? k = 0 : (r = e(t(0, r + .5 - f), P - f), k = (1 + Math.cos(Math.PI + Math.PI * 2 * r / (P - f))) / 2), k = y(k)) : (r >= s(f) && (r - f < 0 ? k = t(0, e(e(P, 1) - (f - r), 1)) : k = t(0, e(P - r, 1))), k = y(k));
                    if (this.sm.v !== 100) {
                        var l = this.sm.v * .01;
                        l === 0 && (l = 1e-8);
                        var p = .5 - l * .5;
                        k < p ? k = 0 : (k = (k - p) / l, k > 1 && (k = 1));
                    }
                    return k * this.a.v;
                },
                getValue: function(r) {
                    this.iterateDynamicProperties(), this._mdf = r || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, r && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var n = this.data.r === 2 ? 1 : 100 / this.data.totalChars, d = this.o.v / n, o = this.s.v / n + d, c = this.e.v / n + d;
                    if (o > c) {
                        var y = o;
                        o = c, c = y;
                    }
                    this.finalS = o, this.finalE = c;
                }
            }, W([
                ot
            ], i);
            function a(r, n, d) {
                return new i(r, n);
            }
            return {
                getTextSelectorProp: a
            };
        }();
        function ka(t, e, s) {
            var i = {
                propType: !1
            }, a = I.getProp, r = e.a;
            this.a = {
                r: r.r ? a(t, r.r, 0, J, s) : i,
                rx: r.rx ? a(t, r.rx, 0, J, s) : i,
                ry: r.ry ? a(t, r.ry, 0, J, s) : i,
                sk: r.sk ? a(t, r.sk, 0, J, s) : i,
                sa: r.sa ? a(t, r.sa, 0, J, s) : i,
                s: r.s ? a(t, r.s, 1, .01, s) : i,
                a: r.a ? a(t, r.a, 1, 0, s) : i,
                o: r.o ? a(t, r.o, 0, .01, s) : i,
                p: r.p ? a(t, r.p, 1, 0, s) : i,
                sw: r.sw ? a(t, r.sw, 0, 0, s) : i,
                sc: r.sc ? a(t, r.sc, 1, 0, s) : i,
                fc: r.fc ? a(t, r.fc, 1, 0, s) : i,
                fh: r.fh ? a(t, r.fh, 0, 0, s) : i,
                fs: r.fs ? a(t, r.fs, 0, .01, s) : i,
                fb: r.fb ? a(t, r.fb, 0, .01, s) : i,
                t: r.t ? a(t, r.t, 0, 0, s) : i
            }, this.s = _a.getTextSelectorProp(t, e.s, s), this.s.t = e.s.t;
        }
        function ne(t, e, s) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = s, this._animatorsData = K(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(s);
        }
        ne.prototype.searchProperties = function() {
            var t, e = this._textData.a.length, s, i = I.getProp;
            for(t = 0; t < e; t += 1)s = this._textData.a[t], this._animatorsData[t] = new ka(this._elem, s, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: i(this._elem, this._textData.p.a, 0, 0, this),
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: i(this._elem, this._textData.p.r, 0, 0, this),
                p: i(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
        }, ne.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                this._isFirstFrame = !1;
                var s = this._moreOptions.alignment.v, i = this._animatorsData, a = this._textData, r = this.mHelper, n = this._renderType, d = this.renderedLetters.length, o, c, y, k, f = t.l, P, w, _, D, g, l, p, m, x, C, E, T, L, N, O;
                if (this._hasMaskedPath) {
                    if (O = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var B = O.v;
                        this._pathData.r.v && (B = B.reverse()), P = {
                            tLength: 0,
                            segments: []
                        }, k = B._length - 1;
                        var j;
                        for(T = 0, y = 0; y < k; y += 1)j = Et.buildBezierData(B.v[y], B.v[y + 1], [
                            B.o[y][0] - B.v[y][0],
                            B.o[y][1] - B.v[y][1]
                        ], [
                            B.i[y + 1][0] - B.v[y + 1][0],
                            B.i[y + 1][1] - B.v[y + 1][1]
                        ]), P.tLength += j.segmentLength, P.segments.push(j), T += j.segmentLength;
                        y = k, O.v.c && (j = Et.buildBezierData(B.v[y], B.v[0], [
                            B.o[y][0] - B.v[y][0],
                            B.o[y][1] - B.v[y][1]
                        ], [
                            B.i[0][0] - B.v[0][0],
                            B.i[0][1] - B.v[0][1]
                        ]), P.tLength += j.segmentLength, P.segments.push(j), T += j.segmentLength), this._pathData.pi = P;
                    }
                    if (P = this._pathData.pi, w = this._pathData.f.v, p = 0, l = 1, D = 0, g = !0, C = P.segments, w < 0 && O.v.c) for(P.tLength < Math.abs(w) && (w = -Math.abs(w) % P.tLength), p = C.length - 1, x = C[p].points, l = x.length - 1; w < 0;)w += x[l].partialLength, l -= 1, l < 0 && (p -= 1, x = C[p].points, l = x.length - 1);
                    x = C[p].points, m = x[l - 1], _ = x[l], E = _.partialLength;
                }
                k = f.length, o = 0, c = 0;
                var A = t.finalSize * 1.2 * .714, F = !0, u, b, h, v, M;
                v = i.length;
                var S, H = -1, z, Z, X, tt = w, et = p, gt = l, Bt = -1, yt, lt, Pt, G, V, Ot, Qt, Nt, zt = "", jt = this.defaultPropsArray, qt;
                if (t.j === 2 || t.j === 1) {
                    var vt = 0, $t = 0, Kt = t.j === 2 ? -0.5 : -1, Ct = 0, te = !0;
                    for(y = 0; y < k; y += 1)if (f[y].n) {
                        for(vt && (vt += $t); Ct < y;)f[Ct].animatorJustifyOffset = vt, Ct += 1;
                        vt = 0, te = !0;
                    } else {
                        for(h = 0; h < v; h += 1)u = i[h].a, u.t.propType && (te && t.j === 2 && ($t += u.t.v * Kt), b = i[h].s, S = b.getMult(f[y].anIndexes[h], a.a[h].s.totalChars), S.length ? vt += u.t.v * S[0] * Kt : vt += u.t.v * S * Kt);
                        te = !1;
                    }
                    for(vt && (vt += $t); Ct < y;)f[Ct].animatorJustifyOffset = vt, Ct += 1;
                }
                for(y = 0; y < k; y += 1){
                    if (r.reset(), yt = 1, f[y].n) o = 0, c += t.yOffset, c += F ? 1 : 0, w = tt, F = !1, this._hasMaskedPath && (p = et, l = gt, x = C[p].points, m = x[l - 1], _ = x[l], E = _.partialLength, D = 0), zt = "", Nt = "", Ot = "", qt = "", jt = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Bt !== f[y].line) {
                                switch(t.j){
                                    case 1:
                                        w += T - t.lineWidths[f[y].line];
                                        break;
                                    case 2:
                                        w += (T - t.lineWidths[f[y].line]) / 2;
                                        break;
                                }
                                Bt = f[y].line;
                            }
                            H !== f[y].ind && (f[H] && (w += f[H].extra), w += f[y].an / 2, H = f[y].ind), w += s[0] * f[y].an * .005;
                            var Mt = 0;
                            for(h = 0; h < v; h += 1)u = i[h].a, u.p.propType && (b = i[h].s, S = b.getMult(f[y].anIndexes[h], a.a[h].s.totalChars), S.length ? Mt += u.p.v[0] * S[0] : Mt += u.p.v[0] * S), u.a.propType && (b = i[h].s, S = b.getMult(f[y].anIndexes[h], a.a[h].s.totalChars), S.length ? Mt += u.a.v[0] * S[0] : Mt += u.a.v[0] * S);
                            for(g = !0, this._pathData.a.v && (w = f[0].an * .5 + (T - this._pathData.f.v - f[0].an * .5 - f[f.length - 1].an * .5) * H / (k - 1), w += this._pathData.f.v); g;)D + E >= w + Mt || !x ? (L = (w + Mt - D) / _.partialLength, Z = m.point[0] + (_.point[0] - m.point[0]) * L, X = m.point[1] + (_.point[1] - m.point[1]) * L, r.translate(-s[0] * f[y].an * .005, -(s[1] * A) * .01), g = !1) : x && (D += _.partialLength, l += 1, l >= x.length && (l = 0, p += 1, C[p] ? x = C[p].points : O.v.c ? (l = 0, p = 0, x = C[p].points) : (D -= _.partialLength, x = null)), x && (m = _, _ = x[l], E = _.partialLength));
                            z = f[y].an / 2 - f[y].add, r.translate(-z, 0, 0);
                        } else z = f[y].an / 2 - f[y].add, r.translate(-z, 0, 0), r.translate(-s[0] * f[y].an * .005, -s[1] * A * .01, 0);
                        for(h = 0; h < v; h += 1)u = i[h].a, u.t.propType && (b = i[h].s, S = b.getMult(f[y].anIndexes[h], a.a[h].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? S.length ? w += u.t.v * S[0] : w += u.t.v * S : S.length ? o += u.t.v * S[0] : o += u.t.v * S));
                        for(t.strokeWidthAnim && (Pt = t.sw || 0), t.strokeColorAnim && (t.sc ? lt = [
                            t.sc[0],
                            t.sc[1],
                            t.sc[2]
                        ] : lt = [
                            0,
                            0,
                            0
                        ]), t.fillColorAnim && t.fc && (G = [
                            t.fc[0],
                            t.fc[1],
                            t.fc[2]
                        ]), h = 0; h < v; h += 1)u = i[h].a, u.a.propType && (b = i[h].s, S = b.getMult(f[y].anIndexes[h], a.a[h].s.totalChars), S.length ? r.translate(-u.a.v[0] * S[0], -u.a.v[1] * S[1], u.a.v[2] * S[2]) : r.translate(-u.a.v[0] * S, -u.a.v[1] * S, u.a.v[2] * S));
                        for(h = 0; h < v; h += 1)u = i[h].a, u.s.propType && (b = i[h].s, S = b.getMult(f[y].anIndexes[h], a.a[h].s.totalChars), S.length ? r.scale(1 + (u.s.v[0] - 1) * S[0], 1 + (u.s.v[1] - 1) * S[1], 1) : r.scale(1 + (u.s.v[0] - 1) * S, 1 + (u.s.v[1] - 1) * S, 1));
                        for(h = 0; h < v; h += 1){
                            if (u = i[h].a, b = i[h].s, S = b.getMult(f[y].anIndexes[h], a.a[h].s.totalChars), u.sk.propType && (S.length ? r.skewFromAxis(-u.sk.v * S[0], u.sa.v * S[1]) : r.skewFromAxis(-u.sk.v * S, u.sa.v * S)), u.r.propType && (S.length ? r.rotateZ(-u.r.v * S[2]) : r.rotateZ(-u.r.v * S)), u.ry.propType && (S.length ? r.rotateY(u.ry.v * S[1]) : r.rotateY(u.ry.v * S)), u.rx.propType && (S.length ? r.rotateX(u.rx.v * S[0]) : r.rotateX(u.rx.v * S)), u.o.propType && (S.length ? yt += (u.o.v * S[0] - yt) * S[0] : yt += (u.o.v * S - yt) * S), t.strokeWidthAnim && u.sw.propType && (S.length ? Pt += u.sw.v * S[0] : Pt += u.sw.v * S), t.strokeColorAnim && u.sc.propType) for(V = 0; V < 3; V += 1)S.length ? lt[V] += (u.sc.v[V] - lt[V]) * S[0] : lt[V] += (u.sc.v[V] - lt[V]) * S;
                            if (t.fillColorAnim && t.fc) {
                                if (u.fc.propType) for(V = 0; V < 3; V += 1)S.length ? G[V] += (u.fc.v[V] - G[V]) * S[0] : G[V] += (u.fc.v[V] - G[V]) * S;
                                u.fh.propType && (S.length ? G = Is(G, u.fh.v * S[0]) : G = Is(G, u.fh.v * S)), u.fs.propType && (S.length ? G = As(G, u.fs.v * S[0]) : G = As(G, u.fs.v * S)), u.fb.propType && (S.length ? G = Fs(G, u.fb.v * S[0]) : G = Fs(G, u.fb.v * S));
                            }
                        }
                        for(h = 0; h < v; h += 1)u = i[h].a, u.p.propType && (b = i[h].s, S = b.getMult(f[y].anIndexes[h], a.a[h].s.totalChars), this._hasMaskedPath ? S.length ? r.translate(0, u.p.v[1] * S[0], -u.p.v[2] * S[1]) : r.translate(0, u.p.v[1] * S, -u.p.v[2] * S) : S.length ? r.translate(u.p.v[0] * S[0], u.p.v[1] * S[1], -u.p.v[2] * S[2]) : r.translate(u.p.v[0] * S, u.p.v[1] * S, -u.p.v[2] * S));
                        if (t.strokeWidthAnim && (Ot = Pt < 0 ? 0 : Pt), t.strokeColorAnim && (Qt = "rgb(" + Math.round(lt[0] * 255) + "," + Math.round(lt[1] * 255) + "," + Math.round(lt[2] * 255) + ")"), t.fillColorAnim && t.fc && (Nt = "rgb(" + Math.round(G[0] * 255) + "," + Math.round(G[1] * 255) + "," + Math.round(G[2] * 255) + ")"), this._hasMaskedPath) {
                            if (r.translate(0, -t.ls), r.translate(0, s[1] * A * .01 + c, 0), this._pathData.p.v) {
                                N = (_.point[1] - m.point[1]) / (_.point[0] - m.point[0]);
                                var oe = Math.atan(N) * 180 / Math.PI;
                                _.point[0] < m.point[0] && (oe += 180), r.rotate(-oe * Math.PI / 180);
                            }
                            r.translate(Z, X, 0), w -= s[0] * f[y].an * .005, f[y + 1] && H !== f[y + 1].ind && (w += f[y].an / 2, w += t.tr * .001 * t.finalSize);
                        } else {
                            switch(r.translate(o, c, 0), t.ps && r.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j){
                                case 1:
                                    r.translate(f[y].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[f[y].line]), 0, 0);
                                    break;
                                case 2:
                                    r.translate(f[y].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[f[y].line]) / 2, 0, 0);
                                    break;
                            }
                            r.translate(0, -t.ls), r.translate(z, 0, 0), r.translate(s[0] * f[y].an * .005, s[1] * A * .01, 0), o += f[y].l + t.tr * .001 * t.finalSize;
                        }
                        n === "html" ? zt = r.toCSS() : n === "svg" ? zt = r.to2dCSS() : jt = [
                            r.props[0],
                            r.props[1],
                            r.props[2],
                            r.props[3],
                            r.props[4],
                            r.props[5],
                            r.props[6],
                            r.props[7],
                            r.props[8],
                            r.props[9],
                            r.props[10],
                            r.props[11],
                            r.props[12],
                            r.props[13],
                            r.props[14],
                            r.props[15]
                        ], qt = yt;
                    }
                    d <= y ? (M = new vs(qt, Ot, Qt, Nt, zt, jt), this.renderedLetters.push(M), d += 1, this.lettersChangedFlag = !0) : (M = this.renderedLetters[y], this.lettersChangedFlag = M.update(qt, Ot, Qt, Nt, zt, jt) || this.lettersChangedFlag);
                }
            }
        }, ne.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
        }, ne.prototype.mHelper = new it, ne.prototype.defaultPropsArray = [], W([
            ot
        ], ne);
        function kt() {}
        kt.prototype.initElement = function(t, e, s) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, s), this.textProperty = new dt(this, t.t, this.dynamicProperties), this.textAnimator = new ne(t.t, this.renderType, this), this.initTransform(t, e, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
        }, kt.prototype.prepareFrame = function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
        }, kt.prototype.createPathShape = function(t, e) {
            var s, i = e.length, a, r = "";
            for(s = 0; s < i; s += 1)e[s].ty === "sh" && (a = e[s].ks.k, r += ci(a, a.i.length, !0, t));
            return r;
        }, kt.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e);
        }, kt.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t);
        }, kt.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t);
        }, kt.prototype.applyTextPropertiesToMatrix = function(t, e, s, i, a) {
            switch(t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j){
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]) / 2, 0, 0);
                    break;
            }
            e.translate(i, a, 0);
        }, kt.prototype.buildColor = function(t) {
            return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
        }, kt.prototype.emptyProp = new vs, kt.prototype.destroy = function() {}, kt.prototype.validateText = function() {
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
        };
        var Pa = {
            shapes: []
        };
        function Ft(t, e, s) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, s);
        }
        W([
            xt,
            At,
            ce,
            Dt,
            _t,
            re,
            kt
        ], Ft), Ft.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = R("text"));
        }, Ft.prototype.buildTextContents = function(t) {
            for(var e = 0, s = t.length, i = [], a = ""; e < s;)t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(a), a = "") : a += t[e], e += 1;
            return i.push(a), i;
        }, Ft.prototype.buildShapeData = function(t, e) {
            if (t.shapes && t.shapes.length) {
                var s = t.shapes[0];
                if (s.it) {
                    var i = s.it[s.it.length - 1];
                    i.s && (i.s.k[0] = e, i.s.k[1] = e);
                }
            }
            return t;
        }, Ft.prototype.buildNewText = function() {
            this.addDynamicProperty(this);
            var t, e, s = this.textProperty.currentData;
            this.renderedLetters = K(s ? s.l.length : 0), s.fc ? this.layerElement.setAttribute("fill", this.buildColor(s.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), s.sc && (this.layerElement.setAttribute("stroke", this.buildColor(s.sc)), this.layerElement.setAttribute("stroke-width", s.sw)), this.layerElement.setAttribute("font-size", s.finalSize);
            var i = this.globalData.fontManager.getFontByName(s.f);
            if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
            else {
                this.layerElement.setAttribute("font-family", i.fFamily);
                var a = s.fWeight, r = s.fStyle;
                this.layerElement.setAttribute("font-style", r), this.layerElement.setAttribute("font-weight", a);
            }
            this.layerElement.setAttribute("aria-label", s.t);
            var n = s.l || [], d = !!this.globalData.fontManager.chars;
            e = n.length;
            var o, c = this.mHelper, y = "", k = this.data.singleShape, f = 0, P = 0, w = !0, _ = s.tr * .001 * s.finalSize;
            if (k && !d && !s.sz) {
                var D = this.textContainer, g = "start";
                switch(s.j){
                    case 1:
                        g = "end";
                        break;
                    case 2:
                        g = "middle";
                        break;
                    default:
                        g = "start";
                        break;
                }
                D.setAttribute("text-anchor", g), D.setAttribute("letter-spacing", _);
                var l = this.buildTextContents(s.finalText);
                for(e = l.length, P = s.ps ? s.ps[1] + s.ascent : 0, t = 0; t < e; t += 1)o = this.textSpans[t].span || R("tspan"), o.textContent = l[t], o.setAttribute("x", 0), o.setAttribute("y", P), o.style.display = "inherit", D.appendChild(o), this.textSpans[t] || (this.textSpans[t] = {
                    span: null,
                    glyph: null
                }), this.textSpans[t].span = o, P += s.finalLineHeight;
                this.layerElement.appendChild(D);
            } else {
                var p = this.textSpans.length, m;
                for(t = 0; t < e; t += 1){
                    if (this.textSpans[t] || (this.textSpans[t] = {
                        span: null,
                        childSpan: null,
                        glyph: null
                    }), !d || !k || t === 0) {
                        if (o = p > t ? this.textSpans[t].span : R(d ? "g" : "text"), p <= t) {
                            if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, d) {
                                var x = R("g");
                                o.appendChild(x), this.textSpans[t].childSpan = x;
                            }
                            this.textSpans[t].span = o, this.layerElement.appendChild(o);
                        }
                        o.style.display = "inherit";
                    }
                    if (c.reset(), k && (n[t].n && (f = -_, P += s.yOffset, P += w ? 1 : 0, w = !1), this.applyTextPropertiesToMatrix(s, c, n[t].line, f, P), f += n[t].l || 0, f += _), d) {
                        m = this.globalData.fontManager.getCharData(s.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(s.f).fFamily);
                        var C;
                        if (m.t === 1) C = new he(m.data, this.globalData, this);
                        else {
                            var E = Pa;
                            m.data && m.data.shapes && (E = this.buildShapeData(m.data, s.finalSize)), C = new Q(E, this.globalData, this);
                        }
                        if (this.textSpans[t].glyph) {
                            var T = this.textSpans[t].glyph;
                            this.textSpans[t].childSpan.removeChild(T.layerElement), T.destroy();
                        }
                        this.textSpans[t].glyph = C, C._debug = !0, C.prepareFrame(0), C.renderFrame(), this.textSpans[t].childSpan.appendChild(C.layerElement), m.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + s.finalSize / 100 + "," + s.finalSize / 100 + ")");
                    } else k && o.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), o.textContent = n[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                }
                k && o && o.setAttribute("d", y);
            }
            for(; t < this.textSpans.length;)this.textSpans[t].span.style.display = "none", t += 1;
            this._sizeChanged = !0;
        }, Ft.prototype.sourceRectAtTime = function() {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var t = this.layerElement.getBBox();
                this.bbox = {
                    top: t.y,
                    left: t.x,
                    width: t.width,
                    height: t.height
                };
            }
            return this.bbox;
        }, Ft.prototype.getValue = function() {
            var t, e = this.textSpans.length, s;
            for(this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1)s = this.textSpans[t].glyph, s && (s.prepareFrame(this.comp.renderedFrame - this.data.st), s._mdf && (this._mdf = !0));
        }, Ft.prototype.renderInnerContent = function() {
            if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                this._sizeChanged = !0;
                var t, e, s = this.textAnimator.renderedLetters, i = this.textProperty.currentData.l;
                e = i.length;
                var a, r, n;
                for(t = 0; t < e; t += 1)i[t].n || (a = s[t], r = this.textSpans[t].span, n = this.textSpans[t].glyph, n && n.renderFrame(), a._mdf.m && r.setAttribute("transform", a.m), a._mdf.o && r.setAttribute("opacity", a.o), a._mdf.sw && r.setAttribute("stroke-width", a.sw), a._mdf.sc && r.setAttribute("stroke", a.sc), a._mdf.fc && r.setAttribute("fill", a.fc));
            }
        };
        function $e(t, e, s) {
            this.initElement(t, e, s);
        }
        W([
            ge
        ], $e), $e.prototype.createContent = function() {
            var t = R("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
        };
        function Jt(t, e, s) {
            this.initFrame(), this.initBaseData(t, e, s), this.initFrame(), this.initTransform(t, e, s), this.initHierarchy();
        }
        Jt.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0);
        }, Jt.prototype.renderFrame = function() {}, Jt.prototype.getBaseElement = function() {
            return null;
        }, Jt.prototype.destroy = function() {}, Jt.prototype.sourceRectAtTime = function() {}, Jt.prototype.hide = function() {}, W([
            xt,
            At,
            Dt,
            _t
        ], Jt);
        function rt() {}
        W([
            at
        ], rt), rt.prototype.createNull = function(t) {
            return new Jt(t, this.globalData, this);
        }, rt.prototype.createShape = function(t) {
            return new Q(t, this.globalData, this);
        }, rt.prototype.createText = function(t) {
            return new Ft(t, this.globalData, this);
        }, rt.prototype.createImage = function(t) {
            return new ge(t, this.globalData, this);
        }, rt.prototype.createSolid = function(t) {
            return new $e(t, this.globalData, this);
        }, rt.prototype.configAnimation = function(t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var s = R("clipPath"), i = R("rect");
            i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
            var a = ut();
            s.setAttribute("id", a), s.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + bt() + "#" + a + ")"), e.appendChild(s), this.layers = t.layers, this.elements = K(t.layers.length);
        }, rt.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
        }, rt.prototype.updateContainerSize = function() {}, rt.prototype.findIndexByInd = function(t) {
            var e = 0, s = this.layers.length;
            for(e = 0; e < s; e += 1)if (this.layers[e].ind === t) return e;
            return -1;
        }, rt.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!(e[t] || this.layers[t].ty === 99)) {
                e[t] = !0;
                var s = this.createItem(this.layers[t]);
                if (e[t] = s, Re() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(s), s.initExpressions()), this.appendElementInPos(s, t), this.layers[t].tt) {
                    var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                    if (i === -1) return;
                    if (!this.elements[i] || this.elements[i] === !0) this.buildItem(i), this.addPendingElement(s);
                    else {
                        var a = e[i], r = a.getMatte(this.layers[t].tt);
                        s.setMatte(r);
                    }
                }
            }
        }, rt.prototype.checkPendingElements = function() {
            for(; this.pendingElements.length;){
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt) for(var e = 0, s = this.elements.length; e < s;){
                    if (this.elements[e] === t) {
                        var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, a = this.elements[i], r = a.getMatte(this.layers[e].tt);
                        t.setMatte(r);
                        break;
                    }
                    e += 1;
                }
            }
        }, rt.prototype.renderFrame = function(t) {
            if (!(this.renderedFrame === t || this.destroyed)) {
                t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var e, s = this.layers.length;
                for(this.completeLayers || this.checkLayers(t), e = s - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf) for(e = 0; e < s; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }
        }, rt.prototype.appendElementInPos = function(t, e) {
            var s = t.getBaseElement();
            if (s) {
                for(var i = 0, a; i < e;)this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (a = this.elements[i].getBaseElement()), i += 1;
                a ? this.layerElement.insertBefore(s, a) : this.layerElement.appendChild(s);
            }
        }, rt.prototype.hide = function() {
            this.layerElement.style.display = "none";
        }, rt.prototype.show = function() {
            this.layerElement.style.display = "block";
        };
        function It() {}
        W([
            xt,
            At,
            Dt,
            _t,
            re
        ], It), It.prototype.initElement = function(t, e, s) {
            this.initFrame(), this.initBaseData(t, e, s), this.initTransform(t, e, s), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
        }, It.prototype.prepareFrame = function(t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
                }
                var s, i = this.elements.length;
                for(this.completeLayers || this.checkLayers(this.renderedFrame), s = i - 1; s >= 0; s -= 1)(this.completeLayers || this.elements[s]) && (this.elements[s].prepareFrame(this.renderedFrame - this.layers[s].st), this.elements[s]._mdf && (this._mdf = !0));
            }
        }, It.prototype.renderInnerContent = function() {
            var t, e = this.layers.length;
            for(t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
        }, It.prototype.setElements = function(t) {
            this.elements = t;
        }, It.prototype.getElements = function() {
            return this.elements;
        }, It.prototype.destroyElements = function() {
            var t, e = this.layers.length;
            for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy();
        }, It.prototype.destroy = function() {
            this.destroyElements(), this.destroyBaseElement();
        };
        function he(t, e, s) {
            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? K(this.layers.length) : [], this.initElement(t, e, s), this.tm = t.tm ? I.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            };
        }
        W([
            rt,
            It,
            ce
        ], he), he.prototype.createComp = function(t) {
            return new he(t, this.globalData, this);
        };
        function Fe(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = R("svg");
            var s = "";
            if (e && e.title) {
                var i = R("title"), a = ut();
                i.setAttribute("id", a), i.textContent = e.title, this.svgElement.appendChild(i), s += a;
            }
            if (e && e.description) {
                var r = R("desc"), n = ut();
                r.setAttribute("id", n), r.textContent = e.description, this.svgElement.appendChild(r), s += " " + n;
            }
            s && this.svgElement.setAttribute("aria-labelledby", s);
            var d = R("defs");
            this.svgElement.appendChild(d);
            var o = R("g");
            this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                progressiveLoad: e && e.progressiveLoad || !1,
                hideOnTransparent: !(e && e.hideOnTransparent === !1),
                viewBoxOnly: e && e.viewBoxOnly || !1,
                viewBoxSize: e && e.viewBoxSize || !1,
                className: e && e.className || "",
                id: e && e.id || "",
                focusable: e && e.focusable,
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "100%",
                    height: e && e.filterSize && e.filterSize.height || "100%",
                    x: e && e.filterSize && e.filterSize.x || "0%",
                    y: e && e.filterSize && e.filterSize.y || "0%"
                },
                width: e && e.width,
                height: e && e.height,
                runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: d,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
        }
        W([
            rt
        ], Fe), Fe.prototype.createComp = function(t) {
            return new he(t, this.globalData, this);
        };
        var gi = {};
        function bs(t) {
            var e, s = t.data.ef ? t.data.ef.length : 0;
            this.filters = [];
            var i;
            for(e = 0; e < s; e += 1){
                i = null;
                var a = t.data.ef[e].ty;
                if (gi[a]) {
                    var r = gi[a].effect;
                    i = new r(t.effectsManager.effectElements[e], t);
                }
                i && this.filters.push(i);
            }
            this.filters.length && t.addRenderableComponent(this);
        }
        bs.prototype.renderFrame = function(t) {
            var e, s = this.filters.length;
            for(e = 0; e < s; e += 1)this.filters[e].renderFrame(t);
        }, bs.prototype.getEffects = function(t) {
            var e, s = this.filters.length, i = [];
            for(e = 0; e < s; e += 1)this.filters[e].type === t && i.push(this.filters[e]);
            return i;
        };
        function Lt() {}
        Lt.prototype = {
            checkBlendMode: function() {},
            initRendererElement: function() {
                this.baseElement = nt(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = R("svg"), this.layerElement = R("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, Wt(this.baseElement);
            },
            createContainerElements: function() {
                this.renderableEffectsManager = new bs(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode();
            },
            renderElement: function() {
                var t = this.transformedElement ? this.transformedElement.style : {};
                if (this.finalTransform._matMdf) {
                    var e = this.finalTransform.mat.toCSS();
                    t.transform = e, t.webkitTransform = e;
                }
                this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v);
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
            },
            destroy: function() {
                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
            },
            createRenderableComponents: function() {
                this.maskManager = new Gt(this.data, this, this.globalData);
            },
            addEffects: function() {},
            setMatte: function() {}
        }, Lt.prototype.getBaseElement = ce.prototype.getBaseElement, Lt.prototype.destroyBaseElement = Lt.prototype.destroy, Lt.prototype.buildElementParenting = at.prototype.buildElementParenting;
        function Ie(t, e, s) {
            this.initElement(t, e, s);
        }
        W([
            xt,
            At,
            Lt,
            Dt,
            _t,
            re
        ], Ie), Ie.prototype.createContent = function() {
            var t;
            this.data.hasMask ? (t = R("rect"), t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (t = nt("div"), t.style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
        };
        function ft(t, e, s) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = R("g"), this.initElement(t, e, s), this.prevViewData = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            };
        }
        W([
            xt,
            At,
            Ie,
            Q,
            Lt,
            Dt,
            _t,
            ue
        ], ft), ft.prototype._renderShapeFrame = ft.prototype.renderInnerContent, ft.prototype.createContent = function() {
            var t;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
            else {
                t = R("svg");
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t;
        }, ft.prototype.getTransformedPoint = function(t, e) {
            var s, i = t.length;
            for(s = 0; s < i; s += 1)e = t[s].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e;
        }, ft.prototype.calculateShapeBoundingBox = function(t, e) {
            var s = t.sh.v, i = t.transformers, a, r = s._length, n, d, o, c;
            if (!(r <= 1)) {
                for(a = 0; a < r - 1; a += 1)n = this.getTransformedPoint(i, s.v[a]), d = this.getTransformedPoint(i, s.o[a]), o = this.getTransformedPoint(i, s.i[a + 1]), c = this.getTransformedPoint(i, s.v[a + 1]), this.checkBounds(n, d, o, c, e);
                s.c && (n = this.getTransformedPoint(i, s.v[a]), d = this.getTransformedPoint(i, s.o[a]), o = this.getTransformedPoint(i, s.i[0]), c = this.getTransformedPoint(i, s.v[0]), this.checkBounds(n, d, o, c, e));
            }
        }, ft.prototype.checkBounds = function(t, e, s, i, a) {
            this.getBoundsOfCurve(t, e, s, i);
            var r = this.shapeBoundingBox;
            a.x = be(r.left, a.x), a.xMax = Ve(r.right, a.xMax), a.y = be(r.top, a.y), a.yMax = Ve(r.bottom, a.yMax);
        }, ft.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, ft.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        }, ft.prototype.getBoundsOfCurve = function(t, e, s, i) {
            for(var a = [
                [
                    t[0],
                    i[0]
                ],
                [
                    t[1],
                    i[1]
                ]
            ], r, n, d, o, c, y, k, f = 0; f < 2; ++f)n = 6 * t[f] - 12 * e[f] + 6 * s[f], r = -3 * t[f] + 9 * e[f] - 9 * s[f] + 3 * i[f], d = 3 * e[f] - 3 * t[f], n |= 0, r |= 0, d |= 0, r === 0 && n === 0 || (r === 0 ? (o = -d / n, o > 0 && o < 1 && a[f].push(this.calculateF(o, t, e, s, i, f))) : (c = n * n - 4 * d * r, c >= 0 && (y = (-n + ze(c)) / (2 * r), y > 0 && y < 1 && a[f].push(this.calculateF(y, t, e, s, i, f)), k = (-n - ze(c)) / (2 * r), k > 0 && k < 1 && a[f].push(this.calculateF(k, t, e, s, i, f)))));
            this.shapeBoundingBox.left = be.apply(null, a[0]), this.shapeBoundingBox.top = be.apply(null, a[1]), this.shapeBoundingBox.right = Ve.apply(null, a[0]), this.shapeBoundingBox.bottom = Ve.apply(null, a[1]);
        }, ft.prototype.calculateF = function(t, e, s, i, a, r) {
            return mt(1 - t, 3) * e[r] + 3 * mt(1 - t, 2) * t * s[r] + 3 * (1 - t) * mt(t, 2) * i[r] + mt(t, 3) * a[r];
        }, ft.prototype.calculateBoundingBox = function(t, e) {
            var s, i = t.length;
            for(s = 0; s < i; s += 1)t[s] && t[s].sh ? this.calculateShapeBoundingBox(t[s], e) : t[s] && t[s].it ? this.calculateBoundingBox(t[s].it, e) : t[s] && t[s].style && t[s].w && this.expandStrokeBoundingBox(t[s].w, e);
        }, ft.prototype.expandStrokeBoundingBox = function(t, e) {
            var s = 0;
            if (t.keyframes) {
                for(var i = 0; i < t.keyframes.length; i += 1){
                    var a = t.keyframes[i].s;
                    a > s && (s = a);
                }
                s *= t.mult;
            } else s = t.v * t.mult;
            e.x -= s, e.xMax += s, e.y -= s, e.yMax += s;
        }, ft.prototype.currentBoxContains = function(t) {
            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
        }, ft.prototype.renderInnerContent = function() {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t = this.tempBoundingBox, e = 999999;
                if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                var s = !1;
                if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), s = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), s = !0), s || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                    this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                    var i = this.shapeCont.style, a = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    i.transform = a, i.webkitTransform = a;
                }
            }
        };
        function Le(t, e, s) {
            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, s);
        }
        W([
            xt,
            At,
            Lt,
            Dt,
            _t,
            re,
            kt
        ], Le), Le.prototype.createContent = function() {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var t = R("g");
                this.maskedElement.appendChild(t), this.innerElem = t;
            } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting();
        }, Le.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = K(t.l ? t.l.length : 0);
            var e = this.innerElem.style, s = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = s, e.color = s, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
            var i = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars) {
                if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", i.fClass) this.innerElem.className = i.fClass;
                else {
                    e.fontFamily = i.fFamily;
                    var a = t.fWeight, r = t.fStyle;
                    e.fontStyle = r, e.fontWeight = a;
                }
            }
            var n, d, o = t.l;
            d = o.length;
            var c, y, k, f = this.mHelper, P, w = "", _ = 0;
            for(n = 0; n < d; n += 1){
                if (this.globalData.fontManager.chars ? (this.textPaths[_] ? c = this.textPaths[_] : (c = R("path"), c.setAttribute("stroke-linecap", gs[1]), c.setAttribute("stroke-linejoin", ys[2]), c.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[_] ? (y = this.textSpans[_], k = y.children[0]) : (y = nt("div"), y.style.lineHeight = 0, k = R("svg"), k.appendChild(c), Wt(y)))) : this.isMasked ? c = this.textPaths[_] ? this.textPaths[_] : R("text") : this.textSpans[_] ? (y = this.textSpans[_], c = this.textPaths[_]) : (y = nt("span"), Wt(y), c = nt("span"), Wt(c), y.appendChild(c)), this.globalData.fontManager.chars) {
                    var D = this.globalData.fontManager.getCharData(t.finalText[n], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), g;
                    if (D ? g = D.data : g = null, f.reset(), g && g.shapes && g.shapes.length && (P = g.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), w = this.createPathShape(f, P), c.setAttribute("d", w)), this.isMasked) this.innerElem.appendChild(c);
                    else {
                        if (this.innerElem.appendChild(y), g && g.shapes) {
                            document.body.appendChild(k);
                            var l = k.getBBox();
                            k.setAttribute("width", l.width + 2), k.setAttribute("height", l.height + 2), k.setAttribute("viewBox", l.x - 1 + " " + (l.y - 1) + " " + (l.width + 2) + " " + (l.height + 2));
                            var p = k.style, m = "translate(" + (l.x - 1) + "px," + (l.y - 1) + "px)";
                            p.transform = m, p.webkitTransform = m, o[n].yOffset = l.y - 1;
                        } else k.setAttribute("width", 1), k.setAttribute("height", 1);
                        y.appendChild(k);
                    }
                } else if (c.textContent = o[n].val, c.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(c);
                else {
                    this.innerElem.appendChild(y);
                    var x = c.style, C = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                    x.transform = C, x.webkitTransform = C;
                }
                this.isMasked ? this.textSpans[_] = c : this.textSpans[_] = y, this.textSpans[_].style.display = "block", this.textPaths[_] = c, _ += 1;
            }
            for(; _ < this.textSpans.length;)this.textSpans[_].style.display = "none", _ += 1;
        }, Le.prototype.renderInnerContent = function() {
            this.validateText();
            var t;
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                    var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    t.transform = e, t.webkitTransform = e;
                }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
                var s, i, a = 0, r = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l;
                i = n.length;
                var d, o, c;
                for(s = 0; s < i; s += 1)n[s].n ? a += 1 : (o = this.textSpans[s], c = this.textPaths[s], d = r[a], a += 1, d._mdf.m && (this.isMasked ? o.setAttribute("transform", d.m) : (o.style.webkitTransform = d.m, o.style.transform = d.m)), o.style.opacity = d.o, d.sw && d._mdf.sw && c.setAttribute("stroke-width", d.sw), d.sc && d._mdf.sc && c.setAttribute("stroke", d.sc), d.fc && d._mdf.fc && (c.setAttribute("fill", d.fc), c.style.color = d.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var y = this.innerElem.getBBox();
                    this.currentBBox.w !== y.width && (this.currentBBox.w = y.width, this.svgElement.setAttribute("width", y.width)), this.currentBBox.h !== y.height && (this.currentBBox.h = y.height, this.svgElement.setAttribute("height", y.height));
                    var k = 1;
                    if (this.currentBBox.w !== y.width + k * 2 || this.currentBBox.h !== y.height + k * 2 || this.currentBBox.x !== y.x - k || this.currentBBox.y !== y.y - k) {
                        this.currentBBox.w = y.width + k * 2, this.currentBBox.h = y.height + k * 2, this.currentBBox.x = y.x - k, this.currentBBox.y = y.y - k, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                        var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        t.transform = f, t.webkitTransform = f;
                    }
                }
            }
        };
        function Rt(t, e, s) {
            this.initFrame(), this.initBaseData(t, e, s), this.initHierarchy();
            var i = I.getProp;
            if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                var a, r = t.ks.or.k.length;
                for(a = 0; a < r; a += 1)t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null;
            }
            this.or = i(this, t.ks.or, 1, J, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, J, this), this.ry = i(this, t.ks.ry, 0, J, this), this.rz = i(this, t.ks.rz, 0, J, this), this.mat = new it, this._prevMat = new it, this._isFirstFrame = !0, this.finalTransform = {
                mProp: this
            };
        }
        W([
            xt,
            _t,
            Dt
        ], Rt), Rt.prototype.setup = function() {
            var t, e = this.comp.threeDElements.length, s, i, a;
            for(t = 0; t < e; t += 1)if (s = this.comp.threeDElements[t], s.type === "3d") {
                i = s.perspectiveElem.style, a = s.container.style;
                var r = this.pe.v + "px", n = "0px 0px 0px", d = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                i.perspective = r, i.webkitPerspective = r, a.transformOrigin = n, a.mozTransformOrigin = n, a.webkitTransformOrigin = n, i.transform = d, i.webkitTransform = d;
            }
        }, Rt.prototype.createElements = function() {}, Rt.prototype.hide = function() {}, Rt.prototype.renderFrame = function() {
            var t = this._isFirstFrame, e, s;
            if (this.hierarchy) for(s = this.hierarchy.length, e = 0; e < s; e += 1)t = this.hierarchy[e].finalTransform.mProp._mdf || t;
            if (t || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy) for(s = this.hierarchy.length - 1, e = s; e >= 0; e -= 1){
                    var i = this.hierarchy[e].finalTransform.mProp;
                    this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
                }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                    var a;
                    this.p ? a = [
                        this.p.v[0] - this.a.v[0],
                        this.p.v[1] - this.a.v[1],
                        this.p.v[2] - this.a.v[2]
                    ] : a = [
                        this.px.v - this.a.v[0],
                        this.py.v - this.a.v[1],
                        this.pz.v - this.a.v[2]
                    ];
                    var r = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)), n = [
                        a[0] / r,
                        a[1] / r,
                        a[2] / r
                    ], d = Math.sqrt(n[2] * n[2] + n[0] * n[0]), o = Math.atan2(n[1], d), c = Math.atan2(n[0], -n[2]);
                    this.mat.rotateY(c).rotateX(-o);
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var y = !this._prevMat.equals(this.mat);
                if ((y || this.pe._mdf) && this.comp.threeDElements) {
                    s = this.comp.threeDElements.length;
                    var k, f, P;
                    for(e = 0; e < s; e += 1)if (k = this.comp.threeDElements[e], k.type === "3d") {
                        if (y) {
                            var w = this.mat.toCSS();
                            P = k.container.style, P.transform = w, P.webkitTransform = w;
                        }
                        this.pe._mdf && (f = k.perspectiveElem.style, f.perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px");
                    }
                    this.mat.clone(this._prevMat);
                }
            }
            this._isFirstFrame = !1;
        }, Rt.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0);
        }, Rt.prototype.destroy = function() {}, Rt.prototype.getBaseElement = function() {
            return null;
        };
        function xs(t, e, s) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, s);
        }
        W([
            xt,
            At,
            Lt,
            Ie,
            Dt,
            _t,
            ue
        ], xs), xs.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData), e = new Image;
            this.data.hasMask ? (this.imageElem = R("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
        };
        function Y(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && e.hideOnTransparent === !1),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
        }
        W([
            at
        ], Y), Y.prototype.buildItem = Fe.prototype.buildItem, Y.prototype.checkPendingElements = function() {
            for(; this.pendingElements.length;){
                var t = this.pendingElements.pop();
                t.checkParenting();
            }
        }, Y.prototype.appendElementInPos = function(t, e) {
            var s = t.getBaseElement();
            if (s) {
                var i = this.layers[e];
                if (!i.ddd || !this.supports3d) {
                    if (this.threeDElements) this.addTo3dContainer(s, e);
                    else {
                        for(var a = 0, r, n, d; a < e;)this.elements[a] && this.elements[a] !== !0 && this.elements[a].getBaseElement && (n = this.elements[a], d = this.layers[a].ddd ? this.getThreeDContainerByPos(a) : n.getBaseElement(), r = d || r), a += 1;
                        r ? (!i.ddd || !this.supports3d) && this.layerElement.insertBefore(s, r) : (!i.ddd || !this.supports3d) && this.layerElement.appendChild(s);
                    }
                } else this.addTo3dContainer(s, e);
            }
        }, Y.prototype.createShape = function(t) {
            return this.supports3d ? new ft(t, this.globalData, this) : new Q(t, this.globalData, this);
        }, Y.prototype.createText = function(t) {
            return this.supports3d ? new Le(t, this.globalData, this) : new Ft(t, this.globalData, this);
        }, Y.prototype.createCamera = function(t) {
            return this.camera = new Rt(t, this.globalData, this), this.camera;
        }, Y.prototype.createImage = function(t) {
            return this.supports3d ? new xs(t, this.globalData, this) : new ge(t, this.globalData, this);
        }, Y.prototype.createSolid = function(t) {
            return this.supports3d ? new Ie(t, this.globalData, this) : new $e(t, this.globalData, this);
        }, Y.prototype.createNull = Fe.prototype.createNull, Y.prototype.getThreeDContainerByPos = function(t) {
            for(var e = 0, s = this.threeDElements.length; e < s;){
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                e += 1;
            }
            return null;
        }, Y.prototype.createThreeDContainer = function(t, e) {
            var s = nt("div"), i, a;
            Wt(s);
            var r = nt("div");
            if (Wt(r), e === "3d") {
                i = s.style, i.width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
                var n = "50% 50%";
                i.webkitTransformOrigin = n, i.mozTransformOrigin = n, i.transformOrigin = n, a = r.style;
                var d = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                a.transform = d, a.webkitTransform = d;
            }
            s.appendChild(r);
            var o = {
                container: r,
                perspectiveElem: s,
                startPos: t,
                endPos: t,
                type: e
            };
            return this.threeDElements.push(o), o;
        }, Y.prototype.build3dContainers = function() {
            var t, e = this.layers.length, s, i = "";
            for(t = 0; t < e; t += 1)this.layers[t].ddd && this.layers[t].ty !== 3 ? (i !== "3d" && (i = "3d", s = this.createThreeDContainer(t, "3d")), s.endPos = Math.max(s.endPos, t)) : (i !== "2d" && (i = "2d", s = this.createThreeDContainer(t, "2d")), s.endPos = Math.max(s.endPos, t));
            for(e = this.threeDElements.length, t = e - 1; t >= 0; t -= 1)this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
        }, Y.prototype.addTo3dContainer = function(t, e) {
            for(var s = 0, i = this.threeDElements.length; s < i;){
                if (e <= this.threeDElements[s].endPos) {
                    for(var a = this.threeDElements[s].startPos, r; a < e;)this.elements[a] && this.elements[a].getBaseElement && (r = this.elements[a].getBaseElement()), a += 1;
                    r ? this.threeDElements[s].container.insertBefore(t, r) : this.threeDElements[s].container.appendChild(t);
                    break;
                }
                s += 1;
            }
        }, Y.prototype.configAnimation = function(t) {
            var e = nt("div"), s = this.animationItem.wrapper, i = e.style;
            i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, Wt(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), s.appendChild(e), i.overflow = "hidden";
            var a = R("svg");
            a.setAttribute("width", "1"), a.setAttribute("height", "1"), Wt(a), this.resizerElem.appendChild(a);
            var r = R("defs");
            a.appendChild(r), this.data = t, this.setupGlobalData(t, a), this.globalData.defs = r, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
        }, Y.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
        }, Y.prototype.updateContainerSize = function() {
            var t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, s = t / e, i = this.globalData.compSize.w / this.globalData.compSize.h, a, r, n, d;
            i > s ? (a = t / this.globalData.compSize.w, r = t / this.globalData.compSize.w, n = 0, d = (e - this.globalData.compSize.h * (t / this.globalData.compSize.w)) / 2) : (a = e / this.globalData.compSize.h, r = e / this.globalData.compSize.h, n = (t - this.globalData.compSize.w * (e / this.globalData.compSize.h)) / 2, d = 0);
            var o = this.resizerElem.style;
            o.webkitTransform = "matrix3d(" + a + ",0,0,0,0," + r + ",0,0,0,0,1,0," + n + "," + d + ",0,1)", o.transform = o.webkitTransform;
        }, Y.prototype.renderFrame = Fe.prototype.renderFrame, Y.prototype.hide = function() {
            this.resizerElem.style.display = "none";
        }, Y.prototype.show = function() {
            this.resizerElem.style.display = "block";
        }, Y.prototype.initItems = function() {
            if (this.buildAllItems(), this.camera) this.camera.setup();
            else {
                var t = this.globalData.compSize.w, e = this.globalData.compSize.h, s, i = this.threeDElements.length;
                for(s = 0; s < i; s += 1){
                    var a = this.threeDElements[s].perspectiveElem.style;
                    a.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px", a.perspective = a.webkitPerspective;
                }
            }
        }, Y.prototype.searchExtraCompositions = function(t) {
            var e, s = t.length, i = nt("div");
            for(e = 0; e < s; e += 1)if (t[e].xt) {
                var a = this.createComp(t[e], i, this.globalData.comp, null);
                a.initExpressions(), this.globalData.projectInterface.registerComposition(a);
            }
        };
        function Yt(t, e, s) {
            this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? K(this.layers.length) : [], this.initElement(t, e, s), this.tm = t.tm ? I.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            };
        }
        W([
            Y,
            It,
            Lt
        ], Yt), Yt.prototype._createBaseContainerElements = Yt.prototype.createContainerElements, Yt.prototype.createContainerElements = function() {
            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
        }, Yt.prototype.addTo3dContainer = function(t, e) {
            for(var s = 0, i; s < e;)this.elements[s] && this.elements[s].getBaseElement && (i = this.elements[s].getBaseElement()), s += 1;
            i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t);
        }, Yt.prototype.createComp = function(t) {
            return this.supports3d ? new Yt(t, this.globalData, this) : new he(t, this.globalData, this);
        };
        function _s(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && e.hideOnTransparent === !1),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                },
                runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
        }
        return W([
            Y
        ], _s), _s.prototype.createComp = function(t) {
            return this.supports3d ? new Yt(t, this.globalData, this) : new he(t, this.globalData, this);
        }, Ii("html", _s), Xt.registerModifier("tm", St), Xt.registerModifier("pb", we), Xt.registerModifier("rp", Tt), Xt.registerModifier("rd", Se), Xt.registerModifier("zz", Ce), Xt.registerModifier("op", Me), U;
    });
}), Da = wa(); /*! Bundled license information:

lottie-web/build/player/lottie_light_html.js:
  (*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   *)
*/ 

},{"./chunk-U2GK2GFR.mjs":"bBhes","./chunk-XNFEUXDS.mjs":"4Lvnj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1GHcK"], null, "parcelRequire8861")

//# sourceMappingURL=lottie_light_html-QXO6XUZK-DGMP7OWN.5f332840.js.map
