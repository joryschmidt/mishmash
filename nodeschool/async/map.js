var async = require('async'),
    http = require('http');
    
function iter(item, cb) {
  http.get(item, function(res) {
    var body = '';
    res.on('data', function(chunk) { body += chunk; })
    .on('end', function() { cb(null, body) });
  });
}

async.map(process.argv.slice(2), iter, function(err, results) {
  if (err) console.log(err);
  else console.log(results);
});