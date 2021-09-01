console.assert(1 === 1);
console.assert(1 === 1.1);

const sum = function(a, b) { 
  return a + b;
}

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!

// FUNCTION IMPLEMENTATION
const sumBuggy = function(a, b) { 
  return a * b;
}

// TEST CODE
console.assert(sumBuggy(1, 2) === 3); // fails, because bug!
let emoji = String.fromCodePoint(0x1F621);

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  for(let i=0; i<actual.length; i++) {
    for(let j=0; j <= i; j++) {
      if(actual[i] !== expected[j]) {
        return console.log (":)" + `Assertion failed: [${actual}] !== [${expected}]`)
      }    }
  }
  return console.log (":)" + `Assertion passed: [${actual}] === [${expected}]`)
};

module.exports = assertEqual;

// TEST COD
/* assertEqual('Lighthouse Labs", "Bootcamp');
assertEqual(1, 1);


const name = 'Alice';
console.log(`Hello, ${name}!`); // logs: Hello, Alice!
*/


//ou expected to see no output at all? Correct!
//Why? Because we call the function but the function itself does nothing? Sure, but more specifically because we are not printing/logging anything to the console anywhere.