"use strict";
(self["webpackChunkhubtown_customer_portal"] = self["webpackChunkhubtown_customer_portal"] || []).push([["src_app_features_dashboard_dashboard_component_ts"],{

/***/ 7410:
/*!********************************************************************************!*\
  !*** ./src/app/features/dashboard/components/ask-query/ask-query.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AskQueryComponent: () => (/* binding */ AskQueryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _feedback_feedback_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../feedback/feedback.service */ 6116);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/toast.service */ 1253);
/* harmony import */ var src_app_shared_components_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/toast.component */ 5505);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var ngx_avatars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-avatars */ 7575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);

















function AskQueryComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r1 == null ? null : option_r1.infId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r1 == null ? null : option_r1.infDesc, " ");
  }
}
function AskQueryComponent_small_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Information is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AskQueryComponent_small_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Message is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AskQueryComponent_small_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Message must be at least 10 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AskQueryComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 5)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Query sent successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "You will receive a reply over your mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
}
class AskQueryComponent {
  fb;
  feedbackService;
  toastService;
  _router;
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Store);
  constructor(fb, feedbackService, toastService, _router) {
    this.fb = fb;
    this.feedbackService = feedbackService;
    this.toastService = toastService;
    this._router = _router;
  }
  feedbackInfo = [];
  queryForm;
  isInfoDropdown = false;
  isLoading = false;
  isSuccess = false;
  bookings$;
  ngOnInit() {
    this.initForm();
    this.getFeedbackInfo();
    this.bookings$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_3__.BookingState.getBookings);
  }
  //  ngOnInit(): void {
  //     this.user = this.store.selectSnapshot(AuthState.getUser);
  //     this.store.select(AuthState.getSelectedProject).subscribe(e => {
  //       if(e && this.user) {
  //         this.selectedProject = e;
  //       // console.log("selectedProject", this.selectedProject);
  //         // Dispatch the action to fetch booking details
  //       // this.store.dispatch(new FetchBooking(user.userID, this.selectedProject?.projectId)); //commented to read data from local storage
  //       let booking = [this.selectedProject?.booking]
  //       this.store.dispatch(new SetBooking(booking));
  //       this.store.dispatch(new FetchJointOwner(this.user?.userID,this.selectedProject?.projectId));
  //       this.jointOwner$ = this.store.select(BookingState.getJointOwner);
  //       }
  //     });
  //   }
  // Initialize the Reactive Form
  initForm() {
    this.queryForm = this.fb.group({
      informationRequired: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10)]]
    });
  }
  // handle for get information data
  getFeedbackInfo() {
    this.feedbackService.feedbackInformation().subscribe({
      next: response => {
        this.feedbackInfo = response?.Data || []; // Ensure it is initialized
      },
      error: error => {
        console.log('Error fetching feedback info:', error);
      }
    });
  }
  // handle for prefilled form data
  // preFillForm() {
  //   const userDataString = localStorage.getItem('userInfo');
  //   const projectDataString = localStorage.getItem('userProjects');
  //   if (userDataString) {
  //     try {
  //       const parsedUserData = JSON.parse(userDataString);
  //       this.feedbackForm.patchValue({
  //         name: parsedUserData.name || '',
  //         message: parsedUserData.message || '',
  //       });
  //     } catch (error) {
  //       console.error('Error parsing user data:', error);
  //     }
  //   }
  //   if (projectDataString) {
  //     try {
  //       const parsedProjectData = JSON.parse(projectDataString);
  //       if (Array.isArray(parsedProjectData) && parsedProjectData.length > 0) {
  //         this.buildingName = parsedProjectData;
  //         this.feedbackForm.patchValue({
  //           selectedProject: parsedProjectData[0]?.booking?.building || '',
  //         });
  //       } else {
  //         console.warn('No valid project data found');
  //       }
  //     } catch (error) {
  //       console.error('Error parsing project data:', error);
  //     }
  //   }
  // }
  // Handle Form Submission of feedback form
  handleSubmit() {
    const userDataString = localStorage.getItem('userInfo');
    const selectedProjectDataString = localStorage.getItem('userSelectedProject');
    if (this.queryForm.valid) {
      this.isLoading = true;
      const formData = this.queryForm.getRawValue();
      const parsedUserData = JSON.parse(userDataString);
      const parsedProjectData = JSON.parse(selectedProjectDataString);
      const payload = {
        buildingName: parsedProjectData?.booking?.building || '',
        unitNo: parsedProjectData?.booking?.unit || '',
        customerName: parsedUserData.name || '',
        infId: formData?.informationRequired || '',
        comments: formData?.message,
        Source: 'C'
      };
      this.feedbackService.submitFeedback(payload).subscribe({
        next: response => {
          this.isLoading = false;
          if (response?.Success === true) {
            this.queryForm.reset();
            this.isSuccess = true;
            this.toastService.triggerToast('Success', response?.Message || 'Query submitted successfully', 'success');
          } else {
            this.toastService.triggerToast('Error', response?.Message || 'An error occurred. Please try again.', 'error');
          }
        },
        error: error => {
          this.queryForm.reset();
          this.isLoading = false;
          this.isSuccess = false;
          this.toastService.triggerToast('Error', 'Failed to submit Query. Please try again.', 'error');
          console.error('Error saving data', error);
        }
      });
    } else {
      console.log('Form is invalid:', this.queryForm.errors);
      this.queryForm.markAllAsTouched();
    }
  }
  // toggle for dropdown icon handle
  toggleDropdown(dropdown) {
    if (dropdown === 'info') {
      this.isInfoDropdown = !this.isInfoDropdown;
    }
  }
  closeDropdown(dropdown) {
    if (dropdown === 'info') {
      this.isInfoDropdown = false;
    }
  }
  handleFeedbackNavigation() {
    this._router.navigate(['feedback/user']);
  }
  static ɵfac = function AskQueryComponent_Factory(ɵt) {
    return new (ɵt || AskQueryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_feedback_feedback_service__WEBPACK_IMPORTED_MODULE_0__.FeedbackService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_components_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AskQueryComponent,
    selectors: [["app-ask-query"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 59,
    vars: 24,
    consts: [[1, "ask-query-btn", 2, "display", "flex"], ["type", "button", 1, "btn", "btn-black", 2, "margin-right", "10px", 3, "click"], ["src", "images/chat-icon.svg", 1, "me-2", 2, "height", "30px", "width", "30px"], ["id", "queryModal", "tabindex", "-1", "aria-labelledby", "queryModalLabel", "aria-hidden", "true", 1, "modal", "aside-modal"], [1, "modal-dialog", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "HT-title"], ["src", "images/faq-icon.svg"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "d-block", "mb-3"], [1, "HT-gray-card", "h-auto", "p-4", "mb-4"], [1, "font-medium", "text-bold", "mb-12"], ["src", "images/icon2.svg", 1, "me-2"], [1, "col-lg-7", "col-12"], [1, "manager-info"], [3, "name", "round", "size"], [1, "ps-4"], [1, "name"], [1, "contact-info"], [1, "bi", "bi-envelope", "me-2"], [1, "bi", "bi-telephone-plus", "me-2"], [3, "ngSubmit", "formGroup"], [1, "form-group", "mb-2", "position-relative"], [1, "form-label"], ["formControlName", "informationRequired", "aria-placeholder", "Select a information", 1, "form-control", 3, "click", "blur"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "dropdown-img"], ["src", "images/dropdown-icon.png", "alt", "dropdown-icon"], ["style", "color: red", 4, "ngIf"], [1, "form-group", "mb-2"], ["placeholder", "Write here", "formControlName", "message", 1, "form-control"], ["type", "submit", "data-bs-toggle", "modal", "data-bs-target", "#confirmationModal", 1, "btn", "btn-warning", 3, "disabled"], [1, "warning-modal", "d-none"], [1, "btn-close"], ["class", "modal fade", "id", "confirmationModal", "aria-hidden", "true", "aria-labelledby", "confirmationModalLabel", "tabindex", "-1", 4, "ngIf"], [3, "value"], [2, "color", "red"], ["id", "confirmationModal", "aria-hidden", "true", "aria-labelledby", "confirmationModalLabel", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "float-end"], [1, "text-center"], [1, "check"]],
    template: function AskQueryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AskQueryComponent_Template_button_click_1_listener() {
          return ctx.handleFeedbackNavigation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Ask Query");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Your Relationship Manager will be replying to you");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12)(17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Relationship Manager ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15)(21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "ngx-avatars", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 18)(25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 20)(29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AskQueryComponent_Template_form_ngSubmit_37_listener() {
          return ctx.handleSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 24)(39, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Information Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AskQueryComponent_Template_select_click_41_listener() {
          return ctx.toggleDropdown("info");
        })("blur", function AskQueryComponent_Template_select_blur_41_listener() {
          return ctx.closeDropdown("info");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Select a information");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, AskQueryComponent_option_44_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, AskQueryComponent_small_47_Template, 2, 0, "small", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 32)(49, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Write Your Query");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "textarea", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, AskQueryComponent_small_52_Template, 2, 0, "small", 31)(53, AskQueryComponent_small_53_Template, 2, 0, "small", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, AskQueryComponent_div_58_Template, 11, 0, "div", 37);
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 16, ctx.bookings$)) == null ? null : tmp_0_0[0] == null ? null : tmp_0_0[0].rmName)("round", true)("size", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 18, ctx.bookings$)) == null ? null : tmp_3_0[0] == null ? null : tmp_3_0[0].rmName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 20, ctx.bookings$)) == null ? null : tmp_4_0[0] == null ? null : tmp_4_0[0].rmEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 22, ctx.bookings$)) == null ? null : tmp_5_0[0] == null ? null : tmp_5_0[0].rmContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.queryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.feedbackInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("rotate", ctx.isInfoDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.queryForm.get("informationRequired")) == null ? null : tmp_9_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx.queryForm.get("message")) == null ? null : tmp_10_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.queryForm.get("message")) == null ? null : tmp_11_0.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Sending" : "Send Query", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSuccess);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, src_app_shared_components_toast_component__WEBPACK_IMPORTED_MODULE_2__.ToastComponent, ngx_avatars__WEBPACK_IMPORTED_MODULE_9__.AvatarModule, ngx_avatars__WEBPACK_IMPORTED_MODULE_9__.AvatarComponent],
    styles: ["textarea.form-control[_ngcontent-%COMP%] {\n  height: 100px;\n  border: 1px solid #d6d6d6;\n  filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));\n  border-radius: 8px;\n  padding: 10px 14px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2b2b2b;\n}\n\n.ask-query-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  z-index: 1;\n}\n.ask-query-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 18px 28px;\n  background: #131313;\n  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);\n  border-radius: 2px;\n  font-family: 'Lora', serif;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 140%;\n}\n.ask-query-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.check[_ngcontent-%COMP%]::before {\n  content: '';\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  \n\n\n\n  background: url('/images/checked-icon.svg') no-repeat center center;\n}\n\n.dropdown-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 53%;\n  transform: translateY(-50%);\n  transition: transform 0.2s ease;\n}\n\n.dropdown-img[_ngcontent-%COMP%]   img.rotate[_ngcontent-%COMP%] {\n  transform: translateY(-50%) rotate(180deg);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvYXNrLXF1ZXJ5L2Fzay1xdWVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix1REFBdUQ7RUFDdkQsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5QyxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1o7O2dCQUVjO0VBQ2QsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1QyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAycHggcmdiYSgxNiwgMjQsIDQwLCAwLjA1KSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xufVxuLmZvcm0tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzJiMmIyYjtcbn1cblxuLmFzay1xdWVyeS1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjRweDtcbiAgcmlnaHQ6IDI0cHg7XG4gIHotaW5kZXg6IDE7XG59XG4uYXNrLXF1ZXJ5LWJ0biAuYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE4cHggMjhweDtcbiAgYmFja2dyb3VuZDogIzEzMTMxMztcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgxNiwgMjQsIDQwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMTQwJTtcbn1cbi5hc2stcXVlcnktYnRuIC5idG46aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNoZWNrOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTQ4cHg7XG4gICAgdG9wOiA1MHB4OyAqL1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvY2hlY2tlZC1pY29uLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xufVxuXG4uZHJvcGRvd24taW1nIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTMlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG59XG5cbi5kcm9wZG93bi1pbWcgaW1nLnJvdGF0ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5678:
/*!****************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/bank-accounts/bank-accounts.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankAccountsComponent: () => (/* binding */ BankAccountsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/booking.actions */ 4445);
/* harmony import */ var src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/formatHelper */ 7781);








function BankAccountsComponent_Conditional_37_For_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const accountSummary_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](accountSummary_r1 == null ? null : accountSummary_r1.particulars);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.formatToINRCurrencyHandle(accountSummary_r1 == null ? null : accountSummary_r1.flatConsideration == null ? null : accountSummary_r1.flatConsideration.amount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.formatToINRCurrencyHandle(accountSummary_r1 == null ? null : accountSummary_r1.flatConsideration == null ? null : accountSummary_r1.flatConsideration.taxes), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.formatToINRCurrencyHandle(accountSummary_r1 == null ? null : accountSummary_r1.societyCharges == null ? null : accountSummary_r1.societyCharges.amount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.formatToINRCurrencyHandle(accountSummary_r1 == null ? null : accountSummary_r1.societyCharges == null ? null : accountSummary_r1.societyCharges.taxes), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.formatToINRCurrencyHandle(accountSummary_r1 == null ? null : accountSummary_r1.interestOthers == null ? null : accountSummary_r1.interestOthers.amount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.formatToINRCurrencyHandle(accountSummary_r1 == null ? null : accountSummary_r1.interestOthers == null ? null : accountSummary_r1.interestOthers.taxes), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.formatToINRCurrencyHandle(accountSummary_r1 == null ? null : accountSummary_r1.unadjusted == null ? null : accountSummary_r1.unadjusted.unadjusted), " ");
  }
}
function BankAccountsComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "thead", 17)(1, "tr")(2, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Flat Cosideration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Society Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Interest/Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Unadjusted");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tr")(13, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](26, BankAccountsComponent_Conditional_37_For_27_Template, 17, 8, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r1.accountSummaryList);
  }
}
function BankAccountsComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No account summary details available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BankAccountsComponent_Conditional_48_For_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bpa_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](bpa_r3 == null ? null : bpa_r3.particulars);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](bpa_r3 == null ? null : bpa_r3.bankName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](bpa_r3 == null ? null : bpa_r3.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](bpa_r3 == null ? null : bpa_r3.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](bpa_r3 == null ? null : bpa_r3.ifscCode);
  }
}
function BankAccountsComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "thead", 21)(1, "tr")(2, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Branch Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Account no.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "IFSC Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](13, BankAccountsComponent_Conditional_48_For_14_Template, 11, 5, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 0, ctx_r1.bpa$));
  }
}
function BankAccountsComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No bank payable accounts details available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
// import formatToINRCurrency from 'src/app/utils/formatHelper';
class BankAccountsComponent {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store);
  bpa$;
  accountSummary$;
  outstandingWithinDueAmout;
  outstandingOverDueAmount;
  tdsOutstanding;
  accountSummaryList = [];
  bpaData = [];
  formatToINRCurrency = src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__["default"];
  ngOnInit() {
    // this.store.dispatch(new LoadData());
    // this.bpa$ = this.store.select(DataState.getBankPayableAccounts);
    // this.accountSummary$ = this.store.select(DataState.getAccountSummary);
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getBookings).subscribe(booking => {
      // console.log("booking", booking);
      if (booking?.[0]?.bookingID) {
        this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchAccountSummary(booking?.[0]?.bookingID));
        this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchBankPayableAccount(booking?.[0]?.bookingID));
        this.accountSummary$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getAccountSummary);
        this.accountSummary$.subscribe(items => {
          this.accountSummaryList = [];
          items.forEach(item => {
            if (!(item.flatConsideration.amount == "0" && item.flatConsideration.taxes == "0" && item.societyCharges.amount == "0" && item.societyCharges.taxes == "0" && item.interestOthers.amount == "0" && item.interestOthers.taxes == "0" && item.unadjusted.unadjusted == "0")) {
              this.accountSummaryList.push(item);
            }
          });
        });
        this.bpa$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getBankPayableAccount);
        this.bpa$.subscribe(data => {
          this.bpaData = data; // Populate bpaData
        });
        this.outstandingWithinDueAmout = booking?.[0]?.outstandingWithinDueAmount;
        this.outstandingOverDueAmount = booking?.[0]?.outstandingOverdueAmount;
        this.tdsOutstanding = booking?.[0]?.tdsOutstanding;
      }
    });
  }
  formatToINRCurrencyHandle(v) {
    if (v) {
      return (0,src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(v);
    }
    return 0;
  }
  static ɵfac = function BankAccountsComponent_Factory(ɵt) {
    return new (ɵt || BankAccountsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: BankAccountsComponent,
    selectors: [["app-bank-accounts"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 50,
    vars: 5,
    consts: [[1, "row"], [1, "col-md-4", "col-12", "mb-3"], [1, "HT-details-card"], [1, "HT-card-head"], [1, "HT-title"], ["src", "images/calc-icon1.svg"], [1, "dark-text"], [1, "text-gray", "small", "mt-2"], ["src", "images/calc-icon2.svg"], ["src", "images/tds-icon.svg"], [1, "HT-details-card", "mb-3"], ["src", "images/summary-icon.svg"], [1, "card-body", "p-4"], [1, "table-responsive", 2, "text-align", "end"], [1, "table", "table-bordered"], [2, "text-align", "left"], ["src", "images/bank-icon.svg"], [1, "bg-gray", "text-right"], ["rowspan", "2", "colspan", "1"], ["colspan", "2"], ["scope", "col"], [1, "bg-gray"]],
    template: function BankAccountsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Outstanding Within Due Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 1)(11, "div", 2)(12, "div", 3)(13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Outstanding Overdue Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 1)(20, "div", 2)(21, "div", 3)(22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "TDS Outstanding");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 10)(29, "div", 3)(30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Account Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 12)(35, "div", 13)(36, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, BankAccountsComponent_Conditional_37_Template, 28, 0)(38, BankAccountsComponent_Conditional_38_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 10)(40, "div", 3)(41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Bank Payable Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 12)(46, "div", 13)(47, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, BankAccountsComponent_Conditional_48_Template, 16, 2)(49, BankAccountsComponent_Conditional_49_Template, 2, 0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.formatToINRCurrency(ctx.outstandingWithinDueAmout), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.formatToINRCurrency(ctx.outstandingOverDueAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.formatToINRCurrency(ctx.tdsOutstanding), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.accountSummaryList && ctx.accountSummaryList.length ? 37 : 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.bpaData.length > 0 ? 48 : 49);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 452:
/*!**************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/book-details/book-details.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookDetailsComponent: () => (/* binding */ BookDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/booking.actions */ 4445);
/* harmony import */ var src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/formatHelper */ 7781);
/* harmony import */ var _models_view_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/view-details.model */ 5685);










const _c0 = a0 => ({
  "active-dot": a0
});
function BookDetailsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 21)(2, "div", 22)(3, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 25)(10, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 21)(17, "div", 22)(18, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 25)(25, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 8, ctx_r0.demandBreakup$)) == null ? null : tmp_1_0.groupA_Caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.formatToINRCurrency((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 10, ctx_r0.demandBreakup$)) == null ? null : tmp_2_0.flatConsiderationAmt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 12, ctx_r0.demandBreakup$)) == null ? null : tmp_3_0.groupB_Caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.formatToINRCurrency((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 14, ctx_r0.demandBreakup$)) == null ? null : tmp_4_0.societyCharges), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 16, ctx_r0.demandBreakup$)) == null ? null : tmp_5_0.groupC_Caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.formatToINRCurrency((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 18, ctx_r0.demandBreakup$)) == null ? null : tmp_6_0.society), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 20, ctx_r0.demandBreakup$)) == null ? null : tmp_7_0.groupD_Caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.formatToINRCurrency((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 22, ctx_r0.demandBreakup$)) == null ? null : tmp_8_0.statutoryRequirements), " ");
  }
}
function BookDetailsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No sale value breakup data available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BookDetailsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Upcoming Milestone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.milestoneItem == null ? null : ctx_r0.milestoneItem.mileStoneName, " ");
  }
}
function BookDetailsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Scheduled Amt:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.formatToINRCurrency(ctx_r0.milestoneItem == null ? null : ctx_r0.milestoneItem.amount));
  }
}
function BookDetailsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 34)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const dot_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("left", dot_r2.dotPercent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", dot_r2.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, ctx_r0.lastPaidMSPercentage == dot_r2.dotPercent));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](dot_r2.mileStoneName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.formatToINRCurrency(dot_r2.amount));
  }
}
class BookDetailsComponent {
  cdr;
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Store);
  demandBreakup$;
  paidAmount = 0; // Example initial value for paid amount
  pendingAmount = 0; // Example initial value for pending amount
  totalAmount = 0; // Example total amount
  paidPercentage; // This will hold the percentage based on paidAmount and totalAmount
  milestoneItem = null;
  receiptItem = [];
  width;
  // Timeline Handle
  lastPaidMSPercentage = 0;
  dotsArray = []; // Positions for dots as percentages
  isDisabled = true;
  // Payment Schedule details
  viewDetailItemsApi = [];
  viewDetailItems = [];
  milestone$;
  formatToINRCurrency = src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__["default"];
  constructor(cdr) {
    this.cdr = cdr;
    // Calculate initial percentage
    this.paidPercentage = this.paidAmount / this.totalAmount * 100;
  }
  onRangeChange(event) {
    const target = event.target;
    this.paidPercentage = +target.value;
    this.paidAmount = +target.value / 100 * this.totalAmount;
    // Dynamically update the CSS variable
    const slider = target;
    slider.style.setProperty('--value', `${target.value}%`);
  }
  ngOnInit() {
    // this.lastPaidMSPercentage = 0
    this.getPaymentMSDetails();
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getBookings).subscribe(booking => {
      // this.store.dispatch(new FetchDemandBreakup(2005)); // remove this line and uncomment above for actual data
      // this.demandBreakup$ = this.store.select(BookingState.getDemandBreakup); // remove this line and uncomment above for actual data
      if (booking?.[0]?.bookingID) {
        this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchDemandBreakup(booking?.[0]?.bookingID));
        this.demandBreakup$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getDemandBreakup);
      }
    });
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getMileStone).subscribe(milestone => {
      if (milestone && milestone?.length > 0) {
        var item = milestone[0];
        this.totalAmount = item.totalAmount ? Number(item.totalAmount) : 0;
        this.paidAmount = item.paidamount ?? 0;
        this.pendingAmount = item.pendingamount;
        // this.milestoneItem = milestone.find((x) => x.currentMS == 'U') || null;
        this.milestoneItem = milestone?.find(x => x.currentMS === 'U') || null;
        // order based on sequenceno
        let sortedMS = [...milestone].sort((a, b) => a.sequenceno - b.sequenceno);
        // Timeline Handle
        let totalMS = sortedMS.length;
        let perMSpercent = 1 / totalMS * 100;
        let result = 0;
        let index = 0;
        for (const value of sortedMS) {
          if (value.reciept === null) {
            break;
          }
          index++;
          result = perMSpercent * index;
        }
        if (result > 0) {
          this.lastPaidMSPercentage = result;
        } else {
          this.lastPaidMSPercentage = 0;
        }
        this.dotsArray = sortedMS?.map((m, i) => {
          const amount = m?.amount ? Number(m.amount) : 0;
          const dotPercent = perMSpercent * (i + 1);
          const activeMS = m.reciept ? true : false;
          // if (m.reciept) {
          //   this.lastPaidMSPercentage = dotPercent;
          // }
          return {
            milestoneId: m.milestoneId,
            mileStoneName: m.mileStoneName,
            amount: amount,
            actualDate: m.actualDate,
            sequenceno: m.sequenceno,
            dotPercent: dotPercent,
            activeMS: activeMS,
            reciept: m.reciept
          };
        });
        // this.lastPaidMSPercentage = 0;
        // set active percentage.
        // Force Angular to check for updates
        // this.paidPercentage = (this.paidAmount / this.totalAmount) * 100;
        // const scheduledAmountRange = document.getElementById('scheduledAmountRange')
        // scheduledAmountRange?.style.setProperty('--value', `${this.paidPercentage}%`);
      }
    });
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getReceipt).subscribe(receipt => {
      if (receipt && receipt?.length > 0) {
        this.receiptItem = receipt;
        // this.paidAmount = 0;
        // this.receiptItem.forEach(x=>{
        //   this.paidAmount += Number(x.receiptAmt);
        // });
        if (this.paidAmount > 0) {
          this.paidPercentage = this.paidAmount / this.totalAmount * 100;
        } else {
          this.paidPercentage = 10;
        }
        const scheduledAmountRange = document.getElementById('scheduledAmountRange');
        scheduledAmountRange?.style.setProperty('--value', `${this.paidPercentage}%`);
      }
    });
  }
  // get getPaymentMSDetails
  getPaymentMSDetails() {
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getBookings).subscribe(booking => {
      if (booking?.[0]?.bookingID) {
        this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchMileStone(booking?.[0]?.bookingID));
        this.milestone$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getMileStone);
        this.milestone$.subscribe(items => {
          if (items && items.length) {
            this.viewDetailItemsApi = [...items].sort((a, b) => a.sequenceno - b.sequenceno);
          }
        }, error => {
          console.error('Error receiving items:', error);
        });
      }
    });
  }
  // Dynamically calculated amounts based on slider percentage
  // get paidAmount(): number {
  //   return (this.paidPercentage / 100) * this.totalAmount;
  // }
  // get pendingAmount(): number {
  //   return this.totalAmount - this.paidAmount;
  // }
  // Handle slider change
  setPaymentS() {
    this.viewDetailItems = [];
    let i = 1;
    this.viewDetailItemsApi.forEach(x => {
      let item = {
        milestoneId: x.milestoneId,
        mileStoneName: x.mileStoneName,
        amount: x.amount,
        sequenceno: x.sequenceno,
        currentMS: x.currentMS,
        // actualDate: x.actualDate,
        totalamount: x.totalamount,
        reciept: x.reciept
      };
      this.viewDetailItems.push(item);
      i++;
    });
    let detail = {
      title: 'Payment Schedule',
      // headers : ['Sr. No','Milestone','Amount','Actual Date', 'Invoiced', 'Receipt'],
      headers: ['Sr. No', 'Milestone', 'Amount', 'Invoiced', 'Paid'],
      //Receipt with 'Paid' Displayed Before Name
      data: this.viewDetailItems
    };
    this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetPaymentViewDetail(detail));
  }
  static ɵfac = function BookDetailsComponent_Factory(ɵt) {
    return new (ɵt || BookDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BookDetailsComponent,
    selectors: [["app-book-details"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 39,
    vars: 14,
    consts: [[1, "row", "gx-3"], [1, "col-md-6", "col-12", "mb-3"], [1, "HT-details-card"], [1, "HT-card-head"], [1, "HT-title"], ["src", "images/breakup-icon.svg"], [1, "dark-text"], [1, "card-body"], [2, "margin-left", "21px", "padding", "10px"], ["src", "images/schedule-icon.svg"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#paymentSchModal", 1, "btn", "btn-warning", 3, "click"], [1, "card-body", "p-4"], ["class", "d-flex align-items-start justify-content-between mb-3", 4, "ngIf"], ["class", "row justify-content-between mb-4", 4, "ngIf"], [1, "range-slider-container"], [1, "current-range"], [1, "range-dots"], ["class", "dot", 3, "left", "title", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between"], [1, "payment", "paid"], [1, "payment", "total"], [1, "row", "bordered"], [1, "col-sm-6", "col-12", "border-sm-end"], [1, "text-gray", "mb-2"], [1, "text-medium"], [1, "col-sm-6", "col-12"], [1, "d-flex", "align-items-start", "justify-content-between", "mb-3"], [1, "HT-title", "text-medium", 2, "font-size", "18px", "line-height", "1.2"], [1, "tag", "warning", 2, "white-space", "nowrap"], [1, "row", "justify-content-between", "mb-4"], [1, "col-auto"], [1, "text-gray", "me-2"], [1, "dot", 3, "title"], [3, "ngClass"], [1, "dot-tooltip"]],
    template: function BookDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Sale Value Breakup");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, BookDetailsComponent_Conditional_8_Template, 31, 24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, BookDetailsComponent_Conditional_10_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 1)(12, "div", 2)(13, "div", 3)(14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Payment Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookDetailsComponent_Template_button_click_18_listener() {
          return ctx.setPaymentS();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " View Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, BookDetailsComponent_div_21_Template, 6, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, BookDetailsComponent_div_23_Template, 6, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 14)(26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, BookDetailsComponent_div_29_Template, 7, 8, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 20)(36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 8, ctx.demandBreakup$) ? 8 : 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 10, ctx.milestone$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 12, ctx.milestone$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx.lastPaidMSPercentage, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dotsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.formatToINRCurrency(ctx.paidAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.formatToINRCurrency(ctx.pendingAmount), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: [".range-slider[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%] {\n  -webkit-appearance: none; \n\n  width: 100%;\n  height: 8px;\n  background: linear-gradient(to right, #EAB93E 0%, #EAB93E var(--value), #e0e0e0 var(--value), #e0e0e0 100%);\n  border-radius: 5px;\n  outline: none;\n  transition: background 0.3s ease-in-out; \n\n}\n\n.range-slider[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  appearance: none;\n  width: 20px;\n  height: 20px;\n  background-color: #EAB93E;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.range-slider[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 20px;\n  height: 20px;\n  background-color: #EAB93E;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.range-slider[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%]::-ms-thumb {\n  width: 20px;\n  height: 20px;\n  background-color: #EAB93E;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n\n\n.range-slider[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background: linear-gradient(to right, #EAB93E 0%, #EAB93E var(--value), #e0e0e0 var(--value), #e0e0e0 100%);\n  border-radius: 10px; \n\n}\n\n.range-slider[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%]::-moz-range-track {\n  background: linear-gradient(to right, #EAB93E 0%, #EAB93E var(--value), #e0e0e0 var(--value), #e0e0e0 100%);\n  border-radius: 10px; \n\n}\n\n.range-slider[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%]::-ms-track {\n  background: linear-gradient(to right, #EAB93E 0%, #EAB93E var(--value), #e0e0e0 var(--value), #e0e0e0 100%);\n  border-radius: 10px;\n  border-color: transparent;\n  \n\n}\n\n\n\n.range-slider[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%]::-ms-fill-lower {\n  background: #EAB93E; \n\n  border-radius: 4px 0 0 4px; \n\n}\n\n.range-slider[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%]::-ms-fill-upper {\n  background: #e0e0e0; \n\n  border-radius: 0 4px 4px 0; \n\n}\n\n\n\n.range-slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n.current-range[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 7px;\n  background: #ededed;\n  border-radius: 50px;\n}\n\n.current-range[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #eab93e;\n  height: 100%;\n  border-radius: 50px;\n}\n\n.custom-range[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  z-index: 0; \n\n}\n\n.range-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%; \n\n  width: 100%;\n  height: 10px; \n\n  transform: translateY(-50%);\n}\n\n.dot[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background-color: #ffe29a;\n  border-radius: 50%;\n  transform: translateX(-50%);\n  border: 1px solid #b8b8b8;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.dot[_ngcontent-%COMP%]   .active-dot[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  background-color: #8080804d;\n  border-radius: 10px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.dot-tooltip[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #ffffff;\n  bottom: calc(-100% + 25px);\n  width: 230px;\n  font-size: 12px;\n  color: #858181;\n  padding: 5px 13px;\n  border-radius: 10px;\n  left: -50%;\n  box-shadow: 0px 0px 21px #cccbcb;\n  transform: translateX(-70%);\n  cursor: pointer;\n  line-height: 1.7;\n}\n\n.dot[_ngcontent-%COMP%]:hover   .dot-tooltip[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvYm9vay1kZXRhaWxzL2Jvb2stZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCLEVBQUUsOEJBQThCO0VBQ3hELFdBQVc7RUFDWCxXQUFXO0VBQ1gsMkdBQTJHO0VBQzNHLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUNBQXVDLEVBQUUsNkJBQTZCO0FBQ3hFOztBQUVBO0VBRUUsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSwyR0FBMkc7RUFDM0csbUJBQW1CLEVBQUUsMkJBQTJCO0FBQ2xEOztBQUVBO0VBQ0UsMkdBQTJHO0VBQzNHLG1CQUFtQixFQUFFLDJCQUEyQjtBQUNsRDs7QUFFQTtFQUNFLDJHQUEyRztFQUMzRyxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQSw0REFBNEQ7QUFDNUQ7RUFDRSxtQkFBbUIsRUFBRSw4QkFBOEI7RUFDbkQsMEJBQTBCLEVBQUUscUJBQXFCO0FBQ25EOztBQUVBO0VBQ0UsbUJBQW1CLEVBQUUsZ0NBQWdDO0VBQ3JELDBCQUEwQixFQUFFLHNCQUFzQjtBQUNwRDs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBRSxpQ0FBaUM7QUFDL0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUSxFQUFFLHNDQUFzQztFQUNoRCxXQUFXO0VBQ1gsWUFBWSxFQUFFLHdCQUF3QjtFQUN0QywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQ0FBZ0M7RUFDaEMsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIucmFuZ2Utc2xpZGVyIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgYXBwZWFyYW5jZSAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0VBQjkzRSAwJSwgI0VBQjkzRSB2YXIoLS12YWx1ZSksICNlMGUwZTAgdmFyKC0tdmFsdWUpLCAjZTBlMGUwIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDsgLyogRW5zdXJlIHNtb290aCB0cmFuc2l0aW9uICovXG59XG5cbi5yYW5nZS1zbGlkZXIgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBQjkzRTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yYW5nZS1zbGlkZXIgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBQjkzRTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yYW5nZS1zbGlkZXIgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotbXMtdGh1bWIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFCOTNFO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQ3Jvc3MtYnJvd3NlciB0cmFjayBmaWxsICovXG4ucmFuZ2Utc2xpZGVyIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFQUI5M0UgMCUsICNFQUI5M0UgdmFyKC0tdmFsdWUpLCAjZTBlMGUwIHZhcigtLXZhbHVlKSwgI2UwZTBlMCAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgLyogTWFrZSB0aGUgdHJhY2sgcm91bmRlZCAqL1xufVxuXG4ucmFuZ2Utc2xpZGVyIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS10cmFjayB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0VBQjkzRSAwJSwgI0VBQjkzRSB2YXIoLS12YWx1ZSksICNlMGUwZTAgdmFyKC0tdmFsdWUpLCAjZTBlMGUwIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBNYWtlIHRoZSB0cmFjayByb3VuZGVkICovXG59XG5cbi5yYW5nZS1zbGlkZXIgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotbXMtdHJhY2sge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFQUI5M0UgMCUsICNFQUI5M0UgdmFyKC0tdmFsdWUpLCAjZTBlMGUwIHZhcigtLXZhbHVlKSwgI2UwZTBlMCAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLyogUmVtb3ZlIGJvcmRlciBmb3IgSUUgKi9cbn1cblxuLyogT3B0aW9uYWw6IEFkZCBhIHJvdW5kZWQgYm9yZGVyIHRvIHRoZSBlbmRzIG9mIHRoZSB0cmFjayAqL1xuLnJhbmdlLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi1tcy1maWxsLWxvd2VyIHtcbiAgYmFja2dyb3VuZDogI0VBQjkzRTsgLyogQ29sb3IgZm9yIHRoZSBmaWxsZWQgcGFydCAqL1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDsgLyogUm91bmRlZCBsZWZ0IGVuZCAqL1xufVxuXG4ucmFuZ2Utc2xpZGVyIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1zLWZpbGwtdXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwOyAvKiBDb2xvciBmb3IgdGhlIHVuZmlsbGVkIHBhcnQgKi9cbiAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7IC8qIFJvdW5kZWQgcmlnaHQgZW5kICovXG59XG5cbi8qIFRpbWVsaW5lIEhhbmRsZSBDU1MgKi9cbi5yYW5nZS1zbGlkZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1cnJlbnQtcmFuZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5jdXJyZW50LXJhbmdlID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhYjkzZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uY3VzdG9tLXJhbmdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDsgLyogRW5zdXJlcyBzbGlkZXIgaXMgYWJvdmUgZG90cyAqL1xufVxuXG4ucmFuZ2UtZG90cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7IC8qIEFsaWduIGRvdHMgdmVydGljYWxseSB3aXRoIHNsaWRlciAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHB4OyAvKiBBZGp1c3QgZm9yIGRvdCBzaXplICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmRvdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTI5YTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGI4Yjg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZG90IC5hY3RpdmUtZG90IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwNGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5kb3QtdG9vbHRpcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm90dG9tOiBjYWxjKC0xMDAlICsgMjVweCk7XG4gIHdpZHRoOiAyMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzg1ODE4MTtcbiAgcGFkZGluZzogNXB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGxlZnQ6IC01MCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjFweCAjY2NjYmNiO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTcwJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbn1cblxuLmRvdDpob3ZlciAuZG90LXRvb2x0aXAge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5222:
/*!****************************************************************************!*\
  !*** ./src/app/features/dashboard/components/content/content.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentComponent: () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class ContentComponent {
  activeSection = 'book-details'; // Default active section
  stickyNavHeight = 70; // Adjust this based on your nav height
  // Scroll to the section smoothly and adjust for sticky nav
  scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - this.stickyNavHeight,
        behavior: 'smooth'
      });
    }
  }
  ngAfterViewInit() {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
      root: null,
      // Viewport
      rootMargin: `-${this.stickyNavHeight}px 0px -80% 0px`,
      // Negative root margin for triggering near the sticky nav
      threshold: 0 // Trigger when top of the section is near sticky nav
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Check if the section is intersecting the viewport
        // console.log(entry);
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, observerOptions);
    sections.forEach(section => {
      observer.observe(section);
    });
  }
  onWindowScroll() {
    this.updateActiveNavOnScroll();
  }
  // Check which section is near the sticky nav on scroll
  updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('.section');
    let currentSection = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= this.stickyNavHeight && rect.bottom >= this.stickyNavHeight) {
        currentSection = section.id;
      }
    });
    if (currentSection) {
      this.activeSection = currentSection;
    }
  }
  static ɵfac = function ContentComponent_Factory(ɵt) {
    return new (ɵt || ContentComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContentComponent,
    selectors: [["app-content"]],
    hostBindings: function ContentComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ContentComponent_scroll_HostBindingHandler($event) {
          return ctx.onWindowScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 16,
    vars: 14,
    consts: [[1, "HT-blocks-nav"], [3, "click"]],
    template: function ContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ul")(2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_li_click_2_listener() {
          return ctx.scrollTo("book-details");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Booking Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_li_click_4_listener() {
          return ctx.scrollTo("payment-schedule");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Payment Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_li_click_6_listener() {
          return ctx.scrollTo("dl-receipts");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DL & Receipts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_li_click_8_listener() {
          return ctx.scrollTo("possession-details");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Possession Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_li_click_10_listener() {
          return ctx.scrollTo("project-updates");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Project Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_li_click_12_listener() {
          return ctx.scrollTo("upcoming-projects");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Upcoming Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_li_click_14_listener() {
          return ctx.scrollTo("faqs");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeSection === "book-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeSection === "payment-schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeSection === "dl-receipts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeSection === "possession-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeSection === "project-updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeSection === "upcoming-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeSection === "faqs");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    styles: [".HT-blocks-nav[_ngcontent-%COMP%]{\n    z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIuSFQtYmxvY2tzLW5hdntcbiAgICB6LWluZGV4OiAxO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5316:
/*!******************************************************************!*\
  !*** ./src/app/features/dashboard/components/dl/dl.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DLComponent: () => (/* binding */ DLComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _actions_booking_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/booking.actions */ 4445);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/formatHelper */ 7781);








function DLComponent_Conditional_12_For_1_Conditional_6_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Demand Letters unavailable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DLComponent_Conditional_12_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DLComponent_Conditional_12_For_1_Conditional_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const demandLetter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.downloadFile((demandLetter_r2 == null ? null : demandLetter_r2.invoiceUrl) || "52142"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DLComponent_Conditional_12_For_1_Conditional_6_p_3_Template, 2, 0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const demandLetter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show-error", !demandLetter_r2.invoiceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !demandLetter_r2.invoiceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !demandLetter_r2.invoiceUrl);
  }
}
function DLComponent_Conditional_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DLComponent_Conditional_12_For_1_Template_img_click_3_listener() {
      const demandLetter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.downloadDemandORReceiptLetter(demandLetter_r2 || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DLComponent_Conditional_12_For_1_Conditional_6_Template, 4, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 19)(13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div")(16, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const demandLetter_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](demandLetter_r2 == null ? null : demandLetter_r2.invoiceNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((demandLetter_r2 == null ? null : demandLetter_r2.invoiceUrl) ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](demandLetter_r2.invoiceDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.formatToINRCurrency(demandLetter_r2 == null ? null : demandLetter_r2.invoiceAmt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", !(demandLetter_r2 == null ? null : demandLetter_r2.invoiceDate) || (demandLetter_r2 == null ? null : demandLetter_r2.invoiceDate == null ? null : demandLetter_r2.invoiceDate.startsWith("1900")) ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 5, demandLetter_r2 == null ? null : demandLetter_r2.invoiceDate), " ");
  }
}
function DLComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](0, DLComponent_Conditional_12_For_1_Template, 21, 7, "div", 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 0, ctx_r2.demandLetter$)) == null ? null : tmp_1_0.slice(0, 4));
  }
}
function DLComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No demand letters available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DLComponent_Conditional_26_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DLComponent_Conditional_26_For_1_Conditional_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const receipt_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.downloadFile((receipt_r6 == null ? null : receipt_r6.receiptUrl) || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const receipt_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show-error", !receipt_r6.receiptUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !receipt_r6.receiptUrl);
  }
}
function DLComponent_Conditional_26_For_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Receipts unavailable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DLComponent_Conditional_26_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DLComponent_Conditional_26_For_1_Template_img_click_3_listener() {
      const receipt_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.downloadDemandORReceiptLetter(receipt_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DLComponent_Conditional_26_For_1_Conditional_7_Template, 2, 3, "button", 25)(8, DLComponent_Conditional_26_For_1_p_8_Template, 2, 0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 19)(10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div")(13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const receipt_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](receipt_r6 == null ? null : receipt_r6.receiptNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((receipt_r6 == null ? null : receipt_r6.receiptUrl) ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !receipt_r6.receiptUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.formatToINRCurrency(receipt_r6 == null ? null : receipt_r6.receiptAmt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", !(receipt_r6 == null ? null : receipt_r6.receiptDate) || (receipt_r6 == null ? null : receipt_r6.receiptDate == null ? null : receipt_r6.receiptDate.startsWith("1900")) ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 5, receipt_r6 == null ? null : receipt_r6.receiptDate), " ");
  }
}
function DLComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](0, DLComponent_Conditional_26_For_1_Template, 18, 7, "div", 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 0, ctx_r2.receipt$)) == null ? null : tmp_1_0.slice(0, 4));
  }
}
function DLComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No receipts available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class DLComponent {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store);
  demandLetter$;
  receipt$;
  viewDetailItems = [];
  formatToINRCurrency = src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__["default"];
  demandLetterItems = [];
  receiptItems = [];
  ngOnInit() {
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_1__.BookingState.getBookings).subscribe(booking => {
      // console.log("booking", booking);
      if (booking?.[0]?.bookingID) {
        this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_0__.FetchDemandLetter(booking?.[0]?.bookingID));
        this.demandLetter$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_1__.BookingState.getDemandLetter);
        this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_0__.FetchReceipt(booking?.[0]?.bookingID));
        this.receipt$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_1__.BookingState.getReceipt);
        this.demandLetter$.subscribe(items => {
          this.demandLetterItems = items; // Set the emitted values to the component property
        }, error => {
          console.error('Error receiving items:', error);
        });
        this.receipt$.subscribe(items => {
          this.receiptItems = items; // Set the emitted values to the component property
        }, error => {
          console.error('Error receiving items:', error);
        });
      }
    });
  }
  setDL() {
    this.viewDetailItems = [];
    let i = 1;
    this.demandLetterItems.forEach(x => {
      let item = {
        date: x.invoiceDate,
        amount: x.invoiceAmt,
        uniqueNo: x.invoiceNo,
        invoiceDescription: x.invoiceDescription,
        incrementNo: i,
        url: x.invoiceUrl
      };
      this.viewDetailItems.push(item);
      i++;
    });
    let detail = {
      title: 'Demand Letters',
      headers: ['Sr. No', 'Date', 'Invoice No', 'Amount', 'Descripition'],
      data: this.viewDetailItems
    };
    this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_0__.SetViewDetail(detail));
  }
  setReceipt() {
    this.viewDetailItems = [];
    let i = 1;
    this.receiptItems.forEach(x => {
      let item = {
        date: x.receiptDate,
        amount: x.receiptAmt,
        uniqueNo: x.receiptNo,
        incrementNo: i,
        url: x.receiptUrl
      };
      this.viewDetailItems.push(item);
      i++;
    });
    let detail = {
      title: 'Receipts',
      headers: ['Sr. No', 'Date', 'Receipt No', 'Amount', ''],
      data: this.viewDetailItems
    };
    this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_0__.SetViewDetail(detail));
  }
  downloadFile(filename) {
    console.log('File name: ', filename);
    if (filename && filename != '') {
      this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_0__.DownloadBookingFile(filename));
    }
  }
  downloadDemandORReceiptLetter(filename) {
    // console.log('File DemandLetter: ', filename?.invoiceUrl);
    // if (filename && filename != '') {
    //   const blob = new Blob([''], { type: 'application/pdf' });
    //   const url = URL.createObjectURL(blob);
    //   window.open(url, '_blank');
    //   // Clean up memory after opening
    //   setTimeout(() => URL.revokeObjectURL(url), 10000);
    // }
  }
  static ɵfac = function DLComponent_Factory(ɵt) {
    return new (ɵt || DLComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DLComponent,
    selectors: [["app-dl"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 29,
    vars: 6,
    consts: [[1, "row", "gx-3"], [1, "col-md-6", "col-12", "mb-3"], [1, "HT-details-card"], [1, "HT-card-head"], [1, "HT-title"], ["src", "images/letters-icon.svg"], [1, "dark-text"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#receiptsModal", 1, "btn", "btn-warning", 3, "click"], [1, "card-body"], [2, "margin-left", "21px", "padding", "10px"], ["src", "images/receipts-icon.svg"], [1, "bordered"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "download-file-box", "big-box", "p-0", "border-0"], ["src", "images/attach-icon.svg", "type", "button", 3, "click"], [1, "pe-2"], [1, "button-container"], [1, "text-gray"], [1, "text-meduim"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-meduim", "font-big"], [1, "btn", "btn-download", 3, "click", "disabled"], ["src", "images/download-icon.svg"], ["class", "error-tooltip", 4, "ngIf"], [1, "error-tooltip"], [1, "btn", "btn-download", 3, "disabled", "show-error"], ["src", "images/download-icon.svg", "alt", "Download"]],
    template: function DLComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Demand Letters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DLComponent_Template_button_click_9_listener() {
          return ctx.setDL();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " View Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DLComponent_Conditional_12_Template, 3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DLComponent_Conditional_14_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "div", 4)(19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Receipts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DLComponent_Template_button_click_23_listener() {
          return ctx.setReceipt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " View Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, DLComponent_Conditional_26_Template, 3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, DLComponent_Conditional_28_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 2, ctx.demandLetter$) ? 12 : 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 4, ctx.receipt$) ? 26 : 28);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: [".bordered[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n\n\n.error-tooltip[_ngcontent-%COMP%] {\n  visibility: hidden;\n  background-color: #fff;\n  color: #858181;\n  text-align: center;\n  border-radius: 5px;\n  padding: 5px;\n  position: absolute;\n  bottom: 80%; \n\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  z-index: 1;\n  font-size: 12px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  box-shadow: 0px 0px 21px #cccbcb;\n}\n\n\n\n.button-container[_ngcontent-%COMP%]:hover   button.show-error[_ngcontent-%COMP%]    + .error-tooltip[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGwvZGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVcsRUFBRSxxQ0FBcUM7RUFDbEQsU0FBUztFQUNULDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLGdDQUFnQztBQUNsQzs7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlcmVkIHtcbiAgcGFkZGluZzogMTRweCAyNHB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKiBUb29sdGlwIGZvciBlcnJvciBtZXNzYWdlICovXG4uZXJyb3ItdG9vbHRpcCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM4NTgxODE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA4MCU7IC8qIEFkanVzdCBwb3NpdGlvbiBhYm92ZSB0aGUgYnV0dG9uICovXG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIxcHggI2NjY2JjYjtcbn1cblxuLyogU2hvdyB0b29sdGlwIHdoZW4gYnV0dG9uIGlzIGhvdmVyZWQgKi9cbi5idXR0b24tY29udGFpbmVyOmhvdmVyIGJ1dHRvbi5zaG93LWVycm9yICsgLmVycm9yLXRvb2x0aXAge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2234:
/*!********************************************************************!*\
  !*** ./src/app/features/dashboard/components/faq/faq.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqComponent: () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/booking.actions */ 4445);







function FaqComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "h2", 8)(2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 10)(5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattributeInterpolate1"]("data-bs-target", "#collapse-", $index_r2 + 10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattributeInterpolate1"]("aria-controls", "collapse-", $index_r2 + 10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", faq_r1 == null ? null : faq_r1.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "collapse-", $index_r2 + 10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", faq_r1 == null ? null : faq_r1.answer, " ");
  }
}
function FaqComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, FaqComponent_Conditional_7_For_2_Template, 7, 8, "div", 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 0, ctx_r2.faqs$));
  }
}
function FaqComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No faqs to show.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class FaqComponent {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store);
  faqs$;
  ngOnInit() {
    // this.store.dispatch(new LoadData());
    // this.faqs$ = this.store.select(DataState.getFaqs);
    this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchFaq());
    this.faqs$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getFaq);
  }
  static ɵfac = function FaqComponent_Factory(ɵt) {
    return new (ɵt || FaqComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FaqComponent,
    selectors: [["app-faq"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 3,
    consts: [[1, "HT-details-card"], [1, "HT-card-head"], [1, "HT-title"], ["src", "images/faq-icon.svg"], [1, "dark-text"], [1, "card-body", "p-4"], ["id", "accordionExample", 1, "accordion", "faq-accordion"], [1, "accordion-item"], ["id", "heading1", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "true", 1, "accordion-button"], ["aria-labelledby", "heading1", 1, "accordion-collapse", "collapse", "show", 3, "id"], [1, "accordion-body"]],
    template: function FaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FaqComponent_Conditional_7_Template, 4, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FaqComponent_Conditional_9_Template, 2, 0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 1, ctx.faqs$) ? 7 : 9);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 174:
/*!**************************************************************************!*\
  !*** ./src/app/features/dashboard/components/header/header.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/auth.service */ 5498);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var src_app_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/storeNgxs/auth.state */ 192);
/* harmony import */ var ngx_avatars__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-avatars */ 7575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var _actions_booking_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/booking.actions */ 4445);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dashboard.service */ 8089);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_auth_storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/storeNgxs/auth.action */ 1116);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 2223);


















const _c0 = a0 => ({
  removeDropArrow: a0
});
const _c1 = a0 => ({
  active: a0
});
function HeaderComponent_Conditional_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No users found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_Conditional_4_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-tooltip", ctx_r1.userTooltip(item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r3.userName, " ");
  }
}
function HeaderComponent_Conditional_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-tooltip", ctx_r1.userTooltip(item_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r4 == null ? null : item_r4.userName, " ");
  }
}
function HeaderComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41)(1, "span", 44)(2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Loading\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function HeaderComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "form", 35)(2, "div", 36)(3, "ng-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function HeaderComponent_Conditional_4_Template_ng_select_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.handleUserSubmitClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HeaderComponent_Conditional_4_ng_template_4_Template, 2, 0, "ng-template", 38)(5, HeaderComponent_Conditional_4_ng_template_5_Template, 2, 2, "ng-template", 39)(6, HeaderComponent_Conditional_4_ng_template_6_Template, 2, 2, "ng-template", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, HeaderComponent_Conditional_4_Conditional_7_Template, 4, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx_r1.users)("searchable", true)("clearable", false)("searchWhileComposing", true)("searchFn", ctx_r1.searchUser)("trackByFn", ctx_r1.trackByUserId)("disabled", ctx_r1.isUserLoading());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r1.isUserLoading() ? 7 : -1);
  }
}
function HeaderComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_For_14_Template_a_click_1_listener() {
      const project_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onProjectChange(project_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ngx-avatars", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const project_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c1, (project_r6 == null ? null : project_r6.booking == null ? null : project_r6.booking.bookingID) == (ctx_r1.selectedProject == null ? null : ctx_r1.selectedProject.booking == null ? null : ctx_r1.selectedProject.booking.bookingID)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", project_r6 == null ? null : project_r6.projectName)("src", project_r6 == null ? null : project_r6.projectLogoUrl)("round", true)("size", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (project_r6 == null ? null : project_r6.booking == null ? null : project_r6.booking.building) + " | " + (project_r6 == null ? null : project_r6.booking == null ? null : project_r6.booking.unit), " ");
  }
}
function HeaderComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 15);
  }
}
function HeaderComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 50)(4, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const notification_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](notification_r7 == null ? null : notification_r7.notificationPayload);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", !(notification_r7 == null ? null : notification_r7.createdAt) || "1900-01-01 00:00:00.000" ? "\u2013" : 0, " ");
  }
}
function HeaderComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "div", 50)(2, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Notifications not available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
class HeaderComponent {
  fb;
  authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__.Store);
  dashboardService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__.DashboardService);
  // ---- state -------------------------------------------------------------
  projects = [];
  selectedProject = null;
  lastValidProject = null;
  lastValidUserId = null;
  // ✅ prevents getUser subscription from overwriting an in-flight revert
  isReverting = false;
  user = null;
  notification$;
  hasUnreadNotifications = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(true);
  notificationId = [];
  users = [];
  userForm;
  selectedUserValue;
  isDropdownVisible = false;
  projectUpdates = [];
  // ---- loaders -----------------------------------------------------------
  isUserLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(false);
  isProjectLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(false);
  // ---- ng-select helpers -------------------------------------------------
  searchUser = (term, item) => {
    const strip = n => (n || '').replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, '').toLowerCase();
    return strip(item?.userName).includes((term || '').toLowerCase());
  };
  trackByUserId = item => item?.userId;
  compareUsers = (a, b) => {
    if (a == null || b == null) return a === b;
    return String(a) === String(b);
  };
  userTooltip(item) {
    if (!item) return '';
    return [item.userName, item.email ? `Email: ${item.email}` : '', item.mobile ? `Phone: ${item.mobile}` : ''].filter(Boolean).join('\n');
  }
  // ---- users -------------------------------------------------------------
  getUsersList() {
    this.authService.getUsersList().subscribe({
      next: response => {
        this.users = (response?.Data || []).sort((a, b) => {
          const stripTitle = name => name?.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, '').trim();
          return stripTitle(a.userName || '').localeCompare(stripTitle(b.userName || ''));
        });
        const targetUserId = this.lastValidUserId ?? this.user?.userID;
        if (targetUserId) {
          this.userForm.patchValue({
            userSelection: targetUserId
          }, {
            emitEvent: false
          });
        }
      },
      error: error => console.log('Error fetching users:', error)
    });
  }
  handleUserSubmitClick() {
    if (this.isUserLoading()) return;
    const selectedId = this.userForm.get('userSelection')?.value;
    console.log('selectedId: ', selectedId);
    if (!selectedId) {
      this.revertToPreviousSelection();
      return;
    }
    this.selectedUserValue = selectedId;
    const isAdmin = localStorage.getItem('isLoginAdmin');
    this.isUserLoading.set(true);
    this.authService.verifyOtp({
      userID: this.selectedUserValue,
      enteredOTP: '123456',
      isAdmin: isAdmin === 'true'
    }).subscribe({
      next: res => {
        // ✅ No token = switch rejected → revert immediately
        if (!res?.Success || !res?.Data?.token) {
          console.warn('[Header] OTP success but no token — switch rejected, reverting');
          this.revertToPreviousSelection();
          return;
        }
        // ✅ Real success — cache + dispatch
        this.selectedUserValue = this.users.find(user => user.userId === this.selectedUserValue);
        if (this.selectedUserValue) {
          this.lastValidUserId = this.selectedUserValue.userId;
          this.userForm.patchValue({
            userSelection: this.lastValidUserId
          }, {
            emitEvent: false
          });
        }
        this.store.dispatch(new src_app_auth_storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_5__.SetToken(res.Data.token));
      },
      error: err => {
        console.error('Error:', err);
        this.revertToPreviousSelection();
      }
    }).add(() => this.isUserLoading.set(false));
  }
  // ---- project updates ---------------------------------------------------
  getProjectUpdates(projectId) {
    if (!projectId) {
      console.warn('[getProjectUpdates] skipped — projectId is undefined');
      this.projectUpdates = [];
      return;
    }
    this.dashboardService.getProjectUpdates(projectId).subscribe({
      next: res => {
        this.projectUpdates = res?.Data ?? [];
      },
      error: err => {
        console.error('GetProjectUpdates failed:', err);
        this.projectUpdates = [];
        if (err?.status === 400) {
          this.revertToPreviousSelection();
        }
      }
    });
  }
  // ---- revert helper -----------------------------------------------------
  revertToPreviousSelection() {
    // console.warn('[HeaderComponent] Reverting to previous selection');
    // Pick a target that actually exists in users[] so ng-select shows a name
    let prevUserId = this.lastValidUserId ?? this.user?.userID;
    const exists = prevUserId ? this.users.some(u => String(u.userId) === String(prevUserId)) : false;
    if (!exists) {
      // The stored user isn't in the loaded list — fall back to the first user
      prevUserId = this.users?.[0]?.userId ?? null;
    }
    if (prevUserId) {
      this.isReverting = true;
      this.userForm.patchValue({
        userSelection: prevUserId
      }, {
        emitEvent: false
      });
      this.lastValidUserId = prevUserId;
    }
    const prevProject = this.lastValidProject ?? this.selectedProject ?? null;
    if (prevProject) {
      this.selectedProject = prevProject;
      this.authService.storeSelectedProject(prevProject);
      alert(`User details are not available`);
    }
    this.isUserLoading.set(false);
    this.isProjectLoading.set(false);
    setTimeout(() => this.isReverting = false, 0);
  }
  // ---- notifications -----------------------------------------------------
  markNotificationsAsRead() {
    this.notificationId.forEach(_notificationId => {
      this.dashboardService.markNotificationAsRead(_notificationId).subscribe();
    });
    this.hasUnreadNotifications.set(false);
  }
  // ---- lifecycle ---------------------------------------------------------
  ngOnInit() {
    this.getUsersList();
    this.projects = this.store.selectSnapshot(src_app_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_1__.AuthState.getProjects);
    // ---- current user ----
    this.store.select(src_app_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_1__.AuthState.getUser).subscribe(user => {
      this.user = user;
      const data = localStorage.getItem('isLoginAdmin');
      this.isDropdownVisible = data;
      // ✅ don't clobber the revert
      if (this.isReverting) return;
      if (!this.lastValidUserId && user?.userID) {
        this.lastValidUserId = user.userID;
      }
      if (this.users.length) {
        this.userForm.patchValue({
          userSelection: this.lastValidUserId ?? this.user.userID
        }, {
          emitEvent: false
        });
      }
    });
    // ---- selected project → fetch updates ----
    this.store.select(src_app_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_1__.AuthState.getSelectedProject).subscribe(project => {
      if (!project) return;
      this.selectedProject = project;
      const projectId = project?.projectId; // ✅ top-level, lowercase d
      if (projectId) {
        this.lastValidProject = project;
        this.getProjectUpdates(projectId);
      } else {
        console.warn('[Header] selectedProject has no projectId — clearing stale data');
        this.projectUpdates = [];
      }
    });
    // ---- bookings → notifications ----
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_2__.BookingState.getBookings).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(booking => !!booking?.[0]?.bookingID), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(booking => {
      this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_3__.FetchNotification(booking[0].bookingID));
      return this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_2__.BookingState.getnotification);
    })).subscribe(items => {
      this.notificationId = (items || []).map(n => n.notificationID);
      this.hasUnreadNotifications.set((items || []).some(n => !n.isRead));
    });
    this.notification$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_2__.BookingState.getnotification);
  }
  // ---- actions -----------------------------------------------------------
  handleLogoutClick() {
    this.authService.logout();
  }
  onProjectChange(project) {
    if (!project) {
      this.revertToPreviousSelection();
      return;
    }
    if (this.isProjectLoading()) return;
    this.isProjectLoading.set(true);
    try {
      this.authService.storeSelectedProject(project);
      setTimeout(() => this.isProjectLoading.set(false), 300);
    } catch (err) {
      console.error('Failed to switch project:', err);
      this.isProjectLoading.set(false);
      this.revertToPreviousSelection();
    }
  }
  // ---- constructor -------------------------------------------------------
  constructor(fb) {
    this.fb = fb;
    this.userForm = this.fb.group({
      userSelection: ['']
    });
  }
  static ɵfac = function HeaderComponent_Factory(ɵt) {
    return new (ɵt || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 51,
    vars: 24,
    consts: [[1, "dashboard-nav"], [1, "container"], ["href", "#"], ["src", "images/logo.svg"], [1, "dropdown-container"], [1, "navbar-items"], [1, "dropdown", "build-dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-white", "dropdown-toggle", 2, "opacity", "1", 3, "ngClass", "disabled"], [1, "option"], [1, "project-image", 3, "name", "src", "round", "size"], [1, "ms-2"], [1, "dropdown-menu", "w-100"], [1, "dropdown", "notifications"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "notification-wrapper", "position-relative", 3, "click"], [1, "bi", "bi-bell"], [1, "red-dot", "position-absolute"], [1, "notifications-container", "dropdown-menu"], [1, "notifications-header"], [1, "close-btn"], [1, "bi", "bi-x"], [1, "notification-item"], [1, "dropdown", "user-dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-white", "dropdown-toggle"], [1, "me-2", 3, "name", "round", "size"], [1, "profile-card", "dropdown-menu"], [1, "profile-name"], [1, "profile-info"], [1, "profile-email"], [1, "bi", "bi-envelope", "me-2"], [1, "profile-phone"], [1, "bi", "bi-telephone-plus"], [1, "divider"], [1, "logout"], ["href", "javascript:void(0)", 3, "click"], [1, "bi", "bi-box-arrow-right", "me-2"], [1, "form", 3, "formGroup"], [1, "form-group", "dropdown-wrapper", "position-relative"], ["formControlName", "userSelection", "bindValue", "userId", "bindLabel", "userName", "placeholder", "Search or select user", 1, "form-control-dropdown", 3, "change", "items", "searchable", "clearable", "searchWhileComposing", "searchFn", "trackByFn", "disabled"], ["ng-notfound-tmp", ""], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [1, "control-loader"], [1, "py-2", "px-3", "text-muted"], [1, "user-option"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "visually-hidden"], [1, "dropdown-item", "cursor-pointer", 3, "click", "ngClass"], [3, "name", "src", "round", "size"], [1, "icon"], [1, "bi", "bi-envelope"], [1, "content"], [1, "title"], [1, "timestamp"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HeaderComponent_Conditional_4_Template, 8, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "button", 7)(8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "ngx-avatars", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](13, HeaderComponent_For_14_Template, 6, 8, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 12)(16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_16_listener() {
          return ctx.markNotificationsAsRead();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, HeaderComponent_Conditional_18_Template, 1, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 16)(21, "div", 17)(22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](26, HeaderComponent_For_27_Template, 9, 4, "div", 20, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, HeaderComponent_Conditional_29_Template, 4, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "ngx-avatars", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 24)(35, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 26)(38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 32)(48, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_48_listener() {
          return ctx.handleLogoutClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.isDropdownVisible ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](22, _c0, ctx.projects && ctx.projects.length <= 1))("disabled", ctx.projects && ctx.projects.length == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", ctx.selectedProject == null ? null : ctx.selectedProject.projectName)("src", ctx.selectedProject == null ? null : ctx.selectedProject.projectLogoUrl)("round", true)("size", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx.selectedProject == null ? null : ctx.selectedProject.booking == null ? null : ctx.selectedProject.booking.building) + " | " + (ctx.selectedProject == null ? null : ctx.selectedProject.booking == null ? null : ctx.selectedProject.booking.unit), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.hasUnreadNotifications() && ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 16, ctx.notification$)) == null ? null : tmp_9_0.length) ? 18 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"]((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 18, ctx.notification$)) == null ? null : tmp_10_0.slice(0, 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](!((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 20, ctx.notification$)) == null ? null : tmp_11_0.length) ? 29 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", ctx.user == null ? null : ctx.user.name)("round", true)("size", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.mobile);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, ngx_avatars__WEBPACK_IMPORTED_MODULE_12__.AvatarModule, ngx_avatars__WEBPACK_IMPORTED_MODULE_12__.AvatarComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgOptionTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgLabelTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgNotFoundTemplateDirective],
    styles: ["\n\n.profile-card[_ngcontent-%COMP%] {\n  width: 290px;\n  padding: 15px;\n  background-color: #ffffff;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  font-family: Arial, sans-serif;\n}\n\n.project-image[_ngcontent-%COMP%] {\n  border: 1px solid #f8f8f8;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-width: 40px;\n  max-width: 50px;\n}\n\n.removeDropArrow[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n  font-weight: bold;\n}\n\n.profile-info[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.profile-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.profile-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 10px;\n  color: #000;\n}\n\n.logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.logout[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 5px;\n}\n\n.logout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #007bff;\n  font-weight: bold;\n}\n\n.divider[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  border: none;\n  border-top: 1px solid #542525;\n}\n\n\n\n\n.notifications-container[_ngcontent-%COMP%] {\n  width: 360px;\n  border-radius: 8px;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  font-family: Arial, sans-serif;\n}\n\n.notifications-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  border-bottom: 1px solid #ddd;\n}\n\n.notifications-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n  border-bottom: 1px solid #eee;\n}\n\n.notification-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #888;\n  margin-right: 20px;\n  margin-left: 10px;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 4px 0 0;\n}\n\n.options[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.options-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.notifications[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.notification-wrapper[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.red-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background-color: red;\n  border-radius: 50%;\n  top: 0;\n  right: 0;\n}\n\n\n\n.dropdown-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n\n\n.dropdown-wrapper.ng-select-mode[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n\n\n\n.form-control-dropdown[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 16px;\n  \n\n  border-radius: 8px;\n  background-color: #fff;\n  color: #333;\n  appearance: none;\n  cursor: pointer;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n\n.form-control-dropdown[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n  outline: none;\n}\n\n.form-control-dropdown[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #fff;\n  color: #333;\n}\n\n.form-control-dropdown[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:disabled {\n  color: #aaa;\n}\n\n\n\n@media (max-width: 768px) {\n  .form-control-dropdown[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 8px 10px;\n    width: 80%;\n    min-width: 100px;\n  }\n}\n\n@media (max-width: 480px) {\n  .form-control-dropdown[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 6px 8px;\n    width: 80%;\n    min-width: 100px;\n  }\n}\n\n\n\nng-select[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: none !important;\n}\n\n\n\n\n.form-control-dropdown[_ngcontent-%COMP%]     .ng-select-container {\n  min-height: 38px;\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  padding: 0 0.5rem;\n}\n\n\n\n.form-control-dropdown[_ngcontent-%COMP%]     .ng-dropdown-panel {\n  min-width: 100%;\n  z-index: 1051; \n\n}\n\n\n\n.form-control-dropdown[_ngcontent-%COMP%]     .ng-dropdown-panel .ng-dropdown-header input {\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  padding: 4px 8px;\n  width: 100%;\n}\n\n\n\n.form-control-dropdown[_ngcontent-%COMP%]     .ng-option.ng-option-marked {\n  background-color: #f1f3f5;\n}\n\n.form-control-dropdown[_ngcontent-%COMP%]     .ng-option.ng-option-selected {\n  background-color: #e7f1ff;\n  font-weight: 600;\n}\n\n\n\n\n.control-loader[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;                                   \n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.6);\n  z-index: 20;                                \n\n  border-radius: 0.375rem;\n  pointer-events: all;                        \n\n}\n\n\n\n.dashboard-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;                 \n\n}\n\n\n\n.dashboard-nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n\n\n\n.dashboard-nav[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 0 1 auto;            \n\n  min-width: 220px;          \n\n  max-width: 320px;\n  margin-bottom: 0;          \n\n}\n\n.dashboard-nav[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n}\n\n\n\n.dashboard-nav[_ngcontent-%COMP%]   .navbar-items[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjtBQUNuQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0FBQ1Y7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUEsNkNBQTZDO0FBQzdDO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMENBQTBDO0VBQzFDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBLDZDQUE2QztBQUM3QztFQUdFLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7OztBQUdBLG1EQUFtRDtBQUNuRDtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQSwyREFBMkQ7QUFDM0Q7RUFDRSxlQUFlO0VBQ2YsYUFBYSxFQUFFLDJCQUEyQjtBQUM1Qzs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7O0FBR0EsZ0RBQWdEO0FBQ2hEO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVEsb0NBQW9DLHdDQUF3QztFQUNwRixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsV0FBVyxpQ0FBaUMsZ0NBQWdDO0VBQzVFLHVCQUF1QjtFQUN2QixtQkFBbUIseUJBQXlCLCtCQUErQjtBQUM3RTs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVMsa0JBQWtCLGtDQUFrQztBQUMvRDs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUEsNkNBQTZDO0FBQzdDO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjLGFBQWEsNEJBQTRCO0VBQ3ZELGdCQUFnQixXQUFXLGtDQUFrQztFQUM3RCxnQkFBZ0I7RUFDaEIsZ0JBQWdCLFdBQVcsMENBQTBDO0FBQ3ZFOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQSw0REFBNEQ7QUFDNUQ7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwcm9maWxlIFVJIGNzcyAqL1xuLnByb2ZpbGUtY2FyZCB7XG4gIHdpZHRoOiAyOTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4ucHJvamVjdC1pbWFnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY4Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIG1heC13aWR0aDogNTBweDtcbn1cblxuLnJlbW92ZURyb3BBcnJvdzo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvZmlsZS1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvZmlsZS1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnByb2ZpbGUtaW5mbyBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvZmlsZS1pbmZvIGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5sb2dvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nb3V0IGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubG9nb3V0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdmlkZXIge1xuICBtYXJnaW46IDE1cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzU0MjUyNTtcbn1cblxuLyogbm90aWZpY2F0aW9uIGNzcyAqL1xuXG4ubm90aWZpY2F0aW9ucy1jb250YWluZXIge1xuICB3aWR0aDogMzYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5ub3RpZmljYXRpb25zLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5ub3RpZmljYXRpb25zLWhlYWRlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cblxuLm5vdGlmaWNhdGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uaWNvbiBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGltZXN0YW1wIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDRweCAwIDA7XG59XG5cbi5vcHRpb25zIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5vcHRpb25zLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpZmljYXRpb25zIGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpZmljYXRpb24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnJlZC1kb3Qge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi8qIERyb3Bkb3duIHdyYXBwZXIgc3R5bGVzICovXG4uZHJvcGRvd24td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIFJlbW92ZSBhcnJvdyBpY29uIHdoZW4gdXNpbmcgbmctc2VsZWN0ICovXG4uZHJvcGRvd24td3JhcHBlci5uZy1zZWxlY3QtbW9kZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIEZvcm0gY29udHJvbCAobmF0aXZlIHNlbGVjdCkgc3R5bGVzIG9ubHkgKi9cbi5mb3JtLWNvbnRyb2wtZHJvcGRvd24ge1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYzsgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzMzMztcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbn1cblxuLmZvcm0tY29udHJvbC1kcm9wZG93bjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDEyMywgMjU1LCAwLjUpO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9ybS1jb250cm9sLWRyb3Bkb3duIG9wdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZm9ybS1jb250cm9sLWRyb3Bkb3duIG9wdGlvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4vKiBSZXNwb25zaXZlIHN0eWxlcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLWNvbnRyb2wtZHJvcGRvd24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5mb3JtLWNvbnRyb2wtZHJvcGRvd24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgfVxufVxuXG4vKiBPcHRpb25hbDogUHJldmVudCBicm93c2VyIGRlZmF1bHQgYXJyb3dzICovXG5uZy1zZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5cbi8qIE1ha2Ugbmctc2VsZWN0IGxvb2sgbGlrZSB5b3VyIGV4aXN0aW5nIGNvbnRyb2wgKi9cbi5mb3JtLWNvbnRyb2wtZHJvcGRvd24gOjpuZy1kZWVwIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMzhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuXG4vKiBEcm9wZG93biBwYW5lbCB3aWR0aCAod29ya3Mgd2hlbiBOT1QgYXBwZW5kZWQgdG8gYm9keSkgKi9cbi5mb3JtLWNvbnRyb2wtZHJvcGRvd24gOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA1MTsgLyogYWJvdmUgYm9vdHN0cmFwIG5hdmJhciAqL1xufVxuXG4vKiBTZWFyY2ggaW5wdXQgaW5zaWRlIHRoZSBwYW5lbCAqL1xuLmZvcm0tY29udHJvbC1kcm9wZG93biA6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1oZWFkZXIgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogSGlnaGxpZ2h0ZWQgLyBzZWxlY3RlZCBvcHRpb24gKi9cbi5mb3JtLWNvbnRyb2wtZHJvcGRvd24gOjpuZy1kZWVwIC5uZy1vcHRpb24ubmctb3B0aW9uLW1hcmtlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjU7XG59XG5cbi5mb3JtLWNvbnRyb2wtZHJvcGRvd24gOjpuZy1kZWVwIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZjFmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuXG4vKiBMb2FkZXIgb3ZlcmxheSDDosKAwpQgc2NvcGVkIHRvIGl0cyBjb250cm9sIG9ubHkgKi9cbi5jb250cm9sLWxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBjb3ZlcnMgb25seSB0aGUgcGFyZW50ICh0aGUgc2VsZWN0KSAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB6LWluZGV4OiAyMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGFib3ZlIHRoZSBuZy1zZWxlY3QgY29udHJvbCAqL1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDsgICAgICAgICAgICAgICAgICAgICAgICAvKiBibG9jayBjbGlja3Mgd2hpbGUgbG9hZGluZyAqL1xufVxuXG4vKiA9PT09PSBEYXNoYm9hcmQgbmF2IGxheW91dCA9PT09PSAqL1xuLmRhc2hib2FyZC1uYXYgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDsgICAgICAgICAgICAgICAgIC8qIHNwYWNlIGJldHdlZW4gbG9nbyBhbmQgc2VsZWN0ICovXG59XG5cbi8qIExvZ28gw6LCgMKUIG5ldmVyIHNocmluaywgc3RheSBpbmxpbmUgKi9cbi5kYXNoYm9hcmQtbmF2IC5jb250YWluZXIgPiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4vKiBVc2VyIHNlbGVjdCDDosKAwpQgc2l0cyByaWdodCBiZXNpZGUgdGhlIGxvZ28gKi9cbi5kYXNoYm9hcmQtbmF2IC5kcm9wZG93bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAwIDEgYXV0bzsgICAgICAgICAgICAvKiB0YWtlIG9ubHkgd2hhdCBpdCBuZWVkcyAqL1xuICBtaW4td2lkdGg6IDIyMHB4OyAgICAgICAgICAvKiBnaXZlIG5nLXNlbGVjdCBhIHVzYWJsZSB3aWR0aCAqL1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwOyAgICAgICAgICAvKiBraWxsIHRoZSBtYi04IGNhdXNpbmcgdmVydGljYWwgb2Zmc2V0ICovXG59XG5cbi5kYXNoYm9hcmQtbmF2IC5kcm9wZG93bi1jb250YWluZXIgLmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBQdXNoIGJlbGwgKyBwcm9maWxlICsgcHJvamVjdCBkcm9wZG93biB0byB0aGUgZmFyIHJpZ2h0ICovXG4uZGFzaGJvYXJkLW5hdiAubmF2YmFyLWl0ZW1zIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3666:
/*!********************************************************************************!*\
  !*** ./src/app/features/dashboard/components/kyc-modal/kyc-modal.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KycModalComponent: () => (/* binding */ KycModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var src_app_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/storeNgxs/auth.state */ 192);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var _actions_booking_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/booking.actions */ 4445);








function KycModalComponent_Conditional_9_For_1_For_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KycModalComponent_Conditional_9_For_1_For_16_Conditional_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.downloadFile((item_r2 == null ? null : item_r2.documentFile) || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function KycModalComponent_Conditional_9_For_1_For_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td")(8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, KycModalComponent_Conditional_9_For_1_For_16_Conditional_9_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.documentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", !(item_r2 == null ? null : item_r2.createdAt) || (item_r2 == null ? null : item_r2.createdAt == null ? null : item_r2.createdAt.startsWith("1900")) ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 3, item_r2 == null ? null : item_r2.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((item_r2 == null ? null : item_r2.documentFile) ? 9 : -1);
  }
}
function KycModalComponent_Conditional_9_For_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 15)(1, "td")(2, "input", 24, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function KycModalComponent_Conditional_9_For_1_Conditional_17_Template_input_input_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const inputRef_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onInput(inputRef_r5.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td")(8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KycModalComponent_Conditional_9_For_1_Conditional_17_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const fileInput_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](fileInput_r6.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 26, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function KycModalComponent_Conditional_9_For_1_Conditional_17_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Upload Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td")(17, "div", 29)(18, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KycModalComponent_Conditional_9_For_1_Conditional_17_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.uploadKyc((group_r7 == null ? null : group_r7.ownerName) || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KycModalComponent_Conditional_9_For_1_Conditional_17_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.cancelAddNow((group_r7 == null ? null : group_r7.ownerName) || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", !ctx_r2.today || "1900-01-01 00:00:00.000" ? "\u2013" : 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.uploadedFile == null ? null : ctx_r2.uploadedFile.name);
  }
}
function KycModalComponent_Conditional_9_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 16);
  }
}
function KycModalComponent_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 12)(4, "div", 13)(5, "table", 14)(6, "thead")(7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Document Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](15, KycModalComponent_Conditional_9_For_1_For_16_Template, 12, 5, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, KycModalComponent_Conditional_9_For_1_Conditional_17_Template, 22, 4, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, KycModalComponent_Conditional_9_For_1_Conditional_18_Template, 1, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", group_r7 == null ? null : group_r7.ownerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](group_r7.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((group_r7 == null ? null : group_r7.isAddNew) == 1 ? 17 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((group_r7 == null ? null : group_r7.isAddNew) == 0 ? 18 : -1);
  }
}
function KycModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](0, KycModalComponent_Conditional_9_For_1_Template, 19, 3, "div", 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r2.groupedItems);
  }
}
function KycModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class KycModalComponent {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store);
  user = null;
  kyc$;
  kyclist = [];
  today = new Date();
  documentName = '';
  bookingId = 0;
  groupedItems = [];
  uploadedFile = null;
  ngOnInit() {
    this.user = this.store.selectSnapshot(src_app_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getUser);
    this.loadKycData();
  }
  loadKycData() {
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_1__.BookingState.getBookings).subscribe(booking => {
      if (booking?.[0]?.bookingID) {
        this.bookingId = booking?.[0]?.bookingID;
        this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_2__.FetchKyc(booking?.[0]?.bookingID));
        this.kyc$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_1__.BookingState.getKyc);
        this.kyc$.subscribe(items => {
          this.kyclist = items; // Set the emitted values to the component property
          this.kyclist.sort((a, b) => {
            if (a.ownerName < b.ownerName) return -1;
            if (a.ownerName > b.ownerName) return 1;
            return 0;
          });
          this.groupByOwnerName();
        }, error => {
          console.error('Error receiving items:', error);
        });
      }
    });
  }
  groupByOwnerName() {
    const grouped = this.kyclist.reduce((acc, item) => {
      // Group by ownerName
      const key = item.ownerName;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
    // Convert the object to an array for easier looping
    this.groupedItems = Object.keys(grouped).map(ownerName => {
      return {
        ownerName: ownerName,
        isAddNew: 0,
        items: grouped[ownerName]
      };
    });
  }
  addNew(ownerName) {
    this.groupedItems.map(x => {
      if (x.ownerName == ownerName) {
        x.isAddNew = 1;
      } else {
        x.isAddNew = 0;
      }
    });
    console.log("groupedItems", this.groupedItems);
  }
  cancelAddNow(ownerName) {
    this.groupedItems.map(x => {
      if (x.ownerName == ownerName) {
        x.isAddNew = 0;
      }
    });
  }
  deleteKyc(kycId, ownerName) {
    if (kycId != '') {
      this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_2__.DeleteKyc(kycId));
      setTimeout(() => {
        this.loadKycData();
      }, 1000);
    } else {
      this.groupedItems.map(x => {
        if (x.ownerName == ownerName) {
          x.isAddNew = 0;
        }
      });
    }
  }
  onInput(value) {
    this.documentName = value; // Update the userName variable when input changes
  }
  downloadFile(filename) {
    if (filename && filename != '') {
      this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_2__.DownloadKYCFile(filename));
    }
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.uploadedFile = input.files[0];
      // this.documentName = this.uploadedFile.name; // Get the name of the selected file
      // You can further process the file here if needed (e.g., upload it)
    } else {
      this.uploadedFile = null;
    }
  }
  uploadKyc(ownerName) {
    if (this.documentName == '') {
      alert('Document name required');
    } else if (!this.uploadedFile) {
      alert('Please select a file');
    } else {
      let userId = this.user?.userID || '';
      this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_2__.UploadKyc(this.bookingId, ownerName, this.documentName, userId, this.uploadedFile));
      setTimeout(() => {
        this.loadKycData();
      }, 1000);
    }
  }
  static ɵfac = function KycModalComponent_Factory(ɵt) {
    return new (ɵt || KycModalComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: KycModalComponent,
    selectors: [["app-kyc-modal"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 1,
    consts: [["inputRef", ""], ["fileInput", ""], ["id", "kycModal", "tabindex", "-1", "aria-labelledby", "kycModalLabel", "aria-hidden", "true", 1, "modal", "aside-modal"], [1, "modal-dialog", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "HT-title"], ["src", "images/upload-icon.svg"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "mb-32"], [1, "text-bold", "font-big", "font-lora", "mb-3"], [1, "table-box-bordered"], [1, "table-responsive"], [1, "table"], [1, ""], [1, "px-3", "pb-2"], [1, "text-gray"], [1, "table-options", "d-flex"], [1, "btn", "btn-download"], [1, "btn", "btn-black", "d-none"], [1, "bi", "bi-check2"], [1, "btn", "btn-download", 3, "click"], ["src", "images/download-icon.svg"], ["type", "text", "placeholder", "Document Name", 1, "form-control", 3, "input"], [1, "upload-doc-box", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], [1, "bi", "bi-upload"], [1, "pe-2"], [1, "table-options"], [1, "btn", "btn-black", 3, "click"]],
    template: function KycModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "KYC Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, KycModalComponent_Conditional_9_Template, 2, 0)(10, KycModalComponent_Conditional_10_Template, 2, 0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.groupedItems && ctx.groupedItems.length ? 9 : 10);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4650:
/*!********************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/milestone-modal/milestone-modal.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MilestoneModalComponent: () => (/* binding */ MilestoneModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/booking.actions */ 4445);







const _c0 = a0 => ({
  "disabled-milestone": a0
});
function MilestoneModalComponent_Conditional_9_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MilestoneModalComponent_Conditional_9_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MilestoneModalComponent_Conditional_9_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MilestoneModalComponent_Conditional_9_For_2_Conditional_26_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MilestoneModalComponent_Conditional_9_For_2_Conditional_26_Conditional_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const milestone_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.downloadFile((milestone_r2 == null ? null : milestone_r2.milestoneDocUrl) || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MilestoneModalComponent_Conditional_9_For_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "div", 23)(2, "div", 24)(3, "div", 25)(4, "div", 26)(5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Architecture Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MilestoneModalComponent_Conditional_9_For_2_Conditional_26_Conditional_9_Template, 2, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const milestone_r2 = ctx_r3.$implicit;
    const $index_r5 = ctx_r3.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattributeInterpolate1"]("aria-labelledby", "heading-", $index_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "collapse-", $index_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"]((milestone_r2 == null ? null : milestone_r2.milestoneDocUrl) ? 9 : -1);
  }
}
function MilestoneModalComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MilestoneModalComponent_Conditional_9_For_2_Conditional_7_Template, 3, 0, "span", 14)(8, MilestoneModalComponent_Conditional_9_For_2_Conditional_8_Template, 3, 0, "span", 15)(9, MilestoneModalComponent_Conditional_9_For_2_Conditional_9_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 17)(14, "div", 18)(15, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Start Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 18)(21, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "End Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, MilestoneModalComponent_Conditional_9_For_2_Conditional_26_Template, 10, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const milestone_r2 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("accordion-item ", milestone_r2 == null ? null : milestone_r2.currentMS, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "heading-", $index_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattributeInterpolate1"]("data-bs-target", "#collapse-", $index_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattributeInterpolate1"]("aria-controls", "collapse-", $index_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c0, !ctx_r2.isMilestoneEnabled(milestone_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", milestone_r2 == null ? null : milestone_r2.mileStoneName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"]((milestone_r2 == null ? null : milestone_r2.currentMS) == "P" ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"]((milestone_r2 == null ? null : milestone_r2.currentMS) == "C" ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"]((milestone_r2 == null ? null : milestone_r2.currentMS) == "U" ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 18, milestone_r2 == null ? null : milestone_r2.amount, "1.0-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (milestone_r2 == null ? null : milestone_r2.currentMS) == "C" ? !(milestone_r2 == null ? null : milestone_r2.actualDate) || (milestone_r2 == null ? null : milestone_r2.actualDate == null ? null : milestone_r2.actualDate.startsWith("1900")) ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 21, milestone_r2 == null ? null : milestone_r2.actualDate) : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (milestone_r2 == null ? null : milestone_r2.currentMS) == "C" ? !(milestone_r2 == null ? null : milestone_r2.tentativeDate) || (milestone_r2 == null ? null : milestone_r2.tentativeDate == null ? null : milestone_r2.tentativeDate.startsWith("1900")) ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 23, milestone_r2 == null ? null : milestone_r2.tentativeDate) : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"]((milestone_r2 == null ? null : milestone_r2.currentMS) == "C" ? 26 : -1);
  }
}
function MilestoneModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, MilestoneModalComponent_Conditional_9_For_2_Template, 27, 27, "div", 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r2.sortedMileStone);
  }
}
function MilestoneModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class MilestoneModalComponent {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store);
  milestone$;
  sortedMileStone = [];
  ngOnInit() {
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getBookings).subscribe(booking => {
      if (booking?.[0]?.bookingID) {
        this.milestone$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getMileStone);
        this.milestone$.subscribe(items => {
          this.sortedMileStone = [];
          this.sortedMileStone = items;
          if (items && items.length) {
            this.sortedMileStone = [...items].sort((a, b) => a.sequenceno - b.sequenceno);
          }
        }, error => {
          console.error('Error receiving items:', error);
        });
      }
    });
  }
  downloadFile(filename) {
    if (filename && filename != '') {
      this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DownloadBookingFile(filename));
    }
  }
  isMilestoneEnabled(milestone) {
    return milestone?.currentMS === 'C'; // Only 'C' (Completed) is enabled
  }
  static ɵfac = function MilestoneModalComponent_Factory(ɵt) {
    return new (ɵt || MilestoneModalComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MilestoneModalComponent,
    selectors: [["app-milestone-modal"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 1,
    consts: [["id", "milestoneModal", "tabindex", "-1", "aria-labelledby", "milestoneModalLabel", "aria-hidden", "true", 1, "modal", "aside-modal"], [1, "modal-dialog", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "HT-title"], ["src", "images/milestone-icon.svg"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "bg-gray"], ["id", "accordionExample", 1, "accordion"], [3, "class"], [1, "accordion-header", 3, "id"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "true", 1, "accordion-button", 3, "ngClass"], [1, "w-100", "pe-4"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "tag", "danger", "ms-3"], [1, "tag", "success", "ms-3"], [1, "tag", "warning", "ms-3"], [1, "row", "justify-content-between"], [1, "col-auto"], [1, "text-gray"], [1, "text-medium", "mt-2"], ["data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show", 3, "id"], ["src", "images/error-icon.svg", 1, "me-1"], [1, "accordion-body"], [1, "content-table", "empty"], [1, "table-head", "d-flex", "align-items-center", "justify-content-between"], [1, "font-medium", "text-bold", "font-lora"], [1, "download-file-box"], ["src", "images/attach-icon.svg"], [1, "btn", "btn-download", "ms-3"], [1, "btn", "btn-download", "ms-3", 3, "click"], ["src", "images/download-icon.svg"]],
    template: function MilestoneModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Milestone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MilestoneModalComponent_Conditional_9_Template, 3, 0, "div", 8)(10, MilestoneModalComponent_Conditional_10_Template, 2, 0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.sortedMileStone && ctx.sortedMileStone.length ? 9 : 10);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
    styles: [".disabled-milestone[_ngcontent-%COMP%] {\n  opacity: 0.2; \n\n  pointer-events: none; \n\n  cursor: not-allowed; \n\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvbWlsZXN0b25lLW1vZGFsL21pbGVzdG9uZS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFFLGlDQUFpQztFQUMvQyxvQkFBb0IsRUFBRSx5QkFBeUI7RUFDL0MsbUJBQW1CLEVBQUUsdURBQXVEO0FBQzlFIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2FibGVkLW1pbGVzdG9uZSB7XG4gIG9wYWNpdHk6IDAuMjsgLyogTWFrZXMgdGhlIGVsZW1lbnQgbG9vayBmYWRlZCAqL1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogUHJldmVudHMgaW50ZXJhY3Rpb24gKi9cbiAgY3Vyc29yOiBub3QtYWxsb3dlZDsgLyogQ2hhbmdlcyB0aGUgY3Vyc29yIHRvIGluZGljYXRlIGl0IGNhbid0IGJlIGNsaWNrZWQgKi9cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3438:
/*!********************************************************************************!*\
  !*** ./src/app/features/dashboard/components/noc-modal/noc-modal.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NocModalComponent: () => (/* binding */ NocModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/booking.actions */ 4445);
/* harmony import */ var src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/formatHelper */ 7781);








function NocModalComponent_Conditional_23_For_1_Conditional_1_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "div", 11)(2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NocModalComponent_Conditional_23_For_1_Conditional_1_For_1_Conditional_10_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const noc_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.downloadFile((noc_r2 == null ? null : noc_r2.nocUrl) || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function NocModalComponent_Conditional_23_For_1_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, NocModalComponent_Conditional_23_For_1_Conditional_1_For_1_Conditional_10_Template, 4, 0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const noc_r2 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]($index_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](noc_r2 == null ? null : noc_r2.nocid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", !(noc_r2 == null ? null : noc_r2.nocDate) || (noc_r2 == null ? null : noc_r2.nocDate == null ? null : noc_r2.nocDate.startsWith("1900")) ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 5, noc_r2 == null ? null : noc_r2.nocDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.formatToINRCurrency(noc_r2 == null ? null : noc_r2.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((noc_r2 == null ? null : noc_r2.nocUrl) ? 10 : -1);
  }
}
function NocModalComponent_Conditional_23_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](0, NocModalComponent_Conditional_23_For_1_Conditional_1_For_1_Template, 11, 7, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 0, ctx_r2.noc$));
  }
}
function NocModalComponent_Conditional_23_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function NocModalComponent_Conditional_23_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NocModalComponent_Conditional_23_For_1_Conditional_1_Template, 3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NocModalComponent_Conditional_23_For_1_Conditional_3_Template, 3, 0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r2.noc$) ? 1 : 3);
  }
}
function NocModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](0, NocModalComponent_Conditional_23_For_1_Template, 4, 3, "tbody", null, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r2.nocData);
  }
}
function NocModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " No home loan data available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class NocModalComponent {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store);
  noc$;
  nocData = [];
  formatToINRCurrency = src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__["default"];
  ngOnInit() {
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getBookings).subscribe(booking => {
      if (booking?.[0]?.bookingID) {
        this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchNOC(booking?.[0]?.bookingID));
        this.noc$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getNoc);
        this.noc$.subscribe(data => {
          this.nocData = data; // Populate NocDATA
        });
      }
    });
  }
  downloadFile(filename) {
    if (filename && filename != '') {
      this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DownloadBookingFile(filename));
    }
  }
  static ɵfac = function NocModalComponent_Factory(ɵt) {
    return new (ɵt || NocModalComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NocModalComponent,
    selectors: [["app-noc-modal"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 25,
    vars: 1,
    consts: [["id", "nocModal", "tabindex", "-1", "aria-labelledby", "nocModalLabel", "aria-hidden", "true", 1, "modal", "aside-modal"], [1, "modal-dialog", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "HT-title"], ["src", "images/home-icon.svg"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "table-box-bordered"], [1, "table-responsive"], [1, "table"], [1, "table-options"], [1, "btn", "btn-download", 3, "click"], ["src", "images/download-icon.svg"], ["colspan", "4", 1, "text-center"]],
    template: function NocModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Home Loan NOC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "table", 10)(12, "thead")(13, "tr")(14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Sr. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "NOC Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, NocModalComponent_Conditional_23_Template, 2, 0)(24, NocModalComponent_Conditional_24_Template, 3, 0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.nocData.length > 0 ? 23 : 24);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5838:
/*!************************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/payment-sch-modal/payment-sch-modal.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentSchModalComponent: () => (/* binding */ PaymentSchModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/formatHelper */ 7781);






function PaymentSchModalComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hdr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](hdr_r1);
  }
}
function PaymentSchModalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No details found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PaymentSchModalComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](d_r2 == null ? null : d_r2.sequenceno);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](d_r2 == null ? null : d_r2.mileStoneName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formatToINRCurrency(d_r2 == null ? null : d_r2.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formatToINRCurrency(d_r2 == null ? null : d_r2.totalamount));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formatToINRCurrency(d_r2 == null ? null : d_r2.reciept));
  }
}
class PaymentSchModalComponent {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store);
  viewDetail;
  formatToINRCurrency = src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_1__["default"];
  ngOnInit() {
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getPaymentViewDetails).subscribe(detail => {
      if (detail) {
        this.viewDetail = detail;
      }
    });
  }
  static ɵfac = function PaymentSchModalComponent_Factory(ɵt) {
    return new (ɵt || PaymentSchModalComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PaymentSchModalComponent,
    selectors: [["app-payment-sch-modal"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 20,
    vars: 2,
    consts: [["id", "paymentSchModal", "tabindex", "-1", "aria-labelledby", "receiptsModalLabel", "aria-hidden", "true", 1, "modal", "aside-modal"], [1, "modal-dialog", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "HT-title"], ["src", "images/receipts-icon.svg"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "table-box-bordered"], [1, "table-responsive"], [1, "table", "table-bordered"], [2, "text-align", "end"], ["colspan", "10"]],
    template: function PaymentSchModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "table", 10)(12, "thead")(13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](14, PaymentSchModalComponent_For_15_Template, 2, 1, "th", null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tbody", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, PaymentSchModalComponent_Conditional_17_Template, 3, 0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](18, PaymentSchModalComponent_For_19_Template, 11, 5, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.viewDetail == null ? null : ctx.viewDetail.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.viewDetail == null ? null : ctx.viewDetail.headers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.viewDetail && !ctx.viewDetail.data.length ? 17 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.viewDetail == null ? null : ctx.viewDetail.data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
    styles: [".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\n    padding:12px 16px;\n    color: #575757;\n}\n\n.chip[_ngcontent-%COMP%] {\n    background-color: #dbd6d6;\n    font-size: 12px;\n    padding: 3px 10px;\n    border-radius: 15px;\n}\n.chip-complete[_ngcontent-%COMP%]{\n    background-color: #7ee37e;\n    color: green;\n}\n.chip-upcomming[_ngcontent-%COMP%]{\n    background-color: #f9ffa0;\n    color: #abab00;\n}\n.chip-pending[_ngcontent-%COMP%]{\n    background-color: #ffe2ac;\n    color: orange;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcGF5bWVudC1zY2gtbW9kYWwvcGF5bWVudC1zY2gtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHRke1xuICAgIHBhZGRpbmc6MTJweCAxNnB4O1xuICAgIGNvbG9yOiAjNTc1NzU3O1xufVxuXG4uY2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZDZkNjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5jaGlwLWNvbXBsZXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZWUzN2U7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuLmNoaXAtdXBjb21taW5ne1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZmYTA7XG4gICAgY29sb3I6ICNhYmFiMDA7XG59XG4uY2hpcC1wZW5kaW5ne1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmUyYWM7XG4gICAgY29sb3I6IG9yYW5nZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9728:
/*!**********************************************************************************!*\
  !*** ./src/app/features/dashboard/components/possession/possession.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PossessionComponent: () => (/* binding */ PossessionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/booking.actions */ 4445);







function PossessionComponent_Conditional_9_Conditional_13_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Registration unavailable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PossessionComponent_Conditional_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PossessionComponent_Conditional_9_Conditional_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.downloadFile(ctx_r1.registrationDocumentUrl || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PossessionComponent_Conditional_9_Conditional_13_p_3_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show-error", !ctx_r1.registrationDocumentUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.registrationDocumentUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.registrationDocumentUrl);
  }
}
function PossessionComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 13)(2, "div")(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Registration Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Actual Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PossessionComponent_Conditional_9_Conditional_13_Template, 4, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.registrationNo || "\u2013");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", !ctx_r1.actualDate || ctx_r1.actualDate.startsWith("1900") ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 3, ctx_r1.actualDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.registrationDocumentUrl ? 13 : -1);
  }
}
function PossessionComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No registration details available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PossessionComponent_Conditional_12_Template(rf, ctx) {}
function PossessionComponent_Conditional_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No possession details available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PossessionComponent_Conditional_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Fitout Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", !ctx_r1.fitoutDate || ctx_r1.fitoutDate.startsWith("1900") ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, ctx_r1.fitoutDate), " ");
  }
}
function PossessionComponent_Conditional_13_Conditional_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PossessionComponent_Conditional_13_Conditional_14_Conditional_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.downloadFile(ctx_r1.possessionDocumentUrl || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show-error", !ctx_r1.possessionDocumentUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.possessionDocumentUrl);
  }
}
function PossessionComponent_Conditional_13_Conditional_14_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Possession unavailable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PossessionComponent_Conditional_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Possession Final Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PossessionComponent_Conditional_13_Conditional_14_Conditional_7_Template, 2, 3, "button", 27)(8, PossessionComponent_Conditional_13_Conditional_14_p_8_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", !ctx_r1.possesionDate || ctx_r1.possesionDate.startsWith("1900") ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, ctx_r1.possesionDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.possessionDocumentUrl ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.possessionDocumentUrl);
  }
}
function PossessionComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Possession Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7)(8, "div", 22)(9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PossessionComponent_Conditional_13_Conditional_10_Template, 2, 0, "div", 8)(11, PossessionComponent_Conditional_13_Conditional_11_Template, 8, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 24)(13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, PossessionComponent_Conditional_13_Conditional_14_Template, 9, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!ctx_r1.fitoutDate && !ctx_r1.possesionDate ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.fitoutDate ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.possesionDate ? 14 : -1);
  }
}
class PossessionComponent {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store);
  fitoutDate = '';
  possesionDate = '';
  registrationNo = '';
  actualDate = '';
  tentativeDate = '';
  possessionDocumentUrl = '';
  registrationDocumentUrl = '';
  ngOnInit() {
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getBookings).subscribe(booking => {
      if (booking?.[0]) {
        const data = booking[0];
        this.fitoutDate = this.cleanDate(data?.fitoutDate);
        this.possesionDate = this.cleanDate(data?.possessionFinalDate);
        this.registrationNo = data?.registrationNumber || '';
        this.actualDate = this.cleanDate(data?.registrationActualDate);
        this.tentativeDate = this.cleanDate(data?.registrationTentativeDate);
        this.registrationDocumentUrl = data?.registrationDocumentUrl || '';
        this.possessionDocumentUrl = data?.possessionDocumentUrl || '';
      }
    });
  }
  downloadFile(filename) {
    if (filename && filename !== '') {
      this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DownloadBookingFile(filename));
    }
  }
  cleanDate(date) {
    if (!date || date === '1900-01-01 00:00:00.000') {
      return '';
    }
    return date;
  }
  static ɵfac = function PossessionComponent_Factory(ɵt) {
    return new (ɵt || PossessionComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PossessionComponent,
    selectors: [["app-possession"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 35,
    vars: 2,
    consts: [[1, "row", "gx-3"], [1, "col-md-6", "col-12", "mb-3"], [1, "HT-details-card"], [1, "HT-card-head"], [1, "HT-title"], ["src", "images/register-icon.svg"], [1, "dark-text"], [1, "card-body"], [2, "margin-left", "21px", "padding", "10px"], ["src", "images/home-icon.svg"], ["data-bs-toggle", "modal", "data-bs-target", "#nocModal", 1, "btn", "btn-warning"], ["src", "images/tds-icon.svg"], ["data-bs-toggle", "modal", "data-bs-target", "#tdsModal", 1, "btn", "btn-warning"], [1, "d-flex", "align-items-center", "justify-content-around", "mt-4", "mb-3"], [1, "text-gray", "d-block"], [1, "text-meduim", "font-meduim"], [1, "button-container"], [1, "btn", "btn-download", 3, "click", "disabled"], ["src", "images/download-icon.svg", "alt", "Download"], ["class", "error-tooltip", 4, "ngIf"], [1, "error-tooltip"], ["src", "images/possession-icon.svg"], [1, "row", "bordered"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "col-md-6", "col-12"], [1, "btn", "btn-download"], ["src", "images/download-icon.svg"], [1, "btn", "btn-download", 3, "disabled", "show-error"]],
    template: function PossessionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Registration Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PossessionComponent_Conditional_9_Template, 14, 5, "div", 7)(10, PossessionComponent_Conditional_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, PossessionComponent_Conditional_12_Template, 0, 0)(13, PossessionComponent_Conditional_13_Template, 15, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 0)(15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "div", 4)(19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Home Loan NOC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " View Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 1)(26, "div", 2)(27, "div", 3)(28, "div", 4)(29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "TDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " View Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.registrationNo ? 9 : !ctx.registrationNo ? 10 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!ctx.fitoutDate && !ctx.possesionDate ? 12 : 13);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
    styles: [".button-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n\n\n.error-tooltip[_ngcontent-%COMP%] {\n  visibility: hidden;\n  background-color: #fff;\n  color: #858181;\n  text-align: center;\n  border-radius: 5px;\n  padding: 5px;\n  position: absolute;\n  bottom: 80%; \n\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  z-index: 1;\n  font-size: 12px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  box-shadow: 0px 0px 21px #cccbcb;\n}\n\n\n\n.button-container[_ngcontent-%COMP%]:hover   button.show-error[_ngcontent-%COMP%]    + .error-tooltip[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcG9zc2Vzc2lvbi9wb3NzZXNzaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXLEVBQUUscUNBQXFDO0VBQ2xELFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixlQUFlO0VBQ2YsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBRUEsd0NBQXdDO0FBQ3hDO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWiIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIFRvb2x0aXAgZm9yIGVycm9yIG1lc3NhZ2UgKi9cbi5lcnJvci10b29sdGlwIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzg1ODE4MTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDgwJTsgLyogQWRqdXN0IHBvc2l0aW9uIGFib3ZlIHRoZSBidXR0b24gKi9cbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjFweCAjY2NjYmNiO1xufVxuXG4vKiBTaG93IHRvb2x0aXAgd2hlbiBidXR0b24gaXMgaG92ZXJlZCAqL1xuLmJ1dHRvbi1jb250YWluZXI6aG92ZXIgYnV0dG9uLnNob3ctZXJyb3IgKyAuZXJyb3ItdG9vbHRpcCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1838:
/*!********************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/project-details/project-details.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectDetailsComponent: () => (/* binding */ ProjectDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var src_app_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/storeNgxs/auth.state */ 192);
/* harmony import */ var _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/booking.actions */ 4445);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var ngx_avatars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-avatars */ 7575);










const _c0 = a0 => ({
  primaryUserBold: a0
});
const _c1 = a0 => ({
  active: a0
});
function ProjectDetailsComponent_Conditional_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectDetailsComponent_Conditional_6_Conditional_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.downloadFile((ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.reraDocument) || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProjectDetailsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " RERA No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 56)(3, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ProjectDetailsComponent_Conditional_6_Conditional_5_Template, 2, 0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.reraLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.rerano);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.reraLink) ? 5 : -1);
  }
}
function ProjectDetailsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "https://" + (ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.websiteLink), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function ProjectDetailsComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25)(1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 40)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const jointowner_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, jointowner_r5.ownerShipType == "P"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", jointowner_r5 == null ? null : jointowner_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](jointowner_r5 == null ? null : jointowner_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+", jointowner_r5.mobile, "");
  }
}
function ProjectDetailsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26)(1, "div", 65)(2, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Building");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 65)(9, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 65)(16, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 65)(23, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Floor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 65)(30, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Car park");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 65)(37, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Unit type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 6, ctx_r2.bookings$)) == null ? null : tmp_2_0[0] == null ? null : tmp_2_0[0].building);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 8, ctx_r2.bookings$)) == null ? null : tmp_3_0[0] == null ? null : tmp_3_0[0].unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 10, ctx_r2.bookings$)) == null ? null : tmp_4_0[0] == null ? null : tmp_4_0[0].area);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 12, ctx_r2.bookings$)) == null ? null : tmp_5_0[0] == null ? null : tmp_5_0[0].floor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 14, ctx_r2.bookings$)) == null ? null : tmp_6_0[0] == null ? null : tmp_6_0[0].carPark);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 16, ctx_r2.bookings$)) == null ? null : tmp_7_0[0] == null ? null : tmp_7_0[0].unitType);
  }
}
function ProjectDetailsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No booking data available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProjectDetailsComponent_Conditional_85_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "button", 82);
  }
  if (rf & 2) {
    const $index_r6 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", $index_r6 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-bs-slide-to", $index_r6);
  }
}
function ProjectDetailsComponent_Conditional_85_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 76)(1, "img", 83, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function ProjectDetailsComponent_Conditional_85_For_6_Template_img_error_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const projectImages_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](projectImages_r8.src = "images/project-icon.svg");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sp_r9 = ctx.$implicit;
    const $index_r10 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, $index_r10 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", sp_r9 == null ? null : sp_r9.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function ProjectDetailsComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54)(1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](2, ProjectDetailsComponent_Conditional_85_For_3_Template, 1, 3, "button", 74, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](5, ProjectDetailsComponent_Conditional_85_For_6_Template, 3, 4, "div", 76, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.listProjectImages);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r2.selectedProject == null ? null : ctx_r2.selectedProject.listProjectImages);
  }
}
function ProjectDetailsComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No images available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class ProjectDetailsComponent {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store);
  // public bookings$: Observable<Booking[]> = this.store.select(BookingState.getBookings);
  bookings$;
  selectedProject;
  user = null;
  jointOwner$;
  constructor() {}
  ngOnInit() {
    this.user = this.store.selectSnapshot(src_app_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getUser);
    this.store.select(src_app_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getSelectedProject).subscribe(e => {
      if (e && this.user) {
        this.selectedProject = e;
        // console.log("selectedProject", this.selectedProject);
        // Dispatch the action to fetch booking details
        // this.store.dispatch(new FetchBooking(user.userID, this.selectedProject?.projectId)); //commented to read data from local storage
        let booking = [this.selectedProject?.booking];
        this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetBooking(booking));
        this.bookings$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_2__.BookingState.getBookings);
        this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchJointOwner(this.user?.userID, booking[0]?.bookingID));
        this.jointOwner$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_2__.BookingState.getJointOwner);
      }
    });
  }
  downloadFile(filename) {
    if (filename && filename != '') {
      this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DownloadBookingFile(filename));
    }
  }
  static ɵfac = function ProjectDetailsComponent_Factory(ɵt) {
    return new (ɵt || ProjectDetailsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProjectDetailsComponent,
    selectors: [["app-project-details"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 87,
    vars: 31,
    consts: [["projectImage", ""], ["projectImages", ""], [1, "container"], [1, "project-card", "mb-4"], [1, "HT-card-head", "mb-4"], [1, "HT-title"], ["src", "images/project-icon.svg"], [1, "extra-info"], [1, "card-body"], [1, "row", "align-items-lg-center"], [1, "col-md-auto", "col-12", "mb-4", "mb-md-0"], ["data-bs-toggle", "modal", "data-bs-target", "#sliderModal", 1, "project-img-box", "h-100"], [1, "project-img", "h-100", 3, "error", "src"], [1, "hover-btn"], [1, "col-md", "col-12"], [1, "card-inner-head", "d-flex", "flex-row", "flex-wrap"], [1, "d-flex", "align-items-center", "mb-3"], [1, "me-4", "mb-0"], [1, "tag", "warning", 2, "white-space", "nowrap"], [1, "bi", "bi-dot"], ["title", "Visit Website"], [2, "display", "flex", "gap", "12px"], [1, "fs-8", "px-3", "mb-3", "rounded-pill", 2, "background-color", "#f1f1f1 !important"], [1, "tag", "fs-8"], [1, "row", "mb-4", "owner-row"], [1, "col-lg-6", "col-12"], [1, "row", "mb-32", "project-card-body", "justify-content-between", "gy-4"], [1, "location"], ["src", "images/location-icon.svg"], [1, "row", "mb-32", "gy-3"], [1, "col-lg-8", "col-md-7", "col-12"], [1, "HT-gray-card"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-12", "mb-3", "mb-lg-0"], ["src", "images/icon2.svg"], [1, "col-lg-7", "col-12"], [1, "manager-info"], [3, "name", "round", "size"], [1, "ps-4"], [1, "name"], [1, "contact-info"], [1, "bi", "bi-envelope", "me-2"], [1, "bi", "bi-telephone-plus", "me-2"], [1, "col-lg-4", "col-md-5", "col-12"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#kycModal", 1, "HT-danger-card", "d-flex", "align-items-center", "justify-content-between"], [1, "HT-title", "align-items-start"], ["src", "images/upload-icon.svg"], [1, "bi", "bi-chevron-right"], ["id", "sliderModal", "tabindex", "-1", "aria-labelledby", "sliderModalLabel", "aria-hidden", "true", 1, "modal", "fade", "slider-modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["id", "carouselExampleIndicators", "data-bs-ride", "true", 1, "carousel", "slide"], [1, "text-center"], ["target", "_blank", 3, "href"], [1, "text-medium", "me-2"], [1, "btn", "btn-download"], [1, "btn", "btn-download", 3, "click"], ["src", "images/download-icon.svg"], ["target", "_blank", 1, "pointer", 3, "href"], ["width", "20px", "src", "images/external-link.svg", 2, "margin-left", "16px"], [1, "text-medium", "font-medium", "mb-10", 3, "ngClass"], ["src", "images/owner-icon.svg"], [1, "col-lg-auto", "col-sm-4", "col-6"], [1, "text-gray"], ["src", "images/build-icon.svg"], ["src", "images/unit-icon.svg"], ["src", "images/area-icon.svg"], ["src", "images/floor-icon.svg"], ["src", "images/car-icon.svg"], ["src", "images/type-icon.svg"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "aria-current", "true", "aria-label", "Slide 1", 3, "active"], [1, "carousel-inner"], [1, "carousel-item", 3, "ngClass"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["src", "images/left-arrow.svg"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["src", "images/right-arrow.svg"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "aria-current", "true", "aria-label", "Slide 1"], ["height", "400px", 1, "w-100", 3, "error", "src"]],
    template: function ProjectDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Project Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ProjectDetailsComponent_Conditional_6_Template, 6, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "div", 11)(11, "img", 12, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function ProjectDetailsComponent_Template_img_error_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          const projectImage_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](projectImage_r4.src = "images/project-icon.svg");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 13)(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "View Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "div", 16)(19, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ProjectDetailsComponent_Conditional_24_Template, 3, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 21)(26, "div", 22)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "OC Date.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 22)(33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "OC No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](38, ProjectDetailsComponent_For_39_Template, 11, 6, "div", 25, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, ProjectDetailsComponent_Conditional_41_Template, 43, 18, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, ProjectDetailsComponent_Conditional_43_Template, 2, 0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 29)(48, "div", 30)(49, "div", 31)(50, "div", 32)(51, "div", 33)(52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Relationship Manager ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 35)(56, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "ngx-avatars", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 38)(60, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](62, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 40)(64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](67, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](71, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 43)(73, "div", 44)(74, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " KYC Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 48)(80, "div", 49)(81, "div", 50)(82, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, ProjectDetailsComponent_Conditional_85_Template, 15, 0, "div", 54)(86, ProjectDetailsComponent_Conditional_86_Template, 3, 0, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        let tmp_11_0;
        let tmp_14_0;
        let tmp_15_0;
        let tmp_16_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((ctx.selectedProject == null ? null : ctx.selectedProject.rerano) ? 6 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.selectedProject == null ? null : ctx.selectedProject.listProjectImages == null ? null : ctx.selectedProject.listProjectImages[0] == null ? null : ctx.selectedProject.listProjectImages[0].imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedProject == null ? null : ctx.selectedProject.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.selectedProject == null ? null : ctx.selectedProject.booking == null ? null : ctx.selectedProject.booking.status, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((ctx.selectedProject == null ? null : ctx.selectedProject.websiteLink) ? 24 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", !(ctx.selectedProject == null ? null : ctx.selectedProject.booking == null ? null : ctx.selectedProject.booking.ocDate) || (ctx.selectedProject == null ? null : ctx.selectedProject.booking == null ? null : ctx.selectedProject.booking.ocDate == null ? null : ctx.selectedProject.booking.ocDate.startsWith("1900")) ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](31, 16, ctx.selectedProject == null ? null : ctx.selectedProject.booking == null ? null : ctx.selectedProject.booking.ocDate, "MMM d, y"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx.selectedProject == null ? null : ctx.selectedProject.booking == null ? null : ctx.selectedProject.booking.ocNo) || "-", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 19, ctx.jointOwner$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 21, ctx.bookings$) ? 41 : 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.selectedProject == null ? null : ctx.selectedProject.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", (tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](58, 23, ctx.bookings$)) == null ? null : tmp_11_0[0] == null ? null : tmp_11_0[0].rmName)("round", true)("size", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_14_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](62, 25, ctx.bookings$)) == null ? null : tmp_14_0[0] == null ? null : tmp_14_0[0].rmName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](67, 27, ctx.bookings$)) == null ? null : tmp_15_0[0] == null ? null : tmp_15_0[0].rmEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_16_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](71, 29, ctx.bookings$)) == null ? null : tmp_16_0[0] == null ? null : tmp_16_0[0].rmContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((ctx.selectedProject == null ? null : ctx.selectedProject.listProjectImages) && (ctx.selectedProject == null ? null : ctx.selectedProject.listProjectImages == null ? null : ctx.selectedProject.listProjectImages.length) ? 85 : 86);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, ngx_avatars__WEBPACK_IMPORTED_MODULE_6__.AvatarModule, ngx_avatars__WEBPACK_IMPORTED_MODULE_6__.AvatarComponent],
    styles: [".project-img[_ngcontent-%COMP%] {\n    max-height: 200px;\n}\n.primaryUserBold[_ngcontent-%COMP%]{\n    font-weight: 700 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1pbWcge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuLnByaW1hcnlVc2VyQm9sZHtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9726:
/*!********************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/project-updates/project-updates.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectUpdatesComponent: () => (/* binding */ ProjectUpdatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/dashboard.service */ 8089);
/* harmony import */ var ngx_avatars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-avatars */ 7575);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var src_app_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/storeNgxs/auth.state */ 192);








const _c0 = a0 => ({
  active: a0
});
function ProjectUpdatesComponent_Conditional_8_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", "https://" + (pu_r2 == null ? null : pu_r2.project == null ? null : pu_r2.project.instagramlink), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProjectUpdatesComponent_Conditional_8_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", "https://" + (pu_r2 == null ? null : pu_r2.project == null ? null : pu_r2.project.facebooklink), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProjectUpdatesComponent_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectUpdatesComponent_Conditional_8_For_1_Template_div_click_2_listener() {
      const pu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.handleViewImageClick(pu_r2 == null ? null : pu_r2.projectUpdateImages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "img", 20, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function ProjectUpdatesComponent_Conditional_8_For_1_Template_img_error_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const projectUpdateImage_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](projectUpdateImage_r4.src = "images/project-icon.svg");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 21)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "View Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProjectUpdatesComponent_Conditional_8_For_1_Conditional_9_Template, 3, 1, "div", 23)(10, ProjectUpdatesComponent_Conditional_8_For_1_Conditional_10_Template, 3, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const pu_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", pu_r2 == null ? null : pu_r2.projectUpdateImages == null ? null : pu_r2.projectUpdateImages[0] == null ? null : pu_r2.projectUpdateImages[0].imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"]((pu_r2 == null ? null : pu_r2.description) && pu_r2.description === "Instagram" && (pu_r2 == null ? null : pu_r2.project == null ? null : pu_r2.project.instagramlink) ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"]((pu_r2 == null ? null : pu_r2.description) && pu_r2.description === "Facebook" && (pu_r2 == null ? null : pu_r2.project == null ? null : pu_r2.project.facebooklink) ? 10 : -1);
  }
}
function ProjectUpdatesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](0, ProjectUpdatesComponent_Conditional_8_For_1_Template, 11, 3, "div", 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r2.projectUpdates);
  }
}
function ProjectUpdatesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No project updates available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProjectUpdatesComponent_Conditional_16_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "button", 36);
  }
  if (rf & 2) {
    const $index_r5 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", $index_r5 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-bs-slide-to", $index_r5);
  }
}
function ProjectUpdatesComponent_Conditional_16_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "img", 37, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function ProjectUpdatesComponent_Conditional_16_For_6_Template_img_error_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const projectImages_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](projectImages_r7.src = "images/project-icon.svg");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sp_r8 = ctx.$implicit;
    const $index_r9 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, $index_r9 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", sp_r8 == null ? null : sp_r8.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProjectUpdatesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](2, ProjectUpdatesComponent_Conditional_16_For_3_Template, 1, 3, "button", 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](5, ProjectUpdatesComponent_Conditional_16_For_6_Template, 3, 4, "div", 30, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r2.projectImages());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r2.projectImages());
  }
}
function ProjectUpdatesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No images available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ProjectUpdatesComponent {
  projectUpdates = [];
  dashboardService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService);
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store);
  projectImages = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)([]);
  ngOnInit() {
    this.store.select(src_app_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_1__.AuthState.getSelectedProject).subscribe(e => {
      this.getProjectUpdates(e?.projectId);
    });
  }
  getProjectUpdates(projectId) {
    this.dashboardService.getProjectUpdates(projectId).subscribe({
      next: res => {
        this.projectUpdates = res?.Data ?? [];
      }
    });
  }
  handleViewImageClick(_projectImages) {
    this.projectImages.set(_projectImages);
  }
  static ɵfac = function ProjectUpdatesComponent_Factory(ɵt) {
    return new (ɵt || ProjectUpdatesComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProjectUpdatesComponent,
    selectors: [["app-project-updates"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 18,
    vars: 2,
    consts: [["projectUpdateImage", ""], ["projectImages", ""], [1, "HT-details-card", "mb-3"], [1, "HT-card-head"], [1, "HT-title"], ["src", "images/update-icon.svg"], [1, "dark-text"], [1, "card-body", "p-4"], [1, "row", "g-3"], ["id", "projectUpdateImagesSliderModal", "tabindex", "-1", "aria-labelledby", "projectUpdateImagesSliderModalLabel", "aria-hidden", "true", 1, "modal", "fade", "slider-modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["id", "carouselExampleIndicators", "data-bs-ride", "true", 1, "carousel", "slide"], [1, "text-center"], [1, "col-md-4", "col-sm-6", "col-12"], [1, "coming-project-card", "card-shado"], ["data-bs-toggle", "modal", "data-bs-target", "#projectUpdateImagesSliderModal", 1, "project-img-box", "w-100", 3, "click"], [1, "project-img", "w-100", 3, "error", "src"], [1, "hover-btn"], [1, "mt-3"], [1, "social-links"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["src", "images/insta-logo.svg", 1, "social-img"], ["src", "images/facebook-logo.svg", 1, "social-img"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "aria-current", "true", "aria-label", "Slide 1", 3, "active"], [1, "carousel-inner"], [1, "carousel-item", 3, "ngClass"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["src", "images/left-arrow.svg"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["src", "images/right-arrow.svg"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "aria-current", "true", "aria-label", "Slide 1"], [1, "w-100", 3, "error", "src"]],
    template: function ProjectUpdatesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Project Updates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7)(7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProjectUpdatesComponent_Conditional_8_Template, 2, 0)(9, ProjectUpdatesComponent_Conditional_9_Template, 2, 0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProjectUpdatesComponent_Conditional_16_Template, 15, 0, "div", 15)(17, ProjectUpdatesComponent_Conditional_17_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.projectUpdates && ctx.projectUpdates.length ? 8 : 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.projectImages() && ctx.projectImages().length ? 16 : 17);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, ngx_avatars__WEBPACK_IMPORTED_MODULE_5__.AvatarModule],
    styles: [".project-img-box[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    text-align: center;\n}\n.project-img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 8px;\n    min-height: 171px;\n}\n.project-img-box[_ngcontent-%COMP%]   .hover-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    background: rgba(0, 0, 0, 0.27);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0;\n    transition: all 0.3s ease-in-out;\n}\n.project-img-box[_ngcontent-%COMP%]   .hover-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    padding: 8px 12px;\n    background: rgba(255, 255, 255, 0.16);\n    -webkit-backdrop-filter: blur(2px);\n            backdrop-filter: blur(2px);\n    border-radius: 31px;\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 15px;\n    color: #fff;\n}\n.project-img-box[_ngcontent-%COMP%]:hover   .hover-btn[_ngcontent-%COMP%] {\n    opacity: 1;\n}\n\n.project-img[_ngcontent-%COMP%] {\n    width: 229px;\n    height: 229px;\n    object-fit: contain;\n    border-radius: 8px;\n    position: relative;\n}\n.project-img[_ngcontent-%COMP%]::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(180.59deg, rgba(0, 0, 0, 0) 0.51%, rgba(0, 0, 0, 0.32) 90.87%);\n    border-radius: 8px;\n}\n.gallary-card[_ngcontent-%COMP%]{\n    transition: all 0.1s ease-in-out;    \n}\n.gallary-card[_ngcontent-%COMP%]:hover{\n    transform: translateY(-3px);\n}\n\n.card-shado[_ngcontent-%COMP%]{\n    border: 1px solid #e7e7e7;\n    border-radius: 9px;\n    padding: 20px 20px;\n    box-shadow: 0px 0px 6px #d4d4d4;\n    transition: all 0.1s ease-in-out;\n}\n.card-shado[_ngcontent-%COMP%]:hover{\n    transform: translateY(-3px);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcHJvamVjdC11cGRhdGVzL3Byb2plY3QtdXBkYXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWiwwRkFBMEY7SUFDMUYsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWltZy1ib3gge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2plY3QtaW1nLWJveCBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtaW4taGVpZ2h0OiAxNzFweDtcbn1cbi5wcm9qZWN0LWltZy1ib3ggLmhvdmVyLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5wcm9qZWN0LWltZy1ib3ggLmhvdmVyLWJ0biBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG4ucHJvamVjdC1pbWctYm94OmhvdmVyIC5ob3Zlci1idG4ge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5wcm9qZWN0LWltZyB7XG4gICAgd2lkdGg6IDIyOXB4O1xuICAgIGhlaWdodDogMjI5cHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2plY3QtaW1nOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODAuNTlkZWcsIHJnYmEoMCwgMCwgMCwgMCkgMC41MSUsIHJnYmEoMCwgMCwgMCwgMC4zMikgOTAuODclKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uZ2FsbGFyeS1jYXJke1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0OyAgICBcbn1cbi5nYWxsYXJ5LWNhcmQ6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xufVxuXG4uY2FyZC1zaGFkb3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggI2Q0ZDRkNDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cbi5jYXJkLXNoYWRvOmhvdmVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3934:
/*!******************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/receipts-modal/receipts-modal.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReceiptsModalComponent: () => (/* binding */ ReceiptsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/booking.actions */ 4445);
/* harmony import */ var src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/formatHelper */ 7781);








function ReceiptsModalComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hdr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](hdr_r1);
  }
}
function ReceiptsModalComponent_For_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "div", 15)(2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReceiptsModalComponent_For_18_Conditional_14_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const d_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.downloadDemandORReceiptLetter(d_r3 || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ReceiptsModalComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReceiptsModalComponent_For_18_Template_span_click_7_listener() {
      const d_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.downloadDemandORReceiptLetter(d_r3 || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ReceiptsModalComponent_For_18_Conditional_14_Template, 4, 0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](d_r3 == null ? null : d_r3.incrementNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](!(d_r3 == null ? null : d_r3.date) || (d_r3 == null ? null : d_r3.date == null ? null : d_r3.date.startsWith("1900")) ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 7, d_r3 == null ? null : d_r3.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", d_r3 == null ? null : d_r3.uniqueNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.formatToINRCurrency(d_r3 == null ? null : d_r3.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", d_r3 == null ? null : d_r3.invoiceDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", d_r3 == null ? null : d_r3.invoiceDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((d_r3 == null ? null : d_r3.url) ? 14 : -1);
  }
}
class ReceiptsModalComponent {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store);
  viewDetail;
  formatToINRCurrency = src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_2__["default"];
  ngOnInit() {
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getViewDetails).subscribe(detail => {
      if (detail) {
        this.viewDetail = detail;
        // console.log('viewDetail: ',this.viewDetail);
      }
    });
  }
  downloadFile(filename) {
    if (filename && filename != '') {
      this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DownloadBookingFile(filename));
    }
  }
  downloadDemandORReceiptLetter(filename) {
    // console.log('File DemandLetter: ', filename?.invoiceUrl);
    // if (filename && filename != '') {
    //   const blob = new Blob([''], { type: 'application/pdf' });
    //   const url = URL.createObjectURL(blob);
    //   window.open(url, '_blank');
    //   // Clean up memory after opening
    //   setTimeout(() => URL.revokeObjectURL(url), 10000);
    // }
  }
  static ɵfac = function ReceiptsModalComponent_Factory(ɵt) {
    return new (ɵt || ReceiptsModalComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ReceiptsModalComponent,
    selectors: [["app-receipts-modal"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 19,
    vars: 1,
    consts: [["id", "receiptsModal", "tabindex", "-1", "aria-labelledby", "receiptsModalLabel", "aria-hidden", "true", 1, "modal", "aside-modal"], [1, "modal-dialog", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "HT-title"], ["src", "images/receipts-icon.svg"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "table-box-bordered"], [1, "table-responsive"], [1, "table", "table-bordered"], [2, "text-align", "end"], [3, "click"], ["type", "button", "src", "images/attach-icon.svg"], [2, "cursor", "pointer", "word-break", "break-word", "white-space", "normal", "max-width", "200px", 3, "title"], [1, "table-options"], [1, "btn", "btn-download", 3, "click"], ["src", "images/download-icon.svg"]],
    template: function ReceiptsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "table", 10)(12, "thead")(13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](14, ReceiptsModalComponent_For_15_Template, 2, 1, "th", null, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tbody", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](17, ReceiptsModalComponent_For_18_Template, 15, 9, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.viewDetail == null ? null : ctx.viewDetail.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.viewDetail == null ? null : ctx.viewDetail.headers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.viewDetail == null ? null : ctx.viewDetail.data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: [".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\n    padding:12px 16px;\n    color: #575757;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVjZWlwdHMtbW9kYWwvcmVjZWlwdHMtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHRke1xuICAgIHBhZGRpbmc6MTJweCAxNnB4O1xuICAgIGNvbG9yOiAjNTc1NzU3O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5918:
/*!********************************************************************************!*\
  !*** ./src/app/features/dashboard/components/tds-modal/tds-modal.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TdsModalComponent: () => (/* binding */ TdsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _state_booking_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/booking.state */ 3273);
/* harmony import */ var _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/booking.actions */ 4445);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dashboard.service */ 8089);
/* harmony import */ var src_app_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/storeNgxs/auth.state */ 192);
/* harmony import */ var src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/formatHelper */ 7781);












function TdsModalComponent_Conditional_8_Template(rf, ctx) {}
function TdsModalComponent_Conditional_10_Conditional_15_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td")(11, "div", 12)(12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TdsModalComponent_Conditional_10_Conditional_15_Conditional_1_For_1_Template_button_click_12_listener() {
      const tds_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.downloadTDS((tds_r2 == null ? null : tds_r2.tdsFile) || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const tds_r2 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]($index_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](!(tds_r2 == null ? null : tds_r2.tdsDate) || (tds_r2 == null ? null : tds_r2.tdsDate == null ? null : tds_r2.tdsDate.startsWith("1900")) ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, tds_r2 == null ? null : tds_r2.tdsDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tds_r2 == null ? null : tds_r2.transactionNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.formatToINRCurrency(tds_r2 == null ? null : tds_r2.tdsAmount));
  }
}
function TdsModalComponent_Conditional_10_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](0, TdsModalComponent_Conditional_10_Conditional_15_Conditional_1_For_1_Template, 14, 6, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 0, ctx_r2.tds$));
  }
}
function TdsModalComponent_Conditional_10_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function TdsModalComponent_Conditional_10_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TdsModalComponent_Conditional_10_Conditional_15_Conditional_1_Template, 3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TdsModalComponent_Conditional_10_Conditional_15_Conditional_3_Template, 3, 0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r2.tds$) ? 1 : 3);
  }
}
function TdsModalComponent_Conditional_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No tds data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function TdsModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "table", 11)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Sr. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Transaction No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TdsModalComponent_Conditional_10_Conditional_15_Template, 4, 3, "tbody")(16, TdsModalComponent_Conditional_10_Conditional_16_Template, 3, 0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.tdsData.length > 0 ? 15 : 16);
  }
}
function TdsModalComponent_Conditional_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TdsModalComponent_Conditional_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Transaction number is required and must be a valid number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TdsModalComponent_Conditional_11_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Amount is required and must be a valid number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TdsModalComponent_Conditional_11_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " File is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TdsModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "form", 16)(2, "div", 17)(3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TdsModalComponent_Conditional_11_div_6_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 17)(8, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Transaction Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, TdsModalComponent_Conditional_11_div_11_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 17)(13, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, TdsModalComponent_Conditional_11_div_16_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 17)(18, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TdsModalComponent_Conditional_11_Template_input_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.handleFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, TdsModalComponent_Conditional_11_div_19_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 26)(21, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TdsModalComponent_Conditional_11_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.showUploadTds = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TdsModalComponent_Conditional_11_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.uploadTdsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r2.uploadTdsForm.get("TDSDate")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r2.uploadTdsForm.get("TDSDate")) == null ? null : tmp_2_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r2.uploadTdsForm.get("TransactionNo")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r2.uploadTdsForm.get("TransactionNo")) == null ? null : tmp_3_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r2.uploadTdsForm.get("TDSAmount")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r2.uploadTdsForm.get("TDSAmount")) == null ? null : tmp_4_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r2.uploadTdsForm.get("file")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r2.uploadTdsForm.get("file")) == null ? null : tmp_5_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.uploadTdsForm.invalid);
  }
}
class TdsModalComponent {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Store);
  fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder);
  dashboardService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService);
  uploadTdsForm;
  tds$;
  showUploadTds = false;
  bookingId;
  userId = '';
  file;
  tdsData = [];
  formatToINRCurrency = src_app_utils_formatHelper__WEBPACK_IMPORTED_MODULE_4__["default"];
  ngOnInit() {
    this.userId = this.store.selectSnapshot(src_app_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_3__.AuthState.getUser)?.userID ?? '';
    this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getBookings).subscribe(booking => {
      if (booking?.[0]?.bookingID) {
        this.bookingId = booking?.[0]?.bookingID;
        this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchTDS(booking?.[0]?.bookingID));
        this.tds$ = this.store.select(_state_booking_state__WEBPACK_IMPORTED_MODULE_0__.BookingState.getTDS);
        this.tds$.subscribe(data => {
          this.tdsData = data; // Populate tdsData
        });
      }
    });
  }
  handleFileChange(event) {
    this.file = event?.target?.files?.[0] ?? null;
  }
  downloadTDS(filename) {
    if (filename && filename != '') {
      this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DownloadTDSFile(filename));
    }
  }
  handleUploadTdsClick() {
    this.initForm();
    this.showUploadTds = true;
  }
  initForm() {
    this.uploadTdsForm = this.fb.group({
      TDSDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      TransactionNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]+$')]],
      // only numbers allowed
      TDSAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
      // numbers with optional decimal
      file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  handleSubmit() {
    if (this.uploadTdsForm.invalid) {
      console.log('Form is invalid');
      return;
    }
    this.dashboardService.uploadTDS(this.bookingId, this.uploadTdsForm.value.TDSDate, this.uploadTdsForm.value.TransactionNo, this.uploadTdsForm.value.TDSAmount, this.userId, this.file).subscribe({
      next: res => {
        console.log(res);
        this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchTDS(this.bookingId));
        this.showUploadTds = false;
      },
      error: err => {
        console.log(err);
        this.store.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchTDS(this.bookingId));
        this.showUploadTds = false;
      }
    });
  }
  static ɵfac = function TdsModalComponent_Factory(ɵt) {
    return new (ɵt || TdsModalComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: TdsModalComponent,
    selectors: [["app-tds-modal"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 2,
    consts: [["id", "tdsModal", "tabindex", "-1", "aria-labelledby", "tdsModalLabel", "aria-hidden", "true", 1, "modal", "aside-modal"], [1, "modal-dialog", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "HT-title"], ["src", "images/tds-icon.svg"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "table-box-bordered"], [1, "table-responsive"], [1, "table"], [1, "table-options"], [1, "btn", "btn-download", 3, "click"], ["src", "images/download-icon.svg"], ["colspan", "5", 1, "text-center"], [1, "row", "g-3", 3, "formGroup"], [1, "col-md-12"], ["for", "TDSDate", 1, "form-label"], ["type", "date", "id", "TDSDate", "formControlName", "TDSDate", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "TransactionNo", 1, "form-label"], ["type", "text", "id", "TransactionNo", "formControlName", "TransactionNo", 1, "form-control"], ["for", "TDSAmount", 1, "form-label"], ["type", "text", "id", "TDSAmount", "formControlName", "TDSAmount", 1, "form-control"], ["type", "file", "formControlName", "file", "aria-label", "file example", 1, "form-control", 3, "change"], [1, "modal-footer", "px-4"], ["type", "button", 1, "btn", "btn-black", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], [1, "text-danger"]],
    template: function TdsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "TDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TdsModalComponent_Conditional_8_Template, 0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, TdsModalComponent_Conditional_10_Template, 17, 1, "div", 8)(11, TdsModalComponent_Conditional_11_Template, 25, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.showUploadTds ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.showUploadTds ? 10 : 11);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6126:
/*!************************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/upcoming-projects/upcoming-projects.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpcomingProjectsComponent: () => (/* binding */ UpcomingProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/dashboard.service */ 8089);





const _c0 = a0 => ({
  "active": a0
});
function UpcomingProjectsComponent_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpcomingProjectsComponent_Conditional_8_For_1_Template_div_click_2_listener() {
      const up_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.handleViewImageClick(up_r2 == null ? null : up_r2.listProjectImages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 20, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function UpcomingProjectsComponent_Conditional_8_For_1_Template_img_error_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const projectUpdateImage_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](projectUpdateImage_r4.src = "images/project-icon.svg");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "View Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 24)(14, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const up_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", up_r2 == null ? null : up_r2.listProjectImages == null ? null : up_r2.listProjectImages[0] == null ? null : up_r2.listProjectImages[0].imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](up_r2 == null ? null : up_r2.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", up_r2 == null ? null : up_r2.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "https://" + (up_r2 == null ? null : up_r2.instagramlink), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "https://" + (up_r2 == null ? null : up_r2.facebooklink), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function UpcomingProjectsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](0, UpcomingProjectsComponent_Conditional_8_For_1_Template, 18, 5, "div", 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r2.upcomingProjects);
  }
}
function UpcomingProjectsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No upcoming projects to show.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UpcomingProjectsComponent_Conditional_16_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "button", 37);
  }
  if (rf & 2) {
    const $index_r5 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", $index_r5 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-bs-slide-to", $index_r5);
  }
}
function UpcomingProjectsComponent_Conditional_16_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "img", 38, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function UpcomingProjectsComponent_Conditional_16_For_6_Template_img_error_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const projectImages_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](projectImages_r7.src = "images/project-icon.svg");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sp_r8 = ctx.$implicit;
    const $index_r9 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, $index_r9 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", sp_r8 == null ? null : sp_r8.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function UpcomingProjectsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](2, UpcomingProjectsComponent_Conditional_16_For_3_Template, 1, 3, "button", 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](5, UpcomingProjectsComponent_Conditional_16_For_6_Template, 3, 4, "div", 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r2.upcomingProjetcImages());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r2.upcomingProjetcImages());
  }
}
function UpcomingProjectsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No images available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class UpcomingProjectsComponent {
  upcomingProjects = [];
  dashboardService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService);
  upcomingProjetcImages = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
  ngOnInit() {
    this.getUpcomingProjects();
  }
  getUpcomingProjects() {
    this.dashboardService.getUpcomingProjects().subscribe({
      next: res => {
        this.upcomingProjects = res?.Data ?? [];
      }
    });
  }
  handleViewImageClick(_listProjectImages) {
    this.upcomingProjetcImages.set(_listProjectImages);
  }
  static ɵfac = function UpcomingProjectsComponent_Factory(ɵt) {
    return new (ɵt || UpcomingProjectsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UpcomingProjectsComponent,
    selectors: [["app-upcoming-projects"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 18,
    vars: 2,
    consts: [["projectUpdateImage", ""], ["projectImages", ""], [1, "HT-details-card", "mb-3"], [1, "HT-card-head"], [1, "HT-title"], ["src", "images/projects-icon.svg"], [1, "dark-text"], [1, "card-body", "p-4"], [1, "row", "g-3"], ["id", "upcomingProjectImagesSliderModal", "tabindex", "-1", "aria-labelledby", "upcomingProjectImagesSliderModalLabel", "aria-hidden", "true", 1, "modal", "fade", "slider-modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["id", "carouselExampleIndicators", "data-bs-ride", "true", 1, "carousel", "slide"], [1, "text-center"], [1, "col-md-4", "col-sm-6", "col-12"], [1, "coming-project-card", "card-shado"], ["data-bs-toggle", "modal", "data-bs-target", "#upcomingProjectImagesSliderModal", 1, "project-img-box", "h-100", 3, "click"], [1, "project-img", "w-100", 3, "error", "src"], [1, "hover-btn"], [1, "mb-2", "mt-3", 2, "height", "44px", "line-height", "1.1"], [1, "text-gray", "mb-12", 2, "min-height", "37px", "color", "#909090 !important", "line-height", "1.3"], [1, "social-links"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["src", "images/insta-logo.svg", 1, "social-img"], ["src", "images/facebook-logo.svg", 1, "social-img"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "aria-current", "true", "aria-label", "Slide 1", 3, "active"], [1, "carousel-inner"], [1, "carousel-item", 3, "ngClass"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["src", "images/left-arrow.svg"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["src", "images/right-arrow.svg"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "aria-current", "true", "aria-label", "Slide 1"], [1, "w-100", 3, "error", "src"]],
    template: function UpcomingProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Upcoming Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7)(7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UpcomingProjectsComponent_Conditional_8_Template, 2, 0)(9, UpcomingProjectsComponent_Conditional_9_Template, 2, 0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UpcomingProjectsComponent_Conditional_16_Template, 15, 0, "div", 15)(17, UpcomingProjectsComponent_Conditional_17_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.upcomingProjects && ctx.upcomingProjects.length ? 8 : 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.upcomingProjetcImages() && ctx.upcomingProjetcImages().length ? 16 : 17);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
    styles: [".project-img-box[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    text-align: center;\n}\n.project-img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 8px;\n}\n.project-img-box[_ngcontent-%COMP%]   .hover-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    background: rgba(0, 0, 0, 0.27);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0;\n    transition: all 0.3s ease-in-out;\n}\n.project-img-box[_ngcontent-%COMP%]   .hover-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    padding: 8px 12px;\n    background: rgba(255, 255, 255, 0.16);\n    -webkit-backdrop-filter: blur(2px);\n            backdrop-filter: blur(2px);\n    border-radius: 31px;\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 15px;\n    color: #fff;\n}\n.project-img-box[_ngcontent-%COMP%]:hover   .hover-btn[_ngcontent-%COMP%] {\n    opacity: 1;\n}\n\n.project-img[_ngcontent-%COMP%] {\n    width: 229px;\n    height: 229px;\n    object-fit: contain;\n    border-radius: 8px;\n    position: relative;\n}\n.project-img[_ngcontent-%COMP%]::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(180.59deg, rgba(0, 0, 0, 0) 0.51%, rgba(0, 0, 0, 0.32) 90.87%);\n    border-radius: 8px;\n}\n\n.card-shado[_ngcontent-%COMP%]{\n    border: 1px solid #e7e7e7;\n    border-radius: 9px;\n    padding: 20px 20px;\n    box-shadow: 0px 0px 6px #d4d4d4;\n    transition: all 0.1s ease-in-out;\n}\n.card-shado[_ngcontent-%COMP%]:hover{\n    transform: translateY(-3px);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvdXBjb21pbmctcHJvamVjdHMvdXBjb21pbmctcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWiwwRkFBMEY7SUFDMUYsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtaW1nLWJveCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvamVjdC1pbWctYm94IGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnByb2plY3QtaW1nLWJveCAuaG92ZXItYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnByb2plY3QtaW1nLWJveCAuaG92ZXItYnRuIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5wcm9qZWN0LWltZy1ib3g6aG92ZXIgLmhvdmVyLWJ0biB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnByb2plY3QtaW1nIHtcbiAgICB3aWR0aDogMjI5cHg7XG4gICAgaGVpZ2h0OiAyMjlweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvamVjdC1pbWc6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MC41OWRlZywgcmdiYSgwLCAwLCAwLCAwKSAwLjUxJSwgcmdiYSgwLCAwLCAwLCAwLjMyKSA5MC44NyUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNhcmQtc2hhZG97XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlNztcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNkNGQ0ZDQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG4uY2FyZC1zaGFkbzpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1626:
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/faq/faq.component */ 2234);
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/project-details/project-details.component */ 1838);
/* harmony import */ var _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/book-details/book-details.component */ 452);
/* harmony import */ var _components_dl_dl_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dl/dl.component */ 5316);
/* harmony import */ var _components_possession_possession_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/possession/possession.component */ 9728);
/* harmony import */ var _components_project_updates_project_updates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-updates/project-updates.component */ 9726);
/* harmony import */ var _components_upcoming_projects_upcoming_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/upcoming-projects/upcoming-projects.component */ 6126);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ 174);
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/content/content.component */ 5222);
/* harmony import */ var _components_bank_accounts_bank_accounts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/bank-accounts/bank-accounts.component */ 5678);
/* harmony import */ var _components_kyc_modal_kyc_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/kyc-modal/kyc-modal.component */ 3666);
/* harmony import */ var _components_receipts_modal_receipts_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/receipts-modal/receipts-modal.component */ 3934);
/* harmony import */ var _components_milestone_modal_milestone_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/milestone-modal/milestone-modal.component */ 4650);
/* harmony import */ var _components_ask_query_ask_query_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ask-query/ask-query.component */ 7410);
/* harmony import */ var _components_tds_modal_tds_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tds-modal/tds-modal.component */ 5918);
/* harmony import */ var _components_noc_modal_noc_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/noc-modal/noc-modal.component */ 3438);
/* harmony import */ var _components_payment_sch_modal_payment_sch_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/payment-sch-modal/payment-sch-modal.component */ 5838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 7580);



















class DashboardComponent {
  static ɵfac = function DashboardComponent_Factory(ɵt) {
    return new (ɵt || DashboardComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵStandaloneFeature"]],
    decls: 27,
    vars: 0,
    consts: [[1, "HT-project-details"], [1, "bg-gray", "pt-3", "pb-5"], [1, "container"], ["id", "book-details", 1, "section"], ["id", "payment-schedule", 1, "section"], ["id", "dl-receipts", 1, "section"], ["id", "possession-details", 1, "section"], ["id", "project-updates", 1, "section"], ["id", "upcoming-projects", 1, "section"], ["id", "faqs", 1, "section"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "app-project-details")(3, "app-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 1)(5, "div", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](7, "app-book-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "app-bank-accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "app-dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](13, "app-possession");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "app-project-updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "app-upcoming-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](19, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](20, "app-milestone-modal")(21, "app-receipts-modal")(22, "app-payment-sch-modal")(23, "app-kyc-modal")(24, "app-tds-modal")(25, "app-noc-modal")(26, "app-ask-query");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _components_content_content_component__WEBPACK_IMPORTED_MODULE_8__.ContentComponent, _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_1__.ProjectDetailsComponent, _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_2__.BookDetailsComponent, _components_bank_accounts_bank_accounts_component__WEBPACK_IMPORTED_MODULE_9__.BankAccountsComponent, _components_dl_dl_component__WEBPACK_IMPORTED_MODULE_3__.DLComponent, _components_possession_possession_component__WEBPACK_IMPORTED_MODULE_4__.PossessionComponent, _components_project_updates_project_updates_component__WEBPACK_IMPORTED_MODULE_5__.ProjectUpdatesComponent, _components_upcoming_projects_upcoming_projects_component__WEBPACK_IMPORTED_MODULE_6__.UpcomingProjectsComponent, _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_0__.FaqComponent, _components_kyc_modal_kyc_modal_component__WEBPACK_IMPORTED_MODULE_10__.KycModalComponent, _components_receipts_modal_receipts_modal_component__WEBPACK_IMPORTED_MODULE_11__.ReceiptsModalComponent, _components_payment_sch_modal_payment_sch_modal_component__WEBPACK_IMPORTED_MODULE_16__.PaymentSchModalComponent, _components_milestone_modal_milestone_modal_component__WEBPACK_IMPORTED_MODULE_12__.MilestoneModalComponent, _components_tds_modal_tds_modal_component__WEBPACK_IMPORTED_MODULE_14__.TdsModalComponent, _components_noc_modal_noc_modal_component__WEBPACK_IMPORTED_MODULE_15__.NocModalComponent, _components_ask_query_ask_query_component__WEBPACK_IMPORTED_MODULE_13__.AskQueryComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5685:
/*!*****************************************************************!*\
  !*** ./src/app/features/dashboard/models/view-details.model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7781:
/*!***************************************!*\
  !*** ./src/app/utils/formatHelper.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatToINRCurrency)
/* harmony export */ });
// export default Number(value : any) {
//     return parseInt(value).toLocaleString("en-IN")
//   }
function formatToINRCurrency(value) {
  const numberValue = parseFloat(value);
  if (isNaN(numberValue)) {
    return '-';
  }
  return numberValue.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

/***/ }),

/***/ 1962:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheduler: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 5152);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;

/***/ }),

/***/ 8537:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/fromEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromEvent: () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Observable */ 3942);
/* harmony import */ var _operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeMap */ 3255);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 8830);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 1530);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 8067);






const nodeEventEmitterMethods = ['addListener', 'removeListener'];
const eventTargetMethods = ['addEventListener', 'removeEventListener'];
const jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
    resultSelector = options;
    options = undefined;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.mapOneOrManyArgs)(resultSelector));
  }
  const [add, remove] = isEventTarget(target) ? eventTargetMethods.map(methodName => handler => target[methodName](eventName, handler, options)) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [];
  if (!add) {
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(target)) {
      return (0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(subTarget => fromEvent(subTarget, eventName, options))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__.innerFrom)(target));
    }
  }
  if (!add) {
    throw new TypeError('Invalid event target');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    const handler = (...args) => subscriber.next(1 < args.length ? args : args[0]);
    add(handler);
    return () => remove(handler);
  });
}
function toCommonHandlerRegistry(target, eventName) {
  return methodName => handler => target[methodName](eventName, handler);
}
function isNodeStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.on) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.off);
}
function isEventTarget(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addEventListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeEventListener);
}

/***/ }),

/***/ 3617:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/merge.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeAll */ 3222);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./innerFrom */ 2645);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ 9400);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 4083);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ 5429);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popNumber)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__.EMPTY : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__.mergeAll)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__.from)(sources, scheduler));
}

/***/ }),

/***/ 4876:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timer: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 3942);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 9397);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isDate */ 5602);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  let intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

/***/ }),

/***/ 3658:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/audit.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   audit: () => (/* binding */ audit)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);



function audit(durationSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let hasValue = false;
    let lastValue = null;
    let durationSubscriber = null;
    let isComplete = false;
    const endDuration = () => {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      durationSubscriber = null;
      if (hasValue) {
        hasValue = false;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
      isComplete && subscriber.complete();
    };
    const cleanupDuration = () => {
      durationSubscriber = null;
      isComplete && subscriber.complete();
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      hasValue = true;
      lastValue = value;
      if (!durationSubscriber) {
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(durationSelector(value)).subscribe(durationSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, endDuration, cleanupDuration));
      }
    }, () => {
      isComplete = true;
      (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
    }));
  });
}

/***/ }),

/***/ 2351:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/auditTime.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   auditTime: () => (/* binding */ auditTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit */ 3658);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ 4876);



function auditTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_audit__WEBPACK_IMPORTED_MODULE_1__.audit)(() => (0,_observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler));
}

/***/ }),

/***/ 2575:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}

/***/ }),

/***/ 1249:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/takeWhile.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   takeWhile: () => (/* binding */ takeWhile)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);


function takeWhile(predicate, inclusive = false) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      const result = predicate(value, index++);
      (result || inclusive) && subscriber.next(value);
      !result && subscriber.complete();
    }));
  });
}

/***/ }),

/***/ 9103:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2510);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}

/***/ }),

/***/ 1860:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AnimationFrameAction.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationFrameAction: () => (/* binding */ AnimationFrameAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 2083);
/* harmony import */ var _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationFrameProvider */ 5571);


class AnimationFrameAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__.animationFrameProvider.requestAnimationFrame(() => scheduler.flush(undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__.animationFrameProvider.cancelAnimationFrame(id);
      scheduler._scheduled = undefined;
    }
    return undefined;
  }
}

/***/ }),

/***/ 4909:
/*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AnimationFrameScheduler.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationFrameScheduler: () => (/* binding */ AnimationFrameScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2400);

class AnimationFrameScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 8206:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsapAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsapAction: () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 2083);
/* harmony import */ var _immediateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./immediateProvider */ 3701);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.clearImmediate(id);
      if (scheduler._scheduled === id) {
        scheduler._scheduled = undefined;
      }
    }
    return undefined;
  }
}

/***/ }),

/***/ 9835:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsapScheduler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsapScheduler: () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2400);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 2083:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncAction: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 9103);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 8113);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 967);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}

/***/ }),

/***/ 2400:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncScheduler: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 1962);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 614:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/animationFrame.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationFrame: () => (/* binding */ animationFrame),
/* harmony export */   animationFrameScheduler: () => (/* binding */ animationFrameScheduler)
/* harmony export */ });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameAction */ 1860);
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameScheduler */ 4909);


const animationFrameScheduler = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__.AnimationFrameScheduler(_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__.AnimationFrameAction);
const animationFrame = animationFrameScheduler;

/***/ }),

/***/ 5571:
/*!*********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/animationFrameProvider.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationFrameProvider: () => (/* binding */ animationFrameProvider)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2510);

const animationFrameProvider = {
  schedule(callback) {
    let request = requestAnimationFrame;
    let cancel = cancelAnimationFrame;
    const {
      delegate
    } = animationFrameProvider;
    if (delegate) {
      request = delegate.requestAnimationFrame;
      cancel = delegate.cancelAnimationFrame;
    }
    const handle = request(timestamp => {
      cancel = undefined;
      callback(timestamp);
    });
    return new _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription(() => cancel === null || cancel === void 0 ? void 0 : cancel(handle));
  },
  requestAnimationFrame(...args) {
    const {
      delegate
    } = animationFrameProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame)(...args);
  },
  cancelAnimationFrame(...args) {
    const {
      delegate
    } = animationFrameProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame)(...args);
  },
  delegate: undefined
};

/***/ }),

/***/ 7180:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/asap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asap: () => (/* binding */ asap),
/* harmony export */   asapScheduler: () => (/* binding */ asapScheduler)
/* harmony export */ });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapAction */ 8206);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapScheduler */ 9835);


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);
const asap = asapScheduler;

/***/ }),

/***/ 8473:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   asyncScheduler: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 2083);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2400);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 3701:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/immediateProvider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   immediateProvider: () => (/* binding */ immediateProvider)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Immediate */ 733);

const {
  setImmediate,
  clearImmediate
} = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__.Immediate;
const immediateProvider = {
  setImmediate(...args) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate)(...args);
  },
  clearImmediate(handle) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 8113:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intervalProvider: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 733:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/Immediate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immediate: () => (/* binding */ Immediate),
/* harmony export */   TestTools: () => (/* binding */ TestTools)
/* harmony export */ });
let nextHandle = 1;
let resolved;
const activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
const Immediate = {
  setImmediate(cb) {
    const handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(() => findAndClearHandle(handle) && cb());
    return handle;
  },
  clearImmediate(handle) {
    findAndClearHandle(handle);
  }
};
const TestTools = {
  pending() {
    return Object.keys(activeHandles).length;
  }
};

/***/ }),

/***/ 5602:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDate: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

/***/ }),

/***/ 6466:
/*!***********************************************!*\
  !*** ./node_modules/ts-md5/dist/esm/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Md5: () => (/* reexport safe */ _md5__WEBPACK_IMPORTED_MODULE_0__.Md5),
/* harmony export */   Md5FileHasher: () => (/* reexport safe */ _md5_file_hasher__WEBPACK_IMPORTED_MODULE_1__.Md5FileHasher),
/* harmony export */   ParallelHasher: () => (/* reexport safe */ _parallel_hasher__WEBPACK_IMPORTED_MODULE_2__.ParallelHasher)
/* harmony export */ });
/* harmony import */ var _md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./md5 */ 9246);
/* harmony import */ var _md5_file_hasher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5_file_hasher */ 7893);
/* harmony import */ var _parallel_hasher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parallel_hasher */ 4985);




/***/ }),

/***/ 9246:
/*!*********************************************!*\
  !*** ./node_modules/ts-md5/dist/esm/md5.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Md5: () => (/* binding */ Md5)
/* harmony export */ });
/*

TypeScript Md5
==============

Based on work by
* Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
* André Cruz: https://github.com/satazor/SparkMD5
* Raymond Hill: https://github.com/gorhill/yamd5.js

Effectively a TypeScrypt re-write of Raymond Hill JS Library

The MIT License (MIT)

Copyright (C) 2014 Raymond Hill

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



            DO WHAT YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT YOU WANT TO.


*/
;
class Md5 {
  constructor() {
    this._dataLength = 0;
    this._bufferLength = 0;
    this._state = new Int32Array(4);
    this._buffer = new ArrayBuffer(68);
    this._buffer8 = new Uint8Array(this._buffer, 0, 68);
    this._buffer32 = new Uint32Array(this._buffer, 0, 17);
    this.start();
  }
  static hashStr(str, raw = false) {
    return this.onePassHasher.start().appendStr(str).end(raw);
  }
  static hashAsciiStr(str, raw = false) {
    return this.onePassHasher.start().appendAsciiStr(str).end(raw);
  }
  static _hex(x) {
    const hc = Md5.hexChars;
    const ho = Md5.hexOut;
    let n;
    let offset;
    let j;
    let i;
    for (i = 0; i < 4; i += 1) {
      offset = i * 8;
      n = x[i];
      for (j = 0; j < 8; j += 2) {
        ho[offset + 1 + j] = hc.charAt(n & 0x0F);
        n >>>= 4;
        ho[offset + 0 + j] = hc.charAt(n & 0x0F);
        n >>>= 4;
      }
    }
    return ho.join('');
  }
  static _md5cycle(x, k) {
    let a = x[0];
    let b = x[1];
    let c = x[2];
    let d = x[3];
    // ff()
    a += (b & c | ~b & d) + k[0] - 680876936 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[1] - 389564586 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[2] + 606105819 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[4] - 176418897 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[7] - 45705983 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[10] - 42063 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[13] - 40341101 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    // gg()
    a += (b & d | c & ~d) + k[1] - 165796510 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[11] + 643717713 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[0] - 373897302 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[5] - 701558691 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[10] + 38016083 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[15] - 660478335 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[4] - 405537848 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[9] + 568446438 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[3] - 187363961 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[2] - 51403784 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    // hh()
    a += (b ^ c ^ d) + k[5] - 378558 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[14] - 35309556 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[7] - 155497632 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[13] + 681279174 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[0] - 358537222 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[3] - 722521979 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[6] + 76029189 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[9] - 640364487 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[12] - 421815835 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[15] + 530742520 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[2] - 995338651 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    // ii()
    a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    x[0] = a + x[0] | 0;
    x[1] = b + x[1] | 0;
    x[2] = c + x[2] | 0;
    x[3] = d + x[3] | 0;
  }
  /**
   * Initialise buffer to be hashed
   */
  start() {
    this._dataLength = 0;
    this._bufferLength = 0;
    this._state.set(Md5.stateIdentity);
    return this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(str) {
    const buf8 = this._buffer8;
    const buf32 = this._buffer32;
    let bufLen = this._bufferLength;
    let code;
    let i;
    for (i = 0; i < str.length; i += 1) {
      code = str.charCodeAt(i);
      if (code < 128) {
        buf8[bufLen++] = code;
      } else if (code < 0x800) {
        buf8[bufLen++] = (code >>> 6) + 0xC0;
        buf8[bufLen++] = code & 0x3F | 0x80;
      } else if (code < 0xD800 || code > 0xDBFF) {
        buf8[bufLen++] = (code >>> 12) + 0xE0;
        buf8[bufLen++] = code >>> 6 & 0x3F | 0x80;
        buf8[bufLen++] = code & 0x3F | 0x80;
      } else {
        code = (code - 0xD800) * 0x400 + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
        if (code > 0x10FFFF) {
          throw new Error('Unicode standard supports code points up to U+10FFFF');
        }
        buf8[bufLen++] = (code >>> 18) + 0xF0;
        buf8[bufLen++] = code >>> 12 & 0x3F | 0x80;
        buf8[bufLen++] = code >>> 6 & 0x3F | 0x80;
        buf8[bufLen++] = code & 0x3F | 0x80;
      }
      if (bufLen >= 64) {
        this._dataLength += 64;
        Md5._md5cycle(this._state, buf32);
        bufLen -= 64;
        buf32[0] = buf32[16];
      }
    }
    this._bufferLength = bufLen;
    return this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(str) {
    const buf8 = this._buffer8;
    const buf32 = this._buffer32;
    let bufLen = this._bufferLength;
    let i;
    let j = 0;
    for (;;) {
      i = Math.min(str.length - j, 64 - bufLen);
      while (i--) {
        buf8[bufLen++] = str.charCodeAt(j++);
      }
      if (bufLen < 64) {
        break;
      }
      this._dataLength += 64;
      Md5._md5cycle(this._state, buf32);
      bufLen = 0;
    }
    this._bufferLength = bufLen;
    return this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(input) {
    const buf8 = this._buffer8;
    const buf32 = this._buffer32;
    let bufLen = this._bufferLength;
    let i;
    let j = 0;
    for (;;) {
      i = Math.min(input.length - j, 64 - bufLen);
      while (i--) {
        buf8[bufLen++] = input[j++];
      }
      if (bufLen < 64) {
        break;
      }
      this._dataLength += 64;
      Md5._md5cycle(this._state, buf32);
      bufLen = 0;
    }
    this._bufferLength = bufLen;
    return this;
  }
  /**
   * Get the state of the hash buffer
   */
  getState() {
    const s = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [s[0], s[1], s[2], s[3]]
    };
  }
  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  setState(state) {
    const buf = state.buffer;
    const x = state.state;
    const s = this._state;
    let i;
    this._dataLength = state.length;
    this._bufferLength = state.buflen;
    s[0] = x[0];
    s[1] = x[1];
    s[2] = x[2];
    s[3] = x[3];
    for (i = 0; i < buf.length; i += 1) {
      this._buffer8[i] = buf.charCodeAt(i);
    }
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(raw = false) {
    const bufLen = this._bufferLength;
    const buf8 = this._buffer8;
    const buf32 = this._buffer32;
    const i = (bufLen >> 2) + 1;
    this._dataLength += bufLen;
    const dataBitsLen = this._dataLength * 8;
    buf8[bufLen] = 0x80;
    buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
    buf32.set(Md5.buffer32Identity.subarray(i), i);
    if (bufLen > 55) {
      Md5._md5cycle(this._state, buf32);
      buf32.set(Md5.buffer32Identity);
    }
    // Do the final computation based on the tail and length
    // Beware that the final length may not fit in 32 bits so we take care of that
    if (dataBitsLen <= 0xFFFFFFFF) {
      buf32[14] = dataBitsLen;
    } else {
      const matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
      if (matches === null) {
        return;
      }
      const lo = parseInt(matches[2], 16);
      const hi = parseInt(matches[1], 16) || 0;
      buf32[14] = lo;
      buf32[15] = hi;
    }
    Md5._md5cycle(this._state, buf32);
    return raw ? this._state : Md5._hex(this._state);
  }
}
// Private Static Variables
Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
Md5.hexChars = '0123456789abcdef';
Md5.hexOut = [];
// Permanent instance is to use for one-call hashing
Md5.onePassHasher = new Md5();
if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
  throw new Error('Md5 self test failed.');
}

/***/ }),

/***/ 7893:
/*!*********************************************************!*\
  !*** ./node_modules/ts-md5/dist/esm/md5_file_hasher.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Md5FileHasher: () => (/* binding */ Md5FileHasher)
/* harmony export */ });
/* harmony import */ var _md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./md5 */ 9246);

// Hashes any blob
class Md5FileHasher {
  constructor(_callback,
  // Callback to return the result
  _async = true,
  // Async version is not always available in a web worker
  _partSize = 1048576) {
    this._callback = _callback;
    this._async = _async;
    this._partSize = _partSize;
    this._configureReader();
  }
  /**
   * Hash a blob of data in the worker
   * @param blob Data to hash
   */
  hash(blob) {
    const self = this;
    self._blob = blob;
    // self._length = Math.ceil(blob.size / self._partSize);
    self._part = 0;
    self._md5 = new _md5__WEBPACK_IMPORTED_MODULE_0__.Md5();
    self._processPart();
  }
  _fail() {
    this._callback({
      success: false,
      result: 'data read failed'
    });
  }
  _hashData(e) {
    let self = this;
    self._md5.appendByteArray(new Uint8Array(e.target.result));
    if (self._part * self._partSize >= self._blob.size) {
      self._callback({
        success: true,
        result: self._md5.end()
      });
    } else {
      self._processPart();
    }
  }
  _processPart() {
    const self = this;
    let endbyte = 0;
    let current_part;
    self._part += 1;
    if (self._blob.size > self._partSize) {
      // If blob bigger then part_size we will slice it up
      endbyte = self._part * self._partSize;
      if (endbyte > self._blob.size) {
        endbyte = self._blob.size;
      }
      current_part = self._blob.slice((self._part - 1) * self._partSize, endbyte);
    } else {
      current_part = self._blob;
    }
    if (self._async) {
      self._reader.readAsArrayBuffer(current_part);
    } else {
      setTimeout(() => {
        try {
          self._hashData({
            target: {
              result: self._reader.readAsArrayBuffer(current_part)
            }
          });
        } catch (e) {
          self._fail();
        }
      }, 0);
    }
  }
  _configureReader() {
    const self = this;
    if (self._async) {
      self._reader = new FileReader();
      self._reader.onload = self._hashData.bind(self);
      self._reader.onerror = self._fail.bind(self);
      self._reader.onabort = self._fail.bind(self);
    } else {
      self._reader = new FileReaderSync();
    }
  }
}

/***/ }),

/***/ 4985:
/*!*********************************************************!*\
  !*** ./node_modules/ts-md5/dist/esm/parallel_hasher.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParallelHasher: () => (/* binding */ ParallelHasher)
/* harmony export */ });
;
class ParallelHasher {
  constructor(workerUri, workerOptions) {
    this._queue = [];
    this._ready = true;
    const self = this;
    if (Worker) {
      self._hashWorker = new Worker(workerUri, workerOptions);
      self._hashWorker.onmessage = self._recievedMessage.bind(self);
      self._hashWorker.onerror = err => {
        self._ready = false;
        console.error('Hash worker failure', err);
      };
    } else {
      self._ready = false;
      console.error('Web Workers are not supported in this browser');
    }
  }
  /**
   * Hash a blob of data in the worker
   * @param blob Data to hash
   * @returns Promise of the Hashed result
   */
  hash(blob) {
    const self = this;
    let promise;
    promise = new Promise((resolve, reject) => {
      self._queue.push({
        blob,
        resolve,
        reject
      });
      self._processNext();
    });
    return promise;
  }
  /** Terminate any existing hash requests */
  terminate() {
    this._ready = false;
    this._hashWorker.terminate();
  }
  // Processes the next item in the queue
  _processNext() {
    if (this._ready && !this._processing && this._queue.length > 0) {
      this._processing = this._queue.pop();
      this._hashWorker.postMessage(this._processing.blob);
    }
  }
  // Hash result is returned from the worker
  _recievedMessage(evt) {
    var _a, _b;
    const data = evt.data;
    if (data.success) {
      (_a = this._processing) === null || _a === void 0 ? void 0 : _a.resolve(data.result);
    } else {
      (_b = this._processing) === null || _b === void 0 ? void 0 : _b.reject(data.result);
    }
    this._processing = undefined;
    this._processNext();
  }
}

/***/ }),

/***/ 2223:
/*!****************************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/fesm2022/ng-select-ng-select.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleService: () => (/* binding */ ConsoleService),
/* harmony export */   DefaultSelectionModel: () => (/* binding */ DefaultSelectionModel),
/* harmony export */   DefaultSelectionModelFactory: () => (/* binding */ DefaultSelectionModelFactory),
/* harmony export */   NgDropdownPanelComponent: () => (/* binding */ NgDropdownPanelComponent),
/* harmony export */   NgDropdownPanelService: () => (/* binding */ NgDropdownPanelService),
/* harmony export */   NgFooterTemplateDirective: () => (/* binding */ NgFooterTemplateDirective),
/* harmony export */   NgHeaderTemplateDirective: () => (/* binding */ NgHeaderTemplateDirective),
/* harmony export */   NgItemLabelDirective: () => (/* binding */ NgItemLabelDirective),
/* harmony export */   NgLabelTemplateDirective: () => (/* binding */ NgLabelTemplateDirective),
/* harmony export */   NgLoadingSpinnerTemplateDirective: () => (/* binding */ NgLoadingSpinnerTemplateDirective),
/* harmony export */   NgLoadingTextTemplateDirective: () => (/* binding */ NgLoadingTextTemplateDirective),
/* harmony export */   NgMultiLabelTemplateDirective: () => (/* binding */ NgMultiLabelTemplateDirective),
/* harmony export */   NgNotFoundTemplateDirective: () => (/* binding */ NgNotFoundTemplateDirective),
/* harmony export */   NgOptgroupTemplateDirective: () => (/* binding */ NgOptgroupTemplateDirective),
/* harmony export */   NgOptionComponent: () => (/* binding */ NgOptionComponent),
/* harmony export */   NgOptionTemplateDirective: () => (/* binding */ NgOptionTemplateDirective),
/* harmony export */   NgPlaceholderTemplateDirective: () => (/* binding */ NgPlaceholderTemplateDirective),
/* harmony export */   NgSelectComponent: () => (/* binding */ NgSelectComponent),
/* harmony export */   NgSelectConfig: () => (/* binding */ NgSelectConfig),
/* harmony export */   NgSelectModule: () => (/* binding */ NgSelectModule),
/* harmony export */   NgTagTemplateDirective: () => (/* binding */ NgTagTemplateDirective),
/* harmony export */   NgTypeToSearchTemplateDirective: () => (/* binding */ NgTypeToSearchTemplateDirective),
/* harmony export */   SELECTION_MODEL_FACTORY: () => (/* binding */ SELECTION_MODEL_FACTORY)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2351);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 614);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7180);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);






const _c0 = ["content"];
const _c1 = ["scroll"];
const _c2 = ["padding"];
const _c3 = ["*"];
const _c4 = a0 => ({
  searchTerm: a0
});
function NgDropdownPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r0.filterValue));
  }
}
function NgDropdownPanelComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r0.filterValue));
  }
}
const _c5 = ["searchInput"];
const _c6 = ["clearButton"];
const _c7 = (a0, a1, a2) => ({
  item: a0,
  clear: a1,
  label: a2
});
const _c8 = (a0, a1) => ({
  items: a0,
  clear: a1
});
const _c9 = (a0, a1, a2, a3) => ({
  item: a0,
  item$: a1,
  index: a2,
  searchTerm: a3
});
function NgSelectComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.placeholder);
  }
}
function NgSelectComponent_Conditional_2_ng_template_2_Template(rf, ctx) {}
function NgSelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_Conditional_2_ng_template_0_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgSelectComponent_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultPlaceholderTemplate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.placeholderTemplate || defaultPlaceholderTemplate_r3);
  }
}
function NgSelectComponent_Conditional_3_For_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_Conditional_3_For_1_ng_template_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.unselect(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 24);
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r5.label)("escape", ctx_r1.escapeHTML);
  }
}
function NgSelectComponent_Conditional_3_For_1_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_Conditional_3_For_1_ng_template_1_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(3, NgSelectComponent_Conditional_3_For_1_ng_template_3_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const defaultLabelTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-value-disabled", item_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.labelTemplate || defaultLabelTemplate_r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c7, item_r5.value, ctx_r1.clearItem, item_r5.label));
  }
}
function NgSelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, NgSelectComponent_Conditional_3_For_1_Template, 4, 8, "div", 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcomponentInstance"]().trackByOption, true);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r1.selectedItems);
  }
}
function NgSelectComponent_Conditional_4_ng_template_0_Template(rf, ctx) {}
function NgSelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c8, ctx_r1.selectedValues, ctx_r1.clearItem));
  }
}
function NgSelectComponent_Conditional_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 25);
  }
}
function NgSelectComponent_Conditional_8_ng_template_2_Template(rf, ctx) {}
function NgSelectComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_Conditional_8_ng_template_0_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgSelectComponent_Conditional_8_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultLoadingSpinnerTemplate_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.loadingSpinnerTemplate || defaultLoadingSpinnerTemplate_r8);
  }
}
function NgSelectComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15, 4)(2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r1.clearAllText);
  }
}
function NgSelectComponent_Conditional_12_For_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 31);
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r11.label)("escape", ctx_r1.escapeHTML);
  }
}
function NgSelectComponent_Conditional_12_For_3_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_Conditional_12_For_3_Template_div_click_0_listener() {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.toggleItem(item_r11));
    })("mouseover", function NgSelectComponent_Conditional_12_For_3_Template_div_mouseover_0_listener() {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onItemHover(item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_Conditional_12_For_3_ng_template_1_Template, 1, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(3, NgSelectComponent_Conditional_12_For_3_ng_template_3_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const defaultOptionTemplate_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-disabled", item_r11.disabled)("ng-option-selected", item_r11.selected)("ng-optgroup", item_r11.children)("ng-option", !item_r11.children)("ng-option-child", !!item_r11.parent)("ng-option-marked", item_r11 === ctx_r1.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", item_r11.children ? "group" : "option")("aria-selected", item_r11.selected)("id", item_r11 == null ? null : item_r11.htmlId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r11.children ? ctx_r1.optgroupTemplate || defaultOptionTemplate_r12 : ctx_r1.optionTemplate || defaultOptionTemplate_r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c9, item_r11.value, item_r11, item_r11.index, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.addTagText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r1.searchTerm, "\"");
  }
}
function NgSelectComponent_Conditional_12_Conditional_4_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NgSelectComponent_Conditional_12_Conditional_4_Template_div_mouseover_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.itemsList.unmarkItem());
    })("click", function NgSelectComponent_Conditional_12_Conditional_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.selectTag());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_Conditional_12_Conditional_4_ng_template_1_Template, 4, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(3, NgSelectComponent_Conditional_12_Conditional_4_ng_template_3_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const defaultTagTemplate_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-marked", !ctx_r1.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.tagTemplate || defaultTagTemplate_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.notFoundText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_5_ng_template_2_Template(rf, ctx) {}
function NgSelectComponent_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_Conditional_12_Conditional_5_ng_template_0_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgSelectComponent_Conditional_12_Conditional_5_ng_template_2_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const defaultNotFoundTemplate_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.notFoundTemplate || defaultNotFoundTemplate_r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.typeToSearchText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_6_ng_template_2_Template(rf, ctx) {}
function NgSelectComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_Conditional_12_Conditional_6_ng_template_0_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgSelectComponent_Conditional_12_Conditional_6_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultTypeToSearchTemplate_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.typeToSearchTemplate || defaultTypeToSearchTemplate_r16);
  }
}
function NgSelectComponent_Conditional_12_Conditional_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.loadingText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_7_ng_template_2_Template(rf, ctx) {}
function NgSelectComponent_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_Conditional_12_Conditional_7_ng_template_0_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgSelectComponent_Conditional_12_Conditional_7_ng_template_2_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const defaultLoadingTextTemplate_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.loadingTextTemplate || defaultLoadingTextTemplate_r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-dropdown-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_update_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.viewPortItems = $event);
    })("scroll", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.scroll.emit($event));
    })("scrollToEnd", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.scrollToEnd.emit($event));
    })("outsideClick", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_outsideClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, NgSelectComponent_Conditional_12_For_3_Template, 4, 22, "div", 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcomponentInstance"]().trackByOption, true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_Conditional_12_Conditional_4_Template, 4, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_Conditional_12_Conditional_5_Template, 3, 4)(6, NgSelectComponent_Conditional_12_Conditional_6_Template, 3, 1)(7, NgSelectComponent_Conditional_12_Conditional_7_Template, 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-multiple", ctx_r1.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("virtualScroll", ctx_r1.virtualScroll)("bufferAmount", ctx_r1.bufferAmount)("appendTo", ctx_r1.appendTo)("position", ctx_r1.dropdownPosition)("headerTemplate", ctx_r1.headerTemplate)("footerTemplate", ctx_r1.footerTemplate)("filterValue", ctx_r1.searchTerm)("items", ctx_r1.itemsList.filteredItems)("markedItem", ctx_r1.itemsList.markedItem)("ngClass", ctx_r1.appendTo ? ctx_r1.ngClass ? ctx_r1.ngClass : ctx_r1.classes : null)("id", ctx_r1.dropdownId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r1.viewPortItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1.showAddTag ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1.showNoItemsFound() ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1.showTypeToSearch() ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1.loading && ctx_r1.itemsList.filteredItems.length === 0 ? 7 : -1);
  }
}
const unescapedHTMLExp = /[&<>"']/g;
const hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
function escapeHTML(value) {
  return value && hasUnescapedHTMLExp.test(value) ? value.replace(unescapedHTMLExp, chr => htmlEscapes[chr]) : value;
}
function isDefined(value) {
  return value !== undefined && value !== null;
}
function isObject(value) {
  return typeof value === 'object' && isDefined(value);
}
function isPromise(value) {
  return value instanceof Promise;
}
function isFunction(value) {
  return value instanceof Function;
}
class NgItemLabelDirective {
  constructor(element) {
    this.element = element;
    this.escape = true;
  }
  ngOnChanges(changes) {
    this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
  }
  static #_ = this.ɵfac = function NgItemLabelDirective_Factory(ɵt) {
    return new (ɵt || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgItemLabelDirective,
    selectors: [["", "ngItemLabel", ""]],
    inputs: {
      ngItemLabel: "ngItemLabel",
      escape: "escape"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgItemLabelDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngItemLabel]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], {
    ngItemLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    escape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgOptionTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgOptionTemplateDirective_Factory(ɵt) {
    return new (ɵt || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgOptionTemplateDirective,
    selectors: [["", "ng-option-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-option-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgOptgroupTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgOptgroupTemplateDirective_Factory(ɵt) {
    return new (ɵt || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgOptgroupTemplateDirective,
    selectors: [["", "ng-optgroup-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-optgroup-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgLabelTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgLabelTemplateDirective_Factory(ɵt) {
    return new (ɵt || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgLabelTemplateDirective,
    selectors: [["", "ng-label-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-label-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgMultiLabelTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgMultiLabelTemplateDirective_Factory(ɵt) {
    return new (ɵt || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgMultiLabelTemplateDirective,
    selectors: [["", "ng-multi-label-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-multi-label-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgHeaderTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgHeaderTemplateDirective_Factory(ɵt) {
    return new (ɵt || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgHeaderTemplateDirective,
    selectors: [["", "ng-header-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-header-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgFooterTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgFooterTemplateDirective_Factory(ɵt) {
    return new (ɵt || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgFooterTemplateDirective,
    selectors: [["", "ng-footer-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-footer-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgNotFoundTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgNotFoundTemplateDirective_Factory(ɵt) {
    return new (ɵt || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgNotFoundTemplateDirective,
    selectors: [["", "ng-notfound-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-notfound-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgPlaceholderTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgPlaceholderTemplateDirective_Factory(ɵt) {
    return new (ɵt || NgPlaceholderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgPlaceholderTemplateDirective,
    selectors: [["", "ng-placeholder-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPlaceholderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-placeholder-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgTypeToSearchTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgTypeToSearchTemplateDirective_Factory(ɵt) {
    return new (ɵt || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgTypeToSearchTemplateDirective,
    selectors: [["", "ng-typetosearch-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-typetosearch-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgLoadingTextTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgLoadingTextTemplateDirective_Factory(ɵt) {
    return new (ɵt || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgLoadingTextTemplateDirective,
    selectors: [["", "ng-loadingtext-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-loadingtext-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgTagTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgTagTemplateDirective_Factory(ɵt) {
    return new (ɵt || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgTagTemplateDirective,
    selectors: [["", "ng-tag-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-tag-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgLoadingSpinnerTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(ɵt) {
    return new (ɵt || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgLoadingSpinnerTemplateDirective,
    selectors: [["", "ng-loadingspinner-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-loadingspinner-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
function newId() {
  // First character is an 'a', it's good practice to tag id to begin with a letter
  return 'axxxxxxxxxxx'.replace(/[x]/g, () => {
    // eslint-disable-next-line no-bitwise
    const val = Math.random() * 16 | 0;
    return val.toString(16);
  });
}
const diacritics = {
  '\u24B6': 'A',
  '\uFF21': 'A',
  '\u00C0': 'A',
  '\u00C1': 'A',
  '\u00C2': 'A',
  '\u1EA6': 'A',
  '\u1EA4': 'A',
  '\u1EAA': 'A',
  '\u1EA8': 'A',
  '\u00C3': 'A',
  '\u0100': 'A',
  '\u0102': 'A',
  '\u1EB0': 'A',
  '\u1EAE': 'A',
  '\u1EB4': 'A',
  '\u1EB2': 'A',
  '\u0226': 'A',
  '\u01E0': 'A',
  '\u00C4': 'A',
  '\u01DE': 'A',
  '\u1EA2': 'A',
  '\u00C5': 'A',
  '\u01FA': 'A',
  '\u01CD': 'A',
  '\u0200': 'A',
  '\u0202': 'A',
  '\u1EA0': 'A',
  '\u1EAC': 'A',
  '\u1EB6': 'A',
  '\u1E00': 'A',
  '\u0104': 'A',
  '\u023A': 'A',
  '\u2C6F': 'A',
  '\uA732': 'AA',
  '\u00C6': 'AE',
  '\u01FC': 'AE',
  '\u01E2': 'AE',
  '\uA734': 'AO',
  '\uA736': 'AU',
  '\uA738': 'AV',
  '\uA73A': 'AV',
  '\uA73C': 'AY',
  '\u24B7': 'B',
  '\uFF22': 'B',
  '\u1E02': 'B',
  '\u1E04': 'B',
  '\u1E06': 'B',
  '\u0243': 'B',
  '\u0182': 'B',
  '\u0181': 'B',
  '\u24B8': 'C',
  '\uFF23': 'C',
  '\u0106': 'C',
  '\u0108': 'C',
  '\u010A': 'C',
  '\u010C': 'C',
  '\u00C7': 'C',
  '\u1E08': 'C',
  '\u0187': 'C',
  '\u023B': 'C',
  '\uA73E': 'C',
  '\u24B9': 'D',
  '\uFF24': 'D',
  '\u1E0A': 'D',
  '\u010E': 'D',
  '\u1E0C': 'D',
  '\u1E10': 'D',
  '\u1E12': 'D',
  '\u1E0E': 'D',
  '\u0110': 'D',
  '\u018B': 'D',
  '\u018A': 'D',
  '\u0189': 'D',
  '\uA779': 'D',
  '\u01F1': 'DZ',
  '\u01C4': 'DZ',
  '\u01F2': 'Dz',
  '\u01C5': 'Dz',
  '\u24BA': 'E',
  '\uFF25': 'E',
  '\u00C8': 'E',
  '\u00C9': 'E',
  '\u00CA': 'E',
  '\u1EC0': 'E',
  '\u1EBE': 'E',
  '\u1EC4': 'E',
  '\u1EC2': 'E',
  '\u1EBC': 'E',
  '\u0112': 'E',
  '\u1E14': 'E',
  '\u1E16': 'E',
  '\u0114': 'E',
  '\u0116': 'E',
  '\u00CB': 'E',
  '\u1EBA': 'E',
  '\u011A': 'E',
  '\u0204': 'E',
  '\u0206': 'E',
  '\u1EB8': 'E',
  '\u1EC6': 'E',
  '\u0228': 'E',
  '\u1E1C': 'E',
  '\u0118': 'E',
  '\u1E18': 'E',
  '\u1E1A': 'E',
  '\u0190': 'E',
  '\u018E': 'E',
  '\u24BB': 'F',
  '\uFF26': 'F',
  '\u1E1E': 'F',
  '\u0191': 'F',
  '\uA77B': 'F',
  '\u24BC': 'G',
  '\uFF27': 'G',
  '\u01F4': 'G',
  '\u011C': 'G',
  '\u1E20': 'G',
  '\u011E': 'G',
  '\u0120': 'G',
  '\u01E6': 'G',
  '\u0122': 'G',
  '\u01E4': 'G',
  '\u0193': 'G',
  '\uA7A0': 'G',
  '\uA77D': 'G',
  '\uA77E': 'G',
  '\u24BD': 'H',
  '\uFF28': 'H',
  '\u0124': 'H',
  '\u1E22': 'H',
  '\u1E26': 'H',
  '\u021E': 'H',
  '\u1E24': 'H',
  '\u1E28': 'H',
  '\u1E2A': 'H',
  '\u0126': 'H',
  '\u2C67': 'H',
  '\u2C75': 'H',
  '\uA78D': 'H',
  '\u24BE': 'I',
  '\uFF29': 'I',
  '\u00CC': 'I',
  '\u00CD': 'I',
  '\u00CE': 'I',
  '\u0128': 'I',
  '\u012A': 'I',
  '\u012C': 'I',
  '\u0130': 'I',
  '\u00CF': 'I',
  '\u1E2E': 'I',
  '\u1EC8': 'I',
  '\u01CF': 'I',
  '\u0208': 'I',
  '\u020A': 'I',
  '\u1ECA': 'I',
  '\u012E': 'I',
  '\u1E2C': 'I',
  '\u0197': 'I',
  '\u24BF': 'J',
  '\uFF2A': 'J',
  '\u0134': 'J',
  '\u0248': 'J',
  '\u24C0': 'K',
  '\uFF2B': 'K',
  '\u1E30': 'K',
  '\u01E8': 'K',
  '\u1E32': 'K',
  '\u0136': 'K',
  '\u1E34': 'K',
  '\u0198': 'K',
  '\u2C69': 'K',
  '\uA740': 'K',
  '\uA742': 'K',
  '\uA744': 'K',
  '\uA7A2': 'K',
  '\u24C1': 'L',
  '\uFF2C': 'L',
  '\u013F': 'L',
  '\u0139': 'L',
  '\u013D': 'L',
  '\u1E36': 'L',
  '\u1E38': 'L',
  '\u013B': 'L',
  '\u1E3C': 'L',
  '\u1E3A': 'L',
  '\u0141': 'L',
  '\u023D': 'L',
  '\u2C62': 'L',
  '\u2C60': 'L',
  '\uA748': 'L',
  '\uA746': 'L',
  '\uA780': 'L',
  '\u01C7': 'LJ',
  '\u01C8': 'Lj',
  '\u24C2': 'M',
  '\uFF2D': 'M',
  '\u1E3E': 'M',
  '\u1E40': 'M',
  '\u1E42': 'M',
  '\u2C6E': 'M',
  '\u019C': 'M',
  '\u24C3': 'N',
  '\uFF2E': 'N',
  '\u01F8': 'N',
  '\u0143': 'N',
  '\u00D1': 'N',
  '\u1E44': 'N',
  '\u0147': 'N',
  '\u1E46': 'N',
  '\u0145': 'N',
  '\u1E4A': 'N',
  '\u1E48': 'N',
  '\u0220': 'N',
  '\u019D': 'N',
  '\uA790': 'N',
  '\uA7A4': 'N',
  '\u01CA': 'NJ',
  '\u01CB': 'Nj',
  '\u24C4': 'O',
  '\uFF2F': 'O',
  '\u00D2': 'O',
  '\u00D3': 'O',
  '\u00D4': 'O',
  '\u1ED2': 'O',
  '\u1ED0': 'O',
  '\u1ED6': 'O',
  '\u1ED4': 'O',
  '\u00D5': 'O',
  '\u1E4C': 'O',
  '\u022C': 'O',
  '\u1E4E': 'O',
  '\u014C': 'O',
  '\u1E50': 'O',
  '\u1E52': 'O',
  '\u014E': 'O',
  '\u022E': 'O',
  '\u0230': 'O',
  '\u00D6': 'O',
  '\u022A': 'O',
  '\u1ECE': 'O',
  '\u0150': 'O',
  '\u01D1': 'O',
  '\u020C': 'O',
  '\u020E': 'O',
  '\u01A0': 'O',
  '\u1EDC': 'O',
  '\u1EDA': 'O',
  '\u1EE0': 'O',
  '\u1EDE': 'O',
  '\u1EE2': 'O',
  '\u1ECC': 'O',
  '\u1ED8': 'O',
  '\u01EA': 'O',
  '\u01EC': 'O',
  '\u00D8': 'O',
  '\u01FE': 'O',
  '\u0186': 'O',
  '\u019F': 'O',
  '\uA74A': 'O',
  '\uA74C': 'O',
  '\u01A2': 'OI',
  '\uA74E': 'OO',
  '\u0222': 'OU',
  '\u24C5': 'P',
  '\uFF30': 'P',
  '\u1E54': 'P',
  '\u1E56': 'P',
  '\u01A4': 'P',
  '\u2C63': 'P',
  '\uA750': 'P',
  '\uA752': 'P',
  '\uA754': 'P',
  '\u24C6': 'Q',
  '\uFF31': 'Q',
  '\uA756': 'Q',
  '\uA758': 'Q',
  '\u024A': 'Q',
  '\u24C7': 'R',
  '\uFF32': 'R',
  '\u0154': 'R',
  '\u1E58': 'R',
  '\u0158': 'R',
  '\u0210': 'R',
  '\u0212': 'R',
  '\u1E5A': 'R',
  '\u1E5C': 'R',
  '\u0156': 'R',
  '\u1E5E': 'R',
  '\u024C': 'R',
  '\u2C64': 'R',
  '\uA75A': 'R',
  '\uA7A6': 'R',
  '\uA782': 'R',
  '\u24C8': 'S',
  '\uFF33': 'S',
  '\u1E9E': 'S',
  '\u015A': 'S',
  '\u1E64': 'S',
  '\u015C': 'S',
  '\u1E60': 'S',
  '\u0160': 'S',
  '\u1E66': 'S',
  '\u1E62': 'S',
  '\u1E68': 'S',
  '\u0218': 'S',
  '\u015E': 'S',
  '\u2C7E': 'S',
  '\uA7A8': 'S',
  '\uA784': 'S',
  '\u24C9': 'T',
  '\uFF34': 'T',
  '\u1E6A': 'T',
  '\u0164': 'T',
  '\u1E6C': 'T',
  '\u021A': 'T',
  '\u0162': 'T',
  '\u1E70': 'T',
  '\u1E6E': 'T',
  '\u0166': 'T',
  '\u01AC': 'T',
  '\u01AE': 'T',
  '\u023E': 'T',
  '\uA786': 'T',
  '\uA728': 'TZ',
  '\u24CA': 'U',
  '\uFF35': 'U',
  '\u00D9': 'U',
  '\u00DA': 'U',
  '\u00DB': 'U',
  '\u0168': 'U',
  '\u1E78': 'U',
  '\u016A': 'U',
  '\u1E7A': 'U',
  '\u016C': 'U',
  '\u00DC': 'U',
  '\u01DB': 'U',
  '\u01D7': 'U',
  '\u01D5': 'U',
  '\u01D9': 'U',
  '\u1EE6': 'U',
  '\u016E': 'U',
  '\u0170': 'U',
  '\u01D3': 'U',
  '\u0214': 'U',
  '\u0216': 'U',
  '\u01AF': 'U',
  '\u1EEA': 'U',
  '\u1EE8': 'U',
  '\u1EEE': 'U',
  '\u1EEC': 'U',
  '\u1EF0': 'U',
  '\u1EE4': 'U',
  '\u1E72': 'U',
  '\u0172': 'U',
  '\u1E76': 'U',
  '\u1E74': 'U',
  '\u0244': 'U',
  '\u24CB': 'V',
  '\uFF36': 'V',
  '\u1E7C': 'V',
  '\u1E7E': 'V',
  '\u01B2': 'V',
  '\uA75E': 'V',
  '\u0245': 'V',
  '\uA760': 'VY',
  '\u24CC': 'W',
  '\uFF37': 'W',
  '\u1E80': 'W',
  '\u1E82': 'W',
  '\u0174': 'W',
  '\u1E86': 'W',
  '\u1E84': 'W',
  '\u1E88': 'W',
  '\u2C72': 'W',
  '\u24CD': 'X',
  '\uFF38': 'X',
  '\u1E8A': 'X',
  '\u1E8C': 'X',
  '\u24CE': 'Y',
  '\uFF39': 'Y',
  '\u1EF2': 'Y',
  '\u00DD': 'Y',
  '\u0176': 'Y',
  '\u1EF8': 'Y',
  '\u0232': 'Y',
  '\u1E8E': 'Y',
  '\u0178': 'Y',
  '\u1EF6': 'Y',
  '\u1EF4': 'Y',
  '\u01B3': 'Y',
  '\u024E': 'Y',
  '\u1EFE': 'Y',
  '\u24CF': 'Z',
  '\uFF3A': 'Z',
  '\u0179': 'Z',
  '\u1E90': 'Z',
  '\u017B': 'Z',
  '\u017D': 'Z',
  '\u1E92': 'Z',
  '\u1E94': 'Z',
  '\u01B5': 'Z',
  '\u0224': 'Z',
  '\u2C7F': 'Z',
  '\u2C6B': 'Z',
  '\uA762': 'Z',
  '\u24D0': 'a',
  '\uFF41': 'a',
  '\u1E9A': 'a',
  '\u00E0': 'a',
  '\u00E1': 'a',
  '\u00E2': 'a',
  '\u1EA7': 'a',
  '\u1EA5': 'a',
  '\u1EAB': 'a',
  '\u1EA9': 'a',
  '\u00E3': 'a',
  '\u0101': 'a',
  '\u0103': 'a',
  '\u1EB1': 'a',
  '\u1EAF': 'a',
  '\u1EB5': 'a',
  '\u1EB3': 'a',
  '\u0227': 'a',
  '\u01E1': 'a',
  '\u00E4': 'a',
  '\u01DF': 'a',
  '\u1EA3': 'a',
  '\u00E5': 'a',
  '\u01FB': 'a',
  '\u01CE': 'a',
  '\u0201': 'a',
  '\u0203': 'a',
  '\u1EA1': 'a',
  '\u1EAD': 'a',
  '\u1EB7': 'a',
  '\u1E01': 'a',
  '\u0105': 'a',
  '\u2C65': 'a',
  '\u0250': 'a',
  '\uA733': 'aa',
  '\u00E6': 'ae',
  '\u01FD': 'ae',
  '\u01E3': 'ae',
  '\uA735': 'ao',
  '\uA737': 'au',
  '\uA739': 'av',
  '\uA73B': 'av',
  '\uA73D': 'ay',
  '\u24D1': 'b',
  '\uFF42': 'b',
  '\u1E03': 'b',
  '\u1E05': 'b',
  '\u1E07': 'b',
  '\u0180': 'b',
  '\u0183': 'b',
  '\u0253': 'b',
  '\u24D2': 'c',
  '\uFF43': 'c',
  '\u0107': 'c',
  '\u0109': 'c',
  '\u010B': 'c',
  '\u010D': 'c',
  '\u00E7': 'c',
  '\u1E09': 'c',
  '\u0188': 'c',
  '\u023C': 'c',
  '\uA73F': 'c',
  '\u2184': 'c',
  '\u24D3': 'd',
  '\uFF44': 'd',
  '\u1E0B': 'd',
  '\u010F': 'd',
  '\u1E0D': 'd',
  '\u1E11': 'd',
  '\u1E13': 'd',
  '\u1E0F': 'd',
  '\u0111': 'd',
  '\u018C': 'd',
  '\u0256': 'd',
  '\u0257': 'd',
  '\uA77A': 'd',
  '\u01F3': 'dz',
  '\u01C6': 'dz',
  '\u24D4': 'e',
  '\uFF45': 'e',
  '\u00E8': 'e',
  '\u00E9': 'e',
  '\u00EA': 'e',
  '\u1EC1': 'e',
  '\u1EBF': 'e',
  '\u1EC5': 'e',
  '\u1EC3': 'e',
  '\u1EBD': 'e',
  '\u0113': 'e',
  '\u1E15': 'e',
  '\u1E17': 'e',
  '\u0115': 'e',
  '\u0117': 'e',
  '\u00EB': 'e',
  '\u1EBB': 'e',
  '\u011B': 'e',
  '\u0205': 'e',
  '\u0207': 'e',
  '\u1EB9': 'e',
  '\u1EC7': 'e',
  '\u0229': 'e',
  '\u1E1D': 'e',
  '\u0119': 'e',
  '\u1E19': 'e',
  '\u1E1B': 'e',
  '\u0247': 'e',
  '\u025B': 'e',
  '\u01DD': 'e',
  '\u24D5': 'f',
  '\uFF46': 'f',
  '\u1E1F': 'f',
  '\u0192': 'f',
  '\uA77C': 'f',
  '\u24D6': 'g',
  '\uFF47': 'g',
  '\u01F5': 'g',
  '\u011D': 'g',
  '\u1E21': 'g',
  '\u011F': 'g',
  '\u0121': 'g',
  '\u01E7': 'g',
  '\u0123': 'g',
  '\u01E5': 'g',
  '\u0260': 'g',
  '\uA7A1': 'g',
  '\u1D79': 'g',
  '\uA77F': 'g',
  '\u24D7': 'h',
  '\uFF48': 'h',
  '\u0125': 'h',
  '\u1E23': 'h',
  '\u1E27': 'h',
  '\u021F': 'h',
  '\u1E25': 'h',
  '\u1E29': 'h',
  '\u1E2B': 'h',
  '\u1E96': 'h',
  '\u0127': 'h',
  '\u2C68': 'h',
  '\u2C76': 'h',
  '\u0265': 'h',
  '\u0195': 'hv',
  '\u24D8': 'i',
  '\uFF49': 'i',
  '\u00EC': 'i',
  '\u00ED': 'i',
  '\u00EE': 'i',
  '\u0129': 'i',
  '\u012B': 'i',
  '\u012D': 'i',
  '\u00EF': 'i',
  '\u1E2F': 'i',
  '\u1EC9': 'i',
  '\u01D0': 'i',
  '\u0209': 'i',
  '\u020B': 'i',
  '\u1ECB': 'i',
  '\u012F': 'i',
  '\u1E2D': 'i',
  '\u0268': 'i',
  '\u0131': 'i',
  '\u24D9': 'j',
  '\uFF4A': 'j',
  '\u0135': 'j',
  '\u01F0': 'j',
  '\u0249': 'j',
  '\u24DA': 'k',
  '\uFF4B': 'k',
  '\u1E31': 'k',
  '\u01E9': 'k',
  '\u1E33': 'k',
  '\u0137': 'k',
  '\u1E35': 'k',
  '\u0199': 'k',
  '\u2C6A': 'k',
  '\uA741': 'k',
  '\uA743': 'k',
  '\uA745': 'k',
  '\uA7A3': 'k',
  '\u24DB': 'l',
  '\uFF4C': 'l',
  '\u0140': 'l',
  '\u013A': 'l',
  '\u013E': 'l',
  '\u1E37': 'l',
  '\u1E39': 'l',
  '\u013C': 'l',
  '\u1E3D': 'l',
  '\u1E3B': 'l',
  '\u017F': 'l',
  '\u0142': 'l',
  '\u019A': 'l',
  '\u026B': 'l',
  '\u2C61': 'l',
  '\uA749': 'l',
  '\uA781': 'l',
  '\uA747': 'l',
  '\u01C9': 'lj',
  '\u24DC': 'm',
  '\uFF4D': 'm',
  '\u1E3F': 'm',
  '\u1E41': 'm',
  '\u1E43': 'm',
  '\u0271': 'm',
  '\u026F': 'm',
  '\u24DD': 'n',
  '\uFF4E': 'n',
  '\u01F9': 'n',
  '\u0144': 'n',
  '\u00F1': 'n',
  '\u1E45': 'n',
  '\u0148': 'n',
  '\u1E47': 'n',
  '\u0146': 'n',
  '\u1E4B': 'n',
  '\u1E49': 'n',
  '\u019E': 'n',
  '\u0272': 'n',
  '\u0149': 'n',
  '\uA791': 'n',
  '\uA7A5': 'n',
  '\u01CC': 'nj',
  '\u24DE': 'o',
  '\uFF4F': 'o',
  '\u00F2': 'o',
  '\u00F3': 'o',
  '\u00F4': 'o',
  '\u1ED3': 'o',
  '\u1ED1': 'o',
  '\u1ED7': 'o',
  '\u1ED5': 'o',
  '\u00F5': 'o',
  '\u1E4D': 'o',
  '\u022D': 'o',
  '\u1E4F': 'o',
  '\u014D': 'o',
  '\u1E51': 'o',
  '\u1E53': 'o',
  '\u014F': 'o',
  '\u022F': 'o',
  '\u0231': 'o',
  '\u00F6': 'o',
  '\u022B': 'o',
  '\u1ECF': 'o',
  '\u0151': 'o',
  '\u01D2': 'o',
  '\u020D': 'o',
  '\u020F': 'o',
  '\u01A1': 'o',
  '\u1EDD': 'o',
  '\u1EDB': 'o',
  '\u1EE1': 'o',
  '\u1EDF': 'o',
  '\u1EE3': 'o',
  '\u1ECD': 'o',
  '\u1ED9': 'o',
  '\u01EB': 'o',
  '\u01ED': 'o',
  '\u00F8': 'o',
  '\u01FF': 'o',
  '\u0254': 'o',
  '\uA74B': 'o',
  '\uA74D': 'o',
  '\u0275': 'o',
  '\u01A3': 'oi',
  '\u0223': 'ou',
  '\uA74F': 'oo',
  '\u24DF': 'p',
  '\uFF50': 'p',
  '\u1E55': 'p',
  '\u1E57': 'p',
  '\u01A5': 'p',
  '\u1D7D': 'p',
  '\uA751': 'p',
  '\uA753': 'p',
  '\uA755': 'p',
  '\u24E0': 'q',
  '\uFF51': 'q',
  '\u024B': 'q',
  '\uA757': 'q',
  '\uA759': 'q',
  '\u24E1': 'r',
  '\uFF52': 'r',
  '\u0155': 'r',
  '\u1E59': 'r',
  '\u0159': 'r',
  '\u0211': 'r',
  '\u0213': 'r',
  '\u1E5B': 'r',
  '\u1E5D': 'r',
  '\u0157': 'r',
  '\u1E5F': 'r',
  '\u024D': 'r',
  '\u027D': 'r',
  '\uA75B': 'r',
  '\uA7A7': 'r',
  '\uA783': 'r',
  '\u24E2': 's',
  '\uFF53': 's',
  '\u00DF': 's',
  '\u015B': 's',
  '\u1E65': 's',
  '\u015D': 's',
  '\u1E61': 's',
  '\u0161': 's',
  '\u1E67': 's',
  '\u1E63': 's',
  '\u1E69': 's',
  '\u0219': 's',
  '\u015F': 's',
  '\u023F': 's',
  '\uA7A9': 's',
  '\uA785': 's',
  '\u1E9B': 's',
  '\u24E3': 't',
  '\uFF54': 't',
  '\u1E6B': 't',
  '\u1E97': 't',
  '\u0165': 't',
  '\u1E6D': 't',
  '\u021B': 't',
  '\u0163': 't',
  '\u1E71': 't',
  '\u1E6F': 't',
  '\u0167': 't',
  '\u01AD': 't',
  '\u0288': 't',
  '\u2C66': 't',
  '\uA787': 't',
  '\uA729': 'tz',
  '\u24E4': 'u',
  '\uFF55': 'u',
  '\u00F9': 'u',
  '\u00FA': 'u',
  '\u00FB': 'u',
  '\u0169': 'u',
  '\u1E79': 'u',
  '\u016B': 'u',
  '\u1E7B': 'u',
  '\u016D': 'u',
  '\u00FC': 'u',
  '\u01DC': 'u',
  '\u01D8': 'u',
  '\u01D6': 'u',
  '\u01DA': 'u',
  '\u1EE7': 'u',
  '\u016F': 'u',
  '\u0171': 'u',
  '\u01D4': 'u',
  '\u0215': 'u',
  '\u0217': 'u',
  '\u01B0': 'u',
  '\u1EEB': 'u',
  '\u1EE9': 'u',
  '\u1EEF': 'u',
  '\u1EED': 'u',
  '\u1EF1': 'u',
  '\u1EE5': 'u',
  '\u1E73': 'u',
  '\u0173': 'u',
  '\u1E77': 'u',
  '\u1E75': 'u',
  '\u0289': 'u',
  '\u24E5': 'v',
  '\uFF56': 'v',
  '\u1E7D': 'v',
  '\u1E7F': 'v',
  '\u028B': 'v',
  '\uA75F': 'v',
  '\u028C': 'v',
  '\uA761': 'vy',
  '\u24E6': 'w',
  '\uFF57': 'w',
  '\u1E81': 'w',
  '\u1E83': 'w',
  '\u0175': 'w',
  '\u1E87': 'w',
  '\u1E85': 'w',
  '\u1E98': 'w',
  '\u1E89': 'w',
  '\u2C73': 'w',
  '\u24E7': 'x',
  '\uFF58': 'x',
  '\u1E8B': 'x',
  '\u1E8D': 'x',
  '\u24E8': 'y',
  '\uFF59': 'y',
  '\u1EF3': 'y',
  '\u00FD': 'y',
  '\u0177': 'y',
  '\u1EF9': 'y',
  '\u0233': 'y',
  '\u1E8F': 'y',
  '\u00FF': 'y',
  '\u1EF7': 'y',
  '\u1E99': 'y',
  '\u1EF5': 'y',
  '\u01B4': 'y',
  '\u024F': 'y',
  '\u1EFF': 'y',
  '\u24E9': 'z',
  '\uFF5A': 'z',
  '\u017A': 'z',
  '\u1E91': 'z',
  '\u017C': 'z',
  '\u017E': 'z',
  '\u1E93': 'z',
  '\u1E95': 'z',
  '\u01B6': 'z',
  '\u0225': 'z',
  '\u0240': 'z',
  '\u2C6C': 'z',
  '\uA763': 'z',
  '\u0386': '\u0391',
  '\u0388': '\u0395',
  '\u0389': '\u0397',
  '\u038A': '\u0399',
  '\u03AA': '\u0399',
  '\u038C': '\u039F',
  '\u038E': '\u03A5',
  '\u03AB': '\u03A5',
  '\u038F': '\u03A9',
  '\u03AC': '\u03B1',
  '\u03AD': '\u03B5',
  '\u03AE': '\u03B7',
  '\u03AF': '\u03B9',
  '\u03CA': '\u03B9',
  '\u0390': '\u03B9',
  '\u03CC': '\u03BF',
  '\u03CD': '\u03C5',
  '\u03CB': '\u03C5',
  '\u03B0': '\u03C5',
  '\u03C9': '\u03C9',
  '\u03C2': '\u03C3'
};
function stripSpecialChars(text) {
  const match = a => diacritics[a] || a;
  return text.replace(/[^\u0000-\u007E]/g, match);
}
class ItemsList {
  constructor(_ngSelect, _selectionModel) {
    this._ngSelect = _ngSelect;
    this._selectionModel = _selectionModel;
    this._items = [];
    this._filteredItems = [];
    this._markedIndex = -1;
  }
  get items() {
    return this._items;
  }
  get filteredItems() {
    return this._filteredItems;
  }
  get markedIndex() {
    return this._markedIndex;
  }
  get selectedItems() {
    return this._selectionModel.value;
  }
  get markedItem() {
    return this._filteredItems[this._markedIndex];
  }
  get noItemsToSelect() {
    return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
  }
  get maxItemsSelected() {
    return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
  }
  get lastSelectedItem() {
    let i = this.selectedItems.length - 1;
    for (; i >= 0; i--) {
      const item = this.selectedItems[i];
      if (!item.disabled) {
        return item;
      }
    }
    return null;
  }
  setItems(items) {
    this._items = items.map((item, index) => this.mapItem(item, index));
    if (this._ngSelect.groupBy) {
      this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
      this._items = this._flatten(this._groups);
    } else {
      this._groups = new Map();
      this._groups.set(undefined, this._items);
    }
    this._filteredItems = [...this._items];
  }
  select(item) {
    if (item.selected || this.maxItemsSelected) {
      return;
    }
    const multiple = this._ngSelect.multiple;
    if (!multiple) {
      this.clearSelected();
    }
    this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
    if (this._ngSelect.hideSelected) {
      this._hideSelected(item);
    }
  }
  unselect(item) {
    if (!item.selected) {
      return;
    }
    this._selectionModel.unselect(item, this._ngSelect.multiple);
    if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
      this._showSelected(item);
    }
  }
  findItem(value) {
    let findBy;
    if (this._ngSelect.compareWith) {
      findBy = item => this._ngSelect.compareWith(item.value, value);
    } else if (this._ngSelect.bindValue) {
      findBy = item => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue) === value;
    } else {
      findBy = item => item.value === value || !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel);
    }
    return this._items.find(item => findBy(item));
  }
  addItem(item) {
    const option = this.mapItem(item, this._items.length);
    this._items.push(option);
    this._filteredItems.push(option);
    return option;
  }
  clearSelected(keepDisabled = false) {
    this._selectionModel.clear(keepDisabled);
    this._items.forEach(item => {
      item.selected = keepDisabled && item.selected && item.disabled;
      item.marked = false;
    });
    if (this._ngSelect.hideSelected) {
      this.resetFilteredItems();
    }
  }
  findByLabel(term) {
    term = stripSpecialChars(term).toLocaleLowerCase();
    return this.filteredItems.find(item => {
      const label = stripSpecialChars(item.label).toLocaleLowerCase();
      return label.substr(0, term.length) === term;
    });
  }
  filter(term) {
    if (!term) {
      this.resetFilteredItems();
      return;
    }
    this._filteredItems = [];
    term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
    const match = this._ngSelect.searchFn || this._defaultSearchFn;
    const hideSelected = this._ngSelect.hideSelected;
    for (const key of Array.from(this._groups.keys())) {
      const matchedItems = [];
      for (const item of this._groups.get(key)) {
        if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
          continue;
        }
        const searchItem = this._ngSelect.searchFn ? item.value : item;
        if (match(term, searchItem)) {
          matchedItems.push(item);
        }
      }
      if (matchedItems.length > 0) {
        const [last] = matchedItems.slice(-1);
        if (last.parent) {
          const head = this._items.find(x => x === last.parent);
          this._filteredItems.push(head);
        }
        this._filteredItems.push(...matchedItems);
      }
    }
  }
  resetFilteredItems() {
    if (this._filteredItems.length === this._items.length) {
      return;
    }
    if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
      this._filteredItems = this._items.filter(x => !x.selected);
    } else {
      this._filteredItems = this._items;
    }
  }
  unmarkItem() {
    this._markedIndex = -1;
  }
  markNextItem() {
    this._stepToItem(+1);
  }
  markPreviousItem() {
    this._stepToItem(-1);
  }
  markItem(item) {
    this._markedIndex = this._filteredItems.indexOf(item);
  }
  markSelectedOrDefault(markDefault) {
    if (this._filteredItems.length === 0) {
      return;
    }
    const lastMarkedIndex = this._getLastMarkedIndex();
    if (lastMarkedIndex > -1) {
      this._markedIndex = lastMarkedIndex;
    } else {
      this._markedIndex = markDefault ? this.filteredItems.findIndex(x => !x.disabled) : -1;
    }
  }
  resolveNested(option, key) {
    if (!isObject(option)) {
      return option;
    }
    if (key.indexOf('.') === -1) {
      return option[key];
    } else {
      const keys = key.split('.');
      let value = option;
      for (let i = 0, len = keys.length; i < len; ++i) {
        if (value == null) {
          return null;
        }
        value = value[keys[i]];
      }
      return value;
    }
  }
  mapItem(item, index) {
    const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
    const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
    return {
      index,
      label: isDefined(label) ? label.toString() : '',
      value,
      disabled: item.disabled,
      htmlId: `${this._ngSelect.dropdownId}-${index}`
    };
  }
  mapSelectedItems() {
    const multiple = this._ngSelect.multiple;
    for (const selected of this.selectedItems) {
      const value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
      const item = isDefined(value) ? this.findItem(value) : null;
      this._selectionModel.unselect(selected, multiple);
      this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
    }
    if (this._ngSelect.hideSelected) {
      this._filteredItems = this.filteredItems.filter(x => this.selectedItems.indexOf(x) === -1);
    }
  }
  _showSelected(item) {
    this._filteredItems.push(item);
    if (item.parent) {
      const parent = item.parent;
      const parentExists = this._filteredItems.find(x => x === parent);
      if (!parentExists) {
        this._filteredItems.push(parent);
      }
    } else if (item.children) {
      for (const child of item.children) {
        child.selected = false;
        this._filteredItems.push(child);
      }
    }
    this._filteredItems = [...this._filteredItems.sort((a, b) => a.index - b.index)];
  }
  _hideSelected(item) {
    this._filteredItems = this._filteredItems.filter(x => x !== item);
    if (item.parent) {
      const children = item.parent.children;
      if (children.every(x => x.selected)) {
        this._filteredItems = this._filteredItems.filter(x => x !== item.parent);
      }
    } else if (item.children) {
      this._filteredItems = this.filteredItems.filter(x => x.parent !== item);
    }
  }
  _defaultSearchFn(search, opt) {
    const label = stripSpecialChars(opt.label).toLocaleLowerCase();
    return label.indexOf(search) > -1;
  }
  _getNextItemIndex(steps) {
    if (steps > 0) {
      return this._markedIndex >= this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
    }
    return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
  }
  _stepToItem(steps) {
    if (this._filteredItems.length === 0 || this._filteredItems.every(x => x.disabled)) {
      return;
    }
    this._markedIndex = this._getNextItemIndex(steps);
    if (this.markedItem.disabled) {
      this._stepToItem(steps);
    }
  }
  _getLastMarkedIndex() {
    if (this._ngSelect.hideSelected) {
      return -1;
    }
    if (this._markedIndex > -1 && this.markedItem === undefined) {
      return -1;
    }
    const selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
    if (this.lastSelectedItem && selectedIndex < 0) {
      return -1;
    }
    return Math.max(this.markedIndex, selectedIndex);
  }
  _groupBy(items, prop) {
    const groups = new Map();
    if (items.length === 0) {
      return groups;
    }
    // Check if items are already grouped by given key.
    if (Array.isArray(items[0].value[prop])) {
      for (const item of items) {
        const children = (item.value[prop] || []).map((x, index) => this.mapItem(x, index));
        groups.set(item, children);
      }
      return groups;
    }
    const isFnKey = isFunction(this._ngSelect.groupBy);
    const keyFn = item => {
      const key = isFnKey ? prop(item.value) : item.value[prop];
      return isDefined(key) ? key : undefined;
    };
    // Group items by key.
    for (const item of items) {
      const key = keyFn(item);
      const group = groups.get(key);
      if (group) {
        group.push(item);
      } else {
        groups.set(key, [item]);
      }
    }
    return groups;
  }
  _flatten(groups) {
    const isGroupByFn = isFunction(this._ngSelect.groupBy);
    const items = [];
    for (const key of Array.from(groups.keys())) {
      let i = items.length;
      if (key === undefined) {
        const withoutGroup = groups.get(undefined) || [];
        items.push(...withoutGroup.map(x => {
          x.index = i++;
          return x;
        }));
        continue;
      }
      const isObjectKey = isObject(key);
      const parent = {
        label: isObjectKey ? '' : String(key),
        children: undefined,
        parent: null,
        index: i++,
        disabled: !this._ngSelect.selectableGroup,
        htmlId: newId()
      };
      const groupKey = isGroupByFn ? this._ngSelect.bindLabel : this._ngSelect.groupBy;
      const groupValue = this._ngSelect.groupValue || (() => {
        if (isObjectKey) {
          return key.value;
        }
        return {
          [groupKey]: key
        };
      });
      const children = groups.get(key).map(x => {
        x.parent = parent;
        x.children = undefined;
        x.index = i++;
        return x;
      });
      parent.children = children;
      parent.value = groupValue(key, children.map(x => x.value));
      items.push(parent);
      items.push(...children);
    }
    return items;
  }
}
var KeyCode;
(function (KeyCode) {
  KeyCode[KeyCode["Tab"] = 9] = "Tab";
  KeyCode[KeyCode["Enter"] = 13] = "Enter";
  KeyCode[KeyCode["Esc"] = 27] = "Esc";
  KeyCode[KeyCode["Space"] = 32] = "Space";
  KeyCode[KeyCode["ArrowUp"] = 38] = "ArrowUp";
  KeyCode[KeyCode["ArrowDown"] = 40] = "ArrowDown";
  KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
})(KeyCode || (KeyCode = {}));
class NgDropdownPanelService {
  constructor() {
    this._dimensions = {
      itemHeight: 0,
      panelHeight: 0,
      itemsPerViewport: 0
    };
  }
  get dimensions() {
    return this._dimensions;
  }
  calculateItems(scrollPos, itemsLength, buffer) {
    const d = this._dimensions;
    const scrollHeight = d.itemHeight * itemsLength;
    const scrollTop = Math.max(0, scrollPos);
    const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
    let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
    const maxStartEnd = end;
    const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
    let start = Math.min(maxStart, Math.floor(indexByScrollTop));
    let topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
    topPadding = !isNaN(topPadding) ? topPadding : 0;
    start = !isNaN(start) ? start : -1;
    end = !isNaN(end) ? end : -1;
    start -= buffer;
    start = Math.max(0, start);
    end += buffer;
    end = Math.min(itemsLength, end);
    return {
      topPadding,
      scrollHeight,
      start,
      end
    };
  }
  setDimensions(itemHeight, panelHeight) {
    const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
    this._dimensions = {
      itemHeight,
      panelHeight,
      itemsPerViewport
    };
  }
  getScrollTo(itemTop, itemHeight, lastScroll) {
    const {
      panelHeight
    } = this.dimensions;
    const itemBottom = itemTop + itemHeight;
    const top = lastScroll;
    const bottom = top + panelHeight;
    if (panelHeight >= itemBottom && lastScroll === itemTop) {
      return null;
    }
    if (itemBottom > bottom) {
      return top + itemBottom - bottom;
    } else if (itemTop <= top) {
      return itemTop;
    }
    return null;
  }
  static #_ = this.ɵfac = function NgDropdownPanelService_Factory(ɵt) {
    return new (ɵt || NgDropdownPanelService)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NgDropdownPanelService,
    factory: NgDropdownPanelService.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
const CSS_POSITIONS = ['top', 'right', 'bottom', 'left'];
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_1__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_2__.asapScheduler;
class NgDropdownPanelComponent {
  constructor(_renderer, _zone, _panelService, _elementRef, _document) {
    this._renderer = _renderer;
    this._zone = _zone;
    this._panelService = _panelService;
    this._document = _document;
    this.items = [];
    this.position = 'auto';
    this.virtualScroll = false;
    this.filterValue = null;
    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._scrollToEndFired = false;
    this._updateScrollHeight = false;
    this._lastScrollPosition = 0;
    this._dropdown = _elementRef.nativeElement;
  }
  get currentPosition() {
    return this._currentPosition;
  }
  get itemsLength() {
    return this._itemsLength;
  }
  set itemsLength(value) {
    if (value !== this._itemsLength) {
      this._itemsLength = value;
      this._onItemsLengthChanged();
    }
  }
  get _startOffset() {
    if (this.markedItem) {
      const {
        itemHeight,
        panelHeight
      } = this._panelService.dimensions;
      const offset = this.markedItem.index * itemHeight;
      return panelHeight > offset ? 0 : offset;
    }
    return 0;
  }
  ngOnInit() {
    this._select = this._dropdown.parentElement;
    this._virtualPadding = this.paddingElementRef.nativeElement;
    this._scrollablePanel = this.scrollElementRef.nativeElement;
    this._contentPanel = this.contentElementRef.nativeElement;
    this._handleScroll();
    this._handleOutsideClick();
    this._appendDropdown();
    this._setupMousedownListener();
  }
  ngOnChanges(changes) {
    if (changes.items) {
      const change = changes.items;
      this._onItemsChange(change.currentValue, change.firstChange);
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this._destroy$.unsubscribe();
    if (this.appendTo) {
      this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
    }
  }
  scrollTo(option, startFromOption = false) {
    if (!option) {
      return;
    }
    const index = this.items.indexOf(option);
    if (index < 0 || index >= this.itemsLength) {
      return;
    }
    let scrollTo;
    if (this.virtualScroll) {
      const itemHeight = this._panelService.dimensions.itemHeight;
      scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
    } else {
      const item = this._dropdown.querySelector(`#${option.htmlId}`);
      const lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
      scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
    }
    if (isDefined(scrollTo)) {
      this._scrollablePanel.scrollTop = scrollTo;
    }
  }
  scrollToTag() {
    const panel = this._scrollablePanel;
    panel.scrollTop = panel.scrollHeight - panel.clientHeight;
  }
  adjustPosition() {
    this._updateYPosition();
  }
  _handleDropdownPosition() {
    this._currentPosition = this._calculateCurrentPosition(this._dropdown);
    if (CSS_POSITIONS.includes(this._currentPosition)) {
      this._updateDropdownClass(this._currentPosition);
    } else {
      this._updateDropdownClass('bottom');
    }
    if (this.appendTo) {
      this._updateYPosition();
    }
    this._dropdown.style.opacity = '1';
  }
  _updateDropdownClass(currentPosition) {
    CSS_POSITIONS.forEach(position => {
      const REMOVE_CSS_CLASS = `ng-select-${position}`;
      this._renderer.removeClass(this._dropdown, REMOVE_CSS_CLASS);
      this._renderer.removeClass(this._select, REMOVE_CSS_CLASS);
    });
    const ADD_CSS_CLASS = `ng-select-${currentPosition}`;
    this._renderer.addClass(this._dropdown, ADD_CSS_CLASS);
    this._renderer.addClass(this._select, ADD_CSS_CLASS);
  }
  _handleScroll() {
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.scrollElementRef.nativeElement, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(0, SCROLL_SCHEDULER)).subscribe(e => {
        const path = e.path || e.composedPath && e.composedPath();
        if (!path || path.length === 0 && !e.target) {
          return;
        }
        const scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;
        this._onContentScrolled(scrollTop);
      });
    });
  }
  _handleOutsideClick() {
    if (!this._document) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._document, 'touchstart', {
        capture: true
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._document, 'click', {
        capture: true
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe($event => this._checkToClose($event));
    });
  }
  _checkToClose($event) {
    if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
      return;
    }
    const path = $event.path || $event.composedPath && $event.composedPath();
    if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
      return;
    }
    this._zone.run(() => this.outsideClick.emit());
  }
  _onItemsChange(items, firstChange) {
    this.items = items || [];
    this._scrollToEndFired = false;
    this.itemsLength = items.length;
    if (this.virtualScroll) {
      this._updateItemsRange(firstChange);
    } else {
      this._setVirtualHeight();
      this._updateItems(firstChange);
    }
  }
  _updateItems(firstChange) {
    this.update.emit(this.items);
    if (firstChange === false) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        const panelHeight = this._scrollablePanel.clientHeight;
        this._panelService.setDimensions(0, panelHeight);
        this._handleDropdownPosition();
        this.scrollTo(this.markedItem, firstChange);
      });
    });
  }
  _updateItemsRange(firstChange) {
    this._zone.runOutsideAngular(() => {
      this._measureDimensions().then(() => {
        if (firstChange) {
          this._renderItemsRange(this._startOffset);
          this._handleDropdownPosition();
        } else {
          this._renderItemsRange();
        }
      });
    });
  }
  _onContentScrolled(scrollTop) {
    if (this.virtualScroll) {
      this._renderItemsRange(scrollTop);
    }
    this._lastScrollPosition = scrollTop;
    this._fireScrollToEnd(scrollTop);
  }
  _updateVirtualHeight(height) {
    if (this._updateScrollHeight) {
      this._virtualPadding.style.height = `${height}px`;
      this._updateScrollHeight = false;
    }
  }
  _setVirtualHeight() {
    if (!this._virtualPadding) {
      return;
    }
    this._virtualPadding.style.height = `0px`;
  }
  _onItemsLengthChanged() {
    this._updateScrollHeight = true;
  }
  _renderItemsRange(scrollTop = null) {
    if (scrollTop && this._lastScrollPosition === scrollTop) {
      return;
    }
    scrollTop = scrollTop || this._scrollablePanel.scrollTop;
    const range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
    this._updateVirtualHeight(range.scrollHeight);
    this._contentPanel.style.transform = `translateY(${range.topPadding}px)`;
    this._zone.run(() => {
      this.update.emit(this.items.slice(range.start, range.end));
      this.scroll.emit({
        start: range.start,
        end: range.end
      });
    });
    if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
      this._scrollablePanel.scrollTop = scrollTop;
      this._lastScrollPosition = scrollTop;
    }
  }
  _measureDimensions() {
    if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
      return Promise.resolve(this._panelService.dimensions);
    }
    const [first] = this.items;
    this.update.emit([first]);
    return Promise.resolve().then(() => {
      const option = this._dropdown.querySelector(`#${first.htmlId}`);
      const optionHeight = option.clientHeight;
      this._virtualPadding.style.height = `${optionHeight * this.itemsLength}px`;
      const panelHeight = this._scrollablePanel.clientHeight;
      this._panelService.setDimensions(optionHeight, panelHeight);
      return this._panelService.dimensions;
    });
  }
  _fireScrollToEnd(scrollTop) {
    if (this._scrollToEndFired || scrollTop === 0) {
      return;
    }
    const padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;
    if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight - 1) {
      this._zone.run(() => this.scrollToEnd.emit());
      this._scrollToEndFired = true;
    }
  }
  _calculateCurrentPosition(dropdownEl) {
    if (this.position !== 'auto') {
      return this.position;
    }
    const selectRect = this._select.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const offsetTop = selectRect.top + window.pageYOffset;
    const height = selectRect.height;
    const dropdownHeight = dropdownEl.getBoundingClientRect().height;
    if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
      return 'top';
    } else {
      return 'bottom';
    }
  }
  _appendDropdown() {
    if (!this.appendTo) {
      return;
    }
    this._parent = document.querySelector(this.appendTo);
    if (!this._parent) {
      throw new Error(`appendTo selector ${this.appendTo} did not found any parent element`);
    }
    this._updateXPosition();
    this._parent.appendChild(this._dropdown);
  }
  _updateXPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const offsetLeft = select.left - parent.left;
    this._dropdown.style.left = offsetLeft + 'px';
    this._dropdown.style.width = select.width + 'px';
    this._dropdown.style.minWidth = select.width + 'px';
  }
  _updateYPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const delta = select.height;
    if (this._currentPosition === 'top') {
      const offsetBottom = parent.bottom - select.bottom;
      this._dropdown.style.bottom = offsetBottom + delta + 'px';
      this._dropdown.style.top = 'auto';
    } else if (this._currentPosition === 'bottom') {
      const offsetTop = select.top - parent.top;
      this._dropdown.style.top = offsetTop + delta + 'px';
      this._dropdown.style.bottom = 'auto';
    }
  }
  _setupMousedownListener() {
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._dropdown, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(event => {
        const target = event.target;
        if (target.tagName === 'INPUT') {
          return;
        }
        event.preventDefault();
      });
    });
  }
  static #_ = this.ɵfac = function NgDropdownPanelComponent_Factory(ɵt) {
    return new (ɵt || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NgDropdownPanelComponent,
    selectors: [["ng-dropdown-panel"]],
    viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
      }
    },
    inputs: {
      items: "items",
      markedItem: "markedItem",
      position: "position",
      appendTo: "appendTo",
      bufferAmount: "bufferAmount",
      virtualScroll: [2, "virtualScroll", "virtualScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      headerTemplate: "headerTemplate",
      footerTemplate: "footerTemplate",
      filterValue: "filterValue"
    },
    outputs: {
      update: "update",
      scroll: "scroll",
      scrollToEnd: "scrollToEnd",
      outsideClick: "outsideClick"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 6,
    consts: [["scroll", ""], ["padding", ""], ["content", ""], [1, "ng-dropdown-header"], ["role", "listbox", 1, "ng-dropdown-panel-items", "scroll-host"], [1, "ng-dropdown-footer"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function NgDropdownPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgDropdownPanelComponent_Conditional_0_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgDropdownPanelComponent_Conditional_8_Template, 2, 4, "div", 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.headerTemplate ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.footerTemplate ? 8 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      selector: 'ng-dropdown-panel',
      standalone: true,
      template: `
		@if (headerTemplate) {
			<div class="ng-dropdown-header">
				<ng-container [ngTemplateOutlet]="headerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }" />
			</div>
		}
		<div #scroll role="listbox" class="ng-dropdown-panel-items scroll-host">
			<div #padding [class.total-padding]="virtualScroll"></div>
			<div #content [class.scrollable-content]="virtualScroll && items.length">
				<ng-content />
			</div>
		</div>
		@if (footerTemplate) {
			<div class="ng-dropdown-footer">
				<ng-container [ngTemplateOutlet]="footerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }" />
			</div>
		}
	`,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: NgDropdownPanelService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
    }]
  }], {
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    markedItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bufferAmount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scrollToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    outsideClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    contentElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }],
    scrollElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['scroll', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }],
    paddingElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['padding', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }]
  });
})();
class NgOptionComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.disabled = false;
    this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  get label() {
    return (this.elementRef.nativeElement.textContent || '').trim();
  }
  ngOnChanges(changes) {
    if (changes.disabled) {
      this.stateChange$.next({
        value: this.value,
        disabled: this.disabled
      });
    }
  }
  ngAfterViewChecked() {
    if (this.label !== this._previousLabel) {
      this._previousLabel = this.label;
      this.stateChange$.next({
        value: this.value,
        disabled: this.disabled,
        label: this.elementRef.nativeElement.innerHTML
      });
    }
  }
  ngOnDestroy() {
    this.stateChange$.complete();
  }
  static #_ = this.ɵfac = function NgOptionComponent_Factory(ɵt) {
    return new (ɵt || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NgOptionComponent,
    selectors: [["ng-option"]],
    inputs: {
      value: "value",
      disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c3,
    decls: 1,
    vars: 0,
    template: function NgOptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ng-option',
      standalone: true,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `<ng-content />`
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();
function DefaultSelectionModelFactory() {
  return new DefaultSelectionModel();
}
class DefaultSelectionModel {
  constructor() {
    this._selected = [];
  }
  get value() {
    return this._selected;
  }
  select(item, multiple, groupAsModel) {
    item.selected = true;
    if (!item.children || !multiple && groupAsModel) {
      this._selected.push(item);
    }
    if (multiple) {
      if (item.parent) {
        const childrenCount = item.parent.children.length;
        const selectedCount = item.parent.children.filter(x => x.selected).length;
        item.parent.selected = childrenCount === selectedCount;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, true);
        this._removeChildren(item);
        if (groupAsModel && this._activeChildren(item)) {
          this._selected = [...this._selected.filter(x => x.parent !== item), item];
        } else {
          this._selected = [...this._selected, ...item.children.filter(x => !x.disabled)];
        }
      }
    }
  }
  unselect(item, multiple) {
    this._selected = this._selected.filter(x => x !== item);
    item.selected = false;
    if (multiple) {
      if (item.parent && item.parent.selected) {
        const children = item.parent.children;
        this._removeParent(item.parent);
        this._removeChildren(item.parent);
        this._selected.push(...children.filter(x => x !== item && !x.disabled));
        item.parent.selected = false;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, false);
        this._removeChildren(item);
      }
    }
  }
  clear(keepDisabled) {
    this._selected = keepDisabled ? this._selected.filter(x => x.disabled) : [];
  }
  _setChildrenSelectedState(children, selected) {
    for (const child of children) {
      if (child.disabled) {
        continue;
      }
      child.selected = selected;
    }
  }
  _removeChildren(parent) {
    this._selected = [...this._selected.filter(x => x.parent !== parent), ...parent.children.filter(x => x.parent === parent && x.disabled && x.selected)];
  }
  _removeParent(parent) {
    this._selected = this._selected.filter(x => x !== parent);
  }
  _activeChildren(item) {
    return item.children.every(x => !x.disabled || x.selected);
  }
}
class NgSelectConfig {
  constructor() {
    this.fixedPlaceholder = true;
    this.notFoundText = 'No items found';
    this.typeToSearchText = 'Type to search';
    this.addTagText = 'Add item';
    this.loadingText = 'Loading...';
    this.clearAllText = 'Clear all';
    this.disableVirtualScroll = true;
    this.openOnEnter = true;
    this.appearance = 'underline';
  }
  static #_ = this.ɵfac = function NgSelectConfig_Factory(ɵt) {
    return new (ɵt || NgSelectConfig)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NgSelectConfig,
    factory: NgSelectConfig.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class ConsoleService {
  warn(message) {
    console.warn(message);
  }
  static #_ = this.ɵfac = function ConsoleService_Factory(ɵt) {
    return new (ɵt || ConsoleService)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ConsoleService,
    factory: ConsoleService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
const SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ng-select-selection-model');
class NgSelectComponent {
  constructor(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
    this.classes = classes;
    this.autoFocus = autoFocus;
    this.config = config;
    this._cd = _cd;
    this._console = _console;
    this.markFirst = true;
    this.fixedPlaceholder = true;
    this.preventToggleOnRightClick = false;
    this.dropdownPosition = 'auto';
    this.loading = false;
    this.closeOnSelect = true;
    this.hideSelected = false;
    this.selectOnTab = false;
    this.bufferAmount = 4;
    this.selectableGroup = false;
    this.selectableGroupAsModel = true;
    this.searchFn = null;
    this.trackByFn = null;
    this.clearOnBackspace = true;
    this.labelForId = null;
    this.inputAttrs = {};
    this.readonly = false;
    this.searchWhileComposing = true;
    this.minTermLength = 0;
    this.editableSearchTerm = false;
    this.ngClass = null;
    this.multiple = false;
    this.addTag = false;
    this.searchable = true;
    this.clearable = true;
    this.isOpen = false;
    // output events
    this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.useDefaultClass = true;
    this.viewPortItems = [];
    this.searchTerm = null;
    this.dropdownId = newId();
    this.escapeHTML = true;
    this._defaultLabel = 'label';
    this._pressedKeys = [];
    this._isComposing = false;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._items = [];
    this.keyDownFn = _ => true;
    this.clearItem = item => {
      const option = this.selectedItems.find(x => x.value === item);
      this.unselect(option);
    };
    this.trackByOption = (_, item) => {
      if (this.trackByFn) {
        return this.trackByFn(item.value);
      }
      return item;
    };
    this._onChange = _ => {};
    this._onTouched = () => {};
    this._mergeGlobalConfig(config);
    this.itemsList = new ItemsList(this, newSelectionModel ? newSelectionModel() : DefaultSelectionModelFactory());
    this.element = _elementRef.nativeElement;
  }
  get filtered() {
    return !!this.searchTerm && this.searchable || this._isComposing;
  }
  get single() {
    return !this.multiple;
  }
  get items() {
    return this._items;
  }
  set items(value) {
    this._itemsAreUsed = true;
    this._items = value ?? [];
  }
  get disabled() {
    return this.readonly || this._disabled;
  }
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    if (fn !== undefined && fn !== null && !isFunction(fn)) {
      throw Error('`compareWith` must be a function.');
    }
    this._compareWith = fn;
  }
  get clearSearchOnAdd() {
    if (isDefined(this._clearSearchOnAdd)) {
      return this._clearSearchOnAdd;
    } else if (isDefined(this.config.clearSearchOnAdd)) {
      return this.config.clearSearchOnAdd;
    }
    return this.closeOnSelect;
  }
  set clearSearchOnAdd(value) {
    this._clearSearchOnAdd = value;
  }
  get deselectOnClick() {
    if (isDefined(this._deselectOnClick)) {
      return this._deselectOnClick;
    } else if (isDefined(this.config.deselectOnClick)) {
      return this.config.deselectOnClick;
    }
    return this.multiple;
  }
  set deselectOnClick(value) {
    this._deselectOnClick = value;
  }
  get selectedItems() {
    return this.itemsList.selectedItems;
  }
  get selectedValues() {
    return this.selectedItems.map(x => x.value);
  }
  get hasValue() {
    return this.selectedItems.length > 0;
  }
  get currentPanelPosition() {
    if (this.dropdownPanel) {
      return this.dropdownPanel.currentPosition;
    }
    return undefined;
  }
  get showAddTag() {
    if (!this._validTerm) {
      return false;
    }
    const term = this.searchTerm.toLowerCase().trim();
    return this.addTag && !this.itemsList.filteredItems.some(x => x.label.toLowerCase() === term) && (!this.hideSelected && this.isOpen || !this.selectedItems.some(x => x.label.toLowerCase() === term)) && !this.loading;
  }
  get _editableSearchTerm() {
    return this.editableSearchTerm && !this.multiple;
  }
  get _isTypeahead() {
    return this.typeahead && this.typeahead.observers.length > 0;
  }
  get _validTerm() {
    const term = this.searchTerm && this.searchTerm.trim();
    return term && term.length >= this.minTermLength;
  }
  ngOnInit() {
    this._handleKeyPresses();
    this._setInputAttributes();
  }
  ngOnChanges(changes) {
    if (changes.multiple) {
      this.itemsList.clearSelected();
    }
    if (changes.items) {
      this._setItems(changes.items.currentValue || []);
    }
    if (changes.isOpen) {
      this._manualOpen = isDefined(changes.isOpen.currentValue);
    }
  }
  ngAfterViewInit() {
    if (!this._itemsAreUsed) {
      this.escapeHTML = false;
      this._setItemsFromNgOptions();
    }
    if (isDefined(this.autoFocus)) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  handleKeyDown($event) {
    const keyCode = KeyCode[$event.which];
    if (keyCode) {
      if (this.keyDownFn($event) === false) {
        return;
      }
      this.handleKeyCode($event);
    } else if ($event.key && $event.key.length === 1) {
      this._keyPress$.next($event.key.toLocaleLowerCase());
    }
  }
  handleKeyCode($event) {
    const target = $event.target;
    if (this.clearButton && this.clearButton.nativeElement === target) {
      this.handleKeyCodeClear($event);
    } else {
      this.handleKeyCodeInput($event);
    }
  }
  handleKeyCodeInput($event) {
    switch ($event.which) {
      case KeyCode.ArrowDown:
        this._handleArrowDown($event);
        break;
      case KeyCode.ArrowUp:
        this._handleArrowUp($event);
        break;
      case KeyCode.Space:
        this._handleSpace($event);
        break;
      case KeyCode.Enter:
        this._handleEnter($event);
        break;
      case KeyCode.Tab:
        this._handleTab($event);
        break;
      case KeyCode.Esc:
        this.close();
        $event.preventDefault();
        break;
      case KeyCode.Backspace:
        this._handleBackspace();
        break;
    }
  }
  handleKeyCodeClear($event) {
    switch ($event.which) {
      case KeyCode.Enter:
        this.handleClearClick();
        $event.preventDefault();
        break;
    }
  }
  handleMousedown($event) {
    if (this.preventToggleOnRightClick && $event.button === 2) {
      return false;
    }
    const target = $event.target;
    if (target.tagName !== 'INPUT') {
      $event.preventDefault();
    }
    if (target.classList.contains('ng-clear-wrapper')) {
      this.handleClearClick();
      return;
    }
    if (target.classList.contains('ng-arrow-wrapper')) {
      this.handleArrowClick();
      return;
    }
    if (target.classList.contains('ng-value-icon')) {
      return;
    }
    if (!this.focused) {
      this.focus();
    }
    if (this.searchable) {
      this.open();
    } else {
      this.toggle();
    }
  }
  handleArrowClick() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  handleClearClick() {
    if (this.hasValue) {
      this.itemsList.clearSelected(true);
      this._updateNgModel();
    }
    this._clearSearch();
    this.focus();
    this.clearEvent.emit();
    this._onSelectionChanged();
  }
  clearModel() {
    if (!this.clearable) {
      return;
    }
    this.itemsList.clearSelected();
    this._updateNgModel();
  }
  writeValue(value) {
    this.itemsList.clearSelected();
    this._handleWriteValue(value);
    this._cd.markForCheck();
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(state) {
    this._disabled = state;
    this._cd.markForCheck();
  }
  toggle() {
    if (!this.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    if (this.disabled || this.isOpen || this._manualOpen) {
      return;
    }
    if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
      return;
    }
    this.isOpen = true;
    this.itemsList.markSelectedOrDefault(this.markFirst);
    this.openEvent.emit();
    if (!this.searchTerm) {
      this.focus();
    }
    this.detectChanges();
  }
  close() {
    if (!this.isOpen || this._manualOpen) {
      return;
    }
    this.isOpen = false;
    this._isComposing = false;
    if (!this._editableSearchTerm) {
      this._clearSearch();
    } else {
      this.itemsList.resetFilteredItems();
    }
    this.itemsList.unmarkItem();
    this._onTouched();
    this.closeEvent.emit();
    this._cd.markForCheck();
  }
  toggleItem(item) {
    if (!item || item.disabled || this.disabled) {
      return;
    }
    if (this.deselectOnClick && item.selected) {
      this.unselect(item);
    } else {
      this.select(item);
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
  }
  select(item) {
    if (!item.selected) {
      this.itemsList.select(item);
      if (this.clearSearchOnAdd && !this._editableSearchTerm) {
        this._clearSearch();
      }
      this._updateNgModel();
      if (this.multiple) {
        this.addEvent.emit(item.value);
      }
    }
    if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
      this.close();
    }
    this._onSelectionChanged();
  }
  focus() {
    this.searchInput.nativeElement.focus();
  }
  blur() {
    this.searchInput.nativeElement.blur();
  }
  unselect(item) {
    if (!item) {
      return;
    }
    this.itemsList.unselect(item);
    this.focus();
    this._updateNgModel();
    this.removeEvent.emit(item.value);
    this._onSelectionChanged();
  }
  selectTag() {
    let tag;
    if (isFunction(this.addTag)) {
      tag = this.addTag(this.searchTerm);
    } else {
      tag = this._primitive ? this.searchTerm : {
        [this.bindLabel]: this.searchTerm
      };
    }
    const handleTag = item => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item);
    if (isPromise(tag)) {
      tag.then(item => this.select(handleTag(item))).catch(() => {});
    } else if (tag) {
      this.select(handleTag(tag));
    }
  }
  showClear() {
    return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
  }
  focusOnClear() {
    this.blur();
    if (this.clearButton) {
      this.clearButton.nativeElement.focus();
    }
  }
  showNoItemsFound() {
    const empty = this.itemsList.filteredItems.length === 0;
    return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
  }
  showTypeToSearch() {
    const empty = this.itemsList.filteredItems.length === 0;
    return empty && this._isTypeahead && !this._validTerm && !this.loading;
  }
  onCompositionStart() {
    this._isComposing = true;
  }
  onCompositionEnd(term) {
    this._isComposing = false;
    if (this.searchWhileComposing) {
      return;
    }
    this.filter(term);
  }
  filter(term) {
    if (this._isComposing && !this.searchWhileComposing) {
      return;
    }
    this.searchTerm = term;
    if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
      this.typeahead.next(term);
    }
    if (!this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
      if (this.isOpen) {
        this.itemsList.markSelectedOrDefault(this.markFirst);
      }
    }
    this.searchEvent.emit({
      term,
      items: this.itemsList.filteredItems.map(x => x.value)
    });
    this.open();
  }
  onInputFocus($event) {
    if (this.focused) {
      return;
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.element.classList.add('ng-select-focused');
    this.focusEvent.emit($event);
    this.focused = true;
  }
  onInputBlur($event) {
    this.element.classList.remove('ng-select-focused');
    this.blurEvent.emit($event);
    if (!this.isOpen && !this.disabled) {
      this._onTouched();
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.focused = false;
  }
  onItemHover(item) {
    if (item.disabled) {
      return;
    }
    this.itemsList.markItem(item);
  }
  detectChanges() {
    if (!this._cd.destroyed) {
      this._cd.detectChanges();
    }
  }
  _setSearchTermFromItems() {
    const selected = this.selectedItems && this.selectedItems[0];
    this.searchTerm = selected && selected.label || null;
  }
  _setItems(items) {
    const firstItem = items[0];
    this.bindLabel = this.bindLabel || this._defaultLabel;
    this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
    this.itemsList.setItems(items);
    if (items.length > 0 && this.hasValue) {
      this.itemsList.mapSelectedItems();
    }
    if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
    }
    if (this._isTypeahead || this.isOpen) {
      this.itemsList.markSelectedOrDefault(this.markFirst);
    }
  }
  _setItemsFromNgOptions() {
    const mapNgOptions = options => {
      this.items = options.map(option => ({
        $ngOptionValue: option.value,
        $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
        disabled: option.disabled
      }));
      this.itemsList.setItems(this.items);
      if (this.hasValue) {
        this.itemsList.mapSelectedItems();
      }
      this.detectChanges();
    };
    const handleOptionChange = () => {
      const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this.ngOptions.changes, this._destroy$);
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...this.ngOptions.map(option => option.stateChange$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(changedOrDestroyed)).subscribe(option => {
        const item = this.itemsList.findItem(option.value);
        item.disabled = option.disabled;
        item.label = option.label || item.label;
        this._cd.detectChanges();
      });
    };
    this.ngOptions.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.ngOptions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(options => {
      this.bindLabel = this._defaultLabel;
      mapNgOptions(options);
      handleOptionChange();
    });
  }
  _isValidWriteValue(value) {
    if (!isDefined(value) || this.multiple && value === '' || Array.isArray(value) && value.length === 0) {
      return false;
    }
    const validateBinding = item => {
      if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
        this._console.warn(`Setting object(${JSON.stringify(item)}) as your model with bindValue is not allowed unless [compareWith] is used.`);
        return false;
      }
      return true;
    };
    if (this.multiple) {
      if (!Array.isArray(value)) {
        this._console.warn('Multiple select ngModel should be array.');
        return false;
      }
      return value.every(item => validateBinding(item));
    } else {
      return validateBinding(value);
    }
  }
  _handleWriteValue(ngModel) {
    if (!this._isValidWriteValue(ngModel)) {
      return;
    }
    const select = val => {
      let item = this.itemsList.findItem(val);
      if (item) {
        this.itemsList.select(item);
      } else {
        const isValObject = isObject(val);
        const isPrimitive = !isValObject && !this.bindValue;
        if (isValObject || isPrimitive) {
          this.itemsList.select(this.itemsList.mapItem(val, null));
        } else if (this.bindValue) {
          item = {
            [this.bindLabel]: null,
            [this.bindValue]: val
          };
          this.itemsList.select(this.itemsList.mapItem(item, null));
        }
      }
    };
    if (this.multiple) {
      ngModel.forEach(item => select(item));
    } else {
      select(ngModel);
    }
  }
  _handleKeyPresses() {
    if (this.searchable) {
      return;
    }
    this._keyPress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(letter => this._pressedKeys.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(() => this._pressedKeys.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(() => this._pressedKeys.join(''))).subscribe(term => {
      const item = this.itemsList.findByLabel(term);
      if (item) {
        if (this.isOpen) {
          this.itemsList.markItem(item);
          this._scrollToMarked();
          this._cd.markForCheck();
        } else {
          this.select(item);
        }
      }
      this._pressedKeys = [];
    });
  }
  _setInputAttributes() {
    const input = this.searchInput.nativeElement;
    const attributes = {
      type: 'text',
      autocorrect: 'off',
      autocapitalize: 'off',
      autocomplete: this.labelForId ? 'off' : this.dropdownId,
      ...this.inputAttrs
    };
    for (const key of Object.keys(attributes)) {
      input.setAttribute(key, attributes[key]);
    }
  }
  _updateNgModel() {
    const model = [];
    for (const item of this.selectedItems) {
      if (this.bindValue) {
        let value = null;
        if (item.children) {
          const groupKey = this.groupValue ? this.bindValue : this.groupBy;
          value = item.value[groupKey || this.groupBy];
        } else {
          value = this.itemsList.resolveNested(item.value, this.bindValue);
        }
        model.push(value);
      } else {
        model.push(item.value);
      }
    }
    const selected = this.selectedItems.map(x => x.value);
    if (this.multiple) {
      this._onChange(model);
      this.changeEvent.emit(selected);
    } else {
      this._onChange(isDefined(model[0]) ? model[0] : null);
      this.changeEvent.emit(selected[0]);
    }
    this._cd.markForCheck();
  }
  _clearSearch() {
    if (!this.searchTerm) {
      return;
    }
    this._changeSearch(null);
    this.itemsList.resetFilteredItems();
  }
  _changeSearch(searchTerm) {
    this.searchTerm = searchTerm;
    if (this._isTypeahead) {
      this.typeahead.next(searchTerm);
    }
  }
  _scrollToMarked() {
    if (!this.isOpen || !this.dropdownPanel) {
      return;
    }
    this.dropdownPanel.scrollTo(this.itemsList.markedItem);
  }
  _scrollToTag() {
    if (!this.isOpen || !this.dropdownPanel) {
      return;
    }
    this.dropdownPanel.scrollToTag();
  }
  _onSelectionChanged() {
    if (this.isOpen && this.deselectOnClick && this.appendTo) {
      // Make sure items are rendered.
      this._cd.detectChanges();
      this.dropdownPanel.adjustPosition();
    }
  }
  _handleTab($event) {
    if (this.isOpen === false) {
      if (this.showClear() && !$event.shiftKey) {
        this.focusOnClear();
        $event.preventDefault();
      } else if (!this.addTag) {
        return;
      }
    }
    if (this.selectOnTab) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
        $event.preventDefault();
      } else if (this.showAddTag) {
        this.selectTag();
        $event.preventDefault();
      } else {
        this.close();
      }
    } else {
      this.close();
    }
  }
  _handleEnter($event) {
    if (this.isOpen || this._manualOpen) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
      } else if (this.showAddTag) {
        this.selectTag();
      }
    } else if (this.openOnEnter) {
      this.open();
    } else {
      return;
    }
    $event.preventDefault();
  }
  _handleSpace($event) {
    if (this.isOpen || this._manualOpen) {
      return;
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowDown($event) {
    if (this._nextItemIsTag(+1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markNextItem();
      this._scrollToMarked();
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowUp($event) {
    if (!this.isOpen) {
      return;
    }
    if (this._nextItemIsTag(-1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markPreviousItem();
      this._scrollToMarked();
    }
    $event.preventDefault();
  }
  _nextItemIsTag(nextStep) {
    const nextIndex = this.itemsList.markedIndex + nextStep;
    return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
  }
  _handleBackspace() {
    if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
      return;
    }
    if (this.multiple) {
      this.unselect(this.itemsList.lastSelectedItem);
    } else {
      this.clearModel();
    }
  }
  _mergeGlobalConfig(config) {
    this.placeholder = this.placeholder || config.placeholder;
    this.fixedPlaceholder = this.fixedPlaceholder || config.fixedPlaceholder;
    this.notFoundText = this.notFoundText || config.notFoundText;
    this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
    this.addTagText = this.addTagText || config.addTagText;
    this.loadingText = this.loadingText || config.loadingText;
    this.clearAllText = this.clearAllText || config.clearAllText;
    this.virtualScroll = isDefined(this.virtualScroll) ? this.virtualScroll : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
    this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
    this.appendTo = this.appendTo || config.appendTo;
    this.bindValue = this.bindValue || config.bindValue;
    this.bindLabel = this.bindLabel || config.bindLabel;
    this.appearance = this.appearance || config.appearance;
  }
  static #_ = this.ɵfac = function NgSelectComponent_Factory(ɵt) {
    return new (ɵt || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConsoleService));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NgSelectComponent,
    selectors: [["ng-select"]],
    contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPlaceholderTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.placeholderTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
      }
    },
    viewQuery: function NgSelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgDropdownPanelComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.clearButton = _t.first);
      }
    },
    hostVars: 20,
    hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
          return ctx.handleKeyDown($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-typeahead", ctx.typeahead)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select", ctx.useDefaultClass)("ng-select-filtered", ctx.filtered)("ng-select-single", ctx.single)("ng-select-disabled", ctx.disabled);
      }
    },
    inputs: {
      bindLabel: "bindLabel",
      bindValue: "bindValue",
      ariaLabel: "ariaLabel",
      markFirst: [2, "markFirst", "markFirst", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      placeholder: "placeholder",
      fixedPlaceholder: "fixedPlaceholder",
      notFoundText: "notFoundText",
      typeToSearchText: "typeToSearchText",
      preventToggleOnRightClick: "preventToggleOnRightClick",
      addTagText: "addTagText",
      loadingText: "loadingText",
      clearAllText: "clearAllText",
      appearance: "appearance",
      dropdownPosition: "dropdownPosition",
      appendTo: "appendTo",
      loading: [2, "loading", "loading", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      closeOnSelect: [2, "closeOnSelect", "closeOnSelect", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      hideSelected: [2, "hideSelected", "hideSelected", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      selectOnTab: [2, "selectOnTab", "selectOnTab", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      openOnEnter: [2, "openOnEnter", "openOnEnter", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      maxSelectedItems: [2, "maxSelectedItems", "maxSelectedItems", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      groupBy: "groupBy",
      groupValue: "groupValue",
      bufferAmount: [2, "bufferAmount", "bufferAmount", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      selectableGroup: [2, "selectableGroup", "selectableGroup", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      selectableGroupAsModel: [2, "selectableGroupAsModel", "selectableGroupAsModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      searchFn: "searchFn",
      trackByFn: "trackByFn",
      clearOnBackspace: [2, "clearOnBackspace", "clearOnBackspace", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      labelForId: "labelForId",
      inputAttrs: "inputAttrs",
      tabIndex: [2, "tabIndex", "tabIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      readonly: [2, "readonly", "readonly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      searchWhileComposing: [2, "searchWhileComposing", "searchWhileComposing", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      minTermLength: [2, "minTermLength", "minTermLength", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      editableSearchTerm: [2, "editableSearchTerm", "editableSearchTerm", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      ngClass: "ngClass",
      typeahead: "typeahead",
      multiple: [2, "multiple", "multiple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      addTag: "addTag",
      searchable: [2, "searchable", "searchable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      clearable: [2, "clearable", "clearable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      isOpen: "isOpen",
      items: "items",
      compareWith: "compareWith",
      clearSearchOnAdd: "clearSearchOnAdd",
      deselectOnClick: "deselectOnClick",
      keyDownFn: "keyDownFn"
    },
    outputs: {
      blurEvent: "blur",
      focusEvent: "focus",
      changeEvent: "change",
      openEvent: "open",
      closeEvent: "close",
      searchEvent: "search",
      clearEvent: "clear",
      addEvent: "add",
      removeEvent: "remove",
      scroll: "scroll",
      scrollToEnd: "scrollToEnd"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgSelectComponent),
      multi: true
    }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 19,
    consts: [["searchInput", ""], ["defaultPlaceholderTemplate", ""], ["defaultLabelTemplate", ""], ["defaultLoadingSpinnerTemplate", ""], ["clearButton", ""], ["defaultOptionTemplate", ""], ["defaultTagTemplate", ""], ["defaultNotFoundTemplate", ""], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""], [1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-input"], ["aria-autocomplete", "list", "role", "combobox", 3, "blur", "change", "compositionend", "compositionstart", "focus", "input", "disabled", "readOnly", "value"], ["role", "button", "tabindex", "0", 1, "ng-clear-wrapper", 3, "title"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["role", "listbox", "aria-label", "Options list", 1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id"], [3, "ngTemplateOutlet"], [1, "ng-placeholder"], [1, "ng-value", 3, "ng-value-disabled"], [1, "ng-value"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], [1, "ng-spinner-loader"], ["aria-hidden", "true", 1, "ng-clear"], ["role", "listbox", "aria-label", "Options list", 1, "ng-dropdown-panel", 3, "update", "scroll", "scrollToEnd", "outsideClick", "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id"], [1, "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked"], ["role", "option", 1, "ng-option", 3, "ng-option-marked"], [1, "ng-option", 3, "click", "mouseover"], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], [1, "ng-tag-label"], [1, "ng-option", "ng-option-disabled"]],
    template: function NgSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.handleMousedown($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgSelectComponent_Conditional_2_Template, 3, 1)(3, NgSelectComponent_Conditional_3_Template, 2, 0)(4, NgSelectComponent_Conditional_4_Template, 1, 5, null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13)(6, "input", 14, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NgSelectComponent_Template_input_blur_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputBlur($event));
        })("change", function NgSelectComponent_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
        })("compositionend", function NgSelectComponent_Template_input_compositionend_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const searchInput_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onCompositionEnd(searchInput_r7.value));
        })("compositionstart", function NgSelectComponent_Template_input_compositionstart_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onCompositionStart());
        })("focus", function NgSelectComponent_Template_input_focus_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputFocus($event));
        })("input", function NgSelectComponent_Template_input_input_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const searchInput_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.filter(searchInput_r7.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgSelectComponent_Conditional_8_Template, 3, 1)(9, NgSelectComponent_Conditional_9_Template, 4, 1, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgSelectComponent_Conditional_12_Template, 8, 17, "ng-dropdown-panel", 18);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.selectedItems.length === 0 && !ctx.searchTerm || ctx.fixedPlaceholder === true ? 2 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((!ctx.multiLabelTemplate || !ctx.multiple) && ctx.selectedItems.length > 0 ? 3 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.multiple && ctx.multiLabelTemplate && ctx.selectedValues.length > 0 ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("value", ctx.searchTerm ? ctx.searchTerm : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen ? ctx.dropdownId : null)("aria-expanded", ctx.isOpen)("aria-label", ctx.ariaLabel)("id", ctx.labelForId)("tabindex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.loading ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.showClear() ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.isOpen ? 12 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass],
    styles: ["@charset \"UTF-8\";.ng-select{position:relative;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:unset;user-select:unset;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ng-select',
      standalone: true,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgSelectComponent),
        multi: true
      }, NgDropdownPanelService],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass],
      template: "<div\n\t(mousedown)=\"handleMousedown($event)\"\n\t[class.ng-appearance-outline]=\"appearance === 'outline'\"\n\t[class.ng-has-value]=\"hasValue\"\n\tclass=\"ng-select-container\">\n\t<div class=\"ng-value-container\">\n\t\t@if ((selectedItems.length === 0 && !searchTerm) || fixedPlaceholder === true) {\n\t\t\t<ng-template #defaultPlaceholderTemplate>\n\t\t\t\t<div class=\"ng-placeholder\">{{ placeholder }}</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template [ngTemplateOutlet]=\"placeholderTemplate || defaultPlaceholderTemplate\"> </ng-template>\n\t\t}\n\n\t\t@if ((!multiLabelTemplate || !multiple) && selectedItems.length > 0) {\n\t\t\t@for (item of selectedItems; track trackByOption($index, item)) {\n\t\t\t\t<div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\">\n\t\t\t\t\t<ng-template #defaultLabelTemplate>\n\t\t\t\t\t\t<span class=\"ng-value-icon left\" (click)=\"unselect(item)\" aria-hidden=\"true\">\u00D7</span>\n\t\t\t\t\t\t<span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template\n\t\t\t\t\t\t[ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n\t\t\t\t\t\t[ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t}\n\t\t}\n\n\t\t@if (multiple && multiLabelTemplate && selectedValues.length > 0) {\n\t\t\t<ng-template [ngTemplateOutlet]=\"multiLabelTemplate\" [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n\t\t\t</ng-template>\n\t\t}\n\n\t\t<div class=\"ng-input\">\n\t\t\t<input\n\t\t\t\t#searchInput\n\t\t\t\t(blur)=\"onInputBlur($event)\"\n\t\t\t\t(change)=\"$event.stopPropagation()\"\n\t\t\t\t(compositionend)=\"onCompositionEnd(searchInput.value)\"\n\t\t\t\t(compositionstart)=\"onCompositionStart()\"\n\t\t\t\t(focus)=\"onInputFocus($event)\"\n\t\t\t\t(input)=\"filter(searchInput.value)\"\n\t\t\t\t[attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\"\n\t\t\t\t[attr.aria-controls]=\"isOpen ? dropdownId : null\"\n\t\t\t\t[attr.aria-expanded]=\"isOpen\"\n\t\t\t\t[attr.aria-label]=\"ariaLabel\"\n\t\t\t\t[attr.id]=\"labelForId\"\n\t\t\t\t[attr.tabindex]=\"tabIndex\"\n\t\t\t\t[disabled]=\"disabled\"\n\t\t\t\t[readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n\t\t\t\t[value]=\"searchTerm ? searchTerm : ''\"\n\t\t\t\taria-autocomplete=\"list\"\n\t\t\t\trole=\"combobox\" />\n\t\t</div>\n\t</div>\n\n\t@if (loading) {\n\t\t<ng-template #defaultLoadingSpinnerTemplate>\n\t\t\t<div class=\"ng-spinner-loader\"></div>\n\t\t</ng-template>\n\t\t<ng-template [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\"></ng-template>\n\t}\n\n\t@if (showClear()) {\n\t\t<span class=\"ng-clear-wrapper\" role=\"button\" tabindex=\"0\" title=\"{{ clearAllText }}\" #clearButton>\n\t\t\t<span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n\t\t</span>\n\t}\n\n\t<span class=\"ng-arrow-wrapper\">\n\t\t<span class=\"ng-arrow\"></span>\n\t</span>\n</div>\n\n@if (isOpen) {\n\t<ng-dropdown-panel\n\t\tclass=\"ng-dropdown-panel\"\n\t\t[virtualScroll]=\"virtualScroll\"\n\t\t[bufferAmount]=\"bufferAmount\"\n\t\t[appendTo]=\"appendTo\"\n\t\t[position]=\"dropdownPosition\"\n\t\t[headerTemplate]=\"headerTemplate\"\n\t\t[footerTemplate]=\"footerTemplate\"\n\t\t[filterValue]=\"searchTerm\"\n\t\t[items]=\"itemsList.filteredItems\"\n\t\t[markedItem]=\"itemsList.markedItem\"\n\t\t(update)=\"viewPortItems = $event\"\n\t\t(scroll)=\"scroll.emit($event)\"\n\t\t(scrollToEnd)=\"scrollToEnd.emit($event)\"\n\t\t(outsideClick)=\"close()\"\n\t\t[class.ng-select-multiple]=\"multiple\"\n\t\t[ngClass]=\"appendTo ? (ngClass ? ngClass : classes) : null\"\n\t\t[id]=\"dropdownId\"\n\t\trole=\"listbox\"\n\t\taria-label=\"Options list\">\n\t\t<ng-container>\n\t\t\t@for (item of viewPortItems; track trackByOption($index, item)) {\n\t\t\t\t<div\n\t\t\t\t\tclass=\"ng-option\"\n\t\t\t\t\t[attr.role]=\"item.children ? 'group' : 'option'\"\n\t\t\t\t\t(click)=\"toggleItem(item)\"\n\t\t\t\t\t(mouseover)=\"onItemHover(item)\"\n\t\t\t\t\t[class.ng-option-disabled]=\"item.disabled\"\n\t\t\t\t\t[class.ng-option-selected]=\"item.selected\"\n\t\t\t\t\t[class.ng-optgroup]=\"item.children\"\n\t\t\t\t\t[class.ng-option]=\"!item.children\"\n\t\t\t\t\t[class.ng-option-child]=\"!!item.parent\"\n\t\t\t\t\t[class.ng-option-marked]=\"item === itemsList.markedItem\"\n\t\t\t\t\t[attr.aria-selected]=\"item.selected\"\n\t\t\t\t\t[attr.id]=\"item?.htmlId\">\n\t\t\t\t\t<ng-template #defaultOptionTemplate>\n\t\t\t\t\t\t<span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template\n\t\t\t\t\t\t[ngTemplateOutlet]=\"\n\t\t\t\t\t\t\titem.children ? optgroupTemplate || defaultOptionTemplate : optionTemplate || defaultOptionTemplate\n\t\t\t\t\t\t\"\n\t\t\t\t\t\t[ngTemplateOutletContext]=\"{ item: item.value, item$: item, index: item.index, searchTerm: searchTerm }\">\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t}\n\t\t\t@if (showAddTag) {\n\t\t\t\t<div\n\t\t\t\t\tclass=\"ng-option\"\n\t\t\t\t\t[class.ng-option-marked]=\"!itemsList.markedItem\"\n\t\t\t\t\t(mouseover)=\"itemsList.unmarkItem()\"\n\t\t\t\t\trole=\"option\"\n\t\t\t\t\t(click)=\"selectTag()\">\n\t\t\t\t\t<ng-template #defaultTagTemplate>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t><span class=\"ng-tag-label\">{{ addTagText }}</span\n\t\t\t\t\t\t\t>\"{{ searchTerm }}\"</span\n\t\t\t\t\t\t>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template\n\t\t\t\t\t\t[ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n\t\t\t\t\t\t[ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t}\n\t\t</ng-container>\n\t\t@if (showNoItemsFound()) {\n\t\t\t<ng-template #defaultNotFoundTemplate>\n\t\t\t\t<div class=\"ng-option ng-option-disabled\">{{ notFoundText }}</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template\n\t\t\t\t[ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n\t\t\t\t[ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n\t\t\t</ng-template>\n\t\t}\n\t\t@if (showTypeToSearch()) {\n\t\t\t<ng-template #defaultTypeToSearchTemplate>\n\t\t\t\t<div class=\"ng-option ng-option-disabled\">{{ typeToSearchText }}</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\"></ng-template>\n\t\t}\n\t\t@if (loading && itemsList.filteredItems.length === 0) {\n\t\t\t<ng-template #defaultLoadingTextTemplate>\n\t\t\t\t<div class=\"ng-option ng-option-disabled\">{{ loadingText }}</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template\n\t\t\t\t[ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n\t\t\t\t[ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n\t\t\t</ng-template>\n\t\t}\n\t</ng-dropdown-panel>\n}\n",
      styles: ["@charset \"UTF-8\";.ng-select{position:relative;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:unset;user-select:unset;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
      args: ['class']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
      args: ['autofocus']
    }]
  }, {
    type: NgSelectConfig
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [SELECTION_MODEL_FACTORY]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: ConsoleService
  }], {
    bindLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bindValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    markFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fixedPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    notFoundText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    typeToSearchText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preventToggleOnRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    addTagText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearAllText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    closeOnSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    hideSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectOnTab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    openOnEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    maxSelectedItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    groupBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bufferAmount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectableGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectableGroupAsModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    searchFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackByFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearOnBackspace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    labelForId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputAttrs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    searchWhileComposing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    minTermLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    editableSearchTerm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    ngClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    typeahead: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-typeahead']
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-multiple']
    }],
    addTag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-taggable']
    }],
    searchable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-searchable']
    }],
    clearable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-clearable']
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-opened']
    }],
    blurEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['blur']
    }],
    focusEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['focus']
    }],
    changeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['change']
    }],
    openEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['open']
    }],
    closeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['close']
    }],
    searchEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['search']
    }],
    clearEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['clear']
    }],
    addEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['add']
    }],
    removeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['remove']
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['scroll']
    }],
    scrollToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['scrollToEnd']
    }],
    optionTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgOptionTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    optgroupTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgOptgroupTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    labelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgLabelTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    multiLabelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgMultiLabelTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgHeaderTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgFooterTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    notFoundTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgNotFoundTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    placeholderTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgPlaceholderTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    typeToSearchTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgTypeToSearchTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    loadingTextTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgLoadingTextTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    tagTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgTagTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    loadingSpinnerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgLoadingSpinnerTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    dropdownPanel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgDropdownPanelComponent)]
    }],
    searchInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['searchInput', {
        static: true
      }]
    }],
    clearButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['clearButton']
    }],
    ngOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgOptionComponent, {
        descendants: true
      }]
    }],
    useDefaultClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select']
    }],
    filtered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-filtered']
    }],
    single: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-single']
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-disabled']
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearSearchOnAdd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    deselectOnClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyDownFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    handleKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class NgSelectModule {
  static #_ = this.ɵfac = function NgSelectModule_Factory(ɵt) {
    return new (ɵt || NgSelectModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NgSelectModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [{
      provide: SELECTION_MODEL_FACTORY,
      useValue: DefaultSelectionModelFactory
    }]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
      exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective],
      providers: [{
        provide: SELECTION_MODEL_FACTORY,
        useValue: DefaultSelectionModelFactory
      }]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ng-select
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7575:
/*!***********************************************************!*\
  !*** ./node_modules/ngx-avatars/fesm2022/ngx-avatars.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvatarComponent: () => (/* binding */ AvatarComponent),
/* harmony export */   AvatarModule: () => (/* binding */ AvatarModule),
/* harmony export */   AvatarService: () => (/* binding */ AvatarService),
/* harmony export */   AvatarSource: () => (/* binding */ AvatarSource),
/* harmony export */   defaultColors: () => (/* binding */ defaultColors),
/* harmony export */   defaultDisableSrcCache: () => (/* binding */ defaultDisableSrcCache),
/* harmony export */   defaultSources: () => (/* binding */ defaultSources)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-md5 */ 6466);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1249);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 436);









/**
 * Contract of all async sources.
 * Every async source must implement the processResponse method that extracts the avatar url from the data
 */
function AvatarComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function AvatarComponent_img_1_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.fetchAvatarSource());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.avatarSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r2.customAlt ? ctx_r2.customAlt : ctx_r2.avatarAlt)("width", ctx_r2.size)("height", ctx_r2.size)("ngStyle", ctx_r2.avatarStyle)("referrerPolicy", ctx_r2.referrerpolicy);
  }
}
function AvatarComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r2.avatarStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.avatarText, " ");
  }
}
function AvatarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AvatarComponent_ng_template_2_div_0_Template, 2, 2, "div", 4);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.avatarText);
  }
}
class AsyncSource {
  constructor(sourceId) {
    this.sourceId = sourceId;
  }
}
var AvatarSource;
(function (AvatarSource) {
  AvatarSource["FACEBOOK"] = "facebook";
  AvatarSource["GOOGLE"] = "google";
  AvatarSource["TWITTER"] = "twitter";
  AvatarSource["INSTAGRAM"] = "instagram";
  AvatarSource["VKONTAKTE"] = "vkontakte";
  AvatarSource["SKYPE"] = "skype";
  AvatarSource["GRAVATAR"] = "gravatar";
  AvatarSource["GITHUB"] = "github";
  AvatarSource["CUSTOM"] = "custom";
  AvatarSource["INITIALS"] = "initials";
  AvatarSource["VALUE"] = "value";
})(AvatarSource || (AvatarSource = {}));

/**
 *  Facebook source implementation.
 *  Fetch avatar source based on facebook identifier
 *  and image size
 */
class Facebook {
  constructor(sourceId) {
    this.sourceId = sourceId;
    this.sourceType = AvatarSource.FACEBOOK;
  }
  getAvatar(size) {
    return 'https://graph.facebook.com/' + `${this.sourceId}/picture?width=${size}&height=${size}`;
  }
}

/**
 *  Twitter source implementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
class Twitter {
  constructor(sourceId) {
    this.sourceId = sourceId;
    this.sourceType = AvatarSource.TWITTER;
  }
  getAvatar(size) {
    const twitterImgSize = this.getImageSize(size);
    return `https://twitter.com/${this.sourceId}/profile_image?size=${twitterImgSize}`;
  }
  getImageSize(size) {
    if (size <= 24) {
      return 'mini';
    }
    if (size <= 48) {
      return 'normal';
    }
    if (size <= 73) {
      return 'bigger';
    }
    return 'original';
  }
}

/**
 *  Google source implementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
class Google extends AsyncSource {
  constructor(sourceId) {
    super(sourceId);
    this.sourceType = AvatarSource.GOOGLE;
  }
  getAvatar() {
    return `https://picasaweb.google.com/data/entry/api/user/${this.sourceId}?alt=json`;
  }
  /**
   * Extract google avatar from json data
   */
  processResponse(data, size) {
    const avatarSrc = data.entry.gphoto$thumbnail.$t;
    if (avatarSrc) {
      return avatarSrc.replace('s64', 's' + size);
    }
    return null;
  }
}

/**
 *  Instagram source implementation.
 *  Fetch avatar source based on instagram identifier
 */
class Instagram extends AsyncSource {
  constructor(sourceId) {
    super(sourceId);
    this.sourceType = AvatarSource.INSTAGRAM;
  }
  getAvatar() {
    return `https://www.instagram.com/${this.sourceId}/?__a=1`;
  }
  /**
   * extract instagram avatar from json data
   */
  processResponse(data, size) {
    return `${data.graphql.user.profile_pic_url_hd}&s=${size}`;
  }
}

/**
 *  Custom source implementation.
 *  return custom image as an avatar
 *
 */
class Custom {
  constructor(sourceId) {
    this.sourceId = sourceId;
    this.sourceType = AvatarSource.CUSTOM;
  }
  getAvatar() {
    return this.sourceId;
  }
}

/**
 * Initials source implementation.
 * return the initials of the given value
 */
class Initials {
  constructor(sourceId) {
    this.sourceId = sourceId;
    this.sourceType = AvatarSource.INITIALS;
  }
  getAvatar(size) {
    return this.getInitials(this.sourceId, size);
  }
  /**
   * Returns the initial letters of a name in a string.
   */
  getInitials(name, size) {
    name = name.trim();
    if (!name) {
      return '';
    }
    const initials = name.split(' ');
    if (size && size < initials.length) {
      return this.constructInitials(initials.slice(0, size));
    } else {
      return this.constructInitials(initials);
    }
  }
  /**
   * Iterates a person's name string to get the initials of each word in uppercase.
   */
  constructInitials(elements) {
    if (!elements || !elements.length) {
      return '';
    }
    return elements.filter(element => element && element.length > 0).map(element => element[0].toUpperCase()).join('');
  }
}
function isRetina() {
  if (typeof window !== 'undefined' && window !== null) {
    if (window.devicePixelRatio > 1.25) {
      return true;
    }
    const mediaQuery = '(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)';
    if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
      return true;
    }
  }
  return false;
}
/**
 *  Gravatar source implementation.
 *  Fetch avatar source based on gravatar email
 */
class Gravatar {
  constructor(value) {
    this.value = value;
    this.sourceType = AvatarSource.GRAVATAR;
    this.sourceId = value.match('^[a-f0-9]{32}$') ? value : ts_md5__WEBPACK_IMPORTED_MODULE_0__.Md5.hashStr(value).toString();
  }
  getAvatar(size) {
    const avatarSize = isRetina() ? size * 2 : size;
    return `https://secure.gravatar.com/avatar/${this.sourceId}?s=${avatarSize}&d=404`;
  }
}

/**
 *  Skype source implementation.
 *  Fetch avatar source based on skype identifier
 */
class Skype {
  constructor(sourceId) {
    this.sourceId = sourceId;
    this.sourceType = AvatarSource.SKYPE;
  }
  getAvatar() {
    return `https://api.skype.com/users/${this.sourceId}/profile/avatar`;
  }
}

/**
 *  Value source implementation.
 *  return the value as avatar
 */
class Value {
  constructor(sourceId) {
    this.sourceId = sourceId;
    this.sourceType = AvatarSource.VALUE;
  }
  getAvatar() {
    return this.sourceId;
  }
}

/**
 *  Vkontakte source implementation.
 *  Fetch avatar source based on vkontakte identifier
 *  and image size
 */
const apiVersion = 5.8;
class Vkontakte extends AsyncSource {
  constructor(sourceId) {
    super(sourceId);
    this.sourceType = AvatarSource.VKONTAKTE;
  }
  getAvatar(size) {
    const imgSize = this.getImageSize(size);
    return `https://api.vk.com/method/users.get?user_id=${this.sourceId}&v=${apiVersion}&fields=${imgSize}`;
  }
  /**
   * extract vkontakte avatar from json data
   */
  processResponse(data) {
    // avatar key property is the size used to generate avatar url
    // size property is always the last key in the response object
    const sizeProperty = Object.keys(data['response'][0]).pop();
    if (!sizeProperty) {
      return null;
    }
    // return avatar src
    return data['response'][0][sizeProperty] || null;
  }
  /**
   * Returns image size related to vkontakte API
   */
  getImageSize(size) {
    if (size <= 50) {
      return 'photo_50';
    }
    if (size <= 100) {
      return 'photo_100';
    }
    if (size <= 200) {
      return 'photo_200';
    }
    return 'photo_max';
  }
}

/**
 *  GitHub source implementation.
 *  Fetch avatar source based on github identifier
 */
class Github extends AsyncSource {
  constructor(sourceId) {
    super(sourceId);
    this.sourceType = AvatarSource.GITHUB;
  }
  getAvatar() {
    return `https://api.github.com/users/${this.sourceId}`;
  }
  /**
   * extract github avatar from json data
   */
  processResponse(data, size) {
    if (size) {
      return `${data.avatar_url}&s=${size}`;
    }
    return data.avatar_url;
  }
}

/**
 * Token used to inject the AvatarConfig object
 */
const AVATAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('avatar.config');
class AvatarConfigService {
  constructor(userConfig) {
    this.userConfig = userConfig;
  }
  getAvatarSources(defaultSources) {
    if (this.userConfig && this.userConfig.sourcePriorityOrder && this.userConfig.sourcePriorityOrder.length) {
      const uniqueSources = [...new Set(this.userConfig.sourcePriorityOrder)];
      const validSources = uniqueSources.filter(source => defaultSources.includes(source));
      return [...validSources, ...defaultSources.filter(source => !validSources.includes(source))];
    }
    return defaultSources;
  }
  getAvatarColors(defaultColors) {
    return this.userConfig && this.userConfig.colors && this.userConfig.colors.length && this.userConfig.colors || defaultColors;
  }
  getDisableSrcCache(defaultDisableSrcCache) {
    if (this.userConfig == null || this.userConfig.disableSrcCache == null) {
      return defaultDisableSrcCache;
    } else {
      return this.userConfig.disableSrcCache;
    }
  }
  static #_ = this.ɵfac = function AvatarConfigService_Factory(ɵt) {
    return new (ɵt || AvatarConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](AVATAR_CONFIG, 8));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AvatarConfigService,
    factory: AvatarConfigService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AvatarConfigService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [AVATAR_CONFIG]
    }]
  }], null);
})();

/**
 * list of Supported avatar sources
 */
const defaultSources = [AvatarSource.FACEBOOK, AvatarSource.GOOGLE, AvatarSource.TWITTER, AvatarSource.INSTAGRAM, AvatarSource.VKONTAKTE, AvatarSource.SKYPE, AvatarSource.GRAVATAR, AvatarSource.GITHUB, AvatarSource.CUSTOM, AvatarSource.INITIALS, AvatarSource.VALUE];
/**
 * list of default colors
 */
const defaultColors = ['#1abc9c', '#3498db', '#f1c40f', '#8e44ad', '#e74c3c', '#d35400', '#2c3e50', '#7f8c8d'];
/**
 * Default disable custom source cache settings
 */
const defaultDisableSrcCache = false;
/**
 * Provides utilities methods related to Avatar component
 */
class AvatarService {
  constructor(http, avatarConfigService) {
    this.http = http;
    this.avatarConfigService = avatarConfigService;
    this.avatarSources = defaultSources;
    this.avatarColors = defaultColors;
    this.failedSources = new Map();
    this.overrideAvatarSources();
    this.overrideAvatarColors();
  }
  fetchAvatar(avatarUrl) {
    return this.http.get(avatarUrl);
  }
  getRandomColor(avatarText) {
    if (!avatarText) {
      return 'transparent';
    }
    const asciiCodeSum = this.calculateAsciiCode(avatarText);
    return this.avatarColors[asciiCodeSum % this.avatarColors.length];
  }
  compareSources(sourceType1, sourceType2) {
    return this.getSourcePriority(sourceType1) - this.getSourcePriority(sourceType2);
  }
  isSource(source) {
    return this.avatarSources.includes(source);
  }
  isTextAvatar(sourceType) {
    return [AvatarSource.INITIALS, AvatarSource.VALUE].includes(sourceType);
  }
  buildSourceKey(source) {
    return source.sourceType + '-' + source.sourceId;
  }
  sourceHasFailedBefore(source) {
    return this.failedSources.has(this.buildSourceKey(source));
  }
  markSourceAsFailed(source) {
    this.failedSources.set(this.buildSourceKey(source), source);
  }
  overrideAvatarSources() {
    this.avatarSources = this.avatarConfigService.getAvatarSources(defaultSources);
  }
  overrideAvatarColors() {
    this.avatarColors = this.avatarConfigService.getAvatarColors(defaultColors);
  }
  calculateAsciiCode(value) {
    return value.split('').map(letter => letter.charCodeAt(0)).reduce((previous, current) => previous + current);
  }
  getSourcePriority(sourceType) {
    return this.avatarSources.indexOf(sourceType);
  }
  static #_ = this.ɵfac = function AvatarService_Factory(ɵt) {
    return new (ɵt || AvatarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](AvatarConfigService));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AvatarService,
    factory: AvatarService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AvatarService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }, {
    type: AvatarConfigService
  }], null);
})();

/**
 *  Custom source implementation (with no cache).
 *  return custom image as an avatar
 *
 */
class CustomNoCache {
  constructor(sourceId) {
    this.sourceId = sourceId;
    this.sourceType = AvatarSource.CUSTOM;
  }
  getAvatar() {
    const urlSuffix = Math.random();
    return `${this.sourceId}${this.sourceId.indexOf('?') > -1 ? '&' : '?'}_=${urlSuffix}`;
  }
}

/**
 * Factory class that implements factory method pattern.
 * Used to create Source implementation class based
 * on the source Type
 */
class SourceFactory {
  constructor(avatarConfigService) {
    this.sources = {};
    const disableSrcCache = avatarConfigService.getDisableSrcCache(defaultDisableSrcCache);
    this.sources[AvatarSource.FACEBOOK] = Facebook;
    this.sources[AvatarSource.TWITTER] = Twitter;
    this.sources[AvatarSource.GOOGLE] = Google;
    this.sources[AvatarSource.INSTAGRAM] = Instagram;
    this.sources[AvatarSource.SKYPE] = Skype;
    this.sources[AvatarSource.GRAVATAR] = Gravatar;
    this.sources[AvatarSource.CUSTOM] = disableSrcCache ? CustomNoCache : Custom;
    this.sources[AvatarSource.INITIALS] = Initials;
    this.sources[AvatarSource.VALUE] = Value;
    this.sources[AvatarSource.VKONTAKTE] = Vkontakte;
    this.sources[AvatarSource.GITHUB] = Github;
  }
  newInstance(sourceType, sourceValue) {
    return new this.sources[sourceType](sourceValue);
  }
  static #_ = this.ɵfac = function SourceFactory_Factory(ɵt) {
    return new (ɵt || SourceFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](AvatarConfigService));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SourceFactory,
    factory: SourceFactory.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: AvatarConfigService
  }], null);
})();

/**
 * Universal avatar component that
 * generates avatar from different sources
 *
 * export
 * class AvatarComponent
 * implements {OnChanges}
 */
class AvatarComponent {
  constructor(sourceFactory, avatarService, sanitizer) {
    this.sourceFactory = sourceFactory;
    this.avatarService = avatarService;
    this.sanitizer = sanitizer;
    this.round = true;
    this.size = 50;
    this.textSizeRatio = 3;
    this.fgColor = '#FFF';
    this.style = {};
    this.cornerRadius = 0;
    this.initialsSize = 0;
    this.clickOnAvatar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isAlive = true;
    this.avatarSrc = null;
    this.avatarAlt = null;
    this.avatarText = null;
    this.avatarStyle = {};
    this.hostStyle = {};
    this.currentIndex = -1;
    this.sources = [];
  }
  onAvatarClicked() {
    this.clickOnAvatar.emit(this.sources[this.currentIndex]);
  }
  /**
   * Detect inputs change
   *
   * param {{ [propKey: string]: SimpleChange }} changes
   *
   * memberof AvatarComponent
   */
  ngOnChanges(changes) {
    for (const propName in changes) {
      if (this.avatarService.isSource(propName)) {
        const sourceType = AvatarSource[propName.toUpperCase()];
        const currentValue = changes[propName].currentValue;
        if (currentValue && typeof currentValue === 'string') {
          this.addSource(sourceType, currentValue);
        } else {
          const sanitized = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.URL, currentValue);
          if (sanitized) {
            this.addSource(sourceType, sanitized);
          } else {
            this.removeSource(sourceType);
          }
        }
      }
    }
    // reinitialize the avatar component when a source property value has changed
    // the fallback system must be re-invoked with the new values.
    this.initializeAvatar();
  }
  /**
   * Fetch avatar source
   *
   * memberOf AvatarComponent
   */
  fetchAvatarSource() {
    const previousSource = this.sources[this.currentIndex];
    if (previousSource) {
      this.avatarService.markSourceAsFailed(previousSource);
    }
    const source = this.findNextSource();
    if (!source) {
      return;
    }
    if (this.avatarService.isTextAvatar(source.sourceType)) {
      this.buildTextAvatar(source);
      this.avatarSrc = null;
    } else {
      this.buildImageAvatar(source);
    }
  }
  findNextSource() {
    while (++this.currentIndex < this.sources.length) {
      const source = this.sources[this.currentIndex];
      if (source && !this.avatarService.sourceHasFailedBefore(source)) {
        return source;
      }
    }
    return null;
  }
  ngOnDestroy() {
    this.isAlive = false;
  }
  /**
   * Initialize the avatar component and its fallback system
   */
  initializeAvatar() {
    this.currentIndex = -1;
    if (this.sources.length > 0) {
      this.sortAvatarSources();
      this.fetchAvatarSource();
      this.hostStyle = {
        width: this.size + 'px',
        height: this.size + 'px'
      };
    }
  }
  sortAvatarSources() {
    this.sources.sort((source1, source2) => this.avatarService.compareSources(source1.sourceType, source2.sourceType));
  }
  buildTextAvatar(avatarSource) {
    this.avatarText = avatarSource.getAvatar(+this.initialsSize);
    this.avatarStyle = this.getInitialsStyle(avatarSource.sourceId);
  }
  buildImageAvatar(avatarSource) {
    this.avatarStyle = this.getImageStyle();
    if (avatarSource instanceof AsyncSource) {
      this.fetchAndProcessAsyncAvatar(avatarSource);
    } else {
      this.avatarSrc = this.sanitizer.bypassSecurityTrustUrl(avatarSource.getAvatar(+this.size));
      this.avatarAlt = avatarSource.getAvatar(+this.size);
    }
  }
  /**
   *
   * returns initials style
   *
   * memberOf AvatarComponent
   */
  getInitialsStyle(avatarValue) {
    return {
      textAlign: 'center',
      borderRadius: this.round ? '100%' : this.cornerRadius + 'px',
      border: this.borderColor ? '1px solid ' + this.borderColor : '',
      textTransform: 'uppercase',
      color: this.fgColor,
      backgroundColor: this.bgColor ? this.bgColor : this.avatarService.getRandomColor(avatarValue),
      font: Math.floor(+this.size / this.textSizeRatio) + 'px Helvetica, Arial, sans-serif',
      lineHeight: this.size + 'px',
      ...this.style
    };
  }
  /**
   *
   * returns image style
   *
   * memberOf AvatarComponent
   */
  getImageStyle() {
    return {
      maxWidth: '100%',
      borderRadius: this.round ? '50%' : this.cornerRadius + 'px',
      border: this.borderColor ? '1px solid ' + this.borderColor : '',
      width: this.size + 'px',
      height: this.size + 'px',
      ...this.style
    };
  }
  /**
   * Fetch avatar image asynchronously.
   *
   * param {Source} source represents avatar source
   * memberof AvatarComponent
   */
  fetchAndProcessAsyncAvatar(source) {
    if (this.avatarService.sourceHasFailedBefore(source)) {
      return;
    }
    this.avatarService.fetchAvatar(source.getAvatar(+this.size)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeWhile)(() => this.isAlive), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => source.processResponse(response, +this.size))).subscribe({
      next: avatarSrc => this.avatarSrc = avatarSrc,
      error: () => {
        this.fetchAvatarSource();
      }
    });
  }
  /**
   * Add avatar source
   *
   * param sourceType avatar source type e.g facebook,twitter, etc.
   * param sourceValue  source value e.g facebookId value, etc.
   */
  addSource(sourceType, sourceValue) {
    const source = this.sources.find(s => s.sourceType === sourceType);
    if (source) {
      source.sourceId = sourceValue;
    } else {
      this.sources.push(this.sourceFactory.newInstance(sourceType, sourceValue));
    }
  }
  /**
   * Remove avatar source
   *
   * param sourceType avatar source type e.g facebook,twitter, etc.
   */
  removeSource(sourceType) {
    this.sources = this.sources.filter(source => source.sourceType !== sourceType);
  }
  static #_ = this.ɵfac = function AvatarComponent_Factory(ɵt) {
    return new (ɵt || AvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SourceFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AvatarComponent,
    selectors: [["ngx-avatars"]],
    inputs: {
      round: "round",
      size: "size",
      textSizeRatio: "textSizeRatio",
      bgColor: "bgColor",
      fgColor: "fgColor",
      borderColor: "borderColor",
      style: "style",
      cornerRadius: "cornerRadius",
      facebook: [0, "facebookId", "facebook"],
      twitter: [0, "twitterId", "twitter"],
      google: [0, "googleId", "google"],
      instagram: [0, "instagramId", "instagram"],
      vkontakte: [0, "vkontakteId", "vkontakte"],
      skype: [0, "skypeId", "skype"],
      gravatar: [0, "gravatarId", "gravatar"],
      github: [0, "githubId", "github"],
      custom: [0, "src", "custom"],
      customAlt: [0, "alt", "customAlt"],
      initials: [0, "name", "initials"],
      value: "value",
      referrerpolicy: "referrerpolicy",
      placeholder: "placeholder",
      initialsSize: "initialsSize"
    },
    outputs: {
      clickOnAvatar: "clickOnAvatar"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 4,
    vars: 3,
    consts: [["textAvatar", ""], [1, "avatar-container", 3, "click", "ngStyle"], ["class", "avatar-content", "loading", "lazy", 3, "src", "alt", "width", "height", "ngStyle", "referrerPolicy", "error", 4, "ngIf", "ngIfElse"], ["loading", "lazy", 1, "avatar-content", 3, "error", "src", "alt", "width", "height", "ngStyle", "referrerPolicy"], ["class", "avatar-content", 3, "ngStyle", 4, "ngIf"], [1, "avatar-content", 3, "ngStyle"]],
    template: function AvatarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AvatarComponent_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onAvatarClicked());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AvatarComponent_img_1_Template, 1, 6, "img", 2)(2, AvatarComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const textAvatar_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.hostStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.avatarSrc)("ngIfElse", textAvatar_r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle],
    styles: ["[_nghost-%COMP%]{border-radius:50%}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AvatarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ngx-avatars',
      template: `
      <div
              (click)="onAvatarClicked()"
              class="avatar-container"
              [ngStyle]="hostStyle"
      >
          <img
                  *ngIf="avatarSrc; else textAvatar"
                  [src]="avatarSrc"
                  [alt]="(customAlt)? customAlt: avatarAlt"
                  [width]="size"
                  [height]="size"
                  [ngStyle]="avatarStyle"
                  [referrerPolicy]="referrerpolicy"
                  (error)="fetchAvatarSource()"
                  class="avatar-content"
                  loading="lazy"
          />
          <ng-template #textAvatar>
              <div *ngIf="avatarText" class="avatar-content" [ngStyle]="avatarStyle">
                  {{ avatarText }}
              </div>
          </ng-template>
      </div>
  `,
      styles: [":host{border-radius:50%}\n"]
    }]
  }], () => [{
    type: SourceFactory
  }, {
    type: AvatarService
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer
  }], {
    round: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    textSizeRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    bgColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    fgColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    borderColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    cornerRadius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    facebook: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['facebookId']
    }],
    twitter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['twitterId']
    }],
    google: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['googleId']
    }],
    instagram: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['instagramId']
    }],
    vkontakte: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['vkontakteId']
    }],
    skype: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['skypeId']
    }],
    gravatar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['gravatarId']
    }],
    github: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['githubId']
    }],
    custom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['src']
    }],
    customAlt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['alt']
    }],
    initials: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['name']
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    referrerpolicy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    initialsSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    clickOnAvatar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class AvatarModule {
  static forRoot(avatarConfig) {
    return {
      ngModule: AvatarModule,
      providers: [{
        provide: AVATAR_CONFIG,
        useValue: avatarConfig ? avatarConfig : {}
      }]
    };
  }
  static #_ = this.ɵfac = function AvatarModule_Factory(ɵt) {
    return new (ɵt || AvatarModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AvatarModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [SourceFactory, AvatarService, AvatarConfigService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AvatarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
      declarations: [AvatarComponent],
      providers: [SourceFactory, AvatarService, AvatarConfigService],
      exports: [AvatarComponent]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-avatars
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_features_dashboard_dashboard_component_ts.js.map