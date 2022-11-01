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

/* Assignment */

let firstAnswer = 10 + 20;
let secondAnswer = "10" + 20 + 30 + 40 + 50 + 60
let thirdAnswer = (4 + 6 + 9) / 77;

let a = 10;
let fourthAnswer = 9 * a;