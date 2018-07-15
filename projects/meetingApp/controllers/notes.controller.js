'use strict';

var Note = require('../models/Note.model');
var User = require('../models/User.model');
var Async = require('async');

exports.allUsersNotes = function(req, res) {
  //Find all the users
  User.find()
    .sort({
      username: 1
    })
    .exec(function(err, users) {
      if (err) console.log(err);
      else return res.render('newnote', {
        title: 'New Note',
        users: users
      });
    });
}

exports.createNote = function(req, res) {
  // Create a new note
  var newNote = new Note();
  newNote.memberName = req.body.memberName;
  newNote.project = req.body.project;
  newNote.workYesterday = req.body.workYesterday;
  newNote.workToday = req.body.workToday;
  newNote.impediment = req.body.impediment;
  
  newNote.save(function(err) {
    if (err) {
      var errMsg = 'So sorry. There was an error: ' + err;
      res.render('newnote', {
        title: 'Note - new note(error)',
        message: errMsg
      });
    } else {
      console.log('Note has been saved');
      res.redirect(301, '/');
    }
  });
};

// Filter notes by username
exports.noteByMember = function(req, res) {
  Async.parallel([
    function(callback) {
      Note.find({memberName: req.body.memberName}).sort({createdOn: -1})
      .exec(function(err, notes) {
        callback(err, notes);
      });
    },
    function(callback) {
      User.find().sort({username: 1})
      .exec(function(err, users) {
        callback(err, users);
      });
    }], function(err, results) {
      if (err) console.log(err);
      else res.render('index', {
        notes: results[0],
        users: results[1],
      });
    });
};