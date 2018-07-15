var http = require('http');

var server = http.createServer(function(req, res) {
  var stream = [];
  req.on('data', function(chunk) {
    stream.push(chunk);
  }).on('end', function() {
    res.end(stream.join('').toString().toUpperCase());
  });
});

server.listen(process.argv[2]);