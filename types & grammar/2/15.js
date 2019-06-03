function foo() {
  undefined = 2;
}

foo();

function foo2() {
  "use strict";
  undefined = 2;
}

// foo2();

function foo3() {
  "use strict";
  var undefined = 2;
  console.log( undefined );
}

foo3();