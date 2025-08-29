// Math.random - generates  random decimal number between 0 and 1
// console.log(Math.random());

// const randomNum = Math.floor(Math.random() * 10) + 1; // generates random number between 1 and 10
// console.log(randomNum);

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(5, 10));

