var express = require("express");
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var app = express();
var port = 8080;
var url = "http://google.com";
// request(url, function(err, res, body) {
//   if (err) console.log(err);
//   else console.log(body);
// });

var destination = fs.createWriteStream('./downloads/google2.html')
request(url)
  .pipe(destination)
  .on('finish', function() {
    console.log('done');
  })
  .on('error', function(err) {
    console.log(err);
  });

// app.listen(process.env.PORT, function() {
//   console.log('server is listening on port ' + process.env.PORT);
// });