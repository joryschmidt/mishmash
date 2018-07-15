var express = require("express");
var path = require("path");
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = process.env.PORT;

var url = "https://www.pinterest.com/pin/220676450467179269/";
request(url, function(err, res, body) {
  if (err) console.log(err);
  var $ = cheerio.load(body);
  
  var img = $(".GrowthUnauthPinImage img").get(1);
  var $img = $(img).attr('src');
  var $des = $(img).attr('alt');
  
  var pin = {
    url: url,
    img: $img,
    description: $des
  }
  
  console.log(pin);
});

app.listen(port, function() {
  console.log('Server is listening on port ' + port);
})