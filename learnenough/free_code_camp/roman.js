function convert(num) {
  var roman = [];
  var nums_array = [1000, 900, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var numerals = {
      1000: "M",
      900: "CM",
      500: "D",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I"
  };
  
  function pushRom(numeral, times) {
    for (var i=0; i<times; i++) {
      roman.push(numeral);
    }
  }
  
  for (var i=0; i<nums_array.length; i++) {
      if (num >= nums_array[i]) {
          pushRom(numerals[nums_array[i]], Math.floor(num/nums_array[i]));
          num %= nums_array[i];
      }
  }
  roman = roman.join('');
  return roman;
}