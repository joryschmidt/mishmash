function balancedParens(str) {
  var parens = str.replace(/[^\(\)]/g, '');
  while(/\(\)/.test(parens)) {
    console.log(parens);
    parens = parens.replace(/\(\)/g, '');
  }
  return parens === '';
}

console.log(balancedParens("(x+(2/3)-2(4))"));