import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Faq } from '../../models/project-details.model';
import { LoadData, DataState } from '../../state/project-details.state';
import { BookingState } from '../../state/booking.state';
import { FetchFaq } from '../../actions/booking.actions';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  providers: [Store]
})
export class FaqComponent implements OnInit {
  private store = inject(Store);
  faqs$!: Observable<Faq[]>;

  ngOnInit(): void {
    // this.store.dispatch(new LoadData());
    // this.faqs$ = this.store.select(DataState.getFaqs);
    this.store.dispatch(new FetchFaq());
    this.faqs$ = this.store.select(BookingState.getFaq);    
  }
}
