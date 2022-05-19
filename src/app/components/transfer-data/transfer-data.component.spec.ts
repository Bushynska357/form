import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TransferDataComponent } from './transfer-data.component';

describe('TransferDataComponent', () => {
  let component: TransferDataComponent;
  let fixture: ComponentFixture<TransferDataComponent>;


  const fg: FormGroup = new FormGroup({});
  const fgd: FormGroupDirective = new FormGroupDirective([], []);
fgd.form = fg;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ TransferDataComponent ],
      providers: [
        { provide: ControlContainer, useValue: fgd }
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
