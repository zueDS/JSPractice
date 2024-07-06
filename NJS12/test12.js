//Array

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

//to change the values of array
collection [2] = "Li-ning";

/* When the original slot was a number, you can swap it out to string, a number, a boolean value
an undefine value, a null value, a true or false value even an object or another array because 
Javascript does not care about the datatype inside any of these slots.  */

//Adding new item to end of the array
collection[collection.length] = "Yonex";

//You can also assign a new item to a slot that doesn't exist yet that further down the chain.
//EX:
collection [9] = "Maxbolt";

console.log(collection[8]);
//when you call a slot that's not exist on array will show the output as undefined

console.log(collection);