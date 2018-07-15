function Spy(target, method) {
  var ogFunc = target[method];
  var counter = { count: 0 };
  
  target[method] = function() {
    counter.count++;
    return ogFunc.apply(target, arguments);
  };
  return counter;
}

var spy = Spy(console, 'log');
console.log('hello');
console.log('or 3');
console.log(spy.count);

module.exports = Spy;