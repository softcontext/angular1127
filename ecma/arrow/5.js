global.a = 'global';

// JS에서 this는 고정이 아니고 함수를 호출하는 상황에 따라
// 가변적이므로 주의가 필요합니다.

function foo() {
  console.log(this == global);
  console.log(this == foo);
  console.log(this.a);
}

foo.a = 'func';

foo(); // global

console.log('----------');

foo.call(foo); // func

// 함수를 호출하는 시점에 call, apply 함수를 이용하여
// 함수안에서 사용할 this를 지정할 수 있습니다.
