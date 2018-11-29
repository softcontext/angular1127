import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ElemRefComponent } from './elem-ref/elem-ref.component';
import { SelectSampleComponent } from './select-sample/select-sample.component';
import { NgclassSampleComponent } from './ngclass-sample/ngclass-sample.component';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { SortPipeComponent } from './sort-pipe/sort-pipe.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'elem-ref', component: ElemRefComponent },
  { path: 'select-sample', component: SelectSampleComponent },
  { path: 'ngclass-sample', component: NgclassSampleComponent },
  { path: 'built-in-pipe', component: BuiltInPipeComponent },
  { path: 'sort-pipe', component: SortPipeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// 앵귤러 개발자가 라우팅 처리 기술은 완성 : RouterModule
// 그런데 RouterModule은 그냥 사용해서는 의미가 없다.
// 사용자가 라우팅 매핑로직을 알려주고 사용해야 한다.
