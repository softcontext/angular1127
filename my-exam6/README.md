### Path Variable

http://localhost:4200/emps/1
http://localhost:4200/emps/20
http://localhost:4200/emps/32

ng g c home
ng g c contact
ng g c data
ng g g guard/ContactResolve

Guard: 라우팅 처리 시 특정 상황에서 기동하는 서비스

ng g g guard/ContactCanActivate
ng g c login

ng g s service/login

ng g g guard/ContactCanDeactivate

### Nested Component Routing

ng g c parent
ng g c parent/child1
ng g c parent/child2
ng g c parent/child3

ng g g guard/CanActivateChild

### Lazy Loading Module

처리가 오래걸리는 무거운 모듈은 사용자가 요청할 때 객체를 생성하고자 한다.
ng g m heavy
ng g c heavy1 --module=heavy
ng g c heavy/heavy2 --module=heavy

루트 모듈에서 imports 항목에 모듈을 설정하면 EAGER 로딩방식이다.

ng g g guard/my-can-load

### Guard
* resolve
* canActivate
* canDeactivate
* canLoad
* CanActivateChild
