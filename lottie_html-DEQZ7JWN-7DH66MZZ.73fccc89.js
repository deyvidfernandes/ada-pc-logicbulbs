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
})({"iYnSD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "19879daf73fccc89";
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

},{}],"cx93v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>yt) //# sourceMappingURL=out.js.map
;
var _chunkU2GK2GFRMjs = require("./chunk-U2GK2GFR.mjs");
var _chunkXNFEUXDSMjs = require("./chunk-XNFEUXDS.mjs");
var ut = (0, _chunkU2GK2GFRMjs.a)((exports, module)=>{
    typeof navigator < "u" && function(t1, e1) {
        typeof exports == "object" && typeof module < "u" ? module.exports = e1() : typeof define == "function" && define.amd ? define(e1) : (t1 = typeof globalThis < "u" ? globalThis : t1 || self, t1.lottie = e1());
    }(exports, function() {
        var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = !1, initialDefaultFrame = -999999, setWebWorker = function(t1) {
            _useWebWorker = !!t1;
        }, getWebWorker = function() {
            return _useWebWorker;
        }, setLocationHref = function(t1) {
            locationHref = t1;
        }, getLocationHref = function() {
            return locationHref;
        };
        function createTag(t1) {
            return document.createElement(t1);
        }
        function extendPrototype(t1, e1) {
            var i1, r1 = t1.length, s1;
            for(i1 = 0; i1 < r1; i1 += 1){
                s1 = t1[i1].prototype;
                for(var a1 in s1)Object.prototype.hasOwnProperty.call(s1, a1) && (e1.prototype[a1] = s1[a1]);
            }
        }
        function getDescriptor(t1, e1) {
            return Object.getOwnPropertyDescriptor(t1, e1);
        }
        function createProxyFunction(t1) {
            function e1() {}
            return e1.prototype = t1, e1;
        }
        var audioControllerFactory = function() {
            function t1(e1) {
                this.audios = [], this.audioFactory = e1, this._volume = 1, this._isMuted = !1;
            }
            return t1.prototype = {
                addAudio: function(e1) {
                    this.audios.push(e1);
                },
                pause: function() {
                    var e1, i1 = this.audios.length;
                    for(e1 = 0; e1 < i1; e1 += 1)this.audios[e1].pause();
                },
                resume: function() {
                    var e1, i1 = this.audios.length;
                    for(e1 = 0; e1 < i1; e1 += 1)this.audios[e1].resume();
                },
                setRate: function(e1) {
                    var i1, r1 = this.audios.length;
                    for(i1 = 0; i1 < r1; i1 += 1)this.audios[i1].setRate(e1);
                },
                createAudio: function(e1) {
                    return this.audioFactory ? this.audioFactory(e1) : window.Howl ? new window.Howl({
                        src: [
                            e1
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
                setAudioFactory: function(e1) {
                    this.audioFactory = e1;
                },
                setVolume: function(e1) {
                    this._volume = e1, this._updateVolume();
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
                    var e1, i1 = this.audios.length;
                    for(e1 = 0; e1 < i1; e1 += 1)this.audios[e1].volume(this._volume * (this._isMuted ? 0 : 1));
                }
            }, function() {
                return new t1;
            };
        }(), createTypedArray = function() {
            function t1(i1, r1) {
                var s1 = 0, a1 = [], n1;
                switch(i1){
                    case "int16":
                    case "uint8c":
                        n1 = 1;
                        break;
                    default:
                        n1 = 1.1;
                        break;
                }
                for(s1 = 0; s1 < r1; s1 += 1)a1.push(n1);
                return a1;
            }
            function e1(i1, r1) {
                return i1 === "float32" ? new Float32Array(r1) : i1 === "int16" ? new Int16Array(r1) : i1 === "uint8c" ? new Uint8ClampedArray(r1) : t1(i1, r1);
            }
            return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e1 : t1;
        }();
        function createSizedArray(t1) {
            return Array.apply(null, {
                length: t1
            });
        }
        function _typeof$6(t1) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function(e1) {
                return typeof e1;
            } : _typeof$6 = function(e1) {
                return e1 && typeof Symbol == "function" && e1.constructor === Symbol && e1 !== Symbol.prototype ? "symbol" : typeof e1;
            }, _typeof$6(t1);
        }
        var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
        (function() {
            var t1 = [
                "abs",
                "acos",
                "acosh",
                "asin",
                "asinh",
                "atan",
                "atanh",
                "atan2",
                "ceil",
                "cbrt",
                "expm1",
                "clz32",
                "cos",
                "cosh",
                "exp",
                "floor",
                "fround",
                "hypot",
                "imul",
                "log",
                "log1p",
                "log2",
                "log10",
                "max",
                "min",
                "pow",
                "random",
                "round",
                "sign",
                "sin",
                "sinh",
                "sqrt",
                "tan",
                "tanh",
                "trunc",
                "E",
                "LN10",
                "LN2",
                "LOG10E",
                "LOG2E",
                "PI",
                "SQRT1_2",
                "SQRT2"
            ], e1, i1 = t1.length;
            for(e1 = 0; e1 < i1; e1 += 1)BMMath[t1[e1]] = Math[t1[e1]];
        })(), BMMath.random = Math.random, BMMath.abs = function(t1) {
            var e1 = _typeof$6(t1);
            if (e1 === "object" && t1.length) {
                var i1 = createSizedArray(t1.length), r1, s1 = t1.length;
                for(r1 = 0; r1 < s1; r1 += 1)i1[r1] = Math.abs(t1[r1]);
                return i1;
            }
            return Math.abs(t1);
        };
        var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519;
        function styleDiv(t1) {
            t1.style.position = "absolute", t1.style.top = 0, t1.style.left = 0, t1.style.display = "block", t1.style.transformOrigin = "0 0", t1.style.webkitTransformOrigin = "0 0", t1.style.backfaceVisibility = "visible", t1.style.webkitBackfaceVisibility = "visible", t1.style.transformStyle = "preserve-3d", t1.style.webkitTransformStyle = "preserve-3d", t1.style.mozTransformStyle = "preserve-3d";
        }
        function BMEnterFrameEvent(t1, e1, i1, r1) {
            this.type = t1, this.currentTime = e1, this.totalTime = i1, this.direction = r1 < 0 ? -1 : 1;
        }
        function BMCompleteEvent(t1, e1) {
            this.type = t1, this.direction = e1 < 0 ? -1 : 1;
        }
        function BMCompleteLoopEvent(t1, e1, i1, r1) {
            this.type = t1, this.currentLoop = i1, this.totalLoops = e1, this.direction = r1 < 0 ? -1 : 1;
        }
        function BMSegmentStartEvent(t1, e1, i1) {
            this.type = t1, this.firstFrame = e1, this.totalFrames = i1;
        }
        function BMDestroyEvent(t1, e1) {
            this.type = t1, this.target = e1;
        }
        function BMRenderFrameErrorEvent(t1, e1) {
            this.type = "renderFrameError", this.nativeError = t1, this.currentTime = e1;
        }
        function BMConfigErrorEvent(t1) {
            this.type = "configError", this.nativeError = t1;
        }
        var createElementID = function() {
            var t1 = 0;
            return function() {
                return t1 += 1, idPrefix$1 + "__lottie_element_" + t1;
            };
        }();
        function HSVtoRGB(t1, e1, i1) {
            var r1, s1, a1, n1, f1, o1, d1, v1;
            switch(n1 = Math.floor(t1 * 6), f1 = t1 * 6 - n1, o1 = i1 * (1 - e1), d1 = i1 * (1 - f1 * e1), v1 = i1 * (1 - (1 - f1) * e1), n1 % 6){
                case 0:
                    r1 = i1, s1 = v1, a1 = o1;
                    break;
                case 1:
                    r1 = d1, s1 = i1, a1 = o1;
                    break;
                case 2:
                    r1 = o1, s1 = i1, a1 = v1;
                    break;
                case 3:
                    r1 = o1, s1 = d1, a1 = i1;
                    break;
                case 4:
                    r1 = v1, s1 = o1, a1 = i1;
                    break;
                case 5:
                    r1 = i1, s1 = o1, a1 = d1;
                    break;
            }
            return [
                r1,
                s1,
                a1
            ];
        }
        function RGBtoHSV(t1, e1, i1) {
            var r1 = Math.max(t1, e1, i1), s1 = Math.min(t1, e1, i1), a1 = r1 - s1, n1, f1 = r1 === 0 ? 0 : a1 / r1, o1 = r1 / 255;
            switch(r1){
                case s1:
                    n1 = 0;
                    break;
                case t1:
                    n1 = e1 - i1 + a1 * (e1 < i1 ? 6 : 0), n1 /= 6 * a1;
                    break;
                case e1:
                    n1 = i1 - t1 + a1 * 2, n1 /= 6 * a1;
                    break;
                case i1:
                    n1 = t1 - e1 + a1 * 4, n1 /= 6 * a1;
                    break;
            }
            return [
                n1,
                f1,
                o1
            ];
        }
        function addSaturationToRGB(t1, e1) {
            var i1 = RGBtoHSV(t1[0] * 255, t1[1] * 255, t1[2] * 255);
            return i1[1] += e1, i1[1] > 1 ? i1[1] = 1 : i1[1] <= 0 && (i1[1] = 0), HSVtoRGB(i1[0], i1[1], i1[2]);
        }
        function addBrightnessToRGB(t1, e1) {
            var i1 = RGBtoHSV(t1[0] * 255, t1[1] * 255, t1[2] * 255);
            return i1[2] += e1, i1[2] > 1 ? i1[2] = 1 : i1[2] < 0 && (i1[2] = 0), HSVtoRGB(i1[0], i1[1], i1[2]);
        }
        function addHueToRGB(t1, e1) {
            var i1 = RGBtoHSV(t1[0] * 255, t1[1] * 255, t1[2] * 255);
            return i1[0] += e1 / 360, i1[0] > 1 ? i1[0] -= 1 : i1[0] < 0 && (i1[0] += 1), HSVtoRGB(i1[0], i1[1], i1[2]);
        }
        var rgbToHex = function() {
            var t1 = [], e1, i1;
            for(e1 = 0; e1 < 256; e1 += 1)i1 = e1.toString(16), t1[e1] = i1.length === 1 ? "0" + i1 : i1;
            return function(r1, s1, a1) {
                return r1 < 0 && (r1 = 0), s1 < 0 && (s1 = 0), a1 < 0 && (a1 = 0), "#" + t1[r1] + t1[s1] + t1[a1];
            };
        }(), setSubframeEnabled = function(t1) {
            subframeEnabled = !!t1;
        }, getSubframeEnabled = function() {
            return subframeEnabled;
        }, setExpressionsPlugin = function(t1) {
            expressionsPlugin = t1;
        }, getExpressionsPlugin = function() {
            return expressionsPlugin;
        }, setExpressionInterfaces = function(t1) {
            expressionsInterfaces = t1;
        }, getExpressionInterfaces = function() {
            return expressionsInterfaces;
        }, setDefaultCurveSegments = function(t1) {
            defaultCurveSegments = t1;
        }, getDefaultCurveSegments = function() {
            return defaultCurveSegments;
        }, setIdPrefix = function(t1) {
            idPrefix$1 = t1;
        };
        function createNS(t1) {
            return document.createElementNS(svgNS, t1);
        }
        function _typeof$5(t1) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function(e1) {
                return typeof e1;
            } : _typeof$5 = function(e1) {
                return e1 && typeof Symbol == "function" && e1.constructor === Symbol && e1 !== Symbol.prototype ? "symbol" : typeof e1;
            }, _typeof$5(t1);
        }
        var dataManager = function() {
            var t1 = 1, e1 = [], i1, r1, s1 = {
                onmessage: function() {},
                postMessage: function(m1) {
                    i1({
                        data: m1
                    });
                }
            }, a1 = {
                postMessage: function(m1) {
                    s1.onmessage({
                        data: m1
                    });
                }
            };
            function n1(m1) {
                if (window.Worker && window.Blob && getWebWorker()) {
                    var b1 = new Blob([
                        "var _workerSelf = self; self.onmessage = ",
                        m1.toString()
                    ], {
                        type: "text/javascript"
                    }), g1 = URL.createObjectURL(b1);
                    return new Worker(g1);
                }
                return i1 = m1, s1;
            }
            function f1() {
                r1 || (r1 = n1(function(m1) {
                    function b1() {
                        function y1(C1, w1) {
                            var x1, _1, c1 = C1.length, S1, F1, T1, N1;
                            for(_1 = 0; _1 < c1; _1 += 1)if (x1 = C1[_1], "ks" in x1 && !x1.completed) {
                                if (x1.completed = !0, x1.hasMask) {
                                    var L1 = x1.masksProperties;
                                    for(F1 = L1.length, S1 = 0; S1 < F1; S1 += 1)if (L1[S1].pt.k.i) u1(L1[S1].pt.k);
                                    else for(N1 = L1[S1].pt.k.length, T1 = 0; T1 < N1; T1 += 1)L1[S1].pt.k[T1].s && u1(L1[S1].pt.k[T1].s[0]), L1[S1].pt.k[T1].e && u1(L1[S1].pt.k[T1].e[0]);
                                }
                                x1.ty === 0 ? (x1.layers = h1(x1.refId, w1), y1(x1.layers, w1)) : x1.ty === 4 ? l1(x1.shapes) : x1.ty === 5 && B1(x1);
                            }
                        }
                        function A1(C1, w1) {
                            if (C1) {
                                var x1 = 0, _1 = C1.length;
                                for(x1 = 0; x1 < _1; x1 += 1)C1[x1].t === 1 && (C1[x1].data.layers = h1(C1[x1].data.refId, w1), y1(C1[x1].data.layers, w1));
                            }
                        }
                        function p1(C1, w1) {
                            for(var x1 = 0, _1 = w1.length; x1 < _1;){
                                if (w1[x1].id === C1) return w1[x1];
                                x1 += 1;
                            }
                            return null;
                        }
                        function h1(C1, w1) {
                            var x1 = p1(C1, w1);
                            return x1 ? x1.layers.__used ? JSON.parse(JSON.stringify(x1.layers)) : (x1.layers.__used = !0, x1.layers) : null;
                        }
                        function l1(C1) {
                            var w1, x1 = C1.length, _1, c1;
                            for(w1 = x1 - 1; w1 >= 0; w1 -= 1)if (C1[w1].ty === "sh") {
                                if (C1[w1].ks.k.i) u1(C1[w1].ks.k);
                                else for(c1 = C1[w1].ks.k.length, _1 = 0; _1 < c1; _1 += 1)C1[w1].ks.k[_1].s && u1(C1[w1].ks.k[_1].s[0]), C1[w1].ks.k[_1].e && u1(C1[w1].ks.k[_1].e[0]);
                            } else C1[w1].ty === "gr" && l1(C1[w1].it);
                        }
                        function u1(C1) {
                            var w1, x1 = C1.i.length;
                            for(w1 = 0; w1 < x1; w1 += 1)C1.i[w1][0] += C1.v[w1][0], C1.i[w1][1] += C1.v[w1][1], C1.o[w1][0] += C1.v[w1][0], C1.o[w1][1] += C1.v[w1][1];
                        }
                        function E1(C1, w1) {
                            var x1 = w1 ? w1.split(".") : [
                                100,
                                100,
                                100
                            ];
                            return C1[0] > x1[0] ? !0 : x1[0] > C1[0] ? !1 : C1[1] > x1[1] ? !0 : x1[1] > C1[1] ? !1 : C1[2] > x1[2] ? !0 : x1[2] > C1[2] ? !1 : null;
                        }
                        var M1 = function() {
                            var C1 = [
                                4,
                                4,
                                14
                            ];
                            function w1(_1) {
                                var c1 = _1.t.d;
                                _1.t.d = {
                                    k: [
                                        {
                                            s: c1,
                                            t: 0
                                        }
                                    ]
                                };
                            }
                            function x1(_1) {
                                var c1, S1 = _1.length;
                                for(c1 = 0; c1 < S1; c1 += 1)_1[c1].ty === 5 && w1(_1[c1]);
                            }
                            return function(_1) {
                                if (E1(C1, _1.v) && (x1(_1.layers), _1.assets)) {
                                    var c1, S1 = _1.assets.length;
                                    for(c1 = 0; c1 < S1; c1 += 1)_1.assets[c1].layers && x1(_1.assets[c1].layers);
                                }
                            };
                        }(), D1 = function() {
                            var C1 = [
                                4,
                                7,
                                99
                            ];
                            return function(w1) {
                                if (w1.chars && !E1(C1, w1.v)) {
                                    var x1, _1 = w1.chars.length;
                                    for(x1 = 0; x1 < _1; x1 += 1){
                                        var c1 = w1.chars[x1];
                                        c1.data && c1.data.shapes && (l1(c1.data.shapes), c1.data.ip = 0, c1.data.op = 99999, c1.data.st = 0, c1.data.sr = 1, c1.data.ks = {
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
                                        }, w1.chars[x1].t || (c1.data.shapes.push({
                                            ty: "no"
                                        }), c1.data.shapes[0].it.push({
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
                        }(), k1 = function() {
                            var C1 = [
                                5,
                                7,
                                15
                            ];
                            function w1(_1) {
                                var c1 = _1.t.p;
                                typeof c1.a == "number" && (c1.a = {
                                    a: 0,
                                    k: c1.a
                                }), typeof c1.p == "number" && (c1.p = {
                                    a: 0,
                                    k: c1.p
                                }), typeof c1.r == "number" && (c1.r = {
                                    a: 0,
                                    k: c1.r
                                });
                            }
                            function x1(_1) {
                                var c1, S1 = _1.length;
                                for(c1 = 0; c1 < S1; c1 += 1)_1[c1].ty === 5 && w1(_1[c1]);
                            }
                            return function(_1) {
                                if (E1(C1, _1.v) && (x1(_1.layers), _1.assets)) {
                                    var c1, S1 = _1.assets.length;
                                    for(c1 = 0; c1 < S1; c1 += 1)_1.assets[c1].layers && x1(_1.assets[c1].layers);
                                }
                            };
                        }(), I1 = function() {
                            var C1 = [
                                4,
                                1,
                                9
                            ];
                            function w1(_1) {
                                var c1, S1 = _1.length, F1, T1;
                                for(c1 = 0; c1 < S1; c1 += 1)if (_1[c1].ty === "gr") w1(_1[c1].it);
                                else if (_1[c1].ty === "fl" || _1[c1].ty === "st") {
                                    if (_1[c1].c.k && _1[c1].c.k[0].i) for(T1 = _1[c1].c.k.length, F1 = 0; F1 < T1; F1 += 1)_1[c1].c.k[F1].s && (_1[c1].c.k[F1].s[0] /= 255, _1[c1].c.k[F1].s[1] /= 255, _1[c1].c.k[F1].s[2] /= 255, _1[c1].c.k[F1].s[3] /= 255), _1[c1].c.k[F1].e && (_1[c1].c.k[F1].e[0] /= 255, _1[c1].c.k[F1].e[1] /= 255, _1[c1].c.k[F1].e[2] /= 255, _1[c1].c.k[F1].e[3] /= 255);
                                    else _1[c1].c.k[0] /= 255, _1[c1].c.k[1] /= 255, _1[c1].c.k[2] /= 255, _1[c1].c.k[3] /= 255;
                                }
                            }
                            function x1(_1) {
                                var c1, S1 = _1.length;
                                for(c1 = 0; c1 < S1; c1 += 1)_1[c1].ty === 4 && w1(_1[c1].shapes);
                            }
                            return function(_1) {
                                if (E1(C1, _1.v) && (x1(_1.layers), _1.assets)) {
                                    var c1, S1 = _1.assets.length;
                                    for(c1 = 0; c1 < S1; c1 += 1)_1.assets[c1].layers && x1(_1.assets[c1].layers);
                                }
                            };
                        }(), R1 = function() {
                            var C1 = [
                                4,
                                4,
                                18
                            ];
                            function w1(_1) {
                                var c1, S1 = _1.length, F1, T1;
                                for(c1 = S1 - 1; c1 >= 0; c1 -= 1)if (_1[c1].ty === "sh") {
                                    if (_1[c1].ks.k.i) _1[c1].ks.k.c = _1[c1].closed;
                                    else for(T1 = _1[c1].ks.k.length, F1 = 0; F1 < T1; F1 += 1)_1[c1].ks.k[F1].s && (_1[c1].ks.k[F1].s[0].c = _1[c1].closed), _1[c1].ks.k[F1].e && (_1[c1].ks.k[F1].e[0].c = _1[c1].closed);
                                } else _1[c1].ty === "gr" && w1(_1[c1].it);
                            }
                            function x1(_1) {
                                var c1, S1, F1 = _1.length, T1, N1, L1, H1;
                                for(S1 = 0; S1 < F1; S1 += 1){
                                    if (c1 = _1[S1], c1.hasMask) {
                                        var O1 = c1.masksProperties;
                                        for(N1 = O1.length, T1 = 0; T1 < N1; T1 += 1)if (O1[T1].pt.k.i) O1[T1].pt.k.c = O1[T1].cl;
                                        else for(H1 = O1[T1].pt.k.length, L1 = 0; L1 < H1; L1 += 1)O1[T1].pt.k[L1].s && (O1[T1].pt.k[L1].s[0].c = O1[T1].cl), O1[T1].pt.k[L1].e && (O1[T1].pt.k[L1].e[0].c = O1[T1].cl);
                                    }
                                    c1.ty === 4 && w1(c1.shapes);
                                }
                            }
                            return function(_1) {
                                if (E1(C1, _1.v) && (x1(_1.layers), _1.assets)) {
                                    var c1, S1 = _1.assets.length;
                                    for(c1 = 0; c1 < S1; c1 += 1)_1.assets[c1].layers && x1(_1.assets[c1].layers);
                                }
                            };
                        }();
                        function V1(C1) {
                            C1.__complete || (I1(C1), M1(C1), D1(C1), k1(C1), R1(C1), y1(C1.layers, C1.assets), A1(C1.chars, C1.assets), C1.__complete = !0);
                        }
                        function B1(C1) {
                            C1.t.a.length === 0 && C1.t.p;
                        }
                        var G1 = {};
                        return G1.completeData = V1, G1.checkColors = I1, G1.checkChars = D1, G1.checkPathProperties = k1, G1.checkShapes = R1, G1.completeLayers = y1, G1;
                    }
                    if (a1.dataManager || (a1.dataManager = b1()), a1.assetLoader || (a1.assetLoader = function() {
                        function y1(p1) {
                            var h1 = p1.getResponseHeader("content-type");
                            return h1 && p1.responseType === "json" && h1.indexOf("json") !== -1 || p1.response && _typeof$5(p1.response) === "object" ? p1.response : p1.response && typeof p1.response == "string" ? JSON.parse(p1.response) : p1.responseText ? JSON.parse(p1.responseText) : null;
                        }
                        function A1(p1, h1, l1, u1) {
                            var E1, M1 = new XMLHttpRequest;
                            try {
                                M1.responseType = "json";
                            } catch  {}
                            M1.onreadystatechange = function() {
                                if (M1.readyState === 4) {
                                    if (M1.status === 200) E1 = y1(M1), l1(E1);
                                    else try {
                                        E1 = y1(M1), l1(E1);
                                    } catch (D1) {
                                        u1 && u1(D1);
                                    }
                                }
                            };
                            try {
                                M1.open([
                                    "G",
                                    "E",
                                    "T"
                                ].join(""), p1, !0);
                            } catch  {
                                M1.open([
                                    "G",
                                    "E",
                                    "T"
                                ].join(""), h1 + "/" + p1, !0);
                            }
                            M1.send();
                        }
                        return {
                            load: A1
                        };
                    }()), m1.data.type === "loadAnimation") a1.assetLoader.load(m1.data.path, m1.data.fullPath, function(y1) {
                        a1.dataManager.completeData(y1), a1.postMessage({
                            id: m1.data.id,
                            payload: y1,
                            status: "success"
                        });
                    }, function() {
                        a1.postMessage({
                            id: m1.data.id,
                            status: "error"
                        });
                    });
                    else if (m1.data.type === "complete") {
                        var g1 = m1.data.animation;
                        a1.dataManager.completeData(g1), a1.postMessage({
                            id: m1.data.id,
                            payload: g1,
                            status: "success"
                        });
                    } else m1.data.type === "loadData" && a1.assetLoader.load(m1.data.path, m1.data.fullPath, function(y1) {
                        a1.postMessage({
                            id: m1.data.id,
                            payload: y1,
                            status: "success"
                        });
                    }, function() {
                        a1.postMessage({
                            id: m1.data.id,
                            status: "error"
                        });
                    });
                }), r1.onmessage = function(m1) {
                    var b1 = m1.data, g1 = b1.id, y1 = e1[g1];
                    e1[g1] = null, b1.status === "success" ? y1.onComplete(b1.payload) : y1.onError && y1.onError();
                });
            }
            function o1(m1, b1) {
                t1 += 1;
                var g1 = "processId_" + t1;
                return e1[g1] = {
                    onComplete: m1,
                    onError: b1
                }, g1;
            }
            function d1(m1, b1, g1) {
                f1();
                var y1 = o1(b1, g1);
                r1.postMessage({
                    type: "loadAnimation",
                    path: m1,
                    fullPath: window.location.origin + window.location.pathname,
                    id: y1
                });
            }
            function v1(m1, b1, g1) {
                f1();
                var y1 = o1(b1, g1);
                r1.postMessage({
                    type: "loadData",
                    path: m1,
                    fullPath: window.location.origin + window.location.pathname,
                    id: y1
                });
            }
            function P1(m1, b1, g1) {
                f1();
                var y1 = o1(b1, g1);
                r1.postMessage({
                    type: "complete",
                    animation: m1,
                    id: y1
                });
            }
            return {
                loadAnimation: d1,
                loadData: v1,
                completeAnimation: P1
            };
        }(), ImagePreloader = function() {
            var t1 = function() {
                var p1 = createTag("canvas");
                p1.width = 1, p1.height = 1;
                var h1 = p1.getContext("2d");
                return h1.fillStyle = "rgba(0,0,0,0)", h1.fillRect(0, 0, 1, 1), p1;
            }();
            function e1() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function i1() {
                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function r1(p1, h1, l1) {
                var u1 = "";
                if (p1.e) u1 = p1.p;
                else if (h1) {
                    var E1 = p1.p;
                    E1.indexOf("images/") !== -1 && (E1 = E1.split("/")[1]), u1 = h1 + E1;
                } else u1 = l1, u1 += p1.u ? p1.u : "", u1 += p1.p;
                return u1;
            }
            function s1(p1) {
                var h1 = 0, l1 = setInterval((function() {
                    var u1 = p1.getBBox();
                    (u1.width || h1 > 500) && (this._imageLoaded(), clearInterval(l1)), h1 += 1;
                }).bind(this), 50);
            }
            function a1(p1) {
                var h1 = r1(p1, this.assetsPath, this.path), l1 = createNS("image");
                isSafari ? this.testImageLoaded(l1) : l1.addEventListener("load", this._imageLoaded, !1), l1.addEventListener("error", (function() {
                    u1.img = t1, this._imageLoaded();
                }).bind(this), !1), l1.setAttributeNS("http://www.w3.org/1999/xlink", "href", h1), this._elementHelper.append ? this._elementHelper.append(l1) : this._elementHelper.appendChild(l1);
                var u1 = {
                    img: l1,
                    assetData: p1
                };
                return u1;
            }
            function n1(p1) {
                var h1 = r1(p1, this.assetsPath, this.path), l1 = createTag("img");
                l1.crossOrigin = "anonymous", l1.addEventListener("load", this._imageLoaded, !1), l1.addEventListener("error", (function() {
                    u1.img = t1, this._imageLoaded();
                }).bind(this), !1), l1.src = h1;
                var u1 = {
                    img: l1,
                    assetData: p1
                };
                return u1;
            }
            function f1(p1) {
                var h1 = {
                    assetData: p1
                }, l1 = r1(p1, this.assetsPath, this.path);
                return dataManager.loadData(l1, (function(u1) {
                    h1.img = u1, this._footageLoaded();
                }).bind(this), (function() {
                    h1.img = {}, this._footageLoaded();
                }).bind(this)), h1;
            }
            function o1(p1, h1) {
                this.imagesLoadedCb = h1;
                var l1, u1 = p1.length;
                for(l1 = 0; l1 < u1; l1 += 1)p1[l1].layers || (!p1[l1].t || p1[l1].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(p1[l1]))) : p1[l1].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(p1[l1]))));
            }
            function d1(p1) {
                this.path = p1 || "";
            }
            function v1(p1) {
                this.assetsPath = p1 || "";
            }
            function P1(p1) {
                for(var h1 = 0, l1 = this.images.length; h1 < l1;){
                    if (this.images[h1].assetData === p1) return this.images[h1].img;
                    h1 += 1;
                }
                return null;
            }
            function m1() {
                this.imagesLoadedCb = null, this.images.length = 0;
            }
            function b1() {
                return this.totalImages === this.loadedAssets;
            }
            function g1() {
                return this.totalFootages === this.loadedFootagesCount;
            }
            function y1(p1, h1) {
                p1 === "svg" ? (this._elementHelper = h1, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
            }
            function A1() {
                this._imageLoaded = e1.bind(this), this._footageLoaded = i1.bind(this), this.testImageLoaded = s1.bind(this), this.createFootageData = f1.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
            }
            return A1.prototype = {
                loadAssets: o1,
                setAssetsPath: v1,
                setPath: d1,
                loadedImages: b1,
                loadedFootages: g1,
                destroy: m1,
                getAsset: P1,
                createImgData: n1,
                createImageData: a1,
                imageLoaded: e1,
                footageLoaded: i1,
                setCacheType: y1
            }, A1;
        }();
        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function(t1, e1) {
                if (this._cbs[t1]) for(var i1 = this._cbs[t1], r1 = 0; r1 < i1.length; r1 += 1)i1[r1](e1);
            },
            addEventListener: function(t1, e1) {
                return this._cbs[t1] || (this._cbs[t1] = []), this._cbs[t1].push(e1), (function() {
                    this.removeEventListener(t1, e1);
                }).bind(this);
            },
            removeEventListener: function(t1, e1) {
                if (!e1) this._cbs[t1] = null;
                else if (this._cbs[t1]) {
                    for(var i1 = 0, r1 = this._cbs[t1].length; i1 < r1;)this._cbs[t1][i1] === e1 && (this._cbs[t1].splice(i1, 1), i1 -= 1, r1 -= 1), i1 += 1;
                    this._cbs[t1].length || (this._cbs[t1] = null);
                }
            }
        };
        var markerParser = function() {
            function t1(e1) {
                for(var i1 = e1.split(`\r
`), r1 = {}, s1, a1 = 0, n1 = 0; n1 < i1.length; n1 += 1)s1 = i1[n1].split(":"), s1.length === 2 && (r1[s1[0]] = s1[1].trim(), a1 += 1);
                if (a1 === 0) throw new Error;
                return r1;
            }
            return function(e1) {
                for(var i1 = [], r1 = 0; r1 < e1.length; r1 += 1){
                    var s1 = e1[r1], a1 = {
                        time: s1.tm,
                        duration: s1.dr
                    };
                    try {
                        a1.payload = JSON.parse(e1[r1].cm);
                    } catch  {
                        try {
                            a1.payload = t1(e1[r1].cm);
                        } catch  {
                            a1.payload = {
                                name: e1[r1].cm
                            };
                        }
                    }
                    i1.push(a1);
                }
                return i1;
            };
        }(), ProjectInterface = function() {
            function t1(e1) {
                this.compositions.push(e1);
            }
            return function() {
                function e1(i1) {
                    for(var r1 = 0, s1 = this.compositions.length; r1 < s1;){
                        if (this.compositions[r1].data && this.compositions[r1].data.nm === i1) return this.compositions[r1].prepareFrame && this.compositions[r1].data.xt && this.compositions[r1].prepareFrame(this.currentFrame), this.compositions[r1].compInterface;
                        r1 += 1;
                    }
                    return null;
                }
                return e1.compositions = [], e1.currentFrame = 0, e1.registerComposition = t1, e1;
            };
        }(), renderers = {}, registerRenderer = function(t1, e1) {
            renderers[t1] = e1;
        };
        function getRenderer(t1) {
            return renderers[t1];
        }
        function getRegisteredRenderer() {
            if (renderers.canvas) return "canvas";
            for(var t1 in renderers)if (renderers[t1]) return t1;
            return "";
        }
        function _typeof$4(t1) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function(e1) {
                return typeof e1;
            } : _typeof$4 = function(e1) {
                return e1 && typeof Symbol == "function" && e1.constructor === Symbol && e1 !== Symbol.prototype ? "symbol" : typeof e1;
            }, _typeof$4(t1);
        }
        var AnimationItem = function() {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin();
        };
        extendPrototype([
            BaseEvent
        ], AnimationItem), AnimationItem.prototype.setParams = function(t1) {
            (t1.wrapper || t1.container) && (this.wrapper = t1.wrapper || t1.container);
            var e1 = "svg";
            t1.animType ? e1 = t1.animType : t1.renderer && (e1 = t1.renderer);
            var i1 = getRenderer(e1);
            this.renderer = new i1(this, t1.rendererSettings), this.imagePreloader.setCacheType(e1, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e1, t1.loop === "" || t1.loop === null || t1.loop === void 0 || t1.loop === !0 ? this.loop = !0 : t1.loop === !1 ? this.loop = !1 : this.loop = parseInt(t1.loop, 10), this.autoplay = "autoplay" in t1 ? t1.autoplay : !0, this.name = t1.name ? t1.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t1, "autoloadSegments") ? t1.autoloadSegments : !0, this.assetsPath = t1.assetsPath, this.initialSegment = t1.initialSegment, t1.audioFactory && this.audioController.setAudioFactory(t1.audioFactory), t1.animationData ? this.setupAnimation(t1.animationData) : t1.path && (t1.path.lastIndexOf("\\") !== -1 ? this.path = t1.path.substr(0, t1.path.lastIndexOf("\\") + 1) : this.path = t1.path.substr(0, t1.path.lastIndexOf("/") + 1), this.fileName = t1.path.substr(t1.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t1.path, this.configAnimation, this.onSetupError));
        }, AnimationItem.prototype.onSetupError = function() {
            this.trigger("data_failed");
        }, AnimationItem.prototype.setupAnimation = function(t1) {
            dataManager.completeAnimation(t1, this.configAnimation);
        }, AnimationItem.prototype.setData = function(t1, e1) {
            e1 && _typeof$4(e1) !== "object" && (e1 = JSON.parse(e1));
            var i1 = {
                wrapper: t1,
                animationData: e1
            }, r1 = t1.attributes;
            i1.path = r1.getNamedItem("data-animation-path") ? r1.getNamedItem("data-animation-path").value : r1.getNamedItem("data-bm-path") ? r1.getNamedItem("data-bm-path").value : r1.getNamedItem("bm-path") ? r1.getNamedItem("bm-path").value : "", i1.animType = r1.getNamedItem("data-anim-type") ? r1.getNamedItem("data-anim-type").value : r1.getNamedItem("data-bm-type") ? r1.getNamedItem("data-bm-type").value : r1.getNamedItem("bm-type") ? r1.getNamedItem("bm-type").value : r1.getNamedItem("data-bm-renderer") ? r1.getNamedItem("data-bm-renderer").value : r1.getNamedItem("bm-renderer") ? r1.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
            var s1 = r1.getNamedItem("data-anim-loop") ? r1.getNamedItem("data-anim-loop").value : r1.getNamedItem("data-bm-loop") ? r1.getNamedItem("data-bm-loop").value : r1.getNamedItem("bm-loop") ? r1.getNamedItem("bm-loop").value : "";
            s1 === "false" ? i1.loop = !1 : s1 === "true" ? i1.loop = !0 : s1 !== "" && (i1.loop = parseInt(s1, 10));
            var a1 = r1.getNamedItem("data-anim-autoplay") ? r1.getNamedItem("data-anim-autoplay").value : r1.getNamedItem("data-bm-autoplay") ? r1.getNamedItem("data-bm-autoplay").value : r1.getNamedItem("bm-autoplay") ? r1.getNamedItem("bm-autoplay").value : !0;
            i1.autoplay = a1 !== "false", i1.name = r1.getNamedItem("data-name") ? r1.getNamedItem("data-name").value : r1.getNamedItem("data-bm-name") ? r1.getNamedItem("data-bm-name").value : r1.getNamedItem("bm-name") ? r1.getNamedItem("bm-name").value : "";
            var n1 = r1.getNamedItem("data-anim-prerender") ? r1.getNamedItem("data-anim-prerender").value : r1.getNamedItem("data-bm-prerender") ? r1.getNamedItem("data-bm-prerender").value : r1.getNamedItem("bm-prerender") ? r1.getNamedItem("bm-prerender").value : "";
            n1 === "false" && (i1.prerender = !1), i1.path ? this.setParams(i1) : this.trigger("destroy");
        }, AnimationItem.prototype.includeLayers = function(t1) {
            t1.op > this.animationData.op && (this.animationData.op = t1.op, this.totalFrames = Math.floor(t1.op - this.animationData.ip));
            var e1 = this.animationData.layers, i1, r1 = e1.length, s1 = t1.layers, a1, n1 = s1.length;
            for(a1 = 0; a1 < n1; a1 += 1)for(i1 = 0; i1 < r1;){
                if (e1[i1].id === s1[a1].id) {
                    e1[i1] = s1[a1];
                    break;
                }
                i1 += 1;
            }
            if ((t1.chars || t1.fonts) && (this.renderer.globalData.fontManager.addChars(t1.chars), this.renderer.globalData.fontManager.addFonts(t1.fonts, this.renderer.globalData.defs)), t1.assets) for(r1 = t1.assets.length, i1 = 0; i1 < r1; i1 += 1)this.animationData.assets.push(t1.assets[i1]);
            this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
        }, AnimationItem.prototype.onSegmentComplete = function(t1) {
            this.animationData = t1;
            var e1 = getExpressionsPlugin();
            e1 && e1.initExpressions(this), this.loadNextSegment();
        }, AnimationItem.prototype.loadNextSegment = function() {
            var t1 = this.animationData.segments;
            if (!t1 || t1.length === 0 || !this.autoloadSegments) {
                this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                return;
            }
            var e1 = t1.shift();
            this.timeCompleted = e1.time * this.frameRate;
            var i1 = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, dataManager.loadData(i1, this.includeLayers.bind(this), (function() {
                this.trigger("data_failed");
            }).bind(this));
        }, AnimationItem.prototype.loadSegments = function() {
            var t1 = this.animationData.segments;
            t1 || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
        }, AnimationItem.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"), this.checkLoaded();
        }, AnimationItem.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
        }, AnimationItem.prototype.configAnimation = function(t1) {
            if (this.renderer) try {
                this.animationData = t1, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t1), t1.assets || (t1.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t1.assets), this.markers = markerParser(t1.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
            } catch (e1) {
                this.triggerConfigError(e1);
            }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
        }, AnimationItem.prototype.checkLoaded = function() {
            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                this.isLoaded = !0;
                var t1 = getExpressionsPlugin();
                t1 && t1.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
                    this.trigger("DOMLoaded");
                }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
            }
        }, AnimationItem.prototype.resize = function(t1, e1) {
            var i1 = typeof t1 == "number" ? t1 : void 0, r1 = typeof e1 == "number" ? e1 : void 0;
            this.renderer.updateContainerSize(i1, r1);
        }, AnimationItem.prototype.setSubframe = function(t1) {
            this.isSubframeEnabled = !!t1;
        }, AnimationItem.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
        }, AnimationItem.prototype.renderFrame = function() {
            if (!(this.isLoaded === !1 || !this.renderer)) try {
                this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
            } catch (t1) {
                this.triggerRenderFrameError(t1);
            }
        }, AnimationItem.prototype.play = function(t1) {
            t1 && this.name !== t1 || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
        }, AnimationItem.prototype.pause = function(t1) {
            t1 && this.name !== t1 || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
        }, AnimationItem.prototype.togglePause = function(t1) {
            t1 && this.name !== t1 || (this.isPaused === !0 ? this.play() : this.pause());
        }, AnimationItem.prototype.stop = function(t1) {
            t1 && this.name !== t1 || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
        }, AnimationItem.prototype.getMarkerData = function(t1) {
            for(var e1, i1 = 0; i1 < this.markers.length; i1 += 1)if (e1 = this.markers[i1], e1.payload && e1.payload.name === t1) return e1;
            return null;
        }, AnimationItem.prototype.goToAndStop = function(t1, e1, i1) {
            if (!(i1 && this.name !== i1)) {
                var r1 = Number(t1);
                if (isNaN(r1)) {
                    var s1 = this.getMarkerData(t1);
                    s1 && this.goToAndStop(s1.time, !0);
                } else e1 ? this.setCurrentRawFrameValue(t1) : this.setCurrentRawFrameValue(t1 * this.frameModifier);
                this.pause();
            }
        }, AnimationItem.prototype.goToAndPlay = function(t1, e1, i1) {
            if (!(i1 && this.name !== i1)) {
                var r1 = Number(t1);
                if (isNaN(r1)) {
                    var s1 = this.getMarkerData(t1);
                    s1 && (s1.duration ? this.playSegments([
                        s1.time,
                        s1.time + s1.duration
                    ], !0) : this.goToAndStop(s1.time, !0));
                } else this.goToAndStop(r1, e1, i1);
                this.play();
            }
        }, AnimationItem.prototype.advanceTime = function(t1) {
            if (!(this.isPaused === !0 || this.isLoaded === !1)) {
                var e1 = this.currentRawFrame + t1 * this.frameModifier, i1 = !1;
                e1 >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e1 > this.totalFrames ? e1 % this.totalFrames : 0) || (i1 = !0, e1 = this.totalFrames - 1) : e1 >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e1 % this.totalFrames) || (this.setCurrentRawFrameValue(e1 % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e1) : e1 < 0 ? this.checkSegments(e1 % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e1 % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (i1 = !0, e1 = 0)) : this.setCurrentRawFrameValue(e1), i1 && (this.setCurrentRawFrameValue(e1), this.pause(), this.trigger("complete"));
            }
        }, AnimationItem.prototype.adjustSegment = function(t1, e1) {
            this.playCount = 0, t1[1] < t1[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t1[0] - t1[1], this.timeCompleted = this.totalFrames, this.firstFrame = t1[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e1)) : t1[1] > t1[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t1[1] - t1[0], this.timeCompleted = this.totalFrames, this.firstFrame = t1[0], this.setCurrentRawFrameValue(.001 + e1)), this.trigger("segmentStart");
        }, AnimationItem.prototype.setSegment = function(t1, e1) {
            var i1 = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t1 ? i1 = t1 : this.currentRawFrame + this.firstFrame > e1 && (i1 = e1 - t1)), this.firstFrame = t1, this.totalFrames = e1 - t1, this.timeCompleted = this.totalFrames, i1 !== -1 && this.goToAndStop(i1, !0);
        }, AnimationItem.prototype.playSegments = function(t1, e1) {
            if (e1 && (this.segments.length = 0), _typeof$4(t1[0]) === "object") {
                var i1, r1 = t1.length;
                for(i1 = 0; i1 < r1; i1 += 1)this.segments.push(t1[i1]);
            } else this.segments.push(t1);
            this.segments.length && e1 && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
        }, AnimationItem.prototype.resetSegments = function(t1) {
            this.segments.length = 0, this.segments.push([
                this.animationData.ip,
                this.animationData.op
            ]), t1 && this.checkSegments(0);
        }, AnimationItem.prototype.checkSegments = function(t1) {
            return this.segments.length ? (this.adjustSegment(this.segments.shift(), t1), !0) : !1;
        }, AnimationItem.prototype.destroy = function(t1) {
            t1 && this.name !== t1 || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t1) {
            this.currentRawFrame = t1, this.gotoFrame();
        }, AnimationItem.prototype.setSpeed = function(t1) {
            this.playSpeed = t1, this.updaFrameModifier();
        }, AnimationItem.prototype.setDirection = function(t1) {
            this.playDirection = t1 < 0 ? -1 : 1, this.updaFrameModifier();
        }, AnimationItem.prototype.setLoop = function(t1) {
            this.loop = t1;
        }, AnimationItem.prototype.setVolume = function(t1, e1) {
            e1 && this.name !== e1 || this.audioController.setVolume(t1);
        }, AnimationItem.prototype.getVolume = function() {
            return this.audioController.getVolume();
        }, AnimationItem.prototype.mute = function(t1) {
            t1 && this.name !== t1 || this.audioController.mute();
        }, AnimationItem.prototype.unmute = function(t1) {
            t1 && this.name !== t1 || this.audioController.unmute();
        }, AnimationItem.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
        }, AnimationItem.prototype.getPath = function() {
            return this.path;
        }, AnimationItem.prototype.getAssetsPath = function(t1) {
            var e1 = "";
            if (t1.e) e1 = t1.p;
            else if (this.assetsPath) {
                var i1 = t1.p;
                i1.indexOf("images/") !== -1 && (i1 = i1.split("/")[1]), e1 = this.assetsPath + i1;
            } else e1 = this.path, e1 += t1.u ? t1.u : "", e1 += t1.p;
            return e1;
        }, AnimationItem.prototype.getAssetData = function(t1) {
            for(var e1 = 0, i1 = this.assets.length; e1 < i1;){
                if (t1 === this.assets[e1].id) return this.assets[e1];
                e1 += 1;
            }
            return null;
        }, AnimationItem.prototype.hide = function() {
            this.renderer.hide();
        }, AnimationItem.prototype.show = function() {
            this.renderer.show();
        }, AnimationItem.prototype.getDuration = function(t1) {
            return t1 ? this.totalFrames : this.totalFrames / this.frameRate;
        }, AnimationItem.prototype.updateDocumentData = function(t1, e1, i1) {
            try {
                var r1 = this.renderer.getElementByPath(t1);
                r1.updateDocumentData(e1, i1);
            } catch  {}
        }, AnimationItem.prototype.trigger = function(t1) {
            if (this._cbs && this._cbs[t1]) switch(t1){
                case "enterFrame":
                    this.triggerEvent(t1, new BMEnterFrameEvent(t1, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "drawnFrame":
                    this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t1, this.drawnFrameEvent);
                    break;
                case "loopComplete":
                    this.triggerEvent(t1, new BMCompleteLoopEvent(t1, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t1, new BMCompleteEvent(t1, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t1, new BMSegmentStartEvent(t1, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t1, new BMDestroyEvent(t1, this));
                    break;
                default:
                    this.triggerEvent(t1);
            }
            t1 === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t1, this.currentFrame, this.totalFrames, this.frameMult)), t1 === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t1, this.loop, this.playCount, this.frameMult)), t1 === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t1, this.frameMult)), t1 === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t1, this.firstFrame, this.totalFrames)), t1 === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t1, this));
        }, AnimationItem.prototype.triggerRenderFrameError = function(t1) {
            var e1 = new BMRenderFrameErrorEvent(t1, this.currentFrame);
            this.triggerEvent("error", e1), this.onError && this.onError.call(this, e1);
        }, AnimationItem.prototype.triggerConfigError = function(t1) {
            var e1 = new BMConfigErrorEvent(t1, this.currentFrame);
            this.triggerEvent("error", e1), this.onError && this.onError.call(this, e1);
        };
        var animationManager = function() {
            var t1 = {}, e1 = [], i1 = 0, r1 = 0, s1 = 0, a1 = !0, n1 = !1;
            function f1(x1) {
                for(var _1 = 0, c1 = x1.target; _1 < r1;)e1[_1].animation === c1 && (e1.splice(_1, 1), _1 -= 1, r1 -= 1, c1.isPaused || P1()), _1 += 1;
            }
            function o1(x1, _1) {
                if (!x1) return null;
                for(var c1 = 0; c1 < r1;){
                    if (e1[c1].elem === x1 && e1[c1].elem !== null) return e1[c1].animation;
                    c1 += 1;
                }
                var S1 = new AnimationItem;
                return m1(S1, x1), S1.setData(x1, _1), S1;
            }
            function d1() {
                var x1, _1 = e1.length, c1 = [];
                for(x1 = 0; x1 < _1; x1 += 1)c1.push(e1[x1].animation);
                return c1;
            }
            function v1() {
                s1 += 1, R1();
            }
            function P1() {
                s1 -= 1;
            }
            function m1(x1, _1) {
                x1.addEventListener("destroy", f1), x1.addEventListener("_active", v1), x1.addEventListener("_idle", P1), e1.push({
                    elem: _1,
                    animation: x1
                }), r1 += 1;
            }
            function b1(x1) {
                var _1 = new AnimationItem;
                return m1(_1, null), _1.setParams(x1), _1;
            }
            function g1(x1, _1) {
                var c1;
                for(c1 = 0; c1 < r1; c1 += 1)e1[c1].animation.setSpeed(x1, _1);
            }
            function y1(x1, _1) {
                var c1;
                for(c1 = 0; c1 < r1; c1 += 1)e1[c1].animation.setDirection(x1, _1);
            }
            function A1(x1) {
                var _1;
                for(_1 = 0; _1 < r1; _1 += 1)e1[_1].animation.play(x1);
            }
            function p1(x1) {
                var _1 = x1 - i1, c1;
                for(c1 = 0; c1 < r1; c1 += 1)e1[c1].animation.advanceTime(_1);
                i1 = x1, s1 && !n1 ? window.requestAnimationFrame(p1) : a1 = !0;
            }
            function h1(x1) {
                i1 = x1, window.requestAnimationFrame(p1);
            }
            function l1(x1) {
                var _1;
                for(_1 = 0; _1 < r1; _1 += 1)e1[_1].animation.pause(x1);
            }
            function u1(x1, _1, c1) {
                var S1;
                for(S1 = 0; S1 < r1; S1 += 1)e1[S1].animation.goToAndStop(x1, _1, c1);
            }
            function E1(x1) {
                var _1;
                for(_1 = 0; _1 < r1; _1 += 1)e1[_1].animation.stop(x1);
            }
            function M1(x1) {
                var _1;
                for(_1 = 0; _1 < r1; _1 += 1)e1[_1].animation.togglePause(x1);
            }
            function D1(x1) {
                var _1;
                for(_1 = r1 - 1; _1 >= 0; _1 -= 1)e1[_1].animation.destroy(x1);
            }
            function k1(x1, _1, c1) {
                var S1 = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), F1, T1 = S1.length;
                for(F1 = 0; F1 < T1; F1 += 1)c1 && S1[F1].setAttribute("data-bm-type", c1), o1(S1[F1], x1);
                if (_1 && T1 === 0) {
                    c1 || (c1 = "svg");
                    var N1 = document.getElementsByTagName("body")[0];
                    N1.innerText = "";
                    var L1 = createTag("div");
                    L1.style.width = "100%", L1.style.height = "100%", L1.setAttribute("data-bm-type", c1), N1.appendChild(L1), o1(L1, x1);
                }
            }
            function I1() {
                var x1;
                for(x1 = 0; x1 < r1; x1 += 1)e1[x1].animation.resize();
            }
            function R1() {
                !n1 && s1 && a1 && (window.requestAnimationFrame(h1), a1 = !1);
            }
            function V1() {
                n1 = !0;
            }
            function B1() {
                n1 = !1, R1();
            }
            function G1(x1, _1) {
                var c1;
                for(c1 = 0; c1 < r1; c1 += 1)e1[c1].animation.setVolume(x1, _1);
            }
            function C1(x1) {
                var _1;
                for(_1 = 0; _1 < r1; _1 += 1)e1[_1].animation.mute(x1);
            }
            function w1(x1) {
                var _1;
                for(_1 = 0; _1 < r1; _1 += 1)e1[_1].animation.unmute(x1);
            }
            return t1.registerAnimation = o1, t1.loadAnimation = b1, t1.setSpeed = g1, t1.setDirection = y1, t1.play = A1, t1.pause = l1, t1.stop = E1, t1.togglePause = M1, t1.searchAnimations = k1, t1.resize = I1, t1.goToAndStop = u1, t1.destroy = D1, t1.freeze = V1, t1.unfreeze = B1, t1.setVolume = G1, t1.mute = C1, t1.unmute = w1, t1.getRegisteredAnimations = d1, t1;
        }(), BezierFactory = function() {
            var t1 = {};
            t1.getBezierEasing = i1;
            var e1 = {};
            function i1(h1, l1, u1, E1, M1) {
                var D1 = M1 || ("bez_" + h1 + "_" + l1 + "_" + u1 + "_" + E1).replace(/\./g, "p");
                if (e1[D1]) return e1[D1];
                var k1 = new p1([
                    h1,
                    l1,
                    u1,
                    E1
                ]);
                return e1[D1] = k1, k1;
            }
            var r1 = 4, s1 = .001, a1 = 1e-7, n1 = 10, f1 = 11, o1 = 1 / (f1 - 1), d1 = typeof Float32Array == "function";
            function v1(h1, l1) {
                return 1 - 3 * l1 + 3 * h1;
            }
            function P1(h1, l1) {
                return 3 * l1 - 6 * h1;
            }
            function m1(h1) {
                return 3 * h1;
            }
            function b1(h1, l1, u1) {
                return ((v1(l1, u1) * h1 + P1(l1, u1)) * h1 + m1(l1)) * h1;
            }
            function g1(h1, l1, u1) {
                return 3 * v1(l1, u1) * h1 * h1 + 2 * P1(l1, u1) * h1 + m1(l1);
            }
            function y1(h1, l1, u1, E1, M1) {
                var D1, k1, I1 = 0;
                do k1 = l1 + (u1 - l1) / 2, D1 = b1(k1, E1, M1) - h1, D1 > 0 ? u1 = k1 : l1 = k1;
                while (Math.abs(D1) > a1 && ++I1 < n1);
                return k1;
            }
            function A1(h1, l1, u1, E1) {
                for(var M1 = 0; M1 < r1; ++M1){
                    var D1 = g1(l1, u1, E1);
                    if (D1 === 0) return l1;
                    var k1 = b1(l1, u1, E1) - h1;
                    l1 -= k1 / D1;
                }
                return l1;
            }
            function p1(h1) {
                this._p = h1, this._mSampleValues = d1 ? new Float32Array(f1) : new Array(f1), this._precomputed = !1, this.get = this.get.bind(this);
            }
            return p1.prototype = {
                get: function(h1) {
                    var l1 = this._p[0], u1 = this._p[1], E1 = this._p[2], M1 = this._p[3];
                    return this._precomputed || this._precompute(), l1 === u1 && E1 === M1 ? h1 : h1 === 0 ? 0 : h1 === 1 ? 1 : b1(this._getTForX(h1), u1, M1);
                },
                _precompute: function() {
                    var h1 = this._p[0], l1 = this._p[1], u1 = this._p[2], E1 = this._p[3];
                    this._precomputed = !0, (h1 !== l1 || u1 !== E1) && this._calcSampleValues();
                },
                _calcSampleValues: function() {
                    for(var h1 = this._p[0], l1 = this._p[2], u1 = 0; u1 < f1; ++u1)this._mSampleValues[u1] = b1(u1 * o1, h1, l1);
                },
                _getTForX: function(h1) {
                    for(var l1 = this._p[0], u1 = this._p[2], E1 = this._mSampleValues, M1 = 0, D1 = 1, k1 = f1 - 1; D1 !== k1 && E1[D1] <= h1; ++D1)M1 += o1;
                    --D1;
                    var I1 = (h1 - E1[D1]) / (E1[D1 + 1] - E1[D1]), R1 = M1 + I1 * o1, V1 = g1(R1, l1, u1);
                    return V1 >= s1 ? A1(h1, R1, l1, u1) : V1 === 0 ? R1 : y1(h1, M1, M1 + o1, l1, u1);
                }
            }, t1;
        }(), pooling = function() {
            function t1(e1) {
                return e1.concat(createSizedArray(e1.length));
            }
            return {
                double: t1
            };
        }(), poolFactory = function() {
            return function(t1, e1, i1) {
                var r1 = 0, s1 = t1, a1 = createSizedArray(s1), n1 = {
                    newElement: f1,
                    release: o1
                };
                function f1() {
                    var d1;
                    return r1 ? (r1 -= 1, d1 = a1[r1]) : d1 = e1(), d1;
                }
                function o1(d1) {
                    r1 === s1 && (a1 = pooling.double(a1), s1 *= 2), i1 && i1(d1), a1[r1] = d1, r1 += 1;
                }
                return n1;
            };
        }(), bezierLengthPool = function() {
            function t1() {
                return {
                    addedLength: 0,
                    percents: createTypedArray("float32", getDefaultCurveSegments()),
                    lengths: createTypedArray("float32", getDefaultCurveSegments())
                };
            }
            return poolFactory(8, t1);
        }(), segmentsLengthPool = function() {
            function t1() {
                return {
                    lengths: [],
                    totalLength: 0
                };
            }
            function e1(i1) {
                var r1, s1 = i1.lengths.length;
                for(r1 = 0; r1 < s1; r1 += 1)bezierLengthPool.release(i1.lengths[r1]);
                i1.lengths.length = 0;
            }
            return poolFactory(8, t1, e1);
        }();
        function bezFunction() {
            var t1 = Math;
            function e1(m1, b1, g1, y1, A1, p1) {
                var h1 = m1 * y1 + b1 * A1 + g1 * p1 - A1 * y1 - p1 * m1 - g1 * b1;
                return h1 > -0.001 && h1 < .001;
            }
            function i1(m1, b1, g1, y1, A1, p1, h1, l1, u1) {
                if (g1 === 0 && p1 === 0 && u1 === 0) return e1(m1, b1, y1, A1, h1, l1);
                var E1 = t1.sqrt(t1.pow(y1 - m1, 2) + t1.pow(A1 - b1, 2) + t1.pow(p1 - g1, 2)), M1 = t1.sqrt(t1.pow(h1 - m1, 2) + t1.pow(l1 - b1, 2) + t1.pow(u1 - g1, 2)), D1 = t1.sqrt(t1.pow(h1 - y1, 2) + t1.pow(l1 - A1, 2) + t1.pow(u1 - p1, 2)), k1;
                return E1 > M1 ? E1 > D1 ? k1 = E1 - M1 - D1 : k1 = D1 - M1 - E1 : D1 > M1 ? k1 = D1 - M1 - E1 : k1 = M1 - E1 - D1, k1 > -0.0001 && k1 < 1e-4;
            }
            var r1 = function() {
                return function(m1, b1, g1, y1) {
                    var A1 = getDefaultCurveSegments(), p1, h1, l1, u1, E1, M1 = 0, D1, k1 = [], I1 = [], R1 = bezierLengthPool.newElement();
                    for(l1 = g1.length, p1 = 0; p1 < A1; p1 += 1){
                        for(E1 = p1 / (A1 - 1), D1 = 0, h1 = 0; h1 < l1; h1 += 1)u1 = bmPow(1 - E1, 3) * m1[h1] + 3 * bmPow(1 - E1, 2) * E1 * g1[h1] + 3 * (1 - E1) * bmPow(E1, 2) * y1[h1] + bmPow(E1, 3) * b1[h1], k1[h1] = u1, I1[h1] !== null && (D1 += bmPow(k1[h1] - I1[h1], 2)), I1[h1] = k1[h1];
                        D1 && (D1 = bmSqrt(D1), M1 += D1), R1.percents[p1] = E1, R1.lengths[p1] = M1;
                    }
                    return R1.addedLength = M1, R1;
                };
            }();
            function s1(m1) {
                var b1 = segmentsLengthPool.newElement(), g1 = m1.c, y1 = m1.v, A1 = m1.o, p1 = m1.i, h1, l1 = m1._length, u1 = b1.lengths, E1 = 0;
                for(h1 = 0; h1 < l1 - 1; h1 += 1)u1[h1] = r1(y1[h1], y1[h1 + 1], A1[h1], p1[h1 + 1]), E1 += u1[h1].addedLength;
                return g1 && l1 && (u1[h1] = r1(y1[h1], y1[0], A1[h1], p1[0]), E1 += u1[h1].addedLength), b1.totalLength = E1, b1;
            }
            function a1(m1) {
                this.segmentLength = 0, this.points = new Array(m1);
            }
            function n1(m1, b1) {
                this.partialLength = m1, this.point = b1;
            }
            var f1 = function() {
                var m1 = {};
                return function(b1, g1, y1, A1) {
                    var p1 = (b1[0] + "_" + b1[1] + "_" + g1[0] + "_" + g1[1] + "_" + y1[0] + "_" + y1[1] + "_" + A1[0] + "_" + A1[1]).replace(/\./g, "p");
                    if (!m1[p1]) {
                        var h1 = getDefaultCurveSegments(), l1, u1, E1, M1, D1, k1 = 0, I1, R1, V1 = null;
                        b1.length === 2 && (b1[0] !== g1[0] || b1[1] !== g1[1]) && e1(b1[0], b1[1], g1[0], g1[1], b1[0] + y1[0], b1[1] + y1[1]) && e1(b1[0], b1[1], g1[0], g1[1], g1[0] + A1[0], g1[1] + A1[1]) && (h1 = 2);
                        var B1 = new a1(h1);
                        for(E1 = y1.length, l1 = 0; l1 < h1; l1 += 1){
                            for(R1 = createSizedArray(E1), D1 = l1 / (h1 - 1), I1 = 0, u1 = 0; u1 < E1; u1 += 1)M1 = bmPow(1 - D1, 3) * b1[u1] + 3 * bmPow(1 - D1, 2) * D1 * (b1[u1] + y1[u1]) + 3 * (1 - D1) * bmPow(D1, 2) * (g1[u1] + A1[u1]) + bmPow(D1, 3) * g1[u1], R1[u1] = M1, V1 !== null && (I1 += bmPow(R1[u1] - V1[u1], 2));
                            I1 = bmSqrt(I1), k1 += I1, B1.points[l1] = new n1(I1, R1), V1 = R1;
                        }
                        B1.segmentLength = k1, m1[p1] = B1;
                    }
                    return m1[p1];
                };
            }();
            function o1(m1, b1) {
                var g1 = b1.percents, y1 = b1.lengths, A1 = g1.length, p1 = bmFloor((A1 - 1) * m1), h1 = m1 * b1.addedLength, l1 = 0;
                if (p1 === A1 - 1 || p1 === 0 || h1 === y1[p1]) return g1[p1];
                for(var u1 = y1[p1] > h1 ? -1 : 1, E1 = !0; E1;)if (y1[p1] <= h1 && y1[p1 + 1] > h1 ? (l1 = (h1 - y1[p1]) / (y1[p1 + 1] - y1[p1]), E1 = !1) : p1 += u1, p1 < 0 || p1 >= A1 - 1) {
                    if (p1 === A1 - 1) return g1[p1];
                    E1 = !1;
                }
                return g1[p1] + (g1[p1 + 1] - g1[p1]) * l1;
            }
            function d1(m1, b1, g1, y1, A1, p1) {
                var h1 = o1(A1, p1), l1 = 1 - h1, u1 = t1.round((l1 * l1 * l1 * m1[0] + (h1 * l1 * l1 + l1 * h1 * l1 + l1 * l1 * h1) * g1[0] + (h1 * h1 * l1 + l1 * h1 * h1 + h1 * l1 * h1) * y1[0] + h1 * h1 * h1 * b1[0]) * 1e3) / 1e3, E1 = t1.round((l1 * l1 * l1 * m1[1] + (h1 * l1 * l1 + l1 * h1 * l1 + l1 * l1 * h1) * g1[1] + (h1 * h1 * l1 + l1 * h1 * h1 + h1 * l1 * h1) * y1[1] + h1 * h1 * h1 * b1[1]) * 1e3) / 1e3;
                return [
                    u1,
                    E1
                ];
            }
            var v1 = createTypedArray("float32", 8);
            function P1(m1, b1, g1, y1, A1, p1, h1) {
                A1 < 0 ? A1 = 0 : A1 > 1 && (A1 = 1);
                var l1 = o1(A1, h1);
                p1 = p1 > 1 ? 1 : p1;
                var u1 = o1(p1, h1), E1, M1 = m1.length, D1 = 1 - l1, k1 = 1 - u1, I1 = D1 * D1 * D1, R1 = l1 * D1 * D1 * 3, V1 = l1 * l1 * D1 * 3, B1 = l1 * l1 * l1, G1 = D1 * D1 * k1, C1 = l1 * D1 * k1 + D1 * l1 * k1 + D1 * D1 * u1, w1 = l1 * l1 * k1 + D1 * l1 * u1 + l1 * D1 * u1, x1 = l1 * l1 * u1, _1 = D1 * k1 * k1, c1 = l1 * k1 * k1 + D1 * u1 * k1 + D1 * k1 * u1, S1 = l1 * u1 * k1 + D1 * u1 * u1 + l1 * k1 * u1, F1 = l1 * u1 * u1, T1 = k1 * k1 * k1, N1 = u1 * k1 * k1 + k1 * u1 * k1 + k1 * k1 * u1, L1 = u1 * u1 * k1 + k1 * u1 * u1 + u1 * k1 * u1, H1 = u1 * u1 * u1;
                for(E1 = 0; E1 < M1; E1 += 1)v1[E1 * 4] = t1.round((I1 * m1[E1] + R1 * g1[E1] + V1 * y1[E1] + B1 * b1[E1]) * 1e3) / 1e3, v1[E1 * 4 + 1] = t1.round((G1 * m1[E1] + C1 * g1[E1] + w1 * y1[E1] + x1 * b1[E1]) * 1e3) / 1e3, v1[E1 * 4 + 2] = t1.round((_1 * m1[E1] + c1 * g1[E1] + S1 * y1[E1] + F1 * b1[E1]) * 1e3) / 1e3, v1[E1 * 4 + 3] = t1.round((T1 * m1[E1] + N1 * g1[E1] + L1 * y1[E1] + H1 * b1[E1]) * 1e3) / 1e3;
                return v1;
            }
            return {
                getSegmentsLength: s1,
                getNewSegment: P1,
                getPointInSegment: d1,
                buildBezierData: f1,
                pointOnLine2D: e1,
                pointOnLine3D: i1
            };
        }
        var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
        function interpolateValue(t1, e1) {
            var i1 = this.offsetTime, r1;
            this.propType === "multidimensional" && (r1 = createTypedArray("float32", this.pv.length));
            for(var s1 = e1.lastIndex, a1 = s1, n1 = this.keyframes.length - 1, f1 = !0, o1, d1, v1; f1;){
                if (o1 = this.keyframes[a1], d1 = this.keyframes[a1 + 1], a1 === n1 - 1 && t1 >= d1.t - i1) {
                    o1.h && (o1 = d1), s1 = 0;
                    break;
                }
                if (d1.t - i1 > t1) {
                    s1 = a1;
                    break;
                }
                a1 < n1 - 1 ? a1 += 1 : (s1 = 0, f1 = !1);
            }
            v1 = this.keyframesMetadata[a1] || {};
            var P1, m1, b1, g1, y1, A1, p1 = d1.t - i1, h1 = o1.t - i1, l1;
            if (o1.to) {
                v1.bezierData || (v1.bezierData = bez.buildBezierData(o1.s, d1.s || o1.e, o1.to, o1.ti));
                var u1 = v1.bezierData;
                if (t1 >= p1 || t1 < h1) {
                    var E1 = t1 >= p1 ? u1.points.length - 1 : 0;
                    for(m1 = u1.points[E1].point.length, P1 = 0; P1 < m1; P1 += 1)r1[P1] = u1.points[E1].point[P1];
                } else {
                    v1.__fnct ? A1 = v1.__fnct : (A1 = BezierFactory.getBezierEasing(o1.o.x, o1.o.y, o1.i.x, o1.i.y, o1.n).get, v1.__fnct = A1), b1 = A1((t1 - h1) / (p1 - h1));
                    var M1 = u1.segmentLength * b1, D1, k1 = e1.lastFrame < t1 && e1._lastKeyframeIndex === a1 ? e1._lastAddedLength : 0;
                    for(y1 = e1.lastFrame < t1 && e1._lastKeyframeIndex === a1 ? e1._lastPoint : 0, f1 = !0, g1 = u1.points.length; f1;){
                        if (k1 += u1.points[y1].partialLength, M1 === 0 || b1 === 0 || y1 === u1.points.length - 1) {
                            for(m1 = u1.points[y1].point.length, P1 = 0; P1 < m1; P1 += 1)r1[P1] = u1.points[y1].point[P1];
                            break;
                        } else if (M1 >= k1 && M1 < k1 + u1.points[y1 + 1].partialLength) {
                            for(D1 = (M1 - k1) / u1.points[y1 + 1].partialLength, m1 = u1.points[y1].point.length, P1 = 0; P1 < m1; P1 += 1)r1[P1] = u1.points[y1].point[P1] + (u1.points[y1 + 1].point[P1] - u1.points[y1].point[P1]) * D1;
                            break;
                        }
                        y1 < g1 - 1 ? y1 += 1 : f1 = !1;
                    }
                    e1._lastPoint = y1, e1._lastAddedLength = k1 - u1.points[y1].partialLength, e1._lastKeyframeIndex = a1;
                }
            } else {
                var I1, R1, V1, B1, G1;
                if (n1 = o1.s.length, l1 = d1.s || o1.e, this.sh && o1.h !== 1) {
                    if (t1 >= p1) r1[0] = l1[0], r1[1] = l1[1], r1[2] = l1[2];
                    else if (t1 <= h1) r1[0] = o1.s[0], r1[1] = o1.s[1], r1[2] = o1.s[2];
                    else {
                        var C1 = createQuaternion(o1.s), w1 = createQuaternion(l1), x1 = (t1 - h1) / (p1 - h1);
                        quaternionToEuler(r1, slerp(C1, w1, x1));
                    }
                } else for(a1 = 0; a1 < n1; a1 += 1)o1.h !== 1 && (t1 >= p1 ? b1 = 1 : t1 < h1 ? b1 = 0 : (o1.o.x.constructor === Array ? (v1.__fnct || (v1.__fnct = []), v1.__fnct[a1] ? A1 = v1.__fnct[a1] : (I1 = o1.o.x[a1] === void 0 ? o1.o.x[0] : o1.o.x[a1], R1 = o1.o.y[a1] === void 0 ? o1.o.y[0] : o1.o.y[a1], V1 = o1.i.x[a1] === void 0 ? o1.i.x[0] : o1.i.x[a1], B1 = o1.i.y[a1] === void 0 ? o1.i.y[0] : o1.i.y[a1], A1 = BezierFactory.getBezierEasing(I1, R1, V1, B1).get, v1.__fnct[a1] = A1)) : v1.__fnct ? A1 = v1.__fnct : (I1 = o1.o.x, R1 = o1.o.y, V1 = o1.i.x, B1 = o1.i.y, A1 = BezierFactory.getBezierEasing(I1, R1, V1, B1).get, o1.keyframeMetadata = A1), b1 = A1((t1 - h1) / (p1 - h1)))), l1 = d1.s || o1.e, G1 = o1.h === 1 ? o1.s[a1] : o1.s[a1] + (l1[a1] - o1.s[a1]) * b1, this.propType === "multidimensional" ? r1[a1] = G1 : r1 = G1;
            }
            return e1.lastIndex = s1, r1;
        }
        function slerp(t1, e1, i1) {
            var r1 = [], s1 = t1[0], a1 = t1[1], n1 = t1[2], f1 = t1[3], o1 = e1[0], d1 = e1[1], v1 = e1[2], P1 = e1[3], m1, b1, g1, y1, A1;
            return b1 = s1 * o1 + a1 * d1 + n1 * v1 + f1 * P1, b1 < 0 && (b1 = -b1, o1 = -o1, d1 = -d1, v1 = -v1, P1 = -P1), 1 - b1 > 1e-6 ? (m1 = Math.acos(b1), g1 = Math.sin(m1), y1 = Math.sin((1 - i1) * m1) / g1, A1 = Math.sin(i1 * m1) / g1) : (y1 = 1 - i1, A1 = i1), r1[0] = y1 * s1 + A1 * o1, r1[1] = y1 * a1 + A1 * d1, r1[2] = y1 * n1 + A1 * v1, r1[3] = y1 * f1 + A1 * P1, r1;
        }
        function quaternionToEuler(t1, e1) {
            var i1 = e1[0], r1 = e1[1], s1 = e1[2], a1 = e1[3], n1 = Math.atan2(2 * r1 * a1 - 2 * i1 * s1, 1 - 2 * r1 * r1 - 2 * s1 * s1), f1 = Math.asin(2 * i1 * r1 + 2 * s1 * a1), o1 = Math.atan2(2 * i1 * a1 - 2 * r1 * s1, 1 - 2 * i1 * i1 - 2 * s1 * s1);
            t1[0] = n1 / degToRads, t1[1] = f1 / degToRads, t1[2] = o1 / degToRads;
        }
        function createQuaternion(t1) {
            var e1 = t1[0] * degToRads, i1 = t1[1] * degToRads, r1 = t1[2] * degToRads, s1 = Math.cos(e1 / 2), a1 = Math.cos(i1 / 2), n1 = Math.cos(r1 / 2), f1 = Math.sin(e1 / 2), o1 = Math.sin(i1 / 2), d1 = Math.sin(r1 / 2), v1 = s1 * a1 * n1 - f1 * o1 * d1, P1 = f1 * o1 * n1 + s1 * a1 * d1, m1 = f1 * a1 * n1 + s1 * o1 * d1, b1 = s1 * o1 * n1 - f1 * a1 * d1;
            return [
                P1,
                m1,
                b1,
                v1
            ];
        }
        function getValueAtCurrentTime() {
            var t1 = this.comp.renderedFrame - this.offsetTime, e1 = this.keyframes[0].t - this.offsetTime, i1 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t1 === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= i1 && t1 >= i1 || this._caching.lastFrame < e1 && t1 < e1))) {
                this._caching.lastFrame >= t1 && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var r1 = this.interpolateValue(t1, this._caching);
                this.pv = r1;
            }
            return this._caching.lastFrame = t1, this.pv;
        }
        function setVValue(t1) {
            var e1;
            if (this.propType === "unidimensional") e1 = t1 * this.mult, mathAbs(this.v - e1) > 1e-5 && (this.v = e1, this._mdf = !0);
            else for(var i1 = 0, r1 = this.v.length; i1 < r1;)e1 = t1[i1] * this.mult, mathAbs(this.v[i1] - e1) > 1e-5 && (this.v[i1] = e1, this._mdf = !0), i1 += 1;
        }
        function processEffectsSequence() {
            if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                if (this.lock) {
                    this.setVValue(this.pv);
                    return;
                }
                this.lock = !0, this._mdf = this._isFirstFrame;
                var t1, e1 = this.effectsSequence.length, i1 = this.kf ? this.pv : this.data.k;
                for(t1 = 0; t1 < e1; t1 += 1)i1 = this.effectsSequence[t1](i1);
                this.setVValue(i1), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
        }
        function addEffect(t1) {
            this.effectsSequence.push(t1), this.container.addDynamicProperty(this);
        }
        function ValueProperty(t1, e1, i1, r1) {
            this.propType = "unidimensional", this.mult = i1 || 1, this.data = e1, this.v = i1 ? e1.k * i1 : e1.k, this.pv = e1.k, this._mdf = !1, this.elem = t1, this.container = r1, this.comp = t1.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
        }
        function MultiDimensionalProperty(t1, e1, i1, r1) {
            this.propType = "multidimensional", this.mult = i1 || 1, this.data = e1, this._mdf = !1, this.elem = t1, this.container = r1, this.comp = t1.comp, this.k = !1, this.kf = !1, this.frameId = -1;
            var s1, a1 = e1.k.length;
            for(this.v = createTypedArray("float32", a1), this.pv = createTypedArray("float32", a1), this.vel = createTypedArray("float32", a1), s1 = 0; s1 < a1; s1 += 1)this.v[s1] = e1.k[s1] * this.mult, this.pv[s1] = e1.k[s1];
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
        }
        function KeyframedValueProperty(t1, e1, i1, r1) {
            this.propType = "unidimensional", this.keyframes = e1.k, this.keyframesMetadata = [], this.offsetTime = t1.data.st, this.frameId = -1, this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            }, this.k = !0, this.kf = !0, this.data = e1, this.mult = i1 || 1, this.elem = t1, this.container = r1, this.comp = t1.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [
                getValueAtCurrentTime.bind(this)
            ], this.addEffect = addEffect;
        }
        function KeyframedMultidimensionalProperty(t1, e1, i1, r1) {
            this.propType = "multidimensional";
            var s1, a1 = e1.k.length, n1, f1, o1, d1;
            for(s1 = 0; s1 < a1 - 1; s1 += 1)e1.k[s1].to && e1.k[s1].s && e1.k[s1 + 1] && e1.k[s1 + 1].s && (n1 = e1.k[s1].s, f1 = e1.k[s1 + 1].s, o1 = e1.k[s1].to, d1 = e1.k[s1].ti, (n1.length === 2 && !(n1[0] === f1[0] && n1[1] === f1[1]) && bez.pointOnLine2D(n1[0], n1[1], f1[0], f1[1], n1[0] + o1[0], n1[1] + o1[1]) && bez.pointOnLine2D(n1[0], n1[1], f1[0], f1[1], f1[0] + d1[0], f1[1] + d1[1]) || n1.length === 3 && !(n1[0] === f1[0] && n1[1] === f1[1] && n1[2] === f1[2]) && bez.pointOnLine3D(n1[0], n1[1], n1[2], f1[0], f1[1], f1[2], n1[0] + o1[0], n1[1] + o1[1], n1[2] + o1[2]) && bez.pointOnLine3D(n1[0], n1[1], n1[2], f1[0], f1[1], f1[2], f1[0] + d1[0], f1[1] + d1[1], f1[2] + d1[2])) && (e1.k[s1].to = null, e1.k[s1].ti = null), n1[0] === f1[0] && n1[1] === f1[1] && o1[0] === 0 && o1[1] === 0 && d1[0] === 0 && d1[1] === 0 && (n1.length === 2 || n1[2] === f1[2] && o1[2] === 0 && d1[2] === 0) && (e1.k[s1].to = null, e1.k[s1].ti = null));
            this.effectsSequence = [
                getValueAtCurrentTime.bind(this)
            ], this.data = e1, this.keyframes = e1.k, this.keyframesMetadata = [], this.offsetTime = t1.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i1 || 1, this.elem = t1, this.container = r1, this.comp = t1.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
            var v1 = e1.k[0].s.length;
            for(this.v = createTypedArray("float32", v1), this.pv = createTypedArray("float32", v1), s1 = 0; s1 < v1; s1 += 1)this.v[s1] = initFrame, this.pv[s1] = initFrame;
            this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray("float32", v1)
            }, this.addEffect = addEffect;
        }
        var PropertyFactory = function() {
            function t1(i1, r1, s1, a1, n1) {
                r1.sid && (r1 = i1.globalData.slotManager.getProp(r1));
                var f1;
                if (!r1.k.length) f1 = new ValueProperty(i1, r1, a1, n1);
                else if (typeof r1.k[0] == "number") f1 = new MultiDimensionalProperty(i1, r1, a1, n1);
                else switch(s1){
                    case 0:
                        f1 = new KeyframedValueProperty(i1, r1, a1, n1);
                        break;
                    case 1:
                        f1 = new KeyframedMultidimensionalProperty(i1, r1, a1, n1);
                        break;
                }
                return f1.effectsSequence.length && n1.addDynamicProperty(f1), f1;
            }
            var e1 = {
                getProp: t1
            };
            return e1;
        }();
        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function(t1) {
                this.dynamicProperties.indexOf(t1) === -1 && (this.dynamicProperties.push(t1), this.container.addDynamicProperty(this), this._isAnimated = !0);
            },
            iterateDynamicProperties: function() {
                this._mdf = !1;
                var t1, e1 = this.dynamicProperties.length;
                for(t1 = 0; t1 < e1; t1 += 1)this.dynamicProperties[t1].getValue(), this.dynamicProperties[t1]._mdf && (this._mdf = !0);
            },
            initDynamicPropertyContainer: function(t1) {
                this.container = t1, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
            }
        };
        var pointPool = function() {
            function t1() {
                return createTypedArray("float32", 2);
            }
            return poolFactory(8, t1);
        }();
        function ShapePath() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
        }
        ShapePath.prototype.setPathData = function(t1, e1) {
            this.c = t1, this.setLength(e1);
            for(var i1 = 0; i1 < e1;)this.v[i1] = pointPool.newElement(), this.o[i1] = pointPool.newElement(), this.i[i1] = pointPool.newElement(), i1 += 1;
        }, ShapePath.prototype.setLength = function(t1) {
            for(; this._maxLength < t1;)this.doubleArrayLength();
            this._length = t1;
        }, ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
        }, ShapePath.prototype.setXYAt = function(t1, e1, i1, r1, s1) {
            var a1;
            switch(this._length = Math.max(this._length, r1 + 1), this._length >= this._maxLength && this.doubleArrayLength(), i1){
                case "v":
                    a1 = this.v;
                    break;
                case "i":
                    a1 = this.i;
                    break;
                case "o":
                    a1 = this.o;
                    break;
                default:
                    a1 = [];
                    break;
            }
            (!a1[r1] || a1[r1] && !s1) && (a1[r1] = pointPool.newElement()), a1[r1][0] = t1, a1[r1][1] = e1;
        }, ShapePath.prototype.setTripleAt = function(t1, e1, i1, r1, s1, a1, n1, f1) {
            this.setXYAt(t1, e1, "v", n1, f1), this.setXYAt(i1, r1, "o", n1, f1), this.setXYAt(s1, a1, "i", n1, f1);
        }, ShapePath.prototype.reverse = function() {
            var t1 = new ShapePath;
            t1.setPathData(this.c, this._length);
            var e1 = this.v, i1 = this.o, r1 = this.i, s1 = 0;
            this.c && (t1.setTripleAt(e1[0][0], e1[0][1], r1[0][0], r1[0][1], i1[0][0], i1[0][1], 0, !1), s1 = 1);
            var a1 = this._length - 1, n1 = this._length, f1;
            for(f1 = s1; f1 < n1; f1 += 1)t1.setTripleAt(e1[a1][0], e1[a1][1], r1[a1][0], r1[a1][1], i1[a1][0], i1[a1][1], f1, !1), a1 -= 1;
            return t1;
        }, ShapePath.prototype.length = function() {
            return this._length;
        };
        var shapePool = function() {
            function t1() {
                return new ShapePath;
            }
            function e1(s1) {
                var a1 = s1._length, n1;
                for(n1 = 0; n1 < a1; n1 += 1)pointPool.release(s1.v[n1]), pointPool.release(s1.i[n1]), pointPool.release(s1.o[n1]), s1.v[n1] = null, s1.i[n1] = null, s1.o[n1] = null;
                s1._length = 0, s1.c = !1;
            }
            function i1(s1) {
                var a1 = r1.newElement(), n1, f1 = s1._length === void 0 ? s1.v.length : s1._length;
                for(a1.setLength(f1), a1.c = s1.c, n1 = 0; n1 < f1; n1 += 1)a1.setTripleAt(s1.v[n1][0], s1.v[n1][1], s1.o[n1][0], s1.o[n1][1], s1.i[n1][0], s1.i[n1][1], n1);
                return a1;
            }
            var r1 = poolFactory(4, t1, e1);
            return r1.clone = i1, r1;
        }();
        function ShapeCollection() {
            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
        }
        ShapeCollection.prototype.addShape = function(t1) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t1, this._length += 1;
        }, ShapeCollection.prototype.releaseShapes = function() {
            var t1;
            for(t1 = 0; t1 < this._length; t1 += 1)shapePool.release(this.shapes[t1]);
            this._length = 0;
        };
        var shapeCollectionPool = function() {
            var t1 = {
                newShapeCollection: s1,
                release: a1
            }, e1 = 0, i1 = 4, r1 = createSizedArray(i1);
            function s1() {
                var n1;
                return e1 ? (e1 -= 1, n1 = r1[e1]) : n1 = new ShapeCollection, n1;
            }
            function a1(n1) {
                var f1, o1 = n1._length;
                for(f1 = 0; f1 < o1; f1 += 1)shapePool.release(n1.shapes[f1]);
                n1._length = 0, e1 === i1 && (r1 = pooling.double(r1), i1 *= 2), r1[e1] = n1, e1 += 1;
            }
            return t1;
        }(), ShapePropertyFactory = function() {
            var t1 = -999999;
            function e1(p1, h1, l1) {
                var u1 = l1.lastIndex, E1, M1, D1, k1, I1, R1, V1, B1, G1, C1 = this.keyframes;
                if (p1 < C1[0].t - this.offsetTime) E1 = C1[0].s[0], D1 = !0, u1 = 0;
                else if (p1 >= C1[C1.length - 1].t - this.offsetTime) E1 = C1[C1.length - 1].s ? C1[C1.length - 1].s[0] : C1[C1.length - 2].e[0], D1 = !0;
                else {
                    for(var w1 = u1, x1 = C1.length - 1, _1 = !0, c1, S1, F1; _1 && (c1 = C1[w1], S1 = C1[w1 + 1], !(S1.t - this.offsetTime > p1));)w1 < x1 - 1 ? w1 += 1 : _1 = !1;
                    if (F1 = this.keyframesMetadata[w1] || {}, D1 = c1.h === 1, u1 = w1, !D1) {
                        if (p1 >= S1.t - this.offsetTime) B1 = 1;
                        else if (p1 < c1.t - this.offsetTime) B1 = 0;
                        else {
                            var T1;
                            F1.__fnct ? T1 = F1.__fnct : (T1 = BezierFactory.getBezierEasing(c1.o.x, c1.o.y, c1.i.x, c1.i.y).get, F1.__fnct = T1), B1 = T1((p1 - (c1.t - this.offsetTime)) / (S1.t - this.offsetTime - (c1.t - this.offsetTime)));
                        }
                        M1 = S1.s ? S1.s[0] : c1.e[0];
                    }
                    E1 = c1.s[0];
                }
                for(R1 = h1._length, V1 = E1.i[0].length, l1.lastIndex = u1, k1 = 0; k1 < R1; k1 += 1)for(I1 = 0; I1 < V1; I1 += 1)G1 = D1 ? E1.i[k1][I1] : E1.i[k1][I1] + (M1.i[k1][I1] - E1.i[k1][I1]) * B1, h1.i[k1][I1] = G1, G1 = D1 ? E1.o[k1][I1] : E1.o[k1][I1] + (M1.o[k1][I1] - E1.o[k1][I1]) * B1, h1.o[k1][I1] = G1, G1 = D1 ? E1.v[k1][I1] : E1.v[k1][I1] + (M1.v[k1][I1] - E1.v[k1][I1]) * B1, h1.v[k1][I1] = G1;
            }
            function i1() {
                var p1 = this.comp.renderedFrame - this.offsetTime, h1 = this.keyframes[0].t - this.offsetTime, l1 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, u1 = this._caching.lastFrame;
                return u1 !== t1 && (u1 < h1 && p1 < h1 || u1 > l1 && p1 > l1) || (this._caching.lastIndex = u1 < p1 ? this._caching.lastIndex : 0, this.interpolateShape(p1, this.pv, this._caching)), this._caching.lastFrame = p1, this.pv;
            }
            function r1() {
                this.paths = this.localShapeCollection;
            }
            function s1(p1, h1) {
                if (p1._length !== h1._length || p1.c !== h1.c) return !1;
                var l1, u1 = p1._length;
                for(l1 = 0; l1 < u1; l1 += 1)if (p1.v[l1][0] !== h1.v[l1][0] || p1.v[l1][1] !== h1.v[l1][1] || p1.o[l1][0] !== h1.o[l1][0] || p1.o[l1][1] !== h1.o[l1][1] || p1.i[l1][0] !== h1.i[l1][0] || p1.i[l1][1] !== h1.i[l1][1]) return !1;
                return !0;
            }
            function a1(p1) {
                s1(this.v, p1) || (this.v = shapePool.clone(p1), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
            }
            function n1() {
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
                    var p1;
                    this.kf ? p1 = this.pv : this.data.ks ? p1 = this.data.ks.k : p1 = this.data.pt.k;
                    var h1, l1 = this.effectsSequence.length;
                    for(h1 = 0; h1 < l1; h1 += 1)p1 = this.effectsSequence[h1](p1);
                    this.setVValue(p1), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                }
            }
            function f1(p1, h1, l1) {
                this.propType = "shape", this.comp = p1.comp, this.container = p1, this.elem = p1, this.data = h1, this.k = !1, this.kf = !1, this._mdf = !1;
                var u1 = l1 === 3 ? h1.pt.k : h1.ks.k;
                this.v = shapePool.clone(u1), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r1, this.effectsSequence = [];
            }
            function o1(p1) {
                this.effectsSequence.push(p1), this.container.addDynamicProperty(this);
            }
            f1.prototype.interpolateShape = e1, f1.prototype.getValue = n1, f1.prototype.setVValue = a1, f1.prototype.addEffect = o1;
            function d1(p1, h1, l1) {
                this.propType = "shape", this.comp = p1.comp, this.elem = p1, this.container = p1, this.offsetTime = p1.data.st, this.keyframes = l1 === 3 ? h1.pt.k : h1.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                var u1 = this.keyframes[0].s[0].i.length;
                this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, u1), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t1, this.reset = r1, this._caching = {
                    lastFrame: t1,
                    lastIndex: 0
                }, this.effectsSequence = [
                    i1.bind(this)
                ];
            }
            d1.prototype.getValue = n1, d1.prototype.interpolateShape = e1, d1.prototype.setVValue = a1, d1.prototype.addEffect = o1;
            var v1 = function() {
                var p1 = roundCorner;
                function h1(l1, u1) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = u1.d, this.elem = l1, this.comp = l1.comp, this.frameId = -1, this.initDynamicPropertyContainer(l1), this.p = PropertyFactory.getProp(l1, u1.p, 1, 0, this), this.s = PropertyFactory.getProp(l1, u1.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
                }
                return h1.prototype = {
                    reset: r1,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function() {
                        var l1 = this.p.v[0], u1 = this.p.v[1], E1 = this.s.v[0] / 2, M1 = this.s.v[1] / 2, D1 = this.d !== 3, k1 = this.v;
                        k1.v[0][0] = l1, k1.v[0][1] = u1 - M1, k1.v[1][0] = D1 ? l1 + E1 : l1 - E1, k1.v[1][1] = u1, k1.v[2][0] = l1, k1.v[2][1] = u1 + M1, k1.v[3][0] = D1 ? l1 - E1 : l1 + E1, k1.v[3][1] = u1, k1.i[0][0] = D1 ? l1 - E1 * p1 : l1 + E1 * p1, k1.i[0][1] = u1 - M1, k1.i[1][0] = D1 ? l1 + E1 : l1 - E1, k1.i[1][1] = u1 - M1 * p1, k1.i[2][0] = D1 ? l1 + E1 * p1 : l1 - E1 * p1, k1.i[2][1] = u1 + M1, k1.i[3][0] = D1 ? l1 - E1 : l1 + E1, k1.i[3][1] = u1 + M1 * p1, k1.o[0][0] = D1 ? l1 + E1 * p1 : l1 - E1 * p1, k1.o[0][1] = u1 - M1, k1.o[1][0] = D1 ? l1 + E1 : l1 - E1, k1.o[1][1] = u1 + M1 * p1, k1.o[2][0] = D1 ? l1 - E1 * p1 : l1 + E1 * p1, k1.o[2][1] = u1 + M1, k1.o[3][0] = D1 ? l1 - E1 : l1 + E1, k1.o[3][1] = u1 - M1 * p1;
                    }
                }, extendPrototype([
                    DynamicPropertyContainer
                ], h1), h1;
            }(), P1 = function() {
                function p1(h1, l1) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = h1, this.comp = h1.comp, this.data = l1, this.frameId = -1, this.d = l1.d, this.initDynamicPropertyContainer(h1), l1.sy === 1 ? (this.ir = PropertyFactory.getProp(h1, l1.ir, 0, 0, this), this.is = PropertyFactory.getProp(h1, l1.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(h1, l1.pt, 0, 0, this), this.p = PropertyFactory.getProp(h1, l1.p, 1, 0, this), this.r = PropertyFactory.getProp(h1, l1.r, 0, degToRads, this), this.or = PropertyFactory.getProp(h1, l1.or, 0, 0, this), this.os = PropertyFactory.getProp(h1, l1.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
                }
                return p1.prototype = {
                    reset: r1,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function() {
                        var h1 = Math.floor(this.pt.v) * 2, l1 = Math.PI * 2 / h1, u1 = !0, E1 = this.or.v, M1 = this.ir.v, D1 = this.os.v, k1 = this.is.v, I1 = 2 * Math.PI * E1 / (h1 * 2), R1 = 2 * Math.PI * M1 / (h1 * 2), V1, B1, G1, C1, w1 = -Math.PI / 2;
                        w1 += this.r.v;
                        var x1 = this.data.d === 3 ? -1 : 1;
                        for(this.v._length = 0, V1 = 0; V1 < h1; V1 += 1){
                            B1 = u1 ? E1 : M1, G1 = u1 ? D1 : k1, C1 = u1 ? I1 : R1;
                            var _1 = B1 * Math.cos(w1), c1 = B1 * Math.sin(w1), S1 = _1 === 0 && c1 === 0 ? 0 : c1 / Math.sqrt(_1 * _1 + c1 * c1), F1 = _1 === 0 && c1 === 0 ? 0 : -_1 / Math.sqrt(_1 * _1 + c1 * c1);
                            _1 += +this.p.v[0], c1 += +this.p.v[1], this.v.setTripleAt(_1, c1, _1 - S1 * C1 * G1 * x1, c1 - F1 * C1 * G1 * x1, _1 + S1 * C1 * G1 * x1, c1 + F1 * C1 * G1 * x1, V1, !0), u1 = !u1, w1 += l1 * x1;
                        }
                    },
                    convertPolygonToPath: function() {
                        var h1 = Math.floor(this.pt.v), l1 = Math.PI * 2 / h1, u1 = this.or.v, E1 = this.os.v, M1 = 2 * Math.PI * u1 / (h1 * 4), D1, k1 = -Math.PI * .5, I1 = this.data.d === 3 ? -1 : 1;
                        for(k1 += this.r.v, this.v._length = 0, D1 = 0; D1 < h1; D1 += 1){
                            var R1 = u1 * Math.cos(k1), V1 = u1 * Math.sin(k1), B1 = R1 === 0 && V1 === 0 ? 0 : V1 / Math.sqrt(R1 * R1 + V1 * V1), G1 = R1 === 0 && V1 === 0 ? 0 : -R1 / Math.sqrt(R1 * R1 + V1 * V1);
                            R1 += +this.p.v[0], V1 += +this.p.v[1], this.v.setTripleAt(R1, V1, R1 - B1 * M1 * E1 * I1, V1 - G1 * M1 * E1 * I1, R1 + B1 * M1 * E1 * I1, V1 + G1 * M1 * E1 * I1, D1, !0), k1 += l1 * I1;
                        }
                        this.paths.length = 0, this.paths[0] = this.v;
                    }
                }, extendPrototype([
                    DynamicPropertyContainer
                ], p1), p1;
            }(), m1 = function() {
                function p1(h1, l1) {
                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = h1, this.comp = h1.comp, this.frameId = -1, this.d = l1.d, this.initDynamicPropertyContainer(h1), this.p = PropertyFactory.getProp(h1, l1.p, 1, 0, this), this.s = PropertyFactory.getProp(h1, l1.s, 1, 0, this), this.r = PropertyFactory.getProp(h1, l1.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
                }
                return p1.prototype = {
                    convertRectToPath: function() {
                        var h1 = this.p.v[0], l1 = this.p.v[1], u1 = this.s.v[0] / 2, E1 = this.s.v[1] / 2, M1 = bmMin(u1, E1, this.r.v), D1 = M1 * (1 - roundCorner);
                        this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(h1 + u1, l1 - E1 + M1, h1 + u1, l1 - E1 + M1, h1 + u1, l1 - E1 + D1, 0, !0), this.v.setTripleAt(h1 + u1, l1 + E1 - M1, h1 + u1, l1 + E1 - D1, h1 + u1, l1 + E1 - M1, 1, !0), M1 !== 0 ? (this.v.setTripleAt(h1 + u1 - M1, l1 + E1, h1 + u1 - M1, l1 + E1, h1 + u1 - D1, l1 + E1, 2, !0), this.v.setTripleAt(h1 - u1 + M1, l1 + E1, h1 - u1 + D1, l1 + E1, h1 - u1 + M1, l1 + E1, 3, !0), this.v.setTripleAt(h1 - u1, l1 + E1 - M1, h1 - u1, l1 + E1 - M1, h1 - u1, l1 + E1 - D1, 4, !0), this.v.setTripleAt(h1 - u1, l1 - E1 + M1, h1 - u1, l1 - E1 + D1, h1 - u1, l1 - E1 + M1, 5, !0), this.v.setTripleAt(h1 - u1 + M1, l1 - E1, h1 - u1 + M1, l1 - E1, h1 - u1 + D1, l1 - E1, 6, !0), this.v.setTripleAt(h1 + u1 - M1, l1 - E1, h1 + u1 - D1, l1 - E1, h1 + u1 - M1, l1 - E1, 7, !0)) : (this.v.setTripleAt(h1 - u1, l1 + E1, h1 - u1 + D1, l1 + E1, h1 - u1, l1 + E1, 2), this.v.setTripleAt(h1 - u1, l1 - E1, h1 - u1, l1 - E1 + D1, h1 - u1, l1 - E1, 3))) : (this.v.setTripleAt(h1 + u1, l1 - E1 + M1, h1 + u1, l1 - E1 + D1, h1 + u1, l1 - E1 + M1, 0, !0), M1 !== 0 ? (this.v.setTripleAt(h1 + u1 - M1, l1 - E1, h1 + u1 - M1, l1 - E1, h1 + u1 - D1, l1 - E1, 1, !0), this.v.setTripleAt(h1 - u1 + M1, l1 - E1, h1 - u1 + D1, l1 - E1, h1 - u1 + M1, l1 - E1, 2, !0), this.v.setTripleAt(h1 - u1, l1 - E1 + M1, h1 - u1, l1 - E1 + M1, h1 - u1, l1 - E1 + D1, 3, !0), this.v.setTripleAt(h1 - u1, l1 + E1 - M1, h1 - u1, l1 + E1 - D1, h1 - u1, l1 + E1 - M1, 4, !0), this.v.setTripleAt(h1 - u1 + M1, l1 + E1, h1 - u1 + M1, l1 + E1, h1 - u1 + D1, l1 + E1, 5, !0), this.v.setTripleAt(h1 + u1 - M1, l1 + E1, h1 + u1 - D1, l1 + E1, h1 + u1 - M1, l1 + E1, 6, !0), this.v.setTripleAt(h1 + u1, l1 + E1 - M1, h1 + u1, l1 + E1 - M1, h1 + u1, l1 + E1 - D1, 7, !0)) : (this.v.setTripleAt(h1 - u1, l1 - E1, h1 - u1 + D1, l1 - E1, h1 - u1, l1 - E1, 1, !0), this.v.setTripleAt(h1 - u1, l1 + E1, h1 - u1, l1 + E1 - D1, h1 - u1, l1 + E1, 2, !0), this.v.setTripleAt(h1 + u1, l1 + E1, h1 + u1 - D1, l1 + E1, h1 + u1, l1 + E1, 3, !0)));
                    },
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                    },
                    reset: r1
                }, extendPrototype([
                    DynamicPropertyContainer
                ], p1), p1;
            }();
            function b1(p1, h1, l1) {
                var u1;
                if (l1 === 3 || l1 === 4) {
                    var E1 = l1 === 3 ? h1.pt : h1.ks, M1 = E1.k;
                    M1.length ? u1 = new d1(p1, h1, l1) : u1 = new f1(p1, h1, l1);
                } else l1 === 5 ? u1 = new m1(p1, h1) : l1 === 6 ? u1 = new v1(p1, h1) : l1 === 7 && (u1 = new P1(p1, h1));
                return u1.k && p1.addDynamicProperty(u1), u1;
            }
            function g1() {
                return f1;
            }
            function y1() {
                return d1;
            }
            var A1 = {};
            return A1.getShapeProp = b1, A1.getConstructorFunction = g1, A1.getKeyframedConstructorFunction = y1, A1;
        }(), Matrix = function() {
            var t1 = Math.cos, e1 = Math.sin, i1 = Math.tan, r1 = Math.round;
            function s1() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
            }
            function a1(c1) {
                if (c1 === 0) return this;
                var S1 = t1(c1), F1 = e1(c1);
                return this._t(S1, -F1, 0, 0, F1, S1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function n1(c1) {
                if (c1 === 0) return this;
                var S1 = t1(c1), F1 = e1(c1);
                return this._t(1, 0, 0, 0, 0, S1, -F1, 0, 0, F1, S1, 0, 0, 0, 0, 1);
            }
            function f1(c1) {
                if (c1 === 0) return this;
                var S1 = t1(c1), F1 = e1(c1);
                return this._t(S1, 0, F1, 0, 0, 1, 0, 0, -F1, 0, S1, 0, 0, 0, 0, 1);
            }
            function o1(c1) {
                if (c1 === 0) return this;
                var S1 = t1(c1), F1 = e1(c1);
                return this._t(S1, -F1, 0, 0, F1, S1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function d1(c1, S1) {
                return this._t(1, S1, c1, 1, 0, 0);
            }
            function v1(c1, S1) {
                return this.shear(i1(c1), i1(S1));
            }
            function P1(c1, S1) {
                var F1 = t1(S1), T1 = e1(S1);
                return this._t(F1, T1, 0, 0, -T1, F1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i1(c1), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(F1, -T1, 0, 0, T1, F1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function m1(c1, S1, F1) {
                return !F1 && F1 !== 0 && (F1 = 1), c1 === 1 && S1 === 1 && F1 === 1 ? this : this._t(c1, 0, 0, 0, 0, S1, 0, 0, 0, 0, F1, 0, 0, 0, 0, 1);
            }
            function b1(c1, S1, F1, T1, N1, L1, H1, O1, q1, $1, X1, Q1, Z1, W1, K1, j1) {
                return this.props[0] = c1, this.props[1] = S1, this.props[2] = F1, this.props[3] = T1, this.props[4] = N1, this.props[5] = L1, this.props[6] = H1, this.props[7] = O1, this.props[8] = q1, this.props[9] = $1, this.props[10] = X1, this.props[11] = Q1, this.props[12] = Z1, this.props[13] = W1, this.props[14] = K1, this.props[15] = j1, this;
            }
            function g1(c1, S1, F1) {
                return F1 = F1 || 0, c1 !== 0 || S1 !== 0 || F1 !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c1, S1, F1, 1) : this;
            }
            function y1(c1, S1, F1, T1, N1, L1, H1, O1, q1, $1, X1, Q1, Z1, W1, K1, j1) {
                var z1 = this.props;
                if (c1 === 1 && S1 === 0 && F1 === 0 && T1 === 0 && N1 === 0 && L1 === 1 && H1 === 0 && O1 === 0 && q1 === 0 && $1 === 0 && X1 === 1 && Q1 === 0) return z1[12] = z1[12] * c1 + z1[15] * Z1, z1[13] = z1[13] * L1 + z1[15] * W1, z1[14] = z1[14] * X1 + z1[15] * K1, z1[15] *= j1, this._identityCalculated = !1, this;
                var et1 = z1[0], at1 = z1[1], it1 = z1[2], tt1 = z1[3], rt1 = z1[4], st1 = z1[5], Y1 = z1[6], nt1 = z1[7], ot1 = z1[8], J1 = z1[9], ht1 = z1[10], U1 = z1[11], lt1 = z1[12], pt1 = z1[13], ft1 = z1[14], mt1 = z1[15];
                return z1[0] = et1 * c1 + at1 * N1 + it1 * q1 + tt1 * Z1, z1[1] = et1 * S1 + at1 * L1 + it1 * $1 + tt1 * W1, z1[2] = et1 * F1 + at1 * H1 + it1 * X1 + tt1 * K1, z1[3] = et1 * T1 + at1 * O1 + it1 * Q1 + tt1 * j1, z1[4] = rt1 * c1 + st1 * N1 + Y1 * q1 + nt1 * Z1, z1[5] = rt1 * S1 + st1 * L1 + Y1 * $1 + nt1 * W1, z1[6] = rt1 * F1 + st1 * H1 + Y1 * X1 + nt1 * K1, z1[7] = rt1 * T1 + st1 * O1 + Y1 * Q1 + nt1 * j1, z1[8] = ot1 * c1 + J1 * N1 + ht1 * q1 + U1 * Z1, z1[9] = ot1 * S1 + J1 * L1 + ht1 * $1 + U1 * W1, z1[10] = ot1 * F1 + J1 * H1 + ht1 * X1 + U1 * K1, z1[11] = ot1 * T1 + J1 * O1 + ht1 * Q1 + U1 * j1, z1[12] = lt1 * c1 + pt1 * N1 + ft1 * q1 + mt1 * Z1, z1[13] = lt1 * S1 + pt1 * L1 + ft1 * $1 + mt1 * W1, z1[14] = lt1 * F1 + pt1 * H1 + ft1 * X1 + mt1 * K1, z1[15] = lt1 * T1 + pt1 * O1 + ft1 * Q1 + mt1 * j1, this._identityCalculated = !1, this;
            }
            function A1(c1) {
                var S1 = c1.props;
                return this.transform(S1[0], S1[1], S1[2], S1[3], S1[4], S1[5], S1[6], S1[7], S1[8], S1[9], S1[10], S1[11], S1[12], S1[13], S1[14], S1[15]);
            }
            function p1() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
            }
            function h1(c1) {
                for(var S1 = 0; S1 < 16;){
                    if (c1.props[S1] !== this.props[S1]) return !1;
                    S1 += 1;
                }
                return !0;
            }
            function l1(c1) {
                var S1;
                for(S1 = 0; S1 < 16; S1 += 1)c1.props[S1] = this.props[S1];
                return c1;
            }
            function u1(c1) {
                var S1;
                for(S1 = 0; S1 < 16; S1 += 1)this.props[S1] = c1[S1];
            }
            function E1(c1, S1, F1) {
                return {
                    x: c1 * this.props[0] + S1 * this.props[4] + F1 * this.props[8] + this.props[12],
                    y: c1 * this.props[1] + S1 * this.props[5] + F1 * this.props[9] + this.props[13],
                    z: c1 * this.props[2] + S1 * this.props[6] + F1 * this.props[10] + this.props[14]
                };
            }
            function M1(c1, S1, F1) {
                return c1 * this.props[0] + S1 * this.props[4] + F1 * this.props[8] + this.props[12];
            }
            function D1(c1, S1, F1) {
                return c1 * this.props[1] + S1 * this.props[5] + F1 * this.props[9] + this.props[13];
            }
            function k1(c1, S1, F1) {
                return c1 * this.props[2] + S1 * this.props[6] + F1 * this.props[10] + this.props[14];
            }
            function I1() {
                var c1 = this.props[0] * this.props[5] - this.props[1] * this.props[4], S1 = this.props[5] / c1, F1 = -this.props[1] / c1, T1 = -this.props[4] / c1, N1 = this.props[0] / c1, L1 = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / c1, H1 = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / c1, O1 = new Matrix;
                return O1.props[0] = S1, O1.props[1] = F1, O1.props[4] = T1, O1.props[5] = N1, O1.props[12] = L1, O1.props[13] = H1, O1;
            }
            function R1(c1) {
                var S1 = this.getInverseMatrix();
                return S1.applyToPointArray(c1[0], c1[1], c1[2] || 0);
            }
            function V1(c1) {
                var S1, F1 = c1.length, T1 = [];
                for(S1 = 0; S1 < F1; S1 += 1)T1[S1] = R1(c1[S1]);
                return T1;
            }
            function B1(c1, S1, F1) {
                var T1 = createTypedArray("float32", 6);
                if (this.isIdentity()) T1[0] = c1[0], T1[1] = c1[1], T1[2] = S1[0], T1[3] = S1[1], T1[4] = F1[0], T1[5] = F1[1];
                else {
                    var N1 = this.props[0], L1 = this.props[1], H1 = this.props[4], O1 = this.props[5], q1 = this.props[12], $1 = this.props[13];
                    T1[0] = c1[0] * N1 + c1[1] * H1 + q1, T1[1] = c1[0] * L1 + c1[1] * O1 + $1, T1[2] = S1[0] * N1 + S1[1] * H1 + q1, T1[3] = S1[0] * L1 + S1[1] * O1 + $1, T1[4] = F1[0] * N1 + F1[1] * H1 + q1, T1[5] = F1[0] * L1 + F1[1] * O1 + $1;
                }
                return T1;
            }
            function G1(c1, S1, F1) {
                var T1;
                return this.isIdentity() ? T1 = [
                    c1,
                    S1,
                    F1
                ] : T1 = [
                    c1 * this.props[0] + S1 * this.props[4] + F1 * this.props[8] + this.props[12],
                    c1 * this.props[1] + S1 * this.props[5] + F1 * this.props[9] + this.props[13],
                    c1 * this.props[2] + S1 * this.props[6] + F1 * this.props[10] + this.props[14]
                ], T1;
            }
            function C1(c1, S1) {
                if (this.isIdentity()) return c1 + "," + S1;
                var F1 = this.props;
                return Math.round((c1 * F1[0] + S1 * F1[4] + F1[12]) * 100) / 100 + "," + Math.round((c1 * F1[1] + S1 * F1[5] + F1[13]) * 100) / 100;
            }
            function w1() {
                for(var c1 = 0, S1 = this.props, F1 = "matrix3d(", T1 = 1e4; c1 < 16;)F1 += r1(S1[c1] * T1) / T1, F1 += c1 === 15 ? ")" : ",", c1 += 1;
                return F1;
            }
            function x1(c1) {
                var S1 = 1e4;
                return c1 < 1e-6 && c1 > 0 || c1 > -0.000001 && c1 < 0 ? r1(c1 * S1) / S1 : c1;
            }
            function _1() {
                var c1 = this.props, S1 = x1(c1[0]), F1 = x1(c1[1]), T1 = x1(c1[4]), N1 = x1(c1[5]), L1 = x1(c1[12]), H1 = x1(c1[13]);
                return "matrix(" + S1 + "," + F1 + "," + T1 + "," + N1 + "," + L1 + "," + H1 + ")";
            }
            return function() {
                this.reset = s1, this.rotate = a1, this.rotateX = n1, this.rotateY = f1, this.rotateZ = o1, this.skew = v1, this.skewFromAxis = P1, this.shear = d1, this.scale = m1, this.setTransform = b1, this.translate = g1, this.transform = y1, this.multiply = A1, this.applyToPoint = E1, this.applyToX = M1, this.applyToY = D1, this.applyToZ = k1, this.applyToPointArray = G1, this.applyToTriplePoints = B1, this.applyToPointStringified = C1, this.toCSS = w1, this.to2dCSS = _1, this.clone = l1, this.cloneFromProps = u1, this.equals = h1, this.inversePoints = V1, this.inversePoint = R1, this.getInverseMatrix = I1, this._t = this.transform, this.isIdentity = p1, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
            };
        }();
        function _typeof$3(t1) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function(e1) {
                return typeof e1;
            } : _typeof$3 = function(e1) {
                return e1 && typeof Symbol == "function" && e1.constructor === Symbol && e1 !== Symbol.prototype ? "symbol" : typeof e1;
            }, _typeof$3(t1);
        }
        var lottie = {};
        function setLocation(t1) {
            setLocationHref(t1);
        }
        function searchAnimations() {
            animationManager.searchAnimations();
        }
        function setSubframeRendering(t1) {
            setSubframeEnabled(t1);
        }
        function setPrefix(t1) {
            setIdPrefix(t1);
        }
        function loadAnimation(t1) {
            return animationManager.loadAnimation(t1);
        }
        function setQuality(t1) {
            if (typeof t1 == "string") switch(t1){
                case "high":
                    setDefaultCurveSegments(200);
                    break;
                default:
                case "medium":
                    setDefaultCurveSegments(50);
                    break;
                case "low":
                    setDefaultCurveSegments(10);
                    break;
            }
            else !isNaN(t1) && t1 > 1 && setDefaultCurveSegments(t1);
        }
        function inBrowser() {
            return typeof navigator < "u";
        }
        function installPlugin(t1, e1) {
            t1 === "expressions" && setExpressionsPlugin(e1);
        }
        function getFactory(t1) {
            switch(t1){
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null;
            }
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
        function checkReady() {
            document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations());
        }
        function getQueryVariable(t1) {
            for(var e1 = queryString.split("&"), i1 = 0; i1 < e1.length; i1 += 1){
                var r1 = e1[i1].split("=");
                if (decodeURIComponent(r1[0]) == t1) return decodeURIComponent(r1[1]);
            }
            return null;
        }
        var queryString = "";
        var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || {
            src: ""
        };
        queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer");
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
            !((typeof exports > "u" ? "undefined" : _typeof$3(exports)) === "object" && typeof module < "u") && !(typeof define == "function" && define.amd) && (window.bodymovin = lottie);
        } catch (t) {}
        var ShapeModifiers = function() {
            var t1 = {}, e1 = {};
            t1.registerModifier = i1, t1.getModifier = r1;
            function i1(s1, a1) {
                e1[s1] || (e1[s1] = a1);
            }
            function r1(s1, a1, n1) {
                return new e1[s1](a1, n1);
            }
            return t1;
        }();
        function ShapeModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t1) {
            if (!this.closed) {
                t1.sh.container.addDynamicProperty(t1.sh);
                var e1 = {
                    shape: t1.sh,
                    data: t1,
                    localShapeCollection: shapeCollectionPool.newShapeCollection()
                };
                this.shapes.push(e1), this.addShapeToModifier(e1), this._isAnimated && t1.setAsAnimated();
            }
        }, ShapeModifier.prototype.init = function(t1, e1) {
            this.shapes = [], this.elem = t1, this.initDynamicPropertyContainer(t1), this.initModifierProperties(t1, e1), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
        }, ShapeModifier.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
        }, extendPrototype([
            DynamicPropertyContainer
        ], ShapeModifier);
        function TrimModifier() {}
        extendPrototype([
            ShapeModifier
        ], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t1, e1) {
            this.s = PropertyFactory.getProp(t1, e1.s, 0, .01, this), this.e = PropertyFactory.getProp(t1, e1.e, 0, .01, this), this.o = PropertyFactory.getProp(t1, e1.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e1.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
        }, TrimModifier.prototype.addShapeToModifier = function(t1) {
            t1.pathsData = [];
        }, TrimModifier.prototype.calculateShapeEdges = function(t1, e1, i1, r1, s1) {
            var a1 = [];
            e1 <= 1 ? a1.push({
                s: t1,
                e: e1
            }) : t1 >= 1 ? a1.push({
                s: t1 - 1,
                e: e1 - 1
            }) : (a1.push({
                s: t1,
                e: 1
            }), a1.push({
                s: 0,
                e: e1 - 1
            }));
            var n1 = [], f1, o1 = a1.length, d1;
            for(f1 = 0; f1 < o1; f1 += 1)if (d1 = a1[f1], !(d1.e * s1 < r1 || d1.s * s1 > r1 + i1)) {
                var v1, P1;
                d1.s * s1 <= r1 ? v1 = 0 : v1 = (d1.s * s1 - r1) / i1, d1.e * s1 >= r1 + i1 ? P1 = 1 : P1 = (d1.e * s1 - r1) / i1, n1.push([
                    v1,
                    P1
                ]);
            }
            return n1.length || n1.push([
                0,
                0
            ]), n1;
        }, TrimModifier.prototype.releasePathsData = function(t1) {
            var e1, i1 = t1.length;
            for(e1 = 0; e1 < i1; e1 += 1)segmentsLengthPool.release(t1[e1]);
            return t1.length = 0, t1;
        }, TrimModifier.prototype.processShapes = function(t1) {
            var e1, i1;
            if (this._mdf || t1) {
                var r1 = this.o.v % 360 / 360;
                if (r1 < 0 && (r1 += 1), this.s.v > 1 ? e1 = 1 + r1 : this.s.v < 0 ? e1 = 0 + r1 : e1 = this.s.v + r1, this.e.v > 1 ? i1 = 1 + r1 : this.e.v < 0 ? i1 = 0 + r1 : i1 = this.e.v + r1, e1 > i1) {
                    var s1 = e1;
                    e1 = i1, i1 = s1;
                }
                e1 = Math.round(e1 * 1e4) * 1e-4, i1 = Math.round(i1 * 1e4) * 1e-4, this.sValue = e1, this.eValue = i1;
            } else e1 = this.sValue, i1 = this.eValue;
            var a1, n1, f1 = this.shapes.length, o1, d1, v1, P1, m1, b1 = 0;
            if (i1 === e1) for(n1 = 0; n1 < f1; n1 += 1)this.shapes[n1].localShapeCollection.releaseShapes(), this.shapes[n1].shape._mdf = !0, this.shapes[n1].shape.paths = this.shapes[n1].localShapeCollection, this._mdf && (this.shapes[n1].pathsData.length = 0);
            else if (i1 === 1 && e1 === 0 || i1 === 0 && e1 === 1) {
                if (this._mdf) for(n1 = 0; n1 < f1; n1 += 1)this.shapes[n1].pathsData.length = 0, this.shapes[n1].shape._mdf = !0;
            } else {
                var g1 = [], y1, A1;
                for(n1 = 0; n1 < f1; n1 += 1)if (y1 = this.shapes[n1], !y1.shape._mdf && !this._mdf && !t1 && this.m !== 2) y1.shape.paths = y1.localShapeCollection;
                else {
                    if (a1 = y1.shape.paths, d1 = a1._length, m1 = 0, !y1.shape._mdf && y1.pathsData.length) m1 = y1.totalShapeLength;
                    else {
                        for(v1 = this.releasePathsData(y1.pathsData), o1 = 0; o1 < d1; o1 += 1)P1 = bez.getSegmentsLength(a1.shapes[o1]), v1.push(P1), m1 += P1.totalLength;
                        y1.totalShapeLength = m1, y1.pathsData = v1;
                    }
                    b1 += m1, y1.shape._mdf = !0;
                }
                var p1 = e1, h1 = i1, l1 = 0, u1;
                for(n1 = f1 - 1; n1 >= 0; n1 -= 1)if (y1 = this.shapes[n1], y1.shape._mdf) {
                    for(A1 = y1.localShapeCollection, A1.releaseShapes(), this.m === 2 && f1 > 1 ? (u1 = this.calculateShapeEdges(e1, i1, y1.totalShapeLength, l1, b1), l1 += y1.totalShapeLength) : u1 = [
                        [
                            p1,
                            h1
                        ]
                    ], d1 = u1.length, o1 = 0; o1 < d1; o1 += 1){
                        p1 = u1[o1][0], h1 = u1[o1][1], g1.length = 0, h1 <= 1 ? g1.push({
                            s: y1.totalShapeLength * p1,
                            e: y1.totalShapeLength * h1
                        }) : p1 >= 1 ? g1.push({
                            s: y1.totalShapeLength * (p1 - 1),
                            e: y1.totalShapeLength * (h1 - 1)
                        }) : (g1.push({
                            s: y1.totalShapeLength * p1,
                            e: y1.totalShapeLength
                        }), g1.push({
                            s: 0,
                            e: y1.totalShapeLength * (h1 - 1)
                        }));
                        var E1 = this.addShapes(y1, g1[0]);
                        if (g1[0].s !== g1[0].e) {
                            if (g1.length > 1) {
                                var M1 = y1.shape.paths.shapes[y1.shape.paths._length - 1];
                                if (M1.c) {
                                    var D1 = E1.pop();
                                    this.addPaths(E1, A1), E1 = this.addShapes(y1, g1[1], D1);
                                } else this.addPaths(E1, A1), E1 = this.addShapes(y1, g1[1]);
                            }
                            this.addPaths(E1, A1);
                        }
                    }
                    y1.shape.paths = A1;
                }
            }
        }, TrimModifier.prototype.addPaths = function(t1, e1) {
            var i1, r1 = t1.length;
            for(i1 = 0; i1 < r1; i1 += 1)e1.addShape(t1[i1]);
        }, TrimModifier.prototype.addSegment = function(t1, e1, i1, r1, s1, a1, n1) {
            s1.setXYAt(e1[0], e1[1], "o", a1), s1.setXYAt(i1[0], i1[1], "i", a1 + 1), n1 && s1.setXYAt(t1[0], t1[1], "v", a1), s1.setXYAt(r1[0], r1[1], "v", a1 + 1);
        }, TrimModifier.prototype.addSegmentFromArray = function(t1, e1, i1, r1) {
            e1.setXYAt(t1[1], t1[5], "o", i1), e1.setXYAt(t1[2], t1[6], "i", i1 + 1), r1 && e1.setXYAt(t1[0], t1[4], "v", i1), e1.setXYAt(t1[3], t1[7], "v", i1 + 1);
        }, TrimModifier.prototype.addShapes = function(t1, e1, i1) {
            var r1 = t1.pathsData, s1 = t1.shape.paths.shapes, a1, n1 = t1.shape.paths._length, f1, o1, d1 = 0, v1, P1, m1, b1, g1 = [], y1, A1 = !0;
            for(i1 ? (P1 = i1._length, y1 = i1._length) : (i1 = shapePool.newElement(), P1 = 0, y1 = 0), g1.push(i1), a1 = 0; a1 < n1; a1 += 1){
                for(m1 = r1[a1].lengths, i1.c = s1[a1].c, o1 = s1[a1].c ? m1.length : m1.length + 1, f1 = 1; f1 < o1; f1 += 1)if (v1 = m1[f1 - 1], d1 + v1.addedLength < e1.s) d1 += v1.addedLength, i1.c = !1;
                else if (d1 > e1.e) {
                    i1.c = !1;
                    break;
                } else e1.s <= d1 && e1.e >= d1 + v1.addedLength ? (this.addSegment(s1[a1].v[f1 - 1], s1[a1].o[f1 - 1], s1[a1].i[f1], s1[a1].v[f1], i1, P1, A1), A1 = !1) : (b1 = bez.getNewSegment(s1[a1].v[f1 - 1], s1[a1].v[f1], s1[a1].o[f1 - 1], s1[a1].i[f1], (e1.s - d1) / v1.addedLength, (e1.e - d1) / v1.addedLength, m1[f1 - 1]), this.addSegmentFromArray(b1, i1, P1, A1), A1 = !1, i1.c = !1), d1 += v1.addedLength, P1 += 1;
                if (s1[a1].c && m1.length) {
                    if (v1 = m1[f1 - 1], d1 <= e1.e) {
                        var p1 = m1[f1 - 1].addedLength;
                        e1.s <= d1 && e1.e >= d1 + p1 ? (this.addSegment(s1[a1].v[f1 - 1], s1[a1].o[f1 - 1], s1[a1].i[0], s1[a1].v[0], i1, P1, A1), A1 = !1) : (b1 = bez.getNewSegment(s1[a1].v[f1 - 1], s1[a1].v[0], s1[a1].o[f1 - 1], s1[a1].i[0], (e1.s - d1) / p1, (e1.e - d1) / p1, m1[f1 - 1]), this.addSegmentFromArray(b1, i1, P1, A1), A1 = !1, i1.c = !1);
                    } else i1.c = !1;
                    d1 += v1.addedLength, P1 += 1;
                }
                if (i1._length && (i1.setXYAt(i1.v[y1][0], i1.v[y1][1], "i", y1), i1.setXYAt(i1.v[i1._length - 1][0], i1.v[i1._length - 1][1], "o", i1._length - 1)), d1 > e1.e) break;
                a1 < n1 - 1 && (i1 = shapePool.newElement(), A1 = !0, g1.push(i1), P1 = 0);
            }
            return g1;
        };
        function PuckerAndBloatModifier() {}
        extendPrototype([
            ShapeModifier
        ], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t1, e1) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t1, e1.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
        }, PuckerAndBloatModifier.prototype.processPath = function(t1, e1) {
            var i1 = e1 / 100, r1 = [
                0,
                0
            ], s1 = t1._length, a1 = 0;
            for(a1 = 0; a1 < s1; a1 += 1)r1[0] += t1.v[a1][0], r1[1] += t1.v[a1][1];
            r1[0] /= s1, r1[1] /= s1;
            var n1 = shapePool.newElement();
            n1.c = t1.c;
            var f1, o1, d1, v1, P1, m1;
            for(a1 = 0; a1 < s1; a1 += 1)f1 = t1.v[a1][0] + (r1[0] - t1.v[a1][0]) * i1, o1 = t1.v[a1][1] + (r1[1] - t1.v[a1][1]) * i1, d1 = t1.o[a1][0] + (r1[0] - t1.o[a1][0]) * -i1, v1 = t1.o[a1][1] + (r1[1] - t1.o[a1][1]) * -i1, P1 = t1.i[a1][0] + (r1[0] - t1.i[a1][0]) * -i1, m1 = t1.i[a1][1] + (r1[1] - t1.i[a1][1]) * -i1, n1.setTripleAt(f1, o1, d1, v1, P1, m1, a1);
            return n1;
        }, PuckerAndBloatModifier.prototype.processShapes = function(t1) {
            var e1, i1, r1 = this.shapes.length, s1, a1, n1 = this.amount.v;
            if (n1 !== 0) {
                var f1, o1;
                for(i1 = 0; i1 < r1; i1 += 1){
                    if (f1 = this.shapes[i1], o1 = f1.localShapeCollection, !(!f1.shape._mdf && !this._mdf && !t1)) for(o1.releaseShapes(), f1.shape._mdf = !0, e1 = f1.shape.paths.shapes, a1 = f1.shape.paths._length, s1 = 0; s1 < a1; s1 += 1)o1.addShape(this.processPath(e1[s1], n1));
                    f1.shape.paths = f1.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        var TransformPropertyFactory = function() {
            var t1 = [
                0,
                0
            ];
            function e1(o1) {
                var d1 = this._mdf;
                this.iterateDynamicProperties(), this._mdf = this._mdf || d1, this.a && o1.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o1.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o1.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o1.rotate(-this.r.v) : o1.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o1.translate(this.px.v, this.py.v, -this.pz.v) : o1.translate(this.px.v, this.py.v, 0) : o1.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            function i1(o1) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o1) {
                        var d1;
                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                            var v1, P1;
                            if (d1 = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (v1 = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / d1, 0), P1 = this.p.getValueAtTime(this.p.keyframes[0].t / d1, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (v1 = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / d1, 0), P1 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / d1, 0)) : (v1 = this.p.pv, P1 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / d1, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                v1 = [], P1 = [];
                                var m1 = this.px, b1 = this.py;
                                m1._caching.lastFrame + m1.offsetTime <= m1.keyframes[0].t ? (v1[0] = m1.getValueAtTime((m1.keyframes[0].t + .01) / d1, 0), v1[1] = b1.getValueAtTime((b1.keyframes[0].t + .01) / d1, 0), P1[0] = m1.getValueAtTime(m1.keyframes[0].t / d1, 0), P1[1] = b1.getValueAtTime(b1.keyframes[0].t / d1, 0)) : m1._caching.lastFrame + m1.offsetTime >= m1.keyframes[m1.keyframes.length - 1].t ? (v1[0] = m1.getValueAtTime(m1.keyframes[m1.keyframes.length - 1].t / d1, 0), v1[1] = b1.getValueAtTime(b1.keyframes[b1.keyframes.length - 1].t / d1, 0), P1[0] = m1.getValueAtTime((m1.keyframes[m1.keyframes.length - 1].t - .01) / d1, 0), P1[1] = b1.getValueAtTime((b1.keyframes[b1.keyframes.length - 1].t - .01) / d1, 0)) : (v1 = [
                                    m1.pv,
                                    b1.pv
                                ], P1[0] = m1.getValueAtTime((m1._caching.lastFrame + m1.offsetTime - .01) / d1, m1.offsetTime), P1[1] = b1.getValueAtTime((b1._caching.lastFrame + b1.offsetTime - .01) / d1, b1.offsetTime));
                            } else P1 = t1, v1 = P1;
                            this.v.rotate(-Math.atan2(v1[1] - P1[1], v1[0] - P1[0]));
                        }
                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    }
                    this.frameId = this.elem.globalData.frameId;
                }
            }
            function r1() {
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
            function s1() {}
            function a1(o1) {
                this._addDynamicProperty(o1), this.elem.addDynamicProperty(o1), this._isDirty = !0;
            }
            function n1(o1, d1, v1) {
                if (this.elem = o1, this.frameId = -1, this.propType = "transform", this.data = d1, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(v1 || o1), d1.p && d1.p.s ? (this.px = PropertyFactory.getProp(o1, d1.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o1, d1.p.y, 0, 0, this), d1.p.z && (this.pz = PropertyFactory.getProp(o1, d1.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o1, d1.p || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), d1.rx) {
                    if (this.rx = PropertyFactory.getProp(o1, d1.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o1, d1.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o1, d1.rz, 0, degToRads, this), d1.or.k[0].ti) {
                        var P1, m1 = d1.or.k.length;
                        for(P1 = 0; P1 < m1; P1 += 1)d1.or.k[P1].to = null, d1.or.k[P1].ti = null;
                    }
                    this.or = PropertyFactory.getProp(o1, d1.or, 1, degToRads, this), this.or.sh = !0;
                } else this.r = PropertyFactory.getProp(o1, d1.r || {
                    k: 0
                }, 0, degToRads, this);
                d1.sk && (this.sk = PropertyFactory.getProp(o1, d1.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o1, d1.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o1, d1.a || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), this.s = PropertyFactory.getProp(o1, d1.s || {
                    k: [
                        100,
                        100,
                        100
                    ]
                }, 1, .01, this), d1.o ? this.o = PropertyFactory.getProp(o1, d1.o, 0, .01, o1) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
            }
            n1.prototype = {
                applyToMatrix: e1,
                getValue: i1,
                precalculateMatrix: r1,
                autoOrient: s1
            }, extendPrototype([
                DynamicPropertyContainer
            ], n1), n1.prototype.addDynamicProperty = a1, n1.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
            function f1(o1, d1, v1) {
                return new n1(o1, d1, v1);
            }
            return {
                getTransformProperty: f1
            };
        }();
        function RepeaterModifier() {}
        extendPrototype([
            ShapeModifier
        ], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t1, e1) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t1, e1.c, 0, null, this), this.o = PropertyFactory.getProp(t1, e1.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t1, e1.tr, this), this.so = PropertyFactory.getProp(t1, e1.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t1, e1.tr.eo, 0, .01, this), this.data = e1, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix;
        }, RepeaterModifier.prototype.applyTransforms = function(t1, e1, i1, r1, s1, a1) {
            var n1 = a1 ? -1 : 1, f1 = r1.s.v[0] + (1 - r1.s.v[0]) * (1 - s1), o1 = r1.s.v[1] + (1 - r1.s.v[1]) * (1 - s1);
            t1.translate(r1.p.v[0] * n1 * s1, r1.p.v[1] * n1 * s1, r1.p.v[2]), e1.translate(-r1.a.v[0], -r1.a.v[1], r1.a.v[2]), e1.rotate(-r1.r.v * n1 * s1), e1.translate(r1.a.v[0], r1.a.v[1], r1.a.v[2]), i1.translate(-r1.a.v[0], -r1.a.v[1], r1.a.v[2]), i1.scale(a1 ? 1 / f1 : f1, a1 ? 1 / o1 : o1), i1.translate(r1.a.v[0], r1.a.v[1], r1.a.v[2]);
        }, RepeaterModifier.prototype.init = function(t1, e1, i1, r1) {
            for(this.elem = t1, this.arr = e1, this.pos = i1, this.elemsData = r1, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t1), this.initModifierProperties(t1, e1[i1]); i1 > 0;)i1 -= 1, this._elements.unshift(e1[i1]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
        }, RepeaterModifier.prototype.resetElements = function(t1) {
            var e1, i1 = t1.length;
            for(e1 = 0; e1 < i1; e1 += 1)t1[e1]._processed = !1, t1[e1].ty === "gr" && this.resetElements(t1[e1].it);
        }, RepeaterModifier.prototype.cloneElements = function(t1) {
            var e1 = JSON.parse(JSON.stringify(t1));
            return this.resetElements(e1), e1;
        }, RepeaterModifier.prototype.changeGroupRender = function(t1, e1) {
            var i1, r1 = t1.length;
            for(i1 = 0; i1 < r1; i1 += 1)t1[i1]._render = e1, t1[i1].ty === "gr" && this.changeGroupRender(t1[i1].it, e1);
        }, RepeaterModifier.prototype.processShapes = function(t1) {
            var e1, i1, r1, s1, a1, n1 = !1;
            if (this._mdf || t1) {
                var f1 = Math.ceil(this.c.v);
                if (this._groups.length < f1) {
                    for(; this._groups.length < f1;){
                        var o1 = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        o1.it.push({
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
                        }), this.arr.splice(0, 0, o1), this._groups.splice(0, 0, o1), this._currentCopies += 1;
                    }
                    this.elem.reloadShapes(), n1 = !0;
                }
                a1 = 0;
                var d1;
                for(r1 = 0; r1 <= this._groups.length - 1; r1 += 1){
                    if (d1 = a1 < f1, this._groups[r1]._render = d1, this.changeGroupRender(this._groups[r1].it, d1), !d1) {
                        var v1 = this.elemsData[r1].it, P1 = v1[v1.length - 1];
                        P1.transform.op.v !== 0 ? (P1.transform.op._mdf = !0, P1.transform.op.v = 0) : P1.transform.op._mdf = !1;
                    }
                    a1 += 1;
                }
                this._currentCopies = f1;
                var m1 = this.o.v, b1 = m1 % 1, g1 = m1 > 0 ? Math.floor(m1) : Math.ceil(m1), y1 = this.pMatrix.props, A1 = this.rMatrix.props, p1 = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var h1 = 0;
                if (m1 > 0) {
                    for(; h1 < g1;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), h1 += 1;
                    b1 && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, b1, !1), h1 += b1);
                } else if (m1 < 0) {
                    for(; h1 > g1;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), h1 -= 1;
                    b1 && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -b1, !0), h1 -= b1);
                }
                r1 = this.data.m === 1 ? 0 : this._currentCopies - 1, s1 = this.data.m === 1 ? 1 : -1, a1 = this._currentCopies;
                for(var l1, u1; a1;){
                    if (e1 = this.elemsData[r1].it, i1 = e1[e1.length - 1].transform.mProps.v.props, u1 = i1.length, e1[e1.length - 1].transform.mProps._mdf = !0, e1[e1.length - 1].transform.op._mdf = !0, e1[e1.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r1 / (this._currentCopies - 1)), h1 !== 0) {
                        for((r1 !== 0 && s1 === 1 || r1 !== this._currentCopies - 1 && s1 === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(A1[0], A1[1], A1[2], A1[3], A1[4], A1[5], A1[6], A1[7], A1[8], A1[9], A1[10], A1[11], A1[12], A1[13], A1[14], A1[15]), this.matrix.transform(p1[0], p1[1], p1[2], p1[3], p1[4], p1[5], p1[6], p1[7], p1[8], p1[9], p1[10], p1[11], p1[12], p1[13], p1[14], p1[15]), this.matrix.transform(y1[0], y1[1], y1[2], y1[3], y1[4], y1[5], y1[6], y1[7], y1[8], y1[9], y1[10], y1[11], y1[12], y1[13], y1[14], y1[15]), l1 = 0; l1 < u1; l1 += 1)i1[l1] = this.matrix.props[l1];
                        this.matrix.reset();
                    } else for(this.matrix.reset(), l1 = 0; l1 < u1; l1 += 1)i1[l1] = this.matrix.props[l1];
                    h1 += 1, a1 -= 1, r1 += s1;
                }
            } else for(a1 = this._currentCopies, r1 = 0, s1 = 1; a1;)e1 = this.elemsData[r1].it, i1 = e1[e1.length - 1].transform.mProps.v.props, e1[e1.length - 1].transform.mProps._mdf = !1, e1[e1.length - 1].transform.op._mdf = !1, a1 -= 1, r1 += s1;
            return n1;
        }, RepeaterModifier.prototype.addShape = function() {};
        function RoundCornersModifier() {}
        extendPrototype([
            ShapeModifier
        ], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t1, e1) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t1, e1.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
        }, RoundCornersModifier.prototype.processPath = function(t1, e1) {
            var i1 = shapePool.newElement();
            i1.c = t1.c;
            var r1, s1 = t1._length, a1, n1, f1, o1, d1, v1, P1 = 0, m1, b1, g1, y1, A1, p1;
            for(r1 = 0; r1 < s1; r1 += 1)a1 = t1.v[r1], f1 = t1.o[r1], n1 = t1.i[r1], a1[0] === f1[0] && a1[1] === f1[1] && a1[0] === n1[0] && a1[1] === n1[1] ? (r1 === 0 || r1 === s1 - 1) && !t1.c ? (i1.setTripleAt(a1[0], a1[1], f1[0], f1[1], n1[0], n1[1], P1), P1 += 1) : (r1 === 0 ? o1 = t1.v[s1 - 1] : o1 = t1.v[r1 - 1], d1 = Math.sqrt(Math.pow(a1[0] - o1[0], 2) + Math.pow(a1[1] - o1[1], 2)), v1 = d1 ? Math.min(d1 / 2, e1) / d1 : 0, A1 = a1[0] + (o1[0] - a1[0]) * v1, m1 = A1, p1 = a1[1] - (a1[1] - o1[1]) * v1, b1 = p1, g1 = m1 - (m1 - a1[0]) * roundCorner, y1 = b1 - (b1 - a1[1]) * roundCorner, i1.setTripleAt(m1, b1, g1, y1, A1, p1, P1), P1 += 1, r1 === s1 - 1 ? o1 = t1.v[0] : o1 = t1.v[r1 + 1], d1 = Math.sqrt(Math.pow(a1[0] - o1[0], 2) + Math.pow(a1[1] - o1[1], 2)), v1 = d1 ? Math.min(d1 / 2, e1) / d1 : 0, g1 = a1[0] + (o1[0] - a1[0]) * v1, m1 = g1, y1 = a1[1] + (o1[1] - a1[1]) * v1, b1 = y1, A1 = m1 - (m1 - a1[0]) * roundCorner, p1 = b1 - (b1 - a1[1]) * roundCorner, i1.setTripleAt(m1, b1, g1, y1, A1, p1, P1), P1 += 1) : (i1.setTripleAt(t1.v[r1][0], t1.v[r1][1], t1.o[r1][0], t1.o[r1][1], t1.i[r1][0], t1.i[r1][1], P1), P1 += 1);
            return i1;
        }, RoundCornersModifier.prototype.processShapes = function(t1) {
            var e1, i1, r1 = this.shapes.length, s1, a1, n1 = this.rd.v;
            if (n1 !== 0) {
                var f1, o1;
                for(i1 = 0; i1 < r1; i1 += 1){
                    if (f1 = this.shapes[i1], o1 = f1.localShapeCollection, !(!f1.shape._mdf && !this._mdf && !t1)) for(o1.releaseShapes(), f1.shape._mdf = !0, e1 = f1.shape.paths.shapes, a1 = f1.shape.paths._length, s1 = 0; s1 < a1; s1 += 1)o1.addShape(this.processPath(e1[s1], n1));
                    f1.shape.paths = f1.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function floatEqual(t1, e1) {
            return Math.abs(t1 - e1) * 1e5 <= Math.min(Math.abs(t1), Math.abs(e1));
        }
        function floatZero(t1) {
            return Math.abs(t1) <= 1e-5;
        }
        function lerp(t1, e1, i1) {
            return t1 * (1 - i1) + e1 * i1;
        }
        function lerpPoint(t1, e1, i1) {
            return [
                lerp(t1[0], e1[0], i1),
                lerp(t1[1], e1[1], i1)
            ];
        }
        function quadRoots(t1, e1, i1) {
            if (t1 === 0) return [];
            var r1 = e1 * e1 - 4 * t1 * i1;
            if (r1 < 0) return [];
            var s1 = -e1 / (2 * t1);
            if (r1 === 0) return [
                s1
            ];
            var a1 = Math.sqrt(r1) / (2 * t1);
            return [
                s1 - a1,
                s1 + a1
            ];
        }
        function polynomialCoefficients(t1, e1, i1, r1) {
            return [
                -t1 + 3 * e1 - 3 * i1 + r1,
                3 * t1 - 6 * e1 + 3 * i1,
                -3 * t1 + 3 * e1,
                t1
            ];
        }
        function singlePoint(t1) {
            return new PolynomialBezier(t1, t1, t1, t1, !1);
        }
        function PolynomialBezier(t1, e1, i1, r1, s1) {
            s1 && pointEqual(t1, e1) && (e1 = lerpPoint(t1, r1, 1 / 3)), s1 && pointEqual(i1, r1) && (i1 = lerpPoint(t1, r1, 2 / 3));
            var a1 = polynomialCoefficients(t1[0], e1[0], i1[0], r1[0]), n1 = polynomialCoefficients(t1[1], e1[1], i1[1], r1[1]);
            this.a = [
                a1[0],
                n1[0]
            ], this.b = [
                a1[1],
                n1[1]
            ], this.c = [
                a1[2],
                n1[2]
            ], this.d = [
                a1[3],
                n1[3]
            ], this.points = [
                t1,
                e1,
                i1,
                r1
            ];
        }
        PolynomialBezier.prototype.point = function(t1) {
            return [
                ((this.a[0] * t1 + this.b[0]) * t1 + this.c[0]) * t1 + this.d[0],
                ((this.a[1] * t1 + this.b[1]) * t1 + this.c[1]) * t1 + this.d[1]
            ];
        }, PolynomialBezier.prototype.derivative = function(t1) {
            return [
                (3 * t1 * this.a[0] + 2 * this.b[0]) * t1 + this.c[0],
                (3 * t1 * this.a[1] + 2 * this.b[1]) * t1 + this.c[1]
            ];
        }, PolynomialBezier.prototype.tangentAngle = function(t1) {
            var e1 = this.derivative(t1);
            return Math.atan2(e1[1], e1[0]);
        }, PolynomialBezier.prototype.normalAngle = function(t1) {
            var e1 = this.derivative(t1);
            return Math.atan2(e1[0], e1[1]);
        }, PolynomialBezier.prototype.inflectionPoints = function() {
            var t1 = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (floatZero(t1)) return [];
            var e1 = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t1, i1 = e1 * e1 - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t1;
            if (i1 < 0) return [];
            var r1 = Math.sqrt(i1);
            return floatZero(r1) ? r1 > 0 && r1 < 1 ? [
                e1
            ] : [] : [
                e1 - r1,
                e1 + r1
            ].filter(function(s1) {
                return s1 > 0 && s1 < 1;
            });
        }, PolynomialBezier.prototype.split = function(t1) {
            if (t1 <= 0) return [
                singlePoint(this.points[0]),
                this
            ];
            if (t1 >= 1) return [
                this,
                singlePoint(this.points[this.points.length - 1])
            ];
            var e1 = lerpPoint(this.points[0], this.points[1], t1), i1 = lerpPoint(this.points[1], this.points[2], t1), r1 = lerpPoint(this.points[2], this.points[3], t1), s1 = lerpPoint(e1, i1, t1), a1 = lerpPoint(i1, r1, t1), n1 = lerpPoint(s1, a1, t1);
            return [
                new PolynomialBezier(this.points[0], e1, s1, n1, !0),
                new PolynomialBezier(n1, a1, r1, this.points[3], !0)
            ];
        };
        function extrema(t1, e1) {
            var i1 = t1.points[0][e1], r1 = t1.points[t1.points.length - 1][e1];
            if (i1 > r1) {
                var s1 = r1;
                r1 = i1, i1 = s1;
            }
            for(var a1 = quadRoots(3 * t1.a[e1], 2 * t1.b[e1], t1.c[e1]), n1 = 0; n1 < a1.length; n1 += 1)if (a1[n1] > 0 && a1[n1] < 1) {
                var f1 = t1.point(a1[n1])[e1];
                f1 < i1 ? i1 = f1 : f1 > r1 && (r1 = f1);
            }
            return {
                min: i1,
                max: r1
            };
        }
        PolynomialBezier.prototype.bounds = function() {
            return {
                x: extrema(this, 0),
                y: extrema(this, 1)
            };
        }, PolynomialBezier.prototype.boundingBox = function() {
            var t1 = this.bounds();
            return {
                left: t1.x.min,
                right: t1.x.max,
                top: t1.y.min,
                bottom: t1.y.max,
                width: t1.x.max - t1.x.min,
                height: t1.y.max - t1.y.min,
                cx: (t1.x.max + t1.x.min) / 2,
                cy: (t1.y.max + t1.y.min) / 2
            };
        };
        function intersectData(t1, e1, i1) {
            var r1 = t1.boundingBox();
            return {
                cx: r1.cx,
                cy: r1.cy,
                width: r1.width,
                height: r1.height,
                bez: t1,
                t: (e1 + i1) / 2,
                t1: e1,
                t2: i1
            };
        }
        function splitData(t1) {
            var e1 = t1.bez.split(.5);
            return [
                intersectData(e1[0], t1.t1, t1.t),
                intersectData(e1[1], t1.t, t1.t2)
            ];
        }
        function boxIntersect(t1, e1) {
            return Math.abs(t1.cx - e1.cx) * 2 < t1.width + e1.width && Math.abs(t1.cy - e1.cy) * 2 < t1.height + e1.height;
        }
        function intersectsImpl(t1, e1, i1, r1, s1, a1) {
            if (boxIntersect(t1, e1)) {
                if (i1 >= a1 || t1.width <= r1 && t1.height <= r1 && e1.width <= r1 && e1.height <= r1) {
                    s1.push([
                        t1.t,
                        e1.t
                    ]);
                    return;
                }
                var n1 = splitData(t1), f1 = splitData(e1);
                intersectsImpl(n1[0], f1[0], i1 + 1, r1, s1, a1), intersectsImpl(n1[0], f1[1], i1 + 1, r1, s1, a1), intersectsImpl(n1[1], f1[0], i1 + 1, r1, s1, a1), intersectsImpl(n1[1], f1[1], i1 + 1, r1, s1, a1);
            }
        }
        PolynomialBezier.prototype.intersections = function(t1, e1, i1) {
            e1 === void 0 && (e1 = 2), i1 === void 0 && (i1 = 7);
            var r1 = [];
            return intersectsImpl(intersectData(this, 0, 1), intersectData(t1, 0, 1), 0, e1, r1, i1), r1;
        }, PolynomialBezier.shapeSegment = function(t1, e1) {
            var i1 = (e1 + 1) % t1.length();
            return new PolynomialBezier(t1.v[e1], t1.o[e1], t1.i[i1], t1.v[i1], !0);
        }, PolynomialBezier.shapeSegmentInverted = function(t1, e1) {
            var i1 = (e1 + 1) % t1.length();
            return new PolynomialBezier(t1.v[i1], t1.i[i1], t1.o[e1], t1.v[e1], !0);
        };
        function crossProduct(t1, e1) {
            return [
                t1[1] * e1[2] - t1[2] * e1[1],
                t1[2] * e1[0] - t1[0] * e1[2],
                t1[0] * e1[1] - t1[1] * e1[0]
            ];
        }
        function lineIntersection(t1, e1, i1, r1) {
            var s1 = [
                t1[0],
                t1[1],
                1
            ], a1 = [
                e1[0],
                e1[1],
                1
            ], n1 = [
                i1[0],
                i1[1],
                1
            ], f1 = [
                r1[0],
                r1[1],
                1
            ], o1 = crossProduct(crossProduct(s1, a1), crossProduct(n1, f1));
            return floatZero(o1[2]) ? null : [
                o1[0] / o1[2],
                o1[1] / o1[2]
            ];
        }
        function polarOffset(t1, e1, i1) {
            return [
                t1[0] + Math.cos(e1) * i1,
                t1[1] - Math.sin(e1) * i1
            ];
        }
        function pointDistance(t1, e1) {
            return Math.hypot(t1[0] - e1[0], t1[1] - e1[1]);
        }
        function pointEqual(t1, e1) {
            return floatEqual(t1[0], e1[0]) && floatEqual(t1[1], e1[1]);
        }
        function ZigZagModifier() {}
        extendPrototype([
            ShapeModifier
        ], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t1, e1) {
            this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t1, e1.s, 0, null, this), this.frequency = PropertyFactory.getProp(t1, e1.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t1, e1.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
        };
        function setPoint(t1, e1, i1, r1, s1, a1, n1) {
            var f1 = i1 - Math.PI / 2, o1 = i1 + Math.PI / 2, d1 = e1[0] + Math.cos(i1) * r1 * s1, v1 = e1[1] - Math.sin(i1) * r1 * s1;
            t1.setTripleAt(d1, v1, d1 + Math.cos(f1) * a1, v1 - Math.sin(f1) * a1, d1 + Math.cos(o1) * n1, v1 - Math.sin(o1) * n1, t1.length());
        }
        function getPerpendicularVector(t1, e1) {
            var i1 = [
                e1[0] - t1[0],
                e1[1] - t1[1]
            ], r1 = -Math.PI * .5, s1 = [
                Math.cos(r1) * i1[0] - Math.sin(r1) * i1[1],
                Math.sin(r1) * i1[0] + Math.cos(r1) * i1[1]
            ];
            return s1;
        }
        function getProjectingAngle(t1, e1) {
            var i1 = e1 === 0 ? t1.length() - 1 : e1 - 1, r1 = (e1 + 1) % t1.length(), s1 = t1.v[i1], a1 = t1.v[r1], n1 = getPerpendicularVector(s1, a1);
            return Math.atan2(0, 1) - Math.atan2(n1[1], n1[0]);
        }
        function zigZagCorner(t1, e1, i1, r1, s1, a1, n1) {
            var f1 = getProjectingAngle(e1, i1), o1 = e1.v[i1 % e1._length], d1 = e1.v[i1 === 0 ? e1._length - 1 : i1 - 1], v1 = e1.v[(i1 + 1) % e1._length], P1 = a1 === 2 ? Math.sqrt(Math.pow(o1[0] - d1[0], 2) + Math.pow(o1[1] - d1[1], 2)) : 0, m1 = a1 === 2 ? Math.sqrt(Math.pow(o1[0] - v1[0], 2) + Math.pow(o1[1] - v1[1], 2)) : 0;
            setPoint(t1, e1.v[i1 % e1._length], f1, n1, r1, m1 / ((s1 + 1) * 2), P1 / ((s1 + 1) * 2));
        }
        function zigZagSegment(t1, e1, i1, r1, s1, a1) {
            for(var n1 = 0; n1 < r1; n1 += 1){
                var f1 = (n1 + 1) / (r1 + 1), o1 = s1 === 2 ? Math.sqrt(Math.pow(e1.points[3][0] - e1.points[0][0], 2) + Math.pow(e1.points[3][1] - e1.points[0][1], 2)) : 0, d1 = e1.normalAngle(f1), v1 = e1.point(f1);
                setPoint(t1, v1, d1, a1, i1, o1 / ((r1 + 1) * 2), o1 / ((r1 + 1) * 2)), a1 = -a1;
            }
            return a1;
        }
        ZigZagModifier.prototype.processPath = function(t1, e1, i1, r1) {
            var s1 = t1._length, a1 = shapePool.newElement();
            if (a1.c = t1.c, t1.c || (s1 -= 1), s1 === 0) return a1;
            var n1 = -1, f1 = PolynomialBezier.shapeSegment(t1, 0);
            zigZagCorner(a1, t1, 0, e1, i1, r1, n1);
            for(var o1 = 0; o1 < s1; o1 += 1)n1 = zigZagSegment(a1, f1, e1, i1, r1, -n1), o1 === s1 - 1 && !t1.c ? f1 = null : f1 = PolynomialBezier.shapeSegment(t1, (o1 + 1) % s1), zigZagCorner(a1, t1, o1 + 1, e1, i1, r1, n1);
            return a1;
        }, ZigZagModifier.prototype.processShapes = function(t1) {
            var e1, i1, r1 = this.shapes.length, s1, a1, n1 = this.amplitude.v, f1 = Math.max(0, Math.round(this.frequency.v)), o1 = this.pointsType.v;
            if (n1 !== 0) {
                var d1, v1;
                for(i1 = 0; i1 < r1; i1 += 1){
                    if (d1 = this.shapes[i1], v1 = d1.localShapeCollection, !(!d1.shape._mdf && !this._mdf && !t1)) for(v1.releaseShapes(), d1.shape._mdf = !0, e1 = d1.shape.paths.shapes, a1 = d1.shape.paths._length, s1 = 0; s1 < a1; s1 += 1)v1.addShape(this.processPath(e1[s1], n1, f1, o1));
                    d1.shape.paths = d1.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function linearOffset(t1, e1, i1) {
            var r1 = Math.atan2(e1[0] - t1[0], e1[1] - t1[1]);
            return [
                polarOffset(t1, r1, i1),
                polarOffset(e1, r1, i1)
            ];
        }
        function offsetSegment(t1, e1) {
            var i1, r1, s1, a1, n1, f1, o1;
            o1 = linearOffset(t1.points[0], t1.points[1], e1), i1 = o1[0], r1 = o1[1], o1 = linearOffset(t1.points[1], t1.points[2], e1), s1 = o1[0], a1 = o1[1], o1 = linearOffset(t1.points[2], t1.points[3], e1), n1 = o1[0], f1 = o1[1];
            var d1 = lineIntersection(i1, r1, s1, a1);
            d1 === null && (d1 = r1);
            var v1 = lineIntersection(n1, f1, s1, a1);
            return v1 === null && (v1 = n1), new PolynomialBezier(i1, d1, v1, f1);
        }
        function joinLines(t1, e1, i1, r1, s1) {
            var a1 = e1.points[3], n1 = i1.points[0];
            if (r1 === 3 || pointEqual(a1, n1)) return a1;
            if (r1 === 2) {
                var f1 = -e1.tangentAngle(1), o1 = -i1.tangentAngle(0) + Math.PI, d1 = lineIntersection(a1, polarOffset(a1, f1 + Math.PI / 2, 100), n1, polarOffset(n1, f1 + Math.PI / 2, 100)), v1 = d1 ? pointDistance(d1, a1) : pointDistance(a1, n1) / 2, P1 = polarOffset(a1, f1, 2 * v1 * roundCorner);
                return t1.setXYAt(P1[0], P1[1], "o", t1.length() - 1), P1 = polarOffset(n1, o1, 2 * v1 * roundCorner), t1.setTripleAt(n1[0], n1[1], n1[0], n1[1], P1[0], P1[1], t1.length()), n1;
            }
            var m1 = pointEqual(a1, e1.points[2]) ? e1.points[0] : e1.points[2], b1 = pointEqual(n1, i1.points[1]) ? i1.points[3] : i1.points[1], g1 = lineIntersection(m1, a1, n1, b1);
            return g1 && pointDistance(g1, a1) < s1 ? (t1.setTripleAt(g1[0], g1[1], g1[0], g1[1], g1[0], g1[1], t1.length()), g1) : a1;
        }
        function getIntersection(t1, e1) {
            var i1 = t1.intersections(e1);
            return i1.length && floatEqual(i1[0][0], 1) && i1.shift(), i1.length ? i1[0] : null;
        }
        function pruneSegmentIntersection(t1, e1) {
            var i1 = t1.slice(), r1 = e1.slice(), s1 = getIntersection(t1[t1.length - 1], e1[0]);
            return s1 && (i1[t1.length - 1] = t1[t1.length - 1].split(s1[0])[0], r1[0] = e1[0].split(s1[1])[1]), t1.length > 1 && e1.length > 1 && (s1 = getIntersection(t1[0], e1[e1.length - 1]), s1) ? [
                [
                    t1[0].split(s1[0])[0]
                ],
                [
                    e1[e1.length - 1].split(s1[1])[1]
                ]
            ] : [
                i1,
                r1
            ];
        }
        function pruneIntersections(t1) {
            for(var e1, i1 = 1; i1 < t1.length; i1 += 1)e1 = pruneSegmentIntersection(t1[i1 - 1], t1[i1]), t1[i1 - 1] = e1[0], t1[i1] = e1[1];
            return t1.length > 1 && (e1 = pruneSegmentIntersection(t1[t1.length - 1], t1[0]), t1[t1.length - 1] = e1[0], t1[0] = e1[1]), t1;
        }
        function offsetSegmentSplit(t1, e1) {
            var i1 = t1.inflectionPoints(), r1, s1, a1, n1;
            if (i1.length === 0) return [
                offsetSegment(t1, e1)
            ];
            if (i1.length === 1 || floatEqual(i1[1], 1)) return a1 = t1.split(i1[0]), r1 = a1[0], s1 = a1[1], [
                offsetSegment(r1, e1),
                offsetSegment(s1, e1)
            ];
            a1 = t1.split(i1[0]), r1 = a1[0];
            var f1 = (i1[1] - i1[0]) / (1 - i1[0]);
            return a1 = a1[1].split(f1), n1 = a1[0], s1 = a1[1], [
                offsetSegment(r1, e1),
                offsetSegment(n1, e1),
                offsetSegment(s1, e1)
            ];
        }
        function OffsetPathModifier() {}
        extendPrototype([
            ShapeModifier
        ], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t1, e1) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t1, e1.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t1, e1.ml, 0, null, this), this.lineJoin = e1.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
        }, OffsetPathModifier.prototype.processPath = function(t1, e1, i1, r1) {
            var s1 = shapePool.newElement();
            s1.c = t1.c;
            var a1 = t1.length();
            t1.c || (a1 -= 1);
            var n1, f1, o1, d1 = [];
            for(n1 = 0; n1 < a1; n1 += 1)o1 = PolynomialBezier.shapeSegment(t1, n1), d1.push(offsetSegmentSplit(o1, e1));
            if (!t1.c) for(n1 = a1 - 1; n1 >= 0; n1 -= 1)o1 = PolynomialBezier.shapeSegmentInverted(t1, n1), d1.push(offsetSegmentSplit(o1, e1));
            d1 = pruneIntersections(d1);
            var v1 = null, P1 = null;
            for(n1 = 0; n1 < d1.length; n1 += 1){
                var m1 = d1[n1];
                for(P1 && (v1 = joinLines(s1, P1, m1[0], i1, r1)), P1 = m1[m1.length - 1], f1 = 0; f1 < m1.length; f1 += 1)o1 = m1[f1], v1 && pointEqual(o1.points[0], v1) ? s1.setXYAt(o1.points[1][0], o1.points[1][1], "o", s1.length() - 1) : s1.setTripleAt(o1.points[0][0], o1.points[0][1], o1.points[1][0], o1.points[1][1], o1.points[0][0], o1.points[0][1], s1.length()), s1.setTripleAt(o1.points[3][0], o1.points[3][1], o1.points[3][0], o1.points[3][1], o1.points[2][0], o1.points[2][1], s1.length()), v1 = o1.points[3];
            }
            return d1.length && joinLines(s1, P1, d1[0][0], i1, r1), s1;
        }, OffsetPathModifier.prototype.processShapes = function(t1) {
            var e1, i1, r1 = this.shapes.length, s1, a1, n1 = this.amount.v, f1 = this.miterLimit.v, o1 = this.lineJoin;
            if (n1 !== 0) {
                var d1, v1;
                for(i1 = 0; i1 < r1; i1 += 1){
                    if (d1 = this.shapes[i1], v1 = d1.localShapeCollection, !(!d1.shape._mdf && !this._mdf && !t1)) for(v1.releaseShapes(), d1.shape._mdf = !0, e1 = d1.shape.paths.shapes, a1 = d1.shape.paths._length, s1 = 0; s1 < a1; s1 += 1)v1.addShape(this.processPath(e1[s1], n1, o1, f1));
                    d1.shape.paths = d1.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function getFontProperties(t1) {
            for(var e1 = t1.fStyle ? t1.fStyle.split(" ") : [], i1 = "normal", r1 = "normal", s1 = e1.length, a1, n1 = 0; n1 < s1; n1 += 1)switch(a1 = e1[n1].toLowerCase(), a1){
                case "italic":
                    r1 = "italic";
                    break;
                case "bold":
                    i1 = "700";
                    break;
                case "black":
                    i1 = "900";
                    break;
                case "medium":
                    i1 = "500";
                    break;
                case "regular":
                case "normal":
                    i1 = "400";
                    break;
                case "light":
                case "thin":
                    i1 = "200";
                    break;
            }
            return {
                style: r1,
                weight: t1.fWeight || i1
            };
        }
        var FontManager = function() {
            var t1 = 5e3, e1 = {
                w: 0,
                size: 0,
                shapes: [],
                data: {
                    shapes: []
                }
            }, i1 = [];
            i1 = i1.concat([
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
            var r1 = 127988, s1 = 917631, a1 = 917601, n1 = 917626, f1 = 65039, o1 = 8205, d1 = 127462, v1 = 127487, P1 = [
                "d83cdffb",
                "d83cdffc",
                "d83cdffd",
                "d83cdffe",
                "d83cdfff"
            ];
            function m1(x1) {
                var _1 = x1.split(","), c1, S1 = _1.length, F1 = [];
                for(c1 = 0; c1 < S1; c1 += 1)_1[c1] !== "sans-serif" && _1[c1] !== "monospace" && F1.push(_1[c1]);
                return F1.join(",");
            }
            function b1(x1, _1) {
                var c1 = createTag("span");
                c1.setAttribute("aria-hidden", !0), c1.style.fontFamily = _1;
                var S1 = createTag("span");
                S1.innerText = "giItT1WQy@!-/#", c1.style.position = "absolute", c1.style.left = "-10000px", c1.style.top = "-10000px", c1.style.fontSize = "300px", c1.style.fontVariant = "normal", c1.style.fontStyle = "normal", c1.style.fontWeight = "normal", c1.style.letterSpacing = "0", c1.appendChild(S1), document.body.appendChild(c1);
                var F1 = S1.offsetWidth;
                return S1.style.fontFamily = m1(x1) + ", " + _1, {
                    node: S1,
                    w: F1,
                    parent: c1
                };
            }
            function g1() {
                var x1, _1 = this.fonts.length, c1, S1, F1 = _1;
                for(x1 = 0; x1 < _1; x1 += 1)this.fonts[x1].loaded ? F1 -= 1 : this.fonts[x1].fOrigin === "n" || this.fonts[x1].origin === 0 ? this.fonts[x1].loaded = !0 : (c1 = this.fonts[x1].monoCase.node, S1 = this.fonts[x1].monoCase.w, c1.offsetWidth !== S1 ? (F1 -= 1, this.fonts[x1].loaded = !0) : (c1 = this.fonts[x1].sansCase.node, S1 = this.fonts[x1].sansCase.w, c1.offsetWidth !== S1 && (F1 -= 1, this.fonts[x1].loaded = !0)), this.fonts[x1].loaded && (this.fonts[x1].sansCase.parent.parentNode.removeChild(this.fonts[x1].sansCase.parent), this.fonts[x1].monoCase.parent.parentNode.removeChild(this.fonts[x1].monoCase.parent)));
                F1 !== 0 && Date.now() - this.initTime < t1 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            }
            function y1(x1, _1) {
                var c1 = document.body && _1 ? "svg" : "canvas", S1, F1 = getFontProperties(x1);
                if (c1 === "svg") {
                    var T1 = createNS("text");
                    T1.style.fontSize = "100px", T1.setAttribute("font-family", x1.fFamily), T1.setAttribute("font-style", F1.style), T1.setAttribute("font-weight", F1.weight), T1.textContent = "1", x1.fClass ? (T1.style.fontFamily = "inherit", T1.setAttribute("class", x1.fClass)) : T1.style.fontFamily = x1.fFamily, _1.appendChild(T1), S1 = T1;
                } else {
                    var N1 = new OffscreenCanvas(500, 500).getContext("2d");
                    N1.font = F1.style + " " + F1.weight + " 100px " + x1.fFamily, S1 = N1;
                }
                function L1(H1) {
                    return c1 === "svg" ? (S1.textContent = H1, S1.getComputedTextLength()) : S1.measureText(H1).width;
                }
                return {
                    measureText: L1
                };
            }
            function A1(x1, _1) {
                if (!x1) {
                    this.isLoaded = !0;
                    return;
                }
                if (this.chars) {
                    this.isLoaded = !0, this.fonts = x1.list;
                    return;
                }
                if (!document.body) {
                    this.isLoaded = !0, x1.list.forEach(function(X1) {
                        X1.helper = y1(X1), X1.cache = {};
                    }), this.fonts = x1.list;
                    return;
                }
                var c1 = x1.list, S1, F1 = c1.length, T1 = F1;
                for(S1 = 0; S1 < F1; S1 += 1){
                    var N1 = !0, L1, H1;
                    if (c1[S1].loaded = !1, c1[S1].monoCase = b1(c1[S1].fFamily, "monospace"), c1[S1].sansCase = b1(c1[S1].fFamily, "sans-serif"), !c1[S1].fPath) c1[S1].loaded = !0, T1 -= 1;
                    else if (c1[S1].fOrigin === "p" || c1[S1].origin === 3) {
                        if (L1 = document.querySelectorAll('style[f-forigin="p"][f-family="' + c1[S1].fFamily + '"], style[f-origin="3"][f-family="' + c1[S1].fFamily + '"]'), L1.length > 0 && (N1 = !1), N1) {
                            var O1 = createTag("style");
                            O1.setAttribute("f-forigin", c1[S1].fOrigin), O1.setAttribute("f-origin", c1[S1].origin), O1.setAttribute("f-family", c1[S1].fFamily), O1.type = "text/css", O1.innerText = "@font-face {font-family: " + c1[S1].fFamily + "; font-style: normal; src: url('" + c1[S1].fPath + "');}", _1.appendChild(O1);
                        }
                    } else if (c1[S1].fOrigin === "g" || c1[S1].origin === 1) {
                        for(L1 = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), H1 = 0; H1 < L1.length; H1 += 1)L1[H1].href.indexOf(c1[S1].fPath) !== -1 && (N1 = !1);
                        if (N1) {
                            var q1 = createTag("link");
                            q1.setAttribute("f-forigin", c1[S1].fOrigin), q1.setAttribute("f-origin", c1[S1].origin), q1.type = "text/css", q1.rel = "stylesheet", q1.href = c1[S1].fPath, document.body.appendChild(q1);
                        }
                    } else if (c1[S1].fOrigin === "t" || c1[S1].origin === 2) {
                        for(L1 = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), H1 = 0; H1 < L1.length; H1 += 1)c1[S1].fPath === L1[H1].src && (N1 = !1);
                        if (N1) {
                            var $1 = createTag("link");
                            $1.setAttribute("f-forigin", c1[S1].fOrigin), $1.setAttribute("f-origin", c1[S1].origin), $1.setAttribute("rel", "stylesheet"), $1.setAttribute("href", c1[S1].fPath), _1.appendChild($1);
                        }
                    }
                    c1[S1].helper = y1(c1[S1], _1), c1[S1].cache = {}, this.fonts.push(c1[S1]);
                }
                T1 === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
            function p1(x1) {
                if (x1) {
                    this.chars || (this.chars = []);
                    var _1, c1 = x1.length, S1, F1 = this.chars.length, T1;
                    for(_1 = 0; _1 < c1; _1 += 1){
                        for(S1 = 0, T1 = !1; S1 < F1;)this.chars[S1].style === x1[_1].style && this.chars[S1].fFamily === x1[_1].fFamily && this.chars[S1].ch === x1[_1].ch && (T1 = !0), S1 += 1;
                        T1 || (this.chars.push(x1[_1]), F1 += 1);
                    }
                }
            }
            function h1(x1, _1, c1) {
                for(var S1 = 0, F1 = this.chars.length; S1 < F1;){
                    if (this.chars[S1].ch === x1 && this.chars[S1].style === _1 && this.chars[S1].fFamily === c1) return this.chars[S1];
                    S1 += 1;
                }
                return (typeof x1 == "string" && x1.charCodeAt(0) !== 13 || !x1) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", x1, _1, c1)), e1;
            }
            function l1(x1, _1, c1) {
                var S1 = this.getFontByName(_1), F1 = x1;
                if (!S1.cache[F1]) {
                    var T1 = S1.helper;
                    if (x1 === " ") {
                        var N1 = T1.measureText("|" + x1 + "|"), L1 = T1.measureText("||");
                        S1.cache[F1] = (N1 - L1) / 100;
                    } else S1.cache[F1] = T1.measureText(x1) / 100;
                }
                return S1.cache[F1] * c1;
            }
            function u1(x1) {
                for(var _1 = 0, c1 = this.fonts.length; _1 < c1;){
                    if (this.fonts[_1].fName === x1) return this.fonts[_1];
                    _1 += 1;
                }
                return this.fonts[0];
            }
            function E1(x1) {
                var _1 = 0, c1 = x1.charCodeAt(0);
                if (c1 >= 55296 && c1 <= 56319) {
                    var S1 = x1.charCodeAt(1);
                    S1 >= 56320 && S1 <= 57343 && (_1 = (c1 - 55296) * 1024 + S1 - 56320 + 65536);
                }
                return _1;
            }
            function M1(x1, _1) {
                var c1 = x1.toString(16) + _1.toString(16);
                return P1.indexOf(c1) !== -1;
            }
            function D1(x1) {
                return x1 === o1;
            }
            function k1(x1) {
                return x1 === f1;
            }
            function I1(x1) {
                var _1 = E1(x1);
                return _1 >= d1 && _1 <= v1;
            }
            function R1(x1) {
                return I1(x1.substr(0, 2)) && I1(x1.substr(2, 2));
            }
            function V1(x1) {
                return i1.indexOf(x1) !== -1;
            }
            function B1(x1, _1) {
                var c1 = E1(x1.substr(_1, 2));
                if (c1 !== r1) return !1;
                var S1 = 0;
                for(_1 += 2; S1 < 5;){
                    if (c1 = E1(x1.substr(_1, 2)), c1 < a1 || c1 > n1) return !1;
                    S1 += 1, _1 += 2;
                }
                return E1(x1.substr(_1, 2)) === s1;
            }
            function G1() {
                this.isLoaded = !0;
            }
            var C1 = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
            };
            C1.isModifier = M1, C1.isZeroWidthJoiner = D1, C1.isFlagEmoji = R1, C1.isRegionalCode = I1, C1.isCombinedCharacter = V1, C1.isRegionalFlag = B1, C1.isVariationSelector = k1, C1.BLACK_FLAG_CODE_POINT = r1;
            var w1 = {
                addChars: p1,
                addFonts: A1,
                getCharData: h1,
                getFontByName: u1,
                measureText: l1,
                checkLoadedFonts: g1,
                setIsLoaded: G1
            };
            return C1.prototype = w1, C1;
        }();
        function SlotManager(t1) {
            this.animationData = t1;
        }
        SlotManager.prototype.getProp = function(t1) {
            return this.animationData.slots && this.animationData.slots[t1.sid] ? Object.assign(t1, this.animationData.slots[t1.sid].p) : t1;
        };
        function slotFactory(t1) {
            return new SlotManager(t1);
        }
        function RenderableElement() {}
        RenderableElement.prototype = {
            initRenderable: function() {
                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
            },
            addRenderableComponent: function(t1) {
                this.renderableComponents.indexOf(t1) === -1 && this.renderableComponents.push(t1);
            },
            removeRenderableComponent: function(t1) {
                this.renderableComponents.indexOf(t1) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(t1), 1);
            },
            prepareRenderableFrame: function(t1) {
                this.checkLayerLimits(t1);
            },
            checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
            },
            checkLayerLimits: function(t1) {
                this.data.ip - this.data.st <= t1 && this.data.op - this.data.st > t1 ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
            },
            renderRenderable: function() {
                var t1, e1 = this.renderableComponents.length;
                for(t1 = 0; t1 < e1; t1 += 1)this.renderableComponents[t1].renderFrame(this._isFirstFrame);
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
        var getBlendMode = function() {
            var t1 = {
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
            return function(e1) {
                return t1[e1] || "";
            };
        }();
        function SliderEffect(t1, e1, i1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, i1);
        }
        function AngleEffect(t1, e1, i1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, i1);
        }
        function ColorEffect(t1, e1, i1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 1, 0, i1);
        }
        function PointEffect(t1, e1, i1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 1, 0, i1);
        }
        function LayerIndexEffect(t1, e1, i1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, i1);
        }
        function MaskIndexEffect(t1, e1, i1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, i1);
        }
        function CheckboxEffect(t1, e1, i1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, i1);
        }
        function NoValueEffect() {
            this.p = {};
        }
        function EffectsManager(t1, e1) {
            var i1 = t1.ef || [];
            this.effectElements = [];
            var r1, s1 = i1.length, a1;
            for(r1 = 0; r1 < s1; r1 += 1)a1 = new GroupEffect(i1[r1], e1), this.effectElements.push(a1);
        }
        function GroupEffect(t1, e1) {
            this.init(t1, e1);
        }
        extendPrototype([
            DynamicPropertyContainer
        ], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t1, e1) {
            this.data = t1, this.effectElements = [], this.initDynamicPropertyContainer(e1);
            var i1, r1 = this.data.ef.length, s1, a1 = this.data.ef;
            for(i1 = 0; i1 < r1; i1 += 1){
                switch(s1 = null, a1[i1].ty){
                    case 0:
                        s1 = new SliderEffect(a1[i1], e1, this);
                        break;
                    case 1:
                        s1 = new AngleEffect(a1[i1], e1, this);
                        break;
                    case 2:
                        s1 = new ColorEffect(a1[i1], e1, this);
                        break;
                    case 3:
                        s1 = new PointEffect(a1[i1], e1, this);
                        break;
                    case 4:
                    case 7:
                        s1 = new CheckboxEffect(a1[i1], e1, this);
                        break;
                    case 10:
                        s1 = new LayerIndexEffect(a1[i1], e1, this);
                        break;
                    case 11:
                        s1 = new MaskIndexEffect(a1[i1], e1, this);
                        break;
                    case 5:
                        s1 = new EffectsManager(a1[i1], e1);
                        break;
                    default:
                        s1 = new NoValueEffect(a1[i1]);
                        break;
                }
                s1 && this.effectElements.push(s1);
            }
        };
        function BaseElement() {}
        BaseElement.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask) return !1;
                for(var t1 = 0, e1 = this.data.masksProperties.length; t1 < e1;){
                    if (this.data.masksProperties[t1].mode !== "n" && this.data.masksProperties[t1].cl !== !1) return !0;
                    t1 += 1;
                }
                return !1;
            },
            initExpressions: function() {
                var t1 = getExpressionInterfaces();
                if (t1) {
                    var e1 = t1("layer"), i1 = t1("effects"), r1 = t1("shape"), s1 = t1("text"), a1 = t1("comp");
                    this.layerInterface = e1(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var n1 = i1.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(n1), this.data.ty === 0 || this.data.xt ? this.compInterface = a1(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = r1(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = s1(this), this.layerInterface.text = this.layerInterface.textInterface);
                }
            },
            setBlendMode: function() {
                var t1 = getBlendMode(this.data.bm), e1 = this.baseElement || this.layerElement;
                e1.style["mix-blend-mode"] = t1;
            },
            initBaseData: function(t1, e1, i1) {
                this.globalData = e1, this.comp = i1, this.data = t1, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
            },
            getType: function() {
                return this.type;
            },
            sourceRectAtTime: function() {}
        };
        function FrameElement() {}
        FrameElement.prototype = {
            initFrame: function() {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
            },
            prepareProperties: function(t1, e1) {
                var i1, r1 = this.dynamicProperties.length;
                for(i1 = 0; i1 < r1; i1 += 1)(e1 || this._isParent && this.dynamicProperties[i1].propType === "transform") && (this.dynamicProperties[i1].getValue(), this.dynamicProperties[i1]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
            },
            addDynamicProperty: function(t1) {
                this.dynamicProperties.indexOf(t1) === -1 && this.dynamicProperties.push(t1);
            }
        };
        function FootageElement(t1, e1, i1) {
            this.initFrame(), this.initRenderable(), this.assetData = e1.getAssetData(t1.refId), this.footageData = e1.imageLoader.getAsset(this.assetData), this.initBaseData(t1, e1, i1);
        }
        FootageElement.prototype.prepareFrame = function() {}, extendPrototype([
            RenderableElement,
            BaseElement,
            FrameElement
        ], FootageElement), FootageElement.prototype.getBaseElement = function() {
            return null;
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
            var t1 = getExpressionInterfaces();
            if (t1) {
                var e1 = t1("footage");
                this.layerInterface = e1(this);
            }
        }, FootageElement.prototype.getFootageData = function() {
            return this.footageData;
        };
        function AudioElement(t1, e1, i1) {
            this.initFrame(), this.initRenderable(), this.assetData = e1.getAssetData(t1.refId), this.initBaseData(t1, e1, i1), this._isPlaying = !1, this._canPlay = !1;
            var r1 = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(r1), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t1.tm ? PropertyFactory.getProp(this, t1.tm, 0, e1.frameRate, this) : {
                _placeholder: !0
            }, this.lv = PropertyFactory.getProp(this, t1.au && t1.au.lv ? t1.au.lv : {
                k: [
                    100
                ]
            }, 1, .01, this);
        }
        AudioElement.prototype.prepareFrame = function(t1) {
            if (this.prepareRenderableFrame(t1, !0), this.prepareProperties(t1, !0), this.tm._placeholder) this._currentTime = t1 / this.data.sr;
            else {
                var e1 = this.tm.v;
                this._currentTime = e1;
            }
            this._volume = this.lv.v[0];
            var i1 = this._volume * this._volumeMultiplier;
            this._previousVolume !== i1 && (this._previousVolume = i1, this.audio.volume(i1));
        }, extendPrototype([
            RenderableElement,
            BaseElement,
            FrameElement
        ], AudioElement), AudioElement.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
            this.audio.pause(), this._isPlaying = !1;
        }, AudioElement.prototype.pause = function() {
            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
        }, AudioElement.prototype.resume = function() {
            this._canPlay = !0;
        }, AudioElement.prototype.setRate = function(t1) {
            this.audio.rate(t1);
        }, AudioElement.prototype.volume = function(t1) {
            this._volumeMultiplier = t1, this._previousVolume = t1 * this._volume, this.audio.volume(this._previousVolume);
        }, AudioElement.prototype.getBaseElement = function() {
            return null;
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {};
        function BaseRenderer() {}
        BaseRenderer.prototype.checkLayers = function(t1) {
            var e1, i1 = this.layers.length, r1;
            for(this.completeLayers = !0, e1 = i1 - 1; e1 >= 0; e1 -= 1)this.elements[e1] || (r1 = this.layers[e1], r1.ip - r1.st <= t1 - this.layers[e1].st && r1.op - r1.st > t1 - this.layers[e1].st && this.buildItem(e1)), this.completeLayers = this.elements[e1] ? this.completeLayers : !1;
            this.checkPendingElements();
        }, BaseRenderer.prototype.createItem = function(t1) {
            switch(t1.ty){
                case 2:
                    return this.createImage(t1);
                case 0:
                    return this.createComp(t1);
                case 1:
                    return this.createSolid(t1);
                case 3:
                    return this.createNull(t1);
                case 4:
                    return this.createShape(t1);
                case 5:
                    return this.createText(t1);
                case 6:
                    return this.createAudio(t1);
                case 13:
                    return this.createCamera(t1);
                case 15:
                    return this.createFootage(t1);
                default:
                    return this.createNull(t1);
            }
        }, BaseRenderer.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.");
        }, BaseRenderer.prototype.createAudio = function(t1) {
            return new AudioElement(t1, this.globalData, this);
        }, BaseRenderer.prototype.createFootage = function(t1) {
            return new FootageElement(t1, this.globalData, this);
        }, BaseRenderer.prototype.buildAllItems = function() {
            var t1, e1 = this.layers.length;
            for(t1 = 0; t1 < e1; t1 += 1)this.buildItem(t1);
            this.checkPendingElements();
        }, BaseRenderer.prototype.includeLayers = function(t1) {
            this.completeLayers = !1;
            var e1, i1 = t1.length, r1, s1 = this.layers.length;
            for(e1 = 0; e1 < i1; e1 += 1)for(r1 = 0; r1 < s1;){
                if (this.layers[r1].id === t1[e1].id) {
                    this.layers[r1] = t1[e1];
                    break;
                }
                r1 += 1;
            }
        }, BaseRenderer.prototype.setProjectInterface = function(t1) {
            this.globalData.projectInterface = t1;
        }, BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems();
        }, BaseRenderer.prototype.buildElementParenting = function(t1, e1, i1) {
            for(var r1 = this.elements, s1 = this.layers, a1 = 0, n1 = s1.length; a1 < n1;)s1[a1].ind == e1 && (!r1[a1] || r1[a1] === !0 ? (this.buildItem(a1), this.addPendingElement(t1)) : (i1.push(r1[a1]), r1[a1].setAsParent(), s1[a1].parent !== void 0 ? this.buildElementParenting(t1, s1[a1].parent, i1) : t1.setHierarchy(i1))), a1 += 1;
        }, BaseRenderer.prototype.addPendingElement = function(t1) {
            this.pendingElements.push(t1);
        }, BaseRenderer.prototype.searchExtraCompositions = function(t1) {
            var e1, i1 = t1.length;
            for(e1 = 0; e1 < i1; e1 += 1)if (t1[e1].xt) {
                var r1 = this.createComp(t1[e1]);
                r1.initExpressions(), this.globalData.projectInterface.registerComposition(r1);
            }
        }, BaseRenderer.prototype.getElementById = function(t1) {
            var e1, i1 = this.elements.length;
            for(e1 = 0; e1 < i1; e1 += 1)if (this.elements[e1].data.ind === t1) return this.elements[e1];
            return null;
        }, BaseRenderer.prototype.getElementByPath = function(t1) {
            var e1 = t1.shift(), i1;
            if (typeof e1 == "number") i1 = this.elements[e1];
            else {
                var r1, s1 = this.elements.length;
                for(r1 = 0; r1 < s1; r1 += 1)if (this.elements[r1].data.nm === e1) {
                    i1 = this.elements[r1];
                    break;
                }
            }
            return t1.length === 0 ? i1 : i1.getElementByPath(t1);
        }, BaseRenderer.prototype.setupGlobalData = function(t1, e1) {
            this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t1), this.globalData.fontManager.addChars(t1.chars), this.globalData.fontManager.addFonts(t1.fonts, e1), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t1.fr, this.globalData.nm = t1.nm, this.globalData.compSize = {
                w: t1.w,
                h: t1.h
            };
        };
        var effectTypes = {
            TRANSFORM_EFFECT: "transformEFfect"
        };
        function TransformElement() {}
        TransformElement.prototype = {
            initTransform: function() {
                var t1 = new Matrix;
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _localMatMdf: !1,
                    _opMdf: !1,
                    mat: t1,
                    localMat: t1,
                    localOpacity: 1
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
            },
            renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var t1, e1 = this.finalTransform.mat, i1 = 0, r1 = this.hierarchy.length;
                    if (!this.finalTransform._matMdf) for(; i1 < r1;){
                        if (this.hierarchy[i1].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = !0;
                            break;
                        }
                        i1 += 1;
                    }
                    if (this.finalTransform._matMdf) for(t1 = this.finalTransform.mProp.v.props, e1.cloneFromProps(t1), i1 = 0; i1 < r1; i1 += 1)e1.multiply(this.hierarchy[i1].finalTransform.mProp.v);
                }
                this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
            },
            renderLocalTransform: function() {
                if (this.localTransforms) {
                    var t1 = 0, e1 = this.localTransforms.length;
                    if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for(; t1 < e1;)this.localTransforms[t1]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t1]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t1 += 1;
                    if (this.finalTransform._localMatMdf) {
                        var i1 = this.finalTransform.localMat;
                        for(this.localTransforms[0].matrix.clone(i1), t1 = 1; t1 < e1; t1 += 1){
                            var r1 = this.localTransforms[t1].matrix;
                            i1.multiply(r1);
                        }
                        i1.multiply(this.finalTransform.mat);
                    }
                    if (this.finalTransform._opMdf) {
                        var s1 = this.finalTransform.localOpacity;
                        for(t1 = 0; t1 < e1; t1 += 1)s1 *= this.localTransforms[t1].opacity * .01;
                        this.finalTransform.localOpacity = s1;
                    }
                }
            },
            searchEffectTransforms: function() {
                if (this.renderableEffectsManager) {
                    var t1 = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                    if (t1.length) {
                        this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                        var e1 = 0, i1 = t1.length;
                        for(e1 = 0; e1 < i1; e1 += 1)this.localTransforms.push(t1[e1]);
                    }
                }
            },
            globalToLocal: function(t1) {
                var e1 = [];
                e1.push(this.finalTransform);
                for(var i1 = !0, r1 = this.comp; i1;)r1.finalTransform ? (r1.data.hasMask && e1.splice(0, 0, r1.finalTransform), r1 = r1.comp) : i1 = !1;
                var s1, a1 = e1.length, n1;
                for(s1 = 0; s1 < a1; s1 += 1)n1 = e1[s1].mat.applyToPointArray(0, 0, 0), t1 = [
                    t1[0] - n1[0],
                    t1[1] - n1[1],
                    0
                ];
                return t1;
            },
            mHelper: new Matrix
        };
        function MaskElement(t1, e1, i1) {
            this.data = t1, this.element = e1, this.globalData = i1, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var r1 = this.globalData.defs, s1, a1 = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(a1), this.solidPath = "";
            var n1, f1 = this.masksProperties, o1 = 0, d1 = [], v1, P1, m1 = createElementID(), b1, g1, y1, A1, p1 = "clipPath", h1 = "clip-path";
            for(s1 = 0; s1 < a1; s1 += 1)if ((f1[s1].mode !== "a" && f1[s1].mode !== "n" || f1[s1].inv || f1[s1].o.k !== 100 || f1[s1].o.x) && (p1 = "mask", h1 = "mask"), (f1[s1].mode === "s" || f1[s1].mode === "i") && o1 === 0 ? (b1 = createNS("rect"), b1.setAttribute("fill", "#ffffff"), b1.setAttribute("width", this.element.comp.data.w || 0), b1.setAttribute("height", this.element.comp.data.h || 0), d1.push(b1)) : b1 = null, n1 = createNS("path"), f1[s1].mode === "n") this.viewData[s1] = {
                op: PropertyFactory.getProp(this.element, f1[s1].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, f1[s1], 3),
                elem: n1,
                lastPath: ""
            }, r1.appendChild(n1);
            else {
                o1 += 1, n1.setAttribute("fill", f1[s1].mode === "s" ? "#000000" : "#ffffff"), n1.setAttribute("clip-rule", "nonzero");
                var l1;
                if (f1[s1].x.k !== 0 ? (p1 = "mask", h1 = "mask", A1 = PropertyFactory.getProp(this.element, f1[s1].x, 0, null, this.element), l1 = createElementID(), g1 = createNS("filter"), g1.setAttribute("id", l1), y1 = createNS("feMorphology"), y1.setAttribute("operator", "erode"), y1.setAttribute("in", "SourceGraphic"), y1.setAttribute("radius", "0"), g1.appendChild(y1), r1.appendChild(g1), n1.setAttribute("stroke", f1[s1].mode === "s" ? "#000000" : "#ffffff")) : (y1 = null, A1 = null), this.storedData[s1] = {
                    elem: n1,
                    x: A1,
                    expan: y1,
                    lastPath: "",
                    lastOperator: "",
                    filterId: l1,
                    lastRadius: 0
                }, f1[s1].mode === "i") {
                    P1 = d1.length;
                    var u1 = createNS("g");
                    for(v1 = 0; v1 < P1; v1 += 1)u1.appendChild(d1[v1]);
                    var E1 = createNS("mask");
                    E1.setAttribute("mask-type", "alpha"), E1.setAttribute("id", m1 + "_" + o1), E1.appendChild(n1), r1.appendChild(E1), u1.setAttribute("mask", "url(" + getLocationHref() + "#" + m1 + "_" + o1 + ")"), d1.length = 0, d1.push(u1);
                } else d1.push(n1);
                f1[s1].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s1] = {
                    elem: n1,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, f1[s1].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, f1[s1], 3),
                    invRect: b1
                }, this.viewData[s1].prop.k || this.drawPath(f1[s1], this.viewData[s1].prop.v, this.viewData[s1]);
            }
            for(this.maskElement = createNS(p1), a1 = d1.length, s1 = 0; s1 < a1; s1 += 1)this.maskElement.appendChild(d1[s1]);
            o1 > 0 && (this.maskElement.setAttribute("id", m1), this.element.maskedElement.setAttribute(h1, "url(" + getLocationHref() + "#" + m1 + ")"), r1.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
        }
        MaskElement.prototype.getMaskProperty = function(t1) {
            return this.viewData[t1].prop;
        }, MaskElement.prototype.renderFrame = function(t1) {
            var e1 = this.element.finalTransform.mat, i1, r1 = this.masksProperties.length;
            for(i1 = 0; i1 < r1; i1 += 1)if ((this.viewData[i1].prop._mdf || t1) && this.drawPath(this.masksProperties[i1], this.viewData[i1].prop.v, this.viewData[i1]), (this.viewData[i1].op._mdf || t1) && this.viewData[i1].elem.setAttribute("fill-opacity", this.viewData[i1].op.v), this.masksProperties[i1].mode !== "n" && (this.viewData[i1].invRect && (this.element.finalTransform.mProp._mdf || t1) && this.viewData[i1].invRect.setAttribute("transform", e1.getInverseMatrix().to2dCSS()), this.storedData[i1].x && (this.storedData[i1].x._mdf || t1))) {
                var s1 = this.storedData[i1].expan;
                this.storedData[i1].x.v < 0 ? (this.storedData[i1].lastOperator !== "erode" && (this.storedData[i1].lastOperator = "erode", this.storedData[i1].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[i1].filterId + ")")), s1.setAttribute("radius", -this.storedData[i1].x.v)) : (this.storedData[i1].lastOperator !== "dilate" && (this.storedData[i1].lastOperator = "dilate", this.storedData[i1].elem.setAttribute("filter", null)), this.storedData[i1].elem.setAttribute("stroke-width", this.storedData[i1].x.v * 2));
            }
        }, MaskElement.prototype.getMaskelement = function() {
            return this.maskElement;
        }, MaskElement.prototype.createLayerSolidPath = function() {
            var t1 = "M0,0 ";
            return t1 += " h" + this.globalData.compSize.w, t1 += " v" + this.globalData.compSize.h, t1 += " h-" + this.globalData.compSize.w, t1 += " v-" + this.globalData.compSize.h + " ", t1;
        }, MaskElement.prototype.drawPath = function(t1, e1, i1) {
            var r1 = " M" + e1.v[0][0] + "," + e1.v[0][1], s1, a1;
            for(a1 = e1._length, s1 = 1; s1 < a1; s1 += 1)r1 += " C" + e1.o[s1 - 1][0] + "," + e1.o[s1 - 1][1] + " " + e1.i[s1][0] + "," + e1.i[s1][1] + " " + e1.v[s1][0] + "," + e1.v[s1][1];
            if (e1.c && a1 > 1 && (r1 += " C" + e1.o[s1 - 1][0] + "," + e1.o[s1 - 1][1] + " " + e1.i[0][0] + "," + e1.i[0][1] + " " + e1.v[0][0] + "," + e1.v[0][1]), i1.lastPath !== r1) {
                var n1 = "";
                i1.elem && (e1.c && (n1 = t1.inv ? this.solidPath + r1 : r1), i1.elem.setAttribute("d", n1)), i1.lastPath = r1;
            }
        }, MaskElement.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
        };
        var filtersFactory = function() {
            var t1 = {};
            t1.createFilter = e1, t1.createAlphaToLuminanceFilter = i1;
            function e1(r1, s1) {
                var a1 = createNS("filter");
                return a1.setAttribute("id", r1), s1 !== !0 && (a1.setAttribute("filterUnits", "objectBoundingBox"), a1.setAttribute("x", "0%"), a1.setAttribute("y", "0%"), a1.setAttribute("width", "100%"), a1.setAttribute("height", "100%")), a1;
            }
            function i1() {
                var r1 = createNS("feColorMatrix");
                return r1.setAttribute("type", "matrix"), r1.setAttribute("color-interpolation-filters", "sRGB"), r1.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), r1;
            }
            return t1;
        }(), featureSupport = function() {
            var t1 = {
                maskType: !0,
                svgLumaHidden: !0,
                offscreenCanvas: typeof OffscreenCanvas < "u"
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t1.maskType = !1), /firefox/i.test(navigator.userAgent) && (t1.svgLumaHidden = !1), t1;
        }(), registeredEffects$1 = {}, idPrefix = "filter_result_";
        function SVGEffects(t1) {
            var e1, i1 = "SourceGraphic", r1 = t1.data.ef ? t1.data.ef.length : 0, s1 = createElementID(), a1 = filtersFactory.createFilter(s1, !0), n1 = 0;
            this.filters = [];
            var f1;
            for(e1 = 0; e1 < r1; e1 += 1){
                f1 = null;
                var o1 = t1.data.ef[e1].ty;
                if (registeredEffects$1[o1]) {
                    var d1 = registeredEffects$1[o1].effect;
                    f1 = new d1(a1, t1.effectsManager.effectElements[e1], t1, idPrefix + n1, i1), i1 = idPrefix + n1, registeredEffects$1[o1].countsAsEffect && (n1 += 1);
                }
                f1 && this.filters.push(f1);
            }
            n1 && (t1.globalData.defs.appendChild(a1), t1.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s1 + ")")), this.filters.length && t1.addRenderableComponent(this);
        }
        SVGEffects.prototype.renderFrame = function(t1) {
            var e1, i1 = this.filters.length;
            for(e1 = 0; e1 < i1; e1 += 1)this.filters[e1].renderFrame(t1);
        }, SVGEffects.prototype.getEffects = function(t1) {
            var e1, i1 = this.filters.length, r1 = [];
            for(e1 = 0; e1 < i1; e1 += 1)this.filters[e1].type === t1 && r1.push(this.filters[e1]);
            return r1;
        };
        function registerEffect$1(t1, e1, i1) {
            registeredEffects$1[t1] = {
                effect: e1,
                countsAsEffect: i1
            };
        }
        function SVGBaseElement() {}
        SVGBaseElement.prototype = {
            initRendererElement: function() {
                this.layerElement = createNS("g");
            },
            createContainerElements: function() {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var t1 = null;
                if (this.data.td) {
                    this.matteMasks = {};
                    var e1 = createNS("g");
                    e1.setAttribute("id", this.layerId), e1.appendChild(this.layerElement), t1 = e1, this.globalData.defs.appendChild(e1);
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t1 = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
                    var i1 = createNS("clipPath"), r1 = createNS("path");
                    r1.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var s1 = createElementID();
                    if (i1.setAttribute("id", s1), i1.appendChild(r1), this.globalData.defs.appendChild(i1), this.checkMasks()) {
                        var a1 = createNS("g");
                        a1.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s1 + ")"), a1.appendChild(this.layerElement), this.transformedElement = a1, t1 ? t1.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
                    } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s1 + ")");
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
                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms();
            },
            getMatte: function(t1) {
                if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t1]) {
                    var e1 = this.layerId + "_" + t1, i1, r1, s1, a1;
                    if (t1 === 1 || t1 === 3) {
                        var n1 = createNS("mask");
                        n1.setAttribute("id", e1), n1.setAttribute("mask-type", t1 === 3 ? "luminance" : "alpha"), s1 = createNS("use"), s1.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n1.appendChild(s1), this.globalData.defs.appendChild(n1), !featureSupport.maskType && t1 === 1 && (n1.setAttribute("mask-type", "luminance"), i1 = createElementID(), r1 = filtersFactory.createFilter(i1), this.globalData.defs.appendChild(r1), r1.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a1 = createNS("g"), a1.appendChild(s1), n1.appendChild(a1), a1.setAttribute("filter", "url(" + getLocationHref() + "#" + i1 + ")"));
                    } else if (t1 === 2) {
                        var f1 = createNS("mask");
                        f1.setAttribute("id", e1), f1.setAttribute("mask-type", "alpha");
                        var o1 = createNS("g");
                        f1.appendChild(o1), i1 = createElementID(), r1 = filtersFactory.createFilter(i1);
                        var d1 = createNS("feComponentTransfer");
                        d1.setAttribute("in", "SourceGraphic"), r1.appendChild(d1);
                        var v1 = createNS("feFuncA");
                        v1.setAttribute("type", "table"), v1.setAttribute("tableValues", "1.0 0.0"), d1.appendChild(v1), this.globalData.defs.appendChild(r1);
                        var P1 = createNS("rect");
                        P1.setAttribute("width", this.comp.data.w), P1.setAttribute("height", this.comp.data.h), P1.setAttribute("x", "0"), P1.setAttribute("y", "0"), P1.setAttribute("fill", "#ffffff"), P1.setAttribute("opacity", "0"), o1.setAttribute("filter", "url(" + getLocationHref() + "#" + i1 + ")"), o1.appendChild(P1), s1 = createNS("use"), s1.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o1.appendChild(s1), featureSupport.maskType || (f1.setAttribute("mask-type", "luminance"), r1.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a1 = createNS("g"), o1.appendChild(P1), a1.appendChild(this.layerElement), o1.appendChild(a1)), this.globalData.defs.appendChild(f1);
                    }
                    this.matteMasks[t1] = e1;
                }
                return this.matteMasks[t1];
            },
            setMatte: function(t1) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t1 + ")");
            }
        };
        function HierarchyElement() {}
        HierarchyElement.prototype = {
            initHierarchy: function() {
                this.hierarchy = [], this._isParent = !1, this.checkParenting();
            },
            setHierarchy: function(t1) {
                this.hierarchy = t1;
            },
            setAsParent: function() {
                this._isParent = !0;
            },
            checkParenting: function() {
                this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
            }
        };
        function RenderableDOMElement() {}
        (function() {
            var t1 = {
                initElement: function(e1, i1, r1) {
                    this.initFrame(), this.initBaseData(e1, i1, r1), this.initTransform(e1, i1, r1), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
                },
                hide: function() {
                    if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                        var e1 = this.baseElement || this.layerElement;
                        e1.style.display = "none", this.hidden = !0;
                    }
                },
                show: function() {
                    if (this.isInRange && !this.isTransparent) {
                        if (!this.data.hd) {
                            var e1 = this.baseElement || this.layerElement;
                            e1.style.display = "block";
                        }
                        this.hidden = !1, this._isFirstFrame = !0;
                    }
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
                },
                renderInnerContent: function() {},
                prepareFrame: function(e1) {
                    this._mdf = !1, this.prepareRenderableFrame(e1), this.prepareProperties(e1, this.isInRange), this.checkTransparency();
                },
                destroy: function() {
                    this.innerElem = null, this.destroyBaseElement();
                }
            };
            extendPrototype([
                RenderableElement,
                createProxyFunction(t1)
            ], RenderableDOMElement);
        })();
        function IImageElement(t1, e1, i1) {
            this.assetData = e1.getAssetData(t1.refId), this.assetData && this.assetData.sid && (this.assetData = e1.slotManager.getProp(this.assetData)), this.initElement(t1, e1, i1), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            };
        }
        extendPrototype([
            BaseElement,
            TransformElement,
            SVGBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement
        ], IImageElement), IImageElement.prototype.createContent = function() {
            var t1 = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t1), this.layerElement.appendChild(this.innerElem);
        }, IImageElement.prototype.sourceRectAtTime = function() {
            return this.sourceRect;
        };
        function ProcessedElement(t1, e1) {
            this.elem = t1, this.pos = e1;
        }
        function IShapeElement() {}
        IShapeElement.prototype = {
            addShapeToModifiers: function(t1) {
                var e1, i1 = this.shapeModifiers.length;
                for(e1 = 0; e1 < i1; e1 += 1)this.shapeModifiers[e1].addShape(t1);
            },
            isShapeInAnimatedModifiers: function(t1) {
                for(var e1 = 0, i1 = this.shapeModifiers.length; e1 < i1;)if (this.shapeModifiers[e1].isAnimatedWithShape(t1)) return !0;
                return !1;
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var t1, e1 = this.shapes.length;
                    for(t1 = 0; t1 < e1; t1 += 1)this.shapes[t1].sh.reset();
                    e1 = this.shapeModifiers.length;
                    var i1;
                    for(t1 = e1 - 1; t1 >= 0 && (i1 = this.shapeModifiers[t1].processShapes(this._isFirstFrame), !i1); t1 -= 1);
                }
            },
            searchProcessedElement: function(t1) {
                for(var e1 = this.processedElements, i1 = 0, r1 = e1.length; i1 < r1;){
                    if (e1[i1].elem === t1) return e1[i1].pos;
                    i1 += 1;
                }
                return 0;
            },
            addProcessedElement: function(t1, e1) {
                for(var i1 = this.processedElements, r1 = i1.length; r1;)if (r1 -= 1, i1[r1].elem === t1) {
                    i1[r1].pos = e1;
                    return;
                }
                i1.push(new ProcessedElement(t1, e1));
            },
            prepareFrame: function(t1) {
                this.prepareRenderableFrame(t1), this.prepareProperties(t1, this.isInRange);
            }
        };
        var lineCapEnum = {
            1: "butt",
            2: "round",
            3: "square"
        }, lineJoinEnum = {
            1: "miter",
            2: "round",
            3: "bevel"
        };
        function SVGShapeData(t1, e1, i1) {
            this.caches = [], this.styles = [], this.transformers = t1, this.lStr = "", this.sh = i1, this.lvl = e1, this._isAnimated = !!i1.k;
            for(var r1 = 0, s1 = t1.length; r1 < s1;){
                if (t1[r1].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break;
                }
                r1 += 1;
            }
        }
        SVGShapeData.prototype.setAsAnimated = function() {
            this._isAnimated = !0;
        };
        function SVGStyleData(t1, e1) {
            this.data = t1, this.type = t1.ty, this.d = "", this.lvl = e1, this._mdf = !1, this.closed = t1.hd === !0, this.pElem = createNS("path"), this.msElem = null;
        }
        SVGStyleData.prototype.reset = function() {
            this.d = "", this._mdf = !1;
        };
        function DashProperty(t1, e1, i1, r1) {
            this.elem = t1, this.frameId = -1, this.dataProps = createSizedArray(e1.length), this.renderer = i1, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e1.length ? e1.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r1);
            var s1, a1 = e1.length || 0, n1;
            for(s1 = 0; s1 < a1; s1 += 1)n1 = PropertyFactory.getProp(t1, e1[s1].v, 0, 0, this), this.k = n1.k || this.k, this.dataProps[s1] = {
                n: e1[s1].n,
                p: n1
            };
            this.k || this.getValue(!0), this._isAnimated = this.k;
        }
        DashProperty.prototype.getValue = function(t1) {
            if (!(this.elem.globalData.frameId === this.frameId && !t1) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t1, this._mdf)) {
                var e1 = 0, i1 = this.dataProps.length;
                for(this.renderer === "svg" && (this.dashStr = ""), e1 = 0; e1 < i1; e1 += 1)this.dataProps[e1].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e1].p.v : this.dashArray[e1] = this.dataProps[e1].p.v : this.dashoffset[0] = this.dataProps[e1].p.v;
            }
        }, extendPrototype([
            DynamicPropertyContainer
        ], DashProperty);
        function SVGStrokeStyleData(t1, e1, i1) {
            this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t1, e1.o, 0, .01, this), this.w = PropertyFactory.getProp(t1, e1.w, 0, null, this), this.d = new DashProperty(t1, e1.d || {}, "svg", this), this.c = PropertyFactory.getProp(t1, e1.c, 1, 255, this), this.style = i1, this._isAnimated = !!this._isAnimated;
        }
        extendPrototype([
            DynamicPropertyContainer
        ], SVGStrokeStyleData);
        function SVGFillStyleData(t1, e1, i1) {
            this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t1, e1.o, 0, .01, this), this.c = PropertyFactory.getProp(t1, e1.c, 1, 255, this), this.style = i1;
        }
        extendPrototype([
            DynamicPropertyContainer
        ], SVGFillStyleData);
        function SVGNoStyleData(t1, e1, i1) {
            this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.style = i1;
        }
        extendPrototype([
            DynamicPropertyContainer
        ], SVGNoStyleData);
        function GradientProperty(t1, e1, i1) {
            this.data = e1, this.c = createTypedArray("uint8c", e1.p * 4);
            var r1 = e1.k.k[0].s ? e1.k.k[0].s.length - e1.p * 4 : e1.k.k.length - e1.p * 4;
            this.o = createTypedArray("float32", r1), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r1, this.initDynamicPropertyContainer(i1), this.prop = PropertyFactory.getProp(t1, e1.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
        }
        GradientProperty.prototype.comparePoints = function(t1, e1) {
            for(var i1 = 0, r1 = this.o.length / 2, s1; i1 < r1;){
                if (s1 = Math.abs(t1[i1 * 4] - t1[e1 * 4 + i1 * 2]), s1 > .01) return !1;
                i1 += 1;
            }
            return !0;
        }, GradientProperty.prototype.checkCollapsable = function() {
            if (this.o.length / 2 !== this.c.length / 4) return !1;
            if (this.data.k.k[0].s) for(var t1 = 0, e1 = this.data.k.k.length; t1 < e1;){
                if (!this.comparePoints(this.data.k.k[t1].s, this.data.p)) return !1;
                t1 += 1;
            }
            else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0;
        }, GradientProperty.prototype.getValue = function(t1) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t1) {
                var e1, i1 = this.data.p * 4, r1, s1;
                for(e1 = 0; e1 < i1; e1 += 1)r1 = e1 % 4 === 0 ? 100 : 255, s1 = Math.round(this.prop.v[e1] * r1), this.c[e1] !== s1 && (this.c[e1] = s1, this._cmdf = !t1);
                if (this.o.length) for(i1 = this.prop.v.length, e1 = this.data.p * 4; e1 < i1; e1 += 1)r1 = e1 % 2 === 0 ? 100 : 1, s1 = e1 % 2 === 0 ? Math.round(this.prop.v[e1] * 100) : this.prop.v[e1], this.o[e1 - this.data.p * 4] !== s1 && (this.o[e1 - this.data.p * 4] = s1, this._omdf = !t1);
                this._mdf = !t1;
            }
        }, extendPrototype([
            DynamicPropertyContainer
        ], GradientProperty);
        function SVGGradientFillStyleData(t1, e1, i1) {
            this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.initGradientData(t1, e1, i1);
        }
        SVGGradientFillStyleData.prototype.initGradientData = function(t1, e1, i1) {
            this.o = PropertyFactory.getProp(t1, e1.o, 0, .01, this), this.s = PropertyFactory.getProp(t1, e1.s, 1, null, this), this.e = PropertyFactory.getProp(t1, e1.e, 1, null, this), this.h = PropertyFactory.getProp(t1, e1.h || {
                k: 0
            }, 0, .01, this), this.a = PropertyFactory.getProp(t1, e1.a || {
                k: 0
            }, 0, degToRads, this), this.g = new GradientProperty(t1, e1.g, this), this.style = i1, this.stops = [], this.setGradientData(i1.pElem, e1), this.setGradientOpacity(e1, i1), this._isAnimated = !!this._isAnimated;
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t1, e1) {
            var i1 = createElementID(), r1 = createNS(e1.t === 1 ? "linearGradient" : "radialGradient");
            r1.setAttribute("id", i1), r1.setAttribute("spreadMethod", "pad"), r1.setAttribute("gradientUnits", "userSpaceOnUse");
            var s1 = [], a1, n1, f1;
            for(f1 = e1.g.p * 4, n1 = 0; n1 < f1; n1 += 4)a1 = createNS("stop"), r1.appendChild(a1), s1.push(a1);
            t1.setAttribute(e1.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i1 + ")"), this.gf = r1, this.cst = s1;
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t1, e1) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var i1, r1, s1, a1 = createNS("mask"), n1 = createNS("path");
                a1.appendChild(n1);
                var f1 = createElementID(), o1 = createElementID();
                a1.setAttribute("id", o1);
                var d1 = createNS(t1.t === 1 ? "linearGradient" : "radialGradient");
                d1.setAttribute("id", f1), d1.setAttribute("spreadMethod", "pad"), d1.setAttribute("gradientUnits", "userSpaceOnUse"), s1 = t1.g.k.k[0].s ? t1.g.k.k[0].s.length : t1.g.k.k.length;
                var v1 = this.stops;
                for(r1 = t1.g.p * 4; r1 < s1; r1 += 2)i1 = createNS("stop"), i1.setAttribute("stop-color", "rgb(255,255,255)"), d1.appendChild(i1), v1.push(i1);
                n1.setAttribute(t1.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + f1 + ")"), t1.ty === "gs" && (n1.setAttribute("stroke-linecap", lineCapEnum[t1.lc || 2]), n1.setAttribute("stroke-linejoin", lineJoinEnum[t1.lj || 2]), t1.lj === 1 && n1.setAttribute("stroke-miterlimit", t1.ml)), this.of = d1, this.ms = a1, this.ost = v1, this.maskId = o1, e1.msElem = n1;
            }
        }, extendPrototype([
            DynamicPropertyContainer
        ], SVGGradientFillStyleData);
        function SVGGradientStrokeStyleData(t1, e1, i1) {
            this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t1, e1.w, 0, null, this), this.d = new DashProperty(t1, e1.d || {}, "svg", this), this.initGradientData(t1, e1, i1), this._isAnimated = !!this._isAnimated;
        }
        extendPrototype([
            SVGGradientFillStyleData,
            DynamicPropertyContainer
        ], SVGGradientStrokeStyleData);
        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g");
        }
        function SVGTransformData(t1, e1, i1) {
            this.transform = {
                mProps: t1,
                op: e1,
                container: i1
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
        }
        var buildShapeString = function(t1, e1, i1, r1) {
            if (e1 === 0) return "";
            var s1 = t1.o, a1 = t1.i, n1 = t1.v, f1, o1 = " M" + r1.applyToPointStringified(n1[0][0], n1[0][1]);
            for(f1 = 1; f1 < e1; f1 += 1)o1 += " C" + r1.applyToPointStringified(s1[f1 - 1][0], s1[f1 - 1][1]) + " " + r1.applyToPointStringified(a1[f1][0], a1[f1][1]) + " " + r1.applyToPointStringified(n1[f1][0], n1[f1][1]);
            return i1 && e1 && (o1 += " C" + r1.applyToPointStringified(s1[f1 - 1][0], s1[f1 - 1][1]) + " " + r1.applyToPointStringified(a1[0][0], a1[0][1]) + " " + r1.applyToPointStringified(n1[0][0], n1[0][1]), o1 += "z"), o1;
        }, SVGElementsRenderer = function() {
            var t1 = new Matrix, e1 = new Matrix, i1 = {
                createRenderFunction: r1
            };
            function r1(P1) {
                switch(P1.ty){
                    case "fl":
                        return f1;
                    case "gf":
                        return d1;
                    case "gs":
                        return o1;
                    case "st":
                        return v1;
                    case "sh":
                    case "el":
                    case "rc":
                    case "sr":
                        return n1;
                    case "tr":
                        return s1;
                    case "no":
                        return a1;
                    default:
                        return null;
                }
            }
            function s1(P1, m1, b1) {
                (b1 || m1.transform.op._mdf) && m1.transform.container.setAttribute("opacity", m1.transform.op.v), (b1 || m1.transform.mProps._mdf) && m1.transform.container.setAttribute("transform", m1.transform.mProps.v.to2dCSS());
            }
            function a1() {}
            function n1(P1, m1, b1) {
                var g1, y1, A1, p1, h1, l1, u1 = m1.styles.length, E1 = m1.lvl, M1, D1, k1, I1;
                for(l1 = 0; l1 < u1; l1 += 1){
                    if (p1 = m1.sh._mdf || b1, m1.styles[l1].lvl < E1) {
                        for(D1 = e1.reset(), k1 = E1 - m1.styles[l1].lvl, I1 = m1.transformers.length - 1; !p1 && k1 > 0;)p1 = m1.transformers[I1].mProps._mdf || p1, k1 -= 1, I1 -= 1;
                        if (p1) for(k1 = E1 - m1.styles[l1].lvl, I1 = m1.transformers.length - 1; k1 > 0;)D1.multiply(m1.transformers[I1].mProps.v), k1 -= 1, I1 -= 1;
                    } else D1 = t1;
                    if (M1 = m1.sh.paths, y1 = M1._length, p1) {
                        for(A1 = "", g1 = 0; g1 < y1; g1 += 1)h1 = M1.shapes[g1], h1 && h1._length && (A1 += buildShapeString(h1, h1._length, h1.c, D1));
                        m1.caches[l1] = A1;
                    } else A1 = m1.caches[l1];
                    m1.styles[l1].d += P1.hd === !0 ? "" : A1, m1.styles[l1]._mdf = p1 || m1.styles[l1]._mdf;
                }
            }
            function f1(P1, m1, b1) {
                var g1 = m1.style;
                (m1.c._mdf || b1) && g1.pElem.setAttribute("fill", "rgb(" + bmFloor(m1.c.v[0]) + "," + bmFloor(m1.c.v[1]) + "," + bmFloor(m1.c.v[2]) + ")"), (m1.o._mdf || b1) && g1.pElem.setAttribute("fill-opacity", m1.o.v);
            }
            function o1(P1, m1, b1) {
                d1(P1, m1, b1), v1(P1, m1, b1);
            }
            function d1(P1, m1, b1) {
                var g1 = m1.gf, y1 = m1.g._hasOpacity, A1 = m1.s.v, p1 = m1.e.v;
                if (m1.o._mdf || b1) {
                    var h1 = P1.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                    m1.style.pElem.setAttribute(h1, m1.o.v);
                }
                if (m1.s._mdf || b1) {
                    var l1 = P1.t === 1 ? "x1" : "cx", u1 = l1 === "x1" ? "y1" : "cy";
                    g1.setAttribute(l1, A1[0]), g1.setAttribute(u1, A1[1]), y1 && !m1.g._collapsable && (m1.of.setAttribute(l1, A1[0]), m1.of.setAttribute(u1, A1[1]));
                }
                var E1, M1, D1, k1;
                if (m1.g._cmdf || b1) {
                    E1 = m1.cst;
                    var I1 = m1.g.c;
                    for(D1 = E1.length, M1 = 0; M1 < D1; M1 += 1)k1 = E1[M1], k1.setAttribute("offset", I1[M1 * 4] + "%"), k1.setAttribute("stop-color", "rgb(" + I1[M1 * 4 + 1] + "," + I1[M1 * 4 + 2] + "," + I1[M1 * 4 + 3] + ")");
                }
                if (y1 && (m1.g._omdf || b1)) {
                    var R1 = m1.g.o;
                    for(m1.g._collapsable ? E1 = m1.cst : E1 = m1.ost, D1 = E1.length, M1 = 0; M1 < D1; M1 += 1)k1 = E1[M1], m1.g._collapsable || k1.setAttribute("offset", R1[M1 * 2] + "%"), k1.setAttribute("stop-opacity", R1[M1 * 2 + 1]);
                }
                if (P1.t === 1) (m1.e._mdf || b1) && (g1.setAttribute("x2", p1[0]), g1.setAttribute("y2", p1[1]), y1 && !m1.g._collapsable && (m1.of.setAttribute("x2", p1[0]), m1.of.setAttribute("y2", p1[1])));
                else {
                    var V1;
                    if ((m1.s._mdf || m1.e._mdf || b1) && (V1 = Math.sqrt(Math.pow(A1[0] - p1[0], 2) + Math.pow(A1[1] - p1[1], 2)), g1.setAttribute("r", V1), y1 && !m1.g._collapsable && m1.of.setAttribute("r", V1)), m1.e._mdf || m1.h._mdf || m1.a._mdf || b1) {
                        V1 || (V1 = Math.sqrt(Math.pow(A1[0] - p1[0], 2) + Math.pow(A1[1] - p1[1], 2)));
                        var B1 = Math.atan2(p1[1] - A1[1], p1[0] - A1[0]), G1 = m1.h.v;
                        G1 >= 1 ? G1 = .99 : G1 <= -1 && (G1 = -0.99);
                        var C1 = V1 * G1, w1 = Math.cos(B1 + m1.a.v) * C1 + A1[0], x1 = Math.sin(B1 + m1.a.v) * C1 + A1[1];
                        g1.setAttribute("fx", w1), g1.setAttribute("fy", x1), y1 && !m1.g._collapsable && (m1.of.setAttribute("fx", w1), m1.of.setAttribute("fy", x1));
                    }
                }
            }
            function v1(P1, m1, b1) {
                var g1 = m1.style, y1 = m1.d;
                y1 && (y1._mdf || b1) && y1.dashStr && (g1.pElem.setAttribute("stroke-dasharray", y1.dashStr), g1.pElem.setAttribute("stroke-dashoffset", y1.dashoffset[0])), m1.c && (m1.c._mdf || b1) && g1.pElem.setAttribute("stroke", "rgb(" + bmFloor(m1.c.v[0]) + "," + bmFloor(m1.c.v[1]) + "," + bmFloor(m1.c.v[2]) + ")"), (m1.o._mdf || b1) && g1.pElem.setAttribute("stroke-opacity", m1.o.v), (m1.w._mdf || b1) && (g1.pElem.setAttribute("stroke-width", m1.w.v), g1.msElem && g1.msElem.setAttribute("stroke-width", m1.w.v));
            }
            return i1;
        }();
        function SVGShapeElement(t1, e1, i1) {
            this.shapes = [], this.shapesData = t1.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t1, e1, i1), this.prevViewData = [];
        }
        extendPrototype([
            BaseElement,
            TransformElement,
            SVGBaseElement,
            IShapeElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement
        ], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
            var t1, e1 = this.shapes.length, i1, r1, s1 = this.stylesList.length, a1, n1 = [], f1 = !1;
            for(r1 = 0; r1 < s1; r1 += 1){
                for(a1 = this.stylesList[r1], f1 = !1, n1.length = 0, t1 = 0; t1 < e1; t1 += 1)i1 = this.shapes[t1], i1.styles.indexOf(a1) !== -1 && (n1.push(i1), f1 = i1._isAnimated || f1);
                n1.length > 1 && f1 && this.setShapesAsAnimated(n1);
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t1) {
            var e1, i1 = t1.length;
            for(e1 = 0; e1 < i1; e1 += 1)t1[e1].setAsAnimated();
        }, SVGShapeElement.prototype.createStyleElement = function(t1, e1) {
            var i1, r1 = new SVGStyleData(t1, e1), s1 = r1.pElem;
            if (t1.ty === "st") i1 = new SVGStrokeStyleData(this, t1, r1);
            else if (t1.ty === "fl") i1 = new SVGFillStyleData(this, t1, r1);
            else if (t1.ty === "gf" || t1.ty === "gs") {
                var a1 = t1.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                i1 = new a1(this, t1, r1), this.globalData.defs.appendChild(i1.gf), i1.maskId && (this.globalData.defs.appendChild(i1.ms), this.globalData.defs.appendChild(i1.of), s1.setAttribute("mask", "url(" + getLocationHref() + "#" + i1.maskId + ")"));
            } else t1.ty === "no" && (i1 = new SVGNoStyleData(this, t1, r1));
            return (t1.ty === "st" || t1.ty === "gs") && (s1.setAttribute("stroke-linecap", lineCapEnum[t1.lc || 2]), s1.setAttribute("stroke-linejoin", lineJoinEnum[t1.lj || 2]), s1.setAttribute("fill-opacity", "0"), t1.lj === 1 && s1.setAttribute("stroke-miterlimit", t1.ml)), t1.r === 2 && s1.setAttribute("fill-rule", "evenodd"), t1.ln && s1.setAttribute("id", t1.ln), t1.cl && s1.setAttribute("class", t1.cl), t1.bm && (s1.style["mix-blend-mode"] = getBlendMode(t1.bm)), this.stylesList.push(r1), this.addToAnimatedContents(t1, i1), i1;
        }, SVGShapeElement.prototype.createGroupElement = function(t1) {
            var e1 = new ShapeGroupData;
            return t1.ln && e1.gr.setAttribute("id", t1.ln), t1.cl && e1.gr.setAttribute("class", t1.cl), t1.bm && (e1.gr.style["mix-blend-mode"] = getBlendMode(t1.bm)), e1;
        }, SVGShapeElement.prototype.createTransformElement = function(t1, e1) {
            var i1 = TransformPropertyFactory.getTransformProperty(this, t1, this), r1 = new SVGTransformData(i1, i1.o, e1);
            return this.addToAnimatedContents(t1, r1), r1;
        }, SVGShapeElement.prototype.createShapeElement = function(t1, e1, i1) {
            var r1 = 4;
            t1.ty === "rc" ? r1 = 5 : t1.ty === "el" ? r1 = 6 : t1.ty === "sr" && (r1 = 7);
            var s1 = ShapePropertyFactory.getShapeProp(this, t1, r1, this), a1 = new SVGShapeData(e1, i1, s1);
            return this.shapes.push(a1), this.addShapeToModifiers(a1), this.addToAnimatedContents(t1, a1), a1;
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t1, e1) {
            for(var i1 = 0, r1 = this.animatedContents.length; i1 < r1;){
                if (this.animatedContents[i1].element === e1) return;
                i1 += 1;
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t1),
                element: e1,
                data: t1
            });
        }, SVGShapeElement.prototype.setElementStyles = function(t1) {
            var e1 = t1.styles, i1, r1 = this.stylesList.length;
            for(i1 = 0; i1 < r1; i1 += 1)this.stylesList[i1].closed || e1.push(this.stylesList[i1]);
        }, SVGShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t1, e1 = this.itemsData.length;
            for(t1 = 0; t1 < e1; t1 += 1)this.prevViewData[t1] = this.itemsData[t1];
            for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e1 = this.dynamicProperties.length, t1 = 0; t1 < e1; t1 += 1)this.dynamicProperties[t1].getValue();
            this.renderModifiers();
        }, SVGShapeElement.prototype.searchShapes = function(t1, e1, i1, r1, s1, a1, n1) {
            var f1 = [].concat(a1), o1, d1 = t1.length - 1, v1, P1, m1 = [], b1 = [], g1, y1, A1;
            for(o1 = d1; o1 >= 0; o1 -= 1){
                if (A1 = this.searchProcessedElement(t1[o1]), A1 ? e1[o1] = i1[A1 - 1] : t1[o1]._render = n1, t1[o1].ty === "fl" || t1[o1].ty === "st" || t1[o1].ty === "gf" || t1[o1].ty === "gs" || t1[o1].ty === "no") A1 ? e1[o1].style.closed = !1 : e1[o1] = this.createStyleElement(t1[o1], s1), t1[o1]._render && e1[o1].style.pElem.parentNode !== r1 && r1.appendChild(e1[o1].style.pElem), m1.push(e1[o1].style);
                else if (t1[o1].ty === "gr") {
                    if (!A1) e1[o1] = this.createGroupElement(t1[o1]);
                    else for(P1 = e1[o1].it.length, v1 = 0; v1 < P1; v1 += 1)e1[o1].prevViewData[v1] = e1[o1].it[v1];
                    this.searchShapes(t1[o1].it, e1[o1].it, e1[o1].prevViewData, e1[o1].gr, s1 + 1, f1, n1), t1[o1]._render && e1[o1].gr.parentNode !== r1 && r1.appendChild(e1[o1].gr);
                } else t1[o1].ty === "tr" ? (A1 || (e1[o1] = this.createTransformElement(t1[o1], r1)), g1 = e1[o1].transform, f1.push(g1)) : t1[o1].ty === "sh" || t1[o1].ty === "rc" || t1[o1].ty === "el" || t1[o1].ty === "sr" ? (A1 || (e1[o1] = this.createShapeElement(t1[o1], f1, s1)), this.setElementStyles(e1[o1])) : t1[o1].ty === "tm" || t1[o1].ty === "rd" || t1[o1].ty === "ms" || t1[o1].ty === "pb" || t1[o1].ty === "zz" || t1[o1].ty === "op" ? (A1 ? (y1 = e1[o1], y1.closed = !1) : (y1 = ShapeModifiers.getModifier(t1[o1].ty), y1.init(this, t1[o1]), e1[o1] = y1, this.shapeModifiers.push(y1)), b1.push(y1)) : t1[o1].ty === "rp" && (A1 ? (y1 = e1[o1], y1.closed = !0) : (y1 = ShapeModifiers.getModifier(t1[o1].ty), e1[o1] = y1, y1.init(this, t1, o1, e1), this.shapeModifiers.push(y1), n1 = !1), b1.push(y1));
                this.addProcessedElement(t1[o1], o1 + 1);
            }
            for(d1 = m1.length, o1 = 0; o1 < d1; o1 += 1)m1[o1].closed = !0;
            for(d1 = b1.length, o1 = 0; o1 < d1; o1 += 1)b1[o1].closed = !0;
        }, SVGShapeElement.prototype.renderInnerContent = function() {
            this.renderModifiers();
            var t1, e1 = this.stylesList.length;
            for(t1 = 0; t1 < e1; t1 += 1)this.stylesList[t1].reset();
            for(this.renderShape(), t1 = 0; t1 < e1; t1 += 1)(this.stylesList[t1]._mdf || this._isFirstFrame) && (this.stylesList[t1].msElem && (this.stylesList[t1].msElem.setAttribute("d", this.stylesList[t1].d), this.stylesList[t1].d = "M0 0" + this.stylesList[t1].d), this.stylesList[t1].pElem.setAttribute("d", this.stylesList[t1].d || "M0 0"));
        }, SVGShapeElement.prototype.renderShape = function() {
            var t1, e1 = this.animatedContents.length, i1;
            for(t1 = 0; t1 < e1; t1 += 1)i1 = this.animatedContents[t1], (this._isFirstFrame || i1.element._isAnimated) && i1.data !== !0 && i1.fn(i1.data, i1.element, this._isFirstFrame);
        }, SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
        };
        function LetterProps(t1, e1, i1, r1, s1, a1) {
            this.o = t1, this.sw = e1, this.sc = i1, this.fc = r1, this.m = s1, this.p = a1, this._mdf = {
                o: !0,
                sw: !!e1,
                sc: !!i1,
                fc: !!r1,
                m: !0,
                p: !0
            };
        }
        LetterProps.prototype.update = function(t1, e1, i1, r1, s1, a1) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var n1 = !1;
            return this.o !== t1 && (this.o = t1, this._mdf.o = !0, n1 = !0), this.sw !== e1 && (this.sw = e1, this._mdf.sw = !0, n1 = !0), this.sc !== i1 && (this.sc = i1, this._mdf.sc = !0, n1 = !0), this.fc !== r1 && (this.fc = r1, this._mdf.fc = !0, n1 = !0), this.m !== s1 && (this.m = s1, this._mdf.m = !0, n1 = !0), a1.length && (this.p[0] !== a1[0] || this.p[1] !== a1[1] || this.p[4] !== a1[4] || this.p[5] !== a1[5] || this.p[12] !== a1[12] || this.p[13] !== a1[13]) && (this.p = a1, this._mdf.p = !0, n1 = !0), n1;
        };
        function TextProperty(t1, e1) {
            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e1.d && e1.d.sid && (e1.d = t1.globalData.slotManager.getProp(e1.d)), this.data = e1, this.elem = t1, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
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
        TextProperty.prototype.defaultBoxWidth = [
            0,
            0
        ], TextProperty.prototype.copyData = function(t1, e1) {
            for(var i1 in e1)Object.prototype.hasOwnProperty.call(e1, i1) && (t1[i1] = e1[i1]);
            return t1;
        }, TextProperty.prototype.setCurrentData = function(t1) {
            t1.__complete || this.completeTextData(t1), this.currentData = t1, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
        }, TextProperty.prototype.searchProperty = function() {
            return this.searchKeyframes();
        }, TextProperty.prototype.searchKeyframes = function() {
            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
        }, TextProperty.prototype.addEffect = function(t1) {
            this.effectsSequence.push(t1), this.elem.addDynamicProperty(this);
        }, TextProperty.prototype.getValue = function(t1) {
            if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t1)) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e1 = this.currentData, i1 = this.keysIndex;
                if (this.lock) {
                    this.setCurrentData(this.currentData);
                    return;
                }
                this.lock = !0, this._mdf = !1;
                var r1, s1 = this.effectsSequence.length, a1 = t1 || this.data.d.k[this.keysIndex].s;
                for(r1 = 0; r1 < s1; r1 += 1)i1 !== this.keysIndex ? a1 = this.effectsSequence[r1](a1, a1.t) : a1 = this.effectsSequence[r1](this.currentData, a1.t);
                e1 !== a1 && this.setCurrentData(a1), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
        }, TextProperty.prototype.getKeyframeValue = function() {
            for(var t1 = this.data.d.k, e1 = this.elem.comp.renderedFrame, i1 = 0, r1 = t1.length; i1 <= r1 - 1 && !(i1 === r1 - 1 || t1[i1 + 1].t > e1);)i1 += 1;
            return this.keysIndex !== i1 && (this.keysIndex = i1), this.data.d.k[this.keysIndex].s;
        }, TextProperty.prototype.buildFinalText = function(t1) {
            for(var e1 = [], i1 = 0, r1 = t1.length, s1, a1, n1 = !1, f1 = !1, o1 = ""; i1 < r1;)n1 = f1, f1 = !1, s1 = t1.charCodeAt(i1), o1 = t1.charAt(i1), FontManager.isCombinedCharacter(s1) ? n1 = !0 : s1 >= 55296 && s1 <= 56319 ? FontManager.isRegionalFlag(t1, i1) ? o1 = t1.substr(i1, 14) : (a1 = t1.charCodeAt(i1 + 1), a1 >= 56320 && a1 <= 57343 && (FontManager.isModifier(s1, a1) ? (o1 = t1.substr(i1, 2), n1 = !0) : FontManager.isFlagEmoji(t1.substr(i1, 4)) ? o1 = t1.substr(i1, 4) : o1 = t1.substr(i1, 2))) : s1 > 56319 ? (a1 = t1.charCodeAt(i1 + 1), FontManager.isVariationSelector(s1) && (n1 = !0)) : FontManager.isZeroWidthJoiner(s1) && (n1 = !0, f1 = !0), n1 ? (e1[e1.length - 1] += o1, n1 = !1) : e1.push(o1), i1 += o1.length;
            return e1;
        }, TextProperty.prototype.completeTextData = function(t1) {
            t1.__complete = !0;
            var e1 = this.elem.globalData.fontManager, i1 = this.data, r1 = [], s1, a1, n1, f1 = 0, o1, d1 = i1.m.g, v1 = 0, P1 = 0, m1 = 0, b1 = [], g1 = 0, y1 = 0, A1, p1, h1 = e1.getFontByName(t1.f), l1, u1 = 0, E1 = getFontProperties(h1);
            t1.fWeight = E1.weight, t1.fStyle = E1.style, t1.finalSize = t1.s, t1.finalText = this.buildFinalText(t1.t), a1 = t1.finalText.length, t1.finalLineHeight = t1.lh;
            var M1 = t1.tr / 1e3 * t1.finalSize, D1;
            if (t1.sz) for(var k1 = !0, I1 = t1.sz[0], R1 = t1.sz[1], V1, B1; k1;){
                B1 = this.buildFinalText(t1.t), V1 = 0, g1 = 0, a1 = B1.length, M1 = t1.tr / 1e3 * t1.finalSize;
                var G1 = -1;
                for(s1 = 0; s1 < a1; s1 += 1)D1 = B1[s1].charCodeAt(0), n1 = !1, B1[s1] === " " ? G1 = s1 : (D1 === 13 || D1 === 3) && (g1 = 0, n1 = !0, V1 += t1.finalLineHeight || t1.finalSize * 1.2), e1.chars ? (l1 = e1.getCharData(B1[s1], h1.fStyle, h1.fFamily), u1 = n1 ? 0 : l1.w * t1.finalSize / 100) : u1 = e1.measureText(B1[s1], t1.f, t1.finalSize), g1 + u1 > I1 && B1[s1] !== " " ? (G1 === -1 ? a1 += 1 : s1 = G1, V1 += t1.finalLineHeight || t1.finalSize * 1.2, B1.splice(s1, G1 === s1 ? 1 : 0, "\r"), G1 = -1, g1 = 0) : (g1 += u1, g1 += M1);
                V1 += h1.ascent * t1.finalSize / 100, this.canResize && t1.finalSize > this.minimumFontSize && R1 < V1 ? (t1.finalSize -= 1, t1.finalLineHeight = t1.finalSize * t1.lh / t1.s) : (t1.finalText = B1, a1 = t1.finalText.length, k1 = !1);
            }
            g1 = -M1, u1 = 0;
            var C1 = 0, w1;
            for(s1 = 0; s1 < a1; s1 += 1)if (n1 = !1, w1 = t1.finalText[s1], D1 = w1.charCodeAt(0), D1 === 13 || D1 === 3 ? (C1 = 0, b1.push(g1), y1 = g1 > y1 ? g1 : y1, g1 = -2 * M1, o1 = "", n1 = !0, m1 += 1) : o1 = w1, e1.chars ? (l1 = e1.getCharData(w1, h1.fStyle, e1.getFontByName(t1.f).fFamily), u1 = n1 ? 0 : l1.w * t1.finalSize / 100) : u1 = e1.measureText(o1, t1.f, t1.finalSize), w1 === " " ? C1 += u1 + M1 : (g1 += u1 + M1 + C1, C1 = 0), r1.push({
                l: u1,
                an: u1,
                add: v1,
                n: n1,
                anIndexes: [],
                val: o1,
                line: m1,
                animatorJustifyOffset: 0
            }), d1 == 2) {
                if (v1 += u1, o1 === "" || o1 === " " || s1 === a1 - 1) {
                    for((o1 === "" || o1 === " ") && (v1 -= u1); P1 <= s1;)r1[P1].an = v1, r1[P1].ind = f1, r1[P1].extra = u1, P1 += 1;
                    f1 += 1, v1 = 0;
                }
            } else if (d1 == 3) {
                if (v1 += u1, o1 === "" || s1 === a1 - 1) {
                    for(o1 === "" && (v1 -= u1); P1 <= s1;)r1[P1].an = v1, r1[P1].ind = f1, r1[P1].extra = u1, P1 += 1;
                    v1 = 0, f1 += 1;
                }
            } else r1[f1].ind = f1, r1[f1].extra = 0, f1 += 1;
            if (t1.l = r1, y1 = g1 > y1 ? g1 : y1, b1.push(g1), t1.sz) t1.boxWidth = t1.sz[0], t1.justifyOffset = 0;
            else switch(t1.boxWidth = y1, t1.j){
                case 1:
                    t1.justifyOffset = -t1.boxWidth;
                    break;
                case 2:
                    t1.justifyOffset = -t1.boxWidth / 2;
                    break;
                default:
                    t1.justifyOffset = 0;
            }
            t1.lineWidths = b1;
            var x1 = i1.a, _1, c1;
            p1 = x1.length;
            var S1, F1, T1 = [];
            for(A1 = 0; A1 < p1; A1 += 1){
                for(_1 = x1[A1], _1.a.sc && (t1.strokeColorAnim = !0), _1.a.sw && (t1.strokeWidthAnim = !0), (_1.a.fc || _1.a.fh || _1.a.fs || _1.a.fb) && (t1.fillColorAnim = !0), F1 = 0, S1 = _1.s.b, s1 = 0; s1 < a1; s1 += 1)c1 = r1[s1], c1.anIndexes[A1] = F1, (S1 == 1 && c1.val !== "" || S1 == 2 && c1.val !== "" && c1.val !== " " || S1 == 3 && (c1.n || c1.val == " " || s1 == a1 - 1) || S1 == 4 && (c1.n || s1 == a1 - 1)) && (_1.s.rn === 1 && T1.push(F1), F1 += 1);
                i1.a[A1].s.totalChars = F1;
                var N1 = -1, L1;
                if (_1.s.rn === 1) for(s1 = 0; s1 < a1; s1 += 1)c1 = r1[s1], N1 != c1.anIndexes[A1] && (N1 = c1.anIndexes[A1], L1 = T1.splice(Math.floor(Math.random() * T1.length), 1)[0]), c1.anIndexes[A1] = L1;
            }
            t1.yOffset = t1.finalLineHeight || t1.finalSize * 1.2, t1.ls = t1.ls || 0, t1.ascent = h1.ascent * t1.finalSize / 100;
        }, TextProperty.prototype.updateDocumentData = function(t1, e1) {
            e1 = e1 === void 0 ? this.keysIndex : e1;
            var i1 = this.copyData({}, this.data.d.k[e1].s);
            i1 = this.copyData(i1, t1), this.data.d.k[e1].s = i1, this.recalculate(e1), this.setCurrentData(i1), this.elem.addDynamicProperty(this);
        }, TextProperty.prototype.recalculate = function(t1) {
            var e1 = this.data.d.k[t1].s;
            e1.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e1);
        }, TextProperty.prototype.canResizeFont = function(t1) {
            this.canResize = t1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        }, TextProperty.prototype.setMinimumFontSize = function(t1) {
            this.minimumFontSize = Math.floor(t1) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        };
        var TextSelectorProp = function() {
            var t1 = Math.max, e1 = Math.min, i1 = Math.floor;
            function r1(a1, n1) {
                this._currentTextLength = -1, this.k = !1, this.data = n1, this.elem = a1, this.comp = a1.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(a1), this.s = PropertyFactory.getProp(a1, n1.s || {
                    k: 0
                }, 0, 0, this), "e" in n1 ? this.e = PropertyFactory.getProp(a1, n1.e, 0, 0, this) : this.e = {
                    v: 100
                }, this.o = PropertyFactory.getProp(a1, n1.o || {
                    k: 0
                }, 0, 0, this), this.xe = PropertyFactory.getProp(a1, n1.xe || {
                    k: 0
                }, 0, 0, this), this.ne = PropertyFactory.getProp(a1, n1.ne || {
                    k: 0
                }, 0, 0, this), this.sm = PropertyFactory.getProp(a1, n1.sm || {
                    k: 100
                }, 0, 0, this), this.a = PropertyFactory.getProp(a1, n1.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
            }
            r1.prototype = {
                getMult: function(a1) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var n1 = 0, f1 = 0, o1 = 1, d1 = 1;
                    this.ne.v > 0 ? n1 = this.ne.v / 100 : f1 = -this.ne.v / 100, this.xe.v > 0 ? o1 = 1 - this.xe.v / 100 : d1 = 1 + this.xe.v / 100;
                    var v1 = BezierFactory.getBezierEasing(n1, f1, o1, d1).get, P1 = 0, m1 = this.finalS, b1 = this.finalE, g1 = this.data.sh;
                    if (g1 === 2) b1 === m1 ? P1 = a1 >= b1 ? 1 : 0 : P1 = t1(0, e1(.5 / (b1 - m1) + (a1 - m1) / (b1 - m1), 1)), P1 = v1(P1);
                    else if (g1 === 3) b1 === m1 ? P1 = a1 >= b1 ? 0 : 1 : P1 = 1 - t1(0, e1(.5 / (b1 - m1) + (a1 - m1) / (b1 - m1), 1)), P1 = v1(P1);
                    else if (g1 === 4) b1 === m1 ? P1 = 0 : (P1 = t1(0, e1(.5 / (b1 - m1) + (a1 - m1) / (b1 - m1), 1)), P1 < .5 ? P1 *= 2 : P1 = 1 - 2 * (P1 - .5)), P1 = v1(P1);
                    else if (g1 === 5) {
                        if (b1 === m1) P1 = 0;
                        else {
                            var y1 = b1 - m1;
                            a1 = e1(t1(0, a1 + .5 - m1), b1 - m1);
                            var A1 = -y1 / 2 + a1, p1 = y1 / 2;
                            P1 = Math.sqrt(1 - A1 * A1 / (p1 * p1));
                        }
                        P1 = v1(P1);
                    } else g1 === 6 ? (b1 === m1 ? P1 = 0 : (a1 = e1(t1(0, a1 + .5 - m1), b1 - m1), P1 = (1 + Math.cos(Math.PI + Math.PI * 2 * a1 / (b1 - m1))) / 2), P1 = v1(P1)) : (a1 >= i1(m1) && (a1 - m1 < 0 ? P1 = t1(0, e1(e1(b1, 1) - (m1 - a1), 1)) : P1 = t1(0, e1(b1 - a1, 1))), P1 = v1(P1));
                    if (this.sm.v !== 100) {
                        var h1 = this.sm.v * .01;
                        h1 === 0 && (h1 = 1e-8);
                        var l1 = .5 - h1 * .5;
                        P1 < l1 ? P1 = 0 : (P1 = (P1 - l1) / h1, P1 > 1 && (P1 = 1));
                    }
                    return P1 * this.a.v;
                },
                getValue: function(a1) {
                    this.iterateDynamicProperties(), this._mdf = a1 || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a1 && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var n1 = this.data.r === 2 ? 1 : 100 / this.data.totalChars, f1 = this.o.v / n1, o1 = this.s.v / n1 + f1, d1 = this.e.v / n1 + f1;
                    if (o1 > d1) {
                        var v1 = o1;
                        o1 = d1, d1 = v1;
                    }
                    this.finalS = o1, this.finalE = d1;
                }
            }, extendPrototype([
                DynamicPropertyContainer
            ], r1);
            function s1(a1, n1, f1) {
                return new r1(a1, n1);
            }
            return {
                getTextSelectorProp: s1
            };
        }();
        function TextAnimatorDataProperty(t1, e1, i1) {
            var r1 = {
                propType: !1
            }, s1 = PropertyFactory.getProp, a1 = e1.a;
            this.a = {
                r: a1.r ? s1(t1, a1.r, 0, degToRads, i1) : r1,
                rx: a1.rx ? s1(t1, a1.rx, 0, degToRads, i1) : r1,
                ry: a1.ry ? s1(t1, a1.ry, 0, degToRads, i1) : r1,
                sk: a1.sk ? s1(t1, a1.sk, 0, degToRads, i1) : r1,
                sa: a1.sa ? s1(t1, a1.sa, 0, degToRads, i1) : r1,
                s: a1.s ? s1(t1, a1.s, 1, .01, i1) : r1,
                a: a1.a ? s1(t1, a1.a, 1, 0, i1) : r1,
                o: a1.o ? s1(t1, a1.o, 0, .01, i1) : r1,
                p: a1.p ? s1(t1, a1.p, 1, 0, i1) : r1,
                sw: a1.sw ? s1(t1, a1.sw, 0, 0, i1) : r1,
                sc: a1.sc ? s1(t1, a1.sc, 1, 0, i1) : r1,
                fc: a1.fc ? s1(t1, a1.fc, 1, 0, i1) : r1,
                fh: a1.fh ? s1(t1, a1.fh, 0, 0, i1) : r1,
                fs: a1.fs ? s1(t1, a1.fs, 0, .01, i1) : r1,
                fb: a1.fb ? s1(t1, a1.fb, 0, .01, i1) : r1,
                t: a1.t ? s1(t1, a1.t, 0, 0, i1) : r1
            }, this.s = TextSelectorProp.getTextSelectorProp(t1, e1.s, i1), this.s.t = e1.s.t;
        }
        function TextAnimatorProperty(t1, e1, i1) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t1, this._renderType = e1, this._elem = i1, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i1);
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
            var t1, e1 = this._textData.a.length, i1, r1 = PropertyFactory.getProp;
            for(t1 = 0; t1 < e1; t1 += 1)i1 = this._textData.a[t1], this._animatorsData[t1] = new TextAnimatorDataProperty(this._elem, i1, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: r1(this._elem, this._textData.p.a, 0, 0, this),
                f: r1(this._elem, this._textData.p.f, 0, 0, this),
                l: r1(this._elem, this._textData.p.l, 0, 0, this),
                r: r1(this._elem, this._textData.p.r, 0, 0, this),
                p: r1(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r1(this._elem, this._textData.m.a, 1, 0, this);
        }, TextAnimatorProperty.prototype.getMeasures = function(t1, e1) {
            if (this.lettersChangedFlag = e1, !(!this._mdf && !this._isFirstFrame && !e1 && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                this._isFirstFrame = !1;
                var i1 = this._moreOptions.alignment.v, r1 = this._animatorsData, s1 = this._textData, a1 = this.mHelper, n1 = this._renderType, f1 = this.renderedLetters.length, o1, d1, v1, P1, m1 = t1.l, b1, g1, y1, A1, p1, h1, l1, u1, E1, M1, D1, k1, I1, R1, V1;
                if (this._hasMaskedPath) {
                    if (V1 = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var B1 = V1.v;
                        this._pathData.r.v && (B1 = B1.reverse()), b1 = {
                            tLength: 0,
                            segments: []
                        }, P1 = B1._length - 1;
                        var G1;
                        for(k1 = 0, v1 = 0; v1 < P1; v1 += 1)G1 = bez.buildBezierData(B1.v[v1], B1.v[v1 + 1], [
                            B1.o[v1][0] - B1.v[v1][0],
                            B1.o[v1][1] - B1.v[v1][1]
                        ], [
                            B1.i[v1 + 1][0] - B1.v[v1 + 1][0],
                            B1.i[v1 + 1][1] - B1.v[v1 + 1][1]
                        ]), b1.tLength += G1.segmentLength, b1.segments.push(G1), k1 += G1.segmentLength;
                        v1 = P1, V1.v.c && (G1 = bez.buildBezierData(B1.v[v1], B1.v[0], [
                            B1.o[v1][0] - B1.v[v1][0],
                            B1.o[v1][1] - B1.v[v1][1]
                        ], [
                            B1.i[0][0] - B1.v[0][0],
                            B1.i[0][1] - B1.v[0][1]
                        ]), b1.tLength += G1.segmentLength, b1.segments.push(G1), k1 += G1.segmentLength), this._pathData.pi = b1;
                    }
                    if (b1 = this._pathData.pi, g1 = this._pathData.f.v, l1 = 0, h1 = 1, A1 = 0, p1 = !0, M1 = b1.segments, g1 < 0 && V1.v.c) for(b1.tLength < Math.abs(g1) && (g1 = -Math.abs(g1) % b1.tLength), l1 = M1.length - 1, E1 = M1[l1].points, h1 = E1.length - 1; g1 < 0;)g1 += E1[h1].partialLength, h1 -= 1, h1 < 0 && (l1 -= 1, E1 = M1[l1].points, h1 = E1.length - 1);
                    E1 = M1[l1].points, u1 = E1[h1 - 1], y1 = E1[h1], D1 = y1.partialLength;
                }
                P1 = m1.length, o1 = 0, d1 = 0;
                var C1 = t1.finalSize * 1.2 * .714, w1 = !0, x1, _1, c1, S1, F1;
                S1 = r1.length;
                var T1, N1 = -1, L1, H1, O1, q1 = g1, $1 = l1, X1 = h1, Q1 = -1, Z1, W1, K1, j1, z1, et1, at1, it1, tt1 = "", rt1 = this.defaultPropsArray, st1;
                if (t1.j === 2 || t1.j === 1) {
                    var Y1 = 0, nt1 = 0, ot1 = t1.j === 2 ? -0.5 : -1, J1 = 0, ht1 = !0;
                    for(v1 = 0; v1 < P1; v1 += 1)if (m1[v1].n) {
                        for(Y1 && (Y1 += nt1); J1 < v1;)m1[J1].animatorJustifyOffset = Y1, J1 += 1;
                        Y1 = 0, ht1 = !0;
                    } else {
                        for(c1 = 0; c1 < S1; c1 += 1)x1 = r1[c1].a, x1.t.propType && (ht1 && t1.j === 2 && (nt1 += x1.t.v * ot1), _1 = r1[c1].s, T1 = _1.getMult(m1[v1].anIndexes[c1], s1.a[c1].s.totalChars), T1.length ? Y1 += x1.t.v * T1[0] * ot1 : Y1 += x1.t.v * T1 * ot1);
                        ht1 = !1;
                    }
                    for(Y1 && (Y1 += nt1); J1 < v1;)m1[J1].animatorJustifyOffset = Y1, J1 += 1;
                }
                for(v1 = 0; v1 < P1; v1 += 1){
                    if (a1.reset(), Z1 = 1, m1[v1].n) o1 = 0, d1 += t1.yOffset, d1 += w1 ? 1 : 0, g1 = q1, w1 = !1, this._hasMaskedPath && (l1 = $1, h1 = X1, E1 = M1[l1].points, u1 = E1[h1 - 1], y1 = E1[h1], D1 = y1.partialLength, A1 = 0), tt1 = "", it1 = "", et1 = "", st1 = "", rt1 = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Q1 !== m1[v1].line) {
                                switch(t1.j){
                                    case 1:
                                        g1 += k1 - t1.lineWidths[m1[v1].line];
                                        break;
                                    case 2:
                                        g1 += (k1 - t1.lineWidths[m1[v1].line]) / 2;
                                        break;
                                }
                                Q1 = m1[v1].line;
                            }
                            N1 !== m1[v1].ind && (m1[N1] && (g1 += m1[N1].extra), g1 += m1[v1].an / 2, N1 = m1[v1].ind), g1 += i1[0] * m1[v1].an * .005;
                            var U1 = 0;
                            for(c1 = 0; c1 < S1; c1 += 1)x1 = r1[c1].a, x1.p.propType && (_1 = r1[c1].s, T1 = _1.getMult(m1[v1].anIndexes[c1], s1.a[c1].s.totalChars), T1.length ? U1 += x1.p.v[0] * T1[0] : U1 += x1.p.v[0] * T1), x1.a.propType && (_1 = r1[c1].s, T1 = _1.getMult(m1[v1].anIndexes[c1], s1.a[c1].s.totalChars), T1.length ? U1 += x1.a.v[0] * T1[0] : U1 += x1.a.v[0] * T1);
                            for(p1 = !0, this._pathData.a.v && (g1 = m1[0].an * .5 + (k1 - this._pathData.f.v - m1[0].an * .5 - m1[m1.length - 1].an * .5) * N1 / (P1 - 1), g1 += this._pathData.f.v); p1;)A1 + D1 >= g1 + U1 || !E1 ? (I1 = (g1 + U1 - A1) / y1.partialLength, H1 = u1.point[0] + (y1.point[0] - u1.point[0]) * I1, O1 = u1.point[1] + (y1.point[1] - u1.point[1]) * I1, a1.translate(-i1[0] * m1[v1].an * .005, -(i1[1] * C1) * .01), p1 = !1) : E1 && (A1 += y1.partialLength, h1 += 1, h1 >= E1.length && (h1 = 0, l1 += 1, M1[l1] ? E1 = M1[l1].points : V1.v.c ? (h1 = 0, l1 = 0, E1 = M1[l1].points) : (A1 -= y1.partialLength, E1 = null)), E1 && (u1 = y1, y1 = E1[h1], D1 = y1.partialLength));
                            L1 = m1[v1].an / 2 - m1[v1].add, a1.translate(-L1, 0, 0);
                        } else L1 = m1[v1].an / 2 - m1[v1].add, a1.translate(-L1, 0, 0), a1.translate(-i1[0] * m1[v1].an * .005, -i1[1] * C1 * .01, 0);
                        for(c1 = 0; c1 < S1; c1 += 1)x1 = r1[c1].a, x1.t.propType && (_1 = r1[c1].s, T1 = _1.getMult(m1[v1].anIndexes[c1], s1.a[c1].s.totalChars), (o1 !== 0 || t1.j !== 0) && (this._hasMaskedPath ? T1.length ? g1 += x1.t.v * T1[0] : g1 += x1.t.v * T1 : T1.length ? o1 += x1.t.v * T1[0] : o1 += x1.t.v * T1));
                        for(t1.strokeWidthAnim && (K1 = t1.sw || 0), t1.strokeColorAnim && (t1.sc ? W1 = [
                            t1.sc[0],
                            t1.sc[1],
                            t1.sc[2]
                        ] : W1 = [
                            0,
                            0,
                            0
                        ]), t1.fillColorAnim && t1.fc && (j1 = [
                            t1.fc[0],
                            t1.fc[1],
                            t1.fc[2]
                        ]), c1 = 0; c1 < S1; c1 += 1)x1 = r1[c1].a, x1.a.propType && (_1 = r1[c1].s, T1 = _1.getMult(m1[v1].anIndexes[c1], s1.a[c1].s.totalChars), T1.length ? a1.translate(-x1.a.v[0] * T1[0], -x1.a.v[1] * T1[1], x1.a.v[2] * T1[2]) : a1.translate(-x1.a.v[0] * T1, -x1.a.v[1] * T1, x1.a.v[2] * T1));
                        for(c1 = 0; c1 < S1; c1 += 1)x1 = r1[c1].a, x1.s.propType && (_1 = r1[c1].s, T1 = _1.getMult(m1[v1].anIndexes[c1], s1.a[c1].s.totalChars), T1.length ? a1.scale(1 + (x1.s.v[0] - 1) * T1[0], 1 + (x1.s.v[1] - 1) * T1[1], 1) : a1.scale(1 + (x1.s.v[0] - 1) * T1, 1 + (x1.s.v[1] - 1) * T1, 1));
                        for(c1 = 0; c1 < S1; c1 += 1){
                            if (x1 = r1[c1].a, _1 = r1[c1].s, T1 = _1.getMult(m1[v1].anIndexes[c1], s1.a[c1].s.totalChars), x1.sk.propType && (T1.length ? a1.skewFromAxis(-x1.sk.v * T1[0], x1.sa.v * T1[1]) : a1.skewFromAxis(-x1.sk.v * T1, x1.sa.v * T1)), x1.r.propType && (T1.length ? a1.rotateZ(-x1.r.v * T1[2]) : a1.rotateZ(-x1.r.v * T1)), x1.ry.propType && (T1.length ? a1.rotateY(x1.ry.v * T1[1]) : a1.rotateY(x1.ry.v * T1)), x1.rx.propType && (T1.length ? a1.rotateX(x1.rx.v * T1[0]) : a1.rotateX(x1.rx.v * T1)), x1.o.propType && (T1.length ? Z1 += (x1.o.v * T1[0] - Z1) * T1[0] : Z1 += (x1.o.v * T1 - Z1) * T1), t1.strokeWidthAnim && x1.sw.propType && (T1.length ? K1 += x1.sw.v * T1[0] : K1 += x1.sw.v * T1), t1.strokeColorAnim && x1.sc.propType) for(z1 = 0; z1 < 3; z1 += 1)T1.length ? W1[z1] += (x1.sc.v[z1] - W1[z1]) * T1[0] : W1[z1] += (x1.sc.v[z1] - W1[z1]) * T1;
                            if (t1.fillColorAnim && t1.fc) {
                                if (x1.fc.propType) for(z1 = 0; z1 < 3; z1 += 1)T1.length ? j1[z1] += (x1.fc.v[z1] - j1[z1]) * T1[0] : j1[z1] += (x1.fc.v[z1] - j1[z1]) * T1;
                                x1.fh.propType && (T1.length ? j1 = addHueToRGB(j1, x1.fh.v * T1[0]) : j1 = addHueToRGB(j1, x1.fh.v * T1)), x1.fs.propType && (T1.length ? j1 = addSaturationToRGB(j1, x1.fs.v * T1[0]) : j1 = addSaturationToRGB(j1, x1.fs.v * T1)), x1.fb.propType && (T1.length ? j1 = addBrightnessToRGB(j1, x1.fb.v * T1[0]) : j1 = addBrightnessToRGB(j1, x1.fb.v * T1));
                            }
                        }
                        for(c1 = 0; c1 < S1; c1 += 1)x1 = r1[c1].a, x1.p.propType && (_1 = r1[c1].s, T1 = _1.getMult(m1[v1].anIndexes[c1], s1.a[c1].s.totalChars), this._hasMaskedPath ? T1.length ? a1.translate(0, x1.p.v[1] * T1[0], -x1.p.v[2] * T1[1]) : a1.translate(0, x1.p.v[1] * T1, -x1.p.v[2] * T1) : T1.length ? a1.translate(x1.p.v[0] * T1[0], x1.p.v[1] * T1[1], -x1.p.v[2] * T1[2]) : a1.translate(x1.p.v[0] * T1, x1.p.v[1] * T1, -x1.p.v[2] * T1));
                        if (t1.strokeWidthAnim && (et1 = K1 < 0 ? 0 : K1), t1.strokeColorAnim && (at1 = "rgb(" + Math.round(W1[0] * 255) + "," + Math.round(W1[1] * 255) + "," + Math.round(W1[2] * 255) + ")"), t1.fillColorAnim && t1.fc && (it1 = "rgb(" + Math.round(j1[0] * 255) + "," + Math.round(j1[1] * 255) + "," + Math.round(j1[2] * 255) + ")"), this._hasMaskedPath) {
                            if (a1.translate(0, -t1.ls), a1.translate(0, i1[1] * C1 * .01 + d1, 0), this._pathData.p.v) {
                                R1 = (y1.point[1] - u1.point[1]) / (y1.point[0] - u1.point[0]);
                                var lt1 = Math.atan(R1) * 180 / Math.PI;
                                y1.point[0] < u1.point[0] && (lt1 += 180), a1.rotate(-lt1 * Math.PI / 180);
                            }
                            a1.translate(H1, O1, 0), g1 -= i1[0] * m1[v1].an * .005, m1[v1 + 1] && N1 !== m1[v1 + 1].ind && (g1 += m1[v1].an / 2, g1 += t1.tr * .001 * t1.finalSize);
                        } else {
                            switch(a1.translate(o1, d1, 0), t1.ps && a1.translate(t1.ps[0], t1.ps[1] + t1.ascent, 0), t1.j){
                                case 1:
                                    a1.translate(m1[v1].animatorJustifyOffset + t1.justifyOffset + (t1.boxWidth - t1.lineWidths[m1[v1].line]), 0, 0);
                                    break;
                                case 2:
                                    a1.translate(m1[v1].animatorJustifyOffset + t1.justifyOffset + (t1.boxWidth - t1.lineWidths[m1[v1].line]) / 2, 0, 0);
                                    break;
                            }
                            a1.translate(0, -t1.ls), a1.translate(L1, 0, 0), a1.translate(i1[0] * m1[v1].an * .005, i1[1] * C1 * .01, 0), o1 += m1[v1].l + t1.tr * .001 * t1.finalSize;
                        }
                        n1 === "html" ? tt1 = a1.toCSS() : n1 === "svg" ? tt1 = a1.to2dCSS() : rt1 = [
                            a1.props[0],
                            a1.props[1],
                            a1.props[2],
                            a1.props[3],
                            a1.props[4],
                            a1.props[5],
                            a1.props[6],
                            a1.props[7],
                            a1.props[8],
                            a1.props[9],
                            a1.props[10],
                            a1.props[11],
                            a1.props[12],
                            a1.props[13],
                            a1.props[14],
                            a1.props[15]
                        ], st1 = Z1;
                    }
                    f1 <= v1 ? (F1 = new LetterProps(st1, et1, at1, it1, tt1, rt1), this.renderedLetters.push(F1), f1 += 1, this.lettersChangedFlag = !0) : (F1 = this.renderedLetters[v1], this.lettersChangedFlag = F1.update(st1, et1, at1, it1, tt1, rt1) || this.lettersChangedFlag);
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([
            DynamicPropertyContainer
        ], TextAnimatorProperty);
        function ITextElement() {}
        ITextElement.prototype.initElement = function(t1, e1, i1) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t1, e1, i1), this.textProperty = new TextProperty(this, t1.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t1.t, this.renderType, this), this.initTransform(t1, e1, i1), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
        }, ITextElement.prototype.prepareFrame = function(t1) {
            this._mdf = !1, this.prepareRenderableFrame(t1), this.prepareProperties(t1, this.isInRange);
        }, ITextElement.prototype.createPathShape = function(t1, e1) {
            var i1, r1 = e1.length, s1, a1 = "";
            for(i1 = 0; i1 < r1; i1 += 1)e1[i1].ty === "sh" && (s1 = e1[i1].ks.k, a1 += buildShapeString(s1, s1.i.length, !0, t1));
            return a1;
        }, ITextElement.prototype.updateDocumentData = function(t1, e1) {
            this.textProperty.updateDocumentData(t1, e1);
        }, ITextElement.prototype.canResizeFont = function(t1) {
            this.textProperty.canResizeFont(t1);
        }, ITextElement.prototype.setMinimumFontSize = function(t1) {
            this.textProperty.setMinimumFontSize(t1);
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t1, e1, i1, r1, s1) {
            switch(t1.ps && e1.translate(t1.ps[0], t1.ps[1] + t1.ascent, 0), e1.translate(0, -t1.ls, 0), t1.j){
                case 1:
                    e1.translate(t1.justifyOffset + (t1.boxWidth - t1.lineWidths[i1]), 0, 0);
                    break;
                case 2:
                    e1.translate(t1.justifyOffset + (t1.boxWidth - t1.lineWidths[i1]) / 2, 0, 0);
                    break;
            }
            e1.translate(r1, s1, 0);
        }, ITextElement.prototype.buildColor = function(t1) {
            return "rgb(" + Math.round(t1[0] * 255) + "," + Math.round(t1[1] * 255) + "," + Math.round(t1[2] * 255) + ")";
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
        };
        var emptyShapeData = {
            shapes: []
        };
        function SVGTextLottieElement(t1, e1, i1) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t1, e1, i1);
        }
        extendPrototype([
            BaseElement,
            TransformElement,
            SVGBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
            ITextElement
        ], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
        }, SVGTextLottieElement.prototype.buildTextContents = function(t1) {
            for(var e1 = 0, i1 = t1.length, r1 = [], s1 = ""; e1 < i1;)t1[e1] === String.fromCharCode(13) || t1[e1] === String.fromCharCode(3) ? (r1.push(s1), s1 = "") : s1 += t1[e1], e1 += 1;
            return r1.push(s1), r1;
        }, SVGTextLottieElement.prototype.buildShapeData = function(t1, e1) {
            if (t1.shapes && t1.shapes.length) {
                var i1 = t1.shapes[0];
                if (i1.it) {
                    var r1 = i1.it[i1.it.length - 1];
                    r1.s && (r1.s.k[0] = e1, r1.s.k[1] = e1);
                }
            }
            return t1;
        }, SVGTextLottieElement.prototype.buildNewText = function() {
            this.addDynamicProperty(this);
            var t1, e1, i1 = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(i1 ? i1.l.length : 0), i1.fc ? this.layerElement.setAttribute("fill", this.buildColor(i1.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i1.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i1.sc)), this.layerElement.setAttribute("stroke-width", i1.sw)), this.layerElement.setAttribute("font-size", i1.finalSize);
            var r1 = this.globalData.fontManager.getFontByName(i1.f);
            if (r1.fClass) this.layerElement.setAttribute("class", r1.fClass);
            else {
                this.layerElement.setAttribute("font-family", r1.fFamily);
                var s1 = i1.fWeight, a1 = i1.fStyle;
                this.layerElement.setAttribute("font-style", a1), this.layerElement.setAttribute("font-weight", s1);
            }
            this.layerElement.setAttribute("aria-label", i1.t);
            var n1 = i1.l || [], f1 = !!this.globalData.fontManager.chars;
            e1 = n1.length;
            var o1, d1 = this.mHelper, v1 = "", P1 = this.data.singleShape, m1 = 0, b1 = 0, g1 = !0, y1 = i1.tr * .001 * i1.finalSize;
            if (P1 && !f1 && !i1.sz) {
                var A1 = this.textContainer, p1 = "start";
                switch(i1.j){
                    case 1:
                        p1 = "end";
                        break;
                    case 2:
                        p1 = "middle";
                        break;
                    default:
                        p1 = "start";
                        break;
                }
                A1.setAttribute("text-anchor", p1), A1.setAttribute("letter-spacing", y1);
                var h1 = this.buildTextContents(i1.finalText);
                for(e1 = h1.length, b1 = i1.ps ? i1.ps[1] + i1.ascent : 0, t1 = 0; t1 < e1; t1 += 1)o1 = this.textSpans[t1].span || createNS("tspan"), o1.textContent = h1[t1], o1.setAttribute("x", 0), o1.setAttribute("y", b1), o1.style.display = "inherit", A1.appendChild(o1), this.textSpans[t1] || (this.textSpans[t1] = {
                    span: null,
                    glyph: null
                }), this.textSpans[t1].span = o1, b1 += i1.finalLineHeight;
                this.layerElement.appendChild(A1);
            } else {
                var l1 = this.textSpans.length, u1;
                for(t1 = 0; t1 < e1; t1 += 1){
                    if (this.textSpans[t1] || (this.textSpans[t1] = {
                        span: null,
                        childSpan: null,
                        glyph: null
                    }), !f1 || !P1 || t1 === 0) {
                        if (o1 = l1 > t1 ? this.textSpans[t1].span : createNS(f1 ? "g" : "text"), l1 <= t1) {
                            if (o1.setAttribute("stroke-linecap", "butt"), o1.setAttribute("stroke-linejoin", "round"), o1.setAttribute("stroke-miterlimit", "4"), this.textSpans[t1].span = o1, f1) {
                                var E1 = createNS("g");
                                o1.appendChild(E1), this.textSpans[t1].childSpan = E1;
                            }
                            this.textSpans[t1].span = o1, this.layerElement.appendChild(o1);
                        }
                        o1.style.display = "inherit";
                    }
                    if (d1.reset(), P1 && (n1[t1].n && (m1 = -y1, b1 += i1.yOffset, b1 += g1 ? 1 : 0, g1 = !1), this.applyTextPropertiesToMatrix(i1, d1, n1[t1].line, m1, b1), m1 += n1[t1].l || 0, m1 += y1), f1) {
                        u1 = this.globalData.fontManager.getCharData(i1.finalText[t1], r1.fStyle, this.globalData.fontManager.getFontByName(i1.f).fFamily);
                        var M1;
                        if (u1.t === 1) M1 = new SVGCompElement(u1.data, this.globalData, this);
                        else {
                            var D1 = emptyShapeData;
                            u1.data && u1.data.shapes && (D1 = this.buildShapeData(u1.data, i1.finalSize)), M1 = new SVGShapeElement(D1, this.globalData, this);
                        }
                        if (this.textSpans[t1].glyph) {
                            var k1 = this.textSpans[t1].glyph;
                            this.textSpans[t1].childSpan.removeChild(k1.layerElement), k1.destroy();
                        }
                        this.textSpans[t1].glyph = M1, M1._debug = !0, M1.prepareFrame(0), M1.renderFrame(), this.textSpans[t1].childSpan.appendChild(M1.layerElement), u1.t === 1 && this.textSpans[t1].childSpan.setAttribute("transform", "scale(" + i1.finalSize / 100 + "," + i1.finalSize / 100 + ")");
                    } else P1 && o1.setAttribute("transform", "translate(" + d1.props[12] + "," + d1.props[13] + ")"), o1.textContent = n1[t1].val, o1.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                }
                P1 && o1 && o1.setAttribute("d", v1);
            }
            for(; t1 < this.textSpans.length;)this.textSpans[t1].span.style.display = "none", t1 += 1;
            this._sizeChanged = !0;
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var t1 = this.layerElement.getBBox();
                this.bbox = {
                    top: t1.y,
                    left: t1.x,
                    width: t1.width,
                    height: t1.height
                };
            }
            return this.bbox;
        }, SVGTextLottieElement.prototype.getValue = function() {
            var t1, e1 = this.textSpans.length, i1;
            for(this.renderedFrame = this.comp.renderedFrame, t1 = 0; t1 < e1; t1 += 1)i1 = this.textSpans[t1].glyph, i1 && (i1.prepareFrame(this.comp.renderedFrame - this.data.st), i1._mdf && (this._mdf = !0));
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
            if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                this._sizeChanged = !0;
                var t1, e1, i1 = this.textAnimator.renderedLetters, r1 = this.textProperty.currentData.l;
                e1 = r1.length;
                var s1, a1, n1;
                for(t1 = 0; t1 < e1; t1 += 1)r1[t1].n || (s1 = i1[t1], a1 = this.textSpans[t1].span, n1 = this.textSpans[t1].glyph, n1 && n1.renderFrame(), s1._mdf.m && a1.setAttribute("transform", s1.m), s1._mdf.o && a1.setAttribute("opacity", s1.o), s1._mdf.sw && a1.setAttribute("stroke-width", s1.sw), s1._mdf.sc && a1.setAttribute("stroke", s1.sc), s1._mdf.fc && a1.setAttribute("fill", s1.fc));
            }
        };
        function ISolidElement(t1, e1, i1) {
            this.initElement(t1, e1, i1);
        }
        extendPrototype([
            IImageElement
        ], ISolidElement), ISolidElement.prototype.createContent = function() {
            var t1 = createNS("rect");
            t1.setAttribute("width", this.data.sw), t1.setAttribute("height", this.data.sh), t1.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t1);
        };
        function NullElement(t1, e1, i1) {
            this.initFrame(), this.initBaseData(t1, e1, i1), this.initFrame(), this.initTransform(t1, e1, i1), this.initHierarchy();
        }
        NullElement.prototype.prepareFrame = function(t1) {
            this.prepareProperties(t1, !0);
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
            return null;
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([
            BaseElement,
            TransformElement,
            HierarchyElement,
            FrameElement
        ], NullElement);
        function SVGRendererBase() {}
        extendPrototype([
            BaseRenderer
        ], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t1) {
            return new NullElement(t1, this.globalData, this);
        }, SVGRendererBase.prototype.createShape = function(t1) {
            return new SVGShapeElement(t1, this.globalData, this);
        }, SVGRendererBase.prototype.createText = function(t1) {
            return new SVGTextLottieElement(t1, this.globalData, this);
        }, SVGRendererBase.prototype.createImage = function(t1) {
            return new IImageElement(t1, this.globalData, this);
        }, SVGRendererBase.prototype.createSolid = function(t1) {
            return new ISolidElement(t1, this.globalData, this);
        }, SVGRendererBase.prototype.configAnimation = function(t1) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t1.w + " " + t1.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t1.w), this.svgElement.setAttribute("height", t1.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e1 = this.globalData.defs;
            this.setupGlobalData(t1, e1), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t1;
            var i1 = createNS("clipPath"), r1 = createNS("rect");
            r1.setAttribute("width", t1.w), r1.setAttribute("height", t1.h), r1.setAttribute("x", 0), r1.setAttribute("y", 0);
            var s1 = createElementID();
            i1.setAttribute("id", s1), i1.appendChild(r1), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s1 + ")"), e1.appendChild(i1), this.layers = t1.layers, this.elements = createSizedArray(t1.layers.length);
        }, SVGRendererBase.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var t1, e1 = this.layers ? this.layers.length : 0;
            for(t1 = 0; t1 < e1; t1 += 1)this.elements[t1] && this.elements[t1].destroy && this.elements[t1].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t1) {
            var e1 = 0, i1 = this.layers.length;
            for(e1 = 0; e1 < i1; e1 += 1)if (this.layers[e1].ind === t1) return e1;
            return -1;
        }, SVGRendererBase.prototype.buildItem = function(t1) {
            var e1 = this.elements;
            if (!(e1[t1] || this.layers[t1].ty === 99)) {
                e1[t1] = !0;
                var i1 = this.createItem(this.layers[t1]);
                if (e1[t1] = i1, getExpressionsPlugin() && (this.layers[t1].ty === 0 && this.globalData.projectInterface.registerComposition(i1), i1.initExpressions()), this.appendElementInPos(i1, t1), this.layers[t1].tt) {
                    var r1 = "tp" in this.layers[t1] ? this.findIndexByInd(this.layers[t1].tp) : t1 - 1;
                    if (r1 === -1) return;
                    if (!this.elements[r1] || this.elements[r1] === !0) this.buildItem(r1), this.addPendingElement(i1);
                    else {
                        var s1 = e1[r1], a1 = s1.getMatte(this.layers[t1].tt);
                        i1.setMatte(a1);
                    }
                }
            }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
            for(; this.pendingElements.length;){
                var t1 = this.pendingElements.pop();
                if (t1.checkParenting(), t1.data.tt) for(var e1 = 0, i1 = this.elements.length; e1 < i1;){
                    if (this.elements[e1] === t1) {
                        var r1 = "tp" in t1.data ? this.findIndexByInd(t1.data.tp) : e1 - 1, s1 = this.elements[r1], a1 = s1.getMatte(this.layers[e1].tt);
                        t1.setMatte(a1);
                        break;
                    }
                    e1 += 1;
                }
            }
        }, SVGRendererBase.prototype.renderFrame = function(t1) {
            if (!(this.renderedFrame === t1 || this.destroyed)) {
                t1 === null ? t1 = this.renderedFrame : this.renderedFrame = t1, this.globalData.frameNum = t1, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t1, this.globalData._mdf = !1;
                var e1, i1 = this.layers.length;
                for(this.completeLayers || this.checkLayers(t1), e1 = i1 - 1; e1 >= 0; e1 -= 1)(this.completeLayers || this.elements[e1]) && this.elements[e1].prepareFrame(t1 - this.layers[e1].st);
                if (this.globalData._mdf) for(e1 = 0; e1 < i1; e1 += 1)(this.completeLayers || this.elements[e1]) && this.elements[e1].renderFrame();
            }
        }, SVGRendererBase.prototype.appendElementInPos = function(t1, e1) {
            var i1 = t1.getBaseElement();
            if (i1) {
                for(var r1 = 0, s1; r1 < e1;)this.elements[r1] && this.elements[r1] !== !0 && this.elements[r1].getBaseElement() && (s1 = this.elements[r1].getBaseElement()), r1 += 1;
                s1 ? this.layerElement.insertBefore(i1, s1) : this.layerElement.appendChild(i1);
            }
        }, SVGRendererBase.prototype.hide = function() {
            this.layerElement.style.display = "none";
        }, SVGRendererBase.prototype.show = function() {
            this.layerElement.style.display = "block";
        };
        function ICompElement() {}
        extendPrototype([
            BaseElement,
            TransformElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement
        ], ICompElement), ICompElement.prototype.initElement = function(t1, e1, i1) {
            this.initFrame(), this.initBaseData(t1, e1, i1), this.initTransform(t1, e1, i1), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e1.progressiveLoad) && this.buildAllItems(), this.hide();
        }, ICompElement.prototype.prepareFrame = function(t1) {
            if (this._mdf = !1, this.prepareRenderableFrame(t1), this.prepareProperties(t1, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                if (this.tm._placeholder) this.renderedFrame = t1 / this.data.sr;
                else {
                    var e1 = this.tm.v;
                    e1 === this.data.op && (e1 = this.data.op - 1), this.renderedFrame = e1;
                }
                var i1, r1 = this.elements.length;
                for(this.completeLayers || this.checkLayers(this.renderedFrame), i1 = r1 - 1; i1 >= 0; i1 -= 1)(this.completeLayers || this.elements[i1]) && (this.elements[i1].prepareFrame(this.renderedFrame - this.layers[i1].st), this.elements[i1]._mdf && (this._mdf = !0));
            }
        }, ICompElement.prototype.renderInnerContent = function() {
            var t1, e1 = this.layers.length;
            for(t1 = 0; t1 < e1; t1 += 1)(this.completeLayers || this.elements[t1]) && this.elements[t1].renderFrame();
        }, ICompElement.prototype.setElements = function(t1) {
            this.elements = t1;
        }, ICompElement.prototype.getElements = function() {
            return this.elements;
        }, ICompElement.prototype.destroyElements = function() {
            var t1, e1 = this.layers.length;
            for(t1 = 0; t1 < e1; t1 += 1)this.elements[t1] && this.elements[t1].destroy();
        }, ICompElement.prototype.destroy = function() {
            this.destroyElements(), this.destroyBaseElement();
        };
        function SVGCompElement(t1, e1, i1) {
            this.layers = t1.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t1, e1, i1), this.tm = t1.tm ? PropertyFactory.getProp(this, t1.tm, 0, e1.frameRate, this) : {
                _placeholder: !0
            };
        }
        extendPrototype([
            SVGRendererBase,
            ICompElement,
            SVGBaseElement
        ], SVGCompElement), SVGCompElement.prototype.createComp = function(t1) {
            return new SVGCompElement(t1, this.globalData, this);
        };
        function SVGRenderer(t1, e1) {
            this.animationItem = t1, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var i1 = "";
            if (e1 && e1.title) {
                var r1 = createNS("title"), s1 = createElementID();
                r1.setAttribute("id", s1), r1.textContent = e1.title, this.svgElement.appendChild(r1), i1 += s1;
            }
            if (e1 && e1.description) {
                var a1 = createNS("desc"), n1 = createElementID();
                a1.setAttribute("id", n1), a1.textContent = e1.description, this.svgElement.appendChild(a1), i1 += " " + n1;
            }
            i1 && this.svgElement.setAttribute("aria-labelledby", i1);
            var f1 = createNS("defs");
            this.svgElement.appendChild(f1);
            var o1 = createNS("g");
            this.svgElement.appendChild(o1), this.layerElement = o1, this.renderConfig = {
                preserveAspectRatio: e1 && e1.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e1 && e1.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e1 && e1.contentVisibility || "visible",
                progressiveLoad: e1 && e1.progressiveLoad || !1,
                hideOnTransparent: !(e1 && e1.hideOnTransparent === !1),
                viewBoxOnly: e1 && e1.viewBoxOnly || !1,
                viewBoxSize: e1 && e1.viewBoxSize || !1,
                className: e1 && e1.className || "",
                id: e1 && e1.id || "",
                focusable: e1 && e1.focusable,
                filterSize: {
                    width: e1 && e1.filterSize && e1.filterSize.width || "100%",
                    height: e1 && e1.filterSize && e1.filterSize.height || "100%",
                    x: e1 && e1.filterSize && e1.filterSize.x || "0%",
                    y: e1 && e1.filterSize && e1.filterSize.y || "0%"
                },
                width: e1 && e1.width,
                height: e1 && e1.height,
                runExpressions: !e1 || e1.runExpressions === void 0 || e1.runExpressions
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: f1,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
        }
        extendPrototype([
            SVGRendererBase
        ], SVGRenderer), SVGRenderer.prototype.createComp = function(t1) {
            return new SVGCompElement(t1, this.globalData, this);
        };
        var registeredEffects = {};
        function CVEffects(t1) {
            var e1, i1 = t1.data.ef ? t1.data.ef.length : 0;
            this.filters = [];
            var r1;
            for(e1 = 0; e1 < i1; e1 += 1){
                r1 = null;
                var s1 = t1.data.ef[e1].ty;
                if (registeredEffects[s1]) {
                    var a1 = registeredEffects[s1].effect;
                    r1 = new a1(t1.effectsManager.effectElements[e1], t1);
                }
                r1 && this.filters.push(r1);
            }
            this.filters.length && t1.addRenderableComponent(this);
        }
        CVEffects.prototype.renderFrame = function(t1) {
            var e1, i1 = this.filters.length;
            for(e1 = 0; e1 < i1; e1 += 1)this.filters[e1].renderFrame(t1);
        }, CVEffects.prototype.getEffects = function(t1) {
            var e1, i1 = this.filters.length, r1 = [];
            for(e1 = 0; e1 < i1; e1 += 1)this.filters[e1].type === t1 && r1.push(this.filters[e1]);
            return r1;
        };
        function HBaseElement() {}
        HBaseElement.prototype = {
            checkBlendMode: function() {},
            initRendererElement: function() {
                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
            },
            createContainerElements: function() {
                this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode();
            },
            renderElement: function() {
                var t1 = this.transformedElement ? this.transformedElement.style : {};
                if (this.finalTransform._matMdf) {
                    var e1 = this.finalTransform.mat.toCSS();
                    t1.transform = e1, t1.webkitTransform = e1;
                }
                this.finalTransform._opMdf && (t1.opacity = this.finalTransform.mProp.o.v);
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
            },
            destroy: function() {
                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData);
            },
            addEffects: function() {},
            setMatte: function() {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;
        function HSolidElement(t1, e1, i1) {
            this.initElement(t1, e1, i1);
        }
        extendPrototype([
            BaseElement,
            TransformElement,
            HBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement
        ], HSolidElement), HSolidElement.prototype.createContent = function() {
            var t1;
            this.data.hasMask ? (t1 = createNS("rect"), t1.setAttribute("width", this.data.sw), t1.setAttribute("height", this.data.sh), t1.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (t1 = createTag("div"), t1.style.width = this.data.sw + "px", t1.style.height = this.data.sh + "px", t1.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t1);
        };
        function HShapeElement(t1, e1, i1) {
            this.shapes = [], this.shapesData = t1.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t1, e1, i1), this.prevViewData = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            };
        }
        extendPrototype([
            BaseElement,
            TransformElement,
            HSolidElement,
            SVGShapeElement,
            HBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableElement
        ], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
            var t1;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t1 = this.svgElement;
            else {
                t1 = createNS("svg");
                var e1 = this.comp.data ? this.comp.data : this.globalData.compSize;
                t1.setAttribute("width", e1.w), t1.setAttribute("height", e1.h), t1.appendChild(this.shapesContainer), this.layerElement.appendChild(t1);
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t1;
        }, HShapeElement.prototype.getTransformedPoint = function(t1, e1) {
            var i1, r1 = t1.length;
            for(i1 = 0; i1 < r1; i1 += 1)e1 = t1[i1].mProps.v.applyToPointArray(e1[0], e1[1], 0);
            return e1;
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t1, e1) {
            var i1 = t1.sh.v, r1 = t1.transformers, s1, a1 = i1._length, n1, f1, o1, d1;
            if (!(a1 <= 1)) {
                for(s1 = 0; s1 < a1 - 1; s1 += 1)n1 = this.getTransformedPoint(r1, i1.v[s1]), f1 = this.getTransformedPoint(r1, i1.o[s1]), o1 = this.getTransformedPoint(r1, i1.i[s1 + 1]), d1 = this.getTransformedPoint(r1, i1.v[s1 + 1]), this.checkBounds(n1, f1, o1, d1, e1);
                i1.c && (n1 = this.getTransformedPoint(r1, i1.v[s1]), f1 = this.getTransformedPoint(r1, i1.o[s1]), o1 = this.getTransformedPoint(r1, i1.i[0]), d1 = this.getTransformedPoint(r1, i1.v[0]), this.checkBounds(n1, f1, o1, d1, e1));
            }
        }, HShapeElement.prototype.checkBounds = function(t1, e1, i1, r1, s1) {
            this.getBoundsOfCurve(t1, e1, i1, r1);
            var a1 = this.shapeBoundingBox;
            s1.x = bmMin(a1.left, s1.x), s1.xMax = bmMax(a1.right, s1.xMax), s1.y = bmMin(a1.top, s1.y), s1.yMax = bmMax(a1.bottom, s1.yMax);
        }, HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(t1, e1, i1, r1) {
            for(var s1 = [
                [
                    t1[0],
                    r1[0]
                ],
                [
                    t1[1],
                    r1[1]
                ]
            ], a1, n1, f1, o1, d1, v1, P1, m1 = 0; m1 < 2; ++m1)n1 = 6 * t1[m1] - 12 * e1[m1] + 6 * i1[m1], a1 = -3 * t1[m1] + 9 * e1[m1] - 9 * i1[m1] + 3 * r1[m1], f1 = 3 * e1[m1] - 3 * t1[m1], n1 |= 0, a1 |= 0, f1 |= 0, a1 === 0 && n1 === 0 || (a1 === 0 ? (o1 = -f1 / n1, o1 > 0 && o1 < 1 && s1[m1].push(this.calculateF(o1, t1, e1, i1, r1, m1))) : (d1 = n1 * n1 - 4 * f1 * a1, d1 >= 0 && (v1 = (-n1 + bmSqrt(d1)) / (2 * a1), v1 > 0 && v1 < 1 && s1[m1].push(this.calculateF(v1, t1, e1, i1, r1, m1)), P1 = (-n1 - bmSqrt(d1)) / (2 * a1), P1 > 0 && P1 < 1 && s1[m1].push(this.calculateF(P1, t1, e1, i1, r1, m1)))));
            this.shapeBoundingBox.left = bmMin.apply(null, s1[0]), this.shapeBoundingBox.top = bmMin.apply(null, s1[1]), this.shapeBoundingBox.right = bmMax.apply(null, s1[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, s1[1]);
        }, HShapeElement.prototype.calculateF = function(t1, e1, i1, r1, s1, a1) {
            return bmPow(1 - t1, 3) * e1[a1] + 3 * bmPow(1 - t1, 2) * t1 * i1[a1] + 3 * (1 - t1) * bmPow(t1, 2) * r1[a1] + bmPow(t1, 3) * s1[a1];
        }, HShapeElement.prototype.calculateBoundingBox = function(t1, e1) {
            var i1, r1 = t1.length;
            for(i1 = 0; i1 < r1; i1 += 1)t1[i1] && t1[i1].sh ? this.calculateShapeBoundingBox(t1[i1], e1) : t1[i1] && t1[i1].it ? this.calculateBoundingBox(t1[i1].it, e1) : t1[i1] && t1[i1].style && t1[i1].w && this.expandStrokeBoundingBox(t1[i1].w, e1);
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(t1, e1) {
            var i1 = 0;
            if (t1.keyframes) {
                for(var r1 = 0; r1 < t1.keyframes.length; r1 += 1){
                    var s1 = t1.keyframes[r1].s;
                    s1 > i1 && (i1 = s1);
                }
                i1 *= t1.mult;
            } else i1 = t1.v * t1.mult;
            e1.x -= i1, e1.xMax += i1, e1.y -= i1, e1.yMax += i1;
        }, HShapeElement.prototype.currentBoxContains = function(t1) {
            return this.currentBBox.x <= t1.x && this.currentBBox.y <= t1.y && this.currentBBox.width + this.currentBBox.x >= t1.x + t1.width && this.currentBBox.height + this.currentBBox.y >= t1.y + t1.height;
        }, HShapeElement.prototype.renderInnerContent = function() {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t1 = this.tempBoundingBox, e1 = 999999;
                if (t1.x = e1, t1.xMax = -e1, t1.y = e1, t1.yMax = -e1, this.calculateBoundingBox(this.itemsData, t1), t1.width = t1.xMax < t1.x ? 0 : t1.xMax - t1.x, t1.height = t1.yMax < t1.y ? 0 : t1.yMax - t1.y, this.currentBoxContains(t1)) return;
                var i1 = !1;
                if (this.currentBBox.w !== t1.width && (this.currentBBox.w = t1.width, this.shapeCont.setAttribute("width", t1.width), i1 = !0), this.currentBBox.h !== t1.height && (this.currentBBox.h = t1.height, this.shapeCont.setAttribute("height", t1.height), i1 = !0), i1 || this.currentBBox.x !== t1.x || this.currentBBox.y !== t1.y) {
                    this.currentBBox.w = t1.width, this.currentBBox.h = t1.height, this.currentBBox.x = t1.x, this.currentBBox.y = t1.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                    var r1 = this.shapeCont.style, s1 = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    r1.transform = s1, r1.webkitTransform = s1;
                }
            }
        };
        function HTextElement(t1, e1, i1) {
            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }, this.renderType = "svg", this.isMasked = !1, this.initElement(t1, e1, i1);
        }
        extendPrototype([
            BaseElement,
            TransformElement,
            HBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
            ITextElement
        ], HTextElement), HTextElement.prototype.createContent = function() {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var t1 = createNS("g");
                this.maskedElement.appendChild(t1), this.innerElem = t1;
            } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting();
        }, HTextElement.prototype.buildNewText = function() {
            var t1 = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t1.l ? t1.l.length : 0);
            var e1 = this.innerElem.style, i1 = t1.fc ? this.buildColor(t1.fc) : "rgba(0,0,0,0)";
            e1.fill = i1, e1.color = i1, t1.sc && (e1.stroke = this.buildColor(t1.sc), e1.strokeWidth = t1.sw + "px");
            var r1 = this.globalData.fontManager.getFontByName(t1.f);
            if (!this.globalData.fontManager.chars) {
                if (e1.fontSize = t1.finalSize + "px", e1.lineHeight = t1.finalSize + "px", r1.fClass) this.innerElem.className = r1.fClass;
                else {
                    e1.fontFamily = r1.fFamily;
                    var s1 = t1.fWeight, a1 = t1.fStyle;
                    e1.fontStyle = a1, e1.fontWeight = s1;
                }
            }
            var n1, f1, o1 = t1.l;
            f1 = o1.length;
            var d1, v1, P1, m1 = this.mHelper, b1, g1 = "", y1 = 0;
            for(n1 = 0; n1 < f1; n1 += 1){
                if (this.globalData.fontManager.chars ? (this.textPaths[y1] ? d1 = this.textPaths[y1] : (d1 = createNS("path"), d1.setAttribute("stroke-linecap", lineCapEnum[1]), d1.setAttribute("stroke-linejoin", lineJoinEnum[2]), d1.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[y1] ? (v1 = this.textSpans[y1], P1 = v1.children[0]) : (v1 = createTag("div"), v1.style.lineHeight = 0, P1 = createNS("svg"), P1.appendChild(d1), styleDiv(v1)))) : this.isMasked ? d1 = this.textPaths[y1] ? this.textPaths[y1] : createNS("text") : this.textSpans[y1] ? (v1 = this.textSpans[y1], d1 = this.textPaths[y1]) : (v1 = createTag("span"), styleDiv(v1), d1 = createTag("span"), styleDiv(d1), v1.appendChild(d1)), this.globalData.fontManager.chars) {
                    var A1 = this.globalData.fontManager.getCharData(t1.finalText[n1], r1.fStyle, this.globalData.fontManager.getFontByName(t1.f).fFamily), p1;
                    if (A1 ? p1 = A1.data : p1 = null, m1.reset(), p1 && p1.shapes && p1.shapes.length && (b1 = p1.shapes[0].it, m1.scale(t1.finalSize / 100, t1.finalSize / 100), g1 = this.createPathShape(m1, b1), d1.setAttribute("d", g1)), this.isMasked) this.innerElem.appendChild(d1);
                    else {
                        if (this.innerElem.appendChild(v1), p1 && p1.shapes) {
                            document.body.appendChild(P1);
                            var h1 = P1.getBBox();
                            P1.setAttribute("width", h1.width + 2), P1.setAttribute("height", h1.height + 2), P1.setAttribute("viewBox", h1.x - 1 + " " + (h1.y - 1) + " " + (h1.width + 2) + " " + (h1.height + 2));
                            var l1 = P1.style, u1 = "translate(" + (h1.x - 1) + "px," + (h1.y - 1) + "px)";
                            l1.transform = u1, l1.webkitTransform = u1, o1[n1].yOffset = h1.y - 1;
                        } else P1.setAttribute("width", 1), P1.setAttribute("height", 1);
                        v1.appendChild(P1);
                    }
                } else if (d1.textContent = o1[n1].val, d1.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(d1);
                else {
                    this.innerElem.appendChild(v1);
                    var E1 = d1.style, M1 = "translate3d(0," + -t1.finalSize / 1.2 + "px,0)";
                    E1.transform = M1, E1.webkitTransform = M1;
                }
                this.isMasked ? this.textSpans[y1] = d1 : this.textSpans[y1] = v1, this.textSpans[y1].style.display = "block", this.textPaths[y1] = d1, y1 += 1;
            }
            for(; y1 < this.textSpans.length;)this.textSpans[y1].style.display = "none", y1 += 1;
        }, HTextElement.prototype.renderInnerContent = function() {
            this.validateText();
            var t1;
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t1 = this.svgElement.style;
                    var e1 = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    t1.transform = e1, t1.webkitTransform = e1;
                }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
                var i1, r1, s1 = 0, a1 = this.textAnimator.renderedLetters, n1 = this.textProperty.currentData.l;
                r1 = n1.length;
                var f1, o1, d1;
                for(i1 = 0; i1 < r1; i1 += 1)n1[i1].n ? s1 += 1 : (o1 = this.textSpans[i1], d1 = this.textPaths[i1], f1 = a1[s1], s1 += 1, f1._mdf.m && (this.isMasked ? o1.setAttribute("transform", f1.m) : (o1.style.webkitTransform = f1.m, o1.style.transform = f1.m)), o1.style.opacity = f1.o, f1.sw && f1._mdf.sw && d1.setAttribute("stroke-width", f1.sw), f1.sc && f1._mdf.sc && d1.setAttribute("stroke", f1.sc), f1.fc && f1._mdf.fc && (d1.setAttribute("fill", f1.fc), d1.style.color = f1.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var v1 = this.innerElem.getBBox();
                    this.currentBBox.w !== v1.width && (this.currentBBox.w = v1.width, this.svgElement.setAttribute("width", v1.width)), this.currentBBox.h !== v1.height && (this.currentBBox.h = v1.height, this.svgElement.setAttribute("height", v1.height));
                    var P1 = 1;
                    if (this.currentBBox.w !== v1.width + P1 * 2 || this.currentBBox.h !== v1.height + P1 * 2 || this.currentBBox.x !== v1.x - P1 || this.currentBBox.y !== v1.y - P1) {
                        this.currentBBox.w = v1.width + P1 * 2, this.currentBBox.h = v1.height + P1 * 2, this.currentBBox.x = v1.x - P1, this.currentBBox.y = v1.y - P1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t1 = this.svgElement.style;
                        var m1 = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        t1.transform = m1, t1.webkitTransform = m1;
                    }
                }
            }
        };
        function HCameraElement(t1, e1, i1) {
            this.initFrame(), this.initBaseData(t1, e1, i1), this.initHierarchy();
            var r1 = PropertyFactory.getProp;
            if (this.pe = r1(this, t1.pe, 0, 0, this), t1.ks.p.s ? (this.px = r1(this, t1.ks.p.x, 1, 0, this), this.py = r1(this, t1.ks.p.y, 1, 0, this), this.pz = r1(this, t1.ks.p.z, 1, 0, this)) : this.p = r1(this, t1.ks.p, 1, 0, this), t1.ks.a && (this.a = r1(this, t1.ks.a, 1, 0, this)), t1.ks.or.k.length && t1.ks.or.k[0].to) {
                var s1, a1 = t1.ks.or.k.length;
                for(s1 = 0; s1 < a1; s1 += 1)t1.ks.or.k[s1].to = null, t1.ks.or.k[s1].ti = null;
            }
            this.or = r1(this, t1.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r1(this, t1.ks.rx, 0, degToRads, this), this.ry = r1(this, t1.ks.ry, 0, degToRads, this), this.rz = r1(this, t1.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                mProp: this
            };
        }
        extendPrototype([
            BaseElement,
            FrameElement,
            HierarchyElement
        ], HCameraElement), HCameraElement.prototype.setup = function() {
            var t1, e1 = this.comp.threeDElements.length, i1, r1, s1;
            for(t1 = 0; t1 < e1; t1 += 1)if (i1 = this.comp.threeDElements[t1], i1.type === "3d") {
                r1 = i1.perspectiveElem.style, s1 = i1.container.style;
                var a1 = this.pe.v + "px", n1 = "0px 0px 0px", f1 = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                r1.perspective = a1, r1.webkitPerspective = a1, s1.transformOrigin = n1, s1.mozTransformOrigin = n1, s1.webkitTransformOrigin = n1, r1.transform = f1, r1.webkitTransform = f1;
            }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
            var t1 = this._isFirstFrame, e1, i1;
            if (this.hierarchy) for(i1 = this.hierarchy.length, e1 = 0; e1 < i1; e1 += 1)t1 = this.hierarchy[e1].finalTransform.mProp._mdf || t1;
            if (t1 || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy) for(i1 = this.hierarchy.length - 1, e1 = i1; e1 >= 0; e1 -= 1){
                    var r1 = this.hierarchy[e1].finalTransform.mProp;
                    this.mat.translate(-r1.p.v[0], -r1.p.v[1], r1.p.v[2]), this.mat.rotateX(-r1.or.v[0]).rotateY(-r1.or.v[1]).rotateZ(r1.or.v[2]), this.mat.rotateX(-r1.rx.v).rotateY(-r1.ry.v).rotateZ(r1.rz.v), this.mat.scale(1 / r1.s.v[0], 1 / r1.s.v[1], 1 / r1.s.v[2]), this.mat.translate(r1.a.v[0], r1.a.v[1], r1.a.v[2]);
                }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                    var s1;
                    this.p ? s1 = [
                        this.p.v[0] - this.a.v[0],
                        this.p.v[1] - this.a.v[1],
                        this.p.v[2] - this.a.v[2]
                    ] : s1 = [
                        this.px.v - this.a.v[0],
                        this.py.v - this.a.v[1],
                        this.pz.v - this.a.v[2]
                    ];
                    var a1 = Math.sqrt(Math.pow(s1[0], 2) + Math.pow(s1[1], 2) + Math.pow(s1[2], 2)), n1 = [
                        s1[0] / a1,
                        s1[1] / a1,
                        s1[2] / a1
                    ], f1 = Math.sqrt(n1[2] * n1[2] + n1[0] * n1[0]), o1 = Math.atan2(n1[1], f1), d1 = Math.atan2(n1[0], -n1[2]);
                    this.mat.rotateY(d1).rotateX(-o1);
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var v1 = !this._prevMat.equals(this.mat);
                if ((v1 || this.pe._mdf) && this.comp.threeDElements) {
                    i1 = this.comp.threeDElements.length;
                    var P1, m1, b1;
                    for(e1 = 0; e1 < i1; e1 += 1)if (P1 = this.comp.threeDElements[e1], P1.type === "3d") {
                        if (v1) {
                            var g1 = this.mat.toCSS();
                            b1 = P1.container.style, b1.transform = g1, b1.webkitTransform = g1;
                        }
                        this.pe._mdf && (m1 = P1.perspectiveElem.style, m1.perspective = this.pe.v + "px", m1.webkitPerspective = this.pe.v + "px");
                    }
                    this.mat.clone(this._prevMat);
                }
            }
            this._isFirstFrame = !1;
        }, HCameraElement.prototype.prepareFrame = function(t1) {
            this.prepareProperties(t1, !0);
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
            return null;
        };
        function HImageElement(t1, e1, i1) {
            this.assetData = e1.getAssetData(t1.refId), this.initElement(t1, e1, i1);
        }
        extendPrototype([
            BaseElement,
            TransformElement,
            HBaseElement,
            HSolidElement,
            HierarchyElement,
            FrameElement,
            RenderableElement
        ], HImageElement), HImageElement.prototype.createContent = function() {
            var t1 = this.globalData.getAssetsPath(this.assetData), e1 = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t1), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e1), e1.crossOrigin = "anonymous", e1.src = t1, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
        };
        function HybridRendererBase(t1, e1) {
            this.animationItem = t1, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e1 && e1.className || "",
                imagePreserveAspectRatio: e1 && e1.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e1 && e1.hideOnTransparent === !1),
                filterSize: {
                    width: e1 && e1.filterSize && e1.filterSize.width || "400%",
                    height: e1 && e1.filterSize && e1.filterSize.height || "400%",
                    x: e1 && e1.filterSize && e1.filterSize.x || "-100%",
                    y: e1 && e1.filterSize && e1.filterSize.y || "-100%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
        }
        extendPrototype([
            BaseRenderer
        ], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
            for(; this.pendingElements.length;){
                var t1 = this.pendingElements.pop();
                t1.checkParenting();
            }
        }, HybridRendererBase.prototype.appendElementInPos = function(t1, e1) {
            var i1 = t1.getBaseElement();
            if (i1) {
                var r1 = this.layers[e1];
                if (!r1.ddd || !this.supports3d) {
                    if (this.threeDElements) this.addTo3dContainer(i1, e1);
                    else {
                        for(var s1 = 0, a1, n1, f1; s1 < e1;)this.elements[s1] && this.elements[s1] !== !0 && this.elements[s1].getBaseElement && (n1 = this.elements[s1], f1 = this.layers[s1].ddd ? this.getThreeDContainerByPos(s1) : n1.getBaseElement(), a1 = f1 || a1), s1 += 1;
                        a1 ? (!r1.ddd || !this.supports3d) && this.layerElement.insertBefore(i1, a1) : (!r1.ddd || !this.supports3d) && this.layerElement.appendChild(i1);
                    }
                } else this.addTo3dContainer(i1, e1);
            }
        }, HybridRendererBase.prototype.createShape = function(t1) {
            return this.supports3d ? new HShapeElement(t1, this.globalData, this) : new SVGShapeElement(t1, this.globalData, this);
        }, HybridRendererBase.prototype.createText = function(t1) {
            return this.supports3d ? new HTextElement(t1, this.globalData, this) : new SVGTextLottieElement(t1, this.globalData, this);
        }, HybridRendererBase.prototype.createCamera = function(t1) {
            return this.camera = new HCameraElement(t1, this.globalData, this), this.camera;
        }, HybridRendererBase.prototype.createImage = function(t1) {
            return this.supports3d ? new HImageElement(t1, this.globalData, this) : new IImageElement(t1, this.globalData, this);
        }, HybridRendererBase.prototype.createSolid = function(t1) {
            return this.supports3d ? new HSolidElement(t1, this.globalData, this) : new ISolidElement(t1, this.globalData, this);
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t1) {
            for(var e1 = 0, i1 = this.threeDElements.length; e1 < i1;){
                if (this.threeDElements[e1].startPos <= t1 && this.threeDElements[e1].endPos >= t1) return this.threeDElements[e1].perspectiveElem;
                e1 += 1;
            }
            return null;
        }, HybridRendererBase.prototype.createThreeDContainer = function(t1, e1) {
            var i1 = createTag("div"), r1, s1;
            styleDiv(i1);
            var a1 = createTag("div");
            if (styleDiv(a1), e1 === "3d") {
                r1 = i1.style, r1.width = this.globalData.compSize.w + "px", r1.height = this.globalData.compSize.h + "px";
                var n1 = "50% 50%";
                r1.webkitTransformOrigin = n1, r1.mozTransformOrigin = n1, r1.transformOrigin = n1, s1 = a1.style;
                var f1 = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                s1.transform = f1, s1.webkitTransform = f1;
            }
            i1.appendChild(a1);
            var o1 = {
                container: a1,
                perspectiveElem: i1,
                startPos: t1,
                endPos: t1,
                type: e1
            };
            return this.threeDElements.push(o1), o1;
        }, HybridRendererBase.prototype.build3dContainers = function() {
            var t1, e1 = this.layers.length, i1, r1 = "";
            for(t1 = 0; t1 < e1; t1 += 1)this.layers[t1].ddd && this.layers[t1].ty !== 3 ? (r1 !== "3d" && (r1 = "3d", i1 = this.createThreeDContainer(t1, "3d")), i1.endPos = Math.max(i1.endPos, t1)) : (r1 !== "2d" && (r1 = "2d", i1 = this.createThreeDContainer(t1, "2d")), i1.endPos = Math.max(i1.endPos, t1));
            for(e1 = this.threeDElements.length, t1 = e1 - 1; t1 >= 0; t1 -= 1)this.resizerElem.appendChild(this.threeDElements[t1].perspectiveElem);
        }, HybridRendererBase.prototype.addTo3dContainer = function(t1, e1) {
            for(var i1 = 0, r1 = this.threeDElements.length; i1 < r1;){
                if (e1 <= this.threeDElements[i1].endPos) {
                    for(var s1 = this.threeDElements[i1].startPos, a1; s1 < e1;)this.elements[s1] && this.elements[s1].getBaseElement && (a1 = this.elements[s1].getBaseElement()), s1 += 1;
                    a1 ? this.threeDElements[i1].container.insertBefore(t1, a1) : this.threeDElements[i1].container.appendChild(t1);
                    break;
                }
                i1 += 1;
            }
        }, HybridRendererBase.prototype.configAnimation = function(t1) {
            var e1 = createTag("div"), i1 = this.animationItem.wrapper, r1 = e1.style;
            r1.width = t1.w + "px", r1.height = t1.h + "px", this.resizerElem = e1, styleDiv(e1), r1.transformStyle = "flat", r1.mozTransformStyle = "flat", r1.webkitTransformStyle = "flat", this.renderConfig.className && e1.setAttribute("class", this.renderConfig.className), i1.appendChild(e1), r1.overflow = "hidden";
            var s1 = createNS("svg");
            s1.setAttribute("width", "1"), s1.setAttribute("height", "1"), styleDiv(s1), this.resizerElem.appendChild(s1);
            var a1 = createNS("defs");
            s1.appendChild(a1), this.data = t1, this.setupGlobalData(t1, s1), this.globalData.defs = a1, this.layers = t1.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
        }, HybridRendererBase.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
            var t1, e1 = this.layers ? this.layers.length : 0;
            for(t1 = 0; t1 < e1; t1 += 1)this.elements[t1] && this.elements[t1].destroy && this.elements[t1].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
        }, HybridRendererBase.prototype.updateContainerSize = function() {
            var t1 = this.animationItem.wrapper.offsetWidth, e1 = this.animationItem.wrapper.offsetHeight, i1 = t1 / e1, r1 = this.globalData.compSize.w / this.globalData.compSize.h, s1, a1, n1, f1;
            r1 > i1 ? (s1 = t1 / this.globalData.compSize.w, a1 = t1 / this.globalData.compSize.w, n1 = 0, f1 = (e1 - this.globalData.compSize.h * (t1 / this.globalData.compSize.w)) / 2) : (s1 = e1 / this.globalData.compSize.h, a1 = e1 / this.globalData.compSize.h, n1 = (t1 - this.globalData.compSize.w * (e1 / this.globalData.compSize.h)) / 2, f1 = 0);
            var o1 = this.resizerElem.style;
            o1.webkitTransform = "matrix3d(" + s1 + ",0,0,0,0," + a1 + ",0,0,0,0,1,0," + n1 + "," + f1 + ",0,1)", o1.transform = o1.webkitTransform;
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
            this.resizerElem.style.display = "none";
        }, HybridRendererBase.prototype.show = function() {
            this.resizerElem.style.display = "block";
        }, HybridRendererBase.prototype.initItems = function() {
            if (this.buildAllItems(), this.camera) this.camera.setup();
            else {
                var t1 = this.globalData.compSize.w, e1 = this.globalData.compSize.h, i1, r1 = this.threeDElements.length;
                for(i1 = 0; i1 < r1; i1 += 1){
                    var s1 = this.threeDElements[i1].perspectiveElem.style;
                    s1.webkitPerspective = Math.sqrt(Math.pow(t1, 2) + Math.pow(e1, 2)) + "px", s1.perspective = s1.webkitPerspective;
                }
            }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(t1) {
            var e1, i1 = t1.length, r1 = createTag("div");
            for(e1 = 0; e1 < i1; e1 += 1)if (t1[e1].xt) {
                var s1 = this.createComp(t1[e1], r1, this.globalData.comp, null);
                s1.initExpressions(), this.globalData.projectInterface.registerComposition(s1);
            }
        };
        function HCompElement(t1, e1, i1) {
            this.layers = t1.layers, this.supports3d = !t1.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t1, e1, i1), this.tm = t1.tm ? PropertyFactory.getProp(this, t1.tm, 0, e1.frameRate, this) : {
                _placeholder: !0
            };
        }
        extendPrototype([
            HybridRendererBase,
            ICompElement,
            HBaseElement
        ], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
        }, HCompElement.prototype.addTo3dContainer = function(t1, e1) {
            for(var i1 = 0, r1; i1 < e1;)this.elements[i1] && this.elements[i1].getBaseElement && (r1 = this.elements[i1].getBaseElement()), i1 += 1;
            r1 ? this.layerElement.insertBefore(t1, r1) : this.layerElement.appendChild(t1);
        }, HCompElement.prototype.createComp = function(t1) {
            return this.supports3d ? new HCompElement(t1, this.globalData, this) : new SVGCompElement(t1, this.globalData, this);
        };
        function HybridRenderer(t1, e1) {
            this.animationItem = t1, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e1 && e1.className || "",
                imagePreserveAspectRatio: e1 && e1.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e1 && e1.hideOnTransparent === !1),
                filterSize: {
                    width: e1 && e1.filterSize && e1.filterSize.width || "400%",
                    height: e1 && e1.filterSize && e1.filterSize.height || "400%",
                    x: e1 && e1.filterSize && e1.filterSize.x || "-100%",
                    y: e1 && e1.filterSize && e1.filterSize.y || "-100%"
                },
                runExpressions: !e1 || e1.runExpressions === void 0 || e1.runExpressions
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
        }
        extendPrototype([
            HybridRendererBase
        ], HybridRenderer), HybridRenderer.prototype.createComp = function(t1) {
            return this.supports3d ? new HCompElement(t1, this.globalData, this) : new SVGCompElement(t1, this.globalData, this);
        }, registerRenderer("html", HybridRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier);
        var CompExpressionInterface = function() {
            return function(t1) {
                function e1(i1) {
                    for(var r1 = 0, s1 = t1.layers.length; r1 < s1;){
                        if (t1.layers[r1].nm === i1 || t1.layers[r1].ind === i1) return t1.elements[r1].layerInterface;
                        r1 += 1;
                    }
                    return null;
                }
                return Object.defineProperty(e1, "_name", {
                    value: t1.data.nm
                }), e1.layer = e1, e1.pixelAspect = 1, e1.height = t1.data.h || t1.globalData.compSize.h, e1.width = t1.data.w || t1.globalData.compSize.w, e1.pixelAspect = 1, e1.frameDuration = 1 / t1.globalData.frameRate, e1.displayStartTime = 0, e1.numLayers = t1.layers.length, e1;
            };
        }();
        function _typeof$2(t1) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function(e1) {
                return typeof e1;
            } : _typeof$2 = function(e1) {
                return e1 && typeof Symbol == "function" && e1.constructor === Symbol && e1 !== Symbol.prototype ? "symbol" : typeof e1;
            }, _typeof$2(t1);
        }
        function seedRandom(t1, e1) {
            var i1 = this, r1 = 256, s1 = 6, a1 = 52, n1 = "random", f1 = e1.pow(r1, s1), o1 = e1.pow(2, a1), d1 = o1 * 2, v1 = r1 - 1;
            function m1(l1, u1, E1) {
                var M1 = [];
                u1 = u1 === !0 ? {
                    entropy: !0
                } : u1 || {};
                var D1 = A1(y1(u1.entropy ? [
                    l1,
                    h1(t1)
                ] : l1 === null ? p1() : l1, 3), M1), k1 = new b1(M1), I1 = function() {
                    for(var R1 = k1.g(s1), V1 = f1, B1 = 0; R1 < o1;)R1 = (R1 + B1) * r1, V1 *= r1, B1 = k1.g(1);
                    for(; R1 >= d1;)R1 /= 2, V1 /= 2, B1 >>>= 1;
                    return (R1 + B1) / V1;
                };
                return I1.int32 = function() {
                    return k1.g(4) | 0;
                }, I1.quick = function() {
                    return k1.g(4) / 4294967296;
                }, I1.double = I1, A1(h1(k1.S), t1), (u1.pass || E1 || function(R1, V1, B1, G1) {
                    return G1 && (G1.S && g1(G1, k1), R1.state = function() {
                        return g1(k1, {});
                    }), B1 ? (e1[n1] = R1, V1) : R1;
                })(I1, D1, "global" in u1 ? u1.global : this == e1, u1.state);
            }
            e1["seed" + n1] = m1;
            function b1(l1) {
                var u1, E1 = l1.length, M1 = this, D1 = 0, k1 = M1.i = M1.j = 0, I1 = M1.S = [];
                for(E1 || (l1 = [
                    E1++
                ]); D1 < r1;)I1[D1] = D1++;
                for(D1 = 0; D1 < r1; D1++)I1[D1] = I1[k1 = v1 & k1 + l1[D1 % E1] + (u1 = I1[D1])], I1[k1] = u1;
                M1.g = function(R1) {
                    for(var V1, B1 = 0, G1 = M1.i, C1 = M1.j, w1 = M1.S; R1--;)V1 = w1[G1 = v1 & G1 + 1], B1 = B1 * r1 + w1[v1 & (w1[G1] = w1[C1 = v1 & C1 + V1]) + (w1[C1] = V1)];
                    return M1.i = G1, M1.j = C1, B1;
                };
            }
            function g1(l1, u1) {
                return u1.i = l1.i, u1.j = l1.j, u1.S = l1.S.slice(), u1;
            }
            function y1(l1, u1) {
                var E1 = [], M1 = _typeof$2(l1), D1;
                if (u1 && M1 == "object") for(D1 in l1)try {
                    E1.push(y1(l1[D1], u1 - 1));
                } catch  {}
                return E1.length ? E1 : M1 == "string" ? l1 : l1 + "\x00";
            }
            function A1(l1, u1) {
                for(var E1 = l1 + "", M1, D1 = 0; D1 < E1.length;)u1[v1 & D1] = v1 & (M1 ^= u1[v1 & D1] * 19) + E1.charCodeAt(D1++);
                return h1(u1);
            }
            function p1() {
                try {
                    var l1 = new Uint8Array(r1);
                    return (i1.crypto || i1.msCrypto).getRandomValues(l1), h1(l1);
                } catch  {
                    var u1 = i1.navigator, E1 = u1 && u1.plugins;
                    return [
                        +new Date,
                        i1,
                        E1,
                        i1.screen,
                        h1(t1)
                    ];
                }
            }
            function h1(l1) {
                return String.fromCharCode.apply(0, l1);
            }
            A1(e1.random(), t1);
        }
        function initialize$2(t1) {
            seedRandom([], t1);
        }
        var propTypes = {
            SHAPE: "shape"
        };
        function _typeof$1(t1) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(e1) {
                return typeof e1;
            } : _typeof$1 = function(e1) {
                return e1 && typeof Symbol == "function" && e1.constructor === Symbol && e1 !== Symbol.prototype ? "symbol" : typeof e1;
            }, _typeof$1(t1);
        }
        var ExpressionManager = function() {
            var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null, _lottieGlobal = {};
            initialize$2(BMMath);
            function resetFrame() {
                _lottieGlobal = {};
            }
            function $bm_isInstanceOfArray(t1) {
                return t1.constructor === Array || t1.constructor === Float32Array;
            }
            function isNumerable(t1, e1) {
                return t1 === "number" || e1 instanceof Number || t1 === "boolean" || t1 === "string";
            }
            function $bm_neg(t1) {
                var e1 = _typeof$1(t1);
                if (e1 === "number" || t1 instanceof Number || e1 === "boolean") return -t1;
                if ($bm_isInstanceOfArray(t1)) {
                    var i1, r1 = t1.length, s1 = [];
                    for(i1 = 0; i1 < r1; i1 += 1)s1[i1] = -t1[i1];
                    return s1;
                }
                return t1.propType ? t1.v : -t1;
            }
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
            function sum(t1, e1) {
                var i1 = _typeof$1(t1), r1 = _typeof$1(e1);
                if (isNumerable(i1, t1) && isNumerable(r1, e1) || i1 === "string" || r1 === "string") return t1 + e1;
                if ($bm_isInstanceOfArray(t1) && isNumerable(r1, e1)) return t1 = t1.slice(0), t1[0] += e1, t1;
                if (isNumerable(i1, t1) && $bm_isInstanceOfArray(e1)) return e1 = e1.slice(0), e1[0] = t1 + e1[0], e1;
                if ($bm_isInstanceOfArray(t1) && $bm_isInstanceOfArray(e1)) {
                    for(var s1 = 0, a1 = t1.length, n1 = e1.length, f1 = []; s1 < a1 || s1 < n1;)(typeof t1[s1] == "number" || t1[s1] instanceof Number) && (typeof e1[s1] == "number" || e1[s1] instanceof Number) ? f1[s1] = t1[s1] + e1[s1] : f1[s1] = e1[s1] === void 0 ? t1[s1] : t1[s1] || e1[s1], s1 += 1;
                    return f1;
                }
                return 0;
            }
            var add = sum;
            function sub(t1, e1) {
                var i1 = _typeof$1(t1), r1 = _typeof$1(e1);
                if (isNumerable(i1, t1) && isNumerable(r1, e1)) return i1 === "string" && (t1 = parseInt(t1, 10)), r1 === "string" && (e1 = parseInt(e1, 10)), t1 - e1;
                if ($bm_isInstanceOfArray(t1) && isNumerable(r1, e1)) return t1 = t1.slice(0), t1[0] -= e1, t1;
                if (isNumerable(i1, t1) && $bm_isInstanceOfArray(e1)) return e1 = e1.slice(0), e1[0] = t1 - e1[0], e1;
                if ($bm_isInstanceOfArray(t1) && $bm_isInstanceOfArray(e1)) {
                    for(var s1 = 0, a1 = t1.length, n1 = e1.length, f1 = []; s1 < a1 || s1 < n1;)(typeof t1[s1] == "number" || t1[s1] instanceof Number) && (typeof e1[s1] == "number" || e1[s1] instanceof Number) ? f1[s1] = t1[s1] - e1[s1] : f1[s1] = e1[s1] === void 0 ? t1[s1] : t1[s1] || e1[s1], s1 += 1;
                    return f1;
                }
                return 0;
            }
            function mul(t1, e1) {
                var i1 = _typeof$1(t1), r1 = _typeof$1(e1), s1;
                if (isNumerable(i1, t1) && isNumerable(r1, e1)) return t1 * e1;
                var a1, n1;
                if ($bm_isInstanceOfArray(t1) && isNumerable(r1, e1)) {
                    for(n1 = t1.length, s1 = createTypedArray("float32", n1), a1 = 0; a1 < n1; a1 += 1)s1[a1] = t1[a1] * e1;
                    return s1;
                }
                if (isNumerable(i1, t1) && $bm_isInstanceOfArray(e1)) {
                    for(n1 = e1.length, s1 = createTypedArray("float32", n1), a1 = 0; a1 < n1; a1 += 1)s1[a1] = t1 * e1[a1];
                    return s1;
                }
                return 0;
            }
            function div(t1, e1) {
                var i1 = _typeof$1(t1), r1 = _typeof$1(e1), s1;
                if (isNumerable(i1, t1) && isNumerable(r1, e1)) return t1 / e1;
                var a1, n1;
                if ($bm_isInstanceOfArray(t1) && isNumerable(r1, e1)) {
                    for(n1 = t1.length, s1 = createTypedArray("float32", n1), a1 = 0; a1 < n1; a1 += 1)s1[a1] = t1[a1] / e1;
                    return s1;
                }
                if (isNumerable(i1, t1) && $bm_isInstanceOfArray(e1)) {
                    for(n1 = e1.length, s1 = createTypedArray("float32", n1), a1 = 0; a1 < n1; a1 += 1)s1[a1] = t1 / e1[a1];
                    return s1;
                }
                return 0;
            }
            function mod(t1, e1) {
                return typeof t1 == "string" && (t1 = parseInt(t1, 10)), typeof e1 == "string" && (e1 = parseInt(e1, 10)), t1 % e1;
            }
            var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
            function clamp(t1, e1, i1) {
                if (e1 > i1) {
                    var r1 = i1;
                    i1 = e1, e1 = r1;
                }
                return Math.min(Math.max(t1, e1), i1);
            }
            function radiansToDegrees(t1) {
                return t1 / degToRads;
            }
            var radians_to_degrees = radiansToDegrees;
            function degreesToRadians(t1) {
                return t1 * degToRads;
            }
            var degrees_to_radians = radiansToDegrees, helperLengthArray = [
                0,
                0,
                0,
                0,
                0,
                0
            ];
            function length(t1, e1) {
                if (typeof t1 == "number" || t1 instanceof Number) return e1 = e1 || 0, Math.abs(t1 - e1);
                e1 || (e1 = helperLengthArray);
                var i1, r1 = Math.min(t1.length, e1.length), s1 = 0;
                for(i1 = 0; i1 < r1; i1 += 1)s1 += Math.pow(e1[i1] - t1[i1], 2);
                return Math.sqrt(s1);
            }
            function normalize(t1) {
                return div(t1, length(t1));
            }
            function rgbToHsl(t1) {
                var e1 = t1[0], i1 = t1[1], r1 = t1[2], s1 = Math.max(e1, i1, r1), a1 = Math.min(e1, i1, r1), n1, f1, o1 = (s1 + a1) / 2;
                if (s1 === a1) n1 = 0, f1 = 0;
                else {
                    var d1 = s1 - a1;
                    switch(f1 = o1 > .5 ? d1 / (2 - s1 - a1) : d1 / (s1 + a1), s1){
                        case e1:
                            n1 = (i1 - r1) / d1 + (i1 < r1 ? 6 : 0);
                            break;
                        case i1:
                            n1 = (r1 - e1) / d1 + 2;
                            break;
                        case r1:
                            n1 = (e1 - i1) / d1 + 4;
                            break;
                    }
                    n1 /= 6;
                }
                return [
                    n1,
                    f1,
                    o1,
                    t1[3]
                ];
            }
            function hue2rgb(t1, e1, i1) {
                return i1 < 0 && (i1 += 1), i1 > 1 && (i1 -= 1), i1 < 1 / 6 ? t1 + (e1 - t1) * 6 * i1 : i1 < 0.5 ? e1 : i1 < 2 / 3 ? t1 + (e1 - t1) * (2 / 3 - i1) * 6 : t1;
            }
            function hslToRgb(t1) {
                var e1 = t1[0], i1 = t1[1], r1 = t1[2], s1, a1, n1;
                if (i1 === 0) s1 = r1, n1 = r1, a1 = r1;
                else {
                    var f1 = r1 < .5 ? r1 * (1 + i1) : r1 + i1 - r1 * i1, o1 = 2 * r1 - f1;
                    s1 = hue2rgb(o1, f1, e1 + 1 / 3), a1 = hue2rgb(o1, f1, e1), n1 = hue2rgb(o1, f1, e1 - 1 / 3);
                }
                return [
                    s1,
                    a1,
                    n1,
                    t1[3]
                ];
            }
            function linear(t1, e1, i1, r1, s1) {
                if ((r1 === void 0 || s1 === void 0) && (r1 = e1, s1 = i1, e1 = 0, i1 = 1), i1 < e1) {
                    var a1 = i1;
                    i1 = e1, e1 = a1;
                }
                if (t1 <= e1) return r1;
                if (t1 >= i1) return s1;
                var n1 = i1 === e1 ? 0 : (t1 - e1) / (i1 - e1);
                if (!r1.length) return r1 + (s1 - r1) * n1;
                var f1, o1 = r1.length, d1 = createTypedArray("float32", o1);
                for(f1 = 0; f1 < o1; f1 += 1)d1[f1] = r1[f1] + (s1[f1] - r1[f1]) * n1;
                return d1;
            }
            function random(t1, e1) {
                if (e1 === void 0 && (t1 === void 0 ? (t1 = 0, e1 = 1) : (e1 = t1, t1 = void 0)), e1.length) {
                    var i1, r1 = e1.length;
                    t1 || (t1 = createTypedArray("float32", r1));
                    var s1 = createTypedArray("float32", r1), a1 = BMMath.random();
                    for(i1 = 0; i1 < r1; i1 += 1)s1[i1] = t1[i1] + a1 * (e1[i1] - t1[i1]);
                    return s1;
                }
                t1 === void 0 && (t1 = 0);
                var n1 = BMMath.random();
                return t1 + n1 * (e1 - t1);
            }
            function createPath(t1, e1, i1, r1) {
                var s1, a1 = t1.length, n1 = shapePool.newElement();
                n1.setPathData(!!r1, a1);
                var f1 = [
                    0,
                    0
                ], o1, d1;
                for(s1 = 0; s1 < a1; s1 += 1)o1 = e1 && e1[s1] ? e1[s1] : f1, d1 = i1 && i1[s1] ? i1[s1] : f1, n1.setTripleAt(t1[s1][0], t1[s1][1], d1[0] + t1[s1][0], d1[1] + t1[s1][1], o1[0] + t1[s1][0], o1[1] + t1[s1][1], s1, !0);
                return n1;
            }
            function initiateExpression(elem, data, property) {
                function noOp(t1) {
                    return t1;
                }
                if (!elem.globalData.renderConfig.runExpressions) return noOp;
                var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
                thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                    get: function() {
                        return thisProperty.v;
                    }
                }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0, wiggle = (function t1(e1, i1) {
                    var r1, s1, a1 = this.pv.length ? this.pv.length : 1, n1 = createTypedArray("float32", a1);
                    e1 = 5;
                    var f1 = Math.floor(time * e1);
                    for(r1 = 0, s1 = 0; r1 < f1;){
                        for(s1 = 0; s1 < a1; s1 += 1)n1[s1] += -i1 + i1 * 2 * BMMath.random();
                        r1 += 1;
                    }
                    var o1 = time * e1, d1 = o1 - Math.floor(o1), v1 = createTypedArray("float32", a1);
                    if (a1 > 1) {
                        for(s1 = 0; s1 < a1; s1 += 1)v1[s1] = this.pv[s1] + n1[s1] + (-i1 + i1 * 2 * BMMath.random()) * d1;
                        return v1;
                    }
                    return this.pv + n1[0] + (-i1 + i1 * 2 * BMMath.random()) * d1;
                }).bind(this);
                thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));
                function loopInDuration(t1, e1) {
                    return loopIn(t1, e1, !0);
                }
                function loopOutDuration(t1, e1) {
                    return loopOut(t1, e1, !0);
                }
                this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
                function lookAt(t1, e1) {
                    var i1 = [
                        e1[0] - t1[0],
                        e1[1] - t1[1],
                        e1[2] - t1[2]
                    ], r1 = Math.atan2(i1[0], Math.sqrt(i1[1] * i1[1] + i1[2] * i1[2])) / degToRads, s1 = -Math.atan2(i1[1], i1[2]) / degToRads;
                    return [
                        s1,
                        r1,
                        0
                    ];
                }
                function easeOut(t1, e1, i1, r1, s1) {
                    return applyEase(easeOutBez, t1, e1, i1, r1, s1);
                }
                function easeIn(t1, e1, i1, r1, s1) {
                    return applyEase(easeInBez, t1, e1, i1, r1, s1);
                }
                function ease(t1, e1, i1, r1, s1) {
                    return applyEase(easeInOutBez, t1, e1, i1, r1, s1);
                }
                function applyEase(t1, e1, i1, r1, s1, a1) {
                    s1 === void 0 ? (s1 = i1, a1 = r1) : e1 = (e1 - i1) / (r1 - i1), e1 > 1 ? e1 = 1 : e1 < 0 && (e1 = 0);
                    var n1 = t1(e1);
                    if ($bm_isInstanceOfArray(s1)) {
                        var f1, o1 = s1.length, d1 = createTypedArray("float32", o1);
                        for(f1 = 0; f1 < o1; f1 += 1)d1[f1] = (a1[f1] - s1[f1]) * n1 + s1[f1];
                        return d1;
                    }
                    return (a1 - s1) * n1 + s1;
                }
                function nearestKey(t1) {
                    var e1, i1 = data.k.length, r1, s1;
                    if (!data.k.length || typeof data.k[0] == "number") r1 = 0, s1 = 0;
                    else if (r1 = -1, t1 *= elem.comp.globalData.frameRate, t1 < data.k[0].t) r1 = 1, s1 = data.k[0].t;
                    else {
                        for(e1 = 0; e1 < i1 - 1; e1 += 1)if (t1 === data.k[e1].t) {
                            r1 = e1 + 1, s1 = data.k[e1].t;
                            break;
                        } else if (t1 > data.k[e1].t && t1 < data.k[e1 + 1].t) {
                            t1 - data.k[e1].t > data.k[e1 + 1].t - t1 ? (r1 = e1 + 2, s1 = data.k[e1 + 1].t) : (r1 = e1 + 1, s1 = data.k[e1].t);
                            break;
                        }
                        r1 === -1 && (r1 = e1 + 1, s1 = data.k[e1].t);
                    }
                    var a1 = {};
                    return a1.index = r1, a1.time = s1 / elem.comp.globalData.frameRate, a1;
                }
                function key(t1) {
                    var e1, i1, r1;
                    if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + t1);
                    t1 -= 1, e1 = {
                        time: data.k[t1].t / elem.comp.globalData.frameRate,
                        value: []
                    };
                    var s1 = Object.prototype.hasOwnProperty.call(data.k[t1], "s") ? data.k[t1].s : data.k[t1 - 1].e;
                    for(r1 = s1.length, i1 = 0; i1 < r1; i1 += 1)e1[i1] = s1[i1], e1.value[i1] = s1[i1];
                    return e1;
                }
                function framesToTime(t1, e1) {
                    return e1 || (e1 = elem.comp.globalData.frameRate), t1 / e1;
                }
                function timeToFrames(t1, e1) {
                    return !t1 && t1 !== 0 && (t1 = time), e1 || (e1 = elem.comp.globalData.frameRate), t1 * e1;
                }
                function seedRandom(t1) {
                    BMMath.seedrandom(randSeed + t1);
                }
                function sourceRectAtTime() {
                    return elem.sourceRectAtTime();
                }
                function substring(t1, e1) {
                    return typeof value == "string" ? e1 === void 0 ? value.substring(t1) : value.substring(t1, e1) : "";
                }
                function substr(t1, e1) {
                    return typeof value == "string" ? e1 === void 0 ? value.substr(t1) : value.substr(t1, e1) : "";
                }
                function posterizeTime(t1) {
                    time = t1 === 0 ? 0 : Math.floor(time * t1) / t1, value = valueAtTime(time);
                }
                var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind, hasParent = !!(elem.hierarchy && elem.hierarchy.length), parent, randSeed = Math.floor(Math.random() * 1e6), globalData = elem.globalData;
                function executeExpression(t1) {
                    return value = t1, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt);
                }
                return executeExpression.__preventDeadCodeRemoval = [
                    $bm_transform,
                    anchorPoint,
                    time,
                    velocity,
                    inPoint,
                    outPoint,
                    width,
                    height,
                    name,
                    loop_in,
                    loop_out,
                    smooth,
                    toComp,
                    fromCompToSurface,
                    toWorld,
                    fromWorld,
                    mask,
                    position,
                    rotation,
                    scale,
                    thisComp,
                    numKeys,
                    active,
                    wiggle,
                    loopInDuration,
                    loopOutDuration,
                    comp,
                    lookAt,
                    easeOut,
                    easeIn,
                    ease,
                    nearestKey,
                    key,
                    text,
                    textIndex,
                    textTotal,
                    selectorValue,
                    framesToTime,
                    timeToFrames,
                    sourceRectAtTime,
                    substring,
                    substr,
                    posterizeTime,
                    index,
                    globalData
                ], executeExpression;
            }
            return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [
                window,
                document,
                XMLHttpRequest,
                fetch,
                frames,
                $bm_neg,
                add,
                $bm_sum,
                $bm_sub,
                $bm_mul,
                $bm_div,
                $bm_mod,
                clamp,
                radians_to_degrees,
                degreesToRadians,
                degrees_to_radians,
                normalize,
                rgbToHsl,
                hslToRgb,
                linear,
                random,
                createPath,
                _lottieGlobal
            ], ob.resetFrame = resetFrame, ob;
        }(), Expressions = function() {
            var t1 = {};
            t1.initExpressions = e1, t1.resetFrame = ExpressionManager.resetFrame;
            function e1(i1) {
                var r1 = 0, s1 = [];
                function a1() {
                    r1 += 1;
                }
                function n1() {
                    r1 -= 1, r1 === 0 && o1();
                }
                function f1(d1) {
                    s1.indexOf(d1) === -1 && s1.push(d1);
                }
                function o1() {
                    var d1, v1 = s1.length;
                    for(d1 = 0; d1 < v1; d1 += 1)s1[d1].release();
                    s1.length = 0;
                }
                i1.renderer.compInterface = CompExpressionInterface(i1.renderer), i1.renderer.globalData.projectInterface.registerComposition(i1.renderer), i1.renderer.globalData.pushExpression = a1, i1.renderer.globalData.popExpression = n1, i1.renderer.globalData.registerExpressionProperty = f1;
            }
            return t1;
        }(), MaskManagerInterface = function() {
            function t1(i1, r1) {
                this._mask = i1, this._data = r1;
            }
            Object.defineProperty(t1.prototype, "maskPath", {
                get: function() {
                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
                }
            }), Object.defineProperty(t1.prototype, "maskOpacity", {
                get: function() {
                    return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100;
                }
            });
            var e1 = function(i1) {
                var r1 = createSizedArray(i1.viewData.length), s1, a1 = i1.viewData.length;
                for(s1 = 0; s1 < a1; s1 += 1)r1[s1] = new t1(i1.viewData[s1], i1.masksProperties[s1]);
                var n1 = function(f1) {
                    for(s1 = 0; s1 < a1;){
                        if (i1.masksProperties[s1].nm === f1) return r1[s1];
                        s1 += 1;
                    }
                    return null;
                };
                return n1;
            };
            return e1;
        }(), ExpressionPropertyInterface = function() {
            var t1 = {
                pv: 0,
                v: 0,
                mult: 1
            }, e1 = {
                pv: [
                    0,
                    0,
                    0
                ],
                v: [
                    0,
                    0,
                    0
                ],
                mult: 1
            };
            function i1(n1, f1, o1) {
                Object.defineProperty(n1, "velocity", {
                    get: function() {
                        return f1.getVelocityAtTime(f1.comp.currentFrame);
                    }
                }), n1.numKeys = f1.keyframes ? f1.keyframes.length : 0, n1.key = function(d1) {
                    if (!n1.numKeys) return 0;
                    var v1 = "";
                    "s" in f1.keyframes[d1 - 1] ? v1 = f1.keyframes[d1 - 1].s : "e" in f1.keyframes[d1 - 2] ? v1 = f1.keyframes[d1 - 2].e : v1 = f1.keyframes[d1 - 2].s;
                    var P1 = o1 === "unidimensional" ? new Number(v1) : Object.assign({}, v1);
                    return P1.time = f1.keyframes[d1 - 1].t / f1.elem.comp.globalData.frameRate, P1.value = o1 === "unidimensional" ? v1[0] : v1, P1;
                }, n1.valueAtTime = f1.getValueAtTime, n1.speedAtTime = f1.getSpeedAtTime, n1.velocityAtTime = f1.getVelocityAtTime, n1.propertyGroup = f1.propertyGroup;
            }
            function r1(n1) {
                (!n1 || !("pv" in n1)) && (n1 = t1);
                var f1 = 1 / n1.mult, o1 = n1.pv * f1, d1 = new Number(o1);
                return d1.value = o1, i1(d1, n1, "unidimensional"), function() {
                    return n1.k && n1.getValue(), o1 = n1.v * f1, d1.value !== o1 && (d1 = new Number(o1), d1.value = o1, i1(d1, n1, "unidimensional")), d1;
                };
            }
            function s1(n1) {
                (!n1 || !("pv" in n1)) && (n1 = e1);
                var f1 = 1 / n1.mult, o1 = n1.data && n1.data.l || n1.pv.length, d1 = createTypedArray("float32", o1), v1 = createTypedArray("float32", o1);
                return d1.value = v1, i1(d1, n1, "multidimensional"), function() {
                    n1.k && n1.getValue();
                    for(var P1 = 0; P1 < o1; P1 += 1)v1[P1] = n1.v[P1] * f1, d1[P1] = v1[P1];
                    return d1;
                };
            }
            function a1() {
                return t1;
            }
            return function(n1) {
                return n1 ? n1.propType === "unidimensional" ? r1(n1) : s1(n1) : a1;
            };
        }(), TransformExpressionInterface = function() {
            return function(t1) {
                function e1(n1) {
                    switch(n1){
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return e1.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return e1.rotation;
                        case "ADBE Rotate X":
                            return e1.xRotation;
                        case "ADBE Rotate Y":
                            return e1.yRotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return e1.position;
                        case "ADBE Position_0":
                            return e1.xPosition;
                        case "ADBE Position_1":
                            return e1.yPosition;
                        case "ADBE Position_2":
                            return e1.zPosition;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return e1.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return e1.opacity;
                        default:
                            return null;
                    }
                }
                Object.defineProperty(e1, "rotation", {
                    get: ExpressionPropertyInterface(t1.r || t1.rz)
                }), Object.defineProperty(e1, "zRotation", {
                    get: ExpressionPropertyInterface(t1.rz || t1.r)
                }), Object.defineProperty(e1, "xRotation", {
                    get: ExpressionPropertyInterface(t1.rx)
                }), Object.defineProperty(e1, "yRotation", {
                    get: ExpressionPropertyInterface(t1.ry)
                }), Object.defineProperty(e1, "scale", {
                    get: ExpressionPropertyInterface(t1.s)
                });
                var i1, r1, s1, a1;
                return t1.p ? a1 = ExpressionPropertyInterface(t1.p) : (i1 = ExpressionPropertyInterface(t1.px), r1 = ExpressionPropertyInterface(t1.py), t1.pz && (s1 = ExpressionPropertyInterface(t1.pz))), Object.defineProperty(e1, "position", {
                    get: function() {
                        return t1.p ? a1() : [
                            i1(),
                            r1(),
                            s1 ? s1() : 0
                        ];
                    }
                }), Object.defineProperty(e1, "xPosition", {
                    get: ExpressionPropertyInterface(t1.px)
                }), Object.defineProperty(e1, "yPosition", {
                    get: ExpressionPropertyInterface(t1.py)
                }), Object.defineProperty(e1, "zPosition", {
                    get: ExpressionPropertyInterface(t1.pz)
                }), Object.defineProperty(e1, "anchorPoint", {
                    get: ExpressionPropertyInterface(t1.a)
                }), Object.defineProperty(e1, "opacity", {
                    get: ExpressionPropertyInterface(t1.o)
                }), Object.defineProperty(e1, "skew", {
                    get: ExpressionPropertyInterface(t1.sk)
                }), Object.defineProperty(e1, "skewAxis", {
                    get: ExpressionPropertyInterface(t1.sa)
                }), Object.defineProperty(e1, "orientation", {
                    get: ExpressionPropertyInterface(t1.or)
                }), e1;
            };
        }(), LayerExpressionInterface = function() {
            function t1(d1) {
                var v1 = new Matrix;
                if (d1 !== void 0) {
                    var P1 = this._elem.finalTransform.mProp.getValueAtTime(d1);
                    P1.clone(v1);
                } else {
                    var m1 = this._elem.finalTransform.mProp;
                    m1.applyToMatrix(v1);
                }
                return v1;
            }
            function e1(d1, v1) {
                var P1 = this.getMatrix(v1);
                return P1.props[12] = 0, P1.props[13] = 0, P1.props[14] = 0, this.applyPoint(P1, d1);
            }
            function i1(d1, v1) {
                var P1 = this.getMatrix(v1);
                return this.applyPoint(P1, d1);
            }
            function r1(d1, v1) {
                var P1 = this.getMatrix(v1);
                return P1.props[12] = 0, P1.props[13] = 0, P1.props[14] = 0, this.invertPoint(P1, d1);
            }
            function s1(d1, v1) {
                var P1 = this.getMatrix(v1);
                return this.invertPoint(P1, d1);
            }
            function a1(d1, v1) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var P1, m1 = this._elem.hierarchy.length;
                    for(P1 = 0; P1 < m1; P1 += 1)this._elem.hierarchy[P1].finalTransform.mProp.applyToMatrix(d1);
                }
                return d1.applyToPointArray(v1[0], v1[1], v1[2] || 0);
            }
            function n1(d1, v1) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var P1, m1 = this._elem.hierarchy.length;
                    for(P1 = 0; P1 < m1; P1 += 1)this._elem.hierarchy[P1].finalTransform.mProp.applyToMatrix(d1);
                }
                return d1.inversePoint(v1);
            }
            function f1(d1) {
                var v1 = new Matrix;
                if (v1.reset(), this._elem.finalTransform.mProp.applyToMatrix(v1), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var P1, m1 = this._elem.hierarchy.length;
                    for(P1 = 0; P1 < m1; P1 += 1)this._elem.hierarchy[P1].finalTransform.mProp.applyToMatrix(v1);
                    return v1.inversePoint(d1);
                }
                return v1.inversePoint(d1);
            }
            function o1() {
                return [
                    1,
                    1,
                    1,
                    1
                ];
            }
            return function(d1) {
                var v1;
                function P1(y1) {
                    b1.mask = new MaskManagerInterface(y1, d1);
                }
                function m1(y1) {
                    b1.effect = y1;
                }
                function b1(y1) {
                    switch(y1){
                        case "ADBE Root Vectors Group":
                        case "Contents":
                        case 2:
                            return b1.shapeInterface;
                        case 1:
                        case 6:
                        case "Transform":
                        case "transform":
                        case "ADBE Transform Group":
                            return v1;
                        case 4:
                        case "ADBE Effect Parade":
                        case "effects":
                        case "Effects":
                            return b1.effect;
                        case "ADBE Text Properties":
                            return b1.textInterface;
                        default:
                            return null;
                    }
                }
                b1.getMatrix = t1, b1.invertPoint = n1, b1.applyPoint = a1, b1.toWorld = i1, b1.toWorldVec = e1, b1.fromWorld = s1, b1.fromWorldVec = r1, b1.toComp = i1, b1.fromComp = f1, b1.sampleImage = o1, b1.sourceRectAtTime = d1.sourceRectAtTime.bind(d1), b1._elem = d1, v1 = TransformExpressionInterface(d1.finalTransform.mProp);
                var g1 = getDescriptor(v1, "anchorPoint");
                return Object.defineProperties(b1, {
                    hasParent: {
                        get: function() {
                            return d1.hierarchy.length;
                        }
                    },
                    parent: {
                        get: function() {
                            return d1.hierarchy[0].layerInterface;
                        }
                    },
                    rotation: getDescriptor(v1, "rotation"),
                    scale: getDescriptor(v1, "scale"),
                    position: getDescriptor(v1, "position"),
                    opacity: getDescriptor(v1, "opacity"),
                    anchorPoint: g1,
                    anchor_point: g1,
                    transform: {
                        get: function() {
                            return v1;
                        }
                    },
                    active: {
                        get: function() {
                            return d1.isInRange;
                        }
                    }
                }), b1.startTime = d1.data.st, b1.index = d1.data.ind, b1.source = d1.data.refId, b1.height = d1.data.ty === 0 ? d1.data.h : 100, b1.width = d1.data.ty === 0 ? d1.data.w : 100, b1.inPoint = d1.data.ip / d1.comp.globalData.frameRate, b1.outPoint = d1.data.op / d1.comp.globalData.frameRate, b1._name = d1.data.nm, b1.registerMaskInterface = P1, b1.registerEffectsInterface = m1, b1;
            };
        }(), propertyGroupFactory = function() {
            return function(t1, e1) {
                return function(i1) {
                    return i1 = i1 === void 0 ? 1 : i1, i1 <= 0 ? t1 : e1(i1 - 1);
                };
            };
        }(), PropertyInterface = function() {
            return function(t1, e1) {
                var i1 = {
                    _name: t1
                };
                function r1(s1) {
                    return s1 = s1 === void 0 ? 1 : s1, s1 <= 0 ? i1 : e1(s1 - 1);
                }
                return r1;
            };
        }(), EffectsExpressionInterface = function() {
            var t1 = {
                createEffectsInterface: e1
            };
            function e1(s1, a1) {
                if (s1.effectsManager) {
                    var n1 = [], f1 = s1.data.ef, o1, d1 = s1.effectsManager.effectElements.length;
                    for(o1 = 0; o1 < d1; o1 += 1)n1.push(i1(f1[o1], s1.effectsManager.effectElements[o1], a1, s1));
                    var v1 = s1.data.ef || [], P1 = function(m1) {
                        for(o1 = 0, d1 = v1.length; o1 < d1;){
                            if (m1 === v1[o1].nm || m1 === v1[o1].mn || m1 === v1[o1].ix) return n1[o1];
                            o1 += 1;
                        }
                        return null;
                    };
                    return Object.defineProperty(P1, "numProperties", {
                        get: function() {
                            return v1.length;
                        }
                    }), P1;
                }
                return null;
            }
            function i1(s1, a1, n1, f1) {
                function o1(b1) {
                    for(var g1 = s1.ef, y1 = 0, A1 = g1.length; y1 < A1;){
                        if (b1 === g1[y1].nm || b1 === g1[y1].mn || b1 === g1[y1].ix) return g1[y1].ty === 5 ? v1[y1] : v1[y1]();
                        y1 += 1;
                    }
                    throw new Error;
                }
                var d1 = propertyGroupFactory(o1, n1), v1 = [], P1, m1 = s1.ef.length;
                for(P1 = 0; P1 < m1; P1 += 1)s1.ef[P1].ty === 5 ? v1.push(i1(s1.ef[P1], a1.effectElements[P1], a1.effectElements[P1].propertyGroup, f1)) : v1.push(r1(a1.effectElements[P1], s1.ef[P1].ty, f1, d1));
                return s1.mn === "ADBE Color Control" && Object.defineProperty(o1, "color", {
                    get: function() {
                        return v1[0]();
                    }
                }), Object.defineProperties(o1, {
                    numProperties: {
                        get: function() {
                            return s1.np;
                        }
                    },
                    _name: {
                        value: s1.nm
                    },
                    propertyGroup: {
                        value: d1
                    }
                }), o1.enabled = s1.en !== 0, o1.active = o1.enabled, o1;
            }
            function r1(s1, a1, n1, f1) {
                var o1 = ExpressionPropertyInterface(s1.p);
                function d1() {
                    return a1 === 10 ? n1.comp.compInterface(s1.p.v) : o1();
                }
                return s1.p.setGroupProperty && s1.p.setGroupProperty(PropertyInterface("", f1)), d1;
            }
            return t1;
        }(), ShapePathInterface = function() {
            return function(t1, e1, i1) {
                var r1 = e1.sh;
                function s1(n1) {
                    return n1 === "Shape" || n1 === "shape" || n1 === "Path" || n1 === "path" || n1 === "ADBE Vector Shape" || n1 === 2 ? s1.path : null;
                }
                var a1 = propertyGroupFactory(s1, i1);
                return r1.setGroupProperty(PropertyInterface("Path", a1)), Object.defineProperties(s1, {
                    path: {
                        get: function() {
                            return r1.k && r1.getValue(), r1;
                        }
                    },
                    shape: {
                        get: function() {
                            return r1.k && r1.getValue(), r1;
                        }
                    },
                    _name: {
                        value: t1.nm
                    },
                    ix: {
                        value: t1.ix
                    },
                    propertyIndex: {
                        value: t1.ix
                    },
                    mn: {
                        value: t1.mn
                    },
                    propertyGroup: {
                        value: i1
                    }
                }), s1;
            };
        }(), ShapeExpressionInterface = function() {
            function t1(g1, y1, A1) {
                var p1 = [], h1, l1 = g1 ? g1.length : 0;
                for(h1 = 0; h1 < l1; h1 += 1)g1[h1].ty === "gr" ? p1.push(i1(g1[h1], y1[h1], A1)) : g1[h1].ty === "fl" ? p1.push(r1(g1[h1], y1[h1], A1)) : g1[h1].ty === "st" ? p1.push(n1(g1[h1], y1[h1], A1)) : g1[h1].ty === "tm" ? p1.push(f1(g1[h1], y1[h1], A1)) : g1[h1].ty === "tr" || (g1[h1].ty === "el" ? p1.push(d1(g1[h1], y1[h1], A1)) : g1[h1].ty === "sr" ? p1.push(v1(g1[h1], y1[h1], A1)) : g1[h1].ty === "sh" ? p1.push(ShapePathInterface(g1[h1], y1[h1], A1)) : g1[h1].ty === "rc" ? p1.push(P1(g1[h1], y1[h1], A1)) : g1[h1].ty === "rd" ? p1.push(m1(g1[h1], y1[h1], A1)) : g1[h1].ty === "rp" ? p1.push(b1(g1[h1], y1[h1], A1)) : g1[h1].ty === "gf" ? p1.push(s1(g1[h1], y1[h1], A1)) : p1.push(a1(g1[h1], y1[h1])));
                return p1;
            }
            function e1(g1, y1, A1) {
                var p1, h1 = function(u1) {
                    for(var E1 = 0, M1 = p1.length; E1 < M1;){
                        if (p1[E1]._name === u1 || p1[E1].mn === u1 || p1[E1].propertyIndex === u1 || p1[E1].ix === u1 || p1[E1].ind === u1) return p1[E1];
                        E1 += 1;
                    }
                    return typeof u1 == "number" ? p1[u1 - 1] : null;
                };
                h1.propertyGroup = propertyGroupFactory(h1, A1), p1 = t1(g1.it, y1.it, h1.propertyGroup), h1.numProperties = p1.length;
                var l1 = o1(g1.it[g1.it.length - 1], y1.it[y1.it.length - 1], h1.propertyGroup);
                return h1.transform = l1, h1.propertyIndex = g1.cix, h1._name = g1.nm, h1;
            }
            function i1(g1, y1, A1) {
                var p1 = function(u1) {
                    switch(u1){
                        case "ADBE Vectors Group":
                        case "Contents":
                        case 2:
                            return p1.content;
                        default:
                            return p1.transform;
                    }
                };
                p1.propertyGroup = propertyGroupFactory(p1, A1);
                var h1 = e1(g1, y1, p1.propertyGroup), l1 = o1(g1.it[g1.it.length - 1], y1.it[y1.it.length - 1], p1.propertyGroup);
                return p1.content = h1, p1.transform = l1, Object.defineProperty(p1, "_name", {
                    get: function() {
                        return g1.nm;
                    }
                }), p1.numProperties = g1.np, p1.propertyIndex = g1.ix, p1.nm = g1.nm, p1.mn = g1.mn, p1;
            }
            function r1(g1, y1, A1) {
                function p1(h1) {
                    return h1 === "Color" || h1 === "color" ? p1.color : h1 === "Opacity" || h1 === "opacity" ? p1.opacity : null;
                }
                return Object.defineProperties(p1, {
                    color: {
                        get: ExpressionPropertyInterface(y1.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(y1.o)
                    },
                    _name: {
                        value: g1.nm
                    },
                    mn: {
                        value: g1.mn
                    }
                }), y1.c.setGroupProperty(PropertyInterface("Color", A1)), y1.o.setGroupProperty(PropertyInterface("Opacity", A1)), p1;
            }
            function s1(g1, y1, A1) {
                function p1(h1) {
                    return h1 === "Start Point" || h1 === "start point" ? p1.startPoint : h1 === "End Point" || h1 === "end point" ? p1.endPoint : h1 === "Opacity" || h1 === "opacity" ? p1.opacity : null;
                }
                return Object.defineProperties(p1, {
                    startPoint: {
                        get: ExpressionPropertyInterface(y1.s)
                    },
                    endPoint: {
                        get: ExpressionPropertyInterface(y1.e)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(y1.o)
                    },
                    type: {
                        get: function() {
                            return "a";
                        }
                    },
                    _name: {
                        value: g1.nm
                    },
                    mn: {
                        value: g1.mn
                    }
                }), y1.s.setGroupProperty(PropertyInterface("Start Point", A1)), y1.e.setGroupProperty(PropertyInterface("End Point", A1)), y1.o.setGroupProperty(PropertyInterface("Opacity", A1)), p1;
            }
            function a1() {
                function g1() {
                    return null;
                }
                return g1;
            }
            function n1(g1, y1, A1) {
                var p1 = propertyGroupFactory(D1, A1), h1 = propertyGroupFactory(M1, p1);
                function l1(k1) {
                    Object.defineProperty(M1, g1.d[k1].nm, {
                        get: ExpressionPropertyInterface(y1.d.dataProps[k1].p)
                    });
                }
                var u1, E1 = g1.d ? g1.d.length : 0, M1 = {};
                for(u1 = 0; u1 < E1; u1 += 1)l1(u1), y1.d.dataProps[u1].p.setGroupProperty(h1);
                function D1(k1) {
                    return k1 === "Color" || k1 === "color" ? D1.color : k1 === "Opacity" || k1 === "opacity" ? D1.opacity : k1 === "Stroke Width" || k1 === "stroke width" ? D1.strokeWidth : null;
                }
                return Object.defineProperties(D1, {
                    color: {
                        get: ExpressionPropertyInterface(y1.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(y1.o)
                    },
                    strokeWidth: {
                        get: ExpressionPropertyInterface(y1.w)
                    },
                    dash: {
                        get: function() {
                            return M1;
                        }
                    },
                    _name: {
                        value: g1.nm
                    },
                    mn: {
                        value: g1.mn
                    }
                }), y1.c.setGroupProperty(PropertyInterface("Color", p1)), y1.o.setGroupProperty(PropertyInterface("Opacity", p1)), y1.w.setGroupProperty(PropertyInterface("Stroke Width", p1)), D1;
            }
            function f1(g1, y1, A1) {
                function p1(l1) {
                    return l1 === g1.e.ix || l1 === "End" || l1 === "end" ? p1.end : l1 === g1.s.ix ? p1.start : l1 === g1.o.ix ? p1.offset : null;
                }
                var h1 = propertyGroupFactory(p1, A1);
                return p1.propertyIndex = g1.ix, y1.s.setGroupProperty(PropertyInterface("Start", h1)), y1.e.setGroupProperty(PropertyInterface("End", h1)), y1.o.setGroupProperty(PropertyInterface("Offset", h1)), p1.propertyIndex = g1.ix, p1.propertyGroup = A1, Object.defineProperties(p1, {
                    start: {
                        get: ExpressionPropertyInterface(y1.s)
                    },
                    end: {
                        get: ExpressionPropertyInterface(y1.e)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(y1.o)
                    },
                    _name: {
                        value: g1.nm
                    }
                }), p1.mn = g1.mn, p1;
            }
            function o1(g1, y1, A1) {
                function p1(l1) {
                    return g1.a.ix === l1 || l1 === "Anchor Point" ? p1.anchorPoint : g1.o.ix === l1 || l1 === "Opacity" ? p1.opacity : g1.p.ix === l1 || l1 === "Position" ? p1.position : g1.r.ix === l1 || l1 === "Rotation" || l1 === "ADBE Vector Rotation" ? p1.rotation : g1.s.ix === l1 || l1 === "Scale" ? p1.scale : g1.sk && g1.sk.ix === l1 || l1 === "Skew" ? p1.skew : g1.sa && g1.sa.ix === l1 || l1 === "Skew Axis" ? p1.skewAxis : null;
                }
                var h1 = propertyGroupFactory(p1, A1);
                return y1.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", h1)), y1.transform.mProps.p.setGroupProperty(PropertyInterface("Position", h1)), y1.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", h1)), y1.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", h1)), y1.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", h1)), y1.transform.mProps.sk && (y1.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", h1)), y1.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", h1))), y1.transform.op.setGroupProperty(PropertyInterface("Opacity", h1)), Object.defineProperties(p1, {
                    opacity: {
                        get: ExpressionPropertyInterface(y1.transform.mProps.o)
                    },
                    position: {
                        get: ExpressionPropertyInterface(y1.transform.mProps.p)
                    },
                    anchorPoint: {
                        get: ExpressionPropertyInterface(y1.transform.mProps.a)
                    },
                    scale: {
                        get: ExpressionPropertyInterface(y1.transform.mProps.s)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(y1.transform.mProps.r)
                    },
                    skew: {
                        get: ExpressionPropertyInterface(y1.transform.mProps.sk)
                    },
                    skewAxis: {
                        get: ExpressionPropertyInterface(y1.transform.mProps.sa)
                    },
                    _name: {
                        value: g1.nm
                    }
                }), p1.ty = "tr", p1.mn = g1.mn, p1.propertyGroup = A1, p1;
            }
            function d1(g1, y1, A1) {
                function p1(u1) {
                    return g1.p.ix === u1 ? p1.position : g1.s.ix === u1 ? p1.size : null;
                }
                var h1 = propertyGroupFactory(p1, A1);
                p1.propertyIndex = g1.ix;
                var l1 = y1.sh.ty === "tm" ? y1.sh.prop : y1.sh;
                return l1.s.setGroupProperty(PropertyInterface("Size", h1)), l1.p.setGroupProperty(PropertyInterface("Position", h1)), Object.defineProperties(p1, {
                    size: {
                        get: ExpressionPropertyInterface(l1.s)
                    },
                    position: {
                        get: ExpressionPropertyInterface(l1.p)
                    },
                    _name: {
                        value: g1.nm
                    }
                }), p1.mn = g1.mn, p1;
            }
            function v1(g1, y1, A1) {
                function p1(u1) {
                    return g1.p.ix === u1 ? p1.position : g1.r.ix === u1 ? p1.rotation : g1.pt.ix === u1 ? p1.points : g1.or.ix === u1 || u1 === "ADBE Vector Star Outer Radius" ? p1.outerRadius : g1.os.ix === u1 ? p1.outerRoundness : g1.ir && (g1.ir.ix === u1 || u1 === "ADBE Vector Star Inner Radius") ? p1.innerRadius : g1.is && g1.is.ix === u1 ? p1.innerRoundness : null;
                }
                var h1 = propertyGroupFactory(p1, A1), l1 = y1.sh.ty === "tm" ? y1.sh.prop : y1.sh;
                return p1.propertyIndex = g1.ix, l1.or.setGroupProperty(PropertyInterface("Outer Radius", h1)), l1.os.setGroupProperty(PropertyInterface("Outer Roundness", h1)), l1.pt.setGroupProperty(PropertyInterface("Points", h1)), l1.p.setGroupProperty(PropertyInterface("Position", h1)), l1.r.setGroupProperty(PropertyInterface("Rotation", h1)), g1.ir && (l1.ir.setGroupProperty(PropertyInterface("Inner Radius", h1)), l1.is.setGroupProperty(PropertyInterface("Inner Roundness", h1))), Object.defineProperties(p1, {
                    position: {
                        get: ExpressionPropertyInterface(l1.p)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(l1.r)
                    },
                    points: {
                        get: ExpressionPropertyInterface(l1.pt)
                    },
                    outerRadius: {
                        get: ExpressionPropertyInterface(l1.or)
                    },
                    outerRoundness: {
                        get: ExpressionPropertyInterface(l1.os)
                    },
                    innerRadius: {
                        get: ExpressionPropertyInterface(l1.ir)
                    },
                    innerRoundness: {
                        get: ExpressionPropertyInterface(l1.is)
                    },
                    _name: {
                        value: g1.nm
                    }
                }), p1.mn = g1.mn, p1;
            }
            function P1(g1, y1, A1) {
                function p1(u1) {
                    return g1.p.ix === u1 ? p1.position : g1.r.ix === u1 ? p1.roundness : g1.s.ix === u1 || u1 === "Size" || u1 === "ADBE Vector Rect Size" ? p1.size : null;
                }
                var h1 = propertyGroupFactory(p1, A1), l1 = y1.sh.ty === "tm" ? y1.sh.prop : y1.sh;
                return p1.propertyIndex = g1.ix, l1.p.setGroupProperty(PropertyInterface("Position", h1)), l1.s.setGroupProperty(PropertyInterface("Size", h1)), l1.r.setGroupProperty(PropertyInterface("Rotation", h1)), Object.defineProperties(p1, {
                    position: {
                        get: ExpressionPropertyInterface(l1.p)
                    },
                    roundness: {
                        get: ExpressionPropertyInterface(l1.r)
                    },
                    size: {
                        get: ExpressionPropertyInterface(l1.s)
                    },
                    _name: {
                        value: g1.nm
                    }
                }), p1.mn = g1.mn, p1;
            }
            function m1(g1, y1, A1) {
                function p1(u1) {
                    return g1.r.ix === u1 || u1 === "Round Corners 1" ? p1.radius : null;
                }
                var h1 = propertyGroupFactory(p1, A1), l1 = y1;
                return p1.propertyIndex = g1.ix, l1.rd.setGroupProperty(PropertyInterface("Radius", h1)), Object.defineProperties(p1, {
                    radius: {
                        get: ExpressionPropertyInterface(l1.rd)
                    },
                    _name: {
                        value: g1.nm
                    }
                }), p1.mn = g1.mn, p1;
            }
            function b1(g1, y1, A1) {
                function p1(u1) {
                    return g1.c.ix === u1 || u1 === "Copies" ? p1.copies : g1.o.ix === u1 || u1 === "Offset" ? p1.offset : null;
                }
                var h1 = propertyGroupFactory(p1, A1), l1 = y1;
                return p1.propertyIndex = g1.ix, l1.c.setGroupProperty(PropertyInterface("Copies", h1)), l1.o.setGroupProperty(PropertyInterface("Offset", h1)), Object.defineProperties(p1, {
                    copies: {
                        get: ExpressionPropertyInterface(l1.c)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(l1.o)
                    },
                    _name: {
                        value: g1.nm
                    }
                }), p1.mn = g1.mn, p1;
            }
            return function(g1, y1, A1) {
                var p1;
                function h1(u1) {
                    if (typeof u1 == "number") return u1 = u1 === void 0 ? 1 : u1, u1 === 0 ? A1 : p1[u1 - 1];
                    for(var E1 = 0, M1 = p1.length; E1 < M1;){
                        if (p1[E1]._name === u1) return p1[E1];
                        E1 += 1;
                    }
                    return null;
                }
                function l1() {
                    return A1;
                }
                return h1.propertyGroup = propertyGroupFactory(h1, l1), p1 = t1(g1, y1, h1.propertyGroup), h1.numProperties = p1.length, h1._name = "Contents", h1;
            };
        }(), TextExpressionInterface = function() {
            return function(t1) {
                var e1;
                function i1(r1) {
                    switch(r1){
                        case "ADBE Text Document":
                            return i1.sourceText;
                        default:
                            return null;
                    }
                }
                return Object.defineProperty(i1, "sourceText", {
                    get: function() {
                        t1.textProperty.getValue();
                        var r1 = t1.textProperty.currentData.t;
                        return (!e1 || r1 !== e1.value) && (e1 = new String(r1), e1.value = r1 || new String(r1), Object.defineProperty(e1, "style", {
                            get: function() {
                                return {
                                    fillColor: t1.textProperty.currentData.fc
                                };
                            }
                        })), e1;
                    }
                }), i1;
            };
        }();
        function _typeof(t1) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(e1) {
                return typeof e1;
            } : _typeof = function(e1) {
                return e1 && typeof Symbol == "function" && e1.constructor === Symbol && e1 !== Symbol.prototype ? "symbol" : typeof e1;
            }, _typeof(t1);
        }
        var FootageInterface = function() {
            var t1 = function(i1) {
                var r1 = "", s1 = i1.getFootageData();
                function a1() {
                    return r1 = "", s1 = i1.getFootageData(), n1;
                }
                function n1(f1) {
                    if (s1[f1]) return r1 = f1, s1 = s1[f1], _typeof(s1) === "object" ? n1 : s1;
                    var o1 = f1.indexOf(r1);
                    if (o1 !== -1) {
                        var d1 = parseInt(f1.substr(o1 + r1.length), 10);
                        return s1 = s1[d1], _typeof(s1) === "object" ? n1 : s1;
                    }
                    return "";
                }
                return a1;
            }, e1 = function(i1) {
                function r1(s1) {
                    return s1 === "Outline" ? r1.outlineInterface() : null;
                }
                return r1._name = "Outline", r1.outlineInterface = t1(i1), r1;
            };
            return function(i1) {
                function r1(s1) {
                    return s1 === "Data" ? r1.dataInterface : null;
                }
                return r1._name = "Data", r1.dataInterface = e1(i1), r1;
            };
        }(), interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
        };
        function getInterface(t1) {
            return interfaces[t1] || null;
        }
        var expressionHelpers = function() {
            function t1(n1, f1, o1) {
                f1.x && (o1.k = !0, o1.x = !0, o1.initiateExpression = ExpressionManager.initiateExpression, o1.effectsSequence.push(o1.initiateExpression(n1, f1, o1).bind(o1)));
            }
            function e1(n1) {
                return n1 *= this.elem.globalData.frameRate, n1 -= this.offsetTime, n1 !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n1 ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n1, this._cachingAtTime), this._cachingAtTime.lastFrame = n1), this._cachingAtTime.value;
            }
            function i1(n1) {
                var f1 = -0.01, o1 = this.getValueAtTime(n1), d1 = this.getValueAtTime(n1 + f1), v1 = 0;
                if (o1.length) {
                    var P1;
                    for(P1 = 0; P1 < o1.length; P1 += 1)v1 += Math.pow(d1[P1] - o1[P1], 2);
                    v1 = Math.sqrt(v1) * 100;
                } else v1 = 0;
                return v1;
            }
            function r1(n1) {
                if (this.vel !== void 0) return this.vel;
                var f1 = -0.001, o1 = this.getValueAtTime(n1), d1 = this.getValueAtTime(n1 + f1), v1;
                if (o1.length) {
                    v1 = createTypedArray("float32", o1.length);
                    var P1;
                    for(P1 = 0; P1 < o1.length; P1 += 1)v1[P1] = (d1[P1] - o1[P1]) / f1;
                } else v1 = (d1 - o1) / f1;
                return v1;
            }
            function s1() {
                return this.pv;
            }
            function a1(n1) {
                this.propertyGroup = n1;
            }
            return {
                searchExpressions: t1,
                getSpeedAtTime: i1,
                getVelocityAtTime: r1,
                getValueAtTime: e1,
                getStaticValueAtTime: s1,
                setGroupProperty: a1
            };
        }();
        function addPropertyDecorator() {
            function t1(m1, b1, g1) {
                if (!this.k || !this.keyframes) return this.pv;
                m1 = m1 ? m1.toLowerCase() : "";
                var y1 = this.comp.renderedFrame, A1 = this.keyframes, p1 = A1[A1.length - 1].t;
                if (y1 <= p1) return this.pv;
                var h1, l1;
                g1 ? (b1 ? h1 = Math.abs(p1 - this.elem.comp.globalData.frameRate * b1) : h1 = Math.max(0, p1 - this.elem.data.ip), l1 = p1 - h1) : ((!b1 || b1 > A1.length - 1) && (b1 = A1.length - 1), l1 = A1[A1.length - 1 - b1].t, h1 = p1 - l1);
                var u1, E1, M1;
                if (m1 === "pingpong") {
                    var D1 = Math.floor((y1 - l1) / h1);
                    if (D1 % 2 !== 0) return this.getValueAtTime((h1 - (y1 - l1) % h1 + l1) / this.comp.globalData.frameRate, 0);
                } else if (m1 === "offset") {
                    var k1 = this.getValueAtTime(l1 / this.comp.globalData.frameRate, 0), I1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), R1 = this.getValueAtTime(((y1 - l1) % h1 + l1) / this.comp.globalData.frameRate, 0), V1 = Math.floor((y1 - l1) / h1);
                    if (this.pv.length) {
                        for(M1 = new Array(k1.length), E1 = M1.length, u1 = 0; u1 < E1; u1 += 1)M1[u1] = (I1[u1] - k1[u1]) * V1 + R1[u1];
                        return M1;
                    }
                    return (I1 - k1) * V1 + R1;
                } else if (m1 === "continue") {
                    var B1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), G1 = this.getValueAtTime((p1 - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for(M1 = new Array(B1.length), E1 = M1.length, u1 = 0; u1 < E1; u1 += 1)M1[u1] = B1[u1] + (B1[u1] - G1[u1]) * ((y1 - p1) / this.comp.globalData.frameRate) / 5e-4;
                        return M1;
                    }
                    return B1 + (B1 - G1) * ((y1 - p1) / .001);
                }
                return this.getValueAtTime(((y1 - l1) % h1 + l1) / this.comp.globalData.frameRate, 0);
            }
            function e1(m1, b1, g1) {
                if (!this.k) return this.pv;
                m1 = m1 ? m1.toLowerCase() : "";
                var y1 = this.comp.renderedFrame, A1 = this.keyframes, p1 = A1[0].t;
                if (y1 >= p1) return this.pv;
                var h1, l1;
                g1 ? (b1 ? h1 = Math.abs(this.elem.comp.globalData.frameRate * b1) : h1 = Math.max(0, this.elem.data.op - p1), l1 = p1 + h1) : ((!b1 || b1 > A1.length - 1) && (b1 = A1.length - 1), l1 = A1[b1].t, h1 = l1 - p1);
                var u1, E1, M1;
                if (m1 === "pingpong") {
                    var D1 = Math.floor((p1 - y1) / h1);
                    if (D1 % 2 === 0) return this.getValueAtTime(((p1 - y1) % h1 + p1) / this.comp.globalData.frameRate, 0);
                } else if (m1 === "offset") {
                    var k1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), I1 = this.getValueAtTime(l1 / this.comp.globalData.frameRate, 0), R1 = this.getValueAtTime((h1 - (p1 - y1) % h1 + p1) / this.comp.globalData.frameRate, 0), V1 = Math.floor((p1 - y1) / h1) + 1;
                    if (this.pv.length) {
                        for(M1 = new Array(k1.length), E1 = M1.length, u1 = 0; u1 < E1; u1 += 1)M1[u1] = R1[u1] - (I1[u1] - k1[u1]) * V1;
                        return M1;
                    }
                    return R1 - (I1 - k1) * V1;
                } else if (m1 === "continue") {
                    var B1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), G1 = this.getValueAtTime((p1 + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for(M1 = new Array(B1.length), E1 = M1.length, u1 = 0; u1 < E1; u1 += 1)M1[u1] = B1[u1] + (B1[u1] - G1[u1]) * (p1 - y1) / .001;
                        return M1;
                    }
                    return B1 + (B1 - G1) * (p1 - y1) / .001;
                }
                return this.getValueAtTime((h1 - ((p1 - y1) % h1 + p1)) / this.comp.globalData.frameRate, 0);
            }
            function i1(m1, b1) {
                if (!this.k) return this.pv;
                if (m1 = (m1 || .4) * .5, b1 = Math.floor(b1 || 5), b1 <= 1) return this.pv;
                var g1 = this.comp.renderedFrame / this.comp.globalData.frameRate, y1 = g1 - m1, A1 = g1 + m1, p1 = b1 > 1 ? (A1 - y1) / (b1 - 1) : 1, h1 = 0, l1 = 0, u1;
                this.pv.length ? u1 = createTypedArray("float32", this.pv.length) : u1 = 0;
                for(var E1; h1 < b1;){
                    if (E1 = this.getValueAtTime(y1 + h1 * p1), this.pv.length) for(l1 = 0; l1 < this.pv.length; l1 += 1)u1[l1] += E1[l1];
                    else u1 += E1;
                    h1 += 1;
                }
                if (this.pv.length) for(l1 = 0; l1 < this.pv.length; l1 += 1)u1[l1] /= b1;
                else u1 /= b1;
                return u1;
            }
            function r1(m1) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {
                    v: new Matrix
                });
                var b1 = this._transformCachingAtTime.v;
                if (b1.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                    var g1 = this.a.getValueAtTime(m1);
                    b1.translate(-g1[0] * this.a.mult, -g1[1] * this.a.mult, g1[2] * this.a.mult);
                }
                if (this.appliedTransformations < 2) {
                    var y1 = this.s.getValueAtTime(m1);
                    b1.scale(y1[0] * this.s.mult, y1[1] * this.s.mult, y1[2] * this.s.mult);
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var A1 = this.sk.getValueAtTime(m1), p1 = this.sa.getValueAtTime(m1);
                    b1.skewFromAxis(-A1 * this.sk.mult, p1 * this.sa.mult);
                }
                if (this.r && this.appliedTransformations < 4) {
                    var h1 = this.r.getValueAtTime(m1);
                    b1.rotate(-h1 * this.r.mult);
                } else if (!this.r && this.appliedTransformations < 4) {
                    var l1 = this.rz.getValueAtTime(m1), u1 = this.ry.getValueAtTime(m1), E1 = this.rx.getValueAtTime(m1), M1 = this.or.getValueAtTime(m1);
                    b1.rotateZ(-l1 * this.rz.mult).rotateY(u1 * this.ry.mult).rotateX(E1 * this.rx.mult).rotateZ(-M1[2] * this.or.mult).rotateY(M1[1] * this.or.mult).rotateX(M1[0] * this.or.mult);
                }
                if (this.data.p && this.data.p.s) {
                    var D1 = this.px.getValueAtTime(m1), k1 = this.py.getValueAtTime(m1);
                    if (this.data.p.z) {
                        var I1 = this.pz.getValueAtTime(m1);
                        b1.translate(D1 * this.px.mult, k1 * this.py.mult, -I1 * this.pz.mult);
                    } else b1.translate(D1 * this.px.mult, k1 * this.py.mult, 0);
                } else {
                    var R1 = this.p.getValueAtTime(m1);
                    b1.translate(R1[0] * this.p.mult, R1[1] * this.p.mult, -R1[2] * this.p.mult);
                }
                return b1;
            }
            function s1() {
                return this.v.clone(new Matrix);
            }
            var a1 = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(m1, b1, g1) {
                var y1 = a1(m1, b1, g1);
                return y1.dynamicProperties.length ? y1.getValueAtTime = r1.bind(y1) : y1.getValueAtTime = s1.bind(y1), y1.setGroupProperty = expressionHelpers.setGroupProperty, y1;
            };
            var n1 = PropertyFactory.getProp;
            PropertyFactory.getProp = function(m1, b1, g1, y1, A1) {
                var p1 = n1(m1, b1, g1, y1, A1);
                p1.kf ? p1.getValueAtTime = expressionHelpers.getValueAtTime.bind(p1) : p1.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(p1), p1.setGroupProperty = expressionHelpers.setGroupProperty, p1.loopOut = t1, p1.loopIn = e1, p1.smooth = i1, p1.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(p1), p1.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(p1), p1.numKeys = b1.a === 1 ? b1.k.length : 0, p1.propertyIndex = b1.ix;
                var h1 = 0;
                return g1 !== 0 && (h1 = createTypedArray("float32", b1.a === 1 ? b1.k[0].s.length : b1.k.length)), p1._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: h1
                }, expressionHelpers.searchExpressions(m1, b1, p1), p1.k && A1.addDynamicProperty(p1), p1;
            };
            function f1(m1) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), m1 *= this.elem.globalData.frameRate, m1 -= this.offsetTime, m1 !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < m1 ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = m1, this.interpolateShape(m1, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
            }
            var o1 = ShapePropertyFactory.getConstructorFunction(), d1 = ShapePropertyFactory.getKeyframedConstructorFunction();
            function v1() {}
            v1.prototype = {
                vertices: function(m1, b1) {
                    this.k && this.getValue();
                    var g1 = this.v;
                    b1 !== void 0 && (g1 = this.getValueAtTime(b1, 0));
                    var y1, A1 = g1._length, p1 = g1[m1], h1 = g1.v, l1 = createSizedArray(A1);
                    for(y1 = 0; y1 < A1; y1 += 1)m1 === "i" || m1 === "o" ? l1[y1] = [
                        p1[y1][0] - h1[y1][0],
                        p1[y1][1] - h1[y1][1]
                    ] : l1[y1] = [
                        p1[y1][0],
                        p1[y1][1]
                    ];
                    return l1;
                },
                points: function(m1) {
                    return this.vertices("v", m1);
                },
                inTangents: function(m1) {
                    return this.vertices("i", m1);
                },
                outTangents: function(m1) {
                    return this.vertices("o", m1);
                },
                isClosed: function() {
                    return this.v.c;
                },
                pointOnPath: function(m1, b1) {
                    var g1 = this.v;
                    b1 !== void 0 && (g1 = this.getValueAtTime(b1, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(g1));
                    for(var y1 = this._segmentsLength, A1 = y1.lengths, p1 = y1.totalLength * m1, h1 = 0, l1 = A1.length, u1 = 0, E1; h1 < l1;){
                        if (u1 + A1[h1].addedLength > p1) {
                            var M1 = h1, D1 = g1.c && h1 === l1 - 1 ? 0 : h1 + 1, k1 = (p1 - u1) / A1[h1].addedLength;
                            E1 = bez.getPointInSegment(g1.v[M1], g1.v[D1], g1.o[M1], g1.i[D1], k1, A1[h1]);
                            break;
                        } else u1 += A1[h1].addedLength;
                        h1 += 1;
                    }
                    return E1 || (E1 = g1.c ? [
                        g1.v[0][0],
                        g1.v[0][1]
                    ] : [
                        g1.v[g1._length - 1][0],
                        g1.v[g1._length - 1][1]
                    ]), E1;
                },
                vectorOnPath: function(m1, b1, g1) {
                    m1 == 1 ? m1 = this.v.c : m1 == 0 && (m1 = .999);
                    var y1 = this.pointOnPath(m1, b1), A1 = this.pointOnPath(m1 + .001, b1), p1 = A1[0] - y1[0], h1 = A1[1] - y1[1], l1 = Math.sqrt(Math.pow(p1, 2) + Math.pow(h1, 2));
                    if (l1 === 0) return [
                        0,
                        0
                    ];
                    var u1 = g1 === "tangent" ? [
                        p1 / l1,
                        h1 / l1
                    ] : [
                        -h1 / l1,
                        p1 / l1
                    ];
                    return u1;
                },
                tangentOnPath: function(m1, b1) {
                    return this.vectorOnPath(m1, b1, "tangent");
                },
                normalOnPath: function(m1, b1) {
                    return this.vectorOnPath(m1, b1, "normal");
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([
                v1
            ], o1), extendPrototype([
                v1
            ], d1), d1.prototype.getValueAtTime = f1, d1.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var P1 = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(m1, b1, g1, y1, A1) {
                var p1 = P1(m1, b1, g1, y1, A1);
                return p1.propertyIndex = b1.ix, p1.lock = !1, g1 === 3 ? expressionHelpers.searchExpressions(m1, b1.pt, p1) : g1 === 4 && expressionHelpers.searchExpressions(m1, b1.ks, p1), p1.k && m1.addDynamicProperty(p1), p1;
            };
        }
        function initialize$1() {
            addPropertyDecorator();
        }
        function addDecorator() {
            function t1() {
                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
            }
            TextProperty.prototype.getExpressionValue = function(e1, i1) {
                var r1 = this.calculateExpression(i1);
                if (e1.t !== r1) {
                    var s1 = {};
                    return this.copyData(s1, e1), s1.t = r1.toString(), s1.__complete = !1, s1;
                }
                return e1;
            }, TextProperty.prototype.searchProperty = function() {
                var e1 = this.searchKeyframes(), i1 = this.searchExpressions();
                return this.kf = e1 || i1, this.kf;
            }, TextProperty.prototype.searchExpressions = t1;
        }
        function initialize() {
            addDecorator();
        }
        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
            createMergeNode: function t1(e1, i1) {
                var r1 = createNS("feMerge");
                r1.setAttribute("result", e1);
                var s1, a1;
                for(a1 = 0; a1 < i1.length; a1 += 1)s1 = createNS("feMergeNode"), s1.setAttribute("in", i1[a1]), r1.appendChild(s1), r1.appendChild(s1);
                return r1;
            }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
        function SVGTintFilter(t1, e1, i1, r1, s1) {
            this.filterManager = e1;
            var a1 = createNS("feColorMatrix");
            a1.setAttribute("type", "matrix"), a1.setAttribute("color-interpolation-filters", "linearRGB"), a1.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a1, a1.setAttribute("result", r1 + "_tint_1"), t1.appendChild(a1), a1 = createNS("feColorMatrix"), a1.setAttribute("type", "matrix"), a1.setAttribute("color-interpolation-filters", "sRGB"), a1.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a1.setAttribute("result", r1 + "_tint_2"), t1.appendChild(a1), this.matrixFilter = a1;
            var n1 = this.createMergeNode(r1, [
                s1,
                r1 + "_tint_1",
                r1 + "_tint_2"
            ]);
            t1.appendChild(n1);
        }
        extendPrototype([
            SVGComposableEffect
        ], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t1) {
            if (t1 || this.filterManager._mdf) {
                var e1 = this.filterManager.effectElements[0].p.v, i1 = this.filterManager.effectElements[1].p.v, r1 = this.filterManager.effectElements[2].p.v / 100;
                this.linearFilter.setAttribute("values", linearFilterValue + " " + r1 + " 0"), this.matrixFilter.setAttribute("values", i1[0] - e1[0] + " 0 0 0 " + e1[0] + " " + (i1[1] - e1[1]) + " 0 0 0 " + e1[1] + " " + (i1[2] - e1[2]) + " 0 0 0 " + e1[2] + " 0 0 0 1 0");
            }
        };
        function SVGFillFilter(t1, e1, i1, r1) {
            this.filterManager = e1;
            var s1 = createNS("feColorMatrix");
            s1.setAttribute("type", "matrix"), s1.setAttribute("color-interpolation-filters", "sRGB"), s1.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s1.setAttribute("result", r1), t1.appendChild(s1), this.matrixFilter = s1;
        }
        SVGFillFilter.prototype.renderFrame = function(t1) {
            if (t1 || this.filterManager._mdf) {
                var e1 = this.filterManager.effectElements[2].p.v, i1 = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e1[0] + " 0 0 0 0 " + e1[1] + " 0 0 0 0 " + e1[2] + " 0 0 0 " + i1 + " 0");
            }
        };
        function SVGStrokeEffect(t1, e1, i1) {
            this.initialized = !1, this.filterManager = e1, this.elem = i1, this.paths = [];
        }
        SVGStrokeEffect.prototype.initialize = function() {
            var t1 = this.elem.layerElement.children || this.elem.layerElement.childNodes, e1, i1, r1, s1;
            for(this.filterManager.effectElements[1].p.v === 1 ? (s1 = this.elem.maskManager.masksProperties.length, r1 = 0) : (r1 = this.filterManager.effectElements[0].p.v - 1, s1 = r1 + 1), i1 = createNS("g"), i1.setAttribute("fill", "none"), i1.setAttribute("stroke-linecap", "round"), i1.setAttribute("stroke-dashoffset", 1), r1; r1 < s1; r1 += 1)e1 = createNS("path"), i1.appendChild(e1), this.paths.push({
                p: e1,
                m: r1
            });
            if (this.filterManager.effectElements[10].p.v === 3) {
                var a1 = createNS("mask"), n1 = createElementID();
                a1.setAttribute("id", n1), a1.setAttribute("mask-type", "alpha"), a1.appendChild(i1), this.elem.globalData.defs.appendChild(a1);
                var f1 = createNS("g");
                for(f1.setAttribute("mask", "url(" + getLocationHref() + "#" + n1 + ")"); t1[0];)f1.appendChild(t1[0]);
                this.elem.layerElement.appendChild(f1), this.masker = a1, i1.setAttribute("stroke", "#fff");
            } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                if (this.filterManager.effectElements[10].p.v === 2) for(t1 = this.elem.layerElement.children || this.elem.layerElement.childNodes; t1.length;)this.elem.layerElement.removeChild(t1[0]);
                this.elem.layerElement.appendChild(i1), this.elem.layerElement.removeAttribute("mask"), i1.setAttribute("stroke", "#fff");
            }
            this.initialized = !0, this.pathMasker = i1;
        }, SVGStrokeEffect.prototype.renderFrame = function(t1) {
            this.initialized || this.initialize();
            var e1, i1 = this.paths.length, r1, s1;
            for(e1 = 0; e1 < i1; e1 += 1)if (this.paths[e1].m !== -1 && (r1 = this.elem.maskManager.viewData[this.paths[e1].m], s1 = this.paths[e1].p, (t1 || this.filterManager._mdf || r1.prop._mdf) && s1.setAttribute("d", r1.lastPath), t1 || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r1.prop._mdf)) {
                var a1;
                if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                    var n1 = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, f1 = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, o1 = s1.getTotalLength();
                    a1 = "0 0 0 " + o1 * n1 + " ";
                    var d1 = o1 * (f1 - n1), v1 = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01, P1 = Math.floor(d1 / v1), m1;
                    for(m1 = 0; m1 < P1; m1 += 1)a1 += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
                    a1 += "0 " + o1 * 10 + " 0 0";
                } else a1 = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
                s1.setAttribute("stroke-dasharray", a1);
            }
            if ((t1 || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t1 || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t1 || this.filterManager.effectElements[3].p._mdf)) {
                var b1 = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(b1[0] * 255) + "," + bmFloor(b1[1] * 255) + "," + bmFloor(b1[2] * 255) + ")");
            }
        };
        function SVGTritoneFilter(t1, e1, i1, r1) {
            this.filterManager = e1;
            var s1 = createNS("feColorMatrix");
            s1.setAttribute("type", "matrix"), s1.setAttribute("color-interpolation-filters", "linearRGB"), s1.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t1.appendChild(s1);
            var a1 = createNS("feComponentTransfer");
            a1.setAttribute("color-interpolation-filters", "sRGB"), a1.setAttribute("result", r1), this.matrixFilter = a1;
            var n1 = createNS("feFuncR");
            n1.setAttribute("type", "table"), a1.appendChild(n1), this.feFuncR = n1;
            var f1 = createNS("feFuncG");
            f1.setAttribute("type", "table"), a1.appendChild(f1), this.feFuncG = f1;
            var o1 = createNS("feFuncB");
            o1.setAttribute("type", "table"), a1.appendChild(o1), this.feFuncB = o1, t1.appendChild(a1);
        }
        SVGTritoneFilter.prototype.renderFrame = function(t1) {
            if (t1 || this.filterManager._mdf) {
                var e1 = this.filterManager.effectElements[0].p.v, i1 = this.filterManager.effectElements[1].p.v, r1 = this.filterManager.effectElements[2].p.v, s1 = r1[0] + " " + i1[0] + " " + e1[0], a1 = r1[1] + " " + i1[1] + " " + e1[1], n1 = r1[2] + " " + i1[2] + " " + e1[2];
                this.feFuncR.setAttribute("tableValues", s1), this.feFuncG.setAttribute("tableValues", a1), this.feFuncB.setAttribute("tableValues", n1);
            }
        };
        function SVGProLevelsFilter(t1, e1, i1, r1) {
            this.filterManager = e1;
            var s1 = this.filterManager.effectElements, a1 = createNS("feComponentTransfer");
            (s1[10].p.k || s1[10].p.v !== 0 || s1[11].p.k || s1[11].p.v !== 1 || s1[12].p.k || s1[12].p.v !== 1 || s1[13].p.k || s1[13].p.v !== 0 || s1[14].p.k || s1[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a1)), (s1[17].p.k || s1[17].p.v !== 0 || s1[18].p.k || s1[18].p.v !== 1 || s1[19].p.k || s1[19].p.v !== 1 || s1[20].p.k || s1[20].p.v !== 0 || s1[21].p.k || s1[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a1)), (s1[24].p.k || s1[24].p.v !== 0 || s1[25].p.k || s1[25].p.v !== 1 || s1[26].p.k || s1[26].p.v !== 1 || s1[27].p.k || s1[27].p.v !== 0 || s1[28].p.k || s1[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a1)), (s1[31].p.k || s1[31].p.v !== 0 || s1[32].p.k || s1[32].p.v !== 1 || s1[33].p.k || s1[33].p.v !== 1 || s1[34].p.k || s1[34].p.v !== 0 || s1[35].p.k || s1[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a1)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a1.setAttribute("color-interpolation-filters", "sRGB"), t1.appendChild(a1)), (s1[3].p.k || s1[3].p.v !== 0 || s1[4].p.k || s1[4].p.v !== 1 || s1[5].p.k || s1[5].p.v !== 1 || s1[6].p.k || s1[6].p.v !== 0 || s1[7].p.k || s1[7].p.v !== 1) && (a1 = createNS("feComponentTransfer"), a1.setAttribute("color-interpolation-filters", "sRGB"), a1.setAttribute("result", r1), t1.appendChild(a1), this.feFuncRComposed = this.createFeFunc("feFuncR", a1), this.feFuncGComposed = this.createFeFunc("feFuncG", a1), this.feFuncBComposed = this.createFeFunc("feFuncB", a1));
        }
        SVGProLevelsFilter.prototype.createFeFunc = function(t1, e1) {
            var i1 = createNS(t1);
            return i1.setAttribute("type", "table"), e1.appendChild(i1), i1;
        }, SVGProLevelsFilter.prototype.getTableValue = function(t1, e1, i1, r1, s1) {
            for(var a1 = 0, n1 = 256, f1, o1 = Math.min(t1, e1), d1 = Math.max(t1, e1), v1 = Array.call(null, {
                length: n1
            }), P1, m1 = 0, b1 = s1 - r1, g1 = e1 - t1; a1 <= 256;)f1 = a1 / 256, f1 <= o1 ? P1 = g1 < 0 ? s1 : r1 : f1 >= d1 ? P1 = g1 < 0 ? r1 : s1 : P1 = r1 + b1 * Math.pow((f1 - t1) / g1, 1 / i1), v1[m1] = P1, m1 += 1, a1 += 256 / (n1 - 1);
            return v1.join(" ");
        }, SVGProLevelsFilter.prototype.renderFrame = function(t1) {
            if (t1 || this.filterManager._mdf) {
                var e1, i1 = this.filterManager.effectElements;
                this.feFuncRComposed && (t1 || i1[3].p._mdf || i1[4].p._mdf || i1[5].p._mdf || i1[6].p._mdf || i1[7].p._mdf) && (e1 = this.getTableValue(i1[3].p.v, i1[4].p.v, i1[5].p.v, i1[6].p.v, i1[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e1), this.feFuncGComposed.setAttribute("tableValues", e1), this.feFuncBComposed.setAttribute("tableValues", e1)), this.feFuncR && (t1 || i1[10].p._mdf || i1[11].p._mdf || i1[12].p._mdf || i1[13].p._mdf || i1[14].p._mdf) && (e1 = this.getTableValue(i1[10].p.v, i1[11].p.v, i1[12].p.v, i1[13].p.v, i1[14].p.v), this.feFuncR.setAttribute("tableValues", e1)), this.feFuncG && (t1 || i1[17].p._mdf || i1[18].p._mdf || i1[19].p._mdf || i1[20].p._mdf || i1[21].p._mdf) && (e1 = this.getTableValue(i1[17].p.v, i1[18].p.v, i1[19].p.v, i1[20].p.v, i1[21].p.v), this.feFuncG.setAttribute("tableValues", e1)), this.feFuncB && (t1 || i1[24].p._mdf || i1[25].p._mdf || i1[26].p._mdf || i1[27].p._mdf || i1[28].p._mdf) && (e1 = this.getTableValue(i1[24].p.v, i1[25].p.v, i1[26].p.v, i1[27].p.v, i1[28].p.v), this.feFuncB.setAttribute("tableValues", e1)), this.feFuncA && (t1 || i1[31].p._mdf || i1[32].p._mdf || i1[33].p._mdf || i1[34].p._mdf || i1[35].p._mdf) && (e1 = this.getTableValue(i1[31].p.v, i1[32].p.v, i1[33].p.v, i1[34].p.v, i1[35].p.v), this.feFuncA.setAttribute("tableValues", e1));
            }
        };
        function SVGDropShadowEffect(t1, e1, i1, r1, s1) {
            var a1 = e1.container.globalData.renderConfig.filterSize, n1 = e1.data.fs || a1;
            t1.setAttribute("x", n1.x || a1.x), t1.setAttribute("y", n1.y || a1.y), t1.setAttribute("width", n1.width || a1.width), t1.setAttribute("height", n1.height || a1.height), this.filterManager = e1;
            var f1 = createNS("feGaussianBlur");
            f1.setAttribute("in", "SourceAlpha"), f1.setAttribute("result", r1 + "_drop_shadow_1"), f1.setAttribute("stdDeviation", "0"), this.feGaussianBlur = f1, t1.appendChild(f1);
            var o1 = createNS("feOffset");
            o1.setAttribute("dx", "25"), o1.setAttribute("dy", "0"), o1.setAttribute("in", r1 + "_drop_shadow_1"), o1.setAttribute("result", r1 + "_drop_shadow_2"), this.feOffset = o1, t1.appendChild(o1);
            var d1 = createNS("feFlood");
            d1.setAttribute("flood-color", "#00ff00"), d1.setAttribute("flood-opacity", "1"), d1.setAttribute("result", r1 + "_drop_shadow_3"), this.feFlood = d1, t1.appendChild(d1);
            var v1 = createNS("feComposite");
            v1.setAttribute("in", r1 + "_drop_shadow_3"), v1.setAttribute("in2", r1 + "_drop_shadow_2"), v1.setAttribute("operator", "in"), v1.setAttribute("result", r1 + "_drop_shadow_4"), t1.appendChild(v1);
            var P1 = this.createMergeNode(r1, [
                r1 + "_drop_shadow_4",
                s1
            ]);
            t1.appendChild(P1);
        }
        extendPrototype([
            SVGComposableEffect
        ], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t1) {
            if (t1 || this.filterManager._mdf) {
                if ((t1 || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t1 || this.filterManager.effectElements[0].p._mdf) {
                    var e1 = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(e1[0] * 255), Math.round(e1[1] * 255), Math.round(e1[2] * 255)));
                }
                if ((t1 || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t1 || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var i1 = this.filterManager.effectElements[3].p.v, r1 = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s1 = i1 * Math.cos(r1), a1 = i1 * Math.sin(r1);
                    this.feOffset.setAttribute("dx", s1), this.feOffset.setAttribute("dy", a1);
                }
            }
        };
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(t1, e1, i1) {
            this.initialized = !1, this.filterManager = e1, this.filterElem = t1, this.elem = i1, i1.matteElement = createNS("g"), i1.matteElement.appendChild(i1.layerElement), i1.matteElement.appendChild(i1.transformedElement), i1.baseElement = i1.matteElement;
        }
        SVGMatte3Effect.prototype.findSymbol = function(t1) {
            for(var e1 = 0, i1 = _svgMatteSymbols.length; e1 < i1;){
                if (_svgMatteSymbols[e1] === t1) return _svgMatteSymbols[e1];
                e1 += 1;
            }
            return null;
        }, SVGMatte3Effect.prototype.replaceInParent = function(t1, e1) {
            var i1 = t1.layerElement.parentNode;
            if (i1) {
                for(var r1 = i1.children, s1 = 0, a1 = r1.length; s1 < a1 && r1[s1] !== t1.layerElement;)s1 += 1;
                var n1;
                s1 <= a1 - 2 && (n1 = r1[s1 + 1]);
                var f1 = createNS("use");
                f1.setAttribute("href", "#" + e1), n1 ? i1.insertBefore(f1, n1) : i1.appendChild(f1);
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t1, e1) {
            if (!this.findSymbol(e1)) {
                var i1 = createElementID(), r1 = createNS("mask");
                r1.setAttribute("id", e1.layerId), r1.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e1);
                var s1 = t1.globalData.defs;
                s1.appendChild(r1);
                var a1 = createNS("symbol");
                a1.setAttribute("id", i1), this.replaceInParent(e1, i1), a1.appendChild(e1.layerElement), s1.appendChild(a1);
                var n1 = createNS("use");
                n1.setAttribute("href", "#" + i1), r1.appendChild(n1), e1.data.hd = !1, e1.show();
            }
            t1.setMatte(e1.layerId);
        }, SVGMatte3Effect.prototype.initialize = function() {
            for(var t1 = this.filterManager.effectElements[0].p.v, e1 = this.elem.comp.elements, i1 = 0, r1 = e1.length; i1 < r1;)e1[i1] && e1[i1].data.ind === t1 && this.setElementAsMask(this.elem, e1[i1]), i1 += 1;
            this.initialized = !0;
        }, SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize();
        };
        function SVGGaussianBlurEffect(t1, e1, i1, r1) {
            t1.setAttribute("x", "-100%"), t1.setAttribute("y", "-100%"), t1.setAttribute("width", "300%"), t1.setAttribute("height", "300%"), this.filterManager = e1;
            var s1 = createNS("feGaussianBlur");
            s1.setAttribute("result", r1), t1.appendChild(s1), this.feGaussianBlur = s1;
        }
        SVGGaussianBlurEffect.prototype.renderFrame = function(t1) {
            if (t1 || this.filterManager._mdf) {
                var e1 = .3, i1 = this.filterManager.effectElements[0].p.v * e1, r1 = this.filterManager.effectElements[1].p.v, s1 = r1 == 3 ? 0 : i1, a1 = r1 == 2 ? 0 : i1;
                this.feGaussianBlur.setAttribute("stdDeviation", s1 + " " + a1);
                var n1 = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", n1);
            }
        };
        function TransformEffect() {}
        TransformEffect.prototype.init = function(t1) {
            this.effectsManager = t1, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1;
        }, TransformEffect.prototype.renderFrame = function(t1) {
            if (this._opMdf = !1, this._mdf = !1, t1 || this.effectsManager._mdf) {
                var e1 = this.effectsManager.effectElements, i1 = e1[0].p.v, r1 = e1[1].p.v, s1 = e1[2].p.v === 1, a1 = e1[3].p.v, n1 = s1 ? a1 : e1[4].p.v, f1 = e1[5].p.v, o1 = e1[6].p.v, d1 = e1[7].p.v;
                this.matrix.reset(), this.matrix.translate(-i1[0], -i1[1], i1[2]), this.matrix.scale(n1 * .01, a1 * .01, 1), this.matrix.rotate(-d1 * degToRads), this.matrix.skewFromAxis(-f1 * degToRads, (o1 + 90) * degToRads), this.matrix.translate(r1[0], r1[1], 0), this._mdf = !0, this.opacity !== e1[8].p.v && (this.opacity = e1[8].p.v, this._opMdf = !0);
            }
        };
        function SVGTransformEffect(t1, e1) {
            this.init(e1);
        }
        return extendPrototype([
            TransformEffect
        ], SVGTransformEffect), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), lottie;
    });
}), yt = ut(); /*! Bundled license information:

lottie-web/build/player/lottie_html.js:
  (*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   *)
*/ 

},{"./chunk-U2GK2GFR.mjs":"bBhes","./chunk-XNFEUXDS.mjs":"4Lvnj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iYnSD"], null, "parcelRequire8861")

//# sourceMappingURL=lottie_html-DEQZ7JWN-7DH66MZZ.73fccc89.js.map
