function palindrome(string) {
  string = string.toLowerCase();
  var array = string.split(' ');
  console.log(array);
  array = array.filter(function(element){
    var bad_chars = [",",".","-","_"];
    for (var i=0; i<bad_chars.length; i++) {
      if (bad_chars[i] == element) {
        console.log("got one!");
        return false;
      }
    }
    return true;
  });
  string = array.join('');
  array.reverse();
  var new_string = array.join('');
  console.log(new_string);
  if (string == new_string){
    return true;
  }
  return false;
}