function smallestCommons(arr) {
  var num = arr[0] > arr[1] ? arr[0] : arr[1];
  var product = 1;
  
  function isMultiple(number, divisor) {
    return number % divisor === 0 ? true : false;
  }
  
  for (var i=num; i>=3; i--) {
    product *= i;
    var j = num;
    while (j >= 3) {
      if(!isMultiple(product, j)) {
        break;
      } 
      j--;
    }
    if (j == 2) {
      break;
    }
  }
  
  product = check2(product);
  product = check3(product);
  product = check4(product);

  function check2(product) {
    var k = num;
    while (k >= 3) {
      if(!isMultiple(product/2, k)) {
        break;
      } 
      k--;
      if (k == 2) {
        product /= 2;
        check2(product);
      }
    }
    return product;
  }
  
  function check3(product) {
    var k = num;
    while (k >= 3) {
      if(!isMultiple(product/3, k)) {
        break;
      } 
      k--;
      if (k == 2) {
        product /= 3;
        check3(product);
      }
    }
    return product;
  }
  
  function check4(product) {
    var k = num;
    while (k >= 3) {
      if(!isMultiple(product/4, k)) {
        break;
      } 
      k--;
      if (k == 2) {
        product /= 4;
        check2(product);
      }
    }
    return product;
  }
  
  return product;
}
