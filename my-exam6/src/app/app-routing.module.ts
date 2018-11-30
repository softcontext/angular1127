import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DataComponent } from './data/data.component';
import { ContactResolveGuard } from './guard/contact-resolve-guard.guard';
import { ContactCanActivateGuard } from './guard/contact-can-activate.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'data/:id',
    //
    canActivate: [ ContactCanActivateGuard ],
    // resolve가드 존재여부 확인, 있으면 ==> DataComponent가 필요한 데이터 존재
    // 주의: 시간이 오래 걸리는 처리는 resolve가드에서 하지 말 것!
    resolve: {
      // ContactResolveGuard 리턴한 결과를 contact라는 키로 컴포넌트에 전달한다.
      contact: ContactResolveGuard
    },
    component: DataComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }