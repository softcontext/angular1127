import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    id: '',
    pw: ''
  };
  errorMessage;
  returnUrl;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    let member = this.loginService.auth(this.user.id, this.user.pw);
    if (member) {
      this.errorMessage = '';
      // 로그인 성공 시 작업
      this.router.navigate([this.returnUrl]);
    } else {
      // 로그인 실패 시 작업
      this.errorMessage = 'ID 또는 Password가 일치하지 않습니다.';
    }
  }
}
