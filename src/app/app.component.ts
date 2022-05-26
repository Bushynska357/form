import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './core/services/data.service';
import * as data from './core/form.json';
import { Model, PatientQuestions } from './core/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data!: any;
  form: FormGroup = this.fb.group({});
  title = 'test-project';

  constructor(private fb: FormBuilder, public dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.data;


    this.data.patientQuestions.forEach((el: any) => {
      this.createControls(el);
    });
  }

  createControls(el: any): void {
    if (!el.formControlName) {
      return;
    }

    this.form.addControl(el.formControlName, new FormControl(''));

    if (el.childItems) {
      el.childItems.forEach((item: any) => {
        this.createControls(item)
      });
    }
  }

  submit() {
    console.log(this.form);

    this.dataService.sendForm(this.form)
  }
}
