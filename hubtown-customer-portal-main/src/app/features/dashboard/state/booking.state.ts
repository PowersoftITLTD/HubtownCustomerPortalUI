import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Booking } from '../models/booking.model';
import { DashboardService } from '../services/dashboard.service';
import {
  FetchAccountSummary,
  FetchBankPayableAccount,
  FetchBooking,
  FetchDemandBreakup,
  FetchDemandLetter,
  FetchJointOwner,
  FetchReceipt,
  FetchTDS,
  DownloadTDSFile,
  DownloadBookingFile,
  SetAccountSummary,
  SetBankPayableAccount,
  SetBooking,
  SetDemandBreakup,
  SetDemandLetter,
  SetJointOwner,
  SetReceipt,
  SetTDS,
  SetViewDetail,
  SetPaymentViewDetail,
  FetchNOC,
  SetNOC,
  FetchFaq,
  SetFaq,
  FetchMileStone,
  SetMileStone,
  FetchKyc,
  SetKyc,
  UploadKyc,
  DownloadKYCFile,
  DeleteKyc,
  SetDeleteKyc,
  FetchNotification,
  SetNotification,
} from '../actions/booking.actions';
import { DemandBreakup } from '../models/demand-breakup.model';
import {
  AccountSummaryItem,
  BankPayableAccount,
  DemandLetterItem,
  Faq,
  JointOwner,
  KycItem,
  MileStoneItem,
  NocItem,
  NotificationItem,
  ReceiptItem,
  TDSItem,
} from '../models/project-details.model';
import {
  ViewDetailModel,
  ViewPaymentDetailModel,
} from '../models/view-details.model';

export interface BookingStateModel {
  booking: Booking[];
  demandBreakup: DemandBreakup | null;
  accountSummary: AccountSummaryItem[];
  bankPayableAccount: BankPayableAccount[];
  demandLetter: DemandLetterItem[];
  receipt: ReceiptItem[];
  viewDetail: ViewDetailModel | null;
  viewPaymentDetailModel: ViewPaymentDetailModel | null;
  tds: TDSItem[];
  jointOwners: JointOwner[];
  noc: NocItem[];
  faq: Faq[];
  mileStone: MileStoneItem[];
  kyc: KycItem[];
  deleteKyc: string;
  notification: NotificationItem[];
}

@State<BookingStateModel>({
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
    notification: [],
  },
})
@Injectable()
export class BookingState {
  constructor(private dashboardService: DashboardService) {}

  @Selector()
  static getBookings(state: BookingStateModel) {
    return state.booking;
  }

  @Selector()
  static getDemandBreakup(state: BookingStateModel) {
    return state.demandBreakup;
  }

  @Selector()
  static getAccountSummary(state: BookingStateModel) {
    return state.accountSummary;
  }

  @Selector()
  static getBankPayableAccount(state: BookingStateModel) {
    return state.bankPayableAccount;
  }

  @Selector()
  static getDemandLetter(state: BookingStateModel) {
    return state.demandLetter;
  }

  @Selector()
  static getReceipt(state: BookingStateModel) {
    return state.receipt;
  }

  @Selector()
  static getViewDetails(state: BookingStateModel) {
    return state.viewDetail;
  }

  @Selector()
  static getPaymentViewDetails(state: BookingStateModel) {
    return state.viewPaymentDetailModel;
  }

  @Selector()
  static getTDS(state: BookingStateModel) {
    return state.tds;
  }

  @Selector()
  static getJointOwner(state: BookingStateModel) {
    return state.jointOwners;
  }

  @Selector()
  static getNoc(state: BookingStateModel) {
    return state.noc;
  }

  @Selector()
  static getFaq(state: BookingStateModel) {
    return state.faq;
  }

  @Selector()
  static getMileStone(state: BookingStateModel) {
    return state.mileStone;
  }

  @Selector()
  static getKyc(state: BookingStateModel) {
    return state.kyc;
  }

  @Selector()
  static getdeleteKyc(state: BookingStateModel) {
    return state.deleteKyc;
  }

  @Selector()
  static getnotification(state: BookingStateModel) {
    return state.notification;
  }

  @Action(FetchBooking)
  fetchBooking(ctx: StateContext<BookingStateModel>, action: FetchBooking) {
    return this.dashboardService
      .getBooking(action.userId, action.projectId)
      .pipe(
        tap((response) => {
          if (response?.Data) {
            ctx.dispatch(new SetBooking(response.Data));
          }
        })
      );
  }

  @Action(SetBooking)
  setBooking(ctx: StateContext<BookingStateModel>, action: SetBooking) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      booking: action.booking,
    });
  }

  @Action(FetchDemandBreakup)
  fetchDemandBreakup(
    ctx: StateContext<BookingStateModel>,
    action: FetchDemandBreakup
  ) {
    return this.dashboardService.getDemandBreakup(action.bookingId).pipe(
      tap((response) => {
        if (response?.Data && response?.Data?.[0]) {
          ctx.dispatch(new SetDemandBreakup(response.Data[0]));
        } else ctx.dispatch(new SetDemandBreakup(null));
      })
    );
  }

  @Action(SetDemandBreakup)
  setDemandBreakup(
    ctx: StateContext<BookingStateModel>,
    action: SetDemandBreakup
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      demandBreakup: action.demandBreakup,
    });
  }

  @Action(FetchAccountSummary)
  fetchAccountSummary(
    ctx: StateContext<BookingStateModel>,
    action: FetchAccountSummary
  ) {
    return this.dashboardService.getAccountSummary(action.bookingId).pipe(
      tap((response) => {
        if (response?.Data && response?.Data?.[0]) {
          ctx.dispatch(new SetAccountSummary(response.Data));
        } else ctx.dispatch(new SetAccountSummary([]));
      })
    );
  }

  @Action(SetAccountSummary)
  setAccountSummary(
    ctx: StateContext<BookingStateModel>,
    action: SetAccountSummary
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      accountSummary: action.accountSummary,
    });
  }

  @Action(FetchBankPayableAccount)
  fetchBankPayableAccount(
    ctx: StateContext<BookingStateModel>,
    action: FetchBankPayableAccount
  ) {
    return this.dashboardService.getBankPayableAccount(action.bookingId).pipe(
      tap((response) => {
        if (response?.Data && response?.Data?.[0]) {
          ctx.dispatch(new SetBankPayableAccount(response.Data));
        } else ctx.dispatch(new SetBankPayableAccount([]));
      })
    );
  }

  @Action(SetBankPayableAccount)
  setBankPayableAccount(
    ctx: StateContext<BookingStateModel>,
    action: SetBankPayableAccount
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      bankPayableAccount: action.bankPayableAccount,
    });
  }

  @Action(FetchDemandLetter)
  fetchDemandLetter(
    ctx: StateContext<BookingStateModel>,
    action: FetchDemandLetter
  ) {
    return this.dashboardService.getDemandLetter(action.bookingId).pipe(
      tap((response) => {
        if (response?.Data && response?.Data?.[0]) {
          ctx.dispatch(new SetDemandLetter(response.Data));
        } else ctx.dispatch(new SetDemandLetter([]));
      })
    );
  }

  @Action(SetDemandLetter)
  setDemandLetter(
    ctx: StateContext<BookingStateModel>,
    action: SetDemandLetter
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      demandLetter: action.demandLetter,
    });
  }

  @Action(FetchReceipt)
  fetchReceipt(ctx: StateContext<BookingStateModel>, action: FetchReceipt) {
    return this.dashboardService.getReceipt(action.bookingId).pipe(
      tap((response) => {
        if (response?.Data && response?.Data?.[0]) {
          ctx.dispatch(new SetReceipt(response.Data));
        } else ctx.dispatch(new SetReceipt([]));
      })
    );
  }

  @Action(SetReceipt)
  setReceipt(ctx: StateContext<BookingStateModel>, action: SetReceipt) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      receipt: action.receipt,
    });
  }

  @Action(SetViewDetail)
  setViewDetail(ctx: StateContext<BookingStateModel>, action: SetViewDetail) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      viewDetail: action.viewDetail,
    });
  }

  @Action(SetPaymentViewDetail)
  SetPaymentViewDetail(
    ctx: StateContext<BookingStateModel>,
    action: SetPaymentViewDetail
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      viewPaymentDetailModel: action.viewPaymentDetailModel,
    });
  }

  @Action(FetchTDS)
  fetchTds(ctx: StateContext<BookingStateModel>, action: FetchTDS) {
    return this.dashboardService.getTds(action.bookingId).pipe(
      tap((response) => {
        if (response?.Data && response?.Data?.[0]) {
          ctx.dispatch(new SetTDS(response.Data));
        } else ctx.dispatch(new SetTDS([]));
      })
    );
  }

  @Action(SetTDS)
  setTds(ctx: StateContext<BookingStateModel>, action: SetTDS) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      tds: action.tds,
    });
  }

  @Action(FetchJointOwner)
  fetchJointOwner(
    ctx: StateContext<BookingStateModel>,
    action: FetchJointOwner
  ) {
    return this.dashboardService
      .getJointOwners(action.userId, action.bookingId)
      .pipe(
        tap((response) => {
          if (response?.Data && response?.Data?.[0]) {
            ctx.dispatch(new SetJointOwner(response.Data));
          } else ctx.dispatch(new SetJointOwner([]));
        })
      );
  }

  @Action(SetJointOwner)
  setJointOwner(ctx: StateContext<BookingStateModel>, action: SetJointOwner) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      jointOwners: action.jointOwners,
    });
  }

  @Action(DownloadTDSFile)
  downloadTdsFile(
    ctx: StateContext<BookingStateModel>,
    action: DownloadTDSFile
  ) {
    this.dashboardService.getTdsFile(action.filename);
  }

  @Action(DownloadBookingFile)
  downloadBookingFile(
    ctx: StateContext<BookingStateModel>,
    action: DownloadBookingFile
  ) {
    this.dashboardService.getBookingFiles(action.filename);
  }

  @Action(DownloadKYCFile)
  downloadKFCFile(
    ctx: StateContext<BookingStateModel>,
    action: DownloadKYCFile
  ) {
    this.dashboardService.getKYCFiles(action.filename);
  }

  @Action(FetchNOC)
  fetchNoc(ctx: StateContext<BookingStateModel>, action: FetchNOC) {
    return this.dashboardService.getNoc(action.bookingId).pipe(
      tap((response) => {
        if (response?.Data && response?.Data?.[0]) {
          ctx.dispatch(new SetNOC(response.Data));
        } else ctx.dispatch(new SetNOC([]));
      })
    );
  }

  @Action(SetNOC)
  setNoc(ctx: StateContext<BookingStateModel>, action: SetNOC) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      noc: action.noc,
    });
  }

  @Action(FetchFaq)
  fetchFaq(ctx: StateContext<BookingStateModel>, action: FetchFaq) {
    return this.dashboardService.getFaq().pipe(
      tap((response) => {
        if (response?.Data && response?.Data?.[0]) {
          ctx.dispatch(new SetFaq(response.Data));
        } else ctx.dispatch(new SetFaq([]));
      })
    );
  }

  @Action(SetFaq)
  setFaq(ctx: StateContext<BookingStateModel>, action: SetFaq) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      faq: action.faq,
    });
  }

  @Action(FetchMileStone)
  fetchMileStone(ctx: StateContext<BookingStateModel>, action: FetchMileStone) {
    return this.dashboardService.getMileStone(action.bookingId).pipe(
      tap((response) => {
        if (response?.Data && response?.Data?.[0]) {
          ctx.dispatch(new SetMileStone(response.Data));
        } else ctx.dispatch(new SetMileStone([]));
      })
    );
  }

  @Action(SetMileStone)
  setMileStone(ctx: StateContext<BookingStateModel>, action: SetMileStone) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      mileStone: action.milestone,
    });
  }

  @Action(FetchKyc)
  fetchKyc(ctx: StateContext<BookingStateModel>, action: FetchKyc) {
    return this.dashboardService.getKyc(action.bookingId).pipe(
      tap((response) => {
        if (response?.Data && response?.Data?.[0]) {
          ctx.dispatch(new SetKyc(response.Data));
        } else ctx.dispatch(new SetKyc([]));
      })
    );
  }

  @Action(SetKyc)
  setKyc(ctx: StateContext<BookingStateModel>, action: SetKyc) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      kyc: action.kyc,
    });
  }

  @Action(UploadKyc)
  uploadKyc(ctx: StateContext<BookingStateModel>, action: UploadKyc) {
    return this.dashboardService.uploadKyc(
      action.bookingId,
      action.ownerName,
      action.documentName,
      action.userId,
      action.file
    );
  }

  @Action(DeleteKyc)
  deleteKyc(ctx: StateContext<BookingStateModel>, action: DeleteKyc) {
    return this.dashboardService.deleteKyc(action.kycId).pipe(
      tap((response) => {
        if (response?.Data && response?.Data?.[0]) {
          ctx.dispatch(new SetDeleteKyc(response.Data[0].message));
        }
      })
    );
  }

  @Action(FetchNotification)
  fetchNotification(
    ctx: StateContext<BookingStateModel>,
    action: FetchNotification
  ) {
    return this.dashboardService.getNotification(action.bookingId).pipe(
      tap((response) => {
        if (response?.Data && response?.Data?.[0]) {
          ctx.dispatch(new SetNotification(response.Data));
        } else ctx.dispatch(new SetNotification([]));
      })
    );
  }

  @Action(SetNotification)
  setNotification(
    ctx: StateContext<BookingStateModel>,
    action: SetNotification
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      notification: action.notification,
    });
  }
}
