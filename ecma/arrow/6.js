function foo() {
  console.log(this == foo);

  setTimeout(function() {
    console.log(this == global);
    console.log(this);

    console.log(this.a); // undefined

  }, 100);

}

foo.a = 'func';

foo.call(foo);
