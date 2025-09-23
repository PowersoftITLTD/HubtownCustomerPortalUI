import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NocModalComponent } from './noc-modal.component';

describe('NocModalComponent', () => {
  let component: NocModalComponent;
  let fixture: ComponentFixture<NocModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NocModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NocModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
