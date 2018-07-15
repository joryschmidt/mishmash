function maps(arr, fn) {
  return arr.reduce(function(prev, curr) {
    return prev.concat([fn(curr)]);
  }, []);
}

module.exports = maps;