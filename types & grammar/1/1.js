console.log(typeof undefined); // undefined
console.log(typeof true); // boolean
console.log(typeof 42); // number
console.log(typeof "42"); // string
console.log(typeof { life: 42 }); // object
console.log(typeof Symbol() ); // symbol
console.log(typeof null); // object

// check for null
var a = null;
console.log(!a && typeof a === "object"); // true

// function
console.log(typeof function a(){}); // function

// array
console.log(typeof [1,2,3]); // object

typeof typeof 42; // string