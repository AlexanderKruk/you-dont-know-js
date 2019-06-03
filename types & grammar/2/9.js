var a = "foo";
var b = ["f","o","o"];

console.log(a.reverse);
console.log(b.reverse());

// not working!
// Array.prototype.reverse.call( a );

var c = a.split( "" ).reverse().join( "" );
console.log(c);