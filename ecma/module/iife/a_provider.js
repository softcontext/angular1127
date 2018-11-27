window.GOOGLE = {};

(function(NS) {
  'use strict';

  var a = 10;

  function say() {
    console.log('Hello World!');
  }

  NS.A = {
    a,
    say
  };
}(window.GOOGLE));

// console.log(1);
//
// if (true) {
//   console.log(2);
// }
//
// // 함수의 코드 블럭연산자는 언제나 범위연산자입니다.
// (function() {
//   console.log(3);
// }());
//
// console.log(4);
