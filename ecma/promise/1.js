/*
  Promise(약속)
*/

// 상황에 따라서 시간이 오래걸리는 로직 : Block Operation
// JS는 개발자가 스레드를 추가할 수 없다.
function sum(start, end) {
  let result = 0;
  for (var i = start; i <= end; i++) {
    result += i;
  }
  return result;
}

let result = sum(1, 1000000000);
console.log('result = ' + result);
