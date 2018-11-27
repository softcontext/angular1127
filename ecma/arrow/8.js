// global 객체와 글로벌 스코프는 다릅니다.

function foo() {

  // var cb = (function () {
  //   console.log(this.a); // func
  // }).bind(this);
  //
  // setTimeout(cb, 100);

  setTimeout(() => {
    console.log(this.a); // func
  }, 100);
  // 화살표 함수는 this가 자동으로 가장 가까운
  // 스코프(격리, 대상 자원을 어느 위치에서 접근 가능 여부)와
  // bind되고 변하지 않는다.
}

foo.a = 'func';

foo.call(foo);
