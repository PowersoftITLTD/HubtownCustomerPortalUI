import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSummaryItem, BankPayableAccount } from '../../models/project-details.model';
import { DataState, LoadData } from '../../state/project-details.state';
import { BookingState } from '../../state/booking.state';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchAccountSummary, FetchBankPayableAccount } from '../../actions/booking.actions';
import formatToINRCurrency from 'src/app/utils/formatHelper';
// import formatToINRCurrency from 'src/app/utils/formatHelper';

@Component({
  selector: 'app-bank-accounts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bank-accounts.component.html',
  styleUrl: './bank-accounts.component.css',
  providers: [Store]
})
export class BankAccountsComponent implements OnInit {
  private store = inject(Store);
  bpa$!: Observable<BankPayableAccount[]>;
  accountSummary$!: Observable<AccountSummaryItem[]>;
  outstandingWithinDueAmout!:number;
  outstandingOverDueAmount!:number;
  tdsOutstanding!:number;
  accountSummaryList:AccountSummaryItem[] = []
  bpaData:BankPayableAccount[] = []
  formatToINRCurrency = formatToINRCurrency

  ngOnInit(): void {
    // this.store.dispatch(new LoadData());
    // this.bpa$ = this.store.select(DataState.getBankPayableAccounts);
    // this.accountSummary$ = this.store.select(DataState.getAccountSummary);

    this.store.select(BookingState.getBookings).subscribe(booking => {
      // console.log("booking", booking);
      
      if(booking?.[0]?.bookingID){
        this.store.dispatch(new FetchAccountSummary(booking?.[0]?.bookingID));
        this.store.dispatch(new FetchBankPayableAccount(booking?.[0]?.bookingID));
        this.accountSummary$ = this.store.select(BookingState.getAccountSummary);
        

        this.accountSummary$.subscribe(
          (items: AccountSummaryItem[]) => {            
          this.accountSummaryList = [];
          items.forEach(item => {
            if(!(item.flatConsideration.amount == "0" && item.flatConsideration.taxes == "0" &&
              item.societyCharges.amount == "0" && item.societyCharges.taxes == "0" &&
              item.interestOthers.amount == "0" && item.interestOthers.taxes == "0" && item.unadjusted.unadjusted == "0")
            ){
              this.accountSummaryList.push(item);
            }
          })
          });

        this.bpa$ = this.store.select(BookingState.getBankPayableAccount);

        this.bpa$.subscribe((data: BankPayableAccount[]) => {
          this.bpaData = data; // Populate bpaData
        });

        

        this.outstandingWithinDueAmout = booking?.[0]?.outstandingWithinDueAmount;
        this.outstandingOverDueAmount = booking?.[0]?.outstandingOverdueAmount;
        this.tdsOutstanding = booking?.[0]?.tdsOutstanding;
      }
    })
  }

  formatToINRCurrencyHandle(v: any){
    if(v){
      return formatToINRCurrency(v);
    }
    return 0;
  }

}
