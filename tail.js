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

module.exports = tail