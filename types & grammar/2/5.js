var a = "foo";
var b = ["f","o","o"];

console.log(a.length);
console.log(b.length);

console.log(a.indexOf("o"));
console.log(b.indexOf("o"));

var c = a.concat( "bar" );
var d = b.concat( ["b","a","r"] );

console.log(a === c);
console.log(b === d);

console.log(a);
console.log(b);

a[1] = "O";
b[1] = "O";

console.log(a);
console.log(b);