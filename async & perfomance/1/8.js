// big process that slow all site
var res = []

function response(data) {
  res = res.concat(
    data.map( function(val){
      return val * 2;
    })
  );
}

ajax( "url1", response );
ajax( "url2", response );

// calculate big process in parts

var res = [];

function response(data) {
  var chunk = data.splice( 0, 1000);
  res = res.concat(
    chunk.map( function(val){
      return val * 2;
    })
  );

  if (data.length > 0) {
    setTimeout( function() {
      response( data );
    }, 0);
  }
}