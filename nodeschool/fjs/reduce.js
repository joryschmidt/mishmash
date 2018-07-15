module.exports = function reduce(array, fn, init) {
  return array.length > 0 ? reduce(array.slice(1), fn, fn(init, array[0], 0, array)) : init;
};
