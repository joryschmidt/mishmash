function findMissingNum(array) {
  array.sort(1);
  var num = array[0];
  for (var i=0, l=array.length; i<l; i++) {
    if (num !== array[i]) return num;
    num++;
  }
}

console.log(findMissingNum([2,5,1,4,9,6,7,3]));