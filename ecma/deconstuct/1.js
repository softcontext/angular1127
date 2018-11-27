var obj = {
  a: 10,
  b: 20,
  c: 30
};

// 객체의 속성 a, c를 꺼내서 사용하고 싶다.

var a1 = obj.a;
var c1 = obj.c;

console.log(a1 + c1);

var {a, c} = obj;

console.log(a + c);

// function add(subject) {
//   var a = subject.a;
//   var c = subject.c;
//   return a + c;
// }
//
// console.log(add(obj));

function add({a, c}) {
  return a + c;
}

console.log(add(obj));
