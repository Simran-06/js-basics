// This is my first JavaScript Code!
console.log('Hello!! Lets get started');   

// Node is a runtime environment for executing JS code. 

let name = 'Joy';  // String Literal
console.log(name);

let firstName = 'Harshad', lastName = 'Shringi';
console.log(firstName, lastName);

const Rupee = 100;
//const Rupee = 100;
console.log(Rupee);
// You cannot re-assign a value of a const variable. It will throw a syntax error.

let age = 27.1;  // Number Literal
// In javascript we do not have floating point numbers. All Numbers are of type: "number".
// check console by typing " typeof age " which results in "number"

let isApproved = true;  // Boolean Literal
let fname = undefined;  
let lname = null;
// 3 other variable types: 'Boolean', 'Undefined' and 'null'. [Primitive/Value Types]


let selectedColor = null;
// Now 'typeof selectedColor' is an 'Object'.


//1.OBJECT Literal 
//Makes code look cleaner.
let person = {
    name: 'Harshad',
    age: 27,
};

// Dot Notation             [  Best Practise . Cleaner Code below  ]
person.name = 'John';

// Bracket Notation
person['name'] = 'Mary';

console.log(person); 
console.log(person.name); 

//Also bracket notation usage -
let selection = 'name';
person[selection] = 'Joy';
console.log(person.name);

// 2. Array Literal : Only in JS we can create an array of different variables. No restrictions.

let selectedColors = ['blue', 'green'];
selectedColors[2] = 'yellow';
selectedColors[3] = '1';
console.log(selectedColors);
console.log(selectedColors[2]);
// typeof selectedColors is object. Hence in JS Array is an Object.
console.log(selectedColors.length);
// In short, Array is a Data Structure that we use to represent data items.


// 3. Functions : are one of the fundamental building blocks of JS

function greet(name){
    console.log('Hello ' + name);
}
//Here, we passed a parameter into the greet function : 'name' . 
//Parameter is passed at the time of declaration.

greet('Harshad');   // this name 'Harshad' we passed in here is the argument.
greet('Mary');   
// Argument is the actual value we supply to the parameter.


// A function can have multiple parameters.
function greeting(name, surname){
    console.log('Hello ' + name + ' ' + surname );
}
greeting('Joy');      // Default value of variables in JS is undefined.
greeting('Joy', 'Shringi');


// Calculating a value
function square(num){
    return num * num ;
}
let num = square(3);
console.log(num);

console.log(square(2));   // Simple and cleaner way. No need to declare a separate variable as above example.
// In this eg. we called 2 functions- square() & also log().  

