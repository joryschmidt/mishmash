function parsePromised(json) {
  var promise = new Promise(function(success, fail) {
    try {
      success(JSON.parse(json));
    } catch(e) {
      fail(e);
    }
  });
  
  return promise;
}

parsePromised(process.argv[2]).then(console.log, console.log);