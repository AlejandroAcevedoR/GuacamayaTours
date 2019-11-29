(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-main-main-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\r\n    <div class=\"about\">\r\n        <div class=\"tittle1\"> Acerca de Nosotros </div>\r\n        <div class=\"text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem qui vero labore magnam, accusamus nisi voluptas id, culpa obcaecati possimus sit nesciunt ea. Aperiam velit, fuga consectetur deleniti cumque natus.</div>\r\n    </div>\r\n    <div class=\"contact\">\r\n        <div class=\"tittle\"> CONTACTOS </div>\r\n        <a class=\"g\" href=\"mailto: guacamayatours.mail@gmail.com\"><i class=\"fab fa-google\"></i></a>\r\n        <a class=\"ttr\" href=\"https://twitter.com/ToursGuacamaya\"><i class=\"fab fa-twitter\"></i></a>\r\n        <a class=\"f\" href=\"https://www.facebook.com/guacamaya.tours.50\"><i class=\"fab fa-facebook-f\"></i></a>\r\n        <a class=\"w\" href=\"#\"><i class=\"fab fa-whatsapp\"></i></a>\r\n        <a class=\"ig\" href=\"https://www.instagram.com/guacamayatoursig/\"><i class=\"fab fa-instagram\"></i></a>\r\n        <a class=\"tmblr\" href=\"https://guacamayatours.tumblr.com\"><i class=\"fab fa-tumblr\"></i></a>\r\n    </div>\r\n    <div class=\"bottom\"> Designed by DashCat | <a href=\"https://www.instagram.com/dashcatyt/\">@dashcatyt</a></div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n<div class=\"wrapper\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"header\" aria-expanded=\"false\">\r\n    <a href=\"/main/Home\" class=\"logo\"><img class=\"log\" src=\"../../../assets/pics/LOGO.png\" alt=\"Guacamaya Tours\"><img class=\"iso\" src=\"../../../assets/pics/isotipo.png\" alt=\"Guacamaya Tours\"></a>\r\n    <div class=\"menubtn\"><button class=\"mn\" aria-expanded=\"false\" (click)=\"night()\"><i class=\"fas fa-bars\"></i></button></div>\r\n    <div class=\"links\" aria-expanded=\"false\">\r\n        <a href=\"/main/Hoteles\"><div class=\"link hot\"><i class=\"fas fa-hotel\"></i> HOTELES</div></a>\r\n        <a href=\"/main/Destinos\"><div class=\"link des\"><i class=\"fas fa-map-marked-alt\"></i> DESTINOS</div></a>\r\n        <a href=\"/main/PlaneaTuViaje\"><div class=\"link pla\">¡PLANEA TU VIAJE!</div></a>\r\n        <a href=\"/main/Itinerario\"><div class=\"link iti\"><i class=\"fas fa-calendar-alt\"></i> ITINERARIO</div></a>\r\n    </div>\r\n    <div class=\"Nmode\"><button (click)=\"change()\"><i class=\"far fa-moon\"></i></button></div>\r\n</nav>\r\n");
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/components/footer/footer.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Merriweather:300&display=swap\");\n.footer {\n  position: relative;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1rem;\n  font-family: \"Merriweather\", serif;\n  font-weight: 300;\n  font-size: 18px;\n  color: #FFB300;\n  text-decoration: none;\n  background-color: #00293C;\n  text-align: center;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-areas: \"about contact\" \"bottom bottom\";\n  padding: 10px;\n  margin-top: 10px;\n  gap: 15px;\n}\n.contact a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\na:hover {\n  background-color: #00294e;\n  transition: all 0.5s ease 0s;\n}\n.about {\n  grid-area: about;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 20% 80%;\n  grid-template-areas: \"tittle1\" \"txt\";\n  padding: 5px;\n}\n.fab {\n  padding: 10px;\n  font-size: 30px;\n  width: 50px;\n  text-align: center;\n  text-decoration: none;\n  color: #FFB300;\n}\n.contact {\n  grid-area: contact;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-template-rows: 20% 40% 40%;\n  grid-template-areas: \"tittle tittle tittle\" \"g ttr f\" \"w ig tmblr\";\n  padding: 5px;\n}\n.g {\n  grid-area: g;\n}\n.ttr {\n  grid-area: ttr;\n}\n.f {\n  grid-area: f;\n}\n.w {\n  grid-area: w;\n}\n.ig {\n  grid-area: ig;\n}\n.tmblr {\n  grid-area: tmblr;\n}\n.tittle {\n  grid-area: tittle;\n}\n.tittle1 {\n  grid-area: tittle1;\n}\n.text {\n  grid-area: txt;\n}\n.bottom {\n  grid-area: bottom;\n  padding: 0 0 0px 0;\n  margin-top: 15px;\n  color: #FFB300;\n}\n.bottom a {\n  color: #FFB300;\n  text-decoration: none;\n}\n.bottom a:hover {\n  background-color: #00293C;\n}\n@media (max-width: 500px) {\n  .footer {\n    grid-template-areas: \"about\" \"contact\" \"bottom\";\n    grid-template-columns: auto;\n  }\n\n  .about {\n    grid-template-rows: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXEd1YWNhbWF5YS1Ub3Vycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvRkFBQTtBQUVSO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0RBQ0E7RUFFQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDRko7QURLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNGSjtBREtFO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0ZKO0FES0M7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQ0E7RUFFQSxZQUFBO0FDSkg7QURPQztFQUNDLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDSkY7QURPQztFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwrQkFBQTtFQUNBLGtFQUNBO0VBR0EsWUFBQTtBQ1BIO0FEVUM7RUFDRSxZQUFBO0FDUEg7QURVQztFQUNFLGNBQUE7QUNQSDtBRFVDO0VBQ0UsWUFBQTtBQ1BIO0FEVUM7RUFDRSxZQUFBO0FDUEg7QURVQztFQUNFLGFBQUE7QUNQSDtBRFVDO0VBQ0UsZ0JBQUE7QUNQSDtBRFVDO0VBQ0UsaUJBQUE7QUNQSDtBRFVDO0VBQ0Msa0JBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtBQ1BGO0FEV0M7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDUkY7QURXQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ1JGO0FEV0E7RUFDRSx5QkFBQTtBQ1JGO0FEV0E7RUFDRTtJQUNFLCtDQUNBO0lBR0EsMkJBQUE7RUNYRjs7RURhQTtJQUNFLHdCQUFBO0VDVkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWVycml3ZWF0aGVyOjMwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNGRkIzMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyOTNDO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgJ2Fib3V0IGNvbnRhY3QnXHJcbiAgICAnYm90dG9tIGJvdHRvbSc7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGdhcDogMTVweDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0IGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA0MSwgNzgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcclxuICB9XHJcblxyXG4gLmFib3V0e1xyXG4gICBncmlkLWFyZWE6IGFib3V0O1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBkaXNwbGF5OiBncmlkO1xyXG4gICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XHJcbiAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAndGl0dGxlMSdcclxuICAgJ3R4dCc7XHJcbiAgIHBhZGRpbmc6IDVweDtcclxuIH0gXHJcblxyXG4gLmZhYiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI0ZGQjMwMDtcclxufVxyXG5cclxuIC5jb250YWN0e1xyXG4gICBncmlkLWFyZWE6IGNvbnRhY3Q7XHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDQwJSA0MCU7XHJcbiAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAndGl0dGxlIHRpdHRsZSB0aXR0bGUnXHJcbiAgICdnIHR0ciBmJ1xyXG4gICAndyBpZyB0bWJscic7XHJcbiAgIHBhZGRpbmc6IDVweDtcclxuIH1cclxuXHJcbiAuZ3tcclxuICAgZ3JpZC1hcmVhOiBnO1xyXG4gfVxyXG5cclxuIC50dHJ7XHJcbiAgIGdyaWQtYXJlYTogdHRyO1xyXG4gfVxyXG5cclxuIC5me1xyXG4gICBncmlkLWFyZWE6IGY7XHJcbiB9XHJcblxyXG4gLnd7XHJcbiAgIGdyaWQtYXJlYTogdztcclxuIH1cclxuXHJcbiAuaWd7XHJcbiAgIGdyaWQtYXJlYTogaWc7XHJcbiB9XHJcblxyXG4gLnRtYmxye1xyXG4gICBncmlkLWFyZWE6IHRtYmxyO1xyXG4gfVxyXG5cclxuIC50aXR0bGV7XHJcbiAgIGdyaWQtYXJlYTogdGl0dGxlO1xyXG4gfVxyXG5cclxuIC50aXR0bGUxe1xyXG4gIGdyaWQtYXJlYTogdGl0dGxlMTtcclxufVxyXG5cclxuLnRleHR7XHJcbiAgZ3JpZC1hcmVhOiB0eHQ7XHJcblxyXG59XHJcblxyXG4gLmJvdHRvbXtcclxuICBncmlkLWFyZWE6IGJvdHRvbTtcclxuICBwYWRkaW5nOiAwIDAgMHB4IDA7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBjb2xvcjogI0ZGQjMwMDtcclxufVxyXG5cclxuLmJvdHRvbSBhe1xyXG4gIGNvbG9yOiAjRkZCMzAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJvdHRvbSBhOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI5M0M7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXtcclxuICAuZm9vdGVye1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICAnYWJvdXQnXHJcbiAgICAnY29udGFjdCdcclxuICAgICdib3R0b20nO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gIH1cclxuICAuYWJvdXR7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWVycml3ZWF0aGVyOjMwMCZkaXNwbGF5PXN3YXBcIik7XG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNGRkIzMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjkzQztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYWJvdXQgY29udGFjdFwiIFwiYm90dG9tIGJvdHRvbVwiO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBnYXA6IDE1cHg7XG59XG5cbi5jb250YWN0IGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjk0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcbn1cblxuLmFib3V0IHtcbiAgZ3JpZC1hcmVhOiBhYm91dDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInRpdHRsZTFcIiBcInR4dFwiO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5mYWIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNGRkIzMDA7XG59XG5cbi5jb250YWN0IHtcbiAgZ3JpZC1hcmVhOiBjb250YWN0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA0MCUgNDAlO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInRpdHRsZSB0aXR0bGUgdGl0dGxlXCIgXCJnIHR0ciBmXCIgXCJ3IGlnIHRtYmxyXCI7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmcge1xuICBncmlkLWFyZWE6IGc7XG59XG5cbi50dHIge1xuICBncmlkLWFyZWE6IHR0cjtcbn1cblxuLmYge1xuICBncmlkLWFyZWE6IGY7XG59XG5cbi53IHtcbiAgZ3JpZC1hcmVhOiB3O1xufVxuXG4uaWcge1xuICBncmlkLWFyZWE6IGlnO1xufVxuXG4udG1ibHIge1xuICBncmlkLWFyZWE6IHRtYmxyO1xufVxuXG4udGl0dGxlIHtcbiAgZ3JpZC1hcmVhOiB0aXR0bGU7XG59XG5cbi50aXR0bGUxIHtcbiAgZ3JpZC1hcmVhOiB0aXR0bGUxO1xufVxuXG4udGV4dCB7XG4gIGdyaWQtYXJlYTogdHh0O1xufVxuXG4uYm90dG9tIHtcbiAgZ3JpZC1hcmVhOiBib3R0b207XG4gIHBhZGRpbmc6IDAgMCAwcHggMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgY29sb3I6ICNGRkIzMDA7XG59XG5cbi5ib3R0b20gYSB7XG4gIGNvbG9yOiAjRkZCMzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ib3R0b20gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI5M0M7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZm9vdGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFib3V0XCIgXCJjb250YWN0XCIgXCJib3R0b21cIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gIH1cblxuICAuYWJvdXQge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/footer/footer.component.ts ***!
          \*******************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/main/main.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/components/main/main.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxHdWFjYW1heWEtVG91cnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59IiwiLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/main/main.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/main/main.component.ts ***!
          \***************************************************/
        /*! exports provided: MainComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function () { return MainComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MainComponent = /** @class */ (function () {
                function MainComponent() {
                }
                MainComponent.prototype.ngOnInit = function () {
                };
                return MainComponent;
            }());
            MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-main',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")).default]
                })
            ], MainComponent);
            /***/ 
        }),
        /***/ "./src/app/components/nav-bar/nav-bar.component.scss": 
        /*!***********************************************************!*\
          !*** ./src/app/components/nav-bar/nav-bar.component.scss ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Josefin+Sans:600&display=swap\");\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  background-color: #00293C;\n}\nli, a, button {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 600;\n  font-size: 16px;\n  color: #FFB300;\n  text-decoration: none;\n}\n.header {\n  display: grid;\n  grid-template-areas: \"logo link link Nmode\";\n  grid-template-columns: 29% auto auto auto;\n  height: 75px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 0 2% 0 5px;\n  z-index: 100;\n}\n.logo {\n  cursor: pointer;\n  grid-area: logo;\n  overflow: hidden;\n  height: 75px;\n  display: flex;\n  justify-content: flex-end;\n}\n.logo img {\n  height: 75px;\n  width: 275px;\n}\n.iso {\n  display: none;\n}\n.links {\n  grid-area: link;\n  display: flex;\n  justify-content: center;\n}\n.link {\n  display: flex;\n  align-items: center;\n  height: 75px;\n  padding: 20px;\n  border-inline: 1px #0088a9 solid;\n  text-align: center;\n}\n.link:hover {\n  background-color: rgba(0, 136, 169, 0.8);\n  color: #F0810F;\n  transition: all 0.3s ease 0s;\n}\nbutton {\n  padding: 9px 25px;\n  background-color: #0088a9;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: all 0.3s ease 0s;\n}\nbutton:hover {\n  color: #F0810F;\n  background-color: rgba(0, 136, 169, 0.8);\n}\n.Nmode {\n  grid-area: Nmode;\n  display: flex;\n  justify-content: flex-end;\n  margin: auto 0 auto 5%;\n}\n.far, .fa-bars {\n  background: none;\n  text-align: center;\n  text-decoration: none;\n  font-size: 30px;\n  width: 50px;\n}\n.fas {\n  padding-right: 3px;\n  background: none;\n}\n.menubtn {\n  display: none;\n  grid-area: menubtn;\n}\n@media (max-width: 1000px) {\n  .iso {\n    display: block;\n  }\n\n  .logo {\n    justify-content: center;\n  }\n\n  .logo img {\n    height: 100px;\n    width: 69px;\n  }\n\n  .log {\n    display: none;\n  }\n\n  .header {\n    grid-template-columns: auto 40% 35% auto;\n  }\n}\n@media (max-width: 760px) {\n  .links[aria-expanded=true] {\n    display: grid;\n    max-height: 75px;\n    transform: rotateX(0);\n    grid-template-areas: \"hot des pla iti\";\n  }\n\n  .hot {\n    grid-area: hot;\n  }\n\n  .des {\n    grid-area: des;\n  }\n\n  .pla {\n    grid-area: pla;\n  }\n\n  .iti {\n    grid-area: iti;\n  }\n\n  .header[aria-expanded=true] {\n    height: 150px;\n    grid-template-rows: 50% 50%;\n  }\n\n  .links {\n    transform: rotateX(90deg);\n    max-height: 0;\n    transition: all 0.5s;\n  }\n\n  .menubtn {\n    display: flex;\n    justify-content: flex-start;\n    margin: auto 0 auto 5%;\n  }\n\n  .Nmode {\n    margin: auto 5% auto 0;\n  }\n\n  .header {\n    padding: 0;\n    grid-template-areas: \"menubtn logo Nmode\" \"link link link\";\n    grid-template-columns: 33% 34% 33%;\n    transition: all 0.5s;\n    grid-template-rows: 100% 0;\n  }\n}\n@media (max-width: 760px) and (max-width: 510px) {\n  .links[aria-expanded=true] {\n    display: grid;\n    max-height: 75px;\n    transform: rotateX(0);\n    grid-template-areas: \"hot des\" \"pla iti\";\n  }\n\n  .header[aria-expanded=true] {\n    height: 225px;\n    grid-template-rows: 33% 66%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL0M6XFxHdWFjYW1heWEtVG91cnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdi1iYXJcXG5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBRVI7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNBSjtBREdBO0VBQ0ksdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNBSjtBREdBO0VBQ0ksYUFBQTtFQUNBLDJDQUNBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNESjtBRElBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNESjtBRElBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNESjtBRElBO0VBQ0ksYUFBQTtBQ0RKO0FESUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDSSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0RKO0FES0E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDRko7QURLQTtFQUNJLGNBQUE7RUFDQSx3Q0FBQTtBQ0ZKO0FES0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDRko7QURLQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRko7QURLQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREtBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDRko7QURLQTtFQUNJO0lBQ0ksY0FBQTtFQ0ZOOztFRElFO0lBQ0ksdUJBQUE7RUNETjs7RURHRTtJQUNJLGFBQUE7SUFDQSxXQUFBO0VDQU47O0VERUU7SUFDSSxhQUFBO0VDQ047O0VEQ0U7SUFDSSx3Q0FBQTtFQ0VOO0FBQ0Y7QURBQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQ0FDQTtFQ0NOOztFRENFO0lBQ0ksY0FBQTtFQ0VOOztFREFFO0lBQ0ksY0FBQTtFQ0dOOztFRERFO0lBQ0ksY0FBQTtFQ0lOOztFREZFO0lBQ0ksY0FBQTtFQ0tOOztFREhFO0lBQ0ksYUFBQTtJQUNBLDJCQUFBO0VDTU47O0VESkU7SUFDSSx5QkFBQTtJQUNBLGFBQUE7SUFDQSxvQkFBQTtFQ09OOztFRExFO0lBQ0ksYUFBQTtJQUNBLDJCQUFBO0lBQ0Esc0JBQUE7RUNRTjs7RURORTtJQUNJLHNCQUFBO0VDU047O0VEUEU7SUFDSSxVQUFBO0lBQ0EsMERBQ0E7SUFFQSxrQ0FBQTtJQUNBLG9CQUFBO0lBQ0EsMEJBQUE7RUNRTjtBQUNGO0FEUEk7RUFDSTtJQUNJLGFBQUE7SUFDQSxnQkFBQTtJQUNBLHFCQUFBO0lBQ0Esd0NBQ0E7RUNRVjs7RURMTTtJQUNJLGFBQUE7SUFDQSwyQkFBQTtFQ1FWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Sm9zZWZpbitTYW5zOjYwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyOTNDO1xyXG59XHJcblxyXG5saSxhLGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNGRkIzMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgJ2xvZ28gbGluayBsaW5rIE5tb2RlJztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjklIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDAgMiUgMCA1cHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGdyaWQtYXJlYTogbG9nbztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmxvZ28gaW1ne1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgd2lkdGg6IDI3NXB4O1xyXG59XHJcblxyXG4uaXNve1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxpbmtzIHtcclxuICAgIGdyaWQtYXJlYTogbGluaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLWlubGluZTogMXB4IHJnYigwLCAxMzYsMTY5KSBzb2xpZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbms6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEzNiwxNjksMC44KTtcclxuICAgIGNvbG9yOiAjRjA4MTBGO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA5cHggMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTM2LDE2OSwxKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcblxyXG5idXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogI0YwODEwRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTM2LDE2OSwwLjgpO1xyXG59XHJcblxyXG4uTm1vZGUge1xyXG4gICAgZ3JpZC1hcmVhOiBObW9kZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luOiBhdXRvIDAgYXV0byA1JTtcclxufVxyXG5cclxuLmZhciwgLmZhLWJhcnN7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5mYXN7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4ubWVudWJ0bntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBncmlkLWFyZWE6IG1lbnVidG47XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgLmlzb3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5sb2dve1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmxvZ28gaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDY5cHg7XHJcbiAgICB9XHJcbiAgICAubG9ne1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA0MCUgMzUlIGF1dG87XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KXtcclxuICAgIC5saW5rc1thcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXXtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgJ2hvdCBkZXMgcGxhIGl0aSc7XHJcbiAgICB9XHJcbiAgICAuaG90e1xyXG4gICAgICAgIGdyaWQtYXJlYTogaG90O1xyXG4gICAgfVxyXG4gICAgLmRlc3tcclxuICAgICAgICBncmlkLWFyZWE6IGRlcztcclxuICAgIH1cclxuICAgIC5wbGF7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBwbGE7XHJcbiAgICB9XHJcbiAgICAuaXRpe1xyXG4gICAgICAgIGdyaWQtYXJlYTogaXRpO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlclthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXXtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcclxuICAgIH1cclxuICAgIC5saW5rc3tcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICB9XHJcbiAgICAubWVudWJ0bntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBtYXJnaW46IGF1dG8gMCBhdXRvIDUlO1xyXG4gICAgfVxyXG4gICAgLk5tb2Rle1xyXG4gICAgICAgIG1hcmdpbjogYXV0byA1JSBhdXRvIDA7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyeyAgICAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICAgICAgJ21lbnVidG4gbG9nbyBObW9kZSdcclxuICAgICAgICAnbGluayBsaW5rIGxpbmsnO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDM0JSAzMyU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlIDA7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTEwcHgpe1xyXG4gICAgICAgIC5saW5rc1thcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXXtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAnaG90IGRlcydcclxuICAgICAgICAgICAgJ3BsYSBpdGknO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJde1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMzJSA2NiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUpvc2VmaW4rU2Fuczo2MDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjkzQztcbn1cblxubGksIGEsIGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZCMzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxvZ28gbGluayBsaW5rIE5tb2RlXCI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjklIGF1dG8gYXV0byBhdXRvO1xuICBoZWlnaHQ6IDc1cHg7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAwIDIlIDAgNXB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5sb2dvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBncmlkLWFyZWE6IGxvZ287XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmxvZ28gaW1nIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogMjc1cHg7XG59XG5cbi5pc28ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGlua3Mge1xuICBncmlkLWFyZWE6IGxpbms7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNzVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLWlubGluZTogMXB4ICMwMDg4YTkgc29saWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEzNiwgMTY5LCAwLjgpO1xuICBjb2xvcjogI0YwODEwRjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogOXB4IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg4YTk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjb2xvcjogI0YwODEwRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMzYsIDE2OSwgMC44KTtcbn1cblxuLk5tb2RlIHtcbiAgZ3JpZC1hcmVhOiBObW9kZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byA1JTtcbn1cblxuLmZhciwgLmZhLWJhcnMge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmZhcyB7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLm1lbnVidG4ge1xuICBkaXNwbGF5OiBub25lO1xuICBncmlkLWFyZWE6IG1lbnVidG47XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmlzbyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubG9nbyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAubG9nbyBpbWcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDY5cHg7XG4gIH1cblxuICAubG9nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDQwJSAzNSUgYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5saW5rc1thcmlhLWV4cGFuZGVkPXRydWVdIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1heC1oZWlnaHQ6IDc1cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaG90IGRlcyBwbGEgaXRpXCI7XG4gIH1cblxuICAuaG90IHtcbiAgICBncmlkLWFyZWE6IGhvdDtcbiAgfVxuXG4gIC5kZXMge1xuICAgIGdyaWQtYXJlYTogZGVzO1xuICB9XG5cbiAgLnBsYSB7XG4gICAgZ3JpZC1hcmVhOiBwbGE7XG4gIH1cblxuICAuaXRpIHtcbiAgICBncmlkLWFyZWE6IGl0aTtcbiAgfVxuXG4gIC5oZWFkZXJbYXJpYS1leHBhbmRlZD10cnVlXSB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XG4gIH1cblxuICAubGlua3Mge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XG4gICAgbWF4LWhlaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgfVxuXG4gIC5tZW51YnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW46IGF1dG8gMCBhdXRvIDUlO1xuICB9XG5cbiAgLk5tb2RlIHtcbiAgICBtYXJnaW46IGF1dG8gNSUgYXV0byAwO1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm1lbnVidG4gbG9nbyBObW9kZVwiIFwibGluayBsaW5rIGxpbmtcIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzNCUgMzMlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJSAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIGFuZCAobWF4LXdpZHRoOiA1MTBweCkge1xuICAubGlua3NbYXJpYS1leHBhbmRlZD10cnVlXSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXgtaGVpZ2h0OiA3NXB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhvdCBkZXNcIiBcInBsYSBpdGlcIjtcbiAgfVxuXG4gIC5oZWFkZXJbYXJpYS1leHBhbmRlZD10cnVlXSB7XG4gICAgaGVpZ2h0OiAyMjVweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMzJSA2NiU7XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/nav-bar/nav-bar.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
          \*********************************************************/
        /*! exports provided: NavBarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () { return NavBarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavBarComponent = /** @class */ (function () {
                function NavBarComponent() {
                    this.h = document.getElementsByClassName('header');
                    this.l = document.getElementsByClassName('links');
                    this.b = true;
                }
                NavBarComponent.prototype.ngOnInit = function () {
                };
                NavBarComponent.prototype.change = function () {
                    if (this.b === true) {
                        document.body.style.backgroundColor = 'rgb(11, 21, 49)';
                        this.b = !this.b;
                    }
                    else {
                        document.body.style.backgroundColor = '#F8F1E5';
                        this.b = !this.b;
                    }
                };
                NavBarComponent.prototype.night = function () {
                    var expanded = this.h[0].getAttribute('aria-expanded') === 'true' || false;
                    var t = !expanded;
                    this.h[0].setAttribute('aria-expanded', t.toString());
                    this.l[0].setAttribute('aria-expanded', t.toString());
                };
                return NavBarComponent;
            }());
            NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav-bar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/components/nav-bar/nav-bar.component.scss")).default]
                })
            ], NavBarComponent);
            /***/ 
        }),
        /***/ "./src/app/navigation/main/main-routing.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/navigation/main/main-routing.module.ts ***!
          \********************************************************/
        /*! exports provided: MainRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function () { return MainRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/main/main.component */ "./src/app/components/main/main.component.ts");
            var routes = [
                { path: '', component: src_app_components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                    children: [
                        { path: 'Home', loadChildren: function () { return __webpack_require__.e(/*! import() | modules-home-home-module */ "modules-home-home-module").then(__webpack_require__.bind(null, /*! ../../modules/home/home.module */ "./src/app/modules/home/home.module.ts"))
                                .then(function (m) { return m.HomeModule; }); } },
                        { path: '', redirectTo: 'Home', pathMatch: 'full' },
                        { path: 'Hoteles', loadChildren: function () { return Promise.all(/*! import() | modules-hoteles-hoteles-module */ [__webpack_require__.e("default~modules-hoteles-hoteles-module~navigation-admin-admin-module"), __webpack_require__.e("modules-hoteles-hoteles-module")]).then(__webpack_require__.bind(null, /*! ../../modules/hoteles/hoteles.module */ "./src/app/modules/hoteles/hoteles.module.ts"))
                                .then(function (m) { return m.HotelesModule; }); } },
                        { path: 'Destinos', loadChildren: function () { return __webpack_require__.e(/*! import() | modules-destinos-destinos-module */ "modules-destinos-destinos-module").then(__webpack_require__.bind(null, /*! ../../modules/destinos/destinos.module */ "./src/app/modules/destinos/destinos.module.ts"))
                                .then(function (m) { return m.DestinosModule; }); } },
                        { path: 'PlaneaTuViaje', loadChildren: function () { return __webpack_require__.e(/*! import() | modules-ptv-ptv-module */ "modules-ptv-ptv-module").then(__webpack_require__.bind(null, /*! ../../modules/ptv/ptv.module */ "./src/app/modules/ptv/ptv.module.ts"))
                                .then(function (m) { return m.PTVModule; }); } },
                        { path: 'Itinerario', loadChildren: function () { return __webpack_require__.e(/*! import() | modules-itinerario-itinerario-module */ "modules-itinerario-itinerario-module").then(__webpack_require__.bind(null, /*! ../../modules/itinerario/itinerario.module */ "./src/app/modules/itinerario/itinerario.module.ts"))
                                .then(function (m) { return m.ItinerarioModule; }); } }
                    ]
                }
            ];
            var MainRoutingModule = /** @class */ (function () {
                function MainRoutingModule() {
                }
                return MainRoutingModule;
            }());
            MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], MainRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/navigation/main/main.module.ts": 
        /*!************************************************!*\
          !*** ./src/app/navigation/main/main.module.ts ***!
          \************************************************/
        /*! exports provided: MainModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function () { return MainModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/navigation/main/main-routing.module.ts");
            /* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/main/main.component */ "./src/app/components/main/main.component.ts");
            /* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
            /* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
            var MainModule = /** @class */ (function () {
                function MainModule() {
                }
                return MainModule;
            }());
            MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"]
                    ]
                })
            ], MainModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=navigation-main-main-module-es2015.js.map
//# sourceMappingURL=navigation-main-main-module-es5.js.map
//# sourceMappingURL=navigation-main-main-module-es5.js.map