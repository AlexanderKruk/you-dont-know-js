var res = [];

function response(data) {
  res.push( data );
}

ajax("url", response);
ajax("url", response);