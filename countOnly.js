
const assertEqual = require('./assertEqual');

//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.

const countOnly = function(allItems, itemsToCount) {
  let items2Count = Object.keys(itemsToCount)
  const results = {}
  for (const item of allItems) {
    for(let countableItem of items2Count) {
      if(item === countableItem){
        if(typeof results[item] !== "number"){
          results[item] = 1
        } else if (typeof results[item] === "number"){
          results[item] += 1
        }
      }
    }
  }
  return results;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

module.exports = countOnly