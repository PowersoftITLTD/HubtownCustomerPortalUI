"use strict";
(self["webpackChunkhubtown_customer_portal"] = self["webpackChunkhubtown_customer_portal"] || []).push([["common"],{

/***/ 6116:
/*!**********************************************!*\
  !*** ./src/app/feedback/feedback.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackService: () => (/* binding */ FeedbackService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);




class FeedbackService {
  http;
  apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  constructor(http) {
    this.http = http;
    // console.log(this.apiUrl);
    // debugger;
  }
  submitFeedback(payload) {
    return this.http.post(`${this.apiUrl}/Feedback/SaveFeedback`, payload);
  }
  feedbackInformation() {
    return this.http.get(`${this.apiUrl}/Feedback/GetInformationList`);
  }
  getFeedbackList(payload) {
    return this.http.post(`${this.apiUrl}/Feedback/GetFeedback`, payload);
  }
  static ɵfac = function FeedbackService_Factory(ɵt) {
    return new (ɵt || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FeedbackService,
    factory: FeedbackService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map