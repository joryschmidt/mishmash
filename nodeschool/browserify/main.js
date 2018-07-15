var url = require('url');
var qs = require('querystring');

var input = prompt();

var addr_obj = url.parse(input);
var obj = qs.parse(addr_obj.query);

console.log(url.resolve(input, obj.file));