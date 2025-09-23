import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackLoginComponent } from './feedback-login.component';

describe('FeedbackLoginComponent', () => {
  let component: FeedbackLoginComponent;
  let fixture: ComponentFixture<FeedbackLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
