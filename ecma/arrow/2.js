// 함수 선언식
// function add(a, b) {
//   return a + b;
// }

// 함수 표현식
var add = function (a, b) {
  return a + b;
};

console.log(add(2, 3, 4));

// 화살표 연산자: =>

var adder = (a, b) => {
  return a + b;
};

console.log(adder(2, 3, 4));
