import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Booking } from '../../models/booking.model';
import { Store } from '@ngxs/store';
import { BookingState } from '../../state/booking.state';
import { AuthState } from 'src/app/auth/storeNgxs/auth.state';
import {
  FetchBooking,
  FetchDemandBreakup,
  SetPaymentViewDetail,
} from '../../actions/booking.actions';
import { User } from 'src/app/auth/storeNgxs/model/user.model';
import { LoadData } from '../../state/project-details.state';
import { DemandBreakup } from '../../models/demand-breakup.model';
import { MileStoneItem, ReceiptItem } from '../../models/project-details.model';
import formatToINRCurrency from 'src/app/utils/formatHelper';
import {
  ViewDetailItem,
  ViewDetailModel,
  ViewPaymentDetailModel,
} from '../../models/view-details.model';
import { PaymentSchedule } from '../../models/project-details.model';
import { SetViewDetail } from '../../actions/booking.actions';

import {
  FetchMileStone,
  DownloadBookingFile,
} from '../../actions/booking.actions';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent implements OnInit {
  private store = inject(Store);
  demandBreakup$!: Observable<DemandBreakup | null>;
  paidAmount = 0; // Example initial value for paid amount
  pendingAmount = 0; // Example initial value for pending amount
  totalAmount = 0; // Example total amount
  paidPercentage: number; // This will hold the percentage based on paidAmount and totalAmount
  milestoneItem: MileStoneItem | null = null;
  receiptItem: ReceiptItem[] = [];
  width: any;

  // Timeline Handle
  lastPaidMSPercentage = 0;
  dotsArray: any = []; // Positions for dots as percentages
  isDisabled = true;

  // Payment Schedule details
  viewDetailItemsApi: any = [];
  viewDetailItems: PaymentSchedule[] = [];
  milestone$!: Observable<MileStoneItem[]>;

  formatToINRCurrency = formatToINRCurrency;
  constructor(private cdr: ChangeDetectorRef) {
    // Calculate initial percentage
    this.paidPercentage = (this.paidAmount / this.totalAmount) * 100;
  }

  onRangeChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.paidPercentage = +target.value;
    this.paidAmount = (+target.value / 100) * this.totalAmount;

    // Dynamically update the CSS variable
    const slider = target;
    slider.style.setProperty('--value', `${target.value}%`);
  }

  ngOnInit(): void {
    // this.lastPaidMSPercentage = 0
    this.getPaymentMSDetails();
    this.store.select(BookingState.getBookings).subscribe((booking) => {
      // this.store.dispatch(new FetchDemandBreakup(2005)); // remove this line and uncomment above for actual data
      // this.demandBreakup$ = this.store.select(BookingState.getDemandBreakup); // remove this line and uncomment above for actual data
      if (booking?.[0]?.bookingID) {
        this.store.dispatch(new FetchDemandBreakup(booking?.[0]?.bookingID));

        this.demandBreakup$ = this.store.select(BookingState.getDemandBreakup);
      }
    });

    this.store.select(BookingState.getMileStone).subscribe((milestone) => {
      if (milestone && milestone?.length > 0) {
        var item: any = milestone[0];
        this.totalAmount = item.totalAmount ? Number(item.totalAmount) : 0;
        this.paidAmount = item.paidamount ?? 0;
        this.pendingAmount = item.pendingamount;
        // this.milestoneItem = milestone.find((x) => x.currentMS == 'U') || null;
        this.milestoneItem =
          milestone?.find((x) => x.currentMS === 'U') || null;

        // order based on sequenceno
        let sortedMS = [...milestone].sort(
          (a, b) => a.sequenceno - b.sequenceno
        );

        // Timeline Handle
        let totalMS: number = sortedMS.length;
        let perMSpercent: number = (1 / totalMS) * 100;

        let result = 0 
        let index = 0

        for (const value of sortedMS){
          if (value.reciept === null) {
            break
          }
          index++
          result = perMSpercent * (index)
        }

        if (result > 0 ) {
          this.lastPaidMSPercentage = result;
        }else{
          this.lastPaidMSPercentage = 0
        }

        this.dotsArray = sortedMS?.map((m, i) => {
          const amount = m?.amount ? Number(m.amount) : 0;
          const dotPercent: number = perMSpercent * (i + 1);
          const activeMS = m.reciept ? true : false;
          
          // if (m.reciept) {
          //   this.lastPaidMSPercentage = dotPercent;
          // }

          return {
            milestoneId: m.milestoneId,
            mileStoneName: m.mileStoneName,
            amount: amount,
            actualDate: m.actualDate,
            sequenceno: m.sequenceno,
            dotPercent: dotPercent,
            activeMS: activeMS,
            reciept: m.reciept,
          };
        });
        // this.lastPaidMSPercentage = 0;

        // set active percentage.
        // Force Angular to check for updates
        // this.paidPercentage = (this.paidAmount / this.totalAmount) * 100;
        // const scheduledAmountRange = document.getElementById('scheduledAmountRange')
        // scheduledAmountRange?.style.setProperty('--value', `${this.paidPercentage}%`);
      }
    });

    this.store.select(BookingState.getReceipt).subscribe((receipt) => {
      if (receipt && receipt?.length > 0) {
        this.receiptItem = receipt;
        // this.paidAmount = 0;
        // this.receiptItem.forEach(x=>{
        //   this.paidAmount += Number(x.receiptAmt);
        // });
        if (this.paidAmount > 0) {
          this.paidPercentage = (this.paidAmount / this.totalAmount) * 100;
        } else {
          this.paidPercentage = 10;
        }
        const scheduledAmountRange = document.getElementById(
          'scheduledAmountRange'
        );
        scheduledAmountRange?.style.setProperty(
          '--value',
          `${this.paidPercentage}%`
        );
      }
    });
  }

  // get getPaymentMSDetails
  getPaymentMSDetails(): void {
    this.store.select(BookingState.getBookings).subscribe((booking) => {
      if (booking?.[0]?.bookingID) {
        this.store.dispatch(new FetchMileStone(booking?.[0]?.bookingID));
        this.milestone$ = this.store.select(BookingState.getMileStone);
        this.milestone$.subscribe(
          (items: MileStoneItem[]) => {
            if (items && items.length) {
              this.viewDetailItemsApi = [...items].sort(
                (a, b) => a.sequenceno - b.sequenceno
              );
            }
          },
          (error) => {
            console.error('Error receiving items:', error);
          }
        );
      }
    });
  }

  // Dynamically calculated amounts based on slider percentage
  // get paidAmount(): number {
  //   return (this.paidPercentage / 100) * this.totalAmount;
  // }

  // get pendingAmount(): number {
  //   return this.totalAmount - this.paidAmount;
  // }

  // Handle slider change

  setPaymentS(): void {
    this.viewDetailItems = [];
    let i = 1;
    this.viewDetailItemsApi.forEach((x: any) => {
      let item: PaymentSchedule = {
        milestoneId: x.milestoneId,
        mileStoneName: x.mileStoneName,
        amount: x.amount,
        sequenceno: x.sequenceno,
        currentMS: x.currentMS,
        // actualDate: x.actualDate,
        totalamount: x.totalamount,
        reciept: x.reciept,
      };
      this.viewDetailItems.push(item);
      i++;
    });

    let detail: ViewPaymentDetailModel = {
      title: 'Payment Schedule',
      // headers : ['Sr. No','Milestone','Amount','Actual Date', 'Invoiced', 'Receipt'],
      headers: ['Sr. No', 'Milestone', 'Amount', 'Invoiced', 'Paid'], //Receipt with 'Paid' Displayed Before Name
      data: this.viewDetailItems,
    };
    this.store.dispatch(new SetPaymentViewDetail(detail));
  }
}
