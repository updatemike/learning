/* Javascript Fundamentals */
/* Fundamentals Part 1 */
let admin;
let name;

name = "John";
admin = name;
let adminName = name + admin;

let ourPlanetName;
let currentUserName;

let x = 10;
let y = 20;
let z = "10";

let firstExample = x + y; /* 30 */
let secondExample = y + z; /* 2010 -> This happens because if you add a number and a string it counts it as a string */
let thirdExample = "The result is: " + x + y; /* The result is: 1020 -> same reason as before even if variables are all numbers there is a string */
let fourthExample = x + y + z; /* 3010 -> JS interpreter works from left to right. It added the numbers then added the string */
let fifthExample = y - z; /* 10 -> JS always tries to change strings to numbers when doing maths except for the + operator */

// Assignment
// 1
console.log("part 1")
console.log(23 + 97)
// 2
console.log(`1 2 3 4 5 6`)
// 3
console.log((4 + 6 + 9) / 77);
// 4 
let a = 10;
console.log(a);
let b = 7 * a;
console.log(b);
/* 5 */
const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage)




/* Fundamentals Part 2 */
console.log("part 2")
const escapeCharacter = "Hello \"World\"";
console.log(escapeCharacter);
const hello = "Hello";
const world = "World";
const concatenateString = `${hello}, ${world}`
console.log(concatenateString);

const color = 'blue';
if (color === 'red') {
    console.log('color is red');
}
else if (color === "blue") {
    console.log('color is blue');
}
else {
    console.log('color is not red or blue')
}
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue')
        break;
}
const whatColor = (color === 'red') ? 'color is red' : (color === "blue") ? "color is blue" : "color is NOT red or blue";
console.log(whatColor);




/* Fundamentals Part 3 */
// Assignment
function add7(number) {
    return number + 7;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()
}
function lastLetter(string) {
    return string.slice(-1);
}




/* Problem solving */
// let fizzBuzzInput = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: ")); 

// if (typeof (fizzBuzzInput) == "number") { }
//else { fizzBuzzInput = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: ")) } 

function fizzBuzz() {
    let fizzBuzzInput;
    while (isNaN(fizzBuzzInput)) {
        fizzBuzzInput = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "))
    }
    for (let i = 1; i <= fizzBuzzInput; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }
}

// fizzBuzzInput()




/* Understanding errors */
// Syntax errors, Logic Errors
// Type Error, Syntax Error, Reference Error




/* Fundamentals part 4 */

