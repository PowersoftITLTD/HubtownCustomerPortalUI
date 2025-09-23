import { PaymentSchedule } from "./project-details.model";

export interface ViewDetailModel{
    title:string;
    headers:string[];
    data: ViewDetailItem[];
}

export interface ViewDetailItem{
    incrementNo:number;
    date:string;
    uniqueNo:string;
    amount:string;
    invoiceDescription?:string|null
    url:string;
}

// Payment schedule
export interface ViewPaymentDetailModel{
    title:string;
    headers:string[];
    data: PaymentSchedule[];
}


