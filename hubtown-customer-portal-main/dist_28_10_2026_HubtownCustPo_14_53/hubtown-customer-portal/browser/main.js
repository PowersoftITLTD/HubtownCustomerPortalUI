"use strict";
(self["webpackChunkhubtown_customer_portal"] = self["webpackChunkhubtown_customer_portal"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



// import { CoreModule } from './core/core.module';
// import { NgxsModule } from '@ngxs/store';
// import { DataState } from './pages/dashboard/state/project-details.state';
class AppComponent {
  title = 'hubtown-customer-portal';
  static ɵfac = function AppComponent_Factory(ɵt) {
    return new (ɵt || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _features_dashboard_state_project_details_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/dashboard/state/project-details.state */ 8580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/storeNgxs/auth.state */ 192);
/* harmony import */ var _auth_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/interceptors/auth.interceptor */ 4099);
/* harmony import */ var _app_initializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.initializer */ 4515);
/* harmony import */ var _features_dashboard_state_booking_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/dashboard/state/booking.state */ 3273);
/* harmony import */ var _auth_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/interceptors/error.interceptor */ 933);





// import { provideStore as provideStoreNGRX } from '@ngxs/store';



// import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';




// import { provideEffects } from '@ngrx/effects';
// import { provideRouterStore } from '@ngrx/router-store';
const appConfig = {
  providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.provideClientHydration)(),
  // provideHttpClient(),
  (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.withInterceptors)([_auth_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__.authInterceptor, _auth_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_6__.errorInterceptor])), (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.provideZoneChangeDetection)({
    eventCoalescing: true
  }), (0,_angular_router__WEBPACK_IMPORTED_MODULE_10__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.appRoutes),
  // NgxsModule.forRoot([AuthState]),  // NGXS Store configuration
  // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_11__.provideStore)([_features_dashboard_state_project_details_state__WEBPACK_IMPORTED_MODULE_1__.DataState, _auth_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_2__.AuthState, _features_dashboard_state_booking_state__WEBPACK_IMPORTED_MODULE_5__.BookingState]),
  // importProvidersFrom(NgxsModule.forRoot([DataState, AuthState])),
  {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.APP_INITIALIZER,
    useFactory: appInitializer => appInitializer.initializeApp(),
    deps: [_app_initializer__WEBPACK_IMPORTED_MODULE_4__.AppInitializerService],
    multi: true
  }]
};

/***/ }),

/***/ 4515:
/*!************************************!*\
  !*** ./src/app/app.initializer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppInitializerService: () => (/* binding */ AppInitializerService)
/* harmony export */ });
/* harmony import */ var _auth_storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/storeNgxs/auth.action */ 1116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 8267);
 // Adjust import as needed



class AppInitializerService {
  store;
  constructor(store) {
    this.store = store;
  }
  initializeApp() {
    return () => new Promise(resolve => {
      this.store.dispatch(new _auth_storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_0__.InitializeAuth()).subscribe(() => resolve());
    });
  }
  static ɵfac = function AppInitializerService_Factory(ɵt) {
    return new (ɵt || AppInitializerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AppInitializerService,
    factory: AppInitializerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ 4845);
/* harmony import */ var _auth_guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/guards */ 7540);


// import { AuthGuard, NoAuthGuard } from './auth/guards';
// import { SigninComponent } from './auth/signin/signin.component';
// import { DashboardComponent } from './features/dashboard/dashboard.component';
// import { inject } from '@angular/core';
const appRoutes = [
// {
//     path: '',
//     redirectTo: 'signin',
//     pathMatch: 'full',
//   },
//   {
//     path: 'home',
//     loadComponent: () => import('./features/home').then(m => m.HomeComponent),
//   },
{
  path: 'dashboard',
  // component: DashboardComponent
  canActivate: [_auth__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  // canActivate: [() => import('./auth/guards/auth.guard').then(g => g.AuthGuard)],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_dashboard_dashboard_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/dashboard/dashboard.component */ 1626)).then(m => m.DashboardComponent)
}, {
  path: 'auth',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 841)).then(m => m.AuthModule),
  canActivate: [_auth_guards__WEBPACK_IMPORTED_MODULE_1__.NoAuthGuard]
  // canActivate: [() => import('./auth/guards/no-auth.guard').then(g => g.NoAuthGuard)],
}, {
  path: 'feedback',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_feedback_feedback_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./feedback/feedback.module */ 8859)).then(m => m.FeedbackModule)
  // canActivate: [NoAuthGuard],
  // canActivate: [() => import('./auth/guards/no-auth.guard').then(g => g.NoAuthGuard)],
}, {
  path: '**',
  redirectTo: 'auth'
}];

/***/ }),

/***/ 2513:
/*!*************************************************************!*\
  !*** ./src/app/auth/admin-signin/admin-signin.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminSigninComponent: () => (/* binding */ AdminSigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 5498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_components_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/toast.service */ 1253);
/* harmony import */ var _components_admin_login_form_admin_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin-login-form/admin-login-form.component */ 3675);
/* harmony import */ var _shared_components_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/toast.component */ 5505);
/* harmony import */ var _components_user_selection_form_user_selection_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-selection-form/user-selection-form.component */ 2133);









function AdminSigninComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-admin-login-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("formDataChange", function AdminSigninComponent_Conditional_6_Template_app_admin_login_form_formDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.handleSendOtpClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminSigninComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-user-selection-form");
  }
}
class AdminSigninComponent {
  showUserDropdown = false;
  email = '';
  password = '';
  authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  otp = '';
  _router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
  isLoading = false;
  userId = '';
  AdminLoginFormComponent;
  toastService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_shared_components_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService);
  otpChange(_otp) {
    this.otp = _otp;
  }
  handleSendOtpClick(event) {
    this.email = event.emailID;
    this.password = event.password;
    this.login();
  }
  showMessage(title, message, type) {
    this.toastService.triggerToast(title, message, type);
  }
  login() {
    this.isLoading = true;
    this.authService.adminLogin({
      emailID: this.email,
      password: this.password
    }).subscribe({
      next: res => {
        this.isLoading = false;
        if (res.Success) {
          this.showUserDropdown = true;
          localStorage.setItem("isLoginAdmin", res?.Data?.isAdmin);
          this.showMessage('Success', 'Login successful!', 'success');
          // this._router.navigate(['dashboard']);
        } else {
          this.showMessage('Error', res.Message || 'Login failed', 'error');
        }
      },
      error: err => {
        this.isLoading = false;
        console.error('Error:', err);
        const errorMessage = err?.error || 'An unexpected error occurred.';
        this.showMessage('Error', errorMessage, 'error');
      }
    });
  }
  static ɵfac = function AdminSigninComponent_Factory(ɵt) {
    return new (ɵt || AdminSigninComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AdminSigninComponent,
    selectors: [["app-admin-signin"]],
    viewQuery: function AdminSigninComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_components_admin_login_form_admin_login_form_component__WEBPACK_IMPORTED_MODULE_2__.AdminLoginFormComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.AdminLoginFormComponent = _t.first);
      }
    },
    decls: 8,
    vars: 1,
    consts: [[1, "HT-login"], [1, "row", "g-0"], [1, "col-md-6"], [1, "page-bg", 2, "background", "url('images/login.svg')"], [1, "col-md-6", "col-12", "right-side", "w-full"], [3, "formDataChange"]],
    template: function AdminSigninComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AdminSigninComponent_Conditional_6_Template, 1, 0, "app-admin-login-form")(7, AdminSigninComponent_Conditional_7_Template, 1, 0, "app-user-selection-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.showUserDropdown ? 6 : 7);
      }
    },
    dependencies: [_shared_components_toast_component__WEBPACK_IMPORTED_MODULE_3__.ToastComponent, _components_admin_login_form_admin_login_form_component__WEBPACK_IMPORTED_MODULE_2__.AdminLoginFormComponent, _components_user_selection_form_user_selection_form_component__WEBPACK_IMPORTED_MODULE_4__.UserSelectionFormComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3675:
/*!*********************************************************************************************!*\
  !*** ./src/app/auth/admin-signin/components/admin-login-form/admin-login-form.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLoginFormComponent: () => (/* binding */ AdminLoginFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);




function AdminLoginFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.emailError());
  }
}
function AdminLoginFormComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.passwordError());
  }
}
class AdminLoginFormComponent {
  formDataChange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
  email = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('');
  password = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('');
  emailTouched = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
  passwordTouched = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
  // Email validation
  emailError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    if (!this.emailTouched()) return null;
    if (!this.email()) return 'Email is required';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.email()) ? null : 'Invalid email format';
  });
  // Password validation
  passwordError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    if (!this.passwordTouched()) return null;
    if (!this.password()) return 'Password is required';
    return this.password().length >= 6 ? null : 'Password must be at least 6 characters';
  });
  isFormValid = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !this.emailError() && !this.passwordError());
  formData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    if (this.isFormValid()) {
      return {
        emailId: this.email(),
        password: this.password()
      };
    }
    return null;
  });
  onEmailChange(event) {
    this.email.set(event.target.value);
    this.emailTouched.set(true);
  }
  onPasswordChange(event) {
    this.password.set(event.target.value);
    this.passwordTouched.set(true);
  }
  handleSendOtpClick() {
    if (this.isFormValid()) {
      this.formDataChange.emit({
        emailID: this.email(),
        password: this.password()
      });
    }
  }
  static ɵfac = function AdminLoginFormComponent_Factory(ɵt) {
    return new (ɵt || AdminLoginFormComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AdminLoginFormComponent,
    selectors: [["app-admin-login-form"]],
    outputs: {
      formDataChange: "formDataChange"
    },
    decls: 18,
    vars: 5,
    consts: [[1, "form-box"], [1, "text-gray"], [1, "form-group", "mb-32"], [1, "form-label"], ["type", "email", "placeholder", "Enter your email", 1, "form-control", 3, "input", "value"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "placeholder", "Enter your password", 1, "form-control", 3, "input", "value"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], [1, "text-danger"]],
    template: function AdminLoginFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log in to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome back! Please enter your details.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form")(6, "div", 2)(7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AdminLoginFormComponent_Template_input_input_9_listener($event) {
          return ctx.onEmailChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdminLoginFormComponent_div_10_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2)(12, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AdminLoginFormComponent_Template_input_input_14_listener($event) {
          return ctx.onPasswordChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminLoginFormComponent_div_15_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLoginFormComponent_Template_button_click_16_listener() {
          return ctx.handleSendOtpClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.email());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailError());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.password());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordError());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isFormValid());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2133:
/*!***************************************************************************************************!*\
  !*** ./src/app/auth/admin-signin/components/user-selection-form/user-selection-form.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSelectionFormComponent: () => (/* binding */ UserSelectionFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/auth.service */ 5498);
/* harmony import */ var src_app_shared_components_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/toast.service */ 1253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);








function UserSelectionFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.mobileNumberError());
  }
}
function UserSelectionFormComponent_Conditional_8_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", user_r3 == null ? null : user_r3.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", user_r3 == null ? null : user_r3.userName, " ");
  }
}
function UserSelectionFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserSelectionFormComponent_Conditional_8_Template_select_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.toggleDropdown("user"));
    })("blur", function UserSelectionFormComponent_Conditional_8_Template_select_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeDropdown("user"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Select user");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UserSelectionFormComponent_Conditional_8_option_3_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.filteredUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("rotate", ctx_r0.isUserDropdown);
  }
}
class UserSelectionFormComponent {
  fb;
  userForm;
  isInfoDropdown = false;
  isUserDropdown = false;
  isLoading = false;
  authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  users = [];
  _router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
  isDisabledUserSubmitBtn = true;
  toastService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_shared_components_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService);
  filteredUsers = []; // Store filtered users
  mobileNumber = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)('');
  mobileNumberTouched = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false);
  constructor(fb) {
    this.fb = fb;
    this.userForm = this.fb.group({
      userSelection: [''],
      mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d{10}$/)]]
    });
  }
  ngOnInit() {
    this.getUsersList();
    this.mobileNumberTouched.set(true);
    this.userForm.get('mobileNumber')?.valueChanges.subscribe(value => {
      this.mobileNumber.set(value);
      if (value.toString().length > 9) {
        this.filterTheCurrentUser();
      } else if (value.toString().length < 10) {
        this.filteredUsers = [];
      }
    });
  }
  // Mobile number validation
  mobileNumberError = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
    if (!this.mobileNumberTouched()) return null;
    if (!this.mobileNumber()) return 'Mobile number is required';
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(this.mobileNumber()) ? null : 'Enter a valid 10-digit number';
  });
  isFormValid = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => !this.mobileNumberError());
  filterTheCurrentUser() {
    const enteredMobile = this.userForm.get('mobileNumber')?.value;
    if (!enteredMobile) {
      return;
    }
    this.filteredUsers = this.users.filter(user => user.mobile.includes(enteredMobile));
    // If only one user matches, pre-fill the selection
    if (this.filteredUsers.length === 1) {
      const singleUser = this.filteredUsers[0];
      this.userForm.patchValue({
        userSelection: singleUser.userId
      });
    } else {
      this.userForm.patchValue({
        userSelection: ''
      });
    }
  }
  toggleDropdown(type) {
    if (type === 'info') {
      this.isInfoDropdown = !this.isInfoDropdown;
    } else if (type === 'user') {
      this.isUserDropdown = !this.isUserDropdown;
    }
  }
  closeDropdown(type) {
    if (type === 'info') {
      this.isInfoDropdown = false;
    } else if (type === 'user') {
      this.isUserDropdown = false;
    }
  }
  showMessage(title, message, type) {
    this.toastService.triggerToast(title, message, type);
  }
  getUsersList() {
    this.authService.getUsersList().subscribe({
      next: response => {
        this.users = response?.Data || [];
      },
      error: error => {
        console.log('Error fetching user list:', error);
      }
    });
  }
  handleUserSubmitClick() {
    const selectedUserValue = this.userForm.get('userSelection')?.value;
    if (!this.isFormValid()) {
      return;
    }
    if (this.filteredUsers.length === 0) {
      this.showMessage('Error', 'User not found', 'error');
      return;
    }
    const isAdmin = localStorage.getItem('isLoginAdmin');
    this.isLoading = true;
    this.authService.verifyOtp({
      userID: selectedUserValue,
      enteredOTP: '123456',
      isAdmin: isAdmin === 'true'
    }).subscribe({
      next: res => {
        this.isLoading = false;
        if (res.Success) {
          this.showMessage('Success', 'Admin Login Successfully!', 'success');
          this._router.navigate(['dashboard']);
        } else {
          this.showMessage('Error', res.Data.message || 'Admin Login failed', 'error');
        }
      },
      error: err => {
        this.isLoading = false;
        console.error('Error:', err);
        this.showMessage('Error', 'Failed to login.', 'error');
      }
    });
  }
  static ɵfac = function UserSelectionFormComponent_Factory(ɵt) {
    return new (ɵt || UserSelectionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UserSelectionFormComponent,
    selectors: [["app-user-selection-form"]],
    decls: 11,
    vars: 5,
    consts: [[2, "width", "100% !important", "max-width", "325px", "min-width", "325px"], [3, "formGroup"], [1, "form-group", "mb-8"], [1, "userText-field"], [1, "form-label"], ["type", "number", "formControlName", "mobileNumber", "placeholder", "Enter mobile number", 1, "form-control", 3, "input"], ["class", "text-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-warning", 3, "click", "disabled"], [1, "text-danger"], ["formControlName", "userSelection", 1, "form-control", 3, "click", "blur"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "dropdown-img"], ["src", "images/dropdown-icon.png", "alt", "dropdown-icon"], [3, "value"]],
    template: function UserSelectionFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "User mobile number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function UserSelectionFormComponent_Template_input_input_6_listener() {
          return ctx.mobileNumberTouched.set(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, UserSelectionFormComponent_div_7_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, UserSelectionFormComponent_Conditional_8_Template, 6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserSelectionFormComponent_Template_button_click_9_listener() {
          return ctx.handleUserSubmitClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobileNumberError());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.filteredUsers.length > 1 ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.isFormValid());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", !ctx.isLoading ? "Submit" : "Loading...", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".form-box[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.right-side[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  position: relative;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  \n\n  padding: 10px;\n  font-size: 14px;\n}\n\n.userText-field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 12px;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 20px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 12px;\n  border-radius: 9px;\n}\n\n\n\ninput[type='number'][_ngcontent-%COMP%]::-webkit-outer-spin-button, \ninput[type='number'][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type='number'][_ngcontent-%COMP%] {\n  appearance: textfield;\n}\n\n.dropdown-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 85%;\n  transform: translateY(-50%);\n  transition: transform 0.2s ease;\n}\n\n.dropdown-img[_ngcontent-%COMP%]   img.rotate[_ngcontent-%COMP%] {\n  transform: translateY(-50%) rotate(180deg);\n}\n\n.timer-container[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-align: center;\n  margin-top: 30px;\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hZG1pbi1zaWduaW4vY29tcG9uZW50cy91c2VyLXNlbGVjdGlvbi1mb3JtL3VzZXItc2VsZWN0aW9uLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ib3gge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJpZ2h0LXNpZGUge1xuICBwYWRkaW5nOiAwO1xufVxuXG5mb3JtIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAvKiBoZWlnaHQ6IDQ1cHg7ICovXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnVzZXJUZXh0LWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4ubWVzc2FnZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5iYWNrLWJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xufVxuXG4vKiBGb3IgQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG5pbnB1dFt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIEZvciBGaXJlZm94ICovXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XG4gIGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuLmRyb3Bkb3duLWltZyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDg1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xufVxuXG4uZHJvcGRvd24taW1nIGltZy5yb3RhdGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7XG59XG5cbi50aW1lci1jb250YWluZXIge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 841:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards */ 7540);
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngxs/storage-plugin */ 7617);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeNgxs/auth.state */ 192);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ 309);
/* harmony import */ var _signin_components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/components/login-form/login-form.component */ 337);
/* harmony import */ var _signin_components_otp_form_otp_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/components/otp-form/otp-form.component */ 7405);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _shared_components_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/toast.component */ 5505);
/* harmony import */ var _admin_signin_admin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-signin/admin-signin.component */ 2513);
/* harmony import */ var _admin_signin_components_admin_login_form_admin_login_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-signin/components/admin-login-form/admin-login-form.component */ 3675);
/* harmony import */ var _admin_signin_components_user_selection_form_user_selection_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-signin/components/user-selection-form/user-selection-form.component */ 2133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);













// import { AdminLoginComponent } from './components/admin-login/admin-login.component';




const routes = [{
  path: '',
  component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__.SigninComponent,
  //() => import('./signin/signin.component').then(m => m.SigninComponent),
  canActivate: [_guards__WEBPACK_IMPORTED_MODULE_0__.NoAuthGuard]
}, {
  path: 'admin',
  component: _admin_signin_admin_signin_component__WEBPACK_IMPORTED_MODULE_6__.AdminSigninComponent,
  //() => import('./signin/signin.component').then(m => m.SigninComponent),
  canActivate: [_guards__WEBPACK_IMPORTED_MODULE_0__.NoAuthGuard]
}];
class AuthModule {
  static ɵfac = function AuthModule_Factory(ɵt) {
    return new (ɵt || AuthModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AuthModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.provideClientHydration)(), (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_11__.provideStore)([_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_1__.AuthState], (0,_ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_12__.withNgxsStoragePlugin)({
      keys: ['auth.token']
    })), _shared_components_toast_component__WEBPACK_IMPORTED_MODULE_5__.ToastComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _shared_components_toast_component__WEBPACK_IMPORTED_MODULE_5__.ToastComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__.SigninComponent, _signin_components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__.LoginFormComponent, _signin_components_otp_form_otp_form_component__WEBPACK_IMPORTED_MODULE_4__.OtpFormComponent, _admin_signin_admin_signin_component__WEBPACK_IMPORTED_MODULE_6__.AdminSigninComponent,
    // AdminLoginComponent,
    _admin_signin_components_admin_login_form_admin_login_form_component__WEBPACK_IMPORTED_MODULE_7__.AdminLoginFormComponent, _admin_signin_components_user_selection_form_user_selection_form_component__WEBPACK_IMPORTED_MODULE_8__.UserSelectionFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _shared_components_toast_component__WEBPACK_IMPORTED_MODULE_5__.ToastComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule],
    exports: [_signin_components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__.LoginFormComponent, _signin_components_otp_form_otp_form_component__WEBPACK_IMPORTED_MODULE_4__.OtpFormComponent]
  });
})();

/***/ }),

/***/ 5498:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeNgxs/auth.action */ 1116);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);










class AuthService {
  http;
  store;
  _router;
  apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
  TOKEN_KEY = 'authToken'; // Key for local storage
  PROJECTS_KEY = 'userProjects'; // Key for storing projects in local storage
  SELECTED_PROJECT_KEY = 'userSelectedProject';
  USER_KEY = 'userInfo'; // Key for storing user data in local storage
  isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  constructor(http, store, _router) {
    this.http = http;
    this.store = store;
    this._router = _router;
  }
  generateOtp(payload) {
    return this.http.post(`${this.apiUrl}/Customer/Auths/GenerateOTP`, payload);
  }
  verifyOtp(payload) {
    return this.http.post(`${this.apiUrl}/Customer/Auths/VerifyOTP`, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data?.token) {
        this.storeToken(response.Data.token); // Store token in local storage and update state
      }
      if (response?.Data?.projects) {
        this.storeProjects(response.Data.projects); // Store projects in local storage and update state
      }
      if (response?.Data?.users) {
        this.storeUser(response.Data.users); // Store user data in local storage and update state
      }
    }));
  }
  feedbackVerifyOtp(payload) {
    return this.http.post(`${this.apiUrl}/Customer/Auths/VerifyOTP`, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data?.token) {
        this.StoreFeedbackToken(response.Data.token); // Store token in local storage and update state
      }
      if (response?.Data?.projects) {
        this.storeProjects(response.Data.projects); // Store projects in local storage and update state
      }
      if (response?.Data?.users) {
        this.storeUser(response.Data.users); // Store user data in local storage and update state
      }
    }));
  }
  adminLogin(payload) {
    return this.http.post(`${this.apiUrl}/Customer/Auths/AuthAdminLogin/admin/login`, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      console.log({
        response
      });
      // if (response?.Data?.token) {
      //   this.StoreFeedbackToken(response.Data.token); // Store token in local storage and update state
      // }
      // if (response?.Data?.projects) {
      //   this.storeProjects(response.Data.projects); // Store projects in local storage and update state
      // }
      // if (response?.Data?.users) {
      //   this.storeUser(response.Data.users); // Store user data in local storage and update state
      // }
    }));
  }
  getUsersList() {
    return this.http.get(`${this.apiUrl}/Customer/Auths/GetUsers/GetUsers`);
  }
  logout() {
    const isAdmin = localStorage.getItem("isLoginAdmin");
    this.clearToken(); // Clear token from local storage and state
    this.clearProjects();
    this.clearUser();
    this.store.reset(0);
    if (this.isBrowser) {
      localStorage.removeItem("isLoginAdmin");
      if (isAdmin === "true") {
        setTimeout(() => {
          this._router.navigate(['auth/admin']);
        }, 200);
      } else {
        this._router.navigate(['auth']);
      }
      // this._router.navigate(['auth']); // Redirect to login or auth page
    }
  }
  storeToken(token) {
    console.log('Store Token', this.isBrowser, token);
    if (this.isBrowser) {
      localStorage.setItem(this.TOKEN_KEY, token);
      this.store.dispatch(new _storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_0__.SetToken(token)); // Update the state with the new token
    }
  }
  StoreFeedbackToken(token) {
    console.log('Store Token', this.isBrowser, token);
    if (this.isBrowser) {
      // localStorage.setItem(this.TOKEN_KEY, token);
      this.store.dispatch(new _storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_0__.SetToken(token)); // Update the state with the new token
    }
  }
  storeProjects(projects) {
    // console.log('Store Projects', this.isBrowser, projects);
    if (this.isBrowser) {
      localStorage.setItem(this.PROJECTS_KEY, JSON.stringify(projects));
      this.store.dispatch(new _storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_0__.SetProjects(projects)); // Update the state with the projects
      localStorage.setItem(this.SELECTED_PROJECT_KEY, JSON.stringify(projects?.[0]));
      this.store.dispatch(new _storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_0__.SetSelectedProject(projects?.[0])); // Update the state with the projects
    }
  }
  storeSelectedProject(project) {
    if (this.isBrowser) {
      // Update the state with the projects
      localStorage.setItem(this.SELECTED_PROJECT_KEY, JSON.stringify(project));
      this.store.dispatch(new _storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_0__.SetSelectedProject(project)); // Update the state with the projects
    }
  }
  storeUser(user) {
    if (this.isBrowser) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      this.store.dispatch(new _storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_0__.SetUser(user)); // Update the state with the user info
    }
  }
  getToken() {
    return this.isBrowser ? localStorage.getItem(this.TOKEN_KEY) : null;
  }
  getProjects() {
    const projects = this.isBrowser ? localStorage.getItem(this.PROJECTS_KEY) : null;
    return projects ? JSON.parse(projects) : null;
  }
  getSelectedProject() {
    if (!this.isBrowser) return null;
    const project = localStorage.getItem(this.SELECTED_PROJECT_KEY);
    // Guard clause to prevent parsing invalid values
    if (!project || project === 'undefined' || project === 'null') {
      return null;
    }
    try {
      return JSON.parse(project);
    } catch (error) {
      console.error('Failed to parse selected project from localStorage:', error);
      return null;
    }
  }
  getUser() {
    const user = this.isBrowser ? localStorage.getItem(this.USER_KEY) : null;
    return user ? JSON.parse(user) : null;
  }
  clearToken() {
    if (this.isBrowser) {
      localStorage.removeItem(this.TOKEN_KEY);
      this.store.dispatch(new _storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_0__.ClearToken()); // Clear the token from state
    }
  }
  clearProjects() {
    if (this.isBrowser) {
      localStorage.removeItem(this.PROJECTS_KEY);
      this.store.dispatch(new _storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_0__.SetProjects([])); // Clear the projects from state
      localStorage.removeItem(this.SELECTED_PROJECT_KEY);
      this.store.dispatch(new _storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_0__.SetSelectedProject(null));
    }
  }
  clearUser() {
    if (this.isBrowser) {
      localStorage.removeItem(this.USER_KEY);
      this.store.dispatch(new _storeNgxs_auth_action__WEBPACK_IMPORTED_MODULE_0__.SetUser(null)); // Clear the user info from state
    }
  }
  static ɵfac = function AuthService_Factory(ɵt) {
    return new (ɵt || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9615:
/*!*******************************************!*\
  !*** ./src/app/auth/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storeNgxs/auth.state */ 192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);






class AuthGuard {
  store;
  router;
  constructor(store, router) {
    this.store = store;
    this.router = router;
  }
  canActivate() {
    const isAuthenticated = this.store.selectSnapshot(_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.isAuthenticated);
    if (!isAuthenticated) {
      this.router.navigate(['/auth']); // Redirect to login if not authenticated
      return false;
    }
    return true;
  }
  static ɵfac = function AuthGuard_Factory(ɵt) {
    return new (ɵt || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7540:
/*!**************************************!*\
  !*** ./src/app/auth/guards/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* reexport safe */ _auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard),
/* harmony export */   NoAuthGuard: () => (/* reexport safe */ _no_auth_guard__WEBPACK_IMPORTED_MODULE_1__.NoAuthGuard)
/* harmony export */ });
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ 9615);
/* harmony import */ var _no_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-auth.guard */ 7515);



/***/ }),

/***/ 7515:
/*!**********************************************!*\
  !*** ./src/app/auth/guards/no-auth.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoAuthGuard: () => (/* binding */ NoAuthGuard)
/* harmony export */ });
/* harmony import */ var _storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storeNgxs/auth.state */ 192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);






class NoAuthGuard {
  store;
  router;
  constructor(store, router) {
    this.store = store;
    this.router = router;
  }
  canActivate() {
    const isAuthenticated = this.store.selectSnapshot(_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.isAuthenticated);
    if (isAuthenticated) {
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
  static ɵfac = function NoAuthGuard_Factory(ɵt) {
    return new (ɵt || NoAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NoAuthGuard,
    factory: NoAuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4845:
/*!*******************************!*\
  !*** ./src/app/auth/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* reexport safe */ _guards__WEBPACK_IMPORTED_MODULE_1__.AuthGuard),
/* harmony export */   AuthModule: () => (/* reexport safe */ _auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule)
/* harmony export */ });
/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.module */ 841);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards */ 7540);

// export { AuthFacade } from './store/auth.facade';


/***/ }),

/***/ 4099:
/*!*******************************************************!*\
  !*** ./src/app/auth/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authInterceptor: () => (/* binding */ authInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storeNgxs/auth.state */ 192);



const authInterceptor = (req, next) => {
  const store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store);
  const token = store.selectSnapshot(_storeNgxs_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getToken);
  // console.log('interceptor', token);
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }
  return next(req);
};

/***/ }),

/***/ 933:
/*!********************************************************!*\
  !*** ./src/app/auth/interceptors/error.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorInterceptor: () => (/* binding */ errorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 5498);





const errorInterceptor = (req, next) => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  return next(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
    if (error.status === 401) {
      console.error('Unauthorized: Redirecting to login');
      authService.clearToken();
      router.navigate(['/auth']);
    } else if (error.status === 403) {
      console.error("Forbidden: You don't have access to this resource.");
    } else if (error.status === 404) {
      console.error("Not found: The requested resource doesn't exist.");
    } else if (error.status === 500) {
      console.error('Server error: Please try again later.');
    } else if (error.status === 400) {
      console.log('User is Invail.');
    } else {
      console.error('An unexpected error occurred:', error.message);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(error.message));
  }));
};

/***/ }),

/***/ 337:
/*!***************************************************************************!*\
  !*** ./src/app/auth/signin/components/login-form/login-form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginFormComponent: () => (/* binding */ LoginFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);




function LoginFormComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.inputError());
  }
}
// import { CommonModule } from '@angular/common';
class LoginFormComponent {
  // // Signals for form controls
  // email = signal<string>('');
  // mobileNumber = signal<string>('');
  // // Track if the fields have been touched
  // emailTouched = signal<boolean>(false);
  // mobileNumberTouched = signal<boolean>(false);
  // // formData = signal<{ email: string, mobileNumber: string }>({ email: '', mobileNumber: '' });
  formDataChange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
  // constructor(){
  // }
  //  // Computed signal for validation errors
  //  emailError = computed(() => {
  //   if (!this.emailTouched()) return null; // Show error only if touched
  //   if (!this.email()) return 'Email is required.';
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailPattern.test(this.email())) return 'Invalid email format.';
  //   return null;
  // });
  // mobileNumberError = computed(() => {
  //   if (!this.mobileNumberTouched()) return null; // Show error only if touched
  //   if (!this.mobileNumber()) return 'Mobile number is required.';
  //   const mobilePattern = /^[0-9]{10}$/;
  //   if (!mobilePattern.test(this.mobileNumber())) return 'Mobile number must be 10 digits.';
  //   return null;
  // });
  // // Change handlers
  // onEmailChange(event: Event) {
  //   this.email.set((event.target as HTMLInputElement).value);
  //   this.emailTouched.set(true); // Mark as touched
  //   // this.updateFormData();
  // }
  // onMobileChange(event: Event) {
  //   this.mobileNumber.set((event.target as HTMLInputElement).value);
  //   this.mobileNumberTouched.set(true); // Mark as touched
  //   // this.updateFormData();
  // }
  // isFormValid = computed(() => !this.emailError() && !this.mobileNumberError());
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
  // handleSendOtpClick() {
  //   if (this.isFormValid()) {
  //    this.formDataChange.emit({
  //       emailID: this.email(),
  //       mobileNumber: this.mobileNumber()
  //     });
  //   }
  // }
  // No need for onSubmit if we are using signals to continuously pass formData
  value = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(''); // Holds the value of the input field
  isEmailInput = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(true);
  // Function to determine if the input is an email
  isEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.value());
  }
  // Function to detect if input is a valid mobile number
  isMobile() {
    const mobileRegex = /^[0-9]{10}$/; // Adjust based on region
    return mobileRegex.test(this.value());
  }
  // Validate input and return error message if invalid
  inputError() {
    if (this.value() === '') return null;
    // if (this.isEmail()) {
    //   return null;  // No error if it's a valid email
    // }
    // if (this.isMobile()) {
    //   return null;  // No error if it's a valid mobile number
    // }
    // if (this.isEmailInput()) {
    //   return this.isEmail() ? null : 'Please enter a valid email address';
    // }
    return this.isMobile() ? null : 'Please enter a valid mobile number';
    // return 'Please enter a valid email or mobile number';
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
  // Handle sending OTP
  handleSendOtpClick() {
    if (this.isFormValid()) {
      this.formDataChange.emit({
        emailID: this.isEmail() ? this.value() : '',
        mobileNumber: this.isMobile() ? this.value() : ''
      });
    }
  }
  handleEnterSubmit() {
    if (this.isFormValid()) {
      this.handleSendOtpClick();
    }
  }
  static ɵfac = function LoginFormComponent_Factory(ɵt) {
    return new (ɵt || LoginFormComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoginFormComponent,
    selectors: [["app-login-form"]],
    outputs: {
      formDataChange: "formDataChange"
    },
    decls: 15,
    vars: 5,
    consts: [[1, "form-box"], [1, "d-flex", "justify-content-center"], ["src", "images/Hubtown_Logo.jpg", "alt", "Hubtown Logo", 1, "logo-image"], [1, "mb-5", 2, "font-size", "1.24rem"], [1, "text-gray"], [1, "login-form"], [1, "form-group", "mb-32"], [1, "form-label"], ["placeholder", "Enter your mobile Number", 1, "form-control", 3, "input", "keyup.enter", "type", "value"], ["class", "text-danger", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], [1, "text-danger"]],
    template: function LoginFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Welcome to the HUBTOWN Customer Portal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log in to your account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5)(8, "div", 6)(9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function LoginFormComponent_Template_input_input_11_listener($event) {
          return ctx.onInputChange($event);
        })("keyup.enter", function LoginFormComponent_Template_input_keyup_enter_11_listener() {
          return ctx.handleEnterSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginFormComponent_div_12_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginFormComponent_Template_button_click_13_listener() {
          return ctx.handleSendOtpClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Send OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "tel")("value", ctx.value());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputError());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isFormValid());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
    styles: [".login-form[_ngcontent-%COMP%]{\n    margin-top:10px !important;\n}\n\n\n.logo-image[_ngcontent-%COMP%]{\n  width: 15rem; \n\n  height: auto; \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9zaWduaW4vY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtBQUM5Qjs7O0FBR0E7RUFDRSxZQUFZLEVBQUUsMEJBQTBCO0VBQ3hDLFlBQVksRUFBRSx1QkFBdUI7QUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybXtcclxuICAgIG1hcmdpbi10b3A6MTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmxvZ28taW1hZ2V7XHJcbiAgd2lkdGg6IDE1cmVtOyAvKiBvciAzMDBweCwgNDAwcHgsIGV0Yy4gKi9cclxuICBoZWlnaHQ6IGF1dG87IC8qIGtlZXBzIGFzcGVjdCByYXRpbyAqL1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7405:
/*!***********************************************************************!*\
  !*** ./src/app/auth/signin/components/otp-form/otp-form.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpFormComponent: () => (/* binding */ OtpFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);




const _c0 = () => ({
  standalone: true
});
function OtpFormComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small")(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
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
function OtpFormComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtpFormComponent_Conditional_29_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.rhandleResendOtpClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
// import { CommonModule } from '@angular/common';
class OtpFormComponent {
  otp = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(Array(6).fill(''));
  otpChange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
  emailId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
  mobileNumber = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
  showOtp = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
  showOtpChange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
  resendOtp = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
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
  rhandleResendOtpClick() {
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
  static ɵfac = function OtpFormComponent_Factory(ɵt) {
    return new (ɵt || OtpFormComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OtpFormComponent,
    selectors: [["app-otp-form"]],
    inputs: {
      emailId: [1, "emailId"],
      mobileNumber: [1, "mobileNumber"],
      showOtp: [1, "showOtp"]
    },
    outputs: {
      otpChange: "otpChange",
      showOtpChange: "showOtpChange",
      resendOtp: "resendOtp"
    },
    decls: 32,
    vars: 20,
    consts: [[1, "form-box"], [1, "back", "cursor-pointer", 3, "click"], [1, "bi", "bi-arrow-left", "me-3"], [1, "text-gray"], ["action", "#", "method", "post"], [1, "form-group", "mb-32"], [1, "form-label"], [1, "row", "g-1", "text-center", "mb-2"], [1, "col"], ["type", "text", "maxlength", "1", 1, "form-control", "text-center", "otp-input", 3, "ngModelChange", "input", "ngModelOptions", "ngModel"], [1, "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", 1, "link"], [1, "btn", "btn-warning", 3, "click"], [1, "text-black", "text-bold"], [1, "text-gray", "mx-2"], ["href", "javascript:void(0);", 1, "link", 3, "click"]],
    template: function OtpFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtpFormComponent_Template_a_click_1_listener() {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4)(9, "div", 5)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function OtpFormComponent_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.otp()[0], $event) || (ctx.otp()[0] = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OtpFormComponent_Template_input_input_14_listener($event) {
          return ctx.onInput($event, 0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8)(16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function OtpFormComponent_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.otp()[1], $event) || (ctx.otp()[1] = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OtpFormComponent_Template_input_input_16_listener($event) {
          return ctx.onInput($event, 1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8)(18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function OtpFormComponent_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.otp()[2], $event) || (ctx.otp()[2] = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OtpFormComponent_Template_input_input_18_listener($event) {
          return ctx.onInput($event, 2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8)(20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function OtpFormComponent_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.otp()[3], $event) || (ctx.otp()[3] = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OtpFormComponent_Template_input_input_20_listener($event) {
          return ctx.onInput($event, 3);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8)(22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function OtpFormComponent_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.otp()[4], $event) || (ctx.otp()[4] = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OtpFormComponent_Template_input_input_22_listener($event) {
          return ctx.onInput($event, 4);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8)(24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function OtpFormComponent_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.otp()[5], $event) || (ctx.otp()[5] = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OtpFormComponent_Template_input_input_24_listener($event) {
          return ctx.onInput($event, 5);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10)(26, "small", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Didn\u2019t received the OTP? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OtpFormComponent_Conditional_28_Template, 6, 5, "small")(29, OtpFormComponent_Conditional_29_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtpFormComponent_Template_button_click_30_listener() {
          return ctx.handleOtpSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Enter the OTP sent to ", ctx.emailId() ? ctx.emailId() : ctx.mobileNumber(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.otp()[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.otp()[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.otp()[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.otp()[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.otp()[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.otp()[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.isResendAllowed() ? 28 : 29);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 309:
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SigninComponent: () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login-form/login-form.component */ 337);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ 5498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_components_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/toast.service */ 1253);
/* harmony import */ var _shared_components_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/toast.component */ 5505);
/* harmony import */ var _components_otp_form_otp_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/otp-form/otp-form.component */ 7405);









function SigninComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-login-form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("formDataChange", function SigninComponent_Conditional_6_Template_app_login_form_formDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.handleSendOtpClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SigninComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-otp-form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("otpChange", function SigninComponent_Conditional_7_Template_app_otp_form_otpChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.handleLoginClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("showOtpChange", function SigninComponent_Conditional_7_Template_app_otp_form_showOtpChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.showOtp, $event) || (ctx_r1.showOtp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resendOtp", function SigninComponent_Conditional_7_Template_app_otp_form_resendOtp_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.generateOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("emailId", ctx_r1.email)("mobileNumber", ctx_r1.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("showOtp", ctx_r1.showOtp);
  }
}
class SigninComponent {
  showOtp = false;
  phoneNumber = '';
  email = '';
  authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
  otp = '';
  _router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
  isLoading = false;
  userId = '';
  // toastService = inject(ToastService);
  loginFormComponent;
  constructor() {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.effect)(() => {
      const data = this.loginFormComponent?.formData();
      if (data) {
        this.email = data.emailId;
        this.phoneNumber = data.mobileNumber;
      }
    });
  }
  toastService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_shared_components_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService);
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
        console.log("res", res.Data);
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
        console.error("Error:", JSON.stringify(err));
        this.isLoading = false;
        console.error(err);
        const errorMessage = err?.error || "User is Invalid.";
        this.showMessage('Error', errorMessage, 'error');
      }
    });
  }
  handleLoginClick(otp) {
    this.isLoading = true;
    this.authService.verifyOtp({
      userID: this.userId,
      enteredOTP: otp
    }).subscribe({
      next: res => {
        this.isLoading = false;
        if (res.Success) {
          if (!res.Data.users && !res.Data?.projects?.length) {
            this.showMessage('Info', res.Data.message, "info");
          } else {
            this.showMessage('Success', 'Login successful!', "success");
            this._router.navigate(['dashboard']);
          }
        } else {
          this.showMessage('Error', res.Data.message || 'Something went wrong!', "error");
          // this.toastService.triggerToast('Error', res.Data.message);
        }
      },
      error: err => {
        this.isLoading = false;
        console.error('Error:', err);
        this.showMessage('Error', 'Failed to verify OTP.', "error");
      }
    });
  }
  static ɵfac = function SigninComponent_Factory(ɵt) {
    return new (ɵt || SigninComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SigninComponent,
    selectors: [["app-signin"]],
    viewQuery: function SigninComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__.LoginFormComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.loginFormComponent = _t.first);
      }
    },
    decls: 8,
    vars: 1,
    consts: [[1, "HT-login"], [1, "row", "g-0"], [1, "col-md-6"], [1, "page-bg", 2, "background", "url('images/login.svg')"], [1, "col-md-6", "col-12", "right-side"], [3, "emailId", "mobileNumber", "showOtp"], [3, "formDataChange"], [3, "otpChange", "showOtpChange", "resendOtp", "emailId", "mobileNumber", "showOtp"]],
    template: function SigninComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SigninComponent_Conditional_6_Template, 1, 0, "app-login-form")(7, SigninComponent_Conditional_7_Template, 1, 3, "app-otp-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.showOtp ? 6 : 7);
      }
    },
    dependencies: [_shared_components_toast_component__WEBPACK_IMPORTED_MODULE_3__.ToastComponent, _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__.LoginFormComponent, _components_otp_form_otp_form_component__WEBPACK_IMPORTED_MODULE_4__.OtpFormComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1116:
/*!***********************************************!*\
  !*** ./src/app/auth/storeNgxs/auth.action.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearToken: () => (/* binding */ ClearToken),
/* harmony export */   InitializeAuth: () => (/* binding */ InitializeAuth),
/* harmony export */   SetProjects: () => (/* binding */ SetProjects),
/* harmony export */   SetSelectedProject: () => (/* binding */ SetSelectedProject),
/* harmony export */   SetToken: () => (/* binding */ SetToken),
/* harmony export */   SetUser: () => (/* binding */ SetUser)
/* harmony export */ });
class SetToken {
  token;
  static type = '[Auth] SetToken';
  constructor(token) {
    this.token = token;
  }
}
class ClearToken {
  static type = '[Auth] ClearToken';
}
class InitializeAuth {
  static type = '[Auth] Initialize';
}
class SetProjects {
  payload;
  static type = '[Auth] Set Projects';
  constructor(payload) {
    this.payload = payload;
  }
}
class SetUser {
  payload;
  static type = '[Auth] Set User';
  constructor(payload) {
    this.payload = payload;
  }
}
class SetSelectedProject {
  payload;
  static type = '[Auth] Set Selected Project';
  constructor(payload) {
    this.payload = payload;
  }
}

/***/ }),

/***/ 192:
/*!**********************************************!*\
  !*** ./src/app/auth/storeNgxs/auth.state.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthState: () => (/* binding */ AuthState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 5498);
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.action */ 1116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);






// export interface AuthStateModel {
//   token: string | null;
// }
let AuthState = class AuthState {
  authService;
  constructor(authService) {
    this.authService = authService;
  }
  static getToken(state) {
    return state.token;
  }
  static isAuthenticated(state) {
    return !!state.token;
  }
  setToken(ctx, action) {
    ctx.patchState({
      token: action.token
    });
  }
  clearToken(ctx) {
    ctx.patchState({
      token: null
    });
    // this.authService.clearToken(); // Clear from local storage as well
  }
  // Rehydrate token from local storage on app initialization
  initializeAuth(ctx) {
    const token = this.authService.getToken();
    // console.log("hello", token);
    if (token) {
      ctx.dispatch(new _auth_action__WEBPACK_IMPORTED_MODULE_1__.SetToken(token));
    }
    const projects = this.authService.getProjects();
    // console.log("hello", projects);
    if (projects) {
      ctx.dispatch(new _auth_action__WEBPACK_IMPORTED_MODULE_1__.SetProjects(projects));
    }
    const selectedProject = this.authService.getSelectedProject();
    // console.log("hello", projects);
    if (selectedProject) {
      ctx.dispatch(new _auth_action__WEBPACK_IMPORTED_MODULE_1__.SetSelectedProject(selectedProject));
    }
    const user = this.authService.getUser();
    // console.log("hello", user);
    if (user) {
      ctx.dispatch(new _auth_action__WEBPACK_IMPORTED_MODULE_1__.SetUser(user));
    }
  }
  setProjects(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      projects: action.payload
    });
  }
  setSelectedProject(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedProject: action.payload
    });
  }
  setUser(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      user: action.payload
    });
  }
  static getUser(state) {
    return state.user;
  }
  static getProjects(state) {
    return state.projects;
  }
  static getSelectedProject(state) {
    return state.selectedProject;
  }
  static ɵfac = function AuthState_Factory(ɵt) {
    return new (ɵt || AuthState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthState,
    factory: AuthState.ɵfac
  });
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_auth_action__WEBPACK_IMPORTED_MODULE_1__.SetToken), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object, _auth_action__WEBPACK_IMPORTED_MODULE_1__.SetToken]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", void 0)], AuthState.prototype, "setToken", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_auth_action__WEBPACK_IMPORTED_MODULE_1__.ClearToken), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", void 0)], AuthState.prototype, "clearToken", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_auth_action__WEBPACK_IMPORTED_MODULE_1__.InitializeAuth), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", void 0)], AuthState.prototype, "initializeAuth", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_auth_action__WEBPACK_IMPORTED_MODULE_1__.SetProjects), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object, _auth_action__WEBPACK_IMPORTED_MODULE_1__.SetProjects]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", void 0)], AuthState.prototype, "setProjects", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_auth_action__WEBPACK_IMPORTED_MODULE_1__.SetSelectedProject), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object, _auth_action__WEBPACK_IMPORTED_MODULE_1__.SetSelectedProject]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", void 0)], AuthState.prototype, "setSelectedProject", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_auth_action__WEBPACK_IMPORTED_MODULE_1__.SetUser), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object, _auth_action__WEBPACK_IMPORTED_MODULE_1__.SetUser]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", void 0)], AuthState.prototype, "setUser", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", Object)], AuthState, "getToken", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", Boolean)], AuthState, "isAuthenticated", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", Object)], AuthState, "getUser", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", Object)], AuthState, "getProjects", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", Object)], AuthState, "getSelectedProject", null);
AuthState = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.State)({
  name: 'auth',
  defaults: {
    token: null,
    projects: [],
    user: null,
    selectedProject: null
  }
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService])], AuthState);


/***/ }),

/***/ 4445:
/*!***************************************************************!*\
  !*** ./src/app/features/dashboard/actions/booking.actions.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteKyc: () => (/* binding */ DeleteKyc),
/* harmony export */   DownloadBookingFile: () => (/* binding */ DownloadBookingFile),
/* harmony export */   DownloadKYCFile: () => (/* binding */ DownloadKYCFile),
/* harmony export */   DownloadTDSFile: () => (/* binding */ DownloadTDSFile),
/* harmony export */   FetchAccountSummary: () => (/* binding */ FetchAccountSummary),
/* harmony export */   FetchBankPayableAccount: () => (/* binding */ FetchBankPayableAccount),
/* harmony export */   FetchBooking: () => (/* binding */ FetchBooking),
/* harmony export */   FetchDemandBreakup: () => (/* binding */ FetchDemandBreakup),
/* harmony export */   FetchDemandLetter: () => (/* binding */ FetchDemandLetter),
/* harmony export */   FetchFaq: () => (/* binding */ FetchFaq),
/* harmony export */   FetchJointOwner: () => (/* binding */ FetchJointOwner),
/* harmony export */   FetchKyc: () => (/* binding */ FetchKyc),
/* harmony export */   FetchMileStone: () => (/* binding */ FetchMileStone),
/* harmony export */   FetchNOC: () => (/* binding */ FetchNOC),
/* harmony export */   FetchNotification: () => (/* binding */ FetchNotification),
/* harmony export */   FetchReceipt: () => (/* binding */ FetchReceipt),
/* harmony export */   FetchTDS: () => (/* binding */ FetchTDS),
/* harmony export */   SetAccountSummary: () => (/* binding */ SetAccountSummary),
/* harmony export */   SetBankPayableAccount: () => (/* binding */ SetBankPayableAccount),
/* harmony export */   SetBooking: () => (/* binding */ SetBooking),
/* harmony export */   SetDeleteKyc: () => (/* binding */ SetDeleteKyc),
/* harmony export */   SetDemandBreakup: () => (/* binding */ SetDemandBreakup),
/* harmony export */   SetDemandLetter: () => (/* binding */ SetDemandLetter),
/* harmony export */   SetFaq: () => (/* binding */ SetFaq),
/* harmony export */   SetJointOwner: () => (/* binding */ SetJointOwner),
/* harmony export */   SetKyc: () => (/* binding */ SetKyc),
/* harmony export */   SetMileStone: () => (/* binding */ SetMileStone),
/* harmony export */   SetNOC: () => (/* binding */ SetNOC),
/* harmony export */   SetNotification: () => (/* binding */ SetNotification),
/* harmony export */   SetPaymentViewDetail: () => (/* binding */ SetPaymentViewDetail),
/* harmony export */   SetReceipt: () => (/* binding */ SetReceipt),
/* harmony export */   SetTDS: () => (/* binding */ SetTDS),
/* harmony export */   SetViewDetail: () => (/* binding */ SetViewDetail),
/* harmony export */   UploadKyc: () => (/* binding */ UploadKyc)
/* harmony export */ });
class FetchBooking {
  userId;
  projectId;
  static type = '[Booking] Fetch Booking';
  constructor(userId, projectId) {
    this.userId = userId;
    this.projectId = projectId;
  }
}
class SetBooking {
  booking;
  static type = '[Booking] Set Booking';
  constructor(booking) {
    this.booking = booking;
  }
}
class FetchDemandBreakup {
  bookingId;
  static type = '[Booking] Fetch Demand Breakup';
  constructor(bookingId) {
    this.bookingId = bookingId;
  }
}
class SetDemandBreakup {
  demandBreakup;
  static type = '[Booking] Set Demand Breakup';
  constructor(demandBreakup) {
    this.demandBreakup = demandBreakup;
  }
}
class FetchAccountSummary {
  bookingId;
  static type = '[Booking] Fetch Account Summary';
  constructor(bookingId) {
    this.bookingId = bookingId;
  }
}
class SetAccountSummary {
  accountSummary;
  static type = '[Booking] Set Account Summary';
  constructor(accountSummary) {
    this.accountSummary = accountSummary;
  }
}
class FetchBankPayableAccount {
  bookingId;
  static type = '[Booking] Fetch Bank Payable Account';
  constructor(bookingId) {
    this.bookingId = bookingId;
  }
}
class SetBankPayableAccount {
  bankPayableAccount;
  static type = '[Booking] Set Bank Payable Account';
  constructor(bankPayableAccount) {
    this.bankPayableAccount = bankPayableAccount;
  }
}
class FetchDemandLetter {
  bookingId;
  static type = '[Booking] Fetch Demand Letter';
  constructor(bookingId) {
    this.bookingId = bookingId;
  }
}
class SetDemandLetter {
  demandLetter;
  static type = '[Booking] Set Demand Letter';
  constructor(demandLetter) {
    this.demandLetter = demandLetter;
  }
}
class FetchReceipt {
  bookingId;
  static type = '[Booking] Fetch Receipt';
  constructor(bookingId) {
    this.bookingId = bookingId;
  }
}
class SetReceipt {
  receipt;
  static type = '[Booking] Set Receipt';
  constructor(receipt) {
    this.receipt = receipt;
  }
}
class SetViewDetail {
  viewDetail;
  static type = '[Booking] View Details';
  constructor(viewDetail) {
    this.viewDetail = viewDetail;
  }
}
class SetPaymentViewDetail {
  viewPaymentDetailModel;
  static type = '[Booking] View Payment DetailModel';
  constructor(viewPaymentDetailModel) {
    this.viewPaymentDetailModel = viewPaymentDetailModel;
  }
}
class FetchTDS {
  bookingId;
  static type = '[Booking] Fetch TDS';
  constructor(bookingId) {
    this.bookingId = bookingId;
  }
}
class SetTDS {
  tds;
  static type = '[Booking] Set TDS';
  constructor(tds) {
    this.tds = tds;
  }
}
class FetchJointOwner {
  userId;
  bookingId;
  static type = '[Booking] Fetch Joint Owner';
  constructor(userId, bookingId) {
    this.userId = userId;
    this.bookingId = bookingId;
  }
}
class SetJointOwner {
  jointOwners;
  static type = '[Booking] Set Joint Owner';
  constructor(jointOwners) {
    this.jointOwners = jointOwners;
  }
}
class DownloadTDSFile {
  filename;
  static type = '[Booking] Fetch TDS File';
  constructor(filename) {
    this.filename = filename;
  }
}
class DownloadBookingFile {
  filename;
  static type = '[Booking] Fetch Booking File';
  constructor(filename) {
    this.filename = filename;
  }
}
class FetchNOC {
  bookingId;
  static type = '[Booking] Fetch NOC';
  constructor(bookingId) {
    this.bookingId = bookingId;
  }
}
class SetNOC {
  noc;
  static type = '[Booking] Set NOC';
  constructor(noc) {
    this.noc = noc;
  }
}
class FetchFaq {
  static type = '[Booking] Fetch FAQ';
  constructor() {}
}
class SetFaq {
  faq;
  static type = '[Booking] Set FAQ';
  constructor(faq) {
    this.faq = faq;
  }
}
class FetchMileStone {
  bookingId;
  static type = '[Booking] Fetch MileStone';
  constructor(bookingId) {
    this.bookingId = bookingId;
  }
}
class SetMileStone {
  milestone;
  static type = '[Booking] Set MileStone';
  constructor(milestone) {
    this.milestone = milestone;
  }
}
class FetchKyc {
  bookingId;
  static type = '[Booking] Fetch KYC';
  constructor(bookingId) {
    this.bookingId = bookingId;
  }
}
class SetKyc {
  kyc;
  static type = '[Booking] Set KYC';
  constructor(kyc) {
    this.kyc = kyc;
  }
}
class UploadKyc {
  bookingId;
  ownerName;
  documentName;
  userId;
  file;
  static type = '[Booking] Upload KYC';
  constructor(bookingId, ownerName, documentName, userId, file) {
    this.bookingId = bookingId;
    this.ownerName = ownerName;
    this.documentName = documentName;
    this.userId = userId;
    this.file = file;
  }
}
class DownloadKYCFile {
  filename;
  static type = '[Booking] Fetch KYC File';
  constructor(filename) {
    this.filename = filename;
  }
}
class DeleteKyc {
  kycId;
  static type = '[Booking] Delete KYC';
  constructor(kycId) {
    this.kycId = kycId;
  }
}
class SetDeleteKyc {
  deleteKyc;
  static type = '[Booking] Set Delete kYC';
  constructor(deleteKyc) {
    this.deleteKyc = deleteKyc;
  }
}
class FetchNotification {
  bookingId;
  static type = '[Booking] Fetch Notification';
  constructor(bookingId) {
    this.bookingId = bookingId;
  }
}
class SetNotification {
  notification;
  static type = '[Booking] Set Notification';
  constructor(notification) {
    this.notification = notification;
  }
}

/***/ }),

/***/ 8089:
/*!******************************************************************!*\
  !*** ./src/app/features/dashboard/services/dashboard.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardService: () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 8267);






class DashboardService {
  http;
  store;
  apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  //   private readonly TOKEN_KEY = 'authToken';  // Key for local storage
  //   private readonly PROJECTS_KEY = 'userProjects';  // Key for storing projects in local storage
  //   private readonly SELECTED_PROJECT_KEY = 'userSelectedProject';
  //   private readonly USER_KEY = 'userInfo';  // Key for storing user data in local storage
  //   private isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  constructor(http, store) {
    this.http = http;
    this.store = store;
  }
  getBooking(userId, projectId) {
    return this.http.get(`${this.apiUrl}/Customer/Booking/GetBooking?UserID=${userId}&ProjectID=${projectId}`);
  }
  getDemandBreakup(bookingId) {
    return this.http.get(`${this.apiUrl}/Customer/Booking/GetDemandBreakup?BookingID=${bookingId}`);
  }
  getAccountSummary(bookingId) {
    return this.http.get(`${this.apiUrl}/Customer/Booking/GetAccountSummary?BookingID=${bookingId}`);
  }
  getBankPayableAccount(bookingId) {
    return this.http.get(`${this.apiUrl}/Customer/Booking/GetBankPayableAccounts?BookingID=${bookingId}`);
  }
  getDemandLetter(bookingId) {
    return this.http.get(`${this.apiUrl}/Customer/Booking/GetDemandLetters?BookingID=${bookingId}`);
  }
  getReceipt(bookingId) {
    return this.http.get(`${this.apiUrl}/Customer/Booking/GetReceipts?BookingID=${bookingId}`);
  }
  getTds(bookingId) {
    return this.http.get(`${this.apiUrl}/Customer/TDS/GetTDSDetails?BookingID=${bookingId}`);
  }
  getNoc(bookingId) {
    return this.http.get(`${this.apiUrl}/Customer/Booking/GetHomeLoanNOC?BookingID=${bookingId}`);
  }
  getFaq() {
    return this.http.get(`${this.apiUrl}/Customer/Notification/GetFAQ/GetFAQ`);
  }
  getJointOwners(userId, bookingId) {
    return this.http.get(`${this.apiUrl}/Customer/Booking/GetCoOwner?UserID=${userId}&BookingID=${bookingId}`);
  }
  getMileStone(bookingId) {
    return this.http.get(`${this.apiUrl}/Customer/Booking/GetMilestones?BookingID=${bookingId}`);
  }
  getKyc(bookingId) {
    return this.http.get(`${this.apiUrl}/Customer/KYC/GetKYCDetails?BookingID=${bookingId}`);
  }
  uploadKyc(bookingId, ownerName, documentName, userId, file) {
    const formData = new FormData();
    formData.append('file', file, file.name); // Append the file to FormData
    this.http.post(`${this.apiUrl}/Customer/KYC/UploadKYCFile?BookingID=${bookingId}&OwnerName=${ownerName}&DocumentName=${documentName}&UserID=${userId}`, formData).subscribe({
      next: response => {
        console.log('Upload successful:', response);
        return response;
      },
      error: error => {
        console.error('Upload failed:', error);
      }
    });
  }
  getKYCFiles(filename) {
    this.http.get(`${this.apiUrl}/Customer/KYC/DownloadKYCFile?fileName=${filename}`, {
      responseType: 'blob'
    }).subscribe(blob => {
      this.downloadFile(blob, filename);
    }, error => {
      console.error('Error downloading file:', error);
    });
  }
  deleteKyc(kycId) {
    return this.http.delete(`${this.apiUrl}/Customer/KYC/DeleteKYCFile?kycid=${kycId}`);
  }
  getTdsFile(filename) {
    this.http.get(`${this.apiUrl}/Customer/TDS/DownloadTDSFile?fileName=${filename}`, {
      responseType: 'blob'
    }).subscribe(blob => {
      this.downloadFile(blob, filename);
    }, error => {
      console.error('Error downloading file:', error);
    });
  }
  getBookingFiles(filename) {
    this.http.get(`${this.apiUrl}/Customer/Booking/DownloadFile?fileName=${filename}`, {
      responseType: 'blob'
    }).subscribe(blob => {
      this.downloadFile(blob, filename);
    }, error => {
      console.error('Error downloading file:', error);
    });
  }
  downloadFile(blob, filename) {
    // Create a temporary URL for the blob and trigger download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename; // Set the filename for the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url); // Clean up the URL object
  }
  getProjectUpdates(projectId) {
    return this.http.get(`${this.apiUrl}/Customer/Booking/GetProjectUpdates?projectid=${projectId}`);
  }
  getUpcomingProjects() {
    return this.http.get(`${this.apiUrl}/Customer/Booking/GetUpcomingProject`);
  }
  getNotification(bookingId) {
    return this.http.get(`${this.apiUrl}/Customer/Notification/GetNotificationsByBookingID/${bookingId}`);
  }
  markNotificationAsRead(notificationId) {
    return this.http.post(`${this.apiUrl}/Customer/Notification/UpdateNotificationStatus/${notificationId}`, {});
  }
  uploadTDS(bookingId, tDSDate, transactionNo, tDSAmount, userId, file) {
    const formData = new FormData();
    formData.append('file', file, file.name); // Append the file to FormData
    return this.http.post(`${this.apiUrl}/Customer/TDS/UploadTDSFile?BookingID=${bookingId}&TDSDate=${tDSDate}&TransactionNo=${transactionNo}&TDSAmount=${tDSAmount}&UserID=${userId}`, formData);
  }
  static ɵfac = function DashboardService_Factory(ɵt) {
    return new (ɵt || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DashboardService,
    factory: DashboardService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3273:
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/state/booking.state.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingState: () => (/* binding */ BookingState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/dashboard.service */ 8089);
/* harmony import */ var _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/booking.actions */ 4445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);







let BookingState = class BookingState {
  dashboardService;
  constructor(dashboardService) {
    this.dashboardService = dashboardService;
  }
  static getBookings(state) {
    return state.booking;
  }
  static getDemandBreakup(state) {
    return state.demandBreakup;
  }
  static getAccountSummary(state) {
    return state.accountSummary;
  }
  static getBankPayableAccount(state) {
    return state.bankPayableAccount;
  }
  static getDemandLetter(state) {
    return state.demandLetter;
  }
  static getReceipt(state) {
    return state.receipt;
  }
  static getViewDetails(state) {
    return state.viewDetail;
  }
  static getPaymentViewDetails(state) {
    return state.viewPaymentDetailModel;
  }
  static getTDS(state) {
    return state.tds;
  }
  static getJointOwner(state) {
    return state.jointOwners;
  }
  static getNoc(state) {
    return state.noc;
  }
  static getFaq(state) {
    return state.faq;
  }
  static getMileStone(state) {
    return state.mileStone;
  }
  static getKyc(state) {
    return state.kyc;
  }
  static getdeleteKyc(state) {
    return state.deleteKyc;
  }
  static getnotification(state) {
    return state.notification;
  }
  fetchBooking(ctx, action) {
    return this.dashboardService.getBooking(action.userId, action.projectId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetBooking(response.Data));
      }
    }));
  }
  setBooking(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      booking: action.booking
    });
  }
  fetchDemandBreakup(ctx, action) {
    return this.dashboardService.getDemandBreakup(action.bookingId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data && response?.Data?.[0]) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetDemandBreakup(response.Data[0]));
      } else ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetDemandBreakup(null));
    }));
  }
  setDemandBreakup(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      demandBreakup: action.demandBreakup
    });
  }
  fetchAccountSummary(ctx, action) {
    return this.dashboardService.getAccountSummary(action.bookingId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data && response?.Data?.[0]) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetAccountSummary(response.Data));
      } else ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetAccountSummary([]));
    }));
  }
  setAccountSummary(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      accountSummary: action.accountSummary
    });
  }
  fetchBankPayableAccount(ctx, action) {
    return this.dashboardService.getBankPayableAccount(action.bookingId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data && response?.Data?.[0]) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetBankPayableAccount(response.Data));
      } else ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetBankPayableAccount([]));
    }));
  }
  setBankPayableAccount(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      bankPayableAccount: action.bankPayableAccount
    });
  }
  fetchDemandLetter(ctx, action) {
    return this.dashboardService.getDemandLetter(action.bookingId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data && response?.Data?.[0]) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetDemandLetter(response.Data));
      } else ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetDemandLetter([]));
    }));
  }
  setDemandLetter(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      demandLetter: action.demandLetter
    });
  }
  fetchReceipt(ctx, action) {
    return this.dashboardService.getReceipt(action.bookingId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data && response?.Data?.[0]) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetReceipt(response.Data));
      } else ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetReceipt([]));
    }));
  }
  setReceipt(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      receipt: action.receipt
    });
  }
  setViewDetail(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      viewDetail: action.viewDetail
    });
  }
  SetPaymentViewDetail(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      viewPaymentDetailModel: action.viewPaymentDetailModel
    });
  }
  fetchTds(ctx, action) {
    return this.dashboardService.getTds(action.bookingId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data && response?.Data?.[0]) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetTDS(response.Data));
      } else ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetTDS([]));
    }));
  }
  setTds(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      tds: action.tds
    });
  }
  fetchJointOwner(ctx, action) {
    return this.dashboardService.getJointOwners(action.userId, action.bookingId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data && response?.Data?.[0]) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetJointOwner(response.Data));
      } else ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetJointOwner([]));
    }));
  }
  setJointOwner(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      jointOwners: action.jointOwners
    });
  }
  downloadTdsFile(ctx, action) {
    this.dashboardService.getTdsFile(action.filename);
  }
  downloadBookingFile(ctx, action) {
    this.dashboardService.getBookingFiles(action.filename);
  }
  downloadKFCFile(ctx, action) {
    this.dashboardService.getKYCFiles(action.filename);
  }
  fetchNoc(ctx, action) {
    return this.dashboardService.getNoc(action.bookingId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data && response?.Data?.[0]) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetNOC(response.Data));
      } else ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetNOC([]));
    }));
  }
  setNoc(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      noc: action.noc
    });
  }
  fetchFaq(ctx, action) {
    return this.dashboardService.getFaq().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data && response?.Data?.[0]) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetFaq(response.Data));
      } else ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetFaq([]));
    }));
  }
  setFaq(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      faq: action.faq
    });
  }
  fetchMileStone(ctx, action) {
    return this.dashboardService.getMileStone(action.bookingId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data && response?.Data?.[0]) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetMileStone(response.Data));
      } else ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetMileStone([]));
    }));
  }
  setMileStone(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      mileStone: action.milestone
    });
  }
  fetchKyc(ctx, action) {
    return this.dashboardService.getKyc(action.bookingId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data && response?.Data?.[0]) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetKyc(response.Data));
      } else ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetKyc([]));
    }));
  }
  setKyc(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      kyc: action.kyc
    });
  }
  uploadKyc(ctx, action) {
    return this.dashboardService.uploadKyc(action.bookingId, action.ownerName, action.documentName, action.userId, action.file);
  }
  deleteKyc(ctx, action) {
    return this.dashboardService.deleteKyc(action.kycId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data && response?.Data?.[0]) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetDeleteKyc(response.Data[0].message));
      }
    }));
  }
  fetchNotification(ctx, action) {
    return this.dashboardService.getNotification(action.bookingId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response?.Data && response?.Data?.[0]) {
        ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetNotification(response.Data));
      } else ctx.dispatch(new _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetNotification([]));
    }));
  }
  setNotification(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      notification: action.notification
    });
  }
  static ɵfac = function BookingState_Factory(ɵt) {
    return new (ɵt || BookingState)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: BookingState,
    factory: BookingState.ɵfac
  });
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchBooking), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchBooking]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "fetchBooking", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetBooking), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetBooking]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setBooking", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchDemandBreakup), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchDemandBreakup]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "fetchDemandBreakup", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetDemandBreakup), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetDemandBreakup]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setDemandBreakup", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchAccountSummary), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchAccountSummary]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "fetchAccountSummary", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetAccountSummary), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetAccountSummary]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setAccountSummary", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchBankPayableAccount), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchBankPayableAccount]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "fetchBankPayableAccount", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetBankPayableAccount), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetBankPayableAccount]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setBankPayableAccount", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchDemandLetter), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchDemandLetter]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "fetchDemandLetter", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetDemandLetter), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetDemandLetter]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setDemandLetter", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchReceipt), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchReceipt]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "fetchReceipt", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetReceipt), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetReceipt]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setReceipt", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetViewDetail), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetViewDetail]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setViewDetail", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetPaymentViewDetail), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetPaymentViewDetail]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "SetPaymentViewDetail", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchTDS), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchTDS]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "fetchTds", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetTDS), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetTDS]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setTds", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchJointOwner), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchJointOwner]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "fetchJointOwner", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetJointOwner), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetJointOwner]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setJointOwner", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DownloadTDSFile), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DownloadTDSFile]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "downloadTdsFile", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DownloadBookingFile), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DownloadBookingFile]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "downloadBookingFile", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DownloadKYCFile), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DownloadKYCFile]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "downloadKFCFile", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchNOC), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchNOC]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "fetchNoc", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetNOC), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetNOC]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setNoc", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchFaq), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchFaq]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "fetchFaq", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetFaq), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetFaq]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setFaq", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchMileStone), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchMileStone]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "fetchMileStone", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetMileStone), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetMileStone]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setMileStone", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchKyc), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchKyc]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "fetchKyc", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetKyc), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetKyc]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setKyc", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.UploadKyc), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.UploadKyc]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "uploadKyc", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DeleteKyc), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.DeleteKyc]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "deleteKyc", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchNotification), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.FetchNotification]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "fetchNotification", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetNotification), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _actions_booking_actions__WEBPACK_IMPORTED_MODULE_1__.SetNotification]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState.prototype, "setNotification", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getBookings", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getDemandBreakup", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getAccountSummary", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getBankPayableAccount", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getDemandLetter", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getReceipt", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getViewDetails", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getPaymentViewDetails", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getTDS", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getJointOwner", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getNoc", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getFaq", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getMileStone", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getKyc", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getdeleteKyc", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], BookingState, "getnotification", null);
BookingState = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.State)({
  name: 'booking',
  defaults: {
    booking: [],
    demandBreakup: null,
    accountSummary: [],
    bankPayableAccount: [],
    demandLetter: [],
    receipt: [],
    viewDetail: null,
    viewPaymentDetailModel: null,
    tds: [],
    jointOwners: [],
    noc: [],
    faq: [],
    mileStone: [],
    kyc: [],
    deleteKyc: '',
    notification: []
  }
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService])], BookingState);


/***/ }),

/***/ 8580:
/*!*******************************************************************!*\
  !*** ./src/app/features/dashboard/state/project-details.state.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataState: () => (/* binding */ DataState),
/* harmony export */   LoadData: () => (/* binding */ LoadData)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);

// data.state.ts





// Define the action to load data
class LoadData {
  static type = '[Data] Load';
}
// Define the initial state
const initialState = {
  projectDetails: null,
  jointOwners: [],
  bankPayableAccounts: [],
  faqs: [],
  accountSummary: [],
  demandLetter: [],
  receipt: [],
  tds: [],
  noc: [],
  kyc: [],
  notification: []
  // Initialize other properties as needed
};
let DataState = class DataState {
  http;
  constructor(http) {
    this.http = http;
  }
  // Selector to get project details
  static getProjectDetails(state) {
    return state.projectDetails;
  }
  // Selector to get joint owners
  static getJointOwners(state) {
    return state.jointOwners;
  }
  // Selector to get faqs
  static getFaqs(state) {
    return state.faqs;
  }
  // Selector to get bank payable accounts
  static getBankPayableAccounts(state) {
    return state.bankPayableAccounts;
  }
  // Selector to get account summary
  static getAccountSummary(state) {
    return state.accountSummary;
  }
  // Action handler to load data from JSON
  loadData(ctx) {
    return this.http.get('/mock/projectdetails.jsonc').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)(result => {
      console.log("hello", result);
      ctx.patchState({
        projectDetails: result.projectDetails,
        jointOwners: result.jointOwners,
        bankPayableAccounts: result.bankPayableAccounts,
        faqs: result.faqs,
        accountSummary: result.accountSummary
        // Patch other properties as needed
      });
    }));
  }
  static ɵfac = function DataState_Factory(ɵt) {
    return new (ɵt || DataState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DataState,
    factory: DataState.ɵfac
  });
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(LoadData), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", void 0)], DataState.prototype, "loadData", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", void 0)], DataState, "getProjectDetails", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", void 0)], DataState, "getJointOwners", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", void 0)], DataState, "getFaqs", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", void 0)], DataState, "getBankPayableAccounts", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object]), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", void 0)], DataState, "getAccountSummary", null);
DataState = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.State)({
  name: 'data',
  defaults: initialState
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient])], DataState);


/***/ }),

/***/ 5505:
/*!******************************************************!*\
  !*** ./src/app/shared/components/toast.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastComponent: () => (/* binding */ ToastComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/toast.service */ 1253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





const _c0 = (a0, a1) => ({
  "toast-success": a0,
  "toast-error": a1
});
function ToastComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastComponent_div_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toastService.hideToast());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r1.toastService.toastType() === "success", ctx_r1.toastService.toastType() === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.toastService.message(), " ");
  }
}
class ToastComponent {
  toastService;
  constructor(toastService) {
    this.toastService = toastService;
  }
  static ɵfac = function ToastComponent_Factory(ɵt) {
    return new (ɵt || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ToastComponent,
    selectors: [["app-toast"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "toast-container position-fixed top-0 end-0 p-3", 4, "ngIf"], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "show", 3, "ngClass"], [1, "toast-body"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"]],
    template: function ToastComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastComponent_div_0_Template, 5, 5, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toastService.showToast());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".toast[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(100%);\n  transition: all 0.5s ease-in-out;\n}\n\n.toast.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n  box-shadow: none;\n  transition: all 0.5s ease-in-out;\n}\n\n.toast-success[_ngcontent-%COMP%] {\n  background-color: #28a745; \n\n  color: white;\n}\n\n.toast-error[_ngcontent-%COMP%] {\n  background: #dc3545; \n\n  color: white;\n}\n\n\n\n.toast-header[_ngcontent-%COMP%] {\n  background-color: #343a40;\n  color: white;\n}\n\n.toast-body[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9hc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUFBUjs7QUFFTTtFQUNFLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFDUjs7QUFDTTtFQUNFLHlCQUFBLEVBQUEsVUFBQTtFQUNBLFlBQUE7QUFFUjs7QUFFTTtFQUNFLG1CQUFBLEVBQUEsUUFBQTtFQUNBLFlBQUE7QUFDUjs7QUFFTSx3QkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBRU07RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQ1IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC50b2FzdCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG4gICAgICAudG9hc3Quc2hvdyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG4gICAgICAudG9hc3Qtc3VjY2VzcyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7IC8qIEdyZWVuICovXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgLy8gLyogRXJyb3IgVG9hc3QgU3R5bGVzICovXG4gICAgICAudG9hc3QtZXJyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1OyAvKiBSZWQgKi9cbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAvKiBDb21tb24gVG9hc3QgU3R5bGVzICovXG4gICAgICAudG9hc3QtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAudG9hc3QtYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1253:
/*!****************************************************!*\
  !*** ./src/app/shared/components/toast.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class ToastService {
  // Use signals for title, message, and showToast state
  showToast = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
  title = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('');
  message = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('');
  toastType = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('');
  // Method to trigger the toast
  triggerToast(toasterTitle, toasterMessage, type) {
    this.title.set(toasterTitle);
    this.message.set(toasterMessage);
    this.showToast.set(true);
    this.toastType.set(type);
    // Auto-hide after 2 seconds
    setTimeout(() => this.hideToast(), 2000);
  }
  // Method to hide the toast
  hideToast() {
    this.showToast.set(false);
  }
  static ɵfac = function ToastService_Factory(ɵt) {
    return new (ɵt || ToastService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ToastService,
    factory: ToastService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { version } = require('../../package.json');
const environment = {
  production: false,
  appVersion: '',
  //`${version}-dev`,
  // Replace this with your server API URL
  // apiUrl: 'http://13.127.136.90:5002/api',
  // apiUrl: 'http://13.204.21.84:5000/api',
  apiUrl: 'https://cpapi.piplapps.com/api',
  settings: {
    auth: {
      // OAuth2 credentials
      clientId: 'fake-client-id',
      // <Your auth client id here>
      secretId: 'fake-secret-id',
      // <Your auth secret id here>
      // keys to store tokens at local storage
      accessTokenKey: 'DoPS3ZrQjM',
      refreshTokenKey: 'nmlP8PW2nb'
    }
  }
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 289);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map