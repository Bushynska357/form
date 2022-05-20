import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormControl, FormsModule, NgControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { RadioComponent } from './radio.component';

// let formControlSpy: jasmine.SpyObj<NgControl>;
// formControlSpy = jasmine.createSpyObj('NgControl', ['value']);

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule
      ],
      declarations: [ RadioComponent ],
      providers: [
        { provide: NgControl, useValue: new FormControl() },
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('input[type="radio"] should have the same name',()=>{
    let input: DebugElement[]  = fixture.nativeElement.querySelector('input');
    for (var i = 0; i < input.length; i++){
      if(input[i].name === input[i-1].name){
        expect(component).toBeTruthy();
      }else{
        expect(component).toThrowError()
      }
    }

  })


});
