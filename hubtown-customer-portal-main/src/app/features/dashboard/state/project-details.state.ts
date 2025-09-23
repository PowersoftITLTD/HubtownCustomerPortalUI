// data.state.ts
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { DataStateModel } from '../models/project-details.model';

// Define the action to load data
export class LoadData {
  static readonly type = '[Data] Load';
}

// Define the initial state
const initialState: DataStateModel = {
  projectDetails: null,
  jointOwners: [],
  bankPayableAccounts: [],
  faqs: [],
  accountSummary: [],
  demandLetter:[],
  receipt:[],
  tds:[],
  noc:[],
  kyc:[],
  notification:[]
  // Initialize other properties as needed
};

@State<DataStateModel>({
  name: 'data',
  defaults: initialState,
})
@Injectable()
export class DataState {
  constructor(private http: HttpClient) {}

  // Selector to get project details
  @Selector()
  static getProjectDetails(state: DataStateModel) {
    return state.projectDetails;
  }

  // Selector to get joint owners
  @Selector()
  static getJointOwners(state: DataStateModel) {
    return state.jointOwners;
  }

  // Selector to get faqs
  @Selector()
  static getFaqs(state: DataStateModel) {
    return state.faqs;
  }

  // Selector to get bank payable accounts
  @Selector()
  static getBankPayableAccounts(state: DataStateModel) {
    return state.bankPayableAccounts;
  }

  // Selector to get account summary
  @Selector()
  static getAccountSummary(state: DataStateModel) {
    return state.accountSummary;
  }

  // Action handler to load data from JSON
  @Action(LoadData)
  loadData(ctx: StateContext<DataStateModel>) {
    return this.http.get<DataStateModel>('/mock/projectdetails.jsonc').pipe(
      tap((result) => {
        console.log("hello", result);
        
        ctx.patchState({
          projectDetails: result.projectDetails,
          jointOwners: result.jointOwners,
          bankPayableAccounts: result.bankPayableAccounts,
          faqs: result.faqs,
          accountSummary: result.accountSummary
          // Patch other properties as needed
        });
      })
    );
  }
}
