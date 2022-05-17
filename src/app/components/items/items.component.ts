import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() data:any;
  public form!: FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {

    this.form = <FormGroup>this.controlContainer.control;
  }

}
