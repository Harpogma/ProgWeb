"use strict"

// Tableau de nombres
const numbers = Object.freeze([3, 14, 15, 92 ,65, 35, 89, 79, 32, 38]);

// 1
console.log(1)
console.log(numbers);

// 2
console.log(2)
const multiplyBy2 = (num) => num * 2;

const doubled = function (arr, fn) {
    let tempArray = [];
    for (let el of arr) {
        tempArray.push(fn(el));
    }
    return tempArray;
}

console.log(doubled(numbers, multiplyBy2));

// 3
console.log(3)
const onlyOdd = numbers.filter(function(num) {
    return num % 2 === 1;
});

console.log(onlyOdd);

// 4
console.log(4)
const notFirstEl = numbers.filter((_, index) => index !== 0);
console.log(notFirstEl);

// 5
console.log(5);
const notLastEl = numbers.filter((_, index) => index !== numbers.length-1);
console.log(notLastEl);

// 6
console.log(6);
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum);

// 7
console.log(7);
const greaterThan = (a, b) => a > b ? a : b;
const greaterNum = numbers.reduce(greaterThan);
console.log(greaterNum);

// 8
console.log(8);
const isMultipleOf9 = x => x % 9 === 0;
const multipleOf9 = () => numbers.some(isMultipleOf9);

console.log(multipleOf9());

// 9 
console.log(9);
const isNegative = x => x < 0;
const containOnlyPositive = () => numbers.some(isNegative) === true ? false : true;
console.log(containOnlyPositive());

// 10
console.log(10);
const isEven = x => x % 2 === 0;
let newNumbers1 = [...numbers];
const sortByEvenOdd = newNumbers1.sort(isEven);
console.log(sortByEvenOdd);

// 11
console.log(11);
let newNumbers2 = [...numbers];
const compare = function (a,b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
const sortSmallToBig = newNumbers2.sort(compare);
console.log(sortSmallToBig);

// 12
console.log(12);
const newNumbers3 = [...numbers];
const sortBigToSmall = newNumbers3.sort((a,b) => b - a);
console.log(sortBigToSmall);
