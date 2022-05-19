import { Injectable, OnInit } from '@angular/core';
import * as data from './form.json';
import { Model } from './models/model';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  get data(): Model { return data; }

  sendForm(form:any){
    console.log(form);
  }



}
