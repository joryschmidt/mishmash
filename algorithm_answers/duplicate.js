function duplicate(arr) {
  arr.sort(1);
  for (var i=0; i<arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(duplicate([1, 2, 1, 4, 2, 1, 5, 6]));