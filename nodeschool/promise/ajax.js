var HTTP = require('q-io/http');

var promise = HTTP.read('http://localhost:1337');
promise.then(function(buff) {
  console.log(JSON.parse(buff.toString()));
});