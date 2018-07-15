var async = require('async'),
    http = require('http');
    
function iter(item, cb) {
  http.get(item, function(res) {
    res.on('data', function() { })
    .on('end', function() { return cb(null); });
  });
}

async.each([process.argv[2], process.argv[3]], iter, 
function(err, result) {
  if (err) console.log(err);
});

