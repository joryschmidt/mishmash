var uniq = require('uniq');

module.exports = function(list) {
  list = list.split(',');
  return uniq(list);
};