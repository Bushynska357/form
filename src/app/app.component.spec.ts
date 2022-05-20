import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DataService } from './core/services/data.service';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: DataService }
      ]
    }).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    component.form = new FormGroup({
      question: new FormControl(['', Validators.required]),
      age: new FormControl(''),
      medicine: new FormControl(''),
      pills: new FormControl(''),
      water: new FormControl(''),
      answerWater: new FormControl(''),
    });


    fixture.detectChanges();
  });




  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'test-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-project');
  });

  it('should create a FormGroup comprised of FormControls', () => {
    component.ngOnInit();
    expect(component.form instanceof FormGroup).toBe(true);
  });

  it('#submit should send formgroup to dataService', () => {
    const dataService = new DataService();
    const dataServiceSpy = spyOn(dataService, 'sendForm').and.callThrough();
    spyOn(component, 'submit').and.callThrough();

    component.submit();
    expect(component.submit).toHaveBeenCalled();
    expect(dataService).toBeDefined();
    expect(dataServiceSpy).toBeDefined();
    expect(dataServiceSpy).toHaveBeenCalled;


  });


});
