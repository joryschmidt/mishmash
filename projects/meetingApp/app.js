var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var path = require('path');

var routes = require('./routes/index');

var db = 'mongodb://' + process.env.IP + '/meetingApp';
mongoose.connect(db);

// View and view engine
var swig = require("swig");
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', routes);

var port = 8080;
app.listen(port, function() {
  console.log("app listening on " + port);
});