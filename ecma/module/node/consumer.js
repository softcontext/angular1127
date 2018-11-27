// provider.js에 있는 자원을 사용하고 싶다.

const provider = require('./provider');

console.log(provider);
console.log(typeof provider);

console.log(provider.a);
provider.say();

console.log('-----------');

const {a, say} = require('./provider');

console.log(a);
say();
