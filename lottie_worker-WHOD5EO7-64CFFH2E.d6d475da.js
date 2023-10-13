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
})({"l2p7n":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2732f498d6d475da";
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

},{}],"kHTrI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>yt) //# sourceMappingURL=out.js.map
;
var _chunkU2GK2GFRMjs = require("./chunk-U2GK2GFR.mjs");
var _chunkXNFEUXDSMjs = require("./chunk-XNFEUXDS.mjs");
var dt = (0, _chunkU2GK2GFRMjs.a)((exports, module)=>{
    typeof navigator < "u" && function(t1, e1) {
        typeof define == "function" && define.amd ? define(function() {
            return e1(t1);
        }) : typeof module == "object" && module.exports ? module.exports = e1(t1) : (t1.lottie = e1(t1), t1.bodymovin = t1.lottie);
    }(self || {}, function(window) {
        function workerContent() {
            function extendPrototype(t1, e1) {
                var i1, r1 = t1.length, a1;
                for(i1 = 0; i1 < r1; i1 += 1){
                    a1 = t1[i1].prototype;
                    for(var s1 in a1)Object.prototype.hasOwnProperty.call(a1, s1) && (e1.prototype[s1] = a1[s1]);
                }
            }
            function ProxyElement(t1, e1) {
                this._state = "init", this._isDirty = !1, this._isProxy = !0, this._changedStyles = [], this._changedAttributes = [], this._changedElements = [], this._textContent = null, this.type = t1, this.namespace = e1, this.children = [], localIdCounter += 1, this.attributes = {
                    id: "l_d_" + localIdCounter
                }, this.style = new Style(this);
            }
            ProxyElement.prototype = {
                appendChild: function(t1) {
                    t1.parentNode = this, this.children.push(t1), this._isDirty = !0, this._changedElements.push([
                        t1,
                        this.attributes.id
                    ]);
                },
                insertBefore: function(t1, e1) {
                    for(var i1 = this.children, r1 = 0; r1 < i1.length; r1 += 1)if (i1[r1] === e1) {
                        i1.splice(r1, 0, t1), this._isDirty = !0, this._changedElements.push([
                            t1,
                            this.attributes.id,
                            e1.attributes.id
                        ]);
                        return;
                    }
                    i1.push(e1);
                },
                setAttribute: function(t1, e1) {
                    this.attributes[t1] = e1, this._isDirty || (this._isDirty = !0), this._changedAttributes.push(t1);
                },
                serialize: function() {
                    return {
                        type: this.type,
                        namespace: this.namespace,
                        style: this.style.serialize(),
                        attributes: this.attributes,
                        children: this.children.map(function(t1) {
                            return t1.serialize();
                        }),
                        textContent: this._textContent
                    };
                },
                addEventListener: function(t1, e1) {
                    setTimeout(e1, 1);
                },
                setAttributeNS: function(t1, e1, i1) {
                    this.attributes[e1] = i1, this._isDirty || (this._isDirty = !0), this._changedAttributes.push(e1);
                }
            }, Object.defineProperty(ProxyElement.prototype, "textContent", {
                set: function(t1) {
                    this._isDirty = !0, this._textContent = t1;
                }
            });
            var localIdCounter = 0, animations = {}, styleProperties = [
                "width",
                "height",
                "display",
                "transform",
                "opacity",
                "contentVisibility",
                "mix-blend-mode"
            ];
            function convertArguments(t1) {
                var e1 = [], i1, r1 = t1.length;
                for(i1 = 0; i1 < r1; i1 += 1)e1.push(t1[i1]);
                return e1;
            }
            function Style(t1) {
                this.element = t1;
            }
            Style.prototype = {
                serialize: function() {
                    for(var t1 = {}, e1 = 0; e1 < styleProperties.length; e1 += 1){
                        var i1 = styleProperties[e1], r1 = "_" + i1;
                        r1 in this && (t1[i1] = this[r1]);
                    }
                    return t1;
                }
            }, styleProperties.forEach(function(t1) {
                Object.defineProperty(Style.prototype, t1, {
                    set: function(e1) {
                        this.element._isDirty || (this.element._isDirty = !0), this.element._changedStyles.push(t1);
                        var i1 = "_" + t1;
                        this[i1] = e1;
                    },
                    get: function() {
                        var e1 = "_" + t1;
                        return this[e1];
                    }
                });
            });
            function CanvasContext(t1) {
                this.element = t1;
            }
            CanvasContext.prototype = {
                createRadialGradient: function() {
                    function t1() {
                        e1.stops.push(convertArguments(arguments));
                    }
                    var e1 = {
                        t: "rGradient",
                        a: convertArguments(arguments),
                        stops: []
                    };
                    return this.element.instructions.push(e1), {
                        addColorStop: t1
                    };
                },
                createLinearGradient: function() {
                    function t1() {
                        e1.stops.push(convertArguments(arguments));
                    }
                    var e1 = {
                        t: "lGradient",
                        a: convertArguments(arguments),
                        stops: []
                    };
                    return this.element.instructions.push(e1), {
                        addColorStop: t1
                    };
                }
            }, Object.defineProperties(CanvasContext.prototype, {
                canvas: {
                    enumerable: !0,
                    get: function() {
                        return this.element;
                    }
                }
            });
            var canvasContextMethods = [
                "fillRect",
                "setTransform",
                "drawImage",
                "beginPath",
                "moveTo",
                "save",
                "restore",
                "fillText",
                "setLineDash",
                "clearRect",
                "clip",
                "rect",
                "stroke",
                "fill",
                "closePath",
                "bezierCurveTo",
                "lineTo"
            ];
            canvasContextMethods.forEach(function(t1) {
                CanvasContext.prototype[t1] = function() {
                    this.element.instructions.push({
                        t: t1,
                        a: convertArguments(arguments)
                    });
                };
            });
            var canvasContextProperties = [
                "globalAlpha",
                "strokeStyle",
                "fillStyle",
                "lineCap",
                "lineJoin",
                "lineWidth",
                "miterLimit",
                "lineDashOffset",
                "globalCompositeOperation"
            ];
            canvasContextProperties.forEach(function(t1) {
                Object.defineProperty(CanvasContext.prototype, t1, {
                    set: function(e1) {
                        this.element.instructions.push({
                            t: t1,
                            a: e1
                        });
                    }
                });
            });
            function CanvasElement(t1, e1) {
                ProxyElement.call(this, t1, e1), this.instructions = [], this.width = 0, this.height = 0, this.context = new CanvasContext(this);
            }
            CanvasElement.prototype = {
                getContext: function() {
                    return this.context;
                },
                resetInstructions: function() {
                    this.instructions.length = 0;
                }
            }, extendPrototype([
                ProxyElement
            ], CanvasElement);
            function createElement(t1, e1) {
                return e1 === "canvas" ? new CanvasElement(e1, t1) : new ProxyElement(e1, t1);
            }
            var window = self, document = {
                createElementNS: function(t1, e1) {
                    return createElement(t1, e1);
                },
                createElement: function(t1) {
                    return createElement("", t1);
                },
                getElementsByTagName: function() {
                    return [];
                },
                body: createElement("", "body"),
                _isProxy: !0
            }, lottieInternal = function() {
                typeof navigator < "u" && function(t1, e1) {
                    typeof exports == "object" && typeof module < "u" ? module.exports = e1() : typeof define == "function" && define.amd ? define(e1) : (t1 = typeof globalThis < "u" ? globalThis : t1 || self, t1.lottie = e1());
                }(this, function() {
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
                        var i1, r1 = t1.length, a1;
                        for(i1 = 0; i1 < r1; i1 += 1){
                            a1 = t1[i1].prototype;
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
                            var a1 = 0, s1 = [], n1;
                            switch(i1){
                                case "int16":
                                case "uint8c":
                                    n1 = 1;
                                    break;
                                default:
                                    n1 = 1.1;
                                    break;
                            }
                            for(a1 = 0; a1 < r1; a1 += 1)s1.push(n1);
                            return s1;
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
                            var i1 = createSizedArray(t1.length), r1, a1 = t1.length;
                            for(r1 = 0; r1 < a1; r1 += 1)i1[r1] = Math.abs(t1[r1]);
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
                        var r1, a1, s1, n1, h1, o1, c1, g1;
                        switch(n1 = Math.floor(t1 * 6), h1 = t1 * 6 - n1, o1 = i1 * (1 - e1), c1 = i1 * (1 - h1 * e1), g1 = i1 * (1 - (1 - h1) * e1), n1 % 6){
                            case 0:
                                r1 = i1, a1 = g1, s1 = o1;
                                break;
                            case 1:
                                r1 = c1, a1 = i1, s1 = o1;
                                break;
                            case 2:
                                r1 = o1, a1 = i1, s1 = g1;
                                break;
                            case 3:
                                r1 = o1, a1 = c1, s1 = i1;
                                break;
                            case 4:
                                r1 = g1, a1 = o1, s1 = i1;
                                break;
                            case 5:
                                r1 = i1, a1 = o1, s1 = c1;
                                break;
                        }
                        return [
                            r1,
                            a1,
                            s1
                        ];
                    }
                    function RGBtoHSV(t1, e1, i1) {
                        var r1 = Math.max(t1, e1, i1), a1 = Math.min(t1, e1, i1), s1 = r1 - a1, n1, h1 = r1 === 0 ? 0 : s1 / r1, o1 = r1 / 255;
                        switch(r1){
                            case a1:
                                n1 = 0;
                                break;
                            case t1:
                                n1 = e1 - i1 + s1 * (e1 < i1 ? 6 : 0), n1 /= 6 * s1;
                                break;
                            case e1:
                                n1 = i1 - t1 + s1 * 2, n1 /= 6 * s1;
                                break;
                            case i1:
                                n1 = t1 - e1 + s1 * 4, n1 /= 6 * s1;
                                break;
                        }
                        return [
                            n1,
                            h1,
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
                        return function(r1, a1, s1) {
                            return r1 < 0 && (r1 = 0), a1 < 0 && (a1 = 0), s1 < 0 && (s1 = 0), "#" + t1[r1] + t1[a1] + t1[s1];
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
                        var t1 = 1, e1 = [], i1, r1, a1 = {
                            onmessage: function() {},
                            postMessage: function(f1) {
                                i1({
                                    data: f1
                                });
                            }
                        }, s1 = {
                            postMessage: function(f1) {
                                a1.onmessage({
                                    data: f1
                                });
                            }
                        };
                        function n1(f1) {
                            if (window.Worker && window.Blob && getWebWorker()) {
                                var x1 = new Blob([
                                    "var _workerSelf = self; self.onmessage = ",
                                    f1.toString()
                                ], {
                                    type: "text/javascript"
                                }), v1 = URL.createObjectURL(x1);
                                return new Worker(v1);
                            }
                            return i1 = f1, a1;
                        }
                        function h1() {
                            r1 || (r1 = n1(function(f1) {
                                function x1() {
                                    function d1(B1, R1) {
                                        var E1, T1, y1 = B1.length, _1, k1, D1, O1;
                                        for(T1 = 0; T1 < y1; T1 += 1)if (E1 = B1[T1], "ks" in E1 && !E1.completed) {
                                            if (E1.completed = !0, E1.hasMask) {
                                                var z1 = E1.masksProperties;
                                                for(k1 = z1.length, _1 = 0; _1 < k1; _1 += 1)if (z1[_1].pt.k.i) u1(z1[_1].pt.k);
                                                else for(O1 = z1[_1].pt.k.length, D1 = 0; D1 < O1; D1 += 1)z1[_1].pt.k[D1].s && u1(z1[_1].pt.k[D1].s[0]), z1[_1].pt.k[D1].e && u1(z1[_1].pt.k[D1].e[0]);
                                            }
                                            E1.ty === 0 ? (E1.layers = l1(E1.refId, R1), d1(E1.layers, R1)) : E1.ty === 4 ? p1(E1.shapes) : E1.ty === 5 && I1(E1);
                                        }
                                    }
                                    function A1(B1, R1) {
                                        if (B1) {
                                            var E1 = 0, T1 = B1.length;
                                            for(E1 = 0; E1 < T1; E1 += 1)B1[E1].t === 1 && (B1[E1].data.layers = l1(B1[E1].data.refId, R1), d1(B1[E1].data.layers, R1));
                                        }
                                    }
                                    function m1(B1, R1) {
                                        for(var E1 = 0, T1 = R1.length; E1 < T1;){
                                            if (R1[E1].id === B1) return R1[E1];
                                            E1 += 1;
                                        }
                                        return null;
                                    }
                                    function l1(B1, R1) {
                                        var E1 = m1(B1, R1);
                                        return E1 ? E1.layers.__used ? JSON.parse(JSON.stringify(E1.layers)) : (E1.layers.__used = !0, E1.layers) : null;
                                    }
                                    function p1(B1) {
                                        var R1, E1 = B1.length, T1, y1;
                                        for(R1 = E1 - 1; R1 >= 0; R1 -= 1)if (B1[R1].ty === "sh") {
                                            if (B1[R1].ks.k.i) u1(B1[R1].ks.k);
                                            else for(y1 = B1[R1].ks.k.length, T1 = 0; T1 < y1; T1 += 1)B1[R1].ks.k[T1].s && u1(B1[R1].ks.k[T1].s[0]), B1[R1].ks.k[T1].e && u1(B1[R1].ks.k[T1].e[0]);
                                        } else B1[R1].ty === "gr" && p1(B1[R1].it);
                                    }
                                    function u1(B1) {
                                        var R1, E1 = B1.i.length;
                                        for(R1 = 0; R1 < E1; R1 += 1)B1.i[R1][0] += B1.v[R1][0], B1.i[R1][1] += B1.v[R1][1], B1.o[R1][0] += B1.v[R1][0], B1.o[R1][1] += B1.v[R1][1];
                                    }
                                    function P1(B1, R1) {
                                        var E1 = R1 ? R1.split(".") : [
                                            100,
                                            100,
                                            100
                                        ];
                                        return B1[0] > E1[0] ? !0 : E1[0] > B1[0] ? !1 : B1[1] > E1[1] ? !0 : E1[1] > B1[1] ? !1 : B1[2] > E1[2] ? !0 : E1[2] > B1[2] ? !1 : null;
                                    }
                                    var S1 = function() {
                                        var B1 = [
                                            4,
                                            4,
                                            14
                                        ];
                                        function R1(T1) {
                                            var y1 = T1.t.d;
                                            T1.t.d = {
                                                k: [
                                                    {
                                                        s: y1,
                                                        t: 0
                                                    }
                                                ]
                                            };
                                        }
                                        function E1(T1) {
                                            var y1, _1 = T1.length;
                                            for(y1 = 0; y1 < _1; y1 += 1)T1[y1].ty === 5 && R1(T1[y1]);
                                        }
                                        return function(T1) {
                                            if (P1(B1, T1.v) && (E1(T1.layers), T1.assets)) {
                                                var y1, _1 = T1.assets.length;
                                                for(y1 = 0; y1 < _1; y1 += 1)T1.assets[y1].layers && E1(T1.assets[y1].layers);
                                            }
                                        };
                                    }(), C1 = function() {
                                        var B1 = [
                                            4,
                                            7,
                                            99
                                        ];
                                        return function(R1) {
                                            if (R1.chars && !P1(B1, R1.v)) {
                                                var E1, T1 = R1.chars.length;
                                                for(E1 = 0; E1 < T1; E1 += 1){
                                                    var y1 = R1.chars[E1];
                                                    y1.data && y1.data.shapes && (p1(y1.data.shapes), y1.data.ip = 0, y1.data.op = 99999, y1.data.st = 0, y1.data.sr = 1, y1.data.ks = {
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
                                                    }, R1.chars[E1].t || (y1.data.shapes.push({
                                                        ty: "no"
                                                    }), y1.data.shapes[0].it.push({
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
                                    }(), M1 = function() {
                                        var B1 = [
                                            5,
                                            7,
                                            15
                                        ];
                                        function R1(T1) {
                                            var y1 = T1.t.p;
                                            typeof y1.a == "number" && (y1.a = {
                                                a: 0,
                                                k: y1.a
                                            }), typeof y1.p == "number" && (y1.p = {
                                                a: 0,
                                                k: y1.p
                                            }), typeof y1.r == "number" && (y1.r = {
                                                a: 0,
                                                k: y1.r
                                            });
                                        }
                                        function E1(T1) {
                                            var y1, _1 = T1.length;
                                            for(y1 = 0; y1 < _1; y1 += 1)T1[y1].ty === 5 && R1(T1[y1]);
                                        }
                                        return function(T1) {
                                            if (P1(B1, T1.v) && (E1(T1.layers), T1.assets)) {
                                                var y1, _1 = T1.assets.length;
                                                for(y1 = 0; y1 < _1; y1 += 1)T1.assets[y1].layers && E1(T1.assets[y1].layers);
                                            }
                                        };
                                    }(), w1 = function() {
                                        var B1 = [
                                            4,
                                            1,
                                            9
                                        ];
                                        function R1(T1) {
                                            var y1, _1 = T1.length, k1, D1;
                                            for(y1 = 0; y1 < _1; y1 += 1)if (T1[y1].ty === "gr") R1(T1[y1].it);
                                            else if (T1[y1].ty === "fl" || T1[y1].ty === "st") {
                                                if (T1[y1].c.k && T1[y1].c.k[0].i) for(D1 = T1[y1].c.k.length, k1 = 0; k1 < D1; k1 += 1)T1[y1].c.k[k1].s && (T1[y1].c.k[k1].s[0] /= 255, T1[y1].c.k[k1].s[1] /= 255, T1[y1].c.k[k1].s[2] /= 255, T1[y1].c.k[k1].s[3] /= 255), T1[y1].c.k[k1].e && (T1[y1].c.k[k1].e[0] /= 255, T1[y1].c.k[k1].e[1] /= 255, T1[y1].c.k[k1].e[2] /= 255, T1[y1].c.k[k1].e[3] /= 255);
                                                else T1[y1].c.k[0] /= 255, T1[y1].c.k[1] /= 255, T1[y1].c.k[2] /= 255, T1[y1].c.k[3] /= 255;
                                            }
                                        }
                                        function E1(T1) {
                                            var y1, _1 = T1.length;
                                            for(y1 = 0; y1 < _1; y1 += 1)T1[y1].ty === 4 && R1(T1[y1].shapes);
                                        }
                                        return function(T1) {
                                            if (P1(B1, T1.v) && (E1(T1.layers), T1.assets)) {
                                                var y1, _1 = T1.assets.length;
                                                for(y1 = 0; y1 < _1; y1 += 1)T1.assets[y1].layers && E1(T1.assets[y1].layers);
                                            }
                                        };
                                    }(), F1 = function() {
                                        var B1 = [
                                            4,
                                            4,
                                            18
                                        ];
                                        function R1(T1) {
                                            var y1, _1 = T1.length, k1, D1;
                                            for(y1 = _1 - 1; y1 >= 0; y1 -= 1)if (T1[y1].ty === "sh") {
                                                if (T1[y1].ks.k.i) T1[y1].ks.k.c = T1[y1].closed;
                                                else for(D1 = T1[y1].ks.k.length, k1 = 0; k1 < D1; k1 += 1)T1[y1].ks.k[k1].s && (T1[y1].ks.k[k1].s[0].c = T1[y1].closed), T1[y1].ks.k[k1].e && (T1[y1].ks.k[k1].e[0].c = T1[y1].closed);
                                            } else T1[y1].ty === "gr" && R1(T1[y1].it);
                                        }
                                        function E1(T1) {
                                            var y1, _1, k1 = T1.length, D1, O1, z1, H1;
                                            for(_1 = 0; _1 < k1; _1 += 1){
                                                if (y1 = T1[_1], y1.hasMask) {
                                                    var N1 = y1.masksProperties;
                                                    for(O1 = N1.length, D1 = 0; D1 < O1; D1 += 1)if (N1[D1].pt.k.i) N1[D1].pt.k.c = N1[D1].cl;
                                                    else for(H1 = N1[D1].pt.k.length, z1 = 0; z1 < H1; z1 += 1)N1[D1].pt.k[z1].s && (N1[D1].pt.k[z1].s[0].c = N1[D1].cl), N1[D1].pt.k[z1].e && (N1[D1].pt.k[z1].e[0].c = N1[D1].cl);
                                                }
                                                y1.ty === 4 && R1(y1.shapes);
                                            }
                                        }
                                        return function(T1) {
                                            if (P1(B1, T1.v) && (E1(T1.layers), T1.assets)) {
                                                var y1, _1 = T1.assets.length;
                                                for(y1 = 0; y1 < _1; y1 += 1)T1.assets[y1].layers && E1(T1.assets[y1].layers);
                                            }
                                        };
                                    }();
                                    function V1(B1) {
                                        B1.__complete || (w1(B1), S1(B1), C1(B1), M1(B1), F1(B1), d1(B1.layers, B1.assets), A1(B1.chars, B1.assets), B1.__complete = !0);
                                    }
                                    function I1(B1) {
                                        B1.t.a.length === 0 && B1.t.p;
                                    }
                                    var L1 = {};
                                    return L1.completeData = V1, L1.checkColors = w1, L1.checkChars = C1, L1.checkPathProperties = M1, L1.checkShapes = F1, L1.completeLayers = d1, L1;
                                }
                                if (s1.dataManager || (s1.dataManager = x1()), s1.assetLoader || (s1.assetLoader = function() {
                                    function d1(m1) {
                                        var l1 = m1.getResponseHeader("content-type");
                                        return l1 && m1.responseType === "json" && l1.indexOf("json") !== -1 || m1.response && _typeof$5(m1.response) === "object" ? m1.response : m1.response && typeof m1.response == "string" ? JSON.parse(m1.response) : m1.responseText ? JSON.parse(m1.responseText) : null;
                                    }
                                    function A1(m1, l1, p1, u1) {
                                        var P1, S1 = new XMLHttpRequest;
                                        try {
                                            S1.responseType = "json";
                                        } catch  {}
                                        S1.onreadystatechange = function() {
                                            if (S1.readyState === 4) {
                                                if (S1.status === 200) P1 = d1(S1), p1(P1);
                                                else try {
                                                    P1 = d1(S1), p1(P1);
                                                } catch (C1) {
                                                    u1 && u1(C1);
                                                }
                                            }
                                        };
                                        try {
                                            S1.open([
                                                "G",
                                                "E",
                                                "T"
                                            ].join(""), m1, !0);
                                        } catch  {
                                            S1.open([
                                                "G",
                                                "E",
                                                "T"
                                            ].join(""), l1 + "/" + m1, !0);
                                        }
                                        S1.send();
                                    }
                                    return {
                                        load: A1
                                    };
                                }()), f1.data.type === "loadAnimation") s1.assetLoader.load(f1.data.path, f1.data.fullPath, function(d1) {
                                    s1.dataManager.completeData(d1), s1.postMessage({
                                        id: f1.data.id,
                                        payload: d1,
                                        status: "success"
                                    });
                                }, function() {
                                    s1.postMessage({
                                        id: f1.data.id,
                                        status: "error"
                                    });
                                });
                                else if (f1.data.type === "complete") {
                                    var v1 = f1.data.animation;
                                    s1.dataManager.completeData(v1), s1.postMessage({
                                        id: f1.data.id,
                                        payload: v1,
                                        status: "success"
                                    });
                                } else f1.data.type === "loadData" && s1.assetLoader.load(f1.data.path, f1.data.fullPath, function(d1) {
                                    s1.postMessage({
                                        id: f1.data.id,
                                        payload: d1,
                                        status: "success"
                                    });
                                }, function() {
                                    s1.postMessage({
                                        id: f1.data.id,
                                        status: "error"
                                    });
                                });
                            }), r1.onmessage = function(f1) {
                                var x1 = f1.data, v1 = x1.id, d1 = e1[v1];
                                e1[v1] = null, x1.status === "success" ? d1.onComplete(x1.payload) : d1.onError && d1.onError();
                            });
                        }
                        function o1(f1, x1) {
                            t1 += 1;
                            var v1 = "processId_" + t1;
                            return e1[v1] = {
                                onComplete: f1,
                                onError: x1
                            }, v1;
                        }
                        function c1(f1, x1, v1) {
                            h1();
                            var d1 = o1(x1, v1);
                            r1.postMessage({
                                type: "loadAnimation",
                                path: f1,
                                fullPath: window.location.origin + window.location.pathname,
                                id: d1
                            });
                        }
                        function g1(f1, x1, v1) {
                            h1();
                            var d1 = o1(x1, v1);
                            r1.postMessage({
                                type: "loadData",
                                path: f1,
                                fullPath: window.location.origin + window.location.pathname,
                                id: d1
                            });
                        }
                        function b1(f1, x1, v1) {
                            h1();
                            var d1 = o1(x1, v1);
                            r1.postMessage({
                                type: "complete",
                                animation: f1,
                                id: d1
                            });
                        }
                        return {
                            loadAnimation: c1,
                            loadData: g1,
                            completeAnimation: b1
                        };
                    }(), ImagePreloader = function() {
                        var t1 = function() {
                            var m1 = createTag("canvas");
                            m1.width = 1, m1.height = 1;
                            var l1 = m1.getContext("2d");
                            return l1.fillStyle = "rgba(0,0,0,0)", l1.fillRect(0, 0, 1, 1), m1;
                        }();
                        function e1() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
                        }
                        function i1() {
                            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
                        }
                        function r1(m1, l1, p1) {
                            var u1 = "";
                            if (m1.e) u1 = m1.p;
                            else if (l1) {
                                var P1 = m1.p;
                                P1.indexOf("images/") !== -1 && (P1 = P1.split("/")[1]), u1 = l1 + P1;
                            } else u1 = p1, u1 += m1.u ? m1.u : "", u1 += m1.p;
                            return u1;
                        }
                        function a1(m1) {
                            var l1 = 0, p1 = setInterval((function() {
                                var u1 = m1.getBBox();
                                (u1.width || l1 > 500) && (this._imageLoaded(), clearInterval(p1)), l1 += 1;
                            }).bind(this), 50);
                        }
                        function s1(m1) {
                            var l1 = r1(m1, this.assetsPath, this.path), p1 = createNS("image");
                            isSafari ? this.testImageLoaded(p1) : p1.addEventListener("load", this._imageLoaded, !1), p1.addEventListener("error", (function() {
                                u1.img = t1, this._imageLoaded();
                            }).bind(this), !1), p1.setAttributeNS("http://www.w3.org/1999/xlink", "href", l1), this._elementHelper.append ? this._elementHelper.append(p1) : this._elementHelper.appendChild(p1);
                            var u1 = {
                                img: p1,
                                assetData: m1
                            };
                            return u1;
                        }
                        function n1(m1) {
                            var l1 = r1(m1, this.assetsPath, this.path), p1 = createTag("img");
                            p1.crossOrigin = "anonymous", p1.addEventListener("load", this._imageLoaded, !1), p1.addEventListener("error", (function() {
                                u1.img = t1, this._imageLoaded();
                            }).bind(this), !1), p1.src = l1;
                            var u1 = {
                                img: p1,
                                assetData: m1
                            };
                            return u1;
                        }
                        function h1(m1) {
                            var l1 = {
                                assetData: m1
                            }, p1 = r1(m1, this.assetsPath, this.path);
                            return dataManager.loadData(p1, (function(u1) {
                                l1.img = u1, this._footageLoaded();
                            }).bind(this), (function() {
                                l1.img = {}, this._footageLoaded();
                            }).bind(this)), l1;
                        }
                        function o1(m1, l1) {
                            this.imagesLoadedCb = l1;
                            var p1, u1 = m1.length;
                            for(p1 = 0; p1 < u1; p1 += 1)m1[p1].layers || (!m1[p1].t || m1[p1].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(m1[p1]))) : m1[p1].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(m1[p1]))));
                        }
                        function c1(m1) {
                            this.path = m1 || "";
                        }
                        function g1(m1) {
                            this.assetsPath = m1 || "";
                        }
                        function b1(m1) {
                            for(var l1 = 0, p1 = this.images.length; l1 < p1;){
                                if (this.images[l1].assetData === m1) return this.images[l1].img;
                                l1 += 1;
                            }
                            return null;
                        }
                        function f1() {
                            this.imagesLoadedCb = null, this.images.length = 0;
                        }
                        function x1() {
                            return this.totalImages === this.loadedAssets;
                        }
                        function v1() {
                            return this.totalFootages === this.loadedFootagesCount;
                        }
                        function d1(m1, l1) {
                            m1 === "svg" ? (this._elementHelper = l1, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
                        }
                        function A1() {
                            this._imageLoaded = e1.bind(this), this._footageLoaded = i1.bind(this), this.testImageLoaded = a1.bind(this), this.createFootageData = h1.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
                        }
                        return A1.prototype = {
                            loadAssets: o1,
                            setAssetsPath: g1,
                            setPath: c1,
                            loadedImages: x1,
                            loadedFootages: v1,
                            destroy: f1,
                            getAsset: b1,
                            createImgData: n1,
                            createImageData: s1,
                            imageLoaded: e1,
                            footageLoaded: i1,
                            setCacheType: d1
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
`), r1 = {}, a1, s1 = 0, n1 = 0; n1 < i1.length; n1 += 1)a1 = i1[n1].split(":"), a1.length === 2 && (r1[a1[0]] = a1[1].trim(), s1 += 1);
                            if (s1 === 0) throw new Error;
                            return r1;
                        }
                        return function(e1) {
                            for(var i1 = [], r1 = 0; r1 < e1.length; r1 += 1){
                                var a1 = e1[r1], s1 = {
                                    time: a1.tm,
                                    duration: a1.dr
                                };
                                try {
                                    s1.payload = JSON.parse(e1[r1].cm);
                                } catch  {
                                    try {
                                        s1.payload = t1(e1[r1].cm);
                                    } catch  {
                                        s1.payload = {
                                            name: e1[r1].cm
                                        };
                                    }
                                }
                                i1.push(s1);
                            }
                            return i1;
                        };
                    }(), ProjectInterface = function() {
                        function t1(e1) {
                            this.compositions.push(e1);
                        }
                        return function() {
                            function e1(i1) {
                                for(var r1 = 0, a1 = this.compositions.length; r1 < a1;){
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
                        var a1 = r1.getNamedItem("data-anim-loop") ? r1.getNamedItem("data-anim-loop").value : r1.getNamedItem("data-bm-loop") ? r1.getNamedItem("data-bm-loop").value : r1.getNamedItem("bm-loop") ? r1.getNamedItem("bm-loop").value : "";
                        a1 === "false" ? i1.loop = !1 : a1 === "true" ? i1.loop = !0 : a1 !== "" && (i1.loop = parseInt(a1, 10));
                        var s1 = r1.getNamedItem("data-anim-autoplay") ? r1.getNamedItem("data-anim-autoplay").value : r1.getNamedItem("data-bm-autoplay") ? r1.getNamedItem("data-bm-autoplay").value : r1.getNamedItem("bm-autoplay") ? r1.getNamedItem("bm-autoplay").value : !0;
                        i1.autoplay = s1 !== "false", i1.name = r1.getNamedItem("data-name") ? r1.getNamedItem("data-name").value : r1.getNamedItem("data-bm-name") ? r1.getNamedItem("data-bm-name").value : r1.getNamedItem("bm-name") ? r1.getNamedItem("bm-name").value : "";
                        var n1 = r1.getNamedItem("data-anim-prerender") ? r1.getNamedItem("data-anim-prerender").value : r1.getNamedItem("data-bm-prerender") ? r1.getNamedItem("data-bm-prerender").value : r1.getNamedItem("bm-prerender") ? r1.getNamedItem("bm-prerender").value : "";
                        n1 === "false" && (i1.prerender = !1), i1.path ? this.setParams(i1) : this.trigger("destroy");
                    }, AnimationItem.prototype.includeLayers = function(t1) {
                        t1.op > this.animationData.op && (this.animationData.op = t1.op, this.totalFrames = Math.floor(t1.op - this.animationData.ip));
                        var e1 = this.animationData.layers, i1, r1 = e1.length, a1 = t1.layers, s1, n1 = a1.length;
                        for(s1 = 0; s1 < n1; s1 += 1)for(i1 = 0; i1 < r1;){
                            if (e1[i1].id === a1[s1].id) {
                                e1[i1] = a1[s1];
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
                                var a1 = this.getMarkerData(t1);
                                a1 && this.goToAndStop(a1.time, !0);
                            } else e1 ? this.setCurrentRawFrameValue(t1) : this.setCurrentRawFrameValue(t1 * this.frameModifier);
                            this.pause();
                        }
                    }, AnimationItem.prototype.goToAndPlay = function(t1, e1, i1) {
                        if (!(i1 && this.name !== i1)) {
                            var r1 = Number(t1);
                            if (isNaN(r1)) {
                                var a1 = this.getMarkerData(t1);
                                a1 && (a1.duration ? this.playSegments([
                                    a1.time,
                                    a1.time + a1.duration
                                ], !0) : this.goToAndStop(a1.time, !0));
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
                        var t1 = {}, e1 = [], i1 = 0, r1 = 0, a1 = 0, s1 = !0, n1 = !1;
                        function h1(E1) {
                            for(var T1 = 0, y1 = E1.target; T1 < r1;)e1[T1].animation === y1 && (e1.splice(T1, 1), T1 -= 1, r1 -= 1, y1.isPaused || b1()), T1 += 1;
                        }
                        function o1(E1, T1) {
                            if (!E1) return null;
                            for(var y1 = 0; y1 < r1;){
                                if (e1[y1].elem === E1 && e1[y1].elem !== null) return e1[y1].animation;
                                y1 += 1;
                            }
                            var _1 = new AnimationItem;
                            return f1(_1, E1), _1.setData(E1, T1), _1;
                        }
                        function c1() {
                            var E1, T1 = e1.length, y1 = [];
                            for(E1 = 0; E1 < T1; E1 += 1)y1.push(e1[E1].animation);
                            return y1;
                        }
                        function g1() {
                            a1 += 1, F1();
                        }
                        function b1() {
                            a1 -= 1;
                        }
                        function f1(E1, T1) {
                            E1.addEventListener("destroy", h1), E1.addEventListener("_active", g1), E1.addEventListener("_idle", b1), e1.push({
                                elem: T1,
                                animation: E1
                            }), r1 += 1;
                        }
                        function x1(E1) {
                            var T1 = new AnimationItem;
                            return f1(T1, null), T1.setParams(E1), T1;
                        }
                        function v1(E1, T1) {
                            var y1;
                            for(y1 = 0; y1 < r1; y1 += 1)e1[y1].animation.setSpeed(E1, T1);
                        }
                        function d1(E1, T1) {
                            var y1;
                            for(y1 = 0; y1 < r1; y1 += 1)e1[y1].animation.setDirection(E1, T1);
                        }
                        function A1(E1) {
                            var T1;
                            for(T1 = 0; T1 < r1; T1 += 1)e1[T1].animation.play(E1);
                        }
                        function m1(E1) {
                            var T1 = E1 - i1, y1;
                            for(y1 = 0; y1 < r1; y1 += 1)e1[y1].animation.advanceTime(T1);
                            i1 = E1, a1 && !n1 ? window.requestAnimationFrame(m1) : s1 = !0;
                        }
                        function l1(E1) {
                            i1 = E1, window.requestAnimationFrame(m1);
                        }
                        function p1(E1) {
                            var T1;
                            for(T1 = 0; T1 < r1; T1 += 1)e1[T1].animation.pause(E1);
                        }
                        function u1(E1, T1, y1) {
                            var _1;
                            for(_1 = 0; _1 < r1; _1 += 1)e1[_1].animation.goToAndStop(E1, T1, y1);
                        }
                        function P1(E1) {
                            var T1;
                            for(T1 = 0; T1 < r1; T1 += 1)e1[T1].animation.stop(E1);
                        }
                        function S1(E1) {
                            var T1;
                            for(T1 = 0; T1 < r1; T1 += 1)e1[T1].animation.togglePause(E1);
                        }
                        function C1(E1) {
                            var T1;
                            for(T1 = r1 - 1; T1 >= 0; T1 -= 1)e1[T1].animation.destroy(E1);
                        }
                        function M1(E1, T1, y1) {
                            var _1 = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), k1, D1 = _1.length;
                            for(k1 = 0; k1 < D1; k1 += 1)y1 && _1[k1].setAttribute("data-bm-type", y1), o1(_1[k1], E1);
                            if (T1 && D1 === 0) {
                                y1 || (y1 = "svg");
                                var O1 = document.getElementsByTagName("body")[0];
                                O1.innerText = "";
                                var z1 = createTag("div");
                                z1.style.width = "100%", z1.style.height = "100%", z1.setAttribute("data-bm-type", y1), O1.appendChild(z1), o1(z1, E1);
                            }
                        }
                        function w1() {
                            var E1;
                            for(E1 = 0; E1 < r1; E1 += 1)e1[E1].animation.resize();
                        }
                        function F1() {
                            !n1 && a1 && s1 && (window.requestAnimationFrame(l1), s1 = !1);
                        }
                        function V1() {
                            n1 = !0;
                        }
                        function I1() {
                            n1 = !1, F1();
                        }
                        function L1(E1, T1) {
                            var y1;
                            for(y1 = 0; y1 < r1; y1 += 1)e1[y1].animation.setVolume(E1, T1);
                        }
                        function B1(E1) {
                            var T1;
                            for(T1 = 0; T1 < r1; T1 += 1)e1[T1].animation.mute(E1);
                        }
                        function R1(E1) {
                            var T1;
                            for(T1 = 0; T1 < r1; T1 += 1)e1[T1].animation.unmute(E1);
                        }
                        return t1.registerAnimation = o1, t1.loadAnimation = x1, t1.setSpeed = v1, t1.setDirection = d1, t1.play = A1, t1.pause = p1, t1.stop = P1, t1.togglePause = S1, t1.searchAnimations = M1, t1.resize = w1, t1.goToAndStop = u1, t1.destroy = C1, t1.freeze = V1, t1.unfreeze = I1, t1.setVolume = L1, t1.mute = B1, t1.unmute = R1, t1.getRegisteredAnimations = c1, t1;
                    }(), BezierFactory = function() {
                        var t1 = {};
                        t1.getBezierEasing = i1;
                        var e1 = {};
                        function i1(l1, p1, u1, P1, S1) {
                            var C1 = S1 || ("bez_" + l1 + "_" + p1 + "_" + u1 + "_" + P1).replace(/\./g, "p");
                            if (e1[C1]) return e1[C1];
                            var M1 = new m1([
                                l1,
                                p1,
                                u1,
                                P1
                            ]);
                            return e1[C1] = M1, M1;
                        }
                        var r1 = 4, a1 = .001, s1 = 1e-7, n1 = 10, h1 = 11, o1 = 1 / (h1 - 1), c1 = typeof Float32Array == "function";
                        function g1(l1, p1) {
                            return 1 - 3 * p1 + 3 * l1;
                        }
                        function b1(l1, p1) {
                            return 3 * p1 - 6 * l1;
                        }
                        function f1(l1) {
                            return 3 * l1;
                        }
                        function x1(l1, p1, u1) {
                            return ((g1(p1, u1) * l1 + b1(p1, u1)) * l1 + f1(p1)) * l1;
                        }
                        function v1(l1, p1, u1) {
                            return 3 * g1(p1, u1) * l1 * l1 + 2 * b1(p1, u1) * l1 + f1(p1);
                        }
                        function d1(l1, p1, u1, P1, S1) {
                            var C1, M1, w1 = 0;
                            do M1 = p1 + (u1 - p1) / 2, C1 = x1(M1, P1, S1) - l1, C1 > 0 ? u1 = M1 : p1 = M1;
                            while (Math.abs(C1) > s1 && ++w1 < n1);
                            return M1;
                        }
                        function A1(l1, p1, u1, P1) {
                            for(var S1 = 0; S1 < r1; ++S1){
                                var C1 = v1(p1, u1, P1);
                                if (C1 === 0) return p1;
                                var M1 = x1(p1, u1, P1) - l1;
                                p1 -= M1 / C1;
                            }
                            return p1;
                        }
                        function m1(l1) {
                            this._p = l1, this._mSampleValues = c1 ? new Float32Array(h1) : new Array(h1), this._precomputed = !1, this.get = this.get.bind(this);
                        }
                        return m1.prototype = {
                            get: function(l1) {
                                var p1 = this._p[0], u1 = this._p[1], P1 = this._p[2], S1 = this._p[3];
                                return this._precomputed || this._precompute(), p1 === u1 && P1 === S1 ? l1 : l1 === 0 ? 0 : l1 === 1 ? 1 : x1(this._getTForX(l1), u1, S1);
                            },
                            _precompute: function() {
                                var l1 = this._p[0], p1 = this._p[1], u1 = this._p[2], P1 = this._p[3];
                                this._precomputed = !0, (l1 !== p1 || u1 !== P1) && this._calcSampleValues();
                            },
                            _calcSampleValues: function() {
                                for(var l1 = this._p[0], p1 = this._p[2], u1 = 0; u1 < h1; ++u1)this._mSampleValues[u1] = x1(u1 * o1, l1, p1);
                            },
                            _getTForX: function(l1) {
                                for(var p1 = this._p[0], u1 = this._p[2], P1 = this._mSampleValues, S1 = 0, C1 = 1, M1 = h1 - 1; C1 !== M1 && P1[C1] <= l1; ++C1)S1 += o1;
                                --C1;
                                var w1 = (l1 - P1[C1]) / (P1[C1 + 1] - P1[C1]), F1 = S1 + w1 * o1, V1 = v1(F1, p1, u1);
                                return V1 >= a1 ? A1(l1, F1, p1, u1) : V1 === 0 ? F1 : d1(l1, S1, S1 + o1, p1, u1);
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
                            var r1 = 0, a1 = t1, s1 = createSizedArray(a1), n1 = {
                                newElement: h1,
                                release: o1
                            };
                            function h1() {
                                var c1;
                                return r1 ? (r1 -= 1, c1 = s1[r1]) : c1 = e1(), c1;
                            }
                            function o1(c1) {
                                r1 === a1 && (s1 = pooling.double(s1), a1 *= 2), i1 && i1(c1), s1[r1] = c1, r1 += 1;
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
                            var r1, a1 = i1.lengths.length;
                            for(r1 = 0; r1 < a1; r1 += 1)bezierLengthPool.release(i1.lengths[r1]);
                            i1.lengths.length = 0;
                        }
                        return poolFactory(8, t1, e1);
                    }();
                    function bezFunction() {
                        var t1 = Math;
                        function e1(f1, x1, v1, d1, A1, m1) {
                            var l1 = f1 * d1 + x1 * A1 + v1 * m1 - A1 * d1 - m1 * f1 - v1 * x1;
                            return l1 > -0.001 && l1 < .001;
                        }
                        function i1(f1, x1, v1, d1, A1, m1, l1, p1, u1) {
                            if (v1 === 0 && m1 === 0 && u1 === 0) return e1(f1, x1, d1, A1, l1, p1);
                            var P1 = t1.sqrt(t1.pow(d1 - f1, 2) + t1.pow(A1 - x1, 2) + t1.pow(m1 - v1, 2)), S1 = t1.sqrt(t1.pow(l1 - f1, 2) + t1.pow(p1 - x1, 2) + t1.pow(u1 - v1, 2)), C1 = t1.sqrt(t1.pow(l1 - d1, 2) + t1.pow(p1 - A1, 2) + t1.pow(u1 - m1, 2)), M1;
                            return P1 > S1 ? P1 > C1 ? M1 = P1 - S1 - C1 : M1 = C1 - S1 - P1 : C1 > S1 ? M1 = C1 - S1 - P1 : M1 = S1 - P1 - C1, M1 > -0.0001 && M1 < 1e-4;
                        }
                        var r1 = function() {
                            return function(f1, x1, v1, d1) {
                                var A1 = getDefaultCurveSegments(), m1, l1, p1, u1, P1, S1 = 0, C1, M1 = [], w1 = [], F1 = bezierLengthPool.newElement();
                                for(p1 = v1.length, m1 = 0; m1 < A1; m1 += 1){
                                    for(P1 = m1 / (A1 - 1), C1 = 0, l1 = 0; l1 < p1; l1 += 1)u1 = bmPow(1 - P1, 3) * f1[l1] + 3 * bmPow(1 - P1, 2) * P1 * v1[l1] + 3 * (1 - P1) * bmPow(P1, 2) * d1[l1] + bmPow(P1, 3) * x1[l1], M1[l1] = u1, w1[l1] !== null && (C1 += bmPow(M1[l1] - w1[l1], 2)), w1[l1] = M1[l1];
                                    C1 && (C1 = bmSqrt(C1), S1 += C1), F1.percents[m1] = P1, F1.lengths[m1] = S1;
                                }
                                return F1.addedLength = S1, F1;
                            };
                        }();
                        function a1(f1) {
                            var x1 = segmentsLengthPool.newElement(), v1 = f1.c, d1 = f1.v, A1 = f1.o, m1 = f1.i, l1, p1 = f1._length, u1 = x1.lengths, P1 = 0;
                            for(l1 = 0; l1 < p1 - 1; l1 += 1)u1[l1] = r1(d1[l1], d1[l1 + 1], A1[l1], m1[l1 + 1]), P1 += u1[l1].addedLength;
                            return v1 && p1 && (u1[l1] = r1(d1[l1], d1[0], A1[l1], m1[0]), P1 += u1[l1].addedLength), x1.totalLength = P1, x1;
                        }
                        function s1(f1) {
                            this.segmentLength = 0, this.points = new Array(f1);
                        }
                        function n1(f1, x1) {
                            this.partialLength = f1, this.point = x1;
                        }
                        var h1 = function() {
                            var f1 = {};
                            return function(x1, v1, d1, A1) {
                                var m1 = (x1[0] + "_" + x1[1] + "_" + v1[0] + "_" + v1[1] + "_" + d1[0] + "_" + d1[1] + "_" + A1[0] + "_" + A1[1]).replace(/\./g, "p");
                                if (!f1[m1]) {
                                    var l1 = getDefaultCurveSegments(), p1, u1, P1, S1, C1, M1 = 0, w1, F1, V1 = null;
                                    x1.length === 2 && (x1[0] !== v1[0] || x1[1] !== v1[1]) && e1(x1[0], x1[1], v1[0], v1[1], x1[0] + d1[0], x1[1] + d1[1]) && e1(x1[0], x1[1], v1[0], v1[1], v1[0] + A1[0], v1[1] + A1[1]) && (l1 = 2);
                                    var I1 = new s1(l1);
                                    for(P1 = d1.length, p1 = 0; p1 < l1; p1 += 1){
                                        for(F1 = createSizedArray(P1), C1 = p1 / (l1 - 1), w1 = 0, u1 = 0; u1 < P1; u1 += 1)S1 = bmPow(1 - C1, 3) * x1[u1] + 3 * bmPow(1 - C1, 2) * C1 * (x1[u1] + d1[u1]) + 3 * (1 - C1) * bmPow(C1, 2) * (v1[u1] + A1[u1]) + bmPow(C1, 3) * v1[u1], F1[u1] = S1, V1 !== null && (w1 += bmPow(F1[u1] - V1[u1], 2));
                                        w1 = bmSqrt(w1), M1 += w1, I1.points[p1] = new n1(w1, F1), V1 = F1;
                                    }
                                    I1.segmentLength = M1, f1[m1] = I1;
                                }
                                return f1[m1];
                            };
                        }();
                        function o1(f1, x1) {
                            var v1 = x1.percents, d1 = x1.lengths, A1 = v1.length, m1 = bmFloor((A1 - 1) * f1), l1 = f1 * x1.addedLength, p1 = 0;
                            if (m1 === A1 - 1 || m1 === 0 || l1 === d1[m1]) return v1[m1];
                            for(var u1 = d1[m1] > l1 ? -1 : 1, P1 = !0; P1;)if (d1[m1] <= l1 && d1[m1 + 1] > l1 ? (p1 = (l1 - d1[m1]) / (d1[m1 + 1] - d1[m1]), P1 = !1) : m1 += u1, m1 < 0 || m1 >= A1 - 1) {
                                if (m1 === A1 - 1) return v1[m1];
                                P1 = !1;
                            }
                            return v1[m1] + (v1[m1 + 1] - v1[m1]) * p1;
                        }
                        function c1(f1, x1, v1, d1, A1, m1) {
                            var l1 = o1(A1, m1), p1 = 1 - l1, u1 = t1.round((p1 * p1 * p1 * f1[0] + (l1 * p1 * p1 + p1 * l1 * p1 + p1 * p1 * l1) * v1[0] + (l1 * l1 * p1 + p1 * l1 * l1 + l1 * p1 * l1) * d1[0] + l1 * l1 * l1 * x1[0]) * 1e3) / 1e3, P1 = t1.round((p1 * p1 * p1 * f1[1] + (l1 * p1 * p1 + p1 * l1 * p1 + p1 * p1 * l1) * v1[1] + (l1 * l1 * p1 + p1 * l1 * l1 + l1 * p1 * l1) * d1[1] + l1 * l1 * l1 * x1[1]) * 1e3) / 1e3;
                            return [
                                u1,
                                P1
                            ];
                        }
                        var g1 = createTypedArray("float32", 8);
                        function b1(f1, x1, v1, d1, A1, m1, l1) {
                            A1 < 0 ? A1 = 0 : A1 > 1 && (A1 = 1);
                            var p1 = o1(A1, l1);
                            m1 = m1 > 1 ? 1 : m1;
                            var u1 = o1(m1, l1), P1, S1 = f1.length, C1 = 1 - p1, M1 = 1 - u1, w1 = C1 * C1 * C1, F1 = p1 * C1 * C1 * 3, V1 = p1 * p1 * C1 * 3, I1 = p1 * p1 * p1, L1 = C1 * C1 * M1, B1 = p1 * C1 * M1 + C1 * p1 * M1 + C1 * C1 * u1, R1 = p1 * p1 * M1 + C1 * p1 * u1 + p1 * C1 * u1, E1 = p1 * p1 * u1, T1 = C1 * M1 * M1, y1 = p1 * M1 * M1 + C1 * u1 * M1 + C1 * M1 * u1, _1 = p1 * u1 * M1 + C1 * u1 * u1 + p1 * M1 * u1, k1 = p1 * u1 * u1, D1 = M1 * M1 * M1, O1 = u1 * M1 * M1 + M1 * u1 * M1 + M1 * M1 * u1, z1 = u1 * u1 * M1 + M1 * u1 * u1 + u1 * M1 * u1, H1 = u1 * u1 * u1;
                            for(P1 = 0; P1 < S1; P1 += 1)g1[P1 * 4] = t1.round((w1 * f1[P1] + F1 * v1[P1] + V1 * d1[P1] + I1 * x1[P1]) * 1e3) / 1e3, g1[P1 * 4 + 1] = t1.round((L1 * f1[P1] + B1 * v1[P1] + R1 * d1[P1] + E1 * x1[P1]) * 1e3) / 1e3, g1[P1 * 4 + 2] = t1.round((T1 * f1[P1] + y1 * v1[P1] + _1 * d1[P1] + k1 * x1[P1]) * 1e3) / 1e3, g1[P1 * 4 + 3] = t1.round((D1 * f1[P1] + O1 * v1[P1] + z1 * d1[P1] + H1 * x1[P1]) * 1e3) / 1e3;
                            return g1;
                        }
                        return {
                            getSegmentsLength: a1,
                            getNewSegment: b1,
                            getPointInSegment: c1,
                            buildBezierData: h1,
                            pointOnLine2D: e1,
                            pointOnLine3D: i1
                        };
                    }
                    var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
                    function interpolateValue(t1, e1) {
                        var i1 = this.offsetTime, r1;
                        this.propType === "multidimensional" && (r1 = createTypedArray("float32", this.pv.length));
                        for(var a1 = e1.lastIndex, s1 = a1, n1 = this.keyframes.length - 1, h1 = !0, o1, c1, g1; h1;){
                            if (o1 = this.keyframes[s1], c1 = this.keyframes[s1 + 1], s1 === n1 - 1 && t1 >= c1.t - i1) {
                                o1.h && (o1 = c1), a1 = 0;
                                break;
                            }
                            if (c1.t - i1 > t1) {
                                a1 = s1;
                                break;
                            }
                            s1 < n1 - 1 ? s1 += 1 : (a1 = 0, h1 = !1);
                        }
                        g1 = this.keyframesMetadata[s1] || {};
                        var b1, f1, x1, v1, d1, A1, m1 = c1.t - i1, l1 = o1.t - i1, p1;
                        if (o1.to) {
                            g1.bezierData || (g1.bezierData = bez.buildBezierData(o1.s, c1.s || o1.e, o1.to, o1.ti));
                            var u1 = g1.bezierData;
                            if (t1 >= m1 || t1 < l1) {
                                var P1 = t1 >= m1 ? u1.points.length - 1 : 0;
                                for(f1 = u1.points[P1].point.length, b1 = 0; b1 < f1; b1 += 1)r1[b1] = u1.points[P1].point[b1];
                            } else {
                                g1.__fnct ? A1 = g1.__fnct : (A1 = BezierFactory.getBezierEasing(o1.o.x, o1.o.y, o1.i.x, o1.i.y, o1.n).get, g1.__fnct = A1), x1 = A1((t1 - l1) / (m1 - l1));
                                var S1 = u1.segmentLength * x1, C1, M1 = e1.lastFrame < t1 && e1._lastKeyframeIndex === s1 ? e1._lastAddedLength : 0;
                                for(d1 = e1.lastFrame < t1 && e1._lastKeyframeIndex === s1 ? e1._lastPoint : 0, h1 = !0, v1 = u1.points.length; h1;){
                                    if (M1 += u1.points[d1].partialLength, S1 === 0 || x1 === 0 || d1 === u1.points.length - 1) {
                                        for(f1 = u1.points[d1].point.length, b1 = 0; b1 < f1; b1 += 1)r1[b1] = u1.points[d1].point[b1];
                                        break;
                                    } else if (S1 >= M1 && S1 < M1 + u1.points[d1 + 1].partialLength) {
                                        for(C1 = (S1 - M1) / u1.points[d1 + 1].partialLength, f1 = u1.points[d1].point.length, b1 = 0; b1 < f1; b1 += 1)r1[b1] = u1.points[d1].point[b1] + (u1.points[d1 + 1].point[b1] - u1.points[d1].point[b1]) * C1;
                                        break;
                                    }
                                    d1 < v1 - 1 ? d1 += 1 : h1 = !1;
                                }
                                e1._lastPoint = d1, e1._lastAddedLength = M1 - u1.points[d1].partialLength, e1._lastKeyframeIndex = s1;
                            }
                        } else {
                            var w1, F1, V1, I1, L1;
                            if (n1 = o1.s.length, p1 = c1.s || o1.e, this.sh && o1.h !== 1) {
                                if (t1 >= m1) r1[0] = p1[0], r1[1] = p1[1], r1[2] = p1[2];
                                else if (t1 <= l1) r1[0] = o1.s[0], r1[1] = o1.s[1], r1[2] = o1.s[2];
                                else {
                                    var B1 = createQuaternion(o1.s), R1 = createQuaternion(p1), E1 = (t1 - l1) / (m1 - l1);
                                    quaternionToEuler(r1, slerp(B1, R1, E1));
                                }
                            } else for(s1 = 0; s1 < n1; s1 += 1)o1.h !== 1 && (t1 >= m1 ? x1 = 1 : t1 < l1 ? x1 = 0 : (o1.o.x.constructor === Array ? (g1.__fnct || (g1.__fnct = []), g1.__fnct[s1] ? A1 = g1.__fnct[s1] : (w1 = o1.o.x[s1] === void 0 ? o1.o.x[0] : o1.o.x[s1], F1 = o1.o.y[s1] === void 0 ? o1.o.y[0] : o1.o.y[s1], V1 = o1.i.x[s1] === void 0 ? o1.i.x[0] : o1.i.x[s1], I1 = o1.i.y[s1] === void 0 ? o1.i.y[0] : o1.i.y[s1], A1 = BezierFactory.getBezierEasing(w1, F1, V1, I1).get, g1.__fnct[s1] = A1)) : g1.__fnct ? A1 = g1.__fnct : (w1 = o1.o.x, F1 = o1.o.y, V1 = o1.i.x, I1 = o1.i.y, A1 = BezierFactory.getBezierEasing(w1, F1, V1, I1).get, o1.keyframeMetadata = A1), x1 = A1((t1 - l1) / (m1 - l1)))), p1 = c1.s || o1.e, L1 = o1.h === 1 ? o1.s[s1] : o1.s[s1] + (p1[s1] - o1.s[s1]) * x1, this.propType === "multidimensional" ? r1[s1] = L1 : r1 = L1;
                        }
                        return e1.lastIndex = a1, r1;
                    }
                    function slerp(t1, e1, i1) {
                        var r1 = [], a1 = t1[0], s1 = t1[1], n1 = t1[2], h1 = t1[3], o1 = e1[0], c1 = e1[1], g1 = e1[2], b1 = e1[3], f1, x1, v1, d1, A1;
                        return x1 = a1 * o1 + s1 * c1 + n1 * g1 + h1 * b1, x1 < 0 && (x1 = -x1, o1 = -o1, c1 = -c1, g1 = -g1, b1 = -b1), 1 - x1 > 1e-6 ? (f1 = Math.acos(x1), v1 = Math.sin(f1), d1 = Math.sin((1 - i1) * f1) / v1, A1 = Math.sin(i1 * f1) / v1) : (d1 = 1 - i1, A1 = i1), r1[0] = d1 * a1 + A1 * o1, r1[1] = d1 * s1 + A1 * c1, r1[2] = d1 * n1 + A1 * g1, r1[3] = d1 * h1 + A1 * b1, r1;
                    }
                    function quaternionToEuler(t1, e1) {
                        var i1 = e1[0], r1 = e1[1], a1 = e1[2], s1 = e1[3], n1 = Math.atan2(2 * r1 * s1 - 2 * i1 * a1, 1 - 2 * r1 * r1 - 2 * a1 * a1), h1 = Math.asin(2 * i1 * r1 + 2 * a1 * s1), o1 = Math.atan2(2 * i1 * s1 - 2 * r1 * a1, 1 - 2 * i1 * i1 - 2 * a1 * a1);
                        t1[0] = n1 / degToRads, t1[1] = h1 / degToRads, t1[2] = o1 / degToRads;
                    }
                    function createQuaternion(t1) {
                        var e1 = t1[0] * degToRads, i1 = t1[1] * degToRads, r1 = t1[2] * degToRads, a1 = Math.cos(e1 / 2), s1 = Math.cos(i1 / 2), n1 = Math.cos(r1 / 2), h1 = Math.sin(e1 / 2), o1 = Math.sin(i1 / 2), c1 = Math.sin(r1 / 2), g1 = a1 * s1 * n1 - h1 * o1 * c1, b1 = h1 * o1 * n1 + a1 * s1 * c1, f1 = h1 * s1 * n1 + a1 * o1 * c1, x1 = a1 * o1 * n1 - h1 * s1 * c1;
                        return [
                            b1,
                            f1,
                            x1,
                            g1
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
                        var a1, s1 = e1.k.length;
                        for(this.v = createTypedArray("float32", s1), this.pv = createTypedArray("float32", s1), this.vel = createTypedArray("float32", s1), a1 = 0; a1 < s1; a1 += 1)this.v[a1] = e1.k[a1] * this.mult, this.pv[a1] = e1.k[a1];
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
                        var a1, s1 = e1.k.length, n1, h1, o1, c1;
                        for(a1 = 0; a1 < s1 - 1; a1 += 1)e1.k[a1].to && e1.k[a1].s && e1.k[a1 + 1] && e1.k[a1 + 1].s && (n1 = e1.k[a1].s, h1 = e1.k[a1 + 1].s, o1 = e1.k[a1].to, c1 = e1.k[a1].ti, (n1.length === 2 && !(n1[0] === h1[0] && n1[1] === h1[1]) && bez.pointOnLine2D(n1[0], n1[1], h1[0], h1[1], n1[0] + o1[0], n1[1] + o1[1]) && bez.pointOnLine2D(n1[0], n1[1], h1[0], h1[1], h1[0] + c1[0], h1[1] + c1[1]) || n1.length === 3 && !(n1[0] === h1[0] && n1[1] === h1[1] && n1[2] === h1[2]) && bez.pointOnLine3D(n1[0], n1[1], n1[2], h1[0], h1[1], h1[2], n1[0] + o1[0], n1[1] + o1[1], n1[2] + o1[2]) && bez.pointOnLine3D(n1[0], n1[1], n1[2], h1[0], h1[1], h1[2], h1[0] + c1[0], h1[1] + c1[1], h1[2] + c1[2])) && (e1.k[a1].to = null, e1.k[a1].ti = null), n1[0] === h1[0] && n1[1] === h1[1] && o1[0] === 0 && o1[1] === 0 && c1[0] === 0 && c1[1] === 0 && (n1.length === 2 || n1[2] === h1[2] && o1[2] === 0 && c1[2] === 0) && (e1.k[a1].to = null, e1.k[a1].ti = null));
                        this.effectsSequence = [
                            getValueAtCurrentTime.bind(this)
                        ], this.data = e1, this.keyframes = e1.k, this.keyframesMetadata = [], this.offsetTime = t1.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i1 || 1, this.elem = t1, this.container = r1, this.comp = t1.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
                        var g1 = e1.k[0].s.length;
                        for(this.v = createTypedArray("float32", g1), this.pv = createTypedArray("float32", g1), a1 = 0; a1 < g1; a1 += 1)this.v[a1] = initFrame, this.pv[a1] = initFrame;
                        this._caching = {
                            lastFrame: initFrame,
                            lastIndex: 0,
                            value: createTypedArray("float32", g1)
                        }, this.addEffect = addEffect;
                    }
                    var PropertyFactory = function() {
                        function t1(i1, r1, a1, s1, n1) {
                            r1.sid && (r1 = i1.globalData.slotManager.getProp(r1));
                            var h1;
                            if (!r1.k.length) h1 = new ValueProperty(i1, r1, s1, n1);
                            else if (typeof r1.k[0] == "number") h1 = new MultiDimensionalProperty(i1, r1, s1, n1);
                            else switch(a1){
                                case 0:
                                    h1 = new KeyframedValueProperty(i1, r1, s1, n1);
                                    break;
                                case 1:
                                    h1 = new KeyframedMultidimensionalProperty(i1, r1, s1, n1);
                                    break;
                            }
                            return h1.effectsSequence.length && n1.addDynamicProperty(h1), h1;
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
                    }, ShapePath.prototype.setXYAt = function(t1, e1, i1, r1, a1) {
                        var s1;
                        switch(this._length = Math.max(this._length, r1 + 1), this._length >= this._maxLength && this.doubleArrayLength(), i1){
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
                        (!s1[r1] || s1[r1] && !a1) && (s1[r1] = pointPool.newElement()), s1[r1][0] = t1, s1[r1][1] = e1;
                    }, ShapePath.prototype.setTripleAt = function(t1, e1, i1, r1, a1, s1, n1, h1) {
                        this.setXYAt(t1, e1, "v", n1, h1), this.setXYAt(i1, r1, "o", n1, h1), this.setXYAt(a1, s1, "i", n1, h1);
                    }, ShapePath.prototype.reverse = function() {
                        var t1 = new ShapePath;
                        t1.setPathData(this.c, this._length);
                        var e1 = this.v, i1 = this.o, r1 = this.i, a1 = 0;
                        this.c && (t1.setTripleAt(e1[0][0], e1[0][1], r1[0][0], r1[0][1], i1[0][0], i1[0][1], 0, !1), a1 = 1);
                        var s1 = this._length - 1, n1 = this._length, h1;
                        for(h1 = a1; h1 < n1; h1 += 1)t1.setTripleAt(e1[s1][0], e1[s1][1], r1[s1][0], r1[s1][1], i1[s1][0], i1[s1][1], h1, !1), s1 -= 1;
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
                        function i1(a1) {
                            var s1 = r1.newElement(), n1, h1 = a1._length === void 0 ? a1.v.length : a1._length;
                            for(s1.setLength(h1), s1.c = a1.c, n1 = 0; n1 < h1; n1 += 1)s1.setTripleAt(a1.v[n1][0], a1.v[n1][1], a1.o[n1][0], a1.o[n1][1], a1.i[n1][0], a1.i[n1][1], n1);
                            return s1;
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
                            newShapeCollection: a1,
                            release: s1
                        }, e1 = 0, i1 = 4, r1 = createSizedArray(i1);
                        function a1() {
                            var n1;
                            return e1 ? (e1 -= 1, n1 = r1[e1]) : n1 = new ShapeCollection, n1;
                        }
                        function s1(n1) {
                            var h1, o1 = n1._length;
                            for(h1 = 0; h1 < o1; h1 += 1)shapePool.release(n1.shapes[h1]);
                            n1._length = 0, e1 === i1 && (r1 = pooling.double(r1), i1 *= 2), r1[e1] = n1, e1 += 1;
                        }
                        return t1;
                    }(), ShapePropertyFactory = function() {
                        var t1 = -999999;
                        function e1(m1, l1, p1) {
                            var u1 = p1.lastIndex, P1, S1, C1, M1, w1, F1, V1, I1, L1, B1 = this.keyframes;
                            if (m1 < B1[0].t - this.offsetTime) P1 = B1[0].s[0], C1 = !0, u1 = 0;
                            else if (m1 >= B1[B1.length - 1].t - this.offsetTime) P1 = B1[B1.length - 1].s ? B1[B1.length - 1].s[0] : B1[B1.length - 2].e[0], C1 = !0;
                            else {
                                for(var R1 = u1, E1 = B1.length - 1, T1 = !0, y1, _1, k1; T1 && (y1 = B1[R1], _1 = B1[R1 + 1], !(_1.t - this.offsetTime > m1));)R1 < E1 - 1 ? R1 += 1 : T1 = !1;
                                if (k1 = this.keyframesMetadata[R1] || {}, C1 = y1.h === 1, u1 = R1, !C1) {
                                    if (m1 >= _1.t - this.offsetTime) I1 = 1;
                                    else if (m1 < y1.t - this.offsetTime) I1 = 0;
                                    else {
                                        var D1;
                                        k1.__fnct ? D1 = k1.__fnct : (D1 = BezierFactory.getBezierEasing(y1.o.x, y1.o.y, y1.i.x, y1.i.y).get, k1.__fnct = D1), I1 = D1((m1 - (y1.t - this.offsetTime)) / (_1.t - this.offsetTime - (y1.t - this.offsetTime)));
                                    }
                                    S1 = _1.s ? _1.s[0] : y1.e[0];
                                }
                                P1 = y1.s[0];
                            }
                            for(F1 = l1._length, V1 = P1.i[0].length, p1.lastIndex = u1, M1 = 0; M1 < F1; M1 += 1)for(w1 = 0; w1 < V1; w1 += 1)L1 = C1 ? P1.i[M1][w1] : P1.i[M1][w1] + (S1.i[M1][w1] - P1.i[M1][w1]) * I1, l1.i[M1][w1] = L1, L1 = C1 ? P1.o[M1][w1] : P1.o[M1][w1] + (S1.o[M1][w1] - P1.o[M1][w1]) * I1, l1.o[M1][w1] = L1, L1 = C1 ? P1.v[M1][w1] : P1.v[M1][w1] + (S1.v[M1][w1] - P1.v[M1][w1]) * I1, l1.v[M1][w1] = L1;
                        }
                        function i1() {
                            var m1 = this.comp.renderedFrame - this.offsetTime, l1 = this.keyframes[0].t - this.offsetTime, p1 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, u1 = this._caching.lastFrame;
                            return u1 !== t1 && (u1 < l1 && m1 < l1 || u1 > p1 && m1 > p1) || (this._caching.lastIndex = u1 < m1 ? this._caching.lastIndex : 0, this.interpolateShape(m1, this.pv, this._caching)), this._caching.lastFrame = m1, this.pv;
                        }
                        function r1() {
                            this.paths = this.localShapeCollection;
                        }
                        function a1(m1, l1) {
                            if (m1._length !== l1._length || m1.c !== l1.c) return !1;
                            var p1, u1 = m1._length;
                            for(p1 = 0; p1 < u1; p1 += 1)if (m1.v[p1][0] !== l1.v[p1][0] || m1.v[p1][1] !== l1.v[p1][1] || m1.o[p1][0] !== l1.o[p1][0] || m1.o[p1][1] !== l1.o[p1][1] || m1.i[p1][0] !== l1.i[p1][0] || m1.i[p1][1] !== l1.i[p1][1]) return !1;
                            return !0;
                        }
                        function s1(m1) {
                            a1(this.v, m1) || (this.v = shapePool.clone(m1), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
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
                                var m1;
                                this.kf ? m1 = this.pv : this.data.ks ? m1 = this.data.ks.k : m1 = this.data.pt.k;
                                var l1, p1 = this.effectsSequence.length;
                                for(l1 = 0; l1 < p1; l1 += 1)m1 = this.effectsSequence[l1](m1);
                                this.setVValue(m1), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                            }
                        }
                        function h1(m1, l1, p1) {
                            this.propType = "shape", this.comp = m1.comp, this.container = m1, this.elem = m1, this.data = l1, this.k = !1, this.kf = !1, this._mdf = !1;
                            var u1 = p1 === 3 ? l1.pt.k : l1.ks.k;
                            this.v = shapePool.clone(u1), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r1, this.effectsSequence = [];
                        }
                        function o1(m1) {
                            this.effectsSequence.push(m1), this.container.addDynamicProperty(this);
                        }
                        h1.prototype.interpolateShape = e1, h1.prototype.getValue = n1, h1.prototype.setVValue = s1, h1.prototype.addEffect = o1;
                        function c1(m1, l1, p1) {
                            this.propType = "shape", this.comp = m1.comp, this.elem = m1, this.container = m1, this.offsetTime = m1.data.st, this.keyframes = p1 === 3 ? l1.pt.k : l1.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                            var u1 = this.keyframes[0].s[0].i.length;
                            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, u1), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t1, this.reset = r1, this._caching = {
                                lastFrame: t1,
                                lastIndex: 0
                            }, this.effectsSequence = [
                                i1.bind(this)
                            ];
                        }
                        c1.prototype.getValue = n1, c1.prototype.interpolateShape = e1, c1.prototype.setVValue = s1, c1.prototype.addEffect = o1;
                        var g1 = function() {
                            var m1 = roundCorner;
                            function l1(p1, u1) {
                                this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = u1.d, this.elem = p1, this.comp = p1.comp, this.frameId = -1, this.initDynamicPropertyContainer(p1), this.p = PropertyFactory.getProp(p1, u1.p, 1, 0, this), this.s = PropertyFactory.getProp(p1, u1.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
                            }
                            return l1.prototype = {
                                reset: r1,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                                },
                                convertEllToPath: function() {
                                    var p1 = this.p.v[0], u1 = this.p.v[1], P1 = this.s.v[0] / 2, S1 = this.s.v[1] / 2, C1 = this.d !== 3, M1 = this.v;
                                    M1.v[0][0] = p1, M1.v[0][1] = u1 - S1, M1.v[1][0] = C1 ? p1 + P1 : p1 - P1, M1.v[1][1] = u1, M1.v[2][0] = p1, M1.v[2][1] = u1 + S1, M1.v[3][0] = C1 ? p1 - P1 : p1 + P1, M1.v[3][1] = u1, M1.i[0][0] = C1 ? p1 - P1 * m1 : p1 + P1 * m1, M1.i[0][1] = u1 - S1, M1.i[1][0] = C1 ? p1 + P1 : p1 - P1, M1.i[1][1] = u1 - S1 * m1, M1.i[2][0] = C1 ? p1 + P1 * m1 : p1 - P1 * m1, M1.i[2][1] = u1 + S1, M1.i[3][0] = C1 ? p1 - P1 : p1 + P1, M1.i[3][1] = u1 + S1 * m1, M1.o[0][0] = C1 ? p1 + P1 * m1 : p1 - P1 * m1, M1.o[0][1] = u1 - S1, M1.o[1][0] = C1 ? p1 + P1 : p1 - P1, M1.o[1][1] = u1 + S1 * m1, M1.o[2][0] = C1 ? p1 - P1 * m1 : p1 + P1 * m1, M1.o[2][1] = u1 + S1, M1.o[3][0] = C1 ? p1 - P1 : p1 + P1, M1.o[3][1] = u1 - S1 * m1;
                                }
                            }, extendPrototype([
                                DynamicPropertyContainer
                            ], l1), l1;
                        }(), b1 = function() {
                            function m1(l1, p1) {
                                this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = l1, this.comp = l1.comp, this.data = p1, this.frameId = -1, this.d = p1.d, this.initDynamicPropertyContainer(l1), p1.sy === 1 ? (this.ir = PropertyFactory.getProp(l1, p1.ir, 0, 0, this), this.is = PropertyFactory.getProp(l1, p1.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(l1, p1.pt, 0, 0, this), this.p = PropertyFactory.getProp(l1, p1.p, 1, 0, this), this.r = PropertyFactory.getProp(l1, p1.r, 0, degToRads, this), this.or = PropertyFactory.getProp(l1, p1.or, 0, 0, this), this.os = PropertyFactory.getProp(l1, p1.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
                            }
                            return m1.prototype = {
                                reset: r1,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                                },
                                convertStarToPath: function() {
                                    var l1 = Math.floor(this.pt.v) * 2, p1 = Math.PI * 2 / l1, u1 = !0, P1 = this.or.v, S1 = this.ir.v, C1 = this.os.v, M1 = this.is.v, w1 = 2 * Math.PI * P1 / (l1 * 2), F1 = 2 * Math.PI * S1 / (l1 * 2), V1, I1, L1, B1, R1 = -Math.PI / 2;
                                    R1 += this.r.v;
                                    var E1 = this.data.d === 3 ? -1 : 1;
                                    for(this.v._length = 0, V1 = 0; V1 < l1; V1 += 1){
                                        I1 = u1 ? P1 : S1, L1 = u1 ? C1 : M1, B1 = u1 ? w1 : F1;
                                        var T1 = I1 * Math.cos(R1), y1 = I1 * Math.sin(R1), _1 = T1 === 0 && y1 === 0 ? 0 : y1 / Math.sqrt(T1 * T1 + y1 * y1), k1 = T1 === 0 && y1 === 0 ? 0 : -T1 / Math.sqrt(T1 * T1 + y1 * y1);
                                        T1 += +this.p.v[0], y1 += +this.p.v[1], this.v.setTripleAt(T1, y1, T1 - _1 * B1 * L1 * E1, y1 - k1 * B1 * L1 * E1, T1 + _1 * B1 * L1 * E1, y1 + k1 * B1 * L1 * E1, V1, !0), u1 = !u1, R1 += p1 * E1;
                                    }
                                },
                                convertPolygonToPath: function() {
                                    var l1 = Math.floor(this.pt.v), p1 = Math.PI * 2 / l1, u1 = this.or.v, P1 = this.os.v, S1 = 2 * Math.PI * u1 / (l1 * 4), C1, M1 = -Math.PI * .5, w1 = this.data.d === 3 ? -1 : 1;
                                    for(M1 += this.r.v, this.v._length = 0, C1 = 0; C1 < l1; C1 += 1){
                                        var F1 = u1 * Math.cos(M1), V1 = u1 * Math.sin(M1), I1 = F1 === 0 && V1 === 0 ? 0 : V1 / Math.sqrt(F1 * F1 + V1 * V1), L1 = F1 === 0 && V1 === 0 ? 0 : -F1 / Math.sqrt(F1 * F1 + V1 * V1);
                                        F1 += +this.p.v[0], V1 += +this.p.v[1], this.v.setTripleAt(F1, V1, F1 - I1 * S1 * P1 * w1, V1 - L1 * S1 * P1 * w1, F1 + I1 * S1 * P1 * w1, V1 + L1 * S1 * P1 * w1, C1, !0), M1 += p1 * w1;
                                    }
                                    this.paths.length = 0, this.paths[0] = this.v;
                                }
                            }, extendPrototype([
                                DynamicPropertyContainer
                            ], m1), m1;
                        }(), f1 = function() {
                            function m1(l1, p1) {
                                this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = l1, this.comp = l1.comp, this.frameId = -1, this.d = p1.d, this.initDynamicPropertyContainer(l1), this.p = PropertyFactory.getProp(l1, p1.p, 1, 0, this), this.s = PropertyFactory.getProp(l1, p1.s, 1, 0, this), this.r = PropertyFactory.getProp(l1, p1.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
                            }
                            return m1.prototype = {
                                convertRectToPath: function() {
                                    var l1 = this.p.v[0], p1 = this.p.v[1], u1 = this.s.v[0] / 2, P1 = this.s.v[1] / 2, S1 = bmMin(u1, P1, this.r.v), C1 = S1 * (1 - roundCorner);
                                    this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(l1 + u1, p1 - P1 + S1, l1 + u1, p1 - P1 + S1, l1 + u1, p1 - P1 + C1, 0, !0), this.v.setTripleAt(l1 + u1, p1 + P1 - S1, l1 + u1, p1 + P1 - C1, l1 + u1, p1 + P1 - S1, 1, !0), S1 !== 0 ? (this.v.setTripleAt(l1 + u1 - S1, p1 + P1, l1 + u1 - S1, p1 + P1, l1 + u1 - C1, p1 + P1, 2, !0), this.v.setTripleAt(l1 - u1 + S1, p1 + P1, l1 - u1 + C1, p1 + P1, l1 - u1 + S1, p1 + P1, 3, !0), this.v.setTripleAt(l1 - u1, p1 + P1 - S1, l1 - u1, p1 + P1 - S1, l1 - u1, p1 + P1 - C1, 4, !0), this.v.setTripleAt(l1 - u1, p1 - P1 + S1, l1 - u1, p1 - P1 + C1, l1 - u1, p1 - P1 + S1, 5, !0), this.v.setTripleAt(l1 - u1 + S1, p1 - P1, l1 - u1 + S1, p1 - P1, l1 - u1 + C1, p1 - P1, 6, !0), this.v.setTripleAt(l1 + u1 - S1, p1 - P1, l1 + u1 - C1, p1 - P1, l1 + u1 - S1, p1 - P1, 7, !0)) : (this.v.setTripleAt(l1 - u1, p1 + P1, l1 - u1 + C1, p1 + P1, l1 - u1, p1 + P1, 2), this.v.setTripleAt(l1 - u1, p1 - P1, l1 - u1, p1 - P1 + C1, l1 - u1, p1 - P1, 3))) : (this.v.setTripleAt(l1 + u1, p1 - P1 + S1, l1 + u1, p1 - P1 + C1, l1 + u1, p1 - P1 + S1, 0, !0), S1 !== 0 ? (this.v.setTripleAt(l1 + u1 - S1, p1 - P1, l1 + u1 - S1, p1 - P1, l1 + u1 - C1, p1 - P1, 1, !0), this.v.setTripleAt(l1 - u1 + S1, p1 - P1, l1 - u1 + C1, p1 - P1, l1 - u1 + S1, p1 - P1, 2, !0), this.v.setTripleAt(l1 - u1, p1 - P1 + S1, l1 - u1, p1 - P1 + S1, l1 - u1, p1 - P1 + C1, 3, !0), this.v.setTripleAt(l1 - u1, p1 + P1 - S1, l1 - u1, p1 + P1 - C1, l1 - u1, p1 + P1 - S1, 4, !0), this.v.setTripleAt(l1 - u1 + S1, p1 + P1, l1 - u1 + S1, p1 + P1, l1 - u1 + C1, p1 + P1, 5, !0), this.v.setTripleAt(l1 + u1 - S1, p1 + P1, l1 + u1 - C1, p1 + P1, l1 + u1 - S1, p1 + P1, 6, !0), this.v.setTripleAt(l1 + u1, p1 + P1 - S1, l1 + u1, p1 + P1 - S1, l1 + u1, p1 + P1 - C1, 7, !0)) : (this.v.setTripleAt(l1 - u1, p1 - P1, l1 - u1 + C1, p1 - P1, l1 - u1, p1 - P1, 1, !0), this.v.setTripleAt(l1 - u1, p1 + P1, l1 - u1, p1 + P1 - C1, l1 - u1, p1 + P1, 2, !0), this.v.setTripleAt(l1 + u1, p1 + P1, l1 + u1 - C1, p1 + P1, l1 + u1, p1 + P1, 3, !0)));
                                },
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                                },
                                reset: r1
                            }, extendPrototype([
                                DynamicPropertyContainer
                            ], m1), m1;
                        }();
                        function x1(m1, l1, p1) {
                            var u1;
                            if (p1 === 3 || p1 === 4) {
                                var P1 = p1 === 3 ? l1.pt : l1.ks, S1 = P1.k;
                                S1.length ? u1 = new c1(m1, l1, p1) : u1 = new h1(m1, l1, p1);
                            } else p1 === 5 ? u1 = new f1(m1, l1) : p1 === 6 ? u1 = new g1(m1, l1) : p1 === 7 && (u1 = new b1(m1, l1));
                            return u1.k && m1.addDynamicProperty(u1), u1;
                        }
                        function v1() {
                            return h1;
                        }
                        function d1() {
                            return c1;
                        }
                        var A1 = {};
                        return A1.getShapeProp = x1, A1.getConstructorFunction = v1, A1.getKeyframedConstructorFunction = d1, A1;
                    }(), Matrix = function() {
                        var t1 = Math.cos, e1 = Math.sin, i1 = Math.tan, r1 = Math.round;
                        function a1() {
                            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
                        }
                        function s1(y1) {
                            if (y1 === 0) return this;
                            var _1 = t1(y1), k1 = e1(y1);
                            return this._t(_1, -k1, 0, 0, k1, _1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                        }
                        function n1(y1) {
                            if (y1 === 0) return this;
                            var _1 = t1(y1), k1 = e1(y1);
                            return this._t(1, 0, 0, 0, 0, _1, -k1, 0, 0, k1, _1, 0, 0, 0, 0, 1);
                        }
                        function h1(y1) {
                            if (y1 === 0) return this;
                            var _1 = t1(y1), k1 = e1(y1);
                            return this._t(_1, 0, k1, 0, 0, 1, 0, 0, -k1, 0, _1, 0, 0, 0, 0, 1);
                        }
                        function o1(y1) {
                            if (y1 === 0) return this;
                            var _1 = t1(y1), k1 = e1(y1);
                            return this._t(_1, -k1, 0, 0, k1, _1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                        }
                        function c1(y1, _1) {
                            return this._t(1, _1, y1, 1, 0, 0);
                        }
                        function g1(y1, _1) {
                            return this.shear(i1(y1), i1(_1));
                        }
                        function b1(y1, _1) {
                            var k1 = t1(_1), D1 = e1(_1);
                            return this._t(k1, D1, 0, 0, -D1, k1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i1(y1), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(k1, -D1, 0, 0, D1, k1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                        }
                        function f1(y1, _1, k1) {
                            return !k1 && k1 !== 0 && (k1 = 1), y1 === 1 && _1 === 1 && k1 === 1 ? this : this._t(y1, 0, 0, 0, 0, _1, 0, 0, 0, 0, k1, 0, 0, 0, 0, 1);
                        }
                        function x1(y1, _1, k1, D1, O1, z1, H1, N1, q1, W1, Y1, Q1, J1, $1, Z1, j1) {
                            return this.props[0] = y1, this.props[1] = _1, this.props[2] = k1, this.props[3] = D1, this.props[4] = O1, this.props[5] = z1, this.props[6] = H1, this.props[7] = N1, this.props[8] = q1, this.props[9] = W1, this.props[10] = Y1, this.props[11] = Q1, this.props[12] = J1, this.props[13] = $1, this.props[14] = Z1, this.props[15] = j1, this;
                        }
                        function v1(y1, _1, k1) {
                            return k1 = k1 || 0, y1 !== 0 || _1 !== 0 || k1 !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, y1, _1, k1, 1) : this;
                        }
                        function d1(y1, _1, k1, D1, O1, z1, H1, N1, q1, W1, Y1, Q1, J1, $1, Z1, j1) {
                            var G1 = this.props;
                            if (y1 === 1 && _1 === 0 && k1 === 0 && D1 === 0 && O1 === 0 && z1 === 1 && H1 === 0 && N1 === 0 && q1 === 0 && W1 === 0 && Y1 === 1 && Q1 === 0) return G1[12] = G1[12] * y1 + G1[15] * J1, G1[13] = G1[13] * z1 + G1[15] * $1, G1[14] = G1[14] * Y1 + G1[15] * Z1, G1[15] *= j1, this._identityCalculated = !1, this;
                            var et1 = G1[0], st1 = G1[1], it1 = G1[2], tt1 = G1[3], rt1 = G1[4], at1 = G1[5], X1 = G1[6], nt1 = G1[7], ot1 = G1[8], K1 = G1[9], ht1 = G1[10], U1 = G1[11], lt1 = G1[12], pt1 = G1[13], ft1 = G1[14], mt1 = G1[15];
                            return G1[0] = et1 * y1 + st1 * O1 + it1 * q1 + tt1 * J1, G1[1] = et1 * _1 + st1 * z1 + it1 * W1 + tt1 * $1, G1[2] = et1 * k1 + st1 * H1 + it1 * Y1 + tt1 * Z1, G1[3] = et1 * D1 + st1 * N1 + it1 * Q1 + tt1 * j1, G1[4] = rt1 * y1 + at1 * O1 + X1 * q1 + nt1 * J1, G1[5] = rt1 * _1 + at1 * z1 + X1 * W1 + nt1 * $1, G1[6] = rt1 * k1 + at1 * H1 + X1 * Y1 + nt1 * Z1, G1[7] = rt1 * D1 + at1 * N1 + X1 * Q1 + nt1 * j1, G1[8] = ot1 * y1 + K1 * O1 + ht1 * q1 + U1 * J1, G1[9] = ot1 * _1 + K1 * z1 + ht1 * W1 + U1 * $1, G1[10] = ot1 * k1 + K1 * H1 + ht1 * Y1 + U1 * Z1, G1[11] = ot1 * D1 + K1 * N1 + ht1 * Q1 + U1 * j1, G1[12] = lt1 * y1 + pt1 * O1 + ft1 * q1 + mt1 * J1, G1[13] = lt1 * _1 + pt1 * z1 + ft1 * W1 + mt1 * $1, G1[14] = lt1 * k1 + pt1 * H1 + ft1 * Y1 + mt1 * Z1, G1[15] = lt1 * D1 + pt1 * N1 + ft1 * Q1 + mt1 * j1, this._identityCalculated = !1, this;
                        }
                        function A1(y1) {
                            var _1 = y1.props;
                            return this.transform(_1[0], _1[1], _1[2], _1[3], _1[4], _1[5], _1[6], _1[7], _1[8], _1[9], _1[10], _1[11], _1[12], _1[13], _1[14], _1[15]);
                        }
                        function m1() {
                            return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
                        }
                        function l1(y1) {
                            for(var _1 = 0; _1 < 16;){
                                if (y1.props[_1] !== this.props[_1]) return !1;
                                _1 += 1;
                            }
                            return !0;
                        }
                        function p1(y1) {
                            var _1;
                            for(_1 = 0; _1 < 16; _1 += 1)y1.props[_1] = this.props[_1];
                            return y1;
                        }
                        function u1(y1) {
                            var _1;
                            for(_1 = 0; _1 < 16; _1 += 1)this.props[_1] = y1[_1];
                        }
                        function P1(y1, _1, k1) {
                            return {
                                x: y1 * this.props[0] + _1 * this.props[4] + k1 * this.props[8] + this.props[12],
                                y: y1 * this.props[1] + _1 * this.props[5] + k1 * this.props[9] + this.props[13],
                                z: y1 * this.props[2] + _1 * this.props[6] + k1 * this.props[10] + this.props[14]
                            };
                        }
                        function S1(y1, _1, k1) {
                            return y1 * this.props[0] + _1 * this.props[4] + k1 * this.props[8] + this.props[12];
                        }
                        function C1(y1, _1, k1) {
                            return y1 * this.props[1] + _1 * this.props[5] + k1 * this.props[9] + this.props[13];
                        }
                        function M1(y1, _1, k1) {
                            return y1 * this.props[2] + _1 * this.props[6] + k1 * this.props[10] + this.props[14];
                        }
                        function w1() {
                            var y1 = this.props[0] * this.props[5] - this.props[1] * this.props[4], _1 = this.props[5] / y1, k1 = -this.props[1] / y1, D1 = -this.props[4] / y1, O1 = this.props[0] / y1, z1 = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / y1, H1 = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / y1, N1 = new Matrix;
                            return N1.props[0] = _1, N1.props[1] = k1, N1.props[4] = D1, N1.props[5] = O1, N1.props[12] = z1, N1.props[13] = H1, N1;
                        }
                        function F1(y1) {
                            var _1 = this.getInverseMatrix();
                            return _1.applyToPointArray(y1[0], y1[1], y1[2] || 0);
                        }
                        function V1(y1) {
                            var _1, k1 = y1.length, D1 = [];
                            for(_1 = 0; _1 < k1; _1 += 1)D1[_1] = F1(y1[_1]);
                            return D1;
                        }
                        function I1(y1, _1, k1) {
                            var D1 = createTypedArray("float32", 6);
                            if (this.isIdentity()) D1[0] = y1[0], D1[1] = y1[1], D1[2] = _1[0], D1[3] = _1[1], D1[4] = k1[0], D1[5] = k1[1];
                            else {
                                var O1 = this.props[0], z1 = this.props[1], H1 = this.props[4], N1 = this.props[5], q1 = this.props[12], W1 = this.props[13];
                                D1[0] = y1[0] * O1 + y1[1] * H1 + q1, D1[1] = y1[0] * z1 + y1[1] * N1 + W1, D1[2] = _1[0] * O1 + _1[1] * H1 + q1, D1[3] = _1[0] * z1 + _1[1] * N1 + W1, D1[4] = k1[0] * O1 + k1[1] * H1 + q1, D1[5] = k1[0] * z1 + k1[1] * N1 + W1;
                            }
                            return D1;
                        }
                        function L1(y1, _1, k1) {
                            var D1;
                            return this.isIdentity() ? D1 = [
                                y1,
                                _1,
                                k1
                            ] : D1 = [
                                y1 * this.props[0] + _1 * this.props[4] + k1 * this.props[8] + this.props[12],
                                y1 * this.props[1] + _1 * this.props[5] + k1 * this.props[9] + this.props[13],
                                y1 * this.props[2] + _1 * this.props[6] + k1 * this.props[10] + this.props[14]
                            ], D1;
                        }
                        function B1(y1, _1) {
                            if (this.isIdentity()) return y1 + "," + _1;
                            var k1 = this.props;
                            return Math.round((y1 * k1[0] + _1 * k1[4] + k1[12]) * 100) / 100 + "," + Math.round((y1 * k1[1] + _1 * k1[5] + k1[13]) * 100) / 100;
                        }
                        function R1() {
                            for(var y1 = 0, _1 = this.props, k1 = "matrix3d(", D1 = 1e4; y1 < 16;)k1 += r1(_1[y1] * D1) / D1, k1 += y1 === 15 ? ")" : ",", y1 += 1;
                            return k1;
                        }
                        function E1(y1) {
                            var _1 = 1e4;
                            return y1 < 1e-6 && y1 > 0 || y1 > -0.000001 && y1 < 0 ? r1(y1 * _1) / _1 : y1;
                        }
                        function T1() {
                            var y1 = this.props, _1 = E1(y1[0]), k1 = E1(y1[1]), D1 = E1(y1[4]), O1 = E1(y1[5]), z1 = E1(y1[12]), H1 = E1(y1[13]);
                            return "matrix(" + _1 + "," + k1 + "," + D1 + "," + O1 + "," + z1 + "," + H1 + ")";
                        }
                        return function() {
                            this.reset = a1, this.rotate = s1, this.rotateX = n1, this.rotateY = h1, this.rotateZ = o1, this.skew = g1, this.skewFromAxis = b1, this.shear = c1, this.scale = f1, this.setTransform = x1, this.translate = v1, this.transform = d1, this.multiply = A1, this.applyToPoint = P1, this.applyToX = S1, this.applyToY = C1, this.applyToZ = M1, this.applyToPointArray = L1, this.applyToTriplePoints = I1, this.applyToPointStringified = B1, this.toCSS = R1, this.to2dCSS = T1, this.clone = p1, this.cloneFromProps = u1, this.equals = l1, this.inversePoints = V1, this.inversePoint = F1, this.getInverseMatrix = w1, this._t = this.transform, this.isIdentity = m1, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
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
                        function i1(a1, s1) {
                            e1[a1] || (e1[a1] = s1);
                        }
                        function r1(a1, s1, n1) {
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
                    }, TrimModifier.prototype.calculateShapeEdges = function(t1, e1, i1, r1, a1) {
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
                        var n1 = [], h1, o1 = s1.length, c1;
                        for(h1 = 0; h1 < o1; h1 += 1)if (c1 = s1[h1], !(c1.e * a1 < r1 || c1.s * a1 > r1 + i1)) {
                            var g1, b1;
                            c1.s * a1 <= r1 ? g1 = 0 : g1 = (c1.s * a1 - r1) / i1, c1.e * a1 >= r1 + i1 ? b1 = 1 : b1 = (c1.e * a1 - r1) / i1, n1.push([
                                g1,
                                b1
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
                                var a1 = e1;
                                e1 = i1, i1 = a1;
                            }
                            e1 = Math.round(e1 * 1e4) * 1e-4, i1 = Math.round(i1 * 1e4) * 1e-4, this.sValue = e1, this.eValue = i1;
                        } else e1 = this.sValue, i1 = this.eValue;
                        var s1, n1, h1 = this.shapes.length, o1, c1, g1, b1, f1, x1 = 0;
                        if (i1 === e1) for(n1 = 0; n1 < h1; n1 += 1)this.shapes[n1].localShapeCollection.releaseShapes(), this.shapes[n1].shape._mdf = !0, this.shapes[n1].shape.paths = this.shapes[n1].localShapeCollection, this._mdf && (this.shapes[n1].pathsData.length = 0);
                        else if (i1 === 1 && e1 === 0 || i1 === 0 && e1 === 1) {
                            if (this._mdf) for(n1 = 0; n1 < h1; n1 += 1)this.shapes[n1].pathsData.length = 0, this.shapes[n1].shape._mdf = !0;
                        } else {
                            var v1 = [], d1, A1;
                            for(n1 = 0; n1 < h1; n1 += 1)if (d1 = this.shapes[n1], !d1.shape._mdf && !this._mdf && !t1 && this.m !== 2) d1.shape.paths = d1.localShapeCollection;
                            else {
                                if (s1 = d1.shape.paths, c1 = s1._length, f1 = 0, !d1.shape._mdf && d1.pathsData.length) f1 = d1.totalShapeLength;
                                else {
                                    for(g1 = this.releasePathsData(d1.pathsData), o1 = 0; o1 < c1; o1 += 1)b1 = bez.getSegmentsLength(s1.shapes[o1]), g1.push(b1), f1 += b1.totalLength;
                                    d1.totalShapeLength = f1, d1.pathsData = g1;
                                }
                                x1 += f1, d1.shape._mdf = !0;
                            }
                            var m1 = e1, l1 = i1, p1 = 0, u1;
                            for(n1 = h1 - 1; n1 >= 0; n1 -= 1)if (d1 = this.shapes[n1], d1.shape._mdf) {
                                for(A1 = d1.localShapeCollection, A1.releaseShapes(), this.m === 2 && h1 > 1 ? (u1 = this.calculateShapeEdges(e1, i1, d1.totalShapeLength, p1, x1), p1 += d1.totalShapeLength) : u1 = [
                                    [
                                        m1,
                                        l1
                                    ]
                                ], c1 = u1.length, o1 = 0; o1 < c1; o1 += 1){
                                    m1 = u1[o1][0], l1 = u1[o1][1], v1.length = 0, l1 <= 1 ? v1.push({
                                        s: d1.totalShapeLength * m1,
                                        e: d1.totalShapeLength * l1
                                    }) : m1 >= 1 ? v1.push({
                                        s: d1.totalShapeLength * (m1 - 1),
                                        e: d1.totalShapeLength * (l1 - 1)
                                    }) : (v1.push({
                                        s: d1.totalShapeLength * m1,
                                        e: d1.totalShapeLength
                                    }), v1.push({
                                        s: 0,
                                        e: d1.totalShapeLength * (l1 - 1)
                                    }));
                                    var P1 = this.addShapes(d1, v1[0]);
                                    if (v1[0].s !== v1[0].e) {
                                        if (v1.length > 1) {
                                            var S1 = d1.shape.paths.shapes[d1.shape.paths._length - 1];
                                            if (S1.c) {
                                                var C1 = P1.pop();
                                                this.addPaths(P1, A1), P1 = this.addShapes(d1, v1[1], C1);
                                            } else this.addPaths(P1, A1), P1 = this.addShapes(d1, v1[1]);
                                        }
                                        this.addPaths(P1, A1);
                                    }
                                }
                                d1.shape.paths = A1;
                            }
                        }
                    }, TrimModifier.prototype.addPaths = function(t1, e1) {
                        var i1, r1 = t1.length;
                        for(i1 = 0; i1 < r1; i1 += 1)e1.addShape(t1[i1]);
                    }, TrimModifier.prototype.addSegment = function(t1, e1, i1, r1, a1, s1, n1) {
                        a1.setXYAt(e1[0], e1[1], "o", s1), a1.setXYAt(i1[0], i1[1], "i", s1 + 1), n1 && a1.setXYAt(t1[0], t1[1], "v", s1), a1.setXYAt(r1[0], r1[1], "v", s1 + 1);
                    }, TrimModifier.prototype.addSegmentFromArray = function(t1, e1, i1, r1) {
                        e1.setXYAt(t1[1], t1[5], "o", i1), e1.setXYAt(t1[2], t1[6], "i", i1 + 1), r1 && e1.setXYAt(t1[0], t1[4], "v", i1), e1.setXYAt(t1[3], t1[7], "v", i1 + 1);
                    }, TrimModifier.prototype.addShapes = function(t1, e1, i1) {
                        var r1 = t1.pathsData, a1 = t1.shape.paths.shapes, s1, n1 = t1.shape.paths._length, h1, o1, c1 = 0, g1, b1, f1, x1, v1 = [], d1, A1 = !0;
                        for(i1 ? (b1 = i1._length, d1 = i1._length) : (i1 = shapePool.newElement(), b1 = 0, d1 = 0), v1.push(i1), s1 = 0; s1 < n1; s1 += 1){
                            for(f1 = r1[s1].lengths, i1.c = a1[s1].c, o1 = a1[s1].c ? f1.length : f1.length + 1, h1 = 1; h1 < o1; h1 += 1)if (g1 = f1[h1 - 1], c1 + g1.addedLength < e1.s) c1 += g1.addedLength, i1.c = !1;
                            else if (c1 > e1.e) {
                                i1.c = !1;
                                break;
                            } else e1.s <= c1 && e1.e >= c1 + g1.addedLength ? (this.addSegment(a1[s1].v[h1 - 1], a1[s1].o[h1 - 1], a1[s1].i[h1], a1[s1].v[h1], i1, b1, A1), A1 = !1) : (x1 = bez.getNewSegment(a1[s1].v[h1 - 1], a1[s1].v[h1], a1[s1].o[h1 - 1], a1[s1].i[h1], (e1.s - c1) / g1.addedLength, (e1.e - c1) / g1.addedLength, f1[h1 - 1]), this.addSegmentFromArray(x1, i1, b1, A1), A1 = !1, i1.c = !1), c1 += g1.addedLength, b1 += 1;
                            if (a1[s1].c && f1.length) {
                                if (g1 = f1[h1 - 1], c1 <= e1.e) {
                                    var m1 = f1[h1 - 1].addedLength;
                                    e1.s <= c1 && e1.e >= c1 + m1 ? (this.addSegment(a1[s1].v[h1 - 1], a1[s1].o[h1 - 1], a1[s1].i[0], a1[s1].v[0], i1, b1, A1), A1 = !1) : (x1 = bez.getNewSegment(a1[s1].v[h1 - 1], a1[s1].v[0], a1[s1].o[h1 - 1], a1[s1].i[0], (e1.s - c1) / m1, (e1.e - c1) / m1, f1[h1 - 1]), this.addSegmentFromArray(x1, i1, b1, A1), A1 = !1, i1.c = !1);
                                } else i1.c = !1;
                                c1 += g1.addedLength, b1 += 1;
                            }
                            if (i1._length && (i1.setXYAt(i1.v[d1][0], i1.v[d1][1], "i", d1), i1.setXYAt(i1.v[i1._length - 1][0], i1.v[i1._length - 1][1], "o", i1._length - 1)), c1 > e1.e) break;
                            s1 < n1 - 1 && (i1 = shapePool.newElement(), A1 = !0, v1.push(i1), b1 = 0);
                        }
                        return v1;
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
                        ], a1 = t1._length, s1 = 0;
                        for(s1 = 0; s1 < a1; s1 += 1)r1[0] += t1.v[s1][0], r1[1] += t1.v[s1][1];
                        r1[0] /= a1, r1[1] /= a1;
                        var n1 = shapePool.newElement();
                        n1.c = t1.c;
                        var h1, o1, c1, g1, b1, f1;
                        for(s1 = 0; s1 < a1; s1 += 1)h1 = t1.v[s1][0] + (r1[0] - t1.v[s1][0]) * i1, o1 = t1.v[s1][1] + (r1[1] - t1.v[s1][1]) * i1, c1 = t1.o[s1][0] + (r1[0] - t1.o[s1][0]) * -i1, g1 = t1.o[s1][1] + (r1[1] - t1.o[s1][1]) * -i1, b1 = t1.i[s1][0] + (r1[0] - t1.i[s1][0]) * -i1, f1 = t1.i[s1][1] + (r1[1] - t1.i[s1][1]) * -i1, n1.setTripleAt(h1, o1, c1, g1, b1, f1, s1);
                        return n1;
                    }, PuckerAndBloatModifier.prototype.processShapes = function(t1) {
                        var e1, i1, r1 = this.shapes.length, a1, s1, n1 = this.amount.v;
                        if (n1 !== 0) {
                            var h1, o1;
                            for(i1 = 0; i1 < r1; i1 += 1){
                                if (h1 = this.shapes[i1], o1 = h1.localShapeCollection, !(!h1.shape._mdf && !this._mdf && !t1)) for(o1.releaseShapes(), h1.shape._mdf = !0, e1 = h1.shape.paths.shapes, s1 = h1.shape.paths._length, a1 = 0; a1 < s1; a1 += 1)o1.addShape(this.processPath(e1[a1], n1));
                                h1.shape.paths = h1.localShapeCollection;
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
                            var c1 = this._mdf;
                            this.iterateDynamicProperties(), this._mdf = this._mdf || c1, this.a && o1.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o1.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o1.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o1.rotate(-this.r.v) : o1.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o1.translate(this.px.v, this.py.v, -this.pz.v) : o1.translate(this.px.v, this.py.v, 0) : o1.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                        }
                        function i1(o1) {
                            if (this.elem.globalData.frameId !== this.frameId) {
                                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o1) {
                                    var c1;
                                    if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                        var g1, b1;
                                        if (c1 = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (g1 = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / c1, 0), b1 = this.p.getValueAtTime(this.p.keyframes[0].t / c1, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (g1 = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / c1, 0), b1 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / c1, 0)) : (g1 = this.p.pv, b1 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / c1, this.p.offsetTime));
                                        else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                            g1 = [], b1 = [];
                                            var f1 = this.px, x1 = this.py;
                                            f1._caching.lastFrame + f1.offsetTime <= f1.keyframes[0].t ? (g1[0] = f1.getValueAtTime((f1.keyframes[0].t + .01) / c1, 0), g1[1] = x1.getValueAtTime((x1.keyframes[0].t + .01) / c1, 0), b1[0] = f1.getValueAtTime(f1.keyframes[0].t / c1, 0), b1[1] = x1.getValueAtTime(x1.keyframes[0].t / c1, 0)) : f1._caching.lastFrame + f1.offsetTime >= f1.keyframes[f1.keyframes.length - 1].t ? (g1[0] = f1.getValueAtTime(f1.keyframes[f1.keyframes.length - 1].t / c1, 0), g1[1] = x1.getValueAtTime(x1.keyframes[x1.keyframes.length - 1].t / c1, 0), b1[0] = f1.getValueAtTime((f1.keyframes[f1.keyframes.length - 1].t - .01) / c1, 0), b1[1] = x1.getValueAtTime((x1.keyframes[x1.keyframes.length - 1].t - .01) / c1, 0)) : (g1 = [
                                                f1.pv,
                                                x1.pv
                                            ], b1[0] = f1.getValueAtTime((f1._caching.lastFrame + f1.offsetTime - .01) / c1, f1.offsetTime), b1[1] = x1.getValueAtTime((x1._caching.lastFrame + x1.offsetTime - .01) / c1, x1.offsetTime));
                                        } else b1 = t1, g1 = b1;
                                        this.v.rotate(-Math.atan2(g1[1] - b1[1], g1[0] - b1[0]));
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
                        function a1() {}
                        function s1(o1) {
                            this._addDynamicProperty(o1), this.elem.addDynamicProperty(o1), this._isDirty = !0;
                        }
                        function n1(o1, c1, g1) {
                            if (this.elem = o1, this.frameId = -1, this.propType = "transform", this.data = c1, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(g1 || o1), c1.p && c1.p.s ? (this.px = PropertyFactory.getProp(o1, c1.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o1, c1.p.y, 0, 0, this), c1.p.z && (this.pz = PropertyFactory.getProp(o1, c1.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o1, c1.p || {
                                k: [
                                    0,
                                    0,
                                    0
                                ]
                            }, 1, 0, this), c1.rx) {
                                if (this.rx = PropertyFactory.getProp(o1, c1.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o1, c1.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o1, c1.rz, 0, degToRads, this), c1.or.k[0].ti) {
                                    var b1, f1 = c1.or.k.length;
                                    for(b1 = 0; b1 < f1; b1 += 1)c1.or.k[b1].to = null, c1.or.k[b1].ti = null;
                                }
                                this.or = PropertyFactory.getProp(o1, c1.or, 1, degToRads, this), this.or.sh = !0;
                            } else this.r = PropertyFactory.getProp(o1, c1.r || {
                                k: 0
                            }, 0, degToRads, this);
                            c1.sk && (this.sk = PropertyFactory.getProp(o1, c1.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o1, c1.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o1, c1.a || {
                                k: [
                                    0,
                                    0,
                                    0
                                ]
                            }, 1, 0, this), this.s = PropertyFactory.getProp(o1, c1.s || {
                                k: [
                                    100,
                                    100,
                                    100
                                ]
                            }, 1, .01, this), c1.o ? this.o = PropertyFactory.getProp(o1, c1.o, 0, .01, o1) : this.o = {
                                _mdf: !1,
                                v: 1
                            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
                        }
                        n1.prototype = {
                            applyToMatrix: e1,
                            getValue: i1,
                            precalculateMatrix: r1,
                            autoOrient: a1
                        }, extendPrototype([
                            DynamicPropertyContainer
                        ], n1), n1.prototype.addDynamicProperty = s1, n1.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
                        function h1(o1, c1, g1) {
                            return new n1(o1, c1, g1);
                        }
                        return {
                            getTransformProperty: h1
                        };
                    }();
                    function RepeaterModifier() {}
                    extendPrototype([
                        ShapeModifier
                    ], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t1, e1) {
                        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t1, e1.c, 0, null, this), this.o = PropertyFactory.getProp(t1, e1.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t1, e1.tr, this), this.so = PropertyFactory.getProp(t1, e1.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t1, e1.tr.eo, 0, .01, this), this.data = e1, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix;
                    }, RepeaterModifier.prototype.applyTransforms = function(t1, e1, i1, r1, a1, s1) {
                        var n1 = s1 ? -1 : 1, h1 = r1.s.v[0] + (1 - r1.s.v[0]) * (1 - a1), o1 = r1.s.v[1] + (1 - r1.s.v[1]) * (1 - a1);
                        t1.translate(r1.p.v[0] * n1 * a1, r1.p.v[1] * n1 * a1, r1.p.v[2]), e1.translate(-r1.a.v[0], -r1.a.v[1], r1.a.v[2]), e1.rotate(-r1.r.v * n1 * a1), e1.translate(r1.a.v[0], r1.a.v[1], r1.a.v[2]), i1.translate(-r1.a.v[0], -r1.a.v[1], r1.a.v[2]), i1.scale(s1 ? 1 / h1 : h1, s1 ? 1 / o1 : o1), i1.translate(r1.a.v[0], r1.a.v[1], r1.a.v[2]);
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
                        var e1, i1, r1, a1, s1, n1 = !1;
                        if (this._mdf || t1) {
                            var h1 = Math.ceil(this.c.v);
                            if (this._groups.length < h1) {
                                for(; this._groups.length < h1;){
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
                            s1 = 0;
                            var c1;
                            for(r1 = 0; r1 <= this._groups.length - 1; r1 += 1){
                                if (c1 = s1 < h1, this._groups[r1]._render = c1, this.changeGroupRender(this._groups[r1].it, c1), !c1) {
                                    var g1 = this.elemsData[r1].it, b1 = g1[g1.length - 1];
                                    b1.transform.op.v !== 0 ? (b1.transform.op._mdf = !0, b1.transform.op.v = 0) : b1.transform.op._mdf = !1;
                                }
                                s1 += 1;
                            }
                            this._currentCopies = h1;
                            var f1 = this.o.v, x1 = f1 % 1, v1 = f1 > 0 ? Math.floor(f1) : Math.ceil(f1), d1 = this.pMatrix.props, A1 = this.rMatrix.props, m1 = this.sMatrix.props;
                            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                            var l1 = 0;
                            if (f1 > 0) {
                                for(; l1 < v1;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), l1 += 1;
                                x1 && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, x1, !1), l1 += x1);
                            } else if (f1 < 0) {
                                for(; l1 > v1;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), l1 -= 1;
                                x1 && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -x1, !0), l1 -= x1);
                            }
                            r1 = this.data.m === 1 ? 0 : this._currentCopies - 1, a1 = this.data.m === 1 ? 1 : -1, s1 = this._currentCopies;
                            for(var p1, u1; s1;){
                                if (e1 = this.elemsData[r1].it, i1 = e1[e1.length - 1].transform.mProps.v.props, u1 = i1.length, e1[e1.length - 1].transform.mProps._mdf = !0, e1[e1.length - 1].transform.op._mdf = !0, e1[e1.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r1 / (this._currentCopies - 1)), l1 !== 0) {
                                    for((r1 !== 0 && a1 === 1 || r1 !== this._currentCopies - 1 && a1 === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(A1[0], A1[1], A1[2], A1[3], A1[4], A1[5], A1[6], A1[7], A1[8], A1[9], A1[10], A1[11], A1[12], A1[13], A1[14], A1[15]), this.matrix.transform(m1[0], m1[1], m1[2], m1[3], m1[4], m1[5], m1[6], m1[7], m1[8], m1[9], m1[10], m1[11], m1[12], m1[13], m1[14], m1[15]), this.matrix.transform(d1[0], d1[1], d1[2], d1[3], d1[4], d1[5], d1[6], d1[7], d1[8], d1[9], d1[10], d1[11], d1[12], d1[13], d1[14], d1[15]), p1 = 0; p1 < u1; p1 += 1)i1[p1] = this.matrix.props[p1];
                                    this.matrix.reset();
                                } else for(this.matrix.reset(), p1 = 0; p1 < u1; p1 += 1)i1[p1] = this.matrix.props[p1];
                                l1 += 1, s1 -= 1, r1 += a1;
                            }
                        } else for(s1 = this._currentCopies, r1 = 0, a1 = 1; s1;)e1 = this.elemsData[r1].it, i1 = e1[e1.length - 1].transform.mProps.v.props, e1[e1.length - 1].transform.mProps._mdf = !1, e1[e1.length - 1].transform.op._mdf = !1, s1 -= 1, r1 += a1;
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
                        var r1, a1 = t1._length, s1, n1, h1, o1, c1, g1, b1 = 0, f1, x1, v1, d1, A1, m1;
                        for(r1 = 0; r1 < a1; r1 += 1)s1 = t1.v[r1], h1 = t1.o[r1], n1 = t1.i[r1], s1[0] === h1[0] && s1[1] === h1[1] && s1[0] === n1[0] && s1[1] === n1[1] ? (r1 === 0 || r1 === a1 - 1) && !t1.c ? (i1.setTripleAt(s1[0], s1[1], h1[0], h1[1], n1[0], n1[1], b1), b1 += 1) : (r1 === 0 ? o1 = t1.v[a1 - 1] : o1 = t1.v[r1 - 1], c1 = Math.sqrt(Math.pow(s1[0] - o1[0], 2) + Math.pow(s1[1] - o1[1], 2)), g1 = c1 ? Math.min(c1 / 2, e1) / c1 : 0, A1 = s1[0] + (o1[0] - s1[0]) * g1, f1 = A1, m1 = s1[1] - (s1[1] - o1[1]) * g1, x1 = m1, v1 = f1 - (f1 - s1[0]) * roundCorner, d1 = x1 - (x1 - s1[1]) * roundCorner, i1.setTripleAt(f1, x1, v1, d1, A1, m1, b1), b1 += 1, r1 === a1 - 1 ? o1 = t1.v[0] : o1 = t1.v[r1 + 1], c1 = Math.sqrt(Math.pow(s1[0] - o1[0], 2) + Math.pow(s1[1] - o1[1], 2)), g1 = c1 ? Math.min(c1 / 2, e1) / c1 : 0, v1 = s1[0] + (o1[0] - s1[0]) * g1, f1 = v1, d1 = s1[1] + (o1[1] - s1[1]) * g1, x1 = d1, A1 = f1 - (f1 - s1[0]) * roundCorner, m1 = x1 - (x1 - s1[1]) * roundCorner, i1.setTripleAt(f1, x1, v1, d1, A1, m1, b1), b1 += 1) : (i1.setTripleAt(t1.v[r1][0], t1.v[r1][1], t1.o[r1][0], t1.o[r1][1], t1.i[r1][0], t1.i[r1][1], b1), b1 += 1);
                        return i1;
                    }, RoundCornersModifier.prototype.processShapes = function(t1) {
                        var e1, i1, r1 = this.shapes.length, a1, s1, n1 = this.rd.v;
                        if (n1 !== 0) {
                            var h1, o1;
                            for(i1 = 0; i1 < r1; i1 += 1){
                                if (h1 = this.shapes[i1], o1 = h1.localShapeCollection, !(!h1.shape._mdf && !this._mdf && !t1)) for(o1.releaseShapes(), h1.shape._mdf = !0, e1 = h1.shape.paths.shapes, s1 = h1.shape.paths._length, a1 = 0; a1 < s1; a1 += 1)o1.addShape(this.processPath(e1[a1], n1));
                                h1.shape.paths = h1.localShapeCollection;
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
                        var a1 = -e1 / (2 * t1);
                        if (r1 === 0) return [
                            a1
                        ];
                        var s1 = Math.sqrt(r1) / (2 * t1);
                        return [
                            a1 - s1,
                            a1 + s1
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
                    function PolynomialBezier(t1, e1, i1, r1, a1) {
                        a1 && pointEqual(t1, e1) && (e1 = lerpPoint(t1, r1, 1 / 3)), a1 && pointEqual(i1, r1) && (i1 = lerpPoint(t1, r1, 2 / 3));
                        var s1 = polynomialCoefficients(t1[0], e1[0], i1[0], r1[0]), n1 = polynomialCoefficients(t1[1], e1[1], i1[1], r1[1]);
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
                        var e1 = lerpPoint(this.points[0], this.points[1], t1), i1 = lerpPoint(this.points[1], this.points[2], t1), r1 = lerpPoint(this.points[2], this.points[3], t1), a1 = lerpPoint(e1, i1, t1), s1 = lerpPoint(i1, r1, t1), n1 = lerpPoint(a1, s1, t1);
                        return [
                            new PolynomialBezier(this.points[0], e1, a1, n1, !0),
                            new PolynomialBezier(n1, s1, r1, this.points[3], !0)
                        ];
                    };
                    function extrema(t1, e1) {
                        var i1 = t1.points[0][e1], r1 = t1.points[t1.points.length - 1][e1];
                        if (i1 > r1) {
                            var a1 = r1;
                            r1 = i1, i1 = a1;
                        }
                        for(var s1 = quadRoots(3 * t1.a[e1], 2 * t1.b[e1], t1.c[e1]), n1 = 0; n1 < s1.length; n1 += 1)if (s1[n1] > 0 && s1[n1] < 1) {
                            var h1 = t1.point(s1[n1])[e1];
                            h1 < i1 ? i1 = h1 : h1 > r1 && (r1 = h1);
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
                    function intersectsImpl(t1, e1, i1, r1, a1, s1) {
                        if (boxIntersect(t1, e1)) {
                            if (i1 >= s1 || t1.width <= r1 && t1.height <= r1 && e1.width <= r1 && e1.height <= r1) {
                                a1.push([
                                    t1.t,
                                    e1.t
                                ]);
                                return;
                            }
                            var n1 = splitData(t1), h1 = splitData(e1);
                            intersectsImpl(n1[0], h1[0], i1 + 1, r1, a1, s1), intersectsImpl(n1[0], h1[1], i1 + 1, r1, a1, s1), intersectsImpl(n1[1], h1[0], i1 + 1, r1, a1, s1), intersectsImpl(n1[1], h1[1], i1 + 1, r1, a1, s1);
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
                        var a1 = [
                            t1[0],
                            t1[1],
                            1
                        ], s1 = [
                            e1[0],
                            e1[1],
                            1
                        ], n1 = [
                            i1[0],
                            i1[1],
                            1
                        ], h1 = [
                            r1[0],
                            r1[1],
                            1
                        ], o1 = crossProduct(crossProduct(a1, s1), crossProduct(n1, h1));
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
                    function setPoint(t1, e1, i1, r1, a1, s1, n1) {
                        var h1 = i1 - Math.PI / 2, o1 = i1 + Math.PI / 2, c1 = e1[0] + Math.cos(i1) * r1 * a1, g1 = e1[1] - Math.sin(i1) * r1 * a1;
                        t1.setTripleAt(c1, g1, c1 + Math.cos(h1) * s1, g1 - Math.sin(h1) * s1, c1 + Math.cos(o1) * n1, g1 - Math.sin(o1) * n1, t1.length());
                    }
                    function getPerpendicularVector(t1, e1) {
                        var i1 = [
                            e1[0] - t1[0],
                            e1[1] - t1[1]
                        ], r1 = -Math.PI * .5, a1 = [
                            Math.cos(r1) * i1[0] - Math.sin(r1) * i1[1],
                            Math.sin(r1) * i1[0] + Math.cos(r1) * i1[1]
                        ];
                        return a1;
                    }
                    function getProjectingAngle(t1, e1) {
                        var i1 = e1 === 0 ? t1.length() - 1 : e1 - 1, r1 = (e1 + 1) % t1.length(), a1 = t1.v[i1], s1 = t1.v[r1], n1 = getPerpendicularVector(a1, s1);
                        return Math.atan2(0, 1) - Math.atan2(n1[1], n1[0]);
                    }
                    function zigZagCorner(t1, e1, i1, r1, a1, s1, n1) {
                        var h1 = getProjectingAngle(e1, i1), o1 = e1.v[i1 % e1._length], c1 = e1.v[i1 === 0 ? e1._length - 1 : i1 - 1], g1 = e1.v[(i1 + 1) % e1._length], b1 = s1 === 2 ? Math.sqrt(Math.pow(o1[0] - c1[0], 2) + Math.pow(o1[1] - c1[1], 2)) : 0, f1 = s1 === 2 ? Math.sqrt(Math.pow(o1[0] - g1[0], 2) + Math.pow(o1[1] - g1[1], 2)) : 0;
                        setPoint(t1, e1.v[i1 % e1._length], h1, n1, r1, f1 / ((a1 + 1) * 2), b1 / ((a1 + 1) * 2));
                    }
                    function zigZagSegment(t1, e1, i1, r1, a1, s1) {
                        for(var n1 = 0; n1 < r1; n1 += 1){
                            var h1 = (n1 + 1) / (r1 + 1), o1 = a1 === 2 ? Math.sqrt(Math.pow(e1.points[3][0] - e1.points[0][0], 2) + Math.pow(e1.points[3][1] - e1.points[0][1], 2)) : 0, c1 = e1.normalAngle(h1), g1 = e1.point(h1);
                            setPoint(t1, g1, c1, s1, i1, o1 / ((r1 + 1) * 2), o1 / ((r1 + 1) * 2)), s1 = -s1;
                        }
                        return s1;
                    }
                    ZigZagModifier.prototype.processPath = function(t1, e1, i1, r1) {
                        var a1 = t1._length, s1 = shapePool.newElement();
                        if (s1.c = t1.c, t1.c || (a1 -= 1), a1 === 0) return s1;
                        var n1 = -1, h1 = PolynomialBezier.shapeSegment(t1, 0);
                        zigZagCorner(s1, t1, 0, e1, i1, r1, n1);
                        for(var o1 = 0; o1 < a1; o1 += 1)n1 = zigZagSegment(s1, h1, e1, i1, r1, -n1), o1 === a1 - 1 && !t1.c ? h1 = null : h1 = PolynomialBezier.shapeSegment(t1, (o1 + 1) % a1), zigZagCorner(s1, t1, o1 + 1, e1, i1, r1, n1);
                        return s1;
                    }, ZigZagModifier.prototype.processShapes = function(t1) {
                        var e1, i1, r1 = this.shapes.length, a1, s1, n1 = this.amplitude.v, h1 = Math.max(0, Math.round(this.frequency.v)), o1 = this.pointsType.v;
                        if (n1 !== 0) {
                            var c1, g1;
                            for(i1 = 0; i1 < r1; i1 += 1){
                                if (c1 = this.shapes[i1], g1 = c1.localShapeCollection, !(!c1.shape._mdf && !this._mdf && !t1)) for(g1.releaseShapes(), c1.shape._mdf = !0, e1 = c1.shape.paths.shapes, s1 = c1.shape.paths._length, a1 = 0; a1 < s1; a1 += 1)g1.addShape(this.processPath(e1[a1], n1, h1, o1));
                                c1.shape.paths = c1.localShapeCollection;
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
                        var i1, r1, a1, s1, n1, h1, o1;
                        o1 = linearOffset(t1.points[0], t1.points[1], e1), i1 = o1[0], r1 = o1[1], o1 = linearOffset(t1.points[1], t1.points[2], e1), a1 = o1[0], s1 = o1[1], o1 = linearOffset(t1.points[2], t1.points[3], e1), n1 = o1[0], h1 = o1[1];
                        var c1 = lineIntersection(i1, r1, a1, s1);
                        c1 === null && (c1 = r1);
                        var g1 = lineIntersection(n1, h1, a1, s1);
                        return g1 === null && (g1 = n1), new PolynomialBezier(i1, c1, g1, h1);
                    }
                    function joinLines(t1, e1, i1, r1, a1) {
                        var s1 = e1.points[3], n1 = i1.points[0];
                        if (r1 === 3 || pointEqual(s1, n1)) return s1;
                        if (r1 === 2) {
                            var h1 = -e1.tangentAngle(1), o1 = -i1.tangentAngle(0) + Math.PI, c1 = lineIntersection(s1, polarOffset(s1, h1 + Math.PI / 2, 100), n1, polarOffset(n1, h1 + Math.PI / 2, 100)), g1 = c1 ? pointDistance(c1, s1) : pointDistance(s1, n1) / 2, b1 = polarOffset(s1, h1, 2 * g1 * roundCorner);
                            return t1.setXYAt(b1[0], b1[1], "o", t1.length() - 1), b1 = polarOffset(n1, o1, 2 * g1 * roundCorner), t1.setTripleAt(n1[0], n1[1], n1[0], n1[1], b1[0], b1[1], t1.length()), n1;
                        }
                        var f1 = pointEqual(s1, e1.points[2]) ? e1.points[0] : e1.points[2], x1 = pointEqual(n1, i1.points[1]) ? i1.points[3] : i1.points[1], v1 = lineIntersection(f1, s1, n1, x1);
                        return v1 && pointDistance(v1, s1) < a1 ? (t1.setTripleAt(v1[0], v1[1], v1[0], v1[1], v1[0], v1[1], t1.length()), v1) : s1;
                    }
                    function getIntersection(t1, e1) {
                        var i1 = t1.intersections(e1);
                        return i1.length && floatEqual(i1[0][0], 1) && i1.shift(), i1.length ? i1[0] : null;
                    }
                    function pruneSegmentIntersection(t1, e1) {
                        var i1 = t1.slice(), r1 = e1.slice(), a1 = getIntersection(t1[t1.length - 1], e1[0]);
                        return a1 && (i1[t1.length - 1] = t1[t1.length - 1].split(a1[0])[0], r1[0] = e1[0].split(a1[1])[1]), t1.length > 1 && e1.length > 1 && (a1 = getIntersection(t1[0], e1[e1.length - 1]), a1) ? [
                            [
                                t1[0].split(a1[0])[0]
                            ],
                            [
                                e1[e1.length - 1].split(a1[1])[1]
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
                        var i1 = t1.inflectionPoints(), r1, a1, s1, n1;
                        if (i1.length === 0) return [
                            offsetSegment(t1, e1)
                        ];
                        if (i1.length === 1 || floatEqual(i1[1], 1)) return s1 = t1.split(i1[0]), r1 = s1[0], a1 = s1[1], [
                            offsetSegment(r1, e1),
                            offsetSegment(a1, e1)
                        ];
                        s1 = t1.split(i1[0]), r1 = s1[0];
                        var h1 = (i1[1] - i1[0]) / (1 - i1[0]);
                        return s1 = s1[1].split(h1), n1 = s1[0], a1 = s1[1], [
                            offsetSegment(r1, e1),
                            offsetSegment(n1, e1),
                            offsetSegment(a1, e1)
                        ];
                    }
                    function OffsetPathModifier() {}
                    extendPrototype([
                        ShapeModifier
                    ], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t1, e1) {
                        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t1, e1.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t1, e1.ml, 0, null, this), this.lineJoin = e1.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
                    }, OffsetPathModifier.prototype.processPath = function(t1, e1, i1, r1) {
                        var a1 = shapePool.newElement();
                        a1.c = t1.c;
                        var s1 = t1.length();
                        t1.c || (s1 -= 1);
                        var n1, h1, o1, c1 = [];
                        for(n1 = 0; n1 < s1; n1 += 1)o1 = PolynomialBezier.shapeSegment(t1, n1), c1.push(offsetSegmentSplit(o1, e1));
                        if (!t1.c) for(n1 = s1 - 1; n1 >= 0; n1 -= 1)o1 = PolynomialBezier.shapeSegmentInverted(t1, n1), c1.push(offsetSegmentSplit(o1, e1));
                        c1 = pruneIntersections(c1);
                        var g1 = null, b1 = null;
                        for(n1 = 0; n1 < c1.length; n1 += 1){
                            var f1 = c1[n1];
                            for(b1 && (g1 = joinLines(a1, b1, f1[0], i1, r1)), b1 = f1[f1.length - 1], h1 = 0; h1 < f1.length; h1 += 1)o1 = f1[h1], g1 && pointEqual(o1.points[0], g1) ? a1.setXYAt(o1.points[1][0], o1.points[1][1], "o", a1.length() - 1) : a1.setTripleAt(o1.points[0][0], o1.points[0][1], o1.points[1][0], o1.points[1][1], o1.points[0][0], o1.points[0][1], a1.length()), a1.setTripleAt(o1.points[3][0], o1.points[3][1], o1.points[3][0], o1.points[3][1], o1.points[2][0], o1.points[2][1], a1.length()), g1 = o1.points[3];
                        }
                        return c1.length && joinLines(a1, b1, c1[0][0], i1, r1), a1;
                    }, OffsetPathModifier.prototype.processShapes = function(t1) {
                        var e1, i1, r1 = this.shapes.length, a1, s1, n1 = this.amount.v, h1 = this.miterLimit.v, o1 = this.lineJoin;
                        if (n1 !== 0) {
                            var c1, g1;
                            for(i1 = 0; i1 < r1; i1 += 1){
                                if (c1 = this.shapes[i1], g1 = c1.localShapeCollection, !(!c1.shape._mdf && !this._mdf && !t1)) for(g1.releaseShapes(), c1.shape._mdf = !0, e1 = c1.shape.paths.shapes, s1 = c1.shape.paths._length, a1 = 0; a1 < s1; a1 += 1)g1.addShape(this.processPath(e1[a1], n1, o1, h1));
                                c1.shape.paths = c1.localShapeCollection;
                            }
                        }
                        this.dynamicProperties.length || (this._mdf = !1);
                    };
                    function getFontProperties(t1) {
                        for(var e1 = t1.fStyle ? t1.fStyle.split(" ") : [], i1 = "normal", r1 = "normal", a1 = e1.length, s1, n1 = 0; n1 < a1; n1 += 1)switch(s1 = e1[n1].toLowerCase(), s1){
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
                        var r1 = 127988, a1 = 917631, s1 = 917601, n1 = 917626, h1 = 65039, o1 = 8205, c1 = 127462, g1 = 127487, b1 = [
                            "d83cdffb",
                            "d83cdffc",
                            "d83cdffd",
                            "d83cdffe",
                            "d83cdfff"
                        ];
                        function f1(E1) {
                            var T1 = E1.split(","), y1, _1 = T1.length, k1 = [];
                            for(y1 = 0; y1 < _1; y1 += 1)T1[y1] !== "sans-serif" && T1[y1] !== "monospace" && k1.push(T1[y1]);
                            return k1.join(",");
                        }
                        function x1(E1, T1) {
                            var y1 = createTag("span");
                            y1.setAttribute("aria-hidden", !0), y1.style.fontFamily = T1;
                            var _1 = createTag("span");
                            _1.innerText = "giItT1WQy@!-/#", y1.style.position = "absolute", y1.style.left = "-10000px", y1.style.top = "-10000px", y1.style.fontSize = "300px", y1.style.fontVariant = "normal", y1.style.fontStyle = "normal", y1.style.fontWeight = "normal", y1.style.letterSpacing = "0", y1.appendChild(_1), document.body.appendChild(y1);
                            var k1 = _1.offsetWidth;
                            return _1.style.fontFamily = f1(E1) + ", " + T1, {
                                node: _1,
                                w: k1,
                                parent: y1
                            };
                        }
                        function v1() {
                            var E1, T1 = this.fonts.length, y1, _1, k1 = T1;
                            for(E1 = 0; E1 < T1; E1 += 1)this.fonts[E1].loaded ? k1 -= 1 : this.fonts[E1].fOrigin === "n" || this.fonts[E1].origin === 0 ? this.fonts[E1].loaded = !0 : (y1 = this.fonts[E1].monoCase.node, _1 = this.fonts[E1].monoCase.w, y1.offsetWidth !== _1 ? (k1 -= 1, this.fonts[E1].loaded = !0) : (y1 = this.fonts[E1].sansCase.node, _1 = this.fonts[E1].sansCase.w, y1.offsetWidth !== _1 && (k1 -= 1, this.fonts[E1].loaded = !0)), this.fonts[E1].loaded && (this.fonts[E1].sansCase.parent.parentNode.removeChild(this.fonts[E1].sansCase.parent), this.fonts[E1].monoCase.parent.parentNode.removeChild(this.fonts[E1].monoCase.parent)));
                            k1 !== 0 && Date.now() - this.initTime < t1 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
                        }
                        function d1(E1, T1) {
                            var y1 = document.body && T1 ? "svg" : "canvas", _1, k1 = getFontProperties(E1);
                            if (y1 === "svg") {
                                var D1 = createNS("text");
                                D1.style.fontSize = "100px", D1.setAttribute("font-family", E1.fFamily), D1.setAttribute("font-style", k1.style), D1.setAttribute("font-weight", k1.weight), D1.textContent = "1", E1.fClass ? (D1.style.fontFamily = "inherit", D1.setAttribute("class", E1.fClass)) : D1.style.fontFamily = E1.fFamily, T1.appendChild(D1), _1 = D1;
                            } else {
                                var O1 = new OffscreenCanvas(500, 500).getContext("2d");
                                O1.font = k1.style + " " + k1.weight + " 100px " + E1.fFamily, _1 = O1;
                            }
                            function z1(H1) {
                                return y1 === "svg" ? (_1.textContent = H1, _1.getComputedTextLength()) : _1.measureText(H1).width;
                            }
                            return {
                                measureText: z1
                            };
                        }
                        function A1(E1, T1) {
                            if (!E1) {
                                this.isLoaded = !0;
                                return;
                            }
                            if (this.chars) {
                                this.isLoaded = !0, this.fonts = E1.list;
                                return;
                            }
                            if (!document.body) {
                                this.isLoaded = !0, E1.list.forEach(function(Y1) {
                                    Y1.helper = d1(Y1), Y1.cache = {};
                                }), this.fonts = E1.list;
                                return;
                            }
                            var y1 = E1.list, _1, k1 = y1.length, D1 = k1;
                            for(_1 = 0; _1 < k1; _1 += 1){
                                var O1 = !0, z1, H1;
                                if (y1[_1].loaded = !1, y1[_1].monoCase = x1(y1[_1].fFamily, "monospace"), y1[_1].sansCase = x1(y1[_1].fFamily, "sans-serif"), !y1[_1].fPath) y1[_1].loaded = !0, D1 -= 1;
                                else if (y1[_1].fOrigin === "p" || y1[_1].origin === 3) {
                                    if (z1 = document.querySelectorAll('style[f-forigin="p"][f-family="' + y1[_1].fFamily + '"], style[f-origin="3"][f-family="' + y1[_1].fFamily + '"]'), z1.length > 0 && (O1 = !1), O1) {
                                        var N1 = createTag("style");
                                        N1.setAttribute("f-forigin", y1[_1].fOrigin), N1.setAttribute("f-origin", y1[_1].origin), N1.setAttribute("f-family", y1[_1].fFamily), N1.type = "text/css", N1.innerText = "@font-face {font-family: " + y1[_1].fFamily + "; font-style: normal; src: url('" + y1[_1].fPath + "');}", T1.appendChild(N1);
                                    }
                                } else if (y1[_1].fOrigin === "g" || y1[_1].origin === 1) {
                                    for(z1 = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), H1 = 0; H1 < z1.length; H1 += 1)z1[H1].href.indexOf(y1[_1].fPath) !== -1 && (O1 = !1);
                                    if (O1) {
                                        var q1 = createTag("link");
                                        q1.setAttribute("f-forigin", y1[_1].fOrigin), q1.setAttribute("f-origin", y1[_1].origin), q1.type = "text/css", q1.rel = "stylesheet", q1.href = y1[_1].fPath, document.body.appendChild(q1);
                                    }
                                } else if (y1[_1].fOrigin === "t" || y1[_1].origin === 2) {
                                    for(z1 = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), H1 = 0; H1 < z1.length; H1 += 1)y1[_1].fPath === z1[H1].src && (O1 = !1);
                                    if (O1) {
                                        var W1 = createTag("link");
                                        W1.setAttribute("f-forigin", y1[_1].fOrigin), W1.setAttribute("f-origin", y1[_1].origin), W1.setAttribute("rel", "stylesheet"), W1.setAttribute("href", y1[_1].fPath), T1.appendChild(W1);
                                    }
                                }
                                y1[_1].helper = d1(y1[_1], T1), y1[_1].cache = {}, this.fonts.push(y1[_1]);
                            }
                            D1 === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
                        }
                        function m1(E1) {
                            if (E1) {
                                this.chars || (this.chars = []);
                                var T1, y1 = E1.length, _1, k1 = this.chars.length, D1;
                                for(T1 = 0; T1 < y1; T1 += 1){
                                    for(_1 = 0, D1 = !1; _1 < k1;)this.chars[_1].style === E1[T1].style && this.chars[_1].fFamily === E1[T1].fFamily && this.chars[_1].ch === E1[T1].ch && (D1 = !0), _1 += 1;
                                    D1 || (this.chars.push(E1[T1]), k1 += 1);
                                }
                            }
                        }
                        function l1(E1, T1, y1) {
                            for(var _1 = 0, k1 = this.chars.length; _1 < k1;){
                                if (this.chars[_1].ch === E1 && this.chars[_1].style === T1 && this.chars[_1].fFamily === y1) return this.chars[_1];
                                _1 += 1;
                            }
                            return (typeof E1 == "string" && E1.charCodeAt(0) !== 13 || !E1) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", E1, T1, y1)), e1;
                        }
                        function p1(E1, T1, y1) {
                            var _1 = this.getFontByName(T1), k1 = E1;
                            if (!_1.cache[k1]) {
                                var D1 = _1.helper;
                                if (E1 === " ") {
                                    var O1 = D1.measureText("|" + E1 + "|"), z1 = D1.measureText("||");
                                    _1.cache[k1] = (O1 - z1) / 100;
                                } else _1.cache[k1] = D1.measureText(E1) / 100;
                            }
                            return _1.cache[k1] * y1;
                        }
                        function u1(E1) {
                            for(var T1 = 0, y1 = this.fonts.length; T1 < y1;){
                                if (this.fonts[T1].fName === E1) return this.fonts[T1];
                                T1 += 1;
                            }
                            return this.fonts[0];
                        }
                        function P1(E1) {
                            var T1 = 0, y1 = E1.charCodeAt(0);
                            if (y1 >= 55296 && y1 <= 56319) {
                                var _1 = E1.charCodeAt(1);
                                _1 >= 56320 && _1 <= 57343 && (T1 = (y1 - 55296) * 1024 + _1 - 56320 + 65536);
                            }
                            return T1;
                        }
                        function S1(E1, T1) {
                            var y1 = E1.toString(16) + T1.toString(16);
                            return b1.indexOf(y1) !== -1;
                        }
                        function C1(E1) {
                            return E1 === o1;
                        }
                        function M1(E1) {
                            return E1 === h1;
                        }
                        function w1(E1) {
                            var T1 = P1(E1);
                            return T1 >= c1 && T1 <= g1;
                        }
                        function F1(E1) {
                            return w1(E1.substr(0, 2)) && w1(E1.substr(2, 2));
                        }
                        function V1(E1) {
                            return i1.indexOf(E1) !== -1;
                        }
                        function I1(E1, T1) {
                            var y1 = P1(E1.substr(T1, 2));
                            if (y1 !== r1) return !1;
                            var _1 = 0;
                            for(T1 += 2; _1 < 5;){
                                if (y1 = P1(E1.substr(T1, 2)), y1 < s1 || y1 > n1) return !1;
                                _1 += 1, T1 += 2;
                            }
                            return P1(E1.substr(T1, 2)) === a1;
                        }
                        function L1() {
                            this.isLoaded = !0;
                        }
                        var B1 = function() {
                            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
                        };
                        B1.isModifier = S1, B1.isZeroWidthJoiner = C1, B1.isFlagEmoji = F1, B1.isRegionalCode = w1, B1.isCombinedCharacter = V1, B1.isRegionalFlag = I1, B1.isVariationSelector = M1, B1.BLACK_FLAG_CODE_POINT = r1;
                        var R1 = {
                            addChars: m1,
                            addFonts: A1,
                            getCharData: l1,
                            getFontByName: u1,
                            measureText: p1,
                            checkLoadedFonts: v1,
                            setIsLoaded: L1
                        };
                        return B1.prototype = R1, B1;
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
                        var r1, a1 = i1.length, s1;
                        for(r1 = 0; r1 < a1; r1 += 1)s1 = new GroupEffect(i1[r1], e1), this.effectElements.push(s1);
                    }
                    function GroupEffect(t1, e1) {
                        this.init(t1, e1);
                    }
                    extendPrototype([
                        DynamicPropertyContainer
                    ], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t1, e1) {
                        this.data = t1, this.effectElements = [], this.initDynamicPropertyContainer(e1);
                        var i1, r1 = this.data.ef.length, a1, s1 = this.data.ef;
                        for(i1 = 0; i1 < r1; i1 += 1){
                            switch(a1 = null, s1[i1].ty){
                                case 0:
                                    a1 = new SliderEffect(s1[i1], e1, this);
                                    break;
                                case 1:
                                    a1 = new AngleEffect(s1[i1], e1, this);
                                    break;
                                case 2:
                                    a1 = new ColorEffect(s1[i1], e1, this);
                                    break;
                                case 3:
                                    a1 = new PointEffect(s1[i1], e1, this);
                                    break;
                                case 4:
                                case 7:
                                    a1 = new CheckboxEffect(s1[i1], e1, this);
                                    break;
                                case 10:
                                    a1 = new LayerIndexEffect(s1[i1], e1, this);
                                    break;
                                case 11:
                                    a1 = new MaskIndexEffect(s1[i1], e1, this);
                                    break;
                                case 5:
                                    a1 = new EffectsManager(s1[i1], e1);
                                    break;
                                default:
                                    a1 = new NoValueEffect(s1[i1]);
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
                                var e1 = t1("layer"), i1 = t1("effects"), r1 = t1("shape"), a1 = t1("text"), s1 = t1("comp");
                                this.layerInterface = e1(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                                var n1 = i1.createEffectsInterface(this, this.layerInterface);
                                this.layerInterface.registerEffectsInterface(n1), this.data.ty === 0 || this.data.xt ? this.compInterface = s1(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = r1(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = a1(this), this.layerInterface.text = this.layerInterface.textInterface);
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
                        var e1, i1 = t1.length, r1, a1 = this.layers.length;
                        for(e1 = 0; e1 < i1; e1 += 1)for(r1 = 0; r1 < a1;){
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
                        for(var r1 = this.elements, a1 = this.layers, s1 = 0, n1 = a1.length; s1 < n1;)a1[s1].ind == e1 && (!r1[s1] || r1[s1] === !0 ? (this.buildItem(s1), this.addPendingElement(t1)) : (i1.push(r1[s1]), r1[s1].setAsParent(), a1[s1].parent !== void 0 ? this.buildElementParenting(t1, a1[s1].parent, i1) : t1.setHierarchy(i1))), s1 += 1;
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
                            var r1, a1 = this.elements.length;
                            for(r1 = 0; r1 < a1; r1 += 1)if (this.elements[r1].data.nm === e1) {
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
                                    var e1 = 0, i1 = t1.length;
                                    for(e1 = 0; e1 < i1; e1 += 1)this.localTransforms.push(t1[e1]);
                                }
                            }
                        },
                        globalToLocal: function(t1) {
                            var e1 = [];
                            e1.push(this.finalTransform);
                            for(var i1 = !0, r1 = this.comp; i1;)r1.finalTransform ? (r1.data.hasMask && e1.splice(0, 0, r1.finalTransform), r1 = r1.comp) : i1 = !1;
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
                    function MaskElement(t1, e1, i1) {
                        this.data = t1, this.element = e1, this.globalData = i1, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                        var r1 = this.globalData.defs, a1, s1 = this.masksProperties ? this.masksProperties.length : 0;
                        this.viewData = createSizedArray(s1), this.solidPath = "";
                        var n1, h1 = this.masksProperties, o1 = 0, c1 = [], g1, b1, f1 = createElementID(), x1, v1, d1, A1, m1 = "clipPath", l1 = "clip-path";
                        for(a1 = 0; a1 < s1; a1 += 1)if ((h1[a1].mode !== "a" && h1[a1].mode !== "n" || h1[a1].inv || h1[a1].o.k !== 100 || h1[a1].o.x) && (m1 = "mask", l1 = "mask"), (h1[a1].mode === "s" || h1[a1].mode === "i") && o1 === 0 ? (x1 = createNS("rect"), x1.setAttribute("fill", "#ffffff"), x1.setAttribute("width", this.element.comp.data.w || 0), x1.setAttribute("height", this.element.comp.data.h || 0), c1.push(x1)) : x1 = null, n1 = createNS("path"), h1[a1].mode === "n") this.viewData[a1] = {
                            op: PropertyFactory.getProp(this.element, h1[a1].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, h1[a1], 3),
                            elem: n1,
                            lastPath: ""
                        }, r1.appendChild(n1);
                        else {
                            o1 += 1, n1.setAttribute("fill", h1[a1].mode === "s" ? "#000000" : "#ffffff"), n1.setAttribute("clip-rule", "nonzero");
                            var p1;
                            if (h1[a1].x.k !== 0 ? (m1 = "mask", l1 = "mask", A1 = PropertyFactory.getProp(this.element, h1[a1].x, 0, null, this.element), p1 = createElementID(), v1 = createNS("filter"), v1.setAttribute("id", p1), d1 = createNS("feMorphology"), d1.setAttribute("operator", "erode"), d1.setAttribute("in", "SourceGraphic"), d1.setAttribute("radius", "0"), v1.appendChild(d1), r1.appendChild(v1), n1.setAttribute("stroke", h1[a1].mode === "s" ? "#000000" : "#ffffff")) : (d1 = null, A1 = null), this.storedData[a1] = {
                                elem: n1,
                                x: A1,
                                expan: d1,
                                lastPath: "",
                                lastOperator: "",
                                filterId: p1,
                                lastRadius: 0
                            }, h1[a1].mode === "i") {
                                b1 = c1.length;
                                var u1 = createNS("g");
                                for(g1 = 0; g1 < b1; g1 += 1)u1.appendChild(c1[g1]);
                                var P1 = createNS("mask");
                                P1.setAttribute("mask-type", "alpha"), P1.setAttribute("id", f1 + "_" + o1), P1.appendChild(n1), r1.appendChild(P1), u1.setAttribute("mask", "url(" + getLocationHref() + "#" + f1 + "_" + o1 + ")"), c1.length = 0, c1.push(u1);
                            } else c1.push(n1);
                            h1[a1].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[a1] = {
                                elem: n1,
                                lastPath: "",
                                op: PropertyFactory.getProp(this.element, h1[a1].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, h1[a1], 3),
                                invRect: x1
                            }, this.viewData[a1].prop.k || this.drawPath(h1[a1], this.viewData[a1].prop.v, this.viewData[a1]);
                        }
                        for(this.maskElement = createNS(m1), s1 = c1.length, a1 = 0; a1 < s1; a1 += 1)this.maskElement.appendChild(c1[a1]);
                        o1 > 0 && (this.maskElement.setAttribute("id", f1), this.element.maskedElement.setAttribute(l1, "url(" + getLocationHref() + "#" + f1 + ")"), r1.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
                    }
                    MaskElement.prototype.getMaskProperty = function(t1) {
                        return this.viewData[t1].prop;
                    }, MaskElement.prototype.renderFrame = function(t1) {
                        var e1 = this.element.finalTransform.mat, i1, r1 = this.masksProperties.length;
                        for(i1 = 0; i1 < r1; i1 += 1)if ((this.viewData[i1].prop._mdf || t1) && this.drawPath(this.masksProperties[i1], this.viewData[i1].prop.v, this.viewData[i1]), (this.viewData[i1].op._mdf || t1) && this.viewData[i1].elem.setAttribute("fill-opacity", this.viewData[i1].op.v), this.masksProperties[i1].mode !== "n" && (this.viewData[i1].invRect && (this.element.finalTransform.mProp._mdf || t1) && this.viewData[i1].invRect.setAttribute("transform", e1.getInverseMatrix().to2dCSS()), this.storedData[i1].x && (this.storedData[i1].x._mdf || t1))) {
                            var a1 = this.storedData[i1].expan;
                            this.storedData[i1].x.v < 0 ? (this.storedData[i1].lastOperator !== "erode" && (this.storedData[i1].lastOperator = "erode", this.storedData[i1].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[i1].filterId + ")")), a1.setAttribute("radius", -this.storedData[i1].x.v)) : (this.storedData[i1].lastOperator !== "dilate" && (this.storedData[i1].lastOperator = "dilate", this.storedData[i1].elem.setAttribute("filter", null)), this.storedData[i1].elem.setAttribute("stroke-width", this.storedData[i1].x.v * 2));
                        }
                    }, MaskElement.prototype.getMaskelement = function() {
                        return this.maskElement;
                    }, MaskElement.prototype.createLayerSolidPath = function() {
                        var t1 = "M0,0 ";
                        return t1 += " h" + this.globalData.compSize.w, t1 += " v" + this.globalData.compSize.h, t1 += " h-" + this.globalData.compSize.w, t1 += " v-" + this.globalData.compSize.h + " ", t1;
                    }, MaskElement.prototype.drawPath = function(t1, e1, i1) {
                        var r1 = " M" + e1.v[0][0] + "," + e1.v[0][1], a1, s1;
                        for(s1 = e1._length, a1 = 1; a1 < s1; a1 += 1)r1 += " C" + e1.o[a1 - 1][0] + "," + e1.o[a1 - 1][1] + " " + e1.i[a1][0] + "," + e1.i[a1][1] + " " + e1.v[a1][0] + "," + e1.v[a1][1];
                        if (e1.c && s1 > 1 && (r1 += " C" + e1.o[a1 - 1][0] + "," + e1.o[a1 - 1][1] + " " + e1.i[0][0] + "," + e1.i[0][1] + " " + e1.v[0][0] + "," + e1.v[0][1]), i1.lastPath !== r1) {
                            var n1 = "";
                            i1.elem && (e1.c && (n1 = t1.inv ? this.solidPath + r1 : r1), i1.elem.setAttribute("d", n1)), i1.lastPath = r1;
                        }
                    }, MaskElement.prototype.destroy = function() {
                        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
                    };
                    var filtersFactory = function() {
                        var t1 = {};
                        t1.createFilter = e1, t1.createAlphaToLuminanceFilter = i1;
                        function e1(r1, a1) {
                            var s1 = createNS("filter");
                            return s1.setAttribute("id", r1), a1 !== !0 && (s1.setAttribute("filterUnits", "objectBoundingBox"), s1.setAttribute("x", "0%"), s1.setAttribute("y", "0%"), s1.setAttribute("width", "100%"), s1.setAttribute("height", "100%")), s1;
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
                        var e1, i1 = "SourceGraphic", r1 = t1.data.ef ? t1.data.ef.length : 0, a1 = createElementID(), s1 = filtersFactory.createFilter(a1, !0), n1 = 0;
                        this.filters = [];
                        var h1;
                        for(e1 = 0; e1 < r1; e1 += 1){
                            h1 = null;
                            var o1 = t1.data.ef[e1].ty;
                            if (registeredEffects$1[o1]) {
                                var c1 = registeredEffects$1[o1].effect;
                                h1 = new c1(s1, t1.effectsManager.effectElements[e1], t1, idPrefix + n1, i1), i1 = idPrefix + n1, registeredEffects$1[o1].countsAsEffect && (n1 += 1);
                            }
                            h1 && this.filters.push(h1);
                        }
                        n1 && (t1.globalData.defs.appendChild(s1), t1.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a1 + ")")), this.filters.length && t1.addRenderableComponent(this);
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
                                var a1 = createElementID();
                                if (i1.setAttribute("id", a1), i1.appendChild(r1), this.globalData.defs.appendChild(i1), this.checkMasks()) {
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
                                var e1 = this.layerId + "_" + t1, i1, r1, a1, s1;
                                if (t1 === 1 || t1 === 3) {
                                    var n1 = createNS("mask");
                                    n1.setAttribute("id", e1), n1.setAttribute("mask-type", t1 === 3 ? "luminance" : "alpha"), a1 = createNS("use"), a1.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n1.appendChild(a1), this.globalData.defs.appendChild(n1), !featureSupport.maskType && t1 === 1 && (n1.setAttribute("mask-type", "luminance"), i1 = createElementID(), r1 = filtersFactory.createFilter(i1), this.globalData.defs.appendChild(r1), r1.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s1 = createNS("g"), s1.appendChild(a1), n1.appendChild(s1), s1.setAttribute("filter", "url(" + getLocationHref() + "#" + i1 + ")"));
                                } else if (t1 === 2) {
                                    var h1 = createNS("mask");
                                    h1.setAttribute("id", e1), h1.setAttribute("mask-type", "alpha");
                                    var o1 = createNS("g");
                                    h1.appendChild(o1), i1 = createElementID(), r1 = filtersFactory.createFilter(i1);
                                    var c1 = createNS("feComponentTransfer");
                                    c1.setAttribute("in", "SourceGraphic"), r1.appendChild(c1);
                                    var g1 = createNS("feFuncA");
                                    g1.setAttribute("type", "table"), g1.setAttribute("tableValues", "1.0 0.0"), c1.appendChild(g1), this.globalData.defs.appendChild(r1);
                                    var b1 = createNS("rect");
                                    b1.setAttribute("width", this.comp.data.w), b1.setAttribute("height", this.comp.data.h), b1.setAttribute("x", "0"), b1.setAttribute("y", "0"), b1.setAttribute("fill", "#ffffff"), b1.setAttribute("opacity", "0"), o1.setAttribute("filter", "url(" + getLocationHref() + "#" + i1 + ")"), o1.appendChild(b1), a1 = createNS("use"), a1.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o1.appendChild(a1), featureSupport.maskType || (h1.setAttribute("mask-type", "luminance"), r1.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s1 = createNS("g"), o1.appendChild(b1), s1.appendChild(this.layerElement), o1.appendChild(s1)), this.globalData.defs.appendChild(h1);
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
                        for(var r1 = 0, a1 = t1.length; r1 < a1;){
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
                        var a1, s1 = e1.length || 0, n1;
                        for(a1 = 0; a1 < s1; a1 += 1)n1 = PropertyFactory.getProp(t1, e1[a1].v, 0, 0, this), this.k = n1.k || this.k, this.dataProps[a1] = {
                            n: e1[a1].n,
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
                        for(var i1 = 0, r1 = this.o.length / 2, a1; i1 < r1;){
                            if (a1 = Math.abs(t1[i1 * 4] - t1[e1 * 4 + i1 * 2]), a1 > .01) return !1;
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
                            var e1, i1 = this.data.p * 4, r1, a1;
                            for(e1 = 0; e1 < i1; e1 += 1)r1 = e1 % 4 === 0 ? 100 : 255, a1 = Math.round(this.prop.v[e1] * r1), this.c[e1] !== a1 && (this.c[e1] = a1, this._cmdf = !t1);
                            if (this.o.length) for(i1 = this.prop.v.length, e1 = this.data.p * 4; e1 < i1; e1 += 1)r1 = e1 % 2 === 0 ? 100 : 1, a1 = e1 % 2 === 0 ? Math.round(this.prop.v[e1] * 100) : this.prop.v[e1], this.o[e1 - this.data.p * 4] !== a1 && (this.o[e1 - this.data.p * 4] = a1, this._omdf = !t1);
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
                        var a1 = [], s1, n1, h1;
                        for(h1 = e1.g.p * 4, n1 = 0; n1 < h1; n1 += 4)s1 = createNS("stop"), r1.appendChild(s1), a1.push(s1);
                        t1.setAttribute(e1.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i1 + ")"), this.gf = r1, this.cst = a1;
                    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t1, e1) {
                        if (this.g._hasOpacity && !this.g._collapsable) {
                            var i1, r1, a1, s1 = createNS("mask"), n1 = createNS("path");
                            s1.appendChild(n1);
                            var h1 = createElementID(), o1 = createElementID();
                            s1.setAttribute("id", o1);
                            var c1 = createNS(t1.t === 1 ? "linearGradient" : "radialGradient");
                            c1.setAttribute("id", h1), c1.setAttribute("spreadMethod", "pad"), c1.setAttribute("gradientUnits", "userSpaceOnUse"), a1 = t1.g.k.k[0].s ? t1.g.k.k[0].s.length : t1.g.k.k.length;
                            var g1 = this.stops;
                            for(r1 = t1.g.p * 4; r1 < a1; r1 += 2)i1 = createNS("stop"), i1.setAttribute("stop-color", "rgb(255,255,255)"), c1.appendChild(i1), g1.push(i1);
                            n1.setAttribute(t1.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + h1 + ")"), t1.ty === "gs" && (n1.setAttribute("stroke-linecap", lineCapEnum[t1.lc || 2]), n1.setAttribute("stroke-linejoin", lineJoinEnum[t1.lj || 2]), t1.lj === 1 && n1.setAttribute("stroke-miterlimit", t1.ml)), this.of = c1, this.ms = s1, this.ost = g1, this.maskId = o1, e1.msElem = n1;
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
                        var a1 = t1.o, s1 = t1.i, n1 = t1.v, h1, o1 = " M" + r1.applyToPointStringified(n1[0][0], n1[0][1]);
                        for(h1 = 1; h1 < e1; h1 += 1)o1 += " C" + r1.applyToPointStringified(a1[h1 - 1][0], a1[h1 - 1][1]) + " " + r1.applyToPointStringified(s1[h1][0], s1[h1][1]) + " " + r1.applyToPointStringified(n1[h1][0], n1[h1][1]);
                        return i1 && e1 && (o1 += " C" + r1.applyToPointStringified(a1[h1 - 1][0], a1[h1 - 1][1]) + " " + r1.applyToPointStringified(s1[0][0], s1[0][1]) + " " + r1.applyToPointStringified(n1[0][0], n1[0][1]), o1 += "z"), o1;
                    }, SVGElementsRenderer = function() {
                        var t1 = new Matrix, e1 = new Matrix, i1 = {
                            createRenderFunction: r1
                        };
                        function r1(b1) {
                            switch(b1.ty){
                                case "fl":
                                    return h1;
                                case "gf":
                                    return c1;
                                case "gs":
                                    return o1;
                                case "st":
                                    return g1;
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
                        function a1(b1, f1, x1) {
                            (x1 || f1.transform.op._mdf) && f1.transform.container.setAttribute("opacity", f1.transform.op.v), (x1 || f1.transform.mProps._mdf) && f1.transform.container.setAttribute("transform", f1.transform.mProps.v.to2dCSS());
                        }
                        function s1() {}
                        function n1(b1, f1, x1) {
                            var v1, d1, A1, m1, l1, p1, u1 = f1.styles.length, P1 = f1.lvl, S1, C1, M1, w1;
                            for(p1 = 0; p1 < u1; p1 += 1){
                                if (m1 = f1.sh._mdf || x1, f1.styles[p1].lvl < P1) {
                                    for(C1 = e1.reset(), M1 = P1 - f1.styles[p1].lvl, w1 = f1.transformers.length - 1; !m1 && M1 > 0;)m1 = f1.transformers[w1].mProps._mdf || m1, M1 -= 1, w1 -= 1;
                                    if (m1) for(M1 = P1 - f1.styles[p1].lvl, w1 = f1.transformers.length - 1; M1 > 0;)C1.multiply(f1.transformers[w1].mProps.v), M1 -= 1, w1 -= 1;
                                } else C1 = t1;
                                if (S1 = f1.sh.paths, d1 = S1._length, m1) {
                                    for(A1 = "", v1 = 0; v1 < d1; v1 += 1)l1 = S1.shapes[v1], l1 && l1._length && (A1 += buildShapeString(l1, l1._length, l1.c, C1));
                                    f1.caches[p1] = A1;
                                } else A1 = f1.caches[p1];
                                f1.styles[p1].d += b1.hd === !0 ? "" : A1, f1.styles[p1]._mdf = m1 || f1.styles[p1]._mdf;
                            }
                        }
                        function h1(b1, f1, x1) {
                            var v1 = f1.style;
                            (f1.c._mdf || x1) && v1.pElem.setAttribute("fill", "rgb(" + bmFloor(f1.c.v[0]) + "," + bmFloor(f1.c.v[1]) + "," + bmFloor(f1.c.v[2]) + ")"), (f1.o._mdf || x1) && v1.pElem.setAttribute("fill-opacity", f1.o.v);
                        }
                        function o1(b1, f1, x1) {
                            c1(b1, f1, x1), g1(b1, f1, x1);
                        }
                        function c1(b1, f1, x1) {
                            var v1 = f1.gf, d1 = f1.g._hasOpacity, A1 = f1.s.v, m1 = f1.e.v;
                            if (f1.o._mdf || x1) {
                                var l1 = b1.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                                f1.style.pElem.setAttribute(l1, f1.o.v);
                            }
                            if (f1.s._mdf || x1) {
                                var p1 = b1.t === 1 ? "x1" : "cx", u1 = p1 === "x1" ? "y1" : "cy";
                                v1.setAttribute(p1, A1[0]), v1.setAttribute(u1, A1[1]), d1 && !f1.g._collapsable && (f1.of.setAttribute(p1, A1[0]), f1.of.setAttribute(u1, A1[1]));
                            }
                            var P1, S1, C1, M1;
                            if (f1.g._cmdf || x1) {
                                P1 = f1.cst;
                                var w1 = f1.g.c;
                                for(C1 = P1.length, S1 = 0; S1 < C1; S1 += 1)M1 = P1[S1], M1.setAttribute("offset", w1[S1 * 4] + "%"), M1.setAttribute("stop-color", "rgb(" + w1[S1 * 4 + 1] + "," + w1[S1 * 4 + 2] + "," + w1[S1 * 4 + 3] + ")");
                            }
                            if (d1 && (f1.g._omdf || x1)) {
                                var F1 = f1.g.o;
                                for(f1.g._collapsable ? P1 = f1.cst : P1 = f1.ost, C1 = P1.length, S1 = 0; S1 < C1; S1 += 1)M1 = P1[S1], f1.g._collapsable || M1.setAttribute("offset", F1[S1 * 2] + "%"), M1.setAttribute("stop-opacity", F1[S1 * 2 + 1]);
                            }
                            if (b1.t === 1) (f1.e._mdf || x1) && (v1.setAttribute("x2", m1[0]), v1.setAttribute("y2", m1[1]), d1 && !f1.g._collapsable && (f1.of.setAttribute("x2", m1[0]), f1.of.setAttribute("y2", m1[1])));
                            else {
                                var V1;
                                if ((f1.s._mdf || f1.e._mdf || x1) && (V1 = Math.sqrt(Math.pow(A1[0] - m1[0], 2) + Math.pow(A1[1] - m1[1], 2)), v1.setAttribute("r", V1), d1 && !f1.g._collapsable && f1.of.setAttribute("r", V1)), f1.e._mdf || f1.h._mdf || f1.a._mdf || x1) {
                                    V1 || (V1 = Math.sqrt(Math.pow(A1[0] - m1[0], 2) + Math.pow(A1[1] - m1[1], 2)));
                                    var I1 = Math.atan2(m1[1] - A1[1], m1[0] - A1[0]), L1 = f1.h.v;
                                    L1 >= 1 ? L1 = .99 : L1 <= -1 && (L1 = -0.99);
                                    var B1 = V1 * L1, R1 = Math.cos(I1 + f1.a.v) * B1 + A1[0], E1 = Math.sin(I1 + f1.a.v) * B1 + A1[1];
                                    v1.setAttribute("fx", R1), v1.setAttribute("fy", E1), d1 && !f1.g._collapsable && (f1.of.setAttribute("fx", R1), f1.of.setAttribute("fy", E1));
                                }
                            }
                        }
                        function g1(b1, f1, x1) {
                            var v1 = f1.style, d1 = f1.d;
                            d1 && (d1._mdf || x1) && d1.dashStr && (v1.pElem.setAttribute("stroke-dasharray", d1.dashStr), v1.pElem.setAttribute("stroke-dashoffset", d1.dashoffset[0])), f1.c && (f1.c._mdf || x1) && v1.pElem.setAttribute("stroke", "rgb(" + bmFloor(f1.c.v[0]) + "," + bmFloor(f1.c.v[1]) + "," + bmFloor(f1.c.v[2]) + ")"), (f1.o._mdf || x1) && v1.pElem.setAttribute("stroke-opacity", f1.o.v), (f1.w._mdf || x1) && (v1.pElem.setAttribute("stroke-width", f1.w.v), v1.msElem && v1.msElem.setAttribute("stroke-width", f1.w.v));
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
                        var t1, e1 = this.shapes.length, i1, r1, a1 = this.stylesList.length, s1, n1 = [], h1 = !1;
                        for(r1 = 0; r1 < a1; r1 += 1){
                            for(s1 = this.stylesList[r1], h1 = !1, n1.length = 0, t1 = 0; t1 < e1; t1 += 1)i1 = this.shapes[t1], i1.styles.indexOf(s1) !== -1 && (n1.push(i1), h1 = i1._isAnimated || h1);
                            n1.length > 1 && h1 && this.setShapesAsAnimated(n1);
                        }
                    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t1) {
                        var e1, i1 = t1.length;
                        for(e1 = 0; e1 < i1; e1 += 1)t1[e1].setAsAnimated();
                    }, SVGShapeElement.prototype.createStyleElement = function(t1, e1) {
                        var i1, r1 = new SVGStyleData(t1, e1), a1 = r1.pElem;
                        if (t1.ty === "st") i1 = new SVGStrokeStyleData(this, t1, r1);
                        else if (t1.ty === "fl") i1 = new SVGFillStyleData(this, t1, r1);
                        else if (t1.ty === "gf" || t1.ty === "gs") {
                            var s1 = t1.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                            i1 = new s1(this, t1, r1), this.globalData.defs.appendChild(i1.gf), i1.maskId && (this.globalData.defs.appendChild(i1.ms), this.globalData.defs.appendChild(i1.of), a1.setAttribute("mask", "url(" + getLocationHref() + "#" + i1.maskId + ")"));
                        } else t1.ty === "no" && (i1 = new SVGNoStyleData(this, t1, r1));
                        return (t1.ty === "st" || t1.ty === "gs") && (a1.setAttribute("stroke-linecap", lineCapEnum[t1.lc || 2]), a1.setAttribute("stroke-linejoin", lineJoinEnum[t1.lj || 2]), a1.setAttribute("fill-opacity", "0"), t1.lj === 1 && a1.setAttribute("stroke-miterlimit", t1.ml)), t1.r === 2 && a1.setAttribute("fill-rule", "evenodd"), t1.ln && a1.setAttribute("id", t1.ln), t1.cl && a1.setAttribute("class", t1.cl), t1.bm && (a1.style["mix-blend-mode"] = getBlendMode(t1.bm)), this.stylesList.push(r1), this.addToAnimatedContents(t1, i1), i1;
                    }, SVGShapeElement.prototype.createGroupElement = function(t1) {
                        var e1 = new ShapeGroupData;
                        return t1.ln && e1.gr.setAttribute("id", t1.ln), t1.cl && e1.gr.setAttribute("class", t1.cl), t1.bm && (e1.gr.style["mix-blend-mode"] = getBlendMode(t1.bm)), e1;
                    }, SVGShapeElement.prototype.createTransformElement = function(t1, e1) {
                        var i1 = TransformPropertyFactory.getTransformProperty(this, t1, this), r1 = new SVGTransformData(i1, i1.o, e1);
                        return this.addToAnimatedContents(t1, r1), r1;
                    }, SVGShapeElement.prototype.createShapeElement = function(t1, e1, i1) {
                        var r1 = 4;
                        t1.ty === "rc" ? r1 = 5 : t1.ty === "el" ? r1 = 6 : t1.ty === "sr" && (r1 = 7);
                        var a1 = ShapePropertyFactory.getShapeProp(this, t1, r1, this), s1 = new SVGShapeData(e1, i1, a1);
                        return this.shapes.push(s1), this.addShapeToModifiers(s1), this.addToAnimatedContents(t1, s1), s1;
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
                    }, SVGShapeElement.prototype.searchShapes = function(t1, e1, i1, r1, a1, s1, n1) {
                        var h1 = [].concat(s1), o1, c1 = t1.length - 1, g1, b1, f1 = [], x1 = [], v1, d1, A1;
                        for(o1 = c1; o1 >= 0; o1 -= 1){
                            if (A1 = this.searchProcessedElement(t1[o1]), A1 ? e1[o1] = i1[A1 - 1] : t1[o1]._render = n1, t1[o1].ty === "fl" || t1[o1].ty === "st" || t1[o1].ty === "gf" || t1[o1].ty === "gs" || t1[o1].ty === "no") A1 ? e1[o1].style.closed = !1 : e1[o1] = this.createStyleElement(t1[o1], a1), t1[o1]._render && e1[o1].style.pElem.parentNode !== r1 && r1.appendChild(e1[o1].style.pElem), f1.push(e1[o1].style);
                            else if (t1[o1].ty === "gr") {
                                if (!A1) e1[o1] = this.createGroupElement(t1[o1]);
                                else for(b1 = e1[o1].it.length, g1 = 0; g1 < b1; g1 += 1)e1[o1].prevViewData[g1] = e1[o1].it[g1];
                                this.searchShapes(t1[o1].it, e1[o1].it, e1[o1].prevViewData, e1[o1].gr, a1 + 1, h1, n1), t1[o1]._render && e1[o1].gr.parentNode !== r1 && r1.appendChild(e1[o1].gr);
                            } else t1[o1].ty === "tr" ? (A1 || (e1[o1] = this.createTransformElement(t1[o1], r1)), v1 = e1[o1].transform, h1.push(v1)) : t1[o1].ty === "sh" || t1[o1].ty === "rc" || t1[o1].ty === "el" || t1[o1].ty === "sr" ? (A1 || (e1[o1] = this.createShapeElement(t1[o1], h1, a1)), this.setElementStyles(e1[o1])) : t1[o1].ty === "tm" || t1[o1].ty === "rd" || t1[o1].ty === "ms" || t1[o1].ty === "pb" || t1[o1].ty === "zz" || t1[o1].ty === "op" ? (A1 ? (d1 = e1[o1], d1.closed = !1) : (d1 = ShapeModifiers.getModifier(t1[o1].ty), d1.init(this, t1[o1]), e1[o1] = d1, this.shapeModifiers.push(d1)), x1.push(d1)) : t1[o1].ty === "rp" && (A1 ? (d1 = e1[o1], d1.closed = !0) : (d1 = ShapeModifiers.getModifier(t1[o1].ty), e1[o1] = d1, d1.init(this, t1, o1, e1), this.shapeModifiers.push(d1), n1 = !1), x1.push(d1));
                            this.addProcessedElement(t1[o1], o1 + 1);
                        }
                        for(c1 = f1.length, o1 = 0; o1 < c1; o1 += 1)f1[o1].closed = !0;
                        for(c1 = x1.length, o1 = 0; o1 < c1; o1 += 1)x1[o1].closed = !0;
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
                    function LetterProps(t1, e1, i1, r1, a1, s1) {
                        this.o = t1, this.sw = e1, this.sc = i1, this.fc = r1, this.m = a1, this.p = s1, this._mdf = {
                            o: !0,
                            sw: !!e1,
                            sc: !!i1,
                            fc: !!r1,
                            m: !0,
                            p: !0
                        };
                    }
                    LetterProps.prototype.update = function(t1, e1, i1, r1, a1, s1) {
                        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                        var n1 = !1;
                        return this.o !== t1 && (this.o = t1, this._mdf.o = !0, n1 = !0), this.sw !== e1 && (this.sw = e1, this._mdf.sw = !0, n1 = !0), this.sc !== i1 && (this.sc = i1, this._mdf.sc = !0, n1 = !0), this.fc !== r1 && (this.fc = r1, this._mdf.fc = !0, n1 = !0), this.m !== a1 && (this.m = a1, this._mdf.m = !0, n1 = !0), s1.length && (this.p[0] !== s1[0] || this.p[1] !== s1[1] || this.p[4] !== s1[4] || this.p[5] !== s1[5] || this.p[12] !== s1[12] || this.p[13] !== s1[13]) && (this.p = s1, this._mdf.p = !0, n1 = !0), n1;
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
                            var r1, a1 = this.effectsSequence.length, s1 = t1 || this.data.d.k[this.keysIndex].s;
                            for(r1 = 0; r1 < a1; r1 += 1)i1 !== this.keysIndex ? s1 = this.effectsSequence[r1](s1, s1.t) : s1 = this.effectsSequence[r1](this.currentData, s1.t);
                            e1 !== s1 && this.setCurrentData(s1), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
                        }
                    }, TextProperty.prototype.getKeyframeValue = function() {
                        for(var t1 = this.data.d.k, e1 = this.elem.comp.renderedFrame, i1 = 0, r1 = t1.length; i1 <= r1 - 1 && !(i1 === r1 - 1 || t1[i1 + 1].t > e1);)i1 += 1;
                        return this.keysIndex !== i1 && (this.keysIndex = i1), this.data.d.k[this.keysIndex].s;
                    }, TextProperty.prototype.buildFinalText = function(t1) {
                        for(var e1 = [], i1 = 0, r1 = t1.length, a1, s1, n1 = !1, h1 = !1, o1 = ""; i1 < r1;)n1 = h1, h1 = !1, a1 = t1.charCodeAt(i1), o1 = t1.charAt(i1), FontManager.isCombinedCharacter(a1) ? n1 = !0 : a1 >= 55296 && a1 <= 56319 ? FontManager.isRegionalFlag(t1, i1) ? o1 = t1.substr(i1, 14) : (s1 = t1.charCodeAt(i1 + 1), s1 >= 56320 && s1 <= 57343 && (FontManager.isModifier(a1, s1) ? (o1 = t1.substr(i1, 2), n1 = !0) : FontManager.isFlagEmoji(t1.substr(i1, 4)) ? o1 = t1.substr(i1, 4) : o1 = t1.substr(i1, 2))) : a1 > 56319 ? (s1 = t1.charCodeAt(i1 + 1), FontManager.isVariationSelector(a1) && (n1 = !0)) : FontManager.isZeroWidthJoiner(a1) && (n1 = !0, h1 = !0), n1 ? (e1[e1.length - 1] += o1, n1 = !1) : e1.push(o1), i1 += o1.length;
                        return e1;
                    }, TextProperty.prototype.completeTextData = function(t1) {
                        t1.__complete = !0;
                        var e1 = this.elem.globalData.fontManager, i1 = this.data, r1 = [], a1, s1, n1, h1 = 0, o1, c1 = i1.m.g, g1 = 0, b1 = 0, f1 = 0, x1 = [], v1 = 0, d1 = 0, A1, m1, l1 = e1.getFontByName(t1.f), p1, u1 = 0, P1 = getFontProperties(l1);
                        t1.fWeight = P1.weight, t1.fStyle = P1.style, t1.finalSize = t1.s, t1.finalText = this.buildFinalText(t1.t), s1 = t1.finalText.length, t1.finalLineHeight = t1.lh;
                        var S1 = t1.tr / 1e3 * t1.finalSize, C1;
                        if (t1.sz) for(var M1 = !0, w1 = t1.sz[0], F1 = t1.sz[1], V1, I1; M1;){
                            I1 = this.buildFinalText(t1.t), V1 = 0, v1 = 0, s1 = I1.length, S1 = t1.tr / 1e3 * t1.finalSize;
                            var L1 = -1;
                            for(a1 = 0; a1 < s1; a1 += 1)C1 = I1[a1].charCodeAt(0), n1 = !1, I1[a1] === " " ? L1 = a1 : (C1 === 13 || C1 === 3) && (v1 = 0, n1 = !0, V1 += t1.finalLineHeight || t1.finalSize * 1.2), e1.chars ? (p1 = e1.getCharData(I1[a1], l1.fStyle, l1.fFamily), u1 = n1 ? 0 : p1.w * t1.finalSize / 100) : u1 = e1.measureText(I1[a1], t1.f, t1.finalSize), v1 + u1 > w1 && I1[a1] !== " " ? (L1 === -1 ? s1 += 1 : a1 = L1, V1 += t1.finalLineHeight || t1.finalSize * 1.2, I1.splice(a1, L1 === a1 ? 1 : 0, "\r"), L1 = -1, v1 = 0) : (v1 += u1, v1 += S1);
                            V1 += l1.ascent * t1.finalSize / 100, this.canResize && t1.finalSize > this.minimumFontSize && F1 < V1 ? (t1.finalSize -= 1, t1.finalLineHeight = t1.finalSize * t1.lh / t1.s) : (t1.finalText = I1, s1 = t1.finalText.length, M1 = !1);
                        }
                        v1 = -S1, u1 = 0;
                        var B1 = 0, R1;
                        for(a1 = 0; a1 < s1; a1 += 1)if (n1 = !1, R1 = t1.finalText[a1], C1 = R1.charCodeAt(0), C1 === 13 || C1 === 3 ? (B1 = 0, x1.push(v1), d1 = v1 > d1 ? v1 : d1, v1 = -2 * S1, o1 = "", n1 = !0, f1 += 1) : o1 = R1, e1.chars ? (p1 = e1.getCharData(R1, l1.fStyle, e1.getFontByName(t1.f).fFamily), u1 = n1 ? 0 : p1.w * t1.finalSize / 100) : u1 = e1.measureText(o1, t1.f, t1.finalSize), R1 === " " ? B1 += u1 + S1 : (v1 += u1 + S1 + B1, B1 = 0), r1.push({
                            l: u1,
                            an: u1,
                            add: g1,
                            n: n1,
                            anIndexes: [],
                            val: o1,
                            line: f1,
                            animatorJustifyOffset: 0
                        }), c1 == 2) {
                            if (g1 += u1, o1 === "" || o1 === " " || a1 === s1 - 1) {
                                for((o1 === "" || o1 === " ") && (g1 -= u1); b1 <= a1;)r1[b1].an = g1, r1[b1].ind = h1, r1[b1].extra = u1, b1 += 1;
                                h1 += 1, g1 = 0;
                            }
                        } else if (c1 == 3) {
                            if (g1 += u1, o1 === "" || a1 === s1 - 1) {
                                for(o1 === "" && (g1 -= u1); b1 <= a1;)r1[b1].an = g1, r1[b1].ind = h1, r1[b1].extra = u1, b1 += 1;
                                g1 = 0, h1 += 1;
                            }
                        } else r1[h1].ind = h1, r1[h1].extra = 0, h1 += 1;
                        if (t1.l = r1, d1 = v1 > d1 ? v1 : d1, x1.push(v1), t1.sz) t1.boxWidth = t1.sz[0], t1.justifyOffset = 0;
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
                        t1.lineWidths = x1;
                        var E1 = i1.a, T1, y1;
                        m1 = E1.length;
                        var _1, k1, D1 = [];
                        for(A1 = 0; A1 < m1; A1 += 1){
                            for(T1 = E1[A1], T1.a.sc && (t1.strokeColorAnim = !0), T1.a.sw && (t1.strokeWidthAnim = !0), (T1.a.fc || T1.a.fh || T1.a.fs || T1.a.fb) && (t1.fillColorAnim = !0), k1 = 0, _1 = T1.s.b, a1 = 0; a1 < s1; a1 += 1)y1 = r1[a1], y1.anIndexes[A1] = k1, (_1 == 1 && y1.val !== "" || _1 == 2 && y1.val !== "" && y1.val !== " " || _1 == 3 && (y1.n || y1.val == " " || a1 == s1 - 1) || _1 == 4 && (y1.n || a1 == s1 - 1)) && (T1.s.rn === 1 && D1.push(k1), k1 += 1);
                            i1.a[A1].s.totalChars = k1;
                            var O1 = -1, z1;
                            if (T1.s.rn === 1) for(a1 = 0; a1 < s1; a1 += 1)y1 = r1[a1], O1 != y1.anIndexes[A1] && (O1 = y1.anIndexes[A1], z1 = D1.splice(Math.floor(Math.random() * D1.length), 1)[0]), y1.anIndexes[A1] = z1;
                        }
                        t1.yOffset = t1.finalLineHeight || t1.finalSize * 1.2, t1.ls = t1.ls || 0, t1.ascent = l1.ascent * t1.finalSize / 100;
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
                        function r1(s1, n1) {
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
                        r1.prototype = {
                            getMult: function(s1) {
                                this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                var n1 = 0, h1 = 0, o1 = 1, c1 = 1;
                                this.ne.v > 0 ? n1 = this.ne.v / 100 : h1 = -this.ne.v / 100, this.xe.v > 0 ? o1 = 1 - this.xe.v / 100 : c1 = 1 + this.xe.v / 100;
                                var g1 = BezierFactory.getBezierEasing(n1, h1, o1, c1).get, b1 = 0, f1 = this.finalS, x1 = this.finalE, v1 = this.data.sh;
                                if (v1 === 2) x1 === f1 ? b1 = s1 >= x1 ? 1 : 0 : b1 = t1(0, e1(.5 / (x1 - f1) + (s1 - f1) / (x1 - f1), 1)), b1 = g1(b1);
                                else if (v1 === 3) x1 === f1 ? b1 = s1 >= x1 ? 0 : 1 : b1 = 1 - t1(0, e1(.5 / (x1 - f1) + (s1 - f1) / (x1 - f1), 1)), b1 = g1(b1);
                                else if (v1 === 4) x1 === f1 ? b1 = 0 : (b1 = t1(0, e1(.5 / (x1 - f1) + (s1 - f1) / (x1 - f1), 1)), b1 < .5 ? b1 *= 2 : b1 = 1 - 2 * (b1 - .5)), b1 = g1(b1);
                                else if (v1 === 5) {
                                    if (x1 === f1) b1 = 0;
                                    else {
                                        var d1 = x1 - f1;
                                        s1 = e1(t1(0, s1 + .5 - f1), x1 - f1);
                                        var A1 = -d1 / 2 + s1, m1 = d1 / 2;
                                        b1 = Math.sqrt(1 - A1 * A1 / (m1 * m1));
                                    }
                                    b1 = g1(b1);
                                } else v1 === 6 ? (x1 === f1 ? b1 = 0 : (s1 = e1(t1(0, s1 + .5 - f1), x1 - f1), b1 = (1 + Math.cos(Math.PI + Math.PI * 2 * s1 / (x1 - f1))) / 2), b1 = g1(b1)) : (s1 >= i1(f1) && (s1 - f1 < 0 ? b1 = t1(0, e1(e1(x1, 1) - (f1 - s1), 1)) : b1 = t1(0, e1(x1 - s1, 1))), b1 = g1(b1));
                                if (this.sm.v !== 100) {
                                    var l1 = this.sm.v * .01;
                                    l1 === 0 && (l1 = 1e-8);
                                    var p1 = .5 - l1 * .5;
                                    b1 < p1 ? b1 = 0 : (b1 = (b1 - p1) / l1, b1 > 1 && (b1 = 1));
                                }
                                return b1 * this.a.v;
                            },
                            getValue: function(s1) {
                                this.iterateDynamicProperties(), this._mdf = s1 || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, s1 && this.data.r === 2 && (this.e.v = this._currentTextLength);
                                var n1 = this.data.r === 2 ? 1 : 100 / this.data.totalChars, h1 = this.o.v / n1, o1 = this.s.v / n1 + h1, c1 = this.e.v / n1 + h1;
                                if (o1 > c1) {
                                    var g1 = o1;
                                    o1 = c1, c1 = g1;
                                }
                                this.finalS = o1, this.finalE = c1;
                            }
                        }, extendPrototype([
                            DynamicPropertyContainer
                        ], r1);
                        function a1(s1, n1, h1) {
                            return new r1(s1, n1);
                        }
                        return {
                            getTextSelectorProp: a1
                        };
                    }();
                    function TextAnimatorDataProperty(t1, e1, i1) {
                        var r1 = {
                            propType: !1
                        }, a1 = PropertyFactory.getProp, s1 = e1.a;
                        this.a = {
                            r: s1.r ? a1(t1, s1.r, 0, degToRads, i1) : r1,
                            rx: s1.rx ? a1(t1, s1.rx, 0, degToRads, i1) : r1,
                            ry: s1.ry ? a1(t1, s1.ry, 0, degToRads, i1) : r1,
                            sk: s1.sk ? a1(t1, s1.sk, 0, degToRads, i1) : r1,
                            sa: s1.sa ? a1(t1, s1.sa, 0, degToRads, i1) : r1,
                            s: s1.s ? a1(t1, s1.s, 1, .01, i1) : r1,
                            a: s1.a ? a1(t1, s1.a, 1, 0, i1) : r1,
                            o: s1.o ? a1(t1, s1.o, 0, .01, i1) : r1,
                            p: s1.p ? a1(t1, s1.p, 1, 0, i1) : r1,
                            sw: s1.sw ? a1(t1, s1.sw, 0, 0, i1) : r1,
                            sc: s1.sc ? a1(t1, s1.sc, 1, 0, i1) : r1,
                            fc: s1.fc ? a1(t1, s1.fc, 1, 0, i1) : r1,
                            fh: s1.fh ? a1(t1, s1.fh, 0, 0, i1) : r1,
                            fs: s1.fs ? a1(t1, s1.fs, 0, .01, i1) : r1,
                            fb: s1.fb ? a1(t1, s1.fb, 0, .01, i1) : r1,
                            t: s1.t ? a1(t1, s1.t, 0, 0, i1) : r1
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
                            var i1 = this._moreOptions.alignment.v, r1 = this._animatorsData, a1 = this._textData, s1 = this.mHelper, n1 = this._renderType, h1 = this.renderedLetters.length, o1, c1, g1, b1, f1 = t1.l, x1, v1, d1, A1, m1, l1, p1, u1, P1, S1, C1, M1, w1, F1, V1;
                            if (this._hasMaskedPath) {
                                if (V1 = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                    var I1 = V1.v;
                                    this._pathData.r.v && (I1 = I1.reverse()), x1 = {
                                        tLength: 0,
                                        segments: []
                                    }, b1 = I1._length - 1;
                                    var L1;
                                    for(M1 = 0, g1 = 0; g1 < b1; g1 += 1)L1 = bez.buildBezierData(I1.v[g1], I1.v[g1 + 1], [
                                        I1.o[g1][0] - I1.v[g1][0],
                                        I1.o[g1][1] - I1.v[g1][1]
                                    ], [
                                        I1.i[g1 + 1][0] - I1.v[g1 + 1][0],
                                        I1.i[g1 + 1][1] - I1.v[g1 + 1][1]
                                    ]), x1.tLength += L1.segmentLength, x1.segments.push(L1), M1 += L1.segmentLength;
                                    g1 = b1, V1.v.c && (L1 = bez.buildBezierData(I1.v[g1], I1.v[0], [
                                        I1.o[g1][0] - I1.v[g1][0],
                                        I1.o[g1][1] - I1.v[g1][1]
                                    ], [
                                        I1.i[0][0] - I1.v[0][0],
                                        I1.i[0][1] - I1.v[0][1]
                                    ]), x1.tLength += L1.segmentLength, x1.segments.push(L1), M1 += L1.segmentLength), this._pathData.pi = x1;
                                }
                                if (x1 = this._pathData.pi, v1 = this._pathData.f.v, p1 = 0, l1 = 1, A1 = 0, m1 = !0, S1 = x1.segments, v1 < 0 && V1.v.c) for(x1.tLength < Math.abs(v1) && (v1 = -Math.abs(v1) % x1.tLength), p1 = S1.length - 1, P1 = S1[p1].points, l1 = P1.length - 1; v1 < 0;)v1 += P1[l1].partialLength, l1 -= 1, l1 < 0 && (p1 -= 1, P1 = S1[p1].points, l1 = P1.length - 1);
                                P1 = S1[p1].points, u1 = P1[l1 - 1], d1 = P1[l1], C1 = d1.partialLength;
                            }
                            b1 = f1.length, o1 = 0, c1 = 0;
                            var B1 = t1.finalSize * 1.2 * .714, R1 = !0, E1, T1, y1, _1, k1;
                            _1 = r1.length;
                            var D1, O1 = -1, z1, H1, N1, q1 = v1, W1 = p1, Y1 = l1, Q1 = -1, J1, $1, Z1, j1, G1, et1, st1, it1, tt1 = "", rt1 = this.defaultPropsArray, at1;
                            if (t1.j === 2 || t1.j === 1) {
                                var X1 = 0, nt1 = 0, ot1 = t1.j === 2 ? -0.5 : -1, K1 = 0, ht1 = !0;
                                for(g1 = 0; g1 < b1; g1 += 1)if (f1[g1].n) {
                                    for(X1 && (X1 += nt1); K1 < g1;)f1[K1].animatorJustifyOffset = X1, K1 += 1;
                                    X1 = 0, ht1 = !0;
                                } else {
                                    for(y1 = 0; y1 < _1; y1 += 1)E1 = r1[y1].a, E1.t.propType && (ht1 && t1.j === 2 && (nt1 += E1.t.v * ot1), T1 = r1[y1].s, D1 = T1.getMult(f1[g1].anIndexes[y1], a1.a[y1].s.totalChars), D1.length ? X1 += E1.t.v * D1[0] * ot1 : X1 += E1.t.v * D1 * ot1);
                                    ht1 = !1;
                                }
                                for(X1 && (X1 += nt1); K1 < g1;)f1[K1].animatorJustifyOffset = X1, K1 += 1;
                            }
                            for(g1 = 0; g1 < b1; g1 += 1){
                                if (s1.reset(), J1 = 1, f1[g1].n) o1 = 0, c1 += t1.yOffset, c1 += R1 ? 1 : 0, v1 = q1, R1 = !1, this._hasMaskedPath && (p1 = W1, l1 = Y1, P1 = S1[p1].points, u1 = P1[l1 - 1], d1 = P1[l1], C1 = d1.partialLength, A1 = 0), tt1 = "", it1 = "", et1 = "", at1 = "", rt1 = this.defaultPropsArray;
                                else {
                                    if (this._hasMaskedPath) {
                                        if (Q1 !== f1[g1].line) {
                                            switch(t1.j){
                                                case 1:
                                                    v1 += M1 - t1.lineWidths[f1[g1].line];
                                                    break;
                                                case 2:
                                                    v1 += (M1 - t1.lineWidths[f1[g1].line]) / 2;
                                                    break;
                                            }
                                            Q1 = f1[g1].line;
                                        }
                                        O1 !== f1[g1].ind && (f1[O1] && (v1 += f1[O1].extra), v1 += f1[g1].an / 2, O1 = f1[g1].ind), v1 += i1[0] * f1[g1].an * .005;
                                        var U1 = 0;
                                        for(y1 = 0; y1 < _1; y1 += 1)E1 = r1[y1].a, E1.p.propType && (T1 = r1[y1].s, D1 = T1.getMult(f1[g1].anIndexes[y1], a1.a[y1].s.totalChars), D1.length ? U1 += E1.p.v[0] * D1[0] : U1 += E1.p.v[0] * D1), E1.a.propType && (T1 = r1[y1].s, D1 = T1.getMult(f1[g1].anIndexes[y1], a1.a[y1].s.totalChars), D1.length ? U1 += E1.a.v[0] * D1[0] : U1 += E1.a.v[0] * D1);
                                        for(m1 = !0, this._pathData.a.v && (v1 = f1[0].an * .5 + (M1 - this._pathData.f.v - f1[0].an * .5 - f1[f1.length - 1].an * .5) * O1 / (b1 - 1), v1 += this._pathData.f.v); m1;)A1 + C1 >= v1 + U1 || !P1 ? (w1 = (v1 + U1 - A1) / d1.partialLength, H1 = u1.point[0] + (d1.point[0] - u1.point[0]) * w1, N1 = u1.point[1] + (d1.point[1] - u1.point[1]) * w1, s1.translate(-i1[0] * f1[g1].an * .005, -(i1[1] * B1) * .01), m1 = !1) : P1 && (A1 += d1.partialLength, l1 += 1, l1 >= P1.length && (l1 = 0, p1 += 1, S1[p1] ? P1 = S1[p1].points : V1.v.c ? (l1 = 0, p1 = 0, P1 = S1[p1].points) : (A1 -= d1.partialLength, P1 = null)), P1 && (u1 = d1, d1 = P1[l1], C1 = d1.partialLength));
                                        z1 = f1[g1].an / 2 - f1[g1].add, s1.translate(-z1, 0, 0);
                                    } else z1 = f1[g1].an / 2 - f1[g1].add, s1.translate(-z1, 0, 0), s1.translate(-i1[0] * f1[g1].an * .005, -i1[1] * B1 * .01, 0);
                                    for(y1 = 0; y1 < _1; y1 += 1)E1 = r1[y1].a, E1.t.propType && (T1 = r1[y1].s, D1 = T1.getMult(f1[g1].anIndexes[y1], a1.a[y1].s.totalChars), (o1 !== 0 || t1.j !== 0) && (this._hasMaskedPath ? D1.length ? v1 += E1.t.v * D1[0] : v1 += E1.t.v * D1 : D1.length ? o1 += E1.t.v * D1[0] : o1 += E1.t.v * D1));
                                    for(t1.strokeWidthAnim && (Z1 = t1.sw || 0), t1.strokeColorAnim && (t1.sc ? $1 = [
                                        t1.sc[0],
                                        t1.sc[1],
                                        t1.sc[2]
                                    ] : $1 = [
                                        0,
                                        0,
                                        0
                                    ]), t1.fillColorAnim && t1.fc && (j1 = [
                                        t1.fc[0],
                                        t1.fc[1],
                                        t1.fc[2]
                                    ]), y1 = 0; y1 < _1; y1 += 1)E1 = r1[y1].a, E1.a.propType && (T1 = r1[y1].s, D1 = T1.getMult(f1[g1].anIndexes[y1], a1.a[y1].s.totalChars), D1.length ? s1.translate(-E1.a.v[0] * D1[0], -E1.a.v[1] * D1[1], E1.a.v[2] * D1[2]) : s1.translate(-E1.a.v[0] * D1, -E1.a.v[1] * D1, E1.a.v[2] * D1));
                                    for(y1 = 0; y1 < _1; y1 += 1)E1 = r1[y1].a, E1.s.propType && (T1 = r1[y1].s, D1 = T1.getMult(f1[g1].anIndexes[y1], a1.a[y1].s.totalChars), D1.length ? s1.scale(1 + (E1.s.v[0] - 1) * D1[0], 1 + (E1.s.v[1] - 1) * D1[1], 1) : s1.scale(1 + (E1.s.v[0] - 1) * D1, 1 + (E1.s.v[1] - 1) * D1, 1));
                                    for(y1 = 0; y1 < _1; y1 += 1){
                                        if (E1 = r1[y1].a, T1 = r1[y1].s, D1 = T1.getMult(f1[g1].anIndexes[y1], a1.a[y1].s.totalChars), E1.sk.propType && (D1.length ? s1.skewFromAxis(-E1.sk.v * D1[0], E1.sa.v * D1[1]) : s1.skewFromAxis(-E1.sk.v * D1, E1.sa.v * D1)), E1.r.propType && (D1.length ? s1.rotateZ(-E1.r.v * D1[2]) : s1.rotateZ(-E1.r.v * D1)), E1.ry.propType && (D1.length ? s1.rotateY(E1.ry.v * D1[1]) : s1.rotateY(E1.ry.v * D1)), E1.rx.propType && (D1.length ? s1.rotateX(E1.rx.v * D1[0]) : s1.rotateX(E1.rx.v * D1)), E1.o.propType && (D1.length ? J1 += (E1.o.v * D1[0] - J1) * D1[0] : J1 += (E1.o.v * D1 - J1) * D1), t1.strokeWidthAnim && E1.sw.propType && (D1.length ? Z1 += E1.sw.v * D1[0] : Z1 += E1.sw.v * D1), t1.strokeColorAnim && E1.sc.propType) for(G1 = 0; G1 < 3; G1 += 1)D1.length ? $1[G1] += (E1.sc.v[G1] - $1[G1]) * D1[0] : $1[G1] += (E1.sc.v[G1] - $1[G1]) * D1;
                                        if (t1.fillColorAnim && t1.fc) {
                                            if (E1.fc.propType) for(G1 = 0; G1 < 3; G1 += 1)D1.length ? j1[G1] += (E1.fc.v[G1] - j1[G1]) * D1[0] : j1[G1] += (E1.fc.v[G1] - j1[G1]) * D1;
                                            E1.fh.propType && (D1.length ? j1 = addHueToRGB(j1, E1.fh.v * D1[0]) : j1 = addHueToRGB(j1, E1.fh.v * D1)), E1.fs.propType && (D1.length ? j1 = addSaturationToRGB(j1, E1.fs.v * D1[0]) : j1 = addSaturationToRGB(j1, E1.fs.v * D1)), E1.fb.propType && (D1.length ? j1 = addBrightnessToRGB(j1, E1.fb.v * D1[0]) : j1 = addBrightnessToRGB(j1, E1.fb.v * D1));
                                        }
                                    }
                                    for(y1 = 0; y1 < _1; y1 += 1)E1 = r1[y1].a, E1.p.propType && (T1 = r1[y1].s, D1 = T1.getMult(f1[g1].anIndexes[y1], a1.a[y1].s.totalChars), this._hasMaskedPath ? D1.length ? s1.translate(0, E1.p.v[1] * D1[0], -E1.p.v[2] * D1[1]) : s1.translate(0, E1.p.v[1] * D1, -E1.p.v[2] * D1) : D1.length ? s1.translate(E1.p.v[0] * D1[0], E1.p.v[1] * D1[1], -E1.p.v[2] * D1[2]) : s1.translate(E1.p.v[0] * D1, E1.p.v[1] * D1, -E1.p.v[2] * D1));
                                    if (t1.strokeWidthAnim && (et1 = Z1 < 0 ? 0 : Z1), t1.strokeColorAnim && (st1 = "rgb(" + Math.round($1[0] * 255) + "," + Math.round($1[1] * 255) + "," + Math.round($1[2] * 255) + ")"), t1.fillColorAnim && t1.fc && (it1 = "rgb(" + Math.round(j1[0] * 255) + "," + Math.round(j1[1] * 255) + "," + Math.round(j1[2] * 255) + ")"), this._hasMaskedPath) {
                                        if (s1.translate(0, -t1.ls), s1.translate(0, i1[1] * B1 * .01 + c1, 0), this._pathData.p.v) {
                                            F1 = (d1.point[1] - u1.point[1]) / (d1.point[0] - u1.point[0]);
                                            var lt1 = Math.atan(F1) * 180 / Math.PI;
                                            d1.point[0] < u1.point[0] && (lt1 += 180), s1.rotate(-lt1 * Math.PI / 180);
                                        }
                                        s1.translate(H1, N1, 0), v1 -= i1[0] * f1[g1].an * .005, f1[g1 + 1] && O1 !== f1[g1 + 1].ind && (v1 += f1[g1].an / 2, v1 += t1.tr * .001 * t1.finalSize);
                                    } else {
                                        switch(s1.translate(o1, c1, 0), t1.ps && s1.translate(t1.ps[0], t1.ps[1] + t1.ascent, 0), t1.j){
                                            case 1:
                                                s1.translate(f1[g1].animatorJustifyOffset + t1.justifyOffset + (t1.boxWidth - t1.lineWidths[f1[g1].line]), 0, 0);
                                                break;
                                            case 2:
                                                s1.translate(f1[g1].animatorJustifyOffset + t1.justifyOffset + (t1.boxWidth - t1.lineWidths[f1[g1].line]) / 2, 0, 0);
                                                break;
                                        }
                                        s1.translate(0, -t1.ls), s1.translate(z1, 0, 0), s1.translate(i1[0] * f1[g1].an * .005, i1[1] * B1 * .01, 0), o1 += f1[g1].l + t1.tr * .001 * t1.finalSize;
                                    }
                                    n1 === "html" ? tt1 = s1.toCSS() : n1 === "svg" ? tt1 = s1.to2dCSS() : rt1 = [
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
                                    ], at1 = J1;
                                }
                                h1 <= g1 ? (k1 = new LetterProps(at1, et1, st1, it1, tt1, rt1), this.renderedLetters.push(k1), h1 += 1, this.lettersChangedFlag = !0) : (k1 = this.renderedLetters[g1], this.lettersChangedFlag = k1.update(at1, et1, st1, it1, tt1, rt1) || this.lettersChangedFlag);
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
                        var i1, r1 = e1.length, a1, s1 = "";
                        for(i1 = 0; i1 < r1; i1 += 1)e1[i1].ty === "sh" && (a1 = e1[i1].ks.k, s1 += buildShapeString(a1, a1.i.length, !0, t1));
                        return s1;
                    }, ITextElement.prototype.updateDocumentData = function(t1, e1) {
                        this.textProperty.updateDocumentData(t1, e1);
                    }, ITextElement.prototype.canResizeFont = function(t1) {
                        this.textProperty.canResizeFont(t1);
                    }, ITextElement.prototype.setMinimumFontSize = function(t1) {
                        this.textProperty.setMinimumFontSize(t1);
                    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t1, e1, i1, r1, a1) {
                        switch(t1.ps && e1.translate(t1.ps[0], t1.ps[1] + t1.ascent, 0), e1.translate(0, -t1.ls, 0), t1.j){
                            case 1:
                                e1.translate(t1.justifyOffset + (t1.boxWidth - t1.lineWidths[i1]), 0, 0);
                                break;
                            case 2:
                                e1.translate(t1.justifyOffset + (t1.boxWidth - t1.lineWidths[i1]) / 2, 0, 0);
                                break;
                        }
                        e1.translate(r1, a1, 0);
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
                        for(var e1 = 0, i1 = t1.length, r1 = [], a1 = ""; e1 < i1;)t1[e1] === String.fromCharCode(13) || t1[e1] === String.fromCharCode(3) ? (r1.push(a1), a1 = "") : a1 += t1[e1], e1 += 1;
                        return r1.push(a1), r1;
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
                            var a1 = i1.fWeight, s1 = i1.fStyle;
                            this.layerElement.setAttribute("font-style", s1), this.layerElement.setAttribute("font-weight", a1);
                        }
                        this.layerElement.setAttribute("aria-label", i1.t);
                        var n1 = i1.l || [], h1 = !!this.globalData.fontManager.chars;
                        e1 = n1.length;
                        var o1, c1 = this.mHelper, g1 = "", b1 = this.data.singleShape, f1 = 0, x1 = 0, v1 = !0, d1 = i1.tr * .001 * i1.finalSize;
                        if (b1 && !h1 && !i1.sz) {
                            var A1 = this.textContainer, m1 = "start";
                            switch(i1.j){
                                case 1:
                                    m1 = "end";
                                    break;
                                case 2:
                                    m1 = "middle";
                                    break;
                                default:
                                    m1 = "start";
                                    break;
                            }
                            A1.setAttribute("text-anchor", m1), A1.setAttribute("letter-spacing", d1);
                            var l1 = this.buildTextContents(i1.finalText);
                            for(e1 = l1.length, x1 = i1.ps ? i1.ps[1] + i1.ascent : 0, t1 = 0; t1 < e1; t1 += 1)o1 = this.textSpans[t1].span || createNS("tspan"), o1.textContent = l1[t1], o1.setAttribute("x", 0), o1.setAttribute("y", x1), o1.style.display = "inherit", A1.appendChild(o1), this.textSpans[t1] || (this.textSpans[t1] = {
                                span: null,
                                glyph: null
                            }), this.textSpans[t1].span = o1, x1 += i1.finalLineHeight;
                            this.layerElement.appendChild(A1);
                        } else {
                            var p1 = this.textSpans.length, u1;
                            for(t1 = 0; t1 < e1; t1 += 1){
                                if (this.textSpans[t1] || (this.textSpans[t1] = {
                                    span: null,
                                    childSpan: null,
                                    glyph: null
                                }), !h1 || !b1 || t1 === 0) {
                                    if (o1 = p1 > t1 ? this.textSpans[t1].span : createNS(h1 ? "g" : "text"), p1 <= t1) {
                                        if (o1.setAttribute("stroke-linecap", "butt"), o1.setAttribute("stroke-linejoin", "round"), o1.setAttribute("stroke-miterlimit", "4"), this.textSpans[t1].span = o1, h1) {
                                            var P1 = createNS("g");
                                            o1.appendChild(P1), this.textSpans[t1].childSpan = P1;
                                        }
                                        this.textSpans[t1].span = o1, this.layerElement.appendChild(o1);
                                    }
                                    o1.style.display = "inherit";
                                }
                                if (c1.reset(), b1 && (n1[t1].n && (f1 = -d1, x1 += i1.yOffset, x1 += v1 ? 1 : 0, v1 = !1), this.applyTextPropertiesToMatrix(i1, c1, n1[t1].line, f1, x1), f1 += n1[t1].l || 0, f1 += d1), h1) {
                                    u1 = this.globalData.fontManager.getCharData(i1.finalText[t1], r1.fStyle, this.globalData.fontManager.getFontByName(i1.f).fFamily);
                                    var S1;
                                    if (u1.t === 1) S1 = new SVGCompElement(u1.data, this.globalData, this);
                                    else {
                                        var C1 = emptyShapeData;
                                        u1.data && u1.data.shapes && (C1 = this.buildShapeData(u1.data, i1.finalSize)), S1 = new SVGShapeElement(C1, this.globalData, this);
                                    }
                                    if (this.textSpans[t1].glyph) {
                                        var M1 = this.textSpans[t1].glyph;
                                        this.textSpans[t1].childSpan.removeChild(M1.layerElement), M1.destroy();
                                    }
                                    this.textSpans[t1].glyph = S1, S1._debug = !0, S1.prepareFrame(0), S1.renderFrame(), this.textSpans[t1].childSpan.appendChild(S1.layerElement), u1.t === 1 && this.textSpans[t1].childSpan.setAttribute("transform", "scale(" + i1.finalSize / 100 + "," + i1.finalSize / 100 + ")");
                                } else b1 && o1.setAttribute("transform", "translate(" + c1.props[12] + "," + c1.props[13] + ")"), o1.textContent = n1[t1].val, o1.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                            }
                            b1 && o1 && o1.setAttribute("d", g1);
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
                            var a1, s1, n1;
                            for(t1 = 0; t1 < e1; t1 += 1)r1[t1].n || (a1 = i1[t1], s1 = this.textSpans[t1].span, n1 = this.textSpans[t1].glyph, n1 && n1.renderFrame(), a1._mdf.m && s1.setAttribute("transform", a1.m), a1._mdf.o && s1.setAttribute("opacity", a1.o), a1._mdf.sw && s1.setAttribute("stroke-width", a1.sw), a1._mdf.sc && s1.setAttribute("stroke", a1.sc), a1._mdf.fc && s1.setAttribute("fill", a1.fc));
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
                        var a1 = createElementID();
                        i1.setAttribute("id", a1), i1.appendChild(r1), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a1 + ")"), e1.appendChild(i1), this.layers = t1.layers, this.elements = createSizedArray(t1.layers.length);
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
                                    var a1 = e1[r1], s1 = a1.getMatte(this.layers[t1].tt);
                                    i1.setMatte(s1);
                                }
                            }
                        }
                    }, SVGRendererBase.prototype.checkPendingElements = function() {
                        for(; this.pendingElements.length;){
                            var t1 = this.pendingElements.pop();
                            if (t1.checkParenting(), t1.data.tt) for(var e1 = 0, i1 = this.elements.length; e1 < i1;){
                                if (this.elements[e1] === t1) {
                                    var r1 = "tp" in t1.data ? this.findIndexByInd(t1.data.tp) : e1 - 1, a1 = this.elements[r1], s1 = a1.getMatte(this.layers[e1].tt);
                                    t1.setMatte(s1);
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
                            for(var r1 = 0, a1; r1 < e1;)this.elements[r1] && this.elements[r1] !== !0 && this.elements[r1].getBaseElement() && (a1 = this.elements[r1].getBaseElement()), r1 += 1;
                            a1 ? this.layerElement.insertBefore(i1, a1) : this.layerElement.appendChild(i1);
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
                            var r1 = createNS("title"), a1 = createElementID();
                            r1.setAttribute("id", a1), r1.textContent = e1.title, this.svgElement.appendChild(r1), i1 += a1;
                        }
                        if (e1 && e1.description) {
                            var s1 = createNS("desc"), n1 = createElementID();
                            s1.setAttribute("id", n1), s1.textContent = e1.description, this.svgElement.appendChild(s1), i1 += " " + n1;
                        }
                        i1 && this.svgElement.setAttribute("aria-labelledby", i1);
                        var h1 = createNS("defs");
                        this.svgElement.appendChild(h1);
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
                            defs: h1,
                            renderConfig: this.renderConfig
                        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
                    }
                    extendPrototype([
                        SVGRendererBase
                    ], SVGRenderer), SVGRenderer.prototype.createComp = function(t1) {
                        return new SVGCompElement(t1, this.globalData, this);
                    };
                    function ShapeTransformManager() {
                        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
                    }
                    ShapeTransformManager.prototype = {
                        addTransformSequence: function(t1) {
                            var e1, i1 = t1.length, r1 = "_";
                            for(e1 = 0; e1 < i1; e1 += 1)r1 += t1[e1].transform.key + "_";
                            var a1 = this.sequences[r1];
                            return a1 || (a1 = {
                                transforms: [].concat(t1),
                                finalTransform: new Matrix,
                                _mdf: !1
                            }, this.sequences[r1] = a1, this.sequenceList.push(a1)), a1;
                        },
                        processSequence: function(t1, e1) {
                            for(var i1 = 0, r1 = t1.transforms.length, a1 = e1; i1 < r1 && !e1;){
                                if (t1.transforms[i1].transform.mProps._mdf) {
                                    a1 = !0;
                                    break;
                                }
                                i1 += 1;
                            }
                            if (a1) for(t1.finalTransform.reset(), i1 = r1 - 1; i1 >= 0; i1 -= 1)t1.finalTransform.multiply(t1.transforms[i1].transform.mProps.v);
                            t1._mdf = a1;
                        },
                        processSequences: function(t1) {
                            var e1, i1 = this.sequenceList.length;
                            for(e1 = 0; e1 < i1; e1 += 1)this.processSequence(this.sequenceList[e1], t1);
                        },
                        getNewKey: function() {
                            return this.transform_key_count += 1, "_" + this.transform_key_count;
                        }
                    };
                    var lumaLoader = function() {
                        var t1 = "__lottie_element_luma_buffer", e1 = null, i1 = null, r1 = null;
                        function a1() {
                            var h1 = createNS("svg"), o1 = createNS("filter"), c1 = createNS("feColorMatrix");
                            return o1.setAttribute("id", t1), c1.setAttribute("type", "matrix"), c1.setAttribute("color-interpolation-filters", "sRGB"), c1.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), o1.appendChild(c1), h1.appendChild(o1), h1.setAttribute("id", t1 + "_svg"), featureSupport.svgLumaHidden && (h1.style.display = "none"), h1;
                        }
                        function s1() {
                            e1 || (r1 = a1(), document.body.appendChild(r1), e1 = createTag("canvas"), i1 = e1.getContext("2d"), i1.filter = "url(#" + t1 + ")", i1.fillStyle = "rgba(0,0,0,0)", i1.fillRect(0, 0, 1, 1));
                        }
                        function n1(h1) {
                            return e1 || s1(), e1.width = h1.width, e1.height = h1.height, i1.filter = "url(#" + t1 + ")", e1;
                        }
                        return {
                            load: s1,
                            get: n1
                        };
                    };
                    function createCanvas(t1, e1) {
                        if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t1, e1);
                        var i1 = createTag("canvas");
                        return i1.width = t1, i1.height = e1, i1;
                    }
                    var assetLoader = function() {
                        return {
                            loadLumaCanvas: lumaLoader.load,
                            getLumaCanvas: lumaLoader.get,
                            createCanvas
                        };
                    }(), registeredEffects = {};
                    function CVEffects(t1) {
                        var e1, i1 = t1.data.ef ? t1.data.ef.length : 0;
                        this.filters = [];
                        var r1;
                        for(e1 = 0; e1 < i1; e1 += 1){
                            r1 = null;
                            var a1 = t1.data.ef[e1].ty;
                            if (registeredEffects[a1]) {
                                var s1 = registeredEffects[a1].effect;
                                r1 = new s1(t1.effectsManager.effectElements[e1], t1);
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
                    function registerEffect(t1, e1) {
                        registeredEffects[t1] = {
                            effect: e1
                        };
                    }
                    function CVMaskElement(t1, e1) {
                        this.data = t1, this.element = e1, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                        var i1, r1 = this.masksProperties.length, a1 = !1;
                        for(i1 = 0; i1 < r1; i1 += 1)this.masksProperties[i1].mode !== "n" && (a1 = !0), this.viewData[i1] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i1], 3);
                        this.hasMasks = a1, a1 && this.element.addRenderableComponent(this);
                    }
                    CVMaskElement.prototype.renderFrame = function() {
                        if (this.hasMasks) {
                            var t1 = this.element.finalTransform.mat, e1 = this.element.canvasContext, i1, r1 = this.masksProperties.length, a1, s1, n1;
                            for(e1.beginPath(), i1 = 0; i1 < r1; i1 += 1)if (this.masksProperties[i1].mode !== "n") {
                                this.masksProperties[i1].inv && (e1.moveTo(0, 0), e1.lineTo(this.element.globalData.compSize.w, 0), e1.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), e1.lineTo(0, this.element.globalData.compSize.h), e1.lineTo(0, 0)), n1 = this.viewData[i1].v, a1 = t1.applyToPointArray(n1.v[0][0], n1.v[0][1], 0), e1.moveTo(a1[0], a1[1]);
                                var h1, o1 = n1._length;
                                for(h1 = 1; h1 < o1; h1 += 1)s1 = t1.applyToTriplePoints(n1.o[h1 - 1], n1.i[h1], n1.v[h1]), e1.bezierCurveTo(s1[0], s1[1], s1[2], s1[3], s1[4], s1[5]);
                                s1 = t1.applyToTriplePoints(n1.o[h1 - 1], n1.i[0], n1.v[0]), e1.bezierCurveTo(s1[0], s1[1], s1[2], s1[3], s1[4], s1[5]);
                            }
                            this.element.globalData.renderer.save(!0), e1.clip();
                        }
                    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                        this.element = null;
                    };
                    function CVBaseElement() {}
                    var operationsMap = {
                        1: "source-in",
                        2: "source-out",
                        3: "source-in",
                        4: "source-out"
                    };
                    CVBaseElement.prototype = {
                        createElements: function() {},
                        initRendererElement: function() {},
                        createContainerElements: function() {
                            if (this.data.tt >= 1) {
                                this.buffers = [];
                                var t1 = this.globalData.canvasContext, e1 = assetLoader.createCanvas(t1.canvas.width, t1.canvas.height);
                                this.buffers.push(e1);
                                var i1 = assetLoader.createCanvas(t1.canvas.width, t1.canvas.height);
                                this.buffers.push(i1), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
                            }
                            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms();
                        },
                        createContent: function() {},
                        setBlendMode: function() {
                            var t1 = this.globalData;
                            if (t1.blendMode !== this.data.bm) {
                                t1.blendMode = this.data.bm;
                                var e1 = getBlendMode(this.data.bm);
                                t1.canvasContext.globalCompositeOperation = e1;
                            }
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                        },
                        hideElement: function() {
                            !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0);
                        },
                        showElement: function() {
                            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
                        },
                        clearCanvas: function(t1) {
                            t1.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
                        },
                        prepareLayer: function() {
                            if (this.data.tt >= 1) {
                                var t1 = this.buffers[0], e1 = t1.getContext("2d");
                                this.clearCanvas(e1), e1.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
                            }
                        },
                        exitLayer: function() {
                            if (this.data.tt >= 1) {
                                var t1 = this.buffers[1], e1 = t1.getContext("2d");
                                this.clearCanvas(e1), e1.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
                                var i1 = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
                                if (i1.renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                                    var r1 = assetLoader.getLumaCanvas(this.canvasContext.canvas), a1 = r1.getContext("2d");
                                    a1.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r1, 0, 0);
                                }
                                this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t1, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
                            }
                        },
                        renderFrame: function(t1) {
                            if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !t1)) {
                                this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                                var e1 = this.data.ty === 0;
                                this.prepareLayer(), this.globalData.renderer.save(e1), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e1), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
                            }
                        },
                        destroy: function() {
                            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
                        },
                        mHelper: new Matrix
                    }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
                    function CVShapeData(t1, e1, i1, r1) {
                        this.styledShapes = [], this.tr = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ];
                        var a1 = 4;
                        e1.ty === "rc" ? a1 = 5 : e1.ty === "el" ? a1 = 6 : e1.ty === "sr" && (a1 = 7), this.sh = ShapePropertyFactory.getShapeProp(t1, e1, a1, t1);
                        var s1, n1 = i1.length, h1;
                        for(s1 = 0; s1 < n1; s1 += 1)i1[s1].closed || (h1 = {
                            transforms: r1.addTransformSequence(i1[s1].transforms),
                            trNodes: []
                        }, this.styledShapes.push(h1), i1[s1].elements.push(h1));
                    }
                    CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
                    function CVShapeElement(t1, e1, i1) {
                        this.shapes = [], this.shapesData = t1.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t1, e1, i1);
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        CVBaseElement,
                        IShapeElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableElement
                    ], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                        opacity: 1,
                        _opMdf: !1
                    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
                    }, CVShapeElement.prototype.createStyleElement = function(t1, e1) {
                        var i1 = {
                            data: t1,
                            type: t1.ty,
                            preTransforms: this.transformsManager.addTransformSequence(e1),
                            transforms: [],
                            elements: [],
                            closed: t1.hd === !0
                        }, r1 = {};
                        if (t1.ty === "fl" || t1.ty === "st" ? (r1.c = PropertyFactory.getProp(this, t1.c, 1, 255, this), r1.c.k || (i1.co = "rgb(" + bmFloor(r1.c.v[0]) + "," + bmFloor(r1.c.v[1]) + "," + bmFloor(r1.c.v[2]) + ")")) : (t1.ty === "gf" || t1.ty === "gs") && (r1.s = PropertyFactory.getProp(this, t1.s, 1, null, this), r1.e = PropertyFactory.getProp(this, t1.e, 1, null, this), r1.h = PropertyFactory.getProp(this, t1.h || {
                            k: 0
                        }, 0, .01, this), r1.a = PropertyFactory.getProp(this, t1.a || {
                            k: 0
                        }, 0, degToRads, this), r1.g = new GradientProperty(this, t1.g, this)), r1.o = PropertyFactory.getProp(this, t1.o, 0, .01, this), t1.ty === "st" || t1.ty === "gs") {
                            if (i1.lc = lineCapEnum[t1.lc || 2], i1.lj = lineJoinEnum[t1.lj || 2], t1.lj == 1 && (i1.ml = t1.ml), r1.w = PropertyFactory.getProp(this, t1.w, 0, null, this), r1.w.k || (i1.wi = r1.w.v), t1.d) {
                                var a1 = new DashProperty(this, t1.d, "canvas", this);
                                r1.d = a1, r1.d.k || (i1.da = r1.d.dashArray, i1.do = r1.d.dashoffset[0]);
                            }
                        } else i1.r = t1.r === 2 ? "evenodd" : "nonzero";
                        return this.stylesList.push(i1), r1.style = i1, r1;
                    }, CVShapeElement.prototype.createGroupElement = function() {
                        var t1 = {
                            it: [],
                            prevViewData: []
                        };
                        return t1;
                    }, CVShapeElement.prototype.createTransformElement = function(t1) {
                        var e1 = {
                            transform: {
                                opacity: 1,
                                _opMdf: !1,
                                key: this.transformsManager.getNewKey(),
                                op: PropertyFactory.getProp(this, t1.o, 0, .01, this),
                                mProps: TransformPropertyFactory.getTransformProperty(this, t1, this)
                            }
                        };
                        return e1;
                    }, CVShapeElement.prototype.createShapeElement = function(t1) {
                        var e1 = new CVShapeData(this, t1, this.stylesList, this.transformsManager);
                        return this.shapes.push(e1), this.addShapeToModifiers(e1), e1;
                    }, CVShapeElement.prototype.reloadShapes = function() {
                        this._isFirstFrame = !0;
                        var t1, e1 = this.itemsData.length;
                        for(t1 = 0; t1 < e1; t1 += 1)this.prevViewData[t1] = this.itemsData[t1];
                        for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e1 = this.dynamicProperties.length, t1 = 0; t1 < e1; t1 += 1)this.dynamicProperties[t1].getValue();
                        this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
                    }, CVShapeElement.prototype.addTransformToStyleList = function(t1) {
                        var e1, i1 = this.stylesList.length;
                        for(e1 = 0; e1 < i1; e1 += 1)this.stylesList[e1].closed || this.stylesList[e1].transforms.push(t1);
                    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                        var t1, e1 = this.stylesList.length;
                        for(t1 = 0; t1 < e1; t1 += 1)this.stylesList[t1].closed || this.stylesList[t1].transforms.pop();
                    }, CVShapeElement.prototype.closeStyles = function(t1) {
                        var e1, i1 = t1.length;
                        for(e1 = 0; e1 < i1; e1 += 1)t1[e1].closed = !0;
                    }, CVShapeElement.prototype.searchShapes = function(t1, e1, i1, r1, a1) {
                        var s1, n1 = t1.length - 1, h1, o1, c1 = [], g1 = [], b1, f1, x1, v1 = [].concat(a1);
                        for(s1 = n1; s1 >= 0; s1 -= 1){
                            if (b1 = this.searchProcessedElement(t1[s1]), b1 ? e1[s1] = i1[b1 - 1] : t1[s1]._shouldRender = r1, t1[s1].ty === "fl" || t1[s1].ty === "st" || t1[s1].ty === "gf" || t1[s1].ty === "gs") b1 ? e1[s1].style.closed = !1 : e1[s1] = this.createStyleElement(t1[s1], v1), c1.push(e1[s1].style);
                            else if (t1[s1].ty === "gr") {
                                if (!b1) e1[s1] = this.createGroupElement(t1[s1]);
                                else for(o1 = e1[s1].it.length, h1 = 0; h1 < o1; h1 += 1)e1[s1].prevViewData[h1] = e1[s1].it[h1];
                                this.searchShapes(t1[s1].it, e1[s1].it, e1[s1].prevViewData, r1, v1);
                            } else t1[s1].ty === "tr" ? (b1 || (x1 = this.createTransformElement(t1[s1]), e1[s1] = x1), v1.push(e1[s1]), this.addTransformToStyleList(e1[s1])) : t1[s1].ty === "sh" || t1[s1].ty === "rc" || t1[s1].ty === "el" || t1[s1].ty === "sr" ? b1 || (e1[s1] = this.createShapeElement(t1[s1])) : t1[s1].ty === "tm" || t1[s1].ty === "rd" || t1[s1].ty === "pb" || t1[s1].ty === "zz" || t1[s1].ty === "op" ? (b1 ? (f1 = e1[s1], f1.closed = !1) : (f1 = ShapeModifiers.getModifier(t1[s1].ty), f1.init(this, t1[s1]), e1[s1] = f1, this.shapeModifiers.push(f1)), g1.push(f1)) : t1[s1].ty === "rp" && (b1 ? (f1 = e1[s1], f1.closed = !0) : (f1 = ShapeModifiers.getModifier(t1[s1].ty), e1[s1] = f1, f1.init(this, t1, s1, e1), this.shapeModifiers.push(f1), r1 = !1), g1.push(f1));
                            this.addProcessedElement(t1[s1], s1 + 1);
                        }
                        for(this.removeTransformFromStyleList(), this.closeStyles(c1), n1 = g1.length, s1 = 0; s1 < n1; s1 += 1)g1[s1].closed = !0;
                    }, CVShapeElement.prototype.renderInnerContent = function() {
                        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
                    }, CVShapeElement.prototype.renderShapeTransform = function(t1, e1) {
                        (t1._opMdf || e1.op._mdf || this._isFirstFrame) && (e1.opacity = t1.opacity, e1.opacity *= e1.op.v, e1._opMdf = !0);
                    }, CVShapeElement.prototype.drawLayer = function() {
                        var t1, e1 = this.stylesList.length, i1, r1, a1, s1, n1, h1, o1 = this.globalData.renderer, c1 = this.globalData.canvasContext, g1, b1;
                        for(t1 = 0; t1 < e1; t1 += 1)if (b1 = this.stylesList[t1], g1 = b1.type, !((g1 === "st" || g1 === "gs") && b1.wi === 0 || !b1.data._shouldRender || b1.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
                            for(o1.save(), n1 = b1.elements, g1 === "st" || g1 === "gs" ? (o1.ctxStrokeStyle(g1 === "st" ? b1.co : b1.grd), o1.ctxLineWidth(b1.wi), o1.ctxLineCap(b1.lc), o1.ctxLineJoin(b1.lj), o1.ctxMiterLimit(b1.ml || 0)) : o1.ctxFillStyle(g1 === "fl" ? b1.co : b1.grd), o1.ctxOpacity(b1.coOp), g1 !== "st" && g1 !== "gs" && c1.beginPath(), o1.ctxTransform(b1.preTransforms.finalTransform.props), r1 = n1.length, i1 = 0; i1 < r1; i1 += 1){
                                for((g1 === "st" || g1 === "gs") && (c1.beginPath(), b1.da && (c1.setLineDash(b1.da), c1.lineDashOffset = b1.do)), h1 = n1[i1].trNodes, s1 = h1.length, a1 = 0; a1 < s1; a1 += 1)h1[a1].t === "m" ? c1.moveTo(h1[a1].p[0], h1[a1].p[1]) : h1[a1].t === "c" ? c1.bezierCurveTo(h1[a1].pts[0], h1[a1].pts[1], h1[a1].pts[2], h1[a1].pts[3], h1[a1].pts[4], h1[a1].pts[5]) : c1.closePath();
                                (g1 === "st" || g1 === "gs") && (o1.ctxStroke(), b1.da && c1.setLineDash(this.dashResetter));
                            }
                            g1 !== "st" && g1 !== "gs" && this.globalData.renderer.ctxFill(b1.r), o1.restore();
                        }
                    }, CVShapeElement.prototype.renderShape = function(t1, e1, i1, r1) {
                        var a1, s1 = e1.length - 1, n1;
                        for(n1 = t1, a1 = s1; a1 >= 0; a1 -= 1)e1[a1].ty === "tr" ? (n1 = i1[a1].transform, this.renderShapeTransform(t1, n1)) : e1[a1].ty === "sh" || e1[a1].ty === "el" || e1[a1].ty === "rc" || e1[a1].ty === "sr" ? this.renderPath(e1[a1], i1[a1]) : e1[a1].ty === "fl" ? this.renderFill(e1[a1], i1[a1], n1) : e1[a1].ty === "st" ? this.renderStroke(e1[a1], i1[a1], n1) : e1[a1].ty === "gf" || e1[a1].ty === "gs" ? this.renderGradientFill(e1[a1], i1[a1], n1) : e1[a1].ty === "gr" ? this.renderShape(n1, e1[a1].it, i1[a1].it) : e1[a1].ty;
                        r1 && this.drawLayer();
                    }, CVShapeElement.prototype.renderStyledShape = function(t1, e1) {
                        if (this._isFirstFrame || e1._mdf || t1.transforms._mdf) {
                            var i1 = t1.trNodes, r1 = e1.paths, a1, s1, n1, h1 = r1._length;
                            i1.length = 0;
                            var o1 = t1.transforms.finalTransform;
                            for(n1 = 0; n1 < h1; n1 += 1){
                                var c1 = r1.shapes[n1];
                                if (c1 && c1.v) {
                                    for(s1 = c1._length, a1 = 1; a1 < s1; a1 += 1)a1 === 1 && i1.push({
                                        t: "m",
                                        p: o1.applyToPointArray(c1.v[0][0], c1.v[0][1], 0)
                                    }), i1.push({
                                        t: "c",
                                        pts: o1.applyToTriplePoints(c1.o[a1 - 1], c1.i[a1], c1.v[a1])
                                    });
                                    s1 === 1 && i1.push({
                                        t: "m",
                                        p: o1.applyToPointArray(c1.v[0][0], c1.v[0][1], 0)
                                    }), c1.c && s1 && (i1.push({
                                        t: "c",
                                        pts: o1.applyToTriplePoints(c1.o[a1 - 1], c1.i[0], c1.v[0])
                                    }), i1.push({
                                        t: "z"
                                    }));
                                }
                            }
                            t1.trNodes = i1;
                        }
                    }, CVShapeElement.prototype.renderPath = function(t1, e1) {
                        if (t1.hd !== !0 && t1._shouldRender) {
                            var i1, r1 = e1.styledShapes.length;
                            for(i1 = 0; i1 < r1; i1 += 1)this.renderStyledShape(e1.styledShapes[i1], e1.sh);
                        }
                    }, CVShapeElement.prototype.renderFill = function(t1, e1, i1) {
                        var r1 = e1.style;
                        (e1.c._mdf || this._isFirstFrame) && (r1.co = "rgb(" + bmFloor(e1.c.v[0]) + "," + bmFloor(e1.c.v[1]) + "," + bmFloor(e1.c.v[2]) + ")"), (e1.o._mdf || i1._opMdf || this._isFirstFrame) && (r1.coOp = e1.o.v * i1.opacity);
                    }, CVShapeElement.prototype.renderGradientFill = function(t1, e1, i1) {
                        var r1 = e1.style, a1;
                        if (!r1.grd || e1.g._mdf || e1.s._mdf || e1.e._mdf || t1.t !== 1 && (e1.h._mdf || e1.a._mdf)) {
                            var s1 = this.globalData.canvasContext, n1 = e1.s.v, h1 = e1.e.v;
                            if (t1.t === 1) a1 = s1.createLinearGradient(n1[0], n1[1], h1[0], h1[1]);
                            else {
                                var o1 = Math.sqrt(Math.pow(n1[0] - h1[0], 2) + Math.pow(n1[1] - h1[1], 2)), c1 = Math.atan2(h1[1] - n1[1], h1[0] - n1[0]), g1 = e1.h.v;
                                g1 >= 1 ? g1 = .99 : g1 <= -1 && (g1 = -0.99);
                                var b1 = o1 * g1, f1 = Math.cos(c1 + e1.a.v) * b1 + n1[0], x1 = Math.sin(c1 + e1.a.v) * b1 + n1[1];
                                a1 = s1.createRadialGradient(f1, x1, 0, n1[0], n1[1], o1);
                            }
                            var v1, d1 = t1.g.p, A1 = e1.g.c, m1 = 1;
                            for(v1 = 0; v1 < d1; v1 += 1)e1.g._hasOpacity && e1.g._collapsable && (m1 = e1.g.o[v1 * 2 + 1]), a1.addColorStop(A1[v1 * 4] / 100, "rgba(" + A1[v1 * 4 + 1] + "," + A1[v1 * 4 + 2] + "," + A1[v1 * 4 + 3] + "," + m1 + ")");
                            r1.grd = a1;
                        }
                        r1.coOp = e1.o.v * i1.opacity;
                    }, CVShapeElement.prototype.renderStroke = function(t1, e1, i1) {
                        var r1 = e1.style, a1 = e1.d;
                        a1 && (a1._mdf || this._isFirstFrame) && (r1.da = a1.dashArray, r1.do = a1.dashoffset[0]), (e1.c._mdf || this._isFirstFrame) && (r1.co = "rgb(" + bmFloor(e1.c.v[0]) + "," + bmFloor(e1.c.v[1]) + "," + bmFloor(e1.c.v[2]) + ")"), (e1.o._mdf || i1._opMdf || this._isFirstFrame) && (r1.coOp = e1.o.v * i1.opacity), (e1.w._mdf || this._isFirstFrame) && (r1.wi = e1.w.v);
                    }, CVShapeElement.prototype.destroy = function() {
                        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
                    };
                    function CVTextElement(t1, e1, i1) {
                        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                            fill: "rgba(0,0,0,0)",
                            stroke: "rgba(0,0,0,0)",
                            sWidth: 0,
                            fValue: ""
                        }, this.initElement(t1, e1, i1);
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        CVBaseElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableElement,
                        ITextElement
                    ], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                        var t1 = this.textProperty.currentData;
                        this.renderedLetters = createSizedArray(t1.l ? t1.l.length : 0);
                        var e1 = !1;
                        t1.fc ? (e1 = !0, this.values.fill = this.buildColor(t1.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e1;
                        var i1 = !1;
                        t1.sc && (i1 = !0, this.values.stroke = this.buildColor(t1.sc), this.values.sWidth = t1.sw);
                        var r1 = this.globalData.fontManager.getFontByName(t1.f), a1, s1, n1 = t1.l, h1 = this.mHelper;
                        this.stroke = i1, this.values.fValue = t1.finalSize + "px " + this.globalData.fontManager.getFontByName(t1.f).fFamily, s1 = t1.finalText.length;
                        var o1, c1, g1, b1, f1, x1, v1, d1, A1, m1, l1 = this.data.singleShape, p1 = t1.tr * .001 * t1.finalSize, u1 = 0, P1 = 0, S1 = !0, C1 = 0;
                        for(a1 = 0; a1 < s1; a1 += 1){
                            o1 = this.globalData.fontManager.getCharData(t1.finalText[a1], r1.fStyle, this.globalData.fontManager.getFontByName(t1.f).fFamily), c1 = o1 && o1.data || {}, h1.reset(), l1 && n1[a1].n && (u1 = -p1, P1 += t1.yOffset, P1 += S1 ? 1 : 0, S1 = !1), f1 = c1.shapes ? c1.shapes[0].it : [], v1 = f1.length, h1.scale(t1.finalSize / 100, t1.finalSize / 100), l1 && this.applyTextPropertiesToMatrix(t1, h1, n1[a1].line, u1, P1), A1 = createSizedArray(v1 - 1);
                            var M1 = 0;
                            for(x1 = 0; x1 < v1; x1 += 1)if (f1[x1].ty === "sh") {
                                for(b1 = f1[x1].ks.k.i.length, d1 = f1[x1].ks.k, m1 = [], g1 = 1; g1 < b1; g1 += 1)g1 === 1 && m1.push(h1.applyToX(d1.v[0][0], d1.v[0][1], 0), h1.applyToY(d1.v[0][0], d1.v[0][1], 0)), m1.push(h1.applyToX(d1.o[g1 - 1][0], d1.o[g1 - 1][1], 0), h1.applyToY(d1.o[g1 - 1][0], d1.o[g1 - 1][1], 0), h1.applyToX(d1.i[g1][0], d1.i[g1][1], 0), h1.applyToY(d1.i[g1][0], d1.i[g1][1], 0), h1.applyToX(d1.v[g1][0], d1.v[g1][1], 0), h1.applyToY(d1.v[g1][0], d1.v[g1][1], 0));
                                m1.push(h1.applyToX(d1.o[g1 - 1][0], d1.o[g1 - 1][1], 0), h1.applyToY(d1.o[g1 - 1][0], d1.o[g1 - 1][1], 0), h1.applyToX(d1.i[0][0], d1.i[0][1], 0), h1.applyToY(d1.i[0][0], d1.i[0][1], 0), h1.applyToX(d1.v[0][0], d1.v[0][1], 0), h1.applyToY(d1.v[0][0], d1.v[0][1], 0)), A1[M1] = m1, M1 += 1;
                            }
                            l1 && (u1 += n1[a1].l, u1 += p1), this.textSpans[C1] ? this.textSpans[C1].elem = A1 : this.textSpans[C1] = {
                                elem: A1
                            }, C1 += 1;
                        }
                    }, CVTextElement.prototype.renderInnerContent = function() {
                        this.validateText();
                        var t1 = this.canvasContext;
                        t1.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                        var e1, i1, r1, a1, s1, n1, h1 = this.textAnimator.renderedLetters, o1 = this.textProperty.currentData.l;
                        i1 = o1.length;
                        var c1, g1 = null, b1 = null, f1 = null, x1, v1, d1 = this.globalData.renderer;
                        for(e1 = 0; e1 < i1; e1 += 1)if (!o1[e1].n) {
                            if (c1 = h1[e1], c1 && (d1.save(), d1.ctxTransform(c1.p), d1.ctxOpacity(c1.o)), this.fill) {
                                for(c1 && c1.fc ? g1 !== c1.fc && (d1.ctxFillStyle(c1.fc), g1 = c1.fc) : g1 !== this.values.fill && (g1 = this.values.fill, d1.ctxFillStyle(this.values.fill)), x1 = this.textSpans[e1].elem, a1 = x1.length, this.globalData.canvasContext.beginPath(), r1 = 0; r1 < a1; r1 += 1)for(v1 = x1[r1], n1 = v1.length, this.globalData.canvasContext.moveTo(v1[0], v1[1]), s1 = 2; s1 < n1; s1 += 6)this.globalData.canvasContext.bezierCurveTo(v1[s1], v1[s1 + 1], v1[s1 + 2], v1[s1 + 3], v1[s1 + 4], v1[s1 + 5]);
                                this.globalData.canvasContext.closePath(), d1.ctxFill();
                            }
                            if (this.stroke) {
                                for(c1 && c1.sw ? f1 !== c1.sw && (f1 = c1.sw, d1.ctxLineWidth(c1.sw)) : f1 !== this.values.sWidth && (f1 = this.values.sWidth, d1.ctxLineWidth(this.values.sWidth)), c1 && c1.sc ? b1 !== c1.sc && (b1 = c1.sc, d1.ctxStrokeStyle(c1.sc)) : b1 !== this.values.stroke && (b1 = this.values.stroke, d1.ctxStrokeStyle(this.values.stroke)), x1 = this.textSpans[e1].elem, a1 = x1.length, this.globalData.canvasContext.beginPath(), r1 = 0; r1 < a1; r1 += 1)for(v1 = x1[r1], n1 = v1.length, this.globalData.canvasContext.moveTo(v1[0], v1[1]), s1 = 2; s1 < n1; s1 += 6)this.globalData.canvasContext.bezierCurveTo(v1[s1], v1[s1 + 1], v1[s1 + 2], v1[s1 + 3], v1[s1 + 4], v1[s1 + 5]);
                                this.globalData.canvasContext.closePath(), d1.ctxStroke();
                            }
                            c1 && this.globalData.renderer.restore();
                        }
                    };
                    function CVImageElement(t1, e1, i1) {
                        this.assetData = e1.getAssetData(t1.refId), this.img = e1.imageLoader.getAsset(this.assetData), this.initElement(t1, e1, i1);
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        CVBaseElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableElement
                    ], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                            var t1 = createTag("canvas");
                            t1.width = this.assetData.w, t1.height = this.assetData.h;
                            var e1 = t1.getContext("2d"), i1 = this.img.width, r1 = this.img.height, a1 = i1 / r1, s1 = this.assetData.w / this.assetData.h, n1, h1, o1 = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                            a1 > s1 && o1 === "xMidYMid slice" || a1 < s1 && o1 !== "xMidYMid slice" ? (h1 = r1, n1 = h1 * s1) : (n1 = i1, h1 = n1 / s1), e1.drawImage(this.img, (i1 - n1) / 2, (r1 - h1) / 2, n1, h1, 0, 0, this.assetData.w, this.assetData.h), this.img = t1;
                        }
                    }, CVImageElement.prototype.renderInnerContent = function() {
                        this.canvasContext.drawImage(this.img, 0, 0);
                    }, CVImageElement.prototype.destroy = function() {
                        this.img = null;
                    };
                    function CVSolidElement(t1, e1, i1) {
                        this.initElement(t1, e1, i1);
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        CVBaseElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableElement
                    ], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                        this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
                    };
                    function CanvasRendererBase() {}
                    extendPrototype([
                        BaseRenderer
                    ], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t1) {
                        return new CVShapeElement(t1, this.globalData, this);
                    }, CanvasRendererBase.prototype.createText = function(t1) {
                        return new CVTextElement(t1, this.globalData, this);
                    }, CanvasRendererBase.prototype.createImage = function(t1) {
                        return new CVImageElement(t1, this.globalData, this);
                    }, CanvasRendererBase.prototype.createSolid = function(t1) {
                        return new CVSolidElement(t1, this.globalData, this);
                    }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t1) {
                        t1[0] === 1 && t1[1] === 0 && t1[4] === 0 && t1[5] === 1 && t1[12] === 0 && t1[13] === 0 || this.canvasContext.transform(t1[0], t1[1], t1[4], t1[5], t1[12], t1[13]);
                    }, CanvasRendererBase.prototype.ctxOpacity = function(t1) {
                        this.canvasContext.globalAlpha *= t1 < 0 ? 0 : t1;
                    }, CanvasRendererBase.prototype.ctxFillStyle = function(t1) {
                        this.canvasContext.fillStyle = t1;
                    }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t1) {
                        this.canvasContext.strokeStyle = t1;
                    }, CanvasRendererBase.prototype.ctxLineWidth = function(t1) {
                        this.canvasContext.lineWidth = t1;
                    }, CanvasRendererBase.prototype.ctxLineCap = function(t1) {
                        this.canvasContext.lineCap = t1;
                    }, CanvasRendererBase.prototype.ctxLineJoin = function(t1) {
                        this.canvasContext.lineJoin = t1;
                    }, CanvasRendererBase.prototype.ctxMiterLimit = function(t1) {
                        this.canvasContext.miterLimit = t1;
                    }, CanvasRendererBase.prototype.ctxFill = function(t1) {
                        this.canvasContext.fill(t1);
                    }, CanvasRendererBase.prototype.ctxFillRect = function(t1, e1, i1, r1) {
                        this.canvasContext.fillRect(t1, e1, i1, r1);
                    }, CanvasRendererBase.prototype.ctxStroke = function() {
                        this.canvasContext.stroke();
                    }, CanvasRendererBase.prototype.reset = function() {
                        if (!this.renderConfig.clearCanvas) {
                            this.canvasContext.restore();
                            return;
                        }
                        this.contextData.reset();
                    }, CanvasRendererBase.prototype.save = function() {
                        this.canvasContext.save();
                    }, CanvasRendererBase.prototype.restore = function(t1) {
                        if (!this.renderConfig.clearCanvas) {
                            this.canvasContext.restore();
                            return;
                        }
                        t1 && (this.globalData.blendMode = "source-over"), this.contextData.restore(t1);
                    }, CanvasRendererBase.prototype.configAnimation = function(t1) {
                        if (this.animationItem.wrapper) {
                            this.animationItem.container = createTag("canvas");
                            var e1 = this.animationItem.container.style;
                            e1.width = "100%", e1.height = "100%";
                            var i1 = "0px 0px 0px";
                            e1.transformOrigin = i1, e1.mozTransformOrigin = i1, e1.webkitTransformOrigin = i1, e1["-webkit-transform"] = i1, e1.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
                        } else this.canvasContext = this.renderConfig.context;
                        this.contextData.setContext(this.canvasContext), this.data = t1, this.layers = t1.layers, this.transformCanvas = {
                            w: t1.w,
                            h: t1.h,
                            sx: 0,
                            sy: 0,
                            tx: 0,
                            ty: 0
                        }, this.setupGlobalData(t1, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t1.layers.length), this.updateContainerSize();
                    }, CanvasRendererBase.prototype.updateContainerSize = function(t1, e1) {
                        this.reset();
                        var i1, r1;
                        t1 ? (i1 = t1, r1 = e1, this.canvasContext.canvas.width = i1, this.canvasContext.canvas.height = r1) : (this.animationItem.wrapper && this.animationItem.container ? (i1 = this.animationItem.wrapper.offsetWidth, r1 = this.animationItem.wrapper.offsetHeight) : (i1 = this.canvasContext.canvas.width, r1 = this.canvasContext.canvas.height), this.canvasContext.canvas.width = i1 * this.renderConfig.dpr, this.canvasContext.canvas.height = r1 * this.renderConfig.dpr);
                        var a1, s1;
                        if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
                            var n1 = this.renderConfig.preserveAspectRatio.split(" "), h1 = n1[1] || "meet", o1 = n1[0] || "xMidYMid", c1 = o1.substr(0, 4), g1 = o1.substr(4);
                            a1 = i1 / r1, s1 = this.transformCanvas.w / this.transformCanvas.h, s1 > a1 && h1 === "meet" || s1 < a1 && h1 === "slice" ? (this.transformCanvas.sx = i1 / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i1 / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = r1 / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = r1 / (this.transformCanvas.h / this.renderConfig.dpr)), c1 === "xMid" && (s1 < a1 && h1 === "meet" || s1 > a1 && h1 === "slice") ? this.transformCanvas.tx = (i1 - this.transformCanvas.w * (r1 / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : c1 === "xMax" && (s1 < a1 && h1 === "meet" || s1 > a1 && h1 === "slice") ? this.transformCanvas.tx = (i1 - this.transformCanvas.w * (r1 / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, g1 === "YMid" && (s1 > a1 && h1 === "meet" || s1 < a1 && h1 === "slice") ? this.transformCanvas.ty = (r1 - this.transformCanvas.h * (i1 / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : g1 === "YMax" && (s1 > a1 && h1 === "meet" || s1 < a1 && h1 === "slice") ? this.transformCanvas.ty = (r1 - this.transformCanvas.h * (i1 / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0;
                        } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = i1 / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r1 / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
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
                    }, CanvasRendererBase.prototype.destroy = function() {
                        this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
                        var t1, e1 = this.layers ? this.layers.length : 0;
                        for(t1 = e1 - 1; t1 >= 0; t1 -= 1)this.elements[t1] && this.elements[t1].destroy && this.elements[t1].destroy();
                        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
                    }, CanvasRendererBase.prototype.renderFrame = function(t1, e1) {
                        if (!(this.renderedFrame === t1 && this.renderConfig.clearCanvas === !0 && !e1 || this.destroyed || t1 === -1)) {
                            this.renderedFrame = t1, this.globalData.frameNum = t1 - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e1, this.globalData.projectInterface.currentFrame = t1;
                            var i1, r1 = this.layers.length;
                            for(this.completeLayers || this.checkLayers(t1), i1 = r1 - 1; i1 >= 0; i1 -= 1)(this.completeLayers || this.elements[i1]) && this.elements[i1].prepareFrame(t1 - this.layers[i1].st);
                            if (this.globalData._mdf) {
                                for(this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i1 = r1 - 1; i1 >= 0; i1 -= 1)(this.completeLayers || this.elements[i1]) && this.elements[i1].renderFrame();
                                this.renderConfig.clearCanvas !== !0 && this.restore();
                            }
                        }
                    }, CanvasRendererBase.prototype.buildItem = function(t1) {
                        var e1 = this.elements;
                        if (!(e1[t1] || this.layers[t1].ty === 99)) {
                            var i1 = this.createItem(this.layers[t1], this, this.globalData);
                            e1[t1] = i1, i1.initExpressions();
                        }
                    }, CanvasRendererBase.prototype.checkPendingElements = function() {
                        for(; this.pendingElements.length;){
                            var t1 = this.pendingElements.pop();
                            t1.checkParenting();
                        }
                    }, CanvasRendererBase.prototype.hide = function() {
                        this.animationItem.container.style.display = "none";
                    }, CanvasRendererBase.prototype.show = function() {
                        this.animationItem.container.style.display = "block";
                    };
                    function CanvasContext() {
                        this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
                    }
                    function CVContextData() {
                        this.stack = [], this.cArrPos = 0, this.cTr = new Matrix;
                        var t1, e1 = 15;
                        for(t1 = 0; t1 < e1; t1 += 1){
                            var i1 = new CanvasContext;
                            this.stack[t1] = i1;
                        }
                        this._length = e1, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
                    }
                    CVContextData.prototype.duplicate = function() {
                        var t1 = this._length * 2, e1 = 0;
                        for(e1 = this._length; e1 < t1; e1 += 1)this.stack[e1] = new CanvasContext;
                        this._length = t1;
                    }, CVContextData.prototype.reset = function() {
                        this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
                    }, CVContextData.prototype.restore = function(t1) {
                        this.cArrPos -= 1;
                        var e1 = this.stack[this.cArrPos], i1 = e1.transform, r1, a1 = this.cTr.props;
                        for(r1 = 0; r1 < 16; r1 += 1)a1[r1] = i1[r1];
                        if (t1) {
                            this.nativeContext.restore();
                            var s1 = this.stack[this.cArrPos + 1];
                            this.appliedFillStyle = s1.fillStyle, this.appliedStrokeStyle = s1.strokeStyle, this.appliedLineWidth = s1.lineWidth, this.appliedLineCap = s1.lineCap, this.appliedLineJoin = s1.lineJoin, this.appliedMiterLimit = s1.miterLimit;
                        }
                        this.nativeContext.setTransform(i1[0], i1[1], i1[4], i1[5], i1[12], i1[13]), (t1 || e1.opacity !== -1 && this.currentOpacity !== e1.opacity) && (this.nativeContext.globalAlpha = e1.opacity, this.currentOpacity = e1.opacity), this.currentFillStyle = e1.fillStyle, this.currentStrokeStyle = e1.strokeStyle, this.currentLineWidth = e1.lineWidth, this.currentLineCap = e1.lineCap, this.currentLineJoin = e1.lineJoin, this.currentMiterLimit = e1.miterLimit;
                    }, CVContextData.prototype.save = function(t1) {
                        t1 && this.nativeContext.save();
                        var e1 = this.cTr.props;
                        this._length <= this.cArrPos && this.duplicate();
                        var i1 = this.stack[this.cArrPos], r1;
                        for(r1 = 0; r1 < 16; r1 += 1)i1.transform[r1] = e1[r1];
                        this.cArrPos += 1;
                        var a1 = this.stack[this.cArrPos];
                        a1.opacity = i1.opacity, a1.fillStyle = i1.fillStyle, a1.strokeStyle = i1.strokeStyle, a1.lineWidth = i1.lineWidth, a1.lineCap = i1.lineCap, a1.lineJoin = i1.lineJoin, a1.miterLimit = i1.miterLimit;
                    }, CVContextData.prototype.setOpacity = function(t1) {
                        this.stack[this.cArrPos].opacity = t1;
                    }, CVContextData.prototype.setContext = function(t1) {
                        this.nativeContext = t1;
                    }, CVContextData.prototype.fillStyle = function(t1) {
                        this.stack[this.cArrPos].fillStyle !== t1 && (this.currentFillStyle = t1, this.stack[this.cArrPos].fillStyle = t1);
                    }, CVContextData.prototype.strokeStyle = function(t1) {
                        this.stack[this.cArrPos].strokeStyle !== t1 && (this.currentStrokeStyle = t1, this.stack[this.cArrPos].strokeStyle = t1);
                    }, CVContextData.prototype.lineWidth = function(t1) {
                        this.stack[this.cArrPos].lineWidth !== t1 && (this.currentLineWidth = t1, this.stack[this.cArrPos].lineWidth = t1);
                    }, CVContextData.prototype.lineCap = function(t1) {
                        this.stack[this.cArrPos].lineCap !== t1 && (this.currentLineCap = t1, this.stack[this.cArrPos].lineCap = t1);
                    }, CVContextData.prototype.lineJoin = function(t1) {
                        this.stack[this.cArrPos].lineJoin !== t1 && (this.currentLineJoin = t1, this.stack[this.cArrPos].lineJoin = t1);
                    }, CVContextData.prototype.miterLimit = function(t1) {
                        this.stack[this.cArrPos].miterLimit !== t1 && (this.currentMiterLimit = t1, this.stack[this.cArrPos].miterLimit = t1);
                    }, CVContextData.prototype.transform = function(t1) {
                        this.transformMat.cloneFromProps(t1);
                        var e1 = this.cTr;
                        this.transformMat.multiply(e1), e1.cloneFromProps(this.transformMat.props);
                        var i1 = e1.props;
                        this.nativeContext.setTransform(i1[0], i1[1], i1[4], i1[5], i1[12], i1[13]);
                    }, CVContextData.prototype.opacity = function(t1) {
                        var e1 = this.stack[this.cArrPos].opacity;
                        e1 *= t1 < 0 ? 0 : t1, this.stack[this.cArrPos].opacity !== e1 && (this.currentOpacity !== t1 && (this.nativeContext.globalAlpha = t1, this.currentOpacity = t1), this.stack[this.cArrPos].opacity = e1);
                    }, CVContextData.prototype.fill = function(t1) {
                        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t1);
                    }, CVContextData.prototype.fillRect = function(t1, e1, i1, r1) {
                        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t1, e1, i1, r1);
                    }, CVContextData.prototype.stroke = function() {
                        this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
                    };
                    function CVCompElement(t1, e1, i1) {
                        this.completeLayers = !1, this.layers = t1.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t1, e1, i1), this.tm = t1.tm ? PropertyFactory.getProp(this, t1.tm, 0, e1.frameRate, this) : {
                            _placeholder: !0
                        };
                    }
                    extendPrototype([
                        CanvasRendererBase,
                        ICompElement,
                        CVBaseElement
                    ], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                        var t1 = this.canvasContext;
                        t1.beginPath(), t1.moveTo(0, 0), t1.lineTo(this.data.w, 0), t1.lineTo(this.data.w, this.data.h), t1.lineTo(0, this.data.h), t1.lineTo(0, 0), t1.clip();
                        var e1, i1 = this.layers.length;
                        for(e1 = i1 - 1; e1 >= 0; e1 -= 1)(this.completeLayers || this.elements[e1]) && this.elements[e1].renderFrame();
                    }, CVCompElement.prototype.destroy = function() {
                        var t1, e1 = this.layers.length;
                        for(t1 = e1 - 1; t1 >= 0; t1 -= 1)this.elements[t1] && this.elements[t1].destroy();
                        this.layers = null, this.elements = null;
                    }, CVCompElement.prototype.createComp = function(t1) {
                        return new CVCompElement(t1, this.globalData, this);
                    };
                    function CanvasRenderer(t1, e1) {
                        this.animationItem = t1, this.renderConfig = {
                            clearCanvas: e1 && e1.clearCanvas !== void 0 ? e1.clearCanvas : !0,
                            context: e1 && e1.context || null,
                            progressiveLoad: e1 && e1.progressiveLoad || !1,
                            preserveAspectRatio: e1 && e1.preserveAspectRatio || "xMidYMid meet",
                            imagePreserveAspectRatio: e1 && e1.imagePreserveAspectRatio || "xMidYMid slice",
                            contentVisibility: e1 && e1.contentVisibility || "visible",
                            className: e1 && e1.className || "",
                            id: e1 && e1.id || "",
                            runExpressions: !e1 || e1.runExpressions === void 0 || e1.runExpressions
                        }, this.renderConfig.dpr = e1 && e1.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e1 && e1.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                            frameNum: -1,
                            _mdf: !1,
                            renderConfig: this.renderConfig,
                            currentGlobalAlpha: -1
                        }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
                    }
                    extendPrototype([
                        CanvasRendererBase
                    ], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t1) {
                        return new CVCompElement(t1, this.globalData, this);
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
                        var i1 = t1.sh.v, r1 = t1.transformers, a1, s1 = i1._length, n1, h1, o1, c1;
                        if (!(s1 <= 1)) {
                            for(a1 = 0; a1 < s1 - 1; a1 += 1)n1 = this.getTransformedPoint(r1, i1.v[a1]), h1 = this.getTransformedPoint(r1, i1.o[a1]), o1 = this.getTransformedPoint(r1, i1.i[a1 + 1]), c1 = this.getTransformedPoint(r1, i1.v[a1 + 1]), this.checkBounds(n1, h1, o1, c1, e1);
                            i1.c && (n1 = this.getTransformedPoint(r1, i1.v[a1]), h1 = this.getTransformedPoint(r1, i1.o[a1]), o1 = this.getTransformedPoint(r1, i1.i[0]), c1 = this.getTransformedPoint(r1, i1.v[0]), this.checkBounds(n1, h1, o1, c1, e1));
                        }
                    }, HShapeElement.prototype.checkBounds = function(t1, e1, i1, r1, a1) {
                        this.getBoundsOfCurve(t1, e1, i1, r1);
                        var s1 = this.shapeBoundingBox;
                        a1.x = bmMin(s1.left, a1.x), a1.xMax = bmMax(s1.right, a1.xMax), a1.y = bmMin(s1.top, a1.y), a1.yMax = bmMax(s1.bottom, a1.yMax);
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
                        for(var a1 = [
                            [
                                t1[0],
                                r1[0]
                            ],
                            [
                                t1[1],
                                r1[1]
                            ]
                        ], s1, n1, h1, o1, c1, g1, b1, f1 = 0; f1 < 2; ++f1)n1 = 6 * t1[f1] - 12 * e1[f1] + 6 * i1[f1], s1 = -3 * t1[f1] + 9 * e1[f1] - 9 * i1[f1] + 3 * r1[f1], h1 = 3 * e1[f1] - 3 * t1[f1], n1 |= 0, s1 |= 0, h1 |= 0, s1 === 0 && n1 === 0 || (s1 === 0 ? (o1 = -h1 / n1, o1 > 0 && o1 < 1 && a1[f1].push(this.calculateF(o1, t1, e1, i1, r1, f1))) : (c1 = n1 * n1 - 4 * h1 * s1, c1 >= 0 && (g1 = (-n1 + bmSqrt(c1)) / (2 * s1), g1 > 0 && g1 < 1 && a1[f1].push(this.calculateF(g1, t1, e1, i1, r1, f1)), b1 = (-n1 - bmSqrt(c1)) / (2 * s1), b1 > 0 && b1 < 1 && a1[f1].push(this.calculateF(b1, t1, e1, i1, r1, f1)))));
                        this.shapeBoundingBox.left = bmMin.apply(null, a1[0]), this.shapeBoundingBox.top = bmMin.apply(null, a1[1]), this.shapeBoundingBox.right = bmMax.apply(null, a1[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, a1[1]);
                    }, HShapeElement.prototype.calculateF = function(t1, e1, i1, r1, a1, s1) {
                        return bmPow(1 - t1, 3) * e1[s1] + 3 * bmPow(1 - t1, 2) * t1 * i1[s1] + 3 * (1 - t1) * bmPow(t1, 2) * r1[s1] + bmPow(t1, 3) * a1[s1];
                    }, HShapeElement.prototype.calculateBoundingBox = function(t1, e1) {
                        var i1, r1 = t1.length;
                        for(i1 = 0; i1 < r1; i1 += 1)t1[i1] && t1[i1].sh ? this.calculateShapeBoundingBox(t1[i1], e1) : t1[i1] && t1[i1].it ? this.calculateBoundingBox(t1[i1].it, e1) : t1[i1] && t1[i1].style && t1[i1].w && this.expandStrokeBoundingBox(t1[i1].w, e1);
                    }, HShapeElement.prototype.expandStrokeBoundingBox = function(t1, e1) {
                        var i1 = 0;
                        if (t1.keyframes) {
                            for(var r1 = 0; r1 < t1.keyframes.length; r1 += 1){
                                var a1 = t1.keyframes[r1].s;
                                a1 > i1 && (i1 = a1);
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
                                var r1 = this.shapeCont.style, a1 = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                r1.transform = a1, r1.webkitTransform = a1;
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
                                var a1 = t1.fWeight, s1 = t1.fStyle;
                                e1.fontStyle = s1, e1.fontWeight = a1;
                            }
                        }
                        var n1, h1, o1 = t1.l;
                        h1 = o1.length;
                        var c1, g1, b1, f1 = this.mHelper, x1, v1 = "", d1 = 0;
                        for(n1 = 0; n1 < h1; n1 += 1){
                            if (this.globalData.fontManager.chars ? (this.textPaths[d1] ? c1 = this.textPaths[d1] : (c1 = createNS("path"), c1.setAttribute("stroke-linecap", lineCapEnum[1]), c1.setAttribute("stroke-linejoin", lineJoinEnum[2]), c1.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d1] ? (g1 = this.textSpans[d1], b1 = g1.children[0]) : (g1 = createTag("div"), g1.style.lineHeight = 0, b1 = createNS("svg"), b1.appendChild(c1), styleDiv(g1)))) : this.isMasked ? c1 = this.textPaths[d1] ? this.textPaths[d1] : createNS("text") : this.textSpans[d1] ? (g1 = this.textSpans[d1], c1 = this.textPaths[d1]) : (g1 = createTag("span"), styleDiv(g1), c1 = createTag("span"), styleDiv(c1), g1.appendChild(c1)), this.globalData.fontManager.chars) {
                                var A1 = this.globalData.fontManager.getCharData(t1.finalText[n1], r1.fStyle, this.globalData.fontManager.getFontByName(t1.f).fFamily), m1;
                                if (A1 ? m1 = A1.data : m1 = null, f1.reset(), m1 && m1.shapes && m1.shapes.length && (x1 = m1.shapes[0].it, f1.scale(t1.finalSize / 100, t1.finalSize / 100), v1 = this.createPathShape(f1, x1), c1.setAttribute("d", v1)), this.isMasked) this.innerElem.appendChild(c1);
                                else {
                                    if (this.innerElem.appendChild(g1), m1 && m1.shapes) {
                                        document.body.appendChild(b1);
                                        var l1 = b1.getBBox();
                                        b1.setAttribute("width", l1.width + 2), b1.setAttribute("height", l1.height + 2), b1.setAttribute("viewBox", l1.x - 1 + " " + (l1.y - 1) + " " + (l1.width + 2) + " " + (l1.height + 2));
                                        var p1 = b1.style, u1 = "translate(" + (l1.x - 1) + "px," + (l1.y - 1) + "px)";
                                        p1.transform = u1, p1.webkitTransform = u1, o1[n1].yOffset = l1.y - 1;
                                    } else b1.setAttribute("width", 1), b1.setAttribute("height", 1);
                                    g1.appendChild(b1);
                                }
                            } else if (c1.textContent = o1[n1].val, c1.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(c1);
                            else {
                                this.innerElem.appendChild(g1);
                                var P1 = c1.style, S1 = "translate3d(0," + -t1.finalSize / 1.2 + "px,0)";
                                P1.transform = S1, P1.webkitTransform = S1;
                            }
                            this.isMasked ? this.textSpans[d1] = c1 : this.textSpans[d1] = g1, this.textSpans[d1].style.display = "block", this.textPaths[d1] = c1, d1 += 1;
                        }
                        for(; d1 < this.textSpans.length;)this.textSpans[d1].style.display = "none", d1 += 1;
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
                            var i1, r1, a1 = 0, s1 = this.textAnimator.renderedLetters, n1 = this.textProperty.currentData.l;
                            r1 = n1.length;
                            var h1, o1, c1;
                            for(i1 = 0; i1 < r1; i1 += 1)n1[i1].n ? a1 += 1 : (o1 = this.textSpans[i1], c1 = this.textPaths[i1], h1 = s1[a1], a1 += 1, h1._mdf.m && (this.isMasked ? o1.setAttribute("transform", h1.m) : (o1.style.webkitTransform = h1.m, o1.style.transform = h1.m)), o1.style.opacity = h1.o, h1.sw && h1._mdf.sw && c1.setAttribute("stroke-width", h1.sw), h1.sc && h1._mdf.sc && c1.setAttribute("stroke", h1.sc), h1.fc && h1._mdf.fc && (c1.setAttribute("fill", h1.fc), c1.style.color = h1.fc));
                            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                                var g1 = this.innerElem.getBBox();
                                this.currentBBox.w !== g1.width && (this.currentBBox.w = g1.width, this.svgElement.setAttribute("width", g1.width)), this.currentBBox.h !== g1.height && (this.currentBBox.h = g1.height, this.svgElement.setAttribute("height", g1.height));
                                var b1 = 1;
                                if (this.currentBBox.w !== g1.width + b1 * 2 || this.currentBBox.h !== g1.height + b1 * 2 || this.currentBBox.x !== g1.x - b1 || this.currentBBox.y !== g1.y - b1) {
                                    this.currentBBox.w = g1.width + b1 * 2, this.currentBBox.h = g1.height + b1 * 2, this.currentBBox.x = g1.x - b1, this.currentBBox.y = g1.y - b1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t1 = this.svgElement.style;
                                    var f1 = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                    t1.transform = f1, t1.webkitTransform = f1;
                                }
                            }
                        }
                    };
                    function HCameraElement(t1, e1, i1) {
                        this.initFrame(), this.initBaseData(t1, e1, i1), this.initHierarchy();
                        var r1 = PropertyFactory.getProp;
                        if (this.pe = r1(this, t1.pe, 0, 0, this), t1.ks.p.s ? (this.px = r1(this, t1.ks.p.x, 1, 0, this), this.py = r1(this, t1.ks.p.y, 1, 0, this), this.pz = r1(this, t1.ks.p.z, 1, 0, this)) : this.p = r1(this, t1.ks.p, 1, 0, this), t1.ks.a && (this.a = r1(this, t1.ks.a, 1, 0, this)), t1.ks.or.k.length && t1.ks.or.k[0].to) {
                            var a1, s1 = t1.ks.or.k.length;
                            for(a1 = 0; a1 < s1; a1 += 1)t1.ks.or.k[a1].to = null, t1.ks.or.k[a1].ti = null;
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
                        var t1, e1 = this.comp.threeDElements.length, i1, r1, a1;
                        for(t1 = 0; t1 < e1; t1 += 1)if (i1 = this.comp.threeDElements[t1], i1.type === "3d") {
                            r1 = i1.perspectiveElem.style, a1 = i1.container.style;
                            var s1 = this.pe.v + "px", n1 = "0px 0px 0px", h1 = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            r1.perspective = s1, r1.webkitPerspective = s1, a1.transformOrigin = n1, a1.mozTransformOrigin = n1, a1.webkitTransformOrigin = n1, r1.transform = h1, r1.webkitTransform = h1;
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
                                var a1;
                                this.p ? a1 = [
                                    this.p.v[0] - this.a.v[0],
                                    this.p.v[1] - this.a.v[1],
                                    this.p.v[2] - this.a.v[2]
                                ] : a1 = [
                                    this.px.v - this.a.v[0],
                                    this.py.v - this.a.v[1],
                                    this.pz.v - this.a.v[2]
                                ];
                                var s1 = Math.sqrt(Math.pow(a1[0], 2) + Math.pow(a1[1], 2) + Math.pow(a1[2], 2)), n1 = [
                                    a1[0] / s1,
                                    a1[1] / s1,
                                    a1[2] / s1
                                ], h1 = Math.sqrt(n1[2] * n1[2] + n1[0] * n1[0]), o1 = Math.atan2(n1[1], h1), c1 = Math.atan2(n1[0], -n1[2]);
                                this.mat.rotateY(c1).rotateX(-o1);
                            }
                            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                            var g1 = !this._prevMat.equals(this.mat);
                            if ((g1 || this.pe._mdf) && this.comp.threeDElements) {
                                i1 = this.comp.threeDElements.length;
                                var b1, f1, x1;
                                for(e1 = 0; e1 < i1; e1 += 1)if (b1 = this.comp.threeDElements[e1], b1.type === "3d") {
                                    if (g1) {
                                        var v1 = this.mat.toCSS();
                                        x1 = b1.container.style, x1.transform = v1, x1.webkitTransform = v1;
                                    }
                                    this.pe._mdf && (f1 = b1.perspectiveElem.style, f1.perspective = this.pe.v + "px", f1.webkitPerspective = this.pe.v + "px");
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
                                    for(var a1 = 0, s1, n1, h1; a1 < e1;)this.elements[a1] && this.elements[a1] !== !0 && this.elements[a1].getBaseElement && (n1 = this.elements[a1], h1 = this.layers[a1].ddd ? this.getThreeDContainerByPos(a1) : n1.getBaseElement(), s1 = h1 || s1), a1 += 1;
                                    s1 ? (!r1.ddd || !this.supports3d) && this.layerElement.insertBefore(i1, s1) : (!r1.ddd || !this.supports3d) && this.layerElement.appendChild(i1);
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
                        var i1 = createTag("div"), r1, a1;
                        styleDiv(i1);
                        var s1 = createTag("div");
                        if (styleDiv(s1), e1 === "3d") {
                            r1 = i1.style, r1.width = this.globalData.compSize.w + "px", r1.height = this.globalData.compSize.h + "px";
                            var n1 = "50% 50%";
                            r1.webkitTransformOrigin = n1, r1.mozTransformOrigin = n1, r1.transformOrigin = n1, a1 = s1.style;
                            var h1 = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            a1.transform = h1, a1.webkitTransform = h1;
                        }
                        i1.appendChild(s1);
                        var o1 = {
                            container: s1,
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
                                for(var a1 = this.threeDElements[i1].startPos, s1; a1 < e1;)this.elements[a1] && this.elements[a1].getBaseElement && (s1 = this.elements[a1].getBaseElement()), a1 += 1;
                                s1 ? this.threeDElements[i1].container.insertBefore(t1, s1) : this.threeDElements[i1].container.appendChild(t1);
                                break;
                            }
                            i1 += 1;
                        }
                    }, HybridRendererBase.prototype.configAnimation = function(t1) {
                        var e1 = createTag("div"), i1 = this.animationItem.wrapper, r1 = e1.style;
                        r1.width = t1.w + "px", r1.height = t1.h + "px", this.resizerElem = e1, styleDiv(e1), r1.transformStyle = "flat", r1.mozTransformStyle = "flat", r1.webkitTransformStyle = "flat", this.renderConfig.className && e1.setAttribute("class", this.renderConfig.className), i1.appendChild(e1), r1.overflow = "hidden";
                        var a1 = createNS("svg");
                        a1.setAttribute("width", "1"), a1.setAttribute("height", "1"), styleDiv(a1), this.resizerElem.appendChild(a1);
                        var s1 = createNS("defs");
                        a1.appendChild(s1), this.data = t1, this.setupGlobalData(t1, a1), this.globalData.defs = s1, this.layers = t1.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
                    }, HybridRendererBase.prototype.destroy = function() {
                        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                        var t1, e1 = this.layers ? this.layers.length : 0;
                        for(t1 = 0; t1 < e1; t1 += 1)this.elements[t1] && this.elements[t1].destroy && this.elements[t1].destroy();
                        this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
                    }, HybridRendererBase.prototype.updateContainerSize = function() {
                        var t1 = this.animationItem.wrapper.offsetWidth, e1 = this.animationItem.wrapper.offsetHeight, i1 = t1 / e1, r1 = this.globalData.compSize.w / this.globalData.compSize.h, a1, s1, n1, h1;
                        r1 > i1 ? (a1 = t1 / this.globalData.compSize.w, s1 = t1 / this.globalData.compSize.w, n1 = 0, h1 = (e1 - this.globalData.compSize.h * (t1 / this.globalData.compSize.w)) / 2) : (a1 = e1 / this.globalData.compSize.h, s1 = e1 / this.globalData.compSize.h, n1 = (t1 - this.globalData.compSize.w * (e1 / this.globalData.compSize.h)) / 2, h1 = 0);
                        var o1 = this.resizerElem.style;
                        o1.webkitTransform = "matrix3d(" + a1 + ",0,0,0,0," + s1 + ",0,0,0,0,1,0," + n1 + "," + h1 + ",0,1)", o1.transform = o1.webkitTransform;
                    }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
                        this.resizerElem.style.display = "none";
                    }, HybridRendererBase.prototype.show = function() {
                        this.resizerElem.style.display = "block";
                    }, HybridRendererBase.prototype.initItems = function() {
                        if (this.buildAllItems(), this.camera) this.camera.setup();
                        else {
                            var t1 = this.globalData.compSize.w, e1 = this.globalData.compSize.h, i1, r1 = this.threeDElements.length;
                            for(i1 = 0; i1 < r1; i1 += 1){
                                var a1 = this.threeDElements[i1].perspectiveElem.style;
                                a1.webkitPerspective = Math.sqrt(Math.pow(t1, 2) + Math.pow(e1, 2)) + "px", a1.perspective = a1.webkitPerspective;
                            }
                        }
                    }, HybridRendererBase.prototype.searchExtraCompositions = function(t1) {
                        var e1, i1 = t1.length, r1 = createTag("div");
                        for(e1 = 0; e1 < i1; e1 += 1)if (t1[e1].xt) {
                            var a1 = this.createComp(t1[e1], r1, this.globalData.comp, null);
                            a1.initExpressions(), this.globalData.projectInterface.registerComposition(a1);
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
                    };
                    var CompExpressionInterface = function() {
                        return function(t1) {
                            function e1(i1) {
                                for(var r1 = 0, a1 = t1.layers.length; r1 < a1;){
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
                        var i1 = this, r1 = 256, a1 = 6, s1 = 52, n1 = "random", h1 = e1.pow(r1, a1), o1 = e1.pow(2, s1), c1 = o1 * 2, g1 = r1 - 1;
                        function f1(p1, u1, P1) {
                            var S1 = [];
                            u1 = u1 === !0 ? {
                                entropy: !0
                            } : u1 || {};
                            var C1 = A1(d1(u1.entropy ? [
                                p1,
                                l1(t1)
                            ] : p1 === null ? m1() : p1, 3), S1), M1 = new x1(S1), w1 = function() {
                                for(var F1 = M1.g(a1), V1 = h1, I1 = 0; F1 < o1;)F1 = (F1 + I1) * r1, V1 *= r1, I1 = M1.g(1);
                                for(; F1 >= c1;)F1 /= 2, V1 /= 2, I1 >>>= 1;
                                return (F1 + I1) / V1;
                            };
                            return w1.int32 = function() {
                                return M1.g(4) | 0;
                            }, w1.quick = function() {
                                return M1.g(4) / 4294967296;
                            }, w1.double = w1, A1(l1(M1.S), t1), (u1.pass || P1 || function(F1, V1, I1, L1) {
                                return L1 && (L1.S && v1(L1, M1), F1.state = function() {
                                    return v1(M1, {});
                                }), I1 ? (e1[n1] = F1, V1) : F1;
                            })(w1, C1, "global" in u1 ? u1.global : this == e1, u1.state);
                        }
                        e1["seed" + n1] = f1;
                        function x1(p1) {
                            var u1, P1 = p1.length, S1 = this, C1 = 0, M1 = S1.i = S1.j = 0, w1 = S1.S = [];
                            for(P1 || (p1 = [
                                P1++
                            ]); C1 < r1;)w1[C1] = C1++;
                            for(C1 = 0; C1 < r1; C1++)w1[C1] = w1[M1 = g1 & M1 + p1[C1 % P1] + (u1 = w1[C1])], w1[M1] = u1;
                            S1.g = function(F1) {
                                for(var V1, I1 = 0, L1 = S1.i, B1 = S1.j, R1 = S1.S; F1--;)V1 = R1[L1 = g1 & L1 + 1], I1 = I1 * r1 + R1[g1 & (R1[L1] = R1[B1 = g1 & B1 + V1]) + (R1[B1] = V1)];
                                return S1.i = L1, S1.j = B1, I1;
                            };
                        }
                        function v1(p1, u1) {
                            return u1.i = p1.i, u1.j = p1.j, u1.S = p1.S.slice(), u1;
                        }
                        function d1(p1, u1) {
                            var P1 = [], S1 = _typeof$2(p1), C1;
                            if (u1 && S1 == "object") for(C1 in p1)try {
                                P1.push(d1(p1[C1], u1 - 1));
                            } catch  {}
                            return P1.length ? P1 : S1 == "string" ? p1 : p1 + "\x00";
                        }
                        function A1(p1, u1) {
                            for(var P1 = p1 + "", S1, C1 = 0; C1 < P1.length;)u1[g1 & C1] = g1 & (S1 ^= u1[g1 & C1] * 19) + P1.charCodeAt(C1++);
                            return l1(u1);
                        }
                        function m1() {
                            try {
                                var p1 = new Uint8Array(r1);
                                return (i1.crypto || i1.msCrypto).getRandomValues(p1), l1(p1);
                            } catch  {
                                var u1 = i1.navigator, P1 = u1 && u1.plugins;
                                return [
                                    +new Date,
                                    i1,
                                    P1,
                                    i1.screen,
                                    l1(t1)
                                ];
                            }
                        }
                        function l1(p1) {
                            return String.fromCharCode.apply(0, p1);
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
                                var i1, r1 = t1.length, a1 = [];
                                for(i1 = 0; i1 < r1; i1 += 1)a1[i1] = -t1[i1];
                                return a1;
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
                                for(var a1 = 0, s1 = t1.length, n1 = e1.length, h1 = []; a1 < s1 || a1 < n1;)(typeof t1[a1] == "number" || t1[a1] instanceof Number) && (typeof e1[a1] == "number" || e1[a1] instanceof Number) ? h1[a1] = t1[a1] + e1[a1] : h1[a1] = e1[a1] === void 0 ? t1[a1] : t1[a1] || e1[a1], a1 += 1;
                                return h1;
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
                                for(var a1 = 0, s1 = t1.length, n1 = e1.length, h1 = []; a1 < s1 || a1 < n1;)(typeof t1[a1] == "number" || t1[a1] instanceof Number) && (typeof e1[a1] == "number" || e1[a1] instanceof Number) ? h1[a1] = t1[a1] - e1[a1] : h1[a1] = e1[a1] === void 0 ? t1[a1] : t1[a1] || e1[a1], a1 += 1;
                                return h1;
                            }
                            return 0;
                        }
                        function mul(t1, e1) {
                            var i1 = _typeof$1(t1), r1 = _typeof$1(e1), a1;
                            if (isNumerable(i1, t1) && isNumerable(r1, e1)) return t1 * e1;
                            var s1, n1;
                            if ($bm_isInstanceOfArray(t1) && isNumerable(r1, e1)) {
                                for(n1 = t1.length, a1 = createTypedArray("float32", n1), s1 = 0; s1 < n1; s1 += 1)a1[s1] = t1[s1] * e1;
                                return a1;
                            }
                            if (isNumerable(i1, t1) && $bm_isInstanceOfArray(e1)) {
                                for(n1 = e1.length, a1 = createTypedArray("float32", n1), s1 = 0; s1 < n1; s1 += 1)a1[s1] = t1 * e1[s1];
                                return a1;
                            }
                            return 0;
                        }
                        function div(t1, e1) {
                            var i1 = _typeof$1(t1), r1 = _typeof$1(e1), a1;
                            if (isNumerable(i1, t1) && isNumerable(r1, e1)) return t1 / e1;
                            var s1, n1;
                            if ($bm_isInstanceOfArray(t1) && isNumerable(r1, e1)) {
                                for(n1 = t1.length, a1 = createTypedArray("float32", n1), s1 = 0; s1 < n1; s1 += 1)a1[s1] = t1[s1] / e1;
                                return a1;
                            }
                            if (isNumerable(i1, t1) && $bm_isInstanceOfArray(e1)) {
                                for(n1 = e1.length, a1 = createTypedArray("float32", n1), s1 = 0; s1 < n1; s1 += 1)a1[s1] = t1 / e1[s1];
                                return a1;
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
                            var i1, r1 = Math.min(t1.length, e1.length), a1 = 0;
                            for(i1 = 0; i1 < r1; i1 += 1)a1 += Math.pow(e1[i1] - t1[i1], 2);
                            return Math.sqrt(a1);
                        }
                        function normalize(t1) {
                            return div(t1, length(t1));
                        }
                        function rgbToHsl(t1) {
                            var e1 = t1[0], i1 = t1[1], r1 = t1[2], a1 = Math.max(e1, i1, r1), s1 = Math.min(e1, i1, r1), n1, h1, o1 = (a1 + s1) / 2;
                            if (a1 === s1) n1 = 0, h1 = 0;
                            else {
                                var c1 = a1 - s1;
                                switch(h1 = o1 > .5 ? c1 / (2 - a1 - s1) : c1 / (a1 + s1), a1){
                                    case e1:
                                        n1 = (i1 - r1) / c1 + (i1 < r1 ? 6 : 0);
                                        break;
                                    case i1:
                                        n1 = (r1 - e1) / c1 + 2;
                                        break;
                                    case r1:
                                        n1 = (e1 - i1) / c1 + 4;
                                        break;
                                }
                                n1 /= 6;
                            }
                            return [
                                n1,
                                h1,
                                o1,
                                t1[3]
                            ];
                        }
                        function hue2rgb(t1, e1, i1) {
                            return i1 < 0 && (i1 += 1), i1 > 1 && (i1 -= 1), i1 < 1 / 6 ? t1 + (e1 - t1) * 6 * i1 : i1 < 0.5 ? e1 : i1 < 2 / 3 ? t1 + (e1 - t1) * (2 / 3 - i1) * 6 : t1;
                        }
                        function hslToRgb(t1) {
                            var e1 = t1[0], i1 = t1[1], r1 = t1[2], a1, s1, n1;
                            if (i1 === 0) a1 = r1, n1 = r1, s1 = r1;
                            else {
                                var h1 = r1 < .5 ? r1 * (1 + i1) : r1 + i1 - r1 * i1, o1 = 2 * r1 - h1;
                                a1 = hue2rgb(o1, h1, e1 + 1 / 3), s1 = hue2rgb(o1, h1, e1), n1 = hue2rgb(o1, h1, e1 - 1 / 3);
                            }
                            return [
                                a1,
                                s1,
                                n1,
                                t1[3]
                            ];
                        }
                        function linear(t1, e1, i1, r1, a1) {
                            if ((r1 === void 0 || a1 === void 0) && (r1 = e1, a1 = i1, e1 = 0, i1 = 1), i1 < e1) {
                                var s1 = i1;
                                i1 = e1, e1 = s1;
                            }
                            if (t1 <= e1) return r1;
                            if (t1 >= i1) return a1;
                            var n1 = i1 === e1 ? 0 : (t1 - e1) / (i1 - e1);
                            if (!r1.length) return r1 + (a1 - r1) * n1;
                            var h1, o1 = r1.length, c1 = createTypedArray("float32", o1);
                            for(h1 = 0; h1 < o1; h1 += 1)c1[h1] = r1[h1] + (a1[h1] - r1[h1]) * n1;
                            return c1;
                        }
                        function random(t1, e1) {
                            if (e1 === void 0 && (t1 === void 0 ? (t1 = 0, e1 = 1) : (e1 = t1, t1 = void 0)), e1.length) {
                                var i1, r1 = e1.length;
                                t1 || (t1 = createTypedArray("float32", r1));
                                var a1 = createTypedArray("float32", r1), s1 = BMMath.random();
                                for(i1 = 0; i1 < r1; i1 += 1)a1[i1] = t1[i1] + s1 * (e1[i1] - t1[i1]);
                                return a1;
                            }
                            t1 === void 0 && (t1 = 0);
                            var n1 = BMMath.random();
                            return t1 + n1 * (e1 - t1);
                        }
                        function createPath(t1, e1, i1, r1) {
                            var a1, s1 = t1.length, n1 = shapePool.newElement();
                            n1.setPathData(!!r1, s1);
                            var h1 = [
                                0,
                                0
                            ], o1, c1;
                            for(a1 = 0; a1 < s1; a1 += 1)o1 = e1 && e1[a1] ? e1[a1] : h1, c1 = i1 && i1[a1] ? i1[a1] : h1, n1.setTripleAt(t1[a1][0], t1[a1][1], c1[0] + t1[a1][0], c1[1] + t1[a1][1], o1[0] + t1[a1][0], o1[1] + t1[a1][1], a1, !0);
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
                                var r1, a1, s1 = this.pv.length ? this.pv.length : 1, n1 = createTypedArray("float32", s1);
                                e1 = 5;
                                var h1 = Math.floor(time * e1);
                                for(r1 = 0, a1 = 0; r1 < h1;){
                                    for(a1 = 0; a1 < s1; a1 += 1)n1[a1] += -i1 + i1 * 2 * BMMath.random();
                                    r1 += 1;
                                }
                                var o1 = time * e1, c1 = o1 - Math.floor(o1), g1 = createTypedArray("float32", s1);
                                if (s1 > 1) {
                                    for(a1 = 0; a1 < s1; a1 += 1)g1[a1] = this.pv[a1] + n1[a1] + (-i1 + i1 * 2 * BMMath.random()) * c1;
                                    return g1;
                                }
                                return this.pv + n1[0] + (-i1 + i1 * 2 * BMMath.random()) * c1;
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
                                ], r1 = Math.atan2(i1[0], Math.sqrt(i1[1] * i1[1] + i1[2] * i1[2])) / degToRads, a1 = -Math.atan2(i1[1], i1[2]) / degToRads;
                                return [
                                    a1,
                                    r1,
                                    0
                                ];
                            }
                            function easeOut(t1, e1, i1, r1, a1) {
                                return applyEase(easeOutBez, t1, e1, i1, r1, a1);
                            }
                            function easeIn(t1, e1, i1, r1, a1) {
                                return applyEase(easeInBez, t1, e1, i1, r1, a1);
                            }
                            function ease(t1, e1, i1, r1, a1) {
                                return applyEase(easeInOutBez, t1, e1, i1, r1, a1);
                            }
                            function applyEase(t1, e1, i1, r1, a1, s1) {
                                a1 === void 0 ? (a1 = i1, s1 = r1) : e1 = (e1 - i1) / (r1 - i1), e1 > 1 ? e1 = 1 : e1 < 0 && (e1 = 0);
                                var n1 = t1(e1);
                                if ($bm_isInstanceOfArray(a1)) {
                                    var h1, o1 = a1.length, c1 = createTypedArray("float32", o1);
                                    for(h1 = 0; h1 < o1; h1 += 1)c1[h1] = (s1[h1] - a1[h1]) * n1 + a1[h1];
                                    return c1;
                                }
                                return (s1 - a1) * n1 + a1;
                            }
                            function nearestKey(t1) {
                                var e1, i1 = data.k.length, r1, a1;
                                if (!data.k.length || typeof data.k[0] == "number") r1 = 0, a1 = 0;
                                else if (r1 = -1, t1 *= elem.comp.globalData.frameRate, t1 < data.k[0].t) r1 = 1, a1 = data.k[0].t;
                                else {
                                    for(e1 = 0; e1 < i1 - 1; e1 += 1)if (t1 === data.k[e1].t) {
                                        r1 = e1 + 1, a1 = data.k[e1].t;
                                        break;
                                    } else if (t1 > data.k[e1].t && t1 < data.k[e1 + 1].t) {
                                        t1 - data.k[e1].t > data.k[e1 + 1].t - t1 ? (r1 = e1 + 2, a1 = data.k[e1 + 1].t) : (r1 = e1 + 1, a1 = data.k[e1].t);
                                        break;
                                    }
                                    r1 === -1 && (r1 = e1 + 1, a1 = data.k[e1].t);
                                }
                                var s1 = {};
                                return s1.index = r1, s1.time = a1 / elem.comp.globalData.frameRate, s1;
                            }
                            function key(t1) {
                                var e1, i1, r1;
                                if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + t1);
                                t1 -= 1, e1 = {
                                    time: data.k[t1].t / elem.comp.globalData.frameRate,
                                    value: []
                                };
                                var a1 = Object.prototype.hasOwnProperty.call(data.k[t1], "s") ? data.k[t1].s : data.k[t1 - 1].e;
                                for(r1 = a1.length, i1 = 0; i1 < r1; i1 += 1)e1[i1] = a1[i1], e1.value[i1] = a1[i1];
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
                            var r1 = 0, a1 = [];
                            function s1() {
                                r1 += 1;
                            }
                            function n1() {
                                r1 -= 1, r1 === 0 && o1();
                            }
                            function h1(c1) {
                                a1.indexOf(c1) === -1 && a1.push(c1);
                            }
                            function o1() {
                                var c1, g1 = a1.length;
                                for(c1 = 0; c1 < g1; c1 += 1)a1[c1].release();
                                a1.length = 0;
                            }
                            i1.renderer.compInterface = CompExpressionInterface(i1.renderer), i1.renderer.globalData.projectInterface.registerComposition(i1.renderer), i1.renderer.globalData.pushExpression = s1, i1.renderer.globalData.popExpression = n1, i1.renderer.globalData.registerExpressionProperty = h1;
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
                            var r1 = createSizedArray(i1.viewData.length), a1, s1 = i1.viewData.length;
                            for(a1 = 0; a1 < s1; a1 += 1)r1[a1] = new t1(i1.viewData[a1], i1.masksProperties[a1]);
                            var n1 = function(h1) {
                                for(a1 = 0; a1 < s1;){
                                    if (i1.masksProperties[a1].nm === h1) return r1[a1];
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
                        function i1(n1, h1, o1) {
                            Object.defineProperty(n1, "velocity", {
                                get: function() {
                                    return h1.getVelocityAtTime(h1.comp.currentFrame);
                                }
                            }), n1.numKeys = h1.keyframes ? h1.keyframes.length : 0, n1.key = function(c1) {
                                if (!n1.numKeys) return 0;
                                var g1 = "";
                                "s" in h1.keyframes[c1 - 1] ? g1 = h1.keyframes[c1 - 1].s : "e" in h1.keyframes[c1 - 2] ? g1 = h1.keyframes[c1 - 2].e : g1 = h1.keyframes[c1 - 2].s;
                                var b1 = o1 === "unidimensional" ? new Number(g1) : Object.assign({}, g1);
                                return b1.time = h1.keyframes[c1 - 1].t / h1.elem.comp.globalData.frameRate, b1.value = o1 === "unidimensional" ? g1[0] : g1, b1;
                            }, n1.valueAtTime = h1.getValueAtTime, n1.speedAtTime = h1.getSpeedAtTime, n1.velocityAtTime = h1.getVelocityAtTime, n1.propertyGroup = h1.propertyGroup;
                        }
                        function r1(n1) {
                            (!n1 || !("pv" in n1)) && (n1 = t1);
                            var h1 = 1 / n1.mult, o1 = n1.pv * h1, c1 = new Number(o1);
                            return c1.value = o1, i1(c1, n1, "unidimensional"), function() {
                                return n1.k && n1.getValue(), o1 = n1.v * h1, c1.value !== o1 && (c1 = new Number(o1), c1.value = o1, i1(c1, n1, "unidimensional")), c1;
                            };
                        }
                        function a1(n1) {
                            (!n1 || !("pv" in n1)) && (n1 = e1);
                            var h1 = 1 / n1.mult, o1 = n1.data && n1.data.l || n1.pv.length, c1 = createTypedArray("float32", o1), g1 = createTypedArray("float32", o1);
                            return c1.value = g1, i1(c1, n1, "multidimensional"), function() {
                                n1.k && n1.getValue();
                                for(var b1 = 0; b1 < o1; b1 += 1)g1[b1] = n1.v[b1] * h1, c1[b1] = g1[b1];
                                return c1;
                            };
                        }
                        function s1() {
                            return t1;
                        }
                        return function(n1) {
                            return n1 ? n1.propType === "unidimensional" ? r1(n1) : a1(n1) : s1;
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
                            var i1, r1, a1, s1;
                            return t1.p ? s1 = ExpressionPropertyInterface(t1.p) : (i1 = ExpressionPropertyInterface(t1.px), r1 = ExpressionPropertyInterface(t1.py), t1.pz && (a1 = ExpressionPropertyInterface(t1.pz))), Object.defineProperty(e1, "position", {
                                get: function() {
                                    return t1.p ? s1() : [
                                        i1(),
                                        r1(),
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
                        function t1(c1) {
                            var g1 = new Matrix;
                            if (c1 !== void 0) {
                                var b1 = this._elem.finalTransform.mProp.getValueAtTime(c1);
                                b1.clone(g1);
                            } else {
                                var f1 = this._elem.finalTransform.mProp;
                                f1.applyToMatrix(g1);
                            }
                            return g1;
                        }
                        function e1(c1, g1) {
                            var b1 = this.getMatrix(g1);
                            return b1.props[12] = 0, b1.props[13] = 0, b1.props[14] = 0, this.applyPoint(b1, c1);
                        }
                        function i1(c1, g1) {
                            var b1 = this.getMatrix(g1);
                            return this.applyPoint(b1, c1);
                        }
                        function r1(c1, g1) {
                            var b1 = this.getMatrix(g1);
                            return b1.props[12] = 0, b1.props[13] = 0, b1.props[14] = 0, this.invertPoint(b1, c1);
                        }
                        function a1(c1, g1) {
                            var b1 = this.getMatrix(g1);
                            return this.invertPoint(b1, c1);
                        }
                        function s1(c1, g1) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var b1, f1 = this._elem.hierarchy.length;
                                for(b1 = 0; b1 < f1; b1 += 1)this._elem.hierarchy[b1].finalTransform.mProp.applyToMatrix(c1);
                            }
                            return c1.applyToPointArray(g1[0], g1[1], g1[2] || 0);
                        }
                        function n1(c1, g1) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var b1, f1 = this._elem.hierarchy.length;
                                for(b1 = 0; b1 < f1; b1 += 1)this._elem.hierarchy[b1].finalTransform.mProp.applyToMatrix(c1);
                            }
                            return c1.inversePoint(g1);
                        }
                        function h1(c1) {
                            var g1 = new Matrix;
                            if (g1.reset(), this._elem.finalTransform.mProp.applyToMatrix(g1), this._elem.hierarchy && this._elem.hierarchy.length) {
                                var b1, f1 = this._elem.hierarchy.length;
                                for(b1 = 0; b1 < f1; b1 += 1)this._elem.hierarchy[b1].finalTransform.mProp.applyToMatrix(g1);
                                return g1.inversePoint(c1);
                            }
                            return g1.inversePoint(c1);
                        }
                        function o1() {
                            return [
                                1,
                                1,
                                1,
                                1
                            ];
                        }
                        return function(c1) {
                            var g1;
                            function b1(d1) {
                                x1.mask = new MaskManagerInterface(d1, c1);
                            }
                            function f1(d1) {
                                x1.effect = d1;
                            }
                            function x1(d1) {
                                switch(d1){
                                    case "ADBE Root Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return x1.shapeInterface;
                                    case 1:
                                    case 6:
                                    case "Transform":
                                    case "transform":
                                    case "ADBE Transform Group":
                                        return g1;
                                    case 4:
                                    case "ADBE Effect Parade":
                                    case "effects":
                                    case "Effects":
                                        return x1.effect;
                                    case "ADBE Text Properties":
                                        return x1.textInterface;
                                    default:
                                        return null;
                                }
                            }
                            x1.getMatrix = t1, x1.invertPoint = n1, x1.applyPoint = s1, x1.toWorld = i1, x1.toWorldVec = e1, x1.fromWorld = a1, x1.fromWorldVec = r1, x1.toComp = i1, x1.fromComp = h1, x1.sampleImage = o1, x1.sourceRectAtTime = c1.sourceRectAtTime.bind(c1), x1._elem = c1, g1 = TransformExpressionInterface(c1.finalTransform.mProp);
                            var v1 = getDescriptor(g1, "anchorPoint");
                            return Object.defineProperties(x1, {
                                hasParent: {
                                    get: function() {
                                        return c1.hierarchy.length;
                                    }
                                },
                                parent: {
                                    get: function() {
                                        return c1.hierarchy[0].layerInterface;
                                    }
                                },
                                rotation: getDescriptor(g1, "rotation"),
                                scale: getDescriptor(g1, "scale"),
                                position: getDescriptor(g1, "position"),
                                opacity: getDescriptor(g1, "opacity"),
                                anchorPoint: v1,
                                anchor_point: v1,
                                transform: {
                                    get: function() {
                                        return g1;
                                    }
                                },
                                active: {
                                    get: function() {
                                        return c1.isInRange;
                                    }
                                }
                            }), x1.startTime = c1.data.st, x1.index = c1.data.ind, x1.source = c1.data.refId, x1.height = c1.data.ty === 0 ? c1.data.h : 100, x1.width = c1.data.ty === 0 ? c1.data.w : 100, x1.inPoint = c1.data.ip / c1.comp.globalData.frameRate, x1.outPoint = c1.data.op / c1.comp.globalData.frameRate, x1._name = c1.data.nm, x1.registerMaskInterface = b1, x1.registerEffectsInterface = f1, x1;
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
                            function r1(a1) {
                                return a1 = a1 === void 0 ? 1 : a1, a1 <= 0 ? i1 : e1(a1 - 1);
                            }
                            return r1;
                        };
                    }(), EffectsExpressionInterface = function() {
                        var t1 = {
                            createEffectsInterface: e1
                        };
                        function e1(a1, s1) {
                            if (a1.effectsManager) {
                                var n1 = [], h1 = a1.data.ef, o1, c1 = a1.effectsManager.effectElements.length;
                                for(o1 = 0; o1 < c1; o1 += 1)n1.push(i1(h1[o1], a1.effectsManager.effectElements[o1], s1, a1));
                                var g1 = a1.data.ef || [], b1 = function(f1) {
                                    for(o1 = 0, c1 = g1.length; o1 < c1;){
                                        if (f1 === g1[o1].nm || f1 === g1[o1].mn || f1 === g1[o1].ix) return n1[o1];
                                        o1 += 1;
                                    }
                                    return null;
                                };
                                return Object.defineProperty(b1, "numProperties", {
                                    get: function() {
                                        return g1.length;
                                    }
                                }), b1;
                            }
                            return null;
                        }
                        function i1(a1, s1, n1, h1) {
                            function o1(x1) {
                                for(var v1 = a1.ef, d1 = 0, A1 = v1.length; d1 < A1;){
                                    if (x1 === v1[d1].nm || x1 === v1[d1].mn || x1 === v1[d1].ix) return v1[d1].ty === 5 ? g1[d1] : g1[d1]();
                                    d1 += 1;
                                }
                                throw new Error;
                            }
                            var c1 = propertyGroupFactory(o1, n1), g1 = [], b1, f1 = a1.ef.length;
                            for(b1 = 0; b1 < f1; b1 += 1)a1.ef[b1].ty === 5 ? g1.push(i1(a1.ef[b1], s1.effectElements[b1], s1.effectElements[b1].propertyGroup, h1)) : g1.push(r1(s1.effectElements[b1], a1.ef[b1].ty, h1, c1));
                            return a1.mn === "ADBE Color Control" && Object.defineProperty(o1, "color", {
                                get: function() {
                                    return g1[0]();
                                }
                            }), Object.defineProperties(o1, {
                                numProperties: {
                                    get: function() {
                                        return a1.np;
                                    }
                                },
                                _name: {
                                    value: a1.nm
                                },
                                propertyGroup: {
                                    value: c1
                                }
                            }), o1.enabled = a1.en !== 0, o1.active = o1.enabled, o1;
                        }
                        function r1(a1, s1, n1, h1) {
                            var o1 = ExpressionPropertyInterface(a1.p);
                            function c1() {
                                return s1 === 10 ? n1.comp.compInterface(a1.p.v) : o1();
                            }
                            return a1.p.setGroupProperty && a1.p.setGroupProperty(PropertyInterface("", h1)), c1;
                        }
                        return t1;
                    }(), ShapePathInterface = function() {
                        return function(t1, e1, i1) {
                            var r1 = e1.sh;
                            function a1(n1) {
                                return n1 === "Shape" || n1 === "shape" || n1 === "Path" || n1 === "path" || n1 === "ADBE Vector Shape" || n1 === 2 ? a1.path : null;
                            }
                            var s1 = propertyGroupFactory(a1, i1);
                            return r1.setGroupProperty(PropertyInterface("Path", s1)), Object.defineProperties(a1, {
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
                            }), a1;
                        };
                    }(), ShapeExpressionInterface = function() {
                        function t1(v1, d1, A1) {
                            var m1 = [], l1, p1 = v1 ? v1.length : 0;
                            for(l1 = 0; l1 < p1; l1 += 1)v1[l1].ty === "gr" ? m1.push(i1(v1[l1], d1[l1], A1)) : v1[l1].ty === "fl" ? m1.push(r1(v1[l1], d1[l1], A1)) : v1[l1].ty === "st" ? m1.push(n1(v1[l1], d1[l1], A1)) : v1[l1].ty === "tm" ? m1.push(h1(v1[l1], d1[l1], A1)) : v1[l1].ty === "tr" || (v1[l1].ty === "el" ? m1.push(c1(v1[l1], d1[l1], A1)) : v1[l1].ty === "sr" ? m1.push(g1(v1[l1], d1[l1], A1)) : v1[l1].ty === "sh" ? m1.push(ShapePathInterface(v1[l1], d1[l1], A1)) : v1[l1].ty === "rc" ? m1.push(b1(v1[l1], d1[l1], A1)) : v1[l1].ty === "rd" ? m1.push(f1(v1[l1], d1[l1], A1)) : v1[l1].ty === "rp" ? m1.push(x1(v1[l1], d1[l1], A1)) : v1[l1].ty === "gf" ? m1.push(a1(v1[l1], d1[l1], A1)) : m1.push(s1(v1[l1], d1[l1])));
                            return m1;
                        }
                        function e1(v1, d1, A1) {
                            var m1, l1 = function(u1) {
                                for(var P1 = 0, S1 = m1.length; P1 < S1;){
                                    if (m1[P1]._name === u1 || m1[P1].mn === u1 || m1[P1].propertyIndex === u1 || m1[P1].ix === u1 || m1[P1].ind === u1) return m1[P1];
                                    P1 += 1;
                                }
                                return typeof u1 == "number" ? m1[u1 - 1] : null;
                            };
                            l1.propertyGroup = propertyGroupFactory(l1, A1), m1 = t1(v1.it, d1.it, l1.propertyGroup), l1.numProperties = m1.length;
                            var p1 = o1(v1.it[v1.it.length - 1], d1.it[d1.it.length - 1], l1.propertyGroup);
                            return l1.transform = p1, l1.propertyIndex = v1.cix, l1._name = v1.nm, l1;
                        }
                        function i1(v1, d1, A1) {
                            var m1 = function(u1) {
                                switch(u1){
                                    case "ADBE Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return m1.content;
                                    default:
                                        return m1.transform;
                                }
                            };
                            m1.propertyGroup = propertyGroupFactory(m1, A1);
                            var l1 = e1(v1, d1, m1.propertyGroup), p1 = o1(v1.it[v1.it.length - 1], d1.it[d1.it.length - 1], m1.propertyGroup);
                            return m1.content = l1, m1.transform = p1, Object.defineProperty(m1, "_name", {
                                get: function() {
                                    return v1.nm;
                                }
                            }), m1.numProperties = v1.np, m1.propertyIndex = v1.ix, m1.nm = v1.nm, m1.mn = v1.mn, m1;
                        }
                        function r1(v1, d1, A1) {
                            function m1(l1) {
                                return l1 === "Color" || l1 === "color" ? m1.color : l1 === "Opacity" || l1 === "opacity" ? m1.opacity : null;
                            }
                            return Object.defineProperties(m1, {
                                color: {
                                    get: ExpressionPropertyInterface(d1.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(d1.o)
                                },
                                _name: {
                                    value: v1.nm
                                },
                                mn: {
                                    value: v1.mn
                                }
                            }), d1.c.setGroupProperty(PropertyInterface("Color", A1)), d1.o.setGroupProperty(PropertyInterface("Opacity", A1)), m1;
                        }
                        function a1(v1, d1, A1) {
                            function m1(l1) {
                                return l1 === "Start Point" || l1 === "start point" ? m1.startPoint : l1 === "End Point" || l1 === "end point" ? m1.endPoint : l1 === "Opacity" || l1 === "opacity" ? m1.opacity : null;
                            }
                            return Object.defineProperties(m1, {
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
                                    value: v1.nm
                                },
                                mn: {
                                    value: v1.mn
                                }
                            }), d1.s.setGroupProperty(PropertyInterface("Start Point", A1)), d1.e.setGroupProperty(PropertyInterface("End Point", A1)), d1.o.setGroupProperty(PropertyInterface("Opacity", A1)), m1;
                        }
                        function s1() {
                            function v1() {
                                return null;
                            }
                            return v1;
                        }
                        function n1(v1, d1, A1) {
                            var m1 = propertyGroupFactory(C1, A1), l1 = propertyGroupFactory(S1, m1);
                            function p1(M1) {
                                Object.defineProperty(S1, v1.d[M1].nm, {
                                    get: ExpressionPropertyInterface(d1.d.dataProps[M1].p)
                                });
                            }
                            var u1, P1 = v1.d ? v1.d.length : 0, S1 = {};
                            for(u1 = 0; u1 < P1; u1 += 1)p1(u1), d1.d.dataProps[u1].p.setGroupProperty(l1);
                            function C1(M1) {
                                return M1 === "Color" || M1 === "color" ? C1.color : M1 === "Opacity" || M1 === "opacity" ? C1.opacity : M1 === "Stroke Width" || M1 === "stroke width" ? C1.strokeWidth : null;
                            }
                            return Object.defineProperties(C1, {
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
                                        return S1;
                                    }
                                },
                                _name: {
                                    value: v1.nm
                                },
                                mn: {
                                    value: v1.mn
                                }
                            }), d1.c.setGroupProperty(PropertyInterface("Color", m1)), d1.o.setGroupProperty(PropertyInterface("Opacity", m1)), d1.w.setGroupProperty(PropertyInterface("Stroke Width", m1)), C1;
                        }
                        function h1(v1, d1, A1) {
                            function m1(p1) {
                                return p1 === v1.e.ix || p1 === "End" || p1 === "end" ? m1.end : p1 === v1.s.ix ? m1.start : p1 === v1.o.ix ? m1.offset : null;
                            }
                            var l1 = propertyGroupFactory(m1, A1);
                            return m1.propertyIndex = v1.ix, d1.s.setGroupProperty(PropertyInterface("Start", l1)), d1.e.setGroupProperty(PropertyInterface("End", l1)), d1.o.setGroupProperty(PropertyInterface("Offset", l1)), m1.propertyIndex = v1.ix, m1.propertyGroup = A1, Object.defineProperties(m1, {
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
                                    value: v1.nm
                                }
                            }), m1.mn = v1.mn, m1;
                        }
                        function o1(v1, d1, A1) {
                            function m1(p1) {
                                return v1.a.ix === p1 || p1 === "Anchor Point" ? m1.anchorPoint : v1.o.ix === p1 || p1 === "Opacity" ? m1.opacity : v1.p.ix === p1 || p1 === "Position" ? m1.position : v1.r.ix === p1 || p1 === "Rotation" || p1 === "ADBE Vector Rotation" ? m1.rotation : v1.s.ix === p1 || p1 === "Scale" ? m1.scale : v1.sk && v1.sk.ix === p1 || p1 === "Skew" ? m1.skew : v1.sa && v1.sa.ix === p1 || p1 === "Skew Axis" ? m1.skewAxis : null;
                            }
                            var l1 = propertyGroupFactory(m1, A1);
                            return d1.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", l1)), d1.transform.mProps.p.setGroupProperty(PropertyInterface("Position", l1)), d1.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", l1)), d1.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", l1)), d1.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", l1)), d1.transform.mProps.sk && (d1.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", l1)), d1.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", l1))), d1.transform.op.setGroupProperty(PropertyInterface("Opacity", l1)), Object.defineProperties(m1, {
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
                                    value: v1.nm
                                }
                            }), m1.ty = "tr", m1.mn = v1.mn, m1.propertyGroup = A1, m1;
                        }
                        function c1(v1, d1, A1) {
                            function m1(u1) {
                                return v1.p.ix === u1 ? m1.position : v1.s.ix === u1 ? m1.size : null;
                            }
                            var l1 = propertyGroupFactory(m1, A1);
                            m1.propertyIndex = v1.ix;
                            var p1 = d1.sh.ty === "tm" ? d1.sh.prop : d1.sh;
                            return p1.s.setGroupProperty(PropertyInterface("Size", l1)), p1.p.setGroupProperty(PropertyInterface("Position", l1)), Object.defineProperties(m1, {
                                size: {
                                    get: ExpressionPropertyInterface(p1.s)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(p1.p)
                                },
                                _name: {
                                    value: v1.nm
                                }
                            }), m1.mn = v1.mn, m1;
                        }
                        function g1(v1, d1, A1) {
                            function m1(u1) {
                                return v1.p.ix === u1 ? m1.position : v1.r.ix === u1 ? m1.rotation : v1.pt.ix === u1 ? m1.points : v1.or.ix === u1 || u1 === "ADBE Vector Star Outer Radius" ? m1.outerRadius : v1.os.ix === u1 ? m1.outerRoundness : v1.ir && (v1.ir.ix === u1 || u1 === "ADBE Vector Star Inner Radius") ? m1.innerRadius : v1.is && v1.is.ix === u1 ? m1.innerRoundness : null;
                            }
                            var l1 = propertyGroupFactory(m1, A1), p1 = d1.sh.ty === "tm" ? d1.sh.prop : d1.sh;
                            return m1.propertyIndex = v1.ix, p1.or.setGroupProperty(PropertyInterface("Outer Radius", l1)), p1.os.setGroupProperty(PropertyInterface("Outer Roundness", l1)), p1.pt.setGroupProperty(PropertyInterface("Points", l1)), p1.p.setGroupProperty(PropertyInterface("Position", l1)), p1.r.setGroupProperty(PropertyInterface("Rotation", l1)), v1.ir && (p1.ir.setGroupProperty(PropertyInterface("Inner Radius", l1)), p1.is.setGroupProperty(PropertyInterface("Inner Roundness", l1))), Object.defineProperties(m1, {
                                position: {
                                    get: ExpressionPropertyInterface(p1.p)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(p1.r)
                                },
                                points: {
                                    get: ExpressionPropertyInterface(p1.pt)
                                },
                                outerRadius: {
                                    get: ExpressionPropertyInterface(p1.or)
                                },
                                outerRoundness: {
                                    get: ExpressionPropertyInterface(p1.os)
                                },
                                innerRadius: {
                                    get: ExpressionPropertyInterface(p1.ir)
                                },
                                innerRoundness: {
                                    get: ExpressionPropertyInterface(p1.is)
                                },
                                _name: {
                                    value: v1.nm
                                }
                            }), m1.mn = v1.mn, m1;
                        }
                        function b1(v1, d1, A1) {
                            function m1(u1) {
                                return v1.p.ix === u1 ? m1.position : v1.r.ix === u1 ? m1.roundness : v1.s.ix === u1 || u1 === "Size" || u1 === "ADBE Vector Rect Size" ? m1.size : null;
                            }
                            var l1 = propertyGroupFactory(m1, A1), p1 = d1.sh.ty === "tm" ? d1.sh.prop : d1.sh;
                            return m1.propertyIndex = v1.ix, p1.p.setGroupProperty(PropertyInterface("Position", l1)), p1.s.setGroupProperty(PropertyInterface("Size", l1)), p1.r.setGroupProperty(PropertyInterface("Rotation", l1)), Object.defineProperties(m1, {
                                position: {
                                    get: ExpressionPropertyInterface(p1.p)
                                },
                                roundness: {
                                    get: ExpressionPropertyInterface(p1.r)
                                },
                                size: {
                                    get: ExpressionPropertyInterface(p1.s)
                                },
                                _name: {
                                    value: v1.nm
                                }
                            }), m1.mn = v1.mn, m1;
                        }
                        function f1(v1, d1, A1) {
                            function m1(u1) {
                                return v1.r.ix === u1 || u1 === "Round Corners 1" ? m1.radius : null;
                            }
                            var l1 = propertyGroupFactory(m1, A1), p1 = d1;
                            return m1.propertyIndex = v1.ix, p1.rd.setGroupProperty(PropertyInterface("Radius", l1)), Object.defineProperties(m1, {
                                radius: {
                                    get: ExpressionPropertyInterface(p1.rd)
                                },
                                _name: {
                                    value: v1.nm
                                }
                            }), m1.mn = v1.mn, m1;
                        }
                        function x1(v1, d1, A1) {
                            function m1(u1) {
                                return v1.c.ix === u1 || u1 === "Copies" ? m1.copies : v1.o.ix === u1 || u1 === "Offset" ? m1.offset : null;
                            }
                            var l1 = propertyGroupFactory(m1, A1), p1 = d1;
                            return m1.propertyIndex = v1.ix, p1.c.setGroupProperty(PropertyInterface("Copies", l1)), p1.o.setGroupProperty(PropertyInterface("Offset", l1)), Object.defineProperties(m1, {
                                copies: {
                                    get: ExpressionPropertyInterface(p1.c)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(p1.o)
                                },
                                _name: {
                                    value: v1.nm
                                }
                            }), m1.mn = v1.mn, m1;
                        }
                        return function(v1, d1, A1) {
                            var m1;
                            function l1(u1) {
                                if (typeof u1 == "number") return u1 = u1 === void 0 ? 1 : u1, u1 === 0 ? A1 : m1[u1 - 1];
                                for(var P1 = 0, S1 = m1.length; P1 < S1;){
                                    if (m1[P1]._name === u1) return m1[P1];
                                    P1 += 1;
                                }
                                return null;
                            }
                            function p1() {
                                return A1;
                            }
                            return l1.propertyGroup = propertyGroupFactory(l1, p1), m1 = t1(v1, d1, l1.propertyGroup), l1.numProperties = m1.length, l1._name = "Contents", l1;
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
                            var r1 = "", a1 = i1.getFootageData();
                            function s1() {
                                return r1 = "", a1 = i1.getFootageData(), n1;
                            }
                            function n1(h1) {
                                if (a1[h1]) return r1 = h1, a1 = a1[h1], _typeof(a1) === "object" ? n1 : a1;
                                var o1 = h1.indexOf(r1);
                                if (o1 !== -1) {
                                    var c1 = parseInt(h1.substr(o1 + r1.length), 10);
                                    return a1 = a1[c1], _typeof(a1) === "object" ? n1 : a1;
                                }
                                return "";
                            }
                            return s1;
                        }, e1 = function(i1) {
                            function r1(a1) {
                                return a1 === "Outline" ? r1.outlineInterface() : null;
                            }
                            return r1._name = "Outline", r1.outlineInterface = t1(i1), r1;
                        };
                        return function(i1) {
                            function r1(a1) {
                                return a1 === "Data" ? r1.dataInterface : null;
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
                        function t1(n1, h1, o1) {
                            h1.x && (o1.k = !0, o1.x = !0, o1.initiateExpression = ExpressionManager.initiateExpression, o1.effectsSequence.push(o1.initiateExpression(n1, h1, o1).bind(o1)));
                        }
                        function e1(n1) {
                            return n1 *= this.elem.globalData.frameRate, n1 -= this.offsetTime, n1 !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n1 ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n1, this._cachingAtTime), this._cachingAtTime.lastFrame = n1), this._cachingAtTime.value;
                        }
                        function i1(n1) {
                            var h1 = -0.01, o1 = this.getValueAtTime(n1), c1 = this.getValueAtTime(n1 + h1), g1 = 0;
                            if (o1.length) {
                                var b1;
                                for(b1 = 0; b1 < o1.length; b1 += 1)g1 += Math.pow(c1[b1] - o1[b1], 2);
                                g1 = Math.sqrt(g1) * 100;
                            } else g1 = 0;
                            return g1;
                        }
                        function r1(n1) {
                            if (this.vel !== void 0) return this.vel;
                            var h1 = -0.001, o1 = this.getValueAtTime(n1), c1 = this.getValueAtTime(n1 + h1), g1;
                            if (o1.length) {
                                g1 = createTypedArray("float32", o1.length);
                                var b1;
                                for(b1 = 0; b1 < o1.length; b1 += 1)g1[b1] = (c1[b1] - o1[b1]) / h1;
                            } else g1 = (c1 - o1) / h1;
                            return g1;
                        }
                        function a1() {
                            return this.pv;
                        }
                        function s1(n1) {
                            this.propertyGroup = n1;
                        }
                        return {
                            searchExpressions: t1,
                            getSpeedAtTime: i1,
                            getVelocityAtTime: r1,
                            getValueAtTime: e1,
                            getStaticValueAtTime: a1,
                            setGroupProperty: s1
                        };
                    }();
                    function addPropertyDecorator() {
                        function t1(f1, x1, v1) {
                            if (!this.k || !this.keyframes) return this.pv;
                            f1 = f1 ? f1.toLowerCase() : "";
                            var d1 = this.comp.renderedFrame, A1 = this.keyframes, m1 = A1[A1.length - 1].t;
                            if (d1 <= m1) return this.pv;
                            var l1, p1;
                            v1 ? (x1 ? l1 = Math.abs(m1 - this.elem.comp.globalData.frameRate * x1) : l1 = Math.max(0, m1 - this.elem.data.ip), p1 = m1 - l1) : ((!x1 || x1 > A1.length - 1) && (x1 = A1.length - 1), p1 = A1[A1.length - 1 - x1].t, l1 = m1 - p1);
                            var u1, P1, S1;
                            if (f1 === "pingpong") {
                                var C1 = Math.floor((d1 - p1) / l1);
                                if (C1 % 2 !== 0) return this.getValueAtTime((l1 - (d1 - p1) % l1 + p1) / this.comp.globalData.frameRate, 0);
                            } else if (f1 === "offset") {
                                var M1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), w1 = this.getValueAtTime(m1 / this.comp.globalData.frameRate, 0), F1 = this.getValueAtTime(((d1 - p1) % l1 + p1) / this.comp.globalData.frameRate, 0), V1 = Math.floor((d1 - p1) / l1);
                                if (this.pv.length) {
                                    for(S1 = new Array(M1.length), P1 = S1.length, u1 = 0; u1 < P1; u1 += 1)S1[u1] = (w1[u1] - M1[u1]) * V1 + F1[u1];
                                    return S1;
                                }
                                return (w1 - M1) * V1 + F1;
                            } else if (f1 === "continue") {
                                var I1 = this.getValueAtTime(m1 / this.comp.globalData.frameRate, 0), L1 = this.getValueAtTime((m1 - .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for(S1 = new Array(I1.length), P1 = S1.length, u1 = 0; u1 < P1; u1 += 1)S1[u1] = I1[u1] + (I1[u1] - L1[u1]) * ((d1 - m1) / this.comp.globalData.frameRate) / 5e-4;
                                    return S1;
                                }
                                return I1 + (I1 - L1) * ((d1 - m1) / .001);
                            }
                            return this.getValueAtTime(((d1 - p1) % l1 + p1) / this.comp.globalData.frameRate, 0);
                        }
                        function e1(f1, x1, v1) {
                            if (!this.k) return this.pv;
                            f1 = f1 ? f1.toLowerCase() : "";
                            var d1 = this.comp.renderedFrame, A1 = this.keyframes, m1 = A1[0].t;
                            if (d1 >= m1) return this.pv;
                            var l1, p1;
                            v1 ? (x1 ? l1 = Math.abs(this.elem.comp.globalData.frameRate * x1) : l1 = Math.max(0, this.elem.data.op - m1), p1 = m1 + l1) : ((!x1 || x1 > A1.length - 1) && (x1 = A1.length - 1), p1 = A1[x1].t, l1 = p1 - m1);
                            var u1, P1, S1;
                            if (f1 === "pingpong") {
                                var C1 = Math.floor((m1 - d1) / l1);
                                if (C1 % 2 === 0) return this.getValueAtTime(((m1 - d1) % l1 + m1) / this.comp.globalData.frameRate, 0);
                            } else if (f1 === "offset") {
                                var M1 = this.getValueAtTime(m1 / this.comp.globalData.frameRate, 0), w1 = this.getValueAtTime(p1 / this.comp.globalData.frameRate, 0), F1 = this.getValueAtTime((l1 - (m1 - d1) % l1 + m1) / this.comp.globalData.frameRate, 0), V1 = Math.floor((m1 - d1) / l1) + 1;
                                if (this.pv.length) {
                                    for(S1 = new Array(M1.length), P1 = S1.length, u1 = 0; u1 < P1; u1 += 1)S1[u1] = F1[u1] - (w1[u1] - M1[u1]) * V1;
                                    return S1;
                                }
                                return F1 - (w1 - M1) * V1;
                            } else if (f1 === "continue") {
                                var I1 = this.getValueAtTime(m1 / this.comp.globalData.frameRate, 0), L1 = this.getValueAtTime((m1 + .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for(S1 = new Array(I1.length), P1 = S1.length, u1 = 0; u1 < P1; u1 += 1)S1[u1] = I1[u1] + (I1[u1] - L1[u1]) * (m1 - d1) / .001;
                                    return S1;
                                }
                                return I1 + (I1 - L1) * (m1 - d1) / .001;
                            }
                            return this.getValueAtTime((l1 - ((m1 - d1) % l1 + m1)) / this.comp.globalData.frameRate, 0);
                        }
                        function i1(f1, x1) {
                            if (!this.k) return this.pv;
                            if (f1 = (f1 || .4) * .5, x1 = Math.floor(x1 || 5), x1 <= 1) return this.pv;
                            var v1 = this.comp.renderedFrame / this.comp.globalData.frameRate, d1 = v1 - f1, A1 = v1 + f1, m1 = x1 > 1 ? (A1 - d1) / (x1 - 1) : 1, l1 = 0, p1 = 0, u1;
                            this.pv.length ? u1 = createTypedArray("float32", this.pv.length) : u1 = 0;
                            for(var P1; l1 < x1;){
                                if (P1 = this.getValueAtTime(d1 + l1 * m1), this.pv.length) for(p1 = 0; p1 < this.pv.length; p1 += 1)u1[p1] += P1[p1];
                                else u1 += P1;
                                l1 += 1;
                            }
                            if (this.pv.length) for(p1 = 0; p1 < this.pv.length; p1 += 1)u1[p1] /= x1;
                            else u1 /= x1;
                            return u1;
                        }
                        function r1(f1) {
                            this._transformCachingAtTime || (this._transformCachingAtTime = {
                                v: new Matrix
                            });
                            var x1 = this._transformCachingAtTime.v;
                            if (x1.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                                var v1 = this.a.getValueAtTime(f1);
                                x1.translate(-v1[0] * this.a.mult, -v1[1] * this.a.mult, v1[2] * this.a.mult);
                            }
                            if (this.appliedTransformations < 2) {
                                var d1 = this.s.getValueAtTime(f1);
                                x1.scale(d1[0] * this.s.mult, d1[1] * this.s.mult, d1[2] * this.s.mult);
                            }
                            if (this.sk && this.appliedTransformations < 3) {
                                var A1 = this.sk.getValueAtTime(f1), m1 = this.sa.getValueAtTime(f1);
                                x1.skewFromAxis(-A1 * this.sk.mult, m1 * this.sa.mult);
                            }
                            if (this.r && this.appliedTransformations < 4) {
                                var l1 = this.r.getValueAtTime(f1);
                                x1.rotate(-l1 * this.r.mult);
                            } else if (!this.r && this.appliedTransformations < 4) {
                                var p1 = this.rz.getValueAtTime(f1), u1 = this.ry.getValueAtTime(f1), P1 = this.rx.getValueAtTime(f1), S1 = this.or.getValueAtTime(f1);
                                x1.rotateZ(-p1 * this.rz.mult).rotateY(u1 * this.ry.mult).rotateX(P1 * this.rx.mult).rotateZ(-S1[2] * this.or.mult).rotateY(S1[1] * this.or.mult).rotateX(S1[0] * this.or.mult);
                            }
                            if (this.data.p && this.data.p.s) {
                                var C1 = this.px.getValueAtTime(f1), M1 = this.py.getValueAtTime(f1);
                                if (this.data.p.z) {
                                    var w1 = this.pz.getValueAtTime(f1);
                                    x1.translate(C1 * this.px.mult, M1 * this.py.mult, -w1 * this.pz.mult);
                                } else x1.translate(C1 * this.px.mult, M1 * this.py.mult, 0);
                            } else {
                                var F1 = this.p.getValueAtTime(f1);
                                x1.translate(F1[0] * this.p.mult, F1[1] * this.p.mult, -F1[2] * this.p.mult);
                            }
                            return x1;
                        }
                        function a1() {
                            return this.v.clone(new Matrix);
                        }
                        var s1 = TransformPropertyFactory.getTransformProperty;
                        TransformPropertyFactory.getTransformProperty = function(f1, x1, v1) {
                            var d1 = s1(f1, x1, v1);
                            return d1.dynamicProperties.length ? d1.getValueAtTime = r1.bind(d1) : d1.getValueAtTime = a1.bind(d1), d1.setGroupProperty = expressionHelpers.setGroupProperty, d1;
                        };
                        var n1 = PropertyFactory.getProp;
                        PropertyFactory.getProp = function(f1, x1, v1, d1, A1) {
                            var m1 = n1(f1, x1, v1, d1, A1);
                            m1.kf ? m1.getValueAtTime = expressionHelpers.getValueAtTime.bind(m1) : m1.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(m1), m1.setGroupProperty = expressionHelpers.setGroupProperty, m1.loopOut = t1, m1.loopIn = e1, m1.smooth = i1, m1.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(m1), m1.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(m1), m1.numKeys = x1.a === 1 ? x1.k.length : 0, m1.propertyIndex = x1.ix;
                            var l1 = 0;
                            return v1 !== 0 && (l1 = createTypedArray("float32", x1.a === 1 ? x1.k[0].s.length : x1.k.length)), m1._cachingAtTime = {
                                lastFrame: initialDefaultFrame,
                                lastIndex: 0,
                                value: l1
                            }, expressionHelpers.searchExpressions(f1, x1, m1), m1.k && A1.addDynamicProperty(m1), m1;
                        };
                        function h1(f1) {
                            return this._cachingAtTime || (this._cachingAtTime = {
                                shapeValue: shapePool.clone(this.pv),
                                lastIndex: 0,
                                lastTime: initialDefaultFrame
                            }), f1 *= this.elem.globalData.frameRate, f1 -= this.offsetTime, f1 !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < f1 ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = f1, this.interpolateShape(f1, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
                        }
                        var o1 = ShapePropertyFactory.getConstructorFunction(), c1 = ShapePropertyFactory.getKeyframedConstructorFunction();
                        function g1() {}
                        g1.prototype = {
                            vertices: function(f1, x1) {
                                this.k && this.getValue();
                                var v1 = this.v;
                                x1 !== void 0 && (v1 = this.getValueAtTime(x1, 0));
                                var d1, A1 = v1._length, m1 = v1[f1], l1 = v1.v, p1 = createSizedArray(A1);
                                for(d1 = 0; d1 < A1; d1 += 1)f1 === "i" || f1 === "o" ? p1[d1] = [
                                    m1[d1][0] - l1[d1][0],
                                    m1[d1][1] - l1[d1][1]
                                ] : p1[d1] = [
                                    m1[d1][0],
                                    m1[d1][1]
                                ];
                                return p1;
                            },
                            points: function(f1) {
                                return this.vertices("v", f1);
                            },
                            inTangents: function(f1) {
                                return this.vertices("i", f1);
                            },
                            outTangents: function(f1) {
                                return this.vertices("o", f1);
                            },
                            isClosed: function() {
                                return this.v.c;
                            },
                            pointOnPath: function(f1, x1) {
                                var v1 = this.v;
                                x1 !== void 0 && (v1 = this.getValueAtTime(x1, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(v1));
                                for(var d1 = this._segmentsLength, A1 = d1.lengths, m1 = d1.totalLength * f1, l1 = 0, p1 = A1.length, u1 = 0, P1; l1 < p1;){
                                    if (u1 + A1[l1].addedLength > m1) {
                                        var S1 = l1, C1 = v1.c && l1 === p1 - 1 ? 0 : l1 + 1, M1 = (m1 - u1) / A1[l1].addedLength;
                                        P1 = bez.getPointInSegment(v1.v[S1], v1.v[C1], v1.o[S1], v1.i[C1], M1, A1[l1]);
                                        break;
                                    } else u1 += A1[l1].addedLength;
                                    l1 += 1;
                                }
                                return P1 || (P1 = v1.c ? [
                                    v1.v[0][0],
                                    v1.v[0][1]
                                ] : [
                                    v1.v[v1._length - 1][0],
                                    v1.v[v1._length - 1][1]
                                ]), P1;
                            },
                            vectorOnPath: function(f1, x1, v1) {
                                f1 == 1 ? f1 = this.v.c : f1 == 0 && (f1 = .999);
                                var d1 = this.pointOnPath(f1, x1), A1 = this.pointOnPath(f1 + .001, x1), m1 = A1[0] - d1[0], l1 = A1[1] - d1[1], p1 = Math.sqrt(Math.pow(m1, 2) + Math.pow(l1, 2));
                                if (p1 === 0) return [
                                    0,
                                    0
                                ];
                                var u1 = v1 === "tangent" ? [
                                    m1 / p1,
                                    l1 / p1
                                ] : [
                                    -l1 / p1,
                                    m1 / p1
                                ];
                                return u1;
                            },
                            tangentOnPath: function(f1, x1) {
                                return this.vectorOnPath(f1, x1, "tangent");
                            },
                            normalOnPath: function(f1, x1) {
                                return this.vectorOnPath(f1, x1, "normal");
                            },
                            setGroupProperty: expressionHelpers.setGroupProperty,
                            getValueAtTime: expressionHelpers.getStaticValueAtTime
                        }, extendPrototype([
                            g1
                        ], o1), extendPrototype([
                            g1
                        ], c1), c1.prototype.getValueAtTime = h1, c1.prototype.initiateExpression = ExpressionManager.initiateExpression;
                        var b1 = ShapePropertyFactory.getShapeProp;
                        ShapePropertyFactory.getShapeProp = function(f1, x1, v1, d1, A1) {
                            var m1 = b1(f1, x1, v1, d1, A1);
                            return m1.propertyIndex = x1.ix, m1.lock = !1, v1 === 3 ? expressionHelpers.searchExpressions(f1, x1.pt, m1) : v1 === 4 && expressionHelpers.searchExpressions(f1, x1.ks, m1), m1.k && f1.addDynamicProperty(m1), m1;
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
                                var a1 = {};
                                return this.copyData(a1, e1), a1.t = r1.toString(), a1.__complete = !1, a1;
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
                            var a1, s1;
                            for(s1 = 0; s1 < i1.length; s1 += 1)a1 = createNS("feMergeNode"), a1.setAttribute("in", i1[s1]), r1.appendChild(a1), r1.appendChild(a1);
                            return r1;
                        }
                    };
                    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
                    function SVGTintFilter(t1, e1, i1, r1, a1) {
                        this.filterManager = e1;
                        var s1 = createNS("feColorMatrix");
                        s1.setAttribute("type", "matrix"), s1.setAttribute("color-interpolation-filters", "linearRGB"), s1.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = s1, s1.setAttribute("result", r1 + "_tint_1"), t1.appendChild(s1), s1 = createNS("feColorMatrix"), s1.setAttribute("type", "matrix"), s1.setAttribute("color-interpolation-filters", "sRGB"), s1.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s1.setAttribute("result", r1 + "_tint_2"), t1.appendChild(s1), this.matrixFilter = s1;
                        var n1 = this.createMergeNode(r1, [
                            a1,
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
                        var a1 = createNS("feColorMatrix");
                        a1.setAttribute("type", "matrix"), a1.setAttribute("color-interpolation-filters", "sRGB"), a1.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a1.setAttribute("result", r1), t1.appendChild(a1), this.matrixFilter = a1;
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
                        var t1 = this.elem.layerElement.children || this.elem.layerElement.childNodes, e1, i1, r1, a1;
                        for(this.filterManager.effectElements[1].p.v === 1 ? (a1 = this.elem.maskManager.masksProperties.length, r1 = 0) : (r1 = this.filterManager.effectElements[0].p.v - 1, a1 = r1 + 1), i1 = createNS("g"), i1.setAttribute("fill", "none"), i1.setAttribute("stroke-linecap", "round"), i1.setAttribute("stroke-dashoffset", 1), r1; r1 < a1; r1 += 1)e1 = createNS("path"), i1.appendChild(e1), this.paths.push({
                            p: e1,
                            m: r1
                        });
                        if (this.filterManager.effectElements[10].p.v === 3) {
                            var s1 = createNS("mask"), n1 = createElementID();
                            s1.setAttribute("id", n1), s1.setAttribute("mask-type", "alpha"), s1.appendChild(i1), this.elem.globalData.defs.appendChild(s1);
                            var h1 = createNS("g");
                            for(h1.setAttribute("mask", "url(" + getLocationHref() + "#" + n1 + ")"); t1[0];)h1.appendChild(t1[0]);
                            this.elem.layerElement.appendChild(h1), this.masker = s1, i1.setAttribute("stroke", "#fff");
                        } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                            if (this.filterManager.effectElements[10].p.v === 2) for(t1 = this.elem.layerElement.children || this.elem.layerElement.childNodes; t1.length;)this.elem.layerElement.removeChild(t1[0]);
                            this.elem.layerElement.appendChild(i1), this.elem.layerElement.removeAttribute("mask"), i1.setAttribute("stroke", "#fff");
                        }
                        this.initialized = !0, this.pathMasker = i1;
                    }, SVGStrokeEffect.prototype.renderFrame = function(t1) {
                        this.initialized || this.initialize();
                        var e1, i1 = this.paths.length, r1, a1;
                        for(e1 = 0; e1 < i1; e1 += 1)if (this.paths[e1].m !== -1 && (r1 = this.elem.maskManager.viewData[this.paths[e1].m], a1 = this.paths[e1].p, (t1 || this.filterManager._mdf || r1.prop._mdf) && a1.setAttribute("d", r1.lastPath), t1 || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r1.prop._mdf)) {
                            var s1;
                            if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                                var n1 = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, h1 = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, o1 = a1.getTotalLength();
                                s1 = "0 0 0 " + o1 * n1 + " ";
                                var c1 = o1 * (h1 - n1), g1 = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01, b1 = Math.floor(c1 / g1), f1;
                                for(f1 = 0; f1 < b1; f1 += 1)s1 += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
                                s1 += "0 " + o1 * 10 + " 0 0";
                            } else s1 = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
                            a1.setAttribute("stroke-dasharray", s1);
                        }
                        if ((t1 || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t1 || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t1 || this.filterManager.effectElements[3].p._mdf)) {
                            var x1 = this.filterManager.effectElements[3].p.v;
                            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(x1[0] * 255) + "," + bmFloor(x1[1] * 255) + "," + bmFloor(x1[2] * 255) + ")");
                        }
                    };
                    function SVGTritoneFilter(t1, e1, i1, r1) {
                        this.filterManager = e1;
                        var a1 = createNS("feColorMatrix");
                        a1.setAttribute("type", "matrix"), a1.setAttribute("color-interpolation-filters", "linearRGB"), a1.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t1.appendChild(a1);
                        var s1 = createNS("feComponentTransfer");
                        s1.setAttribute("color-interpolation-filters", "sRGB"), s1.setAttribute("result", r1), this.matrixFilter = s1;
                        var n1 = createNS("feFuncR");
                        n1.setAttribute("type", "table"), s1.appendChild(n1), this.feFuncR = n1;
                        var h1 = createNS("feFuncG");
                        h1.setAttribute("type", "table"), s1.appendChild(h1), this.feFuncG = h1;
                        var o1 = createNS("feFuncB");
                        o1.setAttribute("type", "table"), s1.appendChild(o1), this.feFuncB = o1, t1.appendChild(s1);
                    }
                    SVGTritoneFilter.prototype.renderFrame = function(t1) {
                        if (t1 || this.filterManager._mdf) {
                            var e1 = this.filterManager.effectElements[0].p.v, i1 = this.filterManager.effectElements[1].p.v, r1 = this.filterManager.effectElements[2].p.v, a1 = r1[0] + " " + i1[0] + " " + e1[0], s1 = r1[1] + " " + i1[1] + " " + e1[1], n1 = r1[2] + " " + i1[2] + " " + e1[2];
                            this.feFuncR.setAttribute("tableValues", a1), this.feFuncG.setAttribute("tableValues", s1), this.feFuncB.setAttribute("tableValues", n1);
                        }
                    };
                    function SVGProLevelsFilter(t1, e1, i1, r1) {
                        this.filterManager = e1;
                        var a1 = this.filterManager.effectElements, s1 = createNS("feComponentTransfer");
                        (a1[10].p.k || a1[10].p.v !== 0 || a1[11].p.k || a1[11].p.v !== 1 || a1[12].p.k || a1[12].p.v !== 1 || a1[13].p.k || a1[13].p.v !== 0 || a1[14].p.k || a1[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", s1)), (a1[17].p.k || a1[17].p.v !== 0 || a1[18].p.k || a1[18].p.v !== 1 || a1[19].p.k || a1[19].p.v !== 1 || a1[20].p.k || a1[20].p.v !== 0 || a1[21].p.k || a1[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", s1)), (a1[24].p.k || a1[24].p.v !== 0 || a1[25].p.k || a1[25].p.v !== 1 || a1[26].p.k || a1[26].p.v !== 1 || a1[27].p.k || a1[27].p.v !== 0 || a1[28].p.k || a1[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", s1)), (a1[31].p.k || a1[31].p.v !== 0 || a1[32].p.k || a1[32].p.v !== 1 || a1[33].p.k || a1[33].p.v !== 1 || a1[34].p.k || a1[34].p.v !== 0 || a1[35].p.k || a1[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", s1)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s1.setAttribute("color-interpolation-filters", "sRGB"), t1.appendChild(s1)), (a1[3].p.k || a1[3].p.v !== 0 || a1[4].p.k || a1[4].p.v !== 1 || a1[5].p.k || a1[5].p.v !== 1 || a1[6].p.k || a1[6].p.v !== 0 || a1[7].p.k || a1[7].p.v !== 1) && (s1 = createNS("feComponentTransfer"), s1.setAttribute("color-interpolation-filters", "sRGB"), s1.setAttribute("result", r1), t1.appendChild(s1), this.feFuncRComposed = this.createFeFunc("feFuncR", s1), this.feFuncGComposed = this.createFeFunc("feFuncG", s1), this.feFuncBComposed = this.createFeFunc("feFuncB", s1));
                    }
                    SVGProLevelsFilter.prototype.createFeFunc = function(t1, e1) {
                        var i1 = createNS(t1);
                        return i1.setAttribute("type", "table"), e1.appendChild(i1), i1;
                    }, SVGProLevelsFilter.prototype.getTableValue = function(t1, e1, i1, r1, a1) {
                        for(var s1 = 0, n1 = 256, h1, o1 = Math.min(t1, e1), c1 = Math.max(t1, e1), g1 = Array.call(null, {
                            length: n1
                        }), b1, f1 = 0, x1 = a1 - r1, v1 = e1 - t1; s1 <= 256;)h1 = s1 / 256, h1 <= o1 ? b1 = v1 < 0 ? a1 : r1 : h1 >= c1 ? b1 = v1 < 0 ? r1 : a1 : b1 = r1 + x1 * Math.pow((h1 - t1) / v1, 1 / i1), g1[f1] = b1, f1 += 1, s1 += 256 / (n1 - 1);
                        return g1.join(" ");
                    }, SVGProLevelsFilter.prototype.renderFrame = function(t1) {
                        if (t1 || this.filterManager._mdf) {
                            var e1, i1 = this.filterManager.effectElements;
                            this.feFuncRComposed && (t1 || i1[3].p._mdf || i1[4].p._mdf || i1[5].p._mdf || i1[6].p._mdf || i1[7].p._mdf) && (e1 = this.getTableValue(i1[3].p.v, i1[4].p.v, i1[5].p.v, i1[6].p.v, i1[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e1), this.feFuncGComposed.setAttribute("tableValues", e1), this.feFuncBComposed.setAttribute("tableValues", e1)), this.feFuncR && (t1 || i1[10].p._mdf || i1[11].p._mdf || i1[12].p._mdf || i1[13].p._mdf || i1[14].p._mdf) && (e1 = this.getTableValue(i1[10].p.v, i1[11].p.v, i1[12].p.v, i1[13].p.v, i1[14].p.v), this.feFuncR.setAttribute("tableValues", e1)), this.feFuncG && (t1 || i1[17].p._mdf || i1[18].p._mdf || i1[19].p._mdf || i1[20].p._mdf || i1[21].p._mdf) && (e1 = this.getTableValue(i1[17].p.v, i1[18].p.v, i1[19].p.v, i1[20].p.v, i1[21].p.v), this.feFuncG.setAttribute("tableValues", e1)), this.feFuncB && (t1 || i1[24].p._mdf || i1[25].p._mdf || i1[26].p._mdf || i1[27].p._mdf || i1[28].p._mdf) && (e1 = this.getTableValue(i1[24].p.v, i1[25].p.v, i1[26].p.v, i1[27].p.v, i1[28].p.v), this.feFuncB.setAttribute("tableValues", e1)), this.feFuncA && (t1 || i1[31].p._mdf || i1[32].p._mdf || i1[33].p._mdf || i1[34].p._mdf || i1[35].p._mdf) && (e1 = this.getTableValue(i1[31].p.v, i1[32].p.v, i1[33].p.v, i1[34].p.v, i1[35].p.v), this.feFuncA.setAttribute("tableValues", e1));
                        }
                    };
                    function SVGDropShadowEffect(t1, e1, i1, r1, a1) {
                        var s1 = e1.container.globalData.renderConfig.filterSize, n1 = e1.data.fs || s1;
                        t1.setAttribute("x", n1.x || s1.x), t1.setAttribute("y", n1.y || s1.y), t1.setAttribute("width", n1.width || s1.width), t1.setAttribute("height", n1.height || s1.height), this.filterManager = e1;
                        var h1 = createNS("feGaussianBlur");
                        h1.setAttribute("in", "SourceAlpha"), h1.setAttribute("result", r1 + "_drop_shadow_1"), h1.setAttribute("stdDeviation", "0"), this.feGaussianBlur = h1, t1.appendChild(h1);
                        var o1 = createNS("feOffset");
                        o1.setAttribute("dx", "25"), o1.setAttribute("dy", "0"), o1.setAttribute("in", r1 + "_drop_shadow_1"), o1.setAttribute("result", r1 + "_drop_shadow_2"), this.feOffset = o1, t1.appendChild(o1);
                        var c1 = createNS("feFlood");
                        c1.setAttribute("flood-color", "#00ff00"), c1.setAttribute("flood-opacity", "1"), c1.setAttribute("result", r1 + "_drop_shadow_3"), this.feFlood = c1, t1.appendChild(c1);
                        var g1 = createNS("feComposite");
                        g1.setAttribute("in", r1 + "_drop_shadow_3"), g1.setAttribute("in2", r1 + "_drop_shadow_2"), g1.setAttribute("operator", "in"), g1.setAttribute("result", r1 + "_drop_shadow_4"), t1.appendChild(g1);
                        var b1 = this.createMergeNode(r1, [
                            r1 + "_drop_shadow_4",
                            a1
                        ]);
                        t1.appendChild(b1);
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
                                var i1 = this.filterManager.effectElements[3].p.v, r1 = (this.filterManager.effectElements[2].p.v - 90) * degToRads, a1 = i1 * Math.cos(r1), s1 = i1 * Math.sin(r1);
                                this.feOffset.setAttribute("dx", a1), this.feOffset.setAttribute("dy", s1);
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
                            for(var r1 = i1.children, a1 = 0, s1 = r1.length; a1 < s1 && r1[a1] !== t1.layerElement;)a1 += 1;
                            var n1;
                            a1 <= s1 - 2 && (n1 = r1[a1 + 1]);
                            var h1 = createNS("use");
                            h1.setAttribute("href", "#" + e1), n1 ? i1.insertBefore(h1, n1) : i1.appendChild(h1);
                        }
                    }, SVGMatte3Effect.prototype.setElementAsMask = function(t1, e1) {
                        if (!this.findSymbol(e1)) {
                            var i1 = createElementID(), r1 = createNS("mask");
                            r1.setAttribute("id", e1.layerId), r1.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e1);
                            var a1 = t1.globalData.defs;
                            a1.appendChild(r1);
                            var s1 = createNS("symbol");
                            s1.setAttribute("id", i1), this.replaceInParent(e1, i1), s1.appendChild(e1.layerElement), a1.appendChild(s1);
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
                        var a1 = createNS("feGaussianBlur");
                        a1.setAttribute("result", r1), t1.appendChild(a1), this.feGaussianBlur = a1;
                    }
                    SVGGaussianBlurEffect.prototype.renderFrame = function(t1) {
                        if (t1 || this.filterManager._mdf) {
                            var e1 = .3, i1 = this.filterManager.effectElements[0].p.v * e1, r1 = this.filterManager.effectElements[1].p.v, a1 = r1 == 3 ? 0 : i1, s1 = r1 == 2 ? 0 : i1;
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
                            var e1 = this.effectsManager.effectElements, i1 = e1[0].p.v, r1 = e1[1].p.v, a1 = e1[2].p.v === 1, s1 = e1[3].p.v, n1 = a1 ? s1 : e1[4].p.v, h1 = e1[5].p.v, o1 = e1[6].p.v, c1 = e1[7].p.v;
                            this.matrix.reset(), this.matrix.translate(-i1[0], -i1[1], i1[2]), this.matrix.scale(n1 * .01, s1 * .01, 1), this.matrix.rotate(-c1 * degToRads), this.matrix.skewFromAxis(-h1 * degToRads, (o1 + 90) * degToRads), this.matrix.translate(r1[0], r1[1], 0), this._mdf = !0, this.opacity !== e1[8].p.v && (this.opacity = e1[8].p.v, this._opMdf = !0);
                        }
                    };
                    function SVGTransformEffect(t1, e1) {
                        this.init(e1);
                    }
                    extendPrototype([
                        TransformEffect
                    ], SVGTransformEffect);
                    function CVTransformEffect(t1) {
                        this.init(t1);
                    }
                    return extendPrototype([
                        TransformEffect
                    ], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie;
                });
                function addElementToList(t1, e1) {
                    e1.push(t1), t1._isDirty = !1, t1._changedStyles.length = 0, t1._changedAttributes.length = 0, t1._changedElements.length = 0, t1._textContent = null, t1.children.forEach(function(i1) {
                        addElementToList(i1, e1);
                    });
                }
                function addChangedAttributes(t1) {
                    for(var e1 = t1._changedAttributes, i1 = [], r1, a1 = 0; a1 < e1.length; a1 += 1)r1 = e1[a1], i1.push([
                        r1,
                        t1.attributes[r1]
                    ]);
                    return i1;
                }
                function addChangedStyles(t1) {
                    for(var e1 = t1._changedStyles, i1 = [], r1, a1 = 0; a1 < e1.length; a1 += 1)r1 = e1[a1], i1.push([
                        r1,
                        t1.style[r1]
                    ]);
                    return i1;
                }
                function addChangedElements(t1, e1) {
                    for(var i1 = t1._changedElements, r1 = [], a1, s1 = 0; s1 < i1.length; s1 += 1)a1 = i1[s1], r1.push([
                        a1[0].serialize(),
                        a1[1],
                        a1[2]
                    ]), addElementToList(a1[0], e1);
                    return r1;
                }
                function loadAnimation(t1) {
                    var e1 = t1.params, i1, r1, a1 = [], s1;
                    if (e1.renderer === "svg") i1 = document.createElement("div"), e1.container = i1;
                    else {
                        s1 = e1.rendererSettings.canvas, s1 || (s1 = document.createElement("canvas"), s1.width = e1.animationData.w, s1.height = e1.animationData.h);
                        var n1 = s1.getContext("2d");
                        e1.rendererSettings.context = n1;
                    }
                    r1 = lottie.loadAnimation(e1), r1.addEventListener("error", function(h1) {
                        console.log(h1);
                    }), r1.onError = function(h1) {
                        console.log("ERRORO", h1);
                    }, r1.addEventListener("_play", function() {
                        self.postMessage({
                            type: "playing",
                            payload: {
                                id: t1.id
                            }
                        });
                    }), r1.addEventListener("_pause", function() {
                        self.postMessage({
                            type: "paused",
                            payload: {
                                id: t1.id
                            }
                        });
                    }), e1.renderer === "svg" ? (r1.addEventListener("DOMLoaded", function() {
                        var h1 = i1.serialize();
                        addElementToList(i1, a1), self.postMessage({
                            type: "SVGloaded",
                            payload: {
                                id: t1.id,
                                tree: h1.children[0]
                            }
                        });
                    }), r1.addEventListener("drawnFrame", function(h1) {
                        for(var o1 = [], c1, g1 = 0; g1 < a1.length; g1 += 1)if (c1 = a1[g1], c1._isDirty) {
                            var b1 = {
                                id: c1.attributes.id,
                                styles: addChangedStyles(c1),
                                attributes: addChangedAttributes(c1),
                                elements: addChangedElements(c1, a1),
                                textContent: c1._textContent || void 0
                            };
                            o1.push(b1), c1._isDirty = !1, c1._changedAttributes.length = 0, c1._changedStyles.length = 0, c1._changedElements.length = 0, c1._textContent = null;
                        }
                        self.postMessage({
                            type: "SVGupdated",
                            payload: {
                                elements: o1,
                                id: t1.id,
                                currentTime: h1.currentTime
                            }
                        });
                    })) : s1._isProxy && r1.addEventListener("drawnFrame", function(h1) {
                        self.postMessage({
                            type: "CanvasUpdated",
                            payload: {
                                instructions: s1.instructions,
                                id: t1.id,
                                currentTime: h1.currentTime
                            }
                        }), s1.resetInstructions();
                    }), r1.addEventListener("DOMLoaded", function() {
                        self.postMessage({
                            type: "DOMLoaded",
                            payload: {
                                id: t1.id,
                                totalFrames: r1.totalFrames,
                                frameRate: r1.frameRate,
                                firstFrame: r1.firstFrame,
                                currentFrame: r1.currentFrame,
                                playDirection: r1.playDirection,
                                isSubframeEnabled: r1.isSubframeEnabled,
                                currentRawFrame: r1.currentRawFrame,
                                timeCompleted: r1.timeCompleted
                            }
                        });
                    }), animations[t1.id] = {
                        animation: r1,
                        events: {}
                    };
                }
                return {
                    loadAnimation
                };
            }();
            onmessage = function(t1) {
                var e1 = t1.data, i1 = e1.type, r1 = e1.payload;
                if (i1 === "load") lottieInternal.loadAnimation(r1);
                else if (i1 === "pause") animations[r1.id] && animations[r1.id].animation.pause();
                else if (i1 === "play") animations[r1.id] && animations[r1.id].animation.play();
                else if (i1 === "stop") animations[r1.id] && animations[r1.id].animation.stop();
                else if (i1 === "setSpeed") animations[r1.id] && animations[r1.id].animation.setSpeed(r1.value);
                else if (i1 === "setDirection") animations[r1.id] && animations[r1.id].animation.setDirection(r1.value);
                else if (i1 === "setLoop") animations[r1.id] && animations[r1.id].animation.setLoop(r1.value);
                else if (i1 === "goToAndPlay") animations[r1.id] && animations[r1.id].animation.goToAndPlay(r1.value, r1.isFrame);
                else if (i1 === "goToAndStop") animations[r1.id] && animations[r1.id].animation.goToAndStop(r1.value, r1.isFrame);
                else if (i1 === "setSubframe") animations[r1.id] && animations[r1.id].animation.setSubframe(r1.value);
                else if (i1 === "addEventListener") {
                    if (animations[r1.id]) {
                        var a1 = function() {
                            self.postMessage({
                                type: "event",
                                payload: {
                                    id: r1.id,
                                    callbackId: r1.callbackId,
                                    argument: arguments[0]
                                }
                            });
                        };
                        animations[r1.id].events[r1.callbackId] = {
                            callback: a1
                        }, animations[r1.id].animation.addEventListener(r1.eventName, a1);
                    }
                } else if (i1 === "removeEventListener") {
                    if (animations[r1.id]) {
                        var s1 = animations[r1.id].events[r1.callbackId];
                        animations[r1.id].animation.removeEventListener(r1.eventName, s1);
                    }
                } else i1 === "destroy" ? animations[r1.id] && (animations[r1.id].animation.destroy(), animations[r1.id] = null) : i1 === "resize" ? animations[r1.id] && animations[r1.id].animation.resize(r1.width, r1.height) : i1 === "playSegments" ? animations[r1.id] && animations[r1.id].animation.playSegments(r1.arr, r1.forceFlag) : i1 === "updateDocumentData" && animations[r1.id].animation.updateDocumentData(r1.path, r1.documentData, r1.index);
            };
        }
        function createWorker(t1) {
            var e1 = new Blob([
                "(" + t1.toString() + "())"
            ], {
                type: "text/javascript"
            }), i1 = URL.createObjectURL(e1);
            return new Worker(i1);
        }
        var lottie = function() {
            var t1 = createWorker(workerContent), e1 = 0, i1 = 0, r1 = {}, a1 = {
                rendererSettings: {}
            };
            function s1(S1, C1, M1, w1) {
                var F1;
                S1.type === "div" ? F1 = document.createElement("div") : F1 = document.createElementNS(S1.namespace, S1.type), S1.textContent && (F1.textContent = S1.textContent);
                for(var V1 in S1.attributes)Object.prototype.hasOwnProperty.call(S1.attributes, V1) && (V1 === "href" ? F1.setAttributeNS("http://www.w3.org/1999/xlink", V1, S1.attributes[V1]) : F1.setAttribute(V1, S1.attributes[V1]), V1 === "id" && (M1[S1.attributes[V1]] = F1));
                for(var I1 in S1.style)Object.prototype.hasOwnProperty.call(S1.style, I1) && (F1.style[I1] = S1.style[I1]);
                S1.children.forEach(function(L1) {
                    s1(L1, F1, M1);
                }), w1 ? C1.insertBefore(F1, w1) : C1.appendChild(F1);
            }
            var n1 = function() {
                return function(S1) {
                    var C1 = r1[S1.id];
                    C1._loaded = !0, C1.pendingCallbacks.forEach(function(M1) {
                        C1.animInstance.addEventListener(M1.eventName, M1.callback), M1.eventName === "DOMLoaded" && M1.callback();
                    }), C1.animInstance.totalFrames = S1.totalFrames, C1.animInstance.frameRate = S1.frameRate, C1.animInstance.firstFrame = S1.firstFrame, C1.animInstance.playDirection = S1.playDirection, C1.animInstance.currentFrame = S1.isSubframeEnabled ? S1.currentRawFrame : ~~S1.currentRawFrame, S1.timeCompleted !== S1.totalFrames && S1.currentFrame > S1.timeCompleted && (C1.animInstance.currentFrame = S1.timeCompleted);
                };
            }(), h1 = function() {
                return function(S1) {
                    var C1 = r1[S1.id], M1 = C1.container, w1 = C1.elements;
                    s1(S1.tree, M1, w1);
                };
            }();
            function o1(S1, C1) {
                for(var M1, w1 = 0; w1 < S1.length; w1 += 1){
                    M1 = S1[w1];
                    var F1 = C1[M1[1]];
                    if (F1) {
                        var V1;
                        M1[2] && (V1 = C1[M1[2]]), s1(M1[0], F1, C1, V1), S1.splice(w1, 1), w1 -= 1;
                    }
                }
            }
            function c1(S1, C1) {
                for(var M1, w1 = 0; w1 < C1.length; w1 += 1)M1 = C1[w1], S1.style[M1[0]] = M1[1];
            }
            function g1(S1, C1) {
                for(var M1, w1 = 0; w1 < C1.length; w1 += 1)M1 = C1[w1], S1.setAttribute(M1[0], M1[1]);
            }
            function b1(S1, C1) {
                C1 && (S1.textContent = C1);
            }
            function f1(S1) {
                var C1 = S1.elements, M1 = r1[S1.id];
                if (M1) {
                    for(var w1 = M1.elements, F1, V1 = 0; V1 < C1.length; V1 += 1){
                        F1 = C1[V1];
                        var I1 = w1[F1.id];
                        o1(F1.elements, w1), c1(I1, F1.styles), g1(I1, F1.attributes), b1(I1, F1.textContent);
                    }
                    M1.animInstance.currentFrame = S1.currentTime;
                }
            }
            function x1(S1) {
                var C1 = S1.getContext("2d"), M1 = {
                    beginPath: C1.beginPath,
                    closePath: C1.closePath,
                    rect: C1.rect,
                    clip: C1.clip,
                    clearRect: C1.clearRect,
                    setTransform: C1.setTransform,
                    moveTo: C1.moveTo,
                    bezierCurveTo: C1.bezierCurveTo,
                    lineTo: C1.lineTo,
                    fill: C1.fill,
                    save: C1.save,
                    restore: C1.restore
                };
                return function(w1) {
                    for(var F1 = 0; F1 < w1.length; F1 += 1){
                        var V1 = w1[F1], I1 = M1[V1.t];
                        I1 ? I1.apply(C1, V1.a) : C1[V1.t] = V1.a;
                    }
                };
            }
            function v1(S1) {
                var C1 = r1[S1.id];
                C1.instructionsHandler(S1.instructions);
            }
            function d1(S1) {
                var C1 = r1[S1.id];
                if (C1) {
                    var M1 = C1.callbacks;
                    M1[S1.callbackId] && M1[S1.callbackId].callback(S1.argument);
                }
            }
            function A1(S1) {
                var C1 = r1[S1.id];
                C1 && (C1.animInstance.isPaused = !1);
            }
            function m1(S1) {
                var C1 = r1[S1.id];
                C1 && (C1.animInstance.isPaused = !0);
            }
            var l1 = {
                DOMLoaded: n1,
                SVGloaded: h1,
                SVGupdated: f1,
                CanvasUpdated: v1,
                event: d1,
                playing: A1,
                paused: m1
            };
            t1.onmessage = function(S1) {
                l1[S1.data.type] && l1[S1.data.type](S1.data.payload);
            };
            function p1(S1) {
                return new Promise(function(C1, M1) {
                    var w1 = Object.assign({}, a1, S1);
                    w1.animType && !w1.renderer && (w1.renderer = w1.animType), w1.wrapper && (w1.container || (w1.container = w1.wrapper), delete w1.wrapper), w1.animationData ? C1(w1) : w1.path ? fetch(w1.path).then(function(F1) {
                        return F1.json();
                    }).then(function(F1) {
                        w1.animationData = F1, delete w1.path, C1(w1);
                    }) : M1();
                });
            }
            function u1(S1) {
                e1 += 1;
                var C1 = "lottie_animationId_" + e1, M1 = {
                    elements: {},
                    callbacks: {},
                    pendingCallbacks: [],
                    status: "init"
                }, w1 = {
                    id: C1,
                    isPaused: !0,
                    pause: function() {
                        t1.postMessage({
                            type: "pause",
                            payload: {
                                id: C1
                            }
                        });
                    },
                    play: function() {
                        t1.postMessage({
                            type: "play",
                            payload: {
                                id: C1
                            }
                        });
                    },
                    stop: function() {
                        t1.postMessage({
                            type: "stop",
                            payload: {
                                id: C1
                            }
                        });
                    },
                    setSpeed: function(F1) {
                        t1.postMessage({
                            type: "setSpeed",
                            payload: {
                                id: C1,
                                value: F1
                            }
                        });
                    },
                    setDirection: function(F1) {
                        t1.postMessage({
                            type: "setDirection",
                            payload: {
                                id: C1,
                                value: F1
                            }
                        });
                    },
                    setLoop: function(F1) {
                        t1.postMessage({
                            type: "setLoop",
                            payload: {
                                id: C1,
                                value: F1
                            }
                        });
                    },
                    goToAndStop: function(F1, V1) {
                        t1.postMessage({
                            type: "goToAndStop",
                            payload: {
                                id: C1,
                                value: F1,
                                isFrame: V1
                            }
                        });
                    },
                    goToAndPlay: function(F1, V1) {
                        t1.postMessage({
                            type: "goToAndPlay",
                            payload: {
                                id: C1,
                                value: F1,
                                isFrame: V1
                            }
                        });
                    },
                    playSegments: function(F1, V1) {
                        t1.postMessage({
                            type: "playSegments",
                            payload: {
                                id: C1,
                                arr: F1,
                                forceFlag: V1
                            }
                        });
                    },
                    setSubframe: function(F1) {
                        t1.postMessage({
                            type: "setSubframe",
                            payload: {
                                id: C1,
                                value: F1
                            }
                        });
                    },
                    addEventListener: function(F1, V1) {
                        if (!M1._loaded) M1.pendingCallbacks.push({
                            eventName: F1,
                            callback: V1
                        });
                        else {
                            i1 += 1;
                            var I1 = "callback_" + i1;
                            M1.callbacks[I1] = {
                                eventName: F1,
                                callback: V1
                            }, t1.postMessage({
                                type: "addEventListener",
                                payload: {
                                    id: C1,
                                    callbackId: I1,
                                    eventName: F1
                                }
                            });
                        }
                    },
                    removeEventListener: function(F1, V1) {
                        Object.keys(M1.callbacks).forEach(function(I1) {
                            M1.callbacks[I1].eventName === F1 && (M1.callbacks[I1].callback === V1 || !V1) && (delete M1.callbacks[I1], t1.postMessage({
                                type: "removeEventListener",
                                payload: {
                                    id: C1,
                                    callbackId: I1,
                                    eventName: F1
                                }
                            }));
                        });
                    },
                    destroy: function() {
                        M1.status === "init" ? M1.status = "destroyable" : (M1.status = "destroyed", r1[C1] = null, M1.container && (M1.container.innerHTML = ""), t1.postMessage({
                            type: "destroy",
                            payload: {
                                id: C1
                            }
                        }));
                    },
                    resize: function(F1, V1) {
                        var I1 = window.devicePixelRatio || 1;
                        t1.postMessage({
                            type: "resize",
                            payload: {
                                id: C1,
                                width: F1 || (M1.container ? M1.container.offsetWidth * I1 : 0),
                                height: V1 || (M1.container ? M1.container.offsetHeight * I1 : 0)
                            }
                        });
                    },
                    updateDocumentData: function(F1, V1, I1) {
                        t1.postMessage({
                            type: "updateDocumentData",
                            payload: {
                                id: C1,
                                path: F1,
                                documentData: V1,
                                index: I1
                            }
                        });
                    }
                };
                return M1.animInstance = w1, p1(S1).then(function(F1) {
                    if (M1.status === "destroyable") {
                        M1.animInstance.destroy();
                        return;
                    }
                    M1.status = "loaded";
                    var V1 = [];
                    if (F1.container && (M1.container = F1.container, delete F1.container), F1.renderer === "canvas") {
                        var I1 = F1.rendererSettings.canvas;
                        if (!I1) {
                            var L1 = window.devicePixelRatio || 1;
                            I1 = document.createElement("canvas"), M1.container.appendChild(I1), I1.width = (M1.container ? M1.container.offsetWidth : F1.animationData.w) * L1, I1.height = (M1.container ? M1.container.offsetHeight : F1.animationData.h) * L1, I1.style.width = "100%", I1.style.height = "100%";
                        }
                        var B1 = I1;
                        typeof OffscreenCanvas > "u" ? (M1.canvas = I1, M1.instructionsHandler = x1(I1)) : (I1 instanceof OffscreenCanvas || (B1 = I1.transferControlToOffscreen(), F1.rendererSettings.canvas = B1), V1.push(B1));
                    }
                    r1[C1] = M1, t1.postMessage({
                        type: "load",
                        payload: {
                            params: F1,
                            id: C1
                        }
                    }, V1);
                }), w1;
            }
            var P1 = {
                loadAnimation: u1
            };
            return P1;
        }();
        return lottie;
    });
}), yt = dt(); /*! Bundled license information:

lottie-web/build/player/lottie_worker.js:
  (*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   *)
*/ 

},{"./chunk-U2GK2GFR.mjs":"bBhes","./chunk-XNFEUXDS.mjs":"4Lvnj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["l2p7n"], null, "parcelRequire8861")

//# sourceMappingURL=lottie_worker-WHOD5EO7-64CFFH2E.d6d475da.js.map
