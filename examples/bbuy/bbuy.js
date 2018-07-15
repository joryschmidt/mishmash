// Wait for page load, click review, and scrape contents
// No jQuery :_( 
var casper = require('casper').create({
  verbose: true,
  logLevel: 'info',
  pageSettings: {
    loadImages: false,
    loadPlugins: false,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
  }
  // clientScripts: ['vendor/jquery.min.js', 'vendor/lodash.js']
});

var url = "http://www.bestbuy.com/site/samsung-galaxy-s7-edge-32gb-black-onyx-sprint/4901203.p?skuId=4901203";

var ratings = [], dates = [];

function getRatings() {
  var ratings = document.querySelectorAll('.BVRRReviewRatingsContainer .BVRRRatingNormalImage img');
  return Array.prototype.map.call(ratings, function(e) {
    return e.getAttribute('title');
  });
}

function getDates() {
  var dates = document.querySelectorAll('span.BVRRValue.BVRRReviewDate');
  return Array.prototype.map.call(dates, function(e) {
    return e.getAttribute('content');
  });
}

casper.start(url, function() {
  this.echo(this.getTitle(), 'PARAMETER');
});

casper.wait(2000, function() {
  this.echo("I've waited two seconds", 'GREEN_BAR');
});

casper.then(function() {
  this.click("button[data-model-id=reviews]");
  console.log("clicked reviews accordion");
});

casper.waitForSelector('.BVRRRatingNormalImage', function() {
  console.log('Ratings have been loaded');
});

casper.then(function() {
  ratings = this.evaluate(getRatings);
  dates = this.evaluate(getDates);
});

casper.run(function() {
  console.log(' -', dates.join('\n - ')).exit();
});