const fruits = ["apple", "banana", "orange", "mango"];

console.log(fruits); // out to be apple banana orange and mango

// Declaring and manipulating array elements
// console.log(fruits[0]); // out to be apple
// console.log(fruits[3]); // out to be mango

// fruits[1] = "blueberry";    

// console.log(fruits); // out to be apple blueberry orange and mango

// console.log('Length of array:', fruits.length); // out to be 4


// Array methods
//push
fruits.push("grape"); // adds grape to the end of the array
console.log(fruits); // out to be apple blueberry orange and mango grape

// pop
fruits.pop(); // removes the last element from the array
console.log(fruits); // out to be apple blueberry orange and mango

// shift
// fruits.shift(); // removes the first element from the array
// console.log(fruits); // out to be blueberry orange and mango

// // unshift
// fruits.unshift("kiwi"); // adds kiwi to the beginning of the array
// console.log(fruits); // out to be kiwi blueberry orange and mango

// // splice method add or remove elements
// fruits.splice(2, 1, "strawberry", "pineapple"); // removes 1 element at index 2 and adds two new elements
// console.log(fruits); // out to be kiwi blueberry strawberry pineapple mango

// fruits.splice(1, 2); // removes 2 elements starting from index 1
// console.log(fruits); // out to be kiwi pineapple mango

// MAP

const numbers = [1, 2, 3, 4, 5];
console.log("numbers =", numbers);  
const doubled = numbers.map(num => num * 2);
console.log("doubled =", doubled); // out to be [2, 4, 6, 8, 10]

// Filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("evenNumbers =", evenNumbers); // out to be [2, 4]
