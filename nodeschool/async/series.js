var async = require('async'),
    fs = require('fs'),
    http = require('http');
    
async.series({
  requestOne: function(cb) {
    http.get(process.argv[2], function(res) {
      var body = '';
      res.on('data', function(chunk) {
        body += chunk;
      }).on('error', function(err) { console.log(err); })
      .on('end', function() {
        cb(null, body);
      });
    });
  },
  requestTwo: function(cb) {
    http.get(process.argv[3], function(res) {
      var body = '';
      res.on('data', function(chunk) {
        body += chunk;
      }).on('error', function(err) { console.log(err); })
      .on('end', function() {
        cb(null, body);
      });
    });
  }
},
function(err, results) {
  if (err) console.log(err);
  console.log(results);
});