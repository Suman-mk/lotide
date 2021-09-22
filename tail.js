var array = ['a', 'b', 'c'];

const assertEqual = require('./assertEqual');

// TEST CODE
const tail = function (arr) {
  let tail1 = [];
  for (let i=0; i<arr.length; i++) {
    if (i !== 0) {                                 //checks the last element in the array
      tail1.push(arr[i])
      
    }
  }
  return tail1;
}


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

//assertEqual(tail([5,6,7]), 5);
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(words.length, 3); // original array should still have 3 elements!