console.log(this == exports);
exports.a = 20;

var obj = {
  a: 10,
  show: function () {
    console.log(this.a);
  },
  print: () => {
    console.log(this.a);
  }
}

obj.show();
obj.print();
// 화살표 함수는 메소드 정의용이 아닙니다.
// 주로 콜백함수 작성에 사용됩니다.
