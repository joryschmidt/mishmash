var http = require('http');

var args = process.argv.slice(2);
var res = [];
var count = 0;

args.forEach(function(url, index) {
  http.get(url, function(response) {
    var collected = '';
    response.on('data', function(data) {
      collected += data;
    });
    response.on('end', function() {
      res[index] = collected;
      count++;
      if (count == 3) console.log(res.join('\n'));
    });
  });
});

