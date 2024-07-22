// The map array method

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"]

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// forEach() array method
stuff.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    stuffList.append(listItem);  
} );

// using map() array method
const stuffItems = stuff.map((item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    return listItem;
});

// using forEach loop for loop through all new items
stuffItems.forEach((item) => {
    stuffList.append(item);
})

console.log("stuff:", stuff)
console.log("stuffItem:", stuffItems)
article.append(stuffList)