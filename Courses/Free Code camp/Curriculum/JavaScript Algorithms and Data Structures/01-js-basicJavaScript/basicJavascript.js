// COMMENTING
// This is an in-line comment.
/* This is a multi 
line comment */

// DATA
// data types => undefined, null, boolean, string, symbol, bigint, number, object
// variables => store and manipulate data using labels
// declare variable myName, initial value will be "undefined" or NaN (not a number)
var myName;
// assign Number 7 to variable "a"
var a = 7;
// assign the value of variable "a" to variable "b"
var b = a;
// assign strings to variable
var myFirstName = "Michael";
var myLastName = "Maycock";
// all variable and function names are case sensitive. Use camelCase
var camelCase;
// using "var" for declaring can bring problems because you can use it to overwrite variables. So use "let" so a variable can only be declared once.
let onceVariable;
// "const" is like let but the variable is read-only, once it's assigned it cannot be reassigned.
// immutable variables are normally written in uppercase
let FCC;
// Maths => +, -, *, /, ++, --
FCC++;
// decimal numbers, sometimes referred as floats.
// remainder operator  => %. Can be used to check if number is even or odd by variable % 2.
// +=, -=, *=, /=
let plusEqual = 1;
plusEqual += 5; // plusEqual is now 6
// \" => literal quote on a string
const literalQuote = 'I said "don\'t put the money in th bag".'; //literalQuote => I said "don't put the money in the bag".
// in JS "" is the same as ''
// \', \", \\ => backlash, \n => newline,  \t => tab, \r => carriage return, \b =>	word boundary, \f => form feed.

// STRING CONCATENATION
const stringConcatenation = "This is the start." + " This is the end."; // This is the start. This is the end.
let stringConcatenation2 = "I come first.";
stringConcatenation2 += " I come second."; // I come first. I come second.
let stringConcatenation3 = stringConcatenation2 + " I come third."; // I come first. I come second. I come third.

// PROPERTIES
let lastNameLength = myLastName.length; // length of Maycock => 7
// is JS indexing starts at 0. [0] => Bracket notation is a way to get a character at a specific index within a string.
const firstMyLastName = myLastName[0]; // myLastName[0] => M (from Maycock)
// last character [variable.length - 1]
const lastMyLastName = myLastName[myLastName.length - 1]; // myLastName[7 - 1] => myLastName[6] => k (from Maycock)

//ARRAYS
const sandwich = ["peanut butter", "jelly", "bread"];
// nest arrays in arrays => multi-dimensional array
const teams = [
  ["Bulls", 23],
  ["White Sox", 45],
];
// access data in arrays using indexes
const secondTeam = teams[1]; // secondTeam => ["White Sox", 45]
// unlike strings, arrays are mutable
sandwich[1] = "ham"; // sandwich = ["peanut butter", "ham", "bread"]; => jelly changed to ham
teams[0][1] = 30; // teams = [["Bulls", 30], ["White Sox", 45]]; => 23 changed to 30

//ARRAY FUNCTIONS
// push() function => append data to end of array
sandwich.push("bacon"); // sandwich = ["peanut butter", "ham", "bread", "bacon"]
// pop() => remove last value of array and/or get it's value
const lastSandwich = sandwich.pop(); //lastSandwich = "bacon" => sandwich = ["peanut butter", "ham", "bread"]
// shift() => same as pop() but for the first element
// unshift() => like push() but for the first element

//FUNCTIONS
//Math.random(), Math.floor(), parseInt()
// In JavaScript, we can divide up our code into reusable parts called functions. You can call a function by typing functionName().
function functionName() {
  console.log("Hello World");
}
/* Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined,
 it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments. */
function testFun(param1, param2) {
  console.log(param1, param2);
}
testFun("argument1", "argument2");
// You can use a return statement to send a value back out of a function.
function plusThree(num) {
  return num + 3;
}
/* In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope.
 This means, they can be seen everywhere in your JavaScript code. */
// Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
/* A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement,
 when you call it, the function processes the inner code but the returned value is undefined. Normally used to change global variables. */
// When a return statement is reached, the execution of the current function stops and control returns to the calling location.
// Math.random() is a function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.
// Math.floor() rounds the number down to its nearest whole number.
function diceRoll(minRoll, maxRoll) {
  return Math.floor(Math.random() * (maxRoll - minRoll + 1) + minRoll);
}
// The parseInt() function parses a string and returns an integer.

//BOOLEANS
// true or false

//CONDITIONALS
// if, else if, else, switch
/* if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses.
 These conditions are known as Boolean conditions and they may only be true or false. When the condition evaluates to true, the program executes the statement inside the curly braces.
 When the Boolean condition evaluates to false, the statement inside the curly braces will not execute. */
/* When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. 
 With an else statement, an alternate block of code can be executed. */
function ifConditional(myCondition) {
  if (myCondition == 1) {
    return "It was 1";
  } else if (myCondition == 2) {
    return "It was 2";
  } else {
    return "It wasn't 1 or 2";
  }
}
/* If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values.
 Statements are executed from the first matched case value until a break is encountered. case values are tested with strict equality (===). 
 The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed. */
/* In a switch statement you may not be able to specify all possible values as case statements. Instead,
 you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.
 A default statement should be the last case. */
// You can group switch cases if the output is the same like shown below.
switch (switchExample) {
  case "a":
  case "c":
    console.log("A or C");
    break;
  case "b":
    console.log("B");
    break;
  default:
    console.log("default statement");
}

//COMPARISON OPERATORS
// ==, ===, !=, !==, >, <, >=, <=, &&, ||
/* There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
 The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. */
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
// Strict equality (===) is the counterpart to the equality operator (==). If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
/* 1 == "1" => true
   1 == 2 => false
   1 === "1" => false
   1 === 1 => true */
// typeof "3" => returns string, the data type of "3"
//!= and !== are the equivalent of == and === respectively except they return true if the value is not equal following the same rules as their counterparts.
/* 1 != 2 => true
   1 != 1 => false
   1 !== "1" => true
   1 !== 1 => false */
// 2 > 1 => true, 1 < 2 => true. These operators function the same way as == when it comes to data type conversion for comparison.
/* Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.
 The same effect could be achieved by nesting an if statement inside another if */
// while && acts as a "and" condition, || acts as a "or" condition. The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

//OBJECTS
/* Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
 Objects are useful for storing data in a structured way, and can represent real world objects, like a cat. */
const catObject = {
  name: "Whiskers",
  legs: 4,
  "number of tails": 1,
  enemies: ["Water", "Dogs"],
};
//There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
// Ex: catObject.legs => 4, catObject["number of tails"] => 1, catObject.enemies[1] => "Dogs"
//You can add new properties to existing JavaScript objects the same way you would modify them using either . or [].
catObject.color = "white";
// We can also delete properties from objects like this:
delete catObject.color;
//Note: Dot notation is only for the exact, literal name of the property. Dot notation cannot be used with variables holding the property name, use [] instead.
//We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name.
catObject.hasOwnProperty("name"); //this returns true because catObject has the property "name".

//LOOPS
// while, for, do...while
// While loop runs while a specified condition is true and stops once that condition is no longer true.
const loopArray = [];
let loopExample = 0;
function whileLoop() {
  while (loopExample < 5) {
    loopArray.push(loopExample);
    loopExample++;
  }
  console.log(loopArray);
}
// For loops => for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.
function forLoop() {
  for (let n = 0; n < 5; n++) {
    loopArray.push(n);
  }
  console.log(loopArray);
}
// For loops don't have to iterate one at a time, or be additive. Example: n += 2 Example: n--
// For loops are normally used to iterate through arrays.
function iterateLoopArray() {
  for (let n = 0; n < loopArray.length; n++) {
    console.log(loopArray[n]);
  }
}
// do...while => will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.
function doWhileLoopArray() {
  do {
    loopArray.push(loopExample);
    loopExample++;
  } while (loopExample < 5);
}

//RECURSION
// Recursion is the concept that a function can be expressed in terms of itself. Can replace loops:
function recursiveLoopArray() {
  if (loopExample >= 5) {
    console.log(loopArray);
  } else {
    loopArray.push(loopExample);
    loopExample++;
    recursiveLoopArray(loopExample);
  }
}

//CONDITIONAL OPERATOR
/* The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
 The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false. 
 You can also chain them together to check for multiple conditions.*/
//Following example is the same as the ifConditional function from before in the CONDITIONALS section:
function conditionalOperator(myCondition) {
  return myCondition == 1 ? "It was 1" : myCondition == 2 ? "It was 2" : "It wasn't 1 or 2";
}
