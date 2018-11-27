// 화살표 연산자: =>

var x = arguments;

var adder = (a, b) => {
  console.log(arguments == x);
  // 화살표 함수는 arguments를 지원하지 않는다.
  // 파라미터 개수의 상관없이 모두 받아서 처리하려면
  // 나머지 파라미터를 사용해야 한다.

  return a + b;
};

console.log(adder(2, 3, 4));
