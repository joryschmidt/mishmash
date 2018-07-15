'use strict';

var Note = require('../models/Note.model');
var User = require('../models/User.model');
var Async = require('async');

exports.homePage = function(req, res) {
  // Gather all notes and users
  Async.parallel([
    function(callback) {
      var query = Note.find();
      query.sort({createdOn: -1}).limit(12)  
      .exec(function(err, notes) {
        callback(err, notes);
      });
    },
    function(callback) {
      var query = User.find();
      query.sort({username: 1})  
      .exec(function(err, users) {
        callback(err, users);
      });
    }
  ], function(err, results) {
    if (err) console.log(err);
    else res.render('index', {
      users: results[1],
      notes: results[0]
    });
  });
};