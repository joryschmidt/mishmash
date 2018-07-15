var casper = require('casper').create();

casper.start('http://wikipedia.org', function() {
  this.echo(this.getTitle());
});

casper.then(function() {
  this.echo(this.getCurrentUrl());
});

casper.run(function() {
  this.echo('Done').exit();
});