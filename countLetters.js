//using assertEqual function into this new file.

const assertEqual = require('./assertEqual');

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

const countLetters = function(string) {
  let result = {};
  let arrayOfLetters = string.split('');
  for (let letter of arrayOfLetters) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  console.log(result);
  return result;
};

module.exports = countLetters