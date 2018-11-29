import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { CommonModule } from '@angular/common';
// BrowserModule 임포트로 생략이 가능하다.
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ElemRefComponent } from './elem-ref/elem-ref.component';
import { SelectSampleComponent } from './select-sample/select-sample.component';
import { NgclassSampleComponent } from './ngclass-sample/ngclass-sample.component';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { SortPipeComponent } from './sort-pipe/sort-pipe.component';
import { SortingCompaniesPipe } from './sort-pipe/sorting-companies.pipe';
import { MyDatePipe } from './sort-pipe/my-date.pipe';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { HightlightDirective } from './custom-directive/hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ElemRefComponent,
    SelectSampleComponent,
    NgclassSampleComponent,
    BuiltInPipeComponent,
    SortPipeComponent,
    SortingCompaniesPipe,
    MyDatePipe,
    CustomDirectiveComponent,
    HightlightDirective
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// bootstrap: 기동 컴포넌트
