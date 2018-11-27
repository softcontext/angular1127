// var obj = {
//   a: 10,
//   b: 20,
//   say: function () {
//     console.log('Hello');
//   }
// };
//
// console.log(obj.a, obj.b);
// obj.say();

var a = 10;
var b = 20;
function say() {
  console.log('Hello');
}

// var obj = {
//   "a": a,
//   'b': b,
//   say: say
// };

var obj = {
  a,
  b,
  say,
  print () {
    console.log('Hi');
  }
};

console.log(obj.a, obj.b);
obj.say();
obj.print();
