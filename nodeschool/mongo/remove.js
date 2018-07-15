var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var c = db.collection(process.argv[3]);
  
  c.remove({ _id: process.argv[4] }, function(err, data) {
    if (err) throw err;
    console.log(JSON.stringify(data));
    db.close();
  });
});