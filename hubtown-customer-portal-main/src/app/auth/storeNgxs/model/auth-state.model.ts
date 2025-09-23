import { User } from "./user.model";

export interface AuthStateModel {
    token: string | null;
    user: User | null;
    projects: any [];
    selectedProject: any;
  }
  