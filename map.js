
const assertEqual = require('./assertEqual');

//The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  newArray = []
  for(i =0; i < array.length; i++){
    newArray.push(callback(array[i]))
  }
  return newArray
}

const results1 = map(words, word => word[0]);

assertEqual(results1, ["g", "c", "t", "m", "t"])

module.exports = map
