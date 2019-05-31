function foo(a,b) {
  console.log("a:" + a + ",b:" + b);
}

var dmz = Object.create(null);
foo.apply( dmz, [2, 3]);

var bar = foo.bind( dmz, 2);
bar( 3 );