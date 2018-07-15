function pair(str) {
  var complement = {
    "A": "T",
    "C": "G",
    "G": "C",
    "T": "A"
  };
  
  var array = str.split('');
  var DNA = [];
  array.forEach(function(pairing) {
   var pair = [];
    pair.push(pairing);
    pair.push(complement[pairing]);
    DNA.push(pair);
  });
  return DNA;
}