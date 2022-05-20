import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import data from '../form.json';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  ngOnInit(): void {

  }

  get data(): Model {return data; }


  sendForm(form:FormGroup){
    console.log(form);
    return form;
  }




}
