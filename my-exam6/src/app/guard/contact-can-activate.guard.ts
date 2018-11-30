import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactCanActivateGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log('-- ContactCanActivateGuard --');

    // SessionStorage에 로그인 정보가 있는 확인

    // 있으면 통과
    if (sessionStorage.getItem('currentUser')) {
      return true;
    }

    // 없으면 로그인 화면으로 리다이렉트
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    // 컴포넌트 연동 안함
    return false;
  }
}
