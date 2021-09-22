

// FUNCTION IMPLEMENTATION
const assertArrayEqual = function(actual, expected) {
  for(let i=0; i<actual.length; i++) {
    for(let j=0; j <= i; j++) {
      if(actual[i] !== expected[j]) {
        return console.log (":)" + `Assertion failed: [${actual}] !== [${expected}]`)
      }    }
  }
  return console.log (":)" + `Assertion passed: [${actual}] === [${expected}]`)
};

module.exports = assertArrayEqual