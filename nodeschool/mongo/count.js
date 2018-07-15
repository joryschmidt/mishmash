var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var parrots = db.collection('parrots');
  
  parrots.count({ age: { $gt: +process.argv[2] }}, function(err, count) {
    if (err) throw err;
    console.log(count);
    db.close();
  });
});