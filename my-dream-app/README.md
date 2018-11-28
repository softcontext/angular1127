# ng serve 처리 순서

index.html : JS 코드를 브라우저에게 전달하는 용도
main.ts : 우리 코드의 시작점

main.ts ==> app.module.ts

`@NgModule`
declarations: 화면처리와 관련한 기술을 모듈에 등록, Component, Pipe, Directive

`@Component`
1. class : 상태(변수), 이벤트 연동 함수
2. HTML : 화면 구조
3. CSS : 화면 디자인

@Component({
  selector: 'app-root', // 커스텀 태그명
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

프로젝트 만들기
ng new project-folder

컴포넌트 만들기
$ ng generate component 컴포넌트명
$ ng g component 컴포넌트명
줄여서 사용 가능
$ ng g c 컴포넌트명

서비스 만들기
$ ng g service 서비스명
$ ng g s 서비스명

폴더 없이 컴포넌트 만들기
$ ng g c home --flat=true
만들면서 특정 모듈에 등록하기
$ ng g c home --module=AppModule
테스트 파일은 제외하고 만들기
$ ng g c home --spec=false

클래스 만들기
$ ng g class 클래스명

따라 해보기
$ ng g class model/experiment
$ ng g c experiments
$ ng g c experiments/experiment-detail
$ ng g s common/state

```
import { StateService } from './common/state.service';

@NgModule({
  providers: [StateService]
})
```

```
@Injectable({
  providedIn: 'root'
})
```

$ ng g s common/experiments
$ ng g c about
