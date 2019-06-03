var a = 42;
var b = 42.3;
var c = 1;

console.log(a = 0.42);
console.log(b = .42);

console.log(a = 42.0);
console.log(a = 42.);

console.log(a = 42.300);
console.log(a = 42.0);

console.log(a = 5E10);
console.log(a.toExponential());

console.log(b = a * a);
console.log(c / a);