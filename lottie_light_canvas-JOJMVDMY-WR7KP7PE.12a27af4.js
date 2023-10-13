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
})({"fNvPp":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f759960e12a27af4";
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

},{}],"2AlbM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Ea) //# sourceMappingURL=out.js.map
;
var _chunkU2GK2GFRMjs = require("./chunk-U2GK2GFR.mjs");
var _chunkXNFEUXDSMjs = require("./chunk-XNFEUXDS.mjs");
var wa = (0, _chunkU2GK2GFRMjs.a)((Re, ss)=>{
    typeof navigator < "u" && function(ve, he) {
        typeof Re == "object" && typeof ss < "u" ? ss.exports = he() : typeof define == "function" && define.amd ? define(he) : (ve = typeof globalThis < "u" ? globalThis : ve || self, ve.lottie = he());
    }(Re, function() {
        var ve = "http://www.w3.org/2000/svg", he = "", ks = !1, is = -999999, Ci = function(t) {
            ks = !!t;
        }, ki = function() {
            return ks;
        }, Pi = function(t) {
            he = t;
        }, bt = function() {
            return he;
        };
        function _t(t) {
            return document.createElement(t);
        }
        function J(t, e) {
            var s, i = t.length, r;
            for(s = 0; s < i; s += 1){
                r = t[s].prototype;
                for(var a in r)Object.prototype.hasOwnProperty.call(r, a) && (e.prototype[a] = r[a]);
            }
        }
        function Si(t) {
            function e() {}
            return e.prototype = t, e;
        }
        var Di = function() {
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
        }(), at = function() {
            function t(s, i) {
                var r = 0, a = [], n;
                switch(s){
                    case "int16":
                    case "uint8c":
                        n = 1;
                        break;
                    default:
                        n = 1.1;
                        break;
                }
                for(r = 0; r < i; r += 1)a.push(n);
                return a;
            }
            function e(s, i) {
                return s === "float32" ? new Float32Array(i) : s === "int16" ? new Int16Array(i) : s === "uint8c" ? new Uint8ClampedArray(i) : t(s, i);
            }
            return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
        }();
        function Q(t) {
            return Array.apply(null, {
                length: t
            });
        }
        var Ps = !0, Ss = null, Ds = "", Ai = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), Mt = Math.pow, As = Math.sqrt, ft = Math.floor, Ti = Math.min, Ts = 150, Z = Math.PI / 180, Yt = .5519;
        function as(t, e, s, i) {
            this.type = t, this.currentTime = e, this.totalTime = s, this.direction = i < 0 ? -1 : 1;
        }
        function Ms(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1;
        }
        function ws(t, e, s, i) {
            this.type = t, this.currentLoop = s, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
        }
        function Fs(t, e, s) {
            this.type = t, this.firstFrame = e, this.totalFrames = s;
        }
        function Es(t, e) {
            this.type = t, this.target = e;
        }
        function Mi(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
        }
        function wi(t) {
            this.type = "configError", this.nativeError = t;
        }
        var mt = function() {
            var t = 0;
            return function() {
                return t += 1, Ds + "__lottie_element_" + t;
            };
        }();
        function rs(t, e, s) {
            var i, r, a, n, l, o, m, g;
            switch(n = Math.floor(t * 6), l = t * 6 - n, o = s * (1 - e), m = s * (1 - l * e), g = s * (1 - (1 - l) * e), n % 6){
                case 0:
                    i = s, r = g, a = o;
                    break;
                case 1:
                    i = m, r = s, a = o;
                    break;
                case 2:
                    i = o, r = s, a = g;
                    break;
                case 3:
                    i = o, r = m, a = s;
                    break;
                case 4:
                    i = g, r = o, a = s;
                    break;
                case 5:
                    i = s, r = o, a = m;
                    break;
            }
            return [
                i,
                r,
                a
            ];
        }
        function ns(t, e, s) {
            var i = Math.max(t, e, s), r = Math.min(t, e, s), a = i - r, n, l = i === 0 ? 0 : a / i, o = i / 255;
            switch(i){
                case r:
                    n = 0;
                    break;
                case t:
                    n = e - s + a * (e < s ? 6 : 0), n /= 6 * a;
                    break;
                case e:
                    n = s - t + a * 2, n /= 6 * a;
                    break;
                case s:
                    n = t - e + a * 4, n /= 6 * a;
                    break;
            }
            return [
                n,
                l,
                o
            ];
        }
        function Ls(t, e) {
            var s = ns(t[0] * 255, t[1] * 255, t[2] * 255);
            return s[1] += e, s[1] > 1 ? s[1] = 1 : s[1] <= 0 && (s[1] = 0), rs(s[0], s[1], s[2]);
        }
        function Is(t, e) {
            var s = ns(t[0] * 255, t[1] * 255, t[2] * 255);
            return s[2] += e, s[2] > 1 ? s[2] = 1 : s[2] < 0 && (s[2] = 0), rs(s[0], s[1], s[2]);
        }
        function Rs(t, e) {
            var s = ns(t[0] * 255, t[1] * 255, t[2] * 255);
            return s[0] += e / 360, s[0] > 1 ? s[0] -= 1 : s[0] < 0 && (s[0] += 1), rs(s[0], s[1], s[2]);
        }
        (function() {
            var t = [], e, s;
            for(e = 0; e < 256; e += 1)s = e.toString(16), t[e] = s.length === 1 ? "0" + s : s;
            return function(i, r, a) {
                return i < 0 && (i = 0), r < 0 && (r = 0), a < 0 && (a = 0), "#" + t[i] + t[r] + t[a];
            };
        })();
        var Fi = function(t) {
            Ps = !!t;
        }, Ei = function() {
            return Ps;
        }, Li = function(t) {
            Ss = t;
        }, ze = function() {
            return Ss;
        }, Oe = function(t) {
            Ts = t;
        }, Ve = function() {
            return Ts;
        }, Ii = function(t) {
            Ds = t;
        };
        function B(t) {
            return document.createElementNS(ve, t);
        }
        function Ne(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ne = function(e) {
                return typeof e;
            } : Ne = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, Ne(t);
        }
        var be = function() {
            var t = 1, e = [], s, i, r = {
                onmessage: function() {},
                postMessage: function(f) {
                    s({
                        data: f
                    });
                }
            }, a = {
                postMessage: function(f) {
                    r.onmessage({
                        data: f
                    });
                }
            };
            function n(f) {
                if (window.Worker && window.Blob && ki()) {
                    var P = new Blob([
                        "var _workerSelf = self; self.onmessage = ",
                        f.toString()
                    ], {
                        type: "text/javascript"
                    }), k = URL.createObjectURL(P);
                    return new Worker(k);
                }
                return s = f, r;
            }
            function l() {
                i || (i = n(function(f) {
                    function P() {
                        function v(F, E) {
                            var u, _, h = F.length, b, T, S, j;
                            for(_ = 0; _ < h; _ += 1)if (u = F[_], "ks" in u && !u.completed) {
                                if (u.completed = !0, u.hasMask) {
                                    var z = u.masksProperties;
                                    for(T = z.length, b = 0; b < T; b += 1)if (z[b].pt.k.i) d(z[b].pt.k);
                                    else for(j = z[b].pt.k.length, S = 0; S < j; S += 1)z[b].pt.k[S].s && d(z[b].pt.k[S].s[0]), z[b].pt.k[S].e && d(z[b].pt.k[S].e[0]);
                                }
                                u.ty === 0 ? (u.layers = c(u.refId, E), v(u.layers, E)) : u.ty === 4 ? p(u.shapes) : u.ty === 5 && R(u);
                            }
                        }
                        function D(F, E) {
                            if (F) {
                                var u = 0, _ = F.length;
                                for(u = 0; u < _; u += 1)F[u].t === 1 && (F[u].data.layers = c(F[u].data.refId, E), v(F[u].data.layers, E));
                            }
                        }
                        function y(F, E) {
                            for(var u = 0, _ = E.length; u < _;){
                                if (E[u].id === F) return E[u];
                                u += 1;
                            }
                            return null;
                        }
                        function c(F, E) {
                            var u = y(F, E);
                            return u ? u.layers.__used ? JSON.parse(JSON.stringify(u.layers)) : (u.layers.__used = !0, u.layers) : null;
                        }
                        function p(F) {
                            var E, u = F.length, _, h;
                            for(E = u - 1; E >= 0; E -= 1)if (F[E].ty === "sh") {
                                if (F[E].ks.k.i) d(F[E].ks.k);
                                else for(h = F[E].ks.k.length, _ = 0; _ < h; _ += 1)F[E].ks.k[_].s && d(F[E].ks.k[_].s[0]), F[E].ks.k[_].e && d(F[E].ks.k[_].e[0]);
                            } else F[E].ty === "gr" && p(F[E].it);
                        }
                        function d(F) {
                            var E, u = F.i.length;
                            for(E = 0; E < u; E += 1)F.i[E][0] += F.v[E][0], F.i[E][1] += F.v[E][1], F.o[E][0] += F.v[E][0], F.o[E][1] += F.v[E][1];
                        }
                        function x(F, E) {
                            var u = E ? E.split(".") : [
                                100,
                                100,
                                100
                            ];
                            return F[0] > u[0] ? !0 : u[0] > F[0] ? !1 : F[1] > u[1] ? !0 : u[1] > F[1] ? !1 : F[2] > u[2] ? !0 : u[2] > F[2] ? !1 : null;
                        }
                        var A = function() {
                            var F = [
                                4,
                                4,
                                14
                            ];
                            function E(_) {
                                var h = _.t.d;
                                _.t.d = {
                                    k: [
                                        {
                                            s: h,
                                            t: 0
                                        }
                                    ]
                                };
                            }
                            function u(_) {
                                var h, b = _.length;
                                for(h = 0; h < b; h += 1)_[h].ty === 5 && E(_[h]);
                            }
                            return function(_) {
                                if (x(F, _.v) && (u(_.layers), _.assets)) {
                                    var h, b = _.assets.length;
                                    for(h = 0; h < b; h += 1)_.assets[h].layers && u(_.assets[h].layers);
                                }
                            };
                        }(), M = function() {
                            var F = [
                                4,
                                7,
                                99
                            ];
                            return function(E) {
                                if (E.chars && !x(F, E.v)) {
                                    var u, _ = E.chars.length;
                                    for(u = 0; u < _; u += 1){
                                        var h = E.chars[u];
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
                                        }, E.chars[u].t || (h.data.shapes.push({
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
                        }(), w = function() {
                            var F = [
                                5,
                                7,
                                15
                            ];
                            function E(_) {
                                var h = _.t.p;
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
                            function u(_) {
                                var h, b = _.length;
                                for(h = 0; h < b; h += 1)_[h].ty === 5 && E(_[h]);
                            }
                            return function(_) {
                                if (x(F, _.v) && (u(_.layers), _.assets)) {
                                    var h, b = _.assets.length;
                                    for(h = 0; h < b; h += 1)_.assets[h].layers && u(_.assets[h].layers);
                                }
                            };
                        }(), I = function() {
                            var F = [
                                4,
                                1,
                                9
                            ];
                            function E(_) {
                                var h, b = _.length, T, S;
                                for(h = 0; h < b; h += 1)if (_[h].ty === "gr") E(_[h].it);
                                else if (_[h].ty === "fl" || _[h].ty === "st") {
                                    if (_[h].c.k && _[h].c.k[0].i) for(S = _[h].c.k.length, T = 0; T < S; T += 1)_[h].c.k[T].s && (_[h].c.k[T].s[0] /= 255, _[h].c.k[T].s[1] /= 255, _[h].c.k[T].s[2] /= 255, _[h].c.k[T].s[3] /= 255), _[h].c.k[T].e && (_[h].c.k[T].e[0] /= 255, _[h].c.k[T].e[1] /= 255, _[h].c.k[T].e[2] /= 255, _[h].c.k[T].e[3] /= 255);
                                    else _[h].c.k[0] /= 255, _[h].c.k[1] /= 255, _[h].c.k[2] /= 255, _[h].c.k[3] /= 255;
                                }
                            }
                            function u(_) {
                                var h, b = _.length;
                                for(h = 0; h < b; h += 1)_[h].ty === 4 && E(_[h].shapes);
                            }
                            return function(_) {
                                if (x(F, _.v) && (u(_.layers), _.assets)) {
                                    var h, b = _.assets.length;
                                    for(h = 0; h < b; h += 1)_.assets[h].layers && u(_.assets[h].layers);
                                }
                            };
                        }(), N = function() {
                            var F = [
                                4,
                                4,
                                18
                            ];
                            function E(_) {
                                var h, b = _.length, T, S;
                                for(h = b - 1; h >= 0; h -= 1)if (_[h].ty === "sh") {
                                    if (_[h].ks.k.i) _[h].ks.k.c = _[h].closed;
                                    else for(S = _[h].ks.k.length, T = 0; T < S; T += 1)_[h].ks.k[T].s && (_[h].ks.k[T].s[0].c = _[h].closed), _[h].ks.k[T].e && (_[h].ks.k[T].e[0].c = _[h].closed);
                                } else _[h].ty === "gr" && E(_[h].it);
                            }
                            function u(_) {
                                var h, b, T = _.length, S, j, z, X;
                                for(b = 0; b < T; b += 1){
                                    if (h = _[b], h.hasMask) {
                                        var Y = h.masksProperties;
                                        for(j = Y.length, S = 0; S < j; S += 1)if (Y[S].pt.k.i) Y[S].pt.k.c = Y[S].cl;
                                        else for(X = Y[S].pt.k.length, z = 0; z < X; z += 1)Y[S].pt.k[z].s && (Y[S].pt.k[z].s[0].c = Y[S].cl), Y[S].pt.k[z].e && (Y[S].pt.k[z].e[0].c = Y[S].cl);
                                    }
                                    h.ty === 4 && E(h.shapes);
                                }
                            }
                            return function(_) {
                                if (x(F, _.v) && (u(_.layers), _.assets)) {
                                    var h, b = _.assets.length;
                                    for(h = 0; h < b; h += 1)_.assets[h].layers && u(_.assets[h].layers);
                                }
                            };
                        }();
                        function V(F) {
                            F.__complete || (I(F), A(F), M(F), w(F), N(F), v(F.layers, F.assets), D(F.chars, F.assets), F.__complete = !0);
                        }
                        function R(F) {
                            F.t.a.length === 0 && F.t.p;
                        }
                        var q = {};
                        return q.completeData = V, q.checkColors = I, q.checkChars = M, q.checkPathProperties = w, q.checkShapes = N, q.completeLayers = v, q;
                    }
                    if (a.dataManager || (a.dataManager = P()), a.assetLoader || (a.assetLoader = function() {
                        function v(y) {
                            var c = y.getResponseHeader("content-type");
                            return c && y.responseType === "json" && c.indexOf("json") !== -1 || y.response && Ne(y.response) === "object" ? y.response : y.response && typeof y.response == "string" ? JSON.parse(y.response) : y.responseText ? JSON.parse(y.responseText) : null;
                        }
                        function D(y, c, p, d) {
                            var x, A = new XMLHttpRequest;
                            try {
                                A.responseType = "json";
                            } catch  {}
                            A.onreadystatechange = function() {
                                if (A.readyState === 4) {
                                    if (A.status === 200) x = v(A), p(x);
                                    else try {
                                        x = v(A), p(x);
                                    } catch (M) {
                                        d && d(M);
                                    }
                                }
                            };
                            try {
                                A.open([
                                    "G",
                                    "E",
                                    "T"
                                ].join(""), y, !0);
                            } catch  {
                                A.open([
                                    "G",
                                    "E",
                                    "T"
                                ].join(""), c + "/" + y, !0);
                            }
                            A.send();
                        }
                        return {
                            load: D
                        };
                    }()), f.data.type === "loadAnimation") a.assetLoader.load(f.data.path, f.data.fullPath, function(v) {
                        a.dataManager.completeData(v), a.postMessage({
                            id: f.data.id,
                            payload: v,
                            status: "success"
                        });
                    }, function() {
                        a.postMessage({
                            id: f.data.id,
                            status: "error"
                        });
                    });
                    else if (f.data.type === "complete") {
                        var k = f.data.animation;
                        a.dataManager.completeData(k), a.postMessage({
                            id: f.data.id,
                            payload: k,
                            status: "success"
                        });
                    } else f.data.type === "loadData" && a.assetLoader.load(f.data.path, f.data.fullPath, function(v) {
                        a.postMessage({
                            id: f.data.id,
                            payload: v,
                            status: "success"
                        });
                    }, function() {
                        a.postMessage({
                            id: f.data.id,
                            status: "error"
                        });
                    });
                }), i.onmessage = function(f) {
                    var P = f.data, k = P.id, v = e[k];
                    e[k] = null, P.status === "success" ? v.onComplete(P.payload) : v.onError && v.onError();
                });
            }
            function o(f, P) {
                t += 1;
                var k = "processId_" + t;
                return e[k] = {
                    onComplete: f,
                    onError: P
                }, k;
            }
            function m(f, P, k) {
                l();
                var v = o(P, k);
                i.postMessage({
                    type: "loadAnimation",
                    path: f,
                    fullPath: window.location.origin + window.location.pathname,
                    id: v
                });
            }
            function g(f, P, k) {
                l();
                var v = o(P, k);
                i.postMessage({
                    type: "loadData",
                    path: f,
                    fullPath: window.location.origin + window.location.pathname,
                    id: v
                });
            }
            function C(f, P, k) {
                l();
                var v = o(P, k);
                i.postMessage({
                    type: "complete",
                    animation: f,
                    id: v
                });
            }
            return {
                loadAnimation: m,
                loadData: g,
                completeAnimation: C
            };
        }(), Ri = function() {
            var t = function() {
                var y = _t("canvas");
                y.width = 1, y.height = 1;
                var c = y.getContext("2d");
                return c.fillStyle = "rgba(0,0,0,0)", c.fillRect(0, 0, 1, 1), y;
            }();
            function e() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function s() {
                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function i(y, c, p) {
                var d = "";
                if (y.e) d = y.p;
                else if (c) {
                    var x = y.p;
                    x.indexOf("images/") !== -1 && (x = x.split("/")[1]), d = c + x;
                } else d = p, d += y.u ? y.u : "", d += y.p;
                return d;
            }
            function r(y) {
                var c = 0, p = setInterval((function() {
                    var d = y.getBBox();
                    (d.width || c > 500) && (this._imageLoaded(), clearInterval(p)), c += 1;
                }).bind(this), 50);
            }
            function a(y) {
                var c = i(y, this.assetsPath, this.path), p = B("image");
                Ai ? this.testImageLoaded(p) : p.addEventListener("load", this._imageLoaded, !1), p.addEventListener("error", (function() {
                    d.img = t, this._imageLoaded();
                }).bind(this), !1), p.setAttributeNS("http://www.w3.org/1999/xlink", "href", c), this._elementHelper.append ? this._elementHelper.append(p) : this._elementHelper.appendChild(p);
                var d = {
                    img: p,
                    assetData: y
                };
                return d;
            }
            function n(y) {
                var c = i(y, this.assetsPath, this.path), p = _t("img");
                p.crossOrigin = "anonymous", p.addEventListener("load", this._imageLoaded, !1), p.addEventListener("error", (function() {
                    d.img = t, this._imageLoaded();
                }).bind(this), !1), p.src = c;
                var d = {
                    img: p,
                    assetData: y
                };
                return d;
            }
            function l(y) {
                var c = {
                    assetData: y
                }, p = i(y, this.assetsPath, this.path);
                return be.loadData(p, (function(d) {
                    c.img = d, this._footageLoaded();
                }).bind(this), (function() {
                    c.img = {}, this._footageLoaded();
                }).bind(this)), c;
            }
            function o(y, c) {
                this.imagesLoadedCb = c;
                var p, d = y.length;
                for(p = 0; p < d; p += 1)y[p].layers || (!y[p].t || y[p].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(y[p]))) : y[p].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(y[p]))));
            }
            function m(y) {
                this.path = y || "";
            }
            function g(y) {
                this.assetsPath = y || "";
            }
            function C(y) {
                for(var c = 0, p = this.images.length; c < p;){
                    if (this.images[c].assetData === y) return this.images[c].img;
                    c += 1;
                }
                return null;
            }
            function f() {
                this.imagesLoadedCb = null, this.images.length = 0;
            }
            function P() {
                return this.totalImages === this.loadedAssets;
            }
            function k() {
                return this.totalFootages === this.loadedFootagesCount;
            }
            function v(y, c) {
                y === "svg" ? (this._elementHelper = c, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
            }
            function D() {
                this._imageLoaded = e.bind(this), this._footageLoaded = s.bind(this), this.testImageLoaded = r.bind(this), this.createFootageData = l.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
            }
            return D.prototype = {
                loadAssets: o,
                setAssetsPath: g,
                setPath: m,
                loadedImages: P,
                loadedFootages: k,
                destroy: f,
                getAsset: C,
                createImgData: n,
                createImageData: a,
                imageLoaded: e,
                footageLoaded: s,
                setCacheType: v
            }, D;
        }();
        function zs() {}
        zs.prototype = {
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
        var zi = function() {
            function t(e) {
                for(var s = e.split(`\r
`), i = {}, r, a = 0, n = 0; n < s.length; n += 1)r = s[n].split(":"), r.length === 2 && (i[r[0]] = r[1].trim(), a += 1);
                if (a === 0) throw new Error;
                return i;
            }
            return function(e) {
                for(var s = [], i = 0; i < e.length; i += 1){
                    var r = e[i], a = {
                        time: r.tm,
                        duration: r.dr
                    };
                    try {
                        a.payload = JSON.parse(e[i].cm);
                    } catch  {
                        try {
                            a.payload = t(e[i].cm);
                        } catch  {
                            a.payload = {
                                name: e[i].cm
                            };
                        }
                    }
                    s.push(a);
                }
                return s;
            };
        }(), Oi = function() {
            function t(e) {
                this.compositions.push(e);
            }
            return function() {
                function e(s) {
                    for(var i = 0, r = this.compositions.length; i < r;){
                        if (this.compositions[i].data && this.compositions[i].data.nm === s) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                        i += 1;
                    }
                    return null;
                }
                return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
            };
        }(), _e = {}, Vi = function(t, e) {
            _e[t] = e;
        };
        function Ni(t) {
            return _e[t];
        }
        function qi() {
            if (_e.canvas) return "canvas";
            for(var t in _e)if (_e[t]) return t;
            return "";
        }
        function xe(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xe = function(e) {
                return typeof e;
            } : xe = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, xe(t);
        }
        var W = function() {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = mt(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = Ei(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = Oi(), this.imagePreloader = new Ri, this.audioController = Di(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new as("drawnFrame", 0, 0, 0), this.expressionsPlugin = ze();
        };
        J([
            zs
        ], W), W.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            t.animType ? e = t.animType : t.renderer && (e = t.renderer);
            var s = Ni(e);
            this.renderer = new s(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : !0, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), be.loadAnimation(t.path, this.configAnimation, this.onSetupError));
        }, W.prototype.onSetupError = function() {
            this.trigger("data_failed");
        }, W.prototype.setupAnimation = function(t) {
            be.completeAnimation(t, this.configAnimation);
        }, W.prototype.setData = function(t, e) {
            e && xe(e) !== "object" && (e = JSON.parse(e));
            var s = {
                wrapper: t,
                animationData: e
            }, i = t.attributes;
            s.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", s.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : qi() || "canvas";
            var r = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
            r === "false" ? s.loop = !1 : r === "true" ? s.loop = !0 : r !== "" && (s.loop = parseInt(r, 10));
            var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : !0;
            s.autoplay = a !== "false", s.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
            var n = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
            n === "false" && (s.prerender = !1), s.path ? this.setParams(s) : this.trigger("destroy");
        }, W.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e = this.animationData.layers, s, i = e.length, r = t.layers, a, n = r.length;
            for(a = 0; a < n; a += 1)for(s = 0; s < i;){
                if (e[s].id === r[a].id) {
                    e[s] = r[a];
                    break;
                }
                s += 1;
            }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for(i = t.assets.length, s = 0; s < i; s += 1)this.animationData.assets.push(t.assets[s]);
            this.animationData.__complete = !1, be.completeAnimation(this.animationData, this.onSegmentComplete);
        }, W.prototype.onSegmentComplete = function(t) {
            this.animationData = t;
            var e = ze();
            e && e.initExpressions(this), this.loadNextSegment();
        }, W.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || t.length === 0 || !this.autoloadSegments) {
                this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                return;
            }
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var s = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, be.loadData(s, this.includeLayers.bind(this), (function() {
                this.trigger("data_failed");
            }).bind(this));
        }, W.prototype.loadSegments = function() {
            var t = this.animationData.segments;
            t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
        }, W.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"), this.checkLoaded();
        }, W.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
        }, W.prototype.configAnimation = function(t) {
            if (this.renderer) try {
                this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = zi(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
            } catch (e) {
                this.triggerConfigError(e);
            }
        }, W.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
        }, W.prototype.checkLoaded = function() {
            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                this.isLoaded = !0;
                var t = ze();
                t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
                    this.trigger("DOMLoaded");
                }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
            }
        }, W.prototype.resize = function(t, e) {
            var s = typeof t == "number" ? t : void 0, i = typeof e == "number" ? e : void 0;
            this.renderer.updateContainerSize(s, i);
        }, W.prototype.setSubframe = function(t) {
            this.isSubframeEnabled = !!t;
        }, W.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
        }, W.prototype.renderFrame = function() {
            if (!(this.isLoaded === !1 || !this.renderer)) try {
                this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
            } catch (t) {
                this.triggerRenderFrameError(t);
            }
        }, W.prototype.play = function(t) {
            t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
        }, W.prototype.pause = function(t) {
            t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
        }, W.prototype.togglePause = function(t) {
            t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause());
        }, W.prototype.stop = function(t) {
            t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
        }, W.prototype.getMarkerData = function(t) {
            for(var e, s = 0; s < this.markers.length; s += 1)if (e = this.markers[s], e.payload && e.payload.name === t) return e;
            return null;
        }, W.prototype.goToAndStop = function(t, e, s) {
            if (!(s && this.name !== s)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var r = this.getMarkerData(t);
                    r && this.goToAndStop(r.time, !0);
                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause();
            }
        }, W.prototype.goToAndPlay = function(t, e, s) {
            if (!(s && this.name !== s)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var r = this.getMarkerData(t);
                    r && (r.duration ? this.playSegments([
                        r.time,
                        r.time + r.duration
                    ], !0) : this.goToAndStop(r.time, !0));
                } else this.goToAndStop(i, e, s);
                this.play();
            }
        }, W.prototype.advanceTime = function(t) {
            if (!(this.isPaused === !0 || this.isLoaded === !1)) {
                var e = this.currentRawFrame + t * this.frameModifier, s = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (s = !0, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (s = !0, e = 0)) : this.setCurrentRawFrameValue(e), s && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
            }
        }, W.prototype.adjustSegment = function(t, e) {
            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart");
        }, W.prototype.setSegment = function(t, e) {
            var s = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? s = t : this.currentRawFrame + this.firstFrame > e && (s = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, s !== -1 && this.goToAndStop(s, !0);
        }, W.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0), xe(t[0]) === "object") {
                var s, i = t.length;
                for(s = 0; s < i; s += 1)this.segments.push(t[s]);
            } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
        }, W.prototype.resetSegments = function(t) {
            this.segments.length = 0, this.segments.push([
                this.animationData.ip,
                this.animationData.op
            ]), t && this.checkSegments(0);
        }, W.prototype.checkSegments = function(t) {
            return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), !0) : !1;
        }, W.prototype.destroy = function(t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
        }, W.prototype.setCurrentRawFrameValue = function(t) {
            this.currentRawFrame = t, this.gotoFrame();
        }, W.prototype.setSpeed = function(t) {
            this.playSpeed = t, this.updaFrameModifier();
        }, W.prototype.setDirection = function(t) {
            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
        }, W.prototype.setLoop = function(t) {
            this.loop = t;
        }, W.prototype.setVolume = function(t, e) {
            e && this.name !== e || this.audioController.setVolume(t);
        }, W.prototype.getVolume = function() {
            return this.audioController.getVolume();
        }, W.prototype.mute = function(t) {
            t && this.name !== t || this.audioController.mute();
        }, W.prototype.unmute = function(t) {
            t && this.name !== t || this.audioController.unmute();
        }, W.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
        }, W.prototype.getPath = function() {
            return this.path;
        }, W.prototype.getAssetsPath = function(t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
                var s = t.p;
                s.indexOf("images/") !== -1 && (s = s.split("/")[1]), e = this.assetsPath + s;
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e;
        }, W.prototype.getAssetData = function(t) {
            for(var e = 0, s = this.assets.length; e < s;){
                if (t === this.assets[e].id) return this.assets[e];
                e += 1;
            }
            return null;
        }, W.prototype.hide = function() {
            this.renderer.hide();
        }, W.prototype.show = function() {
            this.renderer.show();
        }, W.prototype.getDuration = function(t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate;
        }, W.prototype.updateDocumentData = function(t, e, s) {
            try {
                var i = this.renderer.getElementByPath(t);
                i.updateDocumentData(e, s);
            } catch  {}
        }, W.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t]) switch(t){
                case "enterFrame":
                    this.triggerEvent(t, new as(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "drawnFrame":
                    this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new ws(t, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new Ms(t, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new Fs(t, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new Es(t, this));
                    break;
                default:
                    this.triggerEvent(t);
            }
            t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new as(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new ws(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new Ms(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new Fs(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new Es(t, this));
        }, W.prototype.triggerRenderFrameError = function(t) {
            var e = new Mi(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
        }, W.prototype.triggerConfigError = function(t) {
            var e = new wi(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
        };
        var rt = function() {
            var t = {}, e = [], s = 0, i = 0, r = 0, a = !0, n = !1;
            function l(u) {
                for(var _ = 0, h = u.target; _ < i;)e[_].animation === h && (e.splice(_, 1), _ -= 1, i -= 1, h.isPaused || C()), _ += 1;
            }
            function o(u, _) {
                if (!u) return null;
                for(var h = 0; h < i;){
                    if (e[h].elem === u && e[h].elem !== null) return e[h].animation;
                    h += 1;
                }
                var b = new W;
                return f(b, u), b.setData(u, _), b;
            }
            function m() {
                var u, _ = e.length, h = [];
                for(u = 0; u < _; u += 1)h.push(e[u].animation);
                return h;
            }
            function g() {
                r += 1, N();
            }
            function C() {
                r -= 1;
            }
            function f(u, _) {
                u.addEventListener("destroy", l), u.addEventListener("_active", g), u.addEventListener("_idle", C), e.push({
                    elem: _,
                    animation: u
                }), i += 1;
            }
            function P(u) {
                var _ = new W;
                return f(_, null), _.setParams(u), _;
            }
            function k(u, _) {
                var h;
                for(h = 0; h < i; h += 1)e[h].animation.setSpeed(u, _);
            }
            function v(u, _) {
                var h;
                for(h = 0; h < i; h += 1)e[h].animation.setDirection(u, _);
            }
            function D(u) {
                var _;
                for(_ = 0; _ < i; _ += 1)e[_].animation.play(u);
            }
            function y(u) {
                var _ = u - s, h;
                for(h = 0; h < i; h += 1)e[h].animation.advanceTime(_);
                s = u, r && !n ? window.requestAnimationFrame(y) : a = !0;
            }
            function c(u) {
                s = u, window.requestAnimationFrame(y);
            }
            function p(u) {
                var _;
                for(_ = 0; _ < i; _ += 1)e[_].animation.pause(u);
            }
            function d(u, _, h) {
                var b;
                for(b = 0; b < i; b += 1)e[b].animation.goToAndStop(u, _, h);
            }
            function x(u) {
                var _;
                for(_ = 0; _ < i; _ += 1)e[_].animation.stop(u);
            }
            function A(u) {
                var _;
                for(_ = 0; _ < i; _ += 1)e[_].animation.togglePause(u);
            }
            function M(u) {
                var _;
                for(_ = i - 1; _ >= 0; _ -= 1)e[_].animation.destroy(u);
            }
            function w(u, _, h) {
                var b = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), T, S = b.length;
                for(T = 0; T < S; T += 1)h && b[T].setAttribute("data-bm-type", h), o(b[T], u);
                if (_ && S === 0) {
                    h || (h = "svg");
                    var j = document.getElementsByTagName("body")[0];
                    j.innerText = "";
                    var z = _t("div");
                    z.style.width = "100%", z.style.height = "100%", z.setAttribute("data-bm-type", h), j.appendChild(z), o(z, u);
                }
            }
            function I() {
                var u;
                for(u = 0; u < i; u += 1)e[u].animation.resize();
            }
            function N() {
                !n && r && a && (window.requestAnimationFrame(c), a = !1);
            }
            function V() {
                n = !0;
            }
            function R() {
                n = !1, N();
            }
            function q(u, _) {
                var h;
                for(h = 0; h < i; h += 1)e[h].animation.setVolume(u, _);
            }
            function F(u) {
                var _;
                for(_ = 0; _ < i; _ += 1)e[_].animation.mute(u);
            }
            function E(u) {
                var _;
                for(_ = 0; _ < i; _ += 1)e[_].animation.unmute(u);
            }
            return t.registerAnimation = o, t.loadAnimation = P, t.setSpeed = k, t.setDirection = v, t.play = D, t.pause = p, t.stop = x, t.togglePause = A, t.searchAnimations = w, t.resize = I, t.goToAndStop = d, t.destroy = M, t.freeze = V, t.unfreeze = R, t.setVolume = q, t.mute = F, t.unmute = E, t.getRegisteredAnimations = m, t;
        }(), Ce = function() {
            var t = {};
            t.getBezierEasing = s;
            var e = {};
            function s(c, p, d, x, A) {
                var M = A || ("bez_" + c + "_" + p + "_" + d + "_" + x).replace(/\./g, "p");
                if (e[M]) return e[M];
                var w = new y([
                    c,
                    p,
                    d,
                    x
                ]);
                return e[M] = w, w;
            }
            var i = 4, r = .001, a = 1e-7, n = 10, l = 11, o = 1 / (l - 1), m = typeof Float32Array == "function";
            function g(c, p) {
                return 1 - 3 * p + 3 * c;
            }
            function C(c, p) {
                return 3 * p - 6 * c;
            }
            function f(c) {
                return 3 * c;
            }
            function P(c, p, d) {
                return ((g(p, d) * c + C(p, d)) * c + f(p)) * c;
            }
            function k(c, p, d) {
                return 3 * g(p, d) * c * c + 2 * C(p, d) * c + f(p);
            }
            function v(c, p, d, x, A) {
                var M, w, I = 0;
                do w = p + (d - p) / 2, M = P(w, x, A) - c, M > 0 ? d = w : p = w;
                while (Math.abs(M) > a && ++I < n);
                return w;
            }
            function D(c, p, d, x) {
                for(var A = 0; A < i; ++A){
                    var M = k(p, d, x);
                    if (M === 0) return p;
                    var w = P(p, d, x) - c;
                    p -= w / M;
                }
                return p;
            }
            function y(c) {
                this._p = c, this._mSampleValues = m ? new Float32Array(l) : new Array(l), this._precomputed = !1, this.get = this.get.bind(this);
            }
            return y.prototype = {
                get: function(c) {
                    var p = this._p[0], d = this._p[1], x = this._p[2], A = this._p[3];
                    return this._precomputed || this._precompute(), p === d && x === A ? c : c === 0 ? 0 : c === 1 ? 1 : P(this._getTForX(c), d, A);
                },
                _precompute: function() {
                    var c = this._p[0], p = this._p[1], d = this._p[2], x = this._p[3];
                    this._precomputed = !0, (c !== p || d !== x) && this._calcSampleValues();
                },
                _calcSampleValues: function() {
                    for(var c = this._p[0], p = this._p[2], d = 0; d < l; ++d)this._mSampleValues[d] = P(d * o, c, p);
                },
                _getTForX: function(c) {
                    for(var p = this._p[0], d = this._p[2], x = this._mSampleValues, A = 0, M = 1, w = l - 1; M !== w && x[M] <= c; ++M)A += o;
                    --M;
                    var I = (c - x[M]) / (x[M + 1] - x[M]), N = A + I * o, V = k(N, p, d);
                    return V >= r ? D(c, N, p, d) : V === 0 ? N : v(c, A, A + o, p, d);
                }
            }, t;
        }(), Os = function() {
            function t(e) {
                return e.concat(Q(e.length));
            }
            return {
                double: t
            };
        }(), qe = function() {
            return function(t, e, s) {
                var i = 0, r = t, a = Q(r), n = {
                    newElement: l,
                    release: o
                };
                function l() {
                    var m;
                    return i ? (i -= 1, m = a[i]) : m = e(), m;
                }
                function o(m) {
                    i === r && (a = Os.double(a), r *= 2), s && s(m), a[i] = m, i += 1;
                }
                return n;
            };
        }(), Vs = function() {
            function t() {
                return {
                    addedLength: 0,
                    percents: at("float32", Ve()),
                    lengths: at("float32", Ve())
                };
            }
            return qe(8, t);
        }(), Ns = function() {
            function t() {
                return {
                    lengths: [],
                    totalLength: 0
                };
            }
            function e(s) {
                var i, r = s.lengths.length;
                for(i = 0; i < r; i += 1)Vs.release(s.lengths[i]);
                s.lengths.length = 0;
            }
            return qe(8, t, e);
        }();
        function Wi() {
            var t = Math;
            function e(f, P, k, v, D, y) {
                var c = f * v + P * D + k * y - D * v - y * f - k * P;
                return c > -0.001 && c < .001;
            }
            function s(f, P, k, v, D, y, c, p, d) {
                if (k === 0 && y === 0 && d === 0) return e(f, P, v, D, c, p);
                var x = t.sqrt(t.pow(v - f, 2) + t.pow(D - P, 2) + t.pow(y - k, 2)), A = t.sqrt(t.pow(c - f, 2) + t.pow(p - P, 2) + t.pow(d - k, 2)), M = t.sqrt(t.pow(c - v, 2) + t.pow(p - D, 2) + t.pow(d - y, 2)), w;
                return x > A ? x > M ? w = x - A - M : w = M - A - x : M > A ? w = M - A - x : w = A - x - M, w > -0.0001 && w < 1e-4;
            }
            var i = function() {
                return function(f, P, k, v) {
                    var D = Ve(), y, c, p, d, x, A = 0, M, w = [], I = [], N = Vs.newElement();
                    for(p = k.length, y = 0; y < D; y += 1){
                        for(x = y / (D - 1), M = 0, c = 0; c < p; c += 1)d = Mt(1 - x, 3) * f[c] + 3 * Mt(1 - x, 2) * x * k[c] + 3 * (1 - x) * Mt(x, 2) * v[c] + Mt(x, 3) * P[c], w[c] = d, I[c] !== null && (M += Mt(w[c] - I[c], 2)), I[c] = w[c];
                        M && (M = As(M), A += M), N.percents[y] = x, N.lengths[y] = A;
                    }
                    return N.addedLength = A, N;
                };
            }();
            function r(f) {
                var P = Ns.newElement(), k = f.c, v = f.v, D = f.o, y = f.i, c, p = f._length, d = P.lengths, x = 0;
                for(c = 0; c < p - 1; c += 1)d[c] = i(v[c], v[c + 1], D[c], y[c + 1]), x += d[c].addedLength;
                return k && p && (d[c] = i(v[c], v[0], D[c], y[0]), x += d[c].addedLength), P.totalLength = x, P;
            }
            function a(f) {
                this.segmentLength = 0, this.points = new Array(f);
            }
            function n(f, P) {
                this.partialLength = f, this.point = P;
            }
            var l = function() {
                var f = {};
                return function(P, k, v, D) {
                    var y = (P[0] + "_" + P[1] + "_" + k[0] + "_" + k[1] + "_" + v[0] + "_" + v[1] + "_" + D[0] + "_" + D[1]).replace(/\./g, "p");
                    if (!f[y]) {
                        var c = Ve(), p, d, x, A, M, w = 0, I, N, V = null;
                        P.length === 2 && (P[0] !== k[0] || P[1] !== k[1]) && e(P[0], P[1], k[0], k[1], P[0] + v[0], P[1] + v[1]) && e(P[0], P[1], k[0], k[1], k[0] + D[0], k[1] + D[1]) && (c = 2);
                        var R = new a(c);
                        for(x = v.length, p = 0; p < c; p += 1){
                            for(N = Q(x), M = p / (c - 1), I = 0, d = 0; d < x; d += 1)A = Mt(1 - M, 3) * P[d] + 3 * Mt(1 - M, 2) * M * (P[d] + v[d]) + 3 * (1 - M) * Mt(M, 2) * (k[d] + D[d]) + Mt(M, 3) * k[d], N[d] = A, V !== null && (I += Mt(N[d] - V[d], 2));
                            I = As(I), w += I, R.points[p] = new n(I, N), V = N;
                        }
                        R.segmentLength = w, f[y] = R;
                    }
                    return f[y];
                };
            }();
            function o(f, P) {
                var k = P.percents, v = P.lengths, D = k.length, y = ft((D - 1) * f), c = f * P.addedLength, p = 0;
                if (y === D - 1 || y === 0 || c === v[y]) return k[y];
                for(var d = v[y] > c ? -1 : 1, x = !0; x;)if (v[y] <= c && v[y + 1] > c ? (p = (c - v[y]) / (v[y + 1] - v[y]), x = !1) : y += d, y < 0 || y >= D - 1) {
                    if (y === D - 1) return k[y];
                    x = !1;
                }
                return k[y] + (k[y + 1] - k[y]) * p;
            }
            function m(f, P, k, v, D, y) {
                var c = o(D, y), p = 1 - c, d = t.round((p * p * p * f[0] + (c * p * p + p * c * p + p * p * c) * k[0] + (c * c * p + p * c * c + c * p * c) * v[0] + c * c * c * P[0]) * 1e3) / 1e3, x = t.round((p * p * p * f[1] + (c * p * p + p * c * p + p * p * c) * k[1] + (c * c * p + p * c * c + c * p * c) * v[1] + c * c * c * P[1]) * 1e3) / 1e3;
                return [
                    d,
                    x
                ];
            }
            var g = at("float32", 8);
            function C(f, P, k, v, D, y, c) {
                D < 0 ? D = 0 : D > 1 && (D = 1);
                var p = o(D, c);
                y = y > 1 ? 1 : y;
                var d = o(y, c), x, A = f.length, M = 1 - p, w = 1 - d, I = M * M * M, N = p * M * M * 3, V = p * p * M * 3, R = p * p * p, q = M * M * w, F = p * M * w + M * p * w + M * M * d, E = p * p * w + M * p * d + p * M * d, u = p * p * d, _ = M * w * w, h = p * w * w + M * d * w + M * w * d, b = p * d * w + M * d * d + p * w * d, T = p * d * d, S = w * w * w, j = d * w * w + w * d * w + w * w * d, z = d * d * w + w * d * d + d * w * d, X = d * d * d;
                for(x = 0; x < A; x += 1)g[x * 4] = t.round((I * f[x] + N * k[x] + V * v[x] + R * P[x]) * 1e3) / 1e3, g[x * 4 + 1] = t.round((q * f[x] + F * k[x] + E * v[x] + u * P[x]) * 1e3) / 1e3, g[x * 4 + 2] = t.round((_ * f[x] + h * k[x] + b * v[x] + T * P[x]) * 1e3) / 1e3, g[x * 4 + 3] = t.round((S * f[x] + j * k[x] + z * v[x] + X * P[x]) * 1e3) / 1e3;
                return g;
            }
            return {
                getSegmentsLength: r,
                getNewSegment: C,
                getPointInSegment: m,
                buildBezierData: l,
                pointOnLine2D: e,
                pointOnLine3D: s
            };
        }
        var wt = Wi(), ee = is, qs = Math.abs;
        function Ws(t, e) {
            var s = this.offsetTime, i;
            this.propType === "multidimensional" && (i = at("float32", this.pv.length));
            for(var r = e.lastIndex, a = r, n = this.keyframes.length - 1, l = !0, o, m, g; l;){
                if (o = this.keyframes[a], m = this.keyframes[a + 1], a === n - 1 && t >= m.t - s) {
                    o.h && (o = m), r = 0;
                    break;
                }
                if (m.t - s > t) {
                    r = a;
                    break;
                }
                a < n - 1 ? a += 1 : (r = 0, l = !1);
            }
            g = this.keyframesMetadata[a] || {};
            var C, f, P, k, v, D, y = m.t - s, c = o.t - s, p;
            if (o.to) {
                g.bezierData || (g.bezierData = wt.buildBezierData(o.s, m.s || o.e, o.to, o.ti));
                var d = g.bezierData;
                if (t >= y || t < c) {
                    var x = t >= y ? d.points.length - 1 : 0;
                    for(f = d.points[x].point.length, C = 0; C < f; C += 1)i[C] = d.points[x].point[C];
                } else {
                    g.__fnct ? D = g.__fnct : (D = Ce.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, g.__fnct = D), P = D((t - c) / (y - c));
                    var A = d.segmentLength * P, M, w = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;
                    for(v = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0, l = !0, k = d.points.length; l;){
                        if (w += d.points[v].partialLength, A === 0 || P === 0 || v === d.points.length - 1) {
                            for(f = d.points[v].point.length, C = 0; C < f; C += 1)i[C] = d.points[v].point[C];
                            break;
                        } else if (A >= w && A < w + d.points[v + 1].partialLength) {
                            for(M = (A - w) / d.points[v + 1].partialLength, f = d.points[v].point.length, C = 0; C < f; C += 1)i[C] = d.points[v].point[C] + (d.points[v + 1].point[C] - d.points[v].point[C]) * M;
                            break;
                        }
                        v < k - 1 ? v += 1 : l = !1;
                    }
                    e._lastPoint = v, e._lastAddedLength = w - d.points[v].partialLength, e._lastKeyframeIndex = a;
                }
            } else {
                var I, N, V, R, q;
                if (n = o.s.length, p = m.s || o.e, this.sh && o.h !== 1) {
                    if (t >= y) i[0] = p[0], i[1] = p[1], i[2] = p[2];
                    else if (t <= c) i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2];
                    else {
                        var F = Bs(o.s), E = Bs(p), u = (t - c) / (y - c);
                        ji(i, Bi(F, E, u));
                    }
                } else for(a = 0; a < n; a += 1)o.h !== 1 && (t >= y ? P = 1 : t < c ? P = 0 : (o.o.x.constructor === Array ? (g.__fnct || (g.__fnct = []), g.__fnct[a] ? D = g.__fnct[a] : (I = o.o.x[a] === void 0 ? o.o.x[0] : o.o.x[a], N = o.o.y[a] === void 0 ? o.o.y[0] : o.o.y[a], V = o.i.x[a] === void 0 ? o.i.x[0] : o.i.x[a], R = o.i.y[a] === void 0 ? o.i.y[0] : o.i.y[a], D = Ce.getBezierEasing(I, N, V, R).get, g.__fnct[a] = D)) : g.__fnct ? D = g.__fnct : (I = o.o.x, N = o.o.y, V = o.i.x, R = o.i.y, D = Ce.getBezierEasing(I, N, V, R).get, o.keyframeMetadata = D), P = D((t - c) / (y - c)))), p = m.s || o.e, q = o.h === 1 ? o.s[a] : o.s[a] + (p[a] - o.s[a]) * P, this.propType === "multidimensional" ? i[a] = q : i = q;
            }
            return e.lastIndex = r, i;
        }
        function Bi(t, e, s) {
            var i = [], r = t[0], a = t[1], n = t[2], l = t[3], o = e[0], m = e[1], g = e[2], C = e[3], f, P, k, v, D;
            return P = r * o + a * m + n * g + l * C, P < 0 && (P = -P, o = -o, m = -m, g = -g, C = -C), 1 - P > 1e-6 ? (f = Math.acos(P), k = Math.sin(f), v = Math.sin((1 - s) * f) / k, D = Math.sin(s * f) / k) : (v = 1 - s, D = s), i[0] = v * r + D * o, i[1] = v * a + D * m, i[2] = v * n + D * g, i[3] = v * l + D * C, i;
        }
        function ji(t, e) {
            var s = e[0], i = e[1], r = e[2], a = e[3], n = Math.atan2(2 * i * a - 2 * s * r, 1 - 2 * i * i - 2 * r * r), l = Math.asin(2 * s * i + 2 * r * a), o = Math.atan2(2 * s * a - 2 * i * r, 1 - 2 * s * s - 2 * r * r);
            t[0] = n / Z, t[1] = l / Z, t[2] = o / Z;
        }
        function Bs(t) {
            var e = t[0] * Z, s = t[1] * Z, i = t[2] * Z, r = Math.cos(e / 2), a = Math.cos(s / 2), n = Math.cos(i / 2), l = Math.sin(e / 2), o = Math.sin(s / 2), m = Math.sin(i / 2), g = r * a * n - l * o * m, C = l * o * n + r * a * m, f = l * a * n + r * o * m, P = r * o * n - l * a * m;
            return [
                C,
                f,
                P,
                g
            ];
        }
        function js() {
            var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t === this._caching.lastFrame || this._caching.lastFrame !== ee && (this._caching.lastFrame >= s && t >= s || this._caching.lastFrame < e && t < e))) {
                this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var i = this.interpolateValue(t, this._caching);
                this.pv = i;
            }
            return this._caching.lastFrame = t, this.pv;
        }
        function We(t) {
            var e;
            if (this.propType === "unidimensional") e = t * this.mult, qs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
            else for(var s = 0, i = this.v.length; s < i;)e = t[s] * this.mult, qs(this.v[s] - e) > 1e-5 && (this.v[s] = e, this._mdf = !0), s += 1;
        }
        function Be() {
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
        function je(t) {
            this.effectsSequence.push(t), this.container.addDynamicProperty(this);
        }
        function Ji(t, e, s, i) {
            this.propType = "unidimensional", this.mult = s || 1, this.data = e, this.v = s ? e.k * s : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = Be, this.setVValue = We, this.addEffect = je;
        }
        function Yi(t, e, s, i) {
            this.propType = "multidimensional", this.mult = s || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
            var r, a = e.k.length;
            for(this.v = at("float32", a), this.pv = at("float32", a), this.vel = at("float32", a), r = 0; r < a; r += 1)this.v[r] = e.k[r] * this.mult, this.pv[r] = e.k[r];
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = Be, this.setVValue = We, this.addEffect = je;
        }
        function Xi(t, e, s, i) {
            this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                lastFrame: ee,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            }, this.k = !0, this.kf = !0, this.data = e, this.mult = s || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = ee, this.pv = ee, this._isFirstFrame = !0, this.getValue = Be, this.setVValue = We, this.interpolateValue = Ws, this.effectsSequence = [
                js.bind(this)
            ], this.addEffect = je;
        }
        function Gi(t, e, s, i) {
            this.propType = "multidimensional";
            var r, a = e.k.length, n, l, o, m;
            for(r = 0; r < a - 1; r += 1)e.k[r].to && e.k[r].s && e.k[r + 1] && e.k[r + 1].s && (n = e.k[r].s, l = e.k[r + 1].s, o = e.k[r].to, m = e.k[r].ti, (n.length === 2 && !(n[0] === l[0] && n[1] === l[1]) && wt.pointOnLine2D(n[0], n[1], l[0], l[1], n[0] + o[0], n[1] + o[1]) && wt.pointOnLine2D(n[0], n[1], l[0], l[1], l[0] + m[0], l[1] + m[1]) || n.length === 3 && !(n[0] === l[0] && n[1] === l[1] && n[2] === l[2]) && wt.pointOnLine3D(n[0], n[1], n[2], l[0], l[1], l[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && wt.pointOnLine3D(n[0], n[1], n[2], l[0], l[1], l[2], l[0] + m[0], l[1] + m[1], l[2] + m[2])) && (e.k[r].to = null, e.k[r].ti = null), n[0] === l[0] && n[1] === l[1] && o[0] === 0 && o[1] === 0 && m[0] === 0 && m[1] === 0 && (n.length === 2 || n[2] === l[2] && o[2] === 0 && m[2] === 0) && (e.k[r].to = null, e.k[r].ti = null));
            this.effectsSequence = [
                js.bind(this)
            ], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = s || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = Be, this.setVValue = We, this.interpolateValue = Ws, this.frameId = -1;
            var g = e.k[0].s.length;
            for(this.v = at("float32", g), this.pv = at("float32", g), r = 0; r < g; r += 1)this.v[r] = ee, this.pv[r] = ee;
            this._caching = {
                lastFrame: ee,
                lastIndex: 0,
                value: at("float32", g)
            }, this.addEffect = je;
        }
        var L = function() {
            function t(s, i, r, a, n) {
                i.sid && (i = s.globalData.slotManager.getProp(i));
                var l;
                if (!i.k.length) l = new Ji(s, i, a, n);
                else if (typeof i.k[0] == "number") l = new Yi(s, i, a, n);
                else switch(r){
                    case 0:
                        l = new Xi(s, i, a, n);
                        break;
                    case 1:
                        l = new Gi(s, i, a, n);
                        break;
                }
                return l.effectsSequence.length && n.addDynamicProperty(l), l;
            }
            var e = {
                getProp: t
            };
            return e;
        }();
        function ht() {}
        ht.prototype = {
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
        var se = function() {
            function t() {
                return at("float32", 2);
            }
            return qe(8, t);
        }();
        function Nt() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = Q(this._maxLength), this.o = Q(this._maxLength), this.i = Q(this._maxLength);
        }
        Nt.prototype.setPathData = function(t, e) {
            this.c = t, this.setLength(e);
            for(var s = 0; s < e;)this.v[s] = se.newElement(), this.o[s] = se.newElement(), this.i[s] = se.newElement(), s += 1;
        }, Nt.prototype.setLength = function(t) {
            for(; this._maxLength < t;)this.doubleArrayLength();
            this._length = t;
        }, Nt.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(Q(this._maxLength)), this.i = this.i.concat(Q(this._maxLength)), this.o = this.o.concat(Q(this._maxLength)), this._maxLength *= 2;
        }, Nt.prototype.setXYAt = function(t, e, s, i, r) {
            var a;
            switch(this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), s){
                case "v":
                    a = this.v;
                    break;
                case "i":
                    a = this.i;
                    break;
                case "o":
                    a = this.o;
                    break;
                default:
                    a = [];
                    break;
            }
            (!a[i] || a[i] && !r) && (a[i] = se.newElement()), a[i][0] = t, a[i][1] = e;
        }, Nt.prototype.setTripleAt = function(t, e, s, i, r, a, n, l) {
            this.setXYAt(t, e, "v", n, l), this.setXYAt(s, i, "o", n, l), this.setXYAt(r, a, "i", n, l);
        }, Nt.prototype.reverse = function() {
            var t = new Nt;
            t.setPathData(this.c, this._length);
            var e = this.v, s = this.o, i = this.i, r = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], s[0][0], s[0][1], 0, !1), r = 1);
            var a = this._length - 1, n = this._length, l;
            for(l = r; l < n; l += 1)t.setTripleAt(e[a][0], e[a][1], i[a][0], i[a][1], s[a][0], s[a][1], l, !1), a -= 1;
            return t;
        }, Nt.prototype.length = function() {
            return this._length;
        };
        var ct = function() {
            function t() {
                return new Nt;
            }
            function e(r) {
                var a = r._length, n;
                for(n = 0; n < a; n += 1)se.release(r.v[n]), se.release(r.i[n]), se.release(r.o[n]), r.v[n] = null, r.i[n] = null, r.o[n] = null;
                r._length = 0, r.c = !1;
            }
            function s(r) {
                var a = i.newElement(), n, l = r._length === void 0 ? r.v.length : r._length;
                for(a.setLength(l), a.c = r.c, n = 0; n < l; n += 1)a.setTripleAt(r.v[n][0], r.v[n][1], r.o[n][0], r.o[n][1], r.i[n][0], r.i[n][1], n);
                return a;
            }
            var i = qe(4, t, e);
            return i.clone = s, i;
        }();
        function os() {
            this._length = 0, this._maxLength = 4, this.shapes = Q(this._maxLength);
        }
        os.prototype.addShape = function(t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(Q(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
        }, os.prototype.releaseShapes = function() {
            var t;
            for(t = 0; t < this._length; t += 1)ct.release(this.shapes[t]);
            this._length = 0;
        };
        var le = function() {
            var t = {
                newShapeCollection: r,
                release: a
            }, e = 0, s = 4, i = Q(s);
            function r() {
                var n;
                return e ? (e -= 1, n = i[e]) : n = new os, n;
            }
            function a(n) {
                var l, o = n._length;
                for(l = 0; l < o; l += 1)ct.release(n.shapes[l]);
                n._length = 0, e === s && (i = Os.double(i), s *= 2), i[e] = n, e += 1;
            }
            return t;
        }(), pe = function() {
            var t = -999999;
            function e(y, c, p) {
                var d = p.lastIndex, x, A, M, w, I, N, V, R, q, F = this.keyframes;
                if (y < F[0].t - this.offsetTime) x = F[0].s[0], M = !0, d = 0;
                else if (y >= F[F.length - 1].t - this.offsetTime) x = F[F.length - 1].s ? F[F.length - 1].s[0] : F[F.length - 2].e[0], M = !0;
                else {
                    for(var E = d, u = F.length - 1, _ = !0, h, b, T; _ && (h = F[E], b = F[E + 1], !(b.t - this.offsetTime > y));)E < u - 1 ? E += 1 : _ = !1;
                    if (T = this.keyframesMetadata[E] || {}, M = h.h === 1, d = E, !M) {
                        if (y >= b.t - this.offsetTime) R = 1;
                        else if (y < h.t - this.offsetTime) R = 0;
                        else {
                            var S;
                            T.__fnct ? S = T.__fnct : (S = Ce.getBezierEasing(h.o.x, h.o.y, h.i.x, h.i.y).get, T.__fnct = S), R = S((y - (h.t - this.offsetTime)) / (b.t - this.offsetTime - (h.t - this.offsetTime)));
                        }
                        A = b.s ? b.s[0] : h.e[0];
                    }
                    x = h.s[0];
                }
                for(N = c._length, V = x.i[0].length, p.lastIndex = d, w = 0; w < N; w += 1)for(I = 0; I < V; I += 1)q = M ? x.i[w][I] : x.i[w][I] + (A.i[w][I] - x.i[w][I]) * R, c.i[w][I] = q, q = M ? x.o[w][I] : x.o[w][I] + (A.o[w][I] - x.o[w][I]) * R, c.o[w][I] = q, q = M ? x.v[w][I] : x.v[w][I] + (A.v[w][I] - x.v[w][I]) * R, c.v[w][I] = q;
            }
            function s() {
                var y = this.comp.renderedFrame - this.offsetTime, c = this.keyframes[0].t - this.offsetTime, p = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, d = this._caching.lastFrame;
                return d !== t && (d < c && y < c || d > p && y > p) || (this._caching.lastIndex = d < y ? this._caching.lastIndex : 0, this.interpolateShape(y, this.pv, this._caching)), this._caching.lastFrame = y, this.pv;
            }
            function i() {
                this.paths = this.localShapeCollection;
            }
            function r(y, c) {
                if (y._length !== c._length || y.c !== c.c) return !1;
                var p, d = y._length;
                for(p = 0; p < d; p += 1)if (y.v[p][0] !== c.v[p][0] || y.v[p][1] !== c.v[p][1] || y.o[p][0] !== c.o[p][0] || y.o[p][1] !== c.o[p][1] || y.i[p][0] !== c.i[p][0] || y.i[p][1] !== c.i[p][1]) return !1;
                return !0;
            }
            function a(y) {
                r(this.v, y) || (this.v = ct.clone(y), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
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
                    var y;
                    this.kf ? y = this.pv : this.data.ks ? y = this.data.ks.k : y = this.data.pt.k;
                    var c, p = this.effectsSequence.length;
                    for(c = 0; c < p; c += 1)y = this.effectsSequence[c](y);
                    this.setVValue(y), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                }
            }
            function l(y, c, p) {
                this.propType = "shape", this.comp = y.comp, this.container = y, this.elem = y, this.data = c, this.k = !1, this.kf = !1, this._mdf = !1;
                var d = p === 3 ? c.pt.k : c.ks.k;
                this.v = ct.clone(d), this.pv = ct.clone(this.v), this.localShapeCollection = le.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
            }
            function o(y) {
                this.effectsSequence.push(y), this.container.addDynamicProperty(this);
            }
            l.prototype.interpolateShape = e, l.prototype.getValue = n, l.prototype.setVValue = a, l.prototype.addEffect = o;
            function m(y, c, p) {
                this.propType = "shape", this.comp = y.comp, this.elem = y, this.container = y, this.offsetTime = y.data.st, this.keyframes = p === 3 ? c.pt.k : c.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                var d = this.keyframes[0].s[0].i.length;
                this.v = ct.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, d), this.pv = ct.clone(this.v), this.localShapeCollection = le.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                    lastFrame: t,
                    lastIndex: 0
                }, this.effectsSequence = [
                    s.bind(this)
                ];
            }
            m.prototype.getValue = n, m.prototype.interpolateShape = e, m.prototype.setVValue = a, m.prototype.addEffect = o;
            var g = function() {
                var y = Yt;
                function c(p, d) {
                    this.v = ct.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = le.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = d.d, this.elem = p, this.comp = p.comp, this.frameId = -1, this.initDynamicPropertyContainer(p), this.p = L.getProp(p, d.p, 1, 0, this), this.s = L.getProp(p, d.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
                }
                return c.prototype = {
                    reset: i,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function() {
                        var p = this.p.v[0], d = this.p.v[1], x = this.s.v[0] / 2, A = this.s.v[1] / 2, M = this.d !== 3, w = this.v;
                        w.v[0][0] = p, w.v[0][1] = d - A, w.v[1][0] = M ? p + x : p - x, w.v[1][1] = d, w.v[2][0] = p, w.v[2][1] = d + A, w.v[3][0] = M ? p - x : p + x, w.v[3][1] = d, w.i[0][0] = M ? p - x * y : p + x * y, w.i[0][1] = d - A, w.i[1][0] = M ? p + x : p - x, w.i[1][1] = d - A * y, w.i[2][0] = M ? p + x * y : p - x * y, w.i[2][1] = d + A, w.i[3][0] = M ? p - x : p + x, w.i[3][1] = d + A * y, w.o[0][0] = M ? p + x * y : p - x * y, w.o[0][1] = d - A, w.o[1][0] = M ? p + x : p - x, w.o[1][1] = d + A * y, w.o[2][0] = M ? p - x * y : p + x * y, w.o[2][1] = d + A, w.o[3][0] = M ? p - x : p + x, w.o[3][1] = d - A * y;
                    }
                }, J([
                    ht
                ], c), c;
            }(), C = function() {
                function y(c, p) {
                    this.v = ct.newElement(), this.v.setPathData(!0, 0), this.elem = c, this.comp = c.comp, this.data = p, this.frameId = -1, this.d = p.d, this.initDynamicPropertyContainer(c), p.sy === 1 ? (this.ir = L.getProp(c, p.ir, 0, 0, this), this.is = L.getProp(c, p.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = L.getProp(c, p.pt, 0, 0, this), this.p = L.getProp(c, p.p, 1, 0, this), this.r = L.getProp(c, p.r, 0, Z, this), this.or = L.getProp(c, p.or, 0, 0, this), this.os = L.getProp(c, p.os, 0, .01, this), this.localShapeCollection = le.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
                }
                return y.prototype = {
                    reset: i,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function() {
                        var c = Math.floor(this.pt.v) * 2, p = Math.PI * 2 / c, d = !0, x = this.or.v, A = this.ir.v, M = this.os.v, w = this.is.v, I = 2 * Math.PI * x / (c * 2), N = 2 * Math.PI * A / (c * 2), V, R, q, F, E = -Math.PI / 2;
                        E += this.r.v;
                        var u = this.data.d === 3 ? -1 : 1;
                        for(this.v._length = 0, V = 0; V < c; V += 1){
                            R = d ? x : A, q = d ? M : w, F = d ? I : N;
                            var _ = R * Math.cos(E), h = R * Math.sin(E), b = _ === 0 && h === 0 ? 0 : h / Math.sqrt(_ * _ + h * h), T = _ === 0 && h === 0 ? 0 : -_ / Math.sqrt(_ * _ + h * h);
                            _ += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(_, h, _ - b * F * q * u, h - T * F * q * u, _ + b * F * q * u, h + T * F * q * u, V, !0), d = !d, E += p * u;
                        }
                    },
                    convertPolygonToPath: function() {
                        var c = Math.floor(this.pt.v), p = Math.PI * 2 / c, d = this.or.v, x = this.os.v, A = 2 * Math.PI * d / (c * 4), M, w = -Math.PI * .5, I = this.data.d === 3 ? -1 : 1;
                        for(w += this.r.v, this.v._length = 0, M = 0; M < c; M += 1){
                            var N = d * Math.cos(w), V = d * Math.sin(w), R = N === 0 && V === 0 ? 0 : V / Math.sqrt(N * N + V * V), q = N === 0 && V === 0 ? 0 : -N / Math.sqrt(N * N + V * V);
                            N += +this.p.v[0], V += +this.p.v[1], this.v.setTripleAt(N, V, N - R * A * x * I, V - q * A * x * I, N + R * A * x * I, V + q * A * x * I, M, !0), w += p * I;
                        }
                        this.paths.length = 0, this.paths[0] = this.v;
                    }
                }, J([
                    ht
                ], y), y;
            }(), f = function() {
                function y(c, p) {
                    this.v = ct.newElement(), this.v.c = !0, this.localShapeCollection = le.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = c, this.comp = c.comp, this.frameId = -1, this.d = p.d, this.initDynamicPropertyContainer(c), this.p = L.getProp(c, p.p, 1, 0, this), this.s = L.getProp(c, p.s, 1, 0, this), this.r = L.getProp(c, p.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
                }
                return y.prototype = {
                    convertRectToPath: function() {
                        var c = this.p.v[0], p = this.p.v[1], d = this.s.v[0] / 2, x = this.s.v[1] / 2, A = Ti(d, x, this.r.v), M = A * (1 - Yt);
                        this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(c + d, p - x + A, c + d, p - x + A, c + d, p - x + M, 0, !0), this.v.setTripleAt(c + d, p + x - A, c + d, p + x - M, c + d, p + x - A, 1, !0), A !== 0 ? (this.v.setTripleAt(c + d - A, p + x, c + d - A, p + x, c + d - M, p + x, 2, !0), this.v.setTripleAt(c - d + A, p + x, c - d + M, p + x, c - d + A, p + x, 3, !0), this.v.setTripleAt(c - d, p + x - A, c - d, p + x - A, c - d, p + x - M, 4, !0), this.v.setTripleAt(c - d, p - x + A, c - d, p - x + M, c - d, p - x + A, 5, !0), this.v.setTripleAt(c - d + A, p - x, c - d + A, p - x, c - d + M, p - x, 6, !0), this.v.setTripleAt(c + d - A, p - x, c + d - M, p - x, c + d - A, p - x, 7, !0)) : (this.v.setTripleAt(c - d, p + x, c - d + M, p + x, c - d, p + x, 2), this.v.setTripleAt(c - d, p - x, c - d, p - x + M, c - d, p - x, 3))) : (this.v.setTripleAt(c + d, p - x + A, c + d, p - x + M, c + d, p - x + A, 0, !0), A !== 0 ? (this.v.setTripleAt(c + d - A, p - x, c + d - A, p - x, c + d - M, p - x, 1, !0), this.v.setTripleAt(c - d + A, p - x, c - d + M, p - x, c - d + A, p - x, 2, !0), this.v.setTripleAt(c - d, p - x + A, c - d, p - x + A, c - d, p - x + M, 3, !0), this.v.setTripleAt(c - d, p + x - A, c - d, p + x - M, c - d, p + x - A, 4, !0), this.v.setTripleAt(c - d + A, p + x, c - d + A, p + x, c - d + M, p + x, 5, !0), this.v.setTripleAt(c + d - A, p + x, c + d - M, p + x, c + d - A, p + x, 6, !0), this.v.setTripleAt(c + d, p + x - A, c + d, p + x - A, c + d, p + x - M, 7, !0)) : (this.v.setTripleAt(c - d, p - x, c - d + M, p - x, c - d, p - x, 1, !0), this.v.setTripleAt(c - d, p + x, c - d, p + x - M, c - d, p + x, 2, !0), this.v.setTripleAt(c + d, p + x, c + d - M, p + x, c + d, p + x, 3, !0)));
                    },
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                    },
                    reset: i
                }, J([
                    ht
                ], y), y;
            }();
            function P(y, c, p) {
                var d;
                if (p === 3 || p === 4) {
                    var x = p === 3 ? c.pt : c.ks, A = x.k;
                    A.length ? d = new m(y, c, p) : d = new l(y, c, p);
                } else p === 5 ? d = new f(y, c) : p === 6 ? d = new g(y, c) : p === 7 && (d = new C(y, c));
                return d.k && y.addDynamicProperty(d), d;
            }
            function k() {
                return l;
            }
            function v() {
                return m;
            }
            var D = {};
            return D.getShapeProp = P, D.getConstructorFunction = k, D.getKeyframedConstructorFunction = v, D;
        }(), tt = function() {
            var t = Math.cos, e = Math.sin, s = Math.tan, i = Math.round;
            function r() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
            }
            function a(h) {
                if (h === 0) return this;
                var b = t(h), T = e(h);
                return this._t(b, -T, 0, 0, T, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function n(h) {
                if (h === 0) return this;
                var b = t(h), T = e(h);
                return this._t(1, 0, 0, 0, 0, b, -T, 0, 0, T, b, 0, 0, 0, 0, 1);
            }
            function l(h) {
                if (h === 0) return this;
                var b = t(h), T = e(h);
                return this._t(b, 0, T, 0, 0, 1, 0, 0, -T, 0, b, 0, 0, 0, 0, 1);
            }
            function o(h) {
                if (h === 0) return this;
                var b = t(h), T = e(h);
                return this._t(b, -T, 0, 0, T, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function m(h, b) {
                return this._t(1, b, h, 1, 0, 0);
            }
            function g(h, b) {
                return this.shear(s(h), s(b));
            }
            function C(h, b) {
                var T = t(b), S = e(b);
                return this._t(T, S, 0, 0, -S, T, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, s(h), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(T, -S, 0, 0, S, T, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function f(h, b, T) {
                return !T && T !== 0 && (T = 1), h === 1 && b === 1 && T === 1 ? this : this._t(h, 0, 0, 0, 0, b, 0, 0, 0, 0, T, 0, 0, 0, 0, 1);
            }
            function P(h, b, T, S, j, z, X, Y, st, it, gt, Ot, yt, pt, Ct, H) {
                return this.props[0] = h, this.props[1] = b, this.props[2] = T, this.props[3] = S, this.props[4] = j, this.props[5] = z, this.props[6] = X, this.props[7] = Y, this.props[8] = st, this.props[9] = it, this.props[10] = gt, this.props[11] = Ot, this.props[12] = yt, this.props[13] = pt, this.props[14] = Ct, this.props[15] = H, this;
            }
            function k(h, b, T) {
                return T = T || 0, h !== 0 || b !== 0 || T !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, h, b, T, 1) : this;
            }
            function v(h, b, T, S, j, z, X, Y, st, it, gt, Ot, yt, pt, Ct, H) {
                var O = this.props;
                if (h === 1 && b === 0 && T === 0 && S === 0 && j === 0 && z === 1 && X === 0 && Y === 0 && st === 0 && it === 0 && gt === 1 && Ot === 0) return O[12] = O[12] * h + O[15] * yt, O[13] = O[13] * z + O[15] * pt, O[14] = O[14] * gt + O[15] * Ct, O[15] *= H, this._identityCalculated = !1, this;
                var Wt = O[0], Qt = O[1], Bt = O[2], Vt = O[3], jt = O[4], Jt = O[5], vt = O[6], $t = O[7], Zt = O[8], At = O[9], te = O[10], Tt = O[11], oe = O[12], Ze = O[13], ts = O[14], es = O[15];
                return O[0] = Wt * h + Qt * j + Bt * st + Vt * yt, O[1] = Wt * b + Qt * z + Bt * it + Vt * pt, O[2] = Wt * T + Qt * X + Bt * gt + Vt * Ct, O[3] = Wt * S + Qt * Y + Bt * Ot + Vt * H, O[4] = jt * h + Jt * j + vt * st + $t * yt, O[5] = jt * b + Jt * z + vt * it + $t * pt, O[6] = jt * T + Jt * X + vt * gt + $t * Ct, O[7] = jt * S + Jt * Y + vt * Ot + $t * H, O[8] = Zt * h + At * j + te * st + Tt * yt, O[9] = Zt * b + At * z + te * it + Tt * pt, O[10] = Zt * T + At * X + te * gt + Tt * Ct, O[11] = Zt * S + At * Y + te * Ot + Tt * H, O[12] = oe * h + Ze * j + ts * st + es * yt, O[13] = oe * b + Ze * z + ts * it + es * pt, O[14] = oe * T + Ze * X + ts * gt + es * Ct, O[15] = oe * S + Ze * Y + ts * Ot + es * H, this._identityCalculated = !1, this;
            }
            function D(h) {
                var b = h.props;
                return this.transform(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13], b[14], b[15]);
            }
            function y() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
            }
            function c(h) {
                for(var b = 0; b < 16;){
                    if (h.props[b] !== this.props[b]) return !1;
                    b += 1;
                }
                return !0;
            }
            function p(h) {
                var b;
                for(b = 0; b < 16; b += 1)h.props[b] = this.props[b];
                return h;
            }
            function d(h) {
                var b;
                for(b = 0; b < 16; b += 1)this.props[b] = h[b];
            }
            function x(h, b, T) {
                return {
                    x: h * this.props[0] + b * this.props[4] + T * this.props[8] + this.props[12],
                    y: h * this.props[1] + b * this.props[5] + T * this.props[9] + this.props[13],
                    z: h * this.props[2] + b * this.props[6] + T * this.props[10] + this.props[14]
                };
            }
            function A(h, b, T) {
                return h * this.props[0] + b * this.props[4] + T * this.props[8] + this.props[12];
            }
            function M(h, b, T) {
                return h * this.props[1] + b * this.props[5] + T * this.props[9] + this.props[13];
            }
            function w(h, b, T) {
                return h * this.props[2] + b * this.props[6] + T * this.props[10] + this.props[14];
            }
            function I() {
                var h = this.props[0] * this.props[5] - this.props[1] * this.props[4], b = this.props[5] / h, T = -this.props[1] / h, S = -this.props[4] / h, j = this.props[0] / h, z = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / h, X = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / h, Y = new tt;
                return Y.props[0] = b, Y.props[1] = T, Y.props[4] = S, Y.props[5] = j, Y.props[12] = z, Y.props[13] = X, Y;
            }
            function N(h) {
                var b = this.getInverseMatrix();
                return b.applyToPointArray(h[0], h[1], h[2] || 0);
            }
            function V(h) {
                var b, T = h.length, S = [];
                for(b = 0; b < T; b += 1)S[b] = N(h[b]);
                return S;
            }
            function R(h, b, T) {
                var S = at("float32", 6);
                if (this.isIdentity()) S[0] = h[0], S[1] = h[1], S[2] = b[0], S[3] = b[1], S[4] = T[0], S[5] = T[1];
                else {
                    var j = this.props[0], z = this.props[1], X = this.props[4], Y = this.props[5], st = this.props[12], it = this.props[13];
                    S[0] = h[0] * j + h[1] * X + st, S[1] = h[0] * z + h[1] * Y + it, S[2] = b[0] * j + b[1] * X + st, S[3] = b[0] * z + b[1] * Y + it, S[4] = T[0] * j + T[1] * X + st, S[5] = T[0] * z + T[1] * Y + it;
                }
                return S;
            }
            function q(h, b, T) {
                var S;
                return this.isIdentity() ? S = [
                    h,
                    b,
                    T
                ] : S = [
                    h * this.props[0] + b * this.props[4] + T * this.props[8] + this.props[12],
                    h * this.props[1] + b * this.props[5] + T * this.props[9] + this.props[13],
                    h * this.props[2] + b * this.props[6] + T * this.props[10] + this.props[14]
                ], S;
            }
            function F(h, b) {
                if (this.isIdentity()) return h + "," + b;
                var T = this.props;
                return Math.round((h * T[0] + b * T[4] + T[12]) * 100) / 100 + "," + Math.round((h * T[1] + b * T[5] + T[13]) * 100) / 100;
            }
            function E() {
                for(var h = 0, b = this.props, T = "matrix3d(", S = 1e4; h < 16;)T += i(b[h] * S) / S, T += h === 15 ? ")" : ",", h += 1;
                return T;
            }
            function u(h) {
                var b = 1e4;
                return h < 1e-6 && h > 0 || h > -0.000001 && h < 0 ? i(h * b) / b : h;
            }
            function _() {
                var h = this.props, b = u(h[0]), T = u(h[1]), S = u(h[4]), j = u(h[5]), z = u(h[12]), X = u(h[13]);
                return "matrix(" + b + "," + T + "," + S + "," + j + "," + z + "," + X + ")";
            }
            return function() {
                this.reset = r, this.rotate = a, this.rotateX = n, this.rotateY = l, this.rotateZ = o, this.skew = g, this.skewFromAxis = C, this.shear = m, this.scale = f, this.setTransform = P, this.translate = k, this.transform = v, this.multiply = D, this.applyToPoint = x, this.applyToX = A, this.applyToY = M, this.applyToZ = w, this.applyToPointArray = q, this.applyToTriplePoints = R, this.applyToPointStringified = F, this.toCSS = E, this.to2dCSS = _, this.clone = p, this.cloneFromProps = d, this.equals = c, this.inversePoints = V, this.inversePoint = N, this.getInverseMatrix = I, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = at("float32", 16), this.reset();
            };
        }();
        function Je(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Je = function(e) {
                return typeof e;
            } : Je = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, Je(t);
        }
        var K = {};
        function Ki(t) {
            Pi(t);
        }
        function Js() {
            rt.searchAnimations();
        }
        function Hi(t) {
            Fi(t);
        }
        function Ui(t) {
            Ii(t);
        }
        function Qi(t) {
            return rt.loadAnimation(t);
        }
        function $i(t) {
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
        function Zi() {
            return typeof navigator < "u";
        }
        function ta(t, e) {
            t === "expressions" && Li(e);
        }
        function ea(t) {
            switch(t){
                case "propertyFactory":
                    return L;
                case "shapePropertyFactory":
                    return pe;
                case "matrix":
                    return tt;
                default:
                    return null;
            }
        }
        K.play = rt.play, K.pause = rt.pause, K.setLocationHref = Ki, K.togglePause = rt.togglePause, K.setSpeed = rt.setSpeed, K.setDirection = rt.setDirection, K.stop = rt.stop, K.searchAnimations = Js, K.registerAnimation = rt.registerAnimation, K.loadAnimation = Qi, K.setSubframeRendering = Hi, K.resize = rt.resize, K.goToAndStop = rt.goToAndStop, K.destroy = rt.destroy, K.setQuality = $i, K.inBrowser = Zi, K.installPlugin = ta, K.freeze = rt.freeze, K.unfreeze = rt.unfreeze, K.setVolume = rt.setVolume, K.mute = rt.mute, K.unmute = rt.unmute, K.getRegisteredAnimations = rt.getRegisteredAnimations, K.useWebWorker = Ci, K.setIDPrefix = Ui, K.__getFactory = ea, K.version = "5.12.2";
        function sa() {
            document.readyState === "complete" && (clearInterval(ra), Js());
        }
        function ia(t) {
            for(var e = Ys.split("&"), s = 0; s < e.length; s += 1){
                var i = e[s].split("=");
                if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
            }
            return null;
        }
        var Ys = "";
        var Xs = document.getElementsByTagName("script"), aa = Xs.length - 1, Gs = Xs[aa] || {
            src: ""
        };
        Ys = Gs.src ? Gs.src.replace(/^[^\?]+\??/, "") : "", ia("renderer");
        var ra = setInterval(sa, 100);
        try {
            !((typeof Re > "u" ? "undefined" : Je(Re)) === "object" && typeof ss < "u") && !(typeof define == "function" && define.amd) && (window.bodymovin = K);
        } catch  {}
        var Ft = function() {
            var t = {}, e = {};
            t.registerModifier = s, t.getModifier = i;
            function s(r, a) {
                e[r] || (e[r] = a);
            }
            function i(r, a, n) {
                return new e[r](a, n);
            }
            return t;
        }();
        function kt() {}
        kt.prototype.initModifierProperties = function() {}, kt.prototype.addShapeToModifier = function() {}, kt.prototype.addShape = function(t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: le.newShapeCollection()
                };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
            }
        }, kt.prototype.init = function(t, e) {
            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = is, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
        }, kt.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
        }, J([
            ht
        ], kt);
        function Dt() {}
        J([
            kt
        ], Dt), Dt.prototype.initModifierProperties = function(t, e) {
            this.s = L.getProp(t, e.s, 0, .01, this), this.e = L.getProp(t, e.e, 0, .01, this), this.o = L.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
        }, Dt.prototype.addShapeToModifier = function(t) {
            t.pathsData = [];
        }, Dt.prototype.calculateShapeEdges = function(t, e, s, i, r) {
            var a = [];
            e <= 1 ? a.push({
                s: t,
                e
            }) : t >= 1 ? a.push({
                s: t - 1,
                e: e - 1
            }) : (a.push({
                s: t,
                e: 1
            }), a.push({
                s: 0,
                e: e - 1
            }));
            var n = [], l, o = a.length, m;
            for(l = 0; l < o; l += 1)if (m = a[l], !(m.e * r < i || m.s * r > i + s)) {
                var g, C;
                m.s * r <= i ? g = 0 : g = (m.s * r - i) / s, m.e * r >= i + s ? C = 1 : C = (m.e * r - i) / s, n.push([
                    g,
                    C
                ]);
            }
            return n.length || n.push([
                0,
                0
            ]), n;
        }, Dt.prototype.releasePathsData = function(t) {
            var e, s = t.length;
            for(e = 0; e < s; e += 1)Ns.release(t[e]);
            return t.length = 0, t;
        }, Dt.prototype.processShapes = function(t) {
            var e, s;
            if (this._mdf || t) {
                var i = this.o.v % 360 / 360;
                if (i < 0 && (i += 1), this.s.v > 1 ? e = 1 + i : this.s.v < 0 ? e = 0 + i : e = this.s.v + i, this.e.v > 1 ? s = 1 + i : this.e.v < 0 ? s = 0 + i : s = this.e.v + i, e > s) {
                    var r = e;
                    e = s, s = r;
                }
                e = Math.round(e * 1e4) * 1e-4, s = Math.round(s * 1e4) * 1e-4, this.sValue = e, this.eValue = s;
            } else e = this.sValue, s = this.eValue;
            var a, n, l = this.shapes.length, o, m, g, C, f, P = 0;
            if (s === e) for(n = 0; n < l; n += 1)this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
            else if (s === 1 && e === 0 || s === 0 && e === 1) {
                if (this._mdf) for(n = 0; n < l; n += 1)this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0;
            } else {
                var k = [], v, D;
                for(n = 0; n < l; n += 1)if (v = this.shapes[n], !v.shape._mdf && !this._mdf && !t && this.m !== 2) v.shape.paths = v.localShapeCollection;
                else {
                    if (a = v.shape.paths, m = a._length, f = 0, !v.shape._mdf && v.pathsData.length) f = v.totalShapeLength;
                    else {
                        for(g = this.releasePathsData(v.pathsData), o = 0; o < m; o += 1)C = wt.getSegmentsLength(a.shapes[o]), g.push(C), f += C.totalLength;
                        v.totalShapeLength = f, v.pathsData = g;
                    }
                    P += f, v.shape._mdf = !0;
                }
                var y = e, c = s, p = 0, d;
                for(n = l - 1; n >= 0; n -= 1)if (v = this.shapes[n], v.shape._mdf) {
                    for(D = v.localShapeCollection, D.releaseShapes(), this.m === 2 && l > 1 ? (d = this.calculateShapeEdges(e, s, v.totalShapeLength, p, P), p += v.totalShapeLength) : d = [
                        [
                            y,
                            c
                        ]
                    ], m = d.length, o = 0; o < m; o += 1){
                        y = d[o][0], c = d[o][1], k.length = 0, c <= 1 ? k.push({
                            s: v.totalShapeLength * y,
                            e: v.totalShapeLength * c
                        }) : y >= 1 ? k.push({
                            s: v.totalShapeLength * (y - 1),
                            e: v.totalShapeLength * (c - 1)
                        }) : (k.push({
                            s: v.totalShapeLength * y,
                            e: v.totalShapeLength
                        }), k.push({
                            s: 0,
                            e: v.totalShapeLength * (c - 1)
                        }));
                        var x = this.addShapes(v, k[0]);
                        if (k[0].s !== k[0].e) {
                            if (k.length > 1) {
                                var A = v.shape.paths.shapes[v.shape.paths._length - 1];
                                if (A.c) {
                                    var M = x.pop();
                                    this.addPaths(x, D), x = this.addShapes(v, k[1], M);
                                } else this.addPaths(x, D), x = this.addShapes(v, k[1]);
                            }
                            this.addPaths(x, D);
                        }
                    }
                    v.shape.paths = D;
                }
            }
        }, Dt.prototype.addPaths = function(t, e) {
            var s, i = t.length;
            for(s = 0; s < i; s += 1)e.addShape(t[s]);
        }, Dt.prototype.addSegment = function(t, e, s, i, r, a, n) {
            r.setXYAt(e[0], e[1], "o", a), r.setXYAt(s[0], s[1], "i", a + 1), n && r.setXYAt(t[0], t[1], "v", a), r.setXYAt(i[0], i[1], "v", a + 1);
        }, Dt.prototype.addSegmentFromArray = function(t, e, s, i) {
            e.setXYAt(t[1], t[5], "o", s), e.setXYAt(t[2], t[6], "i", s + 1), i && e.setXYAt(t[0], t[4], "v", s), e.setXYAt(t[3], t[7], "v", s + 1);
        }, Dt.prototype.addShapes = function(t, e, s) {
            var i = t.pathsData, r = t.shape.paths.shapes, a, n = t.shape.paths._length, l, o, m = 0, g, C, f, P, k = [], v, D = !0;
            for(s ? (C = s._length, v = s._length) : (s = ct.newElement(), C = 0, v = 0), k.push(s), a = 0; a < n; a += 1){
                for(f = i[a].lengths, s.c = r[a].c, o = r[a].c ? f.length : f.length + 1, l = 1; l < o; l += 1)if (g = f[l - 1], m + g.addedLength < e.s) m += g.addedLength, s.c = !1;
                else if (m > e.e) {
                    s.c = !1;
                    break;
                } else e.s <= m && e.e >= m + g.addedLength ? (this.addSegment(r[a].v[l - 1], r[a].o[l - 1], r[a].i[l], r[a].v[l], s, C, D), D = !1) : (P = wt.getNewSegment(r[a].v[l - 1], r[a].v[l], r[a].o[l - 1], r[a].i[l], (e.s - m) / g.addedLength, (e.e - m) / g.addedLength, f[l - 1]), this.addSegmentFromArray(P, s, C, D), D = !1, s.c = !1), m += g.addedLength, C += 1;
                if (r[a].c && f.length) {
                    if (g = f[l - 1], m <= e.e) {
                        var y = f[l - 1].addedLength;
                        e.s <= m && e.e >= m + y ? (this.addSegment(r[a].v[l - 1], r[a].o[l - 1], r[a].i[0], r[a].v[0], s, C, D), D = !1) : (P = wt.getNewSegment(r[a].v[l - 1], r[a].v[0], r[a].o[l - 1], r[a].i[0], (e.s - m) / y, (e.e - m) / y, f[l - 1]), this.addSegmentFromArray(P, s, C, D), D = !1, s.c = !1);
                    } else s.c = !1;
                    m += g.addedLength, C += 1;
                }
                if (s._length && (s.setXYAt(s.v[v][0], s.v[v][1], "i", v), s.setXYAt(s.v[s._length - 1][0], s.v[s._length - 1][1], "o", s._length - 1)), m > e.e) break;
                a < n - 1 && (s = ct.newElement(), D = !0, k.push(s), C = 0);
            }
            return k;
        };
        function ke() {}
        J([
            kt
        ], ke), ke.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = L.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
        }, ke.prototype.processPath = function(t, e) {
            var s = e / 100, i = [
                0,
                0
            ], r = t._length, a = 0;
            for(a = 0; a < r; a += 1)i[0] += t.v[a][0], i[1] += t.v[a][1];
            i[0] /= r, i[1] /= r;
            var n = ct.newElement();
            n.c = t.c;
            var l, o, m, g, C, f;
            for(a = 0; a < r; a += 1)l = t.v[a][0] + (i[0] - t.v[a][0]) * s, o = t.v[a][1] + (i[1] - t.v[a][1]) * s, m = t.o[a][0] + (i[0] - t.o[a][0]) * -s, g = t.o[a][1] + (i[1] - t.o[a][1]) * -s, C = t.i[a][0] + (i[0] - t.i[a][0]) * -s, f = t.i[a][1] + (i[1] - t.i[a][1]) * -s, n.setTripleAt(l, o, m, g, C, f, a);
            return n;
        }, ke.prototype.processShapes = function(t) {
            var e, s, i = this.shapes.length, r, a, n = this.amount.v;
            if (n !== 0) {
                var l, o;
                for(s = 0; s < i; s += 1){
                    if (l = this.shapes[s], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t)) for(o.releaseShapes(), l.shape._mdf = !0, e = l.shape.paths.shapes, a = l.shape.paths._length, r = 0; r < a; r += 1)o.addShape(this.processPath(e[r], n));
                    l.shape.paths = l.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        var Ye = function() {
            var t = [
                0,
                0
            ];
            function e(o) {
                var m = this._mdf;
                this.iterateDynamicProperties(), this._mdf = this._mdf || m, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            function s(o) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o) {
                        var m;
                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                            var g, C;
                            if (m = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (g = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / m, 0), C = this.p.getValueAtTime(this.p.keyframes[0].t / m, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (g = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / m, 0), C = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / m, 0)) : (g = this.p.pv, C = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / m, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                g = [], C = [];
                                var f = this.px, P = this.py;
                                f._caching.lastFrame + f.offsetTime <= f.keyframes[0].t ? (g[0] = f.getValueAtTime((f.keyframes[0].t + .01) / m, 0), g[1] = P.getValueAtTime((P.keyframes[0].t + .01) / m, 0), C[0] = f.getValueAtTime(f.keyframes[0].t / m, 0), C[1] = P.getValueAtTime(P.keyframes[0].t / m, 0)) : f._caching.lastFrame + f.offsetTime >= f.keyframes[f.keyframes.length - 1].t ? (g[0] = f.getValueAtTime(f.keyframes[f.keyframes.length - 1].t / m, 0), g[1] = P.getValueAtTime(P.keyframes[P.keyframes.length - 1].t / m, 0), C[0] = f.getValueAtTime((f.keyframes[f.keyframes.length - 1].t - .01) / m, 0), C[1] = P.getValueAtTime((P.keyframes[P.keyframes.length - 1].t - .01) / m, 0)) : (g = [
                                    f.pv,
                                    P.pv
                                ], C[0] = f.getValueAtTime((f._caching.lastFrame + f.offsetTime - .01) / m, f.offsetTime), C[1] = P.getValueAtTime((P._caching.lastFrame + P.offsetTime - .01) / m, P.offsetTime));
                            } else C = t, g = C;
                            this.v.rotate(-Math.atan2(g[1] - C[1], g[0] - C[0]));
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
            function r() {}
            function a(o) {
                this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = !0;
            }
            function n(o, m, g) {
                if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = m, this.v = new tt, this.pre = new tt, this.appliedTransformations = 0, this.initDynamicPropertyContainer(g || o), m.p && m.p.s ? (this.px = L.getProp(o, m.p.x, 0, 0, this), this.py = L.getProp(o, m.p.y, 0, 0, this), m.p.z && (this.pz = L.getProp(o, m.p.z, 0, 0, this))) : this.p = L.getProp(o, m.p || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), m.rx) {
                    if (this.rx = L.getProp(o, m.rx, 0, Z, this), this.ry = L.getProp(o, m.ry, 0, Z, this), this.rz = L.getProp(o, m.rz, 0, Z, this), m.or.k[0].ti) {
                        var C, f = m.or.k.length;
                        for(C = 0; C < f; C += 1)m.or.k[C].to = null, m.or.k[C].ti = null;
                    }
                    this.or = L.getProp(o, m.or, 1, Z, this), this.or.sh = !0;
                } else this.r = L.getProp(o, m.r || {
                    k: 0
                }, 0, Z, this);
                m.sk && (this.sk = L.getProp(o, m.sk, 0, Z, this), this.sa = L.getProp(o, m.sa, 0, Z, this)), this.a = L.getProp(o, m.a || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), this.s = L.getProp(o, m.s || {
                    k: [
                        100,
                        100,
                        100
                    ]
                }, 1, .01, this), m.o ? this.o = L.getProp(o, m.o, 0, .01, o) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
            }
            n.prototype = {
                applyToMatrix: e,
                getValue: s,
                precalculateMatrix: i,
                autoOrient: r
            }, J([
                ht
            ], n), n.prototype.addDynamicProperty = a, n.prototype._addDynamicProperty = ht.prototype.addDynamicProperty;
            function l(o, m, g) {
                return new n(o, m, g);
            }
            return {
                getTransformProperty: l
            };
        }();
        function Et() {}
        J([
            kt
        ], Et), Et.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = L.getProp(t, e.c, 0, null, this), this.o = L.getProp(t, e.o, 0, null, this), this.tr = Ye.getTransformProperty(t, e.tr, this), this.so = L.getProp(t, e.tr.so, 0, .01, this), this.eo = L.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new tt, this.rMatrix = new tt, this.sMatrix = new tt, this.tMatrix = new tt, this.matrix = new tt;
        }, Et.prototype.applyTransforms = function(t, e, s, i, r, a) {
            var n = a ? -1 : 1, l = i.s.v[0] + (1 - i.s.v[0]) * (1 - r), o = i.s.v[1] + (1 - i.s.v[1]) * (1 - r);
            t.translate(i.p.v[0] * n * r, i.p.v[1] * n * r, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * r), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), s.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), s.scale(a ? 1 / l : l, a ? 1 / o : o), s.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
        }, Et.prototype.init = function(t, e, s, i) {
            for(this.elem = t, this.arr = e, this.pos = s, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[s]); s > 0;)s -= 1, this._elements.unshift(e[s]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
        }, Et.prototype.resetElements = function(t) {
            var e, s = t.length;
            for(e = 0; e < s; e += 1)t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it);
        }, Et.prototype.cloneElements = function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e;
        }, Et.prototype.changeGroupRender = function(t, e) {
            var s, i = t.length;
            for(s = 0; s < i; s += 1)t[s]._render = e, t[s].ty === "gr" && this.changeGroupRender(t[s].it, e);
        }, Et.prototype.processShapes = function(t) {
            var e, s, i, r, a, n = !1;
            if (this._mdf || t) {
                var l = Math.ceil(this.c.v);
                if (this._groups.length < l) {
                    for(; this._groups.length < l;){
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
                a = 0;
                var m;
                for(i = 0; i <= this._groups.length - 1; i += 1){
                    if (m = a < l, this._groups[i]._render = m, this.changeGroupRender(this._groups[i].it, m), !m) {
                        var g = this.elemsData[i].it, C = g[g.length - 1];
                        C.transform.op.v !== 0 ? (C.transform.op._mdf = !0, C.transform.op.v = 0) : C.transform.op._mdf = !1;
                    }
                    a += 1;
                }
                this._currentCopies = l;
                var f = this.o.v, P = f % 1, k = f > 0 ? Math.floor(f) : Math.ceil(f), v = this.pMatrix.props, D = this.rMatrix.props, y = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var c = 0;
                if (f > 0) {
                    for(; c < k;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), c += 1;
                    P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, P, !1), c += P);
                } else if (f < 0) {
                    for(; c > k;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), c -= 1;
                    P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -P, !0), c -= P);
                }
                i = this.data.m === 1 ? 0 : this._currentCopies - 1, r = this.data.m === 1 ? 1 : -1, a = this._currentCopies;
                for(var p, d; a;){
                    if (e = this.elemsData[i].it, s = e[e.length - 1].transform.mProps.v.props, d = s.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), c !== 0) {
                        for((i !== 0 && r === 1 || i !== this._currentCopies - 1 && r === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(D[0], D[1], D[2], D[3], D[4], D[5], D[6], D[7], D[8], D[9], D[10], D[11], D[12], D[13], D[14], D[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), p = 0; p < d; p += 1)s[p] = this.matrix.props[p];
                        this.matrix.reset();
                    } else for(this.matrix.reset(), p = 0; p < d; p += 1)s[p] = this.matrix.props[p];
                    c += 1, a -= 1, i += r;
                }
            } else for(a = this._currentCopies, i = 0, r = 1; a;)e = this.elemsData[i].it, s = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += r;
            return n;
        }, Et.prototype.addShape = function() {};
        function Pe() {}
        J([
            kt
        ], Pe), Pe.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.rd = L.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
        }, Pe.prototype.processPath = function(t, e) {
            var s = ct.newElement();
            s.c = t.c;
            var i, r = t._length, a, n, l, o, m, g, C = 0, f, P, k, v, D, y;
            for(i = 0; i < r; i += 1)a = t.v[i], l = t.o[i], n = t.i[i], a[0] === l[0] && a[1] === l[1] && a[0] === n[0] && a[1] === n[1] ? (i === 0 || i === r - 1) && !t.c ? (s.setTripleAt(a[0], a[1], l[0], l[1], n[0], n[1], C), C += 1) : (i === 0 ? o = t.v[r - 1] : o = t.v[i - 1], m = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), g = m ? Math.min(m / 2, e) / m : 0, D = a[0] + (o[0] - a[0]) * g, f = D, y = a[1] - (a[1] - o[1]) * g, P = y, k = f - (f - a[0]) * Yt, v = P - (P - a[1]) * Yt, s.setTripleAt(f, P, k, v, D, y, C), C += 1, i === r - 1 ? o = t.v[0] : o = t.v[i + 1], m = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), g = m ? Math.min(m / 2, e) / m : 0, k = a[0] + (o[0] - a[0]) * g, f = k, v = a[1] + (o[1] - a[1]) * g, P = v, D = f - (f - a[0]) * Yt, y = P - (P - a[1]) * Yt, s.setTripleAt(f, P, k, v, D, y, C), C += 1) : (s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], C), C += 1);
            return s;
        }, Pe.prototype.processShapes = function(t) {
            var e, s, i = this.shapes.length, r, a, n = this.rd.v;
            if (n !== 0) {
                var l, o;
                for(s = 0; s < i; s += 1){
                    if (l = this.shapes[s], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t)) for(o.releaseShapes(), l.shape._mdf = !0, e = l.shape.paths.shapes, a = l.shape.paths._length, r = 0; r < a; r += 1)o.addShape(this.processPath(e[r], n));
                    l.shape.paths = l.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function Xe(t, e) {
            return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
        }
        function hs(t) {
            return Math.abs(t) <= 1e-5;
        }
        function Ks(t, e, s) {
            return t * (1 - s) + e * s;
        }
        function Xt(t, e, s) {
            return [
                Ks(t[0], e[0], s),
                Ks(t[1], e[1], s)
            ];
        }
        function na(t, e, s) {
            if (t === 0) return [];
            var i = e * e - 4 * t * s;
            if (i < 0) return [];
            var r = -e / (2 * t);
            if (i === 0) return [
                r
            ];
            var a = Math.sqrt(i) / (2 * t);
            return [
                r - a,
                r + a
            ];
        }
        function Hs(t, e, s, i) {
            return [
                -t + 3 * e - 3 * s + i,
                3 * t - 6 * e + 3 * s,
                -3 * t + 3 * e,
                t
            ];
        }
        function Us(t) {
            return new et(t, t, t, t, !1);
        }
        function et(t, e, s, i, r) {
            r && ce(t, e) && (e = Xt(t, i, 1 / 3)), r && ce(s, i) && (s = Xt(t, i, 2 / 3));
            var a = Hs(t[0], e[0], s[0], i[0]), n = Hs(t[1], e[1], s[1], i[1]);
            this.a = [
                a[0],
                n[0]
            ], this.b = [
                a[1],
                n[1]
            ], this.c = [
                a[2],
                n[2]
            ], this.d = [
                a[3],
                n[3]
            ], this.points = [
                t,
                e,
                s,
                i
            ];
        }
        et.prototype.point = function(t) {
            return [
                ((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0],
                ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]
            ];
        }, et.prototype.derivative = function(t) {
            return [
                (3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0],
                (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]
            ];
        }, et.prototype.tangentAngle = function(t) {
            var e = this.derivative(t);
            return Math.atan2(e[1], e[0]);
        }, et.prototype.normalAngle = function(t) {
            var e = this.derivative(t);
            return Math.atan2(e[0], e[1]);
        }, et.prototype.inflectionPoints = function() {
            var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (hs(t)) return [];
            var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, s = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
            if (s < 0) return [];
            var i = Math.sqrt(s);
            return hs(i) ? i > 0 && i < 1 ? [
                e
            ] : [] : [
                e - i,
                e + i
            ].filter(function(r) {
                return r > 0 && r < 1;
            });
        }, et.prototype.split = function(t) {
            if (t <= 0) return [
                Us(this.points[0]),
                this
            ];
            if (t >= 1) return [
                this,
                Us(this.points[this.points.length - 1])
            ];
            var e = Xt(this.points[0], this.points[1], t), s = Xt(this.points[1], this.points[2], t), i = Xt(this.points[2], this.points[3], t), r = Xt(e, s, t), a = Xt(s, i, t), n = Xt(r, a, t);
            return [
                new et(this.points[0], e, r, n, !0),
                new et(n, a, i, this.points[3], !0)
            ];
        };
        function Qs(t, e) {
            var s = t.points[0][e], i = t.points[t.points.length - 1][e];
            if (s > i) {
                var r = i;
                i = s, s = r;
            }
            for(var a = na(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)if (a[n] > 0 && a[n] < 1) {
                var l = t.point(a[n])[e];
                l < s ? s = l : l > i && (i = l);
            }
            return {
                min: s,
                max: i
            };
        }
        et.prototype.bounds = function() {
            return {
                x: Qs(this, 0),
                y: Qs(this, 1)
            };
        }, et.prototype.boundingBox = function() {
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
        function Ge(t, e, s) {
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
        function $s(t) {
            var e = t.bez.split(.5);
            return [
                Ge(e[0], t.t1, t.t),
                Ge(e[1], t.t, t.t2)
            ];
        }
        function oa(t, e) {
            return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
        }
        function Se(t, e, s, i, r, a) {
            if (oa(t, e)) {
                if (s >= a || t.width <= i && t.height <= i && e.width <= i && e.height <= i) {
                    r.push([
                        t.t,
                        e.t
                    ]);
                    return;
                }
                var n = $s(t), l = $s(e);
                Se(n[0], l[0], s + 1, i, r, a), Se(n[0], l[1], s + 1, i, r, a), Se(n[1], l[0], s + 1, i, r, a), Se(n[1], l[1], s + 1, i, r, a);
            }
        }
        et.prototype.intersections = function(t, e, s) {
            e === void 0 && (e = 2), s === void 0 && (s = 7);
            var i = [];
            return Se(Ge(this, 0, 1), Ge(t, 0, 1), 0, e, i, s), i;
        }, et.shapeSegment = function(t, e) {
            var s = (e + 1) % t.length();
            return new et(t.v[e], t.o[e], t.i[s], t.v[s], !0);
        }, et.shapeSegmentInverted = function(t, e) {
            var s = (e + 1) % t.length();
            return new et(t.v[s], t.i[s], t.o[e], t.v[e], !0);
        };
        function ls(t, e) {
            return [
                t[1] * e[2] - t[2] * e[1],
                t[2] * e[0] - t[0] * e[2],
                t[0] * e[1] - t[1] * e[0]
            ];
        }
        function Ke(t, e, s, i) {
            var r = [
                t[0],
                t[1],
                1
            ], a = [
                e[0],
                e[1],
                1
            ], n = [
                s[0],
                s[1],
                1
            ], l = [
                i[0],
                i[1],
                1
            ], o = ls(ls(r, a), ls(n, l));
            return hs(o[2]) ? null : [
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
        function ps(t, e) {
            return Math.hypot(t[0] - e[0], t[1] - e[1]);
        }
        function ce(t, e) {
            return Xe(t[0], e[0]) && Xe(t[1], e[1]);
        }
        function De() {}
        J([
            kt
        ], De), De.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amplitude = L.getProp(t, e.s, 0, null, this), this.frequency = L.getProp(t, e.r, 0, null, this), this.pointsType = L.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
        };
        function Zs(t, e, s, i, r, a, n) {
            var l = s - Math.PI / 2, o = s + Math.PI / 2, m = e[0] + Math.cos(s) * i * r, g = e[1] - Math.sin(s) * i * r;
            t.setTripleAt(m, g, m + Math.cos(l) * a, g - Math.sin(l) * a, m + Math.cos(o) * n, g - Math.sin(o) * n, t.length());
        }
        function ha(t, e) {
            var s = [
                e[0] - t[0],
                e[1] - t[1]
            ], i = -Math.PI * .5, r = [
                Math.cos(i) * s[0] - Math.sin(i) * s[1],
                Math.sin(i) * s[0] + Math.cos(i) * s[1]
            ];
            return r;
        }
        function la(t, e) {
            var s = e === 0 ? t.length() - 1 : e - 1, i = (e + 1) % t.length(), r = t.v[s], a = t.v[i], n = ha(r, a);
            return Math.atan2(0, 1) - Math.atan2(n[1], n[0]);
        }
        function ti(t, e, s, i, r, a, n) {
            var l = la(e, s), o = e.v[s % e._length], m = e.v[s === 0 ? e._length - 1 : s - 1], g = e.v[(s + 1) % e._length], C = a === 2 ? Math.sqrt(Math.pow(o[0] - m[0], 2) + Math.pow(o[1] - m[1], 2)) : 0, f = a === 2 ? Math.sqrt(Math.pow(o[0] - g[0], 2) + Math.pow(o[1] - g[1], 2)) : 0;
            Zs(t, e.v[s % e._length], l, n, i, f / ((r + 1) * 2), C / ((r + 1) * 2));
        }
        function pa(t, e, s, i, r, a) {
            for(var n = 0; n < i; n += 1){
                var l = (n + 1) / (i + 1), o = r === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, m = e.normalAngle(l), g = e.point(l);
                Zs(t, g, m, a, s, o / ((i + 1) * 2), o / ((i + 1) * 2)), a = -a;
            }
            return a;
        }
        De.prototype.processPath = function(t, e, s, i) {
            var r = t._length, a = ct.newElement();
            if (a.c = t.c, t.c || (r -= 1), r === 0) return a;
            var n = -1, l = et.shapeSegment(t, 0);
            ti(a, t, 0, e, s, i, n);
            for(var o = 0; o < r; o += 1)n = pa(a, l, e, s, i, -n), o === r - 1 && !t.c ? l = null : l = et.shapeSegment(t, (o + 1) % r), ti(a, t, o + 1, e, s, i, n);
            return a;
        }, De.prototype.processShapes = function(t) {
            var e, s, i = this.shapes.length, r, a, n = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
            if (n !== 0) {
                var m, g;
                for(s = 0; s < i; s += 1){
                    if (m = this.shapes[s], g = m.localShapeCollection, !(!m.shape._mdf && !this._mdf && !t)) for(g.releaseShapes(), m.shape._mdf = !0, e = m.shape.paths.shapes, a = m.shape.paths._length, r = 0; r < a; r += 1)g.addShape(this.processPath(e[r], n, l, o));
                    m.shape.paths = m.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function fs(t, e, s) {
            var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
            return [
                fe(t, i, s),
                fe(e, i, s)
            ];
        }
        function de(t, e) {
            var s, i, r, a, n, l, o;
            o = fs(t.points[0], t.points[1], e), s = o[0], i = o[1], o = fs(t.points[1], t.points[2], e), r = o[0], a = o[1], o = fs(t.points[2], t.points[3], e), n = o[0], l = o[1];
            var m = Ke(s, i, r, a);
            m === null && (m = i);
            var g = Ke(n, l, r, a);
            return g === null && (g = n), new et(s, m, g, l);
        }
        function ei(t, e, s, i, r) {
            var a = e.points[3], n = s.points[0];
            if (i === 3 || ce(a, n)) return a;
            if (i === 2) {
                var l = -e.tangentAngle(1), o = -s.tangentAngle(0) + Math.PI, m = Ke(a, fe(a, l + Math.PI / 2, 100), n, fe(n, l + Math.PI / 2, 100)), g = m ? ps(m, a) : ps(a, n) / 2, C = fe(a, l, 2 * g * Yt);
                return t.setXYAt(C[0], C[1], "o", t.length() - 1), C = fe(n, o, 2 * g * Yt), t.setTripleAt(n[0], n[1], n[0], n[1], C[0], C[1], t.length()), n;
            }
            var f = ce(a, e.points[2]) ? e.points[0] : e.points[2], P = ce(n, s.points[1]) ? s.points[3] : s.points[1], k = Ke(f, a, n, P);
            return k && ps(k, a) < r ? (t.setTripleAt(k[0], k[1], k[0], k[1], k[0], k[1], t.length()), k) : a;
        }
        function si(t, e) {
            var s = t.intersections(e);
            return s.length && Xe(s[0][0], 1) && s.shift(), s.length ? s[0] : null;
        }
        function ii(t, e) {
            var s = t.slice(), i = e.slice(), r = si(t[t.length - 1], e[0]);
            return r && (s[t.length - 1] = t[t.length - 1].split(r[0])[0], i[0] = e[0].split(r[1])[1]), t.length > 1 && e.length > 1 && (r = si(t[0], e[e.length - 1]), r) ? [
                [
                    t[0].split(r[0])[0]
                ],
                [
                    e[e.length - 1].split(r[1])[1]
                ]
            ] : [
                s,
                i
            ];
        }
        function fa(t) {
            for(var e, s = 1; s < t.length; s += 1)e = ii(t[s - 1], t[s]), t[s - 1] = e[0], t[s] = e[1];
            return t.length > 1 && (e = ii(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
        }
        function ai(t, e) {
            var s = t.inflectionPoints(), i, r, a, n;
            if (s.length === 0) return [
                de(t, e)
            ];
            if (s.length === 1 || Xe(s[1], 1)) return a = t.split(s[0]), i = a[0], r = a[1], [
                de(i, e),
                de(r, e)
            ];
            a = t.split(s[0]), i = a[0];
            var l = (s[1] - s[0]) / (1 - s[0]);
            return a = a[1].split(l), n = a[0], r = a[1], [
                de(i, e),
                de(n, e),
                de(r, e)
            ];
        }
        function Ae() {}
        J([
            kt
        ], Ae), Ae.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = L.getProp(t, e.a, 0, null, this), this.miterLimit = L.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
        }, Ae.prototype.processPath = function(t, e, s, i) {
            var r = ct.newElement();
            r.c = t.c;
            var a = t.length();
            t.c || (a -= 1);
            var n, l, o, m = [];
            for(n = 0; n < a; n += 1)o = et.shapeSegment(t, n), m.push(ai(o, e));
            if (!t.c) for(n = a - 1; n >= 0; n -= 1)o = et.shapeSegmentInverted(t, n), m.push(ai(o, e));
            m = fa(m);
            var g = null, C = null;
            for(n = 0; n < m.length; n += 1){
                var f = m[n];
                for(C && (g = ei(r, C, f[0], s, i)), C = f[f.length - 1], l = 0; l < f.length; l += 1)o = f[l], g && ce(o.points[0], g) ? r.setXYAt(o.points[1][0], o.points[1][1], "o", r.length() - 1) : r.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], r.length()), r.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], r.length()), g = o.points[3];
            }
            return m.length && ei(r, C, m[0][0], s, i), r;
        }, Ae.prototype.processShapes = function(t) {
            var e, s, i = this.shapes.length, r, a, n = this.amount.v, l = this.miterLimit.v, o = this.lineJoin;
            if (n !== 0) {
                var m, g;
                for(s = 0; s < i; s += 1){
                    if (m = this.shapes[s], g = m.localShapeCollection, !(!m.shape._mdf && !this._mdf && !t)) for(g.releaseShapes(), m.shape._mdf = !0, e = m.shape.paths.shapes, a = m.shape.paths._length, r = 0; r < a; r += 1)g.addShape(this.processPath(e[r], n, o, l));
                    m.shape.paths = m.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function ri(t) {
            for(var e = t.fStyle ? t.fStyle.split(" ") : [], s = "normal", i = "normal", r = e.length, a, n = 0; n < r; n += 1)switch(a = e[n].toLowerCase(), a){
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
        var ie = function() {
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
            var i = 127988, r = 917631, a = 917601, n = 917626, l = 65039, o = 8205, m = 127462, g = 127487, C = [
                "d83cdffb",
                "d83cdffc",
                "d83cdffd",
                "d83cdffe",
                "d83cdfff"
            ];
            function f(u) {
                var _ = u.split(","), h, b = _.length, T = [];
                for(h = 0; h < b; h += 1)_[h] !== "sans-serif" && _[h] !== "monospace" && T.push(_[h]);
                return T.join(",");
            }
            function P(u, _) {
                var h = _t("span");
                h.setAttribute("aria-hidden", !0), h.style.fontFamily = _;
                var b = _t("span");
                b.innerText = "giItT1WQy@!-/#", h.style.position = "absolute", h.style.left = "-10000px", h.style.top = "-10000px", h.style.fontSize = "300px", h.style.fontVariant = "normal", h.style.fontStyle = "normal", h.style.fontWeight = "normal", h.style.letterSpacing = "0", h.appendChild(b), document.body.appendChild(h);
                var T = b.offsetWidth;
                return b.style.fontFamily = f(u) + ", " + _, {
                    node: b,
                    w: T,
                    parent: h
                };
            }
            function k() {
                var u, _ = this.fonts.length, h, b, T = _;
                for(u = 0; u < _; u += 1)this.fonts[u].loaded ? T -= 1 : this.fonts[u].fOrigin === "n" || this.fonts[u].origin === 0 ? this.fonts[u].loaded = !0 : (h = this.fonts[u].monoCase.node, b = this.fonts[u].monoCase.w, h.offsetWidth !== b ? (T -= 1, this.fonts[u].loaded = !0) : (h = this.fonts[u].sansCase.node, b = this.fonts[u].sansCase.w, h.offsetWidth !== b && (T -= 1, this.fonts[u].loaded = !0)), this.fonts[u].loaded && (this.fonts[u].sansCase.parent.parentNode.removeChild(this.fonts[u].sansCase.parent), this.fonts[u].monoCase.parent.parentNode.removeChild(this.fonts[u].monoCase.parent)));
                T !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            }
            function v(u, _) {
                var h = document.body && _ ? "svg" : "canvas", b, T = ri(u);
                if (h === "svg") {
                    var S = B("text");
                    S.style.fontSize = "100px", S.setAttribute("font-family", u.fFamily), S.setAttribute("font-style", T.style), S.setAttribute("font-weight", T.weight), S.textContent = "1", u.fClass ? (S.style.fontFamily = "inherit", S.setAttribute("class", u.fClass)) : S.style.fontFamily = u.fFamily, _.appendChild(S), b = S;
                } else {
                    var j = new OffscreenCanvas(500, 500).getContext("2d");
                    j.font = T.style + " " + T.weight + " 100px " + u.fFamily, b = j;
                }
                function z(X) {
                    return h === "svg" ? (b.textContent = X, b.getComputedTextLength()) : b.measureText(X).width;
                }
                return {
                    measureText: z
                };
            }
            function D(u, _) {
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
                        gt.helper = v(gt), gt.cache = {};
                    }), this.fonts = u.list;
                    return;
                }
                var h = u.list, b, T = h.length, S = T;
                for(b = 0; b < T; b += 1){
                    var j = !0, z, X;
                    if (h[b].loaded = !1, h[b].monoCase = P(h[b].fFamily, "monospace"), h[b].sansCase = P(h[b].fFamily, "sans-serif"), !h[b].fPath) h[b].loaded = !0, S -= 1;
                    else if (h[b].fOrigin === "p" || h[b].origin === 3) {
                        if (z = document.querySelectorAll('style[f-forigin="p"][f-family="' + h[b].fFamily + '"], style[f-origin="3"][f-family="' + h[b].fFamily + '"]'), z.length > 0 && (j = !1), j) {
                            var Y = _t("style");
                            Y.setAttribute("f-forigin", h[b].fOrigin), Y.setAttribute("f-origin", h[b].origin), Y.setAttribute("f-family", h[b].fFamily), Y.type = "text/css", Y.innerText = "@font-face {font-family: " + h[b].fFamily + "; font-style: normal; src: url('" + h[b].fPath + "');}", _.appendChild(Y);
                        }
                    } else if (h[b].fOrigin === "g" || h[b].origin === 1) {
                        for(z = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), X = 0; X < z.length; X += 1)z[X].href.indexOf(h[b].fPath) !== -1 && (j = !1);
                        if (j) {
                            var st = _t("link");
                            st.setAttribute("f-forigin", h[b].fOrigin), st.setAttribute("f-origin", h[b].origin), st.type = "text/css", st.rel = "stylesheet", st.href = h[b].fPath, document.body.appendChild(st);
                        }
                    } else if (h[b].fOrigin === "t" || h[b].origin === 2) {
                        for(z = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), X = 0; X < z.length; X += 1)h[b].fPath === z[X].src && (j = !1);
                        if (j) {
                            var it = _t("link");
                            it.setAttribute("f-forigin", h[b].fOrigin), it.setAttribute("f-origin", h[b].origin), it.setAttribute("rel", "stylesheet"), it.setAttribute("href", h[b].fPath), _.appendChild(it);
                        }
                    }
                    h[b].helper = v(h[b], _), h[b].cache = {}, this.fonts.push(h[b]);
                }
                S === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
            function y(u) {
                if (u) {
                    this.chars || (this.chars = []);
                    var _, h = u.length, b, T = this.chars.length, S;
                    for(_ = 0; _ < h; _ += 1){
                        for(b = 0, S = !1; b < T;)this.chars[b].style === u[_].style && this.chars[b].fFamily === u[_].fFamily && this.chars[b].ch === u[_].ch && (S = !0), b += 1;
                        S || (this.chars.push(u[_]), T += 1);
                    }
                }
            }
            function c(u, _, h) {
                for(var b = 0, T = this.chars.length; b < T;){
                    if (this.chars[b].ch === u && this.chars[b].style === _ && this.chars[b].fFamily === h) return this.chars[b];
                    b += 1;
                }
                return (typeof u == "string" && u.charCodeAt(0) !== 13 || !u) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", u, _, h)), e;
            }
            function p(u, _, h) {
                var b = this.getFontByName(_), T = u;
                if (!b.cache[T]) {
                    var S = b.helper;
                    if (u === " ") {
                        var j = S.measureText("|" + u + "|"), z = S.measureText("||");
                        b.cache[T] = (j - z) / 100;
                    } else b.cache[T] = S.measureText(u) / 100;
                }
                return b.cache[T] * h;
            }
            function d(u) {
                for(var _ = 0, h = this.fonts.length; _ < h;){
                    if (this.fonts[_].fName === u) return this.fonts[_];
                    _ += 1;
                }
                return this.fonts[0];
            }
            function x(u) {
                var _ = 0, h = u.charCodeAt(0);
                if (h >= 55296 && h <= 56319) {
                    var b = u.charCodeAt(1);
                    b >= 56320 && b <= 57343 && (_ = (h - 55296) * 1024 + b - 56320 + 65536);
                }
                return _;
            }
            function A(u, _) {
                var h = u.toString(16) + _.toString(16);
                return C.indexOf(h) !== -1;
            }
            function M(u) {
                return u === o;
            }
            function w(u) {
                return u === l;
            }
            function I(u) {
                var _ = x(u);
                return _ >= m && _ <= g;
            }
            function N(u) {
                return I(u.substr(0, 2)) && I(u.substr(2, 2));
            }
            function V(u) {
                return s.indexOf(u) !== -1;
            }
            function R(u, _) {
                var h = x(u.substr(_, 2));
                if (h !== i) return !1;
                var b = 0;
                for(_ += 2; b < 5;){
                    if (h = x(u.substr(_, 2)), h < a || h > n) return !1;
                    b += 1, _ += 2;
                }
                return x(u.substr(_, 2)) === r;
            }
            function q() {
                this.isLoaded = !0;
            }
            var F = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
            };
            F.isModifier = A, F.isZeroWidthJoiner = M, F.isFlagEmoji = N, F.isRegionalCode = I, F.isCombinedCharacter = V, F.isRegionalFlag = R, F.isVariationSelector = w, F.BLACK_FLAG_CODE_POINT = i;
            var E = {
                addChars: y,
                addFonts: D,
                getCharData: c,
                getFontByName: d,
                measureText: p,
                checkLoadedFonts: k,
                setIsLoaded: q
            };
            return F.prototype = E, F;
        }();
        function ni(t) {
            this.animationData = t;
        }
        ni.prototype.getProp = function(t) {
            return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
        };
        function ca(t) {
            return new ni(t);
        }
        function Gt() {}
        Gt.prototype = {
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
        var He = function() {
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
        function da(t, e, s) {
            this.p = L.getProp(e, t.v, 0, 0, s);
        }
        function ma(t, e, s) {
            this.p = L.getProp(e, t.v, 0, 0, s);
        }
        function ua(t, e, s) {
            this.p = L.getProp(e, t.v, 1, 0, s);
        }
        function ga(t, e, s) {
            this.p = L.getProp(e, t.v, 1, 0, s);
        }
        function ya(t, e, s) {
            this.p = L.getProp(e, t.v, 0, 0, s);
        }
        function va(t, e, s) {
            this.p = L.getProp(e, t.v, 0, 0, s);
        }
        function ba(t, e, s) {
            this.p = L.getProp(e, t.v, 0, 0, s);
        }
        function _a() {
            this.p = {};
        }
        function oi(t, e) {
            var s = t.ef || [];
            this.effectElements = [];
            var i, r = s.length, a;
            for(i = 0; i < r; i += 1)a = new Te(s[i], e), this.effectElements.push(a);
        }
        function Te(t, e) {
            this.init(t, e);
        }
        J([
            ht
        ], Te), Te.prototype.getValue = Te.prototype.iterateDynamicProperties, Te.prototype.init = function(t, e) {
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var s, i = this.data.ef.length, r, a = this.data.ef;
            for(s = 0; s < i; s += 1){
                switch(r = null, a[s].ty){
                    case 0:
                        r = new da(a[s], e, this);
                        break;
                    case 1:
                        r = new ma(a[s], e, this);
                        break;
                    case 2:
                        r = new ua(a[s], e, this);
                        break;
                    case 3:
                        r = new ga(a[s], e, this);
                        break;
                    case 4:
                    case 7:
                        r = new ba(a[s], e, this);
                        break;
                    case 10:
                        r = new ya(a[s], e, this);
                        break;
                    case 11:
                        r = new va(a[s], e, this);
                        break;
                    case 5:
                        r = new oi(a[s], e);
                        break;
                    default:
                        r = new _a(a[s]);
                        break;
                }
                r && this.effectElements.push(r);
            }
        };
        function Pt() {}
        Pt.prototype = {
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
                var t = He(this.data.bm), e = this.baseElement || this.layerElement;
                e.style["mix-blend-mode"] = t;
            },
            initBaseData: function(t, e, s) {
                this.globalData = e, this.comp = s, this.data = t, this.layerId = mt(), this.data.sr || (this.data.sr = 1), this.effectsManager = new oi(this.data, this, this.dynamicProperties);
            },
            getType: function() {
                return this.type;
            },
            sourceRectAtTime: function() {}
        };
        function St() {}
        St.prototype = {
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
        function Kt(t, e, s) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, s);
        }
        Kt.prototype.prepareFrame = function() {}, J([
            Gt,
            Pt,
            St
        ], Kt), Kt.prototype.getBaseElement = function() {
            return null;
        }, Kt.prototype.renderFrame = function() {}, Kt.prototype.destroy = function() {}, Kt.prototype.initExpressions = function() {}, Kt.prototype.getFootageData = function() {
            return this.footageData;
        };
        function ut(t, e, s) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, s), this._isPlaying = !1, this._canPlay = !1;
            var i = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? L.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }, this.lv = L.getProp(this, t.au && t.au.lv ? t.au.lv : {
                k: [
                    100
                ]
            }, 1, .01, this);
        }
        ut.prototype.prepareFrame = function(t) {
            if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
            else {
                var e = this.tm.v;
                this._currentTime = e;
            }
            this._volume = this.lv.v[0];
            var s = this._volume * this._volumeMultiplier;
            this._previousVolume !== s && (this._previousVolume = s, this.audio.volume(s));
        }, J([
            Gt,
            Pt,
            St
        ], ut), ut.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
        }, ut.prototype.show = function() {}, ut.prototype.hide = function() {
            this.audio.pause(), this._isPlaying = !1;
        }, ut.prototype.pause = function() {
            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
        }, ut.prototype.resume = function() {
            this._canPlay = !0;
        }, ut.prototype.setRate = function(t) {
            this.audio.rate(t);
        }, ut.prototype.volume = function(t) {
            this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
        }, ut.prototype.getBaseElement = function() {
            return null;
        }, ut.prototype.destroy = function() {}, ut.prototype.sourceRectAtTime = function() {}, ut.prototype.initExpressions = function() {};
        function lt() {}
        lt.prototype.checkLayers = function(t) {
            var e, s = this.layers.length, i;
            for(this.completeLayers = !0, e = s - 1; e >= 0; e -= 1)this.elements[e] || (i = this.layers[e], i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
            this.checkPendingElements();
        }, lt.prototype.createItem = function(t) {
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
        }, lt.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.");
        }, lt.prototype.createAudio = function(t) {
            return new ut(t, this.globalData, this);
        }, lt.prototype.createFootage = function(t) {
            return new Kt(t, this.globalData, this);
        }, lt.prototype.buildAllItems = function() {
            var t, e = this.layers.length;
            for(t = 0; t < e; t += 1)this.buildItem(t);
            this.checkPendingElements();
        }, lt.prototype.includeLayers = function(t) {
            this.completeLayers = !1;
            var e, s = t.length, i, r = this.layers.length;
            for(e = 0; e < s; e += 1)for(i = 0; i < r;){
                if (this.layers[i].id === t[e].id) {
                    this.layers[i] = t[e];
                    break;
                }
                i += 1;
            }
        }, lt.prototype.setProjectInterface = function(t) {
            this.globalData.projectInterface = t;
        }, lt.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems();
        }, lt.prototype.buildElementParenting = function(t, e, s) {
            for(var i = this.elements, r = this.layers, a = 0, n = r.length; a < n;)r[a].ind == e && (!i[a] || i[a] === !0 ? (this.buildItem(a), this.addPendingElement(t)) : (s.push(i[a]), i[a].setAsParent(), r[a].parent !== void 0 ? this.buildElementParenting(t, r[a].parent, s) : t.setHierarchy(s))), a += 1;
        }, lt.prototype.addPendingElement = function(t) {
            this.pendingElements.push(t);
        }, lt.prototype.searchExtraCompositions = function(t) {
            var e, s = t.length;
            for(e = 0; e < s; e += 1)if (t[e].xt) {
                var i = this.createComp(t[e]);
                i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
            }
        }, lt.prototype.getElementById = function(t) {
            var e, s = this.elements.length;
            for(e = 0; e < s; e += 1)if (this.elements[e].data.ind === t) return this.elements[e];
            return null;
        }, lt.prototype.getElementByPath = function(t) {
            var e = t.shift(), s;
            if (typeof e == "number") s = this.elements[e];
            else {
                var i, r = this.elements.length;
                for(i = 0; i < r; i += 1)if (this.elements[i].data.nm === e) {
                    s = this.elements[i];
                    break;
                }
            }
            return t.length === 0 ? s : s.getElementByPath(t);
        }, lt.prototype.setupGlobalData = function(t, e) {
            this.globalData.fontManager = new ie, this.globalData.slotManager = ca(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                w: t.w,
                h: t.h
            };
        };
        var hi = {
            TRANSFORM_EFFECT: "transformEFfect"
        };
        function Lt() {}
        Lt.prototype = {
            initTransform: function() {
                var t = new tt;
                this.finalTransform = {
                    mProp: this.data.ks ? Ye.getTransformProperty(this, this.data.ks, this) : {
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
                        var r = this.finalTransform.localOpacity;
                        for(t = 0; t < e; t += 1)r *= this.localTransforms[t].opacity * .01;
                        this.finalTransform.localOpacity = r;
                    }
                }
            },
            searchEffectTransforms: function() {
                if (this.renderableEffectsManager) {
                    var t = this.renderableEffectsManager.getEffects(hi.TRANSFORM_EFFECT);
                    if (t.length) {
                        this.localTransforms = [], this.finalTransform.localMat = new tt;
                        var e = 0, s = t.length;
                        for(e = 0; e < s; e += 1)this.localTransforms.push(t[e]);
                    }
                }
            },
            globalToLocal: function(t) {
                var e = [];
                e.push(this.finalTransform);
                for(var s = !0, i = this.comp; s;)i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : s = !1;
                var r, a = e.length, n;
                for(r = 0; r < a; r += 1)n = e[r].mat.applyToPointArray(0, 0, 0), t = [
                    t[0] - n[0],
                    t[1] - n[1],
                    0
                ];
                return t;
            },
            mHelper: new tt
        };
        function Ht(t, e, s) {
            this.data = t, this.element = e, this.globalData = s, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var i = this.globalData.defs, r, a = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = Q(a), this.solidPath = "";
            var n, l = this.masksProperties, o = 0, m = [], g, C, f = mt(), P, k, v, D, y = "clipPath", c = "clip-path";
            for(r = 0; r < a; r += 1)if ((l[r].mode !== "a" && l[r].mode !== "n" || l[r].inv || l[r].o.k !== 100 || l[r].o.x) && (y = "mask", c = "mask"), (l[r].mode === "s" || l[r].mode === "i") && o === 0 ? (P = B("rect"), P.setAttribute("fill", "#ffffff"), P.setAttribute("width", this.element.comp.data.w || 0), P.setAttribute("height", this.element.comp.data.h || 0), m.push(P)) : P = null, n = B("path"), l[r].mode === "n") this.viewData[r] = {
                op: L.getProp(this.element, l[r].o, 0, .01, this.element),
                prop: pe.getShapeProp(this.element, l[r], 3),
                elem: n,
                lastPath: ""
            }, i.appendChild(n);
            else {
                o += 1, n.setAttribute("fill", l[r].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero");
                var p;
                if (l[r].x.k !== 0 ? (y = "mask", c = "mask", D = L.getProp(this.element, l[r].x, 0, null, this.element), p = mt(), k = B("filter"), k.setAttribute("id", p), v = B("feMorphology"), v.setAttribute("operator", "erode"), v.setAttribute("in", "SourceGraphic"), v.setAttribute("radius", "0"), k.appendChild(v), i.appendChild(k), n.setAttribute("stroke", l[r].mode === "s" ? "#000000" : "#ffffff")) : (v = null, D = null), this.storedData[r] = {
                    elem: n,
                    x: D,
                    expan: v,
                    lastPath: "",
                    lastOperator: "",
                    filterId: p,
                    lastRadius: 0
                }, l[r].mode === "i") {
                    C = m.length;
                    var d = B("g");
                    for(g = 0; g < C; g += 1)d.appendChild(m[g]);
                    var x = B("mask");
                    x.setAttribute("mask-type", "alpha"), x.setAttribute("id", f + "_" + o), x.appendChild(n), i.appendChild(x), d.setAttribute("mask", "url(" + bt() + "#" + f + "_" + o + ")"), m.length = 0, m.push(d);
                } else m.push(n);
                l[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                    elem: n,
                    lastPath: "",
                    op: L.getProp(this.element, l[r].o, 0, .01, this.element),
                    prop: pe.getShapeProp(this.element, l[r], 3),
                    invRect: P
                }, this.viewData[r].prop.k || this.drawPath(l[r], this.viewData[r].prop.v, this.viewData[r]);
            }
            for(this.maskElement = B(y), a = m.length, r = 0; r < a; r += 1)this.maskElement.appendChild(m[r]);
            o > 0 && (this.maskElement.setAttribute("id", f), this.element.maskedElement.setAttribute(c, "url(" + bt() + "#" + f + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
        }
        Ht.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop;
        }, Ht.prototype.renderFrame = function(t) {
            var e = this.element.finalTransform.mat, s, i = this.masksProperties.length;
            for(s = 0; s < i; s += 1)if ((this.viewData[s].prop._mdf || t) && this.drawPath(this.masksProperties[s], this.viewData[s].prop.v, this.viewData[s]), (this.viewData[s].op._mdf || t) && this.viewData[s].elem.setAttribute("fill-opacity", this.viewData[s].op.v), this.masksProperties[s].mode !== "n" && (this.viewData[s].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[s].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[s].x && (this.storedData[s].x._mdf || t))) {
                var r = this.storedData[s].expan;
                this.storedData[s].x.v < 0 ? (this.storedData[s].lastOperator !== "erode" && (this.storedData[s].lastOperator = "erode", this.storedData[s].elem.setAttribute("filter", "url(" + bt() + "#" + this.storedData[s].filterId + ")")), r.setAttribute("radius", -this.storedData[s].x.v)) : (this.storedData[s].lastOperator !== "dilate" && (this.storedData[s].lastOperator = "dilate", this.storedData[s].elem.setAttribute("filter", null)), this.storedData[s].elem.setAttribute("stroke-width", this.storedData[s].x.v * 2));
            }
        }, Ht.prototype.getMaskelement = function() {
            return this.maskElement;
        }, Ht.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
        }, Ht.prototype.drawPath = function(t, e, s) {
            var i = " M" + e.v[0][0] + "," + e.v[0][1], r, a;
            for(a = e._length, r = 1; r < a; r += 1)i += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
            if (e.c && a > 1 && (i += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), s.lastPath !== i) {
                var n = "";
                s.elem && (e.c && (n = t.inv ? this.solidPath + i : i), s.elem.setAttribute("d", n)), s.lastPath = i;
            }
        }, Ht.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
        };
        var Me = function() {
            var t = {};
            t.createFilter = e, t.createAlphaToLuminanceFilter = s;
            function e(i, r) {
                var a = B("filter");
                return a.setAttribute("id", i), r !== !0 && (a.setAttribute("filterUnits", "objectBoundingBox"), a.setAttribute("x", "0%"), a.setAttribute("y", "0%"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%")), a;
            }
            function s() {
                var i = B("feColorMatrix");
                return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i;
            }
            return t;
        }(), Ue = function() {
            var t = {
                maskType: !0,
                svgLumaHidden: !0,
                offscreenCanvas: typeof OffscreenCanvas < "u"
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t;
        }(), cs = {}, li = "filter_result_";
        function ds(t) {
            var e, s = "SourceGraphic", i = t.data.ef ? t.data.ef.length : 0, r = mt(), a = Me.createFilter(r, !0), n = 0;
            this.filters = [];
            var l;
            for(e = 0; e < i; e += 1){
                l = null;
                var o = t.data.ef[e].ty;
                if (cs[o]) {
                    var m = cs[o].effect;
                    l = new m(a, t.effectsManager.effectElements[e], t, li + n, s), s = li + n, cs[o].countsAsEffect && (n += 1);
                }
                l && this.filters.push(l);
            }
            n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + bt() + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this);
        }
        ds.prototype.renderFrame = function(t) {
            var e, s = this.filters.length;
            for(e = 0; e < s; e += 1)this.filters[e].renderFrame(t);
        }, ds.prototype.getEffects = function(t) {
            var e, s = this.filters.length, i = [];
            for(e = 0; e < s; e += 1)this.filters[e].type === t && i.push(this.filters[e]);
            return i;
        };
        function we() {}
        we.prototype = {
            initRendererElement: function() {
                this.layerElement = B("g");
            },
            createContainerElements: function() {
                this.matteElement = B("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var t = null;
                if (this.data.td) {
                    this.matteMasks = {};
                    var e = B("g");
                    e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e);
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
                    var s = B("clipPath"), i = B("path");
                    i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var r = mt();
                    if (s.setAttribute("id", r), s.appendChild(i), this.globalData.defs.appendChild(s), this.checkMasks()) {
                        var a = B("g");
                        a.setAttribute("clip-path", "url(" + bt() + "#" + r + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
                    } else this.layerElement.setAttribute("clip-path", "url(" + bt() + "#" + r + ")");
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
                this.maskManager = new Ht(this.data, this, this.globalData), this.renderableEffectsManager = new ds(this), this.searchEffectTransforms();
            },
            getMatte: function(t) {
                if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                    var e = this.layerId + "_" + t, s, i, r, a;
                    if (t === 1 || t === 3) {
                        var n = B("mask");
                        n.setAttribute("id", e), n.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), r = B("use"), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(r), this.globalData.defs.appendChild(n), !Ue.maskType && t === 1 && (n.setAttribute("mask-type", "luminance"), s = mt(), i = Me.createFilter(s), this.globalData.defs.appendChild(i), i.appendChild(Me.createAlphaToLuminanceFilter()), a = B("g"), a.appendChild(r), n.appendChild(a), a.setAttribute("filter", "url(" + bt() + "#" + s + ")"));
                    } else if (t === 2) {
                        var l = B("mask");
                        l.setAttribute("id", e), l.setAttribute("mask-type", "alpha");
                        var o = B("g");
                        l.appendChild(o), s = mt(), i = Me.createFilter(s);
                        var m = B("feComponentTransfer");
                        m.setAttribute("in", "SourceGraphic"), i.appendChild(m);
                        var g = B("feFuncA");
                        g.setAttribute("type", "table"), g.setAttribute("tableValues", "1.0 0.0"), m.appendChild(g), this.globalData.defs.appendChild(i);
                        var C = B("rect");
                        C.setAttribute("width", this.comp.data.w), C.setAttribute("height", this.comp.data.h), C.setAttribute("x", "0"), C.setAttribute("y", "0"), C.setAttribute("fill", "#ffffff"), C.setAttribute("opacity", "0"), o.setAttribute("filter", "url(" + bt() + "#" + s + ")"), o.appendChild(C), r = B("use"), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o.appendChild(r), Ue.maskType || (l.setAttribute("mask-type", "luminance"), i.appendChild(Me.createAlphaToLuminanceFilter()), a = B("g"), o.appendChild(C), a.appendChild(this.layerElement), o.appendChild(a)), this.globalData.defs.appendChild(l);
                    }
                    this.matteMasks[t] = e;
                }
                return this.matteMasks[t];
            },
            setMatte: function(t) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + bt() + "#" + t + ")");
            }
        };
        function It() {}
        It.prototype = {
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
        function me() {}
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
            J([
                Gt,
                Si(t)
            ], me);
        })();
        function ae(t, e, s) {
            this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, s), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            };
        }
        J([
            Pt,
            Lt,
            we,
            It,
            St,
            me
        ], ae), ae.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = B("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
        }, ae.prototype.sourceRectAtTime = function() {
            return this.sourceRect;
        };
        function xa(t, e) {
            this.elem = t, this.pos = e;
        }
        function ms() {}
        ms.prototype = {
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
                s.push(new xa(t, e));
            },
            prepareFrame: function(t) {
                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
            }
        };
        var us = {
            1: "butt",
            2: "round",
            3: "square"
        }, gs = {
            1: "miter",
            2: "round",
            3: "bevel"
        };
        function ys(t, e, s) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = s, this.lvl = e, this._isAnimated = !!s.k;
            for(var i = 0, r = t.length; i < r;){
                if (t[i].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break;
                }
                i += 1;
            }
        }
        ys.prototype.setAsAnimated = function() {
            this._isAnimated = !0;
        };
        function pi(t, e) {
            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = t.hd === !0, this.pElem = B("path"), this.msElem = null;
        }
        pi.prototype.reset = function() {
            this.d = "", this._mdf = !1;
        };
        function Fe(t, e, s, i) {
            this.elem = t, this.frameId = -1, this.dataProps = Q(e.length), this.renderer = s, this.k = !1, this.dashStr = "", this.dashArray = at("float32", e.length ? e.length - 1 : 0), this.dashoffset = at("float32", 1), this.initDynamicPropertyContainer(i);
            var r, a = e.length || 0, n;
            for(r = 0; r < a; r += 1)n = L.getProp(t, e[r].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[r] = {
                n: e[r].n,
                p: n
            };
            this.k || this.getValue(!0), this._isAnimated = this.k;
        }
        Fe.prototype.getValue = function(t) {
            if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0, s = this.dataProps.length;
                for(this.renderer === "svg" && (this.dashStr = ""), e = 0; e < s; e += 1)this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
            }
        }, J([
            ht
        ], Fe);
        function fi(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = L.getProp(t, e.o, 0, .01, this), this.w = L.getProp(t, e.w, 0, null, this), this.d = new Fe(t, e.d || {}, "svg", this), this.c = L.getProp(t, e.c, 1, 255, this), this.style = s, this._isAnimated = !!this._isAnimated;
        }
        J([
            ht
        ], fi);
        function ci(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = L.getProp(t, e.o, 0, .01, this), this.c = L.getProp(t, e.c, 1, 255, this), this.style = s;
        }
        J([
            ht
        ], ci);
        function di(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = s;
        }
        J([
            ht
        ], di);
        function ue(t, e, s) {
            this.data = e, this.c = at("uint8c", e.p * 4);
            var i = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
            this.o = at("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(s), this.prop = L.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
        }
        ue.prototype.comparePoints = function(t, e) {
            for(var s = 0, i = this.o.length / 2, r; s < i;){
                if (r = Math.abs(t[s * 4] - t[e * 4 + s * 2]), r > .01) return !1;
                s += 1;
            }
            return !0;
        }, ue.prototype.checkCollapsable = function() {
            if (this.o.length / 2 !== this.c.length / 4) return !1;
            if (this.data.k.k[0].s) for(var t = 0, e = this.data.k.k.length; t < e;){
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                t += 1;
            }
            else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0;
        }, ue.prototype.getValue = function(t) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                var e, s = this.data.p * 4, i, r;
                for(e = 0; e < s; e += 1)i = e % 4 === 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
                if (this.o.length) for(s = this.prop.v.length, e = this.data.p * 4; e < s; e += 1)i = e % 2 === 0 ? 100 : 1, r = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== r && (this.o[e - this.data.p * 4] = r, this._omdf = !t);
                this._mdf = !t;
            }
        }, J([
            ht
        ], ue);
        function ge(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, s);
        }
        ge.prototype.initGradientData = function(t, e, s) {
            this.o = L.getProp(t, e.o, 0, .01, this), this.s = L.getProp(t, e.s, 1, null, this), this.e = L.getProp(t, e.e, 1, null, this), this.h = L.getProp(t, e.h || {
                k: 0
            }, 0, .01, this), this.a = L.getProp(t, e.a || {
                k: 0
            }, 0, Z, this), this.g = new ue(t, e.g, this), this.style = s, this.stops = [], this.setGradientData(s.pElem, e), this.setGradientOpacity(e, s), this._isAnimated = !!this._isAnimated;
        }, ge.prototype.setGradientData = function(t, e) {
            var s = mt(), i = B(e.t === 1 ? "linearGradient" : "radialGradient");
            i.setAttribute("id", s), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
            var r = [], a, n, l;
            for(l = e.g.p * 4, n = 0; n < l; n += 4)a = B("stop"), i.appendChild(a), r.push(a);
            t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + bt() + "#" + s + ")"), this.gf = i, this.cst = r;
        }, ge.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var s, i, r, a = B("mask"), n = B("path");
                a.appendChild(n);
                var l = mt(), o = mt();
                a.setAttribute("id", o);
                var m = B(t.t === 1 ? "linearGradient" : "radialGradient");
                m.setAttribute("id", l), m.setAttribute("spreadMethod", "pad"), m.setAttribute("gradientUnits", "userSpaceOnUse"), r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var g = this.stops;
                for(i = t.g.p * 4; i < r; i += 2)s = B("stop"), s.setAttribute("stop-color", "rgb(255,255,255)"), m.appendChild(s), g.push(s);
                n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + bt() + "#" + l + ")"), t.ty === "gs" && (n.setAttribute("stroke-linecap", us[t.lc || 2]), n.setAttribute("stroke-linejoin", gs[t.lj || 2]), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), this.of = m, this.ms = a, this.ost = g, this.maskId = o, e.msElem = n;
            }
        }, J([
            ht
        ], ge);
        function mi(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = L.getProp(t, e.w, 0, null, this), this.d = new Fe(t, e.d || {}, "svg", this), this.initGradientData(t, e, s), this._isAnimated = !!this._isAnimated;
        }
        J([
            ge,
            ht
        ], mi);
        function Ca() {
            this.it = [], this.prevViewData = [], this.gr = B("g");
        }
        function ka(t, e, s) {
            this.transform = {
                mProps: t,
                op: e,
                container: s
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
        }
        var ui = function(t, e, s, i) {
            if (e === 0) return "";
            var r = t.o, a = t.i, n = t.v, l, o = " M" + i.applyToPointStringified(n[0][0], n[0][1]);
            for(l = 1; l < e; l += 1)o += " C" + i.applyToPointStringified(r[l - 1][0], r[l - 1][1]) + " " + i.applyToPointStringified(a[l][0], a[l][1]) + " " + i.applyToPointStringified(n[l][0], n[l][1]);
            return s && e && (o += " C" + i.applyToPointStringified(r[l - 1][0], r[l - 1][1]) + " " + i.applyToPointStringified(a[0][0], a[0][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]), o += "z"), o;
        }, Pa = function() {
            var t = new tt, e = new tt, s = {
                createRenderFunction: i
            };
            function i(C) {
                switch(C.ty){
                    case "fl":
                        return l;
                    case "gf":
                        return m;
                    case "gs":
                        return o;
                    case "st":
                        return g;
                    case "sh":
                    case "el":
                    case "rc":
                    case "sr":
                        return n;
                    case "tr":
                        return r;
                    case "no":
                        return a;
                    default:
                        return null;
                }
            }
            function r(C, f, P) {
                (P || f.transform.op._mdf) && f.transform.container.setAttribute("opacity", f.transform.op.v), (P || f.transform.mProps._mdf) && f.transform.container.setAttribute("transform", f.transform.mProps.v.to2dCSS());
            }
            function a() {}
            function n(C, f, P) {
                var k, v, D, y, c, p, d = f.styles.length, x = f.lvl, A, M, w, I;
                for(p = 0; p < d; p += 1){
                    if (y = f.sh._mdf || P, f.styles[p].lvl < x) {
                        for(M = e.reset(), w = x - f.styles[p].lvl, I = f.transformers.length - 1; !y && w > 0;)y = f.transformers[I].mProps._mdf || y, w -= 1, I -= 1;
                        if (y) for(w = x - f.styles[p].lvl, I = f.transformers.length - 1; w > 0;)M.multiply(f.transformers[I].mProps.v), w -= 1, I -= 1;
                    } else M = t;
                    if (A = f.sh.paths, v = A._length, y) {
                        for(D = "", k = 0; k < v; k += 1)c = A.shapes[k], c && c._length && (D += ui(c, c._length, c.c, M));
                        f.caches[p] = D;
                    } else D = f.caches[p];
                    f.styles[p].d += C.hd === !0 ? "" : D, f.styles[p]._mdf = y || f.styles[p]._mdf;
                }
            }
            function l(C, f, P) {
                var k = f.style;
                (f.c._mdf || P) && k.pElem.setAttribute("fill", "rgb(" + ft(f.c.v[0]) + "," + ft(f.c.v[1]) + "," + ft(f.c.v[2]) + ")"), (f.o._mdf || P) && k.pElem.setAttribute("fill-opacity", f.o.v);
            }
            function o(C, f, P) {
                m(C, f, P), g(C, f, P);
            }
            function m(C, f, P) {
                var k = f.gf, v = f.g._hasOpacity, D = f.s.v, y = f.e.v;
                if (f.o._mdf || P) {
                    var c = C.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                    f.style.pElem.setAttribute(c, f.o.v);
                }
                if (f.s._mdf || P) {
                    var p = C.t === 1 ? "x1" : "cx", d = p === "x1" ? "y1" : "cy";
                    k.setAttribute(p, D[0]), k.setAttribute(d, D[1]), v && !f.g._collapsable && (f.of.setAttribute(p, D[0]), f.of.setAttribute(d, D[1]));
                }
                var x, A, M, w;
                if (f.g._cmdf || P) {
                    x = f.cst;
                    var I = f.g.c;
                    for(M = x.length, A = 0; A < M; A += 1)w = x[A], w.setAttribute("offset", I[A * 4] + "%"), w.setAttribute("stop-color", "rgb(" + I[A * 4 + 1] + "," + I[A * 4 + 2] + "," + I[A * 4 + 3] + ")");
                }
                if (v && (f.g._omdf || P)) {
                    var N = f.g.o;
                    for(f.g._collapsable ? x = f.cst : x = f.ost, M = x.length, A = 0; A < M; A += 1)w = x[A], f.g._collapsable || w.setAttribute("offset", N[A * 2] + "%"), w.setAttribute("stop-opacity", N[A * 2 + 1]);
                }
                if (C.t === 1) (f.e._mdf || P) && (k.setAttribute("x2", y[0]), k.setAttribute("y2", y[1]), v && !f.g._collapsable && (f.of.setAttribute("x2", y[0]), f.of.setAttribute("y2", y[1])));
                else {
                    var V;
                    if ((f.s._mdf || f.e._mdf || P) && (V = Math.sqrt(Math.pow(D[0] - y[0], 2) + Math.pow(D[1] - y[1], 2)), k.setAttribute("r", V), v && !f.g._collapsable && f.of.setAttribute("r", V)), f.e._mdf || f.h._mdf || f.a._mdf || P) {
                        V || (V = Math.sqrt(Math.pow(D[0] - y[0], 2) + Math.pow(D[1] - y[1], 2)));
                        var R = Math.atan2(y[1] - D[1], y[0] - D[0]), q = f.h.v;
                        q >= 1 ? q = .99 : q <= -1 && (q = -0.99);
                        var F = V * q, E = Math.cos(R + f.a.v) * F + D[0], u = Math.sin(R + f.a.v) * F + D[1];
                        k.setAttribute("fx", E), k.setAttribute("fy", u), v && !f.g._collapsable && (f.of.setAttribute("fx", E), f.of.setAttribute("fy", u));
                    }
                }
            }
            function g(C, f, P) {
                var k = f.style, v = f.d;
                v && (v._mdf || P) && v.dashStr && (k.pElem.setAttribute("stroke-dasharray", v.dashStr), k.pElem.setAttribute("stroke-dashoffset", v.dashoffset[0])), f.c && (f.c._mdf || P) && k.pElem.setAttribute("stroke", "rgb(" + ft(f.c.v[0]) + "," + ft(f.c.v[1]) + "," + ft(f.c.v[2]) + ")"), (f.o._mdf || P) && k.pElem.setAttribute("stroke-opacity", f.o.v), (f.w._mdf || P) && (k.pElem.setAttribute("stroke-width", f.w.v), k.msElem && k.msElem.setAttribute("stroke-width", f.w.v));
            }
            return s;
        }();
        function $(t, e, s) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, s), this.prevViewData = [];
        }
        J([
            Pt,
            Lt,
            we,
            ms,
            It,
            St,
            me
        ], $), $.prototype.initSecondaryElement = function() {}, $.prototype.identityMatrix = new tt, $.prototype.buildExpressionInterface = function() {}, $.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
        }, $.prototype.filterUniqueShapes = function() {
            var t, e = this.shapes.length, s, i, r = this.stylesList.length, a, n = [], l = !1;
            for(i = 0; i < r; i += 1){
                for(a = this.stylesList[i], l = !1, n.length = 0, t = 0; t < e; t += 1)s = this.shapes[t], s.styles.indexOf(a) !== -1 && (n.push(s), l = s._isAnimated || l);
                n.length > 1 && l && this.setShapesAsAnimated(n);
            }
        }, $.prototype.setShapesAsAnimated = function(t) {
            var e, s = t.length;
            for(e = 0; e < s; e += 1)t[e].setAsAnimated();
        }, $.prototype.createStyleElement = function(t, e) {
            var s, i = new pi(t, e), r = i.pElem;
            if (t.ty === "st") s = new fi(this, t, i);
            else if (t.ty === "fl") s = new ci(this, t, i);
            else if (t.ty === "gf" || t.ty === "gs") {
                var a = t.ty === "gf" ? ge : mi;
                s = new a(this, t, i), this.globalData.defs.appendChild(s.gf), s.maskId && (this.globalData.defs.appendChild(s.ms), this.globalData.defs.appendChild(s.of), r.setAttribute("mask", "url(" + bt() + "#" + s.maskId + ")"));
            } else t.ty === "no" && (s = new di(this, t, i));
            return (t.ty === "st" || t.ty === "gs") && (r.setAttribute("stroke-linecap", us[t.lc || 2]), r.setAttribute("stroke-linejoin", gs[t.lj || 2]), r.setAttribute("fill-opacity", "0"), t.lj === 1 && r.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && r.setAttribute("fill-rule", "evenodd"), t.ln && r.setAttribute("id", t.ln), t.cl && r.setAttribute("class", t.cl), t.bm && (r.style["mix-blend-mode"] = He(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, s), s;
        }, $.prototype.createGroupElement = function(t) {
            var e = new Ca;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = He(t.bm)), e;
        }, $.prototype.createTransformElement = function(t, e) {
            var s = Ye.getTransformProperty(this, t, this), i = new ka(s, s.o, e);
            return this.addToAnimatedContents(t, i), i;
        }, $.prototype.createShapeElement = function(t, e, s) {
            var i = 4;
            t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7);
            var r = pe.getShapeProp(this, t, i, this), a = new ys(e, s, r);
            return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a;
        }, $.prototype.addToAnimatedContents = function(t, e) {
            for(var s = 0, i = this.animatedContents.length; s < i;){
                if (this.animatedContents[s].element === e) return;
                s += 1;
            }
            this.animatedContents.push({
                fn: Pa.createRenderFunction(t),
                element: e,
                data: t
            });
        }, $.prototype.setElementStyles = function(t) {
            var e = t.styles, s, i = this.stylesList.length;
            for(s = 0; s < i; s += 1)this.stylesList[s].closed || e.push(this.stylesList[s]);
        }, $.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for(t = 0; t < e; t += 1)this.prevViewData[t] = this.itemsData[t];
            for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)this.dynamicProperties[t].getValue();
            this.renderModifiers();
        }, $.prototype.searchShapes = function(t, e, s, i, r, a, n) {
            var l = [].concat(a), o, m = t.length - 1, g, C, f = [], P = [], k, v, D;
            for(o = m; o >= 0; o -= 1){
                if (D = this.searchProcessedElement(t[o]), D ? e[o] = s[D - 1] : t[o]._render = n, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") D ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], r), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), f.push(e[o].style);
                else if (t[o].ty === "gr") {
                    if (!D) e[o] = this.createGroupElement(t[o]);
                    else for(C = e[o].it.length, g = 0; g < C; g += 1)e[o].prevViewData[g] = e[o].it[g];
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, r + 1, l, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr);
                } else t[o].ty === "tr" ? (D || (e[o] = this.createTransformElement(t[o], i)), k = e[o].transform, l.push(k)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (D || (e[o] = this.createShapeElement(t[o], l, r)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (D ? (v = e[o], v.closed = !1) : (v = Ft.getModifier(t[o].ty), v.init(this, t[o]), e[o] = v, this.shapeModifiers.push(v)), P.push(v)) : t[o].ty === "rp" && (D ? (v = e[o], v.closed = !0) : (v = Ft.getModifier(t[o].ty), e[o] = v, v.init(this, t, o, e), this.shapeModifiers.push(v), n = !1), P.push(v));
                this.addProcessedElement(t[o], o + 1);
            }
            for(m = f.length, o = 0; o < m; o += 1)f[o].closed = !0;
            for(m = P.length, o = 0; o < m; o += 1)P[o].closed = !0;
        }, $.prototype.renderInnerContent = function() {
            this.renderModifiers();
            var t, e = this.stylesList.length;
            for(t = 0; t < e; t += 1)this.stylesList[t].reset();
            for(this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
        }, $.prototype.renderShape = function() {
            var t, e = this.animatedContents.length, s;
            for(t = 0; t < e; t += 1)s = this.animatedContents[t], (this._isFirstFrame || s.element._isAnimated) && s.data !== !0 && s.fn(s.data, s.element, this._isFirstFrame);
        }, $.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
        };
        function vs(t, e, s, i, r, a) {
            this.o = t, this.sw = e, this.sc = s, this.fc = i, this.m = r, this.p = a, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!s,
                fc: !!i,
                m: !0,
                p: !0
            };
        }
        vs.prototype.update = function(t, e, s, i, r, a) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var n = !1;
            return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== s && (this.sc = s, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== r && (this.m = r, this._mdf.m = !0, n = !0), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a, this._mdf.p = !0, n = !0), n;
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
                var i, r = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
                for(i = 0; i < r; i += 1)s !== this.keysIndex ? a = this.effectsSequence[i](a, a.t) : a = this.effectsSequence[i](this.currentData, a.t);
                e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
        }, dt.prototype.getKeyframeValue = function() {
            for(var t = this.data.d.k, e = this.elem.comp.renderedFrame, s = 0, i = t.length; s <= i - 1 && !(s === i - 1 || t[s + 1].t > e);)s += 1;
            return this.keysIndex !== s && (this.keysIndex = s), this.data.d.k[this.keysIndex].s;
        }, dt.prototype.buildFinalText = function(t) {
            for(var e = [], s = 0, i = t.length, r, a, n = !1, l = !1, o = ""; s < i;)n = l, l = !1, r = t.charCodeAt(s), o = t.charAt(s), ie.isCombinedCharacter(r) ? n = !0 : r >= 55296 && r <= 56319 ? ie.isRegionalFlag(t, s) ? o = t.substr(s, 14) : (a = t.charCodeAt(s + 1), a >= 56320 && a <= 57343 && (ie.isModifier(r, a) ? (o = t.substr(s, 2), n = !0) : ie.isFlagEmoji(t.substr(s, 4)) ? o = t.substr(s, 4) : o = t.substr(s, 2))) : r > 56319 ? (a = t.charCodeAt(s + 1), ie.isVariationSelector(r) && (n = !0)) : ie.isZeroWidthJoiner(r) && (n = !0, l = !0), n ? (e[e.length - 1] += o, n = !1) : e.push(o), s += o.length;
            return e;
        }, dt.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e = this.elem.globalData.fontManager, s = this.data, i = [], r, a, n, l = 0, o, m = s.m.g, g = 0, C = 0, f = 0, P = [], k = 0, v = 0, D, y, c = e.getFontByName(t.f), p, d = 0, x = ri(c);
            t.fWeight = x.weight, t.fStyle = x.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), a = t.finalText.length, t.finalLineHeight = t.lh;
            var A = t.tr / 1e3 * t.finalSize, M;
            if (t.sz) for(var w = !0, I = t.sz[0], N = t.sz[1], V, R; w;){
                R = this.buildFinalText(t.t), V = 0, k = 0, a = R.length, A = t.tr / 1e3 * t.finalSize;
                var q = -1;
                for(r = 0; r < a; r += 1)M = R[r].charCodeAt(0), n = !1, R[r] === " " ? q = r : (M === 13 || M === 3) && (k = 0, n = !0, V += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (p = e.getCharData(R[r], c.fStyle, c.fFamily), d = n ? 0 : p.w * t.finalSize / 100) : d = e.measureText(R[r], t.f, t.finalSize), k + d > I && R[r] !== " " ? (q === -1 ? a += 1 : r = q, V += t.finalLineHeight || t.finalSize * 1.2, R.splice(r, q === r ? 1 : 0, "\r"), q = -1, k = 0) : (k += d, k += A);
                V += c.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && N < V ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = R, a = t.finalText.length, w = !1);
            }
            k = -A, d = 0;
            var F = 0, E;
            for(r = 0; r < a; r += 1)if (n = !1, E = t.finalText[r], M = E.charCodeAt(0), M === 13 || M === 3 ? (F = 0, P.push(k), v = k > v ? k : v, k = -2 * A, o = "", n = !0, f += 1) : o = E, e.chars ? (p = e.getCharData(E, c.fStyle, e.getFontByName(t.f).fFamily), d = n ? 0 : p.w * t.finalSize / 100) : d = e.measureText(o, t.f, t.finalSize), E === " " ? F += d + A : (k += d + A + F, F = 0), i.push({
                l: d,
                an: d,
                add: g,
                n,
                anIndexes: [],
                val: o,
                line: f,
                animatorJustifyOffset: 0
            }), m == 2) {
                if (g += d, o === "" || o === " " || r === a - 1) {
                    for((o === "" || o === " ") && (g -= d); C <= r;)i[C].an = g, i[C].ind = l, i[C].extra = d, C += 1;
                    l += 1, g = 0;
                }
            } else if (m == 3) {
                if (g += d, o === "" || r === a - 1) {
                    for(o === "" && (g -= d); C <= r;)i[C].an = g, i[C].ind = l, i[C].extra = d, C += 1;
                    g = 0, l += 1;
                }
            } else i[l].ind = l, i[l].extra = 0, l += 1;
            if (t.l = i, v = k > v ? k : v, P.push(k), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch(t.boxWidth = v, t.j){
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
            var u = s.a, _, h;
            y = u.length;
            var b, T, S = [];
            for(D = 0; D < y; D += 1){
                for(_ = u[D], _.a.sc && (t.strokeColorAnim = !0), _.a.sw && (t.strokeWidthAnim = !0), (_.a.fc || _.a.fh || _.a.fs || _.a.fb) && (t.fillColorAnim = !0), T = 0, b = _.s.b, r = 0; r < a; r += 1)h = i[r], h.anIndexes[D] = T, (b == 1 && h.val !== "" || b == 2 && h.val !== "" && h.val !== " " || b == 3 && (h.n || h.val == " " || r == a - 1) || b == 4 && (h.n || r == a - 1)) && (_.s.rn === 1 && S.push(T), T += 1);
                s.a[D].s.totalChars = T;
                var j = -1, z;
                if (_.s.rn === 1) for(r = 0; r < a; r += 1)h = i[r], j != h.anIndexes[D] && (j = h.anIndexes[D], z = S.splice(Math.floor(Math.random() * S.length), 1)[0]), h.anIndexes[D] = z;
            }
            t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = c.ascent * t.finalSize / 100;
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
        var Sa = function() {
            var t = Math.max, e = Math.min, s = Math.floor;
            function i(a, n) {
                this._currentTextLength = -1, this.k = !1, this.data = n, this.elem = a, this.comp = a.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(a), this.s = L.getProp(a, n.s || {
                    k: 0
                }, 0, 0, this), "e" in n ? this.e = L.getProp(a, n.e, 0, 0, this) : this.e = {
                    v: 100
                }, this.o = L.getProp(a, n.o || {
                    k: 0
                }, 0, 0, this), this.xe = L.getProp(a, n.xe || {
                    k: 0
                }, 0, 0, this), this.ne = L.getProp(a, n.ne || {
                    k: 0
                }, 0, 0, this), this.sm = L.getProp(a, n.sm || {
                    k: 100
                }, 0, 0, this), this.a = L.getProp(a, n.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
            }
            i.prototype = {
                getMult: function(a) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var n = 0, l = 0, o = 1, m = 1;
                    this.ne.v > 0 ? n = this.ne.v / 100 : l = -this.ne.v / 100, this.xe.v > 0 ? o = 1 - this.xe.v / 100 : m = 1 + this.xe.v / 100;
                    var g = Ce.getBezierEasing(n, l, o, m).get, C = 0, f = this.finalS, P = this.finalE, k = this.data.sh;
                    if (k === 2) P === f ? C = a >= P ? 1 : 0 : C = t(0, e(.5 / (P - f) + (a - f) / (P - f), 1)), C = g(C);
                    else if (k === 3) P === f ? C = a >= P ? 0 : 1 : C = 1 - t(0, e(.5 / (P - f) + (a - f) / (P - f), 1)), C = g(C);
                    else if (k === 4) P === f ? C = 0 : (C = t(0, e(.5 / (P - f) + (a - f) / (P - f), 1)), C < .5 ? C *= 2 : C = 1 - 2 * (C - .5)), C = g(C);
                    else if (k === 5) {
                        if (P === f) C = 0;
                        else {
                            var v = P - f;
                            a = e(t(0, a + .5 - f), P - f);
                            var D = -v / 2 + a, y = v / 2;
                            C = Math.sqrt(1 - D * D / (y * y));
                        }
                        C = g(C);
                    } else k === 6 ? (P === f ? C = 0 : (a = e(t(0, a + .5 - f), P - f), C = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (P - f))) / 2), C = g(C)) : (a >= s(f) && (a - f < 0 ? C = t(0, e(e(P, 1) - (f - a), 1)) : C = t(0, e(P - a, 1))), C = g(C));
                    if (this.sm.v !== 100) {
                        var c = this.sm.v * .01;
                        c === 0 && (c = 1e-8);
                        var p = .5 - c * .5;
                        C < p ? C = 0 : (C = (C - p) / c, C > 1 && (C = 1));
                    }
                    return C * this.a.v;
                },
                getValue: function(a) {
                    this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var n = this.data.r === 2 ? 1 : 100 / this.data.totalChars, l = this.o.v / n, o = this.s.v / n + l, m = this.e.v / n + l;
                    if (o > m) {
                        var g = o;
                        o = m, m = g;
                    }
                    this.finalS = o, this.finalE = m;
                }
            }, J([
                ht
            ], i);
            function r(a, n, l) {
                return new i(a, n);
            }
            return {
                getTextSelectorProp: r
            };
        }();
        function Da(t, e, s) {
            var i = {
                propType: !1
            }, r = L.getProp, a = e.a;
            this.a = {
                r: a.r ? r(t, a.r, 0, Z, s) : i,
                rx: a.rx ? r(t, a.rx, 0, Z, s) : i,
                ry: a.ry ? r(t, a.ry, 0, Z, s) : i,
                sk: a.sk ? r(t, a.sk, 0, Z, s) : i,
                sa: a.sa ? r(t, a.sa, 0, Z, s) : i,
                s: a.s ? r(t, a.s, 1, .01, s) : i,
                a: a.a ? r(t, a.a, 1, 0, s) : i,
                o: a.o ? r(t, a.o, 0, .01, s) : i,
                p: a.p ? r(t, a.p, 1, 0, s) : i,
                sw: a.sw ? r(t, a.sw, 0, 0, s) : i,
                sc: a.sc ? r(t, a.sc, 1, 0, s) : i,
                fc: a.fc ? r(t, a.fc, 1, 0, s) : i,
                fh: a.fh ? r(t, a.fh, 0, 0, s) : i,
                fs: a.fs ? r(t, a.fs, 0, .01, s) : i,
                fb: a.fb ? r(t, a.fb, 0, .01, s) : i,
                t: a.t ? r(t, a.t, 0, 0, s) : i
            }, this.s = Sa.getTextSelectorProp(t, e.s, s), this.s.t = e.s.t;
        }
        function re(t, e, s) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = s, this._animatorsData = Q(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(s);
        }
        re.prototype.searchProperties = function() {
            var t, e = this._textData.a.length, s, i = L.getProp;
            for(t = 0; t < e; t += 1)s = this._textData.a[t], this._animatorsData[t] = new Da(this._elem, s, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: i(this._elem, this._textData.p.a, 0, 0, this),
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: i(this._elem, this._textData.p.r, 0, 0, this),
                p: i(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
        }, re.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                this._isFirstFrame = !1;
                var s = this._moreOptions.alignment.v, i = this._animatorsData, r = this._textData, a = this.mHelper, n = this._renderType, l = this.renderedLetters.length, o, m, g, C, f = t.l, P, k, v, D, y, c, p, d, x, A, M, w, I, N, V;
                if (this._hasMaskedPath) {
                    if (V = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var R = V.v;
                        this._pathData.r.v && (R = R.reverse()), P = {
                            tLength: 0,
                            segments: []
                        }, C = R._length - 1;
                        var q;
                        for(w = 0, g = 0; g < C; g += 1)q = wt.buildBezierData(R.v[g], R.v[g + 1], [
                            R.o[g][0] - R.v[g][0],
                            R.o[g][1] - R.v[g][1]
                        ], [
                            R.i[g + 1][0] - R.v[g + 1][0],
                            R.i[g + 1][1] - R.v[g + 1][1]
                        ]), P.tLength += q.segmentLength, P.segments.push(q), w += q.segmentLength;
                        g = C, V.v.c && (q = wt.buildBezierData(R.v[g], R.v[0], [
                            R.o[g][0] - R.v[g][0],
                            R.o[g][1] - R.v[g][1]
                        ], [
                            R.i[0][0] - R.v[0][0],
                            R.i[0][1] - R.v[0][1]
                        ]), P.tLength += q.segmentLength, P.segments.push(q), w += q.segmentLength), this._pathData.pi = P;
                    }
                    if (P = this._pathData.pi, k = this._pathData.f.v, p = 0, c = 1, D = 0, y = !0, A = P.segments, k < 0 && V.v.c) for(P.tLength < Math.abs(k) && (k = -Math.abs(k) % P.tLength), p = A.length - 1, x = A[p].points, c = x.length - 1; k < 0;)k += x[c].partialLength, c -= 1, c < 0 && (p -= 1, x = A[p].points, c = x.length - 1);
                    x = A[p].points, d = x[c - 1], v = x[c], M = v.partialLength;
                }
                C = f.length, o = 0, m = 0;
                var F = t.finalSize * 1.2 * .714, E = !0, u, _, h, b, T;
                b = i.length;
                var S, j = -1, z, X, Y, st = k, it = p, gt = c, Ot = -1, yt, pt, Ct, H, O, Wt, Qt, Bt, Vt = "", jt = this.defaultPropsArray, Jt;
                if (t.j === 2 || t.j === 1) {
                    var vt = 0, $t = 0, Zt = t.j === 2 ? -0.5 : -1, At = 0, te = !0;
                    for(g = 0; g < C; g += 1)if (f[g].n) {
                        for(vt && (vt += $t); At < g;)f[At].animatorJustifyOffset = vt, At += 1;
                        vt = 0, te = !0;
                    } else {
                        for(h = 0; h < b; h += 1)u = i[h].a, u.t.propType && (te && t.j === 2 && ($t += u.t.v * Zt), _ = i[h].s, S = _.getMult(f[g].anIndexes[h], r.a[h].s.totalChars), S.length ? vt += u.t.v * S[0] * Zt : vt += u.t.v * S * Zt);
                        te = !1;
                    }
                    for(vt && (vt += $t); At < g;)f[At].animatorJustifyOffset = vt, At += 1;
                }
                for(g = 0; g < C; g += 1){
                    if (a.reset(), yt = 1, f[g].n) o = 0, m += t.yOffset, m += E ? 1 : 0, k = st, E = !1, this._hasMaskedPath && (p = it, c = gt, x = A[p].points, d = x[c - 1], v = x[c], M = v.partialLength, D = 0), Vt = "", Bt = "", Wt = "", Jt = "", jt = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Ot !== f[g].line) {
                                switch(t.j){
                                    case 1:
                                        k += w - t.lineWidths[f[g].line];
                                        break;
                                    case 2:
                                        k += (w - t.lineWidths[f[g].line]) / 2;
                                        break;
                                }
                                Ot = f[g].line;
                            }
                            j !== f[g].ind && (f[j] && (k += f[j].extra), k += f[g].an / 2, j = f[g].ind), k += s[0] * f[g].an * .005;
                            var Tt = 0;
                            for(h = 0; h < b; h += 1)u = i[h].a, u.p.propType && (_ = i[h].s, S = _.getMult(f[g].anIndexes[h], r.a[h].s.totalChars), S.length ? Tt += u.p.v[0] * S[0] : Tt += u.p.v[0] * S), u.a.propType && (_ = i[h].s, S = _.getMult(f[g].anIndexes[h], r.a[h].s.totalChars), S.length ? Tt += u.a.v[0] * S[0] : Tt += u.a.v[0] * S);
                            for(y = !0, this._pathData.a.v && (k = f[0].an * .5 + (w - this._pathData.f.v - f[0].an * .5 - f[f.length - 1].an * .5) * j / (C - 1), k += this._pathData.f.v); y;)D + M >= k + Tt || !x ? (I = (k + Tt - D) / v.partialLength, X = d.point[0] + (v.point[0] - d.point[0]) * I, Y = d.point[1] + (v.point[1] - d.point[1]) * I, a.translate(-s[0] * f[g].an * .005, -(s[1] * F) * .01), y = !1) : x && (D += v.partialLength, c += 1, c >= x.length && (c = 0, p += 1, A[p] ? x = A[p].points : V.v.c ? (c = 0, p = 0, x = A[p].points) : (D -= v.partialLength, x = null)), x && (d = v, v = x[c], M = v.partialLength));
                            z = f[g].an / 2 - f[g].add, a.translate(-z, 0, 0);
                        } else z = f[g].an / 2 - f[g].add, a.translate(-z, 0, 0), a.translate(-s[0] * f[g].an * .005, -s[1] * F * .01, 0);
                        for(h = 0; h < b; h += 1)u = i[h].a, u.t.propType && (_ = i[h].s, S = _.getMult(f[g].anIndexes[h], r.a[h].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? S.length ? k += u.t.v * S[0] : k += u.t.v * S : S.length ? o += u.t.v * S[0] : o += u.t.v * S));
                        for(t.strokeWidthAnim && (Ct = t.sw || 0), t.strokeColorAnim && (t.sc ? pt = [
                            t.sc[0],
                            t.sc[1],
                            t.sc[2]
                        ] : pt = [
                            0,
                            0,
                            0
                        ]), t.fillColorAnim && t.fc && (H = [
                            t.fc[0],
                            t.fc[1],
                            t.fc[2]
                        ]), h = 0; h < b; h += 1)u = i[h].a, u.a.propType && (_ = i[h].s, S = _.getMult(f[g].anIndexes[h], r.a[h].s.totalChars), S.length ? a.translate(-u.a.v[0] * S[0], -u.a.v[1] * S[1], u.a.v[2] * S[2]) : a.translate(-u.a.v[0] * S, -u.a.v[1] * S, u.a.v[2] * S));
                        for(h = 0; h < b; h += 1)u = i[h].a, u.s.propType && (_ = i[h].s, S = _.getMult(f[g].anIndexes[h], r.a[h].s.totalChars), S.length ? a.scale(1 + (u.s.v[0] - 1) * S[0], 1 + (u.s.v[1] - 1) * S[1], 1) : a.scale(1 + (u.s.v[0] - 1) * S, 1 + (u.s.v[1] - 1) * S, 1));
                        for(h = 0; h < b; h += 1){
                            if (u = i[h].a, _ = i[h].s, S = _.getMult(f[g].anIndexes[h], r.a[h].s.totalChars), u.sk.propType && (S.length ? a.skewFromAxis(-u.sk.v * S[0], u.sa.v * S[1]) : a.skewFromAxis(-u.sk.v * S, u.sa.v * S)), u.r.propType && (S.length ? a.rotateZ(-u.r.v * S[2]) : a.rotateZ(-u.r.v * S)), u.ry.propType && (S.length ? a.rotateY(u.ry.v * S[1]) : a.rotateY(u.ry.v * S)), u.rx.propType && (S.length ? a.rotateX(u.rx.v * S[0]) : a.rotateX(u.rx.v * S)), u.o.propType && (S.length ? yt += (u.o.v * S[0] - yt) * S[0] : yt += (u.o.v * S - yt) * S), t.strokeWidthAnim && u.sw.propType && (S.length ? Ct += u.sw.v * S[0] : Ct += u.sw.v * S), t.strokeColorAnim && u.sc.propType) for(O = 0; O < 3; O += 1)S.length ? pt[O] += (u.sc.v[O] - pt[O]) * S[0] : pt[O] += (u.sc.v[O] - pt[O]) * S;
                            if (t.fillColorAnim && t.fc) {
                                if (u.fc.propType) for(O = 0; O < 3; O += 1)S.length ? H[O] += (u.fc.v[O] - H[O]) * S[0] : H[O] += (u.fc.v[O] - H[O]) * S;
                                u.fh.propType && (S.length ? H = Rs(H, u.fh.v * S[0]) : H = Rs(H, u.fh.v * S)), u.fs.propType && (S.length ? H = Ls(H, u.fs.v * S[0]) : H = Ls(H, u.fs.v * S)), u.fb.propType && (S.length ? H = Is(H, u.fb.v * S[0]) : H = Is(H, u.fb.v * S));
                            }
                        }
                        for(h = 0; h < b; h += 1)u = i[h].a, u.p.propType && (_ = i[h].s, S = _.getMult(f[g].anIndexes[h], r.a[h].s.totalChars), this._hasMaskedPath ? S.length ? a.translate(0, u.p.v[1] * S[0], -u.p.v[2] * S[1]) : a.translate(0, u.p.v[1] * S, -u.p.v[2] * S) : S.length ? a.translate(u.p.v[0] * S[0], u.p.v[1] * S[1], -u.p.v[2] * S[2]) : a.translate(u.p.v[0] * S, u.p.v[1] * S, -u.p.v[2] * S));
                        if (t.strokeWidthAnim && (Wt = Ct < 0 ? 0 : Ct), t.strokeColorAnim && (Qt = "rgb(" + Math.round(pt[0] * 255) + "," + Math.round(pt[1] * 255) + "," + Math.round(pt[2] * 255) + ")"), t.fillColorAnim && t.fc && (Bt = "rgb(" + Math.round(H[0] * 255) + "," + Math.round(H[1] * 255) + "," + Math.round(H[2] * 255) + ")"), this._hasMaskedPath) {
                            if (a.translate(0, -t.ls), a.translate(0, s[1] * F * .01 + m, 0), this._pathData.p.v) {
                                N = (v.point[1] - d.point[1]) / (v.point[0] - d.point[0]);
                                var oe = Math.atan(N) * 180 / Math.PI;
                                v.point[0] < d.point[0] && (oe += 180), a.rotate(-oe * Math.PI / 180);
                            }
                            a.translate(X, Y, 0), k -= s[0] * f[g].an * .005, f[g + 1] && j !== f[g + 1].ind && (k += f[g].an / 2, k += t.tr * .001 * t.finalSize);
                        } else {
                            switch(a.translate(o, m, 0), t.ps && a.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j){
                                case 1:
                                    a.translate(f[g].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[f[g].line]), 0, 0);
                                    break;
                                case 2:
                                    a.translate(f[g].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[f[g].line]) / 2, 0, 0);
                                    break;
                            }
                            a.translate(0, -t.ls), a.translate(z, 0, 0), a.translate(s[0] * f[g].an * .005, s[1] * F * .01, 0), o += f[g].l + t.tr * .001 * t.finalSize;
                        }
                        n === "html" ? Vt = a.toCSS() : n === "svg" ? Vt = a.to2dCSS() : jt = [
                            a.props[0],
                            a.props[1],
                            a.props[2],
                            a.props[3],
                            a.props[4],
                            a.props[5],
                            a.props[6],
                            a.props[7],
                            a.props[8],
                            a.props[9],
                            a.props[10],
                            a.props[11],
                            a.props[12],
                            a.props[13],
                            a.props[14],
                            a.props[15]
                        ], Jt = yt;
                    }
                    l <= g ? (T = new vs(Jt, Wt, Qt, Bt, Vt, jt), this.renderedLetters.push(T), l += 1, this.lettersChangedFlag = !0) : (T = this.renderedLetters[g], this.lettersChangedFlag = T.update(Jt, Wt, Qt, Bt, Vt, jt) || this.lettersChangedFlag);
                }
            }
        }, re.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
        }, re.prototype.mHelper = new tt, re.prototype.defaultPropsArray = [], J([
            ht
        ], re);
        function xt() {}
        xt.prototype.initElement = function(t, e, s) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, s), this.textProperty = new dt(this, t.t, this.dynamicProperties), this.textAnimator = new re(t.t, this.renderType, this), this.initTransform(t, e, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
        }, xt.prototype.prepareFrame = function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
        }, xt.prototype.createPathShape = function(t, e) {
            var s, i = e.length, r, a = "";
            for(s = 0; s < i; s += 1)e[s].ty === "sh" && (r = e[s].ks.k, a += ui(r, r.i.length, !0, t));
            return a;
        }, xt.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e);
        }, xt.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t);
        }, xt.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t);
        }, xt.prototype.applyTextPropertiesToMatrix = function(t, e, s, i, r) {
            switch(t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j){
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]) / 2, 0, 0);
                    break;
            }
            e.translate(i, r, 0);
        }, xt.prototype.buildColor = function(t) {
            return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
        }, xt.prototype.emptyProp = new vs, xt.prototype.destroy = function() {}, xt.prototype.validateText = function() {
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
        };
        var Aa = {
            shapes: []
        };
        function qt(t, e, s) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, s);
        }
        J([
            Pt,
            Lt,
            we,
            It,
            St,
            me,
            xt
        ], qt), qt.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = B("text"));
        }, qt.prototype.buildTextContents = function(t) {
            for(var e = 0, s = t.length, i = [], r = ""; e < s;)t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(r), r = "") : r += t[e], e += 1;
            return i.push(r), i;
        }, qt.prototype.buildShapeData = function(t, e) {
            if (t.shapes && t.shapes.length) {
                var s = t.shapes[0];
                if (s.it) {
                    var i = s.it[s.it.length - 1];
                    i.s && (i.s.k[0] = e, i.s.k[1] = e);
                }
            }
            return t;
        }, qt.prototype.buildNewText = function() {
            this.addDynamicProperty(this);
            var t, e, s = this.textProperty.currentData;
            this.renderedLetters = Q(s ? s.l.length : 0), s.fc ? this.layerElement.setAttribute("fill", this.buildColor(s.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), s.sc && (this.layerElement.setAttribute("stroke", this.buildColor(s.sc)), this.layerElement.setAttribute("stroke-width", s.sw)), this.layerElement.setAttribute("font-size", s.finalSize);
            var i = this.globalData.fontManager.getFontByName(s.f);
            if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
            else {
                this.layerElement.setAttribute("font-family", i.fFamily);
                var r = s.fWeight, a = s.fStyle;
                this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", r);
            }
            this.layerElement.setAttribute("aria-label", s.t);
            var n = s.l || [], l = !!this.globalData.fontManager.chars;
            e = n.length;
            var o, m = this.mHelper, g = "", C = this.data.singleShape, f = 0, P = 0, k = !0, v = s.tr * .001 * s.finalSize;
            if (C && !l && !s.sz) {
                var D = this.textContainer, y = "start";
                switch(s.j){
                    case 1:
                        y = "end";
                        break;
                    case 2:
                        y = "middle";
                        break;
                    default:
                        y = "start";
                        break;
                }
                D.setAttribute("text-anchor", y), D.setAttribute("letter-spacing", v);
                var c = this.buildTextContents(s.finalText);
                for(e = c.length, P = s.ps ? s.ps[1] + s.ascent : 0, t = 0; t < e; t += 1)o = this.textSpans[t].span || B("tspan"), o.textContent = c[t], o.setAttribute("x", 0), o.setAttribute("y", P), o.style.display = "inherit", D.appendChild(o), this.textSpans[t] || (this.textSpans[t] = {
                    span: null,
                    glyph: null
                }), this.textSpans[t].span = o, P += s.finalLineHeight;
                this.layerElement.appendChild(D);
            } else {
                var p = this.textSpans.length, d;
                for(t = 0; t < e; t += 1){
                    if (this.textSpans[t] || (this.textSpans[t] = {
                        span: null,
                        childSpan: null,
                        glyph: null
                    }), !l || !C || t === 0) {
                        if (o = p > t ? this.textSpans[t].span : B(l ? "g" : "text"), p <= t) {
                            if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, l) {
                                var x = B("g");
                                o.appendChild(x), this.textSpans[t].childSpan = x;
                            }
                            this.textSpans[t].span = o, this.layerElement.appendChild(o);
                        }
                        o.style.display = "inherit";
                    }
                    if (m.reset(), C && (n[t].n && (f = -v, P += s.yOffset, P += k ? 1 : 0, k = !1), this.applyTextPropertiesToMatrix(s, m, n[t].line, f, P), f += n[t].l || 0, f += v), l) {
                        d = this.globalData.fontManager.getCharData(s.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(s.f).fFamily);
                        var A;
                        if (d.t === 1) A = new Ee(d.data, this.globalData, this);
                        else {
                            var M = Aa;
                            d.data && d.data.shapes && (M = this.buildShapeData(d.data, s.finalSize)), A = new $(M, this.globalData, this);
                        }
                        if (this.textSpans[t].glyph) {
                            var w = this.textSpans[t].glyph;
                            this.textSpans[t].childSpan.removeChild(w.layerElement), w.destroy();
                        }
                        this.textSpans[t].glyph = A, A._debug = !0, A.prepareFrame(0), A.renderFrame(), this.textSpans[t].childSpan.appendChild(A.layerElement), d.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + s.finalSize / 100 + "," + s.finalSize / 100 + ")");
                    } else C && o.setAttribute("transform", "translate(" + m.props[12] + "," + m.props[13] + ")"), o.textContent = n[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                }
                C && o && o.setAttribute("d", g);
            }
            for(; t < this.textSpans.length;)this.textSpans[t].span.style.display = "none", t += 1;
            this._sizeChanged = !0;
        }, qt.prototype.sourceRectAtTime = function() {
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
        }, qt.prototype.getValue = function() {
            var t, e = this.textSpans.length, s;
            for(this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1)s = this.textSpans[t].glyph, s && (s.prepareFrame(this.comp.renderedFrame - this.data.st), s._mdf && (this._mdf = !0));
        }, qt.prototype.renderInnerContent = function() {
            if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                this._sizeChanged = !0;
                var t, e, s = this.textAnimator.renderedLetters, i = this.textProperty.currentData.l;
                e = i.length;
                var r, a, n;
                for(t = 0; t < e; t += 1)i[t].n || (r = s[t], a = this.textSpans[t].span, n = this.textSpans[t].glyph, n && n.renderFrame(), r._mdf.m && a.setAttribute("transform", r.m), r._mdf.o && a.setAttribute("opacity", r.o), r._mdf.sw && a.setAttribute("stroke-width", r.sw), r._mdf.sc && a.setAttribute("stroke", r.sc), r._mdf.fc && a.setAttribute("fill", r.fc));
            }
        };
        function bs(t, e, s) {
            this.initElement(t, e, s);
        }
        J([
            ae
        ], bs), bs.prototype.createContent = function() {
            var t = B("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
        };
        function Ut(t, e, s) {
            this.initFrame(), this.initBaseData(t, e, s), this.initFrame(), this.initTransform(t, e, s), this.initHierarchy();
        }
        Ut.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0);
        }, Ut.prototype.renderFrame = function() {}, Ut.prototype.getBaseElement = function() {
            return null;
        }, Ut.prototype.destroy = function() {}, Ut.prototype.sourceRectAtTime = function() {}, Ut.prototype.hide = function() {}, J([
            Pt,
            Lt,
            It,
            St
        ], Ut);
        function nt() {}
        J([
            lt
        ], nt), nt.prototype.createNull = function(t) {
            return new Ut(t, this.globalData, this);
        }, nt.prototype.createShape = function(t) {
            return new $(t, this.globalData, this);
        }, nt.prototype.createText = function(t) {
            return new qt(t, this.globalData, this);
        }, nt.prototype.createImage = function(t) {
            return new ae(t, this.globalData, this);
        }, nt.prototype.createSolid = function(t) {
            return new bs(t, this.globalData, this);
        }, nt.prototype.configAnimation = function(t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var s = B("clipPath"), i = B("rect");
            i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
            var r = mt();
            s.setAttribute("id", r), s.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + bt() + "#" + r + ")"), e.appendChild(s), this.layers = t.layers, this.elements = Q(t.layers.length);
        }, nt.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
        }, nt.prototype.updateContainerSize = function() {}, nt.prototype.findIndexByInd = function(t) {
            var e = 0, s = this.layers.length;
            for(e = 0; e < s; e += 1)if (this.layers[e].ind === t) return e;
            return -1;
        }, nt.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!(e[t] || this.layers[t].ty === 99)) {
                e[t] = !0;
                var s = this.createItem(this.layers[t]);
                if (e[t] = s, ze() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(s), s.initExpressions()), this.appendElementInPos(s, t), this.layers[t].tt) {
                    var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                    if (i === -1) return;
                    if (!this.elements[i] || this.elements[i] === !0) this.buildItem(i), this.addPendingElement(s);
                    else {
                        var r = e[i], a = r.getMatte(this.layers[t].tt);
                        s.setMatte(a);
                    }
                }
            }
        }, nt.prototype.checkPendingElements = function() {
            for(; this.pendingElements.length;){
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt) for(var e = 0, s = this.elements.length; e < s;){
                    if (this.elements[e] === t) {
                        var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, r = this.elements[i], a = r.getMatte(this.layers[e].tt);
                        t.setMatte(a);
                        break;
                    }
                    e += 1;
                }
            }
        }, nt.prototype.renderFrame = function(t) {
            if (!(this.renderedFrame === t || this.destroyed)) {
                t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var e, s = this.layers.length;
                for(this.completeLayers || this.checkLayers(t), e = s - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf) for(e = 0; e < s; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }
        }, nt.prototype.appendElementInPos = function(t, e) {
            var s = t.getBaseElement();
            if (s) {
                for(var i = 0, r; i < e;)this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (r = this.elements[i].getBaseElement()), i += 1;
                r ? this.layerElement.insertBefore(s, r) : this.layerElement.appendChild(s);
            }
        }, nt.prototype.hide = function() {
            this.layerElement.style.display = "none";
        }, nt.prototype.show = function() {
            this.layerElement.style.display = "block";
        };
        function Rt() {}
        J([
            Pt,
            Lt,
            It,
            St,
            me
        ], Rt), Rt.prototype.initElement = function(t, e, s) {
            this.initFrame(), this.initBaseData(t, e, s), this.initTransform(t, e, s), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
        }, Rt.prototype.prepareFrame = function(t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
                }
                var s, i = this.elements.length;
                for(this.completeLayers || this.checkLayers(this.renderedFrame), s = i - 1; s >= 0; s -= 1)(this.completeLayers || this.elements[s]) && (this.elements[s].prepareFrame(this.renderedFrame - this.layers[s].st), this.elements[s]._mdf && (this._mdf = !0));
            }
        }, Rt.prototype.renderInnerContent = function() {
            var t, e = this.layers.length;
            for(t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
        }, Rt.prototype.setElements = function(t) {
            this.elements = t;
        }, Rt.prototype.getElements = function() {
            return this.elements;
        }, Rt.prototype.destroyElements = function() {
            var t, e = this.layers.length;
            for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy();
        }, Rt.prototype.destroy = function() {
            this.destroyElements(), this.destroyBaseElement();
        };
        function Ee(t, e, s) {
            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? Q(this.layers.length) : [], this.initElement(t, e, s), this.tm = t.tm ? L.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            };
        }
        J([
            nt,
            Rt,
            we
        ], Ee), Ee.prototype.createComp = function(t) {
            return new Ee(t, this.globalData, this);
        };
        function _s(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = B("svg");
            var s = "";
            if (e && e.title) {
                var i = B("title"), r = mt();
                i.setAttribute("id", r), i.textContent = e.title, this.svgElement.appendChild(i), s += r;
            }
            if (e && e.description) {
                var a = B("desc"), n = mt();
                a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), s += " " + n;
            }
            s && this.svgElement.setAttribute("aria-labelledby", s);
            var l = B("defs");
            this.svgElement.appendChild(l);
            var o = B("g");
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
                defs: l,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
        }
        J([
            nt
        ], _s), _s.prototype.createComp = function(t) {
            return new Ee(t, this.globalData, this);
        };
        function gi() {
            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
        }
        gi.prototype = {
            addTransformSequence: function(t) {
                var e, s = t.length, i = "_";
                for(e = 0; e < s; e += 1)i += t[e].transform.key + "_";
                var r = this.sequences[i];
                return r || (r = {
                    transforms: [].concat(t),
                    finalTransform: new tt,
                    _mdf: !1
                }, this.sequences[i] = r, this.sequenceList.push(r)), r;
            },
            processSequence: function(t, e) {
                for(var s = 0, i = t.transforms.length, r = e; s < i && !e;){
                    if (t.transforms[s].transform.mProps._mdf) {
                        r = !0;
                        break;
                    }
                    s += 1;
                }
                if (r) for(t.finalTransform.reset(), s = i - 1; s >= 0; s -= 1)t.finalTransform.multiply(t.transforms[s].transform.mProps.v);
                t._mdf = r;
            },
            processSequences: function(t) {
                var e, s = this.sequenceList.length;
                for(e = 0; e < s; e += 1)this.processSequence(this.sequenceList[e], t);
            },
            getNewKey: function() {
                return this.transform_key_count += 1, "_" + this.transform_key_count;
            }
        };
        var yi = function() {
            var t = "__lottie_element_luma_buffer", e = null, s = null, i = null;
            function r() {
                var l = B("svg"), o = B("filter"), m = B("feColorMatrix");
                return o.setAttribute("id", t), m.setAttribute("type", "matrix"), m.setAttribute("color-interpolation-filters", "sRGB"), m.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), o.appendChild(m), l.appendChild(o), l.setAttribute("id", t + "_svg"), Ue.svgLumaHidden && (l.style.display = "none"), l;
            }
            function a() {
                e || (i = r(), document.body.appendChild(i), e = _t("canvas"), s = e.getContext("2d"), s.filter = "url(#" + t + ")", s.fillStyle = "rgba(0,0,0,0)", s.fillRect(0, 0, 1, 1));
            }
            function n(l) {
                return e || a(), e.width = l.width, e.height = l.height, s.filter = "url(#" + t + ")", e;
            }
            return {
                load: a,
                get: n
            };
        };
        function Ta(t, e) {
            if (Ue.offscreenCanvas) return new OffscreenCanvas(t, e);
            var s = _t("canvas");
            return s.width = t, s.height = e, s;
        }
        var Qe = function() {
            return {
                loadLumaCanvas: yi.load,
                getLumaCanvas: yi.get,
                createCanvas: Ta
            };
        }(), vi = {};
        function xs(t) {
            var e, s = t.data.ef ? t.data.ef.length : 0;
            this.filters = [];
            var i;
            for(e = 0; e < s; e += 1){
                i = null;
                var r = t.data.ef[e].ty;
                if (vi[r]) {
                    var a = vi[r].effect;
                    i = new a(t.effectsManager.effectElements[e], t);
                }
                i && this.filters.push(i);
            }
            this.filters.length && t.addRenderableComponent(this);
        }
        xs.prototype.renderFrame = function(t) {
            var e, s = this.filters.length;
            for(e = 0; e < s; e += 1)this.filters[e].renderFrame(t);
        }, xs.prototype.getEffects = function(t) {
            var e, s = this.filters.length, i = [];
            for(e = 0; e < s; e += 1)this.filters[e].type === t && i.push(this.filters[e]);
            return i;
        };
        function $e(t, e) {
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = Q(this.masksProperties.length);
            var s, i = this.masksProperties.length, r = !1;
            for(s = 0; s < i; s += 1)this.masksProperties[s].mode !== "n" && (r = !0), this.viewData[s] = pe.getShapeProp(this.element, this.masksProperties[s], 3);
            this.hasMasks = r, r && this.element.addRenderableComponent(this);
        }
        $e.prototype.renderFrame = function() {
            if (this.hasMasks) {
                var t = this.element.finalTransform.mat, e = this.element.canvasContext, s, i = this.masksProperties.length, r, a, n;
                for(e.beginPath(), s = 0; s < i; s += 1)if (this.masksProperties[s].mode !== "n") {
                    this.masksProperties[s].inv && (e.moveTo(0, 0), e.lineTo(this.element.globalData.compSize.w, 0), e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), e.lineTo(0, this.element.globalData.compSize.h), e.lineTo(0, 0)), n = this.viewData[s].v, r = t.applyToPointArray(n.v[0][0], n.v[0][1], 0), e.moveTo(r[0], r[1]);
                    var l, o = n._length;
                    for(l = 1; l < o; l += 1)a = t.applyToTriplePoints(n.o[l - 1], n.i[l], n.v[l]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                    a = t.applyToTriplePoints(n.o[l - 1], n.i[0], n.v[0]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                }
                this.element.globalData.renderer.save(!0), e.clip();
            }
        }, $e.prototype.getMaskProperty = Ht.prototype.getMaskProperty, $e.prototype.destroy = function() {
            this.element = null;
        };
        function zt() {}
        var Ma = {
            1: "source-in",
            2: "source-out",
            3: "source-in",
            4: "source-out"
        };
        zt.prototype = {
            createElements: function() {},
            initRendererElement: function() {},
            createContainerElements: function() {
                if (this.data.tt >= 1) {
                    this.buffers = [];
                    var t = this.globalData.canvasContext, e = Qe.createCanvas(t.canvas.width, t.canvas.height);
                    this.buffers.push(e);
                    var s = Qe.createCanvas(t.canvas.width, t.canvas.height);
                    this.buffers.push(s), this.data.tt >= 3 && !document._isProxy && Qe.loadLumaCanvas();
                }
                this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new xs(this), this.searchEffectTransforms();
            },
            createContent: function() {},
            setBlendMode: function() {
                var t = this.globalData;
                if (t.blendMode !== this.data.bm) {
                    t.blendMode = this.data.bm;
                    var e = He(this.data.bm);
                    t.canvasContext.globalCompositeOperation = e;
                }
            },
            createRenderableComponents: function() {
                this.maskManager = new $e(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(hi.TRANSFORM_EFFECT);
            },
            hideElement: function() {
                !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0);
            },
            showElement: function() {
                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
            },
            clearCanvas: function(t) {
                t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
            },
            prepareLayer: function() {
                if (this.data.tt >= 1) {
                    var t = this.buffers[0], e = t.getContext("2d");
                    this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
                }
            },
            exitLayer: function() {
                if (this.data.tt >= 1) {
                    var t = this.buffers[1], e = t.getContext("2d");
                    this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
                    var s = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
                    if (s.renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                        var i = Qe.getLumaCanvas(this.canvasContext.canvas), r = i.getContext("2d");
                        r.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(i, 0, 0);
                    }
                    this.canvasContext.globalCompositeOperation = Ma[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
                }
            },
            renderFrame: function(t) {
                if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !t)) {
                    this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                    var e = this.data.ty === 0;
                    this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
                }
            },
            destroy: function() {
                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
            },
            mHelper: new tt
        }, zt.prototype.hide = zt.prototype.hideElement, zt.prototype.show = zt.prototype.showElement;
        function bi(t, e, s, i) {
            this.styledShapes = [], this.tr = [
                0,
                0,
                0,
                0,
                0,
                0
            ];
            var r = 4;
            e.ty === "rc" ? r = 5 : e.ty === "el" ? r = 6 : e.ty === "sr" && (r = 7), this.sh = pe.getShapeProp(t, e, r, t);
            var a, n = s.length, l;
            for(a = 0; a < n; a += 1)s[a].closed || (l = {
                transforms: i.addTransformSequence(s[a].transforms),
                trNodes: []
            }, this.styledShapes.push(l), s[a].elements.push(l));
        }
        bi.prototype.setAsAnimated = ys.prototype.setAsAnimated;
        function U(t, e, s) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new gi, this.initElement(t, e, s);
        }
        J([
            Pt,
            Lt,
            zt,
            ms,
            It,
            St,
            Gt
        ], U), U.prototype.initElement = me.prototype.initElement, U.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        }, U.prototype.dashResetter = [], U.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
        }, U.prototype.createStyleElement = function(t, e) {
            var s = {
                data: t,
                type: t.ty,
                preTransforms: this.transformsManager.addTransformSequence(e),
                transforms: [],
                elements: [],
                closed: t.hd === !0
            }, i = {};
            if (t.ty === "fl" || t.ty === "st" ? (i.c = L.getProp(this, t.c, 1, 255, this), i.c.k || (s.co = "rgb(" + ft(i.c.v[0]) + "," + ft(i.c.v[1]) + "," + ft(i.c.v[2]) + ")")) : (t.ty === "gf" || t.ty === "gs") && (i.s = L.getProp(this, t.s, 1, null, this), i.e = L.getProp(this, t.e, 1, null, this), i.h = L.getProp(this, t.h || {
                k: 0
            }, 0, .01, this), i.a = L.getProp(this, t.a || {
                k: 0
            }, 0, Z, this), i.g = new ue(this, t.g, this)), i.o = L.getProp(this, t.o, 0, .01, this), t.ty === "st" || t.ty === "gs") {
                if (s.lc = us[t.lc || 2], s.lj = gs[t.lj || 2], t.lj == 1 && (s.ml = t.ml), i.w = L.getProp(this, t.w, 0, null, this), i.w.k || (s.wi = i.w.v), t.d) {
                    var r = new Fe(this, t.d, "canvas", this);
                    i.d = r, i.d.k || (s.da = i.d.dashArray, s.do = i.d.dashoffset[0]);
                }
            } else s.r = t.r === 2 ? "evenodd" : "nonzero";
            return this.stylesList.push(s), i.style = s, i;
        }, U.prototype.createGroupElement = function() {
            var t = {
                it: [],
                prevViewData: []
            };
            return t;
        }, U.prototype.createTransformElement = function(t) {
            var e = {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: L.getProp(this, t.o, 0, .01, this),
                    mProps: Ye.getTransformProperty(this, t, this)
                }
            };
            return e;
        }, U.prototype.createShapeElement = function(t) {
            var e = new bi(this, t, this.stylesList, this.transformsManager);
            return this.shapes.push(e), this.addShapeToModifiers(e), e;
        }, U.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for(t = 0; t < e; t += 1)this.prevViewData[t] = this.itemsData[t];
            for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1)this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
        }, U.prototype.addTransformToStyleList = function(t) {
            var e, s = this.stylesList.length;
            for(e = 0; e < s; e += 1)this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
        }, U.prototype.removeTransformFromStyleList = function() {
            var t, e = this.stylesList.length;
            for(t = 0; t < e; t += 1)this.stylesList[t].closed || this.stylesList[t].transforms.pop();
        }, U.prototype.closeStyles = function(t) {
            var e, s = t.length;
            for(e = 0; e < s; e += 1)t[e].closed = !0;
        }, U.prototype.searchShapes = function(t, e, s, i, r) {
            var a, n = t.length - 1, l, o, m = [], g = [], C, f, P, k = [].concat(r);
            for(a = n; a >= 0; a -= 1){
                if (C = this.searchProcessedElement(t[a]), C ? e[a] = s[C - 1] : t[a]._shouldRender = i, t[a].ty === "fl" || t[a].ty === "st" || t[a].ty === "gf" || t[a].ty === "gs") C ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], k), m.push(e[a].style);
                else if (t[a].ty === "gr") {
                    if (!C) e[a] = this.createGroupElement(t[a]);
                    else for(o = e[a].it.length, l = 0; l < o; l += 1)e[a].prevViewData[l] = e[a].it[l];
                    this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, k);
                } else t[a].ty === "tr" ? (C || (P = this.createTransformElement(t[a]), e[a] = P), k.push(e[a]), this.addTransformToStyleList(e[a])) : t[a].ty === "sh" || t[a].ty === "rc" || t[a].ty === "el" || t[a].ty === "sr" ? C || (e[a] = this.createShapeElement(t[a])) : t[a].ty === "tm" || t[a].ty === "rd" || t[a].ty === "pb" || t[a].ty === "zz" || t[a].ty === "op" ? (C ? (f = e[a], f.closed = !1) : (f = Ft.getModifier(t[a].ty), f.init(this, t[a]), e[a] = f, this.shapeModifiers.push(f)), g.push(f)) : t[a].ty === "rp" && (C ? (f = e[a], f.closed = !0) : (f = Ft.getModifier(t[a].ty), e[a] = f, f.init(this, t, a, e), this.shapeModifiers.push(f), i = !1), g.push(f));
                this.addProcessedElement(t[a], a + 1);
            }
            for(this.removeTransformFromStyleList(), this.closeStyles(m), n = g.length, a = 0; a < n; a += 1)g[a].closed = !0;
        }, U.prototype.renderInnerContent = function() {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
        }, U.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0);
        }, U.prototype.drawLayer = function() {
            var t, e = this.stylesList.length, s, i, r, a, n, l, o = this.globalData.renderer, m = this.globalData.canvasContext, g, C;
            for(t = 0; t < e; t += 1)if (C = this.stylesList[t], g = C.type, !((g === "st" || g === "gs") && C.wi === 0 || !C.data._shouldRender || C.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
                for(o.save(), n = C.elements, g === "st" || g === "gs" ? (o.ctxStrokeStyle(g === "st" ? C.co : C.grd), o.ctxLineWidth(C.wi), o.ctxLineCap(C.lc), o.ctxLineJoin(C.lj), o.ctxMiterLimit(C.ml || 0)) : o.ctxFillStyle(g === "fl" ? C.co : C.grd), o.ctxOpacity(C.coOp), g !== "st" && g !== "gs" && m.beginPath(), o.ctxTransform(C.preTransforms.finalTransform.props), i = n.length, s = 0; s < i; s += 1){
                    for((g === "st" || g === "gs") && (m.beginPath(), C.da && (m.setLineDash(C.da), m.lineDashOffset = C.do)), l = n[s].trNodes, a = l.length, r = 0; r < a; r += 1)l[r].t === "m" ? m.moveTo(l[r].p[0], l[r].p[1]) : l[r].t === "c" ? m.bezierCurveTo(l[r].pts[0], l[r].pts[1], l[r].pts[2], l[r].pts[3], l[r].pts[4], l[r].pts[5]) : m.closePath();
                    (g === "st" || g === "gs") && (o.ctxStroke(), C.da && m.setLineDash(this.dashResetter));
                }
                g !== "st" && g !== "gs" && this.globalData.renderer.ctxFill(C.r), o.restore();
            }
        }, U.prototype.renderShape = function(t, e, s, i) {
            var r, a = e.length - 1, n;
            for(n = t, r = a; r >= 0; r -= 1)e[r].ty === "tr" ? (n = s[r].transform, this.renderShapeTransform(t, n)) : e[r].ty === "sh" || e[r].ty === "el" || e[r].ty === "rc" || e[r].ty === "sr" ? this.renderPath(e[r], s[r]) : e[r].ty === "fl" ? this.renderFill(e[r], s[r], n) : e[r].ty === "st" ? this.renderStroke(e[r], s[r], n) : e[r].ty === "gf" || e[r].ty === "gs" ? this.renderGradientFill(e[r], s[r], n) : e[r].ty === "gr" ? this.renderShape(n, e[r].it, s[r].it) : e[r].ty;
            i && this.drawLayer();
        }, U.prototype.renderStyledShape = function(t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var s = t.trNodes, i = e.paths, r, a, n, l = i._length;
                s.length = 0;
                var o = t.transforms.finalTransform;
                for(n = 0; n < l; n += 1){
                    var m = i.shapes[n];
                    if (m && m.v) {
                        for(a = m._length, r = 1; r < a; r += 1)r === 1 && s.push({
                            t: "m",
                            p: o.applyToPointArray(m.v[0][0], m.v[0][1], 0)
                        }), s.push({
                            t: "c",
                            pts: o.applyToTriplePoints(m.o[r - 1], m.i[r], m.v[r])
                        });
                        a === 1 && s.push({
                            t: "m",
                            p: o.applyToPointArray(m.v[0][0], m.v[0][1], 0)
                        }), m.c && a && (s.push({
                            t: "c",
                            pts: o.applyToTriplePoints(m.o[r - 1], m.i[0], m.v[0])
                        }), s.push({
                            t: "z"
                        }));
                    }
                }
                t.trNodes = s;
            }
        }, U.prototype.renderPath = function(t, e) {
            if (t.hd !== !0 && t._shouldRender) {
                var s, i = e.styledShapes.length;
                for(s = 0; s < i; s += 1)this.renderStyledShape(e.styledShapes[s], e.sh);
            }
        }, U.prototype.renderFill = function(t, e, s) {
            var i = e.style;
            (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + ft(e.c.v[0]) + "," + ft(e.c.v[1]) + "," + ft(e.c.v[2]) + ")"), (e.o._mdf || s._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * s.opacity);
        }, U.prototype.renderGradientFill = function(t, e, s) {
            var i = e.style, r;
            if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
                var a = this.globalData.canvasContext, n = e.s.v, l = e.e.v;
                if (t.t === 1) r = a.createLinearGradient(n[0], n[1], l[0], l[1]);
                else {
                    var o = Math.sqrt(Math.pow(n[0] - l[0], 2) + Math.pow(n[1] - l[1], 2)), m = Math.atan2(l[1] - n[1], l[0] - n[0]), g = e.h.v;
                    g >= 1 ? g = .99 : g <= -1 && (g = -0.99);
                    var C = o * g, f = Math.cos(m + e.a.v) * C + n[0], P = Math.sin(m + e.a.v) * C + n[1];
                    r = a.createRadialGradient(f, P, 0, n[0], n[1], o);
                }
                var k, v = t.g.p, D = e.g.c, y = 1;
                for(k = 0; k < v; k += 1)e.g._hasOpacity && e.g._collapsable && (y = e.g.o[k * 2 + 1]), r.addColorStop(D[k * 4] / 100, "rgba(" + D[k * 4 + 1] + "," + D[k * 4 + 2] + "," + D[k * 4 + 3] + "," + y + ")");
                i.grd = r;
            }
            i.coOp = e.o.v * s.opacity;
        }, U.prototype.renderStroke = function(t, e, s) {
            var i = e.style, r = e.d;
            r && (r._mdf || this._isFirstFrame) && (i.da = r.dashArray, i.do = r.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + ft(e.c.v[0]) + "," + ft(e.c.v[1]) + "," + ft(e.c.v[2]) + ")"), (e.o._mdf || s._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * s.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
        }, U.prototype.destroy = function() {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
        };
        function Le(t, e, s) {
            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            }, this.initElement(t, e, s);
        }
        J([
            Pt,
            Lt,
            zt,
            It,
            St,
            Gt,
            xt
        ], Le), Le.prototype.tHelper = _t("canvas").getContext("2d"), Le.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = Q(t.l ? t.l.length : 0);
            var e = !1;
            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            var s = !1;
            t.sc && (s = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
            var i = this.globalData.fontManager.getFontByName(t.f), r, a, n = t.l, l = this.mHelper;
            this.stroke = s, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
            var o, m, g, C, f, P, k, v, D, y, c = this.data.singleShape, p = t.tr * .001 * t.finalSize, d = 0, x = 0, A = !0, M = 0;
            for(r = 0; r < a; r += 1){
                o = this.globalData.fontManager.getCharData(t.finalText[r], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), m = o && o.data || {}, l.reset(), c && n[r].n && (d = -p, x += t.yOffset, x += A ? 1 : 0, A = !1), f = m.shapes ? m.shapes[0].it : [], k = f.length, l.scale(t.finalSize / 100, t.finalSize / 100), c && this.applyTextPropertiesToMatrix(t, l, n[r].line, d, x), D = Q(k - 1);
                var w = 0;
                for(P = 0; P < k; P += 1)if (f[P].ty === "sh") {
                    for(C = f[P].ks.k.i.length, v = f[P].ks.k, y = [], g = 1; g < C; g += 1)g === 1 && y.push(l.applyToX(v.v[0][0], v.v[0][1], 0), l.applyToY(v.v[0][0], v.v[0][1], 0)), y.push(l.applyToX(v.o[g - 1][0], v.o[g - 1][1], 0), l.applyToY(v.o[g - 1][0], v.o[g - 1][1], 0), l.applyToX(v.i[g][0], v.i[g][1], 0), l.applyToY(v.i[g][0], v.i[g][1], 0), l.applyToX(v.v[g][0], v.v[g][1], 0), l.applyToY(v.v[g][0], v.v[g][1], 0));
                    y.push(l.applyToX(v.o[g - 1][0], v.o[g - 1][1], 0), l.applyToY(v.o[g - 1][0], v.o[g - 1][1], 0), l.applyToX(v.i[0][0], v.i[0][1], 0), l.applyToY(v.i[0][0], v.i[0][1], 0), l.applyToX(v.v[0][0], v.v[0][1], 0), l.applyToY(v.v[0][0], v.v[0][1], 0)), D[w] = y, w += 1;
                }
                c && (d += n[r].l, d += p), this.textSpans[M] ? this.textSpans[M].elem = D : this.textSpans[M] = {
                    elem: D
                }, M += 1;
            }
        }, Le.prototype.renderInnerContent = function() {
            this.validateText();
            var t = this.canvasContext;
            t.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var e, s, i, r, a, n, l = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
            s = o.length;
            var m, g = null, C = null, f = null, P, k, v = this.globalData.renderer;
            for(e = 0; e < s; e += 1)if (!o[e].n) {
                if (m = l[e], m && (v.save(), v.ctxTransform(m.p), v.ctxOpacity(m.o)), this.fill) {
                    for(m && m.fc ? g !== m.fc && (v.ctxFillStyle(m.fc), g = m.fc) : g !== this.values.fill && (g = this.values.fill, v.ctxFillStyle(this.values.fill)), P = this.textSpans[e].elem, r = P.length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)for(k = P[i], n = k.length, this.globalData.canvasContext.moveTo(k[0], k[1]), a = 2; a < n; a += 6)this.globalData.canvasContext.bezierCurveTo(k[a], k[a + 1], k[a + 2], k[a + 3], k[a + 4], k[a + 5]);
                    this.globalData.canvasContext.closePath(), v.ctxFill();
                }
                if (this.stroke) {
                    for(m && m.sw ? f !== m.sw && (f = m.sw, v.ctxLineWidth(m.sw)) : f !== this.values.sWidth && (f = this.values.sWidth, v.ctxLineWidth(this.values.sWidth)), m && m.sc ? C !== m.sc && (C = m.sc, v.ctxStrokeStyle(m.sc)) : C !== this.values.stroke && (C = this.values.stroke, v.ctxStrokeStyle(this.values.stroke)), P = this.textSpans[e].elem, r = P.length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)for(k = P[i], n = k.length, this.globalData.canvasContext.moveTo(k[0], k[1]), a = 2; a < n; a += 6)this.globalData.canvasContext.bezierCurveTo(k[a], k[a + 1], k[a + 2], k[a + 3], k[a + 4], k[a + 5]);
                    this.globalData.canvasContext.closePath(), v.ctxStroke();
                }
                m && this.globalData.renderer.restore();
            }
        };
        function ne(t, e, s) {
            this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, s);
        }
        J([
            Pt,
            Lt,
            zt,
            It,
            St,
            Gt
        ], ne), ne.prototype.initElement = $.prototype.initElement, ne.prototype.prepareFrame = ae.prototype.prepareFrame, ne.prototype.createContent = function() {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = _t("canvas");
                t.width = this.assetData.w, t.height = this.assetData.h;
                var e = t.getContext("2d"), s = this.img.width, i = this.img.height, r = s / i, a = this.assetData.w / this.assetData.h, n, l, o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                r > a && o === "xMidYMid slice" || r < a && o !== "xMidYMid slice" ? (l = i, n = l * a) : (n = s, l = n / a), e.drawImage(this.img, (s - n) / 2, (i - l) / 2, n, l, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
            }
        }, ne.prototype.renderInnerContent = function() {
            this.canvasContext.drawImage(this.img, 0, 0);
        }, ne.prototype.destroy = function() {
            this.img = null;
        };
        function Ie(t, e, s) {
            this.initElement(t, e, s);
        }
        J([
            Pt,
            Lt,
            zt,
            It,
            St,
            Gt
        ], Ie), Ie.prototype.initElement = $.prototype.initElement, Ie.prototype.prepareFrame = ae.prototype.prepareFrame, Ie.prototype.renderInnerContent = function() {
            this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
        };
        function G() {}
        J([
            lt
        ], G), G.prototype.createShape = function(t) {
            return new U(t, this.globalData, this);
        }, G.prototype.createText = function(t) {
            return new Le(t, this.globalData, this);
        }, G.prototype.createImage = function(t) {
            return new ne(t, this.globalData, this);
        }, G.prototype.createSolid = function(t) {
            return new Ie(t, this.globalData, this);
        }, G.prototype.createNull = _s.prototype.createNull, G.prototype.ctxTransform = function(t) {
            t[0] === 1 && t[1] === 0 && t[4] === 0 && t[5] === 1 && t[12] === 0 && t[13] === 0 || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
        }, G.prototype.ctxOpacity = function(t) {
            this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
        }, G.prototype.ctxFillStyle = function(t) {
            this.canvasContext.fillStyle = t;
        }, G.prototype.ctxStrokeStyle = function(t) {
            this.canvasContext.strokeStyle = t;
        }, G.prototype.ctxLineWidth = function(t) {
            this.canvasContext.lineWidth = t;
        }, G.prototype.ctxLineCap = function(t) {
            this.canvasContext.lineCap = t;
        }, G.prototype.ctxLineJoin = function(t) {
            this.canvasContext.lineJoin = t;
        }, G.prototype.ctxMiterLimit = function(t) {
            this.canvasContext.miterLimit = t;
        }, G.prototype.ctxFill = function(t) {
            this.canvasContext.fill(t);
        }, G.prototype.ctxFillRect = function(t, e, s, i) {
            this.canvasContext.fillRect(t, e, s, i);
        }, G.prototype.ctxStroke = function() {
            this.canvasContext.stroke();
        }, G.prototype.reset = function() {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.restore();
                return;
            }
            this.contextData.reset();
        }, G.prototype.save = function() {
            this.canvasContext.save();
        }, G.prototype.restore = function(t) {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.restore();
                return;
            }
            t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t);
        }, G.prototype.configAnimation = function(t) {
            if (this.animationItem.wrapper) {
                this.animationItem.container = _t("canvas");
                var e = this.animationItem.container.style;
                e.width = "100%", e.height = "100%";
                var s = "0px 0px 0px";
                e.transformOrigin = s, e.mozTransformOrigin = s, e.webkitTransformOrigin = s, e["-webkit-transform"] = s, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
            } else this.canvasContext = this.renderConfig.context;
            this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = Q(t.layers.length), this.updateContainerSize();
        }, G.prototype.updateContainerSize = function(t, e) {
            this.reset();
            var s, i;
            t ? (s = t, i = e, this.canvasContext.canvas.width = s, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (s = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (s = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = s * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr);
            var r, a;
            if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
                var n = this.renderConfig.preserveAspectRatio.split(" "), l = n[1] || "meet", o = n[0] || "xMidYMid", m = o.substr(0, 4), g = o.substr(4);
                r = s / i, a = this.transformCanvas.w / this.transformCanvas.h, a > r && l === "meet" || a < r && l === "slice" ? (this.transformCanvas.sx = s / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = s / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), m === "xMid" && (a < r && l === "meet" || a > r && l === "slice") ? this.transformCanvas.tx = (s - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : m === "xMax" && (a < r && l === "meet" || a > r && l === "slice") ? this.transformCanvas.tx = (s - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, g === "YMid" && (a > r && l === "meet" || a < r && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (s / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : g === "YMax" && (a > r && l === "meet" || a < r && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (s / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0;
            } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = s / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
            this.transformCanvas.props = [
                this.transformCanvas.sx,
                0,
                0,
                0,
                0,
                this.transformCanvas.sy,
                0,
                0,
                0,
                0,
                1,
                0,
                this.transformCanvas.tx,
                this.transformCanvas.ty,
                0,
                1
            ], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
        }, G.prototype.destroy = function() {
            this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
            var t, e = this.layers ? this.layers.length : 0;
            for(t = e - 1; t >= 0; t -= 1)this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
        }, G.prototype.renderFrame = function(t, e) {
            if (!(this.renderedFrame === t && this.renderConfig.clearCanvas === !0 && !e || this.destroyed || t === -1)) {
                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                var s, i = this.layers.length;
                for(this.completeLayers || this.checkLayers(t), s = i - 1; s >= 0; s -= 1)(this.completeLayers || this.elements[s]) && this.elements[s].prepareFrame(t - this.layers[s].st);
                if (this.globalData._mdf) {
                    for(this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), s = i - 1; s >= 0; s -= 1)(this.completeLayers || this.elements[s]) && this.elements[s].renderFrame();
                    this.renderConfig.clearCanvas !== !0 && this.restore();
                }
            }
        }, G.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!(e[t] || this.layers[t].ty === 99)) {
                var s = this.createItem(this.layers[t], this, this.globalData);
                e[t] = s, s.initExpressions();
            }
        }, G.prototype.checkPendingElements = function() {
            for(; this.pendingElements.length;){
                var t = this.pendingElements.pop();
                t.checkParenting();
            }
        }, G.prototype.hide = function() {
            this.animationItem.container.style.display = "none";
        }, G.prototype.show = function() {
            this.animationItem.container.style.display = "block";
        };
        function _i() {
            this.opacity = -1, this.transform = at("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
        }
        function ot() {
            this.stack = [], this.cArrPos = 0, this.cTr = new tt;
            var t, e = 15;
            for(t = 0; t < e; t += 1){
                var s = new _i;
                this.stack[t] = s;
            }
            this._length = e, this.nativeContext = null, this.transformMat = new tt, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
        }
        ot.prototype.duplicate = function() {
            var t = this._length * 2, e = 0;
            for(e = this._length; e < t; e += 1)this.stack[e] = new _i;
            this._length = t;
        }, ot.prototype.reset = function() {
            this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
        }, ot.prototype.restore = function(t) {
            this.cArrPos -= 1;
            var e = this.stack[this.cArrPos], s = e.transform, i, r = this.cTr.props;
            for(i = 0; i < 16; i += 1)r[i] = s[i];
            if (t) {
                this.nativeContext.restore();
                var a = this.stack[this.cArrPos + 1];
                this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit;
            }
            this.nativeContext.setTransform(s[0], s[1], s[4], s[5], s[12], s[13]), (t || e.opacity !== -1 && this.currentOpacity !== e.opacity) && (this.nativeContext.globalAlpha = e.opacity, this.currentOpacity = e.opacity), this.currentFillStyle = e.fillStyle, this.currentStrokeStyle = e.strokeStyle, this.currentLineWidth = e.lineWidth, this.currentLineCap = e.lineCap, this.currentLineJoin = e.lineJoin, this.currentMiterLimit = e.miterLimit;
        }, ot.prototype.save = function(t) {
            t && this.nativeContext.save();
            var e = this.cTr.props;
            this._length <= this.cArrPos && this.duplicate();
            var s = this.stack[this.cArrPos], i;
            for(i = 0; i < 16; i += 1)s.transform[i] = e[i];
            this.cArrPos += 1;
            var r = this.stack[this.cArrPos];
            r.opacity = s.opacity, r.fillStyle = s.fillStyle, r.strokeStyle = s.strokeStyle, r.lineWidth = s.lineWidth, r.lineCap = s.lineCap, r.lineJoin = s.lineJoin, r.miterLimit = s.miterLimit;
        }, ot.prototype.setOpacity = function(t) {
            this.stack[this.cArrPos].opacity = t;
        }, ot.prototype.setContext = function(t) {
            this.nativeContext = t;
        }, ot.prototype.fillStyle = function(t) {
            this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t);
        }, ot.prototype.strokeStyle = function(t) {
            this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t);
        }, ot.prototype.lineWidth = function(t) {
            this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t);
        }, ot.prototype.lineCap = function(t) {
            this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t);
        }, ot.prototype.lineJoin = function(t) {
            this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t);
        }, ot.prototype.miterLimit = function(t) {
            this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t);
        }, ot.prototype.transform = function(t) {
            this.transformMat.cloneFromProps(t);
            var e = this.cTr;
            this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
            var s = e.props;
            this.nativeContext.setTransform(s[0], s[1], s[4], s[5], s[12], s[13]);
        }, ot.prototype.opacity = function(t) {
            var e = this.stack[this.cArrPos].opacity;
            e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e);
        }, ot.prototype.fill = function(t) {
            this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t);
        }, ot.prototype.fillRect = function(t, e, s, i) {
            this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, s, i);
        }, ot.prototype.stroke = function() {
            this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
        };
        function ye(t, e, s) {
            this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = Q(this.layers.length), this.initElement(t, e, s), this.tm = t.tm ? L.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            };
        }
        J([
            G,
            Rt,
            zt
        ], ye), ye.prototype.renderInnerContent = function() {
            var t = this.canvasContext;
            t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip();
            var e, s = this.layers.length;
            for(e = s - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
        }, ye.prototype.destroy = function() {
            var t, e = this.layers.length;
            for(t = e - 1; t >= 0; t -= 1)this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null;
        }, ye.prototype.createComp = function(t) {
            return new ye(t, this.globalData, this);
        };
        function Cs(t, e) {
            this.animationItem = t, this.renderConfig = {
                clearCanvas: e && e.clearCanvas !== void 0 ? e.clearCanvas : !0,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || !1,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                className: e && e.className || "",
                id: e && e.id || "",
                runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            }, this.contextData = new ot, this.elements = [], this.pendingElements = [], this.transformMat = new tt, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
        }
        return J([
            G
        ], Cs), Cs.prototype.createComp = function(t) {
            return new ye(t, this.globalData, this);
        }, Vi("canvas", Cs), Ft.registerModifier("tm", Dt), Ft.registerModifier("pb", ke), Ft.registerModifier("rp", Et), Ft.registerModifier("rd", Pe), Ft.registerModifier("zz", De), Ft.registerModifier("op", Ae), K;
    });
}), Ea = wa(); /*! Bundled license information:

lottie-web/build/player/lottie_light_canvas.js:
  (*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   *)
*/ 

},{"./chunk-U2GK2GFR.mjs":"bBhes","./chunk-XNFEUXDS.mjs":"4Lvnj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fNvPp"], null, "parcelRequire8861")

//# sourceMappingURL=lottie_light_canvas-JOJMVDMY-WR7KP7PE.12a27af4.js.map
