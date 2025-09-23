import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackOtpComponent } from './feedback-otp.component';

describe('FeedbackOtpComponent', () => {
  let component: FeedbackOtpComponent;
  let fixture: ComponentFixture<FeedbackOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackOtpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
