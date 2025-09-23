import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import {
  DemandLetterItem,
  ReceiptItem,
} from '../../models/project-details.model';
import {
  DownloadBookingFile,
  FetchDemandLetter,
  FetchReceipt,
  SetViewDetail,
} from '../../actions/booking.actions';
import { BookingState } from '../../state/booking.state';
import {
  ViewDetailItem,
  ViewDetailModel,
} from '../../models/view-details.model';
import formatToINRCurrency from 'src/app/utils/formatHelper';

@Component({
  selector: 'app-dl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dl.component.html',
  styleUrl: './dl.component.css',
})
export class DLComponent implements OnInit {
  private store = inject(Store);
  demandLetter$!: Observable<DemandLetterItem[]>;
  receipt$!: Observable<ReceiptItem[]>;
  viewDetailItems: ViewDetailItem[] = [];
  formatToINRCurrency = formatToINRCurrency;

  demandLetterItems: DemandLetterItem[] = [];
  receiptItems: ReceiptItem[] = [];

  ngOnInit(): void {
    this.store.select(BookingState.getBookings).subscribe((booking) => {
      // console.log("booking", booking);

      if (booking?.[0]?.bookingID) {
        this.store.dispatch(new FetchDemandLetter(booking?.[0]?.bookingID));
        this.demandLetter$ = this.store.select(BookingState.getDemandLetter);

        this.store.dispatch(new FetchReceipt(booking?.[0]?.bookingID));
        this.receipt$ = this.store.select(BookingState.getReceipt);

        this.demandLetter$.subscribe(
          (items: DemandLetterItem[]) => {
            this.demandLetterItems = items; // Set the emitted values to the component property
          },
          (error) => {
            console.error('Error receiving items:', error);
          }
        );

        this.receipt$.subscribe(
          (items: ReceiptItem[]) => {
            this.receiptItems = items; // Set the emitted values to the component property
          },
          (error) => {
            console.error('Error receiving items:', error);
          }
        );
      }
    });
  }

  setDL(): void {
    this.viewDetailItems = [];
    let i = 1;
    this.demandLetterItems.forEach((x) => {
      let item: ViewDetailItem = {
        date: x.invoiceDate,
        amount: x.invoiceAmt,
        uniqueNo: x.invoiceNo,
        invoiceDescription: x.invoiceDescription,
        incrementNo: i,
        url: x.invoiceUrl,
      };
      this.viewDetailItems.push(item);
      i++;
    });
    let detail: ViewDetailModel = {
      title: 'Demand Letters',
      headers: ['Sr. No', 'Date', 'Invoice No', 'Amount', 'Descripition'],
      data: this.viewDetailItems,
    };
    this.store.dispatch(new SetViewDetail(detail));
  }

  setReceipt(): void {
    this.viewDetailItems = [];
    let i = 1;
    this.receiptItems.forEach((x) => {
      let item: ViewDetailItem = {
        date: x.receiptDate,
        amount: x.receiptAmt,
        uniqueNo: x.receiptNo,
        incrementNo: i,
        url: x.receiptUrl,
      };
      this.viewDetailItems.push(item);
      i++;
    });
    let detail: ViewDetailModel = {
      title: 'Receipts',
      headers: ['Sr. No', 'Date', 'Receipt No', 'Amount', ''],
      data: this.viewDetailItems,
    };
    this.store.dispatch(new SetViewDetail(detail));
  }

  downloadFile(filename: string) {
    if (filename && filename != '') {
      this.store.dispatch(new DownloadBookingFile(filename));
    }
  }
}
