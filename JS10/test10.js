//Using of constructor function 
var Car = function(maxspeed, driver){
    this.maxspeed = maxspeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("Driver name is " +this.driver); 
    };
}
var myCar = new Car(70, "Chula");
var myCar2 = new Car(80, "Dileepa");
var myCar3 = new Car(90, "Zue");
var myCar4 = new Car(60, "Ekaris");

myCar.drive(30,5);
myCar2.drive(60,6);
myCar3.drive(25,5);
myCar4.drive(40,4);
myCar.logDriver();
myCar2.logDriver();
myCar3.logDriver();
myCar4.logDriver();