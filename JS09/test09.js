//Intro to "THIS" keyword
var myCar2 = {
    maxspeed:50,
    driver:"Chula",
    drive:function(speed, time){
    console.log(speed * time);
},
test: function(){
    console.log(this); //in this "THIS" keyword only refer to the object which is myCar2 
}
};

var myCar3 = {
    maxspeed:70,
    driver:"Dileepa",
    drive:function(speed, time){
    console.log(speed * time);
},
test: function(){
    console.log(this); //in this "THIS" keyword only refer to the object which is myCar3 
}
};

//Using method instead of using test
var myCar4 = {
    maxspeed:50,
    driver:"Chula",
    drive:function(speed, time){
    console.log(speed * time);
},
logDriver: function(){
    console.log("Driver name is " +this.driver)
}
};


myCar2.test();
myCar3.test();
myCar4.logDriver();
console.log(myCar2.maxspeed);
myCar2.drive(50,3);