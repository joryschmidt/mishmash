function isPal(str) {
  var letters = str.toLowerCase().replace(/[\s']/g, '');
  return letters === letters.split('').reverse().join('');
}

console.log(isPal("able was I ere I sa'w Elba"));