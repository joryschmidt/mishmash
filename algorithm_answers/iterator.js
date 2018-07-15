'use strict';
// Implement for...of loops, splat operator, and destructuring syntax for objects

// Object.prototype[Symbol.iterator] = function() {
//   var props = Object.keys(this), cnt = 0, isDone = false;
//   var next = function(){
//     if (cnt >= props.length) isDone = true;
//     return { done: isDone, value: this[props[cnt++]]};
//   }.bind(this);
  
//   return { next };
// };

// Alternate syntax using generator function

Object.prototype[Symbol.iterator] = function*() {
  var props = Object.keys(this);
  for (let prop of props) yield this[prop];
};

var obj = {
  key: 'val',
  key2: 'val2',
  key3: 'val3'
};

for (var val of obj) console.log(val);