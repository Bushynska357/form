import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CheckQuestion, PatientQuestions } from 'src/app/core/models/model';


@Component({
  exportAs: "dynamicForm",
  selector: 'app-transfer-data',
  templateUrl: './transfer-data.component.html',
  styleUrls: ['./transfer-data.component.scss']
})
export class TransferDataComponent implements OnInit {
  @Input()question!:CheckQuestion;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
