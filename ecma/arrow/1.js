function add(a, b) {
  console.log(arguments); // { '0': 2, '1': 3, '2': 4 }
  console.log(a, b);

  // return a + b;

  let result = 0;

  // arguments['0']
  // arguments['1']
  // arguments['2']

  for (var variable in arguments) {
    if (arguments.hasOwnProperty(variable)) {
      result += arguments[variable];
    }
  }

  return result;
}

console.log(add(2, 3, 4));
