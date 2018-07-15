function largeDiff(array) {
  var l_diff = 0;
  for (var i=0, l=array.length; i<l-1; i++) {
    for (var j=l-1; j>i; j--) {
      var diff = array[j] - array[i];
      if (diff > l_diff) l_diff = diff;
    }
  }
  return l_diff;
}

console.log(largeDiff([7,8,4,9,9,15,3,1,10]));