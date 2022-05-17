import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './core/data.service';
import * as data from './core/form.json';
import { PatientQuestions } from './core/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  data:any;
  title = 'test-project';
  form!: FormGroup;
  constructor(private fb: FormBuilder, public dataService:DataService){}

  ngOnInit(): void {
    this.data = data;


    this.form = this.fb.group({
      question: ['Yes', Validators.required],
      age:[],

      medicine:[],
      isWaterExist:[]
    });
  }

  submit(){
    console.log(this.form.get('question')?.value);
    console.log(this.form.get('age')?.value);
    console.log(this.form.get('medicine')?.value);
    console.log(this.form.get('form2'));

  }
}
