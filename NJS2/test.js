//first creating object
const liningBackpack ={
    name: "Lining",
    size: "XL",
    color: "Black&White",
    racket:{
        yonex: "Astrox88D",
        lining: "TurboCharging300",
    },
    pocketNum: "5",
    stripLength:{
        left: 15,
        right: 15,
    },
    packOpen:"false",
    packOpen: function(packStatus){ //packOpen is the method that we called in function
        this.packOpen = packStatus;
    },
    newStrapLength: function(lengthLeft,lengthRight){ //newStrapLength is the method that we called in function
        this.stripLength.left = lengthLeft;
        this.stripLength.right = lengthRight;
    },
    newRacket: function(yonex,lining){ //newRacket is the method that we called in function
        this.racket.yonex = yonex;
        this.racket.lining = lining;
    }, 
}

/*This is how to change value in methods using web console (Only changed inside browser at the moment)

liningBackpack.packOpen(true)
 After enter this value will only change inside the browser but in script.js file it will remain as false */

 console.log("The object called Lining Backpack",liningBackpack);

//Changing value using script

console.log("Left Before: ", liningBackpack.stripLength.left);
liningBackpack.newStrapLength(20, 25) //giving new values to function and calling it using methods
console.log("Left After: ", liningBackpack.stripLength.left);
console.log("right After: ", liningBackpack.stripLength.right);

console.log("Racket names: ", liningBackpack.racket);
liningBackpack.newRacket("Astrox100zz", "Caliber300")
console.log("After racket names: ", liningBackpack.racket);