function smallestCommons(arr) {
  // determine which number is larger and set the variables
  var l_num = arr[0] > arr[1] ? arr[0] : arr[1];
  var s_num = arr[0] > arr[1] ? arr[1]: arr[0];
  
  function isMultiple(number, divisor) {
    return number % divisor === 0 ? true : false;
  }
  
  // create an array of all numbers in between
  var nums_array = [];
  for (var i=s_num; i<=l_num; i++) {
    nums_array.push(i);
  }
  
  // find the smallest divisible number by multiplying the array numbers together
  var product = 1;
  var thats_it = false;
  for (var i=0; i<nums_array.length; i++) {
    product *= nums_array[i];
    for (var j=0; j<nums_array.length; j++) {
      if (!isMultiple(product, nums_array[j])) {
        break;
      } else if (j == nums_array.length - 1) {
        thats_it = true;
      }
    }
    if (thats_it) break;
  }
  
  // keep dividing the number by primes until the smallest common multiple is reached
  // *NOTE* More primes may be necessary, especially for larger numbers
  var checks_array = [2, 3, 5, 7, 11];
  
  for (var c=0; c<checks_array.length; c++) {
    thats_it = true;
    while(thats_it) {
      product /= checks_array[c];
      for (var i=0; i<nums_array.length; i++) {
        if (!isMultiple(product, nums_array[i])) {
          product *= checks_array[c];
          thats_it = false;
          break;
        }
      }
    }
  }
  
  return Math.round(product);
}

smallestCommons([1, 5]);