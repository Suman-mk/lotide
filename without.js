//copy assertEqual function

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

  //This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

  const without = function (source, itemsToRemove) {       //
    let result = []
    for (i = 0; i < source.length; i++) {
      let foundMatch = false
      for (j = 0; j < itemsToRemove.length; j++) {
        if (source[i] === itemsToRemove[j]) {
          foundMatch = true
        }
      }
      if (!foundMatch) {
        result.push(source[i])
      }
    }
    return result
  }

//test case to make sure that the original array is not modified.

  const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertEqual(words, ["hello", "world", "lighthouse"]);