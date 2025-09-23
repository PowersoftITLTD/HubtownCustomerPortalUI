import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { ClearToken, InitializeAuth, SetProjects, SetSelectedProject, SetToken, SetUser } from './auth.action';
import { AuthStateModel } from './model/auth-state.model';
import { User } from './model/user.model';

// export interface AuthStateModel {
//   token: string | null;
// }

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    projects: [],
    user: null,
    selectedProject: null
  }
})
@Injectable()
export class AuthState {
  constructor(private authService: AuthService) {}

  @Selector()
  static getToken(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  @Action(SetToken)
  setToken(ctx: StateContext<AuthStateModel>, action: SetToken) {
    ctx.patchState({ token: action.token });
  }

  @Action(ClearToken)
  clearToken(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({ token: null });
    // this.authService.clearToken(); // Clear from local storage as well
  }

  // Rehydrate token from local storage on app initialization
  @Action(InitializeAuth)
  initializeAuth(ctx: StateContext<AuthStateModel>) {

    const token = this.authService.getToken();
    // console.log("hello", token);
    if (token) {
      ctx.dispatch(new SetToken(token));
    }
    const projects = this.authService.getProjects();
    // console.log("hello", projects);
    if (projects) {
      ctx.dispatch(new SetProjects(projects));
    }
    const selectedProject = this.authService.getSelectedProject();
    // console.log("hello", projects);
    if (selectedProject) {
      ctx.dispatch(new SetSelectedProject(selectedProject));
    }
    const user = this.authService.getUser();
    // console.log("hello", user);
    if (user) {
      ctx.dispatch(new SetUser(user));
    }
    
  }

  @Action(SetProjects)
  setProjects(ctx: StateContext<AuthStateModel>, action: SetProjects) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      projects: action.payload
    });
  }

  @Action(SetSelectedProject)
  setSelectedProject(ctx: StateContext<AuthStateModel>, action: SetSelectedProject) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedProject: action.payload
    });
  }

  @Action(SetUser)
  setUser(ctx: StateContext<AuthStateModel>, action: SetUser) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      user: action.payload
    });
  }

  @Selector()
  static getUser(state: AuthStateModel): User | null {
    return state.user;
  }

  @Selector()
  static getProjects(state: AuthStateModel): any[] | null {
    return state.projects;
  }

  @Selector()
  static getSelectedProject(state: AuthStateModel): any | null {
    return state.selectedProject;
  }
}
