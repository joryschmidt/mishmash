function pairwise(arr, arg) {
  var arr_obj = {};
  var indices = [];
  for (var i=0; i<arr.length; i++) {
    arr_obj[i] = arr[i];
  }
  
  for (var index in arr_obj) {
    for (var other in arr_obj) {
      if (index != other && arr_obj[index] + arr_obj[other] == arg) {
        indices.push(+index, +other);
        delete arr_obj[index];
        delete arr_obj[other];
      }
    }
  }
  
  var sum = 0;
  
  if (indices.length > 0) {
    sum = indices.reduce(function(last, now) {
      return last + now;
    });
  }
  
  return sum;
}