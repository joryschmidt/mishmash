var Person = function(name) {
  this.getFirstName = function() {
    return name.split(' ')[0];
  };
  this.getLastName = function() {
    return name.split(' ')[1];
  };
  this.getFullName = function() {
    return name;
  };
  
  this.setFirstName = function(first) {
    name = name.split(' ');
    name[0] = first;
    name = name.join(' ');
  };
  this.setLastName = function(last) {
    name = name.split(' ');
    name[1] = last;
    name = name.join(' ');
  };
  this.setFullName = function(full) {
    name = full;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();