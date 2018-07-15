var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug',
  pageSettings: {
    loadImages: false,
    loadPlugins: false,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
  },
  clientScripts: ['vendor/jquery.min.js', 'vendor/lodash.js']
});

var fs = require('fs');
var url = 'http://pycoders.com/archive';

var link = [];
var title = [];
var date = [];

function generateTable() {
  var data = [];
  for (var i=0; i<date.length; i++) {
    data.push('<tr><td>' + date[i] + '</td><td>' + title[i] + '</td><td>' + link[i] + '</td></tr>');
  }
  return data.join('\n');
}

function getLink() {
  var link = $('.campaign a');
  return _.map(link, function(e) {
    return e.getAttribute('href');
  });
}

function getTitle() {
  var title = $('.campaign a');
  return _.map(title, function(e) {
    return e.innerHTML.replace(/^.*\:(&nbsp;)?\s*/g, '');
  });
}

function getDate() {
  var date = $('.campaign');
  return _.map(date, function(e) {
    return e.innerText.replace(/\-.*$/g, '');
  });
}

casper.start(url, function() {
  link = this.evaluate(getLink);
});

casper.then(function() {
  title = this.evaluate(getTitle);
});

casper.then(function() {
  date = this.evaluate(getDate);
});

// casper.run(function() {
//   // this.echo(' - ' + link.join('\n - '));
//   this.echo(' - ' + title.join('\n - '));
//   this.echo(' - ' + date.join('\n - '));
//   this.exit();
// });

casper.run(function() {
  var html = "<table>\n<tr><td>Date</td><td>Title</td><td>Link</td></tr>\n";
  html += generateTable() + "\n</table>";
  fs.write('date.html', html, 'w');
  this.echo("\n Finished writing date.html").exit();
});