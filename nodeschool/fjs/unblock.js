module.exports = function repeat(operation, num) {
  if (num <= 0) return operation();
  if (num % 4 === 0) setTimeout(function() { return repeat(operation, --num) });
  return repeat(operation, --num);
};