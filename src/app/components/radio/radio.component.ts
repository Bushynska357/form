import { Component, ElementRef, Injector, Input, OnInit, Renderer2, Self, } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR, RadioControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RadioComponent
    }
  ],
  host: {
    '(change)': ' onChange($event.target.value)'
  }

})
export class RadioComponent extends RadioControlValueAccessor implements OnInit {
  @Input() override value = 0;


  override onChange = () => { };

  override onTouched = () => { };

  override writeValue(value: any): void {
    console.log(value);
    this.value = value;
  }

  override registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  override registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  override fireUncheck(value: any) {
    console.log(value);

    this.value = value;
  }
}
