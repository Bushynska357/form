import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './core/data.service';
import * as data from './core/form.json';
import { Model, PatientQuestions } from './core/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data!:any;
  form!: FormGroup;
  title = 'test-project';

  constructor(private fb: FormBuilder, public dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.data;

    this.form = this.fb.group({
      question: ['', Validators.required],
      age: [],
      medicine: [],
      pills: [],
      water: [],
      answerWater: []
    });
  }

  submit() {
    this.dataService.sendForm(this.form)
  }
}
