// error in foo or bar
var a, b;

function foo(x) {
  a = x * 2;
  baz();
}

function bar(y) {
  b = y * 2;
  baz();
}

function baz() {
  console.log(a + b);
}

ajax( "url1", foo );
ajax( "url2", bar );