var a = "foo";
var b = ["f","o","o"];

console.log(a.join);
console.log(a.map);

var c = Array.prototype.join.call(a, "-");
var d = Array.prototype.map.call( a, function(v){
  return v.toUpperCase() + ".";
}).join( "" );

console.log(c);
console.log(d);