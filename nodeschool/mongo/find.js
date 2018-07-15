var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var age = process.argv[2];
  var collection = db.collection('parrots');
  
  collection.find({ age: { $gt: +age }}, { _id: 0 }).toArray(function(err, docs) {
    if (err) throw err;
    console.log(docs);
    db.close();
  });
  
});