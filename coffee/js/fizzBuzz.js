// Generated by CoffeeScript 1.11.1
(function() {
  var fizzBuzz, isBuzz, printfizz;

  fizzBuzz = function(num) {
    var ans;
    ans = '';
    if (num % 3 === 0) {
      ans += 'Fizz';
    } else if (num % 5 === 0) {
      ans += 'Buzz';
    }
    if (ans) {
      return ans;
    } else {
      return num;
    }
  };

  printfizz = function() {
    var ans, i, num, results;
    results = [];
    for (num = i = 1; i <= 100; num = ++i) {
      ans = '';
      if (num % 3 === 0) {
        ans += 'Fizz';
      } else if (num % 5 === 0) {
        ans += 'Buzz';
      }
      if (ans) {
        results.push(console.log(ans));
      } else {
        results.push(console.log(num));
      }
    }
    return results;
  };

  isBuzz = function(num) {
    if (num % 5 === 0) {
      return num;
    }
  };

}).call(this);
