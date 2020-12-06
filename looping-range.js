// function called range that takes 3 integer parameters
// function should return an array of numbers from start to end counting by step
/* function should return empty array if given incorrect parameters:
start, end or step being undefined
start > end
step = 0 or negative */
// probably want to use .push()
function range (start, end, step) {
  let countByStep = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return countByStep;
  } else {
    for (let i = start; i <= end; i = i + step) {
      countByStep.push(i);
    }
    return countByStep;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));