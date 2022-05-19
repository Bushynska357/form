import { TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';


import { DataService } from './data.service';
import { Model,PatientQuestions } from './models/model';

describe('DataService', () => {
  let service: DataService;
  let data: Model;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  it('#data is json', () =>{

  })

});
