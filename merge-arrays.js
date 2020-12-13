// function should return a sorted array of the numbers from 2 sorted arrays

function merge(arrayOne, arrayTwo) {
  let merged = [];
  for (let i = 0; i < arrayOne.length; i++) {
    merged.push(arrayOne[i])
  }
  for (let j = 0; j < arrayTwo.length; j++) {
    merged.push(arrayTwo[j]);
  }
  // now merged is an array containing values from both arrays - need to sort
  merged.sort()
  return merged;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);