import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GenerateOtpModel, VerifyOtpModel } from './storeNgxs/model/otp.model';
import { Store } from '@ngxs/store';
import {
  SetToken,
  ClearToken,
  SetProjects,
  SetUser,
  SetSelectedProject,
} from './storeNgxs/auth.action';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService { 
  private apiUrl = environment.apiUrl; 
  private readonly TOKEN_KEY = 'authToken'; // Key for local storage
  private readonly PROJECTS_KEY = 'userProjects'; // Key for storing projects in local storage
  private readonly SELECTED_PROJECT_KEY = 'userSelectedProject';
  private readonly USER_KEY = 'userInfo'; // Key for storing user data in local storage

  private isBrowser =
    typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

  constructor(
    private http: HttpClient,
    private store: Store,
    private _router: Router
  ) {}

  generateOtp(payload: GenerateOtpModel): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/Customer/Auths/GenerateOTP`,
      payload
    );
  }

  verifyOtp(payload: VerifyOtpModel): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/Customer/Auths/VerifyOTP`, payload)
      .pipe(
        tap((response) => {
          if (response?.Data?.token) {
            this.storeToken(response.Data.token); // Store token in local storage and update state
          }

          if (response?.Data?.projects) {
            this.storeProjects(response.Data.projects); // Store projects in local storage and update state
          }

          if (response?.Data?.users) {
            this.storeUser(response.Data.users); // Store user data in local storage and update state
          }
        })
      );
  }

  feedbackVerifyOtp(payload: VerifyOtpModel): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/Customer/Auths/VerifyOTP`, payload)
      .pipe(
        tap((response) => {
          if (response?.Data?.token) {
            this.StoreFeedbackToken(response.Data.token); // Store token in local storage and update state
          }

          if (response?.Data?.projects) {
            this.storeProjects(response.Data.projects); // Store projects in local storage and update state
          }

          if (response?.Data?.users) {
            this.storeUser(response.Data.users); // Store user data in local storage and update state
          }
        })
      );
  }

  adminLogin(payload: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/Customer/Auths/AuthAdminLogin/admin/login`, payload)
      .pipe(
        tap((response) => {
          console.log({response})
          // if (response?.Data?.token) {
          //   this.StoreFeedbackToken(response.Data.token); // Store token in local storage and update state
          // }

          // if (response?.Data?.projects) {
          //   this.storeProjects(response.Data.projects); // Store projects in local storage and update state
          // }

          // if (response?.Data?.users) {
          //   this.storeUser(response.Data.users); // Store user data in local storage and update state
          // }
        })
      );
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Customer/Auths/GetUsers/GetUsers`);
  }

  logout() {
    const isAdmin = localStorage.getItem("isLoginAdmin")
    this.clearToken(); // Clear token from local storage and state
    this.clearProjects();
    this.clearUser();
    this.store.reset(0);
    if (this.isBrowser) {
      localStorage.removeItem("isLoginAdmin")
      if(isAdmin === "true"){
        setTimeout(() => {
          this._router.navigate(['auth/admin'])
        }, 200)
      }else{
        this._router.navigate(['auth']) 
      }
      // this._router.navigate(['auth']); // Redirect to login or auth page
    }
  }

  private storeToken(token: string): void {
    console.log('Store Token', this.isBrowser, token);

    if (this.isBrowser) {
      localStorage.setItem(this.TOKEN_KEY, token);
      this.store.dispatch(new SetToken(token)); // Update the state with the new token
    }
  }

  private StoreFeedbackToken(token: string): void {
    console.log('Store Token', this.isBrowser, token);

    if (this.isBrowser) {
      // localStorage.setItem(this.TOKEN_KEY, token);
      this.store.dispatch(new SetToken(token)); // Update the state with the new token
    }
  }

  private storeProjects(projects: any[]): void {
    // console.log('Store Projects', this.isBrowser, projects);

    if (this.isBrowser) {
      localStorage.setItem(this.PROJECTS_KEY, JSON.stringify(projects));
      this.store.dispatch(new SetProjects(projects)); // Update the state with the projects
      localStorage.setItem(
        this.SELECTED_PROJECT_KEY,
        JSON.stringify(projects?.[0])
      );
      this.store.dispatch(new SetSelectedProject(projects?.[0])); // Update the state with the projects
    }
  }

  storeSelectedProject(project: any) {
    if (this.isBrowser) {
      // Update the state with the projects
      localStorage.setItem(this.SELECTED_PROJECT_KEY, JSON.stringify(project));
      this.store.dispatch(new SetSelectedProject(project)); // Update the state with the projects
    }
  }

  private storeUser(user: any): void {
    if (this.isBrowser) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      this.store.dispatch(new SetUser(user)); // Update the state with the user info
    }
  }

  getToken(): string | null {
    return this.isBrowser ? localStorage.getItem(this.TOKEN_KEY) : null;
  }

  getProjects(): any[] | null {
    const projects = this.isBrowser
      ? localStorage.getItem(this.PROJECTS_KEY)
      : null;
    return projects ? JSON.parse(projects) : null;
  }

  getSelectedProject(): any[] | null {
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


  getUser(): any | null {
    const user = this.isBrowser ? localStorage.getItem(this.USER_KEY) : null;
    return user ? JSON.parse(user) : null;
  }

  clearToken(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.TOKEN_KEY);
      this.store.dispatch(new ClearToken()); // Clear the token from state
    }
  }

  clearProjects(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.PROJECTS_KEY);
      this.store.dispatch(new SetProjects([])); // Clear the projects from state
      localStorage.removeItem(this.SELECTED_PROJECT_KEY);
      this.store.dispatch(new SetSelectedProject(null));
    }
  }

  clearUser(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.USER_KEY);
      this.store.dispatch(new SetUser(null)); // Clear the user info from state
    }
  }
}
