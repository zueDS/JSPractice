
const stuff = ["piggy","headlamp","pen","pencil","eraser","water-bottle"];

const nestedObject = {
    item1: {
        name: "piggy",
        type: "toy",
        weight: 30,
    },
    item2: {
        name: "headlamp",
        type: "equipment",
        weight: 120,
    },
    item3: {
        name: "pen",
        type: "tool",
        weight: 30,
    },
    item4: {
        name: "pencil",
        type: "tool",
        weight: 30,
    },
    item5: {
        name: "eraser",
        type: "tool",
        weight: 40,
    },
    item6: {
        name: "water-bottle",
        type: "equipment",
        weight: 1300,
    },
};

const article = document.querySelector("article");
let stuffList = document.createElement("ul");


/**
 * for loop
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 */
for (let i = 0; i < stuff.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = stuff[i];
    stuffList.append(listItem);
  }
  /* This for loop allows you to repeat a process as many times as you'd like and 
  you just specify when you want it to stop and its for anything not just for arrays. */
  
 
  /**
   * for...of loop and arrays
   */
 for (const item of stuff) {
     let listItem = document.createElement("li");
     listItem.innerHTML = item;
     stuffList.append(listItem);
   }
  /* In the for of loop we specify which array we're working with  */
  
  
  /*
   * foreach array method
   */

    stuff.forEach((item) => {
    let listItem = document.createElement("li");
     listItem.innerHTML = item;
     stuffList.append(listItem);
    });
/* foreach method is the preferred way of dealing with arrays in modern JavaScript.*/


  /**
   * for...in loop and objects
   */

  for (const singleObject in nestedObject) {
    let listItem = document.createElement("li");
     listItem.innerHTML = `Name: ${nestedObject[singleObject].name}`;
     stuffList.append(listItem);
   }
/* For in statement is exactly the same as the for statements, except we are now working with objects. */  
  
  article.append(stuffList);