module.exports = function() {
  return Array.prototype.map.call(arguments, function(arg, _, index) {
    if (Object.prototype.hasOwnProperty.call(arg, 'quack')) return 1;
    else return 0;
  }).reduce(function(prev, curr) {
    return prev + curr;
  });
};