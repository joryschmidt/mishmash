var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection('users');
  
  collection.update({ username: 'tinatime' }, { $set: { age: 40 } }, function(err, data) {
    if (err) throw err;
    console.log(JSON.stringify(data));
    db.close();
  });
});