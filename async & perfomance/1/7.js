var a; 

function foo(x) {
  if ( a == undefined ){
    a = x * 2;
    baz();
  }
}

function bar(x) {
  if (a == undefined){
    a = x / 2;
    baz();
  }
}

function baz() {
  console.log( a );
}

ajax("url1", foo);
ajax("url2", bar);