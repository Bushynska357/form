import { Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectComponent
    }
  ],
  host: {
    '(change)': ' onChange($event.target.value)'
  }
})
export class SelectComponent extends SelectControlValueAccessor implements OnInit {

  // constructor() { }
  states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];

  ngOnInit(): void {
  }


  override onChange = () => {};

  override onTouched = () => {};

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

}
