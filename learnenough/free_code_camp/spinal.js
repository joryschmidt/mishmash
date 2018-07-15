function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  for (var i=0; i<str.length; i++) {
    if (str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65 && i !== 0) {
      str = str.substr(0, i) + ' ' + str.substr(i);
      console.log(str);
      i++;
    }
  }
  str = str.split(' ');
  console.log(str);
  str = str.filter(function(ele) {
    return ele != ' ';
  });
  str = str.join('-');
  str = str.toLowerCase();
  return str;
}