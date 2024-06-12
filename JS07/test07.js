var MyArray = [];

MyArray[0] = 25;
MyArray[1] = 35;
MyArray[2] = "hello";
MyArray[3] = true;

console.log(MyArray);

MyArray[2] = "Bye";//update the values in array.
console.log(MyArray);

//2nd way to define a array
var MyArray2 = [25,10,"Good",false];
console.log(MyArray2);

//This is gonna sort the array low to high
console.log(MyArray.sort());
console.log(MyArray2.sort());

//This will reverse the value of arrays.
console.log(MyArray.reverse());
console.log(MyArray2.reverse());