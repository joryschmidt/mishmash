var casper = require('casper').create({
  verbose: true,
  logLevel: 'error',
  clientScripts: ["vendor/jquery.min.js", "vendor/lodash.js"]
});

var links = [];

// function getLinks() {
//   var links = document.querySelectorAll('.b_algo a');
//   return Array.prototype.map.call(links, function(e) {
//     return e.getAttribute('href');
//   });
// }

// Same as above function but using jQuery and Lodash
function getLinks() {
  var links = $('.b_algo a');
  return _.map(links, function(e) {
    return e.getAttribute('href');
  });
}

casper.start('http://www.bing.com/', function() {
  this.fill('form[action="/search"]', {
    'q': 'casperjs'
  }, true);
});

casper.then(function() {
  links = this.evaluate(getLinks);
  
  this.fill('form[action="/search"]', {
    'q': 'phantomjs'
  }, true);
});

casper.then(function() {
  links = links.concat(this.evaluate(getLinks));
});

casper.run(function() {
  // echo results
  this.echo(links.length + ' links found: ');
  this.echo(' - ' + links.join('\n - ')).exit();
});