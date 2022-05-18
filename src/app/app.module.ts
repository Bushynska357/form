import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioComponent } from './components/radio/radio.component';
import { SelectComponent } from './components/select/select.component';
import { InputTypeNumberComponent } from './components/input-type-number/input-type-number.component';
import { TransferDataComponent } from './components/transfer-data/transfer-data.component';
import { InputTypeComponent } from './components/input-type/input-type.component';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
