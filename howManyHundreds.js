// each container on the ship can hold 100 bottles of maple syrup
// container will only be sent to mars if full
// given certain number of bottles, determine how many containers can be filled and sent
// function should return how many hundreds can fit into a number
// use % operator

function howManyHundreds (num) {
  let remainder = num % 100
  return (num - remainder) / 100
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);