var a = 2 / "foo";

console.log(typeof a === "number");

console.log(a == NaN);
console.log(a === NaN);
console.log(isNaN(a));

var b = "foo";
console.log(isNaN(b));
console.log(Number.isNaN(b));