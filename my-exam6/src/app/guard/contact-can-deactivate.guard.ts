import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ContactCanDeactivateGuard implements CanDeactivate<HomeComponent> {

  canDeactivate(
    component: HomeComponent,
    currentRoute: ActivatedRouteSnapshot,
    // currentState: RouterStateSnapshot,
    // nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (component && component.text !== '') {
      return window.confirm(
        `화면이 전환되면 저장되지 않은 상태정보는 손실됩니다.\n경로를 변경하시겠습니까?`);
    }

    // true를 리턴하면 컴포넌트 파괴되고 화면이 변경됩니다.
    // false를 리턴하면 컴포넌트 변경작업이 취소됩니다.
    return true;
  }

}
