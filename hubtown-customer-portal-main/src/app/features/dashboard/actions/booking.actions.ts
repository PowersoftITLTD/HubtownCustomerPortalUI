import { Booking } from "../models/booking.model";
import { DemandBreakup } from "../models/demand-breakup.model";
import { AccountSummaryItem, BankPayableAccount,DemandLetterItem, Faq, JointOwner, KycItem, MileStoneItem, NocItem, NotificationItem, ReceiptItem, TDSItem } from "../models/project-details.model";
import { ViewDetailModel, ViewPaymentDetailModel } from "../models/view-details.model";

export class FetchBooking {
    static readonly type = '[Booking] Fetch Booking';
    constructor(public userId: string, public projectId: string) {}
  }
  
  export class SetBooking {
    static readonly type = '[Booking] Set Booking';
    constructor(public booking: Booking[]) {}
  }

  export class FetchDemandBreakup {
    static readonly type = '[Booking] Fetch Demand Breakup';
    constructor(public bookingId: number) {}
  }
  
  export class SetDemandBreakup {
    static readonly type = '[Booking] Set Demand Breakup';
    constructor(public demandBreakup: DemandBreakup | null) {}
  }
  
  export class FetchAccountSummary{
    static readonly type = '[Booking] Fetch Account Summary';
    constructor(public bookingId:number){}
  }

  export class SetAccountSummary {
    static readonly type = '[Booking] Set Account Summary';
    constructor(public accountSummary: AccountSummaryItem[]) {}
  }

  export class FetchBankPayableAccount{
    static readonly type = '[Booking] Fetch Bank Payable Account';
    constructor(public bookingId:number){}
  }

  export class SetBankPayableAccount {
    static readonly type = '[Booking] Set Bank Payable Account';
    constructor(public bankPayableAccount: BankPayableAccount[]) {}
  }

  export class FetchDemandLetter{
    static readonly type = '[Booking] Fetch Demand Letter';
    constructor(public bookingId:number){}
  }

  export class SetDemandLetter{
    static readonly type = '[Booking] Set Demand Letter';
    constructor(public demandLetter: DemandLetterItem[]) {}
  }

  export class FetchReceipt{
    static readonly type = '[Booking] Fetch Receipt';
    constructor(public bookingId:number){}
  }

  export class SetReceipt{
    static readonly type = '[Booking] Set Receipt';
    constructor(public receipt: ReceiptItem[]) {}
  }

  export class SetViewDetail{
    static readonly type = '[Booking] View Details';
    constructor(public  viewDetail: ViewDetailModel) {}
  }
  export class SetPaymentViewDetail{
    static readonly type = '[Booking] View Payment DetailModel';
    constructor(public  viewPaymentDetailModel: ViewPaymentDetailModel) {}
  }

  export class FetchTDS{
    static readonly type = '[Booking] Fetch TDS';
    constructor(public bookingId:number){}
  }

  export class SetTDS{
    static readonly type = '[Booking] Set TDS';
    constructor(public tds: TDSItem[]) {}
  }

  export class FetchJointOwner{
    static readonly type = '[Booking] Fetch Joint Owner';
    constructor(public userId: string, public bookingId: string){}
  }

  export class SetJointOwner{
    static readonly type = '[Booking] Set Joint Owner';
    constructor(public jointOwners: JointOwner[]) {}
  }

  export class DownloadTDSFile{
    static readonly type = '[Booking] Fetch TDS File';
    constructor(public filename: string){}
  }

  export class DownloadBookingFile{
    static readonly type = '[Booking] Fetch Booking File';
    constructor(public filename: string){}
  }

  export class FetchNOC{
    static readonly type = '[Booking] Fetch NOC';
    constructor(public bookingId:number){}
  }

  export class SetNOC{
    static readonly type = '[Booking] Set NOC';
    constructor(public noc: NocItem[]) {}
  }

  export class FetchFaq{
    static readonly type = '[Booking] Fetch FAQ';
    constructor(){}
  }

  export class SetFaq{
    static readonly type = '[Booking] Set FAQ';
    constructor(public faq: Faq[]) {}
  }

  export class FetchMileStone{
    static readonly type = '[Booking] Fetch MileStone';
    constructor(public bookingId:number){}
  }

  export class SetMileStone{
    static readonly type = '[Booking] Set MileStone';
    constructor(public milestone: MileStoneItem[]) {}
  }

  export class FetchKyc{
    static readonly type = '[Booking] Fetch KYC';
    constructor(public bookingId:number){}
  }

  export class SetKyc{
    static readonly type = '[Booking] Set KYC';
    constructor(public kyc: KycItem[]) {}
  }

  export class UploadKyc{
    static readonly type = '[Booking] Upload KYC';
    constructor(public bookingId:number,public ownerName:string,public documentName:string,public userId:string,public file:File){}
  }
  
  export class DownloadKYCFile{
    static readonly type = '[Booking] Fetch KYC File';
    constructor(public filename: string){}
  }

  export class DeleteKyc{
    static readonly type = '[Booking] Delete KYC';
    constructor(public kycId:string){}
  }

  export class SetDeleteKyc{
    static readonly type = '[Booking] Set Delete kYC';
    constructor(public deleteKyc: string) {}
  }

  export class FetchNotification{
    static readonly type = '[Booking] Fetch Notification';
    constructor(public bookingId:number){}
  }

  export class SetNotification{
    static readonly type = '[Booking] Set Notification';
    constructor(public notification: NotificationItem[]) {}
  }