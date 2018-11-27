function add(a, b) {
  console.log('a =', a, 'b =', b);
  return a + b;
}

console.log(add(2, 3));
console.log(add(2, 3, 4));
console.log(add(2));

// 함수 호출은 함수 이름으로만 처리한다.

// function add(a, b) {
//   return a - b;
// }
