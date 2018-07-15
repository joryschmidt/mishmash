var fs = require('fs');

function run(generator) {
  var it = generator(go);
  
  function go(err, result) {
    it.next(result);
  }
  
  try {
    go();
  } catch (e) {
    return null;
  }
}

run(function* (done) {
  var dirFiles = yield fs.readdir('NoNoNoNo', done);
  var firstFile = dirFiles[0];
  
  console.log(firstFile);
});