module.exports = function() {
  var div = document.createElement('div');
  div.innerHTML = 'Hello <span class="name"></span>';
  
  this.setName = function(name) {
    div.getElementsByClassName('name').innerText = name;
  };
  
  this.appendTo = function(el) {
    el.appendChild(div);
  };
};