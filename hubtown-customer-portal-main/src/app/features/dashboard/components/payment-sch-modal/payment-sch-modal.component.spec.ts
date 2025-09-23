import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSchModalComponent } from './payment-sch-modal.component';

describe('PaymentSchModalComponent', () => {
  let component: PaymentSchModalComponent;
  let fixture: ComponentFixture<PaymentSchModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentSchModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentSchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
