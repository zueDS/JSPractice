var a=5; //if the assigned number write inside "" it will shows as string.
var b=7;

console.log(a + b);
console.log(typeof (a + b)); //this code execute the datatype of the result, weather it's a number,string,..etc.

/*There are some important features in JavaScript using Math obj with numbers in here just introducing those and discuss
 about further more in future */

console.log(Math.round(7.8)); //round function will round the number upwards of downward. Ex-: 7.3 -> 7 /7.5 -> 8.
console.log(Math.floor(7.8)); // In floor, its also similar to round bt the different is whatever the number even if it's 7.9 rounded only downwards. Ex-: 7.9 -> 7 / 7.3 -> 7
console.log(Math.ceil(7.8)); //In this no matter what number it's rounded only upwards. Ex-: 7.7 -> 8 / 7.3 -> 8.
console.log(Math.max(7,8,12,15));// Shows the maximum number.
console.log(Math.PI);// Value of PI.