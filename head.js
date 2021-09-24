const assertEqual = require('./assertEqual');

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

module.exports = head


