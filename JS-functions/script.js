// function greet() {
//     console.log('Hello, welcome to JavaScript functions!');
// }

// greet();// calling the function

// function greetUser(name) {
//     console.log(`Hello, ${name}!`);
// }

// greetUser('Alice');// calling the function with an argument

// greetUser('Bob');// calling the function with another argument

// greetUser('Charlie');// calling the function with yet another argument

// function addNumbers(num1, num2, num3) {
//     console.log(`Sum: ${num1 + num2 + num3}`);
// }

// addNumbers(1, 2, 3)

// addNumbers(5, 10); // calling the function with arguments 5 and 10
// addNumbers(10, 10); // calling the function with arguments 10 and 10

// const greet = function(name) {
//     console.log(`Hello, ${name}!`);
// }

// console.log(greet);\


// Arrow functions ( shorter Syntax)

// const square = (num) => num**2;

// console.log(square(5)); // Outputs 25

// const mutiply = (a, b) => {
//    return a * b;
// }

// console.log(mutiply(3, 4));

// function Scope and Hoisting

// Hoisting is JavaScript's default behavior of moving declarations to the top.
// This means that you can use functions before you declare them.

// let globalVar = "I'm a global variable";

// function testScope() {
//     let localVar = "I'm a local variable";
//     console.log(localVar); // works
//     console.log(globalVar); // works
// }

// testScope();

// console.log(globalVar); // works
// console.log(localVar); // Error: localVar is not defined

// hello();

// function hello() {
//     console.log("Hello, world!");
// } // works because of hoisting



console.log(greet = function() {
    console.log("HELLO FROM A FUNCTION EXPRESSION");
});

greet();
