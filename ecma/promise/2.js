/*
  Promise(약속)
*/

// 상황에 따라서 시간이 오래걸리는 로직 : Block Operation
// JS는 개발자가 스레드를 추가할 수 없다.
function sum(start, end, cb) {
  console.log(100);

  setTimeout(function () {
    console.log(200);

    let result = 0;
    for (var i = start; i <= end; i++) {
      result += i;
    }
    // return result;
    cb(result);
  }, 0);

  // setTimeout 함수에게 전달한 cb 함수의 기동조건 2가지
  // 1. 시간이 지남
  // 2. 메인 스레드가 할일이 없는 대기상태일 것
  // 뒤집어서 cb 함수의 로직을 메인 스레드가 맨 마지막에
  // 처리하고 싶을 때 사용할 수 있다.
}

// let result = sum(1, 1000000000);

console.log(1);

sum(1, 1000000000, function (result) {
  console.log('result = ' + result);
});

console.log(2);

let start = Date.now();

while (Date.now() < start + 5000) {

}
