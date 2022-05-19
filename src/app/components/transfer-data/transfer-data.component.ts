import { Component,  Input, OnInit, } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { CheckQuestion } from 'src/app/core/models/model';

@Component({
  selector: 'app-transfer-data',
  templateUrl: './transfer-data.component.html',
  styleUrls: ['./transfer-data.component.scss']
})
export class TransferDataComponent implements OnInit {
  @Input()question!:any;
  @Input() parentAnswer!: string | undefined;
  public form!: FormGroup;

  constructor(private controlContainer: ControlContainer){}

  ngOnInit(): void {
    this.form = <FormGroup>this.controlContainer.control;
  }


}
