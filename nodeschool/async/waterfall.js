var http = require('http'),
    async = require('async'),
    fs = require('fs');

async.waterfall([
  function(cb) {
    fs.readFile(process.argv[2], 'utf-8', function(err, res) {
      if(err) console.log(err);
      else cb(null, res);
    });
  },
  function(url, cb) {
    var body = '';
    http.get(url, function(res) {
      res.on('data', function(chunk) {
        body += chunk;
      }).on('end', function() {
        cb(null, body);
      });
    });
  }
], function(err, result) {
  if (err) console.log(err);
  console.log(result);
});
