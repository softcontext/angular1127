var adder = (a, b) => a + b;
// 범위연산자를 생략하면 {return 코드}처럼 작동한다.

console.log(adder(2, 3));

/*
  1. 함수 선언을 간략화 목적으로 많이 사용
  2. 원래 도입 목적: this 자동화 처리
*/

var fn = a => ({id:a});

// => 바로 다음에 { 기호가 오면 범위연사자로 판단한다.
// ({ 소괄호를 붙이면 { 기호는 객체 문법이 된다.

console.log(fn(1)); // {id:1}

var fn2 = a => {
  return {id:a};
};

console.log(fn2(1));
