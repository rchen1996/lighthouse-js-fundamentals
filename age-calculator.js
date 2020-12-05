// function should return a string explaining how old the person is
function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth
  return name + " is " + age + " years old."
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));