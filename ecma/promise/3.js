var fs = require('fs');

// A ==일을 의뢰==> B
// A <==결과 응답은 오래 걸림== B
// A 결과로 추가 작업

// A ==일을 의뢰==> B
// A <==약속을 즉시 응답== B
// A 기다리지 않고 약속객체에 결과를 받으면 처리하는 작업을 추가 작업

var promise = new Promise(function(resolve, reject) {
  fs.readFile(__dirname + '/data.txt', 'utf-8', function(error, data) {
    if (error) {
      return reject(error);
    }
    resolve(data);
  });
});

promise
.then(function(result) {
  console.log(result);
  return 100;
})
.then(function (data) {
  console.log(data);
  return data + 10;
})
.catch(function(error) {
  console.log(error.message);
})
.then(function (data) {
  console.log(data);
});
