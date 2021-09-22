//implementing a function that can compare two arrays for a perfect match.

const assertEqual = require('./assertEqual');


const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length){                //compare the length of 2 arrays
    return false
  }
    for(i = 0; i < arr1.length; i++){
      for(j = i; j <= i; j++){
        if(arr1[i] !== arr2[j]){
          return false
        }
      }
    }
    return true
  }
  


  eqArrays([1, 2, 3], [1, 2, 3]) // => true
  eqArrays([1, 2, 3], [3, 2, 1]) // => false
  
  eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
  eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

module.exports = eqArrays