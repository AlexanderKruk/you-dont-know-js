function isNegZero(n) {
  n = Number( n );
  return (n === 0) && (1 / n === -Infinity);
}

console.log(isNegZero( -0 ));
console.log(isNegZero( 0 / -3 ));
console.log(isNegZero(  0 ));