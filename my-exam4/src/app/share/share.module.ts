import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataShareService } from './data-share.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [DataShareService],
  exports: []
})
export class ShareModule { }
// 서비스는 자동으로 exports 됩니다.
