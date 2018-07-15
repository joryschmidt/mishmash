// Scrape hotel names and prices
// print name and price to console 
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

var url = "https://www.agoda.com/pages/agoda/default/DestinationSearchResult.aspx?asq=u2qcKLxwzRU5NDuxJ0kOF3T91go8JoYYMxAgy8FkBH1BN0lGAtYH25sdXoy34qb9azlq+NcxafcjQT9/vYlHZGV/MyunyhKDB/UgSO7T5QWnnwuREn1K/outMcUtPO+/Al9YZqRY/bPw6hPyLe2LszhLBWlDz+Ux1h98ixmjA6NqPjQIJ2NsjIQIzU5U5daTlGIbF8DdYdgZOfh7bbSLMvTAuRakjTfetnOFh7Bx6ZM=&city=17072&tick=636099448573&isdym=true&searchterm=las";

var names = [], prices = [], hotels = [];

function getNames() {
  var names = $('.hotel-name');
  return _.map(names, function(name) {
    return name.innerText;
  });
}

function getPrices() {
  var prices = $('.price-container .price');
  return _.map(prices, function(price) {
    return price.innerText;
  });
}

casper.start(url, function() {
  this.echo(this.getTitle());
});

casper.waitForSelector('.hotel-name', function() {
  console.log('.hotel-name has been loaded');
});

casper.then(function() {
  this.clickLabel('Stars (5...1)', 'span');
  console.log('click to filter ratings');
});

casper.waitForSelector('.hotel-name', function() {
  console.log('.hotel-name has been loaded');
});

casper.then(function() {
  names = this.evaluate(getNames);
  prices = this.evaluate(getPrices);
  names.forEach(function(name, index) {
    hotels.push({
      name: name,
      price: prices[index]
    });
  });
});

casper.run(function() {
  this.echo('Found ' + names.length + ' hotels:');
  for (var i=0; i<hotels.length; i++) console.log(hotels[i].name, hotels[i].price);
  this.echo('Done').exit();
});

