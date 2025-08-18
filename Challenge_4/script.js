// Exercise 1 
function addTwo(x) {
    return x + 2;
}

console.log(addTwo(3));
console.log(addTwo(10)); 

// Exercise 2
function pluralize(word) {
    return `${word}s`; 
}

console.log(pluralize("pizza")); 

// Exercise 3

function map(numbers, callback) {
    let newArray = [];
    for (let number of numbers) {
        newArray.push(callback(number));
    }
    return newArray;
}

console.log(map([1, 2, 3], addTwo));

// Exercise 4

