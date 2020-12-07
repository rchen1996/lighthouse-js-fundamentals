// build a function that determines the last index of an item in an array
// when function given an array and value, it should return index of last time the value occurs in the array
// if value never occurs, function should return -1

function lastIndexOf (array, value) {
  let lastTime
  if (array.length === 0) {
    lastTime = -1
  } else {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === value) {
        lastTime = i
        break;
      } else {
        lastTime = -1
      }
    }
  }
  return lastTime
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);