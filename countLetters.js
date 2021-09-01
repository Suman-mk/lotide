//Copy your assertEqual function into this new file.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀" + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🙁" + `Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const string = "lighthouse in the house";

const result = countLetters(string);

assertEqual(result["b"], 1);

assertEqual(result["a"], 3);

assertEqual(result["x"], undefined);
