//Creating a object 

const backpack = {
    name: "Backpack",
    volume: "30",
    color: "grey",
    pocketNum: "15",
    strapLength:{
        left: 20,
        right: 20,
    },
    lidOpen: "false",
    toggleLid: function (lidStatus){
        this.lidOpen = lidStatus;
    },
    newStrapLength: function(lengthLeft, lengthRight){
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
}

console.log("The object called BAckpack",backpack);

//Accessing the object properties

console.log("The pocketNum value:", backpack.pocketNum); //Accessing objects using dot(.) notation.
console.log("Strap length of left:", backpack.strapLength.left);

console.log("Strap length of right:", backpack.strapLength["right"]); //Accessing object using bracket[] notation.
