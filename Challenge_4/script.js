//1
const addTwo = a => a + 2;

//2
const pluralize = string => `${string}s`;

//3
const map = function (array, fn) {
    let tempArray = [];
    for(number of array) {
        tempArray.push(fn(number));
    }
    return tempArray;
}

//4
const forEachP = function (array, fn) {
    for(let char of array) {
        fn(char);
    }
}

let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEachP(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);

//5
const reduce = function (array, fn, init) {
    let tempResult = init;
    forEachP(array, function (e) {
        tempResult = fn(tempResult, e);
    });
   
    return tempResult;
}

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0))
console.log(reduce([4,1,3], (a, b) => a + b, 0))