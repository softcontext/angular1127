var a = 10;

function say() {
  console.log('Hello World!');
}

// 모든 자원이 자동으로 외부에 제공되지는 않는다.
// 선택적으로 공개한 자원만이 제공됩니다.

// module.exports = {
//   a: a,
//   say: say
// }

// exports는 module.exports를 가리키는 별칭이다.
exports.a = a;
exports.say = say;
