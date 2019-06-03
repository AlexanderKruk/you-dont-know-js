function foo() {
  var arr = Array.prototype.slice.call( arguments );
  arr.push( "bam" );
  console.log( arr ); 
}

foo( "bar", "baz" );

function bar() {
  var arr = Array.from( arguments );
  arr.push( "bam" );
  console.log( arr ); 
}

bar( "foo", "baz" );