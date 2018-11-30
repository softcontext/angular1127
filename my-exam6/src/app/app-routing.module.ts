import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DataComponent } from './data/data.component';
import { ContactResolveGuard } from './guard/contact-resolve-guard.guard';
import { ContactCanActivateGuard } from './guard/contact-can-activate.guard';
import { ContactCanDeactivateGuard } from './guard/contact-can-deactivate.guard';
import { MyCanActivateChildGuard } from './guard/my-can-activate-child.guard';
import { MyCanLoadGuard } from './guard/my-can-load.guard';
import { LoginComponent } from './login/login.component';

// import { Heavy1Component } from './heavy1/heavy1.component';

import { ParentComponent, Child1Component,
  Child2Component, Child3Component } from './parent';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
    canDeactivate: [ContactCanDeactivateGuard]
  },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'data/:id',
    // 컴포넌트의 기동여부를 결정하는 가드
    canActivate: [ ContactCanActivateGuard ],
    // resolve가드 존재여부 확인, 있으면 ==> DataComponent가 필요한 데이터 존재
    // 주의: 시간이 오래 걸리는 처리는 resolve가드에서 하지 말 것!
    resolve: {
      // ContactResolveGuard 리턴한 결과를 contact라는 키로 컴포넌트에 전달한다.
      contact: ContactResolveGuard
    },
    component: DataComponent
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: '',
        canActivateChild: [MyCanActivateChildGuard],
        children: [
          { path: '', component: Child1Component },
          { path: 'child1', component: Child1Component },
          { path: 'child2', component: Child2Component },
        ]
      },
      { path: 'child3', component: Child3Component },
    ]
  },

  // { path: 'heavy/heavy1', component: Heavy1Component },

  {
    path: 'heavy',
    loadChildren: 'src/app/heavy/heavy.module#HeavyModule',
    canLoad: [MyCanLoadGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
