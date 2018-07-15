var _ = require('lodash');

module.exports = function(obj) {
  var template = 'Hello <%= name %> (logins: <%= logins %>)';
  return _.template(template)({ name: obj.name, logins: _.size(obj.login)});
};