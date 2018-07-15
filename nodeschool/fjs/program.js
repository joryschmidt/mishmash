function repeat(operation, num) {
  if (num > 100) {
    num %= 100;
  }
  if (num <= 0) return operation();
  return repeat(operation, --num);
}

function tramp(fn) {
  for(var i=0, len=100; i<len; i++) {
    
  }
}

module.exports = function(operation, num) {
  tramp();
  return repeat(operation, num);
};