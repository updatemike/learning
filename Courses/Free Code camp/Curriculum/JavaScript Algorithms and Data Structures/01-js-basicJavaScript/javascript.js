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

//BOOLEANS
// true or false

//CONDITIONALS
/* if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses.
 These conditions are known as Boolean conditions and they may only be true or false. When the condition evaluates to true, the program executes the statement inside the curly braces.
 When the Boolean condition evaluates to false, the statement inside the curly braces will not execute. */
function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}
test(true);
test(false);

//COMPARISON OPERATORS
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
