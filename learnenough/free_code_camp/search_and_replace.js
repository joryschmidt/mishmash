function myReplace(str, before, after) {
  var array = str.split(' ');
  var index = array.indexOf(before);
  var word_array = after.split('');
  if (array[index].charCodeAt(0) <= 90) {
    word_array[0] = word_array[0].toUpperCase();
  } else {
    word_array[0] = word_array[0].toLowerCase();
  }
  after = word_array.join('');
  array[index] = after;
  str = array.join(' ');
  return str;
}