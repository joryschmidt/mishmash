function reverse_words(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

console.log(reverse_words("Welcome to this Javascript Guide!"));