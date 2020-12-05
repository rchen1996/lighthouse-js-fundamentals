// loop that prints numbers from 100 to 200 to console
// if number is multiple of 3, print "Loopy"
// if number is multiple of 4, print "Lighthouse"
// if number is multiple of both 3 and 4, print "LoopyLighthouse"

for (let x = 100; x <= 200; x++) {
  if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (x % 3 === 0) {
    console.log("Loopy");
  } else if (x % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(x)
  }
}