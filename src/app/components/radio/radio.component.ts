import {  Component, Input, OnInit} from '@angular/core';
import { NG_VALUE_ACCESSOR, RadioControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RadioComponent
    },
  ],

  host: {
  '(change)':'onChange($event.target.value)'
  }

})
export  class RadioComponent extends RadioControlValueAccessor implements OnInit {

  @Input() override name:any;
  @Input() title!:string;

  override onChange = () => {};

  override onTouched = () => { };

  override writeValue(value: any): void {
     this.value = value;
  }

  override registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  override registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  override fireUncheck(value: any) {
    this.writeValue(value);
  }
}
