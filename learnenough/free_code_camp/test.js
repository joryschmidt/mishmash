var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function findPrimeIndex(num) {
    var min = 0;
    var max = primes.length - 1;
    while (true) {
        if (min > max) return "The number is not in the array";
        var guess = Math.floor((min + max)/2);
        var check = primes[guess];
        console.log("The index of guess " + check + " is " + guess);
        if (check == num) {
            return "The index value of this prime is " + guess;
        } else if (check < num) {
            min = guess + 1;
        } else if (check > num) {
            max = guess - 1;
        }
    }
}

findPrimeIndex(17);