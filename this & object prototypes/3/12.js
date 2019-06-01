function anotherFunction() { }
var anotherObject = {
  c: true
};
var anotherArray = [];
var myObject = {
  a: 2,
  b: anotherObject,
  c: anotherArray,
  d: anotherFunction
};

var newObj = JSON.parse( JSON.stringify ( myObject ));
console.log(newObj.a);

var newObj2 = Object.assign( {}, myObject );
console.log(newObj2.a);