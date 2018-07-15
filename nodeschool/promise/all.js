function all(p1, p2) {
  var counter = 0;
  return new Promise(function(succeed, fail) {
    var arr = [];
    
    p1.then(function(val) { 
      counter++;
      arr[0] = val;
      if (counter == 2) succeed(arr);
    });
    
    p2.then(function(val) { 
      counter++; 
      arr[1] = val;
      if (counter == 2) succeed(arr);
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);