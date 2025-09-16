// Java vs JS
console.log("Java VS JS");
console.log("1er mouton");
let i = 2;
while (i <= 23) {
  console.log(i + "e mouton");
  i++;
}

// PHP vs JS
console.log("PHP VS JS");
function calculerSurface(rayon) {
  return (Math.PI * Math.pow(rayon, 2)).toFixed(2);
}
console.log(calculerSurface(4));

// Code perso
console.log("Code perso");
for(let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


