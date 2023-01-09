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
// destructuring => grabbing objects or arrays and turning them into smaller objects/variables.
const dUser = { dName: "John Doe", dAge: 33, dDate };
const { dName, dAge } = dUser; //same as const dName = dUser.name and const dAge = dSyntaxUser.dAge
const { dName: nName, dAge: nAge } = dUser; //Can rename the variables. Same as const nName = dUser.dName
const nUser = { "John Doe": { age: 34, email: "johndoeemail@email.email" } }; //nested object
const {
  "John Doe": { age: mAge, email: mEmail },
} = nUser; //destructuring nested objects
const half = ({ dDate, dAge }) => (dDate + dAge) / 2; // destructuring an object in a function argument itself. half(dUser) will call on dDate and dAge from the object properties.

//DESTRUCTURING ARRAYS
// One key difference between destructuring an array and spreading and array (...arr) is that you can pick which value you want from the comma-separated list.
const [da, db, , , dc] = [1, 2, 3, 4, 5, 6]; // da = 1, db = 2, dc = 5.
const [daa, dbb, ...ddc] = [1, 2, 3, 4, 5, 6]; // console.log(daa, dbb) => (1, 2). console.log(ddc) => [3, 4, 5, 6]. Works like prototype.slice()

//TEMPLATE LITERAL
// `${argument}`
// Template literal is a special type of string that makes creating complex strings easier.
const literalPerson = { name: "Zodiac Hasbro", age: 56 };
const literalGreeting = `Hello, my name is ${literalPerson.name}! I am ${literalPerson.age} years old.`;
// Notice the use of `` instead of "" or '' in literalGreeting. Also "I am 56 years old." appears on a new line without the use of \n.
// You can use other functions such as ${name + age}.

//Concise Object Literal declaration using Object property shorthand
const oLExample1 = (x, y) => ({ x: x, y: y });
const oLExample2 = (x, y) => ({ x, y }); //

//Concise Declarative Functions
const dFExample1 = {
  name: "Taylor",
  sayHello: function () {
    return `Hello! My name is ${this.name}.`;
  },
};
const dFExample2 = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  },
};

//CLASSES => syntax to create objects.
// class, new ClassName()
// Implicit constructor
class ClassExample {
  constructor(classConstructorExample) {
    this.classConstructorExample = classConstructorExample;
  }
  classFunctionExample() {
    console.log(`This ${this.classConstructorExample} was made with a class with an implicit constructor!`);
  }
}
const useClass1 = new ClassExample("example"); //useClass1.classFunctionExample() will console log "This Example was made with a class with an implicit constructor!"
// Explicit constructor
class ClassExample2 {
  classFunctionExample2() {
    console.log(`This is using an implicit constructor`);
  }
}
const useClass2 = new ClassExample2(); //useClass2.classFunctionExample2() will console log "This is using an implicit constructor"
/* The class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.
 Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
 The constructor method is a special method for creating and initializing an object created with a class. */

//GETTERS AND SETTERS
// get, set
// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
/* Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. 
 This change could involve calculations, or even overwriting the previous value completely. */
// Getters and setters are important because they hide internal implementation details.
class GetSetClass {
  constructor(argument) {
    this._variableExample = argument;
  }
  // getter
  get getSetArgument() {
    this._variableExample;
  }
  // setter
  set getSetArgument(updateGetSetArgument) {
    this._variableExample = updateGetSetArgument;
  }
}
const getSetExample = new GetSetClass("blue variable"); //console.log(getSetExample.getSetArgument) prints "blue variable"
getSetExample.getSetArgument = "red variable"; ////console.log(getSetExample.getSetArgument) prints "red variable"
// It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.

//MODULE SCRIPT
// <script type="module" src="filename.js"></script>;
// Share code among JS files, this involved exporting parts and importing parts. You need to create a script in your HTML document with a type of module.
// you use import and export for this.
// named exports
export const exportExample1 = (x, y) => {
  return x + y;
};
export const exportExample2 = (x, y) => {
  return x + y;
};
// can also not write export on each function you want to export and just do:
export { exportExample1, exportExample2 };
// Imagining that the exported functions above were in a file called export.js. To import:
import { exportExample1, exportExample2 } from "./export.js"; // if I wanted to import just one function I'd just name that one
// If you wish to import all the contents of a file into the current file use: import * as
import * as myExportModule from "./export.js";
/* The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. 
 The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. 
 Here's how you can use the add and subtract functions that were imported: */
// myExportModule.exportExample1(1,2)
// myExportModule.exportExample2(1,2)
// export default => Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.
export default function defaultFunctionName(x, y) {
  return x + y;
}
// you don't need a named function.  You can use an anonymous function.
/* Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. 
 Additionally, you cannot use export default with var, let, or const */
// Import a default Export
import defaultFunctionName from "./path_to_export.js";
/* The syntax differs in one key place. 
 The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. 
 You can use any name here when importing a default. */

//JS PROMISES
/* Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject.
 These are methods used to determine the outcome of the promise. The syntax looks like this: */
const myPromiseExample1 = new Promise((resolve, reject) => {});
// promises have 3 states: pending, fulfilled and rejected. The above promise is forever stuck in pending because we didn't add a way to complete the promise.
// resolve is used when you want your promise to succeed, and reject is used when you want it to fail.
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
/* Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request.
 When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server.
 This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example: */
const makeServerRequest2 = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest2.then((result) => console.log(result));
// catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. error is the argument passed in to the reject method.
const makeServerRequest3 = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest3.then((result) => {
  console.log(result);
});
makeServerRequest3.catch((error) => {
  console.log(error);
});
