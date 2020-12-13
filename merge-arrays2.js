// function should return a sorted array of the numbers from 2 sorted arrays

function merge(arrayOne, arrayTwo) {
  let merged = [];
  for (let i = 0; i < arrayOne.length + arrayTwo.length; i++) { 
    // i < arrayOne.length + arrayTwo.length because that is the maximum number of comparisons you will make
    if (arrayOne[0] < arrayTwo[0]) {
      merged.push(arrayOne.shift())
    } else if (arrayOne[0] > arrayTwo[0]) {
      merged.push(arrayTwo.shift())
    } else if (arrayOne[0] === arrayTwo[0]) {
      merged.push(arrayOne.shift(), arrayTwo.shift())
    }
  }
  // once one of the arrays runs out of numbers, need to append remaining elements from the arrays onto the end of the new array (already sorted so can just append it)
  // can also use concat() method to to merge arrays instead of the following
  if (arrayOne.length > 0) {
    for (let j = 0; j < arrayOne.length; j++) {
      merged.push(arrayOne[j])
    }
  } else if (arrayTwo.length > 0) {
    for (let k = 0; k < arrayTwo.length; k++) {
      merged.push(arrayTwo[k])
    }
  }
  return merged;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);