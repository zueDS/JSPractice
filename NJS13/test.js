
let backpackContents = ["Turbo-charging", "Astrox", "Maxbolt"];

// adding one or more new item end of the array using METHODS
backpackContents.push("Aerus z", 10);

// adding one or more new item first of the array using METHODS
backpackContents.unshift("Water bottle",20); /*why its called unshift explained below,
Because shift methods takes the first item of the array */
backpackContents.shift();

// if u need to take something back of the array
backpackContents.pop();

/* using forEach loop to the function 
Adding li to the each item using function */ 
backpackContents.forEach(function(item){
    item = `<li>${item}</li>`;
    console.log(item);
});

/* this function execute the longest item (by word count) in the backpack */
let longItems = backpackContents.find(function(item){
    if (item.length >= 5){
        return item;
    }
});
console.log("longTiems:", longItems);

console.log(backpackContents);




