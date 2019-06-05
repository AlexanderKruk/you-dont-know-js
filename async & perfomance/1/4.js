var res = [];

function response(data) {
  if (data.url == "url1") {
    res[0] = data;
  }
  else if (data.url == "url2"){
    res[1] = data;
  }
}

ajax("url1", response);
ajax("url2", response);