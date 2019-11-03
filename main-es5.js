(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css?family=Cinzel|Libre+Baskerville|Merienda|ZCOOL+XiaoWei\" rel=\"stylesheet\">\n\n<div class=\"container-fluid\">\n  <div class=\"row topbar\">\n    <div class=\"col-md-2\">\n      <img src=\"https://image.flaticon.com/icons/svg/25/25231.svg\">\n    </div>\n\n    <div class=\"title col-md-4\">\n      <h1>GitHub Searcher</h1>\n      <h5><em>~ Find your coding partner ~</em></h5>\n    </div>\n    \n    <div class=\"col-md-6\">\n      <nav>\n        <ul>\n          <li><a routerLink = '/display' routerLinkActive = 'active'>Search For A User</a></li>\n          <hr>\n          <li><a routerLink = '/repo' routerLinkActive = 'active'>Search For A User's Repository</a></li>\n          <hr>\n        </ul>\n      </nav> \n    </div>   \n  </div>\n  <router-outlet></router-outlet> \n</div>\n\n");
            /***/
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html":
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css?family=Cinzel|Libre+Baskerville|Merienda|ZCOOL+XiaoWei\" rel=\"stylesheet\">\n\n<div class=\"container-fluid\">\n  <div class=\"\">\n      <h2>Githubconnect</h2>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form class=\"form-group\">\n        <input class = \"form-control\" placeholder=\"Enter Username\" [(ngModel)] = \"userName\" name = \"userName\" (keyup) = userLookup()>\n        <button type=\"reset\" class=\"btn btn-info\">Clear</button>\n      </form>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <img [src]=\"user.avatar\">\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"output card\">\n          <h3 appHighlight><strong>{{user.username}}</strong></h3>\n          <h6><strong>User Bio: </strong> <em>{{user.bio}}</em></h6>\n          <h6><strong>User Name: </strong> <em>{{user.name}}</em></h6>\n          <h6><strong>Repositories: </strong> <em>{{user.repositories}}</em></h6>\n          <h6><strong>Followers: </strong> <em>{{user.followers}}</em></h6>\n          <h6><strong>Following: </strong> <em>{{user.following}}</em></h6>\n          <button class=\"btn btn-warning\"><a [href]=\"user.link\">Visit GitHub Page</a></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/repository/repository.component.html":
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/repository/repository.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css?family=Cinzel|Libre+Baskerville|Merienda|ZCOOL+XiaoWei\" rel=\"stylesheet\">\n\n<div class=\"container\">\n  <div class=\"\">\n      <h2>Repository Searcher!</h2>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form class=\"form-group\">\n        <input class = \"form-control\" placeholder=\"Enter Username\" [(ngModel)] = \"userName\" name = \"userName\" (keyup) = repoLookup()>\n        <input class = \"form-control\" placeholder=\"Enter Repository Name\" [(ngModel)] = \"repoName\" name = \"repoName\" (keyup) = repoRequest()>\n        <button type=\"reset\" class=\"btn btn-info\">Clear</button>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"row\">\n      <div class=\"output card col-md-5\">\n        <h2>Searched Repository</h2>\n        <h3 appHighlight><strong>{{repo.name}}</strong></h3>\n        <h6><strong>Description: </strong> <em>{{repo.description}}</em></h6>\n        <h6><strong>Forks: </strong> <em>{{repo.forks}}</em></h6>\n        <em>{{repo.forks|forks}}</em>\n        <h6><strong>License: </strong> <em>{{repo.license}}</em></h6>\n        <button class=\"btn btn-warning\"><a [href]=\"repo.link\">Visit Repository Github Page</a></button>\n      </div>\n\n      <div class=\"output card col-md-7\">\n        <h2>All User Repositories</h2>\n          <div *ngFor=\"let rep of repos.reposArray\">\n              <div class=\"item\">\n                <h3 appHighlight><strong>{{rep.name}}</strong></h3>\n                <h6  *ngIf><strong>Description: </strong><em>{{rep.description}}</em></h6>\n                <h6><strong>Language(s): </strong> <em>{{rep.language}}</em></h6>\n                <h6><strong>License: </strong> <em>{{rep.license}}</em></h6>\n                <button type=\"button\" class=\"btn btn-warning\"><a href=\"{{rep.html_url}}\" target=\"_blank\">View on GitHub</a></button>\n              </div>\n            </div>\n      </div>\n    </div>\n</div>\n");
            /***/
        }),
        /***/ "./node_modules/tslib/tslib.es6.js":
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/
        }),
        /***/ "./src/$$_lazy_route_resource lazy recursive":
        /*!**********************************************************!*\
          !*** ./src/$$_lazy_route_resource lazy namespace object ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
            /***/
        }),
        /***/ "./src/app/app.component.css":
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("  nav>ul>li{\n    display: inline-block;\n    margin-right: 5%;\n  }\n  \n  nav>ul>li>a{\n    font-family: 'Merienda', cursive;\n    font-weight: bold;\n    text-decoration: none;\n  }\n  \n  nav>ul>li>a:hover{\n    color: black;\n    text-decoration: underline;\n  }\n  \n  img{\n      width: 50%;\n  }\n  \n  .topbar{\n      padding-top: 2%;\n      padding-bottom: 1%;\n      text-align: center;\n      background-color: #17a2b8;\n      margin: 1.5%;\n      border-radius: 0.25rem;\n      font-family: 'Cinzel', serif;\n  }\n  \n  a, .title h5{\n    color: white;\n  }\n  \n  .col-md-4{\n    margin-left: auto;\n    padding-left: auto;\n  }\n  \n  .col-md-2{\n    margin-right: auto;\n    padding-right: auto;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osMEJBQTBCO0VBQzVCOztFQUVBO01BQ0ksVUFBVTtFQUNkOztFQUVBO01BQ0ksZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsNEJBQTRCO0VBQ2hDOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgbmF2PnVsPmxpe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICB9XG4gIFxuICBuYXY+dWw+bGk+YXtcbiAgICBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIG5hdj51bD5saT5hOmhvdmVye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gIGltZ3tcbiAgICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAudG9wYmFye1xuICAgICAgcGFkZGluZy10b3A6IDIlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDElO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcbiAgICAgIG1hcmdpbjogMS41JTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICBmb250LWZhbWlseTogJ0NpbnplbCcsIHNlcmlmO1xuICB9XG5cbiAgYSwgLnRpdGxlIGg1e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5jb2wtbWQtNHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IGF1dG87XG4gIH1cblxuICAuY29sLW1kLTJ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IGF1dG87XG4gIH1cbiAgIl19 */");
            /***/
        }),
        /***/ "./src/app/app.component.ts":
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user_http_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-http/user.service */ "./src/app/user-http/user.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    providers: [_user_http_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/
        }),
        /***/ "./src/app/app.module.ts":
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm2015/ngx-progressbar-core.js");
            /* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm2015/ngx-progressbar-http.js");
            /* harmony import */ var _user_http_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-http/user.service */ "./src/app/user-http/user.service.ts");
            /* harmony import */ var _repos_http_repos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./repos-http/repos.service */ "./src/app/repos-http/repos.service.ts");
            /* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
            /* harmony import */ var _repository_repository_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./repository/repository.component */ "./src/app/repository/repository.component.ts");
            /* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./date-count.pipe */ "./src/app/date-count.pipe.ts");
            /* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
            /* harmony import */ var _forks_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forks.pipe */ "./src/app/forks.pipe.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                        _display_display_component__WEBPACK_IMPORTED_MODULE_11__["DisplayComponent"],
                        _repository_repository_component__WEBPACK_IMPORTED_MODULE_12__["RepositoryComponent"],
                        _date_count_pipe__WEBPACK_IMPORTED_MODULE_13__["DateCountPipe"],
                        _highlight_directive__WEBPACK_IMPORTED_MODULE_14__["HighlightDirective"],
                        _forks_pipe__WEBPACK_IMPORTED_MODULE_15__["ForksPipe"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _routing_routing_module__WEBPACK_IMPORTED_MODULE_9__["RoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"],
                        _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__["NgProgressHttpModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                    ],
                    providers: [_user_http_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _repos_http_repos_service__WEBPACK_IMPORTED_MODULE_8__["ReposService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
                })
            ], AppModule);
            /***/
        }),
        /***/ "./src/app/date-count.pipe.ts":
        /*!************************************!*\
          !*** ./src/app/date-count.pipe.ts ***!
          \************************************/
        /*! exports provided: DateCountPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function () { return DateCountPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DateCountPipe = /** @class */ (function () {
                function DateCountPipe() {
                }
                DateCountPipe.prototype.transform = function (value) {
                    var today = new Date();
                    var difference = Math.abs(today - value);
                    var secondsPerDay = 86400;
                    var dateDifferenceSeconds = difference * 0.001;
                    var dateCount = Math.round(dateDifferenceSeconds / secondsPerDay);
                    if (dateCount >= 1) {
                        return dateCount - 1;
                    }
                    else {
                        return 0;
                    }
                };
                return DateCountPipe;
            }());
            DateCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'dateCount'
                })
            ], DateCountPipe);
            /***/
        }),
        /***/ "./src/app/display/display.component.css":
        /*!***********************************************!*\
          !*** ./src/app/display/display.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("*{\n    text-align: center;\n}\n\nh2{\n    color: #ffc107;\n    font-family: 'ZCOOL XiaoWei', serif;\n}\n\ninput{\n    width: 100%;\n    margin-top: 1%;\n    margin-bottom: 1%;\n    font-family: 'Libre Baskerville', serif;\n}\n\nimg{\n    width: 50%;\n    margin: 5%;\n    margin-top: auto;\n    border-radius: 5%;\n}\n\nbutton, button a, h3{\n    font-family: 'ZCOOL XiaoWei', serif;\n    color: white;\n}\n\nh3{\n    padding: 1.5%;\n}\n\n.output{\n    padding: 5%;\n    width: 100%;\n    float: right;\n    box-shadow: 5px 5px 5px grey;\n    font-family: 'Merienda', cursive;\n}\n\n@media only screen and (min-width: 812px) {\n    img{\n        width: 100%;\n    }\n\n    .row{\n        display: flex;\n        justify-content: center;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDJ7XG4gICAgY29sb3I6ICNmZmMxMDc7XG4gICAgZm9udC1mYW1pbHk6ICdaQ09PTCBYaWFvV2VpJywgc2VyaWY7XG59XG5cbmlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcbn1cblxuaW1ne1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG5idXR0b24sIGJ1dHRvbiBhLCBoM3tcbiAgICBmb250LWZhbWlseTogJ1pDT09MIFhpYW9XZWknLCBzZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuaDN7XG4gICAgcGFkZGluZzogMS41JTtcbn1cblxuLm91dHB1dHtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggZ3JleTtcbiAgICBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MTJweCkge1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnJvd3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxufSJdfQ== */");
            /***/
        }),
        /***/ "./src/app/display/display.component.ts":
        /*!**********************************************!*\
          !*** ./src/app/display/display.component.ts ***!
          \**********************************************/
        /*! exports provided: DisplayComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function () { return DisplayComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _repos_http_repos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repos-http/repos.service */ "./src/app/repos-http/repos.service.ts");
            /* harmony import */ var _user_http_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-http/user.service */ "./src/app/user-http/user.service.ts");
            var DisplayComponent = /** @class */ (function () {
                function DisplayComponent(userRequestService) {
                    this.userRequestService = userRequestService;
                    this.userRequestService.userName = "fuaad001";
                    this.userRequestService.userRequest();
                    this.user = this.userRequestService.user;
                }
                DisplayComponent.prototype.userLookup = function () {
                    this.userRequestService.userLookup(this.userName);
                    this.userRequestService.userRequest();
                    this.user = this.userRequestService.user;
                };
                DisplayComponent.prototype.ngOnInit = function () {
                };
                return DisplayComponent;
            }());
            DisplayComponent.ctorParameters = function () { return [
                { type: _user_http_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-display',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html")).default,
                    providers: [_repos_http_repos_service__WEBPACK_IMPORTED_MODULE_2__["ReposService"], _user_http_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display.component.css */ "./src/app/display/display.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_http_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
            ], DisplayComponent);
            /***/
        }),
        /***/ "./src/app/forks.pipe.ts":
        /*!*******************************!*\
          !*** ./src/app/forks.pipe.ts ***!
          \*******************************/
        /*! exports provided: ForksPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForksPipe", function () { return ForksPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ForksPipe = /** @class */ (function () {
                function ForksPipe() {
                }
                ForksPipe.prototype.transform = function (value, args) {
                    if (value < 5) {
                        return value + "forks may mean that the User is a junior developer";
                    }
                    else {
                        return value + "forks may mean that the  User is an experienced developer";
                    }
                };
                return ForksPipe;
            }());
            ForksPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'forks'
                })
            ], ForksPipe);
            /***/
        }),
        /***/ "./src/app/highlight.directive.ts":
        /*!****************************************!*\
          !*** ./src/app/highlight.directive.ts ***!
          \****************************************/
        /*! exports provided: HighlightDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function () { return HighlightDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user_class_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-class/user */ "./src/app/user-class/user.ts");
            var HighlightDirective = /** @class */ (function () {
                function HighlightDirective(elem) {
                    this.elem = elem;
                    this.elem.nativeElement.style.backgroundColor = '#17a2b8';
                }
                return HighlightDirective;
            }());
            HighlightDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _user_class_user__WEBPACK_IMPORTED_MODULE_2__["User"])
            ], HighlightDirective.prototype, "user", void 0);
            HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[appHighlight]'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
            ], HighlightDirective);
            /***/
        }),
        /***/ "./src/app/repos-http/repos.service.ts":
        /*!*********************************************!*\
          !*** ./src/app/repos-http/repos.service.ts ***!
          \*********************************************/
        /*! exports provided: ReposService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReposService", function () { return ReposService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _repos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../repos */ "./src/app/repos.ts");
            var ReposService = /** @class */ (function () {
                function ReposService(http) {
                    this.http = http;
                    this.repos = new _repos__WEBPACK_IMPORTED_MODULE_4__["Repos"]("");
                }
                ReposService.prototype.getRepoData = function () {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        _this.http.get('https://api.github.com/users/' + _this.userName + '/repos?access_token=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].access_token).toPromise().then(function (response) {
                            _this.repos.reposArray = response;
                            resolve();
                        }, function (error) {
                            _this.repos.reposArray = [];
                            reject(error);
                        });
                    });
                    return promise;
                };
                ReposService.prototype.repoLookup = function (userName) {
                    this.userName = userName;
                };
                return ReposService;
            }());
            ReposService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ReposService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
            ], ReposService);
            /***/
        }),
        /***/ "./src/app/repos.ts":
        /*!**************************!*\
          !*** ./src/app/repos.ts ***!
          \**************************/
        /*! exports provided: Repos */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repos", function () { return Repos; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Repos = /** @class */ (function () {
                function Repos(reposArray) {
                    this.reposArray = reposArray;
                }
                return Repos;
            }());
            /***/
        }),
        /***/ "./src/app/repository-class/repository.ts":
        /*!************************************************!*\
          !*** ./src/app/repository-class/repository.ts ***!
          \************************************************/
        /*! exports provided: Repository */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repository", function () { return Repository; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Repository = /** @class */ (function () {
                function Repository(link, name, description, forks, license) {
                    this.link = link;
                    this.name = name;
                    this.description = description;
                    this.forks = forks;
                    this.license = license;
                }
                return Repository;
            }());
            /***/
        }),
        /***/ "./src/app/repository/repository.component.css":
        /*!*****************************************************!*\
          !*** ./src/app/repository/repository.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("*{\n    text-align: center;\n}\n\nh2{\n    color: #ffc107;\n    font-family: 'ZCOOL XiaoWei', serif;\n}\n\ninput{\n    width: 100%;\n    margin-bottom: 1%;\n    margin-top: 1%;\n    font-family: 'Libre Baskerville', serif;\n}\n\n.output{\n    padding: 5%;\n    width: 100%;\n    float: right;\n    text-align: right;\n    box-shadow: 5px 5px 5px grey;\n    font-family: 'Merienda', cursive;\n}\n\nbutton, button a, h3{\n    color: white;\n    font-family: 'ZCOOL XiaoWei', serif;\n}\n\nh3{\n    padding: 1.5%;\n}\n\n.item{\n    margin-bottom: 5%;\n}\n\n@media only screen and (min-width: 812px) {\n    .row{\n        display: flex;\n        justify-content: center;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3NpdG9yeS9yZXBvc2l0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcmVwb3NpdG9yeS9yZXBvc2l0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDJ7XG4gICAgY29sb3I6ICNmZmMxMDc7XG4gICAgZm9udC1mYW1pbHk6ICdaQ09PTCBYaWFvV2VpJywgc2VyaWY7XG59XG5cbmlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcbn1cblxuLm91dHB1dHtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggZ3JleTtcbiAgICBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTtcbn1cblxuYnV0dG9uLCBidXR0b24gYSwgaDN7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnWkNPT0wgWGlhb1dlaScsIHNlcmlmO1xufVxuXG5oM3tcbiAgICBwYWRkaW5nOiAxLjUlO1xufVxuXG4uaXRlbXtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MTJweCkge1xuICAgIC5yb3d7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbn1cbiJdfQ== */");
            /***/
        }),
        /***/ "./src/app/repository/repository.component.ts":
        /*!****************************************************!*\
          !*** ./src/app/repository/repository.component.ts ***!
          \****************************************************/
        /*! exports provided: RepositoryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryComponent", function () { return RepositoryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _repository_class_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../repository-class/repository */ "./src/app/repository-class/repository.ts");
            /* harmony import */ var _repos_http_repos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../repos-http/repos.service */ "./src/app/repos-http/repos.service.ts");
            var RepositoryComponent = /** @class */ (function () {
                function RepositoryComponent(http, repoRequestService) {
                    this.http = http;
                    this.repoRequestService = repoRequestService;
                    this.repo = new _repository_class_repository__WEBPACK_IMPORTED_MODULE_4__["Repository"]("", "", "", "", "");
                }
                RepositoryComponent.prototype.repoRequest = function () {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        _this.http.get("https://api.github.com/repos/" + _this.userName + "/" + _this.repoName + "?access_token=" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].access_token).toPromise().then(function (response) {
                            _this.repo.link = response.html_url;
                            _this.repo.name = response.name;
                            _this.repo.description
                                = response.description;
                            _this.repo.forks = response.forks;
                            _this.repo.license = response.license;
                            resolve();
                        }, function (error) {
                            _this.repo.link = "";
                            _this.repo.name = "";
                            _this.repo.description
                                = "";
                            _this.repo.forks = "";
                            _this.repo.license = "";
                            reject(error);
                        });
                    });
                    return promise;
                };
                RepositoryComponent.prototype.repoLookup = function () {
                    this.repoRequestService.repoLookup(this.userName);
                    this.repoRequestService.getRepoData();
                    this.repos = this.repoRequestService.repos;
                };
                // getRepoData(){
                //   let promise =new Promise((resolve,reject)=>{
                //       this.http.get( 'https://api.github.com/users/' + this.userName +'/repos?access_token=' + environment.access_token).toPromise().then(response=>{
                //           this.repos.reposArray=response;
                //           resolve()
                //       },
                //       error=>{
                //               this.repos.reposArray=[];
                //               reject(error)
                //           }
                //       )
                //   })
                //   return promise
                // }
                RepositoryComponent.prototype.ngOnInit = function () {
                };
                return RepositoryComponent;
            }());
            RepositoryComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _repos_http_repos_service__WEBPACK_IMPORTED_MODULE_5__["ReposService"] }
            ]; };
            RepositoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-repository',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./repository.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/repository/repository.component.html")).default,
                    providers: [_repos_http_repos_service__WEBPACK_IMPORTED_MODULE_5__["ReposService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./repository.component.css */ "./src/app/repository/repository.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _repos_http_repos_service__WEBPACK_IMPORTED_MODULE_5__["ReposService"]])
            ], RepositoryComponent);
            /***/
        }),
        /***/ "./src/app/routing/routing.module.ts":
        /*!*******************************************!*\
          !*** ./src/app/routing/routing.module.ts ***!
          \*******************************************/
        /*! exports provided: RoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function () { return RoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../display/display.component */ "./src/app/display/display.component.ts");
            /* harmony import */ var _repository_repository_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../repository/repository.component */ "./src/app/repository/repository.component.ts");
            var routes = [
                { path: "display", component: _display_display_component__WEBPACK_IMPORTED_MODULE_4__["DisplayComponent"] },
                { path: "repo", component: _repository_repository_component__WEBPACK_IMPORTED_MODULE_5__["RepositoryComponent"] }
            ];
            var RoutingModule = /** @class */ (function () {
                function RoutingModule() {
                }
                return RoutingModule;
            }());
            RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
                    ],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
                })
            ], RoutingModule);
            /***/
        }),
        /***/ "./src/app/user-class/user.ts":
        /*!************************************!*\
          !*** ./src/app/user-class/user.ts ***!
          \************************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User(avatar, username, name, bio, repositories, followers, following, link, date) {
                    this.avatar = avatar;
                    this.username = username;
                    this.name = name;
                    this.bio = bio;
                    this.repositories = repositories;
                    this.followers = followers;
                    this.following = following;
                    this.link = link;
                    this.date = date;
                }
                return User;
            }());
            /***/
        }),
        /***/ "./src/app/user-http/user.service.ts":
        /*!*******************************************!*\
          !*** ./src/app/user-http/user.service.ts ***!
          \*******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _user_class_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-class/user */ "./src/app/user-class/user.ts");
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                    this.user = new _user_class_user__WEBPACK_IMPORTED_MODULE_4__["User"]("", "", "", "", "", "", "", "", new Date());
                }
                UserService.prototype.userRequest = function () {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _this.userName + "?access_token=" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].access_token).toPromise().then(function (response) {
                            _this.user.avatar = response.avatar_url;
                            _this.user.username = response.login;
                            _this.user.name = response.name;
                            _this.user.bio = response.bio;
                            _this.user.repositories = response.public_repos;
                            _this.user.followers = response.followers;
                            _this.user.following = response.following;
                            _this.user.link = response.html_url;
                            resolve();
                        }, function (error) {
                            _this.user.avatar = "https://avatars1.githubusercontent.com/u/47349274?v=4";
                            _this.user.username = "fuaad001";
                            _this.user.name = "Hussein Fuaad";
                            _this.user.bio = "Full-Stack Developer \r\nAndroid Developer\r\nCertified Chef\r\nRelationship Officer";
                            _this.user.repositories = 22;
                            _this.user.followers = 2;
                            _this.user.following = 0;
                            _this.user.link = "https://github.com/fuaad001";
                            reject(error);
                        });
                    });
                    return promise;
                };
                UserService.prototype.userLookup = function (userName) {
                    this.userName = userName;
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
            ], UserService);
            /***/
        }),
        /***/ "./src/environments/environment.ts":
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                apiUrl: "https://api.github.com/users/",
                access_token: "590681e7e1f38e16bda1807521c71620f3e8e55f"
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/
        }),
        /***/ "./src/main.ts":
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/
        }),
        /***/ 0:
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\tutoring\ahmed\angular\Githubconnect\src\main.ts */ "./src/main.ts");
            /***/
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map
