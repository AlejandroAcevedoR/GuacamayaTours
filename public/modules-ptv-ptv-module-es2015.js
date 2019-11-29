(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ptv-ptv-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ptv/ptv.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ptv/ptv.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>ptv works!</p>\r\n");

/***/ }),

/***/ "./src/app/modules/ptv/ptv-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/ptv/ptv-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PTVRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PTVRoutingModule", function() { return PTVRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ptv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ptv.component */ "./src/app/modules/ptv/ptv.component.ts");




const routes = [{ path: '', component: _ptv_component__WEBPACK_IMPORTED_MODULE_3__["PTVComponent"] }];
let PTVRoutingModule = class PTVRoutingModule {
};
PTVRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PTVRoutingModule);



/***/ }),

/***/ "./src/app/modules/ptv/ptv.component.scss":
/*!************************************************!*\
  !*** ./src/app/modules/ptv/ptv.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHR2L3B0di5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ptv/ptv.component.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/ptv/ptv.component.ts ***!
  \**********************************************/
/*! exports provided: PTVComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PTVComponent", function() { return PTVComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PTVComponent = class PTVComponent {
    constructor() { }
    ngOnInit() {
    }
};
PTVComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ptv',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ptv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ptv/ptv.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ptv.component.scss */ "./src/app/modules/ptv/ptv.component.scss")).default]
    })
], PTVComponent);



/***/ }),

/***/ "./src/app/modules/ptv/ptv.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/ptv/ptv.module.ts ***!
  \*******************************************/
/*! exports provided: PTVModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PTVModule", function() { return PTVModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ptv_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ptv-routing.module */ "./src/app/modules/ptv/ptv-routing.module.ts");
/* harmony import */ var _ptv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ptv.component */ "./src/app/modules/ptv/ptv.component.ts");





let PTVModule = class PTVModule {
};
PTVModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ptv_component__WEBPACK_IMPORTED_MODULE_4__["PTVComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ptv_routing_module__WEBPACK_IMPORTED_MODULE_3__["PTVRoutingModule"]
        ]
    })
], PTVModule);



/***/ })

}]);
//# sourceMappingURL=modules-ptv-ptv-module-es2015.js.map