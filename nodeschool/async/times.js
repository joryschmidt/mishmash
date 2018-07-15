var async = require('async'),
    http = require('http');
    
var url = process.argv[2] + process.argv[3];

function iter(item, cb) {
  
}

var id = 1;

async.times(5, iter, function(err, result) {
  if (err) console.log(err);
  else console.log(result);
})