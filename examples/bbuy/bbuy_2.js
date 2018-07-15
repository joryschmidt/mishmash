// Wait for page load, click review, and scrape contents
// No jQuery :_( 
// Modified from https://github.com/casperjs/casperjs/blob/master/samples/googlepagination.js
var casper = require('casper').create({
  verbose: true,
  logLevel: 'error',
  pageSettings: {
    loadImages: false,
    loadPlugins: false,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
  }
  // clientScripts: ['vendor/jquery.min.js', 'vendor/lodash.js']
});

var url = "http://www.bestbuy.com/site/apple-iphone-7-32gb-black-sprint/5580716.p?skuId=5580716";
var current_page = 1;
var startPage = '';

function terminate() {
  this.echo("That's all folks!", 'COMMENT').exit();
}

function startPageFun() {
  var startPage = document.querySelector('span.BVRRSelectedPageNumber');
  return startPage.innerText;
}

var processPage = function() {
  casper.wait(2000, function() {
    this.echo("Waited two seconds", "WARN_BAR");
  });
  casper.echo('Capturing page...' + current_page, 'INFO');
  this.captureSelector('drone-results-p-' + current_page + '.png', '#BVRRDisplayContentBodyID'); 
  
  if (current_page > 3 || !this.exists('.BVRRRatingNormalImage')) return terminate.call(casper);
  current_page++;
  this.echo('Requesting new page ' + current_page, 'WARNING');
  this.thenClick('a[name=BV_TrackingTag_Review_Display_NextPage]').then(function() {
    this.waitFor(function() {
      return startPage != 1;
    }, processPage, terminate);
  });
};

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

casper.then(function() {
  startPage = this.evaluate(startPageFun);
});

casper.waitForSelector('.BVRRRatingNormalImage', processPage, terminate);

casper.run();