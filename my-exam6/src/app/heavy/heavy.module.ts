import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Heavy1Component } from '../heavy1/heavy1.component';
import { Heavy2Component } from './heavy2/heavy2.component';

@NgModule({
  declarations: [Heavy1Component, Heavy2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // { path: 'heavy/heavy1', component: Heavy1Component },

      // http://localhost:4200/heavy ==> HeavyModule ==> ''
      {
        path: '',
        children: [
          { path: '', component: Heavy1Component },
          { path: 'heavy1', component: Heavy1Component },
          { path: 'heavy2', component: Heavy2Component },
        ]
      },
    ])
  ],
  // exports: [Heavy1Component, Heavy2Component]
})
export class HeavyModule {
  constructor() {
    console.log('HeavyModule() called.');
  }
}
// <app-heavy1></app-heavy1> 처럼 사용하기 위해서 명시적 제공설정이 필요하다.
// exports: [Heavy1Component, Heavy2Component]
