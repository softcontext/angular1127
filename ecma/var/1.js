var a = 10;

if (true) {
  console.log(a);

  var b = 20;
}

console.log(b);

// 조건문에 코드 블럭연산자는 var로 선언한 변수의
// 범위를 제약하지 못한다.

for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log('i = ' + i);

// 혼한 스러워 하는 개발자를 위해서
// let을 도입했다.

var a = 10; // 심지어 재 선언도 된다!

if (true) {
  console.log(a);

  let x = 20;
}

// ReferenceError: x is not defined
// console.log(x);
