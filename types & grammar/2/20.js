var a = 2 / "foo";
var b = -3 * 0;

console.log(Object.is( a, NaN ));
console.log(Object.is( b, -0 ));

console.log(Object.is( b, 0 ));