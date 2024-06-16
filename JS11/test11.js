//Inbuilt object from JavaScript for get Date&Time
var myDate = new Date();
console.log(myDate);

//Storing Past&Future dates in Date variable
var myPastDate = new Date(1999, 11, 2, 10, 34, 50);//YYYY,MM,DD,Hr,Minutes,Seconds
var myFutureDate = new Date(2024, 0, 31, 12, 35, 11);

console.log(myPastDate);
console.log(myFutureDate);

//There are several method that includes in this DateObject and it's written down below.
var birthday = new Date(1999, 11, 2, 10, 55, 23);
var birthday2 = new Date(1999, 11, 2, 10, 55, 23);//For equal line no:31

//Get the month of the birthday (0-11)
console.log(birthday.getMonth());
//Get full year of the birthday (YYYY)
console.log(birthday.getFullYear());
//Get the date of month (0-11)
console.log(birthday.getDate());
//Get the day of the week 
console.log(birthday.getDay());
//Get the hour of the date (0-23)
console.log(birthday.getHours());

//Get the number of millisecond of the given new date 
console.log(birthday.getTime());

//comparing Dates are equal or not
if(birthday.getTime() == birthday2.getTime()){//So the getTime method is very important to comparing dates that are equal or not
    console.log("Birthday are equal");
}else{
    console.log("Birthday are not equal");
}