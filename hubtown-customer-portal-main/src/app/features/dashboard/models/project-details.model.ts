// data.model.ts
export interface ProjectDetails {
    projectName: string;
    status: string;
    building: string;
    unit: string;
    area: string;
    floor: string;
    carPark: number;
    unitType: string;
    reraNo: string;
    officeAddress: string;
  }
  
  export interface JointOwner {
    name: string;
    email: string;
    mobile: string;
    ownerShipType: string;
  }
  
  export interface BankPayableAccount {
    particulars: string;
    bankName: string;
    branchName: string;
    accountNumber: string;
    ifscCode: string;
  }

  export interface Faq {
    question: string;
    answer: string;
  }

  export interface AccountSummaryItem {
    particulars: string;
    flatConsideration: {
      amount: string;
      taxes: string;
    };
    societyCharges: {
      amount: string;
      taxes: string;
    };
    interestOthers: {
      amount: string;
      taxes: string;
    };
    unadjusted:{
      unadjusted:string;
    }
  }

  export interface DemandLetterItem {
    invoiceDate : string;
    invoiceDescription : string;
    invoiceNo : string;
    invoiceAmt : string;
    invoiceUrl : string;
  }
  export interface PaymentSchedule {
    milestoneId : number;
    mileStoneName : string;
    amount : number;
    sequenceno : number;
    currentMS : string;
    // actualDate : string;
    reciept:number;
    totalamount:number;
  }

  export interface ReceiptItem {
    receiptDate : string;
    receiptNo : string;
    receiptAmt : string;
    receiptUrl : string;
  }

  export interface TDSItem{
    tdsDate: string;
    transactionNo : string;
    tdsAmount: string;
    tdsFile: string;
    isActive: boolean
  }

  export interface NocItem{
    nocDate:string;
    nocUrl:string;
    booking:string;
    amount:string;
    nocid:number;
  }

  export interface MileStoneItem{
    milestoneId: any;
    mileStoneName:string;
    amount:string;
    tentativeDate:string;
    actualDate:string;
    currentMS:string;
    milestoneDocUrl:string;
    totalAmount:string;
    sequenceno: number;
    milestoneItem: number;
    flatConsiderationamount: number;
    reciept:any;
  }

  export interface KycItem{
    kycId:string;
    ownerName:string;
    documentFile:string;
    documentName:string;
    createdAt:string;
    modifiedAt:string
  }

  export interface NotificationItem{
    notificationID:number;
    notificationPayload:string;
    notificationType:string;
    status:boolean;
    createdAt:string;
  }
  
  // Add more interfaces as per your JSON structure
  
  export interface DataStateModel {
    projectDetails: ProjectDetails | null,
    jointOwners: JointOwner[],
    bankPayableAccounts: BankPayableAccount[],
    faqs: Faq[],
    accountSummary: AccountSummaryItem[],
    demandLetter: DemandLetterItem[],
    receipt: ReceiptItem[],
    tds:TDSItem[],
    noc:NocItem[],
    kyc:KycItem[],
    notification:NotificationItem[]
    // Add more properties as needed
  }