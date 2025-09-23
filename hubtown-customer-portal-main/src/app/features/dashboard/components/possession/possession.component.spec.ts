import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PossessionComponent } from './possession.component';

describe('PossessionComponent', () => {
  let component: PossessionComponent;
  let fixture: ComponentFixture<PossessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PossessionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PossessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
