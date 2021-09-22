const assertEqual = function(actual, expected) {
  if(actual == expected)
  console.log("Assertion passed, 1=1");
  else
  console.log("Assertion failed, lighthouse != Bootcamp");
};

// TEST CODE

const head = function (arr) {
  let head1 = [];
  for (let i=0; i<arr.length; i++) {
    if (i === 0) {                                 //checks the first element in the array
      head1.push(arr[i])
      break;
    }
  }
  return head1[0];
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


////assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


