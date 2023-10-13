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
})({"9F3SJ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "635df3978c233a95";
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

},{}],"gZy7i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>gt) //# sourceMappingURL=out.js.map
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
            var r1, i1 = t1.length, a1;
            for(r1 = 0; r1 < i1; r1 += 1){
                a1 = t1[r1].prototype;
                for(var s1 in a1)Object.prototype.hasOwnProperty.call(a1, s1) && (e1.prototype[s1] = a1[s1]);
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
                    var e1, r1 = this.audios.length;
                    for(e1 = 0; e1 < r1; e1 += 1)this.audios[e1].pause();
                },
                resume: function() {
                    var e1, r1 = this.audios.length;
                    for(e1 = 0; e1 < r1; e1 += 1)this.audios[e1].resume();
                },
                setRate: function(e1) {
                    var r1, i1 = this.audios.length;
                    for(r1 = 0; r1 < i1; r1 += 1)this.audios[r1].setRate(e1);
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
                    var e1, r1 = this.audios.length;
                    for(e1 = 0; e1 < r1; e1 += 1)this.audios[e1].volume(this._volume * (this._isMuted ? 0 : 1));
                }
            }, function() {
                return new t1;
            };
        }(), createTypedArray = function() {
            function t1(r1, i1) {
                var a1 = 0, s1 = [], n1;
                switch(r1){
                    case "int16":
                    case "uint8c":
                        n1 = 1;
                        break;
                    default:
                        n1 = 1.1;
                        break;
                }
                for(a1 = 0; a1 < i1; a1 += 1)s1.push(n1);
                return s1;
            }
            function e1(r1, i1) {
                return r1 === "float32" ? new Float32Array(i1) : r1 === "int16" ? new Int16Array(i1) : r1 === "uint8c" ? new Uint8ClampedArray(i1) : t1(r1, i1);
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
        var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMin = Math.min, BMMath = {};
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
            ], e1, r1 = t1.length;
            for(e1 = 0; e1 < r1; e1 += 1)BMMath[t1[e1]] = Math[t1[e1]];
        })(), BMMath.random = Math.random, BMMath.abs = function(t1) {
            var e1 = _typeof$6(t1);
            if (e1 === "object" && t1.length) {
                var r1 = createSizedArray(t1.length), i1, a1 = t1.length;
                for(i1 = 0; i1 < a1; i1 += 1)r1[i1] = Math.abs(t1[i1]);
                return r1;
            }
            return Math.abs(t1);
        };
        var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519;
        function BMEnterFrameEvent(t1, e1, r1, i1) {
            this.type = t1, this.currentTime = e1, this.totalTime = r1, this.direction = i1 < 0 ? -1 : 1;
        }
        function BMCompleteEvent(t1, e1) {
            this.type = t1, this.direction = e1 < 0 ? -1 : 1;
        }
        function BMCompleteLoopEvent(t1, e1, r1, i1) {
            this.type = t1, this.currentLoop = r1, this.totalLoops = e1, this.direction = i1 < 0 ? -1 : 1;
        }
        function BMSegmentStartEvent(t1, e1, r1) {
            this.type = t1, this.firstFrame = e1, this.totalFrames = r1;
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
        function HSVtoRGB(t1, e1, r1) {
            var i1, a1, s1, n1, u1, h1, g1, v1;
            switch(n1 = Math.floor(t1 * 6), u1 = t1 * 6 - n1, h1 = r1 * (1 - e1), g1 = r1 * (1 - u1 * e1), v1 = r1 * (1 - (1 - u1) * e1), n1 % 6){
                case 0:
                    i1 = r1, a1 = v1, s1 = h1;
                    break;
                case 1:
                    i1 = g1, a1 = r1, s1 = h1;
                    break;
                case 2:
                    i1 = h1, a1 = r1, s1 = v1;
                    break;
                case 3:
                    i1 = h1, a1 = g1, s1 = r1;
                    break;
                case 4:
                    i1 = v1, a1 = h1, s1 = r1;
                    break;
                case 5:
                    i1 = r1, a1 = h1, s1 = g1;
                    break;
            }
            return [
                i1,
                a1,
                s1
            ];
        }
        function RGBtoHSV(t1, e1, r1) {
            var i1 = Math.max(t1, e1, r1), a1 = Math.min(t1, e1, r1), s1 = i1 - a1, n1, u1 = i1 === 0 ? 0 : s1 / i1, h1 = i1 / 255;
            switch(i1){
                case a1:
                    n1 = 0;
                    break;
                case t1:
                    n1 = e1 - r1 + s1 * (e1 < r1 ? 6 : 0), n1 /= 6 * s1;
                    break;
                case e1:
                    n1 = r1 - t1 + s1 * 2, n1 /= 6 * s1;
                    break;
                case r1:
                    n1 = t1 - e1 + s1 * 4, n1 /= 6 * s1;
                    break;
            }
            return [
                n1,
                u1,
                h1
            ];
        }
        function addSaturationToRGB(t1, e1) {
            var r1 = RGBtoHSV(t1[0] * 255, t1[1] * 255, t1[2] * 255);
            return r1[1] += e1, r1[1] > 1 ? r1[1] = 1 : r1[1] <= 0 && (r1[1] = 0), HSVtoRGB(r1[0], r1[1], r1[2]);
        }
        function addBrightnessToRGB(t1, e1) {
            var r1 = RGBtoHSV(t1[0] * 255, t1[1] * 255, t1[2] * 255);
            return r1[2] += e1, r1[2] > 1 ? r1[2] = 1 : r1[2] < 0 && (r1[2] = 0), HSVtoRGB(r1[0], r1[1], r1[2]);
        }
        function addHueToRGB(t1, e1) {
            var r1 = RGBtoHSV(t1[0] * 255, t1[1] * 255, t1[2] * 255);
            return r1[0] += e1 / 360, r1[0] > 1 ? r1[0] -= 1 : r1[0] < 0 && (r1[0] += 1), HSVtoRGB(r1[0], r1[1], r1[2]);
        }
        var rgbToHex = function() {
            var t1 = [], e1, r1;
            for(e1 = 0; e1 < 256; e1 += 1)r1 = e1.toString(16), t1[e1] = r1.length === 1 ? "0" + r1 : r1;
            return function(i1, a1, s1) {
                return i1 < 0 && (i1 = 0), a1 < 0 && (a1 = 0), s1 < 0 && (s1 = 0), "#" + t1[i1] + t1[a1] + t1[s1];
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
            var t1 = 1, e1 = [], r1, i1, a1 = {
                onmessage: function() {},
                postMessage: function(m1) {
                    r1({
                        data: m1
                    });
                }
            }, s1 = {
                postMessage: function(m1) {
                    a1.onmessage({
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
                    }), y1 = URL.createObjectURL(b1);
                    return new Worker(y1);
                }
                return r1 = m1, a1;
            }
            function u1() {
                i1 || (i1 = n1(function(m1) {
                    function b1() {
                        function d1(C1, w1) {
                            var _1, x1, f1 = C1.length, S1, D1, k1, O1;
                            for(x1 = 0; x1 < f1; x1 += 1)if (_1 = C1[x1], "ks" in _1 && !_1.completed) {
                                if (_1.completed = !0, _1.hasMask) {
                                    var B1 = _1.masksProperties;
                                    for(D1 = B1.length, S1 = 0; S1 < D1; S1 += 1)if (B1[S1].pt.k.i) c1(B1[S1].pt.k);
                                    else for(O1 = B1[S1].pt.k.length, k1 = 0; k1 < O1; k1 += 1)B1[S1].pt.k[k1].s && c1(B1[S1].pt.k[k1].s[0]), B1[S1].pt.k[k1].e && c1(B1[S1].pt.k[k1].e[0]);
                                }
                                _1.ty === 0 ? (_1.layers = o1(_1.refId, w1), d1(_1.layers, w1)) : _1.ty === 4 ? l1(_1.shapes) : _1.ty === 5 && V1(_1);
                            }
                        }
                        function A1(C1, w1) {
                            if (C1) {
                                var _1 = 0, x1 = C1.length;
                                for(_1 = 0; _1 < x1; _1 += 1)C1[_1].t === 1 && (C1[_1].data.layers = o1(C1[_1].data.refId, w1), d1(C1[_1].data.layers, w1));
                            }
                        }
                        function p1(C1, w1) {
                            for(var _1 = 0, x1 = w1.length; _1 < x1;){
                                if (w1[_1].id === C1) return w1[_1];
                                _1 += 1;
                            }
                            return null;
                        }
                        function o1(C1, w1) {
                            var _1 = p1(C1, w1);
                            return _1 ? _1.layers.__used ? JSON.parse(JSON.stringify(_1.layers)) : (_1.layers.__used = !0, _1.layers) : null;
                        }
                        function l1(C1) {
                            var w1, _1 = C1.length, x1, f1;
                            for(w1 = _1 - 1; w1 >= 0; w1 -= 1)if (C1[w1].ty === "sh") {
                                if (C1[w1].ks.k.i) c1(C1[w1].ks.k);
                                else for(f1 = C1[w1].ks.k.length, x1 = 0; x1 < f1; x1 += 1)C1[w1].ks.k[x1].s && c1(C1[w1].ks.k[x1].s[0]), C1[w1].ks.k[x1].e && c1(C1[w1].ks.k[x1].e[0]);
                            } else C1[w1].ty === "gr" && l1(C1[w1].it);
                        }
                        function c1(C1) {
                            var w1, _1 = C1.i.length;
                            for(w1 = 0; w1 < _1; w1 += 1)C1.i[w1][0] += C1.v[w1][0], C1.i[w1][1] += C1.v[w1][1], C1.o[w1][0] += C1.v[w1][0], C1.o[w1][1] += C1.v[w1][1];
                        }
                        function P1(C1, w1) {
                            var _1 = w1 ? w1.split(".") : [
                                100,
                                100,
                                100
                            ];
                            return C1[0] > _1[0] ? !0 : _1[0] > C1[0] ? !1 : C1[1] > _1[1] ? !0 : _1[1] > C1[1] ? !1 : C1[2] > _1[2] ? !0 : _1[2] > C1[2] ? !1 : null;
                        }
                        var M1 = function() {
                            var C1 = [
                                4,
                                4,
                                14
                            ];
                            function w1(x1) {
                                var f1 = x1.t.d;
                                x1.t.d = {
                                    k: [
                                        {
                                            s: f1,
                                            t: 0
                                        }
                                    ]
                                };
                            }
                            function _1(x1) {
                                var f1, S1 = x1.length;
                                for(f1 = 0; f1 < S1; f1 += 1)x1[f1].ty === 5 && w1(x1[f1]);
                            }
                            return function(x1) {
                                if (P1(C1, x1.v) && (_1(x1.layers), x1.assets)) {
                                    var f1, S1 = x1.assets.length;
                                    for(f1 = 0; f1 < S1; f1 += 1)x1.assets[f1].layers && _1(x1.assets[f1].layers);
                                }
                            };
                        }(), T1 = function() {
                            var C1 = [
                                4,
                                7,
                                99
                            ];
                            return function(w1) {
                                if (w1.chars && !P1(C1, w1.v)) {
                                    var _1, x1 = w1.chars.length;
                                    for(_1 = 0; _1 < x1; _1 += 1){
                                        var f1 = w1.chars[_1];
                                        f1.data && f1.data.shapes && (l1(f1.data.shapes), f1.data.ip = 0, f1.data.op = 99999, f1.data.st = 0, f1.data.sr = 1, f1.data.ks = {
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
                                        }, w1.chars[_1].t || (f1.data.shapes.push({
                                            ty: "no"
                                        }), f1.data.shapes[0].it.push({
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
                        }(), F1 = function() {
                            var C1 = [
                                5,
                                7,
                                15
                            ];
                            function w1(x1) {
                                var f1 = x1.t.p;
                                typeof f1.a == "number" && (f1.a = {
                                    a: 0,
                                    k: f1.a
                                }), typeof f1.p == "number" && (f1.p = {
                                    a: 0,
                                    k: f1.p
                                }), typeof f1.r == "number" && (f1.r = {
                                    a: 0,
                                    k: f1.r
                                });
                            }
                            function _1(x1) {
                                var f1, S1 = x1.length;
                                for(f1 = 0; f1 < S1; f1 += 1)x1[f1].ty === 5 && w1(x1[f1]);
                            }
                            return function(x1) {
                                if (P1(C1, x1.v) && (_1(x1.layers), x1.assets)) {
                                    var f1, S1 = x1.assets.length;
                                    for(f1 = 0; f1 < S1; f1 += 1)x1.assets[f1].layers && _1(x1.assets[f1].layers);
                                }
                            };
                        }(), I1 = function() {
                            var C1 = [
                                4,
                                1,
                                9
                            ];
                            function w1(x1) {
                                var f1, S1 = x1.length, D1, k1;
                                for(f1 = 0; f1 < S1; f1 += 1)if (x1[f1].ty === "gr") w1(x1[f1].it);
                                else if (x1[f1].ty === "fl" || x1[f1].ty === "st") {
                                    if (x1[f1].c.k && x1[f1].c.k[0].i) for(k1 = x1[f1].c.k.length, D1 = 0; D1 < k1; D1 += 1)x1[f1].c.k[D1].s && (x1[f1].c.k[D1].s[0] /= 255, x1[f1].c.k[D1].s[1] /= 255, x1[f1].c.k[D1].s[2] /= 255, x1[f1].c.k[D1].s[3] /= 255), x1[f1].c.k[D1].e && (x1[f1].c.k[D1].e[0] /= 255, x1[f1].c.k[D1].e[1] /= 255, x1[f1].c.k[D1].e[2] /= 255, x1[f1].c.k[D1].e[3] /= 255);
                                    else x1[f1].c.k[0] /= 255, x1[f1].c.k[1] /= 255, x1[f1].c.k[2] /= 255, x1[f1].c.k[3] /= 255;
                                }
                            }
                            function _1(x1) {
                                var f1, S1 = x1.length;
                                for(f1 = 0; f1 < S1; f1 += 1)x1[f1].ty === 4 && w1(x1[f1].shapes);
                            }
                            return function(x1) {
                                if (P1(C1, x1.v) && (_1(x1.layers), x1.assets)) {
                                    var f1, S1 = x1.assets.length;
                                    for(f1 = 0; f1 < S1; f1 += 1)x1.assets[f1].layers && _1(x1.assets[f1].layers);
                                }
                            };
                        }(), R1 = function() {
                            var C1 = [
                                4,
                                4,
                                18
                            ];
                            function w1(x1) {
                                var f1, S1 = x1.length, D1, k1;
                                for(f1 = S1 - 1; f1 >= 0; f1 -= 1)if (x1[f1].ty === "sh") {
                                    if (x1[f1].ks.k.i) x1[f1].ks.k.c = x1[f1].closed;
                                    else for(k1 = x1[f1].ks.k.length, D1 = 0; D1 < k1; D1 += 1)x1[f1].ks.k[D1].s && (x1[f1].ks.k[D1].s[0].c = x1[f1].closed), x1[f1].ks.k[D1].e && (x1[f1].ks.k[D1].e[0].c = x1[f1].closed);
                                } else x1[f1].ty === "gr" && w1(x1[f1].it);
                            }
                            function _1(x1) {
                                var f1, S1, D1 = x1.length, k1, O1, B1, j1;
                                for(S1 = 0; S1 < D1; S1 += 1){
                                    if (f1 = x1[S1], f1.hasMask) {
                                        var N1 = f1.masksProperties;
                                        for(O1 = N1.length, k1 = 0; k1 < O1; k1 += 1)if (N1[k1].pt.k.i) N1[k1].pt.k.c = N1[k1].cl;
                                        else for(j1 = N1[k1].pt.k.length, B1 = 0; B1 < j1; B1 += 1)N1[k1].pt.k[B1].s && (N1[k1].pt.k[B1].s[0].c = N1[k1].cl), N1[k1].pt.k[B1].e && (N1[k1].pt.k[B1].e[0].c = N1[k1].cl);
                                    }
                                    f1.ty === 4 && w1(f1.shapes);
                                }
                            }
                            return function(x1) {
                                if (P1(C1, x1.v) && (_1(x1.layers), x1.assets)) {
                                    var f1, S1 = x1.assets.length;
                                    for(f1 = 0; f1 < S1; f1 += 1)x1.assets[f1].layers && _1(x1.assets[f1].layers);
                                }
                            };
                        }();
                        function L1(C1) {
                            C1.__complete || (I1(C1), M1(C1), T1(C1), F1(C1), R1(C1), d1(C1.layers, C1.assets), A1(C1.chars, C1.assets), C1.__complete = !0);
                        }
                        function V1(C1) {
                            C1.t.a.length === 0 && C1.t.p;
                        }
                        var G1 = {};
                        return G1.completeData = L1, G1.checkColors = I1, G1.checkChars = T1, G1.checkPathProperties = F1, G1.checkShapes = R1, G1.completeLayers = d1, G1;
                    }
                    if (s1.dataManager || (s1.dataManager = b1()), s1.assetLoader || (s1.assetLoader = function() {
                        function d1(p1) {
                            var o1 = p1.getResponseHeader("content-type");
                            return o1 && p1.responseType === "json" && o1.indexOf("json") !== -1 || p1.response && _typeof$5(p1.response) === "object" ? p1.response : p1.response && typeof p1.response == "string" ? JSON.parse(p1.response) : p1.responseText ? JSON.parse(p1.responseText) : null;
                        }
                        function A1(p1, o1, l1, c1) {
                            var P1, M1 = new XMLHttpRequest;
                            try {
                                M1.responseType = "json";
                            } catch  {}
                            M1.onreadystatechange = function() {
                                if (M1.readyState === 4) {
                                    if (M1.status === 200) P1 = d1(M1), l1(P1);
                                    else try {
                                        P1 = d1(M1), l1(P1);
                                    } catch (T1) {
                                        c1 && c1(T1);
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
                                ].join(""), o1 + "/" + p1, !0);
                            }
                            M1.send();
                        }
                        return {
                            load: A1
                        };
                    }()), m1.data.type === "loadAnimation") s1.assetLoader.load(m1.data.path, m1.data.fullPath, function(d1) {
                        s1.dataManager.completeData(d1), s1.postMessage({
                            id: m1.data.id,
                            payload: d1,
                            status: "success"
                        });
                    }, function() {
                        s1.postMessage({
                            id: m1.data.id,
                            status: "error"
                        });
                    });
                    else if (m1.data.type === "complete") {
                        var y1 = m1.data.animation;
                        s1.dataManager.completeData(y1), s1.postMessage({
                            id: m1.data.id,
                            payload: y1,
                            status: "success"
                        });
                    } else m1.data.type === "loadData" && s1.assetLoader.load(m1.data.path, m1.data.fullPath, function(d1) {
                        s1.postMessage({
                            id: m1.data.id,
                            payload: d1,
                            status: "success"
                        });
                    }, function() {
                        s1.postMessage({
                            id: m1.data.id,
                            status: "error"
                        });
                    });
                }), i1.onmessage = function(m1) {
                    var b1 = m1.data, y1 = b1.id, d1 = e1[y1];
                    e1[y1] = null, b1.status === "success" ? d1.onComplete(b1.payload) : d1.onError && d1.onError();
                });
            }
            function h1(m1, b1) {
                t1 += 1;
                var y1 = "processId_" + t1;
                return e1[y1] = {
                    onComplete: m1,
                    onError: b1
                }, y1;
            }
            function g1(m1, b1, y1) {
                u1();
                var d1 = h1(b1, y1);
                i1.postMessage({
                    type: "loadAnimation",
                    path: m1,
                    fullPath: window.location.origin + window.location.pathname,
                    id: d1
                });
            }
            function v1(m1, b1, y1) {
                u1();
                var d1 = h1(b1, y1);
                i1.postMessage({
                    type: "loadData",
                    path: m1,
                    fullPath: window.location.origin + window.location.pathname,
                    id: d1
                });
            }
            function E1(m1, b1, y1) {
                u1();
                var d1 = h1(b1, y1);
                i1.postMessage({
                    type: "complete",
                    animation: m1,
                    id: d1
                });
            }
            return {
                loadAnimation: g1,
                loadData: v1,
                completeAnimation: E1
            };
        }(), ImagePreloader = function() {
            var t1 = function() {
                var p1 = createTag("canvas");
                p1.width = 1, p1.height = 1;
                var o1 = p1.getContext("2d");
                return o1.fillStyle = "rgba(0,0,0,0)", o1.fillRect(0, 0, 1, 1), p1;
            }();
            function e1() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function r1() {
                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function i1(p1, o1, l1) {
                var c1 = "";
                if (p1.e) c1 = p1.p;
                else if (o1) {
                    var P1 = p1.p;
                    P1.indexOf("images/") !== -1 && (P1 = P1.split("/")[1]), c1 = o1 + P1;
                } else c1 = l1, c1 += p1.u ? p1.u : "", c1 += p1.p;
                return c1;
            }
            function a1(p1) {
                var o1 = 0, l1 = setInterval((function() {
                    var c1 = p1.getBBox();
                    (c1.width || o1 > 500) && (this._imageLoaded(), clearInterval(l1)), o1 += 1;
                }).bind(this), 50);
            }
            function s1(p1) {
                var o1 = i1(p1, this.assetsPath, this.path), l1 = createNS("image");
                isSafari ? this.testImageLoaded(l1) : l1.addEventListener("load", this._imageLoaded, !1), l1.addEventListener("error", (function() {
                    c1.img = t1, this._imageLoaded();
                }).bind(this), !1), l1.setAttributeNS("http://www.w3.org/1999/xlink", "href", o1), this._elementHelper.append ? this._elementHelper.append(l1) : this._elementHelper.appendChild(l1);
                var c1 = {
                    img: l1,
                    assetData: p1
                };
                return c1;
            }
            function n1(p1) {
                var o1 = i1(p1, this.assetsPath, this.path), l1 = createTag("img");
                l1.crossOrigin = "anonymous", l1.addEventListener("load", this._imageLoaded, !1), l1.addEventListener("error", (function() {
                    c1.img = t1, this._imageLoaded();
                }).bind(this), !1), l1.src = o1;
                var c1 = {
                    img: l1,
                    assetData: p1
                };
                return c1;
            }
            function u1(p1) {
                var o1 = {
                    assetData: p1
                }, l1 = i1(p1, this.assetsPath, this.path);
                return dataManager.loadData(l1, (function(c1) {
                    o1.img = c1, this._footageLoaded();
                }).bind(this), (function() {
                    o1.img = {}, this._footageLoaded();
                }).bind(this)), o1;
            }
            function h1(p1, o1) {
                this.imagesLoadedCb = o1;
                var l1, c1 = p1.length;
                for(l1 = 0; l1 < c1; l1 += 1)p1[l1].layers || (!p1[l1].t || p1[l1].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(p1[l1]))) : p1[l1].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(p1[l1]))));
            }
            function g1(p1) {
                this.path = p1 || "";
            }
            function v1(p1) {
                this.assetsPath = p1 || "";
            }
            function E1(p1) {
                for(var o1 = 0, l1 = this.images.length; o1 < l1;){
                    if (this.images[o1].assetData === p1) return this.images[o1].img;
                    o1 += 1;
                }
                return null;
            }
            function m1() {
                this.imagesLoadedCb = null, this.images.length = 0;
            }
            function b1() {
                return this.totalImages === this.loadedAssets;
            }
            function y1() {
                return this.totalFootages === this.loadedFootagesCount;
            }
            function d1(p1, o1) {
                p1 === "svg" ? (this._elementHelper = o1, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
            }
            function A1() {
                this._imageLoaded = e1.bind(this), this._footageLoaded = r1.bind(this), this.testImageLoaded = a1.bind(this), this.createFootageData = u1.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
            }
            return A1.prototype = {
                loadAssets: h1,
                setAssetsPath: v1,
                setPath: g1,
                loadedImages: b1,
                loadedFootages: y1,
                destroy: m1,
                getAsset: E1,
                createImgData: n1,
                createImageData: s1,
                imageLoaded: e1,
                footageLoaded: r1,
                setCacheType: d1
            }, A1;
        }();
        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function(t1, e1) {
                if (this._cbs[t1]) for(var r1 = this._cbs[t1], i1 = 0; i1 < r1.length; i1 += 1)r1[i1](e1);
            },
            addEventListener: function(t1, e1) {
                return this._cbs[t1] || (this._cbs[t1] = []), this._cbs[t1].push(e1), (function() {
                    this.removeEventListener(t1, e1);
                }).bind(this);
            },
            removeEventListener: function(t1, e1) {
                if (!e1) this._cbs[t1] = null;
                else if (this._cbs[t1]) {
                    for(var r1 = 0, i1 = this._cbs[t1].length; r1 < i1;)this._cbs[t1][r1] === e1 && (this._cbs[t1].splice(r1, 1), r1 -= 1, i1 -= 1), r1 += 1;
                    this._cbs[t1].length || (this._cbs[t1] = null);
                }
            }
        };
        var markerParser = function() {
            function t1(e1) {
                for(var r1 = e1.split(`\r
`), i1 = {}, a1, s1 = 0, n1 = 0; n1 < r1.length; n1 += 1)a1 = r1[n1].split(":"), a1.length === 2 && (i1[a1[0]] = a1[1].trim(), s1 += 1);
                if (s1 === 0) throw new Error;
                return i1;
            }
            return function(e1) {
                for(var r1 = [], i1 = 0; i1 < e1.length; i1 += 1){
                    var a1 = e1[i1], s1 = {
                        time: a1.tm,
                        duration: a1.dr
                    };
                    try {
                        s1.payload = JSON.parse(e1[i1].cm);
                    } catch  {
                        try {
                            s1.payload = t1(e1[i1].cm);
                        } catch  {
                            s1.payload = {
                                name: e1[i1].cm
                            };
                        }
                    }
                    r1.push(s1);
                }
                return r1;
            };
        }(), ProjectInterface = function() {
            function t1(e1) {
                this.compositions.push(e1);
            }
            return function() {
                function e1(r1) {
                    for(var i1 = 0, a1 = this.compositions.length; i1 < a1;){
                        if (this.compositions[i1].data && this.compositions[i1].data.nm === r1) return this.compositions[i1].prepareFrame && this.compositions[i1].data.xt && this.compositions[i1].prepareFrame(this.currentFrame), this.compositions[i1].compInterface;
                        i1 += 1;
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
            var r1 = getRenderer(e1);
            this.renderer = new r1(this, t1.rendererSettings), this.imagePreloader.setCacheType(e1, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e1, t1.loop === "" || t1.loop === null || t1.loop === void 0 || t1.loop === !0 ? this.loop = !0 : t1.loop === !1 ? this.loop = !1 : this.loop = parseInt(t1.loop, 10), this.autoplay = "autoplay" in t1 ? t1.autoplay : !0, this.name = t1.name ? t1.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t1, "autoloadSegments") ? t1.autoloadSegments : !0, this.assetsPath = t1.assetsPath, this.initialSegment = t1.initialSegment, t1.audioFactory && this.audioController.setAudioFactory(t1.audioFactory), t1.animationData ? this.setupAnimation(t1.animationData) : t1.path && (t1.path.lastIndexOf("\\") !== -1 ? this.path = t1.path.substr(0, t1.path.lastIndexOf("\\") + 1) : this.path = t1.path.substr(0, t1.path.lastIndexOf("/") + 1), this.fileName = t1.path.substr(t1.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t1.path, this.configAnimation, this.onSetupError));
        }, AnimationItem.prototype.onSetupError = function() {
            this.trigger("data_failed");
        }, AnimationItem.prototype.setupAnimation = function(t1) {
            dataManager.completeAnimation(t1, this.configAnimation);
        }, AnimationItem.prototype.setData = function(t1, e1) {
            e1 && _typeof$4(e1) !== "object" && (e1 = JSON.parse(e1));
            var r1 = {
                wrapper: t1,
                animationData: e1
            }, i1 = t1.attributes;
            r1.path = i1.getNamedItem("data-animation-path") ? i1.getNamedItem("data-animation-path").value : i1.getNamedItem("data-bm-path") ? i1.getNamedItem("data-bm-path").value : i1.getNamedItem("bm-path") ? i1.getNamedItem("bm-path").value : "", r1.animType = i1.getNamedItem("data-anim-type") ? i1.getNamedItem("data-anim-type").value : i1.getNamedItem("data-bm-type") ? i1.getNamedItem("data-bm-type").value : i1.getNamedItem("bm-type") ? i1.getNamedItem("bm-type").value : i1.getNamedItem("data-bm-renderer") ? i1.getNamedItem("data-bm-renderer").value : i1.getNamedItem("bm-renderer") ? i1.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
            var a1 = i1.getNamedItem("data-anim-loop") ? i1.getNamedItem("data-anim-loop").value : i1.getNamedItem("data-bm-loop") ? i1.getNamedItem("data-bm-loop").value : i1.getNamedItem("bm-loop") ? i1.getNamedItem("bm-loop").value : "";
            a1 === "false" ? r1.loop = !1 : a1 === "true" ? r1.loop = !0 : a1 !== "" && (r1.loop = parseInt(a1, 10));
            var s1 = i1.getNamedItem("data-anim-autoplay") ? i1.getNamedItem("data-anim-autoplay").value : i1.getNamedItem("data-bm-autoplay") ? i1.getNamedItem("data-bm-autoplay").value : i1.getNamedItem("bm-autoplay") ? i1.getNamedItem("bm-autoplay").value : !0;
            r1.autoplay = s1 !== "false", r1.name = i1.getNamedItem("data-name") ? i1.getNamedItem("data-name").value : i1.getNamedItem("data-bm-name") ? i1.getNamedItem("data-bm-name").value : i1.getNamedItem("bm-name") ? i1.getNamedItem("bm-name").value : "";
            var n1 = i1.getNamedItem("data-anim-prerender") ? i1.getNamedItem("data-anim-prerender").value : i1.getNamedItem("data-bm-prerender") ? i1.getNamedItem("data-bm-prerender").value : i1.getNamedItem("bm-prerender") ? i1.getNamedItem("bm-prerender").value : "";
            n1 === "false" && (r1.prerender = !1), r1.path ? this.setParams(r1) : this.trigger("destroy");
        }, AnimationItem.prototype.includeLayers = function(t1) {
            t1.op > this.animationData.op && (this.animationData.op = t1.op, this.totalFrames = Math.floor(t1.op - this.animationData.ip));
            var e1 = this.animationData.layers, r1, i1 = e1.length, a1 = t1.layers, s1, n1 = a1.length;
            for(s1 = 0; s1 < n1; s1 += 1)for(r1 = 0; r1 < i1;){
                if (e1[r1].id === a1[s1].id) {
                    e1[r1] = a1[s1];
                    break;
                }
                r1 += 1;
            }
            if ((t1.chars || t1.fonts) && (this.renderer.globalData.fontManager.addChars(t1.chars), this.renderer.globalData.fontManager.addFonts(t1.fonts, this.renderer.globalData.defs)), t1.assets) for(i1 = t1.assets.length, r1 = 0; r1 < i1; r1 += 1)this.animationData.assets.push(t1.assets[r1]);
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
            var r1 = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, dataManager.loadData(r1, this.includeLayers.bind(this), (function() {
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
            var r1 = typeof t1 == "number" ? t1 : void 0, i1 = typeof e1 == "number" ? e1 : void 0;
            this.renderer.updateContainerSize(r1, i1);
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
            for(var e1, r1 = 0; r1 < this.markers.length; r1 += 1)if (e1 = this.markers[r1], e1.payload && e1.payload.name === t1) return e1;
            return null;
        }, AnimationItem.prototype.goToAndStop = function(t1, e1, r1) {
            if (!(r1 && this.name !== r1)) {
                var i1 = Number(t1);
                if (isNaN(i1)) {
                    var a1 = this.getMarkerData(t1);
                    a1 && this.goToAndStop(a1.time, !0);
                } else e1 ? this.setCurrentRawFrameValue(t1) : this.setCurrentRawFrameValue(t1 * this.frameModifier);
                this.pause();
            }
        }, AnimationItem.prototype.goToAndPlay = function(t1, e1, r1) {
            if (!(r1 && this.name !== r1)) {
                var i1 = Number(t1);
                if (isNaN(i1)) {
                    var a1 = this.getMarkerData(t1);
                    a1 && (a1.duration ? this.playSegments([
                        a1.time,
                        a1.time + a1.duration
                    ], !0) : this.goToAndStop(a1.time, !0));
                } else this.goToAndStop(i1, e1, r1);
                this.play();
            }
        }, AnimationItem.prototype.advanceTime = function(t1) {
            if (!(this.isPaused === !0 || this.isLoaded === !1)) {
                var e1 = this.currentRawFrame + t1 * this.frameModifier, r1 = !1;
                e1 >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e1 > this.totalFrames ? e1 % this.totalFrames : 0) || (r1 = !0, e1 = this.totalFrames - 1) : e1 >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e1 % this.totalFrames) || (this.setCurrentRawFrameValue(e1 % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e1) : e1 < 0 ? this.checkSegments(e1 % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e1 % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (r1 = !0, e1 = 0)) : this.setCurrentRawFrameValue(e1), r1 && (this.setCurrentRawFrameValue(e1), this.pause(), this.trigger("complete"));
            }
        }, AnimationItem.prototype.adjustSegment = function(t1, e1) {
            this.playCount = 0, t1[1] < t1[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t1[0] - t1[1], this.timeCompleted = this.totalFrames, this.firstFrame = t1[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e1)) : t1[1] > t1[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t1[1] - t1[0], this.timeCompleted = this.totalFrames, this.firstFrame = t1[0], this.setCurrentRawFrameValue(.001 + e1)), this.trigger("segmentStart");
        }, AnimationItem.prototype.setSegment = function(t1, e1) {
            var r1 = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t1 ? r1 = t1 : this.currentRawFrame + this.firstFrame > e1 && (r1 = e1 - t1)), this.firstFrame = t1, this.totalFrames = e1 - t1, this.timeCompleted = this.totalFrames, r1 !== -1 && this.goToAndStop(r1, !0);
        }, AnimationItem.prototype.playSegments = function(t1, e1) {
            if (e1 && (this.segments.length = 0), _typeof$4(t1[0]) === "object") {
                var r1, i1 = t1.length;
                for(r1 = 0; r1 < i1; r1 += 1)this.segments.push(t1[r1]);
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
                var r1 = t1.p;
                r1.indexOf("images/") !== -1 && (r1 = r1.split("/")[1]), e1 = this.assetsPath + r1;
            } else e1 = this.path, e1 += t1.u ? t1.u : "", e1 += t1.p;
            return e1;
        }, AnimationItem.prototype.getAssetData = function(t1) {
            for(var e1 = 0, r1 = this.assets.length; e1 < r1;){
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
        }, AnimationItem.prototype.updateDocumentData = function(t1, e1, r1) {
            try {
                var i1 = this.renderer.getElementByPath(t1);
                i1.updateDocumentData(e1, r1);
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
            var t1 = {}, e1 = [], r1 = 0, i1 = 0, a1 = 0, s1 = !0, n1 = !1;
            function u1(_1) {
                for(var x1 = 0, f1 = _1.target; x1 < i1;)e1[x1].animation === f1 && (e1.splice(x1, 1), x1 -= 1, i1 -= 1, f1.isPaused || E1()), x1 += 1;
            }
            function h1(_1, x1) {
                if (!_1) return null;
                for(var f1 = 0; f1 < i1;){
                    if (e1[f1].elem === _1 && e1[f1].elem !== null) return e1[f1].animation;
                    f1 += 1;
                }
                var S1 = new AnimationItem;
                return m1(S1, _1), S1.setData(_1, x1), S1;
            }
            function g1() {
                var _1, x1 = e1.length, f1 = [];
                for(_1 = 0; _1 < x1; _1 += 1)f1.push(e1[_1].animation);
                return f1;
            }
            function v1() {
                a1 += 1, R1();
            }
            function E1() {
                a1 -= 1;
            }
            function m1(_1, x1) {
                _1.addEventListener("destroy", u1), _1.addEventListener("_active", v1), _1.addEventListener("_idle", E1), e1.push({
                    elem: x1,
                    animation: _1
                }), i1 += 1;
            }
            function b1(_1) {
                var x1 = new AnimationItem;
                return m1(x1, null), x1.setParams(_1), x1;
            }
            function y1(_1, x1) {
                var f1;
                for(f1 = 0; f1 < i1; f1 += 1)e1[f1].animation.setSpeed(_1, x1);
            }
            function d1(_1, x1) {
                var f1;
                for(f1 = 0; f1 < i1; f1 += 1)e1[f1].animation.setDirection(_1, x1);
            }
            function A1(_1) {
                var x1;
                for(x1 = 0; x1 < i1; x1 += 1)e1[x1].animation.play(_1);
            }
            function p1(_1) {
                var x1 = _1 - r1, f1;
                for(f1 = 0; f1 < i1; f1 += 1)e1[f1].animation.advanceTime(x1);
                r1 = _1, a1 && !n1 ? window.requestAnimationFrame(p1) : s1 = !0;
            }
            function o1(_1) {
                r1 = _1, window.requestAnimationFrame(p1);
            }
            function l1(_1) {
                var x1;
                for(x1 = 0; x1 < i1; x1 += 1)e1[x1].animation.pause(_1);
            }
            function c1(_1, x1, f1) {
                var S1;
                for(S1 = 0; S1 < i1; S1 += 1)e1[S1].animation.goToAndStop(_1, x1, f1);
            }
            function P1(_1) {
                var x1;
                for(x1 = 0; x1 < i1; x1 += 1)e1[x1].animation.stop(_1);
            }
            function M1(_1) {
                var x1;
                for(x1 = 0; x1 < i1; x1 += 1)e1[x1].animation.togglePause(_1);
            }
            function T1(_1) {
                var x1;
                for(x1 = i1 - 1; x1 >= 0; x1 -= 1)e1[x1].animation.destroy(_1);
            }
            function F1(_1, x1, f1) {
                var S1 = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), D1, k1 = S1.length;
                for(D1 = 0; D1 < k1; D1 += 1)f1 && S1[D1].setAttribute("data-bm-type", f1), h1(S1[D1], _1);
                if (x1 && k1 === 0) {
                    f1 || (f1 = "svg");
                    var O1 = document.getElementsByTagName("body")[0];
                    O1.innerText = "";
                    var B1 = createTag("div");
                    B1.style.width = "100%", B1.style.height = "100%", B1.setAttribute("data-bm-type", f1), O1.appendChild(B1), h1(B1, _1);
                }
            }
            function I1() {
                var _1;
                for(_1 = 0; _1 < i1; _1 += 1)e1[_1].animation.resize();
            }
            function R1() {
                !n1 && a1 && s1 && (window.requestAnimationFrame(o1), s1 = !1);
            }
            function L1() {
                n1 = !0;
            }
            function V1() {
                n1 = !1, R1();
            }
            function G1(_1, x1) {
                var f1;
                for(f1 = 0; f1 < i1; f1 += 1)e1[f1].animation.setVolume(_1, x1);
            }
            function C1(_1) {
                var x1;
                for(x1 = 0; x1 < i1; x1 += 1)e1[x1].animation.mute(_1);
            }
            function w1(_1) {
                var x1;
                for(x1 = 0; x1 < i1; x1 += 1)e1[x1].animation.unmute(_1);
            }
            return t1.registerAnimation = h1, t1.loadAnimation = b1, t1.setSpeed = y1, t1.setDirection = d1, t1.play = A1, t1.pause = l1, t1.stop = P1, t1.togglePause = M1, t1.searchAnimations = F1, t1.resize = I1, t1.goToAndStop = c1, t1.destroy = T1, t1.freeze = L1, t1.unfreeze = V1, t1.setVolume = G1, t1.mute = C1, t1.unmute = w1, t1.getRegisteredAnimations = g1, t1;
        }(), BezierFactory = function() {
            var t1 = {};
            t1.getBezierEasing = r1;
            var e1 = {};
            function r1(o1, l1, c1, P1, M1) {
                var T1 = M1 || ("bez_" + o1 + "_" + l1 + "_" + c1 + "_" + P1).replace(/\./g, "p");
                if (e1[T1]) return e1[T1];
                var F1 = new p1([
                    o1,
                    l1,
                    c1,
                    P1
                ]);
                return e1[T1] = F1, F1;
            }
            var i1 = 4, a1 = .001, s1 = 1e-7, n1 = 10, u1 = 11, h1 = 1 / (u1 - 1), g1 = typeof Float32Array == "function";
            function v1(o1, l1) {
                return 1 - 3 * l1 + 3 * o1;
            }
            function E1(o1, l1) {
                return 3 * l1 - 6 * o1;
            }
            function m1(o1) {
                return 3 * o1;
            }
            function b1(o1, l1, c1) {
                return ((v1(l1, c1) * o1 + E1(l1, c1)) * o1 + m1(l1)) * o1;
            }
            function y1(o1, l1, c1) {
                return 3 * v1(l1, c1) * o1 * o1 + 2 * E1(l1, c1) * o1 + m1(l1);
            }
            function d1(o1, l1, c1, P1, M1) {
                var T1, F1, I1 = 0;
                do F1 = l1 + (c1 - l1) / 2, T1 = b1(F1, P1, M1) - o1, T1 > 0 ? c1 = F1 : l1 = F1;
                while (Math.abs(T1) > s1 && ++I1 < n1);
                return F1;
            }
            function A1(o1, l1, c1, P1) {
                for(var M1 = 0; M1 < i1; ++M1){
                    var T1 = y1(l1, c1, P1);
                    if (T1 === 0) return l1;
                    var F1 = b1(l1, c1, P1) - o1;
                    l1 -= F1 / T1;
                }
                return l1;
            }
            function p1(o1) {
                this._p = o1, this._mSampleValues = g1 ? new Float32Array(u1) : new Array(u1), this._precomputed = !1, this.get = this.get.bind(this);
            }
            return p1.prototype = {
                get: function(o1) {
                    var l1 = this._p[0], c1 = this._p[1], P1 = this._p[2], M1 = this._p[3];
                    return this._precomputed || this._precompute(), l1 === c1 && P1 === M1 ? o1 : o1 === 0 ? 0 : o1 === 1 ? 1 : b1(this._getTForX(o1), c1, M1);
                },
                _precompute: function() {
                    var o1 = this._p[0], l1 = this._p[1], c1 = this._p[2], P1 = this._p[3];
                    this._precomputed = !0, (o1 !== l1 || c1 !== P1) && this._calcSampleValues();
                },
                _calcSampleValues: function() {
                    for(var o1 = this._p[0], l1 = this._p[2], c1 = 0; c1 < u1; ++c1)this._mSampleValues[c1] = b1(c1 * h1, o1, l1);
                },
                _getTForX: function(o1) {
                    for(var l1 = this._p[0], c1 = this._p[2], P1 = this._mSampleValues, M1 = 0, T1 = 1, F1 = u1 - 1; T1 !== F1 && P1[T1] <= o1; ++T1)M1 += h1;
                    --T1;
                    var I1 = (o1 - P1[T1]) / (P1[T1 + 1] - P1[T1]), R1 = M1 + I1 * h1, L1 = y1(R1, l1, c1);
                    return L1 >= a1 ? A1(o1, R1, l1, c1) : L1 === 0 ? R1 : d1(o1, M1, M1 + h1, l1, c1);
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
            return function(t1, e1, r1) {
                var i1 = 0, a1 = t1, s1 = createSizedArray(a1), n1 = {
                    newElement: u1,
                    release: h1
                };
                function u1() {
                    var g1;
                    return i1 ? (i1 -= 1, g1 = s1[i1]) : g1 = e1(), g1;
                }
                function h1(g1) {
                    i1 === a1 && (s1 = pooling.double(s1), a1 *= 2), r1 && r1(g1), s1[i1] = g1, i1 += 1;
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
            function e1(r1) {
                var i1, a1 = r1.lengths.length;
                for(i1 = 0; i1 < a1; i1 += 1)bezierLengthPool.release(r1.lengths[i1]);
                r1.lengths.length = 0;
            }
            return poolFactory(8, t1, e1);
        }();
        function bezFunction() {
            var t1 = Math;
            function e1(m1, b1, y1, d1, A1, p1) {
                var o1 = m1 * d1 + b1 * A1 + y1 * p1 - A1 * d1 - p1 * m1 - y1 * b1;
                return o1 > -0.001 && o1 < .001;
            }
            function r1(m1, b1, y1, d1, A1, p1, o1, l1, c1) {
                if (y1 === 0 && p1 === 0 && c1 === 0) return e1(m1, b1, d1, A1, o1, l1);
                var P1 = t1.sqrt(t1.pow(d1 - m1, 2) + t1.pow(A1 - b1, 2) + t1.pow(p1 - y1, 2)), M1 = t1.sqrt(t1.pow(o1 - m1, 2) + t1.pow(l1 - b1, 2) + t1.pow(c1 - y1, 2)), T1 = t1.sqrt(t1.pow(o1 - d1, 2) + t1.pow(l1 - A1, 2) + t1.pow(c1 - p1, 2)), F1;
                return P1 > M1 ? P1 > T1 ? F1 = P1 - M1 - T1 : F1 = T1 - M1 - P1 : T1 > M1 ? F1 = T1 - M1 - P1 : F1 = M1 - P1 - T1, F1 > -0.0001 && F1 < 1e-4;
            }
            var i1 = function() {
                return function(m1, b1, y1, d1) {
                    var A1 = getDefaultCurveSegments(), p1, o1, l1, c1, P1, M1 = 0, T1, F1 = [], I1 = [], R1 = bezierLengthPool.newElement();
                    for(l1 = y1.length, p1 = 0; p1 < A1; p1 += 1){
                        for(P1 = p1 / (A1 - 1), T1 = 0, o1 = 0; o1 < l1; o1 += 1)c1 = bmPow(1 - P1, 3) * m1[o1] + 3 * bmPow(1 - P1, 2) * P1 * y1[o1] + 3 * (1 - P1) * bmPow(P1, 2) * d1[o1] + bmPow(P1, 3) * b1[o1], F1[o1] = c1, I1[o1] !== null && (T1 += bmPow(F1[o1] - I1[o1], 2)), I1[o1] = F1[o1];
                        T1 && (T1 = bmSqrt(T1), M1 += T1), R1.percents[p1] = P1, R1.lengths[p1] = M1;
                    }
                    return R1.addedLength = M1, R1;
                };
            }();
            function a1(m1) {
                var b1 = segmentsLengthPool.newElement(), y1 = m1.c, d1 = m1.v, A1 = m1.o, p1 = m1.i, o1, l1 = m1._length, c1 = b1.lengths, P1 = 0;
                for(o1 = 0; o1 < l1 - 1; o1 += 1)c1[o1] = i1(d1[o1], d1[o1 + 1], A1[o1], p1[o1 + 1]), P1 += c1[o1].addedLength;
                return y1 && l1 && (c1[o1] = i1(d1[o1], d1[0], A1[o1], p1[0]), P1 += c1[o1].addedLength), b1.totalLength = P1, b1;
            }
            function s1(m1) {
                this.segmentLength = 0, this.points = new Array(m1);
            }
            function n1(m1, b1) {
                this.partialLength = m1, this.point = b1;
            }
            var u1 = function() {
                var m1 = {};
                return function(b1, y1, d1, A1) {
                    var p1 = (b1[0] + "_" + b1[1] + "_" + y1[0] + "_" + y1[1] + "_" + d1[0] + "_" + d1[1] + "_" + A1[0] + "_" + A1[1]).replace(/\./g, "p");
                    if (!m1[p1]) {
                        var o1 = getDefaultCurveSegments(), l1, c1, P1, M1, T1, F1 = 0, I1, R1, L1 = null;
                        b1.length === 2 && (b1[0] !== y1[0] || b1[1] !== y1[1]) && e1(b1[0], b1[1], y1[0], y1[1], b1[0] + d1[0], b1[1] + d1[1]) && e1(b1[0], b1[1], y1[0], y1[1], y1[0] + A1[0], y1[1] + A1[1]) && (o1 = 2);
                        var V1 = new s1(o1);
                        for(P1 = d1.length, l1 = 0; l1 < o1; l1 += 1){
                            for(R1 = createSizedArray(P1), T1 = l1 / (o1 - 1), I1 = 0, c1 = 0; c1 < P1; c1 += 1)M1 = bmPow(1 - T1, 3) * b1[c1] + 3 * bmPow(1 - T1, 2) * T1 * (b1[c1] + d1[c1]) + 3 * (1 - T1) * bmPow(T1, 2) * (y1[c1] + A1[c1]) + bmPow(T1, 3) * y1[c1], R1[c1] = M1, L1 !== null && (I1 += bmPow(R1[c1] - L1[c1], 2));
                            I1 = bmSqrt(I1), F1 += I1, V1.points[l1] = new n1(I1, R1), L1 = R1;
                        }
                        V1.segmentLength = F1, m1[p1] = V1;
                    }
                    return m1[p1];
                };
            }();
            function h1(m1, b1) {
                var y1 = b1.percents, d1 = b1.lengths, A1 = y1.length, p1 = bmFloor((A1 - 1) * m1), o1 = m1 * b1.addedLength, l1 = 0;
                if (p1 === A1 - 1 || p1 === 0 || o1 === d1[p1]) return y1[p1];
                for(var c1 = d1[p1] > o1 ? -1 : 1, P1 = !0; P1;)if (d1[p1] <= o1 && d1[p1 + 1] > o1 ? (l1 = (o1 - d1[p1]) / (d1[p1 + 1] - d1[p1]), P1 = !1) : p1 += c1, p1 < 0 || p1 >= A1 - 1) {
                    if (p1 === A1 - 1) return y1[p1];
                    P1 = !1;
                }
                return y1[p1] + (y1[p1 + 1] - y1[p1]) * l1;
            }
            function g1(m1, b1, y1, d1, A1, p1) {
                var o1 = h1(A1, p1), l1 = 1 - o1, c1 = t1.round((l1 * l1 * l1 * m1[0] + (o1 * l1 * l1 + l1 * o1 * l1 + l1 * l1 * o1) * y1[0] + (o1 * o1 * l1 + l1 * o1 * o1 + o1 * l1 * o1) * d1[0] + o1 * o1 * o1 * b1[0]) * 1e3) / 1e3, P1 = t1.round((l1 * l1 * l1 * m1[1] + (o1 * l1 * l1 + l1 * o1 * l1 + l1 * l1 * o1) * y1[1] + (o1 * o1 * l1 + l1 * o1 * o1 + o1 * l1 * o1) * d1[1] + o1 * o1 * o1 * b1[1]) * 1e3) / 1e3;
                return [
                    c1,
                    P1
                ];
            }
            var v1 = createTypedArray("float32", 8);
            function E1(m1, b1, y1, d1, A1, p1, o1) {
                A1 < 0 ? A1 = 0 : A1 > 1 && (A1 = 1);
                var l1 = h1(A1, o1);
                p1 = p1 > 1 ? 1 : p1;
                var c1 = h1(p1, o1), P1, M1 = m1.length, T1 = 1 - l1, F1 = 1 - c1, I1 = T1 * T1 * T1, R1 = l1 * T1 * T1 * 3, L1 = l1 * l1 * T1 * 3, V1 = l1 * l1 * l1, G1 = T1 * T1 * F1, C1 = l1 * T1 * F1 + T1 * l1 * F1 + T1 * T1 * c1, w1 = l1 * l1 * F1 + T1 * l1 * c1 + l1 * T1 * c1, _1 = l1 * l1 * c1, x1 = T1 * F1 * F1, f1 = l1 * F1 * F1 + T1 * c1 * F1 + T1 * F1 * c1, S1 = l1 * c1 * F1 + T1 * c1 * c1 + l1 * F1 * c1, D1 = l1 * c1 * c1, k1 = F1 * F1 * F1, O1 = c1 * F1 * F1 + F1 * c1 * F1 + F1 * F1 * c1, B1 = c1 * c1 * F1 + F1 * c1 * c1 + c1 * F1 * c1, j1 = c1 * c1 * c1;
                for(P1 = 0; P1 < M1; P1 += 1)v1[P1 * 4] = t1.round((I1 * m1[P1] + R1 * y1[P1] + L1 * d1[P1] + V1 * b1[P1]) * 1e3) / 1e3, v1[P1 * 4 + 1] = t1.round((G1 * m1[P1] + C1 * y1[P1] + w1 * d1[P1] + _1 * b1[P1]) * 1e3) / 1e3, v1[P1 * 4 + 2] = t1.round((x1 * m1[P1] + f1 * y1[P1] + S1 * d1[P1] + D1 * b1[P1]) * 1e3) / 1e3, v1[P1 * 4 + 3] = t1.round((k1 * m1[P1] + O1 * y1[P1] + B1 * d1[P1] + j1 * b1[P1]) * 1e3) / 1e3;
                return v1;
            }
            return {
                getSegmentsLength: a1,
                getNewSegment: E1,
                getPointInSegment: g1,
                buildBezierData: u1,
                pointOnLine2D: e1,
                pointOnLine3D: r1
            };
        }
        var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
        function interpolateValue(t1, e1) {
            var r1 = this.offsetTime, i1;
            this.propType === "multidimensional" && (i1 = createTypedArray("float32", this.pv.length));
            for(var a1 = e1.lastIndex, s1 = a1, n1 = this.keyframes.length - 1, u1 = !0, h1, g1, v1; u1;){
                if (h1 = this.keyframes[s1], g1 = this.keyframes[s1 + 1], s1 === n1 - 1 && t1 >= g1.t - r1) {
                    h1.h && (h1 = g1), a1 = 0;
                    break;
                }
                if (g1.t - r1 > t1) {
                    a1 = s1;
                    break;
                }
                s1 < n1 - 1 ? s1 += 1 : (a1 = 0, u1 = !1);
            }
            v1 = this.keyframesMetadata[s1] || {};
            var E1, m1, b1, y1, d1, A1, p1 = g1.t - r1, o1 = h1.t - r1, l1;
            if (h1.to) {
                v1.bezierData || (v1.bezierData = bez.buildBezierData(h1.s, g1.s || h1.e, h1.to, h1.ti));
                var c1 = v1.bezierData;
                if (t1 >= p1 || t1 < o1) {
                    var P1 = t1 >= p1 ? c1.points.length - 1 : 0;
                    for(m1 = c1.points[P1].point.length, E1 = 0; E1 < m1; E1 += 1)i1[E1] = c1.points[P1].point[E1];
                } else {
                    v1.__fnct ? A1 = v1.__fnct : (A1 = BezierFactory.getBezierEasing(h1.o.x, h1.o.y, h1.i.x, h1.i.y, h1.n).get, v1.__fnct = A1), b1 = A1((t1 - o1) / (p1 - o1));
                    var M1 = c1.segmentLength * b1, T1, F1 = e1.lastFrame < t1 && e1._lastKeyframeIndex === s1 ? e1._lastAddedLength : 0;
                    for(d1 = e1.lastFrame < t1 && e1._lastKeyframeIndex === s1 ? e1._lastPoint : 0, u1 = !0, y1 = c1.points.length; u1;){
                        if (F1 += c1.points[d1].partialLength, M1 === 0 || b1 === 0 || d1 === c1.points.length - 1) {
                            for(m1 = c1.points[d1].point.length, E1 = 0; E1 < m1; E1 += 1)i1[E1] = c1.points[d1].point[E1];
                            break;
                        } else if (M1 >= F1 && M1 < F1 + c1.points[d1 + 1].partialLength) {
                            for(T1 = (M1 - F1) / c1.points[d1 + 1].partialLength, m1 = c1.points[d1].point.length, E1 = 0; E1 < m1; E1 += 1)i1[E1] = c1.points[d1].point[E1] + (c1.points[d1 + 1].point[E1] - c1.points[d1].point[E1]) * T1;
                            break;
                        }
                        d1 < y1 - 1 ? d1 += 1 : u1 = !1;
                    }
                    e1._lastPoint = d1, e1._lastAddedLength = F1 - c1.points[d1].partialLength, e1._lastKeyframeIndex = s1;
                }
            } else {
                var I1, R1, L1, V1, G1;
                if (n1 = h1.s.length, l1 = g1.s || h1.e, this.sh && h1.h !== 1) {
                    if (t1 >= p1) i1[0] = l1[0], i1[1] = l1[1], i1[2] = l1[2];
                    else if (t1 <= o1) i1[0] = h1.s[0], i1[1] = h1.s[1], i1[2] = h1.s[2];
                    else {
                        var C1 = createQuaternion(h1.s), w1 = createQuaternion(l1), _1 = (t1 - o1) / (p1 - o1);
                        quaternionToEuler(i1, slerp(C1, w1, _1));
                    }
                } else for(s1 = 0; s1 < n1; s1 += 1)h1.h !== 1 && (t1 >= p1 ? b1 = 1 : t1 < o1 ? b1 = 0 : (h1.o.x.constructor === Array ? (v1.__fnct || (v1.__fnct = []), v1.__fnct[s1] ? A1 = v1.__fnct[s1] : (I1 = h1.o.x[s1] === void 0 ? h1.o.x[0] : h1.o.x[s1], R1 = h1.o.y[s1] === void 0 ? h1.o.y[0] : h1.o.y[s1], L1 = h1.i.x[s1] === void 0 ? h1.i.x[0] : h1.i.x[s1], V1 = h1.i.y[s1] === void 0 ? h1.i.y[0] : h1.i.y[s1], A1 = BezierFactory.getBezierEasing(I1, R1, L1, V1).get, v1.__fnct[s1] = A1)) : v1.__fnct ? A1 = v1.__fnct : (I1 = h1.o.x, R1 = h1.o.y, L1 = h1.i.x, V1 = h1.i.y, A1 = BezierFactory.getBezierEasing(I1, R1, L1, V1).get, h1.keyframeMetadata = A1), b1 = A1((t1 - o1) / (p1 - o1)))), l1 = g1.s || h1.e, G1 = h1.h === 1 ? h1.s[s1] : h1.s[s1] + (l1[s1] - h1.s[s1]) * b1, this.propType === "multidimensional" ? i1[s1] = G1 : i1 = G1;
            }
            return e1.lastIndex = a1, i1;
        }
        function slerp(t1, e1, r1) {
            var i1 = [], a1 = t1[0], s1 = t1[1], n1 = t1[2], u1 = t1[3], h1 = e1[0], g1 = e1[1], v1 = e1[2], E1 = e1[3], m1, b1, y1, d1, A1;
            return b1 = a1 * h1 + s1 * g1 + n1 * v1 + u1 * E1, b1 < 0 && (b1 = -b1, h1 = -h1, g1 = -g1, v1 = -v1, E1 = -E1), 1 - b1 > 1e-6 ? (m1 = Math.acos(b1), y1 = Math.sin(m1), d1 = Math.sin((1 - r1) * m1) / y1, A1 = Math.sin(r1 * m1) / y1) : (d1 = 1 - r1, A1 = r1), i1[0] = d1 * a1 + A1 * h1, i1[1] = d1 * s1 + A1 * g1, i1[2] = d1 * n1 + A1 * v1, i1[3] = d1 * u1 + A1 * E1, i1;
        }
        function quaternionToEuler(t1, e1) {
            var r1 = e1[0], i1 = e1[1], a1 = e1[2], s1 = e1[3], n1 = Math.atan2(2 * i1 * s1 - 2 * r1 * a1, 1 - 2 * i1 * i1 - 2 * a1 * a1), u1 = Math.asin(2 * r1 * i1 + 2 * a1 * s1), h1 = Math.atan2(2 * r1 * s1 - 2 * i1 * a1, 1 - 2 * r1 * r1 - 2 * a1 * a1);
            t1[0] = n1 / degToRads, t1[1] = u1 / degToRads, t1[2] = h1 / degToRads;
        }
        function createQuaternion(t1) {
            var e1 = t1[0] * degToRads, r1 = t1[1] * degToRads, i1 = t1[2] * degToRads, a1 = Math.cos(e1 / 2), s1 = Math.cos(r1 / 2), n1 = Math.cos(i1 / 2), u1 = Math.sin(e1 / 2), h1 = Math.sin(r1 / 2), g1 = Math.sin(i1 / 2), v1 = a1 * s1 * n1 - u1 * h1 * g1, E1 = u1 * h1 * n1 + a1 * s1 * g1, m1 = u1 * s1 * n1 + a1 * h1 * g1, b1 = a1 * h1 * n1 - u1 * s1 * g1;
            return [
                E1,
                m1,
                b1,
                v1
            ];
        }
        function getValueAtCurrentTime() {
            var t1 = this.comp.renderedFrame - this.offsetTime, e1 = this.keyframes[0].t - this.offsetTime, r1 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t1 === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r1 && t1 >= r1 || this._caching.lastFrame < e1 && t1 < e1))) {
                this._caching.lastFrame >= t1 && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var i1 = this.interpolateValue(t1, this._caching);
                this.pv = i1;
            }
            return this._caching.lastFrame = t1, this.pv;
        }
        function setVValue(t1) {
            var e1;
            if (this.propType === "unidimensional") e1 = t1 * this.mult, mathAbs(this.v - e1) > 1e-5 && (this.v = e1, this._mdf = !0);
            else for(var r1 = 0, i1 = this.v.length; r1 < i1;)e1 = t1[r1] * this.mult, mathAbs(this.v[r1] - e1) > 1e-5 && (this.v[r1] = e1, this._mdf = !0), r1 += 1;
        }
        function processEffectsSequence() {
            if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                if (this.lock) {
                    this.setVValue(this.pv);
                    return;
                }
                this.lock = !0, this._mdf = this._isFirstFrame;
                var t1, e1 = this.effectsSequence.length, r1 = this.kf ? this.pv : this.data.k;
                for(t1 = 0; t1 < e1; t1 += 1)r1 = this.effectsSequence[t1](r1);
                this.setVValue(r1), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
        }
        function addEffect(t1) {
            this.effectsSequence.push(t1), this.container.addDynamicProperty(this);
        }
        function ValueProperty(t1, e1, r1, i1) {
            this.propType = "unidimensional", this.mult = r1 || 1, this.data = e1, this.v = r1 ? e1.k * r1 : e1.k, this.pv = e1.k, this._mdf = !1, this.elem = t1, this.container = i1, this.comp = t1.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
        }
        function MultiDimensionalProperty(t1, e1, r1, i1) {
            this.propType = "multidimensional", this.mult = r1 || 1, this.data = e1, this._mdf = !1, this.elem = t1, this.container = i1, this.comp = t1.comp, this.k = !1, this.kf = !1, this.frameId = -1;
            var a1, s1 = e1.k.length;
            for(this.v = createTypedArray("float32", s1), this.pv = createTypedArray("float32", s1), this.vel = createTypedArray("float32", s1), a1 = 0; a1 < s1; a1 += 1)this.v[a1] = e1.k[a1] * this.mult, this.pv[a1] = e1.k[a1];
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
        }
        function KeyframedValueProperty(t1, e1, r1, i1) {
            this.propType = "unidimensional", this.keyframes = e1.k, this.keyframesMetadata = [], this.offsetTime = t1.data.st, this.frameId = -1, this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            }, this.k = !0, this.kf = !0, this.data = e1, this.mult = r1 || 1, this.elem = t1, this.container = i1, this.comp = t1.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [
                getValueAtCurrentTime.bind(this)
            ], this.addEffect = addEffect;
        }
        function KeyframedMultidimensionalProperty(t1, e1, r1, i1) {
            this.propType = "multidimensional";
            var a1, s1 = e1.k.length, n1, u1, h1, g1;
            for(a1 = 0; a1 < s1 - 1; a1 += 1)e1.k[a1].to && e1.k[a1].s && e1.k[a1 + 1] && e1.k[a1 + 1].s && (n1 = e1.k[a1].s, u1 = e1.k[a1 + 1].s, h1 = e1.k[a1].to, g1 = e1.k[a1].ti, (n1.length === 2 && !(n1[0] === u1[0] && n1[1] === u1[1]) && bez.pointOnLine2D(n1[0], n1[1], u1[0], u1[1], n1[0] + h1[0], n1[1] + h1[1]) && bez.pointOnLine2D(n1[0], n1[1], u1[0], u1[1], u1[0] + g1[0], u1[1] + g1[1]) || n1.length === 3 && !(n1[0] === u1[0] && n1[1] === u1[1] && n1[2] === u1[2]) && bez.pointOnLine3D(n1[0], n1[1], n1[2], u1[0], u1[1], u1[2], n1[0] + h1[0], n1[1] + h1[1], n1[2] + h1[2]) && bez.pointOnLine3D(n1[0], n1[1], n1[2], u1[0], u1[1], u1[2], u1[0] + g1[0], u1[1] + g1[1], u1[2] + g1[2])) && (e1.k[a1].to = null, e1.k[a1].ti = null), n1[0] === u1[0] && n1[1] === u1[1] && h1[0] === 0 && h1[1] === 0 && g1[0] === 0 && g1[1] === 0 && (n1.length === 2 || n1[2] === u1[2] && h1[2] === 0 && g1[2] === 0) && (e1.k[a1].to = null, e1.k[a1].ti = null));
            this.effectsSequence = [
                getValueAtCurrentTime.bind(this)
            ], this.data = e1, this.keyframes = e1.k, this.keyframesMetadata = [], this.offsetTime = t1.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r1 || 1, this.elem = t1, this.container = i1, this.comp = t1.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
            var v1 = e1.k[0].s.length;
            for(this.v = createTypedArray("float32", v1), this.pv = createTypedArray("float32", v1), a1 = 0; a1 < v1; a1 += 1)this.v[a1] = initFrame, this.pv[a1] = initFrame;
            this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray("float32", v1)
            }, this.addEffect = addEffect;
        }
        var PropertyFactory = function() {
            function t1(r1, i1, a1, s1, n1) {
                i1.sid && (i1 = r1.globalData.slotManager.getProp(i1));
                var u1;
                if (!i1.k.length) u1 = new ValueProperty(r1, i1, s1, n1);
                else if (typeof i1.k[0] == "number") u1 = new MultiDimensionalProperty(r1, i1, s1, n1);
                else switch(a1){
                    case 0:
                        u1 = new KeyframedValueProperty(r1, i1, s1, n1);
                        break;
                    case 1:
                        u1 = new KeyframedMultidimensionalProperty(r1, i1, s1, n1);
                        break;
                }
                return u1.effectsSequence.length && n1.addDynamicProperty(u1), u1;
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
            for(var r1 = 0; r1 < e1;)this.v[r1] = pointPool.newElement(), this.o[r1] = pointPool.newElement(), this.i[r1] = pointPool.newElement(), r1 += 1;
        }, ShapePath.prototype.setLength = function(t1) {
            for(; this._maxLength < t1;)this.doubleArrayLength();
            this._length = t1;
        }, ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
        }, ShapePath.prototype.setXYAt = function(t1, e1, r1, i1, a1) {
            var s1;
            switch(this._length = Math.max(this._length, i1 + 1), this._length >= this._maxLength && this.doubleArrayLength(), r1){
                case "v":
                    s1 = this.v;
                    break;
                case "i":
                    s1 = this.i;
                    break;
                case "o":
                    s1 = this.o;
                    break;
                default:
                    s1 = [];
                    break;
            }
            (!s1[i1] || s1[i1] && !a1) && (s1[i1] = pointPool.newElement()), s1[i1][0] = t1, s1[i1][1] = e1;
        }, ShapePath.prototype.setTripleAt = function(t1, e1, r1, i1, a1, s1, n1, u1) {
            this.setXYAt(t1, e1, "v", n1, u1), this.setXYAt(r1, i1, "o", n1, u1), this.setXYAt(a1, s1, "i", n1, u1);
        }, ShapePath.prototype.reverse = function() {
            var t1 = new ShapePath;
            t1.setPathData(this.c, this._length);
            var e1 = this.v, r1 = this.o, i1 = this.i, a1 = 0;
            this.c && (t1.setTripleAt(e1[0][0], e1[0][1], i1[0][0], i1[0][1], r1[0][0], r1[0][1], 0, !1), a1 = 1);
            var s1 = this._length - 1, n1 = this._length, u1;
            for(u1 = a1; u1 < n1; u1 += 1)t1.setTripleAt(e1[s1][0], e1[s1][1], i1[s1][0], i1[s1][1], r1[s1][0], r1[s1][1], u1, !1), s1 -= 1;
            return t1;
        }, ShapePath.prototype.length = function() {
            return this._length;
        };
        var shapePool = function() {
            function t1() {
                return new ShapePath;
            }
            function e1(a1) {
                var s1 = a1._length, n1;
                for(n1 = 0; n1 < s1; n1 += 1)pointPool.release(a1.v[n1]), pointPool.release(a1.i[n1]), pointPool.release(a1.o[n1]), a1.v[n1] = null, a1.i[n1] = null, a1.o[n1] = null;
                a1._length = 0, a1.c = !1;
            }
            function r1(a1) {
                var s1 = i1.newElement(), n1, u1 = a1._length === void 0 ? a1.v.length : a1._length;
                for(s1.setLength(u1), s1.c = a1.c, n1 = 0; n1 < u1; n1 += 1)s1.setTripleAt(a1.v[n1][0], a1.v[n1][1], a1.o[n1][0], a1.o[n1][1], a1.i[n1][0], a1.i[n1][1], n1);
                return s1;
            }
            var i1 = poolFactory(4, t1, e1);
            return i1.clone = r1, i1;
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
                newShapeCollection: a1,
                release: s1
            }, e1 = 0, r1 = 4, i1 = createSizedArray(r1);
            function a1() {
                var n1;
                return e1 ? (e1 -= 1, n1 = i1[e1]) : n1 = new ShapeCollection, n1;
            }
            function s1(n1) {
                var u1, h1 = n1._length;
                for(u1 = 0; u1 < h1; u1 += 1)shapePool.release(n1.shapes[u1]);
                n1._length = 0, e1 === r1 && (i1 = pooling.double(i1), r1 *= 2), i1[e1] = n1, e1 += 1;
            }
            return t1;
        }(), ShapePropertyFactory = function() {
            var t1 = -999999;
            function e1(p1, o1, l1) {
                var c1 = l1.lastIndex, P1, M1, T1, F1, I1, R1, L1, V1, G1, C1 = this.keyframes;
                if (p1 < C1[0].t - this.offsetTime) P1 = C1[0].s[0], T1 = !0, c1 = 0;
                else if (p1 >= C1[C1.length - 1].t - this.offsetTime) P1 = C1[C1.length - 1].s ? C1[C1.length - 1].s[0] : C1[C1.length - 2].e[0], T1 = !0;
                else {
                    for(var w1 = c1, _1 = C1.length - 1, x1 = !0, f1, S1, D1; x1 && (f1 = C1[w1], S1 = C1[w1 + 1], !(S1.t - this.offsetTime > p1));)w1 < _1 - 1 ? w1 += 1 : x1 = !1;
                    if (D1 = this.keyframesMetadata[w1] || {}, T1 = f1.h === 1, c1 = w1, !T1) {
                        if (p1 >= S1.t - this.offsetTime) V1 = 1;
                        else if (p1 < f1.t - this.offsetTime) V1 = 0;
                        else {
                            var k1;
                            D1.__fnct ? k1 = D1.__fnct : (k1 = BezierFactory.getBezierEasing(f1.o.x, f1.o.y, f1.i.x, f1.i.y).get, D1.__fnct = k1), V1 = k1((p1 - (f1.t - this.offsetTime)) / (S1.t - this.offsetTime - (f1.t - this.offsetTime)));
                        }
                        M1 = S1.s ? S1.s[0] : f1.e[0];
                    }
                    P1 = f1.s[0];
                }
                for(R1 = o1._length, L1 = P1.i[0].length, l1.lastIndex = c1, F1 = 0; F1 < R1; F1 += 1)for(I1 = 0; I1 < L1; I1 += 1)G1 = T1 ? P1.i[F1][I1] : P1.i[F1][I1] + (M1.i[F1][I1] - P1.i[F1][I1]) * V1, o1.i[F1][I1] = G1, G1 = T1 ? P1.o[F1][I1] : P1.o[F1][I1] + (M1.o[F1][I1] - P1.o[F1][I1]) * V1, o1.o[F1][I1] = G1, G1 = T1 ? P1.v[F1][I1] : P1.v[F1][I1] + (M1.v[F1][I1] - P1.v[F1][I1]) * V1, o1.v[F1][I1] = G1;
            }
            function r1() {
                var p1 = this.comp.renderedFrame - this.offsetTime, o1 = this.keyframes[0].t - this.offsetTime, l1 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, c1 = this._caching.lastFrame;
                return c1 !== t1 && (c1 < o1 && p1 < o1 || c1 > l1 && p1 > l1) || (this._caching.lastIndex = c1 < p1 ? this._caching.lastIndex : 0, this.interpolateShape(p1, this.pv, this._caching)), this._caching.lastFrame = p1, this.pv;
            }
            function i1() {
                this.paths = this.localShapeCollection;
            }
            function a1(p1, o1) {
                if (p1._length !== o1._length || p1.c !== o1.c) return !1;
                var l1, c1 = p1._length;
                for(l1 = 0; l1 < c1; l1 += 1)if (p1.v[l1][0] !== o1.v[l1][0] || p1.v[l1][1] !== o1.v[l1][1] || p1.o[l1][0] !== o1.o[l1][0] || p1.o[l1][1] !== o1.o[l1][1] || p1.i[l1][0] !== o1.i[l1][0] || p1.i[l1][1] !== o1.i[l1][1]) return !1;
                return !0;
            }
            function s1(p1) {
                a1(this.v, p1) || (this.v = shapePool.clone(p1), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
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
                    var o1, l1 = this.effectsSequence.length;
                    for(o1 = 0; o1 < l1; o1 += 1)p1 = this.effectsSequence[o1](p1);
                    this.setVValue(p1), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                }
            }
            function u1(p1, o1, l1) {
                this.propType = "shape", this.comp = p1.comp, this.container = p1, this.elem = p1, this.data = o1, this.k = !1, this.kf = !1, this._mdf = !1;
                var c1 = l1 === 3 ? o1.pt.k : o1.ks.k;
                this.v = shapePool.clone(c1), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i1, this.effectsSequence = [];
            }
            function h1(p1) {
                this.effectsSequence.push(p1), this.container.addDynamicProperty(this);
            }
            u1.prototype.interpolateShape = e1, u1.prototype.getValue = n1, u1.prototype.setVValue = s1, u1.prototype.addEffect = h1;
            function g1(p1, o1, l1) {
                this.propType = "shape", this.comp = p1.comp, this.elem = p1, this.container = p1, this.offsetTime = p1.data.st, this.keyframes = l1 === 3 ? o1.pt.k : o1.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                var c1 = this.keyframes[0].s[0].i.length;
                this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, c1), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t1, this.reset = i1, this._caching = {
                    lastFrame: t1,
                    lastIndex: 0
                }, this.effectsSequence = [
                    r1.bind(this)
                ];
            }
            g1.prototype.getValue = n1, g1.prototype.interpolateShape = e1, g1.prototype.setVValue = s1, g1.prototype.addEffect = h1;
            var v1 = function() {
                var p1 = roundCorner;
                function o1(l1, c1) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = c1.d, this.elem = l1, this.comp = l1.comp, this.frameId = -1, this.initDynamicPropertyContainer(l1), this.p = PropertyFactory.getProp(l1, c1.p, 1, 0, this), this.s = PropertyFactory.getProp(l1, c1.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
                }
                return o1.prototype = {
                    reset: i1,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function() {
                        var l1 = this.p.v[0], c1 = this.p.v[1], P1 = this.s.v[0] / 2, M1 = this.s.v[1] / 2, T1 = this.d !== 3, F1 = this.v;
                        F1.v[0][0] = l1, F1.v[0][1] = c1 - M1, F1.v[1][0] = T1 ? l1 + P1 : l1 - P1, F1.v[1][1] = c1, F1.v[2][0] = l1, F1.v[2][1] = c1 + M1, F1.v[3][0] = T1 ? l1 - P1 : l1 + P1, F1.v[3][1] = c1, F1.i[0][0] = T1 ? l1 - P1 * p1 : l1 + P1 * p1, F1.i[0][1] = c1 - M1, F1.i[1][0] = T1 ? l1 + P1 : l1 - P1, F1.i[1][1] = c1 - M1 * p1, F1.i[2][0] = T1 ? l1 + P1 * p1 : l1 - P1 * p1, F1.i[2][1] = c1 + M1, F1.i[3][0] = T1 ? l1 - P1 : l1 + P1, F1.i[3][1] = c1 + M1 * p1, F1.o[0][0] = T1 ? l1 + P1 * p1 : l1 - P1 * p1, F1.o[0][1] = c1 - M1, F1.o[1][0] = T1 ? l1 + P1 : l1 - P1, F1.o[1][1] = c1 + M1 * p1, F1.o[2][0] = T1 ? l1 - P1 * p1 : l1 + P1 * p1, F1.o[2][1] = c1 + M1, F1.o[3][0] = T1 ? l1 - P1 : l1 + P1, F1.o[3][1] = c1 - M1 * p1;
                    }
                }, extendPrototype([
                    DynamicPropertyContainer
                ], o1), o1;
            }(), E1 = function() {
                function p1(o1, l1) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = o1, this.comp = o1.comp, this.data = l1, this.frameId = -1, this.d = l1.d, this.initDynamicPropertyContainer(o1), l1.sy === 1 ? (this.ir = PropertyFactory.getProp(o1, l1.ir, 0, 0, this), this.is = PropertyFactory.getProp(o1, l1.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(o1, l1.pt, 0, 0, this), this.p = PropertyFactory.getProp(o1, l1.p, 1, 0, this), this.r = PropertyFactory.getProp(o1, l1.r, 0, degToRads, this), this.or = PropertyFactory.getProp(o1, l1.or, 0, 0, this), this.os = PropertyFactory.getProp(o1, l1.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
                }
                return p1.prototype = {
                    reset: i1,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function() {
                        var o1 = Math.floor(this.pt.v) * 2, l1 = Math.PI * 2 / o1, c1 = !0, P1 = this.or.v, M1 = this.ir.v, T1 = this.os.v, F1 = this.is.v, I1 = 2 * Math.PI * P1 / (o1 * 2), R1 = 2 * Math.PI * M1 / (o1 * 2), L1, V1, G1, C1, w1 = -Math.PI / 2;
                        w1 += this.r.v;
                        var _1 = this.data.d === 3 ? -1 : 1;
                        for(this.v._length = 0, L1 = 0; L1 < o1; L1 += 1){
                            V1 = c1 ? P1 : M1, G1 = c1 ? T1 : F1, C1 = c1 ? I1 : R1;
                            var x1 = V1 * Math.cos(w1), f1 = V1 * Math.sin(w1), S1 = x1 === 0 && f1 === 0 ? 0 : f1 / Math.sqrt(x1 * x1 + f1 * f1), D1 = x1 === 0 && f1 === 0 ? 0 : -x1 / Math.sqrt(x1 * x1 + f1 * f1);
                            x1 += +this.p.v[0], f1 += +this.p.v[1], this.v.setTripleAt(x1, f1, x1 - S1 * C1 * G1 * _1, f1 - D1 * C1 * G1 * _1, x1 + S1 * C1 * G1 * _1, f1 + D1 * C1 * G1 * _1, L1, !0), c1 = !c1, w1 += l1 * _1;
                        }
                    },
                    convertPolygonToPath: function() {
                        var o1 = Math.floor(this.pt.v), l1 = Math.PI * 2 / o1, c1 = this.or.v, P1 = this.os.v, M1 = 2 * Math.PI * c1 / (o1 * 4), T1, F1 = -Math.PI * .5, I1 = this.data.d === 3 ? -1 : 1;
                        for(F1 += this.r.v, this.v._length = 0, T1 = 0; T1 < o1; T1 += 1){
                            var R1 = c1 * Math.cos(F1), L1 = c1 * Math.sin(F1), V1 = R1 === 0 && L1 === 0 ? 0 : L1 / Math.sqrt(R1 * R1 + L1 * L1), G1 = R1 === 0 && L1 === 0 ? 0 : -R1 / Math.sqrt(R1 * R1 + L1 * L1);
                            R1 += +this.p.v[0], L1 += +this.p.v[1], this.v.setTripleAt(R1, L1, R1 - V1 * M1 * P1 * I1, L1 - G1 * M1 * P1 * I1, R1 + V1 * M1 * P1 * I1, L1 + G1 * M1 * P1 * I1, T1, !0), F1 += l1 * I1;
                        }
                        this.paths.length = 0, this.paths[0] = this.v;
                    }
                }, extendPrototype([
                    DynamicPropertyContainer
                ], p1), p1;
            }(), m1 = function() {
                function p1(o1, l1) {
                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = o1, this.comp = o1.comp, this.frameId = -1, this.d = l1.d, this.initDynamicPropertyContainer(o1), this.p = PropertyFactory.getProp(o1, l1.p, 1, 0, this), this.s = PropertyFactory.getProp(o1, l1.s, 1, 0, this), this.r = PropertyFactory.getProp(o1, l1.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
                }
                return p1.prototype = {
                    convertRectToPath: function() {
                        var o1 = this.p.v[0], l1 = this.p.v[1], c1 = this.s.v[0] / 2, P1 = this.s.v[1] / 2, M1 = bmMin(c1, P1, this.r.v), T1 = M1 * (1 - roundCorner);
                        this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(o1 + c1, l1 - P1 + M1, o1 + c1, l1 - P1 + M1, o1 + c1, l1 - P1 + T1, 0, !0), this.v.setTripleAt(o1 + c1, l1 + P1 - M1, o1 + c1, l1 + P1 - T1, o1 + c1, l1 + P1 - M1, 1, !0), M1 !== 0 ? (this.v.setTripleAt(o1 + c1 - M1, l1 + P1, o1 + c1 - M1, l1 + P1, o1 + c1 - T1, l1 + P1, 2, !0), this.v.setTripleAt(o1 - c1 + M1, l1 + P1, o1 - c1 + T1, l1 + P1, o1 - c1 + M1, l1 + P1, 3, !0), this.v.setTripleAt(o1 - c1, l1 + P1 - M1, o1 - c1, l1 + P1 - M1, o1 - c1, l1 + P1 - T1, 4, !0), this.v.setTripleAt(o1 - c1, l1 - P1 + M1, o1 - c1, l1 - P1 + T1, o1 - c1, l1 - P1 + M1, 5, !0), this.v.setTripleAt(o1 - c1 + M1, l1 - P1, o1 - c1 + M1, l1 - P1, o1 - c1 + T1, l1 - P1, 6, !0), this.v.setTripleAt(o1 + c1 - M1, l1 - P1, o1 + c1 - T1, l1 - P1, o1 + c1 - M1, l1 - P1, 7, !0)) : (this.v.setTripleAt(o1 - c1, l1 + P1, o1 - c1 + T1, l1 + P1, o1 - c1, l1 + P1, 2), this.v.setTripleAt(o1 - c1, l1 - P1, o1 - c1, l1 - P1 + T1, o1 - c1, l1 - P1, 3))) : (this.v.setTripleAt(o1 + c1, l1 - P1 + M1, o1 + c1, l1 - P1 + T1, o1 + c1, l1 - P1 + M1, 0, !0), M1 !== 0 ? (this.v.setTripleAt(o1 + c1 - M1, l1 - P1, o1 + c1 - M1, l1 - P1, o1 + c1 - T1, l1 - P1, 1, !0), this.v.setTripleAt(o1 - c1 + M1, l1 - P1, o1 - c1 + T1, l1 - P1, o1 - c1 + M1, l1 - P1, 2, !0), this.v.setTripleAt(o1 - c1, l1 - P1 + M1, o1 - c1, l1 - P1 + M1, o1 - c1, l1 - P1 + T1, 3, !0), this.v.setTripleAt(o1 - c1, l1 + P1 - M1, o1 - c1, l1 + P1 - T1, o1 - c1, l1 + P1 - M1, 4, !0), this.v.setTripleAt(o1 - c1 + M1, l1 + P1, o1 - c1 + M1, l1 + P1, o1 - c1 + T1, l1 + P1, 5, !0), this.v.setTripleAt(o1 + c1 - M1, l1 + P1, o1 + c1 - T1, l1 + P1, o1 + c1 - M1, l1 + P1, 6, !0), this.v.setTripleAt(o1 + c1, l1 + P1 - M1, o1 + c1, l1 + P1 - M1, o1 + c1, l1 + P1 - T1, 7, !0)) : (this.v.setTripleAt(o1 - c1, l1 - P1, o1 - c1 + T1, l1 - P1, o1 - c1, l1 - P1, 1, !0), this.v.setTripleAt(o1 - c1, l1 + P1, o1 - c1, l1 + P1 - T1, o1 - c1, l1 + P1, 2, !0), this.v.setTripleAt(o1 + c1, l1 + P1, o1 + c1 - T1, l1 + P1, o1 + c1, l1 + P1, 3, !0)));
                    },
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                    },
                    reset: i1
                }, extendPrototype([
                    DynamicPropertyContainer
                ], p1), p1;
            }();
            function b1(p1, o1, l1) {
                var c1;
                if (l1 === 3 || l1 === 4) {
                    var P1 = l1 === 3 ? o1.pt : o1.ks, M1 = P1.k;
                    M1.length ? c1 = new g1(p1, o1, l1) : c1 = new u1(p1, o1, l1);
                } else l1 === 5 ? c1 = new m1(p1, o1) : l1 === 6 ? c1 = new v1(p1, o1) : l1 === 7 && (c1 = new E1(p1, o1));
                return c1.k && p1.addDynamicProperty(c1), c1;
            }
            function y1() {
                return u1;
            }
            function d1() {
                return g1;
            }
            var A1 = {};
            return A1.getShapeProp = b1, A1.getConstructorFunction = y1, A1.getKeyframedConstructorFunction = d1, A1;
        }(), Matrix = function() {
            var t1 = Math.cos, e1 = Math.sin, r1 = Math.tan, i1 = Math.round;
            function a1() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
            }
            function s1(f1) {
                if (f1 === 0) return this;
                var S1 = t1(f1), D1 = e1(f1);
                return this._t(S1, -D1, 0, 0, D1, S1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function n1(f1) {
                if (f1 === 0) return this;
                var S1 = t1(f1), D1 = e1(f1);
                return this._t(1, 0, 0, 0, 0, S1, -D1, 0, 0, D1, S1, 0, 0, 0, 0, 1);
            }
            function u1(f1) {
                if (f1 === 0) return this;
                var S1 = t1(f1), D1 = e1(f1);
                return this._t(S1, 0, D1, 0, 0, 1, 0, 0, -D1, 0, S1, 0, 0, 0, 0, 1);
            }
            function h1(f1) {
                if (f1 === 0) return this;
                var S1 = t1(f1), D1 = e1(f1);
                return this._t(S1, -D1, 0, 0, D1, S1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function g1(f1, S1) {
                return this._t(1, S1, f1, 1, 0, 0);
            }
            function v1(f1, S1) {
                return this.shear(r1(f1), r1(S1));
            }
            function E1(f1, S1) {
                var D1 = t1(S1), k1 = e1(S1);
                return this._t(D1, k1, 0, 0, -k1, D1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r1(f1), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(D1, -k1, 0, 0, k1, D1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function m1(f1, S1, D1) {
                return !D1 && D1 !== 0 && (D1 = 1), f1 === 1 && S1 === 1 && D1 === 1 ? this : this._t(f1, 0, 0, 0, 0, S1, 0, 0, 0, 0, D1, 0, 0, 0, 0, 1);
            }
            function b1(f1, S1, D1, k1, O1, B1, j1, N1, H1, $1, X1, Q1, Z1, W1, K1, q1) {
                return this.props[0] = f1, this.props[1] = S1, this.props[2] = D1, this.props[3] = k1, this.props[4] = O1, this.props[5] = B1, this.props[6] = j1, this.props[7] = N1, this.props[8] = H1, this.props[9] = $1, this.props[10] = X1, this.props[11] = Q1, this.props[12] = Z1, this.props[13] = W1, this.props[14] = K1, this.props[15] = q1, this;
            }
            function y1(f1, S1, D1) {
                return D1 = D1 || 0, f1 !== 0 || S1 !== 0 || D1 !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, f1, S1, D1, 1) : this;
            }
            function d1(f1, S1, D1, k1, O1, B1, j1, N1, H1, $1, X1, Q1, Z1, W1, K1, q1) {
                var z1 = this.props;
                if (f1 === 1 && S1 === 0 && D1 === 0 && k1 === 0 && O1 === 0 && B1 === 1 && j1 === 0 && N1 === 0 && H1 === 0 && $1 === 0 && X1 === 1 && Q1 === 0) return z1[12] = z1[12] * f1 + z1[15] * Z1, z1[13] = z1[13] * B1 + z1[15] * W1, z1[14] = z1[14] * X1 + z1[15] * K1, z1[15] *= q1, this._identityCalculated = !1, this;
                var et1 = z1[0], st1 = z1[1], rt1 = z1[2], tt1 = z1[3], it1 = z1[4], at1 = z1[5], Y1 = z1[6], nt1 = z1[7], ot1 = z1[8], J1 = z1[9], ht1 = z1[10], U1 = z1[11], lt1 = z1[12], pt1 = z1[13], ft1 = z1[14], mt1 = z1[15];
                return z1[0] = et1 * f1 + st1 * O1 + rt1 * H1 + tt1 * Z1, z1[1] = et1 * S1 + st1 * B1 + rt1 * $1 + tt1 * W1, z1[2] = et1 * D1 + st1 * j1 + rt1 * X1 + tt1 * K1, z1[3] = et1 * k1 + st1 * N1 + rt1 * Q1 + tt1 * q1, z1[4] = it1 * f1 + at1 * O1 + Y1 * H1 + nt1 * Z1, z1[5] = it1 * S1 + at1 * B1 + Y1 * $1 + nt1 * W1, z1[6] = it1 * D1 + at1 * j1 + Y1 * X1 + nt1 * K1, z1[7] = it1 * k1 + at1 * N1 + Y1 * Q1 + nt1 * q1, z1[8] = ot1 * f1 + J1 * O1 + ht1 * H1 + U1 * Z1, z1[9] = ot1 * S1 + J1 * B1 + ht1 * $1 + U1 * W1, z1[10] = ot1 * D1 + J1 * j1 + ht1 * X1 + U1 * K1, z1[11] = ot1 * k1 + J1 * N1 + ht1 * Q1 + U1 * q1, z1[12] = lt1 * f1 + pt1 * O1 + ft1 * H1 + mt1 * Z1, z1[13] = lt1 * S1 + pt1 * B1 + ft1 * $1 + mt1 * W1, z1[14] = lt1 * D1 + pt1 * j1 + ft1 * X1 + mt1 * K1, z1[15] = lt1 * k1 + pt1 * N1 + ft1 * Q1 + mt1 * q1, this._identityCalculated = !1, this;
            }
            function A1(f1) {
                var S1 = f1.props;
                return this.transform(S1[0], S1[1], S1[2], S1[3], S1[4], S1[5], S1[6], S1[7], S1[8], S1[9], S1[10], S1[11], S1[12], S1[13], S1[14], S1[15]);
            }
            function p1() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
            }
            function o1(f1) {
                for(var S1 = 0; S1 < 16;){
                    if (f1.props[S1] !== this.props[S1]) return !1;
                    S1 += 1;
                }
                return !0;
            }
            function l1(f1) {
                var S1;
                for(S1 = 0; S1 < 16; S1 += 1)f1.props[S1] = this.props[S1];
                return f1;
            }
            function c1(f1) {
                var S1;
                for(S1 = 0; S1 < 16; S1 += 1)this.props[S1] = f1[S1];
            }
            function P1(f1, S1, D1) {
                return {
                    x: f1 * this.props[0] + S1 * this.props[4] + D1 * this.props[8] + this.props[12],
                    y: f1 * this.props[1] + S1 * this.props[5] + D1 * this.props[9] + this.props[13],
                    z: f1 * this.props[2] + S1 * this.props[6] + D1 * this.props[10] + this.props[14]
                };
            }
            function M1(f1, S1, D1) {
                return f1 * this.props[0] + S1 * this.props[4] + D1 * this.props[8] + this.props[12];
            }
            function T1(f1, S1, D1) {
                return f1 * this.props[1] + S1 * this.props[5] + D1 * this.props[9] + this.props[13];
            }
            function F1(f1, S1, D1) {
                return f1 * this.props[2] + S1 * this.props[6] + D1 * this.props[10] + this.props[14];
            }
            function I1() {
                var f1 = this.props[0] * this.props[5] - this.props[1] * this.props[4], S1 = this.props[5] / f1, D1 = -this.props[1] / f1, k1 = -this.props[4] / f1, O1 = this.props[0] / f1, B1 = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / f1, j1 = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / f1, N1 = new Matrix;
                return N1.props[0] = S1, N1.props[1] = D1, N1.props[4] = k1, N1.props[5] = O1, N1.props[12] = B1, N1.props[13] = j1, N1;
            }
            function R1(f1) {
                var S1 = this.getInverseMatrix();
                return S1.applyToPointArray(f1[0], f1[1], f1[2] || 0);
            }
            function L1(f1) {
                var S1, D1 = f1.length, k1 = [];
                for(S1 = 0; S1 < D1; S1 += 1)k1[S1] = R1(f1[S1]);
                return k1;
            }
            function V1(f1, S1, D1) {
                var k1 = createTypedArray("float32", 6);
                if (this.isIdentity()) k1[0] = f1[0], k1[1] = f1[1], k1[2] = S1[0], k1[3] = S1[1], k1[4] = D1[0], k1[5] = D1[1];
                else {
                    var O1 = this.props[0], B1 = this.props[1], j1 = this.props[4], N1 = this.props[5], H1 = this.props[12], $1 = this.props[13];
                    k1[0] = f1[0] * O1 + f1[1] * j1 + H1, k1[1] = f1[0] * B1 + f1[1] * N1 + $1, k1[2] = S1[0] * O1 + S1[1] * j1 + H1, k1[3] = S1[0] * B1 + S1[1] * N1 + $1, k1[4] = D1[0] * O1 + D1[1] * j1 + H1, k1[5] = D1[0] * B1 + D1[1] * N1 + $1;
                }
                return k1;
            }
            function G1(f1, S1, D1) {
                var k1;
                return this.isIdentity() ? k1 = [
                    f1,
                    S1,
                    D1
                ] : k1 = [
                    f1 * this.props[0] + S1 * this.props[4] + D1 * this.props[8] + this.props[12],
                    f1 * this.props[1] + S1 * this.props[5] + D1 * this.props[9] + this.props[13],
                    f1 * this.props[2] + S1 * this.props[6] + D1 * this.props[10] + this.props[14]
                ], k1;
            }
            function C1(f1, S1) {
                if (this.isIdentity()) return f1 + "," + S1;
                var D1 = this.props;
                return Math.round((f1 * D1[0] + S1 * D1[4] + D1[12]) * 100) / 100 + "," + Math.round((f1 * D1[1] + S1 * D1[5] + D1[13]) * 100) / 100;
            }
            function w1() {
                for(var f1 = 0, S1 = this.props, D1 = "matrix3d(", k1 = 1e4; f1 < 16;)D1 += i1(S1[f1] * k1) / k1, D1 += f1 === 15 ? ")" : ",", f1 += 1;
                return D1;
            }
            function _1(f1) {
                var S1 = 1e4;
                return f1 < 1e-6 && f1 > 0 || f1 > -0.000001 && f1 < 0 ? i1(f1 * S1) / S1 : f1;
            }
            function x1() {
                var f1 = this.props, S1 = _1(f1[0]), D1 = _1(f1[1]), k1 = _1(f1[4]), O1 = _1(f1[5]), B1 = _1(f1[12]), j1 = _1(f1[13]);
                return "matrix(" + S1 + "," + D1 + "," + k1 + "," + O1 + "," + B1 + "," + j1 + ")";
            }
            return function() {
                this.reset = a1, this.rotate = s1, this.rotateX = n1, this.rotateY = u1, this.rotateZ = h1, this.skew = v1, this.skewFromAxis = E1, this.shear = g1, this.scale = m1, this.setTransform = b1, this.translate = y1, this.transform = d1, this.multiply = A1, this.applyToPoint = P1, this.applyToX = M1, this.applyToY = T1, this.applyToZ = F1, this.applyToPointArray = G1, this.applyToTriplePoints = V1, this.applyToPointStringified = C1, this.toCSS = w1, this.to2dCSS = x1, this.clone = l1, this.cloneFromProps = c1, this.equals = o1, this.inversePoints = L1, this.inversePoint = R1, this.getInverseMatrix = I1, this._t = this.transform, this.isIdentity = p1, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
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
            for(var e1 = queryString.split("&"), r1 = 0; r1 < e1.length; r1 += 1){
                var i1 = e1[r1].split("=");
                if (decodeURIComponent(i1[0]) == t1) return decodeURIComponent(i1[1]);
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
            t1.registerModifier = r1, t1.getModifier = i1;
            function r1(a1, s1) {
                e1[a1] || (e1[a1] = s1);
            }
            function i1(a1, s1, n1) {
                return new e1[a1](s1, n1);
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
        }, TrimModifier.prototype.calculateShapeEdges = function(t1, e1, r1, i1, a1) {
            var s1 = [];
            e1 <= 1 ? s1.push({
                s: t1,
                e: e1
            }) : t1 >= 1 ? s1.push({
                s: t1 - 1,
                e: e1 - 1
            }) : (s1.push({
                s: t1,
                e: 1
            }), s1.push({
                s: 0,
                e: e1 - 1
            }));
            var n1 = [], u1, h1 = s1.length, g1;
            for(u1 = 0; u1 < h1; u1 += 1)if (g1 = s1[u1], !(g1.e * a1 < i1 || g1.s * a1 > i1 + r1)) {
                var v1, E1;
                g1.s * a1 <= i1 ? v1 = 0 : v1 = (g1.s * a1 - i1) / r1, g1.e * a1 >= i1 + r1 ? E1 = 1 : E1 = (g1.e * a1 - i1) / r1, n1.push([
                    v1,
                    E1
                ]);
            }
            return n1.length || n1.push([
                0,
                0
            ]), n1;
        }, TrimModifier.prototype.releasePathsData = function(t1) {
            var e1, r1 = t1.length;
            for(e1 = 0; e1 < r1; e1 += 1)segmentsLengthPool.release(t1[e1]);
            return t1.length = 0, t1;
        }, TrimModifier.prototype.processShapes = function(t1) {
            var e1, r1;
            if (this._mdf || t1) {
                var i1 = this.o.v % 360 / 360;
                if (i1 < 0 && (i1 += 1), this.s.v > 1 ? e1 = 1 + i1 : this.s.v < 0 ? e1 = 0 + i1 : e1 = this.s.v + i1, this.e.v > 1 ? r1 = 1 + i1 : this.e.v < 0 ? r1 = 0 + i1 : r1 = this.e.v + i1, e1 > r1) {
                    var a1 = e1;
                    e1 = r1, r1 = a1;
                }
                e1 = Math.round(e1 * 1e4) * 1e-4, r1 = Math.round(r1 * 1e4) * 1e-4, this.sValue = e1, this.eValue = r1;
            } else e1 = this.sValue, r1 = this.eValue;
            var s1, n1, u1 = this.shapes.length, h1, g1, v1, E1, m1, b1 = 0;
            if (r1 === e1) for(n1 = 0; n1 < u1; n1 += 1)this.shapes[n1].localShapeCollection.releaseShapes(), this.shapes[n1].shape._mdf = !0, this.shapes[n1].shape.paths = this.shapes[n1].localShapeCollection, this._mdf && (this.shapes[n1].pathsData.length = 0);
            else if (r1 === 1 && e1 === 0 || r1 === 0 && e1 === 1) {
                if (this._mdf) for(n1 = 0; n1 < u1; n1 += 1)this.shapes[n1].pathsData.length = 0, this.shapes[n1].shape._mdf = !0;
            } else {
                var y1 = [], d1, A1;
                for(n1 = 0; n1 < u1; n1 += 1)if (d1 = this.shapes[n1], !d1.shape._mdf && !this._mdf && !t1 && this.m !== 2) d1.shape.paths = d1.localShapeCollection;
                else {
                    if (s1 = d1.shape.paths, g1 = s1._length, m1 = 0, !d1.shape._mdf && d1.pathsData.length) m1 = d1.totalShapeLength;
                    else {
                        for(v1 = this.releasePathsData(d1.pathsData), h1 = 0; h1 < g1; h1 += 1)E1 = bez.getSegmentsLength(s1.shapes[h1]), v1.push(E1), m1 += E1.totalLength;
                        d1.totalShapeLength = m1, d1.pathsData = v1;
                    }
                    b1 += m1, d1.shape._mdf = !0;
                }
                var p1 = e1, o1 = r1, l1 = 0, c1;
                for(n1 = u1 - 1; n1 >= 0; n1 -= 1)if (d1 = this.shapes[n1], d1.shape._mdf) {
                    for(A1 = d1.localShapeCollection, A1.releaseShapes(), this.m === 2 && u1 > 1 ? (c1 = this.calculateShapeEdges(e1, r1, d1.totalShapeLength, l1, b1), l1 += d1.totalShapeLength) : c1 = [
                        [
                            p1,
                            o1
                        ]
                    ], g1 = c1.length, h1 = 0; h1 < g1; h1 += 1){
                        p1 = c1[h1][0], o1 = c1[h1][1], y1.length = 0, o1 <= 1 ? y1.push({
                            s: d1.totalShapeLength * p1,
                            e: d1.totalShapeLength * o1
                        }) : p1 >= 1 ? y1.push({
                            s: d1.totalShapeLength * (p1 - 1),
                            e: d1.totalShapeLength * (o1 - 1)
                        }) : (y1.push({
                            s: d1.totalShapeLength * p1,
                            e: d1.totalShapeLength
                        }), y1.push({
                            s: 0,
                            e: d1.totalShapeLength * (o1 - 1)
                        }));
                        var P1 = this.addShapes(d1, y1[0]);
                        if (y1[0].s !== y1[0].e) {
                            if (y1.length > 1) {
                                var M1 = d1.shape.paths.shapes[d1.shape.paths._length - 1];
                                if (M1.c) {
                                    var T1 = P1.pop();
                                    this.addPaths(P1, A1), P1 = this.addShapes(d1, y1[1], T1);
                                } else this.addPaths(P1, A1), P1 = this.addShapes(d1, y1[1]);
                            }
                            this.addPaths(P1, A1);
                        }
                    }
                    d1.shape.paths = A1;
                }
            }
        }, TrimModifier.prototype.addPaths = function(t1, e1) {
            var r1, i1 = t1.length;
            for(r1 = 0; r1 < i1; r1 += 1)e1.addShape(t1[r1]);
        }, TrimModifier.prototype.addSegment = function(t1, e1, r1, i1, a1, s1, n1) {
            a1.setXYAt(e1[0], e1[1], "o", s1), a1.setXYAt(r1[0], r1[1], "i", s1 + 1), n1 && a1.setXYAt(t1[0], t1[1], "v", s1), a1.setXYAt(i1[0], i1[1], "v", s1 + 1);
        }, TrimModifier.prototype.addSegmentFromArray = function(t1, e1, r1, i1) {
            e1.setXYAt(t1[1], t1[5], "o", r1), e1.setXYAt(t1[2], t1[6], "i", r1 + 1), i1 && e1.setXYAt(t1[0], t1[4], "v", r1), e1.setXYAt(t1[3], t1[7], "v", r1 + 1);
        }, TrimModifier.prototype.addShapes = function(t1, e1, r1) {
            var i1 = t1.pathsData, a1 = t1.shape.paths.shapes, s1, n1 = t1.shape.paths._length, u1, h1, g1 = 0, v1, E1, m1, b1, y1 = [], d1, A1 = !0;
            for(r1 ? (E1 = r1._length, d1 = r1._length) : (r1 = shapePool.newElement(), E1 = 0, d1 = 0), y1.push(r1), s1 = 0; s1 < n1; s1 += 1){
                for(m1 = i1[s1].lengths, r1.c = a1[s1].c, h1 = a1[s1].c ? m1.length : m1.length + 1, u1 = 1; u1 < h1; u1 += 1)if (v1 = m1[u1 - 1], g1 + v1.addedLength < e1.s) g1 += v1.addedLength, r1.c = !1;
                else if (g1 > e1.e) {
                    r1.c = !1;
                    break;
                } else e1.s <= g1 && e1.e >= g1 + v1.addedLength ? (this.addSegment(a1[s1].v[u1 - 1], a1[s1].o[u1 - 1], a1[s1].i[u1], a1[s1].v[u1], r1, E1, A1), A1 = !1) : (b1 = bez.getNewSegment(a1[s1].v[u1 - 1], a1[s1].v[u1], a1[s1].o[u1 - 1], a1[s1].i[u1], (e1.s - g1) / v1.addedLength, (e1.e - g1) / v1.addedLength, m1[u1 - 1]), this.addSegmentFromArray(b1, r1, E1, A1), A1 = !1, r1.c = !1), g1 += v1.addedLength, E1 += 1;
                if (a1[s1].c && m1.length) {
                    if (v1 = m1[u1 - 1], g1 <= e1.e) {
                        var p1 = m1[u1 - 1].addedLength;
                        e1.s <= g1 && e1.e >= g1 + p1 ? (this.addSegment(a1[s1].v[u1 - 1], a1[s1].o[u1 - 1], a1[s1].i[0], a1[s1].v[0], r1, E1, A1), A1 = !1) : (b1 = bez.getNewSegment(a1[s1].v[u1 - 1], a1[s1].v[0], a1[s1].o[u1 - 1], a1[s1].i[0], (e1.s - g1) / p1, (e1.e - g1) / p1, m1[u1 - 1]), this.addSegmentFromArray(b1, r1, E1, A1), A1 = !1, r1.c = !1);
                    } else r1.c = !1;
                    g1 += v1.addedLength, E1 += 1;
                }
                if (r1._length && (r1.setXYAt(r1.v[d1][0], r1.v[d1][1], "i", d1), r1.setXYAt(r1.v[r1._length - 1][0], r1.v[r1._length - 1][1], "o", r1._length - 1)), g1 > e1.e) break;
                s1 < n1 - 1 && (r1 = shapePool.newElement(), A1 = !0, y1.push(r1), E1 = 0);
            }
            return y1;
        };
        function PuckerAndBloatModifier() {}
        extendPrototype([
            ShapeModifier
        ], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t1, e1) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t1, e1.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
        }, PuckerAndBloatModifier.prototype.processPath = function(t1, e1) {
            var r1 = e1 / 100, i1 = [
                0,
                0
            ], a1 = t1._length, s1 = 0;
            for(s1 = 0; s1 < a1; s1 += 1)i1[0] += t1.v[s1][0], i1[1] += t1.v[s1][1];
            i1[0] /= a1, i1[1] /= a1;
            var n1 = shapePool.newElement();
            n1.c = t1.c;
            var u1, h1, g1, v1, E1, m1;
            for(s1 = 0; s1 < a1; s1 += 1)u1 = t1.v[s1][0] + (i1[0] - t1.v[s1][0]) * r1, h1 = t1.v[s1][1] + (i1[1] - t1.v[s1][1]) * r1, g1 = t1.o[s1][0] + (i1[0] - t1.o[s1][0]) * -r1, v1 = t1.o[s1][1] + (i1[1] - t1.o[s1][1]) * -r1, E1 = t1.i[s1][0] + (i1[0] - t1.i[s1][0]) * -r1, m1 = t1.i[s1][1] + (i1[1] - t1.i[s1][1]) * -r1, n1.setTripleAt(u1, h1, g1, v1, E1, m1, s1);
            return n1;
        }, PuckerAndBloatModifier.prototype.processShapes = function(t1) {
            var e1, r1, i1 = this.shapes.length, a1, s1, n1 = this.amount.v;
            if (n1 !== 0) {
                var u1, h1;
                for(r1 = 0; r1 < i1; r1 += 1){
                    if (u1 = this.shapes[r1], h1 = u1.localShapeCollection, !(!u1.shape._mdf && !this._mdf && !t1)) for(h1.releaseShapes(), u1.shape._mdf = !0, e1 = u1.shape.paths.shapes, s1 = u1.shape.paths._length, a1 = 0; a1 < s1; a1 += 1)h1.addShape(this.processPath(e1[a1], n1));
                    u1.shape.paths = u1.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        var TransformPropertyFactory = function() {
            var t1 = [
                0,
                0
            ];
            function e1(h1) {
                var g1 = this._mdf;
                this.iterateDynamicProperties(), this._mdf = this._mdf || g1, this.a && h1.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && h1.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && h1.skewFromAxis(-this.sk.v, this.sa.v), this.r ? h1.rotate(-this.r.v) : h1.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? h1.translate(this.px.v, this.py.v, -this.pz.v) : h1.translate(this.px.v, this.py.v, 0) : h1.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            function r1(h1) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || h1) {
                        var g1;
                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                            var v1, E1;
                            if (g1 = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (v1 = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / g1, 0), E1 = this.p.getValueAtTime(this.p.keyframes[0].t / g1, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (v1 = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / g1, 0), E1 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / g1, 0)) : (v1 = this.p.pv, E1 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / g1, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                v1 = [], E1 = [];
                                var m1 = this.px, b1 = this.py;
                                m1._caching.lastFrame + m1.offsetTime <= m1.keyframes[0].t ? (v1[0] = m1.getValueAtTime((m1.keyframes[0].t + .01) / g1, 0), v1[1] = b1.getValueAtTime((b1.keyframes[0].t + .01) / g1, 0), E1[0] = m1.getValueAtTime(m1.keyframes[0].t / g1, 0), E1[1] = b1.getValueAtTime(b1.keyframes[0].t / g1, 0)) : m1._caching.lastFrame + m1.offsetTime >= m1.keyframes[m1.keyframes.length - 1].t ? (v1[0] = m1.getValueAtTime(m1.keyframes[m1.keyframes.length - 1].t / g1, 0), v1[1] = b1.getValueAtTime(b1.keyframes[b1.keyframes.length - 1].t / g1, 0), E1[0] = m1.getValueAtTime((m1.keyframes[m1.keyframes.length - 1].t - .01) / g1, 0), E1[1] = b1.getValueAtTime((b1.keyframes[b1.keyframes.length - 1].t - .01) / g1, 0)) : (v1 = [
                                    m1.pv,
                                    b1.pv
                                ], E1[0] = m1.getValueAtTime((m1._caching.lastFrame + m1.offsetTime - .01) / g1, m1.offsetTime), E1[1] = b1.getValueAtTime((b1._caching.lastFrame + b1.offsetTime - .01) / g1, b1.offsetTime));
                            } else E1 = t1, v1 = E1;
                            this.v.rotate(-Math.atan2(v1[1] - E1[1], v1[0] - E1[0]));
                        }
                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    }
                    this.frameId = this.elem.globalData.frameId;
                }
            }
            function i1() {
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
            function a1() {}
            function s1(h1) {
                this._addDynamicProperty(h1), this.elem.addDynamicProperty(h1), this._isDirty = !0;
            }
            function n1(h1, g1, v1) {
                if (this.elem = h1, this.frameId = -1, this.propType = "transform", this.data = g1, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(v1 || h1), g1.p && g1.p.s ? (this.px = PropertyFactory.getProp(h1, g1.p.x, 0, 0, this), this.py = PropertyFactory.getProp(h1, g1.p.y, 0, 0, this), g1.p.z && (this.pz = PropertyFactory.getProp(h1, g1.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(h1, g1.p || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), g1.rx) {
                    if (this.rx = PropertyFactory.getProp(h1, g1.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(h1, g1.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(h1, g1.rz, 0, degToRads, this), g1.or.k[0].ti) {
                        var E1, m1 = g1.or.k.length;
                        for(E1 = 0; E1 < m1; E1 += 1)g1.or.k[E1].to = null, g1.or.k[E1].ti = null;
                    }
                    this.or = PropertyFactory.getProp(h1, g1.or, 1, degToRads, this), this.or.sh = !0;
                } else this.r = PropertyFactory.getProp(h1, g1.r || {
                    k: 0
                }, 0, degToRads, this);
                g1.sk && (this.sk = PropertyFactory.getProp(h1, g1.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(h1, g1.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(h1, g1.a || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), this.s = PropertyFactory.getProp(h1, g1.s || {
                    k: [
                        100,
                        100,
                        100
                    ]
                }, 1, .01, this), g1.o ? this.o = PropertyFactory.getProp(h1, g1.o, 0, .01, h1) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
            }
            n1.prototype = {
                applyToMatrix: e1,
                getValue: r1,
                precalculateMatrix: i1,
                autoOrient: a1
            }, extendPrototype([
                DynamicPropertyContainer
            ], n1), n1.prototype.addDynamicProperty = s1, n1.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
            function u1(h1, g1, v1) {
                return new n1(h1, g1, v1);
            }
            return {
                getTransformProperty: u1
            };
        }();
        function RepeaterModifier() {}
        extendPrototype([
            ShapeModifier
        ], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t1, e1) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t1, e1.c, 0, null, this), this.o = PropertyFactory.getProp(t1, e1.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t1, e1.tr, this), this.so = PropertyFactory.getProp(t1, e1.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t1, e1.tr.eo, 0, .01, this), this.data = e1, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix;
        }, RepeaterModifier.prototype.applyTransforms = function(t1, e1, r1, i1, a1, s1) {
            var n1 = s1 ? -1 : 1, u1 = i1.s.v[0] + (1 - i1.s.v[0]) * (1 - a1), h1 = i1.s.v[1] + (1 - i1.s.v[1]) * (1 - a1);
            t1.translate(i1.p.v[0] * n1 * a1, i1.p.v[1] * n1 * a1, i1.p.v[2]), e1.translate(-i1.a.v[0], -i1.a.v[1], i1.a.v[2]), e1.rotate(-i1.r.v * n1 * a1), e1.translate(i1.a.v[0], i1.a.v[1], i1.a.v[2]), r1.translate(-i1.a.v[0], -i1.a.v[1], i1.a.v[2]), r1.scale(s1 ? 1 / u1 : u1, s1 ? 1 / h1 : h1), r1.translate(i1.a.v[0], i1.a.v[1], i1.a.v[2]);
        }, RepeaterModifier.prototype.init = function(t1, e1, r1, i1) {
            for(this.elem = t1, this.arr = e1, this.pos = r1, this.elemsData = i1, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t1), this.initModifierProperties(t1, e1[r1]); r1 > 0;)r1 -= 1, this._elements.unshift(e1[r1]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
        }, RepeaterModifier.prototype.resetElements = function(t1) {
            var e1, r1 = t1.length;
            for(e1 = 0; e1 < r1; e1 += 1)t1[e1]._processed = !1, t1[e1].ty === "gr" && this.resetElements(t1[e1].it);
        }, RepeaterModifier.prototype.cloneElements = function(t1) {
            var e1 = JSON.parse(JSON.stringify(t1));
            return this.resetElements(e1), e1;
        }, RepeaterModifier.prototype.changeGroupRender = function(t1, e1) {
            var r1, i1 = t1.length;
            for(r1 = 0; r1 < i1; r1 += 1)t1[r1]._render = e1, t1[r1].ty === "gr" && this.changeGroupRender(t1[r1].it, e1);
        }, RepeaterModifier.prototype.processShapes = function(t1) {
            var e1, r1, i1, a1, s1, n1 = !1;
            if (this._mdf || t1) {
                var u1 = Math.ceil(this.c.v);
                if (this._groups.length < u1) {
                    for(; this._groups.length < u1;){
                        var h1 = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        h1.it.push({
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
                        }), this.arr.splice(0, 0, h1), this._groups.splice(0, 0, h1), this._currentCopies += 1;
                    }
                    this.elem.reloadShapes(), n1 = !0;
                }
                s1 = 0;
                var g1;
                for(i1 = 0; i1 <= this._groups.length - 1; i1 += 1){
                    if (g1 = s1 < u1, this._groups[i1]._render = g1, this.changeGroupRender(this._groups[i1].it, g1), !g1) {
                        var v1 = this.elemsData[i1].it, E1 = v1[v1.length - 1];
                        E1.transform.op.v !== 0 ? (E1.transform.op._mdf = !0, E1.transform.op.v = 0) : E1.transform.op._mdf = !1;
                    }
                    s1 += 1;
                }
                this._currentCopies = u1;
                var m1 = this.o.v, b1 = m1 % 1, y1 = m1 > 0 ? Math.floor(m1) : Math.ceil(m1), d1 = this.pMatrix.props, A1 = this.rMatrix.props, p1 = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var o1 = 0;
                if (m1 > 0) {
                    for(; o1 < y1;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), o1 += 1;
                    b1 && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, b1, !1), o1 += b1);
                } else if (m1 < 0) {
                    for(; o1 > y1;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), o1 -= 1;
                    b1 && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -b1, !0), o1 -= b1);
                }
                i1 = this.data.m === 1 ? 0 : this._currentCopies - 1, a1 = this.data.m === 1 ? 1 : -1, s1 = this._currentCopies;
                for(var l1, c1; s1;){
                    if (e1 = this.elemsData[i1].it, r1 = e1[e1.length - 1].transform.mProps.v.props, c1 = r1.length, e1[e1.length - 1].transform.mProps._mdf = !0, e1[e1.length - 1].transform.op._mdf = !0, e1[e1.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i1 / (this._currentCopies - 1)), o1 !== 0) {
                        for((i1 !== 0 && a1 === 1 || i1 !== this._currentCopies - 1 && a1 === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(A1[0], A1[1], A1[2], A1[3], A1[4], A1[5], A1[6], A1[7], A1[8], A1[9], A1[10], A1[11], A1[12], A1[13], A1[14], A1[15]), this.matrix.transform(p1[0], p1[1], p1[2], p1[3], p1[4], p1[5], p1[6], p1[7], p1[8], p1[9], p1[10], p1[11], p1[12], p1[13], p1[14], p1[15]), this.matrix.transform(d1[0], d1[1], d1[2], d1[3], d1[4], d1[5], d1[6], d1[7], d1[8], d1[9], d1[10], d1[11], d1[12], d1[13], d1[14], d1[15]), l1 = 0; l1 < c1; l1 += 1)r1[l1] = this.matrix.props[l1];
                        this.matrix.reset();
                    } else for(this.matrix.reset(), l1 = 0; l1 < c1; l1 += 1)r1[l1] = this.matrix.props[l1];
                    o1 += 1, s1 -= 1, i1 += a1;
                }
            } else for(s1 = this._currentCopies, i1 = 0, a1 = 1; s1;)e1 = this.elemsData[i1].it, r1 = e1[e1.length - 1].transform.mProps.v.props, e1[e1.length - 1].transform.mProps._mdf = !1, e1[e1.length - 1].transform.op._mdf = !1, s1 -= 1, i1 += a1;
            return n1;
        }, RepeaterModifier.prototype.addShape = function() {};
        function RoundCornersModifier() {}
        extendPrototype([
            ShapeModifier
        ], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t1, e1) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t1, e1.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
        }, RoundCornersModifier.prototype.processPath = function(t1, e1) {
            var r1 = shapePool.newElement();
            r1.c = t1.c;
            var i1, a1 = t1._length, s1, n1, u1, h1, g1, v1, E1 = 0, m1, b1, y1, d1, A1, p1;
            for(i1 = 0; i1 < a1; i1 += 1)s1 = t1.v[i1], u1 = t1.o[i1], n1 = t1.i[i1], s1[0] === u1[0] && s1[1] === u1[1] && s1[0] === n1[0] && s1[1] === n1[1] ? (i1 === 0 || i1 === a1 - 1) && !t1.c ? (r1.setTripleAt(s1[0], s1[1], u1[0], u1[1], n1[0], n1[1], E1), E1 += 1) : (i1 === 0 ? h1 = t1.v[a1 - 1] : h1 = t1.v[i1 - 1], g1 = Math.sqrt(Math.pow(s1[0] - h1[0], 2) + Math.pow(s1[1] - h1[1], 2)), v1 = g1 ? Math.min(g1 / 2, e1) / g1 : 0, A1 = s1[0] + (h1[0] - s1[0]) * v1, m1 = A1, p1 = s1[1] - (s1[1] - h1[1]) * v1, b1 = p1, y1 = m1 - (m1 - s1[0]) * roundCorner, d1 = b1 - (b1 - s1[1]) * roundCorner, r1.setTripleAt(m1, b1, y1, d1, A1, p1, E1), E1 += 1, i1 === a1 - 1 ? h1 = t1.v[0] : h1 = t1.v[i1 + 1], g1 = Math.sqrt(Math.pow(s1[0] - h1[0], 2) + Math.pow(s1[1] - h1[1], 2)), v1 = g1 ? Math.min(g1 / 2, e1) / g1 : 0, y1 = s1[0] + (h1[0] - s1[0]) * v1, m1 = y1, d1 = s1[1] + (h1[1] - s1[1]) * v1, b1 = d1, A1 = m1 - (m1 - s1[0]) * roundCorner, p1 = b1 - (b1 - s1[1]) * roundCorner, r1.setTripleAt(m1, b1, y1, d1, A1, p1, E1), E1 += 1) : (r1.setTripleAt(t1.v[i1][0], t1.v[i1][1], t1.o[i1][0], t1.o[i1][1], t1.i[i1][0], t1.i[i1][1], E1), E1 += 1);
            return r1;
        }, RoundCornersModifier.prototype.processShapes = function(t1) {
            var e1, r1, i1 = this.shapes.length, a1, s1, n1 = this.rd.v;
            if (n1 !== 0) {
                var u1, h1;
                for(r1 = 0; r1 < i1; r1 += 1){
                    if (u1 = this.shapes[r1], h1 = u1.localShapeCollection, !(!u1.shape._mdf && !this._mdf && !t1)) for(h1.releaseShapes(), u1.shape._mdf = !0, e1 = u1.shape.paths.shapes, s1 = u1.shape.paths._length, a1 = 0; a1 < s1; a1 += 1)h1.addShape(this.processPath(e1[a1], n1));
                    u1.shape.paths = u1.localShapeCollection;
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
        function lerp(t1, e1, r1) {
            return t1 * (1 - r1) + e1 * r1;
        }
        function lerpPoint(t1, e1, r1) {
            return [
                lerp(t1[0], e1[0], r1),
                lerp(t1[1], e1[1], r1)
            ];
        }
        function quadRoots(t1, e1, r1) {
            if (t1 === 0) return [];
            var i1 = e1 * e1 - 4 * t1 * r1;
            if (i1 < 0) return [];
            var a1 = -e1 / (2 * t1);
            if (i1 === 0) return [
                a1
            ];
            var s1 = Math.sqrt(i1) / (2 * t1);
            return [
                a1 - s1,
                a1 + s1
            ];
        }
        function polynomialCoefficients(t1, e1, r1, i1) {
            return [
                -t1 + 3 * e1 - 3 * r1 + i1,
                3 * t1 - 6 * e1 + 3 * r1,
                -3 * t1 + 3 * e1,
                t1
            ];
        }
        function singlePoint(t1) {
            return new PolynomialBezier(t1, t1, t1, t1, !1);
        }
        function PolynomialBezier(t1, e1, r1, i1, a1) {
            a1 && pointEqual(t1, e1) && (e1 = lerpPoint(t1, i1, 1 / 3)), a1 && pointEqual(r1, i1) && (r1 = lerpPoint(t1, i1, 2 / 3));
            var s1 = polynomialCoefficients(t1[0], e1[0], r1[0], i1[0]), n1 = polynomialCoefficients(t1[1], e1[1], r1[1], i1[1]);
            this.a = [
                s1[0],
                n1[0]
            ], this.b = [
                s1[1],
                n1[1]
            ], this.c = [
                s1[2],
                n1[2]
            ], this.d = [
                s1[3],
                n1[3]
            ], this.points = [
                t1,
                e1,
                r1,
                i1
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
            var e1 = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t1, r1 = e1 * e1 - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t1;
            if (r1 < 0) return [];
            var i1 = Math.sqrt(r1);
            return floatZero(i1) ? i1 > 0 && i1 < 1 ? [
                e1
            ] : [] : [
                e1 - i1,
                e1 + i1
            ].filter(function(a1) {
                return a1 > 0 && a1 < 1;
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
            var e1 = lerpPoint(this.points[0], this.points[1], t1), r1 = lerpPoint(this.points[1], this.points[2], t1), i1 = lerpPoint(this.points[2], this.points[3], t1), a1 = lerpPoint(e1, r1, t1), s1 = lerpPoint(r1, i1, t1), n1 = lerpPoint(a1, s1, t1);
            return [
                new PolynomialBezier(this.points[0], e1, a1, n1, !0),
                new PolynomialBezier(n1, s1, i1, this.points[3], !0)
            ];
        };
        function extrema(t1, e1) {
            var r1 = t1.points[0][e1], i1 = t1.points[t1.points.length - 1][e1];
            if (r1 > i1) {
                var a1 = i1;
                i1 = r1, r1 = a1;
            }
            for(var s1 = quadRoots(3 * t1.a[e1], 2 * t1.b[e1], t1.c[e1]), n1 = 0; n1 < s1.length; n1 += 1)if (s1[n1] > 0 && s1[n1] < 1) {
                var u1 = t1.point(s1[n1])[e1];
                u1 < r1 ? r1 = u1 : u1 > i1 && (i1 = u1);
            }
            return {
                min: r1,
                max: i1
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
        function intersectData(t1, e1, r1) {
            var i1 = t1.boundingBox();
            return {
                cx: i1.cx,
                cy: i1.cy,
                width: i1.width,
                height: i1.height,
                bez: t1,
                t: (e1 + r1) / 2,
                t1: e1,
                t2: r1
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
        function intersectsImpl(t1, e1, r1, i1, a1, s1) {
            if (boxIntersect(t1, e1)) {
                if (r1 >= s1 || t1.width <= i1 && t1.height <= i1 && e1.width <= i1 && e1.height <= i1) {
                    a1.push([
                        t1.t,
                        e1.t
                    ]);
                    return;
                }
                var n1 = splitData(t1), u1 = splitData(e1);
                intersectsImpl(n1[0], u1[0], r1 + 1, i1, a1, s1), intersectsImpl(n1[0], u1[1], r1 + 1, i1, a1, s1), intersectsImpl(n1[1], u1[0], r1 + 1, i1, a1, s1), intersectsImpl(n1[1], u1[1], r1 + 1, i1, a1, s1);
            }
        }
        PolynomialBezier.prototype.intersections = function(t1, e1, r1) {
            e1 === void 0 && (e1 = 2), r1 === void 0 && (r1 = 7);
            var i1 = [];
            return intersectsImpl(intersectData(this, 0, 1), intersectData(t1, 0, 1), 0, e1, i1, r1), i1;
        }, PolynomialBezier.shapeSegment = function(t1, e1) {
            var r1 = (e1 + 1) % t1.length();
            return new PolynomialBezier(t1.v[e1], t1.o[e1], t1.i[r1], t1.v[r1], !0);
        }, PolynomialBezier.shapeSegmentInverted = function(t1, e1) {
            var r1 = (e1 + 1) % t1.length();
            return new PolynomialBezier(t1.v[r1], t1.i[r1], t1.o[e1], t1.v[e1], !0);
        };
        function crossProduct(t1, e1) {
            return [
                t1[1] * e1[2] - t1[2] * e1[1],
                t1[2] * e1[0] - t1[0] * e1[2],
                t1[0] * e1[1] - t1[1] * e1[0]
            ];
        }
        function lineIntersection(t1, e1, r1, i1) {
            var a1 = [
                t1[0],
                t1[1],
                1
            ], s1 = [
                e1[0],
                e1[1],
                1
            ], n1 = [
                r1[0],
                r1[1],
                1
            ], u1 = [
                i1[0],
                i1[1],
                1
            ], h1 = crossProduct(crossProduct(a1, s1), crossProduct(n1, u1));
            return floatZero(h1[2]) ? null : [
                h1[0] / h1[2],
                h1[1] / h1[2]
            ];
        }
        function polarOffset(t1, e1, r1) {
            return [
                t1[0] + Math.cos(e1) * r1,
                t1[1] - Math.sin(e1) * r1
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
        function setPoint(t1, e1, r1, i1, a1, s1, n1) {
            var u1 = r1 - Math.PI / 2, h1 = r1 + Math.PI / 2, g1 = e1[0] + Math.cos(r1) * i1 * a1, v1 = e1[1] - Math.sin(r1) * i1 * a1;
            t1.setTripleAt(g1, v1, g1 + Math.cos(u1) * s1, v1 - Math.sin(u1) * s1, g1 + Math.cos(h1) * n1, v1 - Math.sin(h1) * n1, t1.length());
        }
        function getPerpendicularVector(t1, e1) {
            var r1 = [
                e1[0] - t1[0],
                e1[1] - t1[1]
            ], i1 = -Math.PI * .5, a1 = [
                Math.cos(i1) * r1[0] - Math.sin(i1) * r1[1],
                Math.sin(i1) * r1[0] + Math.cos(i1) * r1[1]
            ];
            return a1;
        }
        function getProjectingAngle(t1, e1) {
            var r1 = e1 === 0 ? t1.length() - 1 : e1 - 1, i1 = (e1 + 1) % t1.length(), a1 = t1.v[r1], s1 = t1.v[i1], n1 = getPerpendicularVector(a1, s1);
            return Math.atan2(0, 1) - Math.atan2(n1[1], n1[0]);
        }
        function zigZagCorner(t1, e1, r1, i1, a1, s1, n1) {
            var u1 = getProjectingAngle(e1, r1), h1 = e1.v[r1 % e1._length], g1 = e1.v[r1 === 0 ? e1._length - 1 : r1 - 1], v1 = e1.v[(r1 + 1) % e1._length], E1 = s1 === 2 ? Math.sqrt(Math.pow(h1[0] - g1[0], 2) + Math.pow(h1[1] - g1[1], 2)) : 0, m1 = s1 === 2 ? Math.sqrt(Math.pow(h1[0] - v1[0], 2) + Math.pow(h1[1] - v1[1], 2)) : 0;
            setPoint(t1, e1.v[r1 % e1._length], u1, n1, i1, m1 / ((a1 + 1) * 2), E1 / ((a1 + 1) * 2));
        }
        function zigZagSegment(t1, e1, r1, i1, a1, s1) {
            for(var n1 = 0; n1 < i1; n1 += 1){
                var u1 = (n1 + 1) / (i1 + 1), h1 = a1 === 2 ? Math.sqrt(Math.pow(e1.points[3][0] - e1.points[0][0], 2) + Math.pow(e1.points[3][1] - e1.points[0][1], 2)) : 0, g1 = e1.normalAngle(u1), v1 = e1.point(u1);
                setPoint(t1, v1, g1, s1, r1, h1 / ((i1 + 1) * 2), h1 / ((i1 + 1) * 2)), s1 = -s1;
            }
            return s1;
        }
        ZigZagModifier.prototype.processPath = function(t1, e1, r1, i1) {
            var a1 = t1._length, s1 = shapePool.newElement();
            if (s1.c = t1.c, t1.c || (a1 -= 1), a1 === 0) return s1;
            var n1 = -1, u1 = PolynomialBezier.shapeSegment(t1, 0);
            zigZagCorner(s1, t1, 0, e1, r1, i1, n1);
            for(var h1 = 0; h1 < a1; h1 += 1)n1 = zigZagSegment(s1, u1, e1, r1, i1, -n1), h1 === a1 - 1 && !t1.c ? u1 = null : u1 = PolynomialBezier.shapeSegment(t1, (h1 + 1) % a1), zigZagCorner(s1, t1, h1 + 1, e1, r1, i1, n1);
            return s1;
        }, ZigZagModifier.prototype.processShapes = function(t1) {
            var e1, r1, i1 = this.shapes.length, a1, s1, n1 = this.amplitude.v, u1 = Math.max(0, Math.round(this.frequency.v)), h1 = this.pointsType.v;
            if (n1 !== 0) {
                var g1, v1;
                for(r1 = 0; r1 < i1; r1 += 1){
                    if (g1 = this.shapes[r1], v1 = g1.localShapeCollection, !(!g1.shape._mdf && !this._mdf && !t1)) for(v1.releaseShapes(), g1.shape._mdf = !0, e1 = g1.shape.paths.shapes, s1 = g1.shape.paths._length, a1 = 0; a1 < s1; a1 += 1)v1.addShape(this.processPath(e1[a1], n1, u1, h1));
                    g1.shape.paths = g1.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function linearOffset(t1, e1, r1) {
            var i1 = Math.atan2(e1[0] - t1[0], e1[1] - t1[1]);
            return [
                polarOffset(t1, i1, r1),
                polarOffset(e1, i1, r1)
            ];
        }
        function offsetSegment(t1, e1) {
            var r1, i1, a1, s1, n1, u1, h1;
            h1 = linearOffset(t1.points[0], t1.points[1], e1), r1 = h1[0], i1 = h1[1], h1 = linearOffset(t1.points[1], t1.points[2], e1), a1 = h1[0], s1 = h1[1], h1 = linearOffset(t1.points[2], t1.points[3], e1), n1 = h1[0], u1 = h1[1];
            var g1 = lineIntersection(r1, i1, a1, s1);
            g1 === null && (g1 = i1);
            var v1 = lineIntersection(n1, u1, a1, s1);
            return v1 === null && (v1 = n1), new PolynomialBezier(r1, g1, v1, u1);
        }
        function joinLines(t1, e1, r1, i1, a1) {
            var s1 = e1.points[3], n1 = r1.points[0];
            if (i1 === 3 || pointEqual(s1, n1)) return s1;
            if (i1 === 2) {
                var u1 = -e1.tangentAngle(1), h1 = -r1.tangentAngle(0) + Math.PI, g1 = lineIntersection(s1, polarOffset(s1, u1 + Math.PI / 2, 100), n1, polarOffset(n1, u1 + Math.PI / 2, 100)), v1 = g1 ? pointDistance(g1, s1) : pointDistance(s1, n1) / 2, E1 = polarOffset(s1, u1, 2 * v1 * roundCorner);
                return t1.setXYAt(E1[0], E1[1], "o", t1.length() - 1), E1 = polarOffset(n1, h1, 2 * v1 * roundCorner), t1.setTripleAt(n1[0], n1[1], n1[0], n1[1], E1[0], E1[1], t1.length()), n1;
            }
            var m1 = pointEqual(s1, e1.points[2]) ? e1.points[0] : e1.points[2], b1 = pointEqual(n1, r1.points[1]) ? r1.points[3] : r1.points[1], y1 = lineIntersection(m1, s1, n1, b1);
            return y1 && pointDistance(y1, s1) < a1 ? (t1.setTripleAt(y1[0], y1[1], y1[0], y1[1], y1[0], y1[1], t1.length()), y1) : s1;
        }
        function getIntersection(t1, e1) {
            var r1 = t1.intersections(e1);
            return r1.length && floatEqual(r1[0][0], 1) && r1.shift(), r1.length ? r1[0] : null;
        }
        function pruneSegmentIntersection(t1, e1) {
            var r1 = t1.slice(), i1 = e1.slice(), a1 = getIntersection(t1[t1.length - 1], e1[0]);
            return a1 && (r1[t1.length - 1] = t1[t1.length - 1].split(a1[0])[0], i1[0] = e1[0].split(a1[1])[1]), t1.length > 1 && e1.length > 1 && (a1 = getIntersection(t1[0], e1[e1.length - 1]), a1) ? [
                [
                    t1[0].split(a1[0])[0]
                ],
                [
                    e1[e1.length - 1].split(a1[1])[1]
                ]
            ] : [
                r1,
                i1
            ];
        }
        function pruneIntersections(t1) {
            for(var e1, r1 = 1; r1 < t1.length; r1 += 1)e1 = pruneSegmentIntersection(t1[r1 - 1], t1[r1]), t1[r1 - 1] = e1[0], t1[r1] = e1[1];
            return t1.length > 1 && (e1 = pruneSegmentIntersection(t1[t1.length - 1], t1[0]), t1[t1.length - 1] = e1[0], t1[0] = e1[1]), t1;
        }
        function offsetSegmentSplit(t1, e1) {
            var r1 = t1.inflectionPoints(), i1, a1, s1, n1;
            if (r1.length === 0) return [
                offsetSegment(t1, e1)
            ];
            if (r1.length === 1 || floatEqual(r1[1], 1)) return s1 = t1.split(r1[0]), i1 = s1[0], a1 = s1[1], [
                offsetSegment(i1, e1),
                offsetSegment(a1, e1)
            ];
            s1 = t1.split(r1[0]), i1 = s1[0];
            var u1 = (r1[1] - r1[0]) / (1 - r1[0]);
            return s1 = s1[1].split(u1), n1 = s1[0], a1 = s1[1], [
                offsetSegment(i1, e1),
                offsetSegment(n1, e1),
                offsetSegment(a1, e1)
            ];
        }
        function OffsetPathModifier() {}
        extendPrototype([
            ShapeModifier
        ], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t1, e1) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t1, e1.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t1, e1.ml, 0, null, this), this.lineJoin = e1.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
        }, OffsetPathModifier.prototype.processPath = function(t1, e1, r1, i1) {
            var a1 = shapePool.newElement();
            a1.c = t1.c;
            var s1 = t1.length();
            t1.c || (s1 -= 1);
            var n1, u1, h1, g1 = [];
            for(n1 = 0; n1 < s1; n1 += 1)h1 = PolynomialBezier.shapeSegment(t1, n1), g1.push(offsetSegmentSplit(h1, e1));
            if (!t1.c) for(n1 = s1 - 1; n1 >= 0; n1 -= 1)h1 = PolynomialBezier.shapeSegmentInverted(t1, n1), g1.push(offsetSegmentSplit(h1, e1));
            g1 = pruneIntersections(g1);
            var v1 = null, E1 = null;
            for(n1 = 0; n1 < g1.length; n1 += 1){
                var m1 = g1[n1];
                for(E1 && (v1 = joinLines(a1, E1, m1[0], r1, i1)), E1 = m1[m1.length - 1], u1 = 0; u1 < m1.length; u1 += 1)h1 = m1[u1], v1 && pointEqual(h1.points[0], v1) ? a1.setXYAt(h1.points[1][0], h1.points[1][1], "o", a1.length() - 1) : a1.setTripleAt(h1.points[0][0], h1.points[0][1], h1.points[1][0], h1.points[1][1], h1.points[0][0], h1.points[0][1], a1.length()), a1.setTripleAt(h1.points[3][0], h1.points[3][1], h1.points[3][0], h1.points[3][1], h1.points[2][0], h1.points[2][1], a1.length()), v1 = h1.points[3];
            }
            return g1.length && joinLines(a1, E1, g1[0][0], r1, i1), a1;
        }, OffsetPathModifier.prototype.processShapes = function(t1) {
            var e1, r1, i1 = this.shapes.length, a1, s1, n1 = this.amount.v, u1 = this.miterLimit.v, h1 = this.lineJoin;
            if (n1 !== 0) {
                var g1, v1;
                for(r1 = 0; r1 < i1; r1 += 1){
                    if (g1 = this.shapes[r1], v1 = g1.localShapeCollection, !(!g1.shape._mdf && !this._mdf && !t1)) for(v1.releaseShapes(), g1.shape._mdf = !0, e1 = g1.shape.paths.shapes, s1 = g1.shape.paths._length, a1 = 0; a1 < s1; a1 += 1)v1.addShape(this.processPath(e1[a1], n1, h1, u1));
                    g1.shape.paths = g1.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function getFontProperties(t1) {
            for(var e1 = t1.fStyle ? t1.fStyle.split(" ") : [], r1 = "normal", i1 = "normal", a1 = e1.length, s1, n1 = 0; n1 < a1; n1 += 1)switch(s1 = e1[n1].toLowerCase(), s1){
                case "italic":
                    i1 = "italic";
                    break;
                case "bold":
                    r1 = "700";
                    break;
                case "black":
                    r1 = "900";
                    break;
                case "medium":
                    r1 = "500";
                    break;
                case "regular":
                case "normal":
                    r1 = "400";
                    break;
                case "light":
                case "thin":
                    r1 = "200";
                    break;
            }
            return {
                style: i1,
                weight: t1.fWeight || r1
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
            }, r1 = [];
            r1 = r1.concat([
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
            var i1 = 127988, a1 = 917631, s1 = 917601, n1 = 917626, u1 = 65039, h1 = 8205, g1 = 127462, v1 = 127487, E1 = [
                "d83cdffb",
                "d83cdffc",
                "d83cdffd",
                "d83cdffe",
                "d83cdfff"
            ];
            function m1(_1) {
                var x1 = _1.split(","), f1, S1 = x1.length, D1 = [];
                for(f1 = 0; f1 < S1; f1 += 1)x1[f1] !== "sans-serif" && x1[f1] !== "monospace" && D1.push(x1[f1]);
                return D1.join(",");
            }
            function b1(_1, x1) {
                var f1 = createTag("span");
                f1.setAttribute("aria-hidden", !0), f1.style.fontFamily = x1;
                var S1 = createTag("span");
                S1.innerText = "giItT1WQy@!-/#", f1.style.position = "absolute", f1.style.left = "-10000px", f1.style.top = "-10000px", f1.style.fontSize = "300px", f1.style.fontVariant = "normal", f1.style.fontStyle = "normal", f1.style.fontWeight = "normal", f1.style.letterSpacing = "0", f1.appendChild(S1), document.body.appendChild(f1);
                var D1 = S1.offsetWidth;
                return S1.style.fontFamily = m1(_1) + ", " + x1, {
                    node: S1,
                    w: D1,
                    parent: f1
                };
            }
            function y1() {
                var _1, x1 = this.fonts.length, f1, S1, D1 = x1;
                for(_1 = 0; _1 < x1; _1 += 1)this.fonts[_1].loaded ? D1 -= 1 : this.fonts[_1].fOrigin === "n" || this.fonts[_1].origin === 0 ? this.fonts[_1].loaded = !0 : (f1 = this.fonts[_1].monoCase.node, S1 = this.fonts[_1].monoCase.w, f1.offsetWidth !== S1 ? (D1 -= 1, this.fonts[_1].loaded = !0) : (f1 = this.fonts[_1].sansCase.node, S1 = this.fonts[_1].sansCase.w, f1.offsetWidth !== S1 && (D1 -= 1, this.fonts[_1].loaded = !0)), this.fonts[_1].loaded && (this.fonts[_1].sansCase.parent.parentNode.removeChild(this.fonts[_1].sansCase.parent), this.fonts[_1].monoCase.parent.parentNode.removeChild(this.fonts[_1].monoCase.parent)));
                D1 !== 0 && Date.now() - this.initTime < t1 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            }
            function d1(_1, x1) {
                var f1 = document.body && x1 ? "svg" : "canvas", S1, D1 = getFontProperties(_1);
                if (f1 === "svg") {
                    var k1 = createNS("text");
                    k1.style.fontSize = "100px", k1.setAttribute("font-family", _1.fFamily), k1.setAttribute("font-style", D1.style), k1.setAttribute("font-weight", D1.weight), k1.textContent = "1", _1.fClass ? (k1.style.fontFamily = "inherit", k1.setAttribute("class", _1.fClass)) : k1.style.fontFamily = _1.fFamily, x1.appendChild(k1), S1 = k1;
                } else {
                    var O1 = new OffscreenCanvas(500, 500).getContext("2d");
                    O1.font = D1.style + " " + D1.weight + " 100px " + _1.fFamily, S1 = O1;
                }
                function B1(j1) {
                    return f1 === "svg" ? (S1.textContent = j1, S1.getComputedTextLength()) : S1.measureText(j1).width;
                }
                return {
                    measureText: B1
                };
            }
            function A1(_1, x1) {
                if (!_1) {
                    this.isLoaded = !0;
                    return;
                }
                if (this.chars) {
                    this.isLoaded = !0, this.fonts = _1.list;
                    return;
                }
                if (!document.body) {
                    this.isLoaded = !0, _1.list.forEach(function(X1) {
                        X1.helper = d1(X1), X1.cache = {};
                    }), this.fonts = _1.list;
                    return;
                }
                var f1 = _1.list, S1, D1 = f1.length, k1 = D1;
                for(S1 = 0; S1 < D1; S1 += 1){
                    var O1 = !0, B1, j1;
                    if (f1[S1].loaded = !1, f1[S1].monoCase = b1(f1[S1].fFamily, "monospace"), f1[S1].sansCase = b1(f1[S1].fFamily, "sans-serif"), !f1[S1].fPath) f1[S1].loaded = !0, k1 -= 1;
                    else if (f1[S1].fOrigin === "p" || f1[S1].origin === 3) {
                        if (B1 = document.querySelectorAll('style[f-forigin="p"][f-family="' + f1[S1].fFamily + '"], style[f-origin="3"][f-family="' + f1[S1].fFamily + '"]'), B1.length > 0 && (O1 = !1), O1) {
                            var N1 = createTag("style");
                            N1.setAttribute("f-forigin", f1[S1].fOrigin), N1.setAttribute("f-origin", f1[S1].origin), N1.setAttribute("f-family", f1[S1].fFamily), N1.type = "text/css", N1.innerText = "@font-face {font-family: " + f1[S1].fFamily + "; font-style: normal; src: url('" + f1[S1].fPath + "');}", x1.appendChild(N1);
                        }
                    } else if (f1[S1].fOrigin === "g" || f1[S1].origin === 1) {
                        for(B1 = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), j1 = 0; j1 < B1.length; j1 += 1)B1[j1].href.indexOf(f1[S1].fPath) !== -1 && (O1 = !1);
                        if (O1) {
                            var H1 = createTag("link");
                            H1.setAttribute("f-forigin", f1[S1].fOrigin), H1.setAttribute("f-origin", f1[S1].origin), H1.type = "text/css", H1.rel = "stylesheet", H1.href = f1[S1].fPath, document.body.appendChild(H1);
                        }
                    } else if (f1[S1].fOrigin === "t" || f1[S1].origin === 2) {
                        for(B1 = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), j1 = 0; j1 < B1.length; j1 += 1)f1[S1].fPath === B1[j1].src && (O1 = !1);
                        if (O1) {
                            var $1 = createTag("link");
                            $1.setAttribute("f-forigin", f1[S1].fOrigin), $1.setAttribute("f-origin", f1[S1].origin), $1.setAttribute("rel", "stylesheet"), $1.setAttribute("href", f1[S1].fPath), x1.appendChild($1);
                        }
                    }
                    f1[S1].helper = d1(f1[S1], x1), f1[S1].cache = {}, this.fonts.push(f1[S1]);
                }
                k1 === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
            function p1(_1) {
                if (_1) {
                    this.chars || (this.chars = []);
                    var x1, f1 = _1.length, S1, D1 = this.chars.length, k1;
                    for(x1 = 0; x1 < f1; x1 += 1){
                        for(S1 = 0, k1 = !1; S1 < D1;)this.chars[S1].style === _1[x1].style && this.chars[S1].fFamily === _1[x1].fFamily && this.chars[S1].ch === _1[x1].ch && (k1 = !0), S1 += 1;
                        k1 || (this.chars.push(_1[x1]), D1 += 1);
                    }
                }
            }
            function o1(_1, x1, f1) {
                for(var S1 = 0, D1 = this.chars.length; S1 < D1;){
                    if (this.chars[S1].ch === _1 && this.chars[S1].style === x1 && this.chars[S1].fFamily === f1) return this.chars[S1];
                    S1 += 1;
                }
                return (typeof _1 == "string" && _1.charCodeAt(0) !== 13 || !_1) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", _1, x1, f1)), e1;
            }
            function l1(_1, x1, f1) {
                var S1 = this.getFontByName(x1), D1 = _1;
                if (!S1.cache[D1]) {
                    var k1 = S1.helper;
                    if (_1 === " ") {
                        var O1 = k1.measureText("|" + _1 + "|"), B1 = k1.measureText("||");
                        S1.cache[D1] = (O1 - B1) / 100;
                    } else S1.cache[D1] = k1.measureText(_1) / 100;
                }
                return S1.cache[D1] * f1;
            }
            function c1(_1) {
                for(var x1 = 0, f1 = this.fonts.length; x1 < f1;){
                    if (this.fonts[x1].fName === _1) return this.fonts[x1];
                    x1 += 1;
                }
                return this.fonts[0];
            }
            function P1(_1) {
                var x1 = 0, f1 = _1.charCodeAt(0);
                if (f1 >= 55296 && f1 <= 56319) {
                    var S1 = _1.charCodeAt(1);
                    S1 >= 56320 && S1 <= 57343 && (x1 = (f1 - 55296) * 1024 + S1 - 56320 + 65536);
                }
                return x1;
            }
            function M1(_1, x1) {
                var f1 = _1.toString(16) + x1.toString(16);
                return E1.indexOf(f1) !== -1;
            }
            function T1(_1) {
                return _1 === h1;
            }
            function F1(_1) {
                return _1 === u1;
            }
            function I1(_1) {
                var x1 = P1(_1);
                return x1 >= g1 && x1 <= v1;
            }
            function R1(_1) {
                return I1(_1.substr(0, 2)) && I1(_1.substr(2, 2));
            }
            function L1(_1) {
                return r1.indexOf(_1) !== -1;
            }
            function V1(_1, x1) {
                var f1 = P1(_1.substr(x1, 2));
                if (f1 !== i1) return !1;
                var S1 = 0;
                for(x1 += 2; S1 < 5;){
                    if (f1 = P1(_1.substr(x1, 2)), f1 < s1 || f1 > n1) return !1;
                    S1 += 1, x1 += 2;
                }
                return P1(_1.substr(x1, 2)) === a1;
            }
            function G1() {
                this.isLoaded = !0;
            }
            var C1 = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
            };
            C1.isModifier = M1, C1.isZeroWidthJoiner = T1, C1.isFlagEmoji = R1, C1.isRegionalCode = I1, C1.isCombinedCharacter = L1, C1.isRegionalFlag = V1, C1.isVariationSelector = F1, C1.BLACK_FLAG_CODE_POINT = i1;
            var w1 = {
                addChars: p1,
                addFonts: A1,
                getCharData: o1,
                getFontByName: c1,
                measureText: l1,
                checkLoadedFonts: y1,
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
        function SliderEffect(t1, e1, r1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, r1);
        }
        function AngleEffect(t1, e1, r1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, r1);
        }
        function ColorEffect(t1, e1, r1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 1, 0, r1);
        }
        function PointEffect(t1, e1, r1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 1, 0, r1);
        }
        function LayerIndexEffect(t1, e1, r1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, r1);
        }
        function MaskIndexEffect(t1, e1, r1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, r1);
        }
        function CheckboxEffect(t1, e1, r1) {
            this.p = PropertyFactory.getProp(e1, t1.v, 0, 0, r1);
        }
        function NoValueEffect() {
            this.p = {};
        }
        function EffectsManager(t1, e1) {
            var r1 = t1.ef || [];
            this.effectElements = [];
            var i1, a1 = r1.length, s1;
            for(i1 = 0; i1 < a1; i1 += 1)s1 = new GroupEffect(r1[i1], e1), this.effectElements.push(s1);
        }
        function GroupEffect(t1, e1) {
            this.init(t1, e1);
        }
        extendPrototype([
            DynamicPropertyContainer
        ], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t1, e1) {
            this.data = t1, this.effectElements = [], this.initDynamicPropertyContainer(e1);
            var r1, i1 = this.data.ef.length, a1, s1 = this.data.ef;
            for(r1 = 0; r1 < i1; r1 += 1){
                switch(a1 = null, s1[r1].ty){
                    case 0:
                        a1 = new SliderEffect(s1[r1], e1, this);
                        break;
                    case 1:
                        a1 = new AngleEffect(s1[r1], e1, this);
                        break;
                    case 2:
                        a1 = new ColorEffect(s1[r1], e1, this);
                        break;
                    case 3:
                        a1 = new PointEffect(s1[r1], e1, this);
                        break;
                    case 4:
                    case 7:
                        a1 = new CheckboxEffect(s1[r1], e1, this);
                        break;
                    case 10:
                        a1 = new LayerIndexEffect(s1[r1], e1, this);
                        break;
                    case 11:
                        a1 = new MaskIndexEffect(s1[r1], e1, this);
                        break;
                    case 5:
                        a1 = new EffectsManager(s1[r1], e1);
                        break;
                    default:
                        a1 = new NoValueEffect(s1[r1]);
                        break;
                }
                a1 && this.effectElements.push(a1);
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
                    var e1 = t1("layer"), r1 = t1("effects"), i1 = t1("shape"), a1 = t1("text"), s1 = t1("comp");
                    this.layerInterface = e1(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var n1 = r1.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(n1), this.data.ty === 0 || this.data.xt ? this.compInterface = s1(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = i1(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = a1(this), this.layerInterface.text = this.layerInterface.textInterface);
                }
            },
            setBlendMode: function() {
                var t1 = getBlendMode(this.data.bm), e1 = this.baseElement || this.layerElement;
                e1.style["mix-blend-mode"] = t1;
            },
            initBaseData: function(t1, e1, r1) {
                this.globalData = e1, this.comp = r1, this.data = t1, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
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
                var r1, i1 = this.dynamicProperties.length;
                for(r1 = 0; r1 < i1; r1 += 1)(e1 || this._isParent && this.dynamicProperties[r1].propType === "transform") && (this.dynamicProperties[r1].getValue(), this.dynamicProperties[r1]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
            },
            addDynamicProperty: function(t1) {
                this.dynamicProperties.indexOf(t1) === -1 && this.dynamicProperties.push(t1);
            }
        };
        function FootageElement(t1, e1, r1) {
            this.initFrame(), this.initRenderable(), this.assetData = e1.getAssetData(t1.refId), this.footageData = e1.imageLoader.getAsset(this.assetData), this.initBaseData(t1, e1, r1);
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
        function AudioElement(t1, e1, r1) {
            this.initFrame(), this.initRenderable(), this.assetData = e1.getAssetData(t1.refId), this.initBaseData(t1, e1, r1), this._isPlaying = !1, this._canPlay = !1;
            var i1 = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(i1), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t1.tm ? PropertyFactory.getProp(this, t1.tm, 0, e1.frameRate, this) : {
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
            var r1 = this._volume * this._volumeMultiplier;
            this._previousVolume !== r1 && (this._previousVolume = r1, this.audio.volume(r1));
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
            var e1, r1 = this.layers.length, i1;
            for(this.completeLayers = !0, e1 = r1 - 1; e1 >= 0; e1 -= 1)this.elements[e1] || (i1 = this.layers[e1], i1.ip - i1.st <= t1 - this.layers[e1].st && i1.op - i1.st > t1 - this.layers[e1].st && this.buildItem(e1)), this.completeLayers = this.elements[e1] ? this.completeLayers : !1;
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
            var e1, r1 = t1.length, i1, a1 = this.layers.length;
            for(e1 = 0; e1 < r1; e1 += 1)for(i1 = 0; i1 < a1;){
                if (this.layers[i1].id === t1[e1].id) {
                    this.layers[i1] = t1[e1];
                    break;
                }
                i1 += 1;
            }
        }, BaseRenderer.prototype.setProjectInterface = function(t1) {
            this.globalData.projectInterface = t1;
        }, BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems();
        }, BaseRenderer.prototype.buildElementParenting = function(t1, e1, r1) {
            for(var i1 = this.elements, a1 = this.layers, s1 = 0, n1 = a1.length; s1 < n1;)a1[s1].ind == e1 && (!i1[s1] || i1[s1] === !0 ? (this.buildItem(s1), this.addPendingElement(t1)) : (r1.push(i1[s1]), i1[s1].setAsParent(), a1[s1].parent !== void 0 ? this.buildElementParenting(t1, a1[s1].parent, r1) : t1.setHierarchy(r1))), s1 += 1;
        }, BaseRenderer.prototype.addPendingElement = function(t1) {
            this.pendingElements.push(t1);
        }, BaseRenderer.prototype.searchExtraCompositions = function(t1) {
            var e1, r1 = t1.length;
            for(e1 = 0; e1 < r1; e1 += 1)if (t1[e1].xt) {
                var i1 = this.createComp(t1[e1]);
                i1.initExpressions(), this.globalData.projectInterface.registerComposition(i1);
            }
        }, BaseRenderer.prototype.getElementById = function(t1) {
            var e1, r1 = this.elements.length;
            for(e1 = 0; e1 < r1; e1 += 1)if (this.elements[e1].data.ind === t1) return this.elements[e1];
            return null;
        }, BaseRenderer.prototype.getElementByPath = function(t1) {
            var e1 = t1.shift(), r1;
            if (typeof e1 == "number") r1 = this.elements[e1];
            else {
                var i1, a1 = this.elements.length;
                for(i1 = 0; i1 < a1; i1 += 1)if (this.elements[i1].data.nm === e1) {
                    r1 = this.elements[i1];
                    break;
                }
            }
            return t1.length === 0 ? r1 : r1.getElementByPath(t1);
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
                    var t1, e1 = this.finalTransform.mat, r1 = 0, i1 = this.hierarchy.length;
                    if (!this.finalTransform._matMdf) for(; r1 < i1;){
                        if (this.hierarchy[r1].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = !0;
                            break;
                        }
                        r1 += 1;
                    }
                    if (this.finalTransform._matMdf) for(t1 = this.finalTransform.mProp.v.props, e1.cloneFromProps(t1), r1 = 0; r1 < i1; r1 += 1)e1.multiply(this.hierarchy[r1].finalTransform.mProp.v);
                }
                this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
            },
            renderLocalTransform: function() {
                if (this.localTransforms) {
                    var t1 = 0, e1 = this.localTransforms.length;
                    if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for(; t1 < e1;)this.localTransforms[t1]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t1]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t1 += 1;
                    if (this.finalTransform._localMatMdf) {
                        var r1 = this.finalTransform.localMat;
                        for(this.localTransforms[0].matrix.clone(r1), t1 = 1; t1 < e1; t1 += 1){
                            var i1 = this.localTransforms[t1].matrix;
                            r1.multiply(i1);
                        }
                        r1.multiply(this.finalTransform.mat);
                    }
                    if (this.finalTransform._opMdf) {
                        var a1 = this.finalTransform.localOpacity;
                        for(t1 = 0; t1 < e1; t1 += 1)a1 *= this.localTransforms[t1].opacity * .01;
                        this.finalTransform.localOpacity = a1;
                    }
                }
            },
            searchEffectTransforms: function() {
                if (this.renderableEffectsManager) {
                    var t1 = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                    if (t1.length) {
                        this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                        var e1 = 0, r1 = t1.length;
                        for(e1 = 0; e1 < r1; e1 += 1)this.localTransforms.push(t1[e1]);
                    }
                }
            },
            globalToLocal: function(t1) {
                var e1 = [];
                e1.push(this.finalTransform);
                for(var r1 = !0, i1 = this.comp; r1;)i1.finalTransform ? (i1.data.hasMask && e1.splice(0, 0, i1.finalTransform), i1 = i1.comp) : r1 = !1;
                var a1, s1 = e1.length, n1;
                for(a1 = 0; a1 < s1; a1 += 1)n1 = e1[a1].mat.applyToPointArray(0, 0, 0), t1 = [
                    t1[0] - n1[0],
                    t1[1] - n1[1],
                    0
                ];
                return t1;
            },
            mHelper: new Matrix
        };
        function MaskElement(t1, e1, r1) {
            this.data = t1, this.element = e1, this.globalData = r1, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var i1 = this.globalData.defs, a1, s1 = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(s1), this.solidPath = "";
            var n1, u1 = this.masksProperties, h1 = 0, g1 = [], v1, E1, m1 = createElementID(), b1, y1, d1, A1, p1 = "clipPath", o1 = "clip-path";
            for(a1 = 0; a1 < s1; a1 += 1)if ((u1[a1].mode !== "a" && u1[a1].mode !== "n" || u1[a1].inv || u1[a1].o.k !== 100 || u1[a1].o.x) && (p1 = "mask", o1 = "mask"), (u1[a1].mode === "s" || u1[a1].mode === "i") && h1 === 0 ? (b1 = createNS("rect"), b1.setAttribute("fill", "#ffffff"), b1.setAttribute("width", this.element.comp.data.w || 0), b1.setAttribute("height", this.element.comp.data.h || 0), g1.push(b1)) : b1 = null, n1 = createNS("path"), u1[a1].mode === "n") this.viewData[a1] = {
                op: PropertyFactory.getProp(this.element, u1[a1].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, u1[a1], 3),
                elem: n1,
                lastPath: ""
            }, i1.appendChild(n1);
            else {
                h1 += 1, n1.setAttribute("fill", u1[a1].mode === "s" ? "#000000" : "#ffffff"), n1.setAttribute("clip-rule", "nonzero");
                var l1;
                if (u1[a1].x.k !== 0 ? (p1 = "mask", o1 = "mask", A1 = PropertyFactory.getProp(this.element, u1[a1].x, 0, null, this.element), l1 = createElementID(), y1 = createNS("filter"), y1.setAttribute("id", l1), d1 = createNS("feMorphology"), d1.setAttribute("operator", "erode"), d1.setAttribute("in", "SourceGraphic"), d1.setAttribute("radius", "0"), y1.appendChild(d1), i1.appendChild(y1), n1.setAttribute("stroke", u1[a1].mode === "s" ? "#000000" : "#ffffff")) : (d1 = null, A1 = null), this.storedData[a1] = {
                    elem: n1,
                    x: A1,
                    expan: d1,
                    lastPath: "",
                    lastOperator: "",
                    filterId: l1,
                    lastRadius: 0
                }, u1[a1].mode === "i") {
                    E1 = g1.length;
                    var c1 = createNS("g");
                    for(v1 = 0; v1 < E1; v1 += 1)c1.appendChild(g1[v1]);
                    var P1 = createNS("mask");
                    P1.setAttribute("mask-type", "alpha"), P1.setAttribute("id", m1 + "_" + h1), P1.appendChild(n1), i1.appendChild(P1), c1.setAttribute("mask", "url(" + getLocationHref() + "#" + m1 + "_" + h1 + ")"), g1.length = 0, g1.push(c1);
                } else g1.push(n1);
                u1[a1].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[a1] = {
                    elem: n1,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, u1[a1].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, u1[a1], 3),
                    invRect: b1
                }, this.viewData[a1].prop.k || this.drawPath(u1[a1], this.viewData[a1].prop.v, this.viewData[a1]);
            }
            for(this.maskElement = createNS(p1), s1 = g1.length, a1 = 0; a1 < s1; a1 += 1)this.maskElement.appendChild(g1[a1]);
            h1 > 0 && (this.maskElement.setAttribute("id", m1), this.element.maskedElement.setAttribute(o1, "url(" + getLocationHref() + "#" + m1 + ")"), i1.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
        }
        MaskElement.prototype.getMaskProperty = function(t1) {
            return this.viewData[t1].prop;
        }, MaskElement.prototype.renderFrame = function(t1) {
            var e1 = this.element.finalTransform.mat, r1, i1 = this.masksProperties.length;
            for(r1 = 0; r1 < i1; r1 += 1)if ((this.viewData[r1].prop._mdf || t1) && this.drawPath(this.masksProperties[r1], this.viewData[r1].prop.v, this.viewData[r1]), (this.viewData[r1].op._mdf || t1) && this.viewData[r1].elem.setAttribute("fill-opacity", this.viewData[r1].op.v), this.masksProperties[r1].mode !== "n" && (this.viewData[r1].invRect && (this.element.finalTransform.mProp._mdf || t1) && this.viewData[r1].invRect.setAttribute("transform", e1.getInverseMatrix().to2dCSS()), this.storedData[r1].x && (this.storedData[r1].x._mdf || t1))) {
                var a1 = this.storedData[r1].expan;
                this.storedData[r1].x.v < 0 ? (this.storedData[r1].lastOperator !== "erode" && (this.storedData[r1].lastOperator = "erode", this.storedData[r1].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r1].filterId + ")")), a1.setAttribute("radius", -this.storedData[r1].x.v)) : (this.storedData[r1].lastOperator !== "dilate" && (this.storedData[r1].lastOperator = "dilate", this.storedData[r1].elem.setAttribute("filter", null)), this.storedData[r1].elem.setAttribute("stroke-width", this.storedData[r1].x.v * 2));
            }
        }, MaskElement.prototype.getMaskelement = function() {
            return this.maskElement;
        }, MaskElement.prototype.createLayerSolidPath = function() {
            var t1 = "M0,0 ";
            return t1 += " h" + this.globalData.compSize.w, t1 += " v" + this.globalData.compSize.h, t1 += " h-" + this.globalData.compSize.w, t1 += " v-" + this.globalData.compSize.h + " ", t1;
        }, MaskElement.prototype.drawPath = function(t1, e1, r1) {
            var i1 = " M" + e1.v[0][0] + "," + e1.v[0][1], a1, s1;
            for(s1 = e1._length, a1 = 1; a1 < s1; a1 += 1)i1 += " C" + e1.o[a1 - 1][0] + "," + e1.o[a1 - 1][1] + " " + e1.i[a1][0] + "," + e1.i[a1][1] + " " + e1.v[a1][0] + "," + e1.v[a1][1];
            if (e1.c && s1 > 1 && (i1 += " C" + e1.o[a1 - 1][0] + "," + e1.o[a1 - 1][1] + " " + e1.i[0][0] + "," + e1.i[0][1] + " " + e1.v[0][0] + "," + e1.v[0][1]), r1.lastPath !== i1) {
                var n1 = "";
                r1.elem && (e1.c && (n1 = t1.inv ? this.solidPath + i1 : i1), r1.elem.setAttribute("d", n1)), r1.lastPath = i1;
            }
        }, MaskElement.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
        };
        var filtersFactory = function() {
            var t1 = {};
            t1.createFilter = e1, t1.createAlphaToLuminanceFilter = r1;
            function e1(i1, a1) {
                var s1 = createNS("filter");
                return s1.setAttribute("id", i1), a1 !== !0 && (s1.setAttribute("filterUnits", "objectBoundingBox"), s1.setAttribute("x", "0%"), s1.setAttribute("y", "0%"), s1.setAttribute("width", "100%"), s1.setAttribute("height", "100%")), s1;
            }
            function r1() {
                var i1 = createNS("feColorMatrix");
                return i1.setAttribute("type", "matrix"), i1.setAttribute("color-interpolation-filters", "sRGB"), i1.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i1;
            }
            return t1;
        }(), featureSupport = function() {
            var t1 = {
                maskType: !0,
                svgLumaHidden: !0,
                offscreenCanvas: typeof OffscreenCanvas < "u"
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t1.maskType = !1), /firefox/i.test(navigator.userAgent) && (t1.svgLumaHidden = !1), t1;
        }(), registeredEffects = {}, idPrefix = "filter_result_";
        function SVGEffects(t1) {
            var e1, r1 = "SourceGraphic", i1 = t1.data.ef ? t1.data.ef.length : 0, a1 = createElementID(), s1 = filtersFactory.createFilter(a1, !0), n1 = 0;
            this.filters = [];
            var u1;
            for(e1 = 0; e1 < i1; e1 += 1){
                u1 = null;
                var h1 = t1.data.ef[e1].ty;
                if (registeredEffects[h1]) {
                    var g1 = registeredEffects[h1].effect;
                    u1 = new g1(s1, t1.effectsManager.effectElements[e1], t1, idPrefix + n1, r1), r1 = idPrefix + n1, registeredEffects[h1].countsAsEffect && (n1 += 1);
                }
                u1 && this.filters.push(u1);
            }
            n1 && (t1.globalData.defs.appendChild(s1), t1.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a1 + ")")), this.filters.length && t1.addRenderableComponent(this);
        }
        SVGEffects.prototype.renderFrame = function(t1) {
            var e1, r1 = this.filters.length;
            for(e1 = 0; e1 < r1; e1 += 1)this.filters[e1].renderFrame(t1);
        }, SVGEffects.prototype.getEffects = function(t1) {
            var e1, r1 = this.filters.length, i1 = [];
            for(e1 = 0; e1 < r1; e1 += 1)this.filters[e1].type === t1 && i1.push(this.filters[e1]);
            return i1;
        };
        function registerEffect(t1, e1, r1) {
            registeredEffects[t1] = {
                effect: e1,
                countsAsEffect: r1
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
                    var r1 = createNS("clipPath"), i1 = createNS("path");
                    i1.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var a1 = createElementID();
                    if (r1.setAttribute("id", a1), r1.appendChild(i1), this.globalData.defs.appendChild(r1), this.checkMasks()) {
                        var s1 = createNS("g");
                        s1.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a1 + ")"), s1.appendChild(this.layerElement), this.transformedElement = s1, t1 ? t1.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
                    } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a1 + ")");
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
                    var e1 = this.layerId + "_" + t1, r1, i1, a1, s1;
                    if (t1 === 1 || t1 === 3) {
                        var n1 = createNS("mask");
                        n1.setAttribute("id", e1), n1.setAttribute("mask-type", t1 === 3 ? "luminance" : "alpha"), a1 = createNS("use"), a1.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n1.appendChild(a1), this.globalData.defs.appendChild(n1), !featureSupport.maskType && t1 === 1 && (n1.setAttribute("mask-type", "luminance"), r1 = createElementID(), i1 = filtersFactory.createFilter(r1), this.globalData.defs.appendChild(i1), i1.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s1 = createNS("g"), s1.appendChild(a1), n1.appendChild(s1), s1.setAttribute("filter", "url(" + getLocationHref() + "#" + r1 + ")"));
                    } else if (t1 === 2) {
                        var u1 = createNS("mask");
                        u1.setAttribute("id", e1), u1.setAttribute("mask-type", "alpha");
                        var h1 = createNS("g");
                        u1.appendChild(h1), r1 = createElementID(), i1 = filtersFactory.createFilter(r1);
                        var g1 = createNS("feComponentTransfer");
                        g1.setAttribute("in", "SourceGraphic"), i1.appendChild(g1);
                        var v1 = createNS("feFuncA");
                        v1.setAttribute("type", "table"), v1.setAttribute("tableValues", "1.0 0.0"), g1.appendChild(v1), this.globalData.defs.appendChild(i1);
                        var E1 = createNS("rect");
                        E1.setAttribute("width", this.comp.data.w), E1.setAttribute("height", this.comp.data.h), E1.setAttribute("x", "0"), E1.setAttribute("y", "0"), E1.setAttribute("fill", "#ffffff"), E1.setAttribute("opacity", "0"), h1.setAttribute("filter", "url(" + getLocationHref() + "#" + r1 + ")"), h1.appendChild(E1), a1 = createNS("use"), a1.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h1.appendChild(a1), featureSupport.maskType || (u1.setAttribute("mask-type", "luminance"), i1.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s1 = createNS("g"), h1.appendChild(E1), s1.appendChild(this.layerElement), h1.appendChild(s1)), this.globalData.defs.appendChild(u1);
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
                initElement: function(e1, r1, i1) {
                    this.initFrame(), this.initBaseData(e1, r1, i1), this.initTransform(e1, r1, i1), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
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
        function IImageElement(t1, e1, r1) {
            this.assetData = e1.getAssetData(t1.refId), this.assetData && this.assetData.sid && (this.assetData = e1.slotManager.getProp(this.assetData)), this.initElement(t1, e1, r1), this.sourceRect = {
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
                var e1, r1 = this.shapeModifiers.length;
                for(e1 = 0; e1 < r1; e1 += 1)this.shapeModifiers[e1].addShape(t1);
            },
            isShapeInAnimatedModifiers: function(t1) {
                for(var e1 = 0, r1 = this.shapeModifiers.length; e1 < r1;)if (this.shapeModifiers[e1].isAnimatedWithShape(t1)) return !0;
                return !1;
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var t1, e1 = this.shapes.length;
                    for(t1 = 0; t1 < e1; t1 += 1)this.shapes[t1].sh.reset();
                    e1 = this.shapeModifiers.length;
                    var r1;
                    for(t1 = e1 - 1; t1 >= 0 && (r1 = this.shapeModifiers[t1].processShapes(this._isFirstFrame), !r1); t1 -= 1);
                }
            },
            searchProcessedElement: function(t1) {
                for(var e1 = this.processedElements, r1 = 0, i1 = e1.length; r1 < i1;){
                    if (e1[r1].elem === t1) return e1[r1].pos;
                    r1 += 1;
                }
                return 0;
            },
            addProcessedElement: function(t1, e1) {
                for(var r1 = this.processedElements, i1 = r1.length; i1;)if (i1 -= 1, r1[i1].elem === t1) {
                    r1[i1].pos = e1;
                    return;
                }
                r1.push(new ProcessedElement(t1, e1));
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
        function SVGShapeData(t1, e1, r1) {
            this.caches = [], this.styles = [], this.transformers = t1, this.lStr = "", this.sh = r1, this.lvl = e1, this._isAnimated = !!r1.k;
            for(var i1 = 0, a1 = t1.length; i1 < a1;){
                if (t1[i1].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break;
                }
                i1 += 1;
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
        function DashProperty(t1, e1, r1, i1) {
            this.elem = t1, this.frameId = -1, this.dataProps = createSizedArray(e1.length), this.renderer = r1, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e1.length ? e1.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i1);
            var a1, s1 = e1.length || 0, n1;
            for(a1 = 0; a1 < s1; a1 += 1)n1 = PropertyFactory.getProp(t1, e1[a1].v, 0, 0, this), this.k = n1.k || this.k, this.dataProps[a1] = {
                n: e1[a1].n,
                p: n1
            };
            this.k || this.getValue(!0), this._isAnimated = this.k;
        }
        DashProperty.prototype.getValue = function(t1) {
            if (!(this.elem.globalData.frameId === this.frameId && !t1) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t1, this._mdf)) {
                var e1 = 0, r1 = this.dataProps.length;
                for(this.renderer === "svg" && (this.dashStr = ""), e1 = 0; e1 < r1; e1 += 1)this.dataProps[e1].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e1].p.v : this.dashArray[e1] = this.dataProps[e1].p.v : this.dashoffset[0] = this.dataProps[e1].p.v;
            }
        }, extendPrototype([
            DynamicPropertyContainer
        ], DashProperty);
        function SVGStrokeStyleData(t1, e1, r1) {
            this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t1, e1.o, 0, .01, this), this.w = PropertyFactory.getProp(t1, e1.w, 0, null, this), this.d = new DashProperty(t1, e1.d || {}, "svg", this), this.c = PropertyFactory.getProp(t1, e1.c, 1, 255, this), this.style = r1, this._isAnimated = !!this._isAnimated;
        }
        extendPrototype([
            DynamicPropertyContainer
        ], SVGStrokeStyleData);
        function SVGFillStyleData(t1, e1, r1) {
            this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t1, e1.o, 0, .01, this), this.c = PropertyFactory.getProp(t1, e1.c, 1, 255, this), this.style = r1;
        }
        extendPrototype([
            DynamicPropertyContainer
        ], SVGFillStyleData);
        function SVGNoStyleData(t1, e1, r1) {
            this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.style = r1;
        }
        extendPrototype([
            DynamicPropertyContainer
        ], SVGNoStyleData);
        function GradientProperty(t1, e1, r1) {
            this.data = e1, this.c = createTypedArray("uint8c", e1.p * 4);
            var i1 = e1.k.k[0].s ? e1.k.k[0].s.length - e1.p * 4 : e1.k.k.length - e1.p * 4;
            this.o = createTypedArray("float32", i1), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i1, this.initDynamicPropertyContainer(r1), this.prop = PropertyFactory.getProp(t1, e1.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
        }
        GradientProperty.prototype.comparePoints = function(t1, e1) {
            for(var r1 = 0, i1 = this.o.length / 2, a1; r1 < i1;){
                if (a1 = Math.abs(t1[r1 * 4] - t1[e1 * 4 + r1 * 2]), a1 > .01) return !1;
                r1 += 1;
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
                var e1, r1 = this.data.p * 4, i1, a1;
                for(e1 = 0; e1 < r1; e1 += 1)i1 = e1 % 4 === 0 ? 100 : 255, a1 = Math.round(this.prop.v[e1] * i1), this.c[e1] !== a1 && (this.c[e1] = a1, this._cmdf = !t1);
                if (this.o.length) for(r1 = this.prop.v.length, e1 = this.data.p * 4; e1 < r1; e1 += 1)i1 = e1 % 2 === 0 ? 100 : 1, a1 = e1 % 2 === 0 ? Math.round(this.prop.v[e1] * 100) : this.prop.v[e1], this.o[e1 - this.data.p * 4] !== a1 && (this.o[e1 - this.data.p * 4] = a1, this._omdf = !t1);
                this._mdf = !t1;
            }
        }, extendPrototype([
            DynamicPropertyContainer
        ], GradientProperty);
        function SVGGradientFillStyleData(t1, e1, r1) {
            this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.initGradientData(t1, e1, r1);
        }
        SVGGradientFillStyleData.prototype.initGradientData = function(t1, e1, r1) {
            this.o = PropertyFactory.getProp(t1, e1.o, 0, .01, this), this.s = PropertyFactory.getProp(t1, e1.s, 1, null, this), this.e = PropertyFactory.getProp(t1, e1.e, 1, null, this), this.h = PropertyFactory.getProp(t1, e1.h || {
                k: 0
            }, 0, .01, this), this.a = PropertyFactory.getProp(t1, e1.a || {
                k: 0
            }, 0, degToRads, this), this.g = new GradientProperty(t1, e1.g, this), this.style = r1, this.stops = [], this.setGradientData(r1.pElem, e1), this.setGradientOpacity(e1, r1), this._isAnimated = !!this._isAnimated;
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t1, e1) {
            var r1 = createElementID(), i1 = createNS(e1.t === 1 ? "linearGradient" : "radialGradient");
            i1.setAttribute("id", r1), i1.setAttribute("spreadMethod", "pad"), i1.setAttribute("gradientUnits", "userSpaceOnUse");
            var a1 = [], s1, n1, u1;
            for(u1 = e1.g.p * 4, n1 = 0; n1 < u1; n1 += 4)s1 = createNS("stop"), i1.appendChild(s1), a1.push(s1);
            t1.setAttribute(e1.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r1 + ")"), this.gf = i1, this.cst = a1;
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t1, e1) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var r1, i1, a1, s1 = createNS("mask"), n1 = createNS("path");
                s1.appendChild(n1);
                var u1 = createElementID(), h1 = createElementID();
                s1.setAttribute("id", h1);
                var g1 = createNS(t1.t === 1 ? "linearGradient" : "radialGradient");
                g1.setAttribute("id", u1), g1.setAttribute("spreadMethod", "pad"), g1.setAttribute("gradientUnits", "userSpaceOnUse"), a1 = t1.g.k.k[0].s ? t1.g.k.k[0].s.length : t1.g.k.k.length;
                var v1 = this.stops;
                for(i1 = t1.g.p * 4; i1 < a1; i1 += 2)r1 = createNS("stop"), r1.setAttribute("stop-color", "rgb(255,255,255)"), g1.appendChild(r1), v1.push(r1);
                n1.setAttribute(t1.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + u1 + ")"), t1.ty === "gs" && (n1.setAttribute("stroke-linecap", lineCapEnum[t1.lc || 2]), n1.setAttribute("stroke-linejoin", lineJoinEnum[t1.lj || 2]), t1.lj === 1 && n1.setAttribute("stroke-miterlimit", t1.ml)), this.of = g1, this.ms = s1, this.ost = v1, this.maskId = h1, e1.msElem = n1;
            }
        }, extendPrototype([
            DynamicPropertyContainer
        ], SVGGradientFillStyleData);
        function SVGGradientStrokeStyleData(t1, e1, r1) {
            this.initDynamicPropertyContainer(t1), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t1, e1.w, 0, null, this), this.d = new DashProperty(t1, e1.d || {}, "svg", this), this.initGradientData(t1, e1, r1), this._isAnimated = !!this._isAnimated;
        }
        extendPrototype([
            SVGGradientFillStyleData,
            DynamicPropertyContainer
        ], SVGGradientStrokeStyleData);
        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g");
        }
        function SVGTransformData(t1, e1, r1) {
            this.transform = {
                mProps: t1,
                op: e1,
                container: r1
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
        }
        var buildShapeString = function(t1, e1, r1, i1) {
            if (e1 === 0) return "";
            var a1 = t1.o, s1 = t1.i, n1 = t1.v, u1, h1 = " M" + i1.applyToPointStringified(n1[0][0], n1[0][1]);
            for(u1 = 1; u1 < e1; u1 += 1)h1 += " C" + i1.applyToPointStringified(a1[u1 - 1][0], a1[u1 - 1][1]) + " " + i1.applyToPointStringified(s1[u1][0], s1[u1][1]) + " " + i1.applyToPointStringified(n1[u1][0], n1[u1][1]);
            return r1 && e1 && (h1 += " C" + i1.applyToPointStringified(a1[u1 - 1][0], a1[u1 - 1][1]) + " " + i1.applyToPointStringified(s1[0][0], s1[0][1]) + " " + i1.applyToPointStringified(n1[0][0], n1[0][1]), h1 += "z"), h1;
        }, SVGElementsRenderer = function() {
            var t1 = new Matrix, e1 = new Matrix, r1 = {
                createRenderFunction: i1
            };
            function i1(E1) {
                switch(E1.ty){
                    case "fl":
                        return u1;
                    case "gf":
                        return g1;
                    case "gs":
                        return h1;
                    case "st":
                        return v1;
                    case "sh":
                    case "el":
                    case "rc":
                    case "sr":
                        return n1;
                    case "tr":
                        return a1;
                    case "no":
                        return s1;
                    default:
                        return null;
                }
            }
            function a1(E1, m1, b1) {
                (b1 || m1.transform.op._mdf) && m1.transform.container.setAttribute("opacity", m1.transform.op.v), (b1 || m1.transform.mProps._mdf) && m1.transform.container.setAttribute("transform", m1.transform.mProps.v.to2dCSS());
            }
            function s1() {}
            function n1(E1, m1, b1) {
                var y1, d1, A1, p1, o1, l1, c1 = m1.styles.length, P1 = m1.lvl, M1, T1, F1, I1;
                for(l1 = 0; l1 < c1; l1 += 1){
                    if (p1 = m1.sh._mdf || b1, m1.styles[l1].lvl < P1) {
                        for(T1 = e1.reset(), F1 = P1 - m1.styles[l1].lvl, I1 = m1.transformers.length - 1; !p1 && F1 > 0;)p1 = m1.transformers[I1].mProps._mdf || p1, F1 -= 1, I1 -= 1;
                        if (p1) for(F1 = P1 - m1.styles[l1].lvl, I1 = m1.transformers.length - 1; F1 > 0;)T1.multiply(m1.transformers[I1].mProps.v), F1 -= 1, I1 -= 1;
                    } else T1 = t1;
                    if (M1 = m1.sh.paths, d1 = M1._length, p1) {
                        for(A1 = "", y1 = 0; y1 < d1; y1 += 1)o1 = M1.shapes[y1], o1 && o1._length && (A1 += buildShapeString(o1, o1._length, o1.c, T1));
                        m1.caches[l1] = A1;
                    } else A1 = m1.caches[l1];
                    m1.styles[l1].d += E1.hd === !0 ? "" : A1, m1.styles[l1]._mdf = p1 || m1.styles[l1]._mdf;
                }
            }
            function u1(E1, m1, b1) {
                var y1 = m1.style;
                (m1.c._mdf || b1) && y1.pElem.setAttribute("fill", "rgb(" + bmFloor(m1.c.v[0]) + "," + bmFloor(m1.c.v[1]) + "," + bmFloor(m1.c.v[2]) + ")"), (m1.o._mdf || b1) && y1.pElem.setAttribute("fill-opacity", m1.o.v);
            }
            function h1(E1, m1, b1) {
                g1(E1, m1, b1), v1(E1, m1, b1);
            }
            function g1(E1, m1, b1) {
                var y1 = m1.gf, d1 = m1.g._hasOpacity, A1 = m1.s.v, p1 = m1.e.v;
                if (m1.o._mdf || b1) {
                    var o1 = E1.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                    m1.style.pElem.setAttribute(o1, m1.o.v);
                }
                if (m1.s._mdf || b1) {
                    var l1 = E1.t === 1 ? "x1" : "cx", c1 = l1 === "x1" ? "y1" : "cy";
                    y1.setAttribute(l1, A1[0]), y1.setAttribute(c1, A1[1]), d1 && !m1.g._collapsable && (m1.of.setAttribute(l1, A1[0]), m1.of.setAttribute(c1, A1[1]));
                }
                var P1, M1, T1, F1;
                if (m1.g._cmdf || b1) {
                    P1 = m1.cst;
                    var I1 = m1.g.c;
                    for(T1 = P1.length, M1 = 0; M1 < T1; M1 += 1)F1 = P1[M1], F1.setAttribute("offset", I1[M1 * 4] + "%"), F1.setAttribute("stop-color", "rgb(" + I1[M1 * 4 + 1] + "," + I1[M1 * 4 + 2] + "," + I1[M1 * 4 + 3] + ")");
                }
                if (d1 && (m1.g._omdf || b1)) {
                    var R1 = m1.g.o;
                    for(m1.g._collapsable ? P1 = m1.cst : P1 = m1.ost, T1 = P1.length, M1 = 0; M1 < T1; M1 += 1)F1 = P1[M1], m1.g._collapsable || F1.setAttribute("offset", R1[M1 * 2] + "%"), F1.setAttribute("stop-opacity", R1[M1 * 2 + 1]);
                }
                if (E1.t === 1) (m1.e._mdf || b1) && (y1.setAttribute("x2", p1[0]), y1.setAttribute("y2", p1[1]), d1 && !m1.g._collapsable && (m1.of.setAttribute("x2", p1[0]), m1.of.setAttribute("y2", p1[1])));
                else {
                    var L1;
                    if ((m1.s._mdf || m1.e._mdf || b1) && (L1 = Math.sqrt(Math.pow(A1[0] - p1[0], 2) + Math.pow(A1[1] - p1[1], 2)), y1.setAttribute("r", L1), d1 && !m1.g._collapsable && m1.of.setAttribute("r", L1)), m1.e._mdf || m1.h._mdf || m1.a._mdf || b1) {
                        L1 || (L1 = Math.sqrt(Math.pow(A1[0] - p1[0], 2) + Math.pow(A1[1] - p1[1], 2)));
                        var V1 = Math.atan2(p1[1] - A1[1], p1[0] - A1[0]), G1 = m1.h.v;
                        G1 >= 1 ? G1 = .99 : G1 <= -1 && (G1 = -0.99);
                        var C1 = L1 * G1, w1 = Math.cos(V1 + m1.a.v) * C1 + A1[0], _1 = Math.sin(V1 + m1.a.v) * C1 + A1[1];
                        y1.setAttribute("fx", w1), y1.setAttribute("fy", _1), d1 && !m1.g._collapsable && (m1.of.setAttribute("fx", w1), m1.of.setAttribute("fy", _1));
                    }
                }
            }
            function v1(E1, m1, b1) {
                var y1 = m1.style, d1 = m1.d;
                d1 && (d1._mdf || b1) && d1.dashStr && (y1.pElem.setAttribute("stroke-dasharray", d1.dashStr), y1.pElem.setAttribute("stroke-dashoffset", d1.dashoffset[0])), m1.c && (m1.c._mdf || b1) && y1.pElem.setAttribute("stroke", "rgb(" + bmFloor(m1.c.v[0]) + "," + bmFloor(m1.c.v[1]) + "," + bmFloor(m1.c.v[2]) + ")"), (m1.o._mdf || b1) && y1.pElem.setAttribute("stroke-opacity", m1.o.v), (m1.w._mdf || b1) && (y1.pElem.setAttribute("stroke-width", m1.w.v), y1.msElem && y1.msElem.setAttribute("stroke-width", m1.w.v));
            }
            return r1;
        }();
        function SVGShapeElement(t1, e1, r1) {
            this.shapes = [], this.shapesData = t1.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t1, e1, r1), this.prevViewData = [];
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
            var t1, e1 = this.shapes.length, r1, i1, a1 = this.stylesList.length, s1, n1 = [], u1 = !1;
            for(i1 = 0; i1 < a1; i1 += 1){
                for(s1 = this.stylesList[i1], u1 = !1, n1.length = 0, t1 = 0; t1 < e1; t1 += 1)r1 = this.shapes[t1], r1.styles.indexOf(s1) !== -1 && (n1.push(r1), u1 = r1._isAnimated || u1);
                n1.length > 1 && u1 && this.setShapesAsAnimated(n1);
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t1) {
            var e1, r1 = t1.length;
            for(e1 = 0; e1 < r1; e1 += 1)t1[e1].setAsAnimated();
        }, SVGShapeElement.prototype.createStyleElement = function(t1, e1) {
            var r1, i1 = new SVGStyleData(t1, e1), a1 = i1.pElem;
            if (t1.ty === "st") r1 = new SVGStrokeStyleData(this, t1, i1);
            else if (t1.ty === "fl") r1 = new SVGFillStyleData(this, t1, i1);
            else if (t1.ty === "gf" || t1.ty === "gs") {
                var s1 = t1.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                r1 = new s1(this, t1, i1), this.globalData.defs.appendChild(r1.gf), r1.maskId && (this.globalData.defs.appendChild(r1.ms), this.globalData.defs.appendChild(r1.of), a1.setAttribute("mask", "url(" + getLocationHref() + "#" + r1.maskId + ")"));
            } else t1.ty === "no" && (r1 = new SVGNoStyleData(this, t1, i1));
            return (t1.ty === "st" || t1.ty === "gs") && (a1.setAttribute("stroke-linecap", lineCapEnum[t1.lc || 2]), a1.setAttribute("stroke-linejoin", lineJoinEnum[t1.lj || 2]), a1.setAttribute("fill-opacity", "0"), t1.lj === 1 && a1.setAttribute("stroke-miterlimit", t1.ml)), t1.r === 2 && a1.setAttribute("fill-rule", "evenodd"), t1.ln && a1.setAttribute("id", t1.ln), t1.cl && a1.setAttribute("class", t1.cl), t1.bm && (a1.style["mix-blend-mode"] = getBlendMode(t1.bm)), this.stylesList.push(i1), this.addToAnimatedContents(t1, r1), r1;
        }, SVGShapeElement.prototype.createGroupElement = function(t1) {
            var e1 = new ShapeGroupData;
            return t1.ln && e1.gr.setAttribute("id", t1.ln), t1.cl && e1.gr.setAttribute("class", t1.cl), t1.bm && (e1.gr.style["mix-blend-mode"] = getBlendMode(t1.bm)), e1;
        }, SVGShapeElement.prototype.createTransformElement = function(t1, e1) {
            var r1 = TransformPropertyFactory.getTransformProperty(this, t1, this), i1 = new SVGTransformData(r1, r1.o, e1);
            return this.addToAnimatedContents(t1, i1), i1;
        }, SVGShapeElement.prototype.createShapeElement = function(t1, e1, r1) {
            var i1 = 4;
            t1.ty === "rc" ? i1 = 5 : t1.ty === "el" ? i1 = 6 : t1.ty === "sr" && (i1 = 7);
            var a1 = ShapePropertyFactory.getShapeProp(this, t1, i1, this), s1 = new SVGShapeData(e1, r1, a1);
            return this.shapes.push(s1), this.addShapeToModifiers(s1), this.addToAnimatedContents(t1, s1), s1;
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t1, e1) {
            for(var r1 = 0, i1 = this.animatedContents.length; r1 < i1;){
                if (this.animatedContents[r1].element === e1) return;
                r1 += 1;
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t1),
                element: e1,
                data: t1
            });
        }, SVGShapeElement.prototype.setElementStyles = function(t1) {
            var e1 = t1.styles, r1, i1 = this.stylesList.length;
            for(r1 = 0; r1 < i1; r1 += 1)this.stylesList[r1].closed || e1.push(this.stylesList[r1]);
        }, SVGShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t1, e1 = this.itemsData.length;
            for(t1 = 0; t1 < e1; t1 += 1)this.prevViewData[t1] = this.itemsData[t1];
            for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e1 = this.dynamicProperties.length, t1 = 0; t1 < e1; t1 += 1)this.dynamicProperties[t1].getValue();
            this.renderModifiers();
        }, SVGShapeElement.prototype.searchShapes = function(t1, e1, r1, i1, a1, s1, n1) {
            var u1 = [].concat(s1), h1, g1 = t1.length - 1, v1, E1, m1 = [], b1 = [], y1, d1, A1;
            for(h1 = g1; h1 >= 0; h1 -= 1){
                if (A1 = this.searchProcessedElement(t1[h1]), A1 ? e1[h1] = r1[A1 - 1] : t1[h1]._render = n1, t1[h1].ty === "fl" || t1[h1].ty === "st" || t1[h1].ty === "gf" || t1[h1].ty === "gs" || t1[h1].ty === "no") A1 ? e1[h1].style.closed = !1 : e1[h1] = this.createStyleElement(t1[h1], a1), t1[h1]._render && e1[h1].style.pElem.parentNode !== i1 && i1.appendChild(e1[h1].style.pElem), m1.push(e1[h1].style);
                else if (t1[h1].ty === "gr") {
                    if (!A1) e1[h1] = this.createGroupElement(t1[h1]);
                    else for(E1 = e1[h1].it.length, v1 = 0; v1 < E1; v1 += 1)e1[h1].prevViewData[v1] = e1[h1].it[v1];
                    this.searchShapes(t1[h1].it, e1[h1].it, e1[h1].prevViewData, e1[h1].gr, a1 + 1, u1, n1), t1[h1]._render && e1[h1].gr.parentNode !== i1 && i1.appendChild(e1[h1].gr);
                } else t1[h1].ty === "tr" ? (A1 || (e1[h1] = this.createTransformElement(t1[h1], i1)), y1 = e1[h1].transform, u1.push(y1)) : t1[h1].ty === "sh" || t1[h1].ty === "rc" || t1[h1].ty === "el" || t1[h1].ty === "sr" ? (A1 || (e1[h1] = this.createShapeElement(t1[h1], u1, a1)), this.setElementStyles(e1[h1])) : t1[h1].ty === "tm" || t1[h1].ty === "rd" || t1[h1].ty === "ms" || t1[h1].ty === "pb" || t1[h1].ty === "zz" || t1[h1].ty === "op" ? (A1 ? (d1 = e1[h1], d1.closed = !1) : (d1 = ShapeModifiers.getModifier(t1[h1].ty), d1.init(this, t1[h1]), e1[h1] = d1, this.shapeModifiers.push(d1)), b1.push(d1)) : t1[h1].ty === "rp" && (A1 ? (d1 = e1[h1], d1.closed = !0) : (d1 = ShapeModifiers.getModifier(t1[h1].ty), e1[h1] = d1, d1.init(this, t1, h1, e1), this.shapeModifiers.push(d1), n1 = !1), b1.push(d1));
                this.addProcessedElement(t1[h1], h1 + 1);
            }
            for(g1 = m1.length, h1 = 0; h1 < g1; h1 += 1)m1[h1].closed = !0;
            for(g1 = b1.length, h1 = 0; h1 < g1; h1 += 1)b1[h1].closed = !0;
        }, SVGShapeElement.prototype.renderInnerContent = function() {
            this.renderModifiers();
            var t1, e1 = this.stylesList.length;
            for(t1 = 0; t1 < e1; t1 += 1)this.stylesList[t1].reset();
            for(this.renderShape(), t1 = 0; t1 < e1; t1 += 1)(this.stylesList[t1]._mdf || this._isFirstFrame) && (this.stylesList[t1].msElem && (this.stylesList[t1].msElem.setAttribute("d", this.stylesList[t1].d), this.stylesList[t1].d = "M0 0" + this.stylesList[t1].d), this.stylesList[t1].pElem.setAttribute("d", this.stylesList[t1].d || "M0 0"));
        }, SVGShapeElement.prototype.renderShape = function() {
            var t1, e1 = this.animatedContents.length, r1;
            for(t1 = 0; t1 < e1; t1 += 1)r1 = this.animatedContents[t1], (this._isFirstFrame || r1.element._isAnimated) && r1.data !== !0 && r1.fn(r1.data, r1.element, this._isFirstFrame);
        }, SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
        };
        function LetterProps(t1, e1, r1, i1, a1, s1) {
            this.o = t1, this.sw = e1, this.sc = r1, this.fc = i1, this.m = a1, this.p = s1, this._mdf = {
                o: !0,
                sw: !!e1,
                sc: !!r1,
                fc: !!i1,
                m: !0,
                p: !0
            };
        }
        LetterProps.prototype.update = function(t1, e1, r1, i1, a1, s1) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var n1 = !1;
            return this.o !== t1 && (this.o = t1, this._mdf.o = !0, n1 = !0), this.sw !== e1 && (this.sw = e1, this._mdf.sw = !0, n1 = !0), this.sc !== r1 && (this.sc = r1, this._mdf.sc = !0, n1 = !0), this.fc !== i1 && (this.fc = i1, this._mdf.fc = !0, n1 = !0), this.m !== a1 && (this.m = a1, this._mdf.m = !0, n1 = !0), s1.length && (this.p[0] !== s1[0] || this.p[1] !== s1[1] || this.p[4] !== s1[4] || this.p[5] !== s1[5] || this.p[12] !== s1[12] || this.p[13] !== s1[13]) && (this.p = s1, this._mdf.p = !0, n1 = !0), n1;
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
            for(var r1 in e1)Object.prototype.hasOwnProperty.call(e1, r1) && (t1[r1] = e1[r1]);
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
                var e1 = this.currentData, r1 = this.keysIndex;
                if (this.lock) {
                    this.setCurrentData(this.currentData);
                    return;
                }
                this.lock = !0, this._mdf = !1;
                var i1, a1 = this.effectsSequence.length, s1 = t1 || this.data.d.k[this.keysIndex].s;
                for(i1 = 0; i1 < a1; i1 += 1)r1 !== this.keysIndex ? s1 = this.effectsSequence[i1](s1, s1.t) : s1 = this.effectsSequence[i1](this.currentData, s1.t);
                e1 !== s1 && this.setCurrentData(s1), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
        }, TextProperty.prototype.getKeyframeValue = function() {
            for(var t1 = this.data.d.k, e1 = this.elem.comp.renderedFrame, r1 = 0, i1 = t1.length; r1 <= i1 - 1 && !(r1 === i1 - 1 || t1[r1 + 1].t > e1);)r1 += 1;
            return this.keysIndex !== r1 && (this.keysIndex = r1), this.data.d.k[this.keysIndex].s;
        }, TextProperty.prototype.buildFinalText = function(t1) {
            for(var e1 = [], r1 = 0, i1 = t1.length, a1, s1, n1 = !1, u1 = !1, h1 = ""; r1 < i1;)n1 = u1, u1 = !1, a1 = t1.charCodeAt(r1), h1 = t1.charAt(r1), FontManager.isCombinedCharacter(a1) ? n1 = !0 : a1 >= 55296 && a1 <= 56319 ? FontManager.isRegionalFlag(t1, r1) ? h1 = t1.substr(r1, 14) : (s1 = t1.charCodeAt(r1 + 1), s1 >= 56320 && s1 <= 57343 && (FontManager.isModifier(a1, s1) ? (h1 = t1.substr(r1, 2), n1 = !0) : FontManager.isFlagEmoji(t1.substr(r1, 4)) ? h1 = t1.substr(r1, 4) : h1 = t1.substr(r1, 2))) : a1 > 56319 ? (s1 = t1.charCodeAt(r1 + 1), FontManager.isVariationSelector(a1) && (n1 = !0)) : FontManager.isZeroWidthJoiner(a1) && (n1 = !0, u1 = !0), n1 ? (e1[e1.length - 1] += h1, n1 = !1) : e1.push(h1), r1 += h1.length;
            return e1;
        }, TextProperty.prototype.completeTextData = function(t1) {
            t1.__complete = !0;
            var e1 = this.elem.globalData.fontManager, r1 = this.data, i1 = [], a1, s1, n1, u1 = 0, h1, g1 = r1.m.g, v1 = 0, E1 = 0, m1 = 0, b1 = [], y1 = 0, d1 = 0, A1, p1, o1 = e1.getFontByName(t1.f), l1, c1 = 0, P1 = getFontProperties(o1);
            t1.fWeight = P1.weight, t1.fStyle = P1.style, t1.finalSize = t1.s, t1.finalText = this.buildFinalText(t1.t), s1 = t1.finalText.length, t1.finalLineHeight = t1.lh;
            var M1 = t1.tr / 1e3 * t1.finalSize, T1;
            if (t1.sz) for(var F1 = !0, I1 = t1.sz[0], R1 = t1.sz[1], L1, V1; F1;){
                V1 = this.buildFinalText(t1.t), L1 = 0, y1 = 0, s1 = V1.length, M1 = t1.tr / 1e3 * t1.finalSize;
                var G1 = -1;
                for(a1 = 0; a1 < s1; a1 += 1)T1 = V1[a1].charCodeAt(0), n1 = !1, V1[a1] === " " ? G1 = a1 : (T1 === 13 || T1 === 3) && (y1 = 0, n1 = !0, L1 += t1.finalLineHeight || t1.finalSize * 1.2), e1.chars ? (l1 = e1.getCharData(V1[a1], o1.fStyle, o1.fFamily), c1 = n1 ? 0 : l1.w * t1.finalSize / 100) : c1 = e1.measureText(V1[a1], t1.f, t1.finalSize), y1 + c1 > I1 && V1[a1] !== " " ? (G1 === -1 ? s1 += 1 : a1 = G1, L1 += t1.finalLineHeight || t1.finalSize * 1.2, V1.splice(a1, G1 === a1 ? 1 : 0, "\r"), G1 = -1, y1 = 0) : (y1 += c1, y1 += M1);
                L1 += o1.ascent * t1.finalSize / 100, this.canResize && t1.finalSize > this.minimumFontSize && R1 < L1 ? (t1.finalSize -= 1, t1.finalLineHeight = t1.finalSize * t1.lh / t1.s) : (t1.finalText = V1, s1 = t1.finalText.length, F1 = !1);
            }
            y1 = -M1, c1 = 0;
            var C1 = 0, w1;
            for(a1 = 0; a1 < s1; a1 += 1)if (n1 = !1, w1 = t1.finalText[a1], T1 = w1.charCodeAt(0), T1 === 13 || T1 === 3 ? (C1 = 0, b1.push(y1), d1 = y1 > d1 ? y1 : d1, y1 = -2 * M1, h1 = "", n1 = !0, m1 += 1) : h1 = w1, e1.chars ? (l1 = e1.getCharData(w1, o1.fStyle, e1.getFontByName(t1.f).fFamily), c1 = n1 ? 0 : l1.w * t1.finalSize / 100) : c1 = e1.measureText(h1, t1.f, t1.finalSize), w1 === " " ? C1 += c1 + M1 : (y1 += c1 + M1 + C1, C1 = 0), i1.push({
                l: c1,
                an: c1,
                add: v1,
                n: n1,
                anIndexes: [],
                val: h1,
                line: m1,
                animatorJustifyOffset: 0
            }), g1 == 2) {
                if (v1 += c1, h1 === "" || h1 === " " || a1 === s1 - 1) {
                    for((h1 === "" || h1 === " ") && (v1 -= c1); E1 <= a1;)i1[E1].an = v1, i1[E1].ind = u1, i1[E1].extra = c1, E1 += 1;
                    u1 += 1, v1 = 0;
                }
            } else if (g1 == 3) {
                if (v1 += c1, h1 === "" || a1 === s1 - 1) {
                    for(h1 === "" && (v1 -= c1); E1 <= a1;)i1[E1].an = v1, i1[E1].ind = u1, i1[E1].extra = c1, E1 += 1;
                    v1 = 0, u1 += 1;
                }
            } else i1[u1].ind = u1, i1[u1].extra = 0, u1 += 1;
            if (t1.l = i1, d1 = y1 > d1 ? y1 : d1, b1.push(y1), t1.sz) t1.boxWidth = t1.sz[0], t1.justifyOffset = 0;
            else switch(t1.boxWidth = d1, t1.j){
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
            var _1 = r1.a, x1, f1;
            p1 = _1.length;
            var S1, D1, k1 = [];
            for(A1 = 0; A1 < p1; A1 += 1){
                for(x1 = _1[A1], x1.a.sc && (t1.strokeColorAnim = !0), x1.a.sw && (t1.strokeWidthAnim = !0), (x1.a.fc || x1.a.fh || x1.a.fs || x1.a.fb) && (t1.fillColorAnim = !0), D1 = 0, S1 = x1.s.b, a1 = 0; a1 < s1; a1 += 1)f1 = i1[a1], f1.anIndexes[A1] = D1, (S1 == 1 && f1.val !== "" || S1 == 2 && f1.val !== "" && f1.val !== " " || S1 == 3 && (f1.n || f1.val == " " || a1 == s1 - 1) || S1 == 4 && (f1.n || a1 == s1 - 1)) && (x1.s.rn === 1 && k1.push(D1), D1 += 1);
                r1.a[A1].s.totalChars = D1;
                var O1 = -1, B1;
                if (x1.s.rn === 1) for(a1 = 0; a1 < s1; a1 += 1)f1 = i1[a1], O1 != f1.anIndexes[A1] && (O1 = f1.anIndexes[A1], B1 = k1.splice(Math.floor(Math.random() * k1.length), 1)[0]), f1.anIndexes[A1] = B1;
            }
            t1.yOffset = t1.finalLineHeight || t1.finalSize * 1.2, t1.ls = t1.ls || 0, t1.ascent = o1.ascent * t1.finalSize / 100;
        }, TextProperty.prototype.updateDocumentData = function(t1, e1) {
            e1 = e1 === void 0 ? this.keysIndex : e1;
            var r1 = this.copyData({}, this.data.d.k[e1].s);
            r1 = this.copyData(r1, t1), this.data.d.k[e1].s = r1, this.recalculate(e1), this.setCurrentData(r1), this.elem.addDynamicProperty(this);
        }, TextProperty.prototype.recalculate = function(t1) {
            var e1 = this.data.d.k[t1].s;
            e1.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e1);
        }, TextProperty.prototype.canResizeFont = function(t1) {
            this.canResize = t1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        }, TextProperty.prototype.setMinimumFontSize = function(t1) {
            this.minimumFontSize = Math.floor(t1) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        };
        var TextSelectorProp = function() {
            var t1 = Math.max, e1 = Math.min, r1 = Math.floor;
            function i1(s1, n1) {
                this._currentTextLength = -1, this.k = !1, this.data = n1, this.elem = s1, this.comp = s1.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(s1), this.s = PropertyFactory.getProp(s1, n1.s || {
                    k: 0
                }, 0, 0, this), "e" in n1 ? this.e = PropertyFactory.getProp(s1, n1.e, 0, 0, this) : this.e = {
                    v: 100
                }, this.o = PropertyFactory.getProp(s1, n1.o || {
                    k: 0
                }, 0, 0, this), this.xe = PropertyFactory.getProp(s1, n1.xe || {
                    k: 0
                }, 0, 0, this), this.ne = PropertyFactory.getProp(s1, n1.ne || {
                    k: 0
                }, 0, 0, this), this.sm = PropertyFactory.getProp(s1, n1.sm || {
                    k: 100
                }, 0, 0, this), this.a = PropertyFactory.getProp(s1, n1.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
            }
            i1.prototype = {
                getMult: function(s1) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var n1 = 0, u1 = 0, h1 = 1, g1 = 1;
                    this.ne.v > 0 ? n1 = this.ne.v / 100 : u1 = -this.ne.v / 100, this.xe.v > 0 ? h1 = 1 - this.xe.v / 100 : g1 = 1 + this.xe.v / 100;
                    var v1 = BezierFactory.getBezierEasing(n1, u1, h1, g1).get, E1 = 0, m1 = this.finalS, b1 = this.finalE, y1 = this.data.sh;
                    if (y1 === 2) b1 === m1 ? E1 = s1 >= b1 ? 1 : 0 : E1 = t1(0, e1(.5 / (b1 - m1) + (s1 - m1) / (b1 - m1), 1)), E1 = v1(E1);
                    else if (y1 === 3) b1 === m1 ? E1 = s1 >= b1 ? 0 : 1 : E1 = 1 - t1(0, e1(.5 / (b1 - m1) + (s1 - m1) / (b1 - m1), 1)), E1 = v1(E1);
                    else if (y1 === 4) b1 === m1 ? E1 = 0 : (E1 = t1(0, e1(.5 / (b1 - m1) + (s1 - m1) / (b1 - m1), 1)), E1 < .5 ? E1 *= 2 : E1 = 1 - 2 * (E1 - .5)), E1 = v1(E1);
                    else if (y1 === 5) {
                        if (b1 === m1) E1 = 0;
                        else {
                            var d1 = b1 - m1;
                            s1 = e1(t1(0, s1 + .5 - m1), b1 - m1);
                            var A1 = -d1 / 2 + s1, p1 = d1 / 2;
                            E1 = Math.sqrt(1 - A1 * A1 / (p1 * p1));
                        }
                        E1 = v1(E1);
                    } else y1 === 6 ? (b1 === m1 ? E1 = 0 : (s1 = e1(t1(0, s1 + .5 - m1), b1 - m1), E1 = (1 + Math.cos(Math.PI + Math.PI * 2 * s1 / (b1 - m1))) / 2), E1 = v1(E1)) : (s1 >= r1(m1) && (s1 - m1 < 0 ? E1 = t1(0, e1(e1(b1, 1) - (m1 - s1), 1)) : E1 = t1(0, e1(b1 - s1, 1))), E1 = v1(E1));
                    if (this.sm.v !== 100) {
                        var o1 = this.sm.v * .01;
                        o1 === 0 && (o1 = 1e-8);
                        var l1 = .5 - o1 * .5;
                        E1 < l1 ? E1 = 0 : (E1 = (E1 - l1) / o1, E1 > 1 && (E1 = 1));
                    }
                    return E1 * this.a.v;
                },
                getValue: function(s1) {
                    this.iterateDynamicProperties(), this._mdf = s1 || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, s1 && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var n1 = this.data.r === 2 ? 1 : 100 / this.data.totalChars, u1 = this.o.v / n1, h1 = this.s.v / n1 + u1, g1 = this.e.v / n1 + u1;
                    if (h1 > g1) {
                        var v1 = h1;
                        h1 = g1, g1 = v1;
                    }
                    this.finalS = h1, this.finalE = g1;
                }
            }, extendPrototype([
                DynamicPropertyContainer
            ], i1);
            function a1(s1, n1, u1) {
                return new i1(s1, n1);
            }
            return {
                getTextSelectorProp: a1
            };
        }();
        function TextAnimatorDataProperty(t1, e1, r1) {
            var i1 = {
                propType: !1
            }, a1 = PropertyFactory.getProp, s1 = e1.a;
            this.a = {
                r: s1.r ? a1(t1, s1.r, 0, degToRads, r1) : i1,
                rx: s1.rx ? a1(t1, s1.rx, 0, degToRads, r1) : i1,
                ry: s1.ry ? a1(t1, s1.ry, 0, degToRads, r1) : i1,
                sk: s1.sk ? a1(t1, s1.sk, 0, degToRads, r1) : i1,
                sa: s1.sa ? a1(t1, s1.sa, 0, degToRads, r1) : i1,
                s: s1.s ? a1(t1, s1.s, 1, .01, r1) : i1,
                a: s1.a ? a1(t1, s1.a, 1, 0, r1) : i1,
                o: s1.o ? a1(t1, s1.o, 0, .01, r1) : i1,
                p: s1.p ? a1(t1, s1.p, 1, 0, r1) : i1,
                sw: s1.sw ? a1(t1, s1.sw, 0, 0, r1) : i1,
                sc: s1.sc ? a1(t1, s1.sc, 1, 0, r1) : i1,
                fc: s1.fc ? a1(t1, s1.fc, 1, 0, r1) : i1,
                fh: s1.fh ? a1(t1, s1.fh, 0, 0, r1) : i1,
                fs: s1.fs ? a1(t1, s1.fs, 0, .01, r1) : i1,
                fb: s1.fb ? a1(t1, s1.fb, 0, .01, r1) : i1,
                t: s1.t ? a1(t1, s1.t, 0, 0, r1) : i1
            }, this.s = TextSelectorProp.getTextSelectorProp(t1, e1.s, r1), this.s.t = e1.s.t;
        }
        function TextAnimatorProperty(t1, e1, r1) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t1, this._renderType = e1, this._elem = r1, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r1);
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
            var t1, e1 = this._textData.a.length, r1, i1 = PropertyFactory.getProp;
            for(t1 = 0; t1 < e1; t1 += 1)r1 = this._textData.a[t1], this._animatorsData[t1] = new TextAnimatorDataProperty(this._elem, r1, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: i1(this._elem, this._textData.p.a, 0, 0, this),
                f: i1(this._elem, this._textData.p.f, 0, 0, this),
                l: i1(this._elem, this._textData.p.l, 0, 0, this),
                r: i1(this._elem, this._textData.p.r, 0, 0, this),
                p: i1(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i1(this._elem, this._textData.m.a, 1, 0, this);
        }, TextAnimatorProperty.prototype.getMeasures = function(t1, e1) {
            if (this.lettersChangedFlag = e1, !(!this._mdf && !this._isFirstFrame && !e1 && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                this._isFirstFrame = !1;
                var r1 = this._moreOptions.alignment.v, i1 = this._animatorsData, a1 = this._textData, s1 = this.mHelper, n1 = this._renderType, u1 = this.renderedLetters.length, h1, g1, v1, E1, m1 = t1.l, b1, y1, d1, A1, p1, o1, l1, c1, P1, M1, T1, F1, I1, R1, L1;
                if (this._hasMaskedPath) {
                    if (L1 = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var V1 = L1.v;
                        this._pathData.r.v && (V1 = V1.reverse()), b1 = {
                            tLength: 0,
                            segments: []
                        }, E1 = V1._length - 1;
                        var G1;
                        for(F1 = 0, v1 = 0; v1 < E1; v1 += 1)G1 = bez.buildBezierData(V1.v[v1], V1.v[v1 + 1], [
                            V1.o[v1][0] - V1.v[v1][0],
                            V1.o[v1][1] - V1.v[v1][1]
                        ], [
                            V1.i[v1 + 1][0] - V1.v[v1 + 1][0],
                            V1.i[v1 + 1][1] - V1.v[v1 + 1][1]
                        ]), b1.tLength += G1.segmentLength, b1.segments.push(G1), F1 += G1.segmentLength;
                        v1 = E1, L1.v.c && (G1 = bez.buildBezierData(V1.v[v1], V1.v[0], [
                            V1.o[v1][0] - V1.v[v1][0],
                            V1.o[v1][1] - V1.v[v1][1]
                        ], [
                            V1.i[0][0] - V1.v[0][0],
                            V1.i[0][1] - V1.v[0][1]
                        ]), b1.tLength += G1.segmentLength, b1.segments.push(G1), F1 += G1.segmentLength), this._pathData.pi = b1;
                    }
                    if (b1 = this._pathData.pi, y1 = this._pathData.f.v, l1 = 0, o1 = 1, A1 = 0, p1 = !0, M1 = b1.segments, y1 < 0 && L1.v.c) for(b1.tLength < Math.abs(y1) && (y1 = -Math.abs(y1) % b1.tLength), l1 = M1.length - 1, P1 = M1[l1].points, o1 = P1.length - 1; y1 < 0;)y1 += P1[o1].partialLength, o1 -= 1, o1 < 0 && (l1 -= 1, P1 = M1[l1].points, o1 = P1.length - 1);
                    P1 = M1[l1].points, c1 = P1[o1 - 1], d1 = P1[o1], T1 = d1.partialLength;
                }
                E1 = m1.length, h1 = 0, g1 = 0;
                var C1 = t1.finalSize * 1.2 * .714, w1 = !0, _1, x1, f1, S1, D1;
                S1 = i1.length;
                var k1, O1 = -1, B1, j1, N1, H1 = y1, $1 = l1, X1 = o1, Q1 = -1, Z1, W1, K1, q1, z1, et1, st1, rt1, tt1 = "", it1 = this.defaultPropsArray, at1;
                if (t1.j === 2 || t1.j === 1) {
                    var Y1 = 0, nt1 = 0, ot1 = t1.j === 2 ? -0.5 : -1, J1 = 0, ht1 = !0;
                    for(v1 = 0; v1 < E1; v1 += 1)if (m1[v1].n) {
                        for(Y1 && (Y1 += nt1); J1 < v1;)m1[J1].animatorJustifyOffset = Y1, J1 += 1;
                        Y1 = 0, ht1 = !0;
                    } else {
                        for(f1 = 0; f1 < S1; f1 += 1)_1 = i1[f1].a, _1.t.propType && (ht1 && t1.j === 2 && (nt1 += _1.t.v * ot1), x1 = i1[f1].s, k1 = x1.getMult(m1[v1].anIndexes[f1], a1.a[f1].s.totalChars), k1.length ? Y1 += _1.t.v * k1[0] * ot1 : Y1 += _1.t.v * k1 * ot1);
                        ht1 = !1;
                    }
                    for(Y1 && (Y1 += nt1); J1 < v1;)m1[J1].animatorJustifyOffset = Y1, J1 += 1;
                }
                for(v1 = 0; v1 < E1; v1 += 1){
                    if (s1.reset(), Z1 = 1, m1[v1].n) h1 = 0, g1 += t1.yOffset, g1 += w1 ? 1 : 0, y1 = H1, w1 = !1, this._hasMaskedPath && (l1 = $1, o1 = X1, P1 = M1[l1].points, c1 = P1[o1 - 1], d1 = P1[o1], T1 = d1.partialLength, A1 = 0), tt1 = "", rt1 = "", et1 = "", at1 = "", it1 = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Q1 !== m1[v1].line) {
                                switch(t1.j){
                                    case 1:
                                        y1 += F1 - t1.lineWidths[m1[v1].line];
                                        break;
                                    case 2:
                                        y1 += (F1 - t1.lineWidths[m1[v1].line]) / 2;
                                        break;
                                }
                                Q1 = m1[v1].line;
                            }
                            O1 !== m1[v1].ind && (m1[O1] && (y1 += m1[O1].extra), y1 += m1[v1].an / 2, O1 = m1[v1].ind), y1 += r1[0] * m1[v1].an * .005;
                            var U1 = 0;
                            for(f1 = 0; f1 < S1; f1 += 1)_1 = i1[f1].a, _1.p.propType && (x1 = i1[f1].s, k1 = x1.getMult(m1[v1].anIndexes[f1], a1.a[f1].s.totalChars), k1.length ? U1 += _1.p.v[0] * k1[0] : U1 += _1.p.v[0] * k1), _1.a.propType && (x1 = i1[f1].s, k1 = x1.getMult(m1[v1].anIndexes[f1], a1.a[f1].s.totalChars), k1.length ? U1 += _1.a.v[0] * k1[0] : U1 += _1.a.v[0] * k1);
                            for(p1 = !0, this._pathData.a.v && (y1 = m1[0].an * .5 + (F1 - this._pathData.f.v - m1[0].an * .5 - m1[m1.length - 1].an * .5) * O1 / (E1 - 1), y1 += this._pathData.f.v); p1;)A1 + T1 >= y1 + U1 || !P1 ? (I1 = (y1 + U1 - A1) / d1.partialLength, j1 = c1.point[0] + (d1.point[0] - c1.point[0]) * I1, N1 = c1.point[1] + (d1.point[1] - c1.point[1]) * I1, s1.translate(-r1[0] * m1[v1].an * .005, -(r1[1] * C1) * .01), p1 = !1) : P1 && (A1 += d1.partialLength, o1 += 1, o1 >= P1.length && (o1 = 0, l1 += 1, M1[l1] ? P1 = M1[l1].points : L1.v.c ? (o1 = 0, l1 = 0, P1 = M1[l1].points) : (A1 -= d1.partialLength, P1 = null)), P1 && (c1 = d1, d1 = P1[o1], T1 = d1.partialLength));
                            B1 = m1[v1].an / 2 - m1[v1].add, s1.translate(-B1, 0, 0);
                        } else B1 = m1[v1].an / 2 - m1[v1].add, s1.translate(-B1, 0, 0), s1.translate(-r1[0] * m1[v1].an * .005, -r1[1] * C1 * .01, 0);
                        for(f1 = 0; f1 < S1; f1 += 1)_1 = i1[f1].a, _1.t.propType && (x1 = i1[f1].s, k1 = x1.getMult(m1[v1].anIndexes[f1], a1.a[f1].s.totalChars), (h1 !== 0 || t1.j !== 0) && (this._hasMaskedPath ? k1.length ? y1 += _1.t.v * k1[0] : y1 += _1.t.v * k1 : k1.length ? h1 += _1.t.v * k1[0] : h1 += _1.t.v * k1));
                        for(t1.strokeWidthAnim && (K1 = t1.sw || 0), t1.strokeColorAnim && (t1.sc ? W1 = [
                            t1.sc[0],
                            t1.sc[1],
                            t1.sc[2]
                        ] : W1 = [
                            0,
                            0,
                            0
                        ]), t1.fillColorAnim && t1.fc && (q1 = [
                            t1.fc[0],
                            t1.fc[1],
                            t1.fc[2]
                        ]), f1 = 0; f1 < S1; f1 += 1)_1 = i1[f1].a, _1.a.propType && (x1 = i1[f1].s, k1 = x1.getMult(m1[v1].anIndexes[f1], a1.a[f1].s.totalChars), k1.length ? s1.translate(-_1.a.v[0] * k1[0], -_1.a.v[1] * k1[1], _1.a.v[2] * k1[2]) : s1.translate(-_1.a.v[0] * k1, -_1.a.v[1] * k1, _1.a.v[2] * k1));
                        for(f1 = 0; f1 < S1; f1 += 1)_1 = i1[f1].a, _1.s.propType && (x1 = i1[f1].s, k1 = x1.getMult(m1[v1].anIndexes[f1], a1.a[f1].s.totalChars), k1.length ? s1.scale(1 + (_1.s.v[0] - 1) * k1[0], 1 + (_1.s.v[1] - 1) * k1[1], 1) : s1.scale(1 + (_1.s.v[0] - 1) * k1, 1 + (_1.s.v[1] - 1) * k1, 1));
                        for(f1 = 0; f1 < S1; f1 += 1){
                            if (_1 = i1[f1].a, x1 = i1[f1].s, k1 = x1.getMult(m1[v1].anIndexes[f1], a1.a[f1].s.totalChars), _1.sk.propType && (k1.length ? s1.skewFromAxis(-_1.sk.v * k1[0], _1.sa.v * k1[1]) : s1.skewFromAxis(-_1.sk.v * k1, _1.sa.v * k1)), _1.r.propType && (k1.length ? s1.rotateZ(-_1.r.v * k1[2]) : s1.rotateZ(-_1.r.v * k1)), _1.ry.propType && (k1.length ? s1.rotateY(_1.ry.v * k1[1]) : s1.rotateY(_1.ry.v * k1)), _1.rx.propType && (k1.length ? s1.rotateX(_1.rx.v * k1[0]) : s1.rotateX(_1.rx.v * k1)), _1.o.propType && (k1.length ? Z1 += (_1.o.v * k1[0] - Z1) * k1[0] : Z1 += (_1.o.v * k1 - Z1) * k1), t1.strokeWidthAnim && _1.sw.propType && (k1.length ? K1 += _1.sw.v * k1[0] : K1 += _1.sw.v * k1), t1.strokeColorAnim && _1.sc.propType) for(z1 = 0; z1 < 3; z1 += 1)k1.length ? W1[z1] += (_1.sc.v[z1] - W1[z1]) * k1[0] : W1[z1] += (_1.sc.v[z1] - W1[z1]) * k1;
                            if (t1.fillColorAnim && t1.fc) {
                                if (_1.fc.propType) for(z1 = 0; z1 < 3; z1 += 1)k1.length ? q1[z1] += (_1.fc.v[z1] - q1[z1]) * k1[0] : q1[z1] += (_1.fc.v[z1] - q1[z1]) * k1;
                                _1.fh.propType && (k1.length ? q1 = addHueToRGB(q1, _1.fh.v * k1[0]) : q1 = addHueToRGB(q1, _1.fh.v * k1)), _1.fs.propType && (k1.length ? q1 = addSaturationToRGB(q1, _1.fs.v * k1[0]) : q1 = addSaturationToRGB(q1, _1.fs.v * k1)), _1.fb.propType && (k1.length ? q1 = addBrightnessToRGB(q1, _1.fb.v * k1[0]) : q1 = addBrightnessToRGB(q1, _1.fb.v * k1));
                            }
                        }
                        for(f1 = 0; f1 < S1; f1 += 1)_1 = i1[f1].a, _1.p.propType && (x1 = i1[f1].s, k1 = x1.getMult(m1[v1].anIndexes[f1], a1.a[f1].s.totalChars), this._hasMaskedPath ? k1.length ? s1.translate(0, _1.p.v[1] * k1[0], -_1.p.v[2] * k1[1]) : s1.translate(0, _1.p.v[1] * k1, -_1.p.v[2] * k1) : k1.length ? s1.translate(_1.p.v[0] * k1[0], _1.p.v[1] * k1[1], -_1.p.v[2] * k1[2]) : s1.translate(_1.p.v[0] * k1, _1.p.v[1] * k1, -_1.p.v[2] * k1));
                        if (t1.strokeWidthAnim && (et1 = K1 < 0 ? 0 : K1), t1.strokeColorAnim && (st1 = "rgb(" + Math.round(W1[0] * 255) + "," + Math.round(W1[1] * 255) + "," + Math.round(W1[2] * 255) + ")"), t1.fillColorAnim && t1.fc && (rt1 = "rgb(" + Math.round(q1[0] * 255) + "," + Math.round(q1[1] * 255) + "," + Math.round(q1[2] * 255) + ")"), this._hasMaskedPath) {
                            if (s1.translate(0, -t1.ls), s1.translate(0, r1[1] * C1 * .01 + g1, 0), this._pathData.p.v) {
                                R1 = (d1.point[1] - c1.point[1]) / (d1.point[0] - c1.point[0]);
                                var lt1 = Math.atan(R1) * 180 / Math.PI;
                                d1.point[0] < c1.point[0] && (lt1 += 180), s1.rotate(-lt1 * Math.PI / 180);
                            }
                            s1.translate(j1, N1, 0), y1 -= r1[0] * m1[v1].an * .005, m1[v1 + 1] && O1 !== m1[v1 + 1].ind && (y1 += m1[v1].an / 2, y1 += t1.tr * .001 * t1.finalSize);
                        } else {
                            switch(s1.translate(h1, g1, 0), t1.ps && s1.translate(t1.ps[0], t1.ps[1] + t1.ascent, 0), t1.j){
                                case 1:
                                    s1.translate(m1[v1].animatorJustifyOffset + t1.justifyOffset + (t1.boxWidth - t1.lineWidths[m1[v1].line]), 0, 0);
                                    break;
                                case 2:
                                    s1.translate(m1[v1].animatorJustifyOffset + t1.justifyOffset + (t1.boxWidth - t1.lineWidths[m1[v1].line]) / 2, 0, 0);
                                    break;
                            }
                            s1.translate(0, -t1.ls), s1.translate(B1, 0, 0), s1.translate(r1[0] * m1[v1].an * .005, r1[1] * C1 * .01, 0), h1 += m1[v1].l + t1.tr * .001 * t1.finalSize;
                        }
                        n1 === "html" ? tt1 = s1.toCSS() : n1 === "svg" ? tt1 = s1.to2dCSS() : it1 = [
                            s1.props[0],
                            s1.props[1],
                            s1.props[2],
                            s1.props[3],
                            s1.props[4],
                            s1.props[5],
                            s1.props[6],
                            s1.props[7],
                            s1.props[8],
                            s1.props[9],
                            s1.props[10],
                            s1.props[11],
                            s1.props[12],
                            s1.props[13],
                            s1.props[14],
                            s1.props[15]
                        ], at1 = Z1;
                    }
                    u1 <= v1 ? (D1 = new LetterProps(at1, et1, st1, rt1, tt1, it1), this.renderedLetters.push(D1), u1 += 1, this.lettersChangedFlag = !0) : (D1 = this.renderedLetters[v1], this.lettersChangedFlag = D1.update(at1, et1, st1, rt1, tt1, it1) || this.lettersChangedFlag);
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([
            DynamicPropertyContainer
        ], TextAnimatorProperty);
        function ITextElement() {}
        ITextElement.prototype.initElement = function(t1, e1, r1) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t1, e1, r1), this.textProperty = new TextProperty(this, t1.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t1.t, this.renderType, this), this.initTransform(t1, e1, r1), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
        }, ITextElement.prototype.prepareFrame = function(t1) {
            this._mdf = !1, this.prepareRenderableFrame(t1), this.prepareProperties(t1, this.isInRange);
        }, ITextElement.prototype.createPathShape = function(t1, e1) {
            var r1, i1 = e1.length, a1, s1 = "";
            for(r1 = 0; r1 < i1; r1 += 1)e1[r1].ty === "sh" && (a1 = e1[r1].ks.k, s1 += buildShapeString(a1, a1.i.length, !0, t1));
            return s1;
        }, ITextElement.prototype.updateDocumentData = function(t1, e1) {
            this.textProperty.updateDocumentData(t1, e1);
        }, ITextElement.prototype.canResizeFont = function(t1) {
            this.textProperty.canResizeFont(t1);
        }, ITextElement.prototype.setMinimumFontSize = function(t1) {
            this.textProperty.setMinimumFontSize(t1);
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t1, e1, r1, i1, a1) {
            switch(t1.ps && e1.translate(t1.ps[0], t1.ps[1] + t1.ascent, 0), e1.translate(0, -t1.ls, 0), t1.j){
                case 1:
                    e1.translate(t1.justifyOffset + (t1.boxWidth - t1.lineWidths[r1]), 0, 0);
                    break;
                case 2:
                    e1.translate(t1.justifyOffset + (t1.boxWidth - t1.lineWidths[r1]) / 2, 0, 0);
                    break;
            }
            e1.translate(i1, a1, 0);
        }, ITextElement.prototype.buildColor = function(t1) {
            return "rgb(" + Math.round(t1[0] * 255) + "," + Math.round(t1[1] * 255) + "," + Math.round(t1[2] * 255) + ")";
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
        };
        var emptyShapeData = {
            shapes: []
        };
        function SVGTextLottieElement(t1, e1, r1) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t1, e1, r1);
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
            for(var e1 = 0, r1 = t1.length, i1 = [], a1 = ""; e1 < r1;)t1[e1] === String.fromCharCode(13) || t1[e1] === String.fromCharCode(3) ? (i1.push(a1), a1 = "") : a1 += t1[e1], e1 += 1;
            return i1.push(a1), i1;
        }, SVGTextLottieElement.prototype.buildShapeData = function(t1, e1) {
            if (t1.shapes && t1.shapes.length) {
                var r1 = t1.shapes[0];
                if (r1.it) {
                    var i1 = r1.it[r1.it.length - 1];
                    i1.s && (i1.s.k[0] = e1, i1.s.k[1] = e1);
                }
            }
            return t1;
        }, SVGTextLottieElement.prototype.buildNewText = function() {
            this.addDynamicProperty(this);
            var t1, e1, r1 = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(r1 ? r1.l.length : 0), r1.fc ? this.layerElement.setAttribute("fill", this.buildColor(r1.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r1.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r1.sc)), this.layerElement.setAttribute("stroke-width", r1.sw)), this.layerElement.setAttribute("font-size", r1.finalSize);
            var i1 = this.globalData.fontManager.getFontByName(r1.f);
            if (i1.fClass) this.layerElement.setAttribute("class", i1.fClass);
            else {
                this.layerElement.setAttribute("font-family", i1.fFamily);
                var a1 = r1.fWeight, s1 = r1.fStyle;
                this.layerElement.setAttribute("font-style", s1), this.layerElement.setAttribute("font-weight", a1);
            }
            this.layerElement.setAttribute("aria-label", r1.t);
            var n1 = r1.l || [], u1 = !!this.globalData.fontManager.chars;
            e1 = n1.length;
            var h1, g1 = this.mHelper, v1 = "", E1 = this.data.singleShape, m1 = 0, b1 = 0, y1 = !0, d1 = r1.tr * .001 * r1.finalSize;
            if (E1 && !u1 && !r1.sz) {
                var A1 = this.textContainer, p1 = "start";
                switch(r1.j){
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
                A1.setAttribute("text-anchor", p1), A1.setAttribute("letter-spacing", d1);
                var o1 = this.buildTextContents(r1.finalText);
                for(e1 = o1.length, b1 = r1.ps ? r1.ps[1] + r1.ascent : 0, t1 = 0; t1 < e1; t1 += 1)h1 = this.textSpans[t1].span || createNS("tspan"), h1.textContent = o1[t1], h1.setAttribute("x", 0), h1.setAttribute("y", b1), h1.style.display = "inherit", A1.appendChild(h1), this.textSpans[t1] || (this.textSpans[t1] = {
                    span: null,
                    glyph: null
                }), this.textSpans[t1].span = h1, b1 += r1.finalLineHeight;
                this.layerElement.appendChild(A1);
            } else {
                var l1 = this.textSpans.length, c1;
                for(t1 = 0; t1 < e1; t1 += 1){
                    if (this.textSpans[t1] || (this.textSpans[t1] = {
                        span: null,
                        childSpan: null,
                        glyph: null
                    }), !u1 || !E1 || t1 === 0) {
                        if (h1 = l1 > t1 ? this.textSpans[t1].span : createNS(u1 ? "g" : "text"), l1 <= t1) {
                            if (h1.setAttribute("stroke-linecap", "butt"), h1.setAttribute("stroke-linejoin", "round"), h1.setAttribute("stroke-miterlimit", "4"), this.textSpans[t1].span = h1, u1) {
                                var P1 = createNS("g");
                                h1.appendChild(P1), this.textSpans[t1].childSpan = P1;
                            }
                            this.textSpans[t1].span = h1, this.layerElement.appendChild(h1);
                        }
                        h1.style.display = "inherit";
                    }
                    if (g1.reset(), E1 && (n1[t1].n && (m1 = -d1, b1 += r1.yOffset, b1 += y1 ? 1 : 0, y1 = !1), this.applyTextPropertiesToMatrix(r1, g1, n1[t1].line, m1, b1), m1 += n1[t1].l || 0, m1 += d1), u1) {
                        c1 = this.globalData.fontManager.getCharData(r1.finalText[t1], i1.fStyle, this.globalData.fontManager.getFontByName(r1.f).fFamily);
                        var M1;
                        if (c1.t === 1) M1 = new SVGCompElement(c1.data, this.globalData, this);
                        else {
                            var T1 = emptyShapeData;
                            c1.data && c1.data.shapes && (T1 = this.buildShapeData(c1.data, r1.finalSize)), M1 = new SVGShapeElement(T1, this.globalData, this);
                        }
                        if (this.textSpans[t1].glyph) {
                            var F1 = this.textSpans[t1].glyph;
                            this.textSpans[t1].childSpan.removeChild(F1.layerElement), F1.destroy();
                        }
                        this.textSpans[t1].glyph = M1, M1._debug = !0, M1.prepareFrame(0), M1.renderFrame(), this.textSpans[t1].childSpan.appendChild(M1.layerElement), c1.t === 1 && this.textSpans[t1].childSpan.setAttribute("transform", "scale(" + r1.finalSize / 100 + "," + r1.finalSize / 100 + ")");
                    } else E1 && h1.setAttribute("transform", "translate(" + g1.props[12] + "," + g1.props[13] + ")"), h1.textContent = n1[t1].val, h1.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                }
                E1 && h1 && h1.setAttribute("d", v1);
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
            var t1, e1 = this.textSpans.length, r1;
            for(this.renderedFrame = this.comp.renderedFrame, t1 = 0; t1 < e1; t1 += 1)r1 = this.textSpans[t1].glyph, r1 && (r1.prepareFrame(this.comp.renderedFrame - this.data.st), r1._mdf && (this._mdf = !0));
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
            if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                this._sizeChanged = !0;
                var t1, e1, r1 = this.textAnimator.renderedLetters, i1 = this.textProperty.currentData.l;
                e1 = i1.length;
                var a1, s1, n1;
                for(t1 = 0; t1 < e1; t1 += 1)i1[t1].n || (a1 = r1[t1], s1 = this.textSpans[t1].span, n1 = this.textSpans[t1].glyph, n1 && n1.renderFrame(), a1._mdf.m && s1.setAttribute("transform", a1.m), a1._mdf.o && s1.setAttribute("opacity", a1.o), a1._mdf.sw && s1.setAttribute("stroke-width", a1.sw), a1._mdf.sc && s1.setAttribute("stroke", a1.sc), a1._mdf.fc && s1.setAttribute("fill", a1.fc));
            }
        };
        function ISolidElement(t1, e1, r1) {
            this.initElement(t1, e1, r1);
        }
        extendPrototype([
            IImageElement
        ], ISolidElement), ISolidElement.prototype.createContent = function() {
            var t1 = createNS("rect");
            t1.setAttribute("width", this.data.sw), t1.setAttribute("height", this.data.sh), t1.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t1);
        };
        function NullElement(t1, e1, r1) {
            this.initFrame(), this.initBaseData(t1, e1, r1), this.initFrame(), this.initTransform(t1, e1, r1), this.initHierarchy();
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
            var r1 = createNS("clipPath"), i1 = createNS("rect");
            i1.setAttribute("width", t1.w), i1.setAttribute("height", t1.h), i1.setAttribute("x", 0), i1.setAttribute("y", 0);
            var a1 = createElementID();
            r1.setAttribute("id", a1), r1.appendChild(i1), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a1 + ")"), e1.appendChild(r1), this.layers = t1.layers, this.elements = createSizedArray(t1.layers.length);
        }, SVGRendererBase.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var t1, e1 = this.layers ? this.layers.length : 0;
            for(t1 = 0; t1 < e1; t1 += 1)this.elements[t1] && this.elements[t1].destroy && this.elements[t1].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t1) {
            var e1 = 0, r1 = this.layers.length;
            for(e1 = 0; e1 < r1; e1 += 1)if (this.layers[e1].ind === t1) return e1;
            return -1;
        }, SVGRendererBase.prototype.buildItem = function(t1) {
            var e1 = this.elements;
            if (!(e1[t1] || this.layers[t1].ty === 99)) {
                e1[t1] = !0;
                var r1 = this.createItem(this.layers[t1]);
                if (e1[t1] = r1, getExpressionsPlugin() && (this.layers[t1].ty === 0 && this.globalData.projectInterface.registerComposition(r1), r1.initExpressions()), this.appendElementInPos(r1, t1), this.layers[t1].tt) {
                    var i1 = "tp" in this.layers[t1] ? this.findIndexByInd(this.layers[t1].tp) : t1 - 1;
                    if (i1 === -1) return;
                    if (!this.elements[i1] || this.elements[i1] === !0) this.buildItem(i1), this.addPendingElement(r1);
                    else {
                        var a1 = e1[i1], s1 = a1.getMatte(this.layers[t1].tt);
                        r1.setMatte(s1);
                    }
                }
            }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
            for(; this.pendingElements.length;){
                var t1 = this.pendingElements.pop();
                if (t1.checkParenting(), t1.data.tt) for(var e1 = 0, r1 = this.elements.length; e1 < r1;){
                    if (this.elements[e1] === t1) {
                        var i1 = "tp" in t1.data ? this.findIndexByInd(t1.data.tp) : e1 - 1, a1 = this.elements[i1], s1 = a1.getMatte(this.layers[e1].tt);
                        t1.setMatte(s1);
                        break;
                    }
                    e1 += 1;
                }
            }
        }, SVGRendererBase.prototype.renderFrame = function(t1) {
            if (!(this.renderedFrame === t1 || this.destroyed)) {
                t1 === null ? t1 = this.renderedFrame : this.renderedFrame = t1, this.globalData.frameNum = t1, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t1, this.globalData._mdf = !1;
                var e1, r1 = this.layers.length;
                for(this.completeLayers || this.checkLayers(t1), e1 = r1 - 1; e1 >= 0; e1 -= 1)(this.completeLayers || this.elements[e1]) && this.elements[e1].prepareFrame(t1 - this.layers[e1].st);
                if (this.globalData._mdf) for(e1 = 0; e1 < r1; e1 += 1)(this.completeLayers || this.elements[e1]) && this.elements[e1].renderFrame();
            }
        }, SVGRendererBase.prototype.appendElementInPos = function(t1, e1) {
            var r1 = t1.getBaseElement();
            if (r1) {
                for(var i1 = 0, a1; i1 < e1;)this.elements[i1] && this.elements[i1] !== !0 && this.elements[i1].getBaseElement() && (a1 = this.elements[i1].getBaseElement()), i1 += 1;
                a1 ? this.layerElement.insertBefore(r1, a1) : this.layerElement.appendChild(r1);
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
        ], ICompElement), ICompElement.prototype.initElement = function(t1, e1, r1) {
            this.initFrame(), this.initBaseData(t1, e1, r1), this.initTransform(t1, e1, r1), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e1.progressiveLoad) && this.buildAllItems(), this.hide();
        }, ICompElement.prototype.prepareFrame = function(t1) {
            if (this._mdf = !1, this.prepareRenderableFrame(t1), this.prepareProperties(t1, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                if (this.tm._placeholder) this.renderedFrame = t1 / this.data.sr;
                else {
                    var e1 = this.tm.v;
                    e1 === this.data.op && (e1 = this.data.op - 1), this.renderedFrame = e1;
                }
                var r1, i1 = this.elements.length;
                for(this.completeLayers || this.checkLayers(this.renderedFrame), r1 = i1 - 1; r1 >= 0; r1 -= 1)(this.completeLayers || this.elements[r1]) && (this.elements[r1].prepareFrame(this.renderedFrame - this.layers[r1].st), this.elements[r1]._mdf && (this._mdf = !0));
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
        function SVGCompElement(t1, e1, r1) {
            this.layers = t1.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t1, e1, r1), this.tm = t1.tm ? PropertyFactory.getProp(this, t1.tm, 0, e1.frameRate, this) : {
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
            var r1 = "";
            if (e1 && e1.title) {
                var i1 = createNS("title"), a1 = createElementID();
                i1.setAttribute("id", a1), i1.textContent = e1.title, this.svgElement.appendChild(i1), r1 += a1;
            }
            if (e1 && e1.description) {
                var s1 = createNS("desc"), n1 = createElementID();
                s1.setAttribute("id", n1), s1.textContent = e1.description, this.svgElement.appendChild(s1), r1 += " " + n1;
            }
            r1 && this.svgElement.setAttribute("aria-labelledby", r1);
            var u1 = createNS("defs");
            this.svgElement.appendChild(u1);
            var h1 = createNS("g");
            this.svgElement.appendChild(h1), this.layerElement = h1, this.renderConfig = {
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
                defs: u1,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
        }
        extendPrototype([
            SVGRendererBase
        ], SVGRenderer), SVGRenderer.prototype.createComp = function(t1) {
            return new SVGCompElement(t1, this.globalData, this);
        }, registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier);
        var CompExpressionInterface = function() {
            return function(t1) {
                function e1(r1) {
                    for(var i1 = 0, a1 = t1.layers.length; i1 < a1;){
                        if (t1.layers[i1].nm === r1 || t1.layers[i1].ind === r1) return t1.elements[i1].layerInterface;
                        i1 += 1;
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
            var r1 = this, i1 = 256, a1 = 6, s1 = 52, n1 = "random", u1 = e1.pow(i1, a1), h1 = e1.pow(2, s1), g1 = h1 * 2, v1 = i1 - 1;
            function m1(l1, c1, P1) {
                var M1 = [];
                c1 = c1 === !0 ? {
                    entropy: !0
                } : c1 || {};
                var T1 = A1(d1(c1.entropy ? [
                    l1,
                    o1(t1)
                ] : l1 === null ? p1() : l1, 3), M1), F1 = new b1(M1), I1 = function() {
                    for(var R1 = F1.g(a1), L1 = u1, V1 = 0; R1 < h1;)R1 = (R1 + V1) * i1, L1 *= i1, V1 = F1.g(1);
                    for(; R1 >= g1;)R1 /= 2, L1 /= 2, V1 >>>= 1;
                    return (R1 + V1) / L1;
                };
                return I1.int32 = function() {
                    return F1.g(4) | 0;
                }, I1.quick = function() {
                    return F1.g(4) / 4294967296;
                }, I1.double = I1, A1(o1(F1.S), t1), (c1.pass || P1 || function(R1, L1, V1, G1) {
                    return G1 && (G1.S && y1(G1, F1), R1.state = function() {
                        return y1(F1, {});
                    }), V1 ? (e1[n1] = R1, L1) : R1;
                })(I1, T1, "global" in c1 ? c1.global : this == e1, c1.state);
            }
            e1["seed" + n1] = m1;
            function b1(l1) {
                var c1, P1 = l1.length, M1 = this, T1 = 0, F1 = M1.i = M1.j = 0, I1 = M1.S = [];
                for(P1 || (l1 = [
                    P1++
                ]); T1 < i1;)I1[T1] = T1++;
                for(T1 = 0; T1 < i1; T1++)I1[T1] = I1[F1 = v1 & F1 + l1[T1 % P1] + (c1 = I1[T1])], I1[F1] = c1;
                M1.g = function(R1) {
                    for(var L1, V1 = 0, G1 = M1.i, C1 = M1.j, w1 = M1.S; R1--;)L1 = w1[G1 = v1 & G1 + 1], V1 = V1 * i1 + w1[v1 & (w1[G1] = w1[C1 = v1 & C1 + L1]) + (w1[C1] = L1)];
                    return M1.i = G1, M1.j = C1, V1;
                };
            }
            function y1(l1, c1) {
                return c1.i = l1.i, c1.j = l1.j, c1.S = l1.S.slice(), c1;
            }
            function d1(l1, c1) {
                var P1 = [], M1 = _typeof$2(l1), T1;
                if (c1 && M1 == "object") for(T1 in l1)try {
                    P1.push(d1(l1[T1], c1 - 1));
                } catch  {}
                return P1.length ? P1 : M1 == "string" ? l1 : l1 + "\x00";
            }
            function A1(l1, c1) {
                for(var P1 = l1 + "", M1, T1 = 0; T1 < P1.length;)c1[v1 & T1] = v1 & (M1 ^= c1[v1 & T1] * 19) + P1.charCodeAt(T1++);
                return o1(c1);
            }
            function p1() {
                try {
                    var l1 = new Uint8Array(i1);
                    return (r1.crypto || r1.msCrypto).getRandomValues(l1), o1(l1);
                } catch  {
                    var c1 = r1.navigator, P1 = c1 && c1.plugins;
                    return [
                        +new Date,
                        r1,
                        P1,
                        r1.screen,
                        o1(t1)
                    ];
                }
            }
            function o1(l1) {
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
                    var r1, i1 = t1.length, a1 = [];
                    for(r1 = 0; r1 < i1; r1 += 1)a1[r1] = -t1[r1];
                    return a1;
                }
                return t1.propType ? t1.v : -t1;
            }
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
            function sum(t1, e1) {
                var r1 = _typeof$1(t1), i1 = _typeof$1(e1);
                if (isNumerable(r1, t1) && isNumerable(i1, e1) || r1 === "string" || i1 === "string") return t1 + e1;
                if ($bm_isInstanceOfArray(t1) && isNumerable(i1, e1)) return t1 = t1.slice(0), t1[0] += e1, t1;
                if (isNumerable(r1, t1) && $bm_isInstanceOfArray(e1)) return e1 = e1.slice(0), e1[0] = t1 + e1[0], e1;
                if ($bm_isInstanceOfArray(t1) && $bm_isInstanceOfArray(e1)) {
                    for(var a1 = 0, s1 = t1.length, n1 = e1.length, u1 = []; a1 < s1 || a1 < n1;)(typeof t1[a1] == "number" || t1[a1] instanceof Number) && (typeof e1[a1] == "number" || e1[a1] instanceof Number) ? u1[a1] = t1[a1] + e1[a1] : u1[a1] = e1[a1] === void 0 ? t1[a1] : t1[a1] || e1[a1], a1 += 1;
                    return u1;
                }
                return 0;
            }
            var add = sum;
            function sub(t1, e1) {
                var r1 = _typeof$1(t1), i1 = _typeof$1(e1);
                if (isNumerable(r1, t1) && isNumerable(i1, e1)) return r1 === "string" && (t1 = parseInt(t1, 10)), i1 === "string" && (e1 = parseInt(e1, 10)), t1 - e1;
                if ($bm_isInstanceOfArray(t1) && isNumerable(i1, e1)) return t1 = t1.slice(0), t1[0] -= e1, t1;
                if (isNumerable(r1, t1) && $bm_isInstanceOfArray(e1)) return e1 = e1.slice(0), e1[0] = t1 - e1[0], e1;
                if ($bm_isInstanceOfArray(t1) && $bm_isInstanceOfArray(e1)) {
                    for(var a1 = 0, s1 = t1.length, n1 = e1.length, u1 = []; a1 < s1 || a1 < n1;)(typeof t1[a1] == "number" || t1[a1] instanceof Number) && (typeof e1[a1] == "number" || e1[a1] instanceof Number) ? u1[a1] = t1[a1] - e1[a1] : u1[a1] = e1[a1] === void 0 ? t1[a1] : t1[a1] || e1[a1], a1 += 1;
                    return u1;
                }
                return 0;
            }
            function mul(t1, e1) {
                var r1 = _typeof$1(t1), i1 = _typeof$1(e1), a1;
                if (isNumerable(r1, t1) && isNumerable(i1, e1)) return t1 * e1;
                var s1, n1;
                if ($bm_isInstanceOfArray(t1) && isNumerable(i1, e1)) {
                    for(n1 = t1.length, a1 = createTypedArray("float32", n1), s1 = 0; s1 < n1; s1 += 1)a1[s1] = t1[s1] * e1;
                    return a1;
                }
                if (isNumerable(r1, t1) && $bm_isInstanceOfArray(e1)) {
                    for(n1 = e1.length, a1 = createTypedArray("float32", n1), s1 = 0; s1 < n1; s1 += 1)a1[s1] = t1 * e1[s1];
                    return a1;
                }
                return 0;
            }
            function div(t1, e1) {
                var r1 = _typeof$1(t1), i1 = _typeof$1(e1), a1;
                if (isNumerable(r1, t1) && isNumerable(i1, e1)) return t1 / e1;
                var s1, n1;
                if ($bm_isInstanceOfArray(t1) && isNumerable(i1, e1)) {
                    for(n1 = t1.length, a1 = createTypedArray("float32", n1), s1 = 0; s1 < n1; s1 += 1)a1[s1] = t1[s1] / e1;
                    return a1;
                }
                if (isNumerable(r1, t1) && $bm_isInstanceOfArray(e1)) {
                    for(n1 = e1.length, a1 = createTypedArray("float32", n1), s1 = 0; s1 < n1; s1 += 1)a1[s1] = t1 / e1[s1];
                    return a1;
                }
                return 0;
            }
            function mod(t1, e1) {
                return typeof t1 == "string" && (t1 = parseInt(t1, 10)), typeof e1 == "string" && (e1 = parseInt(e1, 10)), t1 % e1;
            }
            var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
            function clamp(t1, e1, r1) {
                if (e1 > r1) {
                    var i1 = r1;
                    r1 = e1, e1 = i1;
                }
                return Math.min(Math.max(t1, e1), r1);
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
                var r1, i1 = Math.min(t1.length, e1.length), a1 = 0;
                for(r1 = 0; r1 < i1; r1 += 1)a1 += Math.pow(e1[r1] - t1[r1], 2);
                return Math.sqrt(a1);
            }
            function normalize(t1) {
                return div(t1, length(t1));
            }
            function rgbToHsl(t1) {
                var e1 = t1[0], r1 = t1[1], i1 = t1[2], a1 = Math.max(e1, r1, i1), s1 = Math.min(e1, r1, i1), n1, u1, h1 = (a1 + s1) / 2;
                if (a1 === s1) n1 = 0, u1 = 0;
                else {
                    var g1 = a1 - s1;
                    switch(u1 = h1 > .5 ? g1 / (2 - a1 - s1) : g1 / (a1 + s1), a1){
                        case e1:
                            n1 = (r1 - i1) / g1 + (r1 < i1 ? 6 : 0);
                            break;
                        case r1:
                            n1 = (i1 - e1) / g1 + 2;
                            break;
                        case i1:
                            n1 = (e1 - r1) / g1 + 4;
                            break;
                    }
                    n1 /= 6;
                }
                return [
                    n1,
                    u1,
                    h1,
                    t1[3]
                ];
            }
            function hue2rgb(t1, e1, r1) {
                return r1 < 0 && (r1 += 1), r1 > 1 && (r1 -= 1), r1 < 1 / 6 ? t1 + (e1 - t1) * 6 * r1 : r1 < 0.5 ? e1 : r1 < 2 / 3 ? t1 + (e1 - t1) * (2 / 3 - r1) * 6 : t1;
            }
            function hslToRgb(t1) {
                var e1 = t1[0], r1 = t1[1], i1 = t1[2], a1, s1, n1;
                if (r1 === 0) a1 = i1, n1 = i1, s1 = i1;
                else {
                    var u1 = i1 < .5 ? i1 * (1 + r1) : i1 + r1 - i1 * r1, h1 = 2 * i1 - u1;
                    a1 = hue2rgb(h1, u1, e1 + 1 / 3), s1 = hue2rgb(h1, u1, e1), n1 = hue2rgb(h1, u1, e1 - 1 / 3);
                }
                return [
                    a1,
                    s1,
                    n1,
                    t1[3]
                ];
            }
            function linear(t1, e1, r1, i1, a1) {
                if ((i1 === void 0 || a1 === void 0) && (i1 = e1, a1 = r1, e1 = 0, r1 = 1), r1 < e1) {
                    var s1 = r1;
                    r1 = e1, e1 = s1;
                }
                if (t1 <= e1) return i1;
                if (t1 >= r1) return a1;
                var n1 = r1 === e1 ? 0 : (t1 - e1) / (r1 - e1);
                if (!i1.length) return i1 + (a1 - i1) * n1;
                var u1, h1 = i1.length, g1 = createTypedArray("float32", h1);
                for(u1 = 0; u1 < h1; u1 += 1)g1[u1] = i1[u1] + (a1[u1] - i1[u1]) * n1;
                return g1;
            }
            function random(t1, e1) {
                if (e1 === void 0 && (t1 === void 0 ? (t1 = 0, e1 = 1) : (e1 = t1, t1 = void 0)), e1.length) {
                    var r1, i1 = e1.length;
                    t1 || (t1 = createTypedArray("float32", i1));
                    var a1 = createTypedArray("float32", i1), s1 = BMMath.random();
                    for(r1 = 0; r1 < i1; r1 += 1)a1[r1] = t1[r1] + s1 * (e1[r1] - t1[r1]);
                    return a1;
                }
                t1 === void 0 && (t1 = 0);
                var n1 = BMMath.random();
                return t1 + n1 * (e1 - t1);
            }
            function createPath(t1, e1, r1, i1) {
                var a1, s1 = t1.length, n1 = shapePool.newElement();
                n1.setPathData(!!i1, s1);
                var u1 = [
                    0,
                    0
                ], h1, g1;
                for(a1 = 0; a1 < s1; a1 += 1)h1 = e1 && e1[a1] ? e1[a1] : u1, g1 = r1 && r1[a1] ? r1[a1] : u1, n1.setTripleAt(t1[a1][0], t1[a1][1], g1[0] + t1[a1][0], g1[1] + t1[a1][1], h1[0] + t1[a1][0], h1[1] + t1[a1][1], a1, !0);
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
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0, wiggle = (function t1(e1, r1) {
                    var i1, a1, s1 = this.pv.length ? this.pv.length : 1, n1 = createTypedArray("float32", s1);
                    e1 = 5;
                    var u1 = Math.floor(time * e1);
                    for(i1 = 0, a1 = 0; i1 < u1;){
                        for(a1 = 0; a1 < s1; a1 += 1)n1[a1] += -r1 + r1 * 2 * BMMath.random();
                        i1 += 1;
                    }
                    var h1 = time * e1, g1 = h1 - Math.floor(h1), v1 = createTypedArray("float32", s1);
                    if (s1 > 1) {
                        for(a1 = 0; a1 < s1; a1 += 1)v1[a1] = this.pv[a1] + n1[a1] + (-r1 + r1 * 2 * BMMath.random()) * g1;
                        return v1;
                    }
                    return this.pv + n1[0] + (-r1 + r1 * 2 * BMMath.random()) * g1;
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
                    var r1 = [
                        e1[0] - t1[0],
                        e1[1] - t1[1],
                        e1[2] - t1[2]
                    ], i1 = Math.atan2(r1[0], Math.sqrt(r1[1] * r1[1] + r1[2] * r1[2])) / degToRads, a1 = -Math.atan2(r1[1], r1[2]) / degToRads;
                    return [
                        a1,
                        i1,
                        0
                    ];
                }
                function easeOut(t1, e1, r1, i1, a1) {
                    return applyEase(easeOutBez, t1, e1, r1, i1, a1);
                }
                function easeIn(t1, e1, r1, i1, a1) {
                    return applyEase(easeInBez, t1, e1, r1, i1, a1);
                }
                function ease(t1, e1, r1, i1, a1) {
                    return applyEase(easeInOutBez, t1, e1, r1, i1, a1);
                }
                function applyEase(t1, e1, r1, i1, a1, s1) {
                    a1 === void 0 ? (a1 = r1, s1 = i1) : e1 = (e1 - r1) / (i1 - r1), e1 > 1 ? e1 = 1 : e1 < 0 && (e1 = 0);
                    var n1 = t1(e1);
                    if ($bm_isInstanceOfArray(a1)) {
                        var u1, h1 = a1.length, g1 = createTypedArray("float32", h1);
                        for(u1 = 0; u1 < h1; u1 += 1)g1[u1] = (s1[u1] - a1[u1]) * n1 + a1[u1];
                        return g1;
                    }
                    return (s1 - a1) * n1 + a1;
                }
                function nearestKey(t1) {
                    var e1, r1 = data.k.length, i1, a1;
                    if (!data.k.length || typeof data.k[0] == "number") i1 = 0, a1 = 0;
                    else if (i1 = -1, t1 *= elem.comp.globalData.frameRate, t1 < data.k[0].t) i1 = 1, a1 = data.k[0].t;
                    else {
                        for(e1 = 0; e1 < r1 - 1; e1 += 1)if (t1 === data.k[e1].t) {
                            i1 = e1 + 1, a1 = data.k[e1].t;
                            break;
                        } else if (t1 > data.k[e1].t && t1 < data.k[e1 + 1].t) {
                            t1 - data.k[e1].t > data.k[e1 + 1].t - t1 ? (i1 = e1 + 2, a1 = data.k[e1 + 1].t) : (i1 = e1 + 1, a1 = data.k[e1].t);
                            break;
                        }
                        i1 === -1 && (i1 = e1 + 1, a1 = data.k[e1].t);
                    }
                    var s1 = {};
                    return s1.index = i1, s1.time = a1 / elem.comp.globalData.frameRate, s1;
                }
                function key(t1) {
                    var e1, r1, i1;
                    if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + t1);
                    t1 -= 1, e1 = {
                        time: data.k[t1].t / elem.comp.globalData.frameRate,
                        value: []
                    };
                    var a1 = Object.prototype.hasOwnProperty.call(data.k[t1], "s") ? data.k[t1].s : data.k[t1 - 1].e;
                    for(i1 = a1.length, r1 = 0; r1 < i1; r1 += 1)e1[r1] = a1[r1], e1.value[r1] = a1[r1];
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
            function e1(r1) {
                var i1 = 0, a1 = [];
                function s1() {
                    i1 += 1;
                }
                function n1() {
                    i1 -= 1, i1 === 0 && h1();
                }
                function u1(g1) {
                    a1.indexOf(g1) === -1 && a1.push(g1);
                }
                function h1() {
                    var g1, v1 = a1.length;
                    for(g1 = 0; g1 < v1; g1 += 1)a1[g1].release();
                    a1.length = 0;
                }
                r1.renderer.compInterface = CompExpressionInterface(r1.renderer), r1.renderer.globalData.projectInterface.registerComposition(r1.renderer), r1.renderer.globalData.pushExpression = s1, r1.renderer.globalData.popExpression = n1, r1.renderer.globalData.registerExpressionProperty = u1;
            }
            return t1;
        }(), MaskManagerInterface = function() {
            function t1(r1, i1) {
                this._mask = r1, this._data = i1;
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
            var e1 = function(r1) {
                var i1 = createSizedArray(r1.viewData.length), a1, s1 = r1.viewData.length;
                for(a1 = 0; a1 < s1; a1 += 1)i1[a1] = new t1(r1.viewData[a1], r1.masksProperties[a1]);
                var n1 = function(u1) {
                    for(a1 = 0; a1 < s1;){
                        if (r1.masksProperties[a1].nm === u1) return i1[a1];
                        a1 += 1;
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
            function r1(n1, u1, h1) {
                Object.defineProperty(n1, "velocity", {
                    get: function() {
                        return u1.getVelocityAtTime(u1.comp.currentFrame);
                    }
                }), n1.numKeys = u1.keyframes ? u1.keyframes.length : 0, n1.key = function(g1) {
                    if (!n1.numKeys) return 0;
                    var v1 = "";
                    "s" in u1.keyframes[g1 - 1] ? v1 = u1.keyframes[g1 - 1].s : "e" in u1.keyframes[g1 - 2] ? v1 = u1.keyframes[g1 - 2].e : v1 = u1.keyframes[g1 - 2].s;
                    var E1 = h1 === "unidimensional" ? new Number(v1) : Object.assign({}, v1);
                    return E1.time = u1.keyframes[g1 - 1].t / u1.elem.comp.globalData.frameRate, E1.value = h1 === "unidimensional" ? v1[0] : v1, E1;
                }, n1.valueAtTime = u1.getValueAtTime, n1.speedAtTime = u1.getSpeedAtTime, n1.velocityAtTime = u1.getVelocityAtTime, n1.propertyGroup = u1.propertyGroup;
            }
            function i1(n1) {
                (!n1 || !("pv" in n1)) && (n1 = t1);
                var u1 = 1 / n1.mult, h1 = n1.pv * u1, g1 = new Number(h1);
                return g1.value = h1, r1(g1, n1, "unidimensional"), function() {
                    return n1.k && n1.getValue(), h1 = n1.v * u1, g1.value !== h1 && (g1 = new Number(h1), g1.value = h1, r1(g1, n1, "unidimensional")), g1;
                };
            }
            function a1(n1) {
                (!n1 || !("pv" in n1)) && (n1 = e1);
                var u1 = 1 / n1.mult, h1 = n1.data && n1.data.l || n1.pv.length, g1 = createTypedArray("float32", h1), v1 = createTypedArray("float32", h1);
                return g1.value = v1, r1(g1, n1, "multidimensional"), function() {
                    n1.k && n1.getValue();
                    for(var E1 = 0; E1 < h1; E1 += 1)v1[E1] = n1.v[E1] * u1, g1[E1] = v1[E1];
                    return g1;
                };
            }
            function s1() {
                return t1;
            }
            return function(n1) {
                return n1 ? n1.propType === "unidimensional" ? i1(n1) : a1(n1) : s1;
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
                var r1, i1, a1, s1;
                return t1.p ? s1 = ExpressionPropertyInterface(t1.p) : (r1 = ExpressionPropertyInterface(t1.px), i1 = ExpressionPropertyInterface(t1.py), t1.pz && (a1 = ExpressionPropertyInterface(t1.pz))), Object.defineProperty(e1, "position", {
                    get: function() {
                        return t1.p ? s1() : [
                            r1(),
                            i1(),
                            a1 ? a1() : 0
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
            function t1(g1) {
                var v1 = new Matrix;
                if (g1 !== void 0) {
                    var E1 = this._elem.finalTransform.mProp.getValueAtTime(g1);
                    E1.clone(v1);
                } else {
                    var m1 = this._elem.finalTransform.mProp;
                    m1.applyToMatrix(v1);
                }
                return v1;
            }
            function e1(g1, v1) {
                var E1 = this.getMatrix(v1);
                return E1.props[12] = 0, E1.props[13] = 0, E1.props[14] = 0, this.applyPoint(E1, g1);
            }
            function r1(g1, v1) {
                var E1 = this.getMatrix(v1);
                return this.applyPoint(E1, g1);
            }
            function i1(g1, v1) {
                var E1 = this.getMatrix(v1);
                return E1.props[12] = 0, E1.props[13] = 0, E1.props[14] = 0, this.invertPoint(E1, g1);
            }
            function a1(g1, v1) {
                var E1 = this.getMatrix(v1);
                return this.invertPoint(E1, g1);
            }
            function s1(g1, v1) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var E1, m1 = this._elem.hierarchy.length;
                    for(E1 = 0; E1 < m1; E1 += 1)this._elem.hierarchy[E1].finalTransform.mProp.applyToMatrix(g1);
                }
                return g1.applyToPointArray(v1[0], v1[1], v1[2] || 0);
            }
            function n1(g1, v1) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var E1, m1 = this._elem.hierarchy.length;
                    for(E1 = 0; E1 < m1; E1 += 1)this._elem.hierarchy[E1].finalTransform.mProp.applyToMatrix(g1);
                }
                return g1.inversePoint(v1);
            }
            function u1(g1) {
                var v1 = new Matrix;
                if (v1.reset(), this._elem.finalTransform.mProp.applyToMatrix(v1), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var E1, m1 = this._elem.hierarchy.length;
                    for(E1 = 0; E1 < m1; E1 += 1)this._elem.hierarchy[E1].finalTransform.mProp.applyToMatrix(v1);
                    return v1.inversePoint(g1);
                }
                return v1.inversePoint(g1);
            }
            function h1() {
                return [
                    1,
                    1,
                    1,
                    1
                ];
            }
            return function(g1) {
                var v1;
                function E1(d1) {
                    b1.mask = new MaskManagerInterface(d1, g1);
                }
                function m1(d1) {
                    b1.effect = d1;
                }
                function b1(d1) {
                    switch(d1){
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
                b1.getMatrix = t1, b1.invertPoint = n1, b1.applyPoint = s1, b1.toWorld = r1, b1.toWorldVec = e1, b1.fromWorld = a1, b1.fromWorldVec = i1, b1.toComp = r1, b1.fromComp = u1, b1.sampleImage = h1, b1.sourceRectAtTime = g1.sourceRectAtTime.bind(g1), b1._elem = g1, v1 = TransformExpressionInterface(g1.finalTransform.mProp);
                var y1 = getDescriptor(v1, "anchorPoint");
                return Object.defineProperties(b1, {
                    hasParent: {
                        get: function() {
                            return g1.hierarchy.length;
                        }
                    },
                    parent: {
                        get: function() {
                            return g1.hierarchy[0].layerInterface;
                        }
                    },
                    rotation: getDescriptor(v1, "rotation"),
                    scale: getDescriptor(v1, "scale"),
                    position: getDescriptor(v1, "position"),
                    opacity: getDescriptor(v1, "opacity"),
                    anchorPoint: y1,
                    anchor_point: y1,
                    transform: {
                        get: function() {
                            return v1;
                        }
                    },
                    active: {
                        get: function() {
                            return g1.isInRange;
                        }
                    }
                }), b1.startTime = g1.data.st, b1.index = g1.data.ind, b1.source = g1.data.refId, b1.height = g1.data.ty === 0 ? g1.data.h : 100, b1.width = g1.data.ty === 0 ? g1.data.w : 100, b1.inPoint = g1.data.ip / g1.comp.globalData.frameRate, b1.outPoint = g1.data.op / g1.comp.globalData.frameRate, b1._name = g1.data.nm, b1.registerMaskInterface = E1, b1.registerEffectsInterface = m1, b1;
            };
        }(), propertyGroupFactory = function() {
            return function(t1, e1) {
                return function(r1) {
                    return r1 = r1 === void 0 ? 1 : r1, r1 <= 0 ? t1 : e1(r1 - 1);
                };
            };
        }(), PropertyInterface = function() {
            return function(t1, e1) {
                var r1 = {
                    _name: t1
                };
                function i1(a1) {
                    return a1 = a1 === void 0 ? 1 : a1, a1 <= 0 ? r1 : e1(a1 - 1);
                }
                return i1;
            };
        }(), EffectsExpressionInterface = function() {
            var t1 = {
                createEffectsInterface: e1
            };
            function e1(a1, s1) {
                if (a1.effectsManager) {
                    var n1 = [], u1 = a1.data.ef, h1, g1 = a1.effectsManager.effectElements.length;
                    for(h1 = 0; h1 < g1; h1 += 1)n1.push(r1(u1[h1], a1.effectsManager.effectElements[h1], s1, a1));
                    var v1 = a1.data.ef || [], E1 = function(m1) {
                        for(h1 = 0, g1 = v1.length; h1 < g1;){
                            if (m1 === v1[h1].nm || m1 === v1[h1].mn || m1 === v1[h1].ix) return n1[h1];
                            h1 += 1;
                        }
                        return null;
                    };
                    return Object.defineProperty(E1, "numProperties", {
                        get: function() {
                            return v1.length;
                        }
                    }), E1;
                }
                return null;
            }
            function r1(a1, s1, n1, u1) {
                function h1(b1) {
                    for(var y1 = a1.ef, d1 = 0, A1 = y1.length; d1 < A1;){
                        if (b1 === y1[d1].nm || b1 === y1[d1].mn || b1 === y1[d1].ix) return y1[d1].ty === 5 ? v1[d1] : v1[d1]();
                        d1 += 1;
                    }
                    throw new Error;
                }
                var g1 = propertyGroupFactory(h1, n1), v1 = [], E1, m1 = a1.ef.length;
                for(E1 = 0; E1 < m1; E1 += 1)a1.ef[E1].ty === 5 ? v1.push(r1(a1.ef[E1], s1.effectElements[E1], s1.effectElements[E1].propertyGroup, u1)) : v1.push(i1(s1.effectElements[E1], a1.ef[E1].ty, u1, g1));
                return a1.mn === "ADBE Color Control" && Object.defineProperty(h1, "color", {
                    get: function() {
                        return v1[0]();
                    }
                }), Object.defineProperties(h1, {
                    numProperties: {
                        get: function() {
                            return a1.np;
                        }
                    },
                    _name: {
                        value: a1.nm
                    },
                    propertyGroup: {
                        value: g1
                    }
                }), h1.enabled = a1.en !== 0, h1.active = h1.enabled, h1;
            }
            function i1(a1, s1, n1, u1) {
                var h1 = ExpressionPropertyInterface(a1.p);
                function g1() {
                    return s1 === 10 ? n1.comp.compInterface(a1.p.v) : h1();
                }
                return a1.p.setGroupProperty && a1.p.setGroupProperty(PropertyInterface("", u1)), g1;
            }
            return t1;
        }(), ShapePathInterface = function() {
            return function(t1, e1, r1) {
                var i1 = e1.sh;
                function a1(n1) {
                    return n1 === "Shape" || n1 === "shape" || n1 === "Path" || n1 === "path" || n1 === "ADBE Vector Shape" || n1 === 2 ? a1.path : null;
                }
                var s1 = propertyGroupFactory(a1, r1);
                return i1.setGroupProperty(PropertyInterface("Path", s1)), Object.defineProperties(a1, {
                    path: {
                        get: function() {
                            return i1.k && i1.getValue(), i1;
                        }
                    },
                    shape: {
                        get: function() {
                            return i1.k && i1.getValue(), i1;
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
                        value: r1
                    }
                }), a1;
            };
        }(), ShapeExpressionInterface = function() {
            function t1(y1, d1, A1) {
                var p1 = [], o1, l1 = y1 ? y1.length : 0;
                for(o1 = 0; o1 < l1; o1 += 1)y1[o1].ty === "gr" ? p1.push(r1(y1[o1], d1[o1], A1)) : y1[o1].ty === "fl" ? p1.push(i1(y1[o1], d1[o1], A1)) : y1[o1].ty === "st" ? p1.push(n1(y1[o1], d1[o1], A1)) : y1[o1].ty === "tm" ? p1.push(u1(y1[o1], d1[o1], A1)) : y1[o1].ty === "tr" || (y1[o1].ty === "el" ? p1.push(g1(y1[o1], d1[o1], A1)) : y1[o1].ty === "sr" ? p1.push(v1(y1[o1], d1[o1], A1)) : y1[o1].ty === "sh" ? p1.push(ShapePathInterface(y1[o1], d1[o1], A1)) : y1[o1].ty === "rc" ? p1.push(E1(y1[o1], d1[o1], A1)) : y1[o1].ty === "rd" ? p1.push(m1(y1[o1], d1[o1], A1)) : y1[o1].ty === "rp" ? p1.push(b1(y1[o1], d1[o1], A1)) : y1[o1].ty === "gf" ? p1.push(a1(y1[o1], d1[o1], A1)) : p1.push(s1(y1[o1], d1[o1])));
                return p1;
            }
            function e1(y1, d1, A1) {
                var p1, o1 = function(c1) {
                    for(var P1 = 0, M1 = p1.length; P1 < M1;){
                        if (p1[P1]._name === c1 || p1[P1].mn === c1 || p1[P1].propertyIndex === c1 || p1[P1].ix === c1 || p1[P1].ind === c1) return p1[P1];
                        P1 += 1;
                    }
                    return typeof c1 == "number" ? p1[c1 - 1] : null;
                };
                o1.propertyGroup = propertyGroupFactory(o1, A1), p1 = t1(y1.it, d1.it, o1.propertyGroup), o1.numProperties = p1.length;
                var l1 = h1(y1.it[y1.it.length - 1], d1.it[d1.it.length - 1], o1.propertyGroup);
                return o1.transform = l1, o1.propertyIndex = y1.cix, o1._name = y1.nm, o1;
            }
            function r1(y1, d1, A1) {
                var p1 = function(c1) {
                    switch(c1){
                        case "ADBE Vectors Group":
                        case "Contents":
                        case 2:
                            return p1.content;
                        default:
                            return p1.transform;
                    }
                };
                p1.propertyGroup = propertyGroupFactory(p1, A1);
                var o1 = e1(y1, d1, p1.propertyGroup), l1 = h1(y1.it[y1.it.length - 1], d1.it[d1.it.length - 1], p1.propertyGroup);
                return p1.content = o1, p1.transform = l1, Object.defineProperty(p1, "_name", {
                    get: function() {
                        return y1.nm;
                    }
                }), p1.numProperties = y1.np, p1.propertyIndex = y1.ix, p1.nm = y1.nm, p1.mn = y1.mn, p1;
            }
            function i1(y1, d1, A1) {
                function p1(o1) {
                    return o1 === "Color" || o1 === "color" ? p1.color : o1 === "Opacity" || o1 === "opacity" ? p1.opacity : null;
                }
                return Object.defineProperties(p1, {
                    color: {
                        get: ExpressionPropertyInterface(d1.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(d1.o)
                    },
                    _name: {
                        value: y1.nm
                    },
                    mn: {
                        value: y1.mn
                    }
                }), d1.c.setGroupProperty(PropertyInterface("Color", A1)), d1.o.setGroupProperty(PropertyInterface("Opacity", A1)), p1;
            }
            function a1(y1, d1, A1) {
                function p1(o1) {
                    return o1 === "Start Point" || o1 === "start point" ? p1.startPoint : o1 === "End Point" || o1 === "end point" ? p1.endPoint : o1 === "Opacity" || o1 === "opacity" ? p1.opacity : null;
                }
                return Object.defineProperties(p1, {
                    startPoint: {
                        get: ExpressionPropertyInterface(d1.s)
                    },
                    endPoint: {
                        get: ExpressionPropertyInterface(d1.e)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(d1.o)
                    },
                    type: {
                        get: function() {
                            return "a";
                        }
                    },
                    _name: {
                        value: y1.nm
                    },
                    mn: {
                        value: y1.mn
                    }
                }), d1.s.setGroupProperty(PropertyInterface("Start Point", A1)), d1.e.setGroupProperty(PropertyInterface("End Point", A1)), d1.o.setGroupProperty(PropertyInterface("Opacity", A1)), p1;
            }
            function s1() {
                function y1() {
                    return null;
                }
                return y1;
            }
            function n1(y1, d1, A1) {
                var p1 = propertyGroupFactory(T1, A1), o1 = propertyGroupFactory(M1, p1);
                function l1(F1) {
                    Object.defineProperty(M1, y1.d[F1].nm, {
                        get: ExpressionPropertyInterface(d1.d.dataProps[F1].p)
                    });
                }
                var c1, P1 = y1.d ? y1.d.length : 0, M1 = {};
                for(c1 = 0; c1 < P1; c1 += 1)l1(c1), d1.d.dataProps[c1].p.setGroupProperty(o1);
                function T1(F1) {
                    return F1 === "Color" || F1 === "color" ? T1.color : F1 === "Opacity" || F1 === "opacity" ? T1.opacity : F1 === "Stroke Width" || F1 === "stroke width" ? T1.strokeWidth : null;
                }
                return Object.defineProperties(T1, {
                    color: {
                        get: ExpressionPropertyInterface(d1.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(d1.o)
                    },
                    strokeWidth: {
                        get: ExpressionPropertyInterface(d1.w)
                    },
                    dash: {
                        get: function() {
                            return M1;
                        }
                    },
                    _name: {
                        value: y1.nm
                    },
                    mn: {
                        value: y1.mn
                    }
                }), d1.c.setGroupProperty(PropertyInterface("Color", p1)), d1.o.setGroupProperty(PropertyInterface("Opacity", p1)), d1.w.setGroupProperty(PropertyInterface("Stroke Width", p1)), T1;
            }
            function u1(y1, d1, A1) {
                function p1(l1) {
                    return l1 === y1.e.ix || l1 === "End" || l1 === "end" ? p1.end : l1 === y1.s.ix ? p1.start : l1 === y1.o.ix ? p1.offset : null;
                }
                var o1 = propertyGroupFactory(p1, A1);
                return p1.propertyIndex = y1.ix, d1.s.setGroupProperty(PropertyInterface("Start", o1)), d1.e.setGroupProperty(PropertyInterface("End", o1)), d1.o.setGroupProperty(PropertyInterface("Offset", o1)), p1.propertyIndex = y1.ix, p1.propertyGroup = A1, Object.defineProperties(p1, {
                    start: {
                        get: ExpressionPropertyInterface(d1.s)
                    },
                    end: {
                        get: ExpressionPropertyInterface(d1.e)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(d1.o)
                    },
                    _name: {
                        value: y1.nm
                    }
                }), p1.mn = y1.mn, p1;
            }
            function h1(y1, d1, A1) {
                function p1(l1) {
                    return y1.a.ix === l1 || l1 === "Anchor Point" ? p1.anchorPoint : y1.o.ix === l1 || l1 === "Opacity" ? p1.opacity : y1.p.ix === l1 || l1 === "Position" ? p1.position : y1.r.ix === l1 || l1 === "Rotation" || l1 === "ADBE Vector Rotation" ? p1.rotation : y1.s.ix === l1 || l1 === "Scale" ? p1.scale : y1.sk && y1.sk.ix === l1 || l1 === "Skew" ? p1.skew : y1.sa && y1.sa.ix === l1 || l1 === "Skew Axis" ? p1.skewAxis : null;
                }
                var o1 = propertyGroupFactory(p1, A1);
                return d1.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", o1)), d1.transform.mProps.p.setGroupProperty(PropertyInterface("Position", o1)), d1.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", o1)), d1.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", o1)), d1.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", o1)), d1.transform.mProps.sk && (d1.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", o1)), d1.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", o1))), d1.transform.op.setGroupProperty(PropertyInterface("Opacity", o1)), Object.defineProperties(p1, {
                    opacity: {
                        get: ExpressionPropertyInterface(d1.transform.mProps.o)
                    },
                    position: {
                        get: ExpressionPropertyInterface(d1.transform.mProps.p)
                    },
                    anchorPoint: {
                        get: ExpressionPropertyInterface(d1.transform.mProps.a)
                    },
                    scale: {
                        get: ExpressionPropertyInterface(d1.transform.mProps.s)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(d1.transform.mProps.r)
                    },
                    skew: {
                        get: ExpressionPropertyInterface(d1.transform.mProps.sk)
                    },
                    skewAxis: {
                        get: ExpressionPropertyInterface(d1.transform.mProps.sa)
                    },
                    _name: {
                        value: y1.nm
                    }
                }), p1.ty = "tr", p1.mn = y1.mn, p1.propertyGroup = A1, p1;
            }
            function g1(y1, d1, A1) {
                function p1(c1) {
                    return y1.p.ix === c1 ? p1.position : y1.s.ix === c1 ? p1.size : null;
                }
                var o1 = propertyGroupFactory(p1, A1);
                p1.propertyIndex = y1.ix;
                var l1 = d1.sh.ty === "tm" ? d1.sh.prop : d1.sh;
                return l1.s.setGroupProperty(PropertyInterface("Size", o1)), l1.p.setGroupProperty(PropertyInterface("Position", o1)), Object.defineProperties(p1, {
                    size: {
                        get: ExpressionPropertyInterface(l1.s)
                    },
                    position: {
                        get: ExpressionPropertyInterface(l1.p)
                    },
                    _name: {
                        value: y1.nm
                    }
                }), p1.mn = y1.mn, p1;
            }
            function v1(y1, d1, A1) {
                function p1(c1) {
                    return y1.p.ix === c1 ? p1.position : y1.r.ix === c1 ? p1.rotation : y1.pt.ix === c1 ? p1.points : y1.or.ix === c1 || c1 === "ADBE Vector Star Outer Radius" ? p1.outerRadius : y1.os.ix === c1 ? p1.outerRoundness : y1.ir && (y1.ir.ix === c1 || c1 === "ADBE Vector Star Inner Radius") ? p1.innerRadius : y1.is && y1.is.ix === c1 ? p1.innerRoundness : null;
                }
                var o1 = propertyGroupFactory(p1, A1), l1 = d1.sh.ty === "tm" ? d1.sh.prop : d1.sh;
                return p1.propertyIndex = y1.ix, l1.or.setGroupProperty(PropertyInterface("Outer Radius", o1)), l1.os.setGroupProperty(PropertyInterface("Outer Roundness", o1)), l1.pt.setGroupProperty(PropertyInterface("Points", o1)), l1.p.setGroupProperty(PropertyInterface("Position", o1)), l1.r.setGroupProperty(PropertyInterface("Rotation", o1)), y1.ir && (l1.ir.setGroupProperty(PropertyInterface("Inner Radius", o1)), l1.is.setGroupProperty(PropertyInterface("Inner Roundness", o1))), Object.defineProperties(p1, {
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
                        value: y1.nm
                    }
                }), p1.mn = y1.mn, p1;
            }
            function E1(y1, d1, A1) {
                function p1(c1) {
                    return y1.p.ix === c1 ? p1.position : y1.r.ix === c1 ? p1.roundness : y1.s.ix === c1 || c1 === "Size" || c1 === "ADBE Vector Rect Size" ? p1.size : null;
                }
                var o1 = propertyGroupFactory(p1, A1), l1 = d1.sh.ty === "tm" ? d1.sh.prop : d1.sh;
                return p1.propertyIndex = y1.ix, l1.p.setGroupProperty(PropertyInterface("Position", o1)), l1.s.setGroupProperty(PropertyInterface("Size", o1)), l1.r.setGroupProperty(PropertyInterface("Rotation", o1)), Object.defineProperties(p1, {
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
                        value: y1.nm
                    }
                }), p1.mn = y1.mn, p1;
            }
            function m1(y1, d1, A1) {
                function p1(c1) {
                    return y1.r.ix === c1 || c1 === "Round Corners 1" ? p1.radius : null;
                }
                var o1 = propertyGroupFactory(p1, A1), l1 = d1;
                return p1.propertyIndex = y1.ix, l1.rd.setGroupProperty(PropertyInterface("Radius", o1)), Object.defineProperties(p1, {
                    radius: {
                        get: ExpressionPropertyInterface(l1.rd)
                    },
                    _name: {
                        value: y1.nm
                    }
                }), p1.mn = y1.mn, p1;
            }
            function b1(y1, d1, A1) {
                function p1(c1) {
                    return y1.c.ix === c1 || c1 === "Copies" ? p1.copies : y1.o.ix === c1 || c1 === "Offset" ? p1.offset : null;
                }
                var o1 = propertyGroupFactory(p1, A1), l1 = d1;
                return p1.propertyIndex = y1.ix, l1.c.setGroupProperty(PropertyInterface("Copies", o1)), l1.o.setGroupProperty(PropertyInterface("Offset", o1)), Object.defineProperties(p1, {
                    copies: {
                        get: ExpressionPropertyInterface(l1.c)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(l1.o)
                    },
                    _name: {
                        value: y1.nm
                    }
                }), p1.mn = y1.mn, p1;
            }
            return function(y1, d1, A1) {
                var p1;
                function o1(c1) {
                    if (typeof c1 == "number") return c1 = c1 === void 0 ? 1 : c1, c1 === 0 ? A1 : p1[c1 - 1];
                    for(var P1 = 0, M1 = p1.length; P1 < M1;){
                        if (p1[P1]._name === c1) return p1[P1];
                        P1 += 1;
                    }
                    return null;
                }
                function l1() {
                    return A1;
                }
                return o1.propertyGroup = propertyGroupFactory(o1, l1), p1 = t1(y1, d1, o1.propertyGroup), o1.numProperties = p1.length, o1._name = "Contents", o1;
            };
        }(), TextExpressionInterface = function() {
            return function(t1) {
                var e1;
                function r1(i1) {
                    switch(i1){
                        case "ADBE Text Document":
                            return r1.sourceText;
                        default:
                            return null;
                    }
                }
                return Object.defineProperty(r1, "sourceText", {
                    get: function() {
                        t1.textProperty.getValue();
                        var i1 = t1.textProperty.currentData.t;
                        return (!e1 || i1 !== e1.value) && (e1 = new String(i1), e1.value = i1 || new String(i1), Object.defineProperty(e1, "style", {
                            get: function() {
                                return {
                                    fillColor: t1.textProperty.currentData.fc
                                };
                            }
                        })), e1;
                    }
                }), r1;
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
            var t1 = function(r1) {
                var i1 = "", a1 = r1.getFootageData();
                function s1() {
                    return i1 = "", a1 = r1.getFootageData(), n1;
                }
                function n1(u1) {
                    if (a1[u1]) return i1 = u1, a1 = a1[u1], _typeof(a1) === "object" ? n1 : a1;
                    var h1 = u1.indexOf(i1);
                    if (h1 !== -1) {
                        var g1 = parseInt(u1.substr(h1 + i1.length), 10);
                        return a1 = a1[g1], _typeof(a1) === "object" ? n1 : a1;
                    }
                    return "";
                }
                return s1;
            }, e1 = function(r1) {
                function i1(a1) {
                    return a1 === "Outline" ? i1.outlineInterface() : null;
                }
                return i1._name = "Outline", i1.outlineInterface = t1(r1), i1;
            };
            return function(r1) {
                function i1(a1) {
                    return a1 === "Data" ? i1.dataInterface : null;
                }
                return i1._name = "Data", i1.dataInterface = e1(r1), i1;
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
            function t1(n1, u1, h1) {
                u1.x && (h1.k = !0, h1.x = !0, h1.initiateExpression = ExpressionManager.initiateExpression, h1.effectsSequence.push(h1.initiateExpression(n1, u1, h1).bind(h1)));
            }
            function e1(n1) {
                return n1 *= this.elem.globalData.frameRate, n1 -= this.offsetTime, n1 !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n1 ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n1, this._cachingAtTime), this._cachingAtTime.lastFrame = n1), this._cachingAtTime.value;
            }
            function r1(n1) {
                var u1 = -0.01, h1 = this.getValueAtTime(n1), g1 = this.getValueAtTime(n1 + u1), v1 = 0;
                if (h1.length) {
                    var E1;
                    for(E1 = 0; E1 < h1.length; E1 += 1)v1 += Math.pow(g1[E1] - h1[E1], 2);
                    v1 = Math.sqrt(v1) * 100;
                } else v1 = 0;
                return v1;
            }
            function i1(n1) {
                if (this.vel !== void 0) return this.vel;
                var u1 = -0.001, h1 = this.getValueAtTime(n1), g1 = this.getValueAtTime(n1 + u1), v1;
                if (h1.length) {
                    v1 = createTypedArray("float32", h1.length);
                    var E1;
                    for(E1 = 0; E1 < h1.length; E1 += 1)v1[E1] = (g1[E1] - h1[E1]) / u1;
                } else v1 = (g1 - h1) / u1;
                return v1;
            }
            function a1() {
                return this.pv;
            }
            function s1(n1) {
                this.propertyGroup = n1;
            }
            return {
                searchExpressions: t1,
                getSpeedAtTime: r1,
                getVelocityAtTime: i1,
                getValueAtTime: e1,
                getStaticValueAtTime: a1,
                setGroupProperty: s1
            };
        }();
        function addPropertyDecorator() {
            function t1(m1, b1, y1) {
                if (!this.k || !this.keyframes) return this.pv;
                m1 = m1 ? m1.toLowerCase() : "";
                var d1 = this.comp.renderedFrame, A1 = this.keyframes, p1 = A1[A1.length - 1].t;
                if (d1 <= p1) return this.pv;
                var o1, l1;
                y1 ? (b1 ? o1 = Math.abs(p1 - this.elem.comp.globalData.frameRate * b1) : o1 = Math.max(0, p1 - this.elem.data.ip), l1 = p1 - o1) : ((!b1 || b1 > A1.length - 1) && (b1 = A1.length - 1), l1 = A1[A1.length - 1 - b1].t, o1 = p1 - l1);
                var c1, P1, M1;
                if (m1 === "pingpong") {
                    var T1 = Math.floor((d1 - l1) / o1);
                    if (T1 % 2 !== 0) return this.getValueAtTime((o1 - (d1 - l1) % o1 + l1) / this.comp.globalData.frameRate, 0);
                } else if (m1 === "offset") {
                    var F1 = this.getValueAtTime(l1 / this.comp.globalData.frameRate, 0), I1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), R1 = this.getValueAtTime(((d1 - l1) % o1 + l1) / this.comp.globalData.frameRate, 0), L1 = Math.floor((d1 - l1) / o1);
                    if (this.pv.length) {
                        for(M1 = new Array(F1.length), P1 = M1.length, c1 = 0; c1 < P1; c1 += 1)M1[c1] = (I1[c1] - F1[c1]) * L1 + R1[c1];
                        return M1;
                    }
                    return (I1 - F1) * L1 + R1;
                } else if (m1 === "continue") {
                    var V1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), G1 = this.getValueAtTime((p1 - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for(M1 = new Array(V1.length), P1 = M1.length, c1 = 0; c1 < P1; c1 += 1)M1[c1] = V1[c1] + (V1[c1] - G1[c1]) * ((d1 - p1) / this.comp.globalData.frameRate) / 5e-4;
                        return M1;
                    }
                    return V1 + (V1 - G1) * ((d1 - p1) / .001);
                }
                return this.getValueAtTime(((d1 - l1) % o1 + l1) / this.comp.globalData.frameRate, 0);
            }
            function e1(m1, b1, y1) {
                if (!this.k) return this.pv;
                m1 = m1 ? m1.toLowerCase() : "";
                var d1 = this.comp.renderedFrame, A1 = this.keyframes, p1 = A1[0].t;
                if (d1 >= p1) return this.pv;
                var o1, l1;
                y1 ? (b1 ? o1 = Math.abs(this.elem.comp.globalData.frameRate * b1) : o1 = Math.max(0, this.elem.data.op - p1), l1 = p1 + o1) : ((!b1 || b1 > A1.length - 1) && (b1 = A1.length - 1), l1 = A1[b1].t, o1 = l1 - p1);
                var c1, P1, M1;
                if (m1 === "pingpong") {
                    var T1 = Math.floor((p1 - d1) / o1);
                    if (T1 % 2 === 0) return this.getValueAtTime(((p1 - d1) % o1 + p1) / this.comp.globalData.frameRate, 0);
                } else if (m1 === "offset") {
                    var F1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), I1 = this.getValueAtTime(l1 / this.comp.globalData.frameRate, 0), R1 = this.getValueAtTime((o1 - (p1 - d1) % o1 + p1) / this.comp.globalData.frameRate, 0), L1 = Math.floor((p1 - d1) / o1) + 1;
                    if (this.pv.length) {
                        for(M1 = new Array(F1.length), P1 = M1.length, c1 = 0; c1 < P1; c1 += 1)M1[c1] = R1[c1] - (I1[c1] - F1[c1]) * L1;
                        return M1;
                    }
                    return R1 - (I1 - F1) * L1;
                } else if (m1 === "continue") {
                    var V1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), G1 = this.getValueAtTime((p1 + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for(M1 = new Array(V1.length), P1 = M1.length, c1 = 0; c1 < P1; c1 += 1)M1[c1] = V1[c1] + (V1[c1] - G1[c1]) * (p1 - d1) / .001;
                        return M1;
                    }
                    return V1 + (V1 - G1) * (p1 - d1) / .001;
                }
                return this.getValueAtTime((o1 - ((p1 - d1) % o1 + p1)) / this.comp.globalData.frameRate, 0);
            }
            function r1(m1, b1) {
                if (!this.k) return this.pv;
                if (m1 = (m1 || .4) * .5, b1 = Math.floor(b1 || 5), b1 <= 1) return this.pv;
                var y1 = this.comp.renderedFrame / this.comp.globalData.frameRate, d1 = y1 - m1, A1 = y1 + m1, p1 = b1 > 1 ? (A1 - d1) / (b1 - 1) : 1, o1 = 0, l1 = 0, c1;
                this.pv.length ? c1 = createTypedArray("float32", this.pv.length) : c1 = 0;
                for(var P1; o1 < b1;){
                    if (P1 = this.getValueAtTime(d1 + o1 * p1), this.pv.length) for(l1 = 0; l1 < this.pv.length; l1 += 1)c1[l1] += P1[l1];
                    else c1 += P1;
                    o1 += 1;
                }
                if (this.pv.length) for(l1 = 0; l1 < this.pv.length; l1 += 1)c1[l1] /= b1;
                else c1 /= b1;
                return c1;
            }
            function i1(m1) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {
                    v: new Matrix
                });
                var b1 = this._transformCachingAtTime.v;
                if (b1.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                    var y1 = this.a.getValueAtTime(m1);
                    b1.translate(-y1[0] * this.a.mult, -y1[1] * this.a.mult, y1[2] * this.a.mult);
                }
                if (this.appliedTransformations < 2) {
                    var d1 = this.s.getValueAtTime(m1);
                    b1.scale(d1[0] * this.s.mult, d1[1] * this.s.mult, d1[2] * this.s.mult);
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var A1 = this.sk.getValueAtTime(m1), p1 = this.sa.getValueAtTime(m1);
                    b1.skewFromAxis(-A1 * this.sk.mult, p1 * this.sa.mult);
                }
                if (this.r && this.appliedTransformations < 4) {
                    var o1 = this.r.getValueAtTime(m1);
                    b1.rotate(-o1 * this.r.mult);
                } else if (!this.r && this.appliedTransformations < 4) {
                    var l1 = this.rz.getValueAtTime(m1), c1 = this.ry.getValueAtTime(m1), P1 = this.rx.getValueAtTime(m1), M1 = this.or.getValueAtTime(m1);
                    b1.rotateZ(-l1 * this.rz.mult).rotateY(c1 * this.ry.mult).rotateX(P1 * this.rx.mult).rotateZ(-M1[2] * this.or.mult).rotateY(M1[1] * this.or.mult).rotateX(M1[0] * this.or.mult);
                }
                if (this.data.p && this.data.p.s) {
                    var T1 = this.px.getValueAtTime(m1), F1 = this.py.getValueAtTime(m1);
                    if (this.data.p.z) {
                        var I1 = this.pz.getValueAtTime(m1);
                        b1.translate(T1 * this.px.mult, F1 * this.py.mult, -I1 * this.pz.mult);
                    } else b1.translate(T1 * this.px.mult, F1 * this.py.mult, 0);
                } else {
                    var R1 = this.p.getValueAtTime(m1);
                    b1.translate(R1[0] * this.p.mult, R1[1] * this.p.mult, -R1[2] * this.p.mult);
                }
                return b1;
            }
            function a1() {
                return this.v.clone(new Matrix);
            }
            var s1 = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(m1, b1, y1) {
                var d1 = s1(m1, b1, y1);
                return d1.dynamicProperties.length ? d1.getValueAtTime = i1.bind(d1) : d1.getValueAtTime = a1.bind(d1), d1.setGroupProperty = expressionHelpers.setGroupProperty, d1;
            };
            var n1 = PropertyFactory.getProp;
            PropertyFactory.getProp = function(m1, b1, y1, d1, A1) {
                var p1 = n1(m1, b1, y1, d1, A1);
                p1.kf ? p1.getValueAtTime = expressionHelpers.getValueAtTime.bind(p1) : p1.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(p1), p1.setGroupProperty = expressionHelpers.setGroupProperty, p1.loopOut = t1, p1.loopIn = e1, p1.smooth = r1, p1.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(p1), p1.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(p1), p1.numKeys = b1.a === 1 ? b1.k.length : 0, p1.propertyIndex = b1.ix;
                var o1 = 0;
                return y1 !== 0 && (o1 = createTypedArray("float32", b1.a === 1 ? b1.k[0].s.length : b1.k.length)), p1._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: o1
                }, expressionHelpers.searchExpressions(m1, b1, p1), p1.k && A1.addDynamicProperty(p1), p1;
            };
            function u1(m1) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), m1 *= this.elem.globalData.frameRate, m1 -= this.offsetTime, m1 !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < m1 ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = m1, this.interpolateShape(m1, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
            }
            var h1 = ShapePropertyFactory.getConstructorFunction(), g1 = ShapePropertyFactory.getKeyframedConstructorFunction();
            function v1() {}
            v1.prototype = {
                vertices: function(m1, b1) {
                    this.k && this.getValue();
                    var y1 = this.v;
                    b1 !== void 0 && (y1 = this.getValueAtTime(b1, 0));
                    var d1, A1 = y1._length, p1 = y1[m1], o1 = y1.v, l1 = createSizedArray(A1);
                    for(d1 = 0; d1 < A1; d1 += 1)m1 === "i" || m1 === "o" ? l1[d1] = [
                        p1[d1][0] - o1[d1][0],
                        p1[d1][1] - o1[d1][1]
                    ] : l1[d1] = [
                        p1[d1][0],
                        p1[d1][1]
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
                    var y1 = this.v;
                    b1 !== void 0 && (y1 = this.getValueAtTime(b1, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(y1));
                    for(var d1 = this._segmentsLength, A1 = d1.lengths, p1 = d1.totalLength * m1, o1 = 0, l1 = A1.length, c1 = 0, P1; o1 < l1;){
                        if (c1 + A1[o1].addedLength > p1) {
                            var M1 = o1, T1 = y1.c && o1 === l1 - 1 ? 0 : o1 + 1, F1 = (p1 - c1) / A1[o1].addedLength;
                            P1 = bez.getPointInSegment(y1.v[M1], y1.v[T1], y1.o[M1], y1.i[T1], F1, A1[o1]);
                            break;
                        } else c1 += A1[o1].addedLength;
                        o1 += 1;
                    }
                    return P1 || (P1 = y1.c ? [
                        y1.v[0][0],
                        y1.v[0][1]
                    ] : [
                        y1.v[y1._length - 1][0],
                        y1.v[y1._length - 1][1]
                    ]), P1;
                },
                vectorOnPath: function(m1, b1, y1) {
                    m1 == 1 ? m1 = this.v.c : m1 == 0 && (m1 = .999);
                    var d1 = this.pointOnPath(m1, b1), A1 = this.pointOnPath(m1 + .001, b1), p1 = A1[0] - d1[0], o1 = A1[1] - d1[1], l1 = Math.sqrt(Math.pow(p1, 2) + Math.pow(o1, 2));
                    if (l1 === 0) return [
                        0,
                        0
                    ];
                    var c1 = y1 === "tangent" ? [
                        p1 / l1,
                        o1 / l1
                    ] : [
                        -o1 / l1,
                        p1 / l1
                    ];
                    return c1;
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
            ], h1), extendPrototype([
                v1
            ], g1), g1.prototype.getValueAtTime = u1, g1.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var E1 = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(m1, b1, y1, d1, A1) {
                var p1 = E1(m1, b1, y1, d1, A1);
                return p1.propertyIndex = b1.ix, p1.lock = !1, y1 === 3 ? expressionHelpers.searchExpressions(m1, b1.pt, p1) : y1 === 4 && expressionHelpers.searchExpressions(m1, b1.ks, p1), p1.k && m1.addDynamicProperty(p1), p1;
            };
        }
        function initialize$1() {
            addPropertyDecorator();
        }
        function addDecorator() {
            function t1() {
                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
            }
            TextProperty.prototype.getExpressionValue = function(e1, r1) {
                var i1 = this.calculateExpression(r1);
                if (e1.t !== i1) {
                    var a1 = {};
                    return this.copyData(a1, e1), a1.t = i1.toString(), a1.__complete = !1, a1;
                }
                return e1;
            }, TextProperty.prototype.searchProperty = function() {
                var e1 = this.searchKeyframes(), r1 = this.searchExpressions();
                return this.kf = e1 || r1, this.kf;
            }, TextProperty.prototype.searchExpressions = t1;
        }
        function initialize() {
            addDecorator();
        }
        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
            createMergeNode: function t1(e1, r1) {
                var i1 = createNS("feMerge");
                i1.setAttribute("result", e1);
                var a1, s1;
                for(s1 = 0; s1 < r1.length; s1 += 1)a1 = createNS("feMergeNode"), a1.setAttribute("in", r1[s1]), i1.appendChild(a1), i1.appendChild(a1);
                return i1;
            }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
        function SVGTintFilter(t1, e1, r1, i1, a1) {
            this.filterManager = e1;
            var s1 = createNS("feColorMatrix");
            s1.setAttribute("type", "matrix"), s1.setAttribute("color-interpolation-filters", "linearRGB"), s1.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = s1, s1.setAttribute("result", i1 + "_tint_1"), t1.appendChild(s1), s1 = createNS("feColorMatrix"), s1.setAttribute("type", "matrix"), s1.setAttribute("color-interpolation-filters", "sRGB"), s1.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s1.setAttribute("result", i1 + "_tint_2"), t1.appendChild(s1), this.matrixFilter = s1;
            var n1 = this.createMergeNode(i1, [
                a1,
                i1 + "_tint_1",
                i1 + "_tint_2"
            ]);
            t1.appendChild(n1);
        }
        extendPrototype([
            SVGComposableEffect
        ], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t1) {
            if (t1 || this.filterManager._mdf) {
                var e1 = this.filterManager.effectElements[0].p.v, r1 = this.filterManager.effectElements[1].p.v, i1 = this.filterManager.effectElements[2].p.v / 100;
                this.linearFilter.setAttribute("values", linearFilterValue + " " + i1 + " 0"), this.matrixFilter.setAttribute("values", r1[0] - e1[0] + " 0 0 0 " + e1[0] + " " + (r1[1] - e1[1]) + " 0 0 0 " + e1[1] + " " + (r1[2] - e1[2]) + " 0 0 0 " + e1[2] + " 0 0 0 1 0");
            }
        };
        function SVGFillFilter(t1, e1, r1, i1) {
            this.filterManager = e1;
            var a1 = createNS("feColorMatrix");
            a1.setAttribute("type", "matrix"), a1.setAttribute("color-interpolation-filters", "sRGB"), a1.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a1.setAttribute("result", i1), t1.appendChild(a1), this.matrixFilter = a1;
        }
        SVGFillFilter.prototype.renderFrame = function(t1) {
            if (t1 || this.filterManager._mdf) {
                var e1 = this.filterManager.effectElements[2].p.v, r1 = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e1[0] + " 0 0 0 0 " + e1[1] + " 0 0 0 0 " + e1[2] + " 0 0 0 " + r1 + " 0");
            }
        };
        function SVGStrokeEffect(t1, e1, r1) {
            this.initialized = !1, this.filterManager = e1, this.elem = r1, this.paths = [];
        }
        SVGStrokeEffect.prototype.initialize = function() {
            var t1 = this.elem.layerElement.children || this.elem.layerElement.childNodes, e1, r1, i1, a1;
            for(this.filterManager.effectElements[1].p.v === 1 ? (a1 = this.elem.maskManager.masksProperties.length, i1 = 0) : (i1 = this.filterManager.effectElements[0].p.v - 1, a1 = i1 + 1), r1 = createNS("g"), r1.setAttribute("fill", "none"), r1.setAttribute("stroke-linecap", "round"), r1.setAttribute("stroke-dashoffset", 1), i1; i1 < a1; i1 += 1)e1 = createNS("path"), r1.appendChild(e1), this.paths.push({
                p: e1,
                m: i1
            });
            if (this.filterManager.effectElements[10].p.v === 3) {
                var s1 = createNS("mask"), n1 = createElementID();
                s1.setAttribute("id", n1), s1.setAttribute("mask-type", "alpha"), s1.appendChild(r1), this.elem.globalData.defs.appendChild(s1);
                var u1 = createNS("g");
                for(u1.setAttribute("mask", "url(" + getLocationHref() + "#" + n1 + ")"); t1[0];)u1.appendChild(t1[0]);
                this.elem.layerElement.appendChild(u1), this.masker = s1, r1.setAttribute("stroke", "#fff");
            } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                if (this.filterManager.effectElements[10].p.v === 2) for(t1 = this.elem.layerElement.children || this.elem.layerElement.childNodes; t1.length;)this.elem.layerElement.removeChild(t1[0]);
                this.elem.layerElement.appendChild(r1), this.elem.layerElement.removeAttribute("mask"), r1.setAttribute("stroke", "#fff");
            }
            this.initialized = !0, this.pathMasker = r1;
        }, SVGStrokeEffect.prototype.renderFrame = function(t1) {
            this.initialized || this.initialize();
            var e1, r1 = this.paths.length, i1, a1;
            for(e1 = 0; e1 < r1; e1 += 1)if (this.paths[e1].m !== -1 && (i1 = this.elem.maskManager.viewData[this.paths[e1].m], a1 = this.paths[e1].p, (t1 || this.filterManager._mdf || i1.prop._mdf) && a1.setAttribute("d", i1.lastPath), t1 || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i1.prop._mdf)) {
                var s1;
                if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                    var n1 = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, u1 = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, h1 = a1.getTotalLength();
                    s1 = "0 0 0 " + h1 * n1 + " ";
                    var g1 = h1 * (u1 - n1), v1 = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01, E1 = Math.floor(g1 / v1), m1;
                    for(m1 = 0; m1 < E1; m1 += 1)s1 += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
                    s1 += "0 " + h1 * 10 + " 0 0";
                } else s1 = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
                a1.setAttribute("stroke-dasharray", s1);
            }
            if ((t1 || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t1 || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t1 || this.filterManager.effectElements[3].p._mdf)) {
                var b1 = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(b1[0] * 255) + "," + bmFloor(b1[1] * 255) + "," + bmFloor(b1[2] * 255) + ")");
            }
        };
        function SVGTritoneFilter(t1, e1, r1, i1) {
            this.filterManager = e1;
            var a1 = createNS("feColorMatrix");
            a1.setAttribute("type", "matrix"), a1.setAttribute("color-interpolation-filters", "linearRGB"), a1.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t1.appendChild(a1);
            var s1 = createNS("feComponentTransfer");
            s1.setAttribute("color-interpolation-filters", "sRGB"), s1.setAttribute("result", i1), this.matrixFilter = s1;
            var n1 = createNS("feFuncR");
            n1.setAttribute("type", "table"), s1.appendChild(n1), this.feFuncR = n1;
            var u1 = createNS("feFuncG");
            u1.setAttribute("type", "table"), s1.appendChild(u1), this.feFuncG = u1;
            var h1 = createNS("feFuncB");
            h1.setAttribute("type", "table"), s1.appendChild(h1), this.feFuncB = h1, t1.appendChild(s1);
        }
        SVGTritoneFilter.prototype.renderFrame = function(t1) {
            if (t1 || this.filterManager._mdf) {
                var e1 = this.filterManager.effectElements[0].p.v, r1 = this.filterManager.effectElements[1].p.v, i1 = this.filterManager.effectElements[2].p.v, a1 = i1[0] + " " + r1[0] + " " + e1[0], s1 = i1[1] + " " + r1[1] + " " + e1[1], n1 = i1[2] + " " + r1[2] + " " + e1[2];
                this.feFuncR.setAttribute("tableValues", a1), this.feFuncG.setAttribute("tableValues", s1), this.feFuncB.setAttribute("tableValues", n1);
            }
        };
        function SVGProLevelsFilter(t1, e1, r1, i1) {
            this.filterManager = e1;
            var a1 = this.filterManager.effectElements, s1 = createNS("feComponentTransfer");
            (a1[10].p.k || a1[10].p.v !== 0 || a1[11].p.k || a1[11].p.v !== 1 || a1[12].p.k || a1[12].p.v !== 1 || a1[13].p.k || a1[13].p.v !== 0 || a1[14].p.k || a1[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", s1)), (a1[17].p.k || a1[17].p.v !== 0 || a1[18].p.k || a1[18].p.v !== 1 || a1[19].p.k || a1[19].p.v !== 1 || a1[20].p.k || a1[20].p.v !== 0 || a1[21].p.k || a1[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", s1)), (a1[24].p.k || a1[24].p.v !== 0 || a1[25].p.k || a1[25].p.v !== 1 || a1[26].p.k || a1[26].p.v !== 1 || a1[27].p.k || a1[27].p.v !== 0 || a1[28].p.k || a1[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", s1)), (a1[31].p.k || a1[31].p.v !== 0 || a1[32].p.k || a1[32].p.v !== 1 || a1[33].p.k || a1[33].p.v !== 1 || a1[34].p.k || a1[34].p.v !== 0 || a1[35].p.k || a1[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", s1)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s1.setAttribute("color-interpolation-filters", "sRGB"), t1.appendChild(s1)), (a1[3].p.k || a1[3].p.v !== 0 || a1[4].p.k || a1[4].p.v !== 1 || a1[5].p.k || a1[5].p.v !== 1 || a1[6].p.k || a1[6].p.v !== 0 || a1[7].p.k || a1[7].p.v !== 1) && (s1 = createNS("feComponentTransfer"), s1.setAttribute("color-interpolation-filters", "sRGB"), s1.setAttribute("result", i1), t1.appendChild(s1), this.feFuncRComposed = this.createFeFunc("feFuncR", s1), this.feFuncGComposed = this.createFeFunc("feFuncG", s1), this.feFuncBComposed = this.createFeFunc("feFuncB", s1));
        }
        SVGProLevelsFilter.prototype.createFeFunc = function(t1, e1) {
            var r1 = createNS(t1);
            return r1.setAttribute("type", "table"), e1.appendChild(r1), r1;
        }, SVGProLevelsFilter.prototype.getTableValue = function(t1, e1, r1, i1, a1) {
            for(var s1 = 0, n1 = 256, u1, h1 = Math.min(t1, e1), g1 = Math.max(t1, e1), v1 = Array.call(null, {
                length: n1
            }), E1, m1 = 0, b1 = a1 - i1, y1 = e1 - t1; s1 <= 256;)u1 = s1 / 256, u1 <= h1 ? E1 = y1 < 0 ? a1 : i1 : u1 >= g1 ? E1 = y1 < 0 ? i1 : a1 : E1 = i1 + b1 * Math.pow((u1 - t1) / y1, 1 / r1), v1[m1] = E1, m1 += 1, s1 += 256 / (n1 - 1);
            return v1.join(" ");
        }, SVGProLevelsFilter.prototype.renderFrame = function(t1) {
            if (t1 || this.filterManager._mdf) {
                var e1, r1 = this.filterManager.effectElements;
                this.feFuncRComposed && (t1 || r1[3].p._mdf || r1[4].p._mdf || r1[5].p._mdf || r1[6].p._mdf || r1[7].p._mdf) && (e1 = this.getTableValue(r1[3].p.v, r1[4].p.v, r1[5].p.v, r1[6].p.v, r1[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e1), this.feFuncGComposed.setAttribute("tableValues", e1), this.feFuncBComposed.setAttribute("tableValues", e1)), this.feFuncR && (t1 || r1[10].p._mdf || r1[11].p._mdf || r1[12].p._mdf || r1[13].p._mdf || r1[14].p._mdf) && (e1 = this.getTableValue(r1[10].p.v, r1[11].p.v, r1[12].p.v, r1[13].p.v, r1[14].p.v), this.feFuncR.setAttribute("tableValues", e1)), this.feFuncG && (t1 || r1[17].p._mdf || r1[18].p._mdf || r1[19].p._mdf || r1[20].p._mdf || r1[21].p._mdf) && (e1 = this.getTableValue(r1[17].p.v, r1[18].p.v, r1[19].p.v, r1[20].p.v, r1[21].p.v), this.feFuncG.setAttribute("tableValues", e1)), this.feFuncB && (t1 || r1[24].p._mdf || r1[25].p._mdf || r1[26].p._mdf || r1[27].p._mdf || r1[28].p._mdf) && (e1 = this.getTableValue(r1[24].p.v, r1[25].p.v, r1[26].p.v, r1[27].p.v, r1[28].p.v), this.feFuncB.setAttribute("tableValues", e1)), this.feFuncA && (t1 || r1[31].p._mdf || r1[32].p._mdf || r1[33].p._mdf || r1[34].p._mdf || r1[35].p._mdf) && (e1 = this.getTableValue(r1[31].p.v, r1[32].p.v, r1[33].p.v, r1[34].p.v, r1[35].p.v), this.feFuncA.setAttribute("tableValues", e1));
            }
        };
        function SVGDropShadowEffect(t1, e1, r1, i1, a1) {
            var s1 = e1.container.globalData.renderConfig.filterSize, n1 = e1.data.fs || s1;
            t1.setAttribute("x", n1.x || s1.x), t1.setAttribute("y", n1.y || s1.y), t1.setAttribute("width", n1.width || s1.width), t1.setAttribute("height", n1.height || s1.height), this.filterManager = e1;
            var u1 = createNS("feGaussianBlur");
            u1.setAttribute("in", "SourceAlpha"), u1.setAttribute("result", i1 + "_drop_shadow_1"), u1.setAttribute("stdDeviation", "0"), this.feGaussianBlur = u1, t1.appendChild(u1);
            var h1 = createNS("feOffset");
            h1.setAttribute("dx", "25"), h1.setAttribute("dy", "0"), h1.setAttribute("in", i1 + "_drop_shadow_1"), h1.setAttribute("result", i1 + "_drop_shadow_2"), this.feOffset = h1, t1.appendChild(h1);
            var g1 = createNS("feFlood");
            g1.setAttribute("flood-color", "#00ff00"), g1.setAttribute("flood-opacity", "1"), g1.setAttribute("result", i1 + "_drop_shadow_3"), this.feFlood = g1, t1.appendChild(g1);
            var v1 = createNS("feComposite");
            v1.setAttribute("in", i1 + "_drop_shadow_3"), v1.setAttribute("in2", i1 + "_drop_shadow_2"), v1.setAttribute("operator", "in"), v1.setAttribute("result", i1 + "_drop_shadow_4"), t1.appendChild(v1);
            var E1 = this.createMergeNode(i1, [
                i1 + "_drop_shadow_4",
                a1
            ]);
            t1.appendChild(E1);
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
                    var r1 = this.filterManager.effectElements[3].p.v, i1 = (this.filterManager.effectElements[2].p.v - 90) * degToRads, a1 = r1 * Math.cos(i1), s1 = r1 * Math.sin(i1);
                    this.feOffset.setAttribute("dx", a1), this.feOffset.setAttribute("dy", s1);
                }
            }
        };
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(t1, e1, r1) {
            this.initialized = !1, this.filterManager = e1, this.filterElem = t1, this.elem = r1, r1.matteElement = createNS("g"), r1.matteElement.appendChild(r1.layerElement), r1.matteElement.appendChild(r1.transformedElement), r1.baseElement = r1.matteElement;
        }
        SVGMatte3Effect.prototype.findSymbol = function(t1) {
            for(var e1 = 0, r1 = _svgMatteSymbols.length; e1 < r1;){
                if (_svgMatteSymbols[e1] === t1) return _svgMatteSymbols[e1];
                e1 += 1;
            }
            return null;
        }, SVGMatte3Effect.prototype.replaceInParent = function(t1, e1) {
            var r1 = t1.layerElement.parentNode;
            if (r1) {
                for(var i1 = r1.children, a1 = 0, s1 = i1.length; a1 < s1 && i1[a1] !== t1.layerElement;)a1 += 1;
                var n1;
                a1 <= s1 - 2 && (n1 = i1[a1 + 1]);
                var u1 = createNS("use");
                u1.setAttribute("href", "#" + e1), n1 ? r1.insertBefore(u1, n1) : r1.appendChild(u1);
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t1, e1) {
            if (!this.findSymbol(e1)) {
                var r1 = createElementID(), i1 = createNS("mask");
                i1.setAttribute("id", e1.layerId), i1.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e1);
                var a1 = t1.globalData.defs;
                a1.appendChild(i1);
                var s1 = createNS("symbol");
                s1.setAttribute("id", r1), this.replaceInParent(e1, r1), s1.appendChild(e1.layerElement), a1.appendChild(s1);
                var n1 = createNS("use");
                n1.setAttribute("href", "#" + r1), i1.appendChild(n1), e1.data.hd = !1, e1.show();
            }
            t1.setMatte(e1.layerId);
        }, SVGMatte3Effect.prototype.initialize = function() {
            for(var t1 = this.filterManager.effectElements[0].p.v, e1 = this.elem.comp.elements, r1 = 0, i1 = e1.length; r1 < i1;)e1[r1] && e1[r1].data.ind === t1 && this.setElementAsMask(this.elem, e1[r1]), r1 += 1;
            this.initialized = !0;
        }, SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize();
        };
        function SVGGaussianBlurEffect(t1, e1, r1, i1) {
            t1.setAttribute("x", "-100%"), t1.setAttribute("y", "-100%"), t1.setAttribute("width", "300%"), t1.setAttribute("height", "300%"), this.filterManager = e1;
            var a1 = createNS("feGaussianBlur");
            a1.setAttribute("result", i1), t1.appendChild(a1), this.feGaussianBlur = a1;
        }
        SVGGaussianBlurEffect.prototype.renderFrame = function(t1) {
            if (t1 || this.filterManager._mdf) {
                var e1 = .3, r1 = this.filterManager.effectElements[0].p.v * e1, i1 = this.filterManager.effectElements[1].p.v, a1 = i1 == 3 ? 0 : r1, s1 = i1 == 2 ? 0 : r1;
                this.feGaussianBlur.setAttribute("stdDeviation", a1 + " " + s1);
                var n1 = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", n1);
            }
        };
        function TransformEffect() {}
        TransformEffect.prototype.init = function(t1) {
            this.effectsManager = t1, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1;
        }, TransformEffect.prototype.renderFrame = function(t1) {
            if (this._opMdf = !1, this._mdf = !1, t1 || this.effectsManager._mdf) {
                var e1 = this.effectsManager.effectElements, r1 = e1[0].p.v, i1 = e1[1].p.v, a1 = e1[2].p.v === 1, s1 = e1[3].p.v, n1 = a1 ? s1 : e1[4].p.v, u1 = e1[5].p.v, h1 = e1[6].p.v, g1 = e1[7].p.v;
                this.matrix.reset(), this.matrix.translate(-r1[0], -r1[1], r1[2]), this.matrix.scale(n1 * .01, s1 * .01, 1), this.matrix.rotate(-g1 * degToRads), this.matrix.skewFromAxis(-u1 * degToRads, (h1 + 90) * degToRads), this.matrix.translate(i1[0], i1[1], 0), this._mdf = !0, this.opacity !== e1[8].p.v && (this.opacity = e1[8].p.v, this._opMdf = !0);
            }
        };
        function SVGTransformEffect(t1, e1) {
            this.init(e1);
        }
        return extendPrototype([
            TransformEffect
        ], SVGTransformEffect), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), registerEffect(35, SVGTransformEffect, !1), lottie;
    });
}), gt = ut(); /*! Bundled license information:

lottie-web/build/player/lottie_svg.js:
  (*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   *)
*/ 

},{"./chunk-U2GK2GFR.mjs":"bBhes","./chunk-XNFEUXDS.mjs":"4Lvnj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9F3SJ"], null, "parcelRequire8861")

//# sourceMappingURL=lottie_svg-NPHRPZVQ-H7F42BXO.8c233a95.js.map
