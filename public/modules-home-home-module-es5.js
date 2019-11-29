(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hotel-temp/hotel-temp.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hotel-temp/hotel-temp.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n<ul class=\"hotels\">\r\n    <li *ngFor=\"let hotel of hotels\">\r\n        <a class=\"info\" routerLink=\"/main/Hoteles/detalle/{{hotel.id}}\">\r\n            <div class=\"name\">{{hotel.name | titlecase}}</div>\r\n            <div class=\"stars\">\r\n                    <div *ngFor=\"let star of stars; let i = index\">\r\n                        <span *ngIf=\"i < hotel.stars\">\r\n                            <i class=\"fas fa-star\"></i>\r\n                        </span>\r\n                            <span *ngIf=\"i >= hotel.stars\"><i class=\"far fa-star\"></i>\r\n                        </span>\r\n                    </div>\r\n                </div>            <div class=\"price\"><span>A partir de: </span>${{hotel.price}}</div>\r\n            <div class=\"pic\"><img src=\"{{hotel.picture}}\" alt=\"hotel\"></div>\r\n        </a>\r\n    </li>\r\n</ul>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slider/slider.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slider/slider.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"slider-box\">\r\n        <div class=\"slider2\">\r\n            <ul>\r\n                <li><a href=\"/main/Hoteles/lista\"><div class=\"info\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><div class=\"info\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><div class=\"info\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><div class=\"info\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><div class=\"info\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><div class=\"info\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><div class=\"info\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><div class=\"info\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><div class=\"info\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><div class=\"info\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></a></li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"slider3\">\r\n            <ul>\r\n                <li><a href=\"/main/Hoteles/lista\"><img src=\"../../../assets/pics/transparencia.png\" alt=\"\"></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><img src=\"../../../assets/pics/transparencia.png\" alt=\"\"></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><img src=\"../../../assets/pics/transparencia.png\" alt=\"\"></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><img src=\"../../../assets/pics/transparencia.png\" alt=\"\"></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><img src=\"../../../assets/pics/transparencia.png\" alt=\"\"></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><img src=\"../../../assets/pics/transparencia.png\" alt=\"\"></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><img src=\"../../../assets/pics/transparencia.png\" alt=\"\"></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><img src=\"../../../assets/pics/transparencia.png\" alt=\"\"></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><img src=\"../../../assets/pics/transparencia.png\" alt=\"\"></a></li>\r\n                <li><a href=\"/main/Hoteles/lista\"><img src=\"../../../assets/pics/transparencia.png\" alt=\"\"></a></li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"slider\">\r\n            <ul>\r\n                <li><img src=\"../../../assets/pics/sldr01.jpg\" alt=\"\"></li>\r\n                <li><img src=\"../../../assets/pics/sldr02.jpg\" alt=\"\"></li>\r\n                <li><img src=\"../../../assets/pics/sldr03.jpg\" alt=\"\"></li>\r\n                <li><img src=\"../../../assets/pics/sldr04.jpg\" alt=\"\"></li>\r\n                <li><img src=\"../../../assets/pics/sldr05.jpg\" alt=\"\"></li>\r\n                <li><img src=\"../../../assets/pics/sldr06.jpg\" alt=\"\"></li>\r\n                <li><img src=\"../../../assets/pics/sldr07.jpg\" alt=\"\"></li>\r\n                <li><img src=\"../../../assets/pics/sldr08.jpg\" alt=\"\"></li>\r\n                <li><img src=\"../../../assets/pics/sldr09.jpg\" alt=\"\"></li>\r\n                <li><img src=\"../../../assets/pics/sldr10.jpg\" alt=\"\"></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ver-ofertas/ver-ofertas.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ver-ofertas/ver-ofertas.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class = \"Ofertas\">\r\n\r\n       \r\n<div class = \"blanco\">\r\n\r\n    <ul class=\"hotels\">\r\n        <li *ngFor=\"let hotel of hotels\">\r\n            <a class=\"info\" routerLink=\"/main/Hoteles/detalle/{{hotel.id}}\">\r\n                <div class=\"name\">{{hotel.name | titlecase}}</div>\r\n                <div class=\"price\"><span>Precio: </span>${{hotel.price}}</div>\r\n                <div class=\"pic\"><img src=\"{{hotel.picture}}\" alt=\"hotel\"></div>\r\n                <div class=\"botonAmarillo\">Ver Oferta</div>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home\">\r\n   \r\n    <app-slider></app-slider>  \r\n    <app-ver-ofertas></app-ver-ofertas>\r\n    <app-hotel-temp></app-hotel-temp>  \r\n    \r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./src/app/components/hotel-temp/hotel-temp.component.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/hotel-temp/hotel-temp.component.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Josefin+Sans:600&display=swap\");\n.hotels {\n  list-style-type: none;\n  padding: 0;\n  width: 97%;\n  margin: auto;\n}\n.info {\n  text-decoration: none;\n  font-family: \"Josefin Sans\", sans-serif;\n  padding: 0;\n  font-weight: 600;\n  font-size: 2em;\n  color: #FFB300;\n  display: grid;\n  grid-template-areas: \"pic name name\" \"pic stars price\";\n  grid-template-rows: 50% 50%;\n  grid-template-columns: 25% auto auto;\n}\n.stars {\n  grid-area: stars;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.name {\n  grid-area: name;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.price {\n  grid-area: price;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pic {\n  grid-area: pic;\n  padding: 0;\n  margin: 0;\n}\n.pic img {\n  width: 300px;\n  height: 150px;\n  border-radius: 0 0 0 20px;\n}\n.hotels li {\n  cursor: pointer;\n  position: relative;\n  background-color: #07325a;\n  margin: 0.8em 0 0.8em 0;\n  padding: 0;\n  height: 150px;\n  border-radius: 0 20px 0 20px;\n}\n.hotels li:hover {\n  background-color: rgba(0, 136, 169, 0.8);\n  transition: all 0.3s ease 0s;\n}\n@media (max-width: 950px) {\n  .pic img {\n    width: 200px;\n  }\n}\n@media (max-width: 700px) {\n  .info {\n    grid-template-columns: 25% 40% 35%;\n  }\n\n  .stars {\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 600px) {\n  .price span {\n    display: none;\n  }\n\n  .info {\n    grid-template-columns: 35% 40% 25%;\n  }\n\n  .pic img {\n    width: 100%;\n  }\n}\n@media (max-width: 460px) {\n  .info {\n    grid-template-areas: \"pic name\" \"pic stars\" \"pic price\";\n    grid-template-rows: 33% 34% 33%;\n    grid-template-columns: 40% 60%;\n    font-size: 1.5em;\n  }\n\n  .stars {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob3RlbC10ZW1wL0M6XFxHdWFjYW1heWEtVG91cnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvdGVsLXRlbXBcXGhvdGVsLXRlbXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG90ZWwtdGVtcC9ob3RlbC10ZW1wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBR1I7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUU7RUFDRSxxQkFBQTtFQUNBLHVDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0RBQ0E7RUFFQSwyQkFBQTtFQUNBLG9DQUFBO0FDSEo7QURNRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNISjtBRE1FO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSEo7QURNRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE1FO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNISjtBRE1FO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUNISjtBRE1FO0VBQ0Usd0NBQUE7RUFDQSw0QkFBQTtBQ0hKO0FETUU7RUFDRTtJQUNFLFlBQUE7RUNISjtBQUNGO0FES0U7RUFDRTtJQUNBLGtDQUFBO0VDSEY7O0VES0U7SUFDRSx5QkFBQTtFQ0ZKO0FBQ0Y7QURJRTtFQUNFO0lBQ0UsYUFBQTtFQ0ZKOztFRElFO0lBQ0Usa0NBQUE7RUNESjs7RURHRTtJQUNFLFdBQUE7RUNBSjtBQUNGO0FERUU7RUFDRTtJQUNBLHVEQUNBO0lBR0EsK0JBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0VDSEY7O0VES0U7SUFDRSx1QkFBQTtFQ0ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvdGVsLXRlbXAvaG90ZWwtdGVtcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Sm9zZWZpbitTYW5zOjYwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG4uaG90ZWxzIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmluZm8ge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjRkZCMzAwO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAncGljIG5hbWUgbmFtZSdcclxuICAgICdwaWMgc3RhcnMgcHJpY2UnO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlOyBcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIGF1dG8gYXV0bzsgXHJcbiAgfVxyXG4gIFxyXG4gIC5zdGFycyB7XHJcbiAgICBncmlkLWFyZWE6IHN0YXJzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5uYW1le1xyXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wcmljZXtcclxuICAgIGdyaWQtYXJlYTogcHJpY2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnBpY3tcclxuICAgIGdyaWQtYXJlYTogcGljO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5waWMgaW1ne1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDIwcHggO1xyXG4gIH1cclxuXHJcbiAgLmhvdGVscyBsaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgNTAsIDkwKTtcclxuICAgIG1hcmdpbjogLjhlbSAwIC44ZW0gMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDAgMjBweCA7XHJcbiAgfVxyXG5cclxuICAuaG90ZWxzIGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTM2LDE2OSwwLjgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjk1MHB4KXtcclxuICAgIC5waWMgaW1ne1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KXtcclxuICAgIC5pbmZve1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNDAlIDM1JTsgXHJcbiAgICB9XHJcbiAgICAuc3RhcnMge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDo2MDBweCl7XHJcbiAgICAucHJpY2Ugc3BhbntcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5pbmZve1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1JSA0MCUgMjUlOyBcclxuICAgIH1cclxuICAgIC5waWMgaW1ne1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhKG1heC13aWR0aDogNDYwcHgpe1xyXG4gICAgLmluZm97XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgJ3BpYyBuYW1lJ1xyXG4gICAgJ3BpYyBzdGFycycgXHJcbiAgICAncGljIHByaWNlJztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzMlIDM0JSAzMyU7IFxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNjAlOyBcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9XHJcbiAgICAuc3RhcnMge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUpvc2VmaW4rU2Fuczo2MDAmZGlzcGxheT1zd2FwXCIpO1xuLmhvdGVscyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDk3JTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaW5mbyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogI0ZGQjMwMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJwaWMgbmFtZSBuYW1lXCIgXCJwaWMgc3RhcnMgcHJpY2VcIjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSBhdXRvIGF1dG87XG59XG5cbi5zdGFycyB7XG4gIGdyaWQtYXJlYTogc3RhcnM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmFtZSB7XG4gIGdyaWQtYXJlYTogbmFtZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcmljZSB7XG4gIGdyaWQtYXJlYTogcHJpY2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGljIHtcbiAgZ3JpZC1hcmVhOiBwaWM7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBpYyBpbWcge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDIwcHg7XG59XG5cbi5ob3RlbHMgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MzI1YTtcbiAgbWFyZ2luOiAwLjhlbSAwIDAuOGVtIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDIwcHg7XG59XG5cbi5ob3RlbHMgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEzNiwgMTY5LCAwLjgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgLnBpYyBpbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5pbmZvIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA0MCUgMzUlO1xuICB9XG5cbiAgLnN0YXJzIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnByaWNlIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuaW5mbyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNSUgNDAlIDI1JTtcbiAgfVxuXG4gIC5waWMgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gIC5pbmZvIHtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInBpYyBuYW1lXCIgXCJwaWMgc3RhcnNcIiBcInBpYyBwcmljZVwiO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzMlIDM0JSAzMyU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNjAlO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cblxuICAuc3RhcnMge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/hotel-temp/hotel-temp.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/hotel-temp/hotel-temp.component.ts ***!
          \***************************************************************/
        /*! exports provided: HotelTempComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelTempComponent", function () { return HotelTempComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hotel.service */ "./src/app/services/hotel.service.ts");
            var HotelTempComponent = /** @class */ (function () {
                function HotelTempComponent(hotelService) {
                    this.hotelService = hotelService;
                    this.stars = [1, 2, 3, 4, 5];
                }
                HotelTempComponent.prototype.getHotels = function () {
                    var _this = this;
                    this.hotelService.getHotels().subscribe(function (hotels) { return _this.hotels = hotels; });
                };
                HotelTempComponent.prototype.ngOnInit = function () {
                    this.getHotels();
                };
                return HotelTempComponent;
            }());
            HotelTempComponent.ctorParameters = function () { return [
                { type: _services_hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"] }
            ]; };
            HotelTempComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-hotel-temp',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hotel-temp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hotel-temp/hotel-temp.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hotel-temp.component.scss */ "./src/app/components/hotel-temp/hotel-temp.component.scss")).default]
                })
            ], HotelTempComponent);
            /***/ 
        }),
        /***/ "./src/app/components/slider/slider.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/components/slider/slider.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Josefin+Sans:600&display=swap\");\n.slider-box {\n  background-color: #07325a;\n  padding: 20px 0 20px 0;\n  margin: 15px;\n  border-radius: 20px;\n  display: grid;\n  grid-template-areas: \"slider\";\n}\na {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  text-decoration: none;\n}\n.slider {\n  grid-area: slider;\n  width: 100%;\n  margin: auto;\n  overflow: hidden;\n  background-color: none;\n}\n.slider2 {\n  grid-area: slider;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  overflow: hidden;\n  background-color: none;\n}\n.slider3 {\n  grid-area: slider;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  overflow: hidden;\n  background-color: none;\n}\n.slider ul, .slider2 ul, .slider3 ul {\n  display: flex;\n  padding: 0;\n  width: 1000%;\n  -webkit-animation: cambio 40s infinite alternate;\n          animation: cambio 40s infinite alternate;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  margin: 0px;\n}\n.slider li, .slider3 li {\n  list-style: none;\n  width: 100%;\n}\n.slider2 li {\n  list-style: none;\n  padding: 5px;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n}\n.slider img, .slider3 img {\n  width: 100%;\n  height: 100%;\n}\n.info {\n  text-align: center;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 600;\n  font-size: 25px;\n  color: #FFB300;\n}\n@-webkit-keyframes cambio {\n  0% {\n    margin-left: 0;\n  }\n  5% {\n    margin-left: 0;\n  }\n  10% {\n    margin-left: -100%;\n  }\n  15% {\n    margin-left: -100%;\n  }\n  20% {\n    margin-left: -200%;\n  }\n  25% {\n    margin-left: -200%;\n  }\n  30% {\n    margin-left: -300%;\n  }\n  35% {\n    margin-left: -300%;\n  }\n  40% {\n    margin-left: -400%;\n  }\n  45% {\n    margin-left: -400%;\n  }\n  50% {\n    margin-left: -500%;\n  }\n  55% {\n    margin-left: -500%;\n  }\n  60% {\n    margin-left: -600%;\n  }\n  65% {\n    margin-left: -600%;\n  }\n  70% {\n    margin-left: -700%;\n  }\n  75% {\n    margin-left: -700%;\n  }\n  80% {\n    margin-left: -800%;\n  }\n  85% {\n    margin-left: -800%;\n  }\n  90% {\n    margin-left: -900%;\n  }\n  100% {\n    margin-left: -900%;\n  }\n}\n@keyframes cambio {\n  0% {\n    margin-left: 0;\n  }\n  5% {\n    margin-left: 0;\n  }\n  10% {\n    margin-left: -100%;\n  }\n  15% {\n    margin-left: -100%;\n  }\n  20% {\n    margin-left: -200%;\n  }\n  25% {\n    margin-left: -200%;\n  }\n  30% {\n    margin-left: -300%;\n  }\n  35% {\n    margin-left: -300%;\n  }\n  40% {\n    margin-left: -400%;\n  }\n  45% {\n    margin-left: -400%;\n  }\n  50% {\n    margin-left: -500%;\n  }\n  55% {\n    margin-left: -500%;\n  }\n  60% {\n    margin-left: -600%;\n  }\n  65% {\n    margin-left: -600%;\n  }\n  70% {\n    margin-left: -700%;\n  }\n  75% {\n    margin-left: -700%;\n  }\n  80% {\n    margin-left: -800%;\n  }\n  85% {\n    margin-left: -800%;\n  }\n  90% {\n    margin-left: -900%;\n  }\n  100% {\n    margin-left: -900%;\n  }\n}\n@media (min-width: 1000px) {\n  .slider-box {\n    min-height: 460px;\n  }\n\n  a {\n    min-height: 460px;\n  }\n\n  .slider {\n    min-height: 460px;\n  }\n\n  .slider2 {\n    min-height: 460px;\n  }\n\n  .slider3 {\n    min-height: 460px;\n  }\n\n  .slider img, .slider3 img {\n    min-height: 460px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvQzpcXEd1YWNhbWF5YS1Ub3Vycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2xpZGVyXFxzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvRkFBQTtBQUVSO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFDQTtBQ0RKO0FESUE7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0ZKO0FES0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0ZKO0FES0E7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDRko7QURLQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNGSjtBREtBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxXQUFBO0FDRko7QURLQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FES0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUNGSjtBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGSjtBREtBO0VBQ0ksa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGSjtBREtBO0VBQ0k7SUFBSyxjQUFBO0VDRFA7RURFRTtJQUFLLGNBQUE7RUNDUDtFREFFO0lBQU0sa0JBQUE7RUNHUjtFREZFO0lBQU0sa0JBQUE7RUNLUjtFREpFO0lBQU0sa0JBQUE7RUNPUjtFRE5FO0lBQU0sa0JBQUE7RUNTUjtFRFJFO0lBQU0sa0JBQUE7RUNXUjtFRFZFO0lBQU0sa0JBQUE7RUNhUjtFRFpFO0lBQU0sa0JBQUE7RUNlUjtFRGRFO0lBQU0sa0JBQUE7RUNpQlI7RURoQkU7SUFBTSxrQkFBQTtFQ21CUjtFRGxCRTtJQUFNLGtCQUFBO0VDcUJSO0VEcEJFO0lBQU0sa0JBQUE7RUN1QlI7RUR0QkU7SUFBTSxrQkFBQTtFQ3lCUjtFRHhCRTtJQUFNLGtCQUFBO0VDMkJSO0VEMUJFO0lBQU0sa0JBQUE7RUM2QlI7RUQ1QkU7SUFBTSxrQkFBQTtFQytCUjtFRDlCRTtJQUFNLGtCQUFBO0VDaUNSO0VEaENFO0lBQU0sa0JBQUE7RUNtQ1I7RURsQ0U7SUFBTyxrQkFBQTtFQ3FDVDtBQUNGO0FEMURBO0VBQ0k7SUFBSyxjQUFBO0VDRFA7RURFRTtJQUFLLGNBQUE7RUNDUDtFREFFO0lBQU0sa0JBQUE7RUNHUjtFREZFO0lBQU0sa0JBQUE7RUNLUjtFREpFO0lBQU0sa0JBQUE7RUNPUjtFRE5FO0lBQU0sa0JBQUE7RUNTUjtFRFJFO0lBQU0sa0JBQUE7RUNXUjtFRFZFO0lBQU0sa0JBQUE7RUNhUjtFRFpFO0lBQU0sa0JBQUE7RUNlUjtFRGRFO0lBQU0sa0JBQUE7RUNpQlI7RURoQkU7SUFBTSxrQkFBQTtFQ21CUjtFRGxCRTtJQUFNLGtCQUFBO0VDcUJSO0VEcEJFO0lBQU0sa0JBQUE7RUN1QlI7RUR0QkU7SUFBTSxrQkFBQTtFQ3lCUjtFRHhCRTtJQUFNLGtCQUFBO0VDMkJSO0VEMUJFO0lBQU0sa0JBQUE7RUM2QlI7RUQ1QkU7SUFBTSxrQkFBQTtFQytCUjtFRDlCRTtJQUFNLGtCQUFBO0VDaUNSO0VEaENFO0lBQU0sa0JBQUE7RUNtQ1I7RURsQ0U7SUFBTyxrQkFBQTtFQ3FDVDtBQUNGO0FEbkNBO0VBQ0k7SUFDSSxpQkFBQTtFQ3FDTjs7RURsQ0U7SUFDSSxpQkFBQTtFQ3FDTjs7RURsQ0U7SUFDSSxpQkFBQTtFQ3FDTjs7RURsQ0U7SUFDSSxpQkFBQTtFQ3FDTjs7RURsQ0U7SUFDSSxpQkFBQTtFQ3FDTjs7RURsQ0U7SUFDSSxpQkFBQTtFQ3FDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Kb3NlZmluK1NhbnM6NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLnNsaWRlci1ib3h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgNTAsIDkwKTtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnc2xpZGVyJztcclxufVxyXG5cclxuYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNsaWRlcntcclxuICAgIGdyaWQtYXJlYTogc2xpZGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG59XHJcblxyXG4uc2xpZGVyMntcclxuICAgIGdyaWQtYXJlYTogc2xpZGVyO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxufVxyXG5cclxuLnNsaWRlcjN7XHJcbiAgICBncmlkLWFyZWE6IHNsaWRlcjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47ICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbn1cclxuXHJcbi5zbGlkZXIgdWwsIC5zbGlkZXIyIHVsLCAuc2xpZGVyMyB1bHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMDAlO1xyXG4gICAgYW5pbWF0aW9uOiBjYW1iaW8gNDBzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7ICAgIFxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5zbGlkZXIgbGksIC5zbGlkZXIzIGxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2xpZGVyMiBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5zbGlkZXIgaW1nLCAuc2xpZGVyMyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmluZm97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICNGRkIzMDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2FtYmlvIHtcclxuICAgIDAlIHsgbWFyZ2luLWxlZnQ6IDA7fVxyXG4gICAgNSUgeyBtYXJnaW4tbGVmdDogMDt9XHJcbiAgICAxMCUgeyBtYXJnaW4tbGVmdDogLTEwMCU7fVxyXG4gICAgMTUlIHsgbWFyZ2luLWxlZnQ6IC0xMDAlO31cclxuICAgIDIwJSB7IG1hcmdpbi1sZWZ0OiAtMjAwJTt9XHJcbiAgICAyNSUgeyBtYXJnaW4tbGVmdDogLTIwMCU7fSBcclxuICAgIDMwJSB7IG1hcmdpbi1sZWZ0OiAtMzAwJTt9XHJcbiAgICAzNSUgeyBtYXJnaW4tbGVmdDogLTMwMCU7fSBcclxuICAgIDQwJSB7IG1hcmdpbi1sZWZ0OiAtNDAwJTt9XHJcbiAgICA0NSUgeyBtYXJnaW4tbGVmdDogLTQwMCU7fVxyXG4gICAgNTAlIHsgbWFyZ2luLWxlZnQ6IC01MDAlO31cclxuICAgIDU1JSB7IG1hcmdpbi1sZWZ0OiAtNTAwJTt9XHJcbiAgICA2MCUgeyBtYXJnaW4tbGVmdDogLTYwMCU7fVxyXG4gICAgNjUlIHsgbWFyZ2luLWxlZnQ6IC02MDAlO30gICBcclxuICAgIDcwJSB7IG1hcmdpbi1sZWZ0OiAtNzAwJTt9XHJcbiAgICA3NSUgeyBtYXJnaW4tbGVmdDogLTcwMCU7fSAgIFxyXG4gICAgODAlIHsgbWFyZ2luLWxlZnQ6IC04MDAlO31cclxuICAgIDg1JSB7IG1hcmdpbi1sZWZ0OiAtODAwJTt9XHJcbiAgICA5MCUgeyBtYXJnaW4tbGVmdDogLTkwMCU7fVxyXG4gICAgMTAwJSB7IG1hcmdpbi1sZWZ0OiAtOTAwJTt9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6MTAwMHB4KXtcclxuICAgIC5zbGlkZXItYm94e1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ2MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhe1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ2MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2xpZGVye1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ2MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2xpZGVyMntcclxuICAgICAgICBtaW4taGVpZ2h0OiA0NjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNsaWRlcjN7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlciBpbWcsIC5zbGlkZXIzIGltZ3tcclxuICAgICAgICBtaW4taGVpZ2h0OiA0NjBweDtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUpvc2VmaW4rU2Fuczo2MDAmZGlzcGxheT1zd2FwXCIpO1xuLnNsaWRlci1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDczMjVhO1xuICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2xpZGVyXCI7XG59XG5cbmEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNsaWRlciB7XG4gIGdyaWQtYXJlYTogc2xpZGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xufVxuXG4uc2xpZGVyMiB7XG4gIGdyaWQtYXJlYTogc2xpZGVyO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5cbi5zbGlkZXIzIHtcbiAgZ3JpZC1hcmVhOiBzbGlkZXI7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbn1cblxuLnNsaWRlciB1bCwgLnNsaWRlcjIgdWwsIC5zbGlkZXIzIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMDAlO1xuICBhbmltYXRpb246IGNhbWJpbyA0MHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5zbGlkZXIgbGksIC5zbGlkZXIzIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbGlkZXIyIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5zbGlkZXIgaW1nLCAuc2xpZGVyMyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICNGRkIzMDA7XG59XG5cbkBrZXlmcmFtZXMgY2FtYmlvIHtcbiAgMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIDUlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAxMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgfVxuICAxNSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgfVxuICAyMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjAwJTtcbiAgfVxuICAyNSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjAwJTtcbiAgfVxuICAzMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMzAwJTtcbiAgfVxuICAzNSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMzAwJTtcbiAgfVxuICA0MCUge1xuICAgIG1hcmdpbi1sZWZ0OiAtNDAwJTtcbiAgfVxuICA0NSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtNDAwJTtcbiAgfVxuICA1MCUge1xuICAgIG1hcmdpbi1sZWZ0OiAtNTAwJTtcbiAgfVxuICA1NSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtNTAwJTtcbiAgfVxuICA2MCUge1xuICAgIG1hcmdpbi1sZWZ0OiAtNjAwJTtcbiAgfVxuICA2NSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtNjAwJTtcbiAgfVxuICA3MCUge1xuICAgIG1hcmdpbi1sZWZ0OiAtNzAwJTtcbiAgfVxuICA3NSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtNzAwJTtcbiAgfVxuICA4MCUge1xuICAgIG1hcmdpbi1sZWZ0OiAtODAwJTtcbiAgfVxuICA4NSUge1xuICAgIG1hcmdpbi1sZWZ0OiAtODAwJTtcbiAgfVxuICA5MCUge1xuICAgIG1hcmdpbi1sZWZ0OiAtOTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tbGVmdDogLTkwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNsaWRlci1ib3gge1xuICAgIG1pbi1oZWlnaHQ6IDQ2MHB4O1xuICB9XG5cbiAgYSB7XG4gICAgbWluLWhlaWdodDogNDYwcHg7XG4gIH1cblxuICAuc2xpZGVyIHtcbiAgICBtaW4taGVpZ2h0OiA0NjBweDtcbiAgfVxuXG4gIC5zbGlkZXIyIHtcbiAgICBtaW4taGVpZ2h0OiA0NjBweDtcbiAgfVxuXG4gIC5zbGlkZXIzIHtcbiAgICBtaW4taGVpZ2h0OiA0NjBweDtcbiAgfVxuXG4gIC5zbGlkZXIgaW1nLCAuc2xpZGVyMyBpbWcge1xuICAgIG1pbi1oZWlnaHQ6IDQ2MHB4O1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/slider/slider.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/slider/slider.component.ts ***!
          \*******************************************************/
        /*! exports provided: SliderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function () { return SliderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SliderComponent = /** @class */ (function () {
                function SliderComponent() {
                }
                SliderComponent.prototype.ngOnInit = function () {
                };
                return SliderComponent;
            }());
            SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-slider',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slider/slider.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slider.component.scss */ "./src/app/components/slider/slider.component.scss")).default]
                })
            ], SliderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/ver-ofertas/ver-ofertas.component.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/ver-ofertas/ver-ofertas.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".Ofertas {\n  background-color: #07325a;\n  padding: 20px 0 20px 0;\n  border-radius: 20px;\n  margin: 15px;\n}\n\n.blanco {\n  background-color: white;\n  padding: 8px 0 8px 0;\n}\n\n.botonAmarillo {\n  grid-area: botonAmarillo;\n  background-color: #FFB300;\n  color: black;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0 20px 0 20px;\n}\n\n.hotels {\n  margin: 0;\n  list-style-type: none;\n  padding: 0;\n  width: 98%;\n  margin: auto;\n}\n\n.info {\n  text-decoration: none;\n  font-family: \"Josefin Sans\", sans-serif;\n  padding: 0;\n  font-weight: 600;\n  font-size: 20px;\n  color: #FFB300;\n  display: grid;\n  grid-template-areas: \"pic name name\" \"pic price botonAmarillo\";\n  grid-template-rows: 50% 50%;\n  grid-template-columns: 25% auto auto;\n}\n\n.name {\n  grid-area: name;\n  display: flex;\n  margin: 0;\n  justify-content: center;\n  align-items: center;\n}\n\n.price {\n  grid-area: price;\n  display: flex;\n  margin: 0;\n  justify-content: center;\n  align-items: center;\n}\n\n.pic {\n  grid-area: pic;\n  padding: 0;\n  margin: 0;\n}\n\n.pic img {\n  width: 86px;\n  height: 65px;\n  border-radius: 0 0 0 20px;\n}\n\n.hotels li {\n  cursor: pointer;\n  position: relative;\n  background-color: #07325a;\n  margin: 0.5em;\n  padding: 0;\n  height: 65px;\n  border-radius: 0 20px 0 20px;\n}\n\n.hotels li:hover {\n  background-color: rgba(0, 136, 169, 0.8);\n  transition: all 0.3s ease 0s;\n}\n\n@media (max-width: 360px) {\n  .info {\n    grid-template-areas: \"pic name price\" \"pic  botonAmarillo botonAmarillo\";\n    grid-template-rows: 50% 50%;\n    grid-template-columns: auto auto auto;\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZXItb2ZlcnRhcy9DOlxcR3VhY2FtYXlhLVRvdXJzL3NyY1xcYXBwXFxjb21wb25lbnRzXFx2ZXItb2ZlcnRhc1xcdmVyLW9mZXJ0YXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdmVyLW9mZXJ0YXMvdmVyLW9mZXJ0YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDREE7O0FESUE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0FDREo7O0FESUc7RUFFQyx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FDRko7O0FETUE7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNISjs7QURPRTtFQUNFLHFCQUFBO0VBQ0EsdUNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4REFDQTtFQUVBLDJCQUFBO0VBQ0Esb0NBQUE7QUNOSjs7QURTRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEU0U7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNOSjs7QURTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNOSjs7QURTRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNOSjs7QURTRTtFQUNFLHdDQUFBO0VBQ0EsNEJBQUE7QUNOSjs7QURTRTtFQUNFO0lBQ0Esd0VBQ0E7SUFFQSwyQkFBQTtJQUNBLHFDQUFBO0lBQ0EsZUFBQTtFQ1JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Zlci1vZmVydGFzL3Zlci1vZmVydGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9WYW1vcyBhIGFjb21vZGFyIGPDs21vIHNlIHZlIGVsIGN1YWRybyBkZSBsYXMgb2ZlcnRhcy5cclxuLk9mZXJ0YXN7XHJcblxyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgNTAsIDkwKTtcclxucGFkZGluZzogMjBweCAwIDIwcHggMDtcclxuYm9yZGVyLXJhZGl1czogMjBweDtcclxubWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG4uYmxhbmNve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogOHB4IDAgOHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAuYm90b25BbWFyaWxsb3tcclxuXHJcbiAgICBncmlkLWFyZWE6IGJvdG9uQW1hcmlsbG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMzAwO1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDIwcHggMCAyMHB4O1xyXG4gICB9XHJcblxyXG5cclxuLmhvdGVscyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgfVxyXG5cclxuICAuaW5mbyB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjRkZCMzAwO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAncGljIG5hbWUgbmFtZSdcclxuICAgICdwaWMgcHJpY2UgYm90b25BbWFyaWxsbyc7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7IFxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgYXV0byBhdXRvOyBcclxuICB9XHJcblxyXG4gIC5uYW1le1xyXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wcmljZXtcclxuICAgIGdyaWQtYXJlYTogcHJpY2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnBpY3tcclxuICAgIGdyaWQtYXJlYTogcGljO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5waWMgaW1ne1xyXG4gICAgd2lkdGg6IDg2cHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAyMHB4IDtcclxuICB9XHJcblxyXG4gIC5ob3RlbHMgbGkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDUwLCA5MCk7XHJcbiAgICBtYXJnaW46IC41ZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDAgMjBweCA7XHJcbiAgfVxyXG5cclxuICAuaG90ZWxzIGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTM2LDE2OSwwLjgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICB9XHJcblxyXG4gIEBtZWRpYShtYXgtd2lkdGg6MzYwcHgpe1xyXG4gICAgLmluZm97XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgJ3BpYyBuYW1lIHByaWNlJ1xyXG4gICAgJ3BpYyAgYm90b25BbWFyaWxsbyBib3RvbkFtYXJpbGxvJztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTsgXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvOyBcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG5cclxuLy9IYXN0YSBhcXXDrSBsbGVnYSBlbCBjw7NkaWdvIGRlIGNyZWFjacOzbiBkZSBvZmVydGFzLiIsIi5PZmVydGFzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MzI1YTtcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uYmxhbmNvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweCAwIDhweCAwO1xufVxuXG4uYm90b25BbWFyaWxsbyB7XG4gIGdyaWQtYXJlYTogYm90b25BbWFyaWxsbztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjMwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwIDIwcHggMCAyMHB4O1xufVxuXG4uaG90ZWxzIHtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmluZm8ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjRkZCMzAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInBpYyBuYW1lIG5hbWVcIiBcInBpYyBwcmljZSBib3RvbkFtYXJpbGxvXCI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgYXV0byBhdXRvO1xufVxuXG4ubmFtZSB7XG4gIGdyaWQtYXJlYTogbmFtZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByaWNlIHtcbiAgZ3JpZC1hcmVhOiBwcmljZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBpYyB7XG4gIGdyaWQtYXJlYTogcGljO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5waWMgaW1nIHtcbiAgd2lkdGg6IDg2cHg7XG4gIGhlaWdodDogNjVweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgMjBweDtcbn1cblxuLmhvdGVscyBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDczMjVhO1xuICBtYXJnaW46IDAuNWVtO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDIwcHg7XG59XG5cbi5ob3RlbHMgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEzNiwgMTY5LCAwLjgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmluZm8ge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicGljIG5hbWUgcHJpY2VcIiBcInBpYyAgYm90b25BbWFyaWxsbyBib3RvbkFtYXJpbGxvXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/ver-ofertas/ver-ofertas.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/ver-ofertas/ver-ofertas.component.ts ***!
          \*****************************************************************/
        /*! exports provided: VerOfertasComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerOfertasComponent", function () { return VerOfertasComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hotel.service */ "./src/app/services/hotel.service.ts");
            var VerOfertasComponent = /** @class */ (function () {
                function VerOfertasComponent(hotelService) {
                    this.hotelService = hotelService;
                }
                VerOfertasComponent.prototype.getHotels = function () {
                    var _this = this;
                    this.hotelService.getHotels().subscribe(function (hotels) { return _this.hotels = hotels; });
                };
                VerOfertasComponent.prototype.ngOnInit = function () {
                    this.getHotels();
                };
                return VerOfertasComponent;
            }());
            VerOfertasComponent.ctorParameters = function () { return [
                { type: _services_hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"] }
            ]; };
            VerOfertasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-ver-ofertas',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ver-ofertas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ver-ofertas/ver-ofertas.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ver-ofertas.component.scss */ "./src/app/components/ver-ofertas/ver-ofertas.component.scss")).default]
                })
            ], VerOfertasComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/home/home-routing.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/modules/home/home-routing.module.ts ***!
          \*****************************************************/
        /*! exports provided: HomeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () { return HomeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
            var routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }];
            var HomeRoutingModule = /** @class */ (function () {
                function HomeRoutingModule() {
                }
                return HomeRoutingModule;
            }());
            HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], HomeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/home/home.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/modules/home/home.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".home {\n  display: grid;\n  grid-template-columns: 33% 34% 33%;\n  grid-template-areas: \"slider slider of\" \"slider slider of\" \"list list list\";\n  row-gap: 10px;\n  margin: 0;\n}\n\napp-slider {\n  grid-area: slider;\n}\n\napp-hotel-temp {\n  grid-area: list;\n}\n\napp-ver-ofertas {\n  grid-area: of;\n}\n\n@media (max-width: 1000px) {\n  .home {\n    grid-template-columns: 100%;\n    grid-template-areas: \"slider\" \"of\" \"list\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL0M6XFxHdWFjYW1heWEtVG91cnMvc3JjXFxhcHBcXG1vZHVsZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkVBQ0E7RUFHQSxhQUFBO0VBQ0EsU0FBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7QUNGSjs7QURLQTtFQUNJO0lBQ0ksMkJBQUE7SUFDQSx5Q0FDQTtFQ0hOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21le1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDM0JSAzMyU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgJ3NsaWRlciBzbGlkZXIgb2YnXHJcbiAgICAnc2xpZGVyIHNsaWRlciBvZidcclxuICAgICdsaXN0IGxpc3QgbGlzdCc7XHJcbiAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5hcHAtc2xpZGVye1xyXG4gICAgZ3JpZC1hcmVhOiBzbGlkZXI7XHJcbn1cclxuXHJcbmFwcC1ob3RlbC10ZW1we1xyXG4gICAgZ3JpZC1hcmVhOiBsaXN0O1xyXG59XHJcblxyXG5hcHAtdmVyLW9mZXJ0YXN7XHJcbiAgICBncmlkLWFyZWE6IG9mO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEwMDBweCl7XHJcbiAgICAuaG9tZXtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAnc2xpZGVyJ1xyXG4gICAgICAgICdvZidcclxuICAgICAgICAnbGlzdCc7IFxyXG4gICAgfVxyXG59IiwiLmhvbWUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzNCUgMzMlO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInNsaWRlciBzbGlkZXIgb2ZcIiBcInNsaWRlciBzbGlkZXIgb2ZcIiBcImxpc3QgbGlzdCBsaXN0XCI7XG4gIHJvdy1nYXA6IDEwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuYXBwLXNsaWRlciB7XG4gIGdyaWQtYXJlYTogc2xpZGVyO1xufVxuXG5hcHAtaG90ZWwtdGVtcCB7XG4gIGdyaWQtYXJlYTogbGlzdDtcbn1cblxuYXBwLXZlci1vZmVydGFzIHtcbiAgZ3JpZC1hcmVhOiBvZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuaG9tZSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2xpZGVyXCIgXCJvZlwiIFwibGlzdFwiO1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/home/home.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/modules/home/home.component.ts ***!
          \************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/home/home.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/modules/home/home.module.ts ***!
          \*********************************************/
        /*! exports provided: HomeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function () { return HomeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
            /* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/slider/slider.component */ "./src/app/components/slider/slider.component.ts");
            /* harmony import */ var _components_hotel_temp_hotel_temp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hotel-temp/hotel-temp.component */ "./src/app/components/hotel-temp/hotel-temp.component.ts");
            /* harmony import */ var _components_ver_ofertas_ver_ofertas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ver-ofertas/ver-ofertas.component */ "./src/app/components/ver-ofertas/ver-ofertas.component.ts");
            var HomeModule = /** @class */ (function () {
                function HomeModule() {
                }
                return HomeModule;
            }());
            HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                        _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"],
                        _components_hotel_temp_hotel_temp_component__WEBPACK_IMPORTED_MODULE_6__["HotelTempComponent"],
                        _components_ver_ofertas_ver_ofertas_component__WEBPACK_IMPORTED_MODULE_7__["VerOfertasComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
                    ]
                })
            ], HomeModule);
            /***/ 
        }),
        /***/ "./src/app/services/hotel.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/hotel.service.ts ***!
          \*******************************************/
        /*! exports provided: HotelService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelService", function () { return HotelService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var HotelService = /** @class */ (function () {
                function HotelService(http) {
                    this.http = http;
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
                    };
                    this.hotelsUrl = 'api/hotels';
                    this.hotelOfertasUrl1 = 'api/hotelOfertas';
                }
                HotelService.prototype.getHotels = function () {
                    return this.http.get(this.hotelsUrl);
                };
                HotelService.prototype.getHotelOfertas = function () {
                    return this.http.get(this.hotelOfertasUrl1);
                };
                HotelService.prototype.getHotel = function (id) {
                    var url = this.hotelsUrl + "/" + id;
                    return this.http.get(url);
                };
                HotelService.prototype.updateHotel = function (hero) {
                    return this.http.put(this.hotelsUrl, hero, this.httpOptions);
                };
                HotelService.prototype.addHotel = function (hotel) {
                    return this.http.post(this.hotelsUrl, hotel, this.httpOptions);
                };
                HotelService.prototype.deleteHotel = function (hotel) {
                    var id = typeof hotel === 'number' ? hotel : hotel.id;
                    var url = this.hotelsUrl + "/" + id;
                    return this.http.delete(url, this.httpOptions);
                };
                return HotelService;
            }());
            HotelService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            HotelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], HotelService);
            /***/ 
        })
    }]);
//# sourceMappingURL=modules-home-home-module-es2015.js.map
//# sourceMappingURL=modules-home-home-module-es5.js.map
//# sourceMappingURL=modules-home-home-module-es5.js.map