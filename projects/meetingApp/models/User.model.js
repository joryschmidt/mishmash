var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String
});

UserSchema.pre('save', function(next) {
  // Capitalize the username
  this.username.charAt(0).toLocalUppercase() + this.username.slice(1);
  next();
});

module.exports = mongoose.model('User', UserSchema);