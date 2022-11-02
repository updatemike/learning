/* let , const */

let variableName; /* instance a variable that can be manipulated */
const constantName = NaN; /* instance a variable that can't be manipulated (changed after being instanced) */

/* String, Numbers, Boolean, null, undefined */
const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null; /* empty variable */
const y = undefined;
let z;
/* console.log(typeof name); */ /* show on console the type of variable */

/* Concatenation */
const concatenation = "My name is " + name + " and I am " + age;
/* Template string */
let templateString = `My name is ${name} and I am ${age}`;
/* Properties */
let stringLength = name.length;
/* Methods */
const toUpperCase = name.toUpperCase(); /* Methods have (), they are basically functions */
const chainedMethods = concatenation.substring(0, 7).toUpperCase(); /* JS reads from left to right */

/* Arrays - variables that hold multiple values */
const tagsArray = "science, literature, sports";
const splitArray = tagsArray.split(", ") /* Makes an array ignoring ", " */
const anArray = ["apples", 10, true] /* arrays in JS can have multiple datatypes */
const partOfArray = anArray[1]; /* arrays start at 0, in this case anArray[0] is apples */
anArray.push(rating); /* adds an item to the end of an array */
anArray.unshift(name); /* adds an item to the start of an array */
const indexArray = anArray.indexOf(10); /* where the item is in the array */
/* console.log(anArray);
console.log(indexArray); */

/* Objects - key/value pairs*/
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "chocolate road",
        city: "Lisbon",
        country: "Portugal",
    }
}
const firstNamePerson = person.firstName; /* person.firstName gives the value of the firstName item in the object 'person' */
person.email = "john@gmail.com"; /* add items to object */
/* console.log(person.email) */

/* Arrays of objects */
const toDo = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting the boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist appointment",
        isCompleted: false
    }
];
const toDoTestOne = toDo[1].text; /* getting the value of text from item 1 in the toDo array */
/* JSON */
const toDoJSON = JSON.stringify(toDo);
/* console.log(toDoJSON); */

/* For loop */
/* for (let i = 0; i < 10; i++) {
    console.log(i)
} */
/* i starts at 0 and adds 1 (i++) until i < 10 is met (i = 9). for each i console.log(i) */
/* While Loop */
let i = 0;
while (i < 10) {
    /* console.log(i); */
    i++;
};
/* same as before using a while loop */
/* on objects */
for (let t of toDo) {
    /* console.log(t.text) */
}

/* Function -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions*/
function addNumbers(num1, num2) {
    return num1 + num2;
};
const addNumbersAnswer = addNumbers(5, 5);
/* console.log(addNumbersAnswer) */

/* High order array methods */
/* forEach - loop through */
toDo.forEach(function (t) {
    /* console.log(t.text); */
});
/* map -  create an array*/
const toDoTextMap = toDo.map(function (t) {
    return t.text;
});
/* console.log(toDoTextMap); */
/* filter - create an array with conditions */
const toDoTextFilter = toDo.filter(function (t) {
    return t.isCompleted === true;
});
/* console.log(toDoTextFilter); */
/* Combining them */
const toDoCombined = toDo.filter(function (t) {
    return t.isCompleted === true;
}).map(function (t) {
    return t.text;
});
/* console.log(toDoCombined) */

/* Conditionals */
const oneConditional = 10;
/* == compares value, === compares value and datatype */
if (oneConditional == 10) {
    /* console.log("x is 10 regardless of data type") */
} else if (oneConditional === 10) {
    /* console.log("x is 10 and is datatype number") */
} else {
    /* console.log("x is NOT 10") */
};
/* OR -> ||, AND -> && */
/* Ternary operator -> variable = condition ? value if true : value if false */
const ternaryConditional = x > 10 ? "red" : "blue";
/* switch */
switch (ternaryConditional) {
    case "red":
        /* console.log("color is red"); */
        break;
    case "blue":
        /* console.log("color is blue"); */
        break;
    default:
        /* console.log("color is NOT red or blue") */
        break;
}
/* console.log(ternaryConditional) */

/* arrow functions */
/* function addNumbers(num1, num2) {
    return num1 + num2;
}; */
const addNumbersArrow = (num1, num2) => num1 + num2;
/* console.log(addNumbersArrow(5, 5)) */


/* OBJECT ORIENTED PROGRAMMING */
/* Constructor function */
function Car(name, brand, color, manufacturedDate) {
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.manufacturedDate = new Date(manufacturedDate);
    /* this.getNameAndBrand = () => `${this.name} ${this.brand}` */ /* This shows on the object itself so it's best to move to object prototype like shown below */
}
Car.prototype.getNameAndBrand = function () {
    return `${this.name}  ${this.brand}`
}

/* Instantiate object */
const car1 = new Car("Mike", "volvo", "black", "12/20/1989");

/* console.log(car1.getNameAndBrand()); */

/* Classes */
class Dog {
    constructor(dogFirstName, dogLastName, dogDateOfBirth) {
        this.dogFirstName = dogFirstName;
        this.dogLastName = dogLastName;
        this.dogDateOfBirth = new Date(dogDateOfBirth);
    }

    getDogBirthYear() {
        return this.dogDateOfBirth.getFullYear();
    }

    getDogFullName() {
        return `${this.dogFirstName} ${this.dogLastName}`
    }
}
const sombra = new Dog("Sombra", "Cadela", "12/20/1989")
/* console.log(sombra)
console.log(sombra.getDogFullName()) */

