import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  member = {
    id: 'user',
    pw: '1234'
  }

  constructor() { }

  auth(id, pw) {
    if (id === this.member.id) {
      if (pw === this.member.pw) {
          // 로그인 처리결과인 사용자 정보를 SessionStorage에 저장한다.
          sessionStorage.setItem('currentUser', JSON.stringify(this.member));

          return this.member;
      }
    }
    return null;
  }
}
