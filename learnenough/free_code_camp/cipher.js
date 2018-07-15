function rot13(str) { // LBH QVQ VG!
  var array = [];
  var string = str.split('');
  var no_decode = [' ', '!', '?', '.'];
  for (var i=0; i<string.length; i++) {
    if (no_decode.indexOf(string[i]) == -1) {
      var utf = string[i].charCodeAt(0);
      if ((utf - 13) < 65) utf += 26;
      array.push(utf - 13);
    } else {
      array.push(string[i]);
    }
  }
  for (var j=0; j<array.length; j++) {
    if (no_decode.indexOf(array[j]) == -1) {
      array[j] = String.fromCharCode(array[j]);
    }
  }
  str = array.join('');
  return str;
}

