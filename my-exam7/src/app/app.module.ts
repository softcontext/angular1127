import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BuiltInValidatorComponent } from './built-in-validator/built-in-validator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ElementStatusComponent } from './element-status/element-status.component';
import { FormReferenceVariableComponent } from './form-reference-variable/form-reference-variable.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInValidatorComponent,
    NotFoundComponent,
    ElementStatusComponent,
    FormReferenceVariableComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
