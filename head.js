onst assertEqual = function(actual, expected) {
  if(actual == expected)
  console.log("Assertion passed, 1=1");
  else
  console.log("Assertion failed, lighthouse != Bootcamp");
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);