import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as data from './form.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly _questions = new BehaviorSubject<any>('');
  readonly questions$ = this._questions.asObservable();
  data!:any;

  constructor() { }


  setAnswer(ans:any){
    this._questions.next(ans)
  }
}
