// Log in to twitter
// Submit a Query
// Capture the results

var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug',
  pageSettings: {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
  }
  // clientScripts: ['vendor/jquery.min.js', 'vendor/lodash.js']
});

var url = "http://twitter.com";
var twitterId = "/julieborowski";
var email = "schmidt.449@gmail.com";
var pw = "Brianboat9";
var searchKey = "gary johnson";

casper.start(url + twitterId, function() {
  this.echo(this.getTitle(), 'COMMENT');
});

casper.then(function() {
  this.click('#signin-link');
  this.fillSelectors('form.js-front-signin.LoginForm', {
    'input[name="session[username_or_email]"]': email,
    'input[name="session[password]"]': pw 
  }, true);
});

casper.then(function() {
  this.echo("Authorized.", 'GREEN_BAR');
  this.waitForSelector('#global-nav-search', function() {
    this.echo('Waited for search element', 'GREEN_BAR');
  });
});

casper.then(function() {
  this.fill('form#global-nav-search', {
    q: searchKey
  });
  this.click('button.nav-search');
});

casper.wait(5462, function() {
  this.echo("I just waited 4EVR", "RED_BAR");
})

casper.waitForSelector('.trends-inner', function() {
  this.echo('Search results loaded', 'RED_BAR');
});

casper.then(function() {
  this.emit('results.log');
});

casper.on('results.log', function() {
  this.capture('twitPic.png');
});

casper.run();
