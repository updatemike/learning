//LET AND VAR AND CONST
// var => global declaration, local if declared inside a function
// let => acts like var but if declared inside a block, statement or expression, it's scope is limited to those.
/* const => variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.
 Objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier. */
const howConstVariable = [5, 6, 7];
function howConst() {
  s = [1, 2, 3]; //won't work
  s[2] = 45; //changes value 7 to 45 in howConstVariable
  console.log(howConstVariable);
}

//OBJECT MUTATION
//Object.freeze(object) => make an object immutable

//ARROW FUNCTIONS
// alternative way of defining inline functions (nameless)
const notArrowFunction = function () {
  let myVar = "value";
  return myVar;
};
const aArrowFunction = () => {
  let myVar = "value";
  return myVar;
};
//if there is no function body and you just want to return a value
const anotherArrowFunction = () => "value";
//you can pass arguments into arrow functions
const arrowFunctionMultiplication = (item, item2) => item * item2; // arrowFunctionMultiplication(4,2)
// you can add default parameters
const defaultParamArrowFunction = (name = "Default Name") => "Hello " + name; //defaultParamArrowFunction() => "Hello Default Name". defaultParamArrowFunction("John") => "Hello John".

//OPERATORS
//rest operator => grab multiple arguments and store them in an array that can be accessed later from inside the function.
const restFunction = (...args) => "You have passed " + args.length + " arguments."; // restFunction(1,2,3,4,5,6) => "You have passed 6 arguments".
//spread operator => ... => spreads an array into it's value so they can be used individually one at a time.
const spreadMaximum = (arr) => Math.max(...arr); // spreadMaximum([1,2,3,4,5]) => 5. Math.max(arr) would return NaN. Math.max() expects comma-separated arguments.

//DESTRUCTURING OBJECTS
const dUser = { dName: "John Doe", dAge: 33 };
const { dName, dAge } = destructuringSyntaxUser; //same as const dName = dUser.name and const dAge = dSyntaxUser.dAge
const { dName: nName, dAge: nAge } = dUser; //Can rename the variables. Same as const nName = dUser.dName
const nUser = { "John Doe": { age: 34, email: "johndoeemail@email.email" } }; //nested object
const {
  "John Doe": { age: mAge, email: mEmail },
} = nUser; //destructuring nested objects

//DESTRUCTURING ARRAYS
// One key difference between destructuring an array and spreading and array (...arr) is that you can pick which value you want from the comma-separated list.
const [da, db, , , dc] = [1, 2, 3, 4, 5, 6]; // da = 1, db = 2, dc = 5.
const [daa, dbb, ...ddc] = [1, 2, 3, 4, 5, 6]; // console.log(daa, dbb) => (1, 2). console.log(ddc) => [3, 4, 5, 6]. Works like prototype.slice()
