import { User } from "./model/user.model";

export class SetToken {
  static readonly type = '[Auth] SetToken';
  constructor(public token: string) {}
}

export class ClearToken {
  static readonly type = '[Auth] ClearToken';
}

export class InitializeAuth {
  static readonly type = '[Auth] Initialize';
}

export class SetProjects {
  static readonly type = '[Auth] Set Projects';
  constructor(public payload: any[]) {}
}
export class SetUser {
  static readonly type = '[Auth] Set User';
  constructor(public payload: User | null) {}
}

export class SetSelectedProject {
  static readonly type = '[Auth] Set Selected Project';
  constructor(public payload: any | null) {}
}