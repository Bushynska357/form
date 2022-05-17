import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup } from '@angular/forms';
import { CheckQuestion, PatientQuestions } from 'src/app/core/models/model';


@Component({

  selector: 'app-transfer-data',
  templateUrl: './transfer-data.component.html',
  styleUrls: ['./transfer-data.component.scss']
})
export class TransferDataComponent implements OnInit {
  @Input()question!:any;
  // @Input()group!:FormGroup;
  public form!: FormGroup;


  constructor(private controlContainer: ControlContainer){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.form = <FormGroup>this.controlContainer.control;
    console.log('transfer-data', this.form);
  }


}
