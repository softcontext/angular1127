function add(x, y) {
  return x + y;
}

// 함수가 파라미터를 못 받는 경우 대신 기본값을 설정할 필요가 있다
console.log(add()); // NaN

// 연산자 || 를 사용하여 받은 파라미터가 없는 경우 대신 기본값을 할당한다.
function add2(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
}
console.log(add2()); // 0

// 새로운 문법으로 파라미터를 받지 못하면 대신 기본값을 사용하도록 설정한다.
function add3(x = 0, y = 0) {
  return x + y;
}
console.log(add3()); // 0
