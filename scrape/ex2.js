
var express = require("express");
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var app = express();
var port = 8080;

var url = "http://www.indeed.com/cmp/TeamDynamix/jobs/Javascript-Front-End-Developer-6b937b94bca95636?sjdu=QwrRXKrqZ3CNX5W-O9jEvd7Wh1zkzT0YDmt4sqbamFMtDmQElgFQkKZYE2B8-7WeEWUQMuBR6dnCi8azYHt5TlHhjXzcf6Aq2iFKS_7UJH8";

request(url, function(e, res, body) {
  var $ = cheerio.load(body);
  var companyName = $('.company');
  var companyNameText = companyName.text();
  
  var jobTitle = $('.jobtitle font');
  var jobTitleText = jobTitle.text();
  
  var location = $('.location');
  var locationText = location.text();
  
  var summary = $('#job_summary p');
  var summaryText = summary.text();
  
  var job = {
    jobTitle: jobTitleText,
    location: locationText,
    companyName: companyNameText,
    summary: summaryText
  };
  
  console.log(job);
});

// app.listen(process.env.PORT, function() {
//   console.log('server is listening on port ' + process.env.PORT);
// });