(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-screen/game-screen.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-screen/game-screen.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"game-screen row\">\n  \n    <div class=\"map col-lg-8\">\n      <div>\n        <div [hidden]=\"!sessionActive\" id=\"map\">\n        </div>\n      </div>\n       \n      \n        <div  class=\"congrats\" *ngIf=\"!sessionActive\">\n            <span class=\"congratsTest\">Winning country is {{won}} 🥳</span>\n        </div>\n    </div>\n    <div class=\"right col-lg-4\">\n        <div class=\"leaderboard\">\n\n        </div>\n        <div *ngIf=\"sessionActive\" class=\"elements\">\n            <table class=\"table table-dark\">\n                <tr>\n                    <th>Country</th>\n                    <th>Points</th>\n                </tr>\n                <tr *ngFor=\"let item of scores\">\n                    <td>{{item.country}}</td>\n                    <td>{{item.score}}</td>\n                </tr>\n            </table>\n            <div class=\"timer\">\n                {{ this.timerText }}\n            </div>\n            <div class=\"info\">\n                <span>Ask others to join WorldMasters to increase your country's points</span>\n            </div>\n            <button class=\"btn btn-primary\" (click)=\"copyUrlClick()\">Copy game link</button>\n        </div>\n        <div *ngIf=\"!sessionActive\" class=\"elements\">\n            <div class=\"info\">\n                <span>Current game session was ended.</span>\n            </div>\n            <button class=\"btn btn-primary\" (click)=\"startAgain()\">Go to main menu!</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start-screen/start-screen.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start-screen/start-screen.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"starter-box\">\n    <img src=\"../../../assets/logo.png\"/>\n    <div *ngIf=\"requestingSession\" class=\"elements\">\n        <div class=\"info\">\n            <span>🤗 Please wait...</span>\n        </div>\n    </div>\n\n    <div *ngIf=\"!requestingSession\" class=\"elements\">\n        <div *ngIf=\"hasSession()\">\n            <div class=\"info\">\n                <span>💡 There is a running WorldMasters challenge right now.</span>\n            </div>\n            <button class=\"btn btn-primary\" (click)=\"joinGame()\">Join current game!</button>\n        </div>\n        <div *ngIf=\"!hasSession()\">\n            <div class=\"info\">\n                <span>💡 No WorldMasters challenge running right now.</span>\n            </div>\n            <button class=\"btn btn-primary\" (click)=\"joinGame()\">Start a new game!</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_start_screen_start_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/start-screen/start-screen.component */ "./src/app/components/start-screen/start-screen.component.ts");
/* harmony import */ var _components_game_screen_game_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/game-screen/game-screen.component */ "./src/app/components/game-screen/game-screen.component.ts");





const routes = [
    {
        path: '',
        component: _components_start_screen_start_screen_component__WEBPACK_IMPORTED_MODULE_3__["StartScreenComponent"]
    },
    {
        path: 'game',
        component: _components_game_screen_game_screen_component__WEBPACK_IMPORTED_MODULE_4__["GameScreenComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");




let AppComponent = class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.title = 'wm-client';
        Promise.all([d3__WEBPACK_IMPORTED_MODULE_3__["tsv"]('/assets/updatedPopulation.tsv')]).then(([data]) => {
            dataService.mapData = data;
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_start_screen_start_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/start-screen/start-screen.component */ "./src/app/components/start-screen/start-screen.component.ts");
/* harmony import */ var _components_game_screen_game_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/game-screen/game-screen.component */ "./src/app/components/game-screen/game-screen.component.ts");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");





const config = { url: location.origin.replace(/^http/, 'ws'), options: {} };







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_start_screen_start_screen_component__WEBPACK_IMPORTED_MODULE_7__["StartScreenComponent"],
            _components_game_screen_game_screen_component__WEBPACK_IMPORTED_MODULE_8__["GameScreenComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["SocketIoModule"].forRoot(config),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot()
        ],
        providers: [_service_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/game-screen/game-screen.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/components/game-screen/game-screen.component.less ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".game-screen .info {\n  color: #ffffff;\n  font-size: 16px;\n  padding: 20px 0px;\n}\n.game-screen .elements {\n  text-align: center;\n}\n.game-screen .timer {\n  font-size: 32px;\n  font-weight: bold;\n  color: #ffffff;\n}\n.game-screen .congrats {\n  padding-top: 40vh;\n  text-align: center;\n  color: #ffffff;\n  font-size: 48px;\n}\n.game-screen .right {\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWxpdGhhc3VyYW5nYS9EZXNrdG9wL25rbzIwMTktY29kZW1hc3RlcnMvd20tY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9nYW1lLXNjcmVlbi9nYW1lLXNjcmVlbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLXNjcmVlbi9nYW1lLXNjcmVlbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNEUjtBREhBO0VBUVEsa0JBQUE7QUNGUjtBRE5BO0VBWVEsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0hSO0FEWEE7RUFrQlEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSlI7QURqQkE7RUF5QlEsYUFBQTtFQUNBLG9DQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtc2NyZWVuL2dhbWUtc2NyZWVuLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZ2FtZS1zY3JlZW4ge1xuICAgIC5pbmZvIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5lbGVtZW50cyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudGltZXIge1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG5cbiAgICAuY29uZ3JhdHMge1xuICAgICAgICBwYWRkaW5nLXRvcDogNDB2aDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4OyBcbiAgICB9XG5cbiAgICAucmlnaHQge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgfVxufVxuXG5cblxuIiwiLmdhbWUtc2NyZWVuIC5pbmZvIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMjBweCAwcHg7XG59XG4uZ2FtZS1zY3JlZW4gLmVsZW1lbnRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdhbWUtc2NyZWVuIC50aW1lciB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmdhbWUtc2NyZWVuIC5jb25ncmF0cyB7XG4gIHBhZGRpbmctdG9wOiA0MHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDQ4cHg7XG59XG4uZ2FtZS1zY3JlZW4gLnJpZ2h0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/game-screen/game-screen.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/game-screen/game-screen.component.ts ***!
  \*****************************************************************/
/*! exports provided: GameScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScreenComponent", function() { return GameScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var topojson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! topojson */ "./node_modules/topojson/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_tip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-tip */ "./node_modules/d3-tip/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




 // works




let GameScreenComponent = class GameScreenComponent {
    constructor(socket, router, dataService, toastr) {
        this.socket = socket;
        this.router = router;
        this.dataService = dataService;
        this.toastr = toastr;
        this.sessionActive = true;
        this.scores = [];
        this.timerText = "00:00";
        this.won = "";
        this.players = [];
    }
    ngOnInit() {
        // this.sessionActive = false;
        this.loadMap();
        this.socket.on('playerConnected', (player) => {
            this.playerConnected(player);
        });
        this.socket.on('receiveMapData', (mapData) => {
            this.receiveMapData(mapData);
        });
        this.socket.on('sessionEnded', (scores) => {
            this.sessionEnded(scores);
        });
        this.socket.on('timerTick', (timer) => {
            this.timerTick(timer);
        });
    }
    timerTick(timer) {
        if (timer.diff >= 0)
            this.timerText = (parseInt(timer.diff) / 60).toFixed(0).toString().padStart(2, '0') + ':' + (parseInt(timer.diff) % 60).toFixed(0).toString().padStart(2, '0');
    }
    loadMap() {
        var format = d3__WEBPACK_IMPORTED_MODULE_3__["format"](",");
        const d3tip = Object(d3_tip__WEBPACK_IMPORTED_MODULE_4__["default"])();
        // Set tooltips
        var tip = d3tip
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function (d) {
            return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" + "<strong>Users: </strong><span class='details'>" + format(d.population) + "</span>";
        });
        tip.direction(function (d) {
            if (d.properties.name === 'Antarctica')
                return 'n';
            // Americas
            if (d.properties.name === 'Greenland')
                return 's';
            if (d.properties.name === 'Canada')
                return 'e';
            if (d.properties.name === 'USA')
                return 'e';
            if (d.properties.name === 'Mexico')
                return 'e';
            // Europe
            if (d.properties.name === 'Iceland')
                return 's';
            if (d.properties.name === 'Norway')
                return 's';
            if (d.properties.name === 'Sweden')
                return 's';
            if (d.properties.name === 'Finland')
                return 's';
            if (d.properties.name === 'Russia')
                return 'w';
            // Asia
            if (d.properties.name === 'China')
                return 'w';
            if (d.properties.name === 'Japan')
                return 's';
            // Oceania
            if (d.properties.name === 'Indonesia')
                return 'w';
            if (d.properties.name === 'Papua New Guinea')
                return 'w';
            if (d.properties.name === 'Australia')
                return 'w';
            if (d.properties.name === 'New Zealand')
                return 'w';
            // otherwise if not specified
            return 'n';
        });
        tip.offset(function (d) {
            // [top, left]
            if (d.properties.name === 'Antarctica')
                return [0, 0];
            // Americas
            if (d.properties.name === 'Greenland')
                return [10, -10];
            if (d.properties.name === 'Canada')
                return [24, -28];
            if (d.properties.name === 'USA')
                return [-5, 8];
            if (d.properties.name === 'Mexico')
                return [12, 10];
            if (d.properties.name === 'Chile')
                return [0, -15];
            // Europe
            if (d.properties.name === 'Iceland')
                return [15, 0];
            if (d.properties.name === 'Norway')
                return [10, -28];
            if (d.properties.name === 'Sweden')
                return [10, -8];
            if (d.properties.name === 'Finland')
                return [10, 0];
            if (d.properties.name === 'France')
                return [-9, 66];
            if (d.properties.name === 'Italy')
                return [-8, -6];
            if (d.properties.name === 'Russia')
                return [5, 385];
            // Africa
            if (d.properties.name === 'Madagascar')
                return [-10, 10];
            // Asia
            if (d.properties.name === 'China')
                return [-16, -8];
            if (d.properties.name === 'Mongolia')
                return [-5, 0];
            if (d.properties.name === 'Pakistan')
                return [-10, 13];
            if (d.properties.name === 'India')
                return [-11, -18];
            if (d.properties.name === 'Nepal')
                return [-8, 1];
            if (d.properties.name === 'Myanmar')
                return [-12, 0];
            if (d.properties.name === 'Laos')
                return [-12, -8];
            if (d.properties.name === 'Vietnam')
                return [-12, -4];
            if (d.properties.name === 'Japan')
                return [5, 5];
            // Oceania
            if (d.properties.name === 'Indonesia')
                return [0, -5];
            if (d.properties.name === 'Papua New Guinea')
                return [-5, -10];
            if (d.properties.name === 'Australia')
                return [-15, 0];
            if (d.properties.name === 'New Zealand')
                return [-15, 0];
            // otherwise if not specified
            return [-10, 0];
        });
        var margin = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, width = 800 - margin.left - margin.right, height = 500 - margin.top - margin.bottom;
        var color = d3__WEBPACK_IMPORTED_MODULE_3__["scaleThreshold"]()
            .domain([0, 1, 10, 25, 50, 100, 300, 750, 1500])
            .range(["rgb(3,19,43)", "rgb(8,48,107)", "rgb(8,81,156)", "rgb(33,113,181)", "rgb(66,146,198)", "rgb(107,174,214)", "rgb(158,202,225)", "rgb(198,219,239)", "rgb(222,235,247)", "rgb(247,251,255)"]);
        var path = d3__WEBPACK_IMPORTED_MODULE_3__["geoPath"]();
        var svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"]("#map")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append('g')
            .attr('class', 'map');
        var projection = d3__WEBPACK_IMPORTED_MODULE_3__["geoMercator"]()
            .scale(130)
            .translate([width / 2, height / 1.5]);
        var path = d3__WEBPACK_IMPORTED_MODULE_3__["geoPath"]().projection(projection);
        svg.call(tip);
        Promise.all([
            d3__WEBPACK_IMPORTED_MODULE_3__["json"]("/assets/world_countries.json")
        ]).then(([data]) => {
            let population = this.dataService.mapData;
            console.log(population);
            // this.dataService.mapData = population;
            var populationById = {};
            population.forEach(function (d) {
                populationById[d.id] = +d.population;
            });
            data.features.forEach(function (d) {
                d.population = populationById[d.id];
            });
            svg.append("g")
                .attr("class", "countries")
                .selectAll("path")
                .data(data.features)
                .enter().append("path")
                .attr("d", path)
                .style("fill", function (d) {
                return color(populationById[d.id]);
            })
                .style('stroke', 'white')
                .style('stroke-width', 1.5)
                .style("opacity", 0.8)
                // tooltips
                .style("stroke", "white")
                .style('stroke-width', 0.3)
                .on('mouseover', function (d) {
                tip.show(d, this);
                d3__WEBPACK_IMPORTED_MODULE_3__["select"](this)
                    .style("opacity", 1)
                    .style("stroke", "white")
                    .style("stroke-width", 3);
            })
                .on('mouseout', function (d) {
                tip.hide(d, this);
                d3__WEBPACK_IMPORTED_MODULE_3__["select"](this)
                    .style("opacity", 0.8)
                    .style("stroke", "white")
                    .style("stroke-width", 0.3);
            });
            svg.append("path")
                .datum(topojson__WEBPACK_IMPORTED_MODULE_2__["mesh"](data.features, function (a, b) {
                return a.id !== b.id;
            }))
                // .datum(topojson.mesh(data.features, function(a, b) { return a !== b; }))
                .attr("class", "names")
                .attr("d", path);
            // do stuff
        }).catch(err => console.log('Error loading or parsing data.'));
    }
    playerConnected(player) {
        console.log("player", player);
        this.toastr.info(player.name + ' from ' + player.country + ' joined', '', {
            positionClass: 'toast-bottom-left'
        });
    }
    receiveMapData(mapDataItem) {
        // assuming data is as such -- mapDataItem = {"Sri Lanka": 1,"India":2 };
        // console.log('receive map data', mapDataItem);
        this.dataService.updateCount(mapDataItem);
        this.scores = Object.keys(mapDataItem).map(function (key) {
            return {
                country: key,
                score: mapDataItem[key]
            };
        }).sort((a, b) => (b.score - a.score)).slice(0, 5);
    }
    sessionEnded(scores) {
        this.sessionActive = false;
        this.won = scores[0].country;
    }
    startAgain() {
        this.router.navigate(['']);
    }
    copyUrlClick() {
        this.copyMessage('http://localhost:4200');
    }
    copyMessage(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.toastr.success('Copied to clipboard!', '', {
            positionClass: 'toast-bottom-left'
        });
    }
};
GameScreenComponent.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }
];
GameScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-screen/game-screen.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-screen.component.less */ "./src/app/components/game-screen/game-screen.component.less")).default]
    })
], GameScreenComponent);



/***/ }),

/***/ "./src/app/components/start-screen/start-screen.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/components/start-screen/start-screen.component.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".starter-box {\n  width: 400px;\n  height: 500px;\n  background-color: transparent;\n  top: 50%;\n  left: 50%;\n  margin-top: -250px;\n  margin-left: -200px;\n  position: fixed;\n}\n.starter-box img {\n  width: 400px;\n}\n.starter-box .info {\n  color: #ffffff;\n  font-size: 16px;\n  padding: 20px 0px;\n}\n.starter-box .elements {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYWxpdGhhc3VyYW5nYS9EZXNrdG9wL25rbzIwMTktY29kZW1hc3RlcnMvd20tY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zdGFydC1zY3JlZW4vc3RhcnQtc2NyZWVuLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3N0YXJ0LXNjcmVlbi9zdGFydC1zY3JlZW4uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEVEE7RUFXUSxZQUFBO0FDQ1I7QURaQTtFQWVRLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRGpCQTtFQXFCUSxrQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGFydC1zY3JlZW4vc3RhcnQtc2NyZWVuLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ0ZXItYm94IHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTI1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgIH1cblxuICAgIC5pbmZvIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgfVxuXG4gICAgLmVsZW1lbnRzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbiIsIi5zdGFydGVyLWJveCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi10b3A6IC0yNTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLnN0YXJ0ZXItYm94IGltZyB7XG4gIHdpZHRoOiA0MDBweDtcbn1cbi5zdGFydGVyLWJveCAuaW5mbyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuLnN0YXJ0ZXItYm94IC5lbGVtZW50cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/start-screen/start-screen.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/start-screen/start-screen.component.ts ***!
  \*******************************************************************/
/*! exports provided: StartScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartScreenComponent", function() { return StartScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let StartScreenComponent = class StartScreenComponent {
    constructor(socket, router, http) {
        this.socket = socket;
        this.router = router;
        this.http = http;
        this.sessionObj = {};
        this.requestingSession = true;
        this.country = 'Sri Lanka';
    }
    ngOnInit() {
        this.http.get('http://ip-api.com/json').subscribe((data) => {
            this.country = data.country;
        });
        this.socket.emit('getSession');
        this.socket.on('receiveSession', (session) => {
            this.receiveSession(session);
        });
    }
    hasSession() {
        return Object.keys(this.sessionObj).length > 0;
    }
    receiveSession(sessionObj) {
        this.sessionObj = sessionObj;
        this.requestingSession = false;
        console.log("from server", sessionObj);
    }
    joinGame() {
        let avatars = ['Anonymous Panda', 'Ginger Cat', 'White Fox', 'Anonymous Dolphin', 'Quick Fox', 'Anonymous Elephant'];
        let player = {
            name: avatars[Math.floor(Math.random() * 10000) % avatars.length],
            country: this.country
        };
        this.socket.emit('connectPlayer', player);
        this.router.navigate(['game']);
    }
};
StartScreenComponent.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
StartScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start-screen/start-screen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start-screen.component.less */ "./src/app/components/start-screen/start-screen.component.less")).default]
    })
], StartScreenComponent);



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataService = class DataService {
    constructor() {
    }
    updateCount(mapDataItem) {
        this.mapData.map((countryData) => {
            Object.keys(mapDataItem).map((data, i) => {
                if (data == countryData.name) {
                    countryData.population = Object.values(mapDataItem)[i];
                }
            });
        });
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shalithasuranga/Desktop/nko2019-codemasters/wm-client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map