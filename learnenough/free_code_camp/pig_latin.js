function translate(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var index = 10;
  for (var i=0; i<vowels.length; i++) { 
    if (str.indexOf(vowels[i]) < index && str.indexOf(vowels[i]) != -1) {
      index = str.indexOf(vowels[i]);
    }
  }
  console.log(index);
  if (index === 0) {
    str += "way";
  } else {
    var char = str.slice(0, index);
    console.log(char);
    str = str.slice(index);
    console.log(str);
    str += char + "ay";
  }
  return str;
}