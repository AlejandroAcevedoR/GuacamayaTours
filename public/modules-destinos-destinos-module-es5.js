var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-destinos-destinos-module"], {
        /***/ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js": 
        /*!**************************************************************************!*\
          !*** ./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js ***!
          \**************************************************************************/
        /*! exports provided: ModalDismissReasons, NgbAccordion, NgbAccordionConfig, NgbAccordionModule, NgbActiveModal, NgbAlert, NgbAlertConfig, NgbAlertModule, NgbButtonLabel, NgbButtonsModule, NgbCalendar, NgbCalendarGregorian, NgbCalendarHebrew, NgbCalendarIslamicCivil, NgbCalendarIslamicUmalqura, NgbCalendarPersian, NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbCheckBox, NgbCollapse, NgbCollapseModule, NgbDate, NgbDateAdapter, NgbDateNativeAdapter, NgbDateNativeUTCAdapter, NgbDateParserFormatter, NgbDatepicker, NgbDatepickerConfig, NgbDatepickerI18n, NgbDatepickerI18nHebrew, NgbDatepickerModule, NgbDropdown, NgbDropdownAnchor, NgbDropdownConfig, NgbDropdownItem, NgbDropdownMenu, NgbDropdownModule, NgbDropdownToggle, NgbHighlight, NgbInputDatepicker, NgbModal, NgbModalConfig, NgbModalModule, NgbModalRef, NgbModule, NgbNavbar, NgbPagination, NgbPaginationConfig, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationModule, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPanel, NgbPanelContent, NgbPanelHeader, NgbPanelTitle, NgbPanelToggle, NgbPopover, NgbPopoverConfig, NgbPopoverModule, NgbProgressbar, NgbProgressbarConfig, NgbProgressbarModule, NgbRadio, NgbRadioGroup, NgbRating, NgbRatingConfig, NgbRatingModule, NgbSlide, NgbSlideEventDirection, NgbSlideEventSource, NgbTab, NgbTabContent, NgbTabTitle, NgbTabset, NgbTabsetConfig, NgbTabsetModule, NgbTimeAdapter, NgbTimepicker, NgbTimepickerConfig, NgbTimepickerI18n, NgbTimepickerModule, NgbToast, NgbToastConfig, NgbToastHeader, NgbToastModule, NgbTooltip, NgbTooltipConfig, NgbTooltipModule, NgbTypeahead, NgbTypeaheadConfig, NgbTypeaheadModule, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDismissReasons", function () { return ModalDismissReasons; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordion", function () { return NgbAccordion; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionConfig", function () { return NgbAccordionConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionModule", function () { return NgbAccordionModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbActiveModal", function () { return NgbActiveModal; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlert", function () { return NgbAlert; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertConfig", function () { return NgbAlertConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertModule", function () { return NgbAlertModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbButtonLabel", function () { return NgbButtonLabel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbButtonsModule", function () { return NgbButtonsModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendar", function () { return NgbCalendar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarGregorian", function () { return NgbCalendarGregorian; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarHebrew", function () { return NgbCalendarHebrew; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicCivil", function () { return NgbCalendarIslamicCivil; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicUmalqura", function () { return NgbCalendarIslamicUmalqura; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarPersian", function () { return NgbCalendarPersian; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarousel", function () { return NgbCarousel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselConfig", function () { return NgbCarouselConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselModule", function () { return NgbCarouselModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCheckBox", function () { return NgbCheckBox; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCollapse", function () { return NgbCollapse; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCollapseModule", function () { return NgbCollapseModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDate", function () { return NgbDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function () { return NgbDateAdapter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateNativeAdapter", function () { return NgbDateNativeAdapter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateNativeUTCAdapter", function () { return NgbDateNativeUTCAdapter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateParserFormatter", function () { return NgbDateParserFormatter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepicker", function () { return NgbDatepicker; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerConfig", function () { return NgbDatepickerConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18n", function () { return NgbDatepickerI18n; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18nHebrew", function () { return NgbDatepickerI18nHebrew; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerModule", function () { return NgbDatepickerModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdown", function () { return NgbDropdown; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownAnchor", function () { return NgbDropdownAnchor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownConfig", function () { return NgbDropdownConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownItem", function () { return NgbDropdownItem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownMenu", function () { return NgbDropdownMenu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownModule", function () { return NgbDropdownModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownToggle", function () { return NgbDropdownToggle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbHighlight", function () { return NgbHighlight; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbInputDatepicker", function () { return NgbInputDatepicker; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModal", function () { return NgbModal; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalConfig", function () { return NgbModalConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalModule", function () { return NgbModalModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalRef", function () { return NgbModalRef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModule", function () { return NgbModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbNavbar", function () { return NgbNavbar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPagination", function () { return NgbPagination; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationConfig", function () { return NgbPaginationConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationEllipsis", function () { return NgbPaginationEllipsis; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationFirst", function () { return NgbPaginationFirst; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationLast", function () { return NgbPaginationLast; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationModule", function () { return NgbPaginationModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationNext", function () { return NgbPaginationNext; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationNumber", function () { return NgbPaginationNumber; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationPrevious", function () { return NgbPaginationPrevious; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanel", function () { return NgbPanel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelContent", function () { return NgbPanelContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelHeader", function () { return NgbPanelHeader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelTitle", function () { return NgbPanelTitle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelToggle", function () { return NgbPanelToggle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopover", function () { return NgbPopover; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverConfig", function () { return NgbPopoverConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverModule", function () { return NgbPopoverModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbar", function () { return NgbProgressbar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarConfig", function () { return NgbProgressbarConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarModule", function () { return NgbProgressbarModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRadio", function () { return NgbRadio; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRadioGroup", function () { return NgbRadioGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRating", function () { return NgbRating; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRatingConfig", function () { return NgbRatingConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRatingModule", function () { return NgbRatingModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSlide", function () { return NgbSlide; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSlideEventDirection", function () { return NgbSlideEventDirection; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSlideEventSource", function () { return NgbSlideEventSource; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTab", function () { return NgbTab; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabContent", function () { return NgbTabContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabTitle", function () { return NgbTabTitle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabset", function () { return NgbTabset; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetConfig", function () { return NgbTabsetConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetModule", function () { return NgbTabsetModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimeAdapter", function () { return NgbTimeAdapter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepicker", function () { return NgbTimepicker; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerConfig", function () { return NgbTimepickerConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerI18n", function () { return NgbTimepickerI18n; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerModule", function () { return NgbTimepickerModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbToast", function () { return NgbToast; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbToastConfig", function () { return NgbToastConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbToastHeader", function () { return NgbToastHeader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbToastModule", function () { return NgbToastModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltip", function () { return NgbTooltip; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipConfig", function () { return NgbTooltipConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipModule", function () { return NgbTooltipModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeahead", function () { return NgbTypeahead; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadConfig", function () { return NgbTypeaheadConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadModule", function () { return NgbTypeaheadModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function () { return NGB_CAROUSEL_DIRECTIVES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function () { return NGB_DATEPICKER_CALENDAR_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function () { return ARIA_LIVE_DELAY_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function () { return Live; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function () { return NgbCalendarHijri; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function () { return ContentRef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function () { return NgbDatepickerMonthView; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function () { return NgbDatepickerDayView; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function () { return NgbDatepickerNavigation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function () { return NgbDatepickerNavigationSelect; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function () { return NGB_DATEPICKER_18N_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function () { return NgbDatepickerI18nDefault; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function () { return NGB_DATEPICKER_DATE_ADAPTER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function () { return NgbDateStructAdapter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function () { return NGB_DATEPICKER_PARSER_FORMATTER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function () { return NgbDateISOParserFormatter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function () { return NgbPopoverWindow; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function () { return NGB_DATEPICKER_TIME_ADAPTER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function () { return NgbTimeStructAdapter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function () { return NGB_TIMEPICKER_I18N_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function () { return NgbTimepickerI18nDefault; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function () { return NgbTooltipWindow; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function () { return NgbTypeaheadWindow; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function () { return NgbDatepickerService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function () { return NgbDatepickerKeyMapService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function () { return NgbModalBackdrop; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function () { return NgbModalWindow; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function () { return NgbModalStack; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function () { return ScrollBar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function () { return ARIA_LIVE_DELAY; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} value
             * @return {?}
             */
            function toInteger(value) {
                return parseInt("" + value, 10);
            }
            /**
             * @param {?} value
             * @return {?}
             */
            function toString(value) {
                return (value !== undefined && value !== null) ? "" + value : '';
            }
            /**
             * @param {?} value
             * @param {?} max
             * @param {?=} min
             * @return {?}
             */
            function getValueInRange(value, max, min) {
                if (min === void 0) { min = 0; }
                return Math.max(Math.min(value, max), min);
            }
            /**
             * @param {?} value
             * @return {?}
             */
            function isString(value) {
                return typeof value === 'string';
            }
            /**
             * @param {?} value
             * @return {?}
             */
            function isNumber(value) {
                return !isNaN(toInteger(value));
            }
            /**
             * @param {?} value
             * @return {?}
             */
            function isInteger(value) {
                return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            function isDefined(value) {
                return value !== undefined && value !== null;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            function padNumber(value) {
                if (isNumber(value)) {
                    return ("0" + value).slice(-2);
                }
                else {
                    return '';
                }
            }
            /**
             * @param {?} text
             * @return {?}
             */
            function regExpEscape(text) {
                return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
            }
            /**
             * @param {?} element
             * @param {?} className
             * @return {?}
             */
            function hasClassName(element, className) {
                return element && element.className && element.className.split &&
                    element.className.split(/\s+/).indexOf(className) >= 0;
            }
            if (typeof Element !== 'undefined' && !Element.prototype.closest) {
                // Polyfill for ie10+
                if (!Element.prototype.matches) {
                    // IE uses the non-standard name: msMatchesSelector
                    Element.prototype.matches = (( /** @type {?} */(Element.prototype))).msMatchesSelector || Element.prototype.webkitMatchesSelector;
                }
                Element.prototype.closest = ( /**
                 * @param {?} s
                 * @return {?}
                 */function (s) {
                    /** @type {?} */
                    var el = this;
                    if (!document.documentElement.contains(el)) {
                        return null;
                    }
                    do {
                        if (el.matches(s)) {
                            return el;
                        }
                        el = el.parentElement || el.parentNode;
                    } while (el !== null && el.nodeType === 1);
                    return null;
                });
            }
            /**
             * @param {?} element
             * @param {?} selector
             * @return {?}
             */
            function closest(element, selector) {
                if (!selector) {
                    return null;
                }
                return element.closest(selector);
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [NgbAccordion](#/components/accordion/api#NgbAccordion) component.
             *
             * You can inject this service, typically in your root component, and customize its properties
             * to provide default values for all accordions used in the application.
             */
            var NgbAccordionConfig = /** @class */ (function () {
                function NgbAccordionConfig() {
                    this.closeOthers = false;
                }
                return NgbAccordionConfig;
            }());
            NgbAccordionConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbAccordionConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbAccordionConfig_Factory() { return new NgbAccordionConfig(); }, token: NgbAccordionConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var nextId = 0;
            /**
             * A directive that wraps an accordion panel header with any HTML markup and a toggling button
             * marked with [`NgbPanelToggle`](#/components/accordion/api#NgbPanelToggle).
             * See the [header customization demo](#/components/accordion/examples#header) for more details.
             *
             * You can also use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to customize only the panel title.
             *
             * \@since 4.1.0
             */
            var NgbPanelHeader = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function NgbPanelHeader(templateRef) {
                    this.templateRef = templateRef;
                }
                return NgbPanelHeader;
            }());
            NgbPanelHeader.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPanelHeader]' },] }
            ];
            /** @nocollapse */
            NgbPanelHeader.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * A directive that wraps only the panel title with HTML markup inside.
             *
             * You can also use [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader) to customize the full panel header.
             */
            var NgbPanelTitle = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function NgbPanelTitle(templateRef) {
                    this.templateRef = templateRef;
                }
                return NgbPanelTitle;
            }());
            NgbPanelTitle.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPanelTitle]' },] }
            ];
            /** @nocollapse */
            NgbPanelTitle.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * A directive that wraps the accordion panel content.
             */
            var NgbPanelContent = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function NgbPanelContent(templateRef) {
                    this.templateRef = templateRef;
                }
                return NgbPanelContent;
            }());
            NgbPanelContent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPanelContent]' },] }
            ];
            /** @nocollapse */
            NgbPanelContent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * A directive that wraps an individual accordion panel with title and collapsible content.
             */
            var NgbPanel = /** @class */ (function () {
                function NgbPanel() {
                    /**
                     *  If `true`, the panel is disabled an can't be toggled.
                     */
                    this.disabled = false;
                    /**
                     *  An optional id for the panel that must be unique on the page.
                     *
                     *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
                     */
                    this.id = "ngb-panel-" + nextId++;
                    this.isOpen = false;
                }
                /**
                 * @return {?}
                 */
                NgbPanel.prototype.ngAfterContentChecked = function () {
                    // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
                    // only @ContentChildren allows us to specify the {descendants: false} option.
                    // Without {descendants: false} we are hitting bugs described in:
                    // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
                    this.titleTpl = this.titleTpls.first;
                    this.headerTpl = this.headerTpls.first;
                    this.contentTpl = this.contentTpls.first;
                };
                return NgbPanel;
            }());
            NgbPanel.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngb-panel' },] }
            ];
            NgbPanel.propDecorators = {
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                titleTpls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanelTitle, { descendants: false },] }],
                headerTpls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanelHeader, { descendants: false },] }],
                contentTpls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanelContent, { descendants: false },] }]
            };
            /**
             * Accordion is a collection of collapsible panels (bootstrap cards).
             *
             * It can ensure only one panel is opened at a time and allows to customize panel
             * headers.
             */
            var NgbAccordion = /** @class */ (function () {
                /**
                 * @param {?} config
                 */
                function NgbAccordion(config) {
                    /**
                     * An array or comma separated strings of panel ids that should be opened **initially**.
                     *
                     * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
                     * the `(panelChange)` event.
                     */
                    this.activeIds = [];
                    /**
                     * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
                     */
                    this.destroyOnHide = true;
                    /**
                     * Event emitted right before the panel toggle happens.
                     *
                     * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
                     */
                    this.panelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.type = config.type;
                    this.closeOtherPanels = config.closeOthers;
                }
                /**
                 * Checks if a panel with a given id is expanded.
                 * @param {?} panelId
                 * @return {?}
                 */
                NgbAccordion.prototype.isExpanded = function (panelId) { return this.activeIds.indexOf(panelId) > -1; };
                /**
                 * Expands a panel with a given id.
                 *
                 * Has no effect if the panel is already expanded or disabled.
                 * @param {?} panelId
                 * @return {?}
                 */
                NgbAccordion.prototype.expand = function (panelId) { this._changeOpenState(this._findPanelById(panelId), true); };
                /**
                 * Expands all panels, if `[closeOthers]` is `false`.
                 *
                 * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
                 * @return {?}
                 */
                NgbAccordion.prototype.expandAll = function () {
                    var _this = this;
                    if (this.closeOtherPanels) {
                        if (this.activeIds.length === 0 && this.panels.length) {
                            this._changeOpenState(this.panels.first, true);
                        }
                    }
                    else {
                        this.panels.forEach(( /**
                         * @param {?} panel
                         * @return {?}
                         */function (/**
                         * @param {?} panel
                         * @return {?}
                         */ panel) { return _this._changeOpenState(panel, true); }));
                    }
                };
                /**
                 * Collapses a panel with the given id.
                 *
                 * Has no effect if the panel is already collapsed or disabled.
                 * @param {?} panelId
                 * @return {?}
                 */
                NgbAccordion.prototype.collapse = function (panelId) { this._changeOpenState(this._findPanelById(panelId), false); };
                /**
                 * Collapses all opened panels.
                 * @return {?}
                 */
                NgbAccordion.prototype.collapseAll = function () {
                    var _this = this;
                    this.panels.forEach(( /**
                     * @param {?} panel
                     * @return {?}
                     */function (panel) { _this._changeOpenState(panel, false); }));
                };
                /**
                 * Toggles a panel with the given id.
                 *
                 * Has no effect if the panel is disabled.
                 * @param {?} panelId
                 * @return {?}
                 */
                NgbAccordion.prototype.toggle = function (panelId) {
                    /** @type {?} */
                    var panel = this._findPanelById(panelId);
                    if (panel) {
                        this._changeOpenState(panel, !panel.isOpen);
                    }
                };
                /**
                 * @return {?}
                 */
                NgbAccordion.prototype.ngAfterContentChecked = function () {
                    var _this = this;
                    // active id updates
                    if (isString(this.activeIds)) {
                        this.activeIds = this.activeIds.split(/\s*,\s*/);
                    }
                    // update panels open states
                    this.panels.forEach(( /**
                     * @param {?} panel
                     * @return {?}
                     */function (/**
                     * @param {?} panel
                     * @return {?}
                     */ panel) { return panel.isOpen = !panel.disabled && _this.activeIds.indexOf(panel.id) > -1; }));
                    // closeOthers updates
                    if (this.activeIds.length > 1 && this.closeOtherPanels) {
                        this._closeOthers(this.activeIds[0]);
                        this._updateActiveIds();
                    }
                };
                /**
                 * @private
                 * @param {?} panel
                 * @param {?} nextState
                 * @return {?}
                 */
                NgbAccordion.prototype._changeOpenState = function (panel, nextState) {
                    if (panel && !panel.disabled && panel.isOpen !== nextState) {
                        /** @type {?} */
                        var defaultPrevented_1 = false;
                        this.panelChange.emit({ panelId: panel.id, nextState: nextState, preventDefault: ( /**
                                 * @return {?}
                                 */function () { defaultPrevented_1 = true; }) });
                        if (!defaultPrevented_1) {
                            panel.isOpen = nextState;
                            if (nextState && this.closeOtherPanels) {
                                this._closeOthers(panel.id);
                            }
                            this._updateActiveIds();
                        }
                    }
                };
                /**
                 * @private
                 * @param {?} panelId
                 * @return {?}
                 */
                NgbAccordion.prototype._closeOthers = function (panelId) {
                    this.panels.forEach(( /**
                     * @param {?} panel
                     * @return {?}
                     */function (/**
                     * @param {?} panel
                     * @return {?}
                     */ panel) {
                        if (panel.id !== panelId) {
                            panel.isOpen = false;
                        }
                    }));
                };
                /**
                 * @private
                 * @param {?} panelId
                 * @return {?}
                 */
                NgbAccordion.prototype._findPanelById = function (panelId) {
                    return this.panels.find(( /**
                     * @param {?} p
                     * @return {?}
                     */function (/**
                     * @param {?} p
                     * @return {?}
                     */ p) { return p.id === panelId; }));
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbAccordion.prototype._updateActiveIds = function () {
                    this.activeIds = this.panels.filter(( /**
                     * @param {?} panel
                     * @return {?}
                     */function (/**
                     * @param {?} panel
                     * @return {?}
                     */ panel) { return panel.isOpen && !panel.disabled; })).map(( /**
                     * @param {?} panel
                     * @return {?}
                     */function (/**
                     * @param {?} panel
                     * @return {?}
                     */ panel) { return panel.id; }));
                };
                return NgbAccordion;
            }());
            NgbAccordion.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-accordion',
                            exportAs: 'ngbAccordion',
                            host: { 'class': 'accordion', 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                            template: "\n    <ng-template #t ngbPanelHeader let-panel>\n      <button class=\"btn btn-link\" [ngbPanelToggle]=\"panel\">\n        {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n      </button>\n    </ng-template>\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div class=\"card\">\n        <div role=\"tab\" id=\"{{panel.id}}-header\" [class]=\"'card-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')\">\n          <ng-template [ngTemplateOutlet]=\"panel.headerTpl?.templateRef || t\"\n                       [ngTemplateOutletContext]=\"{$implicit: panel, opened: panel.isOpen}\"></ng-template>\n        </div>\n        <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\"\n             class=\"collapse\" [class.show]=\"panel.isOpen\" *ngIf=\"!destroyOnHide || panel.isOpen\">\n          <div class=\"card-body\">\n               <ng-template [ngTemplateOutlet]=\"panel.contentTpl?.templateRef\"></ng-template>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  "
                        }] }
            ];
            /** @nocollapse */
            NgbAccordion.ctorParameters = function () { return [
                { type: NgbAccordionConfig }
            ]; };
            NgbAccordion.propDecorators = {
                panels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanel,] }],
                activeIds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                closeOtherPanels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['closeOthers',] }],
                destroyOnHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                panelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * A directive to put on a button that toggles panel opening and closing.
             *
             * To be used inside the [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader)
             *
             * \@since 4.1.0
             */
            var NgbPanelToggle = /** @class */ (function () {
                /**
                 * @param {?} accordion
                 * @param {?} panel
                 */
                function NgbPanelToggle(accordion, panel) {
                    this.accordion = accordion;
                    this.panel = panel;
                }
                Object.defineProperty(NgbPanelToggle.prototype, "ngbPanelToggle", {
                    /**
                     * @param {?} panel
                     * @return {?}
                     */
                    set: function (panel) {
                        if (panel) {
                            this.panel = panel;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return NgbPanelToggle;
            }());
            NgbPanelToggle.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'button[ngbPanelToggle]',
                            host: {
                                'type': 'button',
                                '[disabled]': 'panel.disabled',
                                '[class.collapsed]': '!panel.isOpen',
                                '[attr.aria-expanded]': 'panel.isOpen',
                                '[attr.aria-controls]': 'panel.id',
                                '(click)': 'accordion.toggle(panel.id)'
                            }
                        },] }
            ];
            /** @nocollapse */
            NgbPanelToggle.ctorParameters = function () { return [
                { type: NgbAccordion },
                { type: NgbPanel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
            ]; };
            NgbPanelToggle.propDecorators = {
                ngbPanelToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NGB_ACCORDION_DIRECTIVES = [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle];
            var NgbAccordionModule = /** @class */ (function () {
                function NgbAccordionModule() {
                }
                return NgbAccordionModule;
            }());
            NgbAccordionModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [NgbAlert](#/components/alert/api#NgbAlert) component.
             *
             * You can inject this service, typically in your root component, and customize its properties
             * to provide default values for all alerts used in the application.
             */
            var NgbAlertConfig = /** @class */ (function () {
                function NgbAlertConfig() {
                    this.dismissible = true;
                    this.type = 'warning';
                }
                return NgbAlertConfig;
            }());
            NgbAlertConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbAlertConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbAlertConfig_Factory() { return new NgbAlertConfig(); }, token: NgbAlertConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Alert is a component to provide contextual feedback messages for user.
             *
             * It supports several alert types and can be dismissed.
             */
            var NgbAlert = /** @class */ (function () {
                /**
                 * @param {?} config
                 * @param {?} _renderer
                 * @param {?} _element
                 */
                function NgbAlert(config, _renderer, _element) {
                    this._renderer = _renderer;
                    this._element = _element;
                    /**
                     * An event emitted when the close button is clicked. It has no payload and only relevant for dismissible alerts.
                     */
                    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.dismissible = config.dismissible;
                    this.type = config.type;
                }
                /**
                 * @return {?}
                 */
                NgbAlert.prototype.closeHandler = function () { this.close.emit(null); };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                NgbAlert.prototype.ngOnChanges = function (changes) {
                    /** @type {?} */
                    var typeChange = changes['type'];
                    if (typeChange && !typeChange.firstChange) {
                        this._renderer.removeClass(this._element.nativeElement, "alert-" + typeChange.previousValue);
                        this._renderer.addClass(this._element.nativeElement, "alert-" + typeChange.currentValue);
                    }
                };
                /**
                 * @return {?}
                 */
                NgbAlert.prototype.ngOnInit = function () { this._renderer.addClass(this._element.nativeElement, "alert-" + this.type); };
                return NgbAlert;
            }());
            NgbAlert.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-alert',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            host: { 'role': 'alert', 'class': 'alert', '[class.alert-dismissible]': 'dismissible' },
                            template: "\n    <ng-content></ng-content>\n    <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" i18n-aria-label=\"@@ngb.alert.close\"\n      (click)=\"closeHandler()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    ",
                            styles: ["ngb-alert{display:block}"]
                        }] }
            ];
            /** @nocollapse */
            NgbAlert.ctorParameters = function () { return [
                { type: NgbAlertConfig },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            NgbAlert.propDecorators = {
                dismissible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbAlertModule = /** @class */ (function () {
                function NgbAlertModule() {
                }
                return NgbAlertModule;
            }());
            NgbAlertModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbAlert], exports: [NgbAlert], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], entryComponents: [NgbAlert] },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbButtonLabel = /** @class */ (function () {
                function NgbButtonLabel() {
                }
                return NgbButtonLabel;
            }());
            NgbButtonLabel.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[ngbButtonLabel]',
                            host: { '[class.btn]': 'true', '[class.active]': 'active', '[class.disabled]': 'disabled', '[class.focus]': 'focused' }
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NGB_CHECKBOX_VALUE_ACCESSOR = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgbCheckBox; })),
                multi: true
            };
            /**
             * Allows to easily create Bootstrap-style checkbox buttons.
             *
             * Integrates with forms, so the value of a checked button is bound to the underlying form control
             * either in a reactive or template-driven way.
             */
            var NgbCheckBox = /** @class */ (function () {
                /**
                 * @param {?} _label
                 * @param {?} _cd
                 */
                function NgbCheckBox(_label, _cd) {
                    this._label = _label;
                    this._cd = _cd;
                    /**
                     * If `true`, the checkbox button will be disabled
                     */
                    this.disabled = false;
                    /**
                     * The form control value when the checkbox is checked.
                     */
                    this.valueChecked = true;
                    /**
                     * The form control value when the checkbox is unchecked.
                     */
                    this.valueUnChecked = false;
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                Object.defineProperty(NgbCheckBox.prototype, "focused", {
                    /**
                     * @param {?} isFocused
                     * @return {?}
                     */
                    set: function (isFocused) {
                        this._label.focused = isFocused;
                        if (!isFocused) {
                            this.onTouched();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @param {?} $event
                 * @return {?}
                 */
                NgbCheckBox.prototype.onInputChange = function ($event) {
                    /** @type {?} */
                    var modelToPropagate = $event.target.checked ? this.valueChecked : this.valueUnChecked;
                    this.onChange(modelToPropagate);
                    this.onTouched();
                    this.writeValue(modelToPropagate);
                };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbCheckBox.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbCheckBox.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * @param {?} isDisabled
                 * @return {?}
                 */
                NgbCheckBox.prototype.setDisabledState = function (isDisabled) {
                    this.disabled = isDisabled;
                    this._label.disabled = isDisabled;
                };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                NgbCheckBox.prototype.writeValue = function (value) {
                    this.checked = value === this.valueChecked;
                    this._label.active = this.checked;
                    // label won't be updated, if it is inside the OnPush component when [ngModel] changes
                    this._cd.markForCheck();
                };
                return NgbCheckBox;
            }());
            NgbCheckBox.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[ngbButton][type=checkbox]',
                            host: {
                                '[checked]': 'checked',
                                '[disabled]': 'disabled',
                                '(change)': 'onInputChange($event)',
                                '(focus)': 'focused = true',
                                '(blur)': 'focused = false'
                            },
                            providers: [NGB_CHECKBOX_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            NgbCheckBox.ctorParameters = function () { return [
                { type: NgbButtonLabel },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
            ]; };
            NgbCheckBox.propDecorators = {
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                valueChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                valueUnChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NGB_RADIO_VALUE_ACCESSOR = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgbRadioGroup; })),
                multi: true
            };
            /** @type {?} */
            var nextId$1 = 0;
            /**
             * Allows to easily create Bootstrap-style radio buttons.
             *
             * Integrates with forms, so the value of a checked button is bound to the underlying form control
             * either in a reactive or template-driven way.
             */
            var NgbRadioGroup = /** @class */ (function () {
                function NgbRadioGroup() {
                    this._radios = new Set();
                    this._value = null;
                    /**
                     * Name of the radio group applied to radio input elements.
                     *
                     * Will be applied to all radio input elements inside the group,
                     * unless [`NgbRadio`](#/components/buttons/api#NgbRadio)'s specify names themselves.
                     *
                     * If not provided, will be generated in the `ngb-radio-xx` format.
                     */
                    this.name = "ngb-radio-" + nextId$1++;
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                Object.defineProperty(NgbRadioGroup.prototype, "disabled", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._disabled; },
                    /**
                     * @param {?} isDisabled
                     * @return {?}
                     */
                    set: function (isDisabled) { this.setDisabledState(isDisabled); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @param {?} radio
                 * @return {?}
                 */
                NgbRadioGroup.prototype.onRadioChange = function (radio) {
                    this.writeValue(radio.value);
                    this.onChange(radio.value);
                };
                /**
                 * @return {?}
                 */
                NgbRadioGroup.prototype.onRadioValueUpdate = function () { this._updateRadiosValue(); };
                /**
                 * @param {?} radio
                 * @return {?}
                 */
                NgbRadioGroup.prototype.register = function (radio) { this._radios.add(radio); };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbRadioGroup.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbRadioGroup.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * @param {?} isDisabled
                 * @return {?}
                 */
                NgbRadioGroup.prototype.setDisabledState = function (isDisabled) {
                    this._disabled = isDisabled;
                    this._updateRadiosDisabled();
                };
                /**
                 * @param {?} radio
                 * @return {?}
                 */
                NgbRadioGroup.prototype.unregister = function (radio) { this._radios.delete(radio); };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                NgbRadioGroup.prototype.writeValue = function (value) {
                    this._value = value;
                    this._updateRadiosValue();
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbRadioGroup.prototype._updateRadiosValue = function () {
                    var _this = this;
                    this._radios.forEach(( /**
                     * @param {?} radio
                     * @return {?}
                     */function (radio) { return radio.updateValue(_this._value); }));
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbRadioGroup.prototype._updateRadiosDisabled = function () {
                    this._radios.forEach(( /**
                     * @param {?} radio
                     * @return {?}
                     */function (radio) { return radio.updateDisabled(); }));
                };
                return NgbRadioGroup;
            }());
            NgbRadioGroup.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbRadioGroup]', host: { 'role': 'radiogroup' }, providers: [NGB_RADIO_VALUE_ACCESSOR] },] }
            ];
            NgbRadioGroup.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * A directive that marks an input of type "radio" as a part of the
             * [`NgbRadioGroup`](#/components/buttons/api#NgbRadioGroup).
             */
            var NgbRadio = /** @class */ (function () {
                /**
                 * @param {?} _group
                 * @param {?} _label
                 * @param {?} _renderer
                 * @param {?} _element
                 * @param {?} _cd
                 */
                function NgbRadio(_group, _label, _renderer, _element, _cd) {
                    this._group = _group;
                    this._label = _label;
                    this._renderer = _renderer;
                    this._element = _element;
                    this._cd = _cd;
                    this._value = null;
                    this._group.register(this);
                    this.updateDisabled();
                }
                Object.defineProperty(NgbRadio.prototype, "value", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._value; },
                    /**
                     * The form control value when current radio button is checked.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._value = value;
                        /** @type {?} */
                        var stringValue = value ? value.toString() : '';
                        this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);
                        this._group.onRadioValueUpdate();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbRadio.prototype, "disabled", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._group.disabled || this._disabled; },
                    /**
                     * If `true`, current radio button will be disabled.
                     * @param {?} isDisabled
                     * @return {?}
                     */
                    set: function (isDisabled) {
                        this._disabled = isDisabled !== false;
                        this.updateDisabled();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbRadio.prototype, "focused", {
                    /**
                     * @param {?} isFocused
                     * @return {?}
                     */
                    set: function (isFocused) {
                        if (this._label) {
                            this._label.focused = isFocused;
                        }
                        if (!isFocused) {
                            this._group.onTouched();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbRadio.prototype, "checked", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._checked; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbRadio.prototype, "nameAttr", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this.name || this._group.name; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                NgbRadio.prototype.ngOnDestroy = function () { this._group.unregister(this); };
                /**
                 * @return {?}
                 */
                NgbRadio.prototype.onChange = function () { this._group.onRadioChange(this); };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                NgbRadio.prototype.updateValue = function (value) {
                    // label won't be updated, if it is inside the OnPush component when [ngModel] changes
                    if (this.value !== value) {
                        this._cd.markForCheck();
                    }
                    this._checked = this.value === value;
                    this._label.active = this._checked;
                };
                /**
                 * @return {?}
                 */
                NgbRadio.prototype.updateDisabled = function () { this._label.disabled = this.disabled; };
                return NgbRadio;
            }());
            NgbRadio.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[ngbButton][type=radio]',
                            host: {
                                '[checked]': 'checked',
                                '[disabled]': 'disabled',
                                '[name]': 'nameAttr',
                                '(change)': 'onChange()',
                                '(focus)': 'focused = true',
                                '(blur)': 'focused = false'
                            }
                        },] }
            ];
            /** @nocollapse */
            NgbRadio.ctorParameters = function () { return [
                { type: NgbRadioGroup },
                { type: NgbButtonLabel },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
            ]; };
            NgbRadio.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NGB_BUTTON_DIRECTIVES = [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio];
            var NgbButtonsModule = /** @class */ (function () {
                function NgbButtonsModule() {
                }
                return NgbButtonsModule;
            }());
            NgbButtonsModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_BUTTON_DIRECTIVES, exports: NGB_BUTTON_DIRECTIVES },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [NgbCarousel](#/components/carousel/api#NgbCarousel) component.
             *
             * You can inject this service, typically in your root component, and customize its properties
             * to provide default values for all carousels used in the application.
             */
            var NgbCarouselConfig = /** @class */ (function () {
                function NgbCarouselConfig() {
                    this.interval = 5000;
                    this.wrap = true;
                    this.keyboard = true;
                    this.pauseOnHover = true;
                    this.showNavigationArrows = true;
                    this.showNavigationIndicators = true;
                }
                return NgbCarouselConfig;
            }());
            NgbCarouselConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbCarouselConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbCarouselConfig_Factory() { return new NgbCarouselConfig(); }, token: NgbCarouselConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var nextId$2 = 0;
            /**
             * A directive that wraps the individual carousel slide.
             */
            var NgbSlide = /** @class */ (function () {
                /**
                 * @param {?} tplRef
                 */
                function NgbSlide(tplRef) {
                    this.tplRef = tplRef;
                    /**
                     * Slide id that must be unique for the entire document.
                     *
                     * If not provided, will be generated in the `ngb-slide-xx` format.
                     */
                    this.id = "ngb-slide-" + nextId$2++;
                }
                return NgbSlide;
            }());
            NgbSlide.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbSlide]' },] }
            ];
            /** @nocollapse */
            NgbSlide.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            NgbSlide.propDecorators = {
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * Carousel is a component to easily create and control slideshows.
             *
             * Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.
             */
            var NgbCarousel = /** @class */ (function () {
                /**
                 * @param {?} config
                 * @param {?} _platformId
                 * @param {?} _ngZone
                 * @param {?} _cd
                 */
                function NgbCarousel(config, _platformId, _ngZone, _cd) {
                    this._platformId = _platformId;
                    this._ngZone = _ngZone;
                    this._cd = _cd;
                    this.NgbSlideEventSource = NgbSlideEventSource;
                    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this._interval$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
                    this._mouseHover$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
                    this._pauseOnHover$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
                    this._pause$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
                    this._wrap$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
                    /**
                     * An event emitted right after the slide transition is completed.
                     *
                     * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
                     */
                    this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.interval = config.interval;
                    this.wrap = config.wrap;
                    this.keyboard = config.keyboard;
                    this.pauseOnHover = config.pauseOnHover;
                    this.showNavigationArrows = config.showNavigationArrows;
                    this.showNavigationIndicators = config.showNavigationIndicators;
                }
                Object.defineProperty(NgbCarousel.prototype, "interval", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._interval$.value; },
                    /**
                     * Time in milliseconds before the next slide is shown.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._interval$.next(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbCarousel.prototype, "wrap", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._wrap$.value; },
                    /**
                     * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._wrap$.next(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbCarousel.prototype, "pauseOnHover", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._pauseOnHover$.value; },
                    /**
                     * If `true`, will pause slide switching when mouse cursor hovers the slide.
                     *
                     * \@since 2.2.0
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._pauseOnHover$.next(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                NgbCarousel.prototype.mouseEnter = function () {
                    this._mouseHover$.next(true);
                };
                /**
                 * @return {?}
                 */
                NgbCarousel.prototype.mouseLeave = function () {
                    this._mouseHover$.next(false);
                };
                /**
                 * @return {?}
                 */
                NgbCarousel.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    // setInterval() doesn't play well with SSR and protractor,
                    // so we should run it in the browser and outside Angular
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId)) {
                        this._ngZone.runOutsideAngular(( /**
                         * @return {?}
                         */function () {
                            /** @type {?} */
                            var hasNextSlide$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(_this.slide.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                             * @param {?} slideEvent
                             * @return {?}
                             */function (/**
                             * @param {?} slideEvent
                             * @return {?}
                             */ slideEvent) { return slideEvent.current; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(_this.activeId)), _this._wrap$, _this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null)))
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                         * @param {?} __0
                         * @return {?}
                         */function (_a) {
                                var currentSlideId = _a[0], wrap = _a[1];
                                /** @type {?} */
                                var slideArr = _this.slides.toArray();
                                /** @type {?} */
                                var currentSlideIdx = _this._getSlideIdxById(currentSlideId);
                                return wrap ? slideArr.length > 1 : currentSlideIdx < slideArr.length - 1;
                            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(_this._pause$, _this._pauseOnHover$, _this._mouseHover$, _this._interval$, hasNextSlide$)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                         * @param {?} __0
                         * @return {?}
                         */function (_a) {
                                var pause = _a[0], pauseOnHover = _a[1], mouseHover = _a[2], interval = _a[3], hasNextSlide = _a[4];
                                return ((pause || (pauseOnHover && mouseHover) || !hasNextSlide) ? 0 : interval);
                            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(( /**
                             * @param {?} interval
                             * @return {?}
                             */function (/**
                             * @param {?} interval
                             * @return {?}
                             */ interval) { return interval > 0 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(interval, interval) : rxjs__WEBPACK_IMPORTED_MODULE_3__["NEVER"]; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this._destroy$))
                                .subscribe(( /**
                         * @return {?}
                         */function () { return _this._ngZone.run(( /**
                             * @return {?}
                             */function () { return _this.next(NgbSlideEventSource.TIMER); })); }));
                        }));
                    }
                    this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroy$)).subscribe(( /**
                     * @return {?}
                     */function () { return _this._cd.markForCheck(); }));
                };
                /**
                 * @return {?}
                 */
                NgbCarousel.prototype.ngAfterContentChecked = function () {
                    /** @type {?} */
                    var activeSlide = this._getSlideById(this.activeId);
                    this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
                };
                /**
                 * @return {?}
                 */
                NgbCarousel.prototype.ngOnDestroy = function () { this._destroy$.next(); };
                /**
                 * Navigates to a slide with the specified identifier.
                 * @param {?} slideId
                 * @param {?=} source
                 * @return {?}
                 */
                NgbCarousel.prototype.select = function (slideId, source) {
                    this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId), source);
                };
                /**
                 * Navigates to the previous slide.
                 * @param {?=} source
                 * @return {?}
                 */
                NgbCarousel.prototype.prev = function (source) {
                    this._cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.RIGHT, source);
                };
                /**
                 * Navigates to the next slide.
                 * @param {?=} source
                 * @return {?}
                 */
                NgbCarousel.prototype.next = function (source) {
                    this._cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.LEFT, source);
                };
                /**
                 * Pauses cycling through the slides.
                 * @return {?}
                 */
                NgbCarousel.prototype.pause = function () { this._pause$.next(true); };
                /**
                 * Restarts cycling through the slides from left to right.
                 * @return {?}
                 */
                NgbCarousel.prototype.cycle = function () { this._pause$.next(false); };
                /**
                 * @private
                 * @param {?} slideIdx
                 * @param {?} direction
                 * @param {?=} source
                 * @return {?}
                 */
                NgbCarousel.prototype._cycleToSelected = function (slideIdx, direction, source) {
                    /** @type {?} */
                    var selectedSlide = this._getSlideById(slideIdx);
                    if (selectedSlide && selectedSlide.id !== this.activeId) {
                        this.slide.emit({ prev: this.activeId, current: selectedSlide.id, direction: direction, paused: this._pause$.value, source: source });
                        this.activeId = selectedSlide.id;
                    }
                    // we get here after the interval fires or any external API call like next(), prev() or select()
                    this._cd.markForCheck();
                };
                /**
                 * @private
                 * @param {?} currentActiveSlideId
                 * @param {?} nextActiveSlideId
                 * @return {?}
                 */
                NgbCarousel.prototype._getSlideEventDirection = function (currentActiveSlideId, nextActiveSlideId) {
                    /** @type {?} */
                    var currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
                    /** @type {?} */
                    var nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
                    return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.RIGHT : NgbSlideEventDirection.LEFT;
                };
                /**
                 * @private
                 * @param {?} slideId
                 * @return {?}
                 */
                NgbCarousel.prototype._getSlideById = function (slideId) {
                    return this.slides.find(( /**
                     * @param {?} slide
                     * @return {?}
                     */function (/**
                     * @param {?} slide
                     * @return {?}
                     */ slide) { return slide.id === slideId; }));
                };
                /**
                 * @private
                 * @param {?} slideId
                 * @return {?}
                 */
                NgbCarousel.prototype._getSlideIdxById = function (slideId) {
                    return this.slides.toArray().indexOf(this._getSlideById(slideId));
                };
                /**
                 * @private
                 * @param {?} currentSlideId
                 * @return {?}
                 */
                NgbCarousel.prototype._getNextSlide = function (currentSlideId) {
                    /** @type {?} */
                    var slideArr = this.slides.toArray();
                    /** @type {?} */
                    var currentSlideIdx = this._getSlideIdxById(currentSlideId);
                    /** @type {?} */
                    var isLastSlide = currentSlideIdx === slideArr.length - 1;
                    return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
                        slideArr[currentSlideIdx + 1].id;
                };
                /**
                 * @private
                 * @param {?} currentSlideId
                 * @return {?}
                 */
                NgbCarousel.prototype._getPrevSlide = function (currentSlideId) {
                    /** @type {?} */
                    var slideArr = this.slides.toArray();
                    /** @type {?} */
                    var currentSlideIdx = this._getSlideIdxById(currentSlideId);
                    /** @type {?} */
                    var isFirstSlide = currentSlideIdx === 0;
                    return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
                        slideArr[currentSlideIdx - 1].id;
                };
                return NgbCarousel;
            }());
            NgbCarousel.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-carousel',
                            exportAs: 'ngbCarousel',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            host: {
                                'class': 'carousel slide',
                                '[style.display]': '"block"',
                                'tabIndex': '0',
                                '(keydown.arrowLeft)': 'keyboard && prev(NgbSlideEventSource.ARROW_LEFT)',
                                '(keydown.arrowRight)': 'keyboard && next(NgbSlideEventSource.ARROW_RIGHT)'
                            },
                            template: "\n    <ol class=\"carousel-indicators\" *ngIf=\"showNavigationIndicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\"\n          (click)=\"select(slide.id, NgbSlideEventSource.INDICATOR)\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <ng-template [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" role=\"button\" (click)=\"prev(NgbSlideEventSource.ARROW_LEFT)\" *ngIf=\"showNavigationArrows\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\" i18n=\"@@ngb.carousel.previous\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" role=\"button\" (click)=\"next(NgbSlideEventSource.ARROW_RIGHT)\" *ngIf=\"showNavigationArrows\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\" i18n=\"@@ngb.carousel.next\">Next</span>\n    </a>\n  "
                        }] }
            ];
            /** @nocollapse */
            NgbCarousel.ctorParameters = function () { return [
                { type: NgbCarouselConfig },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
            ]; };
            NgbCarousel.propDecorators = {
                slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbSlide,] }],
                activeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                interval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                wrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                pauseOnHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                showNavigationArrows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                showNavigationIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                mouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
                mouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }]
            };
            /** @enum {string} */
            var NgbSlideEventDirection = {
                LEFT: ( /** @type {?} */('left')),
                RIGHT: ( /** @type {?} */('right')),
            };
            /** @enum {string} */
            var NgbSlideEventSource = {
                TIMER: 'timer',
                ARROW_LEFT: 'arrowLeft',
                ARROW_RIGHT: 'arrowRight',
                INDICATOR: 'indicator',
            };
            /** @type {?} */
            var NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbCarouselModule = /** @class */ (function () {
                function NgbCarouselModule() {
                }
                return NgbCarouselModule;
            }());
            NgbCarouselModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_CAROUSEL_DIRECTIVES, exports: NGB_CAROUSEL_DIRECTIVES, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A directive to provide a simple way of hiding and showing elements on the page.
             */
            var NgbCollapse = /** @class */ (function () {
                function NgbCollapse() {
                    /**
                     * If `true`, will collapse the element or show it otherwise.
                     */
                    this.collapsed = false;
                }
                return NgbCollapse;
            }());
            NgbCollapse.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[ngbCollapse]',
                            exportAs: 'ngbCollapse',
                            host: { '[class.collapse]': 'true', '[class.show]': '!collapsed' }
                        },] }
            ];
            NgbCollapse.propDecorators = {
                collapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngbCollapse',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbCollapseModule = /** @class */ (function () {
                function NgbCollapseModule() {
                }
                return NgbCollapseModule;
            }());
            NgbCollapseModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbCollapse], exports: [NgbCollapse] },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A simple class that represents a date that datepicker also uses internally.
             *
             * It is the implementation of the `NgbDateStruct` interface that adds some convenience methods,
             * like `.equals()`, `.before()`, etc.
             *
             * All datepicker APIs consume `NgbDateStruct`, but return `NgbDate`.
             *
             * In many cases it is simpler to manipulate these objects together with
             * [`NgbCalendar`](#/components/datepicker/api#NgbCalendar) than native JS Dates.
             *
             * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
             *
             * \@since 3.0.0
             */
            var NgbDate = /** @class */ (function () {
                /**
                 * @param {?} year
                 * @param {?} month
                 * @param {?} day
                 */
                function NgbDate(year, month, day) {
                    this.year = isInteger(year) ? year : null;
                    this.month = isInteger(month) ? month : null;
                    this.day = isInteger(day) ? day : null;
                }
                /**
                 * A **static method** that creates a new date object from the `NgbDateStruct`,
                 *
                 * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
                 *
                 * If the `date` is already of `NgbDate` type, the method will return the same object.
                 * @param {?} date
                 * @return {?}
                 */
                NgbDate.from = function (date) {
                    if (date instanceof NgbDate) {
                        return date;
                    }
                    return date ? new NgbDate(date.year, date.month, date.day) : null;
                };
                /**
                 * Checks if the current date is equal to another date.
                 * @param {?} other
                 * @return {?}
                 */
                NgbDate.prototype.equals = function (other) {
                    return other && this.year === other.year && this.month === other.month && this.day === other.day;
                };
                /**
                 * Checks if the current date is before another date.
                 * @param {?} other
                 * @return {?}
                 */
                NgbDate.prototype.before = function (other) {
                    if (!other) {
                        return false;
                    }
                    if (this.year === other.year) {
                        if (this.month === other.month) {
                            return this.day === other.day ? false : this.day < other.day;
                        }
                        else {
                            return this.month < other.month;
                        }
                    }
                    else {
                        return this.year < other.year;
                    }
                };
                /**
                 * Checks if the current date is after another date.
                 * @param {?} other
                 * @return {?}
                 */
                NgbDate.prototype.after = function (other) {
                    if (!other) {
                        return false;
                    }
                    if (this.year === other.year) {
                        if (this.month === other.month) {
                            return this.day === other.day ? false : this.day > other.day;
                        }
                        else {
                            return this.month > other.month;
                        }
                    }
                    else {
                        return this.year > other.year;
                    }
                };
                return NgbDate;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} jsDate
             * @return {?}
             */
            function fromJSDate(jsDate) {
                return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
            }
            /**
             * @param {?} date
             * @return {?}
             */
            function toJSDate(date) {
                /** @type {?} */
                var jsDate = new Date(date.year, date.month - 1, date.day, 12);
                // this is done avoid 30 -> 1930 conversion
                if (!isNaN(jsDate.getTime())) {
                    jsDate.setFullYear(date.year);
                }
                return jsDate;
            }
            /**
             * @return {?}
             */
            function NGB_DATEPICKER_CALENDAR_FACTORY() {
                return new NgbCalendarGregorian();
            }
            /**
             * A service that represents the calendar used by the datepicker.
             *
             * The default implementation uses the Gregorian calendar. You can inject it in your own
             * implementations if necessary to simplify `NgbDate` calculations.
             * @abstract
             */
            var NgbCalendar = /** @class */ (function () {
                function NgbCalendar() {
                }
                return NgbCalendar;
            }());
            NgbCalendar.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_CALENDAR_FACTORY },] }
            ];
            /** @nocollapse */ NgbCalendar.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: NGB_DATEPICKER_CALENDAR_FACTORY, token: NgbCalendar, providedIn: "root" });
            var NgbCalendarGregorian = /** @class */ (function (_super) {
                __extends(NgbCalendarGregorian, _super);
                function NgbCalendarGregorian() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * @return {?}
                 */
                NgbCalendarGregorian.prototype.getDaysPerWeek = function () { return 7; };
                /**
                 * @return {?}
                 */
                NgbCalendarGregorian.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
                /**
                 * @return {?}
                 */
                NgbCalendarGregorian.prototype.getWeeksPerMonth = function () { return 6; };
                /**
                 * @param {?} date
                 * @param {?=} period
                 * @param {?=} number
                 * @return {?}
                 */
                NgbCalendarGregorian.prototype.getNext = function (date, period, number) {
                    if (period === void 0) { period = 'd'; }
                    if (number === void 0) { number = 1; }
                    /** @type {?} */
                    var jsDate = toJSDate(date);
                    /** @type {?} */
                    var checkMonth = true;
                    /** @type {?} */
                    var expectedMonth = jsDate.getMonth();
                    switch (period) {
                        case 'y':
                            jsDate.setFullYear(jsDate.getFullYear() + number);
                            break;
                        case 'm':
                            expectedMonth += number;
                            jsDate.setMonth(expectedMonth);
                            expectedMonth = expectedMonth % 12;
                            if (expectedMonth < 0) {
                                expectedMonth = expectedMonth + 12;
                            }
                            break;
                        case 'd':
                            jsDate.setDate(jsDate.getDate() + number);
                            checkMonth = false;
                            break;
                        default:
                            return date;
                    }
                    if (checkMonth && jsDate.getMonth() !== expectedMonth) {
                        // this means the destination month has less days than the initial month
                        // let's go back to the end of the previous month:
                        jsDate.setDate(0);
                    }
                    return fromJSDate(jsDate);
                };
                /**
                 * @param {?} date
                 * @param {?=} period
                 * @param {?=} number
                 * @return {?}
                 */
                NgbCalendarGregorian.prototype.getPrev = function (date, period, number) {
                    if (period === void 0) { period = 'd'; }
                    if (number === void 0) { number = 1; }
                    return this.getNext(date, period, -number);
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbCalendarGregorian.prototype.getWeekday = function (date) {
                    /** @type {?} */
                    var jsDate = toJSDate(date);
                    /** @type {?} */
                    var day = jsDate.getDay();
                    // in JS Date Sun=0, in ISO 8601 Sun=7
                    return day === 0 ? 7 : day;
                };
                /**
                 * @param {?} week
                 * @param {?} firstDayOfWeek
                 * @return {?}
                 */
                NgbCalendarGregorian.prototype.getWeekNumber = function (week, firstDayOfWeek) {
                    // in JS Date Sun=0, in ISO 8601 Sun=7
                    if (firstDayOfWeek === 7) {
                        firstDayOfWeek = 0;
                    }
                    /** @type {?} */
                    var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
                    /** @type {?} */
                    var date = week[thursdayIndex];
                    /** @type {?} */
                    var jsDate = toJSDate(date);
                    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
                    // Thursday
                    /** @type {?} */
                    var time = jsDate.getTime();
                    jsDate.setMonth(0); // Compare with Jan 1
                    jsDate.setDate(1);
                    return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
                };
                /**
                 * @return {?}
                 */
                NgbCalendarGregorian.prototype.getToday = function () { return fromJSDate(new Date()); };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbCalendarGregorian.prototype.isValid = function (date) {
                    if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
                        return false;
                    }
                    // year 0 doesn't exist in Gregorian calendar
                    if (date.year === 0) {
                        return false;
                    }
                    /** @type {?} */
                    var jsDate = toJSDate(date);
                    return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month &&
                        jsDate.getDate() === date.day;
                };
                return NgbCalendarGregorian;
            }(NgbCalendar));
            NgbCalendarGregorian.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} prev
             * @param {?} next
             * @return {?}
             */
            function isChangedDate(prev, next) {
                return !dateComparator(prev, next);
            }
            /**
             * @param {?} prev
             * @param {?} next
             * @return {?}
             */
            function isChangedMonth(prev, next) {
                return !prev && !next ? false : !prev || !next ? true : prev.year !== next.year || prev.month !== next.month;
            }
            /**
             * @param {?} prev
             * @param {?} next
             * @return {?}
             */
            function dateComparator(prev, next) {
                return (!prev && !next) || (!!prev && !!next && prev.equals(next));
            }
            /**
             * @param {?} minDate
             * @param {?} maxDate
             * @return {?}
             */
            function checkMinBeforeMax(minDate, maxDate) {
                if (maxDate && minDate && maxDate.before(minDate)) {
                    throw new Error("'maxDate' " + maxDate + " should be greater than 'minDate' " + minDate);
                }
            }
            /**
             * @param {?} date
             * @param {?} minDate
             * @param {?} maxDate
             * @return {?}
             */
            function checkDateInRange(date, minDate, maxDate) {
                if (date && minDate && date.before(minDate)) {
                    return minDate;
                }
                if (date && maxDate && date.after(maxDate)) {
                    return maxDate;
                }
                return date;
            }
            /**
             * @param {?} date
             * @param {?} state
             * @return {?}
             */
            function isDateSelectable(date, state) {
                var minDate = state.minDate, maxDate = state.maxDate, disabled = state.disabled, markDisabled = state.markDisabled;
                // clang-format off
                return !(!isDefined(date) ||
                    disabled ||
                    (markDisabled && markDisabled(date, { year: date.year, month: date.month })) ||
                    (minDate && date.before(minDate)) ||
                    (maxDate && date.after(maxDate)));
                // clang-format on
            }
            /**
             * @param {?} calendar
             * @param {?} date
             * @param {?} minDate
             * @param {?} maxDate
             * @return {?}
             */
            function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
                if (!date) {
                    return [];
                }
                /** @type {?} */
                var months = calendar.getMonths(date.year);
                if (minDate && date.year === minDate.year) {
                    /** @type {?} */
                    var index = months.findIndex(( /**
                     * @param {?} month
                     * @return {?}
                     */function (/**
                     * @param {?} month
                     * @return {?}
                     */ month) { return month === minDate.month; }));
                    months = months.slice(index);
                }
                if (maxDate && date.year === maxDate.year) {
                    /** @type {?} */
                    var index = months.findIndex(( /**
                     * @param {?} month
                     * @return {?}
                     */function (/**
                     * @param {?} month
                     * @return {?}
                     */ month) { return month === maxDate.month; }));
                    months = months.slice(0, index + 1);
                }
                return months;
            }
            /**
             * @param {?} date
             * @param {?} minDate
             * @param {?} maxDate
             * @return {?}
             */
            function generateSelectBoxYears(date, minDate, maxDate) {
                if (!date) {
                    return [];
                }
                /** @type {?} */
                var start = minDate ? Math.max(minDate.year, date.year - 500) : date.year - 10;
                /** @type {?} */
                var end = maxDate ? Math.min(maxDate.year, date.year + 500) : date.year + 10;
                /** @type {?} */
                var length = end - start + 1;
                /** @type {?} */
                var numbers = Array(length);
                for (var i = 0; i < length; i++) {
                    numbers[i] = start + i;
                }
                return numbers;
            }
            /**
             * @param {?} calendar
             * @param {?} date
             * @param {?} maxDate
             * @return {?}
             */
            function nextMonthDisabled(calendar, date, maxDate) {
                /** @type {?} */
                var nextDate = Object.assign(calendar.getNext(date, 'm'), { day: 1 });
                return maxDate && nextDate.after(maxDate);
            }
            /**
             * @param {?} calendar
             * @param {?} date
             * @param {?} minDate
             * @return {?}
             */
            function prevMonthDisabled(calendar, date, minDate) {
                /** @type {?} */
                var prevDate = Object.assign(calendar.getPrev(date, 'm'), { day: 1 });
                return minDate && (prevDate.year === minDate.year && prevDate.month < minDate.month ||
                    prevDate.year < minDate.year && minDate.month === 1);
            }
            /**
             * @param {?} calendar
             * @param {?} date
             * @param {?} state
             * @param {?} i18n
             * @param {?} force
             * @return {?}
             */
            function buildMonths(calendar, date, state, i18n, force) {
                var displayMonths = state.displayMonths, months = state.months;
                // move old months to a temporary array
                /** @type {?} */
                var monthsToReuse = months.splice(0, months.length);
                // generate new first dates, nullify or reuse months
                /** @type {?} */
                var firstDates = Array.from({ length: displayMonths }, ( /**
                 * @param {?} _
                 * @param {?} i
                 * @return {?}
                 */function (_, i) {
                    /** @type {?} */
                    var firstDate = Object.assign(calendar.getNext(date, 'm', i), { day: 1 });
                    months[i] = null;
                    if (!force) {
                        /** @type {?} */
                        var reusedIndex = monthsToReuse.findIndex(( /**
                         * @param {?} month
                         * @return {?}
                         */function (/**
                         * @param {?} month
                         * @return {?}
                         */ month) { return month.firstDate.equals(firstDate); }));
                        // move reused month back to months
                        if (reusedIndex !== -1) {
                            months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
                        }
                    }
                    return firstDate;
                }));
                // rebuild nullified months
                firstDates.forEach(( /**
                 * @param {?} firstDate
                 * @param {?} i
                 * @return {?}
                 */function (firstDate, i) {
                    if (months[i] === null) {
                        months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() || ( /** @type {?} */({})));
                    }
                }));
                return months;
            }
            /**
             * @param {?} calendar
             * @param {?} date
             * @param {?} state
             * @param {?} i18n
             * @param {?=} month
             * @return {?}
             */
            function buildMonth(calendar, date, state, i18n, month) {
                if (month === void 0) { month = ( /** @type {?} */({})); }
                var dayTemplateData = state.dayTemplateData, minDate = state.minDate, maxDate = state.maxDate, firstDayOfWeek = state.firstDayOfWeek, markDisabled = state.markDisabled, outsideDays = state.outsideDays;
                /** @type {?} */
                var calendarToday = calendar.getToday();
                month.firstDate = null;
                month.lastDate = null;
                month.number = date.month;
                month.year = date.year;
                month.weeks = month.weeks || [];
                month.weekdays = month.weekdays || [];
                date = getFirstViewDate(calendar, date, firstDayOfWeek);
                // month has weeks
                for (var week = 0; week < calendar.getWeeksPerMonth(); week++) {
                    /** @type {?} */
                    var weekObject = month.weeks[week];
                    if (!weekObject) {
                        weekObject = month.weeks[week] = { number: 0, days: [], collapsed: true };
                    }
                    /** @type {?} */
                    var days = weekObject.days;
                    // week has days
                    for (var day = 0; day < calendar.getDaysPerWeek(); day++) {
                        if (week === 0) {
                            month.weekdays[day] = calendar.getWeekday(date);
                        }
                        /** @type {?} */
                        var newDate = new NgbDate(date.year, date.month, date.day);
                        /** @type {?} */
                        var nextDate = calendar.getNext(newDate);
                        /** @type {?} */
                        var ariaLabel = i18n.getDayAriaLabel(newDate);
                        // marking date as disabled
                        /** @type {?} */
                        var disabled = !!((minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate)));
                        if (!disabled && markDisabled) {
                            disabled = markDisabled(newDate, { month: month.number, year: month.year });
                        }
                        // today
                        /** @type {?} */
                        var today = newDate.equals(calendarToday);
                        // adding user-provided data to the context
                        /** @type {?} */
                        var contextUserData = dayTemplateData ? dayTemplateData(newDate, { month: month.number, year: month.year }) : undefined;
                        // saving first date of the month
                        if (month.firstDate === null && newDate.month === month.number) {
                            month.firstDate = newDate;
                        }
                        // saving last date of the month
                        if (newDate.month === month.number && nextDate.month !== month.number) {
                            month.lastDate = newDate;
                        }
                        /** @type {?} */
                        var dayObject = days[day];
                        if (!dayObject) {
                            dayObject = days[day] = ( /** @type {?} */({}));
                        }
                        dayObject.date = newDate;
                        dayObject.context = Object.assign(dayObject.context || {}, {
                            $implicit: newDate,
                            date: newDate,
                            data: contextUserData,
                            currentMonth: month.number, disabled: disabled,
                            focused: false,
                            selected: false, today: today
                        });
                        dayObject.tabindex = -1;
                        dayObject.ariaLabel = ariaLabel;
                        dayObject.hidden = false;
                        date = nextDate;
                    }
                    weekObject.number = calendar.getWeekNumber(days.map(( /**
                     * @param {?} day
                     * @return {?}
                     */function (/**
                     * @param {?} day
                     * @return {?}
                     */ day) { return day.date; })), firstDayOfWeek);
                    // marking week as collapsed
                    weekObject.collapsed = outsideDays === 'collapsed' && days[0].date.month !== month.number &&
                        days[days.length - 1].date.month !== month.number;
                }
                return month;
            }
            /**
             * @param {?} calendar
             * @param {?} date
             * @param {?} firstDayOfWeek
             * @return {?}
             */
            function getFirstViewDate(calendar, date, firstDayOfWeek) {
                /** @type {?} */
                var daysPerWeek = calendar.getDaysPerWeek();
                /** @type {?} */
                var firstMonthDate = new NgbDate(date.year, date.month, 1);
                /** @type {?} */
                var dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
                return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} locale
             * @return {?}
             */
            function NGB_DATEPICKER_18N_FACTORY(locale) {
                return new NgbDatepickerI18nDefault(locale);
            }
            /**
             * A service supplying i18n data to the datepicker component.
             *
             * The default implementation of this service uses the Angular locale and registered locale data for
             * weekdays and month names (as explained in the Angular i18n guide).
             *
             * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
             * numerals. For other static labels the datepicker uses the default Angular i18n.
             *
             * See the [i18n demo](#/components/datepicker/examples#i18n) and
             * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
             * a custom provider for i18n.
             * @abstract
             */
            var NgbDatepickerI18n = /** @class */ (function () {
                function NgbDatepickerI18n() {
                }
                /**
                 * Returns the textual representation of a day that is rendered in a day cell.
                 *
                 * \@since 3.0.0
                 * @param {?} date
                 * @return {?}
                 */
                NgbDatepickerI18n.prototype.getDayNumerals = function (date) { return "" + date.day; };
                /**
                 * Returns the textual representation of a week number rendered by datepicker.
                 *
                 * \@since 3.0.0
                 * @param {?} weekNumber
                 * @return {?}
                 */
                NgbDatepickerI18n.prototype.getWeekNumerals = function (weekNumber) { return "" + weekNumber; };
                /**
                 * Returns the textual representation of a year that is rendered in the datepicker year select box.
                 *
                 * \@since 3.0.0
                 * @param {?} year
                 * @return {?}
                 */
                NgbDatepickerI18n.prototype.getYearNumerals = function (year) { return "" + year; };
                return NgbDatepickerI18n;
            }());
            NgbDatepickerI18n.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_18N_FACTORY, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]] },] }
            ];
            /** @nocollapse */ NgbDatepickerI18n.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbDatepickerI18n_Factory() { return NGB_DATEPICKER_18N_FACTORY(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); }, token: NgbDatepickerI18n, providedIn: "root" });
            var NgbDatepickerI18nDefault = /** @class */ (function (_super) {
                __extends(NgbDatepickerI18nDefault, _super);
                /**
                 * @param {?} _locale
                 */
                function NgbDatepickerI18nDefault(_locale) {
                    var _this = _super.call(this) || this;
                    _this._locale = _locale;
                    /** @type {?} */
                    var weekdaysStartingOnSunday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleDayNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Short);
                    _this._weekdaysShort = weekdaysStartingOnSunday.map(( /**
                     * @param {?} day
                     * @param {?} index
                     * @return {?}
                     */function (day, index) { return weekdaysStartingOnSunday[(index + 1) % 7]; }));
                    _this._monthsShort = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Abbreviated);
                    _this._monthsFull = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Wide);
                    return _this;
                }
                /**
                 * @param {?} weekday
                 * @return {?}
                 */
                NgbDatepickerI18nDefault.prototype.getWeekdayShortName = function (weekday) { return this._weekdaysShort[weekday - 1]; };
                /**
                 * @param {?} month
                 * @return {?}
                 */
                NgbDatepickerI18nDefault.prototype.getMonthShortName = function (month) { return this._monthsShort[month - 1]; };
                /**
                 * @param {?} month
                 * @return {?}
                 */
                NgbDatepickerI18nDefault.prototype.getMonthFullName = function (month) { return this._monthsFull[month - 1]; };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbDatepickerI18nDefault.prototype.getDayAriaLabel = function (date) {
                    /** @type {?} */
                    var jsDate = new Date(date.year, date.month - 1, date.day);
                    return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(jsDate, 'fullDate', this._locale);
                };
                return NgbDatepickerI18nDefault;
            }(NgbDatepickerI18n));
            NgbDatepickerI18nDefault.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            NgbDatepickerI18nDefault.ctorParameters = function () { return [
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbDatepickerService = /** @class */ (function () {
                /**
                 * @param {?} _calendar
                 * @param {?} _i18n
                 */
                function NgbDatepickerService(_calendar, _i18n) {
                    this._calendar = _calendar;
                    this._i18n = _i18n;
                    this._model$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this._select$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this._state = {
                        disabled: false,
                        displayMonths: 1,
                        firstDayOfWeek: 1,
                        focusVisible: false,
                        months: [],
                        navigation: 'select',
                        outsideDays: 'visible',
                        prevDisabled: false,
                        nextDisabled: false,
                        selectBoxes: { years: [], months: [] },
                        selectedDate: null
                    };
                }
                Object.defineProperty(NgbDatepickerService.prototype, "model$", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._model$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                         * @param {?} model
                         * @return {?}
                         */function (/**
                         * @param {?} model
                         * @return {?}
                         */ model) { return model.months.length > 0; })));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbDatepickerService.prototype, "select$", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._select$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                         * @param {?} date
                         * @return {?}
                         */function (/**
                         * @param {?} date
                         * @return {?}
                         */ date) { return date !== null; })));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbDatepickerService.prototype, "dayTemplateData", {
                    /**
                     * @param {?} dayTemplateData
                     * @return {?}
                     */
                    set: function (dayTemplateData) {
                        if (this._state.dayTemplateData !== dayTemplateData) {
                            this._nextState({ dayTemplateData: dayTemplateData });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbDatepickerService.prototype, "disabled", {
                    /**
                     * @param {?} disabled
                     * @return {?}
                     */
                    set: function (disabled) {
                        if (this._state.disabled !== disabled) {
                            this._nextState({ disabled: disabled });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbDatepickerService.prototype, "displayMonths", {
                    /**
                     * @param {?} displayMonths
                     * @return {?}
                     */
                    set: function (displayMonths) {
                        displayMonths = toInteger(displayMonths);
                        if (isInteger(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
                            this._nextState({ displayMonths: displayMonths });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbDatepickerService.prototype, "firstDayOfWeek", {
                    /**
                     * @param {?} firstDayOfWeek
                     * @return {?}
                     */
                    set: function (firstDayOfWeek) {
                        firstDayOfWeek = toInteger(firstDayOfWeek);
                        if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
                            this._nextState({ firstDayOfWeek: firstDayOfWeek });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbDatepickerService.prototype, "focusVisible", {
                    /**
                     * @param {?} focusVisible
                     * @return {?}
                     */
                    set: function (focusVisible) {
                        if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
                            this._nextState({ focusVisible: focusVisible });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbDatepickerService.prototype, "maxDate", {
                    /**
                     * @param {?} date
                     * @return {?}
                     */
                    set: function (date) {
                        /** @type {?} */
                        var maxDate = this.toValidDate(date, null);
                        if (isChangedDate(this._state.maxDate, maxDate)) {
                            this._nextState({ maxDate: maxDate });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbDatepickerService.prototype, "markDisabled", {
                    /**
                     * @param {?} markDisabled
                     * @return {?}
                     */
                    set: function (markDisabled) {
                        if (this._state.markDisabled !== markDisabled) {
                            this._nextState({ markDisabled: markDisabled });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbDatepickerService.prototype, "minDate", {
                    /**
                     * @param {?} date
                     * @return {?}
                     */
                    set: function (date) {
                        /** @type {?} */
                        var minDate = this.toValidDate(date, null);
                        if (isChangedDate(this._state.minDate, minDate)) {
                            this._nextState({ minDate: minDate });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbDatepickerService.prototype, "navigation", {
                    /**
                     * @param {?} navigation
                     * @return {?}
                     */
                    set: function (navigation) {
                        if (this._state.navigation !== navigation) {
                            this._nextState({ navigation: navigation });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbDatepickerService.prototype, "outsideDays", {
                    /**
                     * @param {?} outsideDays
                     * @return {?}
                     */
                    set: function (outsideDays) {
                        if (this._state.outsideDays !== outsideDays) {
                            this._nextState({ outsideDays: outsideDays });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbDatepickerService.prototype.focus = function (date) {
                    if (!this._state.disabled && this._calendar.isValid(date) && isChangedDate(this._state.focusDate, date)) {
                        this._nextState({ focusDate: date });
                    }
                };
                /**
                 * @param {?=} period
                 * @param {?=} number
                 * @return {?}
                 */
                NgbDatepickerService.prototype.focusMove = function (period, number) {
                    this.focus(this._calendar.getNext(this._state.focusDate, period, number));
                };
                /**
                 * @return {?}
                 */
                NgbDatepickerService.prototype.focusSelect = function () {
                    if (isDateSelectable(this._state.focusDate, this._state)) {
                        this.select(this._state.focusDate, { emitEvent: true });
                    }
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbDatepickerService.prototype.open = function (date) {
                    /** @type {?} */
                    var firstDate = this.toValidDate(date, this._calendar.getToday());
                    if (!this._state.disabled && (!this._state.firstDate || isChangedMonth(this._state.firstDate, date))) {
                        this._nextState({ firstDate: firstDate });
                    }
                };
                /**
                 * @param {?} date
                 * @param {?=} options
                 * @return {?}
                 */
                NgbDatepickerService.prototype.select = function (date, options) {
                    if (options === void 0) { options = {}; }
                    /** @type {?} */
                    var selectedDate = this.toValidDate(date, null);
                    if (!this._state.disabled) {
                        if (isChangedDate(this._state.selectedDate, selectedDate)) {
                            this._nextState({ selectedDate: selectedDate });
                        }
                        if (options.emitEvent && isDateSelectable(selectedDate, this._state)) {
                            this._select$.next(selectedDate);
                        }
                    }
                };
                /**
                 * @param {?} date
                 * @param {?=} defaultValue
                 * @return {?}
                 */
                NgbDatepickerService.prototype.toValidDate = function (date, defaultValue) {
                    /** @type {?} */
                    var ngbDate = NgbDate.from(date);
                    if (defaultValue === undefined) {
                        defaultValue = this._calendar.getToday();
                    }
                    return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
                };
                /**
                 * @private
                 * @param {?} patch
                 * @return {?}
                 */
                NgbDatepickerService.prototype._nextState = function (patch) {
                    /** @type {?} */
                    var newState = this._updateState(patch);
                    this._patchContexts(newState);
                    this._state = newState;
                    this._model$.next(this._state);
                };
                /**
                 * @private
                 * @param {?} state
                 * @return {?}
                 */
                NgbDatepickerService.prototype._patchContexts = function (state) {
                    var months = state.months, displayMonths = state.displayMonths, selectedDate = state.selectedDate, focusDate = state.focusDate, focusVisible = state.focusVisible, disabled = state.disabled, outsideDays = state.outsideDays;
                    state.months.forEach(( /**
                     * @param {?} month
                     * @return {?}
                     */function (/**
                     * @param {?} month
                     * @return {?}
                     */ month) {
                        month.weeks.forEach(( /**
                         * @param {?} week
                         * @return {?}
                         */function (/**
                         * @param {?} week
                         * @return {?}
                         */ week) {
                            week.days.forEach(( /**
                             * @param {?} day
                             * @return {?}
                             */function (/**
                             * @param {?} day
                             * @return {?}
                             */ day) {
                                // patch focus flag
                                if (focusDate) {
                                    day.context.focused = focusDate.equals(day.date) && focusVisible;
                                }
                                // calculating tabindex
                                day.tabindex = !disabled && day.date.equals(focusDate) && focusDate.month === month.number ? 0 : -1;
                                // override context disabled
                                if (disabled === true) {
                                    day.context.disabled = true;
                                }
                                // patch selection flag
                                if (selectedDate !== undefined) {
                                    day.context.selected = selectedDate !== null && selectedDate.equals(day.date);
                                }
                                // visibility
                                if (month.number !== day.date.month) {
                                    day.hidden = outsideDays === 'hidden' || outsideDays === 'collapsed' ||
                                        (displayMonths > 1 && day.date.after(months[0].firstDate) &&
                                            day.date.before(months[displayMonths - 1].lastDate));
                                }
                            }));
                        }));
                    }));
                };
                /**
                 * @private
                 * @param {?} patch
                 * @return {?}
                 */
                NgbDatepickerService.prototype._updateState = function (patch) {
                    // patching fields
                    /** @type {?} */
                    var state = Object.assign({}, this._state, patch);
                    /** @type {?} */
                    var startDate = state.firstDate;
                    // min/max dates changed
                    if ('minDate' in patch || 'maxDate' in patch) {
                        checkMinBeforeMax(state.minDate, state.maxDate);
                        state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
                        state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
                        startDate = state.focusDate;
                    }
                    // disabled
                    if ('disabled' in patch) {
                        state.focusVisible = false;
                    }
                    // initial rebuild via 'select()'
                    if ('selectedDate' in patch && this._state.months.length === 0) {
                        startDate = state.selectedDate;
                    }
                    // terminate early if only focus visibility was changed
                    if ('focusVisible' in patch) {
                        return state;
                    }
                    // focus date changed
                    if ('focusDate' in patch) {
                        state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
                        startDate = state.focusDate;
                        // nothing to rebuild if only focus changed and it is still visible
                        if (state.months.length !== 0 && !state.focusDate.before(state.firstDate) &&
                            !state.focusDate.after(state.lastDate)) {
                            return state;
                        }
                    }
                    // first date changed
                    if ('firstDate' in patch) {
                        state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
                        startDate = state.firstDate;
                    }
                    // rebuilding months
                    if (startDate) {
                        /** @type {?} */
                        var forceRebuild = 'dayTemplateData' in patch || 'firstDayOfWeek' in patch || 'markDisabled' in patch ||
                            'minDate' in patch || 'maxDate' in patch || 'disabled' in patch || 'outsideDays' in patch;
                        /** @type {?} */
                        var months = buildMonths(this._calendar, startDate, state, this._i18n, forceRebuild);
                        // updating months and boundary dates
                        state.months = months;
                        state.firstDate = months.length > 0 ? months[0].firstDate : undefined;
                        state.lastDate = months.length > 0 ? months[months.length - 1].lastDate : undefined;
                        // reset selected date if 'markDisabled' returns true
                        if ('selectedDate' in patch && !isDateSelectable(state.selectedDate, state)) {
                            state.selectedDate = null;
                        }
                        // adjusting focus after months were built
                        if ('firstDate' in patch) {
                            if (state.focusDate === undefined || state.focusDate.before(state.firstDate) ||
                                state.focusDate.after(state.lastDate)) {
                                state.focusDate = startDate;
                            }
                        }
                        // adjusting months/years for the select box navigation
                        /** @type {?} */
                        var yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
                        /** @type {?} */
                        var monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
                        if (state.navigation === 'select') {
                            // years ->  boundaries (min/max were changed)
                            if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
                                state.selectBoxes.years = generateSelectBoxYears(state.firstDate, state.minDate, state.maxDate);
                            }
                            // months -> when current year or boundaries change
                            if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
                                state.selectBoxes.months =
                                    generateSelectBoxMonths(this._calendar, state.firstDate, state.minDate, state.maxDate);
                            }
                        }
                        else {
                            state.selectBoxes = { years: [], months: [] };
                        }
                        // updating navigation arrows -> boundaries change (min/max) or month/year changes
                        if ((state.navigation === 'arrows' || state.navigation === 'select') &&
                            (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
                            state.prevDisabled = state.disabled || prevMonthDisabled(this._calendar, state.firstDate, state.minDate);
                            state.nextDisabled = state.disabled || nextMonthDisabled(this._calendar, state.lastDate, state.maxDate);
                        }
                    }
                    return state;
                };
                return NgbDatepickerService;
            }());
            NgbDatepickerService.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            NgbDatepickerService.ctorParameters = function () { return [
                { type: NgbCalendar },
                { type: NgbDatepickerI18n }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @enum {number} */
            var Key = {
                Tab: 9,
                Enter: 13,
                Escape: 27,
                Space: 32,
                PageUp: 33,
                PageDown: 34,
                End: 35,
                Home: 36,
                ArrowLeft: 37,
                ArrowUp: 38,
                ArrowRight: 39,
                ArrowDown: 40,
            };
            Key[Key.Tab] = 'Tab';
            Key[Key.Enter] = 'Enter';
            Key[Key.Escape] = 'Escape';
            Key[Key.Space] = 'Space';
            Key[Key.PageUp] = 'PageUp';
            Key[Key.PageDown] = 'PageDown';
            Key[Key.End] = 'End';
            Key[Key.Home] = 'Home';
            Key[Key.ArrowLeft] = 'ArrowLeft';
            Key[Key.ArrowUp] = 'ArrowUp';
            Key[Key.ArrowRight] = 'ArrowRight';
            Key[Key.ArrowDown] = 'ArrowDown';
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbDatepickerKeyMapService = /** @class */ (function () {
                /**
                 * @param {?} _service
                 * @param {?} _calendar
                 */
                function NgbDatepickerKeyMapService(_service, _calendar) {
                    var _this = this;
                    this._service = _service;
                    this._calendar = _calendar;
                    _service.model$.subscribe(( /**
                     * @param {?} model
                     * @return {?}
                     */function (/**
                     * @param {?} model
                     * @return {?}
                     */ model) {
                        _this._minDate = model.minDate;
                        _this._maxDate = model.maxDate;
                        _this._firstViewDate = model.firstDate;
                        _this._lastViewDate = model.lastDate;
                    }));
                }
                /**
                 * @param {?} event
                 * @return {?}
                 */
                NgbDatepickerKeyMapService.prototype.processKey = function (event) {
                    // tslint:disable-next-line:deprecation
                    switch (event.which) {
                        case Key.PageUp:
                            this._service.focusMove(event.shiftKey ? 'y' : 'm', -1);
                            break;
                        case Key.PageDown:
                            this._service.focusMove(event.shiftKey ? 'y' : 'm', 1);
                            break;
                        case Key.End:
                            this._service.focus(event.shiftKey ? this._maxDate : this._lastViewDate);
                            break;
                        case Key.Home:
                            this._service.focus(event.shiftKey ? this._minDate : this._firstViewDate);
                            break;
                        case Key.ArrowLeft:
                            this._service.focusMove('d', -1);
                            break;
                        case Key.ArrowUp:
                            this._service.focusMove('d', -this._calendar.getDaysPerWeek());
                            break;
                        case Key.ArrowRight:
                            this._service.focusMove('d', 1);
                            break;
                        case Key.ArrowDown:
                            this._service.focusMove('d', this._calendar.getDaysPerWeek());
                            break;
                        case Key.Enter:
                        case Key.Space:
                            this._service.focusSelect();
                            break;
                        default:
                            return;
                    }
                    // note 'return' in default case
                    event.preventDefault();
                    event.stopPropagation();
                };
                return NgbDatepickerKeyMapService;
            }());
            NgbDatepickerKeyMapService.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            NgbDatepickerKeyMapService.ctorParameters = function () { return [
                { type: NgbDatepickerService },
                { type: NgbCalendar }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @enum {number} */
            var NavigationEvent = {
                PREV: 0,
                NEXT: 1,
            };
            NavigationEvent[NavigationEvent.PREV] = 'PREV';
            NavigationEvent[NavigationEvent.NEXT] = 'NEXT';
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [`NgbDatepicker`](#/components/datepicker/api#NgbDatepicker) component.
             *
             * You can inject this service, typically in your root component, and customize the values of its properties in
             * order to provide default values for all the datepickers used in the application.
             */
            var NgbDatepickerConfig = /** @class */ (function () {
                function NgbDatepickerConfig() {
                    this.displayMonths = 1;
                    this.firstDayOfWeek = 1;
                    this.navigation = 'select';
                    this.outsideDays = 'visible';
                    this.showWeekdays = true;
                    this.showWeekNumbers = false;
                }
                return NgbDatepickerConfig;
            }());
            NgbDatepickerConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbDatepickerConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbDatepickerConfig_Factory() { return new NgbDatepickerConfig(); }, token: NgbDatepickerConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @return {?}
             */
            function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
                return new NgbDateStructAdapter();
            }
            /**
             * An abstract service that does the conversion between the internal datepicker `NgbDateStruct` model and
             * any provided user date model `D`, ex. a string, a native date, etc.
             *
             * The adapter is used **only** for conversion when binding datepicker to a form control,
             * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
             *
             * The default datepicker implementation assumes we use `NgbDateStruct` as a user model.
             *
             * See the [date format overview](#/components/datepicker/overview#date-model) for more details
             * and the [custom adapter demo](#/components/datepicker/examples#adapter) for an example.
             * @abstract
             * @template D
             */
            var NgbDateAdapter = /** @class */ (function () {
                function NgbDateAdapter() {
                }
                return NgbDateAdapter;
            }());
            NgbDateAdapter.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY },] }
            ];
            /** @nocollapse */ NgbDateAdapter.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY, token: NgbDateAdapter, providedIn: "root" });
            var NgbDateStructAdapter = /** @class */ (function (_super) {
                __extends(NgbDateStructAdapter, _super);
                function NgbDateStructAdapter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Converts a NgbDateStruct value into NgbDateStruct value
                 * @param {?} date
                 * @return {?}
                 */
                NgbDateStructAdapter.prototype.fromModel = function (date) {
                    return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
                        { year: date.year, month: date.month, day: date.day } :
                        null;
                };
                /**
                 * Converts a NgbDateStruct value into NgbDateStruct value
                 * @param {?} date
                 * @return {?}
                 */
                NgbDateStructAdapter.prototype.toModel = function (date) {
                    return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
                        { year: date.year, month: date.month, day: date.day } :
                        null;
                };
                return NgbDateStructAdapter;
            }(NgbDateAdapter));
            NgbDateStructAdapter.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NGB_DATEPICKER_VALUE_ACCESSOR = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgbDatepicker; })),
                multi: true
            };
            /**
             * A highly configurable component that helps you with selecting calendar dates.
             *
             * `NgbDatepicker` is meant to be displayed inline on a page or put inside a popup.
             */
            var NgbDatepicker = /** @class */ (function () {
                /**
                 * @param {?} _keyMapService
                 * @param {?} _service
                 * @param {?} _calendar
                 * @param {?} i18n
                 * @param {?} config
                 * @param {?} _cd
                 * @param {?} _elementRef
                 * @param {?} _ngbDateAdapter
                 * @param {?} _ngZone
                 */
                function NgbDatepicker(_keyMapService, _service, _calendar, i18n, config, _cd, _elementRef, _ngbDateAdapter, _ngZone) {
                    var _this = this;
                    this._keyMapService = _keyMapService;
                    this._service = _service;
                    this._calendar = _calendar;
                    this.i18n = i18n;
                    this._cd = _cd;
                    this._elementRef = _elementRef;
                    this._ngbDateAdapter = _ngbDateAdapter;
                    this._ngZone = _ngZone;
                    this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    /**
                     * An event emitted right before the navigation happens and displayed month changes.
                     *
                     * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
                     */
                    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * An event emitted when user selects a date using keyboard or mouse.
                     *
                     * The payload of the event is currently selected `NgbDate`.
                     */
                    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate',
                        'maxDate', 'navigation', 'outsideDays', 'showWeekdays', 'showWeekNumbers', 'startDate']
                        .forEach(( /**
                 * @param {?} input
                 * @return {?}
                 */function (/**
                 * @param {?} input
                 * @return {?}
                 */ input) { return _this[input] = config[input]; }));
                    _service.select$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroyed$)).subscribe(( /**
                     * @param {?} date
                     * @return {?}
                     */function (/**
                     * @param {?} date
                     * @return {?}
                     */ date) { _this.select.emit(date); }));
                    _service.model$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroyed$)).subscribe(( /**
                     * @param {?} model
                     * @return {?}
                     */function (/**
                     * @param {?} model
                     * @return {?}
                     */ model) {
                        /** @type {?} */
                        var newDate = model.firstDate;
                        /** @type {?} */
                        var oldDate = _this.model ? _this.model.firstDate : null;
                        /** @type {?} */
                        var navigationPrevented = false;
                        // emitting navigation event if the first month changes
                        if (!newDate.equals(oldDate)) {
                            _this.navigate.emit({
                                current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                                next: { year: newDate.year, month: newDate.month },
                                preventDefault: ( /**
                                 * @return {?}
                                 */function () { return navigationPrevented = true; })
                            });
                            // can't prevent the very first navigation
                            if (navigationPrevented && oldDate !== null) {
                                _this._service.open(oldDate);
                                return;
                            }
                        }
                        /** @type {?} */
                        var newSelectedDate = model.selectedDate;
                        /** @type {?} */
                        var newFocusedDate = model.focusDate;
                        /** @type {?} */
                        var oldFocusedDate = _this.model ? _this.model.focusDate : null;
                        _this.model = model;
                        // handling selection change
                        if (isChangedDate(newSelectedDate, _this._controlValue)) {
                            _this._controlValue = newSelectedDate;
                            _this.onTouched();
                            _this.onChange(_this._ngbDateAdapter.toModel(newSelectedDate));
                        }
                        // handling focus change
                        if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
                            _this.focus();
                        }
                        _cd.markForCheck();
                    }));
                }
                /**
                 * @return {?}
                 */
                NgbDatepicker.prototype.focus = function () {
                    var _this = this;
                    this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var elementToFocus = _this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');
                        if (elementToFocus) {
                            elementToFocus.focus();
                        }
                    }));
                };
                /**
                 * Navigates to the provided date.
                 *
                 * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
                 * If nothing or invalid date provided calendar will open current month.
                 *
                 * Use the `[startDate]` input as an alternative.
                 * @param {?=} date
                 * @return {?}
                 */
                NgbDatepicker.prototype.navigateTo = function (date) {
                    this._service.open(NgbDate.from(date ? date.day ? ( /** @type {?} */(date)) : Object.assign({}, date, { day: 1 }) : null));
                };
                /**
                 * @return {?}
                 */
                NgbDatepicker.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this._ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var focusIns$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this._monthsEl.nativeElement, 'focusin');
                        /** @type {?} */
                        var focusOuts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this._monthsEl.nativeElement, 'focusout');
                        // we're changing 'focusVisible' only when entering or leaving months view
                        // and ignoring all focus events where both 'target' and 'related' target are day cells
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(focusIns$, focusOuts$)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                            var target = _a.target, relatedTarget = _a.relatedTarget;
                            return !(hasClassName(target, 'ngb-dp-day') && hasClassName(relatedTarget, 'ngb-dp-day'));
                        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this._destroyed$))
                            .subscribe(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                            var type = _a.type;
                            return _this._ngZone.run(( /**
                             * @return {?}
                             */function () { return _this._service.focusVisible = type === 'focusin'; }));
                        }));
                    }));
                };
                /**
                 * @return {?}
                 */
                NgbDatepicker.prototype.ngOnDestroy = function () { this._destroyed$.next(); };
                /**
                 * @return {?}
                 */
                NgbDatepicker.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.model === undefined) {
                        ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
                            'outsideDays']
                            .forEach(( /**
                     * @param {?} input
                     * @return {?}
                     */function (/**
                     * @param {?} input
                     * @return {?}
                     */ input) { return _this._service[input] = _this[input]; }));
                        this.navigateTo(this.startDate);
                    }
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                NgbDatepicker.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
                        'outsideDays']
                        .filter(( /**
                 * @param {?} input
                 * @return {?}
                 */function (/**
                 * @param {?} input
                 * @return {?}
                 */ input) { return input in changes; }))
                        .forEach(( /**
                 * @param {?} input
                 * @return {?}
                 */function (/**
                 * @param {?} input
                 * @return {?}
                 */ input) { return _this._service[input] = _this[input]; }));
                    if ('startDate' in changes) {
                        var _a = changes.startDate, currentValue = _a.currentValue, previousValue = _a.previousValue;
                        if (isChangedMonth(previousValue, currentValue)) {
                            this.navigateTo(this.startDate);
                        }
                    }
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbDatepicker.prototype.onDateSelect = function (date) {
                    this._service.focus(date);
                    this._service.select(date, { emitEvent: true });
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                NgbDatepicker.prototype.onKeyDown = function (event) { this._keyMapService.processKey(event); };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbDatepicker.prototype.onNavigateDateSelect = function (date) { this._service.open(date); };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                NgbDatepicker.prototype.onNavigateEvent = function (event) {
                    switch (event) {
                        case NavigationEvent.PREV:
                            this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                            break;
                        case NavigationEvent.NEXT:
                            this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
                            break;
                    }
                };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbDatepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbDatepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * @param {?} isDisabled
                 * @return {?}
                 */
                NgbDatepicker.prototype.setDisabledState = function (isDisabled) { this._service.disabled = isDisabled; };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                NgbDatepicker.prototype.writeValue = function (value) {
                    this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));
                    this._service.select(this._controlValue);
                };
                return NgbDatepicker;
            }());
            NgbDatepicker.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            exportAs: 'ngbDatepicker',
                            selector: 'ngb-datepicker',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            template: "\n    <ng-template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\n      <div ngbDatepickerDayView\n        [date]=\"date\"\n        [currentMonth]=\"currentMonth\"\n        [selected]=\"selected\"\n        [disabled]=\"disabled\"\n        [focused]=\"focused\">\n      </div>\n    </ng-template>\n\n    <div class=\"ngb-dp-header\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"model.firstDate\"\n        [months]=\"model.months\"\n        [disabled]=\"model.disabled\"\n        [showSelect]=\"model.navigation === 'select'\"\n        [prevDisabled]=\"model.prevDisabled\"\n        [nextDisabled]=\"model.nextDisabled\"\n        [selectBoxes]=\"model.selectBoxes\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div #months class=\"ngb-dp-months\" (keydown)=\"onKeyDown($event)\">\n      <ng-template ngFor let-month [ngForOf]=\"model.months\" let-i=\"index\">\n        <div class=\"ngb-dp-month\">\n          <div *ngIf=\"navigation === 'none' || (displayMonths > 1 && navigation === 'select')\"\n                class=\"ngb-dp-month-name\">\n            {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </ng-template>\n    </div>\n\n    <ng-template [ngTemplateOutlet]=\"footerTemplate\"></ng-template>\n  ",
                            providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NgbDatepickerService, NgbDatepickerKeyMapService],
                            styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month-view{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-months{display:-ms-flexbox;display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}"]
                        }] }
            ];
            /** @nocollapse */
            NgbDatepicker.ctorParameters = function () { return [
                { type: NgbDatepickerKeyMapService },
                { type: NgbDatepickerService },
                { type: NgbCalendar },
                { type: NgbDatepickerI18n },
                { type: NgbDatepickerConfig },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: NgbDateAdapter },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
            ]; };
            NgbDatepicker.propDecorators = {
                _monthsEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['months', { static: true },] }],
                dayTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                dayTemplateData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                displayMonths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                firstDayOfWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                markDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                navigation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                outsideDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                showWeekdays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                showWeekNumbers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbDatepickerMonthView = /** @class */ (function () {
                /**
                 * @param {?} i18n
                 */
                function NgbDatepickerMonthView(i18n) {
                    this.i18n = i18n;
                    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                }
                /**
                 * @param {?} day
                 * @return {?}
                 */
                NgbDatepickerMonthView.prototype.doSelect = function (day) {
                    if (!day.context.disabled && !day.hidden) {
                        this.select.emit(day.date);
                    }
                };
                return NgbDatepickerMonthView;
            }());
            NgbDatepickerMonthView.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-datepicker-month-view',
                            host: { 'role': 'grid' },
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week ngb-dp-weekdays\" role=\"row\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday ngb-dp-showweek\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small\" role=\"columnheader\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!week.collapsed\" class=\"ngb-dp-week\" role=\"row\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-muted\">{{ i18n.getWeekNumerals(week.number) }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" role=\"gridcell\"\n          [class.disabled]=\"day.context.disabled\"\n          [tabindex]=\"day.tabindex\"\n          [class.hidden]=\"day.hidden\"\n          [class.ngb-dp-today]=\"day.context.today\"\n          [attr.aria-label]=\"day.ariaLabel\">\n          <ng-template [ngIf]=\"!day.hidden\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\" [ngTemplateOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  ",
                            styles: ["ngb-datepicker-month-view{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:-ms-flexbox;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default}.ngb-dp-day[tabindex=\"0\"]{z-index:1}"]
                        }] }
            ];
            /** @nocollapse */
            NgbDatepickerMonthView.ctorParameters = function () { return [
                { type: NgbDatepickerI18n }
            ]; };
            NgbDatepickerMonthView.propDecorators = {
                dayTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                month: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                showWeekdays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                showWeekNumbers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbDatepickerNavigation = /** @class */ (function () {
                /**
                 * @param {?} i18n
                 */
                function NgbDatepickerNavigation(i18n) {
                    this.i18n = i18n;
                    this.navigation = NavigationEvent;
                    this.months = [];
                    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                }
                /**
                 * @param {?} event
                 * @return {?}
                 */
                NgbDatepickerNavigation.prototype.onClickPrev = function (event) {
                    (( /** @type {?} */(event.currentTarget))).focus();
                    this.navigate.emit(this.navigation.PREV);
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                NgbDatepickerNavigation.prototype.onClickNext = function (event) {
                    (( /** @type {?} */(event.currentTarget))).focus();
                    this.navigate.emit(this.navigation.NEXT);
                };
                return NgbDatepickerNavigation;
            }());
            NgbDatepickerNavigation.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-datepicker-navigation',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            template: "\n    <div class=\"ngb-dp-arrow\">\n      <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\" (click)=\"onClickPrev($event)\" [disabled]=\"prevDisabled\"\n              i18n-aria-label=\"@@ngb.datepicker.previous-month\" aria-label=\"Previous month\"\n              i18n-title=\"@@ngb.datepicker.previous-month\" title=\"Previous month\">\n        <span class=\"ngb-dp-navigation-chevron\"></span>\n      </button>\n    </div>\n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"ngb-dp-navigation-select\"\n      [date]=\"date\"\n      [disabled] = \"disabled\"\n      [months]=\"selectBoxes.months\"\n      [years]=\"selectBoxes.years\"\n      (select)=\"select.emit($event)\">\n    </ngb-datepicker-navigation-select>\n\n    <ng-template *ngIf=\"!showSelect\" ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i > 0\"></div>\n      <div class=\"ngb-dp-month-name\">\n        {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}\n      </div>\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i !== months.length - 1\"></div>\n    </ng-template>\n    <div class=\"ngb-dp-arrow right\">\n      <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\" (click)=\"onClickNext($event)\" [disabled]=\"nextDisabled\"\n              i18n-aria-label=\"@@ngb.datepicker.next-month\" aria-label=\"Next month\"\n              i18n-title=\"@@ngb.datepicker.next-month\" title=\"Next month\">\n        <span class=\"ngb-dp-navigation-chevron\"></span>\n      </button>\n    </div>\n    ",
                            styles: ["ngb-datepicker-navigation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.right .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{-ms-flex-pack:end;justify-content:flex-end}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:-ms-flexbox;display:flex;-ms-flex:1 1 9rem;flex:1 1 9rem}"]
                        }] }
            ];
            /** @nocollapse */
            NgbDatepickerNavigation.ctorParameters = function () { return [
                { type: NgbDatepickerI18n }
            ]; };
            NgbDatepickerNavigation.propDecorators = {
                date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                months: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                showSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                prevDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                nextDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selectBoxes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var isContainedIn = ( /**
             * @param {?} element
             * @param {?=} array
             * @return {?}
             */function (element, array) { return array ? array.some(( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) { return item.contains(element); })) : false; });
            /** @type {?} */
            var matchesSelectorIfAny = ( /**
             * @param {?} element
             * @param {?=} selector
             * @return {?}
             */function (element, selector) { return !selector || closest(element, selector) != null; });
            // we'll have to use 'touch' events instead of 'mouse' events on iOS and add a more significant delay
            // to avoid re-opening when handling (click) on a toggling element
            // TODO: use proper Angular platform detection when NgbAutoClose becomes a service and we can inject PLATFORM_ID
            /** @type {?} */
            var iOS = false;
            if (typeof navigator !== 'undefined') {
                iOS = !!navigator.userAgent && /iPad|iPhone|iPod/.test(navigator.userAgent);
            }
            /**
             * @param {?} zone
             * @param {?} document
             * @param {?} type
             * @param {?} close
             * @param {?} closed$
             * @param {?} insideElements
             * @param {?=} ignoreElements
             * @param {?=} insideSelector
             * @return {?}
             */
            function ngbAutoClose(zone, document, type, close, closed$, insideElements, ignoreElements, insideSelector) {
                // closing on ESC and outside clicks
                if (type) {
                    zone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var shouldCloseOnClick = ( /**
                         * @param {?} event
                         * @return {?}
                         */function (event) {
                            /** @type {?} */
                            var element = ( /** @type {?} */(event.target));
                            if ((event instanceof MouseEvent && event.button === 2) || isContainedIn(element, ignoreElements)) {
                                return false;
                            }
                            if (type === 'inside') {
                                return isContainedIn(element, insideElements) && matchesSelectorIfAny(element, insideSelector);
                            }
                            else if (type === 'outside') {
                                return !isContainedIn(element, insideElements);
                            }
                            else /* if (type === true) */ {
                                return matchesSelectorIfAny(element, insideSelector) || !isContainedIn(element, insideElements);
                            }
                        });
                        /** @type {?} */
                        var escapes$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'keyup')
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(closed$), 
                        // tslint:disable-next-line:deprecation
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                         * @param {?} e
                         * @return {?}
                         */function (/**
                         * @param {?} e
                         * @return {?}
                         */ e) { return e.which === Key.Escape; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                         * @param {?} e
                         * @return {?}
                         */function (/**
                         * @param {?} e
                         * @return {?}
                         */ e) { return e.preventDefault(); })));
                        // we have to pre-calculate 'shouldCloseOnClick' on 'mousedown/touchstart',
                        // because on 'mouseup/touchend' DOM nodes might be detached
                        /** @type {?} */
                        var mouseDowns$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, iOS ? 'touchstart' : 'mousedown')
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(shouldCloseOnClick), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(closed$));
                        /** @type {?} */
                        var closeableClicks$ = ( /** @type {?} */(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, iOS ? 'touchend' : 'mouseup')
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(mouseDowns$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                            var _ = _a[0], shouldClose = _a[1];
                            return shouldClose;
                        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(iOS ? 16 : 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(closed$))));
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["race"])([escapes$, closeableClicks$]).subscribe(( /**
                         * @return {?}
                         */function () { return zone.run(close); }));
                    }));
                }
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var FOCUSABLE_ELEMENTS_SELECTOR = [
                'a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])', 'select:not([disabled])',
                'textarea:not([disabled])', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'
            ].join(', ');
            /**
             * Returns first and last focusable elements inside of a given element based on specific CSS selector
             * @param {?} element
             * @return {?}
             */
            function getFocusableBoundaryElements(element) {
                /** @type {?} */
                var list = Array.from(( /** @type {?} */(element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR))))
                    .filter(( /**
             * @param {?} el
             * @return {?}
             */function (/**
             * @param {?} el
             * @return {?}
             */ el) { return el.tabIndex !== -1; }));
                return [list[0], list[list.length - 1]];
            }
            /**
             * Function that enforces browser focus to be trapped inside a DOM element.
             *
             * Works only for clicks inside the element and navigation with 'Tab', ignoring clicks outside of the element
             *
             * \@param element The element around which focus will be trapped inside
             * \@param stopFocusTrap$ The observable stream. When completed the focus trap will clean up listeners
             * and free internal resources
             * \@param refocusOnClick Put the focus back to the last focused element whenever a click occurs on element (default to
             * false)
             * @type {?}
             */
            var ngbFocusTrap = ( /**
             * @param {?} element
             * @param {?} stopFocusTrap$
             * @param {?=} refocusOnClick
             * @return {?}
             */function (element, stopFocusTrap$, refocusOnClick) {
                if (refocusOnClick === void 0) { refocusOnClick = false; }
                // last focused element
                /** @type {?} */
                var lastFocusedElement$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'focusin').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(stopFocusTrap$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                 * @param {?} e
                 * @return {?}
                 */function (/**
                 * @param {?} e
                 * @return {?}
                 */ e) { return e.target; })));
                // 'tab' / 'shift+tab' stream
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'keydown')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(stopFocusTrap$), 
                // tslint:disable:deprecation
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                 * @param {?} e
                 * @return {?}
                 */function (/**
                 * @param {?} e
                 * @return {?}
                 */ e) { return e.which === Key.Tab; })), 
                // tslint:enable:deprecation
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(lastFocusedElement$))
                    .subscribe(( /**
             * @param {?} __0
             * @return {?}
             */function (_a) {
                    var tabEvent = _a[0], focusedElement = _a[1];
                    var _b = getFocusableBoundaryElements(element), first = _b[0], last = _b[1];
                    if ((focusedElement === first || focusedElement === element) && tabEvent.shiftKey) {
                        last.focus();
                        tabEvent.preventDefault();
                    }
                    if (focusedElement === last && !tabEvent.shiftKey) {
                        first.focus();
                        tabEvent.preventDefault();
                    }
                }));
                // inside click
                if (refocusOnClick) {
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'click')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(stopFocusTrap$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(lastFocusedElement$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                 * @param {?} arr
                 * @return {?}
                 */function (/**
                 * @param {?} arr
                 * @return {?}
                 */ arr) { return ( /** @type {?} */(arr[1])); })))
                        .subscribe(( /**
                 * @param {?} lastFocusedElement
                 * @return {?}
                 */function (/**
                 * @param {?} lastFocusedElement
                 * @return {?}
                 */ lastFocusedElement) { return lastFocusedElement.focus(); }));
                }
            });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // previous version:
            // https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
            var Positioning = /** @class */ (function () {
                function Positioning() {
                }
                /**
                 * @private
                 * @param {?} element
                 * @return {?}
                 */
                Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
                /**
                 * @private
                 * @param {?} element
                 * @param {?} prop
                 * @return {?}
                 */
                Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
                /**
                 * @private
                 * @param {?} element
                 * @return {?}
                 */
                Positioning.prototype.isStaticPositioned = function (element) {
                    return (this.getStyle(element, 'position') || 'static') === 'static';
                };
                /**
                 * @private
                 * @param {?} element
                 * @return {?}
                 */
                Positioning.prototype.offsetParent = function (element) {
                    /** @type {?} */
                    var offsetParentEl = ( /** @type {?} */(element.offsetParent)) || document.documentElement;
                    while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
                        offsetParentEl = ( /** @type {?} */(offsetParentEl.offsetParent));
                    }
                    return offsetParentEl || document.documentElement;
                };
                /**
                 * @param {?} element
                 * @param {?=} round
                 * @return {?}
                 */
                Positioning.prototype.position = function (element, round) {
                    if (round === void 0) { round = true; }
                    /** @type {?} */
                    var elPosition;
                    /** @type {?} */
                    var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
                    if (this.getStyle(element, 'position') === 'fixed') {
                        elPosition = element.getBoundingClientRect();
                        elPosition = {
                            top: elPosition.top,
                            bottom: elPosition.bottom,
                            left: elPosition.left,
                            right: elPosition.right,
                            height: elPosition.height,
                            width: elPosition.width
                        };
                    }
                    else {
                        /** @type {?} */
                        var offsetParentEl = this.offsetParent(element);
                        elPosition = this.offset(element, false);
                        if (offsetParentEl !== document.documentElement) {
                            parentOffset = this.offset(offsetParentEl, false);
                        }
                        parentOffset.top += offsetParentEl.clientTop;
                        parentOffset.left += offsetParentEl.clientLeft;
                    }
                    elPosition.top -= parentOffset.top;
                    elPosition.bottom -= parentOffset.top;
                    elPosition.left -= parentOffset.left;
                    elPosition.right -= parentOffset.left;
                    if (round) {
                        elPosition.top = Math.round(elPosition.top);
                        elPosition.bottom = Math.round(elPosition.bottom);
                        elPosition.left = Math.round(elPosition.left);
                        elPosition.right = Math.round(elPosition.right);
                    }
                    return elPosition;
                };
                /**
                 * @param {?} element
                 * @param {?=} round
                 * @return {?}
                 */
                Positioning.prototype.offset = function (element, round) {
                    if (round === void 0) { round = true; }
                    /** @type {?} */
                    var elBcr = element.getBoundingClientRect();
                    /** @type {?} */
                    var viewportOffset = {
                        top: window.pageYOffset - document.documentElement.clientTop,
                        left: window.pageXOffset - document.documentElement.clientLeft
                    };
                    /** @type {?} */
                    var elOffset = {
                        height: elBcr.height || element.offsetHeight,
                        width: elBcr.width || element.offsetWidth,
                        top: elBcr.top + viewportOffset.top,
                        bottom: elBcr.bottom + viewportOffset.top,
                        left: elBcr.left + viewportOffset.left,
                        right: elBcr.right + viewportOffset.left
                    };
                    if (round) {
                        elOffset.height = Math.round(elOffset.height);
                        elOffset.width = Math.round(elOffset.width);
                        elOffset.top = Math.round(elOffset.top);
                        elOffset.bottom = Math.round(elOffset.bottom);
                        elOffset.left = Math.round(elOffset.left);
                        elOffset.right = Math.round(elOffset.right);
                    }
                    return elOffset;
                };
                /*
                    Return false if the element to position is outside the viewport
                  */
                /**
                 * @param {?} hostElement
                 * @param {?} targetElement
                 * @param {?} placement
                 * @param {?=} appendToBody
                 * @return {?}
                 */
                Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
                    var _a = placement.split('-'), _b = _a[0], placementPrimary = _b === void 0 ? 'top' : _b, _c = _a[1], placementSecondary = _c === void 0 ? 'center' : _c;
                    /** @type {?} */
                    var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
                    /** @type {?} */
                    var targetElStyles = this.getAllStyles(targetElement);
                    /** @type {?} */
                    var marginTop = parseFloat(targetElStyles.marginTop);
                    /** @type {?} */
                    var marginBottom = parseFloat(targetElStyles.marginBottom);
                    /** @type {?} */
                    var marginLeft = parseFloat(targetElStyles.marginLeft);
                    /** @type {?} */
                    var marginRight = parseFloat(targetElStyles.marginRight);
                    /** @type {?} */
                    var topPosition = 0;
                    /** @type {?} */
                    var leftPosition = 0;
                    switch (placementPrimary) {
                        case 'top':
                            topPosition = (hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom));
                            break;
                        case 'bottom':
                            topPosition = (hostElPosition.top + hostElPosition.height);
                            break;
                        case 'left':
                            leftPosition = (hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight));
                            break;
                        case 'right':
                            leftPosition = (hostElPosition.left + hostElPosition.width);
                            break;
                    }
                    switch (placementSecondary) {
                        case 'top':
                            topPosition = hostElPosition.top;
                            break;
                        case 'bottom':
                            topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                            break;
                        case 'left':
                            leftPosition = hostElPosition.left;
                            break;
                        case 'right':
                            leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                            break;
                        case 'center':
                            if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                                leftPosition = (hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2);
                            }
                            else {
                                topPosition = (hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2);
                            }
                            break;
                    }
                    /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
                    // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;
                    targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)";
                    // Check if the targetElement is inside the viewport
                    /** @type {?} */
                    var targetElBCR = targetElement.getBoundingClientRect();
                    /** @type {?} */
                    var html = document.documentElement;
                    /** @type {?} */
                    var windowHeight = window.innerHeight || html.clientHeight;
                    /** @type {?} */
                    var windowWidth = window.innerWidth || html.clientWidth;
                    return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth &&
                        targetElBCR.bottom <= windowHeight;
                };
                return Positioning;
            }());
            /** @type {?} */
            var placementSeparator = /\s+/;
            /** @type {?} */
            var positionService = new Positioning();
            /*
             * Accept the placement array and applies the appropriate placement dependent on the viewport.
             * Returns the applied placement.
             * In case of auto placement, placements are selected in order
             *   'top', 'bottom', 'left', 'right',
             *   'top-left', 'top-right',
             *   'bottom-left', 'bottom-right',
             *   'left-top', 'left-bottom',
             *   'right-top', 'right-bottom'.
             * */
            /**
             * @param {?} hostElement
             * @param {?} targetElement
             * @param {?} placement
             * @param {?=} appendToBody
             * @param {?=} baseClass
             * @return {?}
             */
            function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
                /** @type {?} */
                var placementVals = Array.isArray(placement) ? placement : ( /** @type {?} */(placement.split(placementSeparator)));
                /** @type {?} */
                var allowedPlacements = [
                    'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom',
                    'right-top', 'right-bottom'
                ];
                /** @type {?} */
                var classList = targetElement.classList;
                /** @type {?} */
                var addClassesToTarget = ( /**
                 * @param {?} targetPlacement
                 * @return {?}
                 */function (targetPlacement) {
                    var _a = targetPlacement.split('-'), primary = _a[0], secondary = _a[1];
                    /** @type {?} */
                    var classes = [];
                    if (baseClass) {
                        classes.push(baseClass + "-" + primary);
                        if (secondary) {
                            classes.push(baseClass + "-" + primary + "-" + secondary);
                        }
                        classes.forEach(( /**
                         * @param {?} classname
                         * @return {?}
                         */function (classname) { classList.add(classname); }));
                    }
                    return classes;
                });
                // Remove old placement classes to avoid issues
                if (baseClass) {
                    allowedPlacements.forEach(( /**
                     * @param {?} placementToRemove
                     * @return {?}
                     */function (placementToRemove) { classList.remove(baseClass + "-" + placementToRemove); }));
                }
                // replace auto placement with other placements
                /** @type {?} */
                var hasAuto = placementVals.findIndex(( /**
                 * @param {?} val
                 * @return {?}
                 */function (/**
                 * @param {?} val
                 * @return {?}
                 */ val) { return val === 'auto'; }));
                if (hasAuto >= 0) {
                    allowedPlacements.forEach(( /**
                     * @param {?} obj
                     * @return {?}
                     */function (obj) {
                        if (placementVals.find(( /**
                         * @param {?} val
                         * @return {?}
                         */function (/**
                         * @param {?} val
                         * @return {?}
                         */ val) { return val.search('^' + obj) !== -1; })) == null) {
                            placementVals.splice(hasAuto++, 1, ( /** @type {?} */(obj)));
                        }
                    }));
                }
                // coordinates where to position
                // Required for transform:
                /** @type {?} */
                var style = targetElement.style;
                style.position = 'absolute';
                style.top = '0';
                style.left = '0';
                style['will-change'] = 'transform';
                /** @type {?} */
                var testPlacement;
                /** @type {?} */
                var isInViewport = false;
                for (var _i = 0, placementVals_1 = placementVals; _i < placementVals_1.length; _i++) {
                    testPlacement = placementVals_1[_i];
                    /** @type {?} */
                    var addedClasses = addClassesToTarget(testPlacement);
                    if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
                        isInViewport = true;
                        break;
                    }
                    // Remove the baseClasses for further calculation
                    if (baseClass) {
                        addedClasses.forEach(( /**
                         * @param {?} classname
                         * @return {?}
                         */function (classname) { classList.remove(classname); }));
                    }
                }
                if (!isInViewport) {
                    // If nothing match, the first placement is the default one
                    testPlacement = placementVals[0];
                    addClassesToTarget(testPlacement);
                    positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
                }
                return testPlacement;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @return {?}
             */
            function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY() {
                return new NgbDateISOParserFormatter();
            }
            /**
             * An abstract service for parsing and formatting dates for the
             * [`NgbInputDatepicker`](#/components/datepicker/api#NgbInputDatepicker) directive.
             * Converts between the internal `NgbDateStruct` model presentation and a `string` that is displayed in the
             * input element.
             *
             * When user types something in the input this service attempts to parse it into a `NgbDateStruct` object.
             * And vice versa, when users selects a date in the calendar with the mouse, it must be displayed as a `string`
             * in the input.
             *
             * Default implementation uses the ISO 8601 format, but you can provide another implementation via DI
             * to use an alternative string format or a custom parsing logic.
             *
             * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
             * @abstract
             */
            var NgbDateParserFormatter = /** @class */ (function () {
                function NgbDateParserFormatter() {
                }
                return NgbDateParserFormatter;
            }());
            NgbDateParserFormatter.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY },] }
            ];
            /** @nocollapse */ NgbDateParserFormatter.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY, token: NgbDateParserFormatter, providedIn: "root" });
            var NgbDateISOParserFormatter = /** @class */ (function (_super) {
                __extends(NgbDateISOParserFormatter, _super);
                function NgbDateISOParserFormatter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * @param {?} value
                 * @return {?}
                 */
                NgbDateISOParserFormatter.prototype.parse = function (value) {
                    if (value) {
                        /** @type {?} */
                        var dateParts = value.trim().split('-');
                        if (dateParts.length === 1 && isNumber(dateParts[0])) {
                            return { year: toInteger(dateParts[0]), month: null, day: null };
                        }
                        else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                            return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null };
                        }
                        else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                            return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: toInteger(dateParts[2]) };
                        }
                    }
                    return null;
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbDateISOParserFormatter.prototype.format = function (date) {
                    return date ?
                        date.year + "-" + (isNumber(date.month) ? padNumber(date.month) : '') + "-" + (isNumber(date.day) ? padNumber(date.day) : '') :
                        '';
                };
                return NgbDateISOParserFormatter;
            }(NgbDateParserFormatter));
            NgbDateISOParserFormatter.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NGB_DATEPICKER_VALUE_ACCESSOR$1 = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgbInputDatepicker; })),
                multi: true
            };
            /** @type {?} */
            var NGB_DATEPICKER_VALIDATOR = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgbInputDatepicker; })),
                multi: true
            };
            /**
             * A directive that allows to stick a datepicker popup to an input field.
             *
             * Manages interaction with the input field itself, does value formatting and provides forms integration.
             */
            var NgbInputDatepicker = /** @class */ (function () {
                /**
                 * @param {?} _parserFormatter
                 * @param {?} _elRef
                 * @param {?} _vcRef
                 * @param {?} _renderer
                 * @param {?} _cfr
                 * @param {?} _ngZone
                 * @param {?} _service
                 * @param {?} _calendar
                 * @param {?} _dateAdapter
                 * @param {?} _document
                 * @param {?} _changeDetector
                 */
                function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, _ngZone, _service, _calendar, _dateAdapter, _document, _changeDetector) {
                    var _this = this;
                    this._parserFormatter = _parserFormatter;
                    this._elRef = _elRef;
                    this._vcRef = _vcRef;
                    this._renderer = _renderer;
                    this._cfr = _cfr;
                    this._ngZone = _ngZone;
                    this._service = _service;
                    this._calendar = _calendar;
                    this._dateAdapter = _dateAdapter;
                    this._document = _document;
                    this._changeDetector = _changeDetector;
                    this._cRef = null;
                    this._disabled = false;
                    this._elWithFocus = null;
                    /**
                     * Indicates whether the datepicker popup should be closed automatically after date selection / outside click or not.
                     *
                     * * `true` - the popup will close on both date selection and outside click.
                     * * `false` - the popup can only be closed manually via `close()` or `toggle()` methods.
                     * * `"inside"` - the popup will close on date selection, but not outside clicks.
                     * * `"outside"` - the popup will close only on the outside click and not on date selection/inside clicks.
                     *
                     * \@since 3.0.0
                     */
                    this.autoClose = true;
                    /**
                     * The preferred placement of the datepicker popup.
                     *
                     * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
                     * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
                     * `"right-bottom"`
                     *
                     * Accepts an array of strings or a string with space separated possible values.
                     *
                     * The default order of preference is `"bottom-left bottom-right top-left top-right"`
                     *
                     * Please see the [positioning overview](#/positioning) for more details.
                     */
                    this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
                    /**
                     * An event emitted when user selects a date using keyboard or mouse.
                     *
                     * The payload of the event is currently selected `NgbDate`.
                     *
                     * \@since 1.1.1
                     */
                    this.dateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Event emitted right after the navigation happens and displayed month changes.
                     *
                     * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
                     */
                    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * An event fired after closing datepicker window.
                     *
                     * \@since 4.2.0
                     */
                    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this._onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    this._onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this._validatorChange = ( /**
                     * @return {?}
                     */function () { });
                    this._zoneSubscription = _ngZone.onStable.subscribe(( /**
                     * @return {?}
                     */function () { return _this._updatePopupPosition(); }));
                }
                Object.defineProperty(NgbInputDatepicker.prototype, "disabled", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._disabled;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._disabled = value === '' || (value && value !== 'false');
                        if (this.isOpen()) {
                            this._cRef.instance.setDisabledState(this._disabled);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.registerOnChange = function (fn) { this._onChange = fn; };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.registerOnValidatorChange = function (fn) { this._validatorChange = fn; };
                /**
                 * @param {?} isDisabled
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
                /**
                 * @param {?} c
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.validate = function (c) {
                    /** @type {?} */
                    var value = c.value;
                    if (value === null || value === undefined) {
                        return null;
                    }
                    /** @type {?} */
                    var ngbDate = this._fromDateStruct(this._dateAdapter.fromModel(value));
                    if (!this._calendar.isValid(ngbDate)) {
                        return { 'ngbDate': { invalid: c.value } };
                    }
                    if (this.minDate && ngbDate.before(NgbDate.from(this.minDate))) {
                        return { 'ngbDate': { requiredBefore: this.minDate } };
                    }
                    if (this.maxDate && ngbDate.after(NgbDate.from(this.maxDate))) {
                        return { 'ngbDate': { requiredAfter: this.maxDate } };
                    }
                };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.writeValue = function (value) {
                    this._model = this._fromDateStruct(this._dateAdapter.fromModel(value));
                    this._writeModelValue(this._model);
                };
                /**
                 * @param {?} value
                 * @param {?=} updateView
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.manualDateChange = function (value, updateView) {
                    if (updateView === void 0) { updateView = false; }
                    /** @type {?} */
                    var inputValueChanged = value !== this._inputValue;
                    if (inputValueChanged) {
                        this._inputValue = value;
                        this._model = this._fromDateStruct(this._parserFormatter.parse(value));
                    }
                    if (inputValueChanged || !updateView) {
                        this._onChange(this._model ? this._dateAdapter.toModel(this._model) : (value === '' ? null : value));
                    }
                    if (updateView && this._model) {
                        this._writeModelValue(this._model);
                    }
                };
                /**
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.isOpen = function () { return !!this._cRef; };
                /**
                 * Opens the datepicker popup.
                 *
                 * If the related form control contains a valid date, the corresponding month will be opened.
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.open = function () {
                    var _this = this;
                    if (!this.isOpen()) {
                        /** @type {?} */
                        var cf = this._cfr.resolveComponentFactory(NgbDatepicker);
                        this._cRef = this._vcRef.createComponent(cf);
                        this._applyPopupStyling(this._cRef.location.nativeElement);
                        this._applyDatepickerInputs(this._cRef.instance);
                        this._subscribeForDatepickerOutputs(this._cRef.instance);
                        this._cRef.instance.ngOnInit();
                        this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model));
                        // date selection event handling
                        this._cRef.instance.registerOnChange(( /**
                         * @param {?} selectedDate
                         * @return {?}
                         */function (selectedDate) {
                            _this.writeValue(selectedDate);
                            _this._onChange(selectedDate);
                            _this._onTouched();
                        }));
                        this._cRef.changeDetectorRef.detectChanges();
                        this._cRef.instance.setDisabledState(this.disabled);
                        if (this.container === 'body') {
                            window.document.querySelector(this.container).appendChild(this._cRef.location.nativeElement);
                        }
                        // focus handling
                        this._elWithFocus = this._document.activeElement;
                        ngbFocusTrap(this._cRef.location.nativeElement, this.closed, true);
                        this._cRef.instance.focus();
                        ngbAutoClose(this._ngZone, this._document, this.autoClose, ( /**
                         * @return {?}
                         */function () { return _this.close(); }), this.closed, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]);
                    }
                };
                /**
                 * Closes the datepicker popup.
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.close = function () {
                    if (this.isOpen()) {
                        this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
                        this._cRef = null;
                        this.closed.emit();
                        this._changeDetector.markForCheck();
                        // restore focus
                        /** @type {?} */
                        var elementToFocus = this._elWithFocus && this._elWithFocus['focus'] ? this._elWithFocus : this._document.body;
                        elementToFocus.focus();
                    }
                };
                /**
                 * Toggles the datepicker popup.
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.toggle = function () {
                    if (this.isOpen()) {
                        this.close();
                    }
                    else {
                        this.open();
                    }
                };
                /**
                 * Navigates to the provided date.
                 *
                 * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
                 * If nothing or invalid date provided calendar will open current month.
                 *
                 * Use the `[startDate]` input as an alternative.
                 * @param {?=} date
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.navigateTo = function (date) {
                    if (this.isOpen()) {
                        this._cRef.instance.navigateTo(date);
                    }
                };
                /**
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.onBlur = function () { this._onTouched(); };
                /**
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.onFocus = function () { this._elWithFocus = this._elRef.nativeElement; };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.ngOnChanges = function (changes) {
                    if (changes['minDate'] || changes['maxDate']) {
                        this._validatorChange();
                    }
                };
                /**
                 * @return {?}
                 */
                NgbInputDatepicker.prototype.ngOnDestroy = function () {
                    this.close();
                    this._zoneSubscription.unsubscribe();
                };
                /**
                 * @private
                 * @param {?} datepickerInstance
                 * @return {?}
                 */
                NgbInputDatepicker.prototype._applyDatepickerInputs = function (datepickerInstance) {
                    var _this = this;
                    ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate',
                        'maxDate', 'navigation', 'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers']
                        .forEach(( /**
                 * @param {?} optionName
                 * @return {?}
                 */function (optionName) {
                        if (_this[optionName] !== undefined) {
                            datepickerInstance[optionName] = _this[optionName];
                        }
                    }));
                    datepickerInstance.startDate = this.startDate || this._model;
                };
                /**
                 * @private
                 * @param {?} nativeElement
                 * @return {?}
                 */
                NgbInputDatepicker.prototype._applyPopupStyling = function (nativeElement) {
                    this._renderer.addClass(nativeElement, 'dropdown-menu');
                    this._renderer.addClass(nativeElement, 'show');
                    if (this.container === 'body') {
                        this._renderer.addClass(nativeElement, 'ngb-dp-body');
                    }
                };
                /**
                 * @private
                 * @param {?} datepickerInstance
                 * @return {?}
                 */
                NgbInputDatepicker.prototype._subscribeForDatepickerOutputs = function (datepickerInstance) {
                    var _this = this;
                    datepickerInstance.navigate.subscribe(( /**
                     * @param {?} navigateEvent
                     * @return {?}
                     */function (/**
                     * @param {?} navigateEvent
                     * @return {?}
                     */ navigateEvent) { return _this.navigate.emit(navigateEvent); }));
                    datepickerInstance.select.subscribe(( /**
                     * @param {?} date
                     * @return {?}
                     */function (/**
                     * @param {?} date
                     * @return {?}
                     */ date) {
                        _this.dateSelect.emit(date);
                        if (_this.autoClose === true || _this.autoClose === 'inside') {
                            _this.close();
                        }
                    }));
                };
                /**
                 * @private
                 * @param {?} model
                 * @return {?}
                 */
                NgbInputDatepicker.prototype._writeModelValue = function (model) {
                    /** @type {?} */
                    var value = this._parserFormatter.format(model);
                    this._inputValue = value;
                    this._renderer.setProperty(this._elRef.nativeElement, 'value', value);
                    if (this.isOpen()) {
                        this._cRef.instance.writeValue(this._dateAdapter.toModel(model));
                        this._onTouched();
                    }
                };
                /**
                 * @private
                 * @param {?} date
                 * @return {?}
                 */
                NgbInputDatepicker.prototype._fromDateStruct = function (date) {
                    /** @type {?} */
                    var ngbDate = date ? new NgbDate(date.year, date.month, date.day) : null;
                    return this._calendar.isValid(ngbDate) ? ngbDate : null;
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbInputDatepicker.prototype._updatePopupPosition = function () {
                    if (!this._cRef) {
                        return;
                    }
                    /** @type {?} */
                    var hostElement;
                    if (typeof this.positionTarget === 'string') {
                        hostElement = window.document.querySelector(this.positionTarget);
                    }
                    else if (this.positionTarget instanceof HTMLElement) {
                        hostElement = this.positionTarget;
                    }
                    else {
                        hostElement = this._elRef.nativeElement;
                    }
                    if (this.positionTarget && !hostElement) {
                        throw new Error('ngbDatepicker could not find element declared in [positionTarget] to position against.');
                    }
                    positionElements(hostElement, this._cRef.location.nativeElement, this.placement, this.container === 'body');
                };
                return NgbInputDatepicker;
            }());
            NgbInputDatepicker.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[ngbDatepicker]',
                            exportAs: 'ngbDatepicker',
                            host: {
                                '(input)': 'manualDateChange($event.target.value)',
                                '(change)': 'manualDateChange($event.target.value, true)',
                                '(focus)': 'onFocus()',
                                '(blur)': 'onBlur()',
                                '[disabled]': 'disabled'
                            },
                            providers: [NGB_DATEPICKER_VALUE_ACCESSOR$1, NGB_DATEPICKER_VALIDATOR, NgbDatepickerService]
                        },] }
            ];
            /** @nocollapse */
            NgbInputDatepicker.ctorParameters = function () { return [
                { type: NgbDateParserFormatter },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: NgbDatepickerService },
                { type: NgbCalendar },
                { type: NgbDateAdapter },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
            ]; };
            NgbInputDatepicker.propDecorators = {
                autoClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                dayTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                dayTemplateData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                displayMonths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                firstDayOfWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                markDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                navigation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                outsideDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                showWeekdays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                showWeekNumbers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                positionTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                dateSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbDatepickerDayView = /** @class */ (function () {
                /**
                 * @param {?} i18n
                 */
                function NgbDatepickerDayView(i18n) {
                    this.i18n = i18n;
                }
                /**
                 * @return {?}
                 */
                NgbDatepickerDayView.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
                return NgbDatepickerDayView;
            }());
            NgbDatepickerDayView.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: '[ngbDatepickerDayView]',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            host: {
                                'class': 'btn-light',
                                '[class.bg-primary]': 'selected',
                                '[class.text-white]': 'selected',
                                '[class.text-muted]': 'isMuted()',
                                '[class.outside]': 'isMuted()',
                                '[class.active]': 'focused'
                            },
                            template: "{{ i18n.getDayNumerals(date) }}",
                            styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:0 0}[ngbDatepickerDayView].outside{opacity:.5}"]
                        }] }
            ];
            /** @nocollapse */
            NgbDatepickerDayView.ctorParameters = function () { return [
                { type: NgbDatepickerI18n }
            ]; };
            NgbDatepickerDayView.propDecorators = {
                currentMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                focused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbDatepickerNavigationSelect = /** @class */ (function () {
                /**
                 * @param {?} i18n
                 * @param {?} _renderer
                 */
                function NgbDatepickerNavigationSelect(i18n, _renderer) {
                    this.i18n = i18n;
                    this._renderer = _renderer;
                    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this._month = -1;
                    this._year = -1;
                }
                /**
                 * @param {?} month
                 * @return {?}
                 */
                NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) { this.select.emit(new NgbDate(this.date.year, toInteger(month), 1)); };
                /**
                 * @param {?} year
                 * @return {?}
                 */
                NgbDatepickerNavigationSelect.prototype.changeYear = function (year) { this.select.emit(new NgbDate(toInteger(year), this.date.month, 1)); };
                /**
                 * @return {?}
                 */
                NgbDatepickerNavigationSelect.prototype.ngAfterViewChecked = function () {
                    if (this.date) {
                        if (this.date.month !== this._month) {
                            this._month = this.date.month;
                            this._renderer.setProperty(this.monthSelect.nativeElement, 'value', this._month);
                        }
                        if (this.date.year !== this._year) {
                            this._year = this.date.year;
                            this._renderer.setProperty(this.yearSelect.nativeElement, 'value', this._year);
                        }
                    }
                };
                return NgbDatepickerNavigationSelect;
            }());
            NgbDatepickerNavigationSelect.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-datepicker-navigation-select',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            template: "\n    <select #month\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      i18n-aria-label=\"@@ngb.datepicker.select-month\" aria-label=\"Select month\"\n      i18n-title=\"@@ngb.datepicker.select-month\" title=\"Select month\"\n      (change)=\"changeMonth($event.target.value)\">\n        <option *ngFor=\"let m of months\" [attr.aria-label]=\"i18n.getMonthFullName(m, date?.year)\"\n                [value]=\"m\">{{ i18n.getMonthShortName(m, date?.year) }}</option>\n    </select><select #year\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      i18n-aria-label=\"@@ngb.datepicker.select-year\" aria-label=\"Select year\"\n      i18n-title=\"@@ngb.datepicker.select-year\" title=\"Select year\"\n      (change)=\"changeYear($event.target.value)\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ i18n.getYearNumerals(y) }}</option>\n    </select>\n  ",
                            styles: ["ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}"]
                        }] }
            ];
            /** @nocollapse */
            NgbDatepickerNavigationSelect.ctorParameters = function () { return [
                { type: NgbDatepickerI18n },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
            ]; };
            NgbDatepickerNavigationSelect.propDecorators = {
                date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                months: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                years: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                monthSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['month', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
                yearSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['year', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @abstract
             */
            var NgbCalendarHijri = /** @class */ (function (_super) {
                __extends(NgbCalendarHijri, _super);
                function NgbCalendarHijri() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * @return {?}
                 */
                NgbCalendarHijri.prototype.getDaysPerWeek = function () { return 7; };
                /**
                 * @return {?}
                 */
                NgbCalendarHijri.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
                /**
                 * @return {?}
                 */
                NgbCalendarHijri.prototype.getWeeksPerMonth = function () { return 6; };
                /**
                 * @param {?} date
                 * @param {?=} period
                 * @param {?=} number
                 * @return {?}
                 */
                NgbCalendarHijri.prototype.getNext = function (date, period, number) {
                    if (period === void 0) { period = 'd'; }
                    if (number === void 0) { number = 1; }
                    date = new NgbDate(date.year, date.month, date.day);
                    switch (period) {
                        case 'y':
                            date = this._setYear(date, date.year + number);
                            date.month = 1;
                            date.day = 1;
                            return date;
                        case 'm':
                            date = this._setMonth(date, date.month + number);
                            date.day = 1;
                            return date;
                        case 'd':
                            return this._setDay(date, date.day + number);
                        default:
                            return date;
                    }
                };
                /**
                 * @param {?} date
                 * @param {?=} period
                 * @param {?=} number
                 * @return {?}
                 */
                NgbCalendarHijri.prototype.getPrev = function (date, period, number) {
                    if (period === void 0) { period = 'd'; }
                    if (number === void 0) { number = 1; }
                    return this.getNext(date, period, -number);
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbCalendarHijri.prototype.getWeekday = function (date) {
                    /** @type {?} */
                    var day = this.toGregorian(date).getDay();
                    // in JS Date Sun=0, in ISO 8601 Sun=7
                    return day === 0 ? 7 : day;
                };
                /**
                 * @param {?} week
                 * @param {?} firstDayOfWeek
                 * @return {?}
                 */
                NgbCalendarHijri.prototype.getWeekNumber = function (week, firstDayOfWeek) {
                    // in JS Date Sun=0, in ISO 8601 Sun=7
                    if (firstDayOfWeek === 7) {
                        firstDayOfWeek = 0;
                    }
                    /** @type {?} */
                    var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
                    /** @type {?} */
                    var date = week[thursdayIndex];
                    /** @type {?} */
                    var jsDate = this.toGregorian(date);
                    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
                    // Thursday
                    /** @type {?} */
                    var time = jsDate.getTime();
                    /** @type {?} */
                    var MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1));
                    return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
                };
                /**
                 * @return {?}
                 */
                NgbCalendarHijri.prototype.getToday = function () { return this.fromGregorian(new Date()); };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbCalendarHijri.prototype.isValid = function (date) {
                    return date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) &&
                        !isNaN(this.toGregorian(date).getTime());
                };
                /**
                 * @private
                 * @param {?} date
                 * @param {?} day
                 * @return {?}
                 */
                NgbCalendarHijri.prototype._setDay = function (date, day) {
                    day = +day;
                    /** @type {?} */
                    var mDays = this.getDaysPerMonth(date.month, date.year);
                    if (day <= 0) {
                        while (day <= 0) {
                            date = this._setMonth(date, date.month - 1);
                            mDays = this.getDaysPerMonth(date.month, date.year);
                            day += mDays;
                        }
                    }
                    else if (day > mDays) {
                        while (day > mDays) {
                            day -= mDays;
                            date = this._setMonth(date, date.month + 1);
                            mDays = this.getDaysPerMonth(date.month, date.year);
                        }
                    }
                    date.day = day;
                    return date;
                };
                /**
                 * @private
                 * @param {?} date
                 * @param {?} month
                 * @return {?}
                 */
                NgbCalendarHijri.prototype._setMonth = function (date, month) {
                    month = +month;
                    date.year = date.year + Math.floor((month - 1) / 12);
                    date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
                    return date;
                };
                /**
                 * @private
                 * @param {?} date
                 * @param {?} year
                 * @return {?}
                 */
                NgbCalendarHijri.prototype._setYear = function (date, year) {
                    date.year = +year;
                    return date;
                };
                return NgbCalendarHijri;
            }(NgbCalendar));
            NgbCalendarHijri.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Checks if islamic year is a leap year
             * @param {?} hYear
             * @return {?}
             */
            function isIslamicLeapYear(hYear) {
                return (14 + 11 * hYear) % 30 < 11;
            }
            /**
             * Checks if gregorian years is a leap year
             * @param {?} gDate
             * @return {?}
             */
            function isGregorianLeapYear(gDate) {
                /** @type {?} */
                var year = gDate.getFullYear();
                return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
            }
            /**
             * Returns the start of Hijri Month.
             * `hMonth` is 0 for Muharram, 1 for Safar, etc.
             * `hYear` is any Hijri hYear.
             * @param {?} hYear
             * @param {?} hMonth
             * @return {?}
             */
            function getIslamicMonthStart(hYear, hMonth) {
                return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30.0);
            }
            /**
             * Returns the start of Hijri year.
             * `year` is any Hijri year.
             * @param {?} year
             * @return {?}
             */
            function getIslamicYearStart(year) {
                return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
            }
            /**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function mod(a, b) {
                return a - b * Math.floor(a / b);
            }
            /**
             * The civil calendar is one type of Hijri calendars used in islamic countries.
             * Uses a fixed cycle of alternating 29- and 30-day months,
             * with a leap day added to the last month of 11 out of every 30 years.
             * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
             * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
             * Dershowitz.
             * @type {?}
             */
            var GREGORIAN_EPOCH = 1721425.5;
            /** @type {?} */
            var ISLAMIC_EPOCH = 1948439.5;
            var NgbCalendarIslamicCivil = /** @class */ (function (_super) {
                __extends(NgbCalendarIslamicCivil, _super);
                function NgbCalendarIslamicCivil() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
                 * `gDate` is a JS Date to be converted to Hijri.
                 * @param {?} gDate
                 * @return {?}
                 */
                NgbCalendarIslamicCivil.prototype.fromGregorian = function (gDate) {
                    /** @type {?} */
                    var gYear = gDate.getFullYear();
                    /** @type {?} */
                    var gMonth = gDate.getMonth();
                    /** @type {?} */
                    var gDay = gDate.getDate();
                    /** @type {?} */
                    var julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) +
                        -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
                        Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gDate) ? -1 : -2) + gDay);
                    julianDay = Math.floor(julianDay) + 0.5;
                    /** @type {?} */
                    var days = julianDay - ISLAMIC_EPOCH;
                    /** @type {?} */
                    var hYear = Math.floor((30 * days + 10646) / 10631.0);
                    /** @type {?} */
                    var hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
                    hMonth = Math.min(hMonth, 11);
                    /** @type {?} */
                    var hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
                    return new NgbDate(hYear, hMonth + 1, hDay);
                };
                /**
                 * Returns the equivalent JS date value for a give input islamic(civil) date.
                 * `hDate` is an islamic(civil) date to be converted to Gregorian.
                 * @param {?} hDate
                 * @return {?}
                 */
                NgbCalendarIslamicCivil.prototype.toGregorian = function (hDate) {
                    /** @type {?} */
                    var hYear = hDate.year;
                    /** @type {?} */
                    var hMonth = hDate.month - 1;
                    /** @type {?} */
                    var hDay = hDate.day;
                    /** @type {?} */
                    var julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
                    /** @type {?} */
                    var wjd = Math.floor(julianDay - 0.5) + 0.5;
                    /** @type {?} */
                    var depoch = wjd - GREGORIAN_EPOCH;
                    /** @type {?} */
                    var quadricent = Math.floor(depoch / 146097);
                    /** @type {?} */
                    var dqc = mod(depoch, 146097);
                    /** @type {?} */
                    var cent = Math.floor(dqc / 36524);
                    /** @type {?} */
                    var dcent = mod(dqc, 36524);
                    /** @type {?} */
                    var quad = Math.floor(dcent / 1461);
                    /** @type {?} */
                    var dquad = mod(dcent, 1461);
                    /** @type {?} */
                    var yindex = Math.floor(dquad / 365);
                    /** @type {?} */
                    var year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
                    if (!(cent === 4 || yindex === 4)) {
                        year++;
                    }
                    /** @type {?} */
                    var gYearStart = GREGORIAN_EPOCH + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
                        Math.floor((year - 1) / 400);
                    /** @type {?} */
                    var yearday = wjd - gYearStart;
                    /** @type {?} */
                    var tjd = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
                        Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear(new Date(year, 3, 1)) ? -1 : -2) + 1);
                    /** @type {?} */
                    var leapadj = wjd < tjd ? 0 : isGregorianLeapYear(new Date(year, 3, 1)) ? 1 : 2;
                    /** @type {?} */
                    var month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
                    /** @type {?} */
                    var tjd2 = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
                        Math.floor((year - 1) / 400) +
                        Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear(new Date(year, month - 1, 1)) ? -1 : -2) +
                            1);
                    /** @type {?} */
                    var day = wjd - tjd2 + 1;
                    return new Date(year, month - 1, day);
                };
                /**
                 * Returns the number of days in a specific Hijri month.
                 * `month` is 1 for Muharram, 2 for Safar, etc.
                 * `year` is any Hijri year.
                 * @param {?} month
                 * @param {?} year
                 * @return {?}
                 */
                NgbCalendarIslamicCivil.prototype.getDaysPerMonth = function (month, year) {
                    year = year + Math.floor(month / 13);
                    month = ((month - 1) % 12) + 1;
                    /** @type {?} */
                    var length = 29 + month % 2;
                    if (month === 12 && isIslamicLeapYear(year)) {
                        length++;
                    }
                    return length;
                };
                return NgbCalendarIslamicCivil;
            }(NgbCalendarHijri));
            NgbCalendarIslamicCivil.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Umalqura calendar is one type of Hijri calendars used in islamic countries.
             * This Calendar is used by Saudi Arabia for administrative purpose.
             * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
             * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
             * @type {?}
             */
            var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
            /** @type {?} */
            var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
            /** @type {?} */
            var HIJRI_BEGIN = 1300;
            /** @type {?} */
            var HIJRI_END = 1600;
            /** @type {?} */
            var ONE_DAY = 1000 * 60 * 60 * 24;
            /** @type {?} */
            var MONTH_LENGTH = [
                // 1300-1304
                '101010101010', '110101010100', '111011001001', '011011010100', '011011101010',
                // 1305-1309
                '001101101100', '101010101101', '010101010101', '011010101001', '011110010010',
                // 1310-1314
                '101110101001', '010111010100', '101011011010', '010101011100', '110100101101',
                // 1315-1319
                '011010010101', '011101001010', '101101010100', '101101101010', '010110101101',
                // 1320-1324
                '010010101110', '101001001111', '010100010111', '011010001011', '011010100101',
                // 1325-1329
                '101011010101', '001011010110', '100101011011', '010010011101', '101001001101',
                // 1330-1334
                '110100100110', '110110010101', '010110101100', '100110110110', '001010111010',
                // 1335-1339
                '101001011011', '010100101011', '101010010101', '011011001010', '101011101001',
                // 1340-1344
                '001011110100', '100101110110', '001010110110', '100101010110', '101011001010',
                // 1345-1349
                '101110100100', '101111010010', '010111011001', '001011011100', '100101101101',
                // 1350-1354
                '010101001101', '101010100101', '101101010010', '101110100101', '010110110100',
                // 1355-1359
                '100110110110', '010101010111', '001010010111', '010101001011', '011010100011',
                // 1360-1364
                '011101010010', '101101100101', '010101101010', '101010101011', '010100101011',
                // 1365-1369
                '110010010101', '110101001010', '110110100101', '010111001010', '101011010110',
                // 1370-1374
                '100101010111', '010010101011', '100101001011', '101010100101', '101101010010',
                // 1375-1379
                '101101101010', '010101110101', '001001110110', '100010110111', '010001011011',
                // 1380-1384
                '010101010101', '010110101001', '010110110100', '100111011010', '010011011101',
                // 1385-1389
                '001001101110', '100100110110', '101010101010', '110101010100', '110110110010',
                // 1390-1394
                '010111010101', '001011011010', '100101011011', '010010101011', '101001010101',
                // 1395-1399
                '101101001001', '101101100100', '101101110001', '010110110100', '101010110101',
                // 1400-1404
                '101001010101', '110100100101', '111010010010', '111011001001', '011011010100',
                // 1405-1409
                '101011101001', '100101101011', '010010101011', '101010010011', '110101001001',
                // 1410-1414
                '110110100100', '110110110010', '101010111001', '010010111010', '101001011011',
                // 1415-1419
                '010100101011', '101010010101', '101100101010', '101101010101', '010101011100',
                // 1420-1424
                '010010111101', '001000111101', '100100011101', '101010010101', '101101001010',
                // 1425-1429
                '101101011010', '010101101101', '001010110110', '100100111011', '010010011011',
                // 1430-1434
                '011001010101', '011010101001', '011101010100', '101101101010', '010101101100',
                // 1435-1439
                '101010101101', '010101010101', '101100101001', '101110010010', '101110101001',
                // 1440-1444
                '010111010100', '101011011010', '010101011010', '101010101011', '010110010101',
                // 1445-1449
                '011101001001', '011101100100', '101110101010', '010110110101', '001010110110',
                // 1450-1454
                '101001010110', '111001001101', '101100100101', '101101010010', '101101101010',
                // 1455-1459
                '010110101101', '001010101110', '100100101111', '010010010111', '011001001011',
                // 1460-1464
                '011010100101', '011010101100', '101011010110', '010101011101', '010010011101',
                // 1465-1469
                '101001001101', '110100010110', '110110010101', '010110101010', '010110110101',
                // 1470-1474
                '001011011010', '100101011011', '010010101101', '010110010101', '011011001010',
                // 1475-1479
                '011011100100', '101011101010', '010011110101', '001010110110', '100101010110',
                // 1480-1484
                '101010101010', '101101010100', '101111010010', '010111011001', '001011101010',
                // 1485-1489
                '100101101101', '010010101101', '101010010101', '101101001010', '101110100101',
                // 1490-1494
                '010110110010', '100110110101', '010011010110', '101010010111', '010101000111',
                // 1495-1499
                '011010010011', '011101001001', '101101010101', '010101101010', '101001101011',
                // 1500-1504
                '010100101011', '101010001011', '110101000110', '110110100011', '010111001010',
                // 1505-1509
                '101011010110', '010011011011', '001001101011', '100101001011', '101010100101',
                // 1510-1514
                '101101010010', '101101101001', '010101110101', '000101110110', '100010110111',
                // 1515-1519
                '001001011011', '010100101011', '010101100101', '010110110100', '100111011010',
                // 1520-1524
                '010011101101', '000101101101', '100010110110', '101010100110', '110101010010',
                // 1525-1529
                '110110101001', '010111010100', '101011011010', '100101011011', '010010101011',
                // 1530-1534
                '011001010011', '011100101001', '011101100010', '101110101001', '010110110010',
                // 1535-1539
                '101010110101', '010101010101', '101100100101', '110110010010', '111011001001',
                // 1540-1544
                '011011010010', '101011101001', '010101101011', '010010101011', '101001010101',
                // 1545-1549
                '110100101001', '110101010100', '110110101010', '100110110101', '010010111010',
                // 1550-1554
                '101000111011', '010010011011', '101001001101', '101010101010', '101011010101',
                // 1555-1559
                '001011011010', '100101011101', '010001011110', '101000101110', '110010011010',
                // 1560-1564
                '110101010101', '011010110010', '011010111001', '010010111010', '101001011101',
                // 1565-1569
                '010100101101', '101010010101', '101101010010', '101110101000', '101110110100',
                // 1570-1574
                '010110111001', '001011011010', '100101011010', '101101001010', '110110100100',
                // 1575-1579
                '111011010001', '011011101000', '101101101010', '010101101101', '010100110101',
                // 1580-1584
                '011010010101', '110101001010', '110110101000', '110111010100', '011011011010',
                // 1585-1589
                '010101011011', '001010011101', '011000101011', '101100010101', '101101001010',
                // 1590-1594
                '101110010101', '010110101010', '101010101110', '100100101110', '110010001111',
                // 1595-1599
                '010100100111', '011010010101', '011010101010', '101011010110', '010101011101',
                // 1600
                '001010011101'
            ];
            /**
             * @param {?} date1
             * @param {?} date2
             * @return {?}
             */
            function getDaysDiff(date1, date2) {
                // Ignores the time part in date1 and date2:
                /** @type {?} */
                var time1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
                /** @type {?} */
                var time2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
                /** @type {?} */
                var diff = Math.abs(time1 - time2);
                return Math.round(diff / ONE_DAY);
            }
            var NgbCalendarIslamicUmalqura = /** @class */ (function (_super) {
                __extends(NgbCalendarIslamicUmalqura, _super);
                function NgbCalendarIslamicUmalqura() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
                 * `gdate` is s JS Date to be converted to Hijri.
                 * @param {?} gDate
                 * @return {?}
                 */
                NgbCalendarIslamicUmalqura.prototype.fromGregorian = function (gDate) {
                    /** @type {?} */
                    var hDay = 1;
                    /** @type {?} */
                    var hMonth = 0;
                    /** @type {?} */
                    var hYear = 1300;
                    /** @type {?} */
                    var daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
                    if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
                        /** @type {?} */
                        var year = 1300;
                        for (var i = 0; i < MONTH_LENGTH.length; i++, year++) {
                            for (var j = 0; j < 12; j++) {
                                /** @type {?} */
                                var numOfDays = +MONTH_LENGTH[i][j] + 29;
                                if (daysDiff <= numOfDays) {
                                    hDay = daysDiff + 1;
                                    if (hDay > numOfDays) {
                                        hDay = 1;
                                        j++;
                                    }
                                    if (j > 11) {
                                        j = 0;
                                        year++;
                                    }
                                    hMonth = j;
                                    hYear = year;
                                    return new NgbDate(hYear, hMonth + 1, hDay);
                                }
                                daysDiff = daysDiff - numOfDays;
                            }
                        }
                    }
                    else {
                        return _super.prototype.fromGregorian.call(this, gDate);
                    }
                };
                /**
                 * Converts the current Hijri date to Gregorian.
                 * @param {?} hDate
                 * @return {?}
                 */
                NgbCalendarIslamicUmalqura.prototype.toGregorian = function (hDate) {
                    /** @type {?} */
                    var hYear = hDate.year;
                    /** @type {?} */
                    var hMonth = hDate.month - 1;
                    /** @type {?} */
                    var hDay = hDate.day;
                    /** @type {?} */
                    var gDate = new Date(GREGORIAN_FIRST_DATE);
                    /** @type {?} */
                    var dayDiff = hDay - 1;
                    if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
                        for (var y = 0; y < hYear - HIJRI_BEGIN; y++) {
                            for (var m = 0; m < 12; m++) {
                                dayDiff += +MONTH_LENGTH[y][m] + 29;
                            }
                        }
                        for (var m = 0; m < hMonth; m++) {
                            dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
                        }
                        gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
                    }
                    else {
                        gDate = _super.prototype.toGregorian.call(this, hDate);
                    }
                    return gDate;
                };
                /**
                 * Returns the number of days in a specific Hijri hMonth.
                 * `hMonth` is 1 for Muharram, 2 for Safar, etc.
                 * `hYear` is any Hijri hYear.
                 * @param {?} hMonth
                 * @param {?} hYear
                 * @return {?}
                 */
                NgbCalendarIslamicUmalqura.prototype.getDaysPerMonth = function (hMonth, hYear) {
                    if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
                        /** @type {?} */
                        var pos = hYear - HIJRI_BEGIN;
                        return +MONTH_LENGTH[pos][hMonth - 1] + 29;
                    }
                    return _super.prototype.getDaysPerMonth.call(this, hMonth, hYear);
                };
                return NgbCalendarIslamicUmalqura;
            }(NgbCalendarIslamicCivil));
            NgbCalendarIslamicUmalqura.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Returns the equivalent JS date value for a give input Jalali date.
             * `jalaliDate` is an Jalali date to be converted to Gregorian.
             * @param {?} jalaliDate
             * @return {?}
             */
            function toGregorian(jalaliDate) {
                /** @type {?} */
                var jdn = jalaliToJulian(jalaliDate.year, jalaliDate.month, jalaliDate.day);
                /** @type {?} */
                var date = julianToGregorian(jdn);
                date.setHours(6, 30, 3, 200);
                return date;
            }
            /**
             * Returns the equivalent jalali date value for a give input Gregorian date.
             * `gdate` is a JS Date to be converted to jalali.
             * utc to local
             * @param {?} gdate
             * @return {?}
             */
            function fromGregorian(gdate) {
                /** @type {?} */
                var g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
                return julianToJalali(g2d);
            }
            /**
             * @param {?} date
             * @param {?} yearValue
             * @return {?}
             */
            function setJalaliYear(date, yearValue) {
                date.year = +yearValue;
                return date;
            }
            /**
             * @param {?} date
             * @param {?} month
             * @return {?}
             */
            function setJalaliMonth(date, month) {
                month = +month;
                date.year = date.year + Math.floor((month - 1) / 12);
                date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
                return date;
            }
            /**
             * @param {?} date
             * @param {?} day
             * @return {?}
             */
            function setJalaliDay(date, day) {
                /** @type {?} */
                var mDays = getDaysPerMonth(date.month, date.year);
                if (day <= 0) {
                    while (day <= 0) {
                        date = setJalaliMonth(date, date.month - 1);
                        mDays = getDaysPerMonth(date.month, date.year);
                        day += mDays;
                    }
                }
                else if (day > mDays) {
                    while (day > mDays) {
                        day -= mDays;
                        date = setJalaliMonth(date, date.month + 1);
                        mDays = getDaysPerMonth(date.month, date.year);
                    }
                }
                date.day = day;
                return date;
            }
            /**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function mod$1(a, b) {
                return a - b * Math.floor(a / b);
            }
            /**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function div(a, b) {
                return Math.trunc(a / b);
            }
            /*
             This function determines if the Jalali (Persian) year is
             leap (366-day long) or is the common year (365 days), and
             finds the day in March (Gregorian calendar) of the first
             day of the Jalali year (jalaliYear).
             @param jalaliYear Jalali calendar year (-61 to 3177)
             @return
             leap: number of years since the last leap year (0 to 4)
             gYear: Gregorian year of the beginning of Jalali year
             march: the March day of Farvardin the 1st (1st day of jalaliYear)
             @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
             @see: http://www.fourmilab.ch/documents/calendar/
             */
            /**
             * @param {?} jalaliYear
             * @return {?}
             */
            function jalCal(jalaliYear) {
                // Jalali years starting the 33-year rule.
                /** @type {?} */
                var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
                /** @type {?} */
                var breaksLength = breaks.length;
                /** @type {?} */
                var gYear = jalaliYear + 621;
                /** @type {?} */
                var leapJ = -14;
                /** @type {?} */
                var jp = breaks[0];
                if (jalaliYear < jp || jalaliYear >= breaks[breaksLength - 1]) {
                    throw new Error('Invalid Jalali year ' + jalaliYear);
                }
                // Find the limiting years for the Jalali year jalaliYear.
                /** @type {?} */
                var jump;
                for (var i = 1; i < breaksLength; i += 1) {
                    /** @type {?} */
                    var jm = breaks[i];
                    jump = jm - jp;
                    if (jalaliYear < jm) {
                        break;
                    }
                    leapJ = leapJ + div(jump, 33) * 8 + div(mod$1(jump, 33), 4);
                    jp = jm;
                }
                /** @type {?} */
                var n = jalaliYear - jp;
                // Find the number of leap years from AD 621 to the beginning
                // of the current Jalali year in the Persian calendar.
                leapJ = leapJ + div(n, 33) * 8 + div(mod$1(n, 33) + 3, 4);
                if (mod$1(jump, 33) === 4 && jump - n === 4) {
                    leapJ += 1;
                }
                // And the same in the Gregorian calendar (until the year gYear).
                /** @type {?} */
                var leapG = div(gYear, 4) - div((div(gYear, 100) + 1) * 3, 4) - 150;
                // Determine the Gregorian date of Farvardin the 1st.
                /** @type {?} */
                var march = 20 + leapJ - leapG;
                // Find how many years have passed since the last leap year.
                if (jump - n < 6) {
                    n = n - jump + div(jump + 4, 33) * 33;
                }
                /** @type {?} */
                var leap = mod$1(mod$1(n + 1, 33) - 1, 4);
                if (leap === -1) {
                    leap = 4;
                }
                return { leap: leap, gy: gYear, march: march };
            }
            /*
             Calculates Gregorian and Julian calendar dates from the Julian Day number
             (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
             calendars) to some millions years ahead of the present.
             @param jdn Julian Day number
             @return
             gYear: Calendar year (years BC numbered 0, -1, -2, ...)
             gMonth: Calendar month (1 to 12)
             gDay: Calendar day of the month M (1 to 28/29/30/31)
             */
            /**
             * @param {?} julianDayNumber
             * @return {?}
             */
            function julianToGregorian(julianDayNumber) {
                /** @type {?} */
                var j = 4 * julianDayNumber + 139361631;
                j = j + div(div(4 * julianDayNumber + 183187720, 146097) * 3, 4) * 4 - 3908;
                /** @type {?} */
                var i = div(mod$1(j, 1461), 4) * 5 + 308;
                /** @type {?} */
                var gDay = div(mod$1(i, 153), 5) + 1;
                /** @type {?} */
                var gMonth = mod$1(div(i, 153), 12) + 1;
                /** @type {?} */
                var gYear = div(j, 1461) - 100100 + div(8 - gMonth, 6);
                return new Date(gYear, gMonth - 1, gDay);
            }
            /*
             Converts a date of the Jalali calendar to the Julian Day number.
             @param jy Jalali year (1 to 3100)
             @param jm Jalali month (1 to 12)
             @param jd Jalali day (1 to 29/31)
             @return Julian Day number
             */
            /**
             * @param {?} gy
             * @param {?} gm
             * @param {?} gd
             * @return {?}
             */
            function gregorianToJulian(gy, gm, gd) {
                /** @type {?} */
                var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod$1(gm + 9, 12) + 2, 5) + gd - 34840408;
                d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
                return d;
            }
            /*
             Converts the Julian Day number to a date in the Jalali calendar.
             @param julianDayNumber Julian Day number
             @return
             jalaliYear: Jalali year (1 to 3100)
             jalaliMonth: Jalali month (1 to 12)
             jalaliDay: Jalali day (1 to 29/31)
             */
            /**
             * @param {?} julianDayNumber
             * @return {?}
             */
            function julianToJalali(julianDayNumber) {
                /** @type {?} */
                var gy = julianToGregorian(julianDayNumber).getFullYear() // Calculate Gregorian year (gy).
                ;
                /** @type {?} */
                var jalaliYear = gy - 621;
                /** @type {?} */
                var r = jalCal(jalaliYear);
                /** @type {?} */
                var gregorianDay = gregorianToJulian(gy, 3, r.march);
                /** @type {?} */
                var jalaliDay;
                /** @type {?} */
                var jalaliMonth;
                /** @type {?} */
                var numberOfDays;
                // Find number of days that passed since 1 Farvardin.
                numberOfDays = julianDayNumber - gregorianDay;
                if (numberOfDays >= 0) {
                    if (numberOfDays <= 185) {
                        // The first 6 months.
                        jalaliMonth = 1 + div(numberOfDays, 31);
                        jalaliDay = mod$1(numberOfDays, 31) + 1;
                        return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
                    }
                    else {
                        // The remaining months.
                        numberOfDays -= 186;
                    }
                }
                else {
                    // Previous Jalali year.
                    jalaliYear -= 1;
                    numberOfDays += 179;
                    if (r.leap === 1) {
                        numberOfDays += 1;
                    }
                }
                jalaliMonth = 7 + div(numberOfDays, 30);
                jalaliDay = mod$1(numberOfDays, 30) + 1;
                return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
            }
            /*
             Converts a date of the Jalali calendar to the Julian Day number.
             @param jYear Jalali year (1 to 3100)
             @param jMonth Jalali month (1 to 12)
             @param jDay Jalali day (1 to 29/31)
             @return Julian Day number
             */
            /**
             * @param {?} jYear
             * @param {?} jMonth
             * @param {?} jDay
             * @return {?}
             */
            function jalaliToJulian(jYear, jMonth, jDay) {
                /** @type {?} */
                var r = jalCal(jYear);
                return gregorianToJulian(r.gy, 3, r.march) + (jMonth - 1) * 31 - div(jMonth, 7) * (jMonth - 7) + jDay - 1;
            }
            /**
             * Returns the number of days in a specific jalali month.
             * @param {?} month
             * @param {?} year
             * @return {?}
             */
            function getDaysPerMonth(month, year) {
                if (month <= 6) {
                    return 31;
                }
                if (month <= 11) {
                    return 30;
                }
                if (jalCal(year).leap === 0) {
                    return 30;
                }
                return 29;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbCalendarPersian = /** @class */ (function (_super) {
                __extends(NgbCalendarPersian, _super);
                function NgbCalendarPersian() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * @return {?}
                 */
                NgbCalendarPersian.prototype.getDaysPerWeek = function () { return 7; };
                /**
                 * @return {?}
                 */
                NgbCalendarPersian.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
                /**
                 * @return {?}
                 */
                NgbCalendarPersian.prototype.getWeeksPerMonth = function () { return 6; };
                /**
                 * @param {?} date
                 * @param {?=} period
                 * @param {?=} number
                 * @return {?}
                 */
                NgbCalendarPersian.prototype.getNext = function (date, period, number) {
                    if (period === void 0) { period = 'd'; }
                    if (number === void 0) { number = 1; }
                    date = new NgbDate(date.year, date.month, date.day);
                    switch (period) {
                        case 'y':
                            date = setJalaliYear(date, date.year + number);
                            date.month = 1;
                            date.day = 1;
                            return date;
                        case 'm':
                            date = setJalaliMonth(date, date.month + number);
                            date.day = 1;
                            return date;
                        case 'd':
                            return setJalaliDay(date, date.day + number);
                        default:
                            return date;
                    }
                };
                /**
                 * @param {?} date
                 * @param {?=} period
                 * @param {?=} number
                 * @return {?}
                 */
                NgbCalendarPersian.prototype.getPrev = function (date, period, number) {
                    if (period === void 0) { period = 'd'; }
                    if (number === void 0) { number = 1; }
                    return this.getNext(date, period, -number);
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbCalendarPersian.prototype.getWeekday = function (date) {
                    /** @type {?} */
                    var day = toGregorian(date).getDay();
                    // in JS Date Sun=0, in ISO 8601 Sun=7
                    return day === 0 ? 7 : day;
                };
                /**
                 * @param {?} week
                 * @param {?} firstDayOfWeek
                 * @return {?}
                 */
                NgbCalendarPersian.prototype.getWeekNumber = function (week, firstDayOfWeek) {
                    // in JS Date Sun=0, in ISO 8601 Sun=7
                    if (firstDayOfWeek === 7) {
                        firstDayOfWeek = 0;
                    }
                    /** @type {?} */
                    var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
                    /** @type {?} */
                    var date = week[thursdayIndex];
                    /** @type {?} */
                    var jsDate = toGregorian(date);
                    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
                    // Thursday
                    /** @type {?} */
                    var time = jsDate.getTime();
                    /** @type {?} */
                    var startDate = toGregorian(new NgbDate(date.year, 1, 1));
                    return Math.floor(Math.round((time - startDate.getTime()) / 86400000) / 7) + 1;
                };
                /**
                 * @return {?}
                 */
                NgbCalendarPersian.prototype.getToday = function () { return fromGregorian(new Date()); };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbCalendarPersian.prototype.isValid = function (date) {
                    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) &&
                        !isNaN(toGregorian(date).getTime());
                };
                return NgbCalendarPersian;
            }(NgbCalendar));
            NgbCalendarPersian.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var PARTS_PER_HOUR = 1080;
            /** @type {?} */
            var PARTS_PER_DAY = 24 * PARTS_PER_HOUR;
            /** @type {?} */
            var PARTS_FRACTIONAL_MONTH = 12 * PARTS_PER_HOUR + 793;
            /** @type {?} */
            var PARTS_PER_MONTH = 29 * PARTS_PER_DAY + PARTS_FRACTIONAL_MONTH;
            /** @type {?} */
            var BAHARAD = 11 * PARTS_PER_HOUR + 204;
            /** @type {?} */
            var HEBREW_DAY_ON_JAN_1_1970 = 2092591;
            /** @type {?} */
            var GREGORIAN_EPOCH$1 = 1721425.5;
            /**
             * @param {?} year
             * @return {?}
             */
            function isGregorianLeapYear$1(year) {
                return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
            }
            /**
             * @param {?} year
             * @return {?}
             */
            function numberOfFirstDayInYear(year) {
                /** @type {?} */
                var monthsBeforeYear = Math.floor((235 * year - 234) / 19);
                /** @type {?} */
                var fractionalMonthsBeforeYear = monthsBeforeYear * PARTS_FRACTIONAL_MONTH + BAHARAD;
                /** @type {?} */
                var dayNumber = monthsBeforeYear * 29 + Math.floor(fractionalMonthsBeforeYear / PARTS_PER_DAY);
                /** @type {?} */
                var timeOfDay = fractionalMonthsBeforeYear % PARTS_PER_DAY;
                /** @type {?} */
                var dayOfWeek = dayNumber % 7;
                if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
                    dayNumber++;
                    dayOfWeek = dayNumber % 7;
                }
                if (dayOfWeek === 1 && timeOfDay > 15 * PARTS_PER_HOUR + 204 && !isHebrewLeapYear(year)) {
                    dayNumber += 2;
                }
                else if (dayOfWeek === 0 && timeOfDay > 21 * PARTS_PER_HOUR + 589 && isHebrewLeapYear(year - 1)) {
                    dayNumber++;
                }
                return dayNumber;
            }
            /**
             * @param {?} month
             * @param {?} year
             * @return {?}
             */
            function getDaysInGregorianMonth(month, year) {
                /** @type {?} */
                var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (isGregorianLeapYear$1(year)) {
                    days[1]++;
                }
                return days[month - 1];
            }
            /**
             * @param {?} year
             * @return {?}
             */
            function getHebrewMonths(year) {
                return isHebrewLeapYear(year) ? 13 : 12;
            }
            /**
             * Returns the number of days in a specific Hebrew year.
             * `year` is any Hebrew year.
             * @param {?} year
             * @return {?}
             */
            function getDaysInHebrewYear(year) {
                return numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
            }
            /**
             * @param {?} year
             * @return {?}
             */
            function isHebrewLeapYear(year) {
                /** @type {?} */
                var b = (year * 12 + 17) % 19;
                return b >= ((b < 0) ? -7 : 12);
            }
            /**
             * Returns the number of days in a specific Hebrew month.
             * `month` is 1 for Nisan, 2 for Iyar etc. Note: Hebrew leap year contains 13 months.
             * `year` is any Hebrew year.
             * @param {?} month
             * @param {?} year
             * @return {?}
             */
            function getDaysInHebrewMonth(month, year) {
                /** @type {?} */
                var yearLength = numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
                /** @type {?} */
                var yearType = (yearLength <= 380 ? yearLength : (yearLength - 30)) - 353;
                /** @type {?} */
                var leapYear = isHebrewLeapYear(year);
                /** @type {?} */
                var daysInMonth = leapYear ? [30, 29, 29, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] :
                    [30, 29, 29, 29, 30, 29, 30, 29, 30, 29, 30, 29];
                if (yearType > 0) {
                    daysInMonth[2]++; // Kislev gets an extra day in normal or complete years.
                }
                if (yearType > 1) {
                    daysInMonth[1]++; // Heshvan gets an extra day in complete years only.
                }
                return daysInMonth[month - 1];
            }
            /**
             * @param {?} date
             * @return {?}
             */
            function getDayNumberInHebrewYear(date) {
                /** @type {?} */
                var numberOfDay = 0;
                for (var i = 1; i < date.month; i++) {
                    numberOfDay += getDaysInHebrewMonth(i, date.year);
                }
                return numberOfDay + date.day;
            }
            /**
             * @param {?} date
             * @param {?} val
             * @return {?}
             */
            function setHebrewMonth(date, val) {
                /** @type {?} */
                var after = val >= 0;
                if (!after) {
                    val = -val;
                }
                while (val > 0) {
                    if (after) {
                        if (val > getHebrewMonths(date.year) - date.month) {
                            val -= getHebrewMonths(date.year) - date.month + 1;
                            date.year++;
                            date.month = 1;
                        }
                        else {
                            date.month += val;
                            val = 0;
                        }
                    }
                    else {
                        if (val >= date.month) {
                            date.year--;
                            val -= date.month;
                            date.month = getHebrewMonths(date.year);
                        }
                        else {
                            date.month -= val;
                            val = 0;
                        }
                    }
                }
                return date;
            }
            /**
             * @param {?} date
             * @param {?} val
             * @return {?}
             */
            function setHebrewDay(date, val) {
                /** @type {?} */
                var after = val >= 0;
                if (!after) {
                    val = -val;
                }
                while (val > 0) {
                    if (after) {
                        if (val > getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date)) {
                            val -= getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date) + 1;
                            date.year++;
                            date.month = 1;
                            date.day = 1;
                        }
                        else if (val > getDaysInHebrewMonth(date.month, date.year) - date.day) {
                            val -= getDaysInHebrewMonth(date.month, date.year) - date.day + 1;
                            date.month++;
                            date.day = 1;
                        }
                        else {
                            date.day += val;
                            val = 0;
                        }
                    }
                    else {
                        if (val >= date.day) {
                            val -= date.day;
                            date.month--;
                            if (date.month === 0) {
                                date.year--;
                                date.month = getHebrewMonths(date.year);
                            }
                            date.day = getDaysInHebrewMonth(date.month, date.year);
                        }
                        else {
                            date.day -= val;
                            val = 0;
                        }
                    }
                }
                return date;
            }
            /**
             * Returns the equivalent Hebrew date value for a give input Gregorian date.
             * `gdate` is a JS Date to be converted to Hebrew date.
             * @param {?} gdate
             * @return {?}
             */
            function fromGregorian$1(gdate) {
                /** @type {?} */
                var date = new Date(gdate);
                /** @type {?} */
                var gYear = date.getFullYear();
                /** @type {?} */
                var gMonth = date.getMonth();
                /** @type {?} */
                var gDay = date.getDate();
                /** @type {?} */
                var julianDay = GREGORIAN_EPOCH$1 - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) -
                    Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
                    Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear$1(gYear) ? -1 : -2) + gDay);
                julianDay = Math.floor(julianDay + 0.5);
                /** @type {?} */
                var daysSinceHebEpoch = julianDay - 347997;
                /** @type {?} */
                var monthsSinceHebEpoch = Math.floor(daysSinceHebEpoch * PARTS_PER_DAY / PARTS_PER_MONTH);
                /** @type {?} */
                var hYear = Math.floor((monthsSinceHebEpoch * 19 + 234) / 235) + 1;
                /** @type {?} */
                var firstDayOfThisYear = numberOfFirstDayInYear(hYear);
                /** @type {?} */
                var dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
                while (dayOfYear < 1) {
                    hYear--;
                    firstDayOfThisYear = numberOfFirstDayInYear(hYear);
                    dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
                }
                /** @type {?} */
                var hMonth = 1;
                /** @type {?} */
                var hDay = dayOfYear;
                while (hDay > getDaysInHebrewMonth(hMonth, hYear)) {
                    hDay -= getDaysInHebrewMonth(hMonth, hYear);
                    hMonth++;
                }
                return new NgbDate(hYear, hMonth, hDay);
            }
            /**
             * Returns the equivalent JS date value for a given Hebrew date.
             * `hebrewDate` is an Hebrew date to be converted to Gregorian.
             * @param {?} hebrewDate
             * @return {?}
             */
            function toGregorian$1(hebrewDate) {
                /** @type {?} */
                var hYear = hebrewDate.year;
                /** @type {?} */
                var hMonth = hebrewDate.month;
                /** @type {?} */
                var hDay = hebrewDate.day;
                /** @type {?} */
                var days = numberOfFirstDayInYear(hYear);
                for (var i = 1; i < hMonth; i++) {
                    days += getDaysInHebrewMonth(i, hYear);
                }
                days += hDay;
                /** @type {?} */
                var diffDays = days - HEBREW_DAY_ON_JAN_1_1970;
                /** @type {?} */
                var after = diffDays >= 0;
                if (!after) {
                    diffDays = -diffDays;
                }
                /** @type {?} */
                var gYear = 1970;
                /** @type {?} */
                var gMonth = 1;
                /** @type {?} */
                var gDay = 1;
                while (diffDays > 0) {
                    if (after) {
                        if (diffDays >= (isGregorianLeapYear$1(gYear) ? 366 : 365)) {
                            diffDays -= isGregorianLeapYear$1(gYear) ? 366 : 365;
                            gYear++;
                        }
                        else if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
                            diffDays -= getDaysInGregorianMonth(gMonth, gYear);
                            gMonth++;
                        }
                        else {
                            gDay += diffDays;
                            diffDays = 0;
                        }
                    }
                    else {
                        if (diffDays >= (isGregorianLeapYear$1(gYear - 1) ? 366 : 365)) {
                            diffDays -= isGregorianLeapYear$1(gYear - 1) ? 366 : 365;
                            gYear--;
                        }
                        else {
                            if (gMonth > 1) {
                                gMonth--;
                            }
                            else {
                                gMonth = 12;
                                gYear--;
                            }
                            if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
                                diffDays -= getDaysInGregorianMonth(gMonth, gYear);
                            }
                            else {
                                gDay = getDaysInGregorianMonth(gMonth, gYear) - diffDays + 1;
                                diffDays = 0;
                            }
                        }
                    }
                }
                return new Date(gYear, gMonth - 1, gDay);
            }
            /**
             * @param {?} numerals
             * @return {?}
             */
            function hebrewNumerals(numerals) {
                if (!numerals) {
                    return '';
                }
                /** @type {?} */
                var hArray0_9 = ['', '\u05d0', '\u05d1', '\u05d2', '\u05d3', '\u05d4', '\u05d5', '\u05d6', '\u05d7', '\u05d8'];
                /** @type {?} */
                var hArray10_19 = [
                    '\u05d9', '\u05d9\u05d0', '\u05d9\u05d1', '\u05d9\u05d2', '\u05d9\u05d3', '\u05d8\u05d5', '\u05d8\u05d6',
                    '\u05d9\u05d6', '\u05d9\u05d7', '\u05d9\u05d8'
                ];
                /** @type {?} */
                var hArray20_90 = ['', '', '\u05db', '\u05dc', '\u05de', '\u05e0', '\u05e1', '\u05e2', '\u05e4', '\u05e6'];
                /** @type {?} */
                var hArray100_900 = [
                    '', '\u05e7', '\u05e8', '\u05e9', '\u05ea', '\u05ea\u05e7', '\u05ea\u05e8', '\u05ea\u05e9', '\u05ea\u05ea',
                    '\u05ea\u05ea\u05e7'
                ];
                /** @type {?} */
                var hArray1000_9000 = [
                    '', '\u05d0', '\u05d1', '\u05d1\u05d0', '\u05d1\u05d1', '\u05d4', '\u05d4\u05d0', '\u05d4\u05d1',
                    '\u05d4\u05d1\u05d0', '\u05d4\u05d1\u05d1'
                ];
                /** @type {?} */
                var geresh = '\u05f3';
                /** @type {?} */
                var gershaim = '\u05f4';
                /** @type {?} */
                var mem = 0;
                /** @type {?} */
                var result = [];
                /** @type {?} */
                var step = 0;
                while (numerals > 0) {
                    /** @type {?} */
                    var m = numerals % 10;
                    if (step === 0) {
                        mem = m;
                    }
                    else if (step === 1) {
                        if (m !== 1) {
                            result.unshift(hArray20_90[m], hArray0_9[mem]);
                        }
                        else {
                            result.unshift(hArray10_19[mem]);
                        }
                    }
                    else if (step === 2) {
                        result.unshift(hArray100_900[m]);
                    }
                    else {
                        if (m !== 5) {
                            result.unshift(hArray1000_9000[m], geresh, ' ');
                        }
                        break;
                    }
                    numerals = Math.floor(numerals / 10);
                    if (step === 0 && numerals === 0) {
                        result.unshift(hArray0_9[m]);
                    }
                    step++;
                }
                result = result.join('').split('');
                if (result.length === 1) {
                    result.push(geresh);
                }
                else if (result.length > 1) {
                    result.splice(result.length - 1, 0, gershaim);
                }
                return result.join('');
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@since 3.2.0
             */
            var NgbCalendarHebrew = /** @class */ (function (_super) {
                __extends(NgbCalendarHebrew, _super);
                function NgbCalendarHebrew() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * @return {?}
                 */
                NgbCalendarHebrew.prototype.getDaysPerWeek = function () { return 7; };
                /**
                 * @param {?=} year
                 * @return {?}
                 */
                NgbCalendarHebrew.prototype.getMonths = function (year) {
                    if (year && isHebrewLeapYear(year)) {
                        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                    }
                    else {
                        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                    }
                };
                /**
                 * @return {?}
                 */
                NgbCalendarHebrew.prototype.getWeeksPerMonth = function () { return 6; };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbCalendarHebrew.prototype.isValid = function (date) {
                    /** @type {?} */
                    var b = date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day);
                    b = b && date.month > 0 && date.month <= (isHebrewLeapYear(date.year) ? 13 : 12);
                    b = b && date.day > 0 && date.day <= getDaysInHebrewMonth(date.month, date.year);
                    return b && !isNaN(toGregorian$1(date).getTime());
                };
                /**
                 * @param {?} date
                 * @param {?=} period
                 * @param {?=} number
                 * @return {?}
                 */
                NgbCalendarHebrew.prototype.getNext = function (date, period, number) {
                    if (period === void 0) { period = 'd'; }
                    if (number === void 0) { number = 1; }
                    date = new NgbDate(date.year, date.month, date.day);
                    switch (period) {
                        case 'y':
                            date.year += number;
                            date.month = 1;
                            date.day = 1;
                            return date;
                        case 'm':
                            date = setHebrewMonth(date, number);
                            date.day = 1;
                            return date;
                        case 'd':
                            return setHebrewDay(date, number);
                        default:
                            return date;
                    }
                };
                /**
                 * @param {?} date
                 * @param {?=} period
                 * @param {?=} number
                 * @return {?}
                 */
                NgbCalendarHebrew.prototype.getPrev = function (date, period, number) {
                    if (period === void 0) { period = 'd'; }
                    if (number === void 0) { number = 1; }
                    return this.getNext(date, period, -number);
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbCalendarHebrew.prototype.getWeekday = function (date) {
                    /** @type {?} */
                    var day = toGregorian$1(date).getDay();
                    // in JS Date Sun=0, in ISO 8601 Sun=7
                    return day === 0 ? 7 : day;
                };
                /**
                 * @param {?} week
                 * @param {?} firstDayOfWeek
                 * @return {?}
                 */
                NgbCalendarHebrew.prototype.getWeekNumber = function (week, firstDayOfWeek) {
                    /** @type {?} */
                    var date = week[week.length - 1];
                    return Math.ceil(getDayNumberInHebrewYear(date) / 7);
                };
                /**
                 * @return {?}
                 */
                NgbCalendarHebrew.prototype.getToday = function () { return fromGregorian$1(new Date()); };
                /**
                 * \@since 3.4.0
                 * @param {?} date
                 * @return {?}
                 */
                NgbCalendarHebrew.prototype.toGregorian = function (date) { return fromJSDate(toGregorian$1(date)); };
                /**
                 * \@since 3.4.0
                 * @param {?} date
                 * @return {?}
                 */
                NgbCalendarHebrew.prototype.fromGregorian = function (date) { return fromGregorian$1(toJSDate(date)); };
                return NgbCalendarHebrew;
            }(NgbCalendar));
            NgbCalendarHebrew.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var WEEKDAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
            /** @type {?} */
            var MONTHS = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
            /** @type {?} */
            var MONTHS_LEAP = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א׳', 'אדר ב׳', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
            /**
             * \@since 3.2.0
             */
            var NgbDatepickerI18nHebrew = /** @class */ (function (_super) {
                __extends(NgbDatepickerI18nHebrew, _super);
                function NgbDatepickerI18nHebrew() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * @param {?} month
                 * @param {?=} year
                 * @return {?}
                 */
                NgbDatepickerI18nHebrew.prototype.getMonthShortName = function (month, year) { return this.getMonthFullName(month, year); };
                /**
                 * @param {?} month
                 * @param {?=} year
                 * @return {?}
                 */
                NgbDatepickerI18nHebrew.prototype.getMonthFullName = function (month, year) {
                    return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] : MONTHS[month - 1];
                };
                /**
                 * @param {?} weekday
                 * @return {?}
                 */
                NgbDatepickerI18nHebrew.prototype.getWeekdayShortName = function (weekday) { return WEEKDAYS[weekday - 1]; };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbDatepickerI18nHebrew.prototype.getDayAriaLabel = function (date) {
                    return hebrewNumerals(date.day) + " " + this.getMonthFullName(date.month, date.year) + " " + hebrewNumerals(date.year);
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                NgbDatepickerI18nHebrew.prototype.getDayNumerals = function (date) { return hebrewNumerals(date.day); };
                /**
                 * @param {?} weekNumber
                 * @return {?}
                 */
                NgbDatepickerI18nHebrew.prototype.getWeekNumerals = function (weekNumber) { return hebrewNumerals(weekNumber); };
                /**
                 * @param {?} year
                 * @return {?}
                 */
                NgbDatepickerI18nHebrew.prototype.getYearNumerals = function (year) { return hebrewNumerals(year); };
                return NgbDatepickerI18nHebrew;
            }(NgbDatepickerI18n));
            NgbDatepickerI18nHebrew.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * [`NgbDateAdapter`](#/components/datepicker/api#NgbDateAdapter) implementation that uses
             * native javascript dates as a user date model.
             */
            var NgbDateNativeAdapter = /** @class */ (function (_super) {
                __extends(NgbDateNativeAdapter, _super);
                function NgbDateNativeAdapter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Converts a native `Date` to a `NgbDateStruct`.
                 * @param {?} date
                 * @return {?}
                 */
                NgbDateNativeAdapter.prototype.fromModel = function (date) {
                    return (date instanceof Date && !isNaN(date.getTime())) ? this._fromNativeDate(date) : null;
                };
                /**
                 * Converts a `NgbDateStruct` to a native `Date`.
                 * @param {?} date
                 * @return {?}
                 */
                NgbDateNativeAdapter.prototype.toModel = function (date) {
                    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) :
                        null;
                };
                /**
                 * @protected
                 * @param {?} date
                 * @return {?}
                 */
                NgbDateNativeAdapter.prototype._fromNativeDate = function (date) {
                    return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
                };
                /**
                 * @protected
                 * @param {?} date
                 * @return {?}
                 */
                NgbDateNativeAdapter.prototype._toNativeDate = function (date) {
                    /** @type {?} */
                    var jsDate = new Date(date.year, date.month - 1, date.day, 12);
                    // avoid 30 -> 1930 conversion
                    jsDate.setFullYear(date.year);
                    return jsDate;
                };
                return NgbDateNativeAdapter;
            }(NgbDateAdapter));
            NgbDateNativeAdapter.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Same as [`NgbDateNativeAdapter`](#/components/datepicker/api#NgbDateNativeAdapter), but with UTC dates.
             *
             * \@since 3.2.0
             */
            var NgbDateNativeUTCAdapter = /** @class */ (function (_super) {
                __extends(NgbDateNativeUTCAdapter, _super);
                function NgbDateNativeUTCAdapter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * @protected
                 * @param {?} date
                 * @return {?}
                 */
                NgbDateNativeUTCAdapter.prototype._fromNativeDate = function (date) {
                    return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
                };
                /**
                 * @protected
                 * @param {?} date
                 * @return {?}
                 */
                NgbDateNativeUTCAdapter.prototype._toNativeDate = function (date) {
                    /** @type {?} */
                    var jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day));
                    // avoid 30 -> 1930 conversion
                    jsDate.setUTCFullYear(date.year);
                    return jsDate;
                };
                return NgbDateNativeUTCAdapter;
            }(NgbDateNativeAdapter));
            NgbDateNativeUTCAdapter.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbDatepickerModule = /** @class */ (function () {
                function NgbDatepickerModule() {
                }
                return NgbDatepickerModule;
            }());
            NgbDatepickerModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: [
                                NgbDatepicker, NgbDatepickerMonthView, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerDayView,
                                NgbInputDatepicker
                            ],
                            exports: [NgbDatepicker, NgbInputDatepicker],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                            entryComponents: [NgbDatepicker]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [`NgbDropdown`](#/components/dropdown/api#NgbDropdown) component.
             *
             * You can inject this service, typically in your root component, and customize the values of its properties in
             * order to provide default values for all the dropdowns used in the application.
             */
            var NgbDropdownConfig = /** @class */ (function () {
                function NgbDropdownConfig() {
                    this.autoClose = true;
                    this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
                }
                return NgbDropdownConfig;
            }());
            NgbDropdownConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbDropdownConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbDropdownConfig_Factory() { return new NgbDropdownConfig(); }, token: NgbDropdownConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbNavbar = /** @class */ (function () {
                function NgbNavbar() {
                }
                return NgbNavbar;
            }());
            NgbNavbar.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '.navbar' },] }
            ];
            /**
             * A directive you should put on a dropdown item to enable keyboard navigation.
             * Arrow keys will move focus between items marked with this directive.
             *
             * \@since 4.1.0
             */
            var NgbDropdownItem = /** @class */ (function () {
                /**
                 * @param {?} elementRef
                 */
                function NgbDropdownItem(elementRef) {
                    this.elementRef = elementRef;
                    this._disabled = false;
                }
                Object.defineProperty(NgbDropdownItem.prototype, "disabled", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._disabled; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._disabled = ( /** @type {?} */(value)) === '' || value === true; // accept an empty attribute as true
                    },
                    enumerable: true,
                    configurable: true
                });
                return NgbDropdownItem;
            }());
            NgbDropdownItem.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbDropdownItem]', host: { 'class': 'dropdown-item', '[class.disabled]': 'disabled' } },] }
            ];
            /** @nocollapse */
            NgbDropdownItem.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            NgbDropdownItem.propDecorators = {
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * A directive that wraps dropdown menu content and dropdown items.
             */
            var NgbDropdownMenu = /** @class */ (function () {
                /**
                 * @param {?} dropdown
                 */
                function NgbDropdownMenu(dropdown) {
                    this.dropdown = dropdown;
                    this.placement = 'bottom';
                    this.isOpen = false;
                }
                return NgbDropdownMenu;
            }());
            NgbDropdownMenu.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[ngbDropdownMenu]',
                            host: {
                                '[class.dropdown-menu]': 'true',
                                '[class.show]': 'dropdown.isOpen()',
                                '[attr.x-placement]': 'placement',
                                '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
                                '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
                                '(keydown.Home)': 'dropdown.onKeyDown($event)',
                                '(keydown.End)': 'dropdown.onKeyDown($event)',
                                '(keydown.Enter)': 'dropdown.onKeyDown($event)',
                                '(keydown.Space)': 'dropdown.onKeyDown($event)'
                            }
                        },] }
            ];
            /** @nocollapse */
            NgbDropdownMenu.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                                                 * @return {?}
                                                 */function () { return NgbDropdown; })),] }] }
            ]; };
            NgbDropdownMenu.propDecorators = {
                menuItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbDropdownItem,] }]
            };
            /**
             * A directive to mark an element to which dropdown menu will be anchored.
             *
             * This is a simple version of the `NgbDropdownToggle` directive.
             * It plays the same role, but doesn't listen to click events to toggle dropdown menu thus enabling support
             * for events other than click.
             *
             * \@since 1.1.0
             */
            var NgbDropdownAnchor = /** @class */ (function () {
                /**
                 * @param {?} dropdown
                 * @param {?} _elementRef
                 */
                function NgbDropdownAnchor(dropdown, _elementRef) {
                    this.dropdown = dropdown;
                    this._elementRef = _elementRef;
                    this.anchorEl = _elementRef.nativeElement;
                }
                /**
                 * @return {?}
                 */
                NgbDropdownAnchor.prototype.getNativeElement = function () { return this._elementRef.nativeElement; };
                return NgbDropdownAnchor;
            }());
            NgbDropdownAnchor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[ngbDropdownAnchor]',
                            host: { 'class': 'dropdown-toggle', 'aria-haspopup': 'true', '[attr.aria-expanded]': 'dropdown.isOpen()' }
                        },] }
            ];
            /** @nocollapse */
            NgbDropdownAnchor.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                                                 * @return {?}
                                                 */function () { return NgbDropdown; })),] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            /**
             * A directive to mark an element that will toggle dropdown via the `click` event.
             *
             * You can also use `NgbDropdownAnchor` as an alternative.
             */
            var NgbDropdownToggle = /** @class */ (function (_super) {
                __extends(NgbDropdownToggle, _super);
                /**
                 * @param {?} dropdown
                 * @param {?} elementRef
                 */
                function NgbDropdownToggle(dropdown, elementRef) {
                    return _super.call(this, dropdown, elementRef) || this;
                }
                return NgbDropdownToggle;
            }(NgbDropdownAnchor));
            NgbDropdownToggle.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[ngbDropdownToggle]',
                            host: {
                                'class': 'dropdown-toggle',
                                'aria-haspopup': 'true',
                                '[attr.aria-expanded]': 'dropdown.isOpen()',
                                '(click)': 'dropdown.toggle()',
                                '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
                                '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
                                '(keydown.Home)': 'dropdown.onKeyDown($event)',
                                '(keydown.End)': 'dropdown.onKeyDown($event)'
                            },
                            providers: [{ provide: NgbDropdownAnchor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                                             * @return {?}
                                             */function () { return NgbDropdownToggle; })) }]
                        },] }
            ];
            /** @nocollapse */
            NgbDropdownToggle.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                                                 * @return {?}
                                                 */function () { return NgbDropdown; })),] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            /**
             * A directive that provides contextual overlays for displaying lists of links and more.
             */
            var NgbDropdown = /** @class */ (function () {
                /**
                 * @param {?} _changeDetector
                 * @param {?} config
                 * @param {?} _document
                 * @param {?} _ngZone
                 * @param {?} _elementRef
                 * @param {?} _renderer
                 * @param {?} ngbNavbar
                 */
                function NgbDropdown(_changeDetector, config, _document, _ngZone, _elementRef, _renderer, ngbNavbar) {
                    var _this = this;
                    this._changeDetector = _changeDetector;
                    this._document = _document;
                    this._ngZone = _ngZone;
                    this._elementRef = _elementRef;
                    this._renderer = _renderer;
                    this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    /**
                     * Defines whether or not the dropdown menu is opened initially.
                     */
                    this._open = false;
                    /**
                     * An event fired when the dropdown is opened or closed.
                     *
                     * The event payload is a `boolean`:
                     * * `true` - the dropdown was opened
                     * * `false` - the dropdown was closed
                     */
                    this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.placement = config.placement;
                    this.container = config.container;
                    this.autoClose = config.autoClose;
                    this.display = ngbNavbar ? 'static' : 'dynamic';
                    this._zoneSubscription = _ngZone.onStable.subscribe(( /**
                     * @return {?}
                     */function () { _this._positionMenu(); }));
                }
                /**
                 * @return {?}
                 */
                NgbDropdown.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this._applyPlacementClasses();
                        if (_this._open) {
                            _this._setCloseHandlers();
                        }
                    }));
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                NgbDropdown.prototype.ngOnChanges = function (changes) {
                    if (changes.container && this._open) {
                        this._applyContainer(this.container);
                    }
                    if (changes.placement && !changes.placement.isFirstChange) {
                        this._applyPlacementClasses();
                    }
                };
                /**
                 * Checks if the dropdown menu is open.
                 * @return {?}
                 */
                NgbDropdown.prototype.isOpen = function () { return this._open; };
                /**
                 * Opens the dropdown menu.
                 * @return {?}
                 */
                NgbDropdown.prototype.open = function () {
                    if (!this._open) {
                        this._open = true;
                        this._applyContainer(this.container);
                        this.openChange.emit(true);
                        this._setCloseHandlers();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbDropdown.prototype._setCloseHandlers = function () {
                    var _this = this;
                    /** @type {?} */
                    var anchor = this._anchor;
                    ngbAutoClose(this._ngZone, this._document, this.autoClose, ( /**
                     * @return {?}
                     */function () { return _this.close(); }), this._closed$, this._menu ? [this._menuElement.nativeElement] : [], anchor ? [anchor.getNativeElement()] : [], '.dropdown-item,.dropdown-divider');
                };
                /**
                 * Closes the dropdown menu.
                 * @return {?}
                 */
                NgbDropdown.prototype.close = function () {
                    if (this._open) {
                        this._open = false;
                        this._resetContainer();
                        this._closed$.next();
                        this.openChange.emit(false);
                        this._changeDetector.markForCheck();
                    }
                };
                /**
                 * Toggles the dropdown menu.
                 * @return {?}
                 */
                NgbDropdown.prototype.toggle = function () {
                    if (this.isOpen()) {
                        this.close();
                    }
                    else {
                        this.open();
                    }
                };
                /**
                 * @return {?}
                 */
                NgbDropdown.prototype.ngOnDestroy = function () {
                    this._resetContainer();
                    this._closed$.next();
                    this._zoneSubscription.unsubscribe();
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                NgbDropdown.prototype.onKeyDown = function (event) {
                    var _this = this;
                    // tslint:disable-next-line:deprecation
                    /** @type {?} */
                    var key = event.which;
                    /** @type {?} */
                    var itemElements = this._getMenuElements();
                    /** @type {?} */
                    var position = -1;
                    /** @type {?} */
                    var isEventFromItems = false;
                    /** @type {?} */
                    var isEventFromToggle = this._isEventFromToggle(event);
                    if (!isEventFromToggle && itemElements.length) {
                        itemElements.forEach(( /**
                         * @param {?} itemElement
                         * @param {?} index
                         * @return {?}
                         */function (itemElement, index) {
                            if (itemElement.contains(( /** @type {?} */(event.target)))) {
                                isEventFromItems = true;
                            }
                            if (itemElement === _this._document.activeElement) {
                                position = index;
                            }
                        }));
                    }
                    // closing on Enter / Space
                    if (key === Key.Space || key === Key.Enter) {
                        if (isEventFromItems && (this.autoClose === true || this.autoClose === 'inside')) {
                            this.close();
                        }
                        return;
                    }
                    // opening / navigating
                    if (isEventFromToggle || isEventFromItems) {
                        this.open();
                        if (itemElements.length) {
                            switch (key) {
                                case Key.ArrowDown:
                                    position = Math.min(position + 1, itemElements.length - 1);
                                    break;
                                case Key.ArrowUp:
                                    if (this._isDropup() && position === -1) {
                                        position = itemElements.length - 1;
                                        break;
                                    }
                                    position = Math.max(position - 1, 0);
                                    break;
                                case Key.Home:
                                    position = 0;
                                    break;
                                case Key.End:
                                    position = itemElements.length - 1;
                                    break;
                            }
                            itemElements[position].focus();
                        }
                        event.preventDefault();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbDropdown.prototype._isDropup = function () { return this._elementRef.nativeElement.classList.contains('dropup'); };
                /**
                 * @private
                 * @param {?} event
                 * @return {?}
                 */
                NgbDropdown.prototype._isEventFromToggle = function (event) {
                    return this._anchor.getNativeElement().contains(( /** @type {?} */(event.target)));
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbDropdown.prototype._getMenuElements = function () {
                    /** @type {?} */
                    var menu = this._menu;
                    if (menu == null) {
                        return [];
                    }
                    return menu.menuItems.filter(( /**
                     * @param {?} item
                     * @return {?}
                     */function (/**
                     * @param {?} item
                     * @return {?}
                     */ item) { return !item.disabled; })).map(( /**
                     * @param {?} item
                     * @return {?}
                     */function (/**
                     * @param {?} item
                     * @return {?}
                     */ item) { return item.elementRef.nativeElement; }));
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbDropdown.prototype._positionMenu = function () {
                    /** @type {?} */
                    var menu = this._menu;
                    if (this.isOpen() && menu) {
                        this._applyPlacementClasses(this.display === 'dynamic' ?
                            positionElements(this._anchor.anchorEl, this._bodyContainer || this._menuElement.nativeElement, this.placement, this.container === 'body') :
                            this._getFirstPlacement(this.placement));
                    }
                };
                /**
                 * @private
                 * @param {?} placement
                 * @return {?}
                 */
                NgbDropdown.prototype._getFirstPlacement = function (placement) {
                    return Array.isArray(placement) ? placement[0] : ( /** @type {?} */(placement.split(' ')[0]));
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbDropdown.prototype._resetContainer = function () {
                    /** @type {?} */
                    var renderer = this._renderer;
                    /** @type {?} */
                    var menuElement = this._menuElement;
                    if (menuElement) {
                        /** @type {?} */
                        var dropdownElement = this._elementRef.nativeElement;
                        /** @type {?} */
                        var dropdownMenuElement = menuElement.nativeElement;
                        renderer.appendChild(dropdownElement, dropdownMenuElement);
                        renderer.removeStyle(dropdownMenuElement, 'position');
                        renderer.removeStyle(dropdownMenuElement, 'transform');
                    }
                    if (this._bodyContainer) {
                        renderer.removeChild(this._document.body, this._bodyContainer);
                        this._bodyContainer = null;
                    }
                };
                /**
                 * @private
                 * @param {?=} container
                 * @return {?}
                 */
                NgbDropdown.prototype._applyContainer = function (container) {
                    if (container === void 0) { container = null; }
                    this._resetContainer();
                    if (container === 'body') {
                        /** @type {?} */
                        var renderer = this._renderer;
                        /** @type {?} */
                        var dropdownMenuElement = this._menuElement.nativeElement;
                        /** @type {?} */
                        var bodyContainer = this._bodyContainer = this._bodyContainer || renderer.createElement('div');
                        // Override some styles to have the positionning working
                        renderer.setStyle(bodyContainer, 'position', 'absolute');
                        renderer.setStyle(dropdownMenuElement, 'position', 'static');
                        renderer.setStyle(bodyContainer, 'z-index', '1050');
                        renderer.appendChild(bodyContainer, dropdownMenuElement);
                        renderer.appendChild(this._document.body, bodyContainer);
                    }
                };
                /**
                 * @private
                 * @param {?=} placement
                 * @return {?}
                 */
                NgbDropdown.prototype._applyPlacementClasses = function (placement) {
                    /** @type {?} */
                    var menu = this._menu;
                    if (menu) {
                        if (!placement) {
                            placement = this._getFirstPlacement(this.placement);
                        }
                        /** @type {?} */
                        var renderer = this._renderer;
                        /** @type {?} */
                        var dropdownElement = this._elementRef.nativeElement;
                        // remove the current placement classes
                        renderer.removeClass(dropdownElement, 'dropup');
                        renderer.removeClass(dropdownElement, 'dropdown');
                        menu.placement = this.display === 'static' ? null : placement;
                        /*
                              * apply the new placement
                              * in case of top use up-arrow or down-arrow otherwise
                              */
                        /** @type {?} */
                        var dropdownClass = placement.search('^top') !== -1 ? 'dropup' : 'dropdown';
                        renderer.addClass(dropdownElement, dropdownClass);
                        /** @type {?} */
                        var bodyContainer = this._bodyContainer;
                        if (bodyContainer) {
                            renderer.removeClass(bodyContainer, 'dropup');
                            renderer.removeClass(bodyContainer, 'dropdown');
                            renderer.addClass(bodyContainer, dropdownClass);
                        }
                    }
                };
                return NgbDropdown;
            }());
            NgbDropdown.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbDropdown]', exportAs: 'ngbDropdown', host: { '[class.show]': 'isOpen()' } },] }
            ];
            /** @nocollapse */
            NgbDropdown.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: NgbDropdownConfig },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: NgbNavbar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
            ]; };
            NgbDropdown.propDecorators = {
                _menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbDropdownMenu, { static: false },] }],
                _menuElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbDropdownMenu, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false },] }],
                _anchor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbDropdownAnchor, { static: false },] }],
                autoClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                _open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['open',] }],
                placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                openChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNavbar];
            var NgbDropdownModule = /** @class */ (function () {
                function NgbDropdownModule() {
                }
                return NgbDropdownModule;
            }());
            NgbDropdownModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [`NgbModal`](#/components/modal/api#NgbModal) service.
             *
             * You can inject this service, typically in your root component, and customize the values of its properties in
             * order to provide default values for all modals used in the application.
             *
             * \@since 3.1.0
             */
            var NgbModalConfig = /** @class */ (function () {
                function NgbModalConfig() {
                    this.backdrop = true;
                    this.keyboard = true;
                }
                return NgbModalConfig;
            }());
            NgbModalConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbModalConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbModalConfig_Factory() { return new NgbModalConfig(); }, token: NgbModalConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var ContentRef = /** @class */ (function () {
                /**
                 * @param {?} nodes
                 * @param {?=} viewRef
                 * @param {?=} componentRef
                 */
                function ContentRef(nodes, viewRef, componentRef) {
                    this.nodes = nodes;
                    this.viewRef = viewRef;
                    this.componentRef = componentRef;
                }
                return ContentRef;
            }());
            /**
             * @template T
             */
            var PopupService = /** @class */ (function () {
                /**
                 * @param {?} _type
                 * @param {?} _injector
                 * @param {?} _viewContainerRef
                 * @param {?} _renderer
                 * @param {?} _componentFactoryResolver
                 * @param {?} _applicationRef
                 */
                function PopupService(_type, _injector, _viewContainerRef, _renderer, _componentFactoryResolver, _applicationRef) {
                    this._type = _type;
                    this._injector = _injector;
                    this._viewContainerRef = _viewContainerRef;
                    this._renderer = _renderer;
                    this._componentFactoryResolver = _componentFactoryResolver;
                    this._applicationRef = _applicationRef;
                }
                /**
                 * @param {?=} content
                 * @param {?=} context
                 * @return {?}
                 */
                PopupService.prototype.open = function (content, context) {
                    if (!this._windowRef) {
                        this._contentRef = this._getContentRef(content, context);
                        this._windowRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type), 0, this._injector, this._contentRef.nodes);
                    }
                    return this._windowRef;
                };
                /**
                 * @return {?}
                 */
                PopupService.prototype.close = function () {
                    if (this._windowRef) {
                        this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
                        this._windowRef = null;
                        if (this._contentRef.viewRef) {
                            this._applicationRef.detachView(this._contentRef.viewRef);
                            this._contentRef.viewRef.destroy();
                            this._contentRef = null;
                        }
                    }
                };
                /**
                 * @private
                 * @param {?} content
                 * @param {?=} context
                 * @return {?}
                 */
                PopupService.prototype._getContentRef = function (content, context) {
                    if (!content) {
                        return new ContentRef([]);
                    }
                    else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
                        /** @type {?} */
                        var viewRef = content.createEmbeddedView(context);
                        this._applicationRef.attachView(viewRef);
                        return new ContentRef([viewRef.rootNodes], viewRef);
                    }
                    else {
                        return new ContentRef([[this._renderer.createText("" + content)]]);
                    }
                };
                return PopupService;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var noop = ( /**
             * @return {?}
             */function () { });
            /**
             * Utility to handle the scrollbar.
             *
             * It allows to compensate the lack of a vertical scrollbar by adding an
             * equivalent padding on the right of the body, and to remove this compensation.
             */
            var ScrollBar = /** @class */ (function () {
                /**
                 * @param {?} _document
                 */
                function ScrollBar(_document) {
                    this._document = _document;
                }
                /**
                 * Detects if a scrollbar is present and if yes, already compensates for its
                 * removal by adding an equivalent padding on the right of the body.
                 *
                 * @return {?} a callback used to revert the compensation (noop if there was none,
                 * otherwise a function removing the padding)
                 */
                ScrollBar.prototype.compensate = function () { return !this._isPresent() ? noop : this._adjustBody(this._getWidth()); };
                /**
                 * Adds a padding of the given width on the right of the body.
                 *
                 * @private
                 * @param {?} width
                 * @return {?} a callback used to revert the padding to its previous value
                 */
                ScrollBar.prototype._adjustBody = function (width) {
                    /** @type {?} */
                    var body = this._document.body;
                    /** @type {?} */
                    var userSetPadding = body.style.paddingRight;
                    /** @type {?} */
                    var paddingAmount = parseFloat(window.getComputedStyle(body)['padding-right']);
                    body.style['padding-right'] = paddingAmount + width + "px";
                    return ( /**
                     * @return {?}
                     */function () { return body.style['padding-right'] = userSetPadding; });
                };
                /**
                 * Tells whether a scrollbar is currently present on the body.
                 *
                 * @private
                 * @return {?} true if scrollbar is present, false otherwise
                 */
                ScrollBar.prototype._isPresent = function () {
                    /** @type {?} */
                    var rect = this._document.body.getBoundingClientRect();
                    return rect.left + rect.right < window.innerWidth;
                };
                /**
                 * Calculates and returns the width of a scrollbar.
                 *
                 * @private
                 * @return {?} the width of a scrollbar on this page
                 */
                ScrollBar.prototype._getWidth = function () {
                    /** @type {?} */
                    var measurer = this._document.createElement('div');
                    measurer.className = 'modal-scrollbar-measure';
                    /** @type {?} */
                    var body = this._document.body;
                    body.appendChild(measurer);
                    /** @type {?} */
                    var width = measurer.getBoundingClientRect().width - measurer.clientWidth;
                    body.removeChild(measurer);
                    return width;
                };
                return ScrollBar;
            }());
            ScrollBar.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */
            ScrollBar.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
            ]; };
            /** @nocollapse */ ScrollBar.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ScrollBar_Factory() { return new ScrollBar(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: ScrollBar, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbModalBackdrop = /** @class */ (function () {
                function NgbModalBackdrop() {
                }
                return NgbModalBackdrop;
            }());
            NgbModalBackdrop.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-modal-backdrop',
                            template: '',
                            host: { '[class]': '"modal-backdrop fade show" + (backdropClass ? " " + backdropClass : "")', 'style': 'z-index: 1050' }
                        }] }
            ];
            NgbModalBackdrop.propDecorators = {
                backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A reference to the currently opened (active) modal.
             *
             * Instances of this class can be injected into your component passed as modal content.
             * So you can `.close()` or `.dismiss()` the modal window from your component.
             */
            var NgbActiveModal = /** @class */ (function () {
                function NgbActiveModal() {
                }
                /**
                 * Closes the modal with an optional `result` value.
                 *
                 * The `NgbMobalRef.result` promise will be resolved with the provided value.
                 * @param {?=} result
                 * @return {?}
                 */
                NgbActiveModal.prototype.close = function (result) { };
                /**
                 * Dismisses the modal with an optional `reason` value.
                 *
                 * The `NgbModalRef.result` promise will be rejected with the provided value.
                 * @param {?=} reason
                 * @return {?}
                 */
                NgbActiveModal.prototype.dismiss = function (reason) { };
                return NgbActiveModal;
            }());
            /**
             * A reference to the newly opened modal returned by the `NgbModal.open()` method.
             * @template T
             */
            var NgbModalRef = /** @class */ (function () {
                /**
                 * @param {?} _windowCmptRef
                 * @param {?} _contentRef
                 * @param {?=} _backdropCmptRef
                 * @param {?=} _beforeDismiss
                 */
                function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
                    var _this = this;
                    this._windowCmptRef = _windowCmptRef;
                    this._contentRef = _contentRef;
                    this._backdropCmptRef = _backdropCmptRef;
                    this._beforeDismiss = _beforeDismiss;
                    _windowCmptRef.instance.dismissEvent.subscribe(( /**
                     * @param {?} reason
                     * @return {?}
                     */function (reason) { _this.dismiss(reason); }));
                    this.result = new Promise(( /**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */function (resolve, reject) {
                        _this._resolve = resolve;
                        _this._reject = reject;
                    }));
                    this.result.then(null, ( /**
                     * @return {?}
                     */function () { }));
                }
                Object.defineProperty(NgbModalRef.prototype, "componentInstance", {
                    /**
                     * The instance of a component used for the modal content.
                     *
                     * When a `TemplateRef` is used as the content or when the modal is closed, will return `undefined`.
                     * @return {?}
                     */
                    get: function () {
                        if (this._contentRef && this._contentRef.componentRef) {
                            return this._contentRef.componentRef.instance;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Closes the modal with an optional `result` value.
                 *
                 * The `NgbMobalRef.result` promise will be resolved with the provided value.
                 * @param {?=} result
                 * @return {?}
                 */
                NgbModalRef.prototype.close = function (result) {
                    if (this._windowCmptRef) {
                        this._resolve(result);
                        this._removeModalElements();
                    }
                };
                /**
                 * @private
                 * @param {?=} reason
                 * @return {?}
                 */
                NgbModalRef.prototype._dismiss = function (reason) {
                    this._reject(reason);
                    this._removeModalElements();
                };
                /**
                 * Dismisses the modal with an optional `reason` value.
                 *
                 * The `NgbModalRef.result` promise will be rejected with the provided value.
                 * @param {?=} reason
                 * @return {?}
                 */
                NgbModalRef.prototype.dismiss = function (reason) {
                    var _this = this;
                    if (this._windowCmptRef) {
                        if (!this._beforeDismiss) {
                            this._dismiss(reason);
                        }
                        else {
                            /** @type {?} */
                            var dismiss = this._beforeDismiss();
                            if (dismiss && dismiss.then) {
                                dismiss.then(( /**
                                 * @param {?} result
                                 * @return {?}
                                 */function (/**
                                 * @param {?} result
                                 * @return {?}
                                 */ result) {
                                    if (result !== false) {
                                        _this._dismiss(reason);
                                    }
                                }), ( /**
                                 * @return {?}
                                 */function () { }));
                            }
                            else if (dismiss !== false) {
                                this._dismiss(reason);
                            }
                        }
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbModalRef.prototype._removeModalElements = function () {
                    /** @type {?} */
                    var windowNativeEl = this._windowCmptRef.location.nativeElement;
                    windowNativeEl.parentNode.removeChild(windowNativeEl);
                    this._windowCmptRef.destroy();
                    if (this._backdropCmptRef) {
                        /** @type {?} */
                        var backdropNativeEl = this._backdropCmptRef.location.nativeElement;
                        backdropNativeEl.parentNode.removeChild(backdropNativeEl);
                        this._backdropCmptRef.destroy();
                    }
                    if (this._contentRef && this._contentRef.viewRef) {
                        this._contentRef.viewRef.destroy();
                    }
                    this._windowCmptRef = null;
                    this._backdropCmptRef = null;
                    this._contentRef = null;
                };
                return NgbModalRef;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @enum {number} */
            var ModalDismissReasons = {
                BACKDROP_CLICK: 0,
                ESC: 1,
            };
            ModalDismissReasons[ModalDismissReasons.BACKDROP_CLICK] = 'BACKDROP_CLICK';
            ModalDismissReasons[ModalDismissReasons.ESC] = 'ESC';
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbModalWindow = /** @class */ (function () {
                /**
                 * @param {?} _document
                 * @param {?} _elRef
                 * @param {?} zone
                 */
                function NgbModalWindow(_document, _elRef, zone) {
                    var _this = this;
                    this._document = _document;
                    this._elRef = _elRef;
                    this.backdrop = true;
                    this.keyboard = true;
                    this.dismissEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    zone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this._elRef.nativeElement, 'keyup')
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.dismissEvent), 
                        // tslint:disable-next-line:deprecation
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                         * @param {?} e
                         * @return {?}
                         */function (/**
                         * @param {?} e
                         * @return {?}
                         */ e) { return e.which === Key.Escape && _this.keyboard; })))
                            .subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) { return requestAnimationFrame(( /**
                         * @return {?}
                         */function () {
                            if (!event.defaultPrevented) {
                                zone.run(( /**
                                 * @return {?}
                                 */function () { return _this.dismiss(ModalDismissReasons.ESC); }));
                            }
                        })); }));
                    }));
                }
                /**
                 * @param {?} event
                 * @return {?}
                 */
                NgbModalWindow.prototype.backdropClick = function (event) {
                    if (this.backdrop === true && this._elRef.nativeElement === event.target) {
                        this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
                    }
                };
                /**
                 * @param {?} reason
                 * @return {?}
                 */
                NgbModalWindow.prototype.dismiss = function (reason) { this.dismissEvent.emit(reason); };
                /**
                 * @return {?}
                 */
                NgbModalWindow.prototype.ngOnInit = function () { this._elWithFocus = this._document.activeElement; };
                /**
                 * @return {?}
                 */
                NgbModalWindow.prototype.ngAfterViewInit = function () {
                    if (!this._elRef.nativeElement.contains(document.activeElement)) {
                        /** @type {?} */
                        var autoFocusable = ( /** @type {?} */(this._elRef.nativeElement.querySelector("[ngbAutofocus]")));
                        /** @type {?} */
                        var firstFocusable = getFocusableBoundaryElements(this._elRef.nativeElement)[0];
                        /** @type {?} */
                        var elementToFocus = autoFocusable || firstFocusable || this._elRef.nativeElement;
                        elementToFocus.focus();
                    }
                };
                /**
                 * @return {?}
                 */
                NgbModalWindow.prototype.ngOnDestroy = function () {
                    /** @type {?} */
                    var body = this._document.body;
                    /** @type {?} */
                    var elWithFocus = this._elWithFocus;
                    /** @type {?} */
                    var elementToFocus;
                    if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
                        elementToFocus = elWithFocus;
                    }
                    else {
                        elementToFocus = body;
                    }
                    elementToFocus.focus();
                    this._elWithFocus = null;
                };
                return NgbModalWindow;
            }());
            NgbModalWindow.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-modal-window',
                            host: {
                                '[class]': '"modal fade show d-block" + (windowClass ? " " + windowClass : "")',
                                'role': 'dialog',
                                'tabindex': '-1',
                                '(click)': 'backdropClick($event)',
                                '[attr.aria-modal]': 'true',
                                '[attr.aria-labelledby]': 'ariaLabelledBy',
                            },
                            template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '') +\n     (scrollable ? ' modal-dialog-scrollable' : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    ",
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            styles: ["ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}"]
                        }] }
            ];
            /** @nocollapse */
            NgbModalWindow.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
            ]; };
            NgbModalWindow.propDecorators = {
                ariaLabelledBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                backdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                centered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                scrollable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                windowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                dismissEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['dismiss',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbModalStack = /** @class */ (function () {
                /**
                 * @param {?} _applicationRef
                 * @param {?} _injector
                 * @param {?} _document
                 * @param {?} _scrollBar
                 * @param {?} _rendererFactory
                 */
                function NgbModalStack(_applicationRef, _injector, _document, _scrollBar, _rendererFactory) {
                    var _this = this;
                    this._applicationRef = _applicationRef;
                    this._injector = _injector;
                    this._document = _document;
                    this._scrollBar = _scrollBar;
                    this._rendererFactory = _rendererFactory;
                    this._activeWindowCmptHasChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this._ariaHiddenValues = new Map();
                    this._backdropAttributes = ['backdropClass'];
                    this._modalRefs = [];
                    this._windowAttributes = ['ariaLabelledBy', 'backdrop', 'centered', 'keyboard', 'scrollable', 'size', 'windowClass'];
                    this._windowCmpts = [];
                    // Trap focus on active WindowCmpt
                    this._activeWindowCmptHasChanged.subscribe(( /**
                     * @return {?}
                     */function () {
                        if (_this._windowCmpts.length) {
                            /** @type {?} */
                            var activeWindowCmpt = _this._windowCmpts[_this._windowCmpts.length - 1];
                            ngbFocusTrap(activeWindowCmpt.location.nativeElement, _this._activeWindowCmptHasChanged);
                            _this._revertAriaHidden();
                            _this._setAriaHidden(activeWindowCmpt.location.nativeElement);
                        }
                    }));
                }
                /**
                 * @param {?} moduleCFR
                 * @param {?} contentInjector
                 * @param {?} content
                 * @param {?} options
                 * @return {?}
                 */
                NgbModalStack.prototype.open = function (moduleCFR, contentInjector, content, options) {
                    var _this = this;
                    /** @type {?} */
                    var containerEl = isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
                    /** @type {?} */
                    var renderer = this._rendererFactory.createRenderer(null, null);
                    /** @type {?} */
                    var revertPaddingForScrollBar = this._scrollBar.compensate();
                    /** @type {?} */
                    var removeBodyClass = ( /**
                     * @return {?}
                     */function () {
                        if (!_this._modalRefs.length) {
                            renderer.removeClass(_this._document.body, 'modal-open');
                            _this._revertAriaHidden();
                        }
                    });
                    if (!containerEl) {
                        throw new Error("The specified modal container \"" + (options.container || 'body') + "\" was not found in the DOM.");
                    }
                    /** @type {?} */
                    var activeModal = new NgbActiveModal();
                    /** @type {?} */
                    var contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal, options);
                    /** @type {?} */
                    var backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(moduleCFR, containerEl) : null;
                    /** @type {?} */
                    var windowCmptRef = this._attachWindowComponent(moduleCFR, containerEl, contentRef);
                    /** @type {?} */
                    var ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
                    this._registerModalRef(ngbModalRef);
                    this._registerWindowCmpt(windowCmptRef);
                    ngbModalRef.result.then(revertPaddingForScrollBar, revertPaddingForScrollBar);
                    ngbModalRef.result.then(removeBodyClass, removeBodyClass);
                    activeModal.close = ( /**
                     * @param {?} result
                     * @return {?}
                     */function (result) { ngbModalRef.close(result); });
                    activeModal.dismiss = ( /**
                     * @param {?} reason
                     * @return {?}
                     */function (reason) { ngbModalRef.dismiss(reason); });
                    this._applyWindowOptions(windowCmptRef.instance, options);
                    if (this._modalRefs.length === 1) {
                        renderer.addClass(this._document.body, 'modal-open');
                    }
                    if (backdropCmptRef && backdropCmptRef.instance) {
                        this._applyBackdropOptions(backdropCmptRef.instance, options);
                    }
                    return ngbModalRef;
                };
                /**
                 * @param {?=} reason
                 * @return {?}
                 */
                NgbModalStack.prototype.dismissAll = function (reason) {
                    this._modalRefs.forEach(( /**
                     * @param {?} ngbModalRef
                     * @return {?}
                     */function (/**
                     * @param {?} ngbModalRef
                     * @return {?}
                     */ ngbModalRef) { return ngbModalRef.dismiss(reason); }));
                };
                /**
                 * @return {?}
                 */
                NgbModalStack.prototype.hasOpenModals = function () { return this._modalRefs.length > 0; };
                /**
                 * @private
                 * @param {?} moduleCFR
                 * @param {?} containerEl
                 * @return {?}
                 */
                NgbModalStack.prototype._attachBackdrop = function (moduleCFR, containerEl) {
                    /** @type {?} */
                    var backdropFactory = moduleCFR.resolveComponentFactory(NgbModalBackdrop);
                    /** @type {?} */
                    var backdropCmptRef = backdropFactory.create(this._injector);
                    this._applicationRef.attachView(backdropCmptRef.hostView);
                    containerEl.appendChild(backdropCmptRef.location.nativeElement);
                    return backdropCmptRef;
                };
                /**
                 * @private
                 * @param {?} moduleCFR
                 * @param {?} containerEl
                 * @param {?} contentRef
                 * @return {?}
                 */
                NgbModalStack.prototype._attachWindowComponent = function (moduleCFR, containerEl, contentRef) {
                    /** @type {?} */
                    var windowFactory = moduleCFR.resolveComponentFactory(NgbModalWindow);
                    /** @type {?} */
                    var windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);
                    this._applicationRef.attachView(windowCmptRef.hostView);
                    containerEl.appendChild(windowCmptRef.location.nativeElement);
                    return windowCmptRef;
                };
                /**
                 * @private
                 * @param {?} windowInstance
                 * @param {?} options
                 * @return {?}
                 */
                NgbModalStack.prototype._applyWindowOptions = function (windowInstance, options) {
                    this._windowAttributes.forEach(( /**
                     * @param {?} optionName
                     * @return {?}
                     */function (optionName) {
                        if (isDefined(options[optionName])) {
                            windowInstance[optionName] = options[optionName];
                        }
                    }));
                };
                /**
                 * @private
                 * @param {?} backdropInstance
                 * @param {?} options
                 * @return {?}
                 */
                NgbModalStack.prototype._applyBackdropOptions = function (backdropInstance, options) {
                    this._backdropAttributes.forEach(( /**
                     * @param {?} optionName
                     * @return {?}
                     */function (optionName) {
                        if (isDefined(options[optionName])) {
                            backdropInstance[optionName] = options[optionName];
                        }
                    }));
                };
                /**
                 * @private
                 * @param {?} moduleCFR
                 * @param {?} contentInjector
                 * @param {?} content
                 * @param {?} activeModal
                 * @param {?} options
                 * @return {?}
                 */
                NgbModalStack.prototype._getContentRef = function (moduleCFR, contentInjector, content, activeModal, options) {
                    if (!content) {
                        return new ContentRef([]);
                    }
                    else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
                        return this._createFromTemplateRef(content, activeModal);
                    }
                    else if (isString(content)) {
                        return this._createFromString(content);
                    }
                    else {
                        return this._createFromComponent(moduleCFR, contentInjector, content, activeModal, options);
                    }
                };
                /**
                 * @private
                 * @param {?} content
                 * @param {?} activeModal
                 * @return {?}
                 */
                NgbModalStack.prototype._createFromTemplateRef = function (content, activeModal) {
                    /** @type {?} */
                    var context = {
                        $implicit: activeModal,
                        /**
                         * @param {?} result
                         * @return {?}
                         */
                        close: function (result) { activeModal.close(result); },
                        /**
                         * @param {?} reason
                         * @return {?}
                         */
                        dismiss: function (reason) { activeModal.dismiss(reason); }
                    };
                    /** @type {?} */
                    var viewRef = content.createEmbeddedView(context);
                    this._applicationRef.attachView(viewRef);
                    return new ContentRef([viewRef.rootNodes], viewRef);
                };
                /**
                 * @private
                 * @param {?} content
                 * @return {?}
                 */
                NgbModalStack.prototype._createFromString = function (content) {
                    /** @type {?} */
                    var component = this._document.createTextNode("" + content);
                    return new ContentRef([[component]]);
                };
                /**
                 * @private
                 * @param {?} moduleCFR
                 * @param {?} contentInjector
                 * @param {?} content
                 * @param {?} context
                 * @param {?} options
                 * @return {?}
                 */
                NgbModalStack.prototype._createFromComponent = function (moduleCFR, contentInjector, content, context, options) {
                    /** @type {?} */
                    var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
                    /** @type {?} */
                    var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({ providers: [{ provide: NgbActiveModal, useValue: context }], parent: contentInjector });
                    /** @type {?} */
                    var componentRef = contentCmptFactory.create(modalContentInjector);
                    /** @type {?} */
                    var componentNativeEl = componentRef.location.nativeElement;
                    if (options.scrollable) {
                        (( /** @type {?} */(componentNativeEl))).classList.add('component-host-scrollable');
                    }
                    this._applicationRef.attachView(componentRef.hostView);
                    // FIXME: we should here get rid of the component nativeElement
                    // and use `[Array.from(componentNativeEl.childNodes)]` instead and remove the above CSS class.
                    return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
                };
                /**
                 * @private
                 * @param {?} element
                 * @return {?}
                 */
                NgbModalStack.prototype._setAriaHidden = function (element) {
                    var _this = this;
                    /** @type {?} */
                    var parent = element.parentElement;
                    if (parent && element !== this._document.body) {
                        Array.from(parent.children).forEach(( /**
                         * @param {?} sibling
                         * @return {?}
                         */function (/**
                         * @param {?} sibling
                         * @return {?}
                         */ sibling) {
                            if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
                                _this._ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));
                                sibling.setAttribute('aria-hidden', 'true');
                            }
                        }));
                        this._setAriaHidden(parent);
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbModalStack.prototype._revertAriaHidden = function () {
                    this._ariaHiddenValues.forEach(( /**
                     * @param {?} value
                     * @param {?} element
                     * @return {?}
                     */function (value, element) {
                        if (value) {
                            element.setAttribute('aria-hidden', value);
                        }
                        else {
                            element.removeAttribute('aria-hidden');
                        }
                    }));
                    this._ariaHiddenValues.clear();
                };
                /**
                 * @private
                 * @param {?} ngbModalRef
                 * @return {?}
                 */
                NgbModalStack.prototype._registerModalRef = function (ngbModalRef) {
                    var _this = this;
                    /** @type {?} */
                    var unregisterModalRef = ( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var index = _this._modalRefs.indexOf(ngbModalRef);
                        if (index > -1) {
                            _this._modalRefs.splice(index, 1);
                        }
                    });
                    this._modalRefs.push(ngbModalRef);
                    ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
                };
                /**
                 * @private
                 * @param {?} ngbWindowCmpt
                 * @return {?}
                 */
                NgbModalStack.prototype._registerWindowCmpt = function (ngbWindowCmpt) {
                    var _this = this;
                    this._windowCmpts.push(ngbWindowCmpt);
                    this._activeWindowCmptHasChanged.next();
                    ngbWindowCmpt.onDestroy(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var index = _this._windowCmpts.indexOf(ngbWindowCmpt);
                        if (index > -1) {
                            _this._windowCmpts.splice(index, 1);
                            _this._activeWindowCmptHasChanged.next();
                        }
                    }));
                };
                return NgbModalStack;
            }());
            NgbModalStack.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */
            NgbModalStack.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
                { type: ScrollBar },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }
            ]; };
            /** @nocollapse */ NgbModalStack.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbModalStack_Factory() { return new NgbModalStack(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ScrollBar), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"])); }, token: NgbModalStack, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A service for opening modal windows.
             *
             * Creating a modal is straightforward: create a component or a template and pass it as an argument to
             * the `.open()` method.
             */
            var NgbModal = /** @class */ (function () {
                /**
                 * @param {?} _moduleCFR
                 * @param {?} _injector
                 * @param {?} _modalStack
                 * @param {?} _config
                 */
                function NgbModal(_moduleCFR, _injector, _modalStack, _config) {
                    this._moduleCFR = _moduleCFR;
                    this._injector = _injector;
                    this._modalStack = _modalStack;
                    this._config = _config;
                }
                /**
                 * Opens a new modal window with the specified content and supplied options.
                 *
                 * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
                 * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
                 * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
                 *
                 * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
                 * @template T
                 * @param {?} content
                 * @param {?=} options
                 * @return {?}
                 */
                NgbModal.prototype.open = function (content, options) {
                    if (options === void 0) { options = {}; }
                    /** @type {?} */
                    var combinedOptions = Object.assign({}, this._config, options);
                    return this._modalStack.open(this._moduleCFR, this._injector, content, combinedOptions);
                };
                /**
                 * Dismisses all currently displayed modal windows with the supplied reason.
                 *
                 * \@since 3.1.0
                 * @param {?=} reason
                 * @return {?}
                 */
                NgbModal.prototype.dismissAll = function (reason) { this._modalStack.dismissAll(reason); };
                /**
                 * Indicates if there are currently any open modal windows in the application.
                 *
                 * \@since 3.3.0
                 * @return {?}
                 */
                NgbModal.prototype.hasOpenModals = function () { return this._modalStack.hasOpenModals(); };
                return NgbModal;
            }());
            NgbModal.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */
            NgbModal.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
                { type: NgbModalStack },
                { type: NgbModalConfig }
            ]; };
            /** @nocollapse */ NgbModal.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbModal_Factory() { return new NgbModal(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NgbModalStack), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NgbModalConfig)); }, token: NgbModal, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbModalModule = /** @class */ (function () {
                function NgbModalModule() {
                }
                return NgbModalModule;
            }());
            NgbModalModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: [NgbModalBackdrop, NgbModalWindow],
                            entryComponents: [NgbModalBackdrop, NgbModalWindow],
                            providers: [NgbModal]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [`NgbPagination`](#/components/pagination/api#NgbPagination) component.
             *
             * You can inject this service, typically in your root component, and customize the values of its properties in
             * order to provide default values for all the paginations used in the application.
             */
            var NgbPaginationConfig = /** @class */ (function () {
                function NgbPaginationConfig() {
                    this.disabled = false;
                    this.boundaryLinks = false;
                    this.directionLinks = true;
                    this.ellipses = true;
                    this.maxSize = 0;
                    this.pageSize = 10;
                    this.rotate = false;
                }
                return NgbPaginationConfig;
            }());
            NgbPaginationConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbPaginationConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbPaginationConfig_Factory() { return new NgbPaginationConfig(); }, token: NgbPaginationConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A directive to match the 'ellipsis' link template
             *
             * \@since 4.1.0
             */
            var NgbPaginationEllipsis = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function NgbPaginationEllipsis(templateRef) {
                    this.templateRef = templateRef;
                }
                return NgbPaginationEllipsis;
            }());
            NgbPaginationEllipsis.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPaginationEllipsis]' },] }
            ];
            /** @nocollapse */
            NgbPaginationEllipsis.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * A directive to match the 'first' link template
             *
             * \@since 4.1.0
             */
            var NgbPaginationFirst = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function NgbPaginationFirst(templateRef) {
                    this.templateRef = templateRef;
                }
                return NgbPaginationFirst;
            }());
            NgbPaginationFirst.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPaginationFirst]' },] }
            ];
            /** @nocollapse */
            NgbPaginationFirst.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * A directive to match the 'last' link template
             *
             * \@since 4.1.0
             */
            var NgbPaginationLast = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function NgbPaginationLast(templateRef) {
                    this.templateRef = templateRef;
                }
                return NgbPaginationLast;
            }());
            NgbPaginationLast.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPaginationLast]' },] }
            ];
            /** @nocollapse */
            NgbPaginationLast.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * A directive to match the 'next' link template
             *
             * \@since 4.1.0
             */
            var NgbPaginationNext = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function NgbPaginationNext(templateRef) {
                    this.templateRef = templateRef;
                }
                return NgbPaginationNext;
            }());
            NgbPaginationNext.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPaginationNext]' },] }
            ];
            /** @nocollapse */
            NgbPaginationNext.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * A directive to match the page 'number' link template
             *
             * \@since 4.1.0
             */
            var NgbPaginationNumber = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function NgbPaginationNumber(templateRef) {
                    this.templateRef = templateRef;
                }
                return NgbPaginationNumber;
            }());
            NgbPaginationNumber.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPaginationNumber]' },] }
            ];
            /** @nocollapse */
            NgbPaginationNumber.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * A directive to match the 'previous' link template
             *
             * \@since 4.1.0
             */
            var NgbPaginationPrevious = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function NgbPaginationPrevious(templateRef) {
                    this.templateRef = templateRef;
                }
                return NgbPaginationPrevious;
            }());
            NgbPaginationPrevious.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPaginationPrevious]' },] }
            ];
            /** @nocollapse */
            NgbPaginationPrevious.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * A component that displays page numbers and allows to customize them in several ways.
             */
            var NgbPagination = /** @class */ (function () {
                /**
                 * @param {?} config
                 */
                function NgbPagination(config) {
                    this.pageCount = 0;
                    this.pages = [];
                    /**
                     *  The current page.
                     *
                     *  Page numbers start with `1`.
                     */
                    this.page = 1;
                    /**
                     *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
                     *
                     *  Event payload is the number of the newly selected page.
                     *
                     *  Page numbers start with `1`.
                     */
                    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
                    this.disabled = config.disabled;
                    this.boundaryLinks = config.boundaryLinks;
                    this.directionLinks = config.directionLinks;
                    this.ellipses = config.ellipses;
                    this.maxSize = config.maxSize;
                    this.pageSize = config.pageSize;
                    this.rotate = config.rotate;
                    this.size = config.size;
                }
                /**
                 * @return {?}
                 */
                NgbPagination.prototype.hasPrevious = function () { return this.page > 1; };
                /**
                 * @return {?}
                 */
                NgbPagination.prototype.hasNext = function () { return this.page < this.pageCount; };
                /**
                 * @return {?}
                 */
                NgbPagination.prototype.nextDisabled = function () { return !this.hasNext() || this.disabled; };
                /**
                 * @return {?}
                 */
                NgbPagination.prototype.previousDisabled = function () { return !this.hasPrevious() || this.disabled; };
                /**
                 * @param {?} pageNumber
                 * @return {?}
                 */
                NgbPagination.prototype.selectPage = function (pageNumber) { this._updatePages(pageNumber); };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                NgbPagination.prototype.ngOnChanges = function (changes) { this._updatePages(this.page); };
                /**
                 * @param {?} pageNumber
                 * @return {?}
                 */
                NgbPagination.prototype.isEllipsis = function (pageNumber) { return pageNumber === -1; };
                /**
                 * Appends ellipses and first/last page number to the displayed pages
                 * @private
                 * @param {?} start
                 * @param {?} end
                 * @return {?}
                 */
                NgbPagination.prototype._applyEllipses = function (start, end) {
                    if (this.ellipses) {
                        if (start > 0) {
                            // The first page will always be included. If the displayed range
                            // starts after the third page, then add ellipsis. But if the range
                            // starts on the third page, then add the second page instead of
                            // an ellipsis, because the ellipsis would only hide a single page.
                            if (start > 2) {
                                this.pages.unshift(-1);
                            }
                            else if (start === 2) {
                                this.pages.unshift(2);
                            }
                            this.pages.unshift(1);
                        }
                        if (end < this.pageCount) {
                            // The last page will always be included. If the displayed range
                            // ends before the third-last page, then add ellipsis. But if the range
                            // ends on third-last page, then add the second-last page instead of
                            // an ellipsis, because the ellipsis would only hide a single page.
                            if (end < (this.pageCount - 2)) {
                                this.pages.push(-1);
                            }
                            else if (end === (this.pageCount - 2)) {
                                this.pages.push(this.pageCount - 1);
                            }
                            this.pages.push(this.pageCount);
                        }
                    }
                };
                /**
                 * Rotates page numbers based on maxSize items visible.
                 * Currently selected page stays in the middle:
                 *
                 * Ex. for selected page = 6:
                 * [5,*6*,7] for maxSize = 3
                 * [4,5,*6*,7] for maxSize = 4
                 * @private
                 * @return {?}
                 */
                NgbPagination.prototype._applyRotation = function () {
                    /** @type {?} */
                    var start = 0;
                    /** @type {?} */
                    var end = this.pageCount;
                    /** @type {?} */
                    var leftOffset = Math.floor(this.maxSize / 2);
                    /** @type {?} */
                    var rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
                    if (this.page <= leftOffset) {
                        // very beginning, no rotation -> [0..maxSize]
                        end = this.maxSize;
                    }
                    else if (this.pageCount - this.page < leftOffset) {
                        // very end, no rotation -> [len-maxSize..len]
                        start = this.pageCount - this.maxSize;
                    }
                    else {
                        // rotate
                        start = this.page - leftOffset - 1;
                        end = this.page + rightOffset;
                    }
                    return [start, end];
                };
                /**
                 * Paginates page numbers based on maxSize items per page.
                 * @private
                 * @return {?}
                 */
                NgbPagination.prototype._applyPagination = function () {
                    /** @type {?} */
                    var page = Math.ceil(this.page / this.maxSize) - 1;
                    /** @type {?} */
                    var start = page * this.maxSize;
                    /** @type {?} */
                    var end = start + this.maxSize;
                    return [start, end];
                };
                /**
                 * @private
                 * @param {?} newPageNo
                 * @return {?}
                 */
                NgbPagination.prototype._setPageInRange = function (newPageNo) {
                    /** @type {?} */
                    var prevPageNo = this.page;
                    this.page = getValueInRange(newPageNo, this.pageCount, 1);
                    if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
                        this.pageChange.emit(this.page);
                    }
                };
                /**
                 * @private
                 * @param {?} newPage
                 * @return {?}
                 */
                NgbPagination.prototype._updatePages = function (newPage) {
                    var _a, _b;
                    this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
                    if (!isNumber(this.pageCount)) {
                        this.pageCount = 0;
                    }
                    // fill-in model needed to render pages
                    this.pages.length = 0;
                    for (var i = 1; i <= this.pageCount; i++) {
                        this.pages.push(i);
                    }
                    // set page within 1..max range
                    this._setPageInRange(newPage);
                    // apply maxSize if necessary
                    if (this.maxSize > 0 && this.pageCount > this.maxSize) {
                        /** @type {?} */
                        var start = 0;
                        /** @type {?} */
                        var end = this.pageCount;
                        // either paginating or rotating page numbers
                        if (this.rotate) {
                            _a = this._applyRotation(), start = _a[0], end = _a[1];
                        }
                        else {
                            _b = this._applyPagination(), start = _b[0], end = _b[1];
                        }
                        this.pages = this.pages.slice(start, end);
                        // adding ellipses
                        this._applyEllipses(start, end);
                    }
                };
                return NgbPagination;
            }());
            NgbPagination.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-pagination',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            host: { 'role': 'navigation' },
                            template: "\n    <ng-template #first><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.first\">&laquo;&laquo;</span></ng-template>\n    <ng-template #previous><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.previous\">&laquo;</span></ng-template>\n    <ng-template #next><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.next\">&raquo;</span></ng-template>\n    <ng-template #last><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.last\">&raquo;&raquo;</span></ng-template>\n    <ng-template #ellipsis>...</ng-template>\n    <ng-template #defaultNumber let-page let-currentPage=\"currentPage\">\n      {{ page }}\n      <span *ngIf=\"page === currentPage\" class=\"sr-only\">(current)</span>\n    </ng-template>\n    <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\"\n        [class.disabled]=\"previousDisabled()\">\n        <a aria-label=\"First\" i18n-aria-label=\"@@ngb.pagination.first-aria\" class=\"page-link\" href\n          (click)=\"selectPage(1); $event.preventDefault()\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplFirst?.templateRef || first\"\n                       [ngTemplateOutletContext]=\"{disabled: previousDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n\n      <li *ngIf=\"directionLinks\" class=\"page-item\"\n        [class.disabled]=\"previousDisabled()\">\n        <a aria-label=\"Previous\" i18n-aria-label=\"@@ngb.pagination.previous-aria\" class=\"page-link\" href\n          (click)=\"selectPage(page-1); $event.preventDefault()\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplPrevious?.templateRef || previous\"\n                       [ngTemplateOutletContext]=\"{disabled: previousDisabled()}\"></ng-template>\n        </a>\n      </li>\n      <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\"\n        [class.disabled]=\"isEllipsis(pageNumber) || disabled\">\n        <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\">\n          <ng-template [ngTemplateOutlet]=\"tplEllipsis?.templateRef || ellipsis\"\n                       [ngTemplateOutletContext]=\"{disabled: true, currentPage: page}\"></ng-template>\n        </a>\n        <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"selectPage(pageNumber); $event.preventDefault()\">\n          <ng-template [ngTemplateOutlet]=\"tplNumber?.templateRef || defaultNumber\"\n                       [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pageNumber, currentPage: page}\"></ng-template>\n        </a>\n      </li>\n      <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"nextDisabled()\">\n        <a aria-label=\"Next\" i18n-aria-label=\"@@ngb.pagination.next-aria\" class=\"page-link\" href\n          (click)=\"selectPage(page+1); $event.preventDefault()\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplNext?.templateRef || next\"\n                       [ngTemplateOutletContext]=\"{disabled: nextDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"nextDisabled()\">\n        <a aria-label=\"Last\" i18n-aria-label=\"@@ngb.pagination.last-aria\" class=\"page-link\" href\n          (click)=\"selectPage(pageCount); $event.preventDefault()\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplLast?.templateRef || last\"\n                       [ngTemplateOutletContext]=\"{disabled: nextDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n    </ul>\n  "
                        }] }
            ];
            /** @nocollapse */
            NgbPagination.ctorParameters = function () { return [
                { type: NgbPaginationConfig }
            ]; };
            NgbPagination.propDecorators = {
                tplEllipsis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbPaginationEllipsis, { static: false },] }],
                tplFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbPaginationFirst, { static: false },] }],
                tplLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbPaginationLast, { static: false },] }],
                tplNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbPaginationNext, { static: false },] }],
                tplNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbPaginationNumber, { static: false },] }],
                tplPrevious: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbPaginationPrevious, { static: false },] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                ellipses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                collectionSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                pageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var DIRECTIVES = [
                NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber,
                NgbPaginationPrevious
            ];
            var NgbPaginationModule = /** @class */ (function () {
                function NgbPaginationModule() {
                }
                return NgbPaginationModule;
            }());
            NgbPaginationModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: DIRECTIVES, exports: DIRECTIVES, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var Trigger = /** @class */ (function () {
                /**
                 * @param {?} open
                 * @param {?=} close
                 */
                function Trigger(open, close) {
                    this.open = open;
                    this.close = close;
                    if (!close) {
                        this.close = open;
                    }
                }
                /**
                 * @return {?}
                 */
                Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
                return Trigger;
            }());
            /** @type {?} */
            var DEFAULT_ALIASES = {
                'hover': ['mouseenter', 'mouseleave'],
                'focus': ['focusin', 'focusout'],
            };
            /**
             * @param {?} triggers
             * @param {?=} aliases
             * @return {?}
             */
            function parseTriggers(triggers, aliases) {
                if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
                /** @type {?} */
                var trimmedTriggers = (triggers || '').trim();
                if (trimmedTriggers.length === 0) {
                    return [];
                }
                /** @type {?} */
                var parsedTriggers = trimmedTriggers.split(/\s+/).map(( /**
                 * @param {?} trigger
                 * @return {?}
                 */function (/**
                 * @param {?} trigger
                 * @return {?}
                 */ trigger) { return trigger.split(':'); })).map(( /**
                 * @param {?} triggerPair
                 * @return {?}
                 */function (triggerPair) {
                    /** @type {?} */
                    var alias = aliases[triggerPair[0]] || triggerPair;
                    return new Trigger(alias[0], alias[1]);
                }));
                /** @type {?} */
                var manualTriggers = parsedTriggers.filter(( /**
                 * @param {?} triggerPair
                 * @return {?}
                 */function (/**
                 * @param {?} triggerPair
                 * @return {?}
                 */ triggerPair) { return triggerPair.isManual(); }));
                if (manualTriggers.length > 1) {
                    throw 'Triggers parse error: only one manual trigger is allowed';
                }
                if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
                    throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
                }
                return parsedTriggers;
            }
            /**
             * @param {?} renderer
             * @param {?} nativeElement
             * @param {?} triggers
             * @param {?} isOpenedFn
             * @return {?}
             */
            function observeTriggers(renderer, nativeElement, triggers, isOpenedFn) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](( /**
                 * @param {?} subscriber
                 * @return {?}
                 */function (/**
                 * @param {?} subscriber
                 * @return {?}
                 */ subscriber) {
                    /** @type {?} */
                    var listeners = [];
                    /** @type {?} */
                    var openFn = ( /**
                     * @return {?}
                     */function () { return subscriber.next(true); });
                    /** @type {?} */
                    var closeFn = ( /**
                     * @return {?}
                     */function () { return subscriber.next(false); });
                    /** @type {?} */
                    var toggleFn = ( /**
                     * @return {?}
                     */function () { return subscriber.next(!isOpenedFn()); });
                    triggers.forEach(( /**
                     * @param {?} trigger
                     * @return {?}
                     */function (trigger) {
                        if (trigger.open === trigger.close) {
                            listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
                        }
                        else {
                            listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
                        }
                    }));
                    return ( /**
                     * @return {?}
                     */function () {
                        listeners.forEach(( /**
                         * @param {?} unsubscribeFn
                         * @return {?}
                         */function (/**
                         * @param {?} unsubscribeFn
                         * @return {?}
                         */ unsubscribeFn) { return unsubscribeFn(); }));
                    });
                }));
            }
            /** @type {?} */
            var delayOrNoop = ( /**
             * @template T
             * @param {?} time
             * @return {?}
             */function (time) { return time > 0 ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(time) : ( /**
             * @param {?} a
             * @return {?}
             */function (a) { return a; }); });
            /**
             * @param {?} openDelay
             * @param {?} closeDelay
             * @param {?} isOpenedFn
             * @return {?}
             */
            function triggerDelay(openDelay, closeDelay, isOpenedFn) {
                return ( /**
                 * @param {?} input$
                 * @return {?}
                 */function (input$) {
                    /** @type {?} */
                    var pending = null;
                    /** @type {?} */
                    var filteredInput$ = input$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                     * @param {?} open
                     * @return {?}
                     */function (/**
                     * @param {?} open
                     * @return {?}
                     */ open) { return ({ open: open }); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        /** @type {?} */
                        var currentlyOpen = isOpenedFn();
                        if (currentlyOpen !== event.open && (!pending || pending.open === currentlyOpen)) {
                            pending = event;
                            return true;
                        }
                        if (pending && pending.open !== event.open) {
                            pending = null;
                        }
                        return false;
                    })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
                    /** @type {?} */
                    var delayedOpen$ = filteredInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) { return event.open; })), delayOrNoop(openDelay));
                    /** @type {?} */
                    var delayedClose$ = filteredInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) { return !event.open; })), delayOrNoop(closeDelay));
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(delayedOpen$, delayedClose$)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                 * @param {?} event
                 * @return {?}
                 */function (/**
                 * @param {?} event
                 * @return {?}
                 */ event) {
                        if (event === pending) {
                            pending = null;
                            return event.open !== isOpenedFn();
                        }
                        return false;
                    })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) { return event.open; })));
                });
            }
            /**
             * @param {?} renderer
             * @param {?} nativeElement
             * @param {?} triggers
             * @param {?} isOpenedFn
             * @param {?} openFn
             * @param {?} closeFn
             * @param {?=} openDelay
             * @param {?=} closeDelay
             * @return {?}
             */
            function listenToTriggers(renderer, nativeElement, triggers, isOpenedFn, openFn, closeFn, openDelay, closeDelay) {
                if (openDelay === void 0) { openDelay = 0; }
                if (closeDelay === void 0) { closeDelay = 0; }
                /** @type {?} */
                var parsedTriggers = parseTriggers(triggers);
                if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
                    return ( /**
                     * @return {?}
                     */function () { });
                }
                /** @type {?} */
                var subscription = observeTriggers(renderer, nativeElement, parsedTriggers, isOpenedFn)
                    .pipe(triggerDelay(openDelay, closeDelay, isOpenedFn))
                    .subscribe(( /**
             * @param {?} open
             * @return {?}
             */function (/**
             * @param {?} open
             * @return {?}
             */ open) { return (open ? openFn() : closeFn()); }));
                return ( /**
                 * @return {?}
                 */function () { return subscription.unsubscribe(); });
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
             *
             * You can inject this service, typically in your root component, and customize the values of its properties in
             * order to provide default values for all the popovers used in the application.
             */
            var NgbPopoverConfig = /** @class */ (function () {
                function NgbPopoverConfig() {
                    this.autoClose = true;
                    this.placement = 'auto';
                    this.triggers = 'click';
                    this.disablePopover = false;
                    this.openDelay = 0;
                    this.closeDelay = 0;
                }
                return NgbPopoverConfig;
            }());
            NgbPopoverConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbPopoverConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbPopoverConfig_Factory() { return new NgbPopoverConfig(); }, token: NgbPopoverConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var nextId$3 = 0;
            var NgbPopoverWindow = /** @class */ (function () {
                function NgbPopoverWindow() {
                }
                /**
                 * @return {?}
                 */
                NgbPopoverWindow.prototype.isTitleTemplate = function () { return this.title instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]; };
                return NgbPopoverWindow;
            }());
            NgbPopoverWindow.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-popover-window',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            host: { '[class]': '"popover" + (popoverClass ? " " + popoverClass : "")', 'role': 'tooltip', '[id]': 'id' },
                            template: "\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-header\" *ngIf=\"title != null\">\n      <ng-template #simpleTitle>{{title}}</ng-template>\n      <ng-template [ngTemplateOutlet]=\"isTitleTemplate() ? title : simpleTitle\" [ngTemplateOutletContext]=\"context\"></ng-template>\n    </h3>\n    <div class=\"popover-body\"><ng-content></ng-content></div>",
                            styles: ["ngb-popover-window.bs-popover-bottom>.arrow,ngb-popover-window.bs-popover-top>.arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left>.arrow,ngb-popover-window.bs-popover-top-left>.arrow{left:2em}ngb-popover-window.bs-popover-bottom-right>.arrow,ngb-popover-window.bs-popover-top-right>.arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left>.arrow,ngb-popover-window.bs-popover-right>.arrow{top:50%;margin-top:-.5rem}ngb-popover-window.bs-popover-left-top>.arrow,ngb-popover-window.bs-popover-right-top>.arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom>.arrow,ngb-popover-window.bs-popover-right-bottom>.arrow{top:auto;bottom:.7em}"]
                        }] }
            ];
            NgbPopoverWindow.propDecorators = {
                title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                popoverClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                context: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * A lightweight and extensible directive for fancy popover creation.
             */
            var NgbPopover = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 * @param {?} _renderer
                 * @param {?} injector
                 * @param {?} componentFactoryResolver
                 * @param {?} viewContainerRef
                 * @param {?} config
                 * @param {?} _ngZone
                 * @param {?} _document
                 * @param {?} _changeDetector
                 * @param {?} _applicationRef
                 */
                function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector, _applicationRef) {
                    var _this = this;
                    this._elementRef = _elementRef;
                    this._renderer = _renderer;
                    this._ngZone = _ngZone;
                    this._document = _document;
                    this._changeDetector = _changeDetector;
                    this._applicationRef = _applicationRef;
                    /**
                     * An event emitted when the popover is shown. Contains no payload.
                     */
                    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * An event emitted when the popover is hidden. Contains no payload.
                     */
                    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this._ngbPopoverWindowId = "ngb-popover-" + nextId$3++;
                    this.autoClose = config.autoClose;
                    this.placement = config.placement;
                    this.triggers = config.triggers;
                    this.container = config.container;
                    this.disablePopover = config.disablePopover;
                    this.popoverClass = config.popoverClass;
                    this.openDelay = config.openDelay;
                    this.closeDelay = config.closeDelay;
                    this._popupService = new PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver, _applicationRef);
                    this._zoneSubscription = _ngZone.onStable.subscribe(( /**
                     * @return {?}
                     */function () {
                        if (_this._windowRef) {
                            positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body', 'bs-popover');
                        }
                    }));
                }
                /**
                 * @private
                 * @return {?}
                 */
                NgbPopover.prototype._isDisabled = function () {
                    if (this.disablePopover) {
                        return true;
                    }
                    if (!this.ngbPopover && !this.popoverTitle) {
                        return true;
                    }
                    return false;
                };
                /**
                 * Opens the popover.
                 *
                 * This is considered to be a "manual" triggering.
                 * The `context` is an optional value to be injected into the popover template when it is created.
                 * @param {?=} context
                 * @return {?}
                 */
                NgbPopover.prototype.open = function (context) {
                    var _this = this;
                    if (!this._windowRef && !this._isDisabled()) {
                        this._windowRef = this._popupService.open(this.ngbPopover, context);
                        this._windowRef.instance.title = this.popoverTitle;
                        this._windowRef.instance.context = context;
                        this._windowRef.instance.popoverClass = this.popoverClass;
                        this._windowRef.instance.id = this._ngbPopoverWindowId;
                        this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
                        if (this.container === 'body') {
                            this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
                        }
                        // We need to detect changes, because we don't know where .open() might be called from.
                        // Ex. opening popover from one of lifecycle hooks that run after the CD
                        // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception
                        this._windowRef.changeDetectorRef.detectChanges();
                        // We need to mark for check, because popover won't work inside the OnPush component.
                        // Ex. when we use expression like `{{ popover.isOpen() : 'opened' : 'closed' }}`
                        // inside the template of an OnPush component and we change the popover from
                        // open -> closed, the expression in question won't be updated unless we explicitly
                        // mark the parent component to be checked.
                        this._windowRef.changeDetectorRef.markForCheck();
                        ngbAutoClose(this._ngZone, this._document, this.autoClose, ( /**
                         * @return {?}
                         */function () { return _this.close(); }), this.hidden, [this._windowRef.location.nativeElement]);
                        this.shown.emit();
                    }
                };
                /**
                 * Closes the popover.
                 *
                 * This is considered to be a "manual" triggering of the popover.
                 * @return {?}
                 */
                NgbPopover.prototype.close = function () {
                    if (this._windowRef) {
                        this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
                        this._popupService.close();
                        this._windowRef = null;
                        this.hidden.emit();
                        this._changeDetector.markForCheck();
                    }
                };
                /**
                 * Toggles the popover.
                 *
                 * This is considered to be a "manual" triggering of the popover.
                 * @return {?}
                 */
                NgbPopover.prototype.toggle = function () {
                    if (this._windowRef) {
                        this.close();
                    }
                    else {
                        this.open();
                    }
                };
                /**
                 * Returns `true`, if the popover is currently shown.
                 * @return {?}
                 */
                NgbPopover.prototype.isOpen = function () { return this._windowRef != null; };
                /**
                 * @return {?}
                 */
                NgbPopover.prototype.ngOnInit = function () {
                    this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
                };
                /**
                 * @param {?} __0
                 * @return {?}
                 */
                NgbPopover.prototype.ngOnChanges = function (_a) {
                    var ngbPopover = _a.ngbPopover, popoverTitle = _a.popoverTitle, disablePopover = _a.disablePopover, popoverClass = _a.popoverClass;
                    if (popoverClass && this.isOpen()) {
                        this._windowRef.instance.popoverClass = popoverClass.currentValue;
                    }
                    // close popover if title and content become empty, or disablePopover set to true
                    if ((ngbPopover || popoverTitle || disablePopover) && this._isDisabled()) {
                        this.close();
                    }
                };
                /**
                 * @return {?}
                 */
                NgbPopover.prototype.ngOnDestroy = function () {
                    this.close();
                    // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
                    // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
                    if (this._unregisterListenersFn) {
                        this._unregisterListenersFn();
                    }
                    this._zoneSubscription.unsubscribe();
                };
                return NgbPopover;
            }());
            NgbPopover.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' },] }
            ];
            /** @nocollapse */
            NgbPopover.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
                { type: NgbPopoverConfig },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }
            ]; };
            NgbPopover.propDecorators = {
                autoClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                ngbPopover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                popoverTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                disablePopover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                popoverClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                openDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                closeDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                shown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbPopoverModule = /** @class */ (function () {
                function NgbPopoverModule() {
                }
                return NgbPopoverModule;
            }());
            NgbPopoverModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: [NgbPopover, NgbPopoverWindow],
                            exports: [NgbPopover],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                            entryComponents: [NgbPopoverWindow]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [`NgbProgressbar`](#/components/progressbar/api#NgbProgressbar) component.
             *
             * You can inject this service, typically in your root component, and customize the values of its properties in
             * order to provide default values for all the progress bars used in the application.
             */
            var NgbProgressbarConfig = /** @class */ (function () {
                function NgbProgressbarConfig() {
                    this.max = 100;
                    this.animated = false;
                    this.striped = false;
                    this.showValue = false;
                }
                return NgbProgressbarConfig;
            }());
            NgbProgressbarConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbProgressbarConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbProgressbarConfig_Factory() { return new NgbProgressbarConfig(); }, token: NgbProgressbarConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A directive that provides feedback on the progress of a workflow or an action.
             */
            var NgbProgressbar = /** @class */ (function () {
                /**
                 * @param {?} config
                 */
                function NgbProgressbar(config) {
                    /**
                     * The current value for the progress bar.
                     *
                     * Should be in the `[0, max]` range.
                     */
                    this.value = 0;
                    this.max = config.max;
                    this.animated = config.animated;
                    this.striped = config.striped;
                    this.type = config.type;
                    this.showValue = config.showValue;
                    this.height = config.height;
                }
                /**
                 * @return {?}
                 */
                NgbProgressbar.prototype.getValue = function () { return getValueInRange(this.value, this.max); };
                /**
                 * @return {?}
                 */
                NgbProgressbar.prototype.getPercentValue = function () { return 100 * this.getValue() / this.max; };
                return NgbProgressbar;
            }());
            NgbProgressbar.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-progressbar',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            template: "\n    <div class=\"progress\" [style.height]=\"height\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?\n    ' progress-bar-striped' : ''}}\" role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n    [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\" i18n=\"@@ngb.progressbar.value\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
                        }] }
            ];
            /** @nocollapse */
            NgbProgressbar.ctorParameters = function () { return [
                { type: NgbProgressbarConfig }
            ]; };
            NgbProgressbar.propDecorators = {
                max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                animated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                striped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                showValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbProgressbarModule = /** @class */ (function () {
                function NgbProgressbarModule() {
                }
                return NgbProgressbarModule;
            }());
            NgbProgressbarModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbProgressbar], exports: [NgbProgressbar], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [`NgbRating`](#/components/rating/api#NgbRating) component.
             *
             * You can inject this service, typically in your root component, and customize the values of its properties in
             * order to provide default values for all the ratings used in the application.
             */
            var NgbRatingConfig = /** @class */ (function () {
                function NgbRatingConfig() {
                    this.max = 10;
                    this.readonly = false;
                    this.resettable = false;
                }
                return NgbRatingConfig;
            }());
            NgbRatingConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbRatingConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbRatingConfig_Factory() { return new NgbRatingConfig(); }, token: NgbRatingConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NGB_RATING_VALUE_ACCESSOR = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgbRating; })),
                multi: true
            };
            /**
             * A directive that helps visualising and interacting with a star rating bar.
             */
            var NgbRating = /** @class */ (function () {
                /**
                 * @param {?} config
                 * @param {?} _changeDetectorRef
                 */
                function NgbRating(config, _changeDetectorRef) {
                    this._changeDetectorRef = _changeDetectorRef;
                    this.contexts = [];
                    this.disabled = false;
                    /**
                     * An event emitted when the user is hovering over a given rating.
                     *
                     * Event payload equals to the rating being hovered over.
                     */
                    this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * An event emitted when the user stops hovering over a given rating.
                     *
                     * Event payload equals to the rating of the last item being hovered over.
                     */
                    this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * An event emitted when the user selects a new rating.
                     *
                     * Event payload equals to the newly selected rating.
                     */
                    this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this.max = config.max;
                    this.readonly = config.readonly;
                }
                /**
                 * @return {?}
                 */
                NgbRating.prototype.ariaValueText = function () { return this.nextRate + " out of " + this.max; };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                NgbRating.prototype.enter = function (value) {
                    if (!this.readonly && !this.disabled) {
                        this._updateState(value);
                    }
                    this.hover.emit(value);
                };
                /**
                 * @return {?}
                 */
                NgbRating.prototype.handleBlur = function () { this.onTouched(); };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                NgbRating.prototype.handleClick = function (value) { this.update(this.resettable && this.rate === value ? 0 : value); };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                NgbRating.prototype.handleKeyDown = function (event) {
                    // tslint:disable-next-line:deprecation
                    switch (event.which) {
                        case Key.ArrowDown:
                        case Key.ArrowLeft:
                            this.update(this.rate - 1);
                            break;
                        case Key.ArrowUp:
                        case Key.ArrowRight:
                            this.update(this.rate + 1);
                            break;
                        case Key.Home:
                            this.update(0);
                            break;
                        case Key.End:
                            this.update(this.max);
                            break;
                        default:
                            return;
                    }
                    // note 'return' in default case
                    event.preventDefault();
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                NgbRating.prototype.ngOnChanges = function (changes) {
                    if (changes['rate']) {
                        this.update(this.rate);
                    }
                };
                /**
                 * @return {?}
                 */
                NgbRating.prototype.ngOnInit = function () {
                    this.contexts = Array.from({ length: this.max }, ( /**
                     * @param {?} v
                     * @param {?} k
                     * @return {?}
                     */function (v, k) { return ({ fill: 0, index: k }); }));
                    this._updateState(this.rate);
                };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbRating.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbRating.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * @return {?}
                 */
                NgbRating.prototype.reset = function () {
                    this.leave.emit(this.nextRate);
                    this._updateState(this.rate);
                };
                /**
                 * @param {?} isDisabled
                 * @return {?}
                 */
                NgbRating.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
                /**
                 * @param {?} value
                 * @param {?=} internalChange
                 * @return {?}
                 */
                NgbRating.prototype.update = function (value, internalChange) {
                    if (internalChange === void 0) { internalChange = true; }
                    /** @type {?} */
                    var newRate = getValueInRange(value, this.max, 0);
                    if (!this.readonly && !this.disabled && this.rate !== newRate) {
                        this.rate = newRate;
                        this.rateChange.emit(this.rate);
                    }
                    if (internalChange) {
                        this.onChange(this.rate);
                        this.onTouched();
                    }
                    this._updateState(this.rate);
                };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                NgbRating.prototype.writeValue = function (value) {
                    this.update(value, false);
                    this._changeDetectorRef.markForCheck();
                };
                /**
                 * @private
                 * @param {?} index
                 * @return {?}
                 */
                NgbRating.prototype._getFillValue = function (index) {
                    /** @type {?} */
                    var diff = this.nextRate - index;
                    if (diff >= 1) {
                        return 100;
                    }
                    if (diff < 1 && diff > 0) {
                        return parseInt((diff * 100).toFixed(2), 10);
                    }
                    return 0;
                };
                /**
                 * @private
                 * @param {?} nextValue
                 * @return {?}
                 */
                NgbRating.prototype._updateState = function (nextValue) {
                    var _this = this;
                    this.nextRate = nextValue;
                    this.contexts.forEach(( /**
                     * @param {?} context
                     * @param {?} index
                     * @return {?}
                     */function (context, index) { return context.fill = _this._getFillValue(index); }));
                };
                return NgbRating;
            }());
            NgbRating.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-rating',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            host: {
                                'class': 'd-inline-flex',
                                'tabindex': '0',
                                'role': 'slider',
                                'aria-valuemin': '0',
                                '[attr.aria-valuemax]': 'max',
                                '[attr.aria-valuenow]': 'nextRate',
                                '[attr.aria-valuetext]': 'ariaValueText()',
                                '[attr.aria-disabled]': 'readonly ? true : null',
                                '(blur)': 'handleBlur()',
                                '(keydown)': 'handleKeyDown($event)',
                                '(mouseleave)': 'reset()'
                            },
                            template: "\n    <ng-template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>\n    <ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n      <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n      <span (mouseenter)=\"enter(index + 1)\" (click)=\"handleClick(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n        <ng-template [ngTemplateOutlet]=\"starTemplate || starTemplateFromContent || t\" [ngTemplateOutletContext]=\"contexts[index]\">\n        </ng-template>\n      </span>\n    </ng-template>\n  ",
                            providers: [NGB_RATING_VALUE_ACCESSOR]
                        }] }
            ];
            /** @nocollapse */
            NgbRating.ctorParameters = function () { return [
                { type: NgbRatingConfig },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
            ]; };
            NgbRating.propDecorators = {
                max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                rate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                resettable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                starTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                starTemplateFromContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: false },] }],
                hover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                leave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                rateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbRatingModule = /** @class */ (function () {
                function NgbRatingModule() {
                }
                return NgbRatingModule;
            }());
            NgbRatingModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbRating], exports: [NgbRating], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [`NgbTabset`](#/components/tabset/api#NgbTabset) component.
             *
             * You can inject this service, typically in your root component, and customize the values of its properties in
             * order to provide default values for all the tabsets used in the application.
             */
            var NgbTabsetConfig = /** @class */ (function () {
                function NgbTabsetConfig() {
                    this.justify = 'start';
                    this.orientation = 'horizontal';
                    this.type = 'tabs';
                }
                return NgbTabsetConfig;
            }());
            NgbTabsetConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbTabsetConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbTabsetConfig_Factory() { return new NgbTabsetConfig(); }, token: NgbTabsetConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var nextId$4 = 0;
            /**
             * A directive to wrap tab titles that need to contain HTML markup or other directives.
             *
             * Alternatively you could use the `NgbTab.title` input for string titles.
             */
            var NgbTabTitle = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function NgbTabTitle(templateRef) {
                    this.templateRef = templateRef;
                }
                return NgbTabTitle;
            }());
            NgbTabTitle.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbTabTitle]' },] }
            ];
            /** @nocollapse */
            NgbTabTitle.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * A directive to wrap content to be displayed in a tab.
             */
            var NgbTabContent = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function NgbTabContent(templateRef) {
                    this.templateRef = templateRef;
                }
                return NgbTabContent;
            }());
            NgbTabContent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbTabContent]' },] }
            ];
            /** @nocollapse */
            NgbTabContent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * A directive representing an individual tab.
             */
            var NgbTab = /** @class */ (function () {
                function NgbTab() {
                    /**
                     * The tab identifier.
                     *
                     * Must be unique for the entire document for proper accessibility support.
                     */
                    this.id = "ngb-tab-" + nextId$4++;
                    /**
                     * If `true`, the current tab is disabled and can't be toggled.
                     */
                    this.disabled = false;
                }
                /**
                 * @return {?}
                 */
                NgbTab.prototype.ngAfterContentChecked = function () {
                    // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
                    // only @ContentChildren allows us to specify the {descendants: false} option.
                    // Without {descendants: false} we are hitting bugs described in:
                    // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
                    this.titleTpl = this.titleTpls.first;
                    this.contentTpl = this.contentTpls.first;
                };
                return NgbTab;
            }());
            NgbTab.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngb-tab' },] }
            ];
            NgbTab.propDecorators = {
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                titleTpls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbTabTitle, { descendants: false },] }],
                contentTpls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbTabContent, { descendants: false },] }]
            };
            /**
             * A component that makes it easy to create tabbed interface.
             */
            var NgbTabset = /** @class */ (function () {
                /**
                 * @param {?} config
                 */
                function NgbTabset(config) {
                    /**
                     * If `true`, non-visible tabs content will be removed from DOM. Otherwise it will just be hidden.
                     */
                    this.destroyOnHide = true;
                    /**
                     * A tab change event emitted right before the tab change happens.
                     *
                     * See [`NgbTabChangeEvent`](#/components/tabset/api#NgbTabChangeEvent) for payload details.
                     */
                    this.tabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.type = config.type;
                    this.justify = config.justify;
                    this.orientation = config.orientation;
                }
                Object.defineProperty(NgbTabset.prototype, "justify", {
                    /**
                     * The horizontal alignment of the tabs with flexbox utilities.
                     * @param {?} className
                     * @return {?}
                     */
                    set: function (className) {
                        if (className === 'fill' || className === 'justified') {
                            this.justifyClass = "nav-" + className;
                        }
                        else {
                            this.justifyClass = "justify-content-" + className;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Selects the tab with the given id and shows its associated content panel.
                 *
                 * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
                 * hidden depending on the `destroyOnHide` value.
                 * @param {?} tabId
                 * @return {?}
                 */
                NgbTabset.prototype.select = function (tabId) {
                    /** @type {?} */
                    var selectedTab = this._getTabById(tabId);
                    if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
                        /** @type {?} */
                        var defaultPrevented_2 = false;
                        this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: ( /**
                                 * @return {?}
                                 */function () { defaultPrevented_2 = true; }) });
                        if (!defaultPrevented_2) {
                            this.activeId = selectedTab.id;
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                NgbTabset.prototype.ngAfterContentChecked = function () {
                    // auto-correct activeId that might have been set incorrectly as input
                    /** @type {?} */
                    var activeTab = this._getTabById(this.activeId);
                    this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
                };
                /**
                 * @private
                 * @param {?} id
                 * @return {?}
                 */
                NgbTabset.prototype._getTabById = function (id) {
                    /** @type {?} */
                    var tabsWithId = this.tabs.filter(( /**
                     * @param {?} tab
                     * @return {?}
                     */function (/**
                     * @param {?} tab
                     * @return {?}
                     */ tab) { return tab.id === id; }));
                    return tabsWithId.length ? tabsWithId[0] : null;
                };
                return NgbTabset;
            }());
            NgbTabset.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-tabset',
                            exportAs: 'ngbTabset',
                            template: "\n    <ul [class]=\"'nav nav-' + type + (orientation == 'horizontal'?  ' ' + justifyClass : ' flex-column')\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"select(tab.id); $event.preventDefault()\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-selected]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl?.templateRef\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
                        }] }
            ];
            /** @nocollapse */
            NgbTabset.ctorParameters = function () { return [
                { type: NgbTabsetConfig }
            ]; };
            NgbTabset.propDecorators = {
                tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbTab,] }],
                activeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                destroyOnHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                justify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                tabChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NGB_TABSET_DIRECTIVES = [NgbTabset, NgbTab, NgbTabContent, NgbTabTitle];
            var NgbTabsetModule = /** @class */ (function () {
                function NgbTabsetModule() {
                }
                return NgbTabsetModule;
            }());
            NgbTabsetModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbTime = /** @class */ (function () {
                /**
                 * @param {?=} hour
                 * @param {?=} minute
                 * @param {?=} second
                 */
                function NgbTime(hour, minute, second) {
                    this.hour = toInteger(hour);
                    this.minute = toInteger(minute);
                    this.second = toInteger(second);
                }
                /**
                 * @param {?=} step
                 * @return {?}
                 */
                NgbTime.prototype.changeHour = function (step) {
                    if (step === void 0) { step = 1; }
                    this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
                };
                /**
                 * @param {?} hour
                 * @return {?}
                 */
                NgbTime.prototype.updateHour = function (hour) {
                    if (isNumber(hour)) {
                        this.hour = (hour < 0 ? 24 + hour : hour) % 24;
                    }
                    else {
                        this.hour = NaN;
                    }
                };
                /**
                 * @param {?=} step
                 * @return {?}
                 */
                NgbTime.prototype.changeMinute = function (step) {
                    if (step === void 0) { step = 1; }
                    this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
                };
                /**
                 * @param {?} minute
                 * @return {?}
                 */
                NgbTime.prototype.updateMinute = function (minute) {
                    if (isNumber(minute)) {
                        this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
                        this.changeHour(Math.floor(minute / 60));
                    }
                    else {
                        this.minute = NaN;
                    }
                };
                /**
                 * @param {?=} step
                 * @return {?}
                 */
                NgbTime.prototype.changeSecond = function (step) {
                    if (step === void 0) { step = 1; }
                    this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
                };
                /**
                 * @param {?} second
                 * @return {?}
                 */
                NgbTime.prototype.updateSecond = function (second) {
                    if (isNumber(second)) {
                        this.second = second < 0 ? 60 + second % 60 : second % 60;
                        this.changeMinute(Math.floor(second / 60));
                    }
                    else {
                        this.second = NaN;
                    }
                };
                /**
                 * @param {?=} checkSecs
                 * @return {?}
                 */
                NgbTime.prototype.isValid = function (checkSecs) {
                    if (checkSecs === void 0) { checkSecs = true; }
                    return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
                };
                /**
                 * @return {?}
                 */
                NgbTime.prototype.toString = function () { return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0); };
                return NgbTime;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [`NgbTimepicker`](#/components/timepicker/api#NgbTimepicker) component.
             *
             * You can inject this service, typically in your root component, and customize the values of its properties in
             * order to provide default values for all the timepickers used in the application.
             */
            var NgbTimepickerConfig = /** @class */ (function () {
                function NgbTimepickerConfig() {
                    this.meridian = false;
                    this.spinners = true;
                    this.seconds = false;
                    this.hourStep = 1;
                    this.minuteStep = 1;
                    this.secondStep = 1;
                    this.disabled = false;
                    this.readonlyInputs = false;
                    this.size = 'medium';
                }
                return NgbTimepickerConfig;
            }());
            NgbTimepickerConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbTimepickerConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbTimepickerConfig_Factory() { return new NgbTimepickerConfig(); }, token: NgbTimepickerConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @return {?}
             */
            function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
                return new NgbTimeStructAdapter();
            }
            /**
             * An abstract service that does the conversion between the internal timepicker `NgbTimeStruct` model and
             * any provided user time model `T`, ex. a string, a native date, etc.
             *
             * The adapter is used **only** for conversion when binding timepicker to a form control,
             * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
             *
             * The default timepicker implementation assumes we use `NgbTimeStruct` as a user model.
             *
             * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
             *
             * \@since 2.2.0
             * @abstract
             * @template T
             */
            var NgbTimeAdapter = /** @class */ (function () {
                function NgbTimeAdapter() {
                }
                return NgbTimeAdapter;
            }());
            NgbTimeAdapter.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY },] }
            ];
            /** @nocollapse */ NgbTimeAdapter.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY, token: NgbTimeAdapter, providedIn: "root" });
            var NgbTimeStructAdapter = /** @class */ (function (_super) {
                __extends(NgbTimeStructAdapter, _super);
                function NgbTimeStructAdapter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Converts a NgbTimeStruct value into NgbTimeStruct value
                 * @param {?} time
                 * @return {?}
                 */
                NgbTimeStructAdapter.prototype.fromModel = function (time) {
                    return (time && isInteger(time.hour) && isInteger(time.minute)) ?
                        { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
                        null;
                };
                /**
                 * Converts a NgbTimeStruct value into NgbTimeStruct value
                 * @param {?} time
                 * @return {?}
                 */
                NgbTimeStructAdapter.prototype.toModel = function (time) {
                    return (time && isInteger(time.hour) && isInteger(time.minute)) ?
                        { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
                        null;
                };
                return NgbTimeStructAdapter;
            }(NgbTimeAdapter));
            NgbTimeStructAdapter.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} locale
             * @return {?}
             */
            function NGB_TIMEPICKER_I18N_FACTORY(locale) {
                return new NgbTimepickerI18nDefault(locale);
            }
            /**
             * Type of the service supplying day periods (for example, 'AM' and 'PM') to NgbTimepicker component.
             * The default implementation of this service honors the Angular locale, and uses the registered locale data,
             * as explained in the Angular i18n guide.
             * @abstract
             */
            var NgbTimepickerI18n = /** @class */ (function () {
                function NgbTimepickerI18n() {
                }
                return NgbTimepickerI18n;
            }());
            NgbTimepickerI18n.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root', useFactory: NGB_TIMEPICKER_I18N_FACTORY, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]] },] }
            ];
            /** @nocollapse */ NgbTimepickerI18n.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbTimepickerI18n_Factory() { return NGB_TIMEPICKER_I18N_FACTORY(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); }, token: NgbTimepickerI18n, providedIn: "root" });
            var NgbTimepickerI18nDefault = /** @class */ (function (_super) {
                __extends(NgbTimepickerI18nDefault, _super);
                /**
                 * @param {?} locale
                 */
                function NgbTimepickerI18nDefault(locale) {
                    var _this = _super.call(this) || this;
                    _this._periods = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleDayPeriods"])(locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Narrow);
                    return _this;
                }
                /**
                 * @return {?}
                 */
                NgbTimepickerI18nDefault.prototype.getMorningPeriod = function () { return this._periods[0]; };
                /**
                 * @return {?}
                 */
                NgbTimepickerI18nDefault.prototype.getAfternoonPeriod = function () { return this._periods[1]; };
                return NgbTimepickerI18nDefault;
            }(NgbTimepickerI18n));
            NgbTimepickerI18nDefault.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            NgbTimepickerI18nDefault.ctorParameters = function () { return [
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NGB_TIMEPICKER_VALUE_ACCESSOR = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgbTimepicker; })),
                multi: true
            };
            /**
             * A directive that helps with wth picking hours, minutes and seconds.
             */
            var NgbTimepicker = /** @class */ (function () {
                /**
                 * @param {?} _config
                 * @param {?} _ngbTimeAdapter
                 * @param {?} _cd
                 * @param {?} i18n
                 */
                function NgbTimepicker(_config, _ngbTimeAdapter, _cd, i18n) {
                    this._config = _config;
                    this._ngbTimeAdapter = _ngbTimeAdapter;
                    this._cd = _cd;
                    this.i18n = i18n;
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this.meridian = _config.meridian;
                    this.spinners = _config.spinners;
                    this.seconds = _config.seconds;
                    this.hourStep = _config.hourStep;
                    this.minuteStep = _config.minuteStep;
                    this.secondStep = _config.secondStep;
                    this.disabled = _config.disabled;
                    this.readonlyInputs = _config.readonlyInputs;
                    this.size = _config.size;
                }
                Object.defineProperty(NgbTimepicker.prototype, "hourStep", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._hourStep; },
                    /**
                     * The number of hours to add/subtract when clicking hour spinners.
                     * @param {?} step
                     * @return {?}
                     */
                    set: function (step) {
                        this._hourStep = isInteger(step) ? step : this._config.hourStep;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbTimepicker.prototype, "minuteStep", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._minuteStep; },
                    /**
                     * The number of minutes to add/subtract when clicking minute spinners.
                     * @param {?} step
                     * @return {?}
                     */
                    set: function (step) {
                        this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbTimepicker.prototype, "secondStep", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._secondStep; },
                    /**
                     * The number of seconds to add/subtract when clicking second spinners.
                     * @param {?} step
                     * @return {?}
                     */
                    set: function (step) {
                        this._secondStep = isInteger(step) ? step : this._config.secondStep;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @param {?} value
                 * @return {?}
                 */
                NgbTimepicker.prototype.writeValue = function (value) {
                    /** @type {?} */
                    var structValue = this._ngbTimeAdapter.fromModel(value);
                    this.model = structValue ? new NgbTime(structValue.hour, structValue.minute, structValue.second) : new NgbTime();
                    if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
                        this.model.second = 0;
                    }
                    this._cd.markForCheck();
                };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbTimepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbTimepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * @param {?} isDisabled
                 * @return {?}
                 */
                NgbTimepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
                /**
                 * @param {?} step
                 * @return {?}
                 */
                NgbTimepicker.prototype.changeHour = function (step) {
                    this.model.changeHour(step);
                    this.propagateModelChange();
                };
                /**
                 * @param {?} step
                 * @return {?}
                 */
                NgbTimepicker.prototype.changeMinute = function (step) {
                    this.model.changeMinute(step);
                    this.propagateModelChange();
                };
                /**
                 * @param {?} step
                 * @return {?}
                 */
                NgbTimepicker.prototype.changeSecond = function (step) {
                    this.model.changeSecond(step);
                    this.propagateModelChange();
                };
                /**
                 * @param {?} newVal
                 * @return {?}
                 */
                NgbTimepicker.prototype.updateHour = function (newVal) {
                    /** @type {?} */
                    var isPM = this.model.hour >= 12;
                    /** @type {?} */
                    var enteredHour = toInteger(newVal);
                    if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
                        this.model.updateHour(enteredHour + 12);
                    }
                    else {
                        this.model.updateHour(enteredHour);
                    }
                    this.propagateModelChange();
                };
                /**
                 * @param {?} newVal
                 * @return {?}
                 */
                NgbTimepicker.prototype.updateMinute = function (newVal) {
                    this.model.updateMinute(toInteger(newVal));
                    this.propagateModelChange();
                };
                /**
                 * @param {?} newVal
                 * @return {?}
                 */
                NgbTimepicker.prototype.updateSecond = function (newVal) {
                    this.model.updateSecond(toInteger(newVal));
                    this.propagateModelChange();
                };
                /**
                 * @return {?}
                 */
                NgbTimepicker.prototype.toggleMeridian = function () {
                    if (this.meridian) {
                        this.changeHour(12);
                    }
                };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                NgbTimepicker.prototype.formatHour = function (value) {
                    if (isNumber(value)) {
                        if (this.meridian) {
                            return padNumber(value % 12 === 0 ? 12 : value % 12);
                        }
                        else {
                            return padNumber(value % 24);
                        }
                    }
                    else {
                        return padNumber(NaN);
                    }
                };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                NgbTimepicker.prototype.formatMinSec = function (value) { return padNumber(value); };
                Object.defineProperty(NgbTimepicker.prototype, "isSmallSize", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this.size === 'small'; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgbTimepicker.prototype, "isLargeSize", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this.size === 'large'; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                NgbTimepicker.prototype.ngOnChanges = function (changes) {
                    if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
                        this.model.second = 0;
                        this.propagateModelChange(false);
                    }
                };
                /**
                 * @private
                 * @param {?=} touched
                 * @return {?}
                 */
                NgbTimepicker.prototype.propagateModelChange = function (touched) {
                    if (touched === void 0) { touched = true; }
                    if (touched) {
                        this.onTouched();
                    }
                    if (this.model.isValid(this.seconds)) {
                        this.onChange(this._ngbTimeAdapter.toModel({ hour: this.model.hour, minute: this.model.minute, second: this.model.second }));
                    }
                    else {
                        this.onChange(this._ngbTimeAdapter.toModel(null));
                    }
                };
                return NgbTimepicker;
            }());
            NgbTimepicker.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-timepicker',
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            template: "\n    <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <div class=\"ngb-tp\">\n        <div class=\"ngb-tp-input-container ngb-tp-hour\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeHour(hourStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-hours\">Increment hours</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" placeholder=\"HH\" i18n-placeholder=\"@@ngb.timepicker.HH\"\n            [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($event.target.value)\"\n            [readOnly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Hours\" i18n-aria-label=\"@@ngb.timepicker.hours\"\n            (keydown.ArrowUp)=\"changeHour(hourStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeHour(-hourStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeHour(-hourStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.decrement-hours\">Decrement hours</span>\n          </button>\n        </div>\n        <div class=\"ngb-tp-spacer\">:</div>\n        <div class=\"ngb-tp-input-container ngb-tp-minute\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeMinute(minuteStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-minutes\">Increment minutes</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" placeholder=\"MM\" i18n-placeholder=\"@@ngb.timepicker.MM\"\n            [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($event.target.value)\"\n            [readOnly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Minutes\" i18n-aria-label=\"@@ngb.timepicker.minutes\"\n            (keydown.ArrowUp)=\"changeMinute(minuteStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeMinute(-minuteStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeMinute(-minuteStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"  [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\"  i18n=\"@@ngb.timepicker.decrement-minutes\">Decrement minutes</span>\n          </button>\n        </div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-spacer\">:</div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-input-container ngb-tp-second\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeSecond(secondStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-seconds\">Increment seconds</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" placeholder=\"SS\" i18n-placeholder=\"@@ngb.timepicker.SS\"\n            [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($event.target.value)\"\n            [readOnly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Seconds\" i18n-aria-label=\"@@ngb.timepicker.seconds\"\n            (keydown.ArrowUp)=\"changeSecond(secondStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeSecond(-secondStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeSecond(-secondStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"  [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.decrement-seconds\">Decrement seconds</span>\n          </button>\n        </div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-spacer\"></div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-meridian\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\"\n                  (click)=\"toggleMeridian()\">\n            <ng-container *ngIf=\"model?.hour >= 12; else am\" i18n=\"@@ngb.timepicker.PM\">{{ i18n.getAfternoonPeriod() }}</ng-container>\n            <ng-template #am i18n=\"@@ngb.timepicker.AM\">{{ i18n.getMorningPeriod() }}</ng-template>\n          </button>\n        </div>\n      </div>\n    </fieldset>\n  ",
                            providers: [NGB_TIMEPICKER_VALUE_ACCESSOR],
                            styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron::before{border-style:solid;border-width:.29em .29em 0 0;content:\"\";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-meridian,.ngb-tp-minute,.ngb-tp-second{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}"]
                        }] }
            ];
            /** @nocollapse */
            NgbTimepicker.ctorParameters = function () { return [
                { type: NgbTimepickerConfig },
                { type: NgbTimeAdapter },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: NgbTimepickerI18n }
            ]; };
            NgbTimepicker.propDecorators = {
                meridian: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                spinners: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                seconds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                hourStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                minuteStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                secondStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                readonlyInputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbTimepickerModule = /** @class */ (function () {
                function NgbTimepickerModule() {
                }
                return NgbTimepickerModule;
            }());
            NgbTimepickerModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbTimepicker], exports: [NgbTimepicker], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Configuration service for the NgbToast component. You can inject this service, typically in your root component,
             * and customize the values of its properties in order to provide default values for all the toasts used in the
             * application.
             *
             * \@since 5.0.0
             */
            var NgbToastConfig = /** @class */ (function () {
                function NgbToastConfig() {
                    this.autohide = true;
                    this.delay = 500;
                    this.ariaLive = 'polite';
                }
                return NgbToastConfig;
            }());
            NgbToastConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbToastConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbToastConfig_Factory() { return new NgbToastConfig(); }, token: NgbToastConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * This directive allows the usage of HTML markup or other directives
             * inside of the toast's header.
             *
             * \@since 5.0.0
             */
            var NgbToastHeader = /** @class */ (function () {
                function NgbToastHeader() {
                }
                return NgbToastHeader;
            }());
            NgbToastHeader.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbToastHeader]' },] }
            ];
            /**
             * Toasts provide feedback messages as notifications to the user.
             * Goal is to mimic the push notifications available both on mobile and desktop operating systems.
             *
             * \@since 5.0.0
             */
            var NgbToast = /** @class */ (function () {
                /**
                 * @param {?} ariaLive
                 * @param {?} config
                 */
                function NgbToast(ariaLive, config) {
                    this.ariaLive = ariaLive;
                    /**
                     * A template like `<ng-template ngbToastHeader></ng-template>` can be
                     * used in the projected content to allow markup usage.
                     */
                    this.contentHeaderTpl = null;
                    /**
                     * An event fired immediately when toast's `hide()` method has been called.
                     * It can only occur in 2 different scenarios:
                     * - `autohide` timeout fires
                     * - user clicks on a closing cross (&times)
                     *
                     * Additionally this output is purely informative. The toast won't disappear. It's up to the user to take care of
                     * that.
                     */
                    this.hideOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    if (this.ariaLive == null) {
                        this.ariaLive = config.ariaLive;
                    }
                    this.delay = config.delay;
                    this.autohide = config.autohide;
                }
                /**
                 * @return {?}
                 */
                NgbToast.prototype.ngAfterContentInit = function () { this._init(); };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                NgbToast.prototype.ngOnChanges = function (changes) {
                    if ('autohide' in changes) {
                        this._clearTimeout();
                        this._init();
                    }
                };
                /**
                 * @return {?}
                 */
                NgbToast.prototype.hide = function () {
                    this._clearTimeout();
                    this.hideOutput.emit();
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbToast.prototype._init = function () {
                    var _this = this;
                    if (this.autohide && !this._timeoutID) {
                        this._timeoutID = setTimeout(( /**
                         * @return {?}
                         */function () { return _this.hide(); }), this.delay);
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbToast.prototype._clearTimeout = function () {
                    if (this._timeoutID) {
                        clearTimeout(this._timeoutID);
                        this._timeoutID = null;
                    }
                };
                return NgbToast;
            }());
            NgbToast.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-toast',
                            exportAs: 'ngbToast',
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            host: {
                                'role': 'alert',
                                '[attr.aria-live]': 'ariaLive',
                                'aria-atomic': 'true',
                                '[class.toast]': 'true',
                                '[class.show]': 'true',
                            },
                            template: "\n    <ng-template #headerTpl>\n      <strong class=\"mr-auto\">{{header}}</strong>\n    </ng-template>\n    <ng-template [ngIf]=\"contentHeaderTpl || header\">\n      <div class=\"toast-header\">\n        <ng-template [ngTemplateOutlet]=\"contentHeaderTpl || headerTpl\"></ng-template>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" i18n-aria-label=\"@@ngb.toast.close-aria\" (click)=\"hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </ng-template>\n    <div class=\"toast-body\">\n      <ng-content></ng-content>\n    </div>\n  ",
                            styles: [".ngb-toasts{position:fixed;top:0;right:0;margin:.5em;z-index:1200}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}"]
                        }] }
            ];
            /** @nocollapse */
            NgbToast.ctorParameters = function () { return [
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['aria-live',] }] },
                { type: NgbToastConfig }
            ]; };
            NgbToast.propDecorators = {
                delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                autohide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                contentHeaderTpl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbToastHeader, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
                hideOutput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['hide',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbToastModule = /** @class */ (function () {
                function NgbToastModule() {
                }
                return NgbToastModule;
            }());
            NgbToastModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbToast, NgbToastHeader], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [NgbToast, NgbToastHeader] },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [`NgbTooltip`](#/components/tooltip/api#NgbTooltip) component.
             *
             * You can inject this service, typically in your root component, and customize the values of its properties in
             * order to provide default values for all the tooltips used in the application.
             */
            var NgbTooltipConfig = /** @class */ (function () {
                function NgbTooltipConfig() {
                    this.autoClose = true;
                    this.placement = 'auto';
                    this.triggers = 'hover focus';
                    this.disableTooltip = false;
                    this.openDelay = 0;
                    this.closeDelay = 0;
                }
                return NgbTooltipConfig;
            }());
            NgbTooltipConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbTooltipConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbTooltipConfig_Factory() { return new NgbTooltipConfig(); }, token: NgbTooltipConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var nextId$5 = 0;
            var NgbTooltipWindow = /** @class */ (function () {
                function NgbTooltipWindow() {
                }
                return NgbTooltipWindow;
            }());
            NgbTooltipWindow.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-tooltip-window',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            host: { '[class]': '"tooltip show" + (tooltipClass ? " " + tooltipClass : "")', 'role': 'tooltip', '[id]': 'id' },
                            template: "<div class=\"arrow\"></div><div class=\"tooltip-inner\"><ng-content></ng-content></div>",
                            styles: ["ngb-tooltip-window.bs-tooltip-bottom .arrow,ngb-tooltip-window.bs-tooltip-top .arrow{left:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-bottom-left .arrow,ngb-tooltip-window.bs-tooltip-top-left .arrow{left:1em}ngb-tooltip-window.bs-tooltip-bottom-right .arrow,ngb-tooltip-window.bs-tooltip-top-right .arrow{left:auto;right:.8rem}ngb-tooltip-window.bs-tooltip-left .arrow,ngb-tooltip-window.bs-tooltip-right .arrow{top:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-left-top .arrow,ngb-tooltip-window.bs-tooltip-right-top .arrow{top:.4rem}ngb-tooltip-window.bs-tooltip-left-bottom .arrow,ngb-tooltip-window.bs-tooltip-right-bottom .arrow{top:auto;bottom:.4rem}"]
                        }] }
            ];
            NgbTooltipWindow.propDecorators = {
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                tooltipClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * A lightweight and extensible directive for fancy tooltip creation.
             */
            var NgbTooltip = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 * @param {?} _renderer
                 * @param {?} injector
                 * @param {?} componentFactoryResolver
                 * @param {?} viewContainerRef
                 * @param {?} config
                 * @param {?} _ngZone
                 * @param {?} _document
                 * @param {?} _changeDetector
                 * @param {?} _applicationRef
                 */
                function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector, _applicationRef) {
                    var _this = this;
                    this._elementRef = _elementRef;
                    this._renderer = _renderer;
                    this._ngZone = _ngZone;
                    this._document = _document;
                    this._changeDetector = _changeDetector;
                    this._applicationRef = _applicationRef;
                    /**
                     * An event emitted when the tooltip is shown. Contains no payload.
                     */
                    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * An event emitted when the popover is hidden. Contains no payload.
                     */
                    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this._ngbTooltipWindowId = "ngb-tooltip-" + nextId$5++;
                    this.autoClose = config.autoClose;
                    this.placement = config.placement;
                    this.triggers = config.triggers;
                    this.container = config.container;
                    this.disableTooltip = config.disableTooltip;
                    this.tooltipClass = config.tooltipClass;
                    this.openDelay = config.openDelay;
                    this.closeDelay = config.closeDelay;
                    this._popupService = new PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver, _applicationRef);
                    this._zoneSubscription = _ngZone.onStable.subscribe(( /**
                     * @return {?}
                     */function () {
                        if (_this._windowRef) {
                            positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body', 'bs-tooltip');
                        }
                    }));
                }
                Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._ngbTooltip; },
                    /**
                     * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
                     *
                     * If the content if falsy, the tooltip won't open.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._ngbTooltip = value;
                        if (!value && this._windowRef) {
                            this.close();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Opens the tooltip.
                 *
                 * This is considered to be a "manual" triggering.
                 * The `context` is an optional value to be injected into the tooltip template when it is created.
                 * @param {?=} context
                 * @return {?}
                 */
                NgbTooltip.prototype.open = function (context) {
                    var _this = this;
                    if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
                        this._windowRef = this._popupService.open(this._ngbTooltip, context);
                        this._windowRef.instance.tooltipClass = this.tooltipClass;
                        this._windowRef.instance.id = this._ngbTooltipWindowId;
                        this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
                        if (this.container === 'body') {
                            this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
                        }
                        // We need to detect changes, because we don't know where .open() might be called from.
                        // Ex. opening tooltip from one of lifecycle hooks that run after the CD
                        // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception
                        this._windowRef.changeDetectorRef.detectChanges();
                        // We need to mark for check, because tooltip won't work inside the OnPush component.
                        // Ex. when we use expression like `{{ tooltip.isOpen() : 'opened' : 'closed' }}`
                        // inside the template of an OnPush component and we change the tooltip from
                        // open -> closed, the expression in question won't be updated unless we explicitly
                        // mark the parent component to be checked.
                        this._windowRef.changeDetectorRef.markForCheck();
                        ngbAutoClose(this._ngZone, this._document, this.autoClose, ( /**
                         * @return {?}
                         */function () { return _this.close(); }), this.hidden, [this._windowRef.location.nativeElement]);
                        this.shown.emit();
                    }
                };
                /**
                 * Closes the tooltip.
                 *
                 * This is considered to be a "manual" triggering of the tooltip.
                 * @return {?}
                 */
                NgbTooltip.prototype.close = function () {
                    if (this._windowRef != null) {
                        this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
                        this._popupService.close();
                        this._windowRef = null;
                        this.hidden.emit();
                        this._changeDetector.markForCheck();
                    }
                };
                /**
                 * Toggles the tooltip.
                 *
                 * This is considered to be a "manual" triggering of the tooltip.
                 * @return {?}
                 */
                NgbTooltip.prototype.toggle = function () {
                    if (this._windowRef) {
                        this.close();
                    }
                    else {
                        this.open();
                    }
                };
                /**
                 * Returns `true`, if the popover is currently shown.
                 * @return {?}
                 */
                NgbTooltip.prototype.isOpen = function () { return this._windowRef != null; };
                /**
                 * @return {?}
                 */
                NgbTooltip.prototype.ngOnInit = function () {
                    this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
                };
                /**
                 * @param {?} __0
                 * @return {?}
                 */
                NgbTooltip.prototype.ngOnChanges = function (_a) {
                    var tooltipClass = _a.tooltipClass;
                    if (tooltipClass && this.isOpen()) {
                        this._windowRef.instance.tooltipClass = tooltipClass.currentValue;
                    }
                };
                /**
                 * @return {?}
                 */
                NgbTooltip.prototype.ngOnDestroy = function () {
                    this.close();
                    // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
                    // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
                    if (this._unregisterListenersFn) {
                        this._unregisterListenersFn();
                    }
                    this._zoneSubscription.unsubscribe();
                };
                return NgbTooltip;
            }());
            NgbTooltip.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' },] }
            ];
            /** @nocollapse */
            NgbTooltip.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
                { type: NgbTooltipConfig },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }
            ]; };
            NgbTooltip.propDecorators = {
                autoClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                disableTooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                tooltipClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                openDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                closeDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                shown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                ngbTooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbTooltipModule = /** @class */ (function () {
                function NgbTooltipModule() {
                }
                return NgbTooltipModule;
            }());
            NgbTooltipModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [NgbTooltip, NgbTooltipWindow], exports: [NgbTooltip], entryComponents: [NgbTooltipWindow] },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A component that helps with text highlighting.
             *
             * If splits the `result` text into parts that contain the searched `term` and generates the HTML markup to simplify
             * highlighting:
             *
             * Ex. `result="Alaska"` and `term="as"` will produce `Al<span class="ngb-highlight">as</span>ka`.
             */
            var NgbHighlight = /** @class */ (function () {
                function NgbHighlight() {
                    /**
                     * The CSS class for `<span>` elements wrapping the `term` inside the `result`.
                     */
                    this.highlightClass = 'ngb-highlight';
                }
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                NgbHighlight.prototype.ngOnChanges = function (changes) {
                    /** @type {?} */
                    var result = toString(this.result);
                    /** @type {?} */
                    var terms = Array.isArray(this.term) ? this.term : [this.term];
                    /** @type {?} */
                    var escapedTerms = terms.map(( /**
                     * @param {?} term
                     * @return {?}
                     */function (/**
                     * @param {?} term
                     * @return {?}
                     */ term) { return regExpEscape(toString(term)); })).filter(( /**
                     * @param {?} term
                     * @return {?}
                     */function (/**
                     * @param {?} term
                     * @return {?}
                     */ term) { return term; }));
                    this.parts = escapedTerms.length ? result.split(new RegExp("(" + escapedTerms.join('|') + ")", 'gmi')) : [result];
                };
                return NgbHighlight;
            }());
            NgbHighlight.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-highlight',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
                                "<span *ngIf=\"isOdd; else even\" [class]=\"highlightClass\">{{part}}</span><ng-template #even>{{part}}</ng-template>" +
                                "</ng-template>",
                            styles: [".ngb-highlight{font-weight:700}"]
                        }] }
            ];
            NgbHighlight.propDecorators = {
                highlightClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                result: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                term: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbTypeaheadWindow = /** @class */ (function () {
                function NgbTypeaheadWindow() {
                    this.activeIdx = 0;
                    /**
                     * Flag indicating if the first row should be active initially
                     */
                    this.focusFirst = true;
                    /**
                     * A function used to format a given result before display. This function should return a formatted string without any
                     * HTML markup
                     */
                    this.formatter = toString;
                    /**
                     * Event raised when user selects a particular result row
                     */
                    this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.activeChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                }
                /**
                 * @return {?}
                 */
                NgbTypeaheadWindow.prototype.hasActive = function () { return this.activeIdx > -1 && this.activeIdx < this.results.length; };
                /**
                 * @return {?}
                 */
                NgbTypeaheadWindow.prototype.getActive = function () { return this.results[this.activeIdx]; };
                /**
                 * @param {?} activeIdx
                 * @return {?}
                 */
                NgbTypeaheadWindow.prototype.markActive = function (activeIdx) {
                    this.activeIdx = activeIdx;
                    this._activeChanged();
                };
                /**
                 * @return {?}
                 */
                NgbTypeaheadWindow.prototype.next = function () {
                    if (this.activeIdx === this.results.length - 1) {
                        this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
                    }
                    else {
                        this.activeIdx++;
                    }
                    this._activeChanged();
                };
                /**
                 * @return {?}
                 */
                NgbTypeaheadWindow.prototype.prev = function () {
                    if (this.activeIdx < 0) {
                        this.activeIdx = this.results.length - 1;
                    }
                    else if (this.activeIdx === 0) {
                        this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
                    }
                    else {
                        this.activeIdx--;
                    }
                    this._activeChanged();
                };
                /**
                 * @return {?}
                 */
                NgbTypeaheadWindow.prototype.resetActive = function () {
                    this.activeIdx = this.focusFirst ? 0 : -1;
                    this._activeChanged();
                };
                /**
                 * @param {?} item
                 * @return {?}
                 */
                NgbTypeaheadWindow.prototype.select = function (item) { this.selectEvent.emit(item); };
                /**
                 * @return {?}
                 */
                NgbTypeaheadWindow.prototype.ngOnInit = function () { this.resetActive(); };
                /**
                 * @private
                 * @return {?}
                 */
                NgbTypeaheadWindow.prototype._activeChanged = function () {
                    this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
                };
                return NgbTypeaheadWindow;
            }());
            NgbTypeaheadWindow.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngb-typeahead-window',
                            exportAs: 'ngbTypeaheadWindow',
                            host: { '(mousedown)': '$event.preventDefault()', 'class': 'dropdown-menu show', 'role': 'listbox', '[id]': 'id' },
                            template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngTemplateOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
                        }] }
            ];
            NgbTypeaheadWindow.propDecorators = {
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                focusFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                results: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                term: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                formatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                resultTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selectEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['select',] }],
                activeChangeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['activeChange',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var ARIA_LIVE_DELAY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('live announcer delay', { providedIn: 'root', factory: ARIA_LIVE_DELAY_FACTORY });
            /**
             * @return {?}
             */
            function ARIA_LIVE_DELAY_FACTORY() {
                return 100;
            }
            /**
             * @param {?} document
             * @param {?=} lazyCreate
             * @return {?}
             */
            function getLiveElement(document, lazyCreate) {
                if (lazyCreate === void 0) { lazyCreate = false; }
                /** @type {?} */
                var element = ( /** @type {?} */(document.body.querySelector('#ngb-live')));
                if (element == null && lazyCreate) {
                    element = document.createElement('div');
                    element.setAttribute('id', 'ngb-live');
                    element.setAttribute('aria-live', 'polite');
                    element.setAttribute('aria-atomic', 'true');
                    element.classList.add('sr-only');
                    document.body.appendChild(element);
                }
                return element;
            }
            var Live = /** @class */ (function () {
                /**
                 * @param {?} _document
                 * @param {?} _delay
                 */
                function Live(_document, _delay) {
                    this._document = _document;
                    this._delay = _delay;
                }
                /**
                 * @return {?}
                 */
                Live.prototype.ngOnDestroy = function () {
                    /** @type {?} */
                    var element = getLiveElement(this._document);
                    if (element) {
                        element.parentElement.removeChild(element);
                    }
                };
                /**
                 * @param {?} message
                 * @return {?}
                 */
                Live.prototype.say = function (message) {
                    /** @type {?} */
                    var element = getLiveElement(this._document, true);
                    /** @type {?} */
                    var delay = this._delay;
                    element.textContent = '';
                    /** @type {?} */
                    var setText = ( /**
                     * @return {?}
                     */function () { return element.textContent = message; });
                    if (delay === null) {
                        setText();
                    }
                    else {
                        setTimeout(setText, delay);
                    }
                };
                return Live;
            }());
            Live.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */
            Live.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ARIA_LIVE_DELAY,] }] }
            ]; };
            /** @nocollapse */ Live.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Live_Factory() { return new Live(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ARIA_LIVE_DELAY)); }, token: Live, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A configuration service for the [`NgbTypeahead`](#/components/typeahead/api#NgbTypeahead) component.
             *
             * You can inject this service, typically in your root component, and customize the values of its properties in
             * order to provide default values for all the typeaheads used in the application.
             */
            var NgbTypeaheadConfig = /** @class */ (function () {
                function NgbTypeaheadConfig() {
                    this.editable = true;
                    this.focusFirst = true;
                    this.showHint = false;
                    this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
                }
                return NgbTypeaheadConfig;
            }());
            NgbTypeaheadConfig.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
            ];
            /** @nocollapse */ NgbTypeaheadConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgbTypeaheadConfig_Factory() { return new NgbTypeaheadConfig(); }, token: NgbTypeaheadConfig, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgbTypeahead; })),
                multi: true
            };
            /** @type {?} */
            var nextWindowId = 0;
            /**
             * A directive providing a simple way of creating powerful typeaheads from any text input.
             */
            var NgbTypeahead = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 * @param {?} _viewContainerRef
                 * @param {?} _renderer
                 * @param {?} _injector
                 * @param {?} componentFactoryResolver
                 * @param {?} config
                 * @param {?} ngZone
                 * @param {?} _live
                 * @param {?} _document
                 * @param {?} _ngZone
                 * @param {?} _changeDetector
                 * @param {?} _applicationRef
                 */
                function NgbTypeahead(_elementRef, _viewContainerRef, _renderer, _injector, componentFactoryResolver, config, ngZone, _live, _document, _ngZone, _changeDetector, _applicationRef) {
                    var _this = this;
                    this._elementRef = _elementRef;
                    this._viewContainerRef = _viewContainerRef;
                    this._renderer = _renderer;
                    this._injector = _injector;
                    this._live = _live;
                    this._document = _document;
                    this._ngZone = _ngZone;
                    this._changeDetector = _changeDetector;
                    this._applicationRef = _applicationRef;
                    this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    /**
                     * The value for the `autocomplete` attribute for the `<input>` element.
                     *
                     * Defaults to `"off"` to disable the native browser autocomplete, but you can override it if necessary.
                     *
                     * \@since 2.1.0
                     */
                    this.autocomplete = 'off';
                    /**
                     * The preferred placement of the typeahead.
                     *
                     * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
                     * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
                     * `"right-bottom"`
                     *
                     * Accepts an array of strings or a string with space separated possible values.
                     *
                     * The default order of preference is `"bottom-left bottom-right top-left top-right"`
                     *
                     * Please see the [positioning overview](#/positioning) for more details.
                     */
                    this.placement = 'bottom-left';
                    /**
                     * An event emitted right before an item is selected from the result list.
                     *
                     * Event payload is of type [`NgbTypeaheadSelectItemEvent`](#/components/typeahead/api#NgbTypeaheadSelectItemEvent).
                     */
                    this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.popupId = "ngb-typeahead-" + nextWindowId++;
                    this._onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this._onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    this.container = config.container;
                    this.editable = config.editable;
                    this.focusFirst = config.focusFirst;
                    this.showHint = config.showHint;
                    this.placement = config.placement;
                    this._valueChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_elementRef.nativeElement, 'input')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                 * @param {?} $event
                 * @return {?}
                 */function (/**
                 * @param {?} $event
                 * @return {?}
                 */ $event) { return (( /** @type {?} */($event.target))).value; })));
                    this._resubscribeTypeahead = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
                    this._popupService = new PopupService(NgbTypeaheadWindow, _injector, _viewContainerRef, _renderer, componentFactoryResolver, _applicationRef);
                    this._zoneSubscription = ngZone.onStable.subscribe(( /**
                     * @return {?}
                     */function () {
                        if (_this.isPopupOpen()) {
                            positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
                        }
                    }));
                }
                /**
                 * @return {?}
                 */
                NgbTypeahead.prototype.ngOnInit = function () {
                    var _this = this;
                    /** @type {?} */
                    var inputValues$ = this._valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                     * @param {?} value
                     * @return {?}
                     */function (/**
                     * @param {?} value
                     * @return {?}
                     */ value) {
                        _this._inputValueBackup = _this.showHint ? value : null;
                        _this._onChange(_this.editable ? value : undefined);
                    })));
                    /** @type {?} */
                    var results$ = inputValues$.pipe(this.ngbTypeahead);
                    /** @type {?} */
                    var userInput$ = this._resubscribeTypeahead.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(( /**
                     * @return {?}
                     */function () { return results$; })));
                    this._subscription = this._subscribeToUserInput(userInput$);
                };
                /**
                 * @return {?}
                 */
                NgbTypeahead.prototype.ngOnDestroy = function () {
                    this._closePopup();
                    this._unsubscribeFromUserInput();
                    this._zoneSubscription.unsubscribe();
                };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbTypeahead.prototype.registerOnChange = function (fn) { this._onChange = fn; };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                NgbTypeahead.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                NgbTypeahead.prototype.writeValue = function (value) {
                    this._writeInputValue(this._formatItemForInput(value));
                    if (this.showHint) {
                        this._inputValueBackup = value;
                    }
                };
                /**
                 * @param {?} isDisabled
                 * @return {?}
                 */
                NgbTypeahead.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * Dismisses typeahead popup window
                 * @return {?}
                 */
                NgbTypeahead.prototype.dismissPopup = function () {
                    if (this.isPopupOpen()) {
                        this._resubscribeTypeahead.next(null);
                        this._closePopup();
                        if (this.showHint && this._inputValueBackup !== null) {
                            this._writeInputValue(this._inputValueBackup);
                        }
                        this._changeDetector.markForCheck();
                    }
                };
                /**
                 * Returns true if the typeahead popup window is displayed
                 * @return {?}
                 */
                NgbTypeahead.prototype.isPopupOpen = function () { return this._windowRef != null; };
                /**
                 * @return {?}
                 */
                NgbTypeahead.prototype.handleBlur = function () {
                    this._resubscribeTypeahead.next(null);
                    this._onTouched();
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                NgbTypeahead.prototype.handleKeyDown = function (event) {
                    if (!this.isPopupOpen()) {
                        return;
                    }
                    // tslint:disable-next-line:deprecation
                    switch (event.which) {
                        case Key.ArrowDown:
                            event.preventDefault();
                            this._windowRef.instance.next();
                            this._showHint();
                            break;
                        case Key.ArrowUp:
                            event.preventDefault();
                            this._windowRef.instance.prev();
                            this._showHint();
                            break;
                        case Key.Enter:
                        case Key.Tab:
                            /** @type {?} */
                            var result = this._windowRef.instance.getActive();
                            if (isDefined(result)) {
                                event.preventDefault();
                                event.stopPropagation();
                                this._selectResult(result);
                            }
                            this._closePopup();
                            break;
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbTypeahead.prototype._openPopup = function () {
                    var _this = this;
                    if (!this.isPopupOpen()) {
                        this._inputValueBackup = this._elementRef.nativeElement.value;
                        this._windowRef = this._popupService.open();
                        this._windowRef.instance.id = this.popupId;
                        this._windowRef.instance.selectEvent.subscribe(( /**
                         * @param {?} result
                         * @return {?}
                         */function (result) { return _this._selectResultClosePopup(result); }));
                        this._windowRef.instance.activeChangeEvent.subscribe(( /**
                         * @param {?} activeId
                         * @return {?}
                         */function (activeId) { return _this.activeDescendant = activeId; }));
                        if (this.container === 'body') {
                            window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
                        }
                        this._changeDetector.markForCheck();
                        ngbAutoClose(this._ngZone, this._document, 'outside', ( /**
                         * @return {?}
                         */function () { return _this.dismissPopup(); }), this._closed$, [this._elementRef.nativeElement, this._windowRef.location.nativeElement]);
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbTypeahead.prototype._closePopup = function () {
                    this._closed$.next();
                    this._popupService.close();
                    this._windowRef = null;
                    this.activeDescendant = undefined;
                };
                /**
                 * @private
                 * @param {?} result
                 * @return {?}
                 */
                NgbTypeahead.prototype._selectResult = function (result) {
                    /** @type {?} */
                    var defaultPrevented = false;
                    this.selectItem.emit({ item: result, preventDefault: ( /**
                             * @return {?}
                             */function () { defaultPrevented = true; }) });
                    this._resubscribeTypeahead.next(null);
                    if (!defaultPrevented) {
                        this.writeValue(result);
                        this._onChange(result);
                    }
                };
                /**
                 * @private
                 * @param {?} result
                 * @return {?}
                 */
                NgbTypeahead.prototype._selectResultClosePopup = function (result) {
                    this._selectResult(result);
                    this._closePopup();
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbTypeahead.prototype._showHint = function () {
                    if (this.showHint && this._windowRef.instance.hasActive() && this._inputValueBackup != null) {
                        /** @type {?} */
                        var userInputLowerCase = this._inputValueBackup.toLowerCase();
                        /** @type {?} */
                        var formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
                        if (userInputLowerCase === formattedVal.substr(0, this._inputValueBackup.length).toLowerCase()) {
                            this._writeInputValue(this._inputValueBackup + formattedVal.substr(this._inputValueBackup.length));
                            this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._inputValueBackup.length, formattedVal.length]);
                        }
                        else {
                            this._writeInputValue(formattedVal);
                        }
                    }
                };
                /**
                 * @private
                 * @param {?} item
                 * @return {?}
                 */
                NgbTypeahead.prototype._formatItemForInput = function (item) {
                    return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
                };
                /**
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                NgbTypeahead.prototype._writeInputValue = function (value) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', toString(value));
                };
                /**
                 * @private
                 * @param {?} userInput$
                 * @return {?}
                 */
                NgbTypeahead.prototype._subscribeToUserInput = function (userInput$) {
                    var _this = this;
                    return userInput$.subscribe(( /**
                     * @param {?} results
                     * @return {?}
                     */function (results) {
                        if (!results || results.length === 0) {
                            _this._closePopup();
                        }
                        else {
                            _this._openPopup();
                            _this._windowRef.instance.focusFirst = _this.focusFirst;
                            _this._windowRef.instance.results = results;
                            _this._windowRef.instance.term = _this._elementRef.nativeElement.value;
                            if (_this.resultFormatter) {
                                _this._windowRef.instance.formatter = _this.resultFormatter;
                            }
                            if (_this.resultTemplate) {
                                _this._windowRef.instance.resultTemplate = _this.resultTemplate;
                            }
                            _this._windowRef.instance.resetActive();
                            // The observable stream we are subscribing to might have async steps
                            // and if a component containing typeahead is using the OnPush strategy
                            // the change detection turn wouldn't be invoked automatically.
                            _this._windowRef.changeDetectorRef.detectChanges();
                            _this._showHint();
                        }
                        // live announcer
                        /** @type {?} */
                        var count = results ? results.length : 0;
                        _this._live.say(count === 0 ? 'No results available' : count + " result" + (count === 1 ? '' : 's') + " available");
                    }));
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgbTypeahead.prototype._unsubscribeFromUserInput = function () {
                    if (this._subscription) {
                        this._subscription.unsubscribe();
                    }
                    this._subscription = null;
                };
                return NgbTypeahead;
            }());
            NgbTypeahead.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[ngbTypeahead]',
                            exportAs: 'ngbTypeahead',
                            host: {
                                '(blur)': 'handleBlur()',
                                '[class.open]': 'isPopupOpen()',
                                '(keydown)': 'handleKeyDown($event)',
                                '[autocomplete]': 'autocomplete',
                                'autocapitalize': 'off',
                                'autocorrect': 'off',
                                'role': 'combobox',
                                'aria-multiline': 'false',
                                '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
                                '[attr.aria-activedescendant]': 'activeDescendant',
                                '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
                                '[attr.aria-expanded]': 'isPopupOpen()'
                            },
                            providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            NgbTypeahead.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
                { type: NgbTypeaheadConfig },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: Live },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }
            ]; };
            NgbTypeahead.propDecorators = {
                autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                focusFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                inputFormatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                ngbTypeahead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                resultFormatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                resultTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                showHint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selectItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgbTypeaheadModule = /** @class */ (function () {
                function NgbTypeaheadModule() {
                }
                return NgbTypeaheadModule;
            }());
            NgbTypeaheadModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow],
                            exports: [NgbTypeahead, NgbHighlight],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                            entryComponents: [NgbTypeaheadWindow]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NGB_MODULES = [
                NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule,
                NgbDropdownModule, NgbModalModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule,
                NgbTabsetModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule
            ];
            var NgbModule = /** @class */ (function () {
                function NgbModule() {
                }
                return NgbModule;
            }());
            NgbModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ imports: NGB_MODULES, exports: NGB_MODULES },] }
            ];
            //# sourceMappingURL=ng-bootstrap.js.map
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/acordion-estados/acordion-estados.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/acordion-estados/acordion-estados.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-container\">\r\n    \r\n    <div class=\"grid-item\" id=\"item1\">\r\n\r\n        <ngb-accordion #acc=\"ngbAccordion\">\r\n            <ngb-panel class=\"panel\" id=\"toggle-1\" title=\"Amazonas\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-2\" title=\"Anzoátegui\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-3\" title=\"Apure\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-4\" title=\"Aragua\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-5\" title=\"Barinas\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-6\" title=\"Bolivar\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-7\" title=\"Carabobo\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-8\" title=\"Cojedes\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-9\" title=\"Delta Amacuro\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-10\" title=\"Falcón\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-11\" title=\"Guárico\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-12\" title=\"Lara\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-13\" title=\"Mérida\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-14\" title=\"Miranda (Distrito Federal)\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-15\" title=\"Monagas\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-16\" title=\"Nueva Esparta\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-17\" title=\"Portuguesa\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-18\" title=\"Sucre\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-19\" title=\"Táchira\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-20\" title=\"Trujillo\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-21\" title=\"Vargas\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-22\" title=\"Yaracuy\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-23\" title=\"Zulia\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n        </ngb-accordion>\r\n\r\n    </div>\r\n\r\n    <div class=\"grid-item\" id=\"item3\">\r\n\r\n        <ngb-accordion #acc=\"ngbAccordion\">\r\n            <ngb-panel class=\"panel\" id=\"toggle-cat24\" title=\"Playa\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-cat25\" title=\"Andes\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-cat26\" title=\"Gran Sabana\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-cat27\" title=\"Llano\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel class=\"panel\" id=\"toggle-cat28\" title=\"Ciudad\">\r\n                <ng-template ngbPanelContent>\r\n                    <ul>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 1</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 2</a></li>\r\n                        <li><a href=\"/main/Hoteles/lista\">Destino 3...</a></li>\r\n                    </ul>\r\n                </ng-template>\r\n            </ngb-panel>\r\n        </ngb-accordion>\r\n\r\n    </div>\r\n\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/destinos/destinos.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/destinos/destinos.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-acordion-estados></app-acordion-estados>");
            /***/ 
        }),
        /***/ "./src/app/components/acordion-estados/acordion-estados.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/acordion-estados/acordion-estados.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".grid-container {\n  display: grid;\n  grid-template-columns: 33% 34% 33%;\n  grid-gap: 10px;\n  padding: 30px;\n}\n\n::ng-deep .card {\n  background-color: #00293C;\n  color: #FFB300;\n  border-color: #FFB300;\n  border-width: 2px;\n}\n\na {\n  text-decoration: none;\n  color: #FFB300;\n}\n\n::ng-deep .card-header:hover {\n  background-color: #00888b;\n}\n\n::ng-deep .btn-link {\n  color: #FFB300;\n  font-weight: normal;\n  text-decoration: none !important;\n}\n\n::ng-deep .btn-link:hover {\n  color: #FFB300;\n  font-weight: bold;\n  text-decoration: none !important;\n}\n\n#item1 {\n  grid-column: 1;\n}\n\n#item3 {\n  grid-column: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY29yZGlvbi1lc3RhZG9zL0M6XFxHdWFjYW1heWEtVG91cnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFjb3JkaW9uLWVzdGFkb3NcXGFjb3JkaW9uLWVzdGFkb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWNvcmRpb24tZXN0YWRvcy9hY29yZGlvbi1lc3RhZG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY29yZGlvbi1lc3RhZG9zL2Fjb3JkaW9uLWVzdGFkb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDM0JSAzMyU7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyOTNDO1xyXG4gICAgY29sb3I6ICNGRkIzMDA7XHJcbiAgICBib3JkZXItY29sb3I6ICNGRkIzMDA7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjRkZCMzAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhcmQtaGVhZGVyOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzNiwgMTM5KTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5idG4tbGlua3tcclxuICAgIGNvbG9yOiAjRkZCMzAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG46Om5nLWRlZXAgLmJ0bi1saW5rOmhvdmVye1xyXG4gICAgY29sb3I6ICNGRkIzMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4jaXRlbTEge1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbn1cclxuXHJcbiNpdGVtMyB7XHJcbiAgICBncmlkLWNvbHVtbjogMztcclxufSIsIi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDM0JSAzMyU7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG46Om5nLWRlZXAgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyOTNDO1xuICBjb2xvcjogI0ZGQjMwMDtcbiAgYm9yZGVyLWNvbG9yOiAjRkZCMzAwO1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNGRkIzMDA7XG59XG5cbjo6bmctZGVlcCAuY2FyZC1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4ODhiO1xufVxuXG46Om5nLWRlZXAgLmJ0bi1saW5rIHtcbiAgY29sb3I6ICNGRkIzMDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmJ0bi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNGRkIzMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuI2l0ZW0xIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG59XG5cbiNpdGVtMyB7XG4gIGdyaWQtY29sdW1uOiAzO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/acordion-estados/acordion-estados.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/acordion-estados/acordion-estados.component.ts ***!
          \***************************************************************************/
        /*! exports provided: AcordionEstadosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcordionEstadosComponent", function () { return AcordionEstadosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AcordionEstadosComponent = /** @class */ (function () {
                function AcordionEstadosComponent() {
                }
                AcordionEstadosComponent.prototype.ngOnInit = function () {
                };
                return AcordionEstadosComponent;
            }());
            AcordionEstadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-acordion-estados',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./acordion-estados.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/acordion-estados/acordion-estados.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./acordion-estados.component.scss */ "./src/app/components/acordion-estados/acordion-estados.component.scss")).default]
                })
            ], AcordionEstadosComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/destinos/destinos-routing.module.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/modules/destinos/destinos-routing.module.ts ***!
          \*************************************************************/
        /*! exports provided: DestinosRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinosRoutingModule", function () { return DestinosRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _destinos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./destinos.component */ "./src/app/modules/destinos/destinos.component.ts");
            var routes = [{ path: '', component: _destinos_component__WEBPACK_IMPORTED_MODULE_3__["DestinosComponent"] }];
            var DestinosRoutingModule = /** @class */ (function () {
                function DestinosRoutingModule() {
                }
                return DestinosRoutingModule;
            }());
            DestinosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DestinosRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/destinos/destinos.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/modules/destinos/destinos.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGVzdGlub3MvZGVzdGlub3MuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/destinos/destinos.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/modules/destinos/destinos.component.ts ***!
          \********************************************************/
        /*! exports provided: DestinosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinosComponent", function () { return DestinosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DestinosComponent = /** @class */ (function () {
                function DestinosComponent() {
                }
                DestinosComponent.prototype.ngOnInit = function () {
                };
                return DestinosComponent;
            }());
            DestinosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-destinos',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./destinos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/destinos/destinos.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./destinos.component.scss */ "./src/app/modules/destinos/destinos.component.scss")).default]
                })
            ], DestinosComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/destinos/destinos.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/modules/destinos/destinos.module.ts ***!
          \*****************************************************/
        /*! exports provided: DestinosModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinosModule", function () { return DestinosModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _destinos_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./destinos-routing.module */ "./src/app/modules/destinos/destinos-routing.module.ts");
            /* harmony import */ var _destinos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./destinos.component */ "./src/app/modules/destinos/destinos.component.ts");
            /* harmony import */ var _components_acordion_estados_acordion_estados_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/acordion-estados/acordion-estados.component */ "./src/app/components/acordion-estados/acordion-estados.component.ts");
            var DestinosModule = /** @class */ (function () {
                function DestinosModule() {
                }
                return DestinosModule;
            }());
            DestinosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_destinos_component__WEBPACK_IMPORTED_MODULE_5__["DestinosComponent"], _components_acordion_estados_acordion_estados_component__WEBPACK_IMPORTED_MODULE_6__["AcordionEstadosComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _destinos_routing_module__WEBPACK_IMPORTED_MODULE_4__["DestinosRoutingModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    ]
                })
            ], DestinosModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=modules-destinos-destinos-module-es2015.js.map
//# sourceMappingURL=modules-destinos-destinos-module-es5.js.map
//# sourceMappingURL=modules-destinos-destinos-module-es5.js.map