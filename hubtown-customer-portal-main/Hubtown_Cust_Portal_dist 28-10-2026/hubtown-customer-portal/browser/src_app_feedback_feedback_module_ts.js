"use strict";
(self["webpackChunkhubtown_customer_portal"] = self["webpackChunkhubtown_customer_portal"] || []).push([["src_app_feedback_feedback_module_ts"],{

/***/ 9547:
/*!******************************************************************************!*\
  !*** ./src/app/feedback/components/feedback-form/feedback-form.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackFormComponent: () => (/* binding */ FeedbackFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feedback.service */ 6116);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var src_app_shared_components_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/toast.service */ 1253);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/auth.service */ 5498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);












function FeedbackFormComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r1 == null ? null : option_r1.booking == null ? null : option_r1.booking.building);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r1 == null ? null : option_r1.booking == null ? null : option_r1.booking.building, " ");
  }
}
function FeedbackFormComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r2 == null ? null : option_r2.infId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r2 == null ? null : option_r2.infDesc, " ");
  }
}
function FeedbackFormComponent_small_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Message is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FeedbackFormComponent_small_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Message must be at least 10 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class FeedbackFormComponent {
  fb;
  feedbackService;
  router;
  location;
  feedbackForm;
  buildingName = [];
  feedbackInfo = [];
  submitted = false;
  isLoading = false;
  isSuccess = false;
  modalMessage = false;
  isBuildingDropdown = false;
  isInfoDropdown = false;
  logout = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  toastService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_shared_components_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService);
  authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService);
  timeRemaining = 5; // Start from 5 seconds
  timerInterval;
  constructor(fb, feedbackService, router, location) {
    this.fb = fb;
    this.feedbackService = feedbackService;
    this.router = router;
    this.location = location;
  }
  ngOnInit() {
    this.initForm();
    this.preFillForm();
    this.getFeedbackInfo();
    if (this.buildingName.length > 0) {
      this.feedbackForm.patchValue({
        unitNo: this.buildingName[0]?.booking?.unit,
        crmPerson: this.buildingName[0]?.booking?.rmName
      });
    }
    // this.getListOfFeedback();
  }
  // handleNavigation() {
  //   if (this.isSuccess === true) {
  //     this.startTimer();
  //   }
  // }
  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
      } else {
        clearInterval(this.timerInterval);
        this.authService.logout();
        this.router.navigate(['auth']);
      }
    }, 1000); // Update every second
  }
  // Initialize the Reactive Form
  initForm() {
    this.feedbackForm = this.fb.group({
      name: [{
        value: '',
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      selectedProject: [{
        value: '',
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      unitNo: [{
        value: '',
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      crmPerson: [{
        value: '',
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      informationRequired: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10)]]
    });
  }
  // handle for get feedback list
  getListOfFeedback() {
    const formData = this.feedbackForm.getRawValue();
    const payload = {
      buildingName: formData?.selectedProject,
      unitNo: formData?.unitNo,
      customerName: formData?.name
    };
    this.feedbackService.getFeedbackList(payload).subscribe({
      next: response => {
        console.log({
          response
        });
        if (response?.Success) {
          // this.isSuccess = true;
          // this.handleNavigation();
        }
      },
      error: error => {
        console.log(error);
      }
    });
  }
  // handle unit data onChange of building
  onBuildingSelectionChange(event) {
    const selectedBuilding = event.target.value;
    console.log({
      selectedBuilding
    });
    const matchedBuilding = this.buildingName.find(building => building?.booking?.building === selectedBuilding);
    if (matchedBuilding) {
      console.log({
        matchedBuilding
      });
      this.feedbackForm.patchValue({
        unitNo: matchedBuilding?.booking?.unit
      });
    } else {
      this.feedbackForm.patchValue({
        unitNo: ''
      });
    }
  }
  // handle for prefilled form data
  preFillForm() {
    const userDataString = localStorage.getItem('userInfo');
    const projectDataString = localStorage.getItem('userProjects');
    const currentProject = localStorage.getItem('userSelectedProject');
    if (userDataString) {
      try {
        const parsedUserData = JSON.parse(userDataString);
        this.feedbackForm.patchValue({
          name: parsedUserData.name || '',
          message: parsedUserData.message || ''
        });
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
    if (projectDataString) {
      try {
        // const parsedProjectData = JSON.parse(projectDataString);
        const parsedProjectData = [JSON.parse(currentProject)];
        if (Array.isArray(parsedProjectData) && parsedProjectData.length > 0) {
          this.buildingName = parsedProjectData;
          this.feedbackForm.patchValue({
            selectedProject: parsedProjectData[0]?.booking?.building || ''
          });
        } else {
          console.warn('No valid project data found');
        }
      } catch (error) {
        console.error('Error parsing project data:', error);
      }
    }
  }
  // Handle Form Submission of feedback form
  handleSubmit() {
    console.log(this.feedbackForm.valid);
    if (this.feedbackForm.valid) {
      this.isLoading = true;
      const formData = this.feedbackForm.getRawValue();
      console.log({
        formData
      });
      const payload = {
        buildingName: formData?.selectedProject,
        unitNo: formData?.unitNo,
        infId: formData?.informationRequired,
        customerName: formData?.name,
        comments: formData?.message,
        Source: 'F'
      };
      console.log({
        payload
      });
      this.feedbackService.submitFeedback(payload).subscribe({
        next: response => {
          this.isLoading = false;
          // this.isSuccess = true;
          this.feedbackForm.patchValue({
            name: formData.name
          });
          // this.handleNavigation();
          if (response?.Success === true) {
            this.toastService.triggerToast('Success',
            // response?.Message || 'Feedback submitted successfully',
            'Feedback submitted successfully', 'success');
            setTimeout(() => {
              this.goBack();
            }, 1000);
          } else {
            this.toastService.triggerToast('Error', response?.Message || 'An error occurred. Please try again.', 'error');
          }
        },
        error: error => {
          this.isLoading = false;
          // this.isSuccess = false;
          this.toastService.triggerToast('Error', 'Failed to submit feedback. Please try again.', 'error');
          console.error('Error saving data', error);
        }
      });
    } else {
      console.log('Form is invalid:', this.feedbackForm.errors);
      this.feedbackForm.markAllAsTouched(); // Highlight invalid fields
    }
  }
  // handle for get information data
  getFeedbackInfo() {
    this.feedbackService.feedbackInformation().subscribe({
      next: response => {
        console.log({
          response
        });
        this.feedbackInfo = response?.Data || []; // Ensure it is initialized
        if (this.feedbackInfo.length > 0) {
          this.feedbackForm.patchValue({
            informationRequired: this.feedbackInfo[0]?.infId
          });
        }
      },
      error: error => {
        console.log('Error fetching feedback info:', error);
      }
    });
  }
  // toggle for dropdown icon handle
  toggleDropdown(dropdown) {
    if (dropdown === 'building') {
      this.isBuildingDropdown = !this.isBuildingDropdown;
    } else if (dropdown === 'info') {
      this.isInfoDropdown = !this.isInfoDropdown;
    }
  }
  closeDropdown(dropdown) {
    if (dropdown === 'building') {
      this.isBuildingDropdown = false;
    } else if (dropdown === 'info') {
      this.isInfoDropdown = false;
    }
  }
  onLogoutClick() {
    this.logout.emit();
  }
  goBack() {
    this.location.back();
  }
  static ɵfac = function FeedbackFormComponent_Factory(ɵt) {
    return new (ɵt || FeedbackFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_feedback_service__WEBPACK_IMPORTED_MODULE_0__.FeedbackService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FeedbackFormComponent,
    selectors: [["app-feedback-form"]],
    outputs: {
      logout: "logout"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 50,
    vars: 10,
    consts: [[1, "form-box"], [1, "form-wrapper"], [1, "back", 2, "display", "flex", "justify-content", "flex-start", "cursor", "pointer", 3, "click"], ["src", "images/left-arrow.svg", 2, "height", "15px", "width", "15px", "margin-top", "5px"], [3, "ngSubmit", "formGroup"], [1, "form-header-bar"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], ["type", "text", "formControlName", "name", "placeholder", "Enter your name", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "unitNo", "placeholder", "Unit number will be auto-filled", "readonly", "", 1, "form-control"], [1, "form-group", "full-width"], ["formControlName", "selectedProject", 1, "form-control", 3, "click", "blur", "change"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "dropdown-img"], ["src", "images/dropdown-icon.png", "alt", "dropdown-icon"], ["type", "text", "formControlName", "crmPerson", "placeholder", "Enter the CRM person", 1, "form-control"], [1, "form-group", "position-relative"], ["formControlName", "informationRequired", 1, "form-control", 3, "click", "blur"], ["formControlName", "message", "placeholder", "Enter your message", "rows", "4", 1, "form-control", 2, "background-color", "rgba(255, 255, 130, 0.281)"], ["style", "color: red", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-warning"], [3, "value"], [2, "color", "red"]],
    template: function FeedbackFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeedbackFormComponent_Template_div_click_2_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function FeedbackFormComponent_Template_form_ngSubmit_6_listener() {
          return ctx.handleSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7)(16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Unit No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 11)(20, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Building Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeedbackFormComponent_Template_select_click_22_listener() {
          return ctx.toggleDropdown("building");
        })("blur", function FeedbackFormComponent_Template_select_blur_22_listener() {
          return ctx.closeDropdown("building");
        })("change", function FeedbackFormComponent_Template_select_change_22_listener($event) {
          return ctx.onBuildingSelectionChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Select a project");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, FeedbackFormComponent_option_25_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 7)(29, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "CRM Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 18)(33, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Information Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeedbackFormComponent_Template_select_click_35_listener() {
          return ctx.toggleDropdown("info");
        })("blur", function FeedbackFormComponent_Template_select_blur_35_listener() {
          return ctx.closeDropdown("info");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Select a info");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, FeedbackFormComponent_option_38_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 11)(42, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, FeedbackFormComponent_small_45_Template, 2, 0, "small", 21)(46, FeedbackFormComponent_small_46_Template, 2, 0, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 11)(48, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.feedbackForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.buildingName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("rotate", ctx.isBuildingDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.feedbackInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("rotate", ctx.isInfoDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.feedbackForm.get("message")) == null ? null : tmp_5_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.feedbackForm.get("message")) == null ? null : tmp_6_0.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Submitting" : "Submit", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".form-box[_ngcontent-%COMP%] {\n  width: 100% !important;\n  padding: 0;\n  margin: 0;\n}\n\n.form-wrapper[_ngcontent-%COMP%] {\n  width: 140%;\n  padding: 1rem;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n  position: relative;\n  left: 75%;\n  bottom: 35px ;\n  transform: translateX(-50%);\n}\n\nh3[_ngcontent-%COMP%] {\n  color: rgba(67, 67, 67, 0.831);\n  text-align: center;\n  font-weight: 600;\n  margin-bottom: 2rem;\n}\n\nh3[_ngcontent-%COMP%]::after {\n  content: '';\n  display: block;\n  width: 60px;\n  height: 3px;\n  background: #ffcc00;\n  margin: 8px auto 0;\n  border-radius: 2px;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem; \n\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: 45px;\n  padding: 10px;\n  font-size: 14px;\n  width: 100%;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 12px;\n}\n\n.dropdown-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 65%;\n  transform: translateY(-50%);\n  transition: transform 0.2s ease;\n}\n\n.dropdown-img[_ngcontent-%COMP%]   img.rotate[_ngcontent-%COMP%] {\n  transform: translateY(-50%) rotate(180deg);\n}\n\n.timer-container[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-align: center;\n  margin-top: 30px;\n  font-weight: bold;\n}\n\n\n\n.form-header-bar[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n  text-align: center;\n}\n\n\n\n.logout-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: #dc3545;\n  border: none;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 600;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #dc3545;\n}\n\n.back[_ngcontent-%COMP%]:hover{\n  color: #ffcc00;\n}\n\n.back[_ngcontent-%COMP%]{\n  margin-bottom: -3rem;\n  margin-top: 1rem;\n}\n\n\n\n\n@media (max-width: 768px) {\n  .form-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100vh;\n    left: 0;\n    transform: none;\n    position: absolute;\n    box-shadow: none;\n  }\n\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .full-width[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n\n@media (min-width: 1440px) {\n  .form-wrapper[_ngcontent-%COMP%] {\n    width: 160%; \n\n    left: 380px;\n    transform: translateX(-50%);\n    bottom: 35px;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    height: 45px;\n    padding: 10px;\n    font-size: 16px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVlZGJhY2svY29tcG9uZW50cy9mZWVkYmFjay1mb3JtL2ZlZWRiYWNrLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTLEVBQUUsZ0JBQWdCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUEsZUFBZTtBQUNmO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7OztBQUdBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixPQUFPO0lBQ1AsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVyxFQUFFLHlDQUF5QztJQUN0RCxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0VBQ2pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ib3gge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5mb3JtLXdyYXBwZXIge1xuICB3aWR0aDogMTQwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA3NSU7XG4gIGJvdHRvbTogMzVweCA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuaDMge1xuICBjb2xvcjogcmdiYSg2NywgNjcsIDY3LCAwLjgzMSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuaDM6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6ICNmZmNjMDA7XG4gIG1hcmdpbjogOHB4IGF1dG8gMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uZm9ybS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAxcmVtOyAvKiBSZWR1Y2VkIGdhcCAqL1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4uZHJvcGRvd24taW1nIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG59XG5cbi5kcm9wZG93bi1pbWcgaW1nLnJvdGF0ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKTtcbn1cblxuLnRpbWVyLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogSGVhZGVyIEJhciAqL1xuLmZvcm0taGVhZGVyLWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBMb2dvdXQgQnV0dG9uIC0gdG9wIHJpZ2h0ICovXG4ubG9nb3V0LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xufVxuXG4ubG9nb3V0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLmJhY2s6aG92ZXJ7XG4gIGNvbG9yOiAjZmZjYzAwO1xufVxuXG4uYmFja3tcbiAgbWFyZ2luLWJvdHRvbTogLTNyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cblxuLyogTW9iaWxlIFJlc3BvbnNpdmUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9ybS13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLmZvcm0tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuZnVsbC13aWR0aCB7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIC5mb3JtLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxNjAlOyAvKiBub3QgMjAwJSwgYmV0dGVyIGZvciBsYXJnZSB2aWV3cG9ydHMgKi9cbiAgICBsZWZ0OiAzODBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYm90dG9tOiAzNXB4O1xuICB9XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3131:
/*!********************************************************************************!*\
  !*** ./src/app/feedback/components/feedback-login/feedback-login.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackLoginComponent: () => (/* binding */ FeedbackLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);




function FeedbackLoginComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FeedbackLoginComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.inputError());
  }
}
class FeedbackLoginComponent {
  formDataChange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
  isLoading = false; // Default value
  // // Computed signal to represent the form data
  formData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    if (this.isFormValid()) {
      return {
        emailId: this.isEmail() ? this.value() : '',
        mobileNumber: this.isMobile() ? this.value() : ''
      };
    }
    return null;
  });
  value = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(''); // Holds the value of the input field
  isEmailInput = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(true);
  // Function to determine if the input is an email
  isEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.value());
  }
  // Function to detect if input is a valid mobile number
  isMobile() {
    const mobileRegex = /^[0-9]{10,15}$/; // Adjust based on region
    return mobileRegex.test(this.value());
  }
  // Validate input and return error message if invalid
  inputError() {
    if (this.value() === '') return null;
    if (this.isEmailInput()) {
      return this.isEmail() ? null : 'Please enter a valid email address';
    }
    return this.isMobile() ? null : 'Please enter a valid mobile number';
  }
  // Handle the input field changes
  onInputChange(event) {
    this.value.set(event.target.value);
    // Check if it's an email or mobile and update isEmailInput signal
    if (this.value().includes('@') || /[a-zA-Z]/.test(this.value())) {
      this.isEmailInput.set(true);
    } else {
      this.isEmailInput.set(false);
    }
  }
  // Check if the form is valid (input is either a valid email or mobile number)
  isFormValid() {
    return this.isEmailInput() && this.isEmail() || !this.isEmailInput() && this.isMobile();
    // return this.isEmail() || this.isMobile();
  }
  onEnterPress(event) {
    event.preventDefault();
    this.handleSendOtpClick();
  }
  // Handle sending OTP
  handleSendOtpClick() {
    if (this.isFormValid()) {
      this.formDataChange.emit({
        emailID: this.isEmail() ? this.value() : '',
        mobileNumber: this.isMobile() ? this.value() : ''
      });
    }
  }
  static ɵfac = function FeedbackLoginComponent_Factory(ɵt) {
    return new (ɵt || FeedbackLoginComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FeedbackLoginComponent,
    selectors: [["app-feedback-login"]],
    inputs: {
      isLoading: "isLoading"
    },
    outputs: {
      formDataChange: "formDataChange"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 9,
    consts: [[1, "form-box"], [1, "text-gray"], [1, "form-group", "mb-32"], ["class", "text-center d-flex flex-column align-items-center", 4, "ngIf"], [1, "form-label"], [1, "form-control", 3, "input", "keydown.enter", "type", "value", "placeholder"], ["class", "text-danger", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], [1, "text-center", "d-flex", "flex-column", "align-items-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "text-danger"]],
    template: function FeedbackLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log in to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome back! Please enter your details.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form")(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FeedbackLoginComponent_div_7_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FeedbackLoginComponent_Template_input_input_10_listener($event) {
          return ctx.onInputChange($event);
        })("keydown.enter", function FeedbackLoginComponent_Template_input_keydown_enter_10_listener($event) {
          return ctx.onEnterPress($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FeedbackLoginComponent_div_11_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackLoginComponent_Template_button_click_12_listener() {
          return ctx.handleSendOtpClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value() == "" ? "Email / Mobile Number" : ctx.isEmailInput() ? "Email" : "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "Enter your ", ctx.isEmailInput() ? "email" : "mobile Number", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.value() == "" ? "tel" : ctx.isEmailInput() ? "email" : "tel")("value", ctx.value());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputError());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isFormValid());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Sending" : "Send OTP", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2475:
/*!****************************************************************************!*\
  !*** ./src/app/feedback/components/feedback-otp/feedback-otp.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackOtpComponent: () => (/* binding */ FeedbackOtpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);






const _c0 = () => ({
  standalone: true
});
function FeedbackOtpComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FeedbackOtpComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small")(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("in ", ctx_r0.minutes(), ":", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx_r0.seconds(), "2.0"), "");
  }
}
function FeedbackOtpComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackOtpComponent_Conditional_30_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.handleResendOtpClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class FeedbackOtpComponent {
  otp = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(Array(6).fill(''));
  otpChange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
  emailId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
  mobileNumber = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
  showOtp = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
  showOtpChange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
  resendOtp = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
  isLoading = false;
  // Define signals for timer
  minutes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(0);
  seconds = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(34);
  isResendAllowed = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
  interval;
  ngOnInit() {
    this.startTimer();
  }
  ngOnDestroy() {
    this.clearTimer();
  }
  handleBackClick() {
    this.showOtpChange.emit(false);
  }
  // Method to handle input events
  onInput(event, index) {
    const input = event.target;
    const value = input.value;
    // Update the OTP array
    this.otp.set([...this.otp().slice(0, index), value, ...this.otp().slice(index + 1)]);
    // Automatically move focus to the next input
    if (index < 5 && value) {
      document.querySelectorAll('.otp-input')[index + 1].focus();
    }
    // Validate OTP if all fields are filled
    // if (this.otp().every(digit => digit.length === 1)) {
    //   this.handleOtpSubmit();
    // }
  }
  // Method to handle OTP submission
  handleOtpSubmit() {
    const otpValue = this.otp().join('');
    this.otpChange.emit(otpValue);
    // console.log('Entered OTP:', otpValue);
    // Add logic to handle OTP submission, e.g., send to server
  }
  startTimer() {
    this.interval = setInterval(() => {
      const currentSeconds = this.seconds();
      const currentMinutes = this.minutes();
      if (currentSeconds > 0) {
        this.seconds.set(currentSeconds - 1);
      } else {
        if (currentMinutes > 0) {
          this.minutes.set(currentMinutes - 1);
          this.seconds.set(59);
        } else {
          this.clearTimer();
          this.isResendAllowed.set(true); // Show Resend OTP link
        }
      }
    }, 1000);
  }
  clearTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  handleResendOtpClick() {
    // Handle OTP resend logic
    this.resendOtp.emit(true);
    console.log('OTP resent');
    this.otp.set(Array(6).fill(''));
    // Reset timer and hide the resend link
    this.minutes.set(2);
    this.seconds.set(34);
    this.isResendAllowed.set(false);
    this.startTimer(); // Restart timer
  }
  static ɵfac = function FeedbackOtpComponent_Factory(ɵt) {
    return new (ɵt || FeedbackOtpComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FeedbackOtpComponent,
    selectors: [["app-feedback-otp"]],
    inputs: {
      emailId: [1, "emailId"],
      mobileNumber: [1, "mobileNumber"],
      showOtp: [1, "showOtp"],
      isLoading: "isLoading"
    },
    outputs: {
      otpChange: "otpChange",
      showOtpChange: "showOtpChange",
      resendOtp: "resendOtp"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 33,
    vars: 22,
    consts: [[1, "form-box"], [1, "back", "cursor-pointer", 3, "click"], [1, "bi", "bi-arrow-left", "me-3"], [1, "text-gray"], ["class", "text-center d-flex flex-column align-items-center", 4, "ngIf"], ["action", "#", "method", "post"], [1, "form-group", "mb-32"], [1, "form-label"], [1, "row", "g-1", "text-center", "mb-2"], [1, "col"], ["type", "text", "maxlength", "1", 1, "form-control", "text-center", "otp-input", 3, "ngModelChange", "input", "ngModelOptions", "ngModel"], [1, "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", 1, "link"], [1, "btn", "btn-warning", 3, "click"], [1, "text-center", "d-flex", "flex-column", "align-items-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "text-black", "text-bold"], [1, "text-gray", "mx-2"], ["href", "javascript:void(0);", 1, "link", 3, "click"]],
    template: function FeedbackOtpComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackOtpComponent_Template_a_click_1_listener() {
          return ctx.handleBackClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enter OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FeedbackOtpComponent_div_8_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5)(10, "div", 6)(11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function FeedbackOtpComponent_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.otp()[0], $event) || (ctx.otp()[0] = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FeedbackOtpComponent_Template_input_input_15_listener($event) {
          return ctx.onInput($event, 0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function FeedbackOtpComponent_Template_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.otp()[1], $event) || (ctx.otp()[1] = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FeedbackOtpComponent_Template_input_input_17_listener($event) {
          return ctx.onInput($event, 1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9)(19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function FeedbackOtpComponent_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.otp()[2], $event) || (ctx.otp()[2] = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FeedbackOtpComponent_Template_input_input_19_listener($event) {
          return ctx.onInput($event, 2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9)(21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function FeedbackOtpComponent_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.otp()[3], $event) || (ctx.otp()[3] = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FeedbackOtpComponent_Template_input_input_21_listener($event) {
          return ctx.onInput($event, 3);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9)(23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function FeedbackOtpComponent_Template_input_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.otp()[4], $event) || (ctx.otp()[4] = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FeedbackOtpComponent_Template_input_input_23_listener($event) {
          return ctx.onInput($event, 4);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9)(25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function FeedbackOtpComponent_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.otp()[5], $event) || (ctx.otp()[5] = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FeedbackOtpComponent_Template_input_input_25_listener($event) {
          return ctx.onInput($event, 5);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11)(27, "small", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Didn\u2019t received the OTP? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FeedbackOtpComponent_Conditional_29_Template, 6, 5, "small")(30, FeedbackOtpComponent_Conditional_30_Template, 2, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackOtpComponent_Template_button_click_31_listener() {
          return ctx.handleOtpSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Enter the OTP sent to ", ctx.emailId() ? ctx.emailId() : ctx.mobileNumber(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.otp()[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.otp()[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.otp()[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.otp()[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.otp()[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.otp()[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.isResendAllowed() ? 29 : 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Verifying" : "Verify", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2300:
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackComponent: () => (/* binding */ FeedbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 5498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_feedback_login_feedback_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/feedback-login/feedback-login.component */ 3131);
/* harmony import */ var _shared_components_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/toast.service */ 1253);
/* harmony import */ var _components_feedback_otp_feedback_otp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/feedback-otp/feedback-otp.component */ 2475);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _components_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/feedback-form/feedback-form.component */ 9547);
/* harmony import */ var _shared_components_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/toast.component */ 5505);











function FeedbackComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-feedback-form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("logout", function FeedbackComponent_Conditional_8_Template_app_feedback_form_logout_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.handleLogoutClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function FeedbackComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-feedback-login", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formDataChange", function FeedbackComponent_Conditional_9_Conditional_0_Template_app_feedback_login_formDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.handleSendOtpClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoading", ctx_r1.isLoading);
  }
}
function FeedbackComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-feedback-otp", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("otpChange", function FeedbackComponent_Conditional_9_Conditional_1_Template_app_feedback_otp_otpChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.handleLoginClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("showOtpChange", function FeedbackComponent_Conditional_9_Conditional_1_Template_app_feedback_otp_showOtpChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.showOtp, $event) || (ctx_r1.showOtp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("resendOtp", function FeedbackComponent_Conditional_9_Conditional_1_Template_app_feedback_otp_resendOtp_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.generateOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("emailId", ctx_r1.email)("mobileNumber", ctx_r1.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("showOtp", ctx_r1.showOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoading", ctx_r1.isLoading);
  }
}
function FeedbackComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, FeedbackComponent_Conditional_9_Conditional_0_Template, 1, 1, "app-feedback-login", 8)(1, FeedbackComponent_Conditional_9_Conditional_1_Template, 1, 4, "app-feedback-otp", 9);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](!ctx_r1.showOtp ? 0 : 1);
  }
}
// import { FeedbackOtpComponent } from "./components/feedback-otp/feedback-otp.component";
class FeedbackComponent {
  showOtp = false;
  phoneNumber = '';
  email = '';
  authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  otp = '';
  _router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
  isLoading = false;
  userId = '';
  feedbackForm = false;
  ngOnInit() {
    const user = localStorage.getItem("userInfo");
    if (user) {
      this.feedbackForm = true;
    }
  }
  loginFormComponent;
  toastService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_shared_components_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService);
  constructor() {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.effect)(() => {
      const data = this.loginFormComponent?.formData();
      if (data) {
        this.email = data.emailId;
        this.phoneNumber = data.mobileNumber;
      }
    });
  }
  otpChange(_otp) {
    this.otp = _otp;
  }
  handleSendOtpClick(event) {
    this.email = event.emailID;
    this.phoneNumber = event.mobileNumber;
    this.generateOtp();
  }
  showMessage(title, message, type) {
    this.toastService.triggerToast(title, message, type);
  }
  generateOtp() {
    this.isLoading = true;
    this.authService.generateOtp({
      emailID: this.email,
      mobileNumber: this.phoneNumber
    }).subscribe({
      next: res => {
        console.log('res', res.Data);
        this.isLoading = false;
        this.showOtp = true;
        this.userId = res?.Data?.userID;
        if (res?.Success) {
          this.showMessage('Success', res.Message, 'success');
        } else {
          this.showMessage('Error', '', 'error');
        }
      },
      error: err => {
        console.error('Error:', JSON.stringify(err));
        this.isLoading = false;
        console.error(err);
        const errorMessage = err?.error || 'User is Invalid.';
        this.showMessage('Error', errorMessage, 'error');
      }
    });
  }
  handleLoginClick(otp) {
    this.isLoading = true;
    this.authService.feedbackVerifyOtp({
      userID: this.userId,
      enteredOTP: otp
    }).subscribe({
      next: res => {
        this.isLoading = false;
        if (res.Success) {
          if (!res.Data.users && !res.Data.projects.length) {
            this.showMessage('Info', res.Data.message, 'info');
          } else {
            this.showMessage('Success', 'Login successful!', 'success');
            // this._router.navigate(['dashboard']);
            this.feedbackForm = true;
          }
        } else {
          this.showMessage('Error', res.Data.message || 'Something went wrong!', 'error');
          this.feedbackForm = false;
          this.showMessage('Error', res.Data.message, 'error');
        }
      },
      error: err => {
        this.isLoading = false;
        console.error('Error:', err);
        this.showMessage('Error', 'Failed to verify OTP.', 'error');
      }
    });
  }
  handleLogoutClick() {
    this.feedbackForm = false;
    this.showOtp = false;
  }
  static ɵfac = function FeedbackComponent_Factory(ɵt) {
    return new (ɵt || FeedbackComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: FeedbackComponent,
    selectors: [["app-feedback"]],
    viewQuery: function FeedbackComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_components_feedback_login_feedback_login_component__WEBPACK_IMPORTED_MODULE_1__.FeedbackLoginComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.loginFormComponent = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 1,
    consts: [[1, "HT-login"], [1, "row", "g-0"], [1, "img", "col-md-6"], [1, "header"], [1, "page-bg", 2, "background", "url('images/login.svg')"], [1, "col-md-6", "col-12", "right-side"], [1, "feedback-form"], [1, "feedback-form", 3, "logout"], [3, "isLoading"], [3, "emailId", "mobileNumber", "showOtp", "isLoading"], [3, "formDataChange", "isLoading"], [3, "otpChange", "showOtpChange", "resendOtp", "emailId", "mobileNumber", "showOtp", "isLoading"]],
    template: function FeedbackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Case Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, FeedbackComponent_Conditional_8_Template, 1, 0, "app-feedback-form", 6)(9, FeedbackComponent_Conditional_9_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.feedbackForm ? 8 : 9);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _components_feedback_login_feedback_login_component__WEBPACK_IMPORTED_MODULE_1__.FeedbackLoginComponent, _components_feedback_otp_feedback_otp_component__WEBPACK_IMPORTED_MODULE_3__.FeedbackOtpComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _components_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_4__.FeedbackFormComponent, _shared_components_toast_component__WEBPACK_IMPORTED_MODULE_5__.ToastComponent],
    styles: [".feedback-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.HT-login[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n  font-size: 2.3rem !important;\n  padding: 17.5rem 0;\n  text-transform: uppercase;\n  \n\n  height: 100vh;\n  position: absolute;\n  z-index: 9999;\n  right: 50%;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.381);\n  color: rgb(255, 255, 255);\n}\n\n@media (max-width: 761px) {\n  .header[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 1.3rem !important;\n    right: 0px;\n    text-align: center;\n    height: 10vh;\n    padding: 5rem;\n    background-color: transparent;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsUUFBUTtFQUNSLHNDQUFzQztFQUN0Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtFQUMvQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWRiYWNrLWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkhULWxvZ2luIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlYWRlciB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjNyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTcuNXJlbSAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAvKiBtYXJnaW46IDE2cmVtIDA7ICovXG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgcmlnaHQ6IDUwJTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zODEpO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzYxcHgpIHtcbiAgLmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcbiAgICByaWdodDogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgcGFkZGluZzogNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8859:
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackModule: () => (/* binding */ FeedbackModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _auth_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/guards */ 7540);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth */ 4845);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _feedback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback.component */ 2300);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/storeNgxs/auth.state */ 192);
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/storage-plugin */ 7617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);












const routes = [{
  path: '',
  component: _feedback_component__WEBPACK_IMPORTED_MODULE_2__.FeedbackComponent,
  //() => import('./signin/signin.component').then(m => m.SigninComponent),
  canActivate: [_auth_guards__WEBPACK_IMPORTED_MODULE_0__.NoAuthGuard]
}, {
  path: ':userId',
  component: _feedback_component__WEBPACK_IMPORTED_MODULE_2__.FeedbackComponent,
  //() => import('./signin/signin.component').then(m => m.SigninComponent),
  canActivate: [_auth__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}];
class FeedbackModule {
  static ɵfac = function FeedbackModule_Factory(ɵt) {
    return new (ɵt || FeedbackModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: FeedbackModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.provideClientHydration)(), (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.provideStore)([_auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_3__.AuthState], (0,_ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_7__.withNgxsStoragePlugin)({
      keys: ['auth.token']
    }))
    // ToastComponent
    ],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
    // // FeedbackLoginComponent,
    // ToastComponent,
    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FeedbackModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
    // // FeedbackLoginComponent,
    // ToastComponent,
    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_feedback_feedback_module_ts.js.map