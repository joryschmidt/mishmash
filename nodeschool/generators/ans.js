var fs = require('fs');
var path = require('path');
    
function run (generator) {
  var it = generator(go);

  function go (err, result) {
    console.log(result);
    it.next(result);
  }

  go();  
}

run(function* (done) {
  // read `learn-generators` exercises folder
  var exercises = yield fs.readdir(path.join(__dirname, 'generators'), done);
  console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
});