var app = angular.module('thinkster', []);

app.controller('ListController', ['messages', function(messages) {
  this.messageList = messages.list;
  this.message = "Type a message!";
  this.addMessage = function(message) {
    messages.add(message);
    this.message = "";
  };
}]);

app.factory('messages', function() {
  var messages = {};
  messages.list = [];
  messages.add = function(message) {
    messages.list.push({id: messages.list.length, text: message});
  };
  return messages;
})