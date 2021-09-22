const assertEqual = require('./assertEqual');

//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  let sliceEndIndex = "";
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      sliceEndIndex = i;
      newArray = array.slice(0, sliceEndIndex);
      return newArray;
    }
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertEqual(results1, [1, 2, 5, 7, 2]);
assertEqual(results2, ["I've", "been", "to", "Hollywood"]);