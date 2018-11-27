function foo() {
  console.log(this == foo);

  // xFun(a, b.bind(this), this);

  setTimeout(
    (function() {
      console.log(this.a); // func
    })
    .bind(this),
    100
  );

  console.log(this == foo);
}

// 함수.bind(타겟) 처리는 함수안에 this를 타겟으로 고정한
// 함수를 리턴합니다.

foo.a = 'func';

foo.call(foo);
