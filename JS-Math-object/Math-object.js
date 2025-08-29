// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E); // 2.718281828459045

// Math.round -> rounds a number to the nearest integer

console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4

//Math.floor - rounds down to the nearest integer 

console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.4)); // 4

//Math.ceil - rounds up to the number to the nearest integer

console.log(Math.ceil(4.4)); // 5
console.log(Math.ceil(4.7)); // 5

// Math.max and Math.min find the largest / smallest number 

console.log(Math.max(1, 2, 3, 4, 5, 8, 10));
console.log(Math.min(1, 2, 3, 4, 5, 8, 10));

const num = [1, 2, 3, 4, 5, 8, 10];
console.log(num);
console.log("Math.min(...num):", Math.min(...num));
console.log("Math.max(...num):", Math.max(...num));

// Math.abs - gets the absolute value of a number 
// converts negative number to positive 

console.log(Math.abs(-10)); // 10


//Math.pow - raises a number to a power

// console.log(Math.pow(2, 3)); // 8
// console.log(Math.pow(3, 6)); // 729
// console.log(2 ** 3); // 8

// Math.sqrt() 

// console.log(Math.sqrt(16)); // 4
// console.log(Math.sqrt(25)); // 5
// console.log(Math.sqrt(36)); // 6

// const nums = 16;
//     if((Math.sqrt(nums) % 1 === 0)){
//         console.log(nums + " is a perfect square.");
//     } else {
//         console.log(nums + " is not a perfect square.");
//     }

console.log('fucntion to see if perfect square')

function isPerfectSquare(num) {
    if (Math.sqrt(num) % 1 === 0) {
        return `${num} is a perfect square.`;
    } else {
        return `${num} is not a perfect square.`;
    }
}

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(27));
