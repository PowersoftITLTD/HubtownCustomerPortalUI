import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './components/faq/faq.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { PaymentScheduleComponent } from './components/payment-schedule/payment-schedule.component';
import { DLComponent } from './components/dl/dl.component';
import { PossessionComponent } from './components/possession/possession.component';
import { ProjectUpdatesComponent } from './components/project-updates/project-updates.component';
import { UpcomingProjectsComponent } from './components/upcoming-projects/upcoming-projects.component';
import { HeaderComponent } from './components/header/header.component';
import { MilestoneComponent } from './components/milestone/milestone.component';
import { ContentComponent } from './components/content/content.component';
import { BankAccountsComponent } from './components/bank-accounts/bank-accounts.component';
import { KycModalComponent } from './components/kyc-modal/kyc-modal.component';
import { ReceiptsModalComponent } from './components/receipts-modal/receipts-modal.component';
import { MilestoneModalComponent } from './components/milestone-modal/milestone-modal.component';
import { AskQueryComponent } from './components/ask-query/ask-query.component';
import { TdsModalComponent } from './components/tds-modal/tds-modal.component';
import { NocModalComponent } from './components/noc-modal/noc-modal.component';
import { PaymentSchModalComponent } from './components/payment-sch-modal/payment-sch-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ContentComponent,
    ProjectDetailsComponent,
    BookDetailsComponent,
    MilestoneComponent,
    PaymentScheduleComponent,
    BankAccountsComponent,
    DLComponent,
    PossessionComponent,
    ProjectUpdatesComponent,
    UpcomingProjectsComponent,
    FaqComponent,
    KycModalComponent,
    ReceiptsModalComponent,
    PaymentSchModalComponent,
    MilestoneModalComponent,
    TdsModalComponent,
    NocModalComponent,
    AskQueryComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: []
})
export class DashboardComponent {
  
}
