
const assertEqual = function(actual, expected) {
  for(let i=0; i<actual.length; i++) {
    for(let j=0; j <= i; j++) {
      if(actual[i] !== expected[j]) {
        return console.log (":)" + `Assertion failed: [${actual}] !== [${expected}]`)
      }    }
  }
  return console.log (":)" + `Assertion passed: [${actual}] === [${expected}]`)
};
//implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

const letterPositions = function(sentence) {
  const results = {};
  let sentenceArray = sentence.split('');
  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i] !== " ") {
      if (results[sentenceArray[i]]) {
        results[sentenceArray[i]].push(i);
      } else {
        results[sentenceArray[i]] = [];
        results[sentenceArray[i]].push(i);
      }
    }
  }
  console.log(results);
  return results;
};

const sentence = "hello";

const resultObject = letterPositions(sentence);

assertEqual(resultObject["h"], [0]);

assertEqual(resultObject["e"], [1]);