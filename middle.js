const assertEqual = require('./assertEqual');

  const middle = function(arr) {
    if(arr.length === 1 || arr.length === 0 || arr.length === 2) {
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
      midArr.push(arr[midIndex1])
      midArr.push(arr[midIndex2])
      return midArr;
    }
  };

module.exports = middle
