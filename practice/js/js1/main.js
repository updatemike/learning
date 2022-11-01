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
