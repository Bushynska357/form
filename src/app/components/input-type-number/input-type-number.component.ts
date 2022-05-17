import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-type-number',
  templateUrl: './input-type-number.component.html',
  styleUrls: ['./input-type-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputTypeNumberComponent
    }
  ],
  host: {
    '(change)': 'onChange($event.target.value)'
  }
})
export class InputTypeNumberComponent implements OnInit, ControlValueAccessor {
  @Input() title!:string;
  onChange = () => {};
  onTouched = () => {};
  constructor() { }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

}
