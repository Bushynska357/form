import {  Component, Input} from '@angular/core';
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
export  class RadioComponent extends RadioControlValueAccessor {

  @Input() override name:any;
  @Input() title!:string;

  override onChange = () => {};


  override registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

}
