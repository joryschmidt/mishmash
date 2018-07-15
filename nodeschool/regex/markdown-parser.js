module.exports = function(str) {
  var closing = false;
  var markdown = [/@@/, /\*\*/, /__/, /\*/];
  var html = ["blink", "strong", "strong", "em"];
  
  for (var i=0; i<markdown.length; i++) {
    while(markdown[i].test(str)) {
      str = str.replace(markdown[i], replacer(html[i]));
    }
  }
  
  function replacer(tag) {
    if (closing) {
      closing = !closing;
      return "</"+tag+">";
    } else {
      closing = !closing;
      return "<"+tag+">";
    }
  }
  
  return "<p>"+str+"</p>";
};