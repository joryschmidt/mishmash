var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var crypto = require('crypto');
var fs = require('fs');

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/home', function(req, res) {
  res.render('index', { date: new Date().toDateString() });
});

app.post('/form', function(req, res) {
  var str = req.body.str;
  str = str.split('').reverse().join('');
  res.end(str);
});

app.put('/message/:id', function(req, res) {
  var id = req.params.id;
  
  res.send(crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex'));
});

app.get('/search', function(req, res) {
  delete req.query.__proto__;
  res.send(JSON.stringify(req.query));
});

app.get('/books', function(req, res) {
  console.log(process.argv[3]);
  var file = process.argv[3];
  fs.readFile(file, function(err, data) {
    if (err) console.log(err);
    else res.send(JSON.stringify(JSON.parse(data)));
  });
});

app.listen(8080);
