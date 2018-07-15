function productExceptSelf(array) {
  var output = [];
  array.forEach(function(el, index, arr){
    var copy = arr.slice();
    copy.splice(index, 1);
    output.push(copy.reduce(function(p,c) {
      return p * c;
    }));
  });
  return output;
}

console.log(productExceptSelf([2, 2, 4, 1]));
console.log(productExceptSelf([0, 0, 14, 3]));
console.log(productExceptSelf([-2, -2, -3, 2]));