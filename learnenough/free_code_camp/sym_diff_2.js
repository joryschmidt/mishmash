// Returns the sequential symmetric difference of an array of arrays

function sym(args) {
  var array = [];
  for (var i=0; i<arguments.length; i++) {
    array.push(arguments[i]);
  }
  
  array = array.reduce(function(last, now) {
    var temp_array = [];
    arr_push(last, now, temp_array);
    arr_push(now, last, temp_array);
    return temp_array;
  });
  
  function arr_push(one, two, temp_array) {
    for (var i=0; i<one.length; i++) {
      if (two.indexOf(one[i]) == -1) {
        temp_array.push(one[i]);
      }
    }
  }
  
  array.sort(function(a, b) {
    return a - b;
  });
  
  array = array.filter(function(element, index) {
    if (element == array[index + 1]) {
      return false;
    }
    return true;
  });
  
  return array;
}