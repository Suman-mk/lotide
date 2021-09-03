var array = ['a', 'b', 'c'];


const assertEqual = function(array, expected) {
  

  
  if(array== expected)
  console.log("Assertion passed, 1=1");
  else
  console.log("Assertion failed, lighthouse != Bootcamp");

};

// TEST CODE
const headlast = function (arr) {
  let head = [];
  for (let i=0; i<arr.length; i++) {
    if (i !== 0) {                                 //checks the last element in the array
      head.push(arr[i])
      
    }
  }
  return headlast;
}


const result = headlast(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

//assertEqual(tail([5,6,7]), 5);
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(words.length, 3); // original array should still have 3 elements!