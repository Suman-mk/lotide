//Copy your assertArraysEqual and eqArrays functions into this new file.

const assertEqual = function(actual, expected) {
  for(let i=0; i<actual.length; i++) {
    for(let j=0; j <= i; j++) {
      if(actual[i] !== expected[j]) {
        return console.log (":)" + `Assertion failed: [${actual}] !== [${expected}]`)
      }    }
  }
  return console.log (":)" + `Assertion passed: [${actual}] === [${expected}]`)
};


// copy eqArray function

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

  const flatten = function(original){
    let flatArray = []
    let flattenedPiece = ""
    for(i = 0; i < original.length; i++) {
      if(typeof original[i] === "number"){
        flatArray.push(original[i])
      } else if(original[i] !== "number"){
        console.log(original[i])
        for(j = 0; j < original[i].length; j++){
          flatArray.push(original[i][j])
        }
        
      }
    }
    return flatArray
  };



  flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]