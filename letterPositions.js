const assertEqual = require('./assertEqual');

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

module.exports = letterPositions