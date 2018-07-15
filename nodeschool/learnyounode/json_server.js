var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var parsed_url = url.parse(req.url, true);
  var time = parsed_url.query.iso.match(/\d+:\d+:\d+/)[0];
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (parsed_url.pathname == '/api/parsetime') {
    var hms = { 
      hour: +time.slice(0, 2),
      minute: +time.slice(3, 5),
      second: +time.slice(6)
    };
    res.write(JSON.stringify(hms));
  } else if (parsed_url.pathname == '/api/unixtime') {
    var unix = { unixtime: Date.parse(parsed_url.query.iso) };
    res.write(JSON.stringify(unix));
  }
  res.end();
});

server.listen(process.argv[2]);
