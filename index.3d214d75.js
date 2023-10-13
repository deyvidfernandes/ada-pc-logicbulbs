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
})({"3smKr":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
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

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _logicRoomArrayJs = require("./pages/logicRoomArray.js");
var _logicRoomArrayJsDefault = parcelHelpers.interopDefault(_logicRoomArrayJs);
var _homePageJs = require("./pages/home/HomePage.js");
var _homePageJsDefault = parcelHelpers.interopDefault(_homePageJs);
class Application {
    static root = document.getElementById("root");
    static pages = {
        common: [],
        logicRooms: []
    };
    static isBulbOn = false;
    static addPage(page) {
        this.pages.common.push(page);
    }
    static addLogicRoom(logicRoom) {
        this.pages.logicRooms.push(logicRoom);
    }
    static addLogicRoomsFromArray(logicRoomArray) {
        this.pages.logicRooms = [
            ...logicRoomArray
        ];
    }
    static changePageById(id) {
        for(const key in this.pages){
            const pageArray = this.pages[key];
            const newPage = pageArray.find((page)=>page.id == id);
            if (newPage) this.setPage(newPage);
        }
    }
    static setPage(newPage) {
        this.root.innerHTML = newPage.htmlCode;
        newPage.pageLogic(this);
    }
}
Application.addLogicRoomsFromArray((0, _logicRoomArrayJsDefault.default));
Application.addPage((0, _homePageJsDefault.default));
// Application.addNewLogicRoom(
//     new LogicRoom(
//         "OR", (a, b) => a || b, 
//         "https://upload.wikimedia.org/wikipedia/commons/b/b5/OR_ANSI.svg", 
//         "or"
//     ),
// )
//     new LogicRoom(
//         "OR", (a, b) => a || b, 
//         "https://upload.wikimedia.org/wikipedia/commons/b/b5/OR_ANSI.svg", 
//         "or"
//     ),
// )
Application.changePageById("home") // NAND Gate by Mohamed Mb from <a href="https://thenounproject.com/browse/icons/term/nand-gate/" target="_blank" title="NAND Gate Icons">Noun Project</a> (CC BY 3.0)
 // NAND Gate by Mohamed Mb from <a href="https://thenounproject.com/browse/icons/term/nand-gate/" target="_blank" title="NAND Gate Icons">Noun Project</a> (CC BY 3.0)
;

},{"./pages/logicRoomArray.js":"dayyg","./pages/home/HomePage.js":"2fCYH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dayyg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logicRoom = require("./logicRooms/LogicRoom");
var _logicRoomDefault = parcelHelpers.interopDefault(_logicRoom);
exports.default = logicRoomArray = [
    new (0, _logicRoomDefault.default)("None", (a)=>a, "https://upload.wikimedia.org/wikipedia/commons/9/98/Ellipsis.svg", "none"),
    new (0, _logicRoomDefault.default)("NOT", (a)=>!a, "https://upload.wikimedia.org/wikipedia/commons/b/bc/NOT_ANSI.svg", "not"),
    new (0, _logicRoomDefault.default)("AND", (a, b)=>a && b, "https://upload.wikimedia.org/wikipedia/commons/6/64/AND_ANSI.svg", "and"),
    new (0, _logicRoomDefault.default)("OR", (a, b)=>a || b, "https://upload.wikimedia.org/wikipedia/commons/b/b5/OR_ANSI.svg", "or"),
    new (0, _logicRoomDefault.default)("NAND", (a, b)=>!(a && b), "https://upload.wikimedia.org/wikipedia/commons/f/f2/NAND_ANSI.svg", "nand"),
    new (0, _logicRoomDefault.default)("NOR", (a, b)=>!(a || b), "https://upload.wikimedia.org/wikipedia/commons/6/6c/NOR_ANSI.svg", "nor"),
    new (0, _logicRoomDefault.default)("XOR", (a, b)=>a && !b || !a && b, "https://upload.wikimedia.org/wikipedia/commons/0/01/XOR_ANSI.svg", "xor"),
    new (0, _logicRoomDefault.default)("XNOR", (a, b)=>!(a && !b || !a && b), "https://upload.wikimedia.org/wikipedia/commons/d/d6/XNOR_ANSI.svg", "xnor")
];

},{"./logicRooms/LogicRoom":"7KOd4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7KOd4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logicJs = require("./logic.js");
var _logicJsDefault = parcelHelpers.interopDefault(_logicJs);
const getFunctionArgs = (func)=>{
    return (func + "").replace(/[/][/].*$/mg, "") // strip single-line comments
    .replace(/\s+/g, "") // strip white space
    .replace(/[/][*][^/*]*[*][/]/g, "") // strip multi-line comments  
    .split("){", 1)[0].replace(/^[^(]*[(]/, "") // extract the parameters  
    .replace(/=[^,]+/g, "") // strip any ES6 defaults  
    .split(",").filter(Boolean); // split & filter [""]
};
logicRoomTemplate = `
    <anchor ref="home" id="return-anchor"><img src="../../static/opened-door.svg"/></anchor>
    <h1 id="roomName"></h1>

    <dotlottie-player src="../../static/animation_lnkzkhyu.lottie" background="transparent" speed="1" style="width: 300px; height: 200px" direction="1" mode="normal"></dotlottie-player>
            
    <div id="switch-container">
        <input type="checkbox" id="light-switch1" name="2"/>
        <label for="light-switch1" id="light-switch-label1">
            <div class="switch"></div>
        </label>
        
        <input type="checkbox" id="light-switch2" name="2"/>
        <label for="light-switch2" id="light-switch-label2">
            <div class="switch"></div>
        </label>
    </div>
    <img class="logic-gate-icon" src="" height="64px">
`;
class LogicRoom {
    name;
    roomLogic;
    pageLogic;
    htmlCode;
    iconSrc;
    id;
    constructor(name, roomLogic, iconSrc, id){
        this.name = name;
        this.roomLogic = roomLogic;
        this.pageLogic = (application)=>{
            (0, _logicJsDefault.default)(application, roomLogic);
        };
        this.iconSrc = iconSrc;
        this.id = id;
        this.htmlCode = logicRoomTemplate.replace('<h1 id="roomName"></h1>', `<h1 id="roomName">${name}</h1>`);
        this.htmlCode = this.htmlCode.replace('<img class="logic-gate-icon" src="" height="64px">', `<img class="logic-gate-icon" src="${iconSrc}" height="128px">`);
        if (getFunctionArgs(roomLogic).length == 1) this.htmlCode = this.htmlCode.replace(`
        <input type="checkbox" id="light-switch2" name="2"/>
        <label for="light-switch2" id="light-switch-label2">
            <div class="switch"></div>
        </label>`, "").replace('height="128px">', `height="96px">`);
    }
}
exports.default = LogicRoom;

},{"./logic.js":"gEt4h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gEt4h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _playerComponent = require("@dotlottie/player-component");
var _anchor = require("../../components/anchor");
var _anchorDefault = parcelHelpers.interopDefault(_anchor);
let isAnimationPlaying = false;
let bulbOnAnimationPosition = "70%";
exports.default = addRoomPageLogic = (application, booleanLogic)=>{
    const player = document.querySelector("dotlottie-player");
    player.style.opacity = 0;
    application.isBulbOn = false;
    player.addEventListener("ready", ()=>{
        if (booleanLogic(false, false)) {
            application.isBulbOn = true;
            player.seek(bulbOnAnimationPosition);
        }
        player.style.opacity = 1;
    });
    const switch1 = document.getElementById("light-switch1");
    const switch2 = document.getElementById("light-switch2");
    const playAnimation = ()=>{
        isAnimationPlaying = true;
        switch1.style.cursor = "default";
        if (switch2) switch2.style.cursor = "default";
        player.play();
    };
    const endAnimation = ()=>{
        isAnimationPlaying = false;
        switch1.style.cursor = "pointer";
        if (switch2) switch2.style.cursor = "pointer";
        player.stop();
        player.seek(bulbOnAnimationPosition);
    };
    const updateBulb = ()=>{
        if (booleanLogic(switch1.checked, switch2?.checked) && !application.isBulbOn) {
            playAnimation();
            application.isBulbOn = true;
            setTimeout(()=>{
                endAnimation();
            }, 1500);
        } else if (!booleanLogic(switch1.checked, switch2?.checked)) {
            player.stop();
            application.isBulbOn = false;
        }
    };
    switch1.addEventListener("click", (event)=>{
        if (isAnimationPlaying) event.preventDefault();
        else updateBulb();
    });
    switch2?.addEventListener("click", (event)=>{
        if (isAnimationPlaying) event.preventDefault();
        else updateBulb();
    });
    (0, _anchorDefault.default)(application);
};

},{"@dotlottie/player-component":"kT7zd","../../components/anchor":"Oeyp8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kT7zd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlayMode", ()=>(0, _chunkZDBUHXQ5Mjs.g));
parcelHelpers.export(exports, "DotLottiePlayer", ()=>r) //# sourceMappingURL=out.js.map
;
var _chunk6BVPVBJEMjs = require("./chunk-6BVPVBJE.mjs");
var _chunkZDBUHXQ5Mjs = require("./chunk-ZDBUHXQ5.mjs");
var _chunkU2GK2GFRMjs = require("./chunk-U2GK2GFR.mjs");
var _chunkXNFEUXDSMjs = require("./chunk-XNFEUXDS.mjs");
var I = (s, t)=>t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? {
        ...t,
        finisher (e) {
            e.createProperty(t.key, s);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: t.key,
        initializer () {
            typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
        },
        finisher (e) {
            e.createProperty(t.key, s);
        }
    }, T = (s, t, e)=>{
    t.constructor.createProperty(e, s);
};
function l(s) {
    return (t, e)=>e !== void 0 ? T(s, t, e) : I(s, t);
}
function L(s) {
    return l({
        ...s,
        state: !0
    });
}
var u = ({ finisher: s, descriptor: t })=>(e, i)=>{
        var o;
        if (i === void 0) {
            let d = (o = e.originalKey) !== null && o !== void 0 ? o : e.key, m = t != null ? {
                kind: "method",
                placement: "prototype",
                key: d,
                descriptor: t(e.key)
            } : {
                ...e,
                key: d
            };
            return s != null && (m.finisher = function(O) {
                s(O, d);
            }), m;
        }
        {
            let d = e.constructor;
            t !== void 0 && Object.defineProperty(e, i, t(i)), s?.(d, i);
        }
    };
function w(s, t) {
    return u({
        descriptor: (e)=>{
            let i = {
                get () {
                    var o, d;
                    return (d = (o = this.renderRoot) === null || o === void 0 ? void 0 : o.querySelector(s)) !== null && d !== void 0 ? d : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                let o = typeof e == "symbol" ? Symbol() : "__" + e;
                i.get = function() {
                    var d, m;
                    return this[o] === void 0 && (this[o] = (m = (d = this.renderRoot) === null || d === void 0 ? void 0 : d.querySelector(s)) !== null && m !== void 0 ? m : null), this[o];
                };
            }
            return i;
        }
    });
}
var g;
((g = window.HTMLSlotElement) === null || g === void 0 ? void 0 : g.prototype.assignedElements) != null ? (s, t)=>s.assignedElements(t) : (s, t)=>s.assignedNodes(t).filter((e)=>e.nodeType === Node.ELEMENT_NODE);
var P = {
    name: "@dotlottie/player-component",
    version: "2.7.0",
    description: "dotLottie animation player web component.",
    repository: "https://github.com/dotlottie/player-component.git",
    homepage: "https://dotlottie.com/players",
    bugs: "https://github.com/dotlottie/player-component/issues",
    author: "Jawish Hameed <jawish@lottiefiles.com>",
    license: "MIT",
    main: "dist/dotlottie-player.js",
    module: "dist/dotlottie-player.mjs",
    types: "dist/dotlottie-player.d.ts",
    files: [
        "dist"
    ],
    keywords: [
        "dotlottie",
        "animation",
        "web component",
        "component",
        "lit-element",
        "player"
    ],
    scripts: {
        build: "tsup",
        "cypress:open": "cypress open --component",
        dev: "tsup --watch",
        lint: "eslint .",
        "lint:fix": "eslint --fix",
        test: "cypress run --component",
        "type-check": "tsc --noEmit"
    },
    dependencies: {
        lit: "^2.7.5"
    },
    devDependencies: {
        "@dotlottie/common": "workspace:^",
        "@vitejs/plugin-legacy": "^4.1.0",
        "axe-core": "^4.7.2",
        cypress: "^12.11.0",
        "cypress-axe": "^1.4.0",
        "cypress-ct-lit": "^0.3.2",
        "lottie-web": "^5.12.2",
        terser: "^5.19.0",
        tsup: "^6.1.3",
        typescript: "^4.7.4",
        vite: "^4.3.9"
    },
    publishConfig: {
        access: "public"
    },
    browserslist: [
        "> 3%"
    ]
};
var k = "dotlottie-player";
var r = class extends (0, _chunk6BVPVBJEMjs.b) {
    defaultTheme = "";
    container;
    playMode = (0, _chunkZDBUHXQ5Mjs.g).Normal;
    autoplay = !1;
    background = "transparent";
    controls = !1;
    direction = 1;
    hover = !1;
    loop;
    renderer = "svg";
    speed = 1;
    src;
    intermission = 0;
    activeAnimationId = null;
    light = !1;
    worker = !1;
    activeStateId;
    _seeker = 0;
    _dotLottieCommonPlayer;
    _io;
    _loop;
    _renderer = "svg";
    _unsubscribeListeners;
    _hasMultipleAnimations = !1;
    _hasMultipleThemes = !1;
    _hasMultipleStates = !1;
    _popoverIsOpen = !1;
    _animationsTabIsOpen = !1;
    _statesTabIsOpen = !1;
    _styleTabIsOpen = !1;
    _themesForCurrentAnimation = [];
    _statesForCurrentAnimation = [];
    _parseLoop(t) {
        let e = parseInt(t, 10);
        return Number.isInteger(e) && e > 0 ? (this._loop = e, e) : typeof t == "string" && [
            "true",
            "false"
        ].includes(t) ? (this._loop = t === "true", this._loop) : ((0, _chunkZDBUHXQ5Mjs.c)("loop must be a positive integer or a boolean"), !1);
    }
    _handleSeekChange(t) {
        let e = t.currentTarget;
        try {
            let i = parseInt(e.value, 10);
            if (!this._dotLottieCommonPlayer) return;
            let o = i / 100 * this._dotLottieCommonPlayer.totalFrames;
            this.seek(o);
        } catch  {
            throw (0, _chunkZDBUHXQ5Mjs.a)("Error while seeking animation");
        }
    }
    _initListeners() {
        let t = this._dotLottieCommonPlayer;
        if (t === void 0) {
            (0, _chunkZDBUHXQ5Mjs.c)("player not initialized - cannot add event listeners", "dotlottie-player-component");
            return;
        }
        this._unsubscribeListeners = t.state.subscribe((e$1, i)=>{
            this._seeker = e$1.seeker, this.requestUpdate(), i.currentState !== e$1.currentState && this.dispatchEvent(new CustomEvent(e$1.currentState)), this.dispatchEvent(new CustomEvent((0, _chunkZDBUHXQ5Mjs.e).Frame, {
                detail: {
                    frame: e$1.frame,
                    seeker: e$1.seeker
                }
            })), this.dispatchEvent(new CustomEvent((0, _chunkZDBUHXQ5Mjs.e).VisibilityChange, {
                detail: {
                    visibilityPercentage: e$1.visibilityPercentage
                }
            }));
        }), t.addEventListener("complete", ()=>{
            this.dispatchEvent(new CustomEvent((0, _chunkZDBUHXQ5Mjs.e).Complete));
        }), t.addEventListener("loopComplete", ()=>{
            this.dispatchEvent(new CustomEvent((0, _chunkZDBUHXQ5Mjs.e).LoopComplete));
        }), t.addEventListener("DOMLoaded", ()=>{
            let e$1 = this.getManifest();
            e$1 && e$1.themes && (this._themesForCurrentAnimation = e$1.themes.filter((i)=>i.animations.includes(this.getCurrentAnimationId() || ""))), e$1 && e$1.states && (this._hasMultipleStates = e$1.states.length > 0, this._statesForCurrentAnimation = [], e$1.states.forEach((i)=>{
                this._statesForCurrentAnimation.push(i);
            })), this.dispatchEvent(new CustomEvent((0, _chunkZDBUHXQ5Mjs.e).Ready));
        }), t.addEventListener("data_ready", ()=>{
            this.dispatchEvent(new CustomEvent((0, _chunkZDBUHXQ5Mjs.e).DataReady));
        }), t.addEventListener("data_failed", ()=>{
            this.dispatchEvent(new CustomEvent((0, _chunkZDBUHXQ5Mjs.e).DataFail));
        }), window && window.addEventListener("click", (e)=>this._clickOutListener(e));
    }
    async load(t, e, i) {
        if (!this.shadowRoot) return;
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.destroy(), this._dotLottieCommonPlayer = new (0, _chunkZDBUHXQ5Mjs.j)(t, this.container, {
            rendererSettings: e ?? {
                scaleMode: "noScale",
                clearCanvas: !0,
                progressiveLoad: !0,
                hideOnTransparent: !0
            },
            hover: this.hasAttribute("hover") ? this.hover : void 0,
            renderer: this.hasAttribute("renderer") ? this._renderer : void 0,
            loop: this.hasAttribute("loop") ? this._loop : void 0,
            direction: this.hasAttribute("direction") ? this.direction === 1 ? 1 : -1 : void 0,
            speed: this.hasAttribute("speed") ? this.speed : void 0,
            intermission: this.hasAttribute("intermission") ? Number(this.intermission) : void 0,
            playMode: this.hasAttribute("playMode") ? this.playMode : void 0,
            autoplay: this.hasAttribute("autoplay") ? this.autoplay : void 0,
            activeAnimationId: this.hasAttribute("activeAnimationId") ? this.activeAnimationId : void 0,
            defaultTheme: this.hasAttribute("defaultTheme") ? this.defaultTheme : void 0,
            light: this.light,
            worker: this.worker,
            activeStateId: this.hasAttribute("activeStateId") ? this.activeStateId : void 0
        }), await this._dotLottieCommonPlayer.load(i);
        let o = this.getManifest();
        this._hasMultipleAnimations = this.animationCount() > 1, o && (o.themes && (this._themesForCurrentAnimation = o.themes.filter((d)=>d.animations.includes(this.getCurrentAnimationId() || "")), this._hasMultipleThemes = o.themes.length > 0), o.states && (this._hasMultipleStates = o.states.length > 0, this._statesForCurrentAnimation = [], o.states.forEach((d)=>{
            this._statesForCurrentAnimation.push(d);
        }))), this._initListeners();
    }
    getCurrentAnimationId() {
        return this._dotLottieCommonPlayer?.currentAnimationId;
    }
    animationCount() {
        return this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.getManifest()?.animations.length || 0;
    }
    animations() {
        return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.getManifest()?.animations.map((e)=>e.id) || [] : [];
    }
    currentAnimation() {
        return !this._dotLottieCommonPlayer || !this._dotLottieCommonPlayer.currentAnimationId ? "" : this._dotLottieCommonPlayer.currentAnimationId;
    }
    getState() {
        return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.getState() : (0, _chunkZDBUHXQ5Mjs.i);
    }
    getManifest() {
        return this._dotLottieCommonPlayer?.getManifest();
    }
    getLottie() {
        return this._dotLottieCommonPlayer?.getAnimationInstance();
    }
    getVersions() {
        return {
            lottieWebVersion: (0, _chunkZDBUHXQ5Mjs.j).getLottieWebVersion(),
            dotLottiePlayerVersion: `${P.version}`
        };
    }
    previous(t) {
        this._dotLottieCommonPlayer?.previous(t);
    }
    next(t) {
        this._dotLottieCommonPlayer?.next(t);
    }
    reset() {
        this._dotLottieCommonPlayer?.reset();
    }
    play(t, e) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.play(t, e);
    }
    pause() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.pause();
    }
    stop() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.stop();
    }
    playOnShow(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.playOnShow(t);
    }
    stopPlayOnShow() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.stopPlayOnShow();
    }
    playOnScroll(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.playOnScroll(t);
    }
    stopPlayOnScroll() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.stopPlayOnScroll();
    }
    seek(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.seek(t);
    }
    snapshot(t = !0) {
        if (!this.shadowRoot) return "";
        let e = this.shadowRoot.querySelector(".animation svg"), i = new XMLSerializer().serializeToString(e);
        if (t) {
            let o = document.createElement("a");
            o.href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`, o.download = `download_${this._seeker}.svg`, document.body.appendChild(o), o.click(), document.body.removeChild(o);
        }
        return i;
    }
    setTheme(t) {
        this._dotLottieCommonPlayer?.setDefaultTheme(t);
    }
    themes() {
        return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.getManifest()?.themes?.map((e)=>e.id) || [] : [];
    }
    getDefaultTheme() {
        return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.defaultTheme : "";
    }
    getActiveStateMachine() {
        return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.activeStateId : "";
    }
    _freeze() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.freeze();
    }
    setSpeed(t = 1) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.setSpeed(t);
    }
    setDirection(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.setDirection(t);
    }
    setLooping(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.setLoop(t);
    }
    isLooping() {
        return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.loop : !1;
    }
    togglePlay() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.togglePlay();
    }
    toggleLooping() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.toggleLoop();
    }
    setPlayMode(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.setMode(t);
    }
    enterInteractiveMode(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.enterInteractiveMode(t);
    }
    exitInteractiveMode() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.exitInteractiveMode();
    }
    revertToManifestValues(t) {
        this._dotLottieCommonPlayer?.revertToManifestValues(t);
    }
    static get styles() {
        return 0, _chunk6BVPVBJEMjs.c;
    }
    async firstUpdated() {
        this.container = this.shadowRoot?.querySelector("#animation"), "IntersectionObserver" in window && (this._io = new IntersectionObserver((t)=>{
            t[0] !== void 0 && t[0].isIntersecting ? this._dotLottieCommonPlayer?.currentState === (0, _chunkZDBUHXQ5Mjs.f).Frozen && this.play() : this._dotLottieCommonPlayer?.currentState === (0, _chunkZDBUHXQ5Mjs.f).Playing && this._freeze();
        }), this._io.observe(this.container)), this.loop ? this._parseLoop(this.loop) : this.hasAttribute("loop") && this._parseLoop("true"), this.renderer === "svg" ? this._renderer = "svg" : this.renderer === "canvas" ? this._renderer = "canvas" : this.renderer === "html" && (this._renderer = "html"), this.src && await this.load(this.src);
    }
    disconnectedCallback() {
        this._io && (this._io.disconnect(), this._io = void 0), this._dotLottieCommonPlayer?.destroy(), this._unsubscribeListeners?.(), window && window.removeEventListener("click", (t)=>this._clickOutListener(t));
    }
    _clickOutListener(t) {
        !t.composedPath().some((i)=>i instanceof HTMLElement ? i.classList.contains("popover") || i.id === "lottie-animation-options" : !1) && this._popoverIsOpen && (this._popoverIsOpen = !1, this.requestUpdate());
    }
    renderControls() {
        let t = this._dotLottieCommonPlayer?.currentState === (0, _chunkZDBUHXQ5Mjs.f).Playing, e = this._dotLottieCommonPlayer?.currentState === (0, _chunkZDBUHXQ5Mjs.f).Paused;
        return (0, _chunk6BVPVBJEMjs.a)`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations ? (0, _chunk6BVPVBJEMjs.a)`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            ` : (0, _chunk6BVPVBJEMjs.a)``}
        <button
          id="lottie-play-button"
          @click=${()=>{
            this.togglePlay();
        }}
          class=${t || e ? `active ${this._hasMultipleAnimations ? "btn-spacing-center" : "btn-spacing-right"}` : `${this._hasMultipleAnimations ? "btn-spacing-center" : "btn-spacing-right"}`}
          aria-label="play / pause animation"
        >
          ${t ? (0, _chunk6BVPVBJEMjs.a)`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              ` : (0, _chunk6BVPVBJEMjs.a)`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations ? (0, _chunk6BVPVBJEMjs.a)`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            ` : (0, _chunk6BVPVBJEMjs.a)``}
        <input
          id="lottie-seeker-input"
          class="seeker ${this._dotLottieCommonPlayer?.direction === -1 ? "to-left" : ""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${(i)=>this._handleSeekChange(i)}
          @mousedown=${()=>{
            this._freeze();
        }}
          @mouseup=${()=>{
            this._dotLottieCommonPlayer?.unfreeze();
        }}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${this._dotLottieCommonPlayer?.loop ? "active btn-spacing-left" : "btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations || this._hasMultipleThemes || this._hasMultipleStates ? (0, _chunk6BVPVBJEMjs.a)`
              <button
                id="lottie-animation-options"
                @click=${()=>{
            this._popoverIsOpen = !this._popoverIsOpen, this.requestUpdate();
        }}
                aria-label="options"
                class="btn-spacing-right"
                style=${`background-color: ${this._popoverIsOpen ? "var(--lottie-player-toolbar-icon-hover-color)" : ""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            ` : (0, _chunk6BVPVBJEMjs.a)``}
      </div>
      ${this._popoverIsOpen ? (0, _chunk6BVPVBJEMjs.a)`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length > 0 ? "84px" : "auto"}"
            >
              ${!this._animationsTabIsOpen && !this._styleTabIsOpen && !this._statesTabIsOpen ? (0, _chunk6BVPVBJEMjs.a)`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{
            this._animationsTabIsOpen = !this._animationsTabIsOpen, this.requestUpdate();
        }}
                      @keydown=${(i)=>{
            (i.code === "Space" || i.code === "Enter") && (this._animationsTabIsOpen = !this._animationsTabIsOpen, this.requestUpdate());
        }}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  ` : (0, _chunk6BVPVBJEMjs.a)``}
              ${this._hasMultipleThemes && !this._styleTabIsOpen && !this._animationsTabIsOpen && !this._statesTabIsOpen ? (0, _chunk6BVPVBJEMjs.a)` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{
            this._styleTabIsOpen = !this._styleTabIsOpen, this.requestUpdate();
        }}
                    @keydown=${(i)=>{
            (i.code === "Space" || i.code === "Enter") && (this._styleTabIsOpen = !this._styleTabIsOpen, this.requestUpdate());
        }}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>` : ""}
              ${this._hasMultipleStates && !this._styleTabIsOpen && !this._animationsTabIsOpen && !this._statesTabIsOpen ? (0, _chunk6BVPVBJEMjs.a)` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{
            this._statesTabIsOpen = !this._statesTabIsOpen, this.requestUpdate();
        }}
                    @keydown=${(i)=>{
            (i.code === "Space" || i.code === "Enter") && (this._statesTabIsOpen = !this._statesTabIsOpen, this.requestUpdate());
        }}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>` : ""}
              ${this._animationsTabIsOpen ? (0, _chunk6BVPVBJEMjs.a)`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{
            this._animationsTabIsOpen = !this._animationsTabIsOpen, this.requestUpdate();
        }}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map((i)=>(0, _chunk6BVPVBJEMjs.a)`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${i}`}
                                @click=${()=>{
                this._animationsTabIsOpen = !this._animationsTabIsOpen, this._popoverIsOpen = !this._popoverIsOpen, this.play(i), this.requestUpdate();
            }}
                                @keydown=${(o)=>{
                (o.code === "Space" || o.code === "Enter") && (this._animationsTabIsOpen = !this._animationsTabIsOpen, this._popoverIsOpen = !this._popoverIsOpen, this.play(i), this.requestUpdate());
            }}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation() === i ? (0, _chunk6BVPVBJEMjs.a)`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      ` : (0, _chunk6BVPVBJEMjs.a)`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${i}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div> ` : (0, _chunk6BVPVBJEMjs.a)``}
              ${this._styleTabIsOpen ? (0, _chunk6BVPVBJEMjs.a)`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{
            this._styleTabIsOpen = !this._styleTabIsOpen, this.requestUpdate();
        }}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${this._dotLottieCommonPlayer?.defaultTheme === "" ? (0, _chunk6BVPVBJEMjs.a)`` : (0, _chunk6BVPVBJEMjs.a)`
                              <button
                                class="reset-btn"
                                @click=${()=>{
            this.setTheme(""), this.requestUpdate();
        }}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map((i)=>(0, _chunk6BVPVBJEMjs.a)`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${i.id}"
                                @click=${()=>{
                this.setTheme(i.id);
            }}
                                @keydown=${(o)=>{
                (o.code === "Space" || o.code === "Enter") && this.setTheme(i.id);
            }}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme() === i.id ? (0, _chunk6BVPVBJEMjs.a)`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      ` : (0, _chunk6BVPVBJEMjs.a)`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${i.id}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>` : (0, _chunk6BVPVBJEMjs.a)``}
              ${this._statesTabIsOpen ? (0, _chunk6BVPVBJEMjs.a)`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{
            this._statesTabIsOpen = !this._statesTabIsOpen, this.requestUpdate();
        }}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{
            this.exitInteractiveMode(), this.requestUpdate();
        }}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map((i)=>(0, _chunk6BVPVBJEMjs.a)`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${i}"
                                @click=${()=>{
                this.enterInteractiveMode(i);
            }}
                                @keydown=${(o)=>{
                (o.code === "Space" || o.code === "Enter") && this.enterInteractiveMode(i);
            }}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine() === i ? (0, _chunk6BVPVBJEMjs.a)`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      ` : (0, _chunk6BVPVBJEMjs.a)`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${i}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>` : (0, _chunk6BVPVBJEMjs.a)``}
            </div>
          ` : (0, _chunk6BVPVBJEMjs.a)``}
    `;
    }
    render() {
        let t = this.controls ? "main controls" : "main", e = this.controls ? "animation controls" : "animation";
        return (0, _chunk6BVPVBJEMjs.a)`
      <div id="animation-container" class=${t} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${e} style="background:${this.background};">
          ${this._dotLottieCommonPlayer?.currentState === (0, _chunkZDBUHXQ5Mjs.f).Error ? (0, _chunk6BVPVBJEMjs.a)` <div class="error">⚠️</div> ` : void 0}
        </div>
        ${this.controls ? this.renderControls() : void 0}
      </div>
    `;
    }
};
(0, _chunkXNFEUXDSMjs.a)([
    l({
        type: String
    })
], r.prototype, "defaultTheme", 2), (0, _chunkXNFEUXDSMjs.a)([
    w("#animation")
], r.prototype, "container", 2), (0, _chunkXNFEUXDSMjs.a)([
    l()
], r.prototype, "playMode", 2), (0, _chunkXNFEUXDSMjs.a)([
    l({
        type: Boolean
    })
], r.prototype, "autoplay", 2), (0, _chunkXNFEUXDSMjs.a)([
    l({
        type: String
    })
], r.prototype, "background", 2), (0, _chunkXNFEUXDSMjs.a)([
    l({
        type: Boolean
    })
], r.prototype, "controls", 2), (0, _chunkXNFEUXDSMjs.a)([
    l({
        type: Number
    })
], r.prototype, "direction", 2), (0, _chunkXNFEUXDSMjs.a)([
    l({
        type: Boolean
    })
], r.prototype, "hover", 2), (0, _chunkXNFEUXDSMjs.a)([
    l({
        type: String
    })
], r.prototype, "loop", 2), (0, _chunkXNFEUXDSMjs.a)([
    l({
        type: String
    })
], r.prototype, "renderer", 2), (0, _chunkXNFEUXDSMjs.a)([
    l({
        type: Number
    })
], r.prototype, "speed", 2), (0, _chunkXNFEUXDSMjs.a)([
    l({
        type: String
    })
], r.prototype, "src", 2), (0, _chunkXNFEUXDSMjs.a)([
    l()
], r.prototype, "intermission", 2), (0, _chunkXNFEUXDSMjs.a)([
    l({
        type: String
    })
], r.prototype, "activeAnimationId", 2), (0, _chunkXNFEUXDSMjs.a)([
    l({
        type: Boolean
    })
], r.prototype, "light", 2), (0, _chunkXNFEUXDSMjs.a)([
    l({
        type: Boolean
    })
], r.prototype, "worker", 2), (0, _chunkXNFEUXDSMjs.a)([
    l({
        type: String
    })
], r.prototype, "activeStateId", 2), (0, _chunkXNFEUXDSMjs.a)([
    L()
], r.prototype, "_seeker", 2);
customElements.get(k) || customElements.define(k, r); /*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/ 

},{"./chunk-6BVPVBJE.mjs":"ciiRb","./chunk-ZDBUHXQ5.mjs":"hu351","./chunk-U2GK2GFR.mjs":"bBhes","./chunk-XNFEUXDS.mjs":"4Lvnj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ciiRb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>Ut) //# sourceMappingURL=out.js.map
;
parcelHelpers.export(exports, "b", ()=>E);
parcelHelpers.export(exports, "c", ()=>Kt);
var N = window, O = N.ShadowRoot && (N.ShadyCSS === void 0 || N.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, M = Symbol(), tt = new WeakMap, k = class {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== M) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o, e = this.t;
        if (O && t === void 0) {
            let o = e !== void 0 && e.length === 1;
            o && (t = tt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), o && tt.set(e, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}, et = (r)=>new k(typeof r == "string" ? r : r + "", void 0, M), j = (r, ...t)=>{
    let e = r.length === 1 ? r[0] : t.reduce((o, i, n)=>o + ((s)=>{
            if (s._$cssResult$ === !0) return s.cssText;
            if (typeof s == "number") return s;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(i) + r[n + 1], r[0]);
    return new k(e, r, M);
}, L = (r, t)=>{
    O ? r.adoptedStyleSheets = t.map((e)=>e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e)=>{
        let o = document.createElement("style"), i = N.litNonce;
        i !== void 0 && o.setAttribute("nonce", i), o.textContent = e.cssText, r.appendChild(o);
    });
}, R = O ? (r)=>r : (r)=>r instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (let o of t.cssRules)e += o.cssText;
        return et(e);
    })(r) : r;
var B, T = window, ot = T.trustedTypes, xt = ot ? ot.emptyScript : "", it = T.reactiveElementPolyfillSupport, I = {
    toAttribute (r, t) {
        switch(t){
            case Boolean:
                r = r ? xt : null;
                break;
            case Object:
            case Array:
                r = r == null ? r : JSON.stringify(r);
        }
        return r;
    },
    fromAttribute (r, t) {
        let e = r;
        switch(t){
            case Boolean:
                e = r !== null;
                break;
            case Number:
                e = r === null ? null : Number(r);
                break;
            case Object:
            case Array:
                try {
                    e = JSON.parse(r);
                } catch  {
                    e = null;
                }
        }
        return e;
    }
}, rt = (r, t)=>t !== r && (t == t || r == r), D = {
    attribute: !0,
    type: String,
    converter: I,
    reflect: !1,
    hasChanged: rt
}, V = "finalized", f = class extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
    }
    static addInitializer(t) {
        var e;
        this.finalize(), ((e = this.h) !== null && e !== void 0 ? e : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        let t = [];
        return this.elementProperties.forEach((e, o)=>{
            let i = this._$Ep(o, e);
            i !== void 0 && (this._$Ev.set(i, o), t.push(i));
        }), t;
    }
    static createProperty(t, e = D) {
        if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
            let o = typeof t == "symbol" ? Symbol() : "__" + t, i = this.getPropertyDescriptor(t, o, e);
            i !== void 0 && Object.defineProperty(this.prototype, t, i);
        }
    }
    static getPropertyDescriptor(t, e, o) {
        return {
            get () {
                return this[e];
            },
            set (i) {
                let n = this[t];
                this[e] = i, this.requestUpdate(t, n, o);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || D;
    }
    static finalize() {
        if (this.hasOwnProperty(V)) return !1;
        this[V] = !0;
        let t = Object.getPrototypeOf(this);
        if (t.finalize(), t.h !== void 0 && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            let e = this.properties, o = [
                ...Object.getOwnPropertyNames(e),
                ...Object.getOwnPropertySymbols(e)
            ];
            for (let i of o)this.createProperty(i, e[i]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(t) {
        let e = [];
        if (Array.isArray(t)) {
            let o = new Set(t.flat(1 / 0).reverse());
            for (let i of o)e.unshift(R(i));
        } else t !== void 0 && e.push(R(t));
        return e;
    }
    static _$Ep(t, e) {
        let o = e.attribute;
        return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
    }
    _$Eu() {
        var t;
        this._$E_ = new Promise((e)=>this.enableUpdating = e), this._$AL = new Map, this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e)=>e(this));
    }
    addController(t) {
        var e, o;
        ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((o = t.hostConnected) === null || o === void 0 || o.call(t));
    }
    removeController(t) {
        var e;
        (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, e)=>{
            this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
        });
    }
    createRenderRoot() {
        var t;
        let e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return L(e, this.constructor.elementStyles), e;
    }
    connectedCallback() {
        var t;
        this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e)=>{
            var o;
            return (o = e.hostConnected) === null || o === void 0 ? void 0 : o.call(e);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        (t = this._$ES) === null || t === void 0 || t.forEach((e)=>{
            var o;
            return (o = e.hostDisconnected) === null || o === void 0 ? void 0 : o.call(e);
        });
    }
    attributeChangedCallback(t, e, o) {
        this._$AK(t, o);
    }
    _$EO(t, e, o = D) {
        var i;
        let n = this.constructor._$Ep(t, o);
        if (n !== void 0 && o.reflect === !0) {
            let s = (((i = o.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? o.converter : I).toAttribute(e, o.type);
            this._$El = t, s == null ? this.removeAttribute(n) : this.setAttribute(n, s), this._$El = null;
        }
    }
    _$AK(t, e) {
        var o;
        let i = this.constructor, n = i._$Ev.get(t);
        if (n !== void 0 && this._$El !== n) {
            let s = i.getPropertyOptions(n), h = typeof s.converter == "function" ? {
                fromAttribute: s.converter
            } : ((o = s.converter) === null || o === void 0 ? void 0 : o.fromAttribute) !== void 0 ? s.converter : I;
            this._$El = n, this[n] = h.fromAttribute(e, s.type), this._$El = null;
        }
    }
    requestUpdate(t, e, o) {
        let i = !0;
        t !== void 0 && (((o = o || this.constructor.getPropertyOptions(t)).hasChanged || rt)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), o.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = new Map), this._$EC.set(t, o))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (e) {
            Promise.reject(e);
        }
        let t = this.scheduleUpdate();
        return t != null && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, n)=>this[n] = i), this._$Ei = void 0);
        let e = !1, o = this._$AL;
        try {
            e = this.shouldUpdate(o), e ? (this.willUpdate(o), (t = this._$ES) === null || t === void 0 || t.forEach((i)=>{
                var n;
                return (n = i.hostUpdate) === null || n === void 0 ? void 0 : n.call(i);
            }), this.update(o)) : this._$Ek();
        } catch (i) {
            throw e = !1, this._$Ek(), i;
        }
        e && this._$AE(o);
    }
    willUpdate(t) {}
    _$AE(t) {
        var e;
        (e = this._$ES) === null || e === void 0 || e.forEach((o)=>{
            var i;
            return (i = o.hostUpdated) === null || i === void 0 ? void 0 : i.call(o);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$EC !== void 0 && (this._$EC.forEach((e, o)=>this._$EO(o, this[o], e)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
};
f[V] = !0, f.elementProperties = new Map, f.elementStyles = [], f.shadowRootOptions = {
    mode: "open"
}, it?.({
    ReactiveElement: f
}), ((B = T.reactiveElementVersions) !== null && B !== void 0 ? B : T.reactiveElementVersions = []).push("1.6.3");
var K, z = window, A = z.trustedTypes, st = A ? A.createPolicy("lit-html", {
    createHTML: (r)=>r
}) : void 0, q = "$lit$", g = `lit$${(Math.random() + "").slice(9)}$`, dt = "?" + g, yt = `<${dt}>`, m = document, U = ()=>m.createComment(""), P = (r)=>r === null || typeof r != "object" && typeof r != "function", ut = Array.isArray, _t = (r)=>ut(r) || typeof r?.[Symbol.iterator] == "function", W = `[ 	
\f\r]`, C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, nt = /-->/g, lt = />/g, b = RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), at = /'/g, ht = /"/g, vt = /^(?:script|style|textarea|title)$/i, ft = (r)=>(t, ...e)=>({
            _$litType$: r,
            strings: t,
            values: e
        }), Ut = ft(1), x = Symbol.for("lit-noChange"), d = Symbol.for("lit-nothing"), ct = new WeakMap, $ = m.createTreeWalker(m, 129, null, !1);
function gt(r, t) {
    if (!Array.isArray(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return st !== void 0 ? st.createHTML(t) : t;
}
var At = (r, t)=>{
    let e = r.length - 1, o = [], i, n = t === 2 ? "<svg>" : "", s = C;
    for(let h = 0; h < e; h++){
        let l = r[h], a, c, p = -1, u = 0;
        for(; u < l.length && (s.lastIndex = u, c = s.exec(l), c !== null);)u = s.lastIndex, s === C ? c[1] === "!--" ? s = nt : c[1] !== void 0 ? s = lt : c[2] !== void 0 ? (vt.test(c[2]) && (i = RegExp("</" + c[2], "g")), s = b) : c[3] !== void 0 && (s = b) : s === b ? c[0] === ">" ? (s = i ?? C, p = -1) : c[1] === void 0 ? p = -2 : (p = s.lastIndex - c[2].length, a = c[1], s = c[3] === void 0 ? b : c[3] === '"' ? ht : at) : s === ht || s === at ? s = b : s === nt || s === lt ? s = C : (s = b, i = void 0);
        let v = s === b && r[h + 1].startsWith("/>") ? " " : "";
        n += s === C ? l + yt : p >= 0 ? (o.push(a), l.slice(0, p) + q + l.slice(p) + g + v) : l + g + (p === -2 ? (o.push(void 0), h) : v);
    }
    return [
        gt(r, n + (r[e] || "<?>") + (t === 2 ? "</svg>" : "")),
        o
    ];
}, y = class {
    constructor({ strings: t, _$litType$: e }, o){
        let i;
        this.parts = [];
        let n = 0, s = 0, h = t.length - 1, l = this.parts, [a, c] = At(t, e);
        if (this.el = y.createElement(a, o), $.currentNode = this.el.content, e === 2) {
            let p = this.el.content, u = p.firstChild;
            u.remove(), p.append(...u.childNodes);
        }
        for(; (i = $.nextNode()) !== null && l.length < h;){
            if (i.nodeType === 1) {
                if (i.hasAttributes()) {
                    let p = [];
                    for (let u of i.getAttributeNames())if (u.endsWith(q) || u.startsWith(g)) {
                        let v = c[s++];
                        if (p.push(u), v !== void 0) {
                            let mt = i.getAttribute(v.toLowerCase() + q).split(g), H = /([.?@])?(.*)/.exec(v);
                            l.push({
                                type: 1,
                                index: n,
                                name: H[2],
                                strings: mt,
                                ctor: H[1] === "." ? F : H[1] === "?" ? Z : H[1] === "@" ? G : S
                            });
                        } else l.push({
                            type: 6,
                            index: n
                        });
                    }
                    for (let u of p)i.removeAttribute(u);
                }
                if (vt.test(i.tagName)) {
                    let p = i.textContent.split(g), u = p.length - 1;
                    if (u > 0) {
                        i.textContent = A ? A.emptyScript : "";
                        for(let v = 0; v < u; v++)i.append(p[v], U()), $.nextNode(), l.push({
                            type: 2,
                            index: ++n
                        });
                        i.append(p[u], U());
                    }
                }
            } else if (i.nodeType === 8) {
                if (i.data === dt) l.push({
                    type: 2,
                    index: n
                });
                else {
                    let p = -1;
                    for(; (p = i.data.indexOf(g, p + 1)) !== -1;)l.push({
                        type: 7,
                        index: n
                    }), p += g.length - 1;
                }
            }
            n++;
        }
    }
    static createElement(t, e) {
        let o = m.createElement("template");
        return o.innerHTML = t, o;
    }
};
function w(r, t, e = r, o) {
    var i, n, s, h;
    if (t === x) return t;
    let l = o !== void 0 ? (i = e._$Co) === null || i === void 0 ? void 0 : i[o] : e._$Cl, a = P(t) ? void 0 : t._$litDirective$;
    return l?.constructor !== a && ((n = l?._$AO) === null || n === void 0 || n.call(l, !1), a === void 0 ? l = void 0 : (l = new a(r), l._$AT(r, e, o)), o !== void 0 ? ((s = (h = e)._$Co) !== null && s !== void 0 ? s : h._$Co = [])[o] = l : e._$Cl = l), l !== void 0 && (t = w(r, l._$AS(r, t.values), l, o)), t;
}
var J = class {
    constructor(t, e){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var e;
        let { el: { content: o }, parts: i } = this._$AD, n = ((e = t?.creationScope) !== null && e !== void 0 ? e : m).importNode(o, !0);
        $.currentNode = n;
        let s = $.nextNode(), h = 0, l = 0, a = i[0];
        for(; a !== void 0;){
            if (h === a.index) {
                let c;
                a.type === 2 ? c = new _(s, s.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(s, a.name, a.strings, this, t) : a.type === 6 && (c = new Q(s, this, t)), this._$AV.push(c), a = i[++l];
            }
            h !== a?.index && (s = $.nextNode(), h++);
        }
        return $.currentNode = m, n;
    }
    v(t) {
        let e = 0;
        for (let o of this._$AV)o !== void 0 && (o.strings !== void 0 ? (o._$AI(t, o, e), e += o.strings.length - 2) : o._$AI(t[e])), e++;
    }
}, _ = class {
    constructor(t, e, o, i){
        var n;
        this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = o, this.options = i, this._$Cp = (n = i?.isConnected) === null || n === void 0 || n;
    }
    get _$AU() {
        var t, e;
        return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode, e = this._$AM;
        return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, e = this) {
        t = w(this, t, e), P(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== x && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : _t(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== d && P(this._$AH) ? this._$AA.nextSibling.data = t : this.$(m.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var e;
        let { values: o, _$litType$: i } = t, n = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = y.createElement(gt(i.h, i.h[0]), this.options)), i);
        if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === n) this._$AH.v(o);
        else {
            let s = new J(n, this), h = s.u(this.options);
            s.v(o), this.$(h), this._$AH = s;
        }
    }
    _$AC(t) {
        let e = ct.get(t.strings);
        return e === void 0 && ct.set(t.strings, e = new y(t)), e;
    }
    T(t) {
        ut(this._$AH) || (this._$AH = [], this._$AR());
        let e = this._$AH, o, i = 0;
        for (let n of t)i === e.length ? e.push(o = new _(this.k(U()), this.k(U()), this, this.options)) : o = e[i], o._$AI(n), i++;
        i < e.length && (this._$AR(o && o._$AB.nextSibling, i), e.length = i);
    }
    _$AR(t = this._$AA.nextSibling, e) {
        var o;
        for((o = this._$AP) === null || o === void 0 || o.call(this, !1, !0, e); t && t !== this._$AB;){
            let i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var e;
        this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
    }
}, S = class {
    constructor(t, e, o, i, n){
        this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = n, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String), this.strings = o) : this._$AH = d;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, e = this, o, i) {
        let n = this.strings, s = !1;
        if (n === void 0) t = w(this, t, e, 0), s = !P(t) || t !== this._$AH && t !== x, s && (this._$AH = t);
        else {
            let h = t, l, a;
            for(t = n[0], l = 0; l < n.length - 1; l++)a = w(this, h[o + l], e, l), a === x && (a = this._$AH[l]), s || (s = !P(a) || a !== this._$AH[l]), a === d ? t = d : t !== d && (t += (a ?? "") + n[l + 1]), this._$AH[l] = a;
        }
        s && !i && this.j(t);
    }
    j(t) {
        t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}, F = class extends S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === d ? void 0 : t;
    }
}, wt = A ? A.emptyScript : "", Z = class extends S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== d ? this.element.setAttribute(this.name, wt) : this.element.removeAttribute(this.name);
    }
}, G = class extends S {
    constructor(t, e, o, i, n){
        super(t, e, o, i, n), this.type = 5;
    }
    _$AI(t, e = this) {
        var o;
        if ((t = (o = w(this, t, e, 0)) !== null && o !== void 0 ? o : d) === x) return;
        let i = this._$AH, n = t === d && i !== d || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, s = t !== d && (i === d || n);
        n && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var e, o;
        typeof this._$AH == "function" ? this._$AH.call((o = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && o !== void 0 ? o : this.element, t) : this._$AH.handleEvent(t);
    }
}, Q = class {
    constructor(t, e, o){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = o;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        w(this, t);
    }
};
var pt = z.litHtmlPolyfillSupport;
pt?.(y, _), ((K = z.litHtmlVersions) !== null && K !== void 0 ? K : z.litHtmlVersions = []).push("2.8.0");
var bt = (r, t, e)=>{
    var o, i;
    let n = (o = e?.renderBefore) !== null && o !== void 0 ? o : t, s = n._$litPart$;
    if (s === void 0) {
        let h = (i = e?.renderBefore) !== null && i !== void 0 ? i : null;
        n._$litPart$ = s = new _(t.insertBefore(U(), h), h, void 0, e ?? {});
    }
    return s._$AI(r), s;
};
var X, Y;
var E = class extends f {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        let o = super.createRenderRoot();
        return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = o.firstChild), o;
    }
    update(t) {
        let e = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = bt(e, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
    }
    render() {
        return x;
    }
};
E.finalized = !0, E._$litElement$ = !0, (X = globalThis.litElementHydrateSupport) === null || X === void 0 || X.call(globalThis, {
    LitElement: E
});
var $t = globalThis.litElementPolyfillSupport;
$t?.({
    LitElement: E
});
((Y = globalThis.litElementVersions) !== null && Y !== void 0 ? Y : globalThis.litElementVersions = []).push("3.3.3");
var Kt = j`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  * {
    box-sizing: border-box;
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`; /*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hu351":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>v) //# sourceMappingURL=out.js.map
;
parcelHelpers.export(exports, "b", ()=>tt);
parcelHelpers.export(exports, "c", ()=>I);
parcelHelpers.export(exports, "d", ()=>nn);
parcelHelpers.export(exports, "e", ()=>Qi);
parcelHelpers.export(exports, "f", ()=>Zi);
parcelHelpers.export(exports, "g", ()=>tn);
parcelHelpers.export(exports, "h", ()=>F);
parcelHelpers.export(exports, "i", ()=>en);
parcelHelpers.export(exports, "j", ()=>bn);
var Buffer = require("1de0f60dec9e8a36").Buffer;
var Zt = {}, qe = function(t, e, i, n, r) {
    var o = new Worker(Zt[e] || (Zt[e] = URL.createObjectURL(new Blob([
        t + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
    ], {
        type: "text/javascript"
    }))));
    return o.onmessage = function(a) {
        var s = a.data, l = s.$e$;
        if (l) {
            var h = new Error(l[0]);
            h.code = l[1], h.stack = l[2], r(h, null);
        } else r(null, s);
    }, o.postMessage(i, n), o;
}, E = Uint8Array, Q = Uint16Array, ae = Int32Array, zt = new E([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    0,
    0,
    0
]), Ft = new E([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    0,
    0
]), se = new E([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]), le = function(t, e) {
    for(var i = new Q(31), n = 0; n < 31; ++n)i[n] = e += 1 << t[n - 1];
    for(var r = new ae(i[30]), n = 1; n < 30; ++n)for(var o = i[n]; o < i[n + 1]; ++o)r[o] = o - i[n] << 5 | n;
    return {
        b: i,
        r
    };
}, he = le(zt, 2), Dt = he.b, Be = he.r;
Dt[28] = 258, Be[258] = 28;
var Je = le(Ft, 0), ue = Je.b, vt = new Q(32768);
for(g = 0; g < 32768; ++g)W = (g & 43690) >> 1 | (g & 21845) << 1, W = (W & 52428) >> 2 | (W & 13107) << 2, W = (W & 61680) >> 4 | (W & 3855) << 4, vt[g] = ((W & 65280) >> 8 | (W & 255) << 8) >> 1;
var W, g, nt = function(t, e, i) {
    for(var n = t.length, r = 0, o = new Q(e); r < n; ++r)t[r] && ++o[t[r] - 1];
    var a = new Q(e);
    for(r = 1; r < e; ++r)a[r] = a[r - 1] + o[r - 1] << 1;
    var s;
    if (i) {
        s = new Q(1 << e);
        var l = 15 - e;
        for(r = 0; r < n; ++r)if (t[r]) for(var h = r << 4 | t[r], u = e - t[r], d = a[t[r] - 1]++ << u, c = d | (1 << u) - 1; d <= c; ++d)s[vt[d] >> l] = h;
    } else for(s = new Q(n), r = 0; r < n; ++r)t[r] && (s[r] = vt[a[t[r] - 1]++] >> 15 - t[r]);
    return s;
}, ht = new E(288);
for(g = 0; g < 144; ++g)ht[g] = 8;
var g;
for(g = 144; g < 256; ++g)ht[g] = 9;
var g;
for(g = 256; g < 280; ++g)ht[g] = 7;
var g;
for(g = 280; g < 288; ++g)ht[g] = 8;
var g, de = new E(32);
for(g = 0; g < 32; ++g)de[g] = 5;
var g, ce = nt(ht, 9, 1), fe = nt(de, 5, 1), _t = function(t) {
    for(var e = t[0], i = 1; i < t.length; ++i)t[i] > e && (e = t[i]);
    return e;
}, N = function(t, e, i) {
    var n = e / 8 | 0;
    return (t[n] | t[n + 1] << 8) >> (e & 7) & i;
}, yt = function(t, e) {
    var i = e / 8 | 0;
    return (t[i] | t[i + 1] << 8 | t[i + 2] << 16) >> (e & 7);
}, pe = function(t) {
    return (t + 7) / 8 | 0;
}, gt = function(t, e, i) {
    (e == null || e < 0) && (e = 0), (i == null || i > t.length) && (i = t.length);
    var n = new E(i - e);
    return n.set(t.subarray(e, i)), n;
}, me = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
], P = function(t, e, i) {
    var n = new Error(e || me[t]);
    if (n.code = t, Error.captureStackTrace && Error.captureStackTrace(n, P), !i) throw n;
    return n;
}, _e = function(t, e, i, n) {
    var r = t.length, o = n ? n.length : 0;
    if (!r || e.f && !e.l) return i || new E(0);
    var a = !i || e.i != 2, s = e.i;
    i || (i = new E(r * 3));
    var l = function(Xt) {
        var Yt = i.length;
        if (Xt > Yt) {
            var Qt = new E(Math.max(Yt * 2, Xt));
            Qt.set(i), i = Qt;
        }
    }, h = e.f || 0, u = e.p || 0, d = e.b || 0, c = e.l, p = e.d, m = e.m, f = e.n, y = r * 8;
    do {
        if (!c) {
            h = N(t, u, 1);
            var _ = N(t, u + 1, 3);
            if (u += 3, _) {
                if (_ == 1) c = ce, p = fe, m = 9, f = 5;
                else if (_ == 2) {
                    var S = N(t, u, 31) + 257, w = N(t, u + 10, 15) + 4, j = S + N(t, u + 5, 31) + 1;
                    u += 14;
                    for(var C = new E(j), H = new E(19), L = 0; L < w; ++L)H[se[L]] = N(t, u + L * 3, 7);
                    u += w * 3;
                    for(var B = _t(H), D = (1 << B) - 1, X = nt(H, B, 1), L = 0; L < j;){
                        var T = X[N(t, u, D)];
                        u += T & 15;
                        var O = T >> 4;
                        if (O < 16) C[L++] = O;
                        else {
                            var G = 0, Y = 0;
                            for(O == 16 ? (Y = 3 + N(t, u, 3), u += 2, G = C[L - 1]) : O == 17 ? (Y = 3 + N(t, u, 7), u += 3) : O == 18 && (Y = 11 + N(t, u, 127), u += 7); Y--;)C[L++] = G;
                        }
                    }
                    var U = C.subarray(0, S), M = C.subarray(S);
                    m = _t(U), f = _t(M), c = nt(U, m, 1), p = nt(M, f, 1);
                } else P(1);
            } else {
                var O = pe(u) + 4, It = t[O - 4] | t[O - 3] << 8, Lt = O + It;
                if (Lt > r) {
                    s && P(0);
                    break;
                }
                a && l(d + It), i.set(t.subarray(O, Lt), d), e.b = d += It, e.p = u = Lt * 8, e.f = h;
                continue;
            }
            if (u > y) {
                s && P(0);
                break;
            }
        }
        a && l(d + 131072);
        for(var Ue = (1 << m) - 1, $e = (1 << f) - 1, kt = u;; kt = u){
            var G = c[yt(t, u) & Ue], it = G >> 4;
            if (u += G & 15, u > y) {
                s && P(0);
                break;
            }
            if (G || P(2), it < 256) i[d++] = it;
            else if (it == 256) {
                kt = u, c = null;
                break;
            } else {
                var Gt = it - 254;
                if (it > 264) {
                    var L = it - 257, st = zt[L];
                    Gt = N(t, u, (1 << st) - 1) + Dt[L], u += st;
                }
                var Ot = p[yt(t, u) & $e], Mt = Ot >> 4;
                Ot || P(3), u += Ot & 15;
                var M = ue[Mt];
                if (Mt > 3) {
                    var st = Ft[Mt];
                    M += yt(t, u) & (1 << st) - 1, u += st;
                }
                if (u > y) {
                    s && P(0);
                    break;
                }
                a && l(d + 131072);
                var At = d + Gt;
                if (d < M) {
                    var Kt = o - M, Ve = Math.min(M, At);
                    for(Kt + d < 0 && P(3); d < Ve; ++d)i[d] = n[Kt + d];
                }
                for(; d < At; d += 4)i[d] = i[d - M], i[d + 1] = i[d + 1 - M], i[d + 2] = i[d + 2 - M], i[d + 3] = i[d + 3 - M];
                d = At;
            }
        }
        e.l = c, e.p = kt, e.b = d, e.f = h, c && (h = 1, e.m = m, e.d = p, e.n = f);
    }while (!h);
    return d == i.length ? i : gt(i, 0, d);
}, Re = new E(0), He = function(t, e) {
    var i = {};
    for(var n in t)i[n] = t[n];
    for(var n in e)i[n] = e[n];
    return i;
}, te = function(t, e, i) {
    for(var n = t(), r = t.toString(), o = r.slice(r.indexOf("[") + 1, r.lastIndexOf("]")).replace(/\s+/g, "").split(","), a = 0; a < n.length; ++a){
        var s = n[a], l = o[a];
        if (typeof s == "function") {
            e += ";" + l + "=";
            var h = s.toString();
            if (s.prototype) {
                if (h.indexOf("[native code]") != -1) {
                    var u = h.indexOf(" ", 8) + 1;
                    e += h.slice(u, h.indexOf("(", u));
                } else {
                    e += h;
                    for(var d in s.prototype)e += ";" + l + ".prototype." + d + "=" + s.prototype[d].toString();
                }
            } else e += h;
        } else i[l] = s;
    }
    return e;
}, mt = [], We = function(t) {
    var e = [];
    for(var i in t)t[i].buffer && e.push((t[i] = new t[i].constructor(t[i])).buffer);
    return e;
}, Ge = function(t, e, i, n) {
    if (!mt[i]) {
        for(var r = "", o = {}, a = t.length - 1, s = 0; s < a; ++s)r = te(t[s], r, o);
        mt[i] = {
            c: te(t[a], r, o),
            e: o
        };
    }
    var l = He({}, mt[i].e);
    return qe(mt[i].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + e.toString() + "}", i, l, We(l), n);
}, Ke = function() {
    return [
        E,
        Q,
        ae,
        zt,
        Ft,
        se,
        Dt,
        ue,
        ce,
        fe,
        vt,
        me,
        nt,
        _t,
        N,
        yt,
        pe,
        gt,
        P,
        _e,
        Ut,
        ye,
        ve
    ];
}, ye = function(t) {
    return postMessage(t, [
        t.buffer
    ]);
}, ve = function(t) {
    return t && {
        out: t.size && new E(t.size),
        dictionary: t.dictionary
    };
}, Xe = function(t, e, i, n, r, o) {
    var a = Ge(i, n, r, function(s, l) {
        a.terminate(), o(s, l);
    });
    return a.postMessage([
        t,
        e
    ], e.consume ? [
        t.buffer
    ] : []), function() {
        a.terminate();
    };
}, J = function(t, e) {
    return t[e] | t[e + 1] << 8;
}, $ = function(t, e) {
    return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0;
}, Ct = function(t, e) {
    return $(t, e) + $(t, e + 4) * 4294967296;
};
function Ye(t, e, i) {
    return i || (i = e, e = {}), typeof i != "function" && P(7), Xe(t, e, [
        Ke
    ], function(n) {
        return ye(Ut(n.data[0], ve(n.data[1])));
    }, 1, i);
}
function Ut(t, e) {
    return _e(t, {
        i: 2
    }, e && e.out, e && e.dictionary);
}
var Et = typeof TextDecoder < "u" && new TextDecoder, Qe = 0;
try {
    Et.decode(Re, {
        stream: !0
    }), Qe = 1;
} catch  {}
var Ze = function(t) {
    for(var e = "", i = 0;;){
        var n = t[i++], r = (n > 127) + (n > 223) + (n > 239);
        if (i + r > t.length) return {
            s: e,
            r: gt(t, i - 1)
        };
        r ? r == 3 ? (n = ((n & 15) << 18 | (t[i++] & 63) << 12 | (t[i++] & 63) << 6 | t[i++] & 63) - 65536, e += String.fromCharCode(55296 | n >> 10, 56320 | n & 1023)) : r & 1 ? e += String.fromCharCode((n & 31) << 6 | t[i++] & 63) : e += String.fromCharCode((n & 15) << 12 | (t[i++] & 63) << 6 | t[i++] & 63) : e += String.fromCharCode(n);
    }
};
function rt(t, e) {
    if (e) {
        for(var i = "", n = 0; n < t.length; n += 16384)i += String.fromCharCode.apply(null, t.subarray(n, n + 16384));
        return i;
    } else {
        if (Et) return Et.decode(t);
        var r = Ze(t), o = r.s, i = r.r;
        return i.length && P(8), o;
    }
}
var ti = function(t, e) {
    return e + 30 + J(t, e + 26) + J(t, e + 28);
}, ei = function(t, e, i) {
    var n = J(t, e + 28), r = rt(t.subarray(e + 46, e + 46 + n), !(J(t, e + 8) & 2048)), o = e + 46 + n, a = $(t, e + 20), s = i && a == 4294967295 ? ii(t, o) : [
        a,
        $(t, e + 24),
        $(t, e + 42)
    ], l = s[0], h = s[1], u = s[2];
    return [
        J(t, e + 10),
        l,
        h,
        r,
        o + J(t, e + 30) + J(t, e + 32),
        u
    ];
}, ii = function(t, e) {
    for(; J(t, e) != 1; e += 4 + J(t, e + 2));
    return [
        Ct(t, e + 12),
        Ct(t, e + 4),
        Ct(t, e + 20)
    ];
}, ee = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(t) {
    t();
};
function ni(t, e, i) {
    i || (i = e, e = {}), typeof i != "function" && P(7);
    var n = [], r = function() {
        for(var y = 0; y < n.length; ++y)n[y]();
    }, o = {}, a = function(y, _) {
        ee(function() {
            i(y, _);
        });
    };
    ee(function() {
        a = i;
    });
    for(var s = t.length - 22; $(t, s) != 101010256; --s)if (!s || t.length - s > 65558) return a(P(13, 0, 1), null), r;
    var l = J(t, s + 8);
    if (l) {
        var h = l, u = $(t, s + 16), d = u == 4294967295 || h == 65535;
        if (d) {
            var c = $(t, s - 12);
            d = $(t, c) == 101075792, d && (h = l = $(t, c + 32), u = $(t, c + 48));
        }
        for(var p = e && e.filter, m = function(y) {
            var _ = ei(t, u, d), S = _[0], w = _[1], j = _[2], C = _[3], H = _[4], L = _[5], B = ti(t, L);
            u = H;
            var D = function(T, O) {
                T ? (r(), a(T, null)) : (O && (o[C] = O), --l || a(null, o));
            };
            if (!p || p({
                name: C,
                size: w,
                originalSize: j,
                compression: S
            })) {
                if (!S) D(null, gt(t, B, B + w));
                else if (S == 8) {
                    var X = t.subarray(B, B + w);
                    if (w < 32e4) try {
                        D(null, Ut(X, {
                            out: new E(j)
                        }));
                    } catch (T) {
                        D(T, null);
                    }
                    else n.push(Ye(X, {
                        size: j
                    }, D));
                } else D(P(14, "unknown compression type " + S, 1), null);
            } else D(null, null);
        }, f = 0; f < h; ++f)m(f);
    } else a(null, {});
    return r;
}
function ri(t) {
    return (Array.isArray(t) ? t : t.issues).reduce((e, i)=>{
        if (i.path) {
            let n = i.path.map(({ key: r })=>r).join(".");
            e.nested[n] = [
                ...e.nested[n] || [],
                i.message
            ];
        } else e.root = [
            ...e.root || [],
            i.message
        ];
        return e;
    }, {
        nested: {}
    });
}
var oi = class extends Error {
    issues;
    constructor(t){
        super(t[0].message), this.name = "ValiError", this.issues = t;
    }
};
function ai(t, e) {
    return {
        reason: t?.reason,
        validation: e.validation,
        origin: t?.origin || "value",
        message: e.message,
        input: e.input,
        abortEarly: t?.abortEarly,
        abortPipeEarly: t?.abortPipeEarly
    };
}
function si(t, e) {
    return {
        reason: e,
        origin: t?.origin,
        abortEarly: t?.abortEarly,
        abortPipeEarly: t?.abortPipeEarly
    };
}
function K(t, e, i, n) {
    if (!e || !e.length) return {
        output: t
    };
    let r, o, a = t;
    for (let s of e){
        let l = s(a);
        if (l.issue) {
            r = r || si(i, n);
            let h = ai(r, l.issue);
            if (o ? o.push(h) : o = [
                h
            ], r.abortEarly || r.abortPipeEarly) break;
        } else a = l.output;
    }
    return o ? {
        issues: o
    } : {
        output: a
    };
}
function q(t, e) {
    return !t || typeof t == "string" ? [
        t,
        e
    ] : [
        void 0,
        t
    ];
}
function R(t, e, i, n, r, o) {
    return {
        issues: [
            {
                reason: e,
                validation: i,
                origin: t?.origin || "value",
                message: n,
                input: r,
                issues: o,
                abortEarly: t?.abortEarly,
                abortPipeEarly: t?.abortPipeEarly
            }
        ]
    };
}
function li(t = []) {
    return {
        schema: "any",
        async: !1,
        _parse (e, i) {
            return K(e, t, i, "any");
        }
    };
}
function lt(t, e, i) {
    let [n, r] = q(e, i);
    return {
        schema: "array",
        array: {
            item: t
        },
        async: !1,
        _parse (o, a) {
            if (!Array.isArray(o)) return R(a, "type", "array", n || "Invalid type", o);
            let s, l = [];
            for(let h = 0; h < o.length; h++){
                let u = o[h], d = t._parse(u, a);
                if (d.issues) {
                    let c = {
                        schema: "array",
                        input: o,
                        key: h,
                        value: u
                    };
                    for (let p of d.issues)p.path ? p.path.unshift(c) : p.path = [
                        c
                    ], s?.push(p);
                    if (s || (s = d.issues), a?.abortEarly) break;
                } else l.push(d.output);
            }
            return s ? {
                issues: s
            } : K(l, r, a, "array");
        }
    };
}
function Pt(t, e) {
    let [i, n] = q(t, e);
    return {
        schema: "boolean",
        async: !1,
        _parse (r, o) {
            return typeof r != "boolean" ? R(o, "type", "boolean", i || "Invalid type", r) : K(r, n, o, "boolean");
        }
    };
}
function ie(t, e) {
    return {
        schema: "literal",
        literal: t,
        async: !1,
        _parse (i, n) {
            return i !== t ? R(n, "type", "literal", e || "Invalid type", i) : {
                output: i
            };
        }
    };
}
function hi(t, e) {
    return {
        schema: "native_enum",
        nativeEnum: t,
        async: !1,
        _parse (i, n) {
            return Object.values(t).includes(i) ? {
                output: i
            } : R(n, "type", "native_enum", e || "Invalid type", i);
        }
    };
}
function V(t, e) {
    let [i, n] = q(t, e);
    return {
        schema: "number",
        async: !1,
        _parse (r, o) {
            return typeof r != "number" ? R(o, "type", "number", i || "Invalid type", r) : K(r, n, o, "number");
        }
    };
}
function z(t, e, i) {
    let [n, r] = q(e, i), o;
    return {
        schema: "object",
        object: t,
        async: !1,
        _parse (a, s) {
            if (!a || typeof a != "object") return R(s, "type", "object", n || "Invalid type", a);
            o = o || Object.entries(t);
            let l, h = {};
            for (let [u, d] of o){
                let c = a[u], p = d._parse(c, s);
                if (p.issues) {
                    let m = {
                        schema: "object",
                        input: a,
                        key: u,
                        value: c
                    };
                    for (let f of p.issues)f.path ? f.path.unshift(m) : f.path = [
                        m
                    ], l?.push(f);
                    if (l || (l = p.issues), s?.abortEarly) break;
                } else h[u] = p.output;
            }
            return l ? {
                issues: l
            } : K(h, r, s, "object");
        }
    };
}
function b(t) {
    return {
        schema: "optional",
        wrapped: t,
        async: !1,
        _parse (e, i) {
            return e === void 0 ? {
                output: e
            } : t._parse(e, i);
        }
    };
}
function A(t, e) {
    let [i, n] = q(t, e);
    return {
        schema: "string",
        async: !1,
        _parse (r, o) {
            return typeof r != "string" ? R(o, "type", "string", i || "Invalid type", r) : K(r, n, o, "string");
        }
    };
}
function ui(t, e, i, n) {
    if (typeof e == "object" && !Array.isArray(e)) {
        let [a, s] = q(i, n);
        return [
            t,
            e,
            a,
            s
        ];
    }
    let [r, o] = q(e, i);
    return [
        A(),
        t,
        r,
        o
    ];
}
var di = [
    "__proto__",
    "prototype",
    "constructor"
];
function ci(t, e, i, n) {
    let [r, o, a, s] = ui(t, e, i, n);
    return {
        schema: "record",
        record: {
            key: r,
            value: o
        },
        async: !1,
        _parse (l, h) {
            if (!l || typeof l != "object") return R(h, "type", "record", a || "Invalid type", l);
            let u, d = {};
            for (let [c, p] of Object.entries(l))if (!di.includes(c)) {
                let m, f = r._parse(c, {
                    origin: "key",
                    abortEarly: h?.abortEarly,
                    abortPipeEarly: h?.abortPipeEarly
                });
                if (f.issues) {
                    m = {
                        schema: "record",
                        input: l,
                        key: c,
                        value: p
                    };
                    for (let _ of f.issues)_.path = [
                        m
                    ], u?.push(_);
                    if (u || (u = f.issues), h?.abortEarly) break;
                }
                let y = o._parse(p, h);
                if (y.issues) {
                    m = m || {
                        schema: "record",
                        input: l,
                        key: c,
                        value: p
                    };
                    for (let _ of y.issues)_.path ? _.path.unshift(m) : _.path = [
                        m
                    ], u?.push(_);
                    if (u || (u = y.issues), h?.abortEarly) break;
                }
                !f.issues && !y.issues && (d[f.output] = y.output);
            }
            return u ? {
                issues: u
            } : K(d, s, h, "record");
        }
    };
}
function fi(t, e, i) {
    if (typeof t == "object" && !Array.isArray(t)) {
        let [o, a] = q(e, i);
        return [
            t,
            o,
            a
        ];
    }
    let [n, r] = q(t, e);
    return [
        void 0,
        n,
        r
    ];
}
function ne(t, e, i, n) {
    let [r, o, a] = fi(e, i, n);
    return {
        schema: "tuple",
        tuple: {
            items: t,
            rest: r
        },
        async: !1,
        _parse (s, l) {
            if (!Array.isArray(s) || !r && t.length !== s.length || r && t.length > s.length) return R(l, "type", "tuple", o || "Invalid type", s);
            let h, u = [];
            for(let d = 0; d < t.length; d++){
                let c = s[d], p = t[d]._parse(c, l);
                if (p.issues) {
                    let m = {
                        schema: "tuple",
                        input: s,
                        key: d,
                        value: c
                    };
                    for (let f of p.issues)f.path ? f.path.unshift(m) : f.path = [
                        m
                    ], h?.push(f);
                    if (h || (h = p.issues), l?.abortEarly) break;
                } else u[d] = p.output;
            }
            if (r) for(let d = t.length; d < s.length; d++){
                let c = s[d], p = r._parse(c, l);
                if (p.issues) {
                    let m = {
                        schema: "tuple",
                        input: s,
                        key: d,
                        value: c
                    };
                    for (let f of p.issues)f.path ? f.path.unshift(m) : f.path = [
                        m
                    ], h?.push(f);
                    if (h || (h = p.issues), l?.abortEarly) break;
                } else u[d] = p.output;
            }
            return h ? {
                issues: h
            } : K(u, a, l, "tuple");
        }
    };
}
function Tt(t, e) {
    return {
        schema: "union",
        union: t,
        async: !1,
        _parse (i, n) {
            let r, o;
            for (let a of t){
                let s = a._parse(i, n);
                if (s.issues) {
                    if (r) for (let l of s.issues)r.push(l);
                    else r = s.issues;
                } else {
                    o = [
                        s.output
                    ];
                    break;
                }
            }
            return o ? {
                output: o[0]
            } : R(n, "type", "union", e || "Invalid type", i, r);
        }
    };
}
function ut(t, e, i) {
    let [n, r] = q(e, i);
    return z(t.reduce((o, a)=>({
            ...o,
            ...a.object
        }), {}), n, r);
}
function pi(t, e, i, n) {
    let [r, o] = q(i, n);
    return z(Object.entries(t.object).reduce((a, [s, l])=>e.includes(s) ? a : {
            ...a,
            [s]: l
        }, {}), r, o);
}
function mi(t, e, i) {
    let n = t._parse(e, i);
    return n.issues ? {
        success: !1,
        error: new oi(n.issues),
        issues: n.issues
    } : {
        success: !0,
        data: n.output,
        output: n.output
    };
}
function xt(t, e) {
    return (i)=>i > t ? {
            issue: {
                validation: "max_value",
                message: e || "Invalid value",
                input: i
            }
        } : {
            output: i
        };
}
function jt(t, e) {
    return (i)=>i < t ? {
            issue: {
                validation: "min_value",
                message: e || "Invalid value",
                input: i
            }
        } : {
            output: i
        };
}
var _i = Object.create, $t = Object.defineProperty, yi = Object.getOwnPropertyDescriptor, ge = Object.getOwnPropertyNames, vi = Object.getPrototypeOf, gi = Object.prototype.hasOwnProperty, bi = (t, e, i)=>e in t ? $t(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : t[e] = i, dt = (t, e)=>function() {
        return e || (0, t[ge(t)[0]])((e = {
            exports: {}
        }).exports, e), e.exports;
    }, wi = (t, e, i, n)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let r of ge(e))!gi.call(t, r) && r !== i && $t(t, r, {
        get: ()=>e[r],
        enumerable: !(n = yi(e, r)) || n.enumerable
    });
    return t;
}, Si = (t, e, i)=>(i = t != null ? _i(vi(t)) : {}, wi(e || !t || !t.__esModule ? $t(i, "default", {
        value: t,
        enumerable: !0
    }) : i, t)), Ii = (t, e, i)=>(bi(t, typeof e != "symbol" ? e + "" : e, i), i), Li = dt({
    "../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.copy = void 0;
        var e = (i, n, r = 0, o = 0, a = i.width - r, s = i.height - o, l = 0, h = 0)=>{
            if (r = r | 0, o = o | 0, a = a | 0, s = s | 0, l = l | 0, h = h | 0, a <= 0 || s <= 0) return;
            let u = new Uint32Array(i.data.buffer), d = new Uint32Array(n.data.buffer);
            for(let c = 0; c < s; c++){
                let p = o + c;
                if (p < 0 || p >= i.height) continue;
                let m = h + c;
                if (!(m < 0 || m >= n.height)) for(let f = 0; f < a; f++){
                    let y = r + f;
                    if (y < 0 || y >= i.width) continue;
                    let _ = l + f;
                    if (_ < 0 || _ >= n.width) continue;
                    let S = p * i.width + y, w = m * n.width + _;
                    d[w] = u[S];
                }
            }
        };
        t.copy = e;
    }
}), ki = dt({
    "../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CreateImageFactory = (e = [
            0,
            0,
            0,
            0
        ], i = 4)=>{
            if (i = Math.floor(i), isNaN(i) || i < 1) throw TypeError("channels should be a positive non-zero number");
            if (!("length" in e) || e.length < i) throw TypeError(`fill should be iterable with at least ${i} members`);
            e = new Uint8ClampedArray(e).slice(0, i);
            let n = e.every((r)=>r === 0);
            return (r, o, a)=>{
                if (r === void 0 || o === void 0) throw TypeError("Not enough arguments");
                if (r = Math.floor(r), o = Math.floor(o), isNaN(r) || r < 1 || isNaN(o) || o < 1) throw TypeError("Index or size is negative or greater than the allowed amount");
                let s = r * o * i;
                if (a === void 0 && (a = new Uint8ClampedArray(s)), a instanceof Uint8ClampedArray) {
                    if (a.length !== s) throw TypeError("Index or size is negative or greater than the allowed amount");
                    if (!n) for(let l = 0; l < o; l++)for(let h = 0; h < r; h++){
                        let u = (l * r + h) * i;
                        for(let d = 0; d < i; d++)a[u + d] = e[d];
                    }
                    return {
                        get width () {
                            return r;
                        },
                        get height () {
                            return o;
                        },
                        get data () {
                            return a;
                        }
                    };
                }
                throw TypeError("Expected data to be Uint8ClampedArray or undefined");
            };
        }, t.createImage = t.CreateImageFactory();
    }
}), Oi = dt({
    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.filters = void 0;
        var e = 14, i = (o, a)=>{
            if (o <= -a || o >= a || o == 0) return 0;
            let s = o * Math.PI;
            return Math.sin(s) / s * Math.sin(s / a) / (s / a);
        }, n = (o)=>Math.round(o * ((1 << e) - 1)), r = (o, a, s, l, h)=>{
            let u = h ? 2 : 3, d = 1 / s, c = Math.min(1, s), p = u / c, m = Math.floor((p + 1) * 2), f = new Int16Array((m + 2) * a), y = 0;
            for(let _ = 0; _ < a; _++){
                let S = (_ + .5) * d + l, w = Math.max(0, Math.floor(S - p)), j = Math.min(o - 1, Math.ceil(S + p)), C = j - w + 1, H = new Float32Array(C), L = new Int16Array(C), B = 0, D = 0;
                for(let U = w; U <= j; U++){
                    let M = i((U + .5 - S) * c, u);
                    B += M, H[D] = M, D++;
                }
                let X = 0;
                for(let U = 0; U < H.length; U++){
                    let M = H[U] / B;
                    X += M, L[U] = n(M);
                }
                L[a >> 1] += n(1 - X);
                let T = 0;
                for(; T < L.length && L[T] === 0;)T++;
                let O = L.length - 1;
                for(; O > 0 && L[O] === 0;)O--;
                let G = w + T, Y = O - T + 1;
                f[y++] = G, f[y++] = Y, f.set(L.subarray(T, O + 1), y), y += Y;
            }
            return f;
        };
        t.filters = r;
    }
}), Mi = dt({
    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.convolve = void 0;
        var e = 14, i = (n, r, o, a, s, l)=>{
            let h = 0, u = 0;
            for(let d = 0; d < a; d++){
                let c = 0;
                for(let p = 0; p < s; p++){
                    let m = l[c++], f = h + m * 4 | 0, y = 0, _ = 0, S = 0, w = 0;
                    for(let j = l[c++]; j > 0; j--){
                        let C = l[c++];
                        y = y + C * n[f] | 0, _ = _ + C * n[f + 1] | 0, S = S + C * n[f + 2] | 0, w = w + C * n[f + 3] | 0, f = f + 4 | 0;
                    }
                    r[u] = y + 8192 >> e, r[u + 1] = _ + 8192 >> e, r[u + 2] = S + 8192 >> e, r[u + 3] = w + 8192 >> e, u = u + a * 4 | 0;
                }
                u = (d + 1) * 4 | 0, h = (d + 1) * o * 4 | 0;
            }
        };
        t.convolve = i;
    }
}), Ai = dt({
    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.lanczos2 = t.lanczos = void 0;
        var e = Li(), i = ki(), n = Oi(), r = Mi(), o = (l, h, u = !1)=>{
            let d = h.width / l.width, c = h.height / l.height, p = n.filters(l.width, h.width, d, 0, u), m = n.filters(l.height, h.height, c, 0, u), f = new Uint8ClampedArray(h.width * l.height * 4);
            r.convolve(l.data, f, l.width, l.height, h.width, p), r.convolve(f, h.data, l.height, h.width, h.height, m);
        }, a = (l, h, u = 0, d = 0, c = l.width - u, p = l.height - d, m = 0, f = 0, y = h.width - m, _ = h.height - f)=>{
            if (u = u | 0, d = d | 0, c = c | 0, p = p | 0, m = m | 0, f = f | 0, y = y | 0, _ = _ | 0, c <= 0 || p <= 0 || y <= 0 || _ <= 0) return;
            if (u === 0 && d === 0 && c === l.width && p === l.height && m === 0 && f === 0 && y === h.width && _ === h.height) {
                o(l, h);
                return;
            }
            let S = i.createImage(c, p), w = i.createImage(y, _);
            e.copy(l, S, u, d), o(S, w), e.copy(w, h, 0, 0, w.width, w.height, m, f);
        };
        t.lanczos = a;
        var s = (l, h, u = 0, d = 0, c = l.width - u, p = l.height - d, m = 0, f = 0, y = h.width - m, _ = h.height - f)=>{
            if (u = u | 0, d = d | 0, c = c | 0, p = p | 0, m = m | 0, f = f | 0, y = y | 0, _ = _ | 0, c <= 0 || p <= 0 || y <= 0 || _ <= 0) return;
            if (u === 0 && d === 0 && c === l.width && p === l.height && m === 0 && f === 0 && y === h.width && _ === h.height) {
                o(l, h, !0);
                return;
            }
            let S = i.createImage(c, p), w = i.createImage(y, _);
            e.copy(l, S, u, d), o(S, w, !0), e.copy(w, h, 0, 0, w.width, w.height, m, f);
        };
        t.lanczos2 = s;
    }
}), be = ((t)=>(t.Bounce = "bounce", t.Normal = "normal", t))(be || {}), Ci = hi(be), we = z({
    autoplay: b(Pt()),
    defaultTheme: b(A()),
    direction: b(Tt([
        ie(1),
        ie(-1)
    ])),
    hover: b(Pt()),
    id: A(),
    intermission: b(V()),
    loop: b(Tt([
        Pt(),
        V()
    ])),
    playMode: b(Ci),
    speed: b(V()),
    themeColor: b(A())
}), Pi = z({
    animations: lt(A()),
    id: A()
}), Ei = z({
    activeAnimationId: b(A()),
    animations: lt(we),
    author: b(A()),
    custom: b(ci(A(), li())),
    description: b(A()),
    generator: b(A()),
    keywords: b(A()),
    revision: b(V()),
    themes: b(lt(Pi)),
    states: b(lt(A())),
    version: b(A())
}), Vt = pi(we, [
    "id"
]), Z = z({
    state: A()
}), Ti = Z, xi = ut([
    Z,
    z({
        ms: V()
    })
]), ji = ut([
    Z,
    z({
        count: V()
    })
]), Ni = Z, zi = Z, Fi = Z, Di = ut([
    Z,
    z({
        threshold: b(lt(V([
            jt(0),
            xt(1)
        ])))
    })
]), Ui = z({
    onAfter: b(xi),
    onClick: b(Ti),
    onComplete: b(Fi),
    onEnter: b(ji),
    onMouseEnter: b(Ni),
    onMouseLeave: b(zi),
    onShow: b(Di)
}), $i = ut([
    Vt,
    z({
        playOnScroll: b(ne([
            V([
                jt(0),
                xt(1)
            ]),
            V([
                jt(0),
                xt(1)
            ])
        ])),
        segments: b(Tt([
            ne([
                V(),
                V()
            ]),
            A()
        ]))
    })
]);
ut([
    Ui,
    z({
        animationId: b(A()),
        playbackSettings: $i
    })
]);
var Vi = {
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    bmp: "image/bmp",
    svg: "image/svg+xml",
    webp: "image/webp",
    mpeg: "audio/mpeg",
    mp3: "audio/mp3"
}, re = {
    jpeg: [
        255,
        216,
        255
    ],
    png: [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10
    ],
    gif: [
        71,
        73,
        70
    ],
    bmp: [
        66,
        77
    ],
    webp: [
        82,
        73,
        70,
        70,
        87,
        69,
        66,
        80
    ],
    svg: [
        60,
        63,
        120
    ],
    mp3: [
        73,
        68,
        51,
        3,
        0,
        0,
        0,
        0
    ],
    mpeg: [
        73,
        68,
        51,
        3,
        0,
        0,
        0,
        0
    ]
}, qi = (t)=>{
    let e = null, i = [];
    if (!t) return null;
    let n = t.substring(t.indexOf(",") + 1);
    typeof window > "u" ? e = Buffer.from(n, "base64").toString("binary") : e = atob(n);
    let r = new Uint8Array(e.length);
    for(let o = 0; o < e.length; o += 1)r[o] = e.charCodeAt(o);
    i = Array.from(r.subarray(0, 8));
    for(let o in re){
        let a = re[o];
        if (a && i.every((s, l)=>s === a[l])) return Vi[o];
    }
    return null;
}, qt = class extends Error {
    constructor(t, e){
        super(t), Ii(this, "code"), this.name = "[dotlottie-js]", this.code = e;
    }
};
function Se(t) {
    let e;
    if (typeof window > "u") e = Buffer.from(t).toString("base64");
    else {
        let i = Array.prototype.map.call(t, (n)=>String.fromCharCode(n)).join("");
        e = window.btoa(i);
    }
    return `data:${qi(e)};base64,${e}`;
}
function oe(t) {
    return "w" in t && "h" in t && !("xt" in t) && "p" in t;
}
function Nt(t) {
    return !("h" in t) && !("w" in t) && "p" in t && "e" in t && "u" in t && "id" in t;
}
async function ct(t, e = ()=>!0) {
    if (!(t instanceof Uint8Array)) throw new qt("DotLottie not found", "INVALID_DOTLOTTIE");
    return await new Promise((i, n)=>{
        ni(t, {
            filter: e
        }, (r, o)=>{
            r && n(r), i(o);
        });
    });
}
async function Bt(t, e, i) {
    if (!(t instanceof Uint8Array)) throw new qt("DotLottie not found", "INVALID_DOTLOTTIE");
    return (await ct(t, (n)=>n.name === e && (!i || i(n))))[e];
}
async function bt(t) {
    let e = "manifest.json", i = (await ct(t, (n)=>n.name === e))[e];
    if (!(typeof i > "u")) return JSON.parse(rt(i, !1));
}
async function Bi(t) {
    if (!(t instanceof Uint8Array)) return {
        success: !1,
        error: "DotLottie not found"
    };
    let e = await bt(t);
    if (typeof e > "u") return {
        success: !1,
        error: "Invalid .lottie file, manifest.json is missing"
    };
    let i = mi(Ei, e);
    return i.success ? {
        success: !0
    } : {
        success: !1,
        error: `Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(ri(i.error).nested, null, 2)}`
    };
}
async function Jt(t) {
    let e = new Uint8Array(t), i = await Bi(e);
    if (i.error) throw new qt(i.error, "INVALID_DOTLOTTIE");
    return e;
}
async function Ji(t, e) {
    let i = await ct(t, (r)=>{
        let o = r.name.replace("audio/", "");
        return r.name.startsWith("audio/") && (!e || e({
            ...r,
            name: o
        }));
    }), n = {};
    for(let r in i){
        let o = i[r];
        if (o instanceof Uint8Array) {
            let a = r.replace("audio/", "");
            n[a] = Se(o);
        }
    }
    return n;
}
async function Ri(t, e) {
    let i = new Map;
    for (let [r, o] of Object.entries(e))for (let a of o.assets || [])if (Nt(a)) {
        let s = a.p;
        i.has(s) || i.set(s, new Set), i.get(s)?.add(r);
    }
    let n = await Ji(t, (r)=>i.has(r.name));
    for (let [r, o] of i){
        let a = n[r];
        if (a) for (let s of o){
            let l = e[s];
            for (let h of l?.assets || [])Nt(h) && h.p === r && (h.p = a, h.u = "", h.e = 1);
        }
    }
}
async function Hi(t, e) {
    let i = await ct(t, (r)=>{
        let o = r.name.replace("images/", "");
        return r.name.startsWith("images/") && (!e || e({
            ...r,
            name: o
        }));
    }), n = {};
    for(let r in i){
        let o = i[r];
        if (o instanceof Uint8Array) {
            let a = r.replace("images/", "");
            n[a] = Se(o);
        }
    }
    return n;
}
async function Wi(t, e) {
    let i = new Map;
    for (let [r, o] of Object.entries(e))for (let a of o.assets || [])if (oe(a)) {
        let s = a.p;
        i.has(s) || i.set(s, new Set), i.get(s)?.add(r);
    }
    let n = await Hi(t, (r)=>i.has(r.name));
    for (let [r, o] of i){
        let a = n[r];
        if (a) for (let s of o){
            let l = e[s];
            for (let h of l?.assets || [])oe(h) && h.p === r && (h.p = a, h.u = "", h.e = 1);
        }
    }
}
async function Ie(t, e, { inlineAssets: i } = {}, n) {
    let r = `animations/${e}.json`, o = await Bt(t, r, n);
    if (typeof o > "u") return;
    let a = JSON.parse(rt(o, !1));
    if (!i) return a;
    let s = {
        [e]: a
    };
    return await Wi(t, s), await Ri(t, s), a;
}
async function Le(t, e, i) {
    let n = `themes/${e}.lss`, r = await Bt(t, n, i);
    if (!(typeof r > "u")) return rt(r, !1);
}
async function ke(t, e) {
    let i = {}, n = await ct(t, (r)=>{
        let o = r.name.replace("states/", "").replace(".json", "");
        return r.name.startsWith("states/") && (!e || e({
            ...r,
            name: o
        }));
    });
    for(let r in n){
        let o = n[r];
        if (o instanceof Uint8Array) {
            let a = r.replace("states/", "").replace(".json", "");
            i[a] = rt(o, !1);
        }
    }
    return i;
}
async function Oe(t, e, i) {
    let n = `states/${e}.json`, r = await Bt(t, n, i);
    return typeof r > "u" ? void 0 : JSON.parse(rt(r, !1));
}
Si(Ai());
function v(t, e = "dotLottie-common") {
    return new Error(`[${e}]: ${t}`);
}
function tt(t, e = "dotLottie-common", ...i) {
    console.error(`[${e}]:`, t, ...i);
}
function I(t, e = "dotLottie-common", ...i) {
    console.warn(`[${e}]:`, t, ...i);
}
function Me(t = "") {
    let e = t.trim(), i = e.lastIndexOf("/"), n = e.substring(i + 1), r = n.indexOf(".");
    return r !== -1 ? n.substring(0, r) : n;
}
function ot(t) {
    return [
        "v",
        "ip",
        "op",
        "layers",
        "fr",
        "w",
        "h"
    ].every((e)=>Object.prototype.hasOwnProperty.call(t, e));
}
function Ae(t) {
    let e = t.assets;
    return e ? e.some((i)=>Nt(i)) : !1;
}
function Ce(t) {
    try {
        let e = JSON.parse(t);
        return ot(e);
    } catch  {
        return !1;
    }
}
function nn(t, e) {
    let i = Object.keys(t).find((n)=>t[n] === e);
    if (i === void 0) throw new Error("Value not found in the object.");
    return i;
}
var Pe = class {
    _dotLottie;
    _animationsMap = new Map;
    _themeMap = new Map;
    _stateMachinesMap = new Map;
    _manifest;
    get dotLottie() {
        return this._dotLottie;
    }
    get animationsMap() {
        return this._animationsMap;
    }
    get themeMap() {
        return this._themeMap;
    }
    get stateMachinesMap() {
        return this._stateMachinesMap;
    }
    get manifest() {
        return this._manifest;
    }
    async loadFromUrl(t) {
        let e = await fetch(t, {
            method: "GET",
            mode: "cors"
        });
        if (!e.ok) throw new Error(`Failed to load dotLottie from ${t} with status ${e.status}`);
        if (e.headers.get("content-type")?.includes("application/json")) {
            let i = await e.json();
            if (!ot(i)) throw new Error(`Invalid lottie JSON at ${t}`);
            let n = Me(t);
            this._animationsMap.set(n, i);
            let r = {
                activeAnimationId: n,
                animations: [
                    {
                        id: n
                    }
                ]
            };
            this._manifest = r;
        } else {
            this._dotLottie = await Jt(await e.arrayBuffer());
            let i = await bt(this._dotLottie);
            if (!i) throw new Error("Manifest not found");
            this._manifest = i;
        }
    }
    loadFromLottieJSON(t) {
        if (!ot(t)) throw new Error("Invalid lottie JSON");
        let e = "my-animation";
        this._animationsMap.set(e, t);
        let i = {
            activeAnimationId: e,
            animations: [
                {
                    id: e
                }
            ]
        };
        this._manifest = i;
    }
    async loadFromArrayBuffer(t) {
        this._dotLottie = await Jt(t);
        let e = await bt(this._dotLottie);
        if (!e) throw new Error("Manifest not found");
        this._manifest = e;
    }
    async getAnimation(t) {
        if (this._animationsMap.get(t)) return this._animationsMap.get(t);
        if (!this._dotLottie) return;
        let e = await Ie(this._dotLottie, t, {
            inlineAssets: !0
        });
        return e && this._animationsMap.set(t, e), e;
    }
    async getTheme(t) {
        if (this._themeMap.get(t)) return this._themeMap.get(t);
        if (!this._dotLottie) return;
        let e = await Le(this._dotLottie, t);
        return e && this._themeMap.set(t, e), e;
    }
    async getStateMachines() {
        if (!this._dotLottie) return;
        let t = await ke(this._dotLottie);
        for(let e in t)if (e) {
            let i = t[e];
            if (i) {
                let n = JSON.parse(i);
                if (n) {
                    let r = n.descriptor.id;
                    this._stateMachinesMap.get(r) || this._stateMachinesMap.set(r, n);
                }
            }
        }
        return Array.from(this._stateMachinesMap.values());
    }
    async getStateMachine(t) {
        if (this._stateMachinesMap.get(t)) return this._stateMachinesMap.get(t);
        if (!this._dotLottie) return;
        let e = await Oe(this._dotLottie, t);
        return e && this._stateMachinesMap.set(e.descriptor.id, e), e;
    }
};
async function Ee(t, e) {
    let [{ relottie: i }, { default: n }] = await Promise.all([
        require("7f369f9dececb0d9"),
        require("6d764ac02c195b16")
    ]), r = await i().use(n, {
        lss: e
    }).process(JSON.stringify(t));
    return JSON.parse(r.value);
}
function St() {
    throw new Error("Cycle detected");
}
function Ht() {
    if (at > 1) at--;
    else {
        for(var t, e = !1; ft !== void 0;){
            var i = ft;
            for(ft = void 0, Rt++; i !== void 0;){
                var n = i.o;
                if (i.o = void 0, i.f &= -3, !(8 & i.f) && xe(i)) try {
                    i.c();
                } catch (r) {
                    e || (t = r, e = !0);
                }
                i = n;
            }
        }
        if (Rt = 0, at--, e) throw t;
    }
}
var k = void 0, ft = void 0, at = 0, Rt = 0, wt = 0;
function Te(t) {
    if (k !== void 0) {
        var e = t.n;
        if (e === void 0 || e.t !== k) return e = {
            i: 0,
            S: t,
            p: k.s,
            n: void 0,
            t: k,
            e: void 0,
            x: void 0,
            r: e
        }, k.s !== void 0 && (k.s.n = e), k.s = e, t.n = e, 32 & k.f && t.S(e), e;
        if (e.i === -1) return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = k.s, e.n = void 0, k.s.n = e, k.s = e), e;
    }
}
function x(t) {
    this.v = t, this.i = 0, this.n = void 0, this.t = void 0;
}
x.prototype.h = function() {
    return !0;
};
x.prototype.S = function(t) {
    this.t !== t && t.e === void 0 && (t.x = this.t, this.t !== void 0 && (this.t.e = t), this.t = t);
};
x.prototype.U = function(t) {
    if (this.t !== void 0) {
        var e = t.e, i = t.x;
        e !== void 0 && (e.x = i, t.e = void 0), i !== void 0 && (i.e = e, t.x = void 0), t === this.t && (this.t = i);
    }
};
x.prototype.subscribe = function(t) {
    var e = this;
    return Xi(function() {
        var i = e.value, n = 32 & this.f;
        this.f &= -33;
        try {
            t(i);
        } finally{
            this.f |= n;
        }
    });
};
x.prototype.valueOf = function() {
    return this.value;
};
x.prototype.toString = function() {
    return this.value + "";
};
x.prototype.toJSON = function() {
    return this.value;
};
x.prototype.peek = function() {
    return this.v;
};
Object.defineProperty(x.prototype, "value", {
    get: function() {
        var t = Te(this);
        return t !== void 0 && (t.i = this.i), this.v;
    },
    set: function(t) {
        if (k instanceof et && function() {
            throw new Error("Computed cannot have side-effects");
        }(), t !== this.v) {
            Rt > 100 && St(), this.v = t, this.i++, wt++, at++;
            try {
                for(var e = this.t; e !== void 0; e = e.x)e.t.N();
            } finally{
                Ht();
            }
        }
    }
});
function Gi(t) {
    return new x(t);
}
function xe(t) {
    for(var e = t.s; e !== void 0; e = e.n)if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return !0;
    return !1;
}
function je(t) {
    for(var e = t.s; e !== void 0; e = e.n){
        var i = e.S.n;
        if (i !== void 0 && (e.r = i), e.S.n = e, e.i = -1, e.n === void 0) {
            t.s = e;
            break;
        }
    }
}
function Ne(t) {
    for(var e = t.s, i = void 0; e !== void 0;){
        var n = e.p;
        e.i === -1 ? (e.S.U(e), n !== void 0 && (n.n = e.n), e.n !== void 0 && (e.n.p = n)) : i = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = n;
    }
    t.s = i;
}
function et(t) {
    x.call(this, void 0), this.x = t, this.s = void 0, this.g = wt - 1, this.f = 4;
}
(et.prototype = new x).h = function() {
    if (this.f &= -3, 1 & this.f) return !1;
    if ((36 & this.f) == 32 || (this.f &= -5, this.g === wt)) return !0;
    if (this.g = wt, this.f |= 1, this.i > 0 && !xe(this)) return this.f &= -2, !0;
    var t = k;
    try {
        je(this), k = this;
        var e = this.x();
        (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
    } catch (i) {
        this.v = i, this.f |= 16, this.i++;
    }
    return k = t, Ne(this), this.f &= -2, !0;
};
et.prototype.S = function(t) {
    if (this.t === void 0) {
        this.f |= 36;
        for(var e = this.s; e !== void 0; e = e.n)e.S.S(e);
    }
    x.prototype.S.call(this, t);
};
et.prototype.U = function(t) {
    if (this.t !== void 0 && (x.prototype.U.call(this, t), this.t === void 0)) {
        this.f &= -33;
        for(var e = this.s; e !== void 0; e = e.n)e.S.U(e);
    }
};
et.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 6;
        for(var t = this.t; t !== void 0; t = t.x)t.t.N();
    }
};
et.prototype.peek = function() {
    if (this.h() || St(), 16 & this.f) throw this.v;
    return this.v;
};
Object.defineProperty(et.prototype, "value", {
    get: function() {
        1 & this.f && St();
        var t = Te(this);
        if (this.h(), t !== void 0 && (t.i = this.i), 16 & this.f) throw this.v;
        return this.v;
    }
});
function ze(t) {
    var e = t.u;
    if (t.u = void 0, typeof e == "function") {
        at++;
        var i = k;
        k = void 0;
        try {
            e();
        } catch (n) {
            throw t.f &= -2, t.f |= 8, Wt(t), n;
        } finally{
            k = i, Ht();
        }
    }
}
function Wt(t) {
    for(var e = t.s; e !== void 0; e = e.n)e.S.U(e);
    t.x = void 0, t.s = void 0, ze(t);
}
function Ki(t) {
    if (k !== this) throw new Error("Out-of-order effect");
    Ne(this), k = t, this.f &= -2, 8 & this.f && Wt(this), Ht();
}
function pt(t) {
    this.x = t, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
pt.prototype.c = function() {
    var t = this.S();
    try {
        if (8 & this.f || this.x === void 0) return;
        var e = this.x();
        typeof e == "function" && (this.u = e);
    } finally{
        t();
    }
};
pt.prototype.S = function() {
    1 & this.f && St(), this.f |= 1, this.f &= -9, ze(this), je(this), at++;
    var t = k;
    return k = this, Ki.bind(this, t);
};
pt.prototype.N = function() {
    2 & this.f || (this.f |= 2, this.o = ft, ft = this);
};
pt.prototype.d = function() {
    this.f |= 8, 1 & this.f || Wt(this);
};
function Xi(t) {
    var e = new pt(t);
    try {
        e.c();
    } catch (i) {
        throw e.d(), i;
    }
    return e.d.bind(e);
}
var Fe = class {
    _state;
    _prevState;
    constructor(t){
        this._prevState = t, this._state = Gi(t);
    }
    setState(t) {
        this._prevState = this._state.value, this._state.value = t;
    }
    subscribe(t) {
        return this._state.subscribe((e)=>t(e, this._prevState));
    }
};
async function De(t, e) {
    let [{ DotLottieStateMachineManager: i }] = await Promise.all([
        require("8b5ff0a370e7b7d1")
    ]);
    if (!t.length) throw v("No state machines available inside this .lottie!");
    return new i(t, e);
}
var Yi = {
    name: "@dotlottie/common",
    version: "0.7.0",
    type: "module",
    description: "",
    author: "Afsal <afsal@lottiefiles.com>, Sam Osborne <sam@lottiefiles.com>",
    license: "MIT",
    private: !0,
    engines: {
        node: ">18.0.0"
    },
    module: "dist/index.js",
    types: "dist/index.d.ts",
    files: [
        "dist"
    ],
    keywords: [],
    scripts: {
        build: "tsup",
        dev: "tsup --watch",
        lint: "eslint .",
        "type-check": "tsc --noEmit"
    },
    dependencies: {
        "@dotlottie/dotlottie-js": "0.6.0",
        "@lottiefiles/relottie": "1.0.0",
        "@lottiefiles/relottie-style": "0.4.1",
        "@preact/signals-core": "^1.2.3",
        howler: "^2.2.3",
        "lottie-web": "^5.12.2",
        xstate: "^4.38.1"
    },
    devDependencies: {
        "@lottiefiles/lottie-types": "^1.2.0",
        "@types/howler": "^2.2.8",
        tsup: "^6.1.3",
        typescript: "^4.7.4"
    },
    publishConfig: {
        access: "restricted"
    }
}, Qi = ((t)=>(t.Complete = "complete", t.DataFail = "data_fail", t.DataReady = "data_ready", t.Error = "error", t.Frame = "frame", t.Freeze = "freeze", t.LoopComplete = "loopComplete", t.Pause = "pause", t.Play = "play", t.Ready = "ready", t.Stop = "stop", t.VisibilityChange = "visibilityChange", t))(Qi || {}), Zi = ((t)=>(t.Completed = "completed", t.Error = "error", t.Fetching = "fetching", t.Frozen = "frozen", t.Initial = "initial", t.Loading = "loading", t.Paused = "paused", t.Playing = "playing", t.Ready = "ready", t.Stopped = "stopped", t))(Zi || {}), tn = ((t)=>(t.Bounce = "bounce", t.Normal = "normal", t))(tn || {}), F = {
    autoplay: !1,
    direction: 1,
    hover: !1,
    intermission: 0,
    loop: !1,
    playMode: "normal",
    speed: 1,
    defaultTheme: ""
}, en = {
    activeStateId: "",
    autoplay: !1,
    currentState: "initial",
    frame: 0,
    seeker: 0,
    direction: 1,
    hover: !1,
    loop: !1,
    playMode: "normal",
    speed: 1,
    background: "transparent",
    intermission: 0,
    currentAnimationId: void 0,
    visibilityPercentage: 0
}, bn = class {
    _lottie;
    _src;
    _animationConfig;
    _prevUserPlaybackOptions = {};
    _userPlaybackOptions;
    _hover = !1;
    _loop = !1;
    _counter = 0;
    _intermission = 0;
    _counterInterval = null;
    _container = null;
    _name;
    _mode = "normal";
    _background = "transparent";
    _animation;
    _defaultTheme;
    _activeAnimationId;
    _currentAnimationId;
    _testId;
    _listeners = new Map;
    _currentState = "initial";
    _stateBeforeFreeze = "initial";
    state = new Fe(en);
    _light = !1;
    _worker = !1;
    _dotLottieLoader = new Pe;
    _activeStateId;
    _inInteractiveMode = !1;
    _scrollTicking = !1;
    _scrollCallback = void 0;
    _onShowIntersectionObserver = void 0;
    _visibilityPercentage = 0;
    _audios = [];
    _stateMachineManager;
    constructor(t, e, i){
        this._src = structuredClone(t), i?.testId && (this._testId = i.testId), this._defaultTheme = i?.defaultTheme || "", this._userPlaybackOptions = this._validatePlaybackOptions(i || {}), typeof i?.activeAnimationId == "string" && (this._activeAnimationId = i.activeAnimationId), this._container = e || null, typeof i?.background == "string" && this.setBackground(i.background), typeof i?.activeStateId < "u" && (this._activeStateId = i.activeStateId);
        let { rendererSettings: n, ...r } = i || {};
        this._animationConfig = {
            loop: !1,
            autoplay: !1,
            renderer: "svg",
            rendererSettings: {
                clearCanvas: !0,
                progressiveLoad: !0,
                hideOnTransparent: !0,
                filterSize: {
                    width: "200%",
                    height: "200%",
                    x: "-50%",
                    y: "-50%"
                },
                ...n
            },
            ...r
        }, i?.light && (this._light = i.light), i?.worker && (this._worker = i.worker), this._listenToHover(), this._listenToVisibilityChange();
    }
    _listenToHover() {
        let t = ()=>{
            this._hover && this.currentState !== "playing" && this.play();
        }, e = ()=>{
            this._hover && this.currentState === "playing" && this.stop();
        };
        this._container?.removeEventListener("mouseenter", t), this._container?.removeEventListener("mouseleave", e), this._container?.addEventListener("mouseleave", e), this._container?.addEventListener("mouseenter", t);
    }
    _onVisibilityChange() {
        !this._lottie || typeof document > "u" || (document.hidden && this.currentState === "playing" ? this.freeze() : this.currentState === "frozen" && this.unfreeze());
    }
    _listenToVisibilityChange() {
        typeof document < "u" && typeof document.hidden < "u" && document.addEventListener("visibilitychange", ()=>this._onVisibilityChange());
    }
    _getOption(t) {
        if (typeof this._userPlaybackOptions[t] < "u") return this._userPlaybackOptions[t];
        let e = this._dotLottieLoader.manifest?.animations.find((i)=>i.id === this._currentAnimationId);
        return e && typeof e[t] < "u" ? e[t] : F[t];
    }
    _getPlaybackOptions() {
        let t = {};
        for(let e in F)typeof F[e] < "u" && (t[e] = this._getOption(e));
        return t;
    }
    _setPlayerState(t) {
        let e = t(this._getPlaybackOptions());
        try {
            Vt._parse(e);
        } catch  {
            I(`Invalid PlaybackOptions, ${JSON.stringify(e, null, 2)}`);
            return;
        }
        typeof e.defaultTheme < "u" && (this._defaultTheme = e.defaultTheme), typeof e.playMode < "u" && (this._mode = e.playMode), typeof e.intermission < "u" && (this._intermission = e.intermission), typeof e.hover < "u" && (this._hover = e.hover), typeof e.loop < "u" && (this.clearCountTimer(), this._loop = e.loop, this._counter = 0, this._lottie?.setLoop(typeof e.loop == "number" ? !0 : e.loop)), typeof e.speed < "u" && this._lottie?.setSpeed(e.speed), typeof e.autoplay < "u" && this._lottie && (this._lottie.autoplay = e.autoplay), typeof e.direction < "u" && this._lottie?.setDirection(e.direction);
    }
    _getOptionsFromAnimation(t) {
        let { id: e, ...i } = t;
        return {
            ...F,
            ...i
        };
    }
    _updateTestData() {
        !this._testId || !this._lottie || (window.dotLottiePlayer || (window.dotLottiePlayer = {
            [this._testId]: {}
        }), window.dotLottiePlayer[this._testId] = {
            direction: this._lottie.playDirection,
            currentState: this._currentState,
            loop: this.loop,
            mode: this._mode,
            speed: this._lottie.playSpeed
        });
    }
    setContainer(t) {
        t !== this._container && (this._container = t, this.setBackground(this._background), this._listenToHover());
    }
    get currentState() {
        return this._currentState;
    }
    clearCountTimer() {
        this._counterInterval && clearInterval(this._counterInterval);
    }
    setCurrentState(t) {
        this._currentState = t, this._notify(), this._updateTestData();
    }
    static isPathJSON(t) {
        return t.split(".").pop()?.toLowerCase() === "json";
    }
    get src() {
        return this._src;
    }
    updateSrc(t) {
        this._src !== t && (this._src = structuredClone(t), this._activeAnimationId = void 0, this._currentAnimationId = void 0, this.load());
    }
    get intermission() {
        return this._intermission;
    }
    get hover() {
        return this._hover;
    }
    setHover(t) {
        typeof t == "boolean" && (this._hover = t, this._userPlaybackOptions.hover = t, this._notify());
    }
    setIntermission(t) {
        this._intermission = t, this._userPlaybackOptions.intermission = t, this._notify();
    }
    get mode() {
        return this._mode;
    }
    get animations() {
        return this._dotLottieLoader.animationsMap;
    }
    get themes() {
        return this._dotLottieLoader.themeMap;
    }
    setMode(t) {
        typeof t == "string" && (this._mode = t, this._userPlaybackOptions.playMode = t, this._setPlayerState(()=>({
                playMode: t
            })), this._notify(), this._updateTestData());
    }
    get container() {
        if (this._container) return this._container;
    }
    goToAndPlay(t, e, i) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("goToAndPlay() Can't use whilst loading.");
            return;
        }
        this._lottie.goToAndPlay(t, e, i), this.setCurrentState("playing");
    }
    goToAndStop(t, e, i) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("goToAndStop() Can't use whilst loading.");
            return;
        }
        this._lottie.goToAndStop(t, e, i), this.setCurrentState("stopped");
    }
    seek(t) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("seek() Can't use whilst loading.");
            return;
        }
        let e = t;
        typeof e == "number" && (e = Math.round(e));
        let i = /^(\d+)(%?)$/u.exec(e.toString());
        if (!i) return;
        let n = i[2] === "%" ? this.totalFrames * Number(i[1]) / 100 : i[1];
        n !== void 0 && (this._lottie.goToAndPlay(n, !0), this.currentState === "playing" ? this.play() : this.currentState === "frozen" ? this.freeze() : this.pause());
    }
    _areNumbersInRange(t, e) {
        return t >= 0 && t <= 1 && e >= 0 && e <= 1;
    }
    _updatePosition(t, e, i) {
        let [n, r] = t ?? [
            0,
            this.totalFrames - 1
        ], [o, a] = e ?? [
            0,
            1
        ];
        if (!this._areNumbersInRange(o, a)) {
            tt("threshold values must be between 0 and 1");
            return;
        }
        if (this.container) {
            let { height: s, top: l } = this.container.getBoundingClientRect(), h = window.innerHeight - l, u = window.innerHeight + s, d = h / u, c = n + Math.round((d - o) / (a - o) * (r - n));
            i && i(d), this.goToAndStop(c, !0), (c >= r || d >= a) && this._handleAnimationComplete();
        }
        this._scrollTicking = !1;
    }
    _requestTick(t, e, i) {
        this._scrollTicking || (requestAnimationFrame(()=>this._updatePosition(t, e, i)), this._scrollTicking = !0);
    }
    playOnScroll(t) {
        this.stop(), this._scrollCallback && this.stopPlayOnScroll(), this._scrollCallback = ()=>this._requestTick(t?.segments, t?.threshold, t?.positionCallback), window.addEventListener("scroll", this._scrollCallback);
    }
    stopPlayOnScroll() {
        this._scrollCallback && (window.removeEventListener("scroll", this._scrollCallback), this._scrollCallback = void 0);
    }
    stopPlayOnShow() {
        this._onShowIntersectionObserver && (this._onShowIntersectionObserver.disconnect(), this._onShowIntersectionObserver = void 0);
    }
    addIntersectionObserver(t) {
        if (!this.container) throw v("Can't play on show, player container element not available.");
        let e = {
            root: null,
            rootMargin: "0px",
            threshold: t?.threshold ? t.threshold : [
                0,
                1
            ]
        }, i = (n)=>{
            n.forEach((r)=>{
                this._visibilityPercentage = r.intersectionRatio * 100, r.isIntersecting ? (t?.callbackOnIntersect && t.callbackOnIntersect(this._visibilityPercentage), this._container?.dispatchEvent(new Event("visibilityChange"))) : t?.callbackOnIntersect && (t.callbackOnIntersect(0), this._container?.dispatchEvent(new Event("visibilityChange")));
            });
        };
        this._onShowIntersectionObserver = new IntersectionObserver(i, e), this._onShowIntersectionObserver.observe(this.container);
    }
    playOnShow(t) {
        if (this.stop(), !this.container) throw v("Can't play on show, player container element not available.");
        this._onShowIntersectionObserver && this.stopPlayOnShow(), this.addIntersectionObserver({
            threshold: t?.threshold ?? [],
            callbackOnIntersect: (e)=>{
                e === 0 ? this.pause() : this.play();
            }
        });
    }
    _validatePlaybackOptions(t) {
        if (!t) return {};
        let e = {};
        for (let [i, n] of Object.entries(t))switch(i){
            case "autoplay":
                typeof n == "boolean" && (e.autoplay = n);
                break;
            case "direction":
                typeof n == "number" && [
                    1,
                    -1
                ].includes(n) && (e.direction = n);
                break;
            case "loop":
                (typeof n == "boolean" || typeof n == "number") && (e.loop = n);
                break;
            case "playMode":
                typeof n == "string" && [
                    "normal",
                    "bounce"
                ].includes(n) && (e.playMode = n);
                break;
            case "speed":
                typeof n == "number" && (e.speed = n);
                break;
            case "themeColor":
                typeof n == "string" && (e.themeColor = n);
                break;
            case "hover":
                typeof n == "boolean" && (e.hover = n);
                break;
            case "intermission":
                typeof n == "number" && (e.intermission = n);
                break;
            case "defaultTheme":
                typeof n == "string" && (e.defaultTheme = n);
                break;
        }
        return this._requireValidPlaybackOptions(e), e;
    }
    _requireAnimationsInTheManifest() {
        if (!this._dotLottieLoader.manifest?.animations.length) throw v("No animations found in manifest.");
    }
    _requireAnimationsToBeLoaded() {
        if (this._dotLottieLoader.animationsMap.size === 0) throw v("No animations have been loaded.");
    }
    async play(t, e) {
        if ([
            "initial",
            "loading"
        ].includes(this._currentState)) {
            I("Player unable to play whilst loading.");
            return;
        }
        if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), this._lottie && !t) {
            this._lottie.playDirection === -1 && this._lottie.currentFrame === 0 ? this._lottie.goToAndPlay(this._lottie.totalFrames, !0) : this._lottie.play(), this.setCurrentState("playing");
            return;
        }
        if (typeof t == "number") {
            let i = this._dotLottieLoader.manifest?.animations[t];
            if (!i) throw v("animation not found.");
            typeof e == "function" ? await this.render({
                id: i.id,
                ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(i))
            }) : await this.render({
                id: i.id
            });
        }
        if (typeof t == "string") {
            let i = this._dotLottieLoader.manifest?.animations.find((n)=>n.id === t);
            if (!i) throw v("animation not found.");
            typeof e == "function" ? await this.render({
                id: i.id,
                ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(i))
            }) : await this.render({
                id: i.id
            });
        }
    }
    playSegments(t, e) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("playSegments() Can't use whilst loading.");
            return;
        }
        this._lottie.playSegments(t, e), this.setCurrentState("playing");
    }
    resetSegments(t) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("resetSegments() Can't use whilst loading.");
            return;
        }
        this._lottie.resetSegments(t);
    }
    togglePlay() {
        this.currentState === "playing" ? this.pause() : this.play();
    }
    _getAnimationByIdOrIndex(t) {
        if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), typeof t == "number") {
            let e = this._dotLottieLoader.manifest?.animations[t];
            if (!e) throw v("animation not found.");
            return e;
        }
        if (typeof t == "string") {
            let e = this._dotLottieLoader.manifest?.animations.find((i)=>i.id === t);
            if (!e) throw v("animation not found.");
            return e;
        }
        throw v("first param must be a number or string");
    }
    get activeAnimationId() {
        return this._getActiveAnimationId();
    }
    get currentAnimationId() {
        return this._currentAnimationId;
    }
    get activeStateId() {
        return this._activeStateId;
    }
    async _startInteractivity(t) {
        if (!this._inInteractiveMode) {
            tt("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");
            return;
        }
        if (this._dotLottieLoader.stateMachinesMap.size === 0 && await this._dotLottieLoader.getStateMachines(), this._dotLottieLoader.stateMachinesMap.size === 0) throw v("No interactivity states are available.");
        if (t === "undefined") throw v("stateId is not specified.");
        this._stateMachineManager || (this._stateMachineManager = await De(Array.from(this._dotLottieLoader.stateMachinesMap.values()), this)), this._stateMachineManager.start(t);
    }
    enterInteractiveMode(t) {
        if (t) this._inInteractiveMode || (this._prevUserPlaybackOptions = {
            ...this._userPlaybackOptions
        }), this._inInteractiveMode && this._stateMachineManager?.stop(), this._activeStateId = t, this._inInteractiveMode = !0, this._startInteractivity(t);
        else throw v("stateId must be a non-empty string.");
    }
    exitInteractiveMode() {
        this._inInteractiveMode && (this._inInteractiveMode = !1, this._activeStateId = "", this._stateMachineManager?.stop(), this._userPlaybackOptions = {}, this._userPlaybackOptions = {
            ...this._prevUserPlaybackOptions
        }, this._prevUserPlaybackOptions = {}, this.reset());
    }
    reset() {
        let t = this._getActiveAnimationId(), e = this._dotLottieLoader.manifest?.animations.find((i)=>i.id === t);
        if (this._inInteractiveMode && this.exitInteractiveMode(), !e) throw v("animation not found.");
        this.play(t);
    }
    previous(t) {
        if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw v("manifest not found.");
        if (this._inInteractiveMode) {
            I("previous() is not supported in interactive mode.");
            return;
        }
        let e = this._dotLottieLoader.manifest.animations.findIndex((n)=>n.id === this._currentAnimationId);
        if (e === -1) throw v("animation not found.");
        let i = this._dotLottieLoader.manifest.animations[(e - 1 + this._dotLottieLoader.manifest.animations.length) % this._dotLottieLoader.manifest.animations.length];
        if (!i || !i.id) throw v("animation not found.");
        typeof t == "function" ? this.render({
            id: i.id,
            ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(i))
        }) : this.render({
            id: i.id
        });
    }
    next(t) {
        if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw v("manifest not found.");
        if (this._inInteractiveMode) {
            I("next() is not supported in interactive mode.");
            return;
        }
        let e = this._dotLottieLoader.manifest.animations.findIndex((n)=>n.id === this._currentAnimationId);
        if (e === -1) throw v("animation not found.");
        let i = this._dotLottieLoader.manifest.animations[(e + 1) % this._dotLottieLoader.manifest.animations.length];
        if (!i || !i.id) throw v("animation not found.");
        typeof t == "function" ? this.render({
            id: i.id,
            ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(i))
        }) : this.render({
            id: i.id
        });
    }
    getManifest() {
        return this._dotLottieLoader.manifest;
    }
    resize() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("resize() Can't use whilst loading.");
            return;
        }
        this._lottie.resize();
    }
    stop() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("stop() Can't use whilst loading.");
            return;
        }
        this.clearCountTimer(), this._counter = 0, this._setPlayerState(()=>({
                direction: this._getOption("direction")
            })), this._lottie.stop(), this.setCurrentState("stopped");
    }
    pause() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("pause() Can't use whilst loading.");
            return;
        }
        this.clearCountTimer(), this._lottie.pause(), this.setCurrentState("paused");
    }
    freeze() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("freeze() Can't use whilst loading.");
            return;
        }
        this.currentState !== "frozen" && (this._stateBeforeFreeze = this.currentState), this._lottie.pause(), this.setCurrentState("frozen");
    }
    unfreeze() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("unfreeze() Can't use whilst loading.");
            return;
        }
        this._stateBeforeFreeze === "playing" ? this.play() : this.pause();
    }
    destroy() {
        this._container?.__lottie && (this._container.__lottie.destroy(), this._container.__lottie = null), this._audios.length && (this._audios.forEach((t)=>{
            t.unload();
        }), this._audios = []), this.clearCountTimer(), typeof document < "u" && document.removeEventListener("visibilitychange", ()=>this._onVisibilityChange()), this._counter = 0, this._lottie?.destroy();
    }
    getAnimationInstance() {
        return this._lottie;
    }
    static getLottieWebVersion() {
        return `${Yi.dependencies["lottie-web"]}`;
    }
    addEventListener(t, e) {
        this._listeners.has(t) || this._listeners.set(t, new Set), this._listeners.get(t)?.add(e);
        try {
            t === "complete" ? this._container?.addEventListener(t, e) : this._lottie?.addEventListener(t, e);
        } catch (i) {
            tt(`addEventListener ${i}`);
        }
    }
    getState() {
        return {
            autoplay: this._lottie?.autoplay ?? !1,
            currentState: this._currentState,
            frame: this._frame,
            visibilityPercentage: this._visibilityPercentage,
            seeker: this._seeker,
            direction: this._lottie?.playDirection ?? 1,
            hover: this._hover,
            loop: this._loop || !1,
            playMode: this._mode,
            speed: this._lottie?.playSpeed ?? 1,
            background: this._background,
            intermission: this._intermission,
            defaultTheme: this._defaultTheme,
            currentAnimationId: this._currentAnimationId,
            activeStateId: this._activeStateId ?? ""
        };
    }
    _notify() {
        this.state.setState(this.getState());
    }
    get totalFrames() {
        return this._lottie?.totalFrames || 0;
    }
    get direction() {
        return this._lottie ? this._lottie.playDirection : 1;
    }
    setDirection(t) {
        this._requireValidDirection(t), this._setPlayerState(()=>({
                direction: t
            })), this._userPlaybackOptions.direction = t;
    }
    get speed() {
        return this._lottie?.playSpeed || 1;
    }
    setSpeed(t) {
        this._requireValidSpeed(t), this._setPlayerState(()=>({
                speed: t
            })), this._userPlaybackOptions.speed = t;
    }
    get autoplay() {
        return this._lottie?.autoplay ?? !1;
    }
    setAutoplay(t) {
        if (this._requireValidAutoplay(t), !this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("setAutoplay() Can't use whilst loading.");
            return;
        }
        this._setPlayerState(()=>({
                autoplay: t
            })), this._userPlaybackOptions.autoplay = t;
    }
    toggleAutoplay() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("toggleAutoplay() Can't use whilst loading.");
            return;
        }
        this.setAutoplay(!this._lottie.autoplay);
    }
    get defaultTheme() {
        return this._defaultTheme;
    }
    setDefaultTheme(t) {
        this._setPlayerState(()=>({
                defaultTheme: t
            })), this._userPlaybackOptions.defaultTheme = t, this._animation && this.render();
    }
    get loop() {
        return this._loop;
    }
    setLoop(t) {
        this._requireValidLoop(t), this._setPlayerState(()=>({
                loop: t
            })), this._userPlaybackOptions.loop = t;
    }
    toggleLoop() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("toggleLoop() Can't use whilst loading.");
            return;
        }
        this.setLoop(!this._loop);
    }
    get background() {
        return this._background;
    }
    setBackground(t) {
        this._requireValidBackground(t), this._background = t, this._container && (this._container.style.backgroundColor = t);
    }
    get _frame() {
        return this._lottie ? this.currentState === "completed" ? this.direction === -1 ? 0 : this._lottie.totalFrames : this._lottie.currentFrame : 0;
    }
    get _seeker() {
        return this._lottie ? this._frame / this._lottie.totalFrames * 100 : 0;
    }
    async revertToManifestValues(t) {
        let e;
        !Array.isArray(t) || t.length === 0 ? e = [
            "autoplay",
            "defaultTheme",
            "direction",
            "hover",
            "intermission",
            "loop",
            "playMode",
            "speed",
            "activeAnimationId"
        ] : e = t;
        let i = !1;
        if (e.includes("activeAnimationId")) {
            let n = this._dotLottieLoader.manifest?.activeAnimationId, r = this._getAnimationByIdOrIndex(n || 0);
            this._activeAnimationId = n, await this._setCurrentAnimation(r.id), i = !0;
        }
        e.forEach((n)=>{
            switch(n){
                case "autoplay":
                    delete this._userPlaybackOptions.autoplay, this.setAutoplay(this._getOption("autoplay"));
                    break;
                case "defaultTheme":
                    delete this._userPlaybackOptions.defaultTheme, this.setDefaultTheme(this._getOption("defaultTheme"));
                    break;
                case "direction":
                    delete this._userPlaybackOptions.direction, this.setDirection(this._getOption("direction"));
                    break;
                case "hover":
                    delete this._userPlaybackOptions.hover, this.setHover(this._getOption("hover"));
                    break;
                case "intermission":
                    delete this._userPlaybackOptions.intermission, this.setIntermission(this._getOption("intermission"));
                    break;
                case "loop":
                    delete this._userPlaybackOptions.loop, this.setLoop(this._getOption("loop"));
                    break;
                case "playMode":
                    delete this._userPlaybackOptions.playMode, this.setMode(this._getOption("playMode")), this.setDirection(this._getOption("direction"));
                    break;
                case "speed":
                    delete this._userPlaybackOptions.speed, this.setSpeed(this._getOption("speed"));
                    break;
            }
        }), i && this.render();
    }
    removeEventListener(t, e) {
        try {
            t === "complete" ? this._container?.removeEventListener(t, e) : this._lottie?.removeEventListener(t, e), this._listeners.get(t)?.delete(e);
        } catch (i) {
            tt("removeEventListener", i);
        }
    }
    _handleAnimationComplete() {
        typeof this._loop == "number" && this.stop();
        let t = this.direction === -1 ? 0 : this.totalFrames;
        this.goToAndStop(t, !0), this._counter = 0, this.clearCountTimer(), this.setCurrentState("completed"), this._container?.dispatchEvent(new Event("complete"));
    }
    addEventListeners() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            I("addEventListeners() Can't use whilst loading.");
            return;
        }
        this._lottie.addEventListener("enterFrame", ()=>{
            if (!this._lottie) {
                I("enterFrame event : Lottie is undefined.");
                return;
            }
            Math.floor(this._lottie.currentFrame) === 0 && this.direction === -1 && (this._container?.dispatchEvent(new Event("complete")), this.loop || this.setCurrentState("completed")), this._notify();
        }), this._lottie.addEventListener("loopComplete", ()=>{
            if (!this._lottie) {
                I("loopComplete event : Lottie is undefined.");
                return;
            }
            this._container?.dispatchEvent(new Event("loopComplete")), this.intermission > 0 && this.pause();
            let t = this._lottie.playDirection;
            if (typeof this._loop == "number" && this._loop > 0 && (this._counter += this._mode === "bounce" ? .5 : 1, this._counter >= this._loop)) {
                this._handleAnimationComplete();
                return;
            }
            this._mode === "bounce" && typeof t == "number" && (t = Number(t) * -1);
            let e = t === -1 ? this._lottie.totalFrames - 1 : 0;
            this.intermission ? (this.goToAndPlay(e, !0), this.pause(), this._counterInterval = window.setTimeout(()=>{
                this._lottie && (this._setPlayerState(()=>({
                        direction: t
                    })), this.goToAndPlay(e, !0));
            }, this._intermission)) : (this._setPlayerState(()=>({
                    direction: t
                })), this.goToAndPlay(t === -1 ? this.totalFrames - 1 : 0, !0));
        }), this._lottie.addEventListener("complete", ()=>{
            if (this._lottie && this._loop === !1 && this._mode === "bounce") {
                if (this._counter += .5, this._counter >= 1) {
                    this._handleAnimationComplete();
                    return;
                }
                this._counterInterval = window.setTimeout(()=>{
                    if (!this._lottie) return;
                    let t = this._lottie.playDirection;
                    this._mode === "bounce" && typeof t == "number" && (t = Number(t) * -1);
                    let e = t === -1 ? this.totalFrames - 1 : 0;
                    this._setPlayerState(()=>({
                            direction: t
                        })), this.goToAndPlay(e, !0);
                }, this._intermission);
            } else this._handleAnimationComplete();
        });
        for (let [t, e] of this._listeners)if (t === "complete") for (let i of e)this._container?.addEventListener(t, i);
        else for (let i of e)this._lottie.addEventListener(t, i);
    }
    async _setCurrentAnimation(t) {
        this._currentState = "loading";
        let e = await this._dotLottieLoader.getAnimation(t);
        this._currentAnimationId = t, this._animation = e, this._currentState = "ready";
    }
    async _getAudioFactory() {
        if (this._animation && Ae(this._animation)) {
            let { DotLottieAudio: t } = await require("ca7ea9b9401aea6c");
            return (e)=>{
                let i = new t({
                    src: [
                        e
                    ]
                });
                return this._audios.push(i), i;
            };
        }
        return null;
    }
    async render(t) {
        if (t?.id) await this._setCurrentAnimation(t.id);
        else if (!this._animation) throw v("no animation selected");
        let e = F.loop ?? !1, i = F.autoplay ?? !1, n = F.playMode ?? "normal", r = F.intermission ?? 0, o = F.hover ?? !1, a = F.direction ?? 1, s = F.speed ?? 1, l = F.defaultTheme ?? "";
        e = t?.loop ?? this._getOption("loop"), i = t?.autoplay ?? this._getOption("autoplay"), n = t?.playMode ?? this._getOption("playMode"), r = t?.intermission ?? this._getOption("intermission"), o = t?.hover ?? this._getOption("hover"), a = t?.direction ?? this._getOption("direction"), s = t?.speed ?? this._getOption("speed"), l = t?.defaultTheme ?? this._getOption("defaultTheme");
        let h = {
            ...this._animationConfig,
            autoplay: o ? !1 : i,
            loop: typeof e == "number" ? !0 : e,
            renderer: this._worker ? "svg" : this._animationConfig.renderer ?? "svg"
        }, [u, d, c] = await Promise.all([
            this._dotLottieLoader.getTheme(l),
            this._getLottiePlayerInstance(),
            this._getAudioFactory()
        ]);
        if (u && this._animation ? this._animation = await Ee(this._animation, u) : this._animation = await this._dotLottieLoader.getAnimation(this._currentAnimationId ?? ""), this._activeStateId && !this._inInteractiveMode) {
            this.enterInteractiveMode(this._activeStateId);
            return;
        }
        this.destroy(), this._setPlayerState(()=>({
                defaultTheme: l,
                playMode: n,
                intermission: r,
                hover: o,
                loop: e
            })), c ? this._lottie = d.loadAnimation({
            ...h,
            container: this._container,
            animationData: this._animation,
            audioFactory: c
        }) : this._lottie = d.loadAnimation({
            ...h,
            container: this._container,
            animationData: this._animation
        }), typeof this._lottie.resetSegments > "u" && (this._lottie.resetSegments = ()=>{
            this._lottie?.playSegments([
                0,
                this._lottie.totalFrames
            ], !0);
        }), this.addEventListeners(), this._container && (this._container.__lottie = this._lottie), this._setPlayerState(()=>({
                direction: a,
                speed: s
            })), i && !o && this.play(), this._updateTestData();
    }
    async _getLottiePlayerInstance() {
        let t = this._animationConfig.renderer ?? "svg", e;
        if (this._worker) return t !== "svg" && I("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."), e = await require("8d2f5113e57794fb"), e.default;
        switch(t){
            case "svg":
                this._light ? e = await require("d62c91c8a16c80ea") : e = await require("b6013d4a2f3d6f0b");
                break;
            case "canvas":
                this._light ? e = await require("f07a02b7c049e554") : e = await require("6bce15ca5140bfc5");
                break;
            case "html":
                this._light ? e = await require("c3448325bd633d9e") : e = await require("b77f80c3e58fbce4");
                break;
            default:
                throw new Error(`Invalid renderer: ${t}`);
        }
        return e.default;
    }
    _getActiveAnimationId() {
        let t = this._dotLottieLoader.manifest;
        return this._activeAnimationId ?? t?.activeAnimationId ?? t?.animations[0]?.id ?? void 0;
    }
    async load(t) {
        if (this._currentState === "loading") {
            I("Loading in progress..");
            return;
        }
        try {
            if (this.setCurrentState("loading"), typeof this._src == "string") {
                if (Ce(this._src)) {
                    let i = JSON.parse(this._src);
                    this._dotLottieLoader.loadFromLottieJSON(i);
                } else {
                    let i = new URL(this._src, window.location.href);
                    await this._dotLottieLoader.loadFromUrl(i.toString());
                }
            } else if (typeof this._src == "object" && ot(this._src)) this._dotLottieLoader.loadFromLottieJSON(this._src);
            else throw v("Invalid src provided");
            if (!this._dotLottieLoader.manifest) throw v("No manifest found");
            let e = this._getActiveAnimationId();
            if (!e) throw v("No active animation found");
            await this._setCurrentAnimation(e), await this.render(t);
        } catch (e) {
            this.setCurrentState("error"), e instanceof Error && tt(`Error loading animation: ${e.message}`);
        }
    }
    setErrorState(t) {
        this.setCurrentState("error"), tt(t);
    }
    _requireValidDirection(t) {
        if (t !== -1 && t !== 1) throw v("Direction can only be -1 (backwards) or 1 (forwards)");
    }
    _requireValidIntermission(t) {
        if (t < 0 || !Number.isInteger(t)) throw v("intermission must be a positive number");
    }
    _requireValidLoop(t) {
        if (typeof t == "number" && (!Number.isInteger(t) || t < 0)) throw v("loop must be a positive number or boolean");
    }
    _requireValidSpeed(t) {
        if (typeof t != "number") throw v("speed must be a number");
    }
    _requireValidBackground(t) {
        if (typeof t != "string") throw v("background must be a string");
    }
    _requireValidAutoplay(t) {
        if (typeof t != "boolean") throw v("autoplay must be a boolean");
    }
    _requireValidPlaybackOptions(t) {
        t.direction && this._requireValidDirection(t.direction), t.intermission && this._requireValidIntermission(t.intermission), t.loop && this._requireValidLoop(t.loop), t.speed && this._requireValidSpeed(t.speed);
    }
};

},{"1de0f60dec9e8a36":"fCgem","7f369f9dececb0d9":"iK38X","6d764ac02c195b16":"fwJV9","8b5ff0a370e7b7d1":"6l8x5","ca7ea9b9401aea6c":"k4rWd","8d2f5113e57794fb":"75Ohz","d62c91c8a16c80ea":"emPln","b6013d4a2f3d6f0b":"98CqU","f07a02b7c049e554":"7WzYV","6bce15ca5140bfc5":"ioAvf","c3448325bd633d9e":"lAoBW","b77f80c3e58fbce4":"bKxn7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"iK38X":[function(require,module,exports) {
module.exports = require("d71537e98a008e9c")(require("b19ca8e3146c0dca").getBundleURL("UckoE") + "dist-AIQGIF54-ZRQFFVOU.4473d963.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("5XAc8"));

},{"d71537e98a008e9c":"61B45","b19ca8e3146c0dca":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"fwJV9":[function(require,module,exports) {
module.exports = require("9755c69c45913ba0")(require("c805f586228e281d").getBundleURL("UckoE") + "dist-4JHQ5UB4-ADENUQD3.5d3757fd.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("bKggY"));

},{"9755c69c45913ba0":"61B45","c805f586228e281d":"lgJ39"}],"6l8x5":[function(require,module,exports) {
module.exports = require("9765c85e2843f580")(require("dbacab74112c1e50").getBundleURL("UckoE") + "dotlottie-state-machine-manager-EQLJDSHN-GQNUJPNH.4cd33eeb.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("51ELB"));

},{"9765c85e2843f580":"61B45","dbacab74112c1e50":"lgJ39"}],"k4rWd":[function(require,module,exports) {
module.exports = require("6e643b6d4a53e2bc")(require("dc8320f5b31a3a9f").getBundleURL("UckoE") + "dotlottie-audio-FLUSZPLH.d8da6445.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("6zVrt"));

},{"6e643b6d4a53e2bc":"61B45","dc8320f5b31a3a9f":"lgJ39"}],"75Ohz":[function(require,module,exports) {
module.exports = require("72a32cfcee367bb2")(require("14f5c5ae9ba72754").getBundleURL("UckoE") + "lottie_worker-WHOD5EO7-64CFFH2E.d6d475da.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("kHTrI"));

},{"72a32cfcee367bb2":"61B45","14f5c5ae9ba72754":"lgJ39"}],"emPln":[function(require,module,exports) {
module.exports = require("e59a4644a71e97ba")(require("42a35bf37653cfd0").getBundleURL("UckoE") + "lottie_light-IOYK46WR-ECBCRPFC.dbbdba03.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("bq9tk"));

},{"e59a4644a71e97ba":"61B45","42a35bf37653cfd0":"lgJ39"}],"98CqU":[function(require,module,exports) {
module.exports = require("78322e0757f184c2")(require("fc1028bd08fb237c").getBundleURL("UckoE") + "lottie_svg-NPHRPZVQ-H7F42BXO.8c233a95.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("gZy7i"));

},{"78322e0757f184c2":"61B45","fc1028bd08fb237c":"lgJ39"}],"7WzYV":[function(require,module,exports) {
module.exports = require("3da335c6df7b87a8")(require("81b703c778897e1f").getBundleURL("UckoE") + "lottie_light_canvas-JOJMVDMY-WR7KP7PE.12a27af4.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("2AlbM"));

},{"3da335c6df7b87a8":"61B45","81b703c778897e1f":"lgJ39"}],"ioAvf":[function(require,module,exports) {
module.exports = require("37ddb1cbf2f46f05")(require("74d4e7ebd7b468bb").getBundleURL("UckoE") + "lottie_canvas-MBHU2YSW-QKDI7L4D.8ea9c916.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("7kFkl"));

},{"37ddb1cbf2f46f05":"61B45","74d4e7ebd7b468bb":"lgJ39"}],"lAoBW":[function(require,module,exports) {
module.exports = require("d8c93c63e11ecca1")(require("268aa34ab88d74f5").getBundleURL("UckoE") + "lottie_light_html-QXO6XUZK-DGMP7OWN.5f332840.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("beD3L"));

},{"d8c93c63e11ecca1":"61B45","268aa34ab88d74f5":"lgJ39"}],"bKxn7":[function(require,module,exports) {
module.exports = require("3947ba90b3ff038e")(require("37bd65636b2ded96").getBundleURL("UckoE") + "lottie_html-DEQZ7JWN-7DH66MZZ.73fccc89.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("cx93v"));

},{"3947ba90b3ff038e":"61B45","37bd65636b2ded96":"lgJ39"}],"bBhes":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>u) //# sourceMappingURL=out.js.map
;
parcelHelpers.export(exports, "b", ()=>v);
var l = Object.create, a = Object.defineProperty, n = Object.getOwnPropertyDescriptor, f = Object.getOwnPropertyNames, O = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, u = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports), s = (r, e, t, p)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let o of f(e))!c.call(r, o) && o !== t && a(r, o, {
        get: ()=>e[o],
        enumerable: !(p = n(e, o)) || p.enumerable
    });
    return r;
}, v = (r, e, t)=>(t = r != null ? l(O(r)) : {}, s(e || !r || !r.__esModule ? a(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lvnj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>j) //# sourceMappingURL=out.js.map
;
var h = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var j = (g, b, d, c)=>{
    for(var a = c > 1 ? void 0 : c ? i(b, d) : b, e = g.length - 1, f; e >= 0; e--)(f = g[e]) && (a = (c ? f(b, d, a) : f(a)) || a);
    return c && a && h(b, d, a), a;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Oeyp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = addAnchorLogic = (application)=>{
    const roomButtonList = document.querySelectorAll("anchor");
    roomButtonList.forEach((button)=>{
        button.addEventListener("click", ()=>{
            application.changePageById(button.getAttribute("ref"));
        });
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2fCYH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "homePage", ()=>homePage);
var _logicRoomArray = require("../logicRoomArray");
var _logicRoomArrayDefault = parcelHelpers.interopDefault(_logicRoomArray);
var _logic = require("./logic");
var _logicDefault = parcelHelpers.interopDefault(_logic);
function replaceLastOccurrence(inputString, search, replace) {
    const lastIndex = inputString.lastIndexOf(search);
    if (lastIndex === -1) return inputString;
    const beforeLastOccurrence = inputString.substring(0, lastIndex);
    const afterLastOccurrence = inputString.substring(lastIndex + search.length);
    const newString = beforeLastOccurrence + replace + afterLastOccurrence;
    return newString;
}
homePageEmpty = `
    <h1 id="roomName">Logicbulbs</h1>

    <dotlottie-player src="../../static/animation_lnkzkhyu.lottie" background="transparent" speed="1" style="width: 300px; height: 200px" direction="1" mode="normal"></dotlottie-player>   
    <div id="rooms-container">

    </div>
`;
let homePageReady = homePageEmpty;
(0, _logicRoomArrayDefault.default).forEach((room)=>{
    homePageReady = replaceLastOccurrence(homePageReady, "</div>", `
        <anchor ref="${room.id}">
            <h2>${room.name}</h2>
            <img src="${room.iconSrc}"/>
        </anchor>
    </div>
    `);
});
class HomePage {
    pageLogic;
    htmlCode;
    id;
    constructor(){
        this.pageLogic = (0, _logicDefault.default);
        this.htmlCode = homePageReady;
        this.id = "home";
    }
}
const homePage = new HomePage();
exports.default = homePage;

},{"../logicRoomArray":"dayyg","./logic":"aRNir","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aRNir":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _anchor = require("../../components/anchor");
var _anchorDefault = parcelHelpers.interopDefault(_anchor);
exports.default = addHomePageLogic = (application)=>{
    const player = document.querySelector("dotlottie-player");
    console.log(player);
    player.addEventListener("ready", ()=>{
        if (application.isBulbOn) player.seek("70%");
        else {
            player.play();
            setTimeout(()=>{
                player.stop();
                player.seek("70%");
            }, 1500);
        }
    });
    (0, _anchorDefault.default)(application);
};

},{"../../components/anchor":"Oeyp8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3smKr","bB7Pu"], "bB7Pu", "parcelRequire8861")

//# sourceMappingURL=index.3d214d75.js.map
