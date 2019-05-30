var foo = true;

if (foo) {
  var a = 2;
  const b = 3;

  a = 3;
  b = 4;
}

console.log( a );
console.log( b );