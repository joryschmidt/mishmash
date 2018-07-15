function fizzBuzz(i) {
  var ans = '';
  if (i % 3 === 0) ans += 'Fizz';
  if (i % 5 === 0) ans += 'Buzz';
  return ans ? ans : i;
}

for(var i=1; i<101; i++) {
  console.log(fizzBuzz(i));
}