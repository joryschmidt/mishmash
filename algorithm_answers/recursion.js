function binarer(num) {
  if (num) {
    if (num % 2 === 0) return binarer(num/2) + 0;
    else return binarer((num - 1)/2) + 1;
  } else return '';
}

console.log(binarer(168));