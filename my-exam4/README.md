npm start : 최신 버전 ng 사용
ng serve : 프로젝트 내 설치된 ng 사용

루트 모듈 AppModule

### 새 모듈 만들기
ng g m core  
ng g m member  
ng g m player  
ng g m share  

### 특정 모듈에 컴포넌트 만들기

* 루트 모듈에 등록됨
ng g c home

* CoreModule 모듈에 등록됨, core 폴더 밑에 모듈 파일이 있을 때, title 폴더가 생김
ng g c core/title

* MemberModule 모듈에 등록됨
ng g c member --module=member

* PlayerModule 모듈에 등록됨
ng g c player --module=player

* share 폴더 밑에 생성. 등록은 루트에 모듈에 됨
ng g s share/data-share
