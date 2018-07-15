function sumPrimes(num) {
  var primes = [2, 3, 5];
  
  function isPrime(number) {
    for (var i=3; i<number/2; i+=2) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  var k=7;
  while (k <= num) {
    if (isPrime(k)) {
      primes.push(k);
    }
    k += 2;
  }
  
  var sum = 0;
  
  for (var j=0; j<primes.length; j++) {
    sum += primes[j];
  }
  
  return sum;
}