import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioComponent } from './components/radio/radio.component';
import { SelectComponent } from './components/select/select.component';
import { InputTypeNumberComponent } from './components/input-type-number/input-type-number.component';
import { TransferDataComponent } from './components/transfer-data/transfer-data.component';
import { InputTypeComponent } from './components/input-type/input-type.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DataService } from './core/data.service';


@NgModule({
  declarations: [
    AppComponent,
    RadioComponent,
    SelectComponent,
    InputTypeNumberComponent,
    TransferDataComponent,
    InputTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    FormsModule,


    MatRadioModule,
    MatInputModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
