const assertEqual = require('./assertEqual');

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