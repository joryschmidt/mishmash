function largestProduct(a) {
  a.sort(function(a, b) { return b - a });
  console.log(a);
  var l = a.length;
  var p1 = a[0]*a[1]*a[2];
  var p2 = a[0]*a[l-2]*a[l-1];
  return p1 > p2 ? p1 : p2;
}

console.log(largestProduct([-10, 7, 29, 30, 5, -10, -70]));