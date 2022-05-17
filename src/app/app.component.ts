import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'test-project';
  form!: FormGroup;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.form = this.fb.group({
      question: ['Yes', Validators.required],
      age:[],
      medicine:[]
    });
  }

  submit(){
    console.log(this.form.get('question')?.value);
    console.log(this.form.get('age')?.value);
    console.log(this.form.get('medicine')?.value);
  }
}
