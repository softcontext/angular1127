// 함수는 파라미터를 낱개로 받는다.
function add(a, b) {
  return a + b;
}

// 마침 갖고 있는 데이터의 자료형이 배열이다.
let data = [1, 2];

// 배열 요소를 직접 하나씩 꺼내서 파라미터로 전달한다. 불편하다!
console.log(add(data[0], data[1])); // 3

// apply 메소드의 두번째 파라미터로 배열을 전달하면서 함수 add를 호출한다.
// 배열의 아이템들이 많을수록 이전 방법 보다는 편리하다.
console.log(add.apply(null, data)); // 3

add(data);

// 스프레드 연산자 ...를 사용한다. 배열의 아이템들을 꺼내고 펼쳐서 전달한다.
// 1, 2 로 치환한 다음 add 함수를 호출한다.
console.log(add(...data)); // 3

console.log('----------------------');

// #다른 사용예
let array1 = [2, 3, 4];

// 배열 array1을 분해해서 array2에 넣는다.
let array2 = [1, ...array1, 5];

console.log(array2); // [ 1, 2, 3, 4, 5 ]

console.log('----------------------');
// #다른 사용예
array1 = [1, 2];
array2 = [3, 4];

// 두 배열을 붙인다.
let array3 = array1.concat(array2);
console.log(array1); // [ 1, 2 ]
console.log(array2); // [ 3, 4 ]
console.log(array3); // [ 1, 2, 3, 4 ]
// push 함수를 사용하면 array2가 가리키는 배열이 통째로 들어간다.
array1.push(array2);
console.log(array1); // [ 1, 2, [ 3, 4 ] ]
// reset
array1 = [1, 2];
array2 = [3, 4];
// array2 배열의 아이템을 꺼내고 펼쳐서 array1 배열에 추가한다.
array1.push(...array2);
console.log(array1); // [ 1, 2, 3, 4 ]


console.log('----------------------');


// #rest parameter(나머지 파라미터)
// 파라미터 자리에 쓰이면 스프레드 연산자란 용어 대신
// 레스트 파라미터라고 부른다.
// 세 번째 파라미터는 사용되지 않는다.

function subtract(a, b) {
  return a - b;
}
// 전달 받은 파라미터 중 맨 앞에 하나를 변수 a에 할당한다.
// 다른 파라미터는 레스트 파라미터 문법으로 설정하여 args 배열이 갖고 있다.
function calc(a, ...args) {
  console.log(Array.isArray(args)); // true
  console.log(args); // [ 1, 2, 3 ]
  switch (a) {
    case '+':
      return add(...args);
    case '-':
      return subtract(...args);
    default:
      return 0;
  }
}
console.log(calc('+', 1, 2, 3)); // 3
console.log(calc('-', 1, 2, 3)); // -1
