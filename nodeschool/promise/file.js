var Http = require('q-io/http');

var cache = Http.read("http://localhost:7000");
cache.then(function(response) {
  return Http.read("http://localhost:7001/" + response);
}).then(function(response) { console.log(JSON.parse(response)) });