var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model');

var db = 'mongodb://' + process.env.IP + '/example';
mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res, next) {
  res.send('hello friend');
});

app.get('/books', function(req, res) {
  console.log('getting all books...');
  Book.find()
    .exec(function(err, books){
      if (err) res.send('Error ' + err + ' has ocurred');
      else console.log(books); res.json(books);
    });
});

app.post('/book', function(req, res) {
  var newBook = new Book();
  
  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.category = req.body.category;
  
  newBook.save(function(err, book) {
    if (err) res.send(err);
    else {
      console.log(book);
      res.send(book);
    }
  })
});

app.post('/book2', function(req, res) {
  Book.create(req.body, function(err, book) {
    if (err) res.send(err);
    else {
      console.log(book);
      res.send(book);
    }
  });
});

app.get('/books/:id', function(req, res) {
  console.log('Retrieving specific book');
  Book.findOne({
    _id: req.params.id
  })
  .exec(function(err, book) {
    if (err) res.send('Error ' + err + ' has ocurred');
    else console.log(book); res.json(book);
  });
});

app.pust('/books/:id', function(req, res) {
  Book.findOneAndUpdate({
    _id: req.params.id
  }, { $set: {
    title: req.body.title
  }}, { upsert: true }, function(err, book) {
    if (err) res.send(err);
    else {
      console.log(book);
      res.send(book);
    }
  });
});

app.delete('/books/:id', function(req, res) {
  Book.findOneAndRemove({
    _id: req.params.id
  }, function(err, book) {
    if(err) console.log(err);
    else console.log(book); res.send(book + ' deleted');
  });
});

var port = process.env.PORT;
app.listen(port, function() {
  console.log('app listening on port ' + port);
});