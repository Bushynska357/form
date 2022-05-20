import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTypeNumberComponent } from './input-type-number.component';

describe('InputTypeNumberComponent', () => {
  let component: InputTypeNumberComponent;
  let fixture: ComponentFixture<InputTypeNumberComponent>;
  let equal: boolean;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [InputTypeNumberComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTypeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('label should equal id', () => {

    let label = fixture.nativeElement.querySelector('label').getAttribute('for').value;
    let input = fixture.nativeElement.querySelector('input').getAttribute('id').value;

    expect(label).toEqual(input);
  });

});
