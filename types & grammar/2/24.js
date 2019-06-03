function foo(x) {
  x.push( 4 );
  x;

  x.length = 0;
  x.push( 4, 5, 6, 7 );
  x;
}

var a = [1,2,3];
foo( a );
console.log( a );