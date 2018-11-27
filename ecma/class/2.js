function Car() {
  // 새 객체의 기본 프로퍼티로 추가한다.
  this.color = 'Red';
}
// 일반 함수는 prototype 히든 프로터가 존재하고
// 상속자원 등록용 객체를 자동으로 갖는다.
Car.prototype.show = function () {
  console.log('this.color = ' + this.color);
};
// 함수는 선언 즉시 객체이므로 객체의 행동을 수행할 수 있다.
Car.info = function (obj) {
  console.log(Reflect.ownKeys(obj));
};

var c = new Car();
console.log(c);
console.log(c.__proto__ === Car.prototype); // true
console.log(c instanceof Car); // true

c.show();
Car.info(c);
