//Data Types

/*Important: JavaScript does not care about data type you put in a variable it just stores that data.
If you want to find out what data type Javascript has identified an assigned vale to variables 
you can use "type of" operator.*/

// String:
let stringDemo = "A string of text.";
console.log("String:", typeof stringDemo); //when you save this and run, it will show in console what is the data type.

// Numbes:
let integerDemo = 4;
console.log("Integer:", integerDemo);

let floatDemo = 5.6;
console.log("Floating point number:", typeof floatDemo);

// Boolean:
let booleanDemo = true;
console.log("Boolean value:", booleanDemo);

// Null value (nothing):
let nullDemo = null;
console.log("Null value:", nullDemo);

// Undefined:
let undefinedDemo;
console.log("Undefined:", undefinedDemo);

let undefinedAssignedDemo = undefined;
console.log("Undefined assigned:", undefinedAssignedDemo);

// Object:
const objectDemo = {
  dance: "Mambo",
  number: 5,
};
console.log("Object:", objectDemo);

// Array:
const arrayDemo = ["tango", "foxtrot", "waltz", "rumba", "bolero"];
console.log("Array:", arrayDemo);