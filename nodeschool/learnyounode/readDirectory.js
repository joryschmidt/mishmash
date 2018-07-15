var fs = require('fs');

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function(err, data) {
    if (err) return callback(err);
    else {
      data = data.filter(function(element) {
        return element.search(new RegExp('.'+ext)) !== -1;
      });
      return callback(null, data);
    }
  });
};