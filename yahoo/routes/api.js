var express = require("express");
var router = express.Router();
var YahooFantasy = require("yahoo-fantasy");
var yf = new YahooFantasy("dj0yJmk9OFFUdGFXTW1GME1wJmQ9WVdrOWJteE5WbXBNTjJFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1kMg--", 
                          "4a76be950df37e599d3ad48f2e0b19ccb7965750");

router.get('/', function(req, res, next) {
  yf.player.stats('359.p.5479', 'current', function(err, data) {
    if (err) console.log(err);
    else res.send(data);
    next();
  })
});

module.exports = router;