function foo() {
  console.log( this.a );
}

function doFoo(fn) {
  fn();
}

var obj = {
  a: 2,
  foo: foo
}

var a = "ouch, global!";

doFoo( obj.foo );