// Returns the symmetric difference of multiple arrays

function sym(args) {
  var array = [];
  var args_obj = arguments;
  console.log("arguments length is" + args_obj.length);
  
  for (var i=0; i<args_obj.length; i++) {
    console.log('got to loop 1');
    for (var k=0; k<args_obj[i].length; k++) {
      console.log('got to loop 2, k=' + k);
      var unique = true;
      for (var j=0; j<args_obj.length; j++) {
        console.log('got to loop 3, j=' + j);
        if (j == i) {
          console.log('same array');
        } else if (!diff(args_obj[i][k], args_obj[j])) {
          console.log(args_obj[i][k] + ' is not a unique value');
          break;
        }
      }
      if (unique) {
        console.log("pushed " + args_obj[i][k]);
        array.push(args_obj[i][k]);
      }
    }
  }
  
  array.sort(function(a, b) {
    return a - b;
  });
  
  
  function diff(val, arr) {
    if (arr.indexOf(val) != -1) {
      unique = false;
      return false;
    } 
    return true;
  }
  
  return array;
}