import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuiltInValidatorComponent } from './built-in-validator/built-in-validator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ElementStatusComponent } from './element-status/element-status.component';
import { FormReferenceVariableComponent } from './form-reference-variable/form-reference-variable.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/built-in-validator', pathMatch: 'full' },
  { path: 'built-in-validator', component: BuiltInValidatorComponent },
  { path: 'element-status', component: ElementStatusComponent },
  { path: 'form-reference-variable', component: FormReferenceVariableComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
