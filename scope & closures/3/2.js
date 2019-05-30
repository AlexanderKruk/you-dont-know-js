function doSomething(a){
  b = a + doSomethingElse( a * 2 );
  console.log( b * 3 );

  var b;

  function doSomethingElse(a) {
    return a - 1;
  }

}

doSomething( 2 );