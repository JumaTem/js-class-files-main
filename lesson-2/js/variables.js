
/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */

const myName = "Juma";
let myAge;
/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */

myAge = 32;
/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
let numCars = 5;
let carYear = 2021;

console.log(`My car is ${carYear} Honda`);

// STEP 4: Variable types (use typeof in the console)
// Numbers

// Strings (use '' or "")
let manufacturer = 'Honda';

// Booleans
let isCarCool = true;

// Arrays

let myCarArray = ["Honda", "Toyota", "Ford"];
let myMixedArray = ["String", true, 5, myCarArray];
myCarArray[1];

// Objects

let myDog = {
	name: "Rufus",
	breed: "retriever",
	size: "large",
	age: 6,
	goodDog: true
};



// STEP 5: Typing (JavaScript is a loosely-typed language)
