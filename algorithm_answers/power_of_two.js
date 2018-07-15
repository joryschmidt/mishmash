function twoPower(num) {
  var bits = num & num-1;
  if (num) return bits === 0;
  else return false;
}

console.log(twoPower(-8));