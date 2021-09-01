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

  const middle = function(arr) {
    if(arr.length === 1 || arr.length === 0) {
      return []
    } 
    else if (arr.length % 2 !== 0) {
      let midIndex = (Math.ceil(arr.length/2)) - 1;
      let midArr = []
      midArr.push(arr[midIndex])
      return midArr;
    } else if (arr.length % 2 === 0) {
      let midIndex1 = (arr.length/2) -1;
      let midIndex2 = midIndex1 + 1;
      let midArr = []
      middleArr.push(arr[midIndex1])
      middleArr.push(arr[midIndex2])
      return midArr;
    }
  };


middle([1, 2, 3]) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]