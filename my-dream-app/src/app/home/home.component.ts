import { Component, OnInit } from '@angular/core';
import { StateService } from '../common/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body: string = 'This is the about home body';
  message: string;

  // 서비스는 앵귤러가 미리 객체를 만들고 컨테이너에 등록합니다.
  // 서비스를 사용하고 싶은 컴포넌트에서 생성자에 파라미터 자료형을 명시하면
  // 앵귤러 찾아서 주입(Dependency Injection) 해 줍니다.
  constructor(private _stateService: StateService) { }

  // ng로 시작하는 메소드는 컴포넌트 기동 시 동작하는 라이프사이클 메소드 중 하나입니다.
  // 컴포넌트 객체가 만들어 진 후 기동합니다.
  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
