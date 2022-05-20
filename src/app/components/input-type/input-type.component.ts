import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { CheckQuestion } from 'src/app/core/models/model';

@Component({
  selector: 'app-input-type',
  templateUrl: './input-type.component.html',
  styleUrls: ['./input-type.component.scss']
})
export class InputTypeComponent implements OnInit {
  @Input() data!:CheckQuestion;
  public form!: FormGroup;


  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {

    this.form = <FormGroup>this.controlContainer.control;
  }

}
