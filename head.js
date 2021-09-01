const assertEqual = function(actual, expected) {
  if(actual == expected)
  console.log("Assertion passed, 1=1");
  else
  console.log("Assertion failed, lighthouse != Bootcamp");
};

// TEST CODE

const headfirst = function (arr) {
  let head = [];
  for (let i=0; i<arr.length; i++) {
    if (i === 0) {                                 //checks the first element in the array
      head.push(arr[i])
      break;
    }
  }
  return head[0];
}


assertEqual(headfirst([5,6,7]), 5);
assertEqual(headfirst(["Hello", "Lighthouse", "Labs"]), "Hello");


////assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


