var myArray = new Array();
myArray[0] = 10;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxspeed = 50;
myCar.driver = "Chula";

myCar.drive = function(){
    console.log("Now driving");
};
myCar.drive();

//Shorhand notation
var myCar2 = {
    maxspeed:50,
    driver:"Chula",
    drive:function(){
    console.log("Now driving again")
}
};

console.log(myCar2.maxspeed);
myCar2.drive();

var myCar2 = {
    maxspeed:50,
    driver:"Chula",
    drive:function(speed, time){
    console.log(speed * time);
}
};

console.log(myCar2.maxspeed);
myCar2.drive(50,3);
