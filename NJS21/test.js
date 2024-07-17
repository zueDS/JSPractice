import Backpack from "./Backpack.js";


const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
  <figure class="backpack__image">
    <img src=${everydayPack.image} alt="" loading="lazy" />
  </figure>
  <h1 class="backpack__name">${everydayPack.name}</h1>
  <ul class="backpack__features">
    <li class="feature backpack__volume">Volume:<span> ${
      everydayPack.volume
    }l</span></li>
    <li class="feature backpack__color">Color:<span> ${
      everydayPack.color
    }</span></li>
    <li class="feature backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
    <li class="feature backpack__pockets">Number of pockets:<span> ${
      everydayPack.pocketNum
    }</span></li>
    <li class="feature backpack__strap">Left strap length:<span> ${
      everydayPack.strapLength.left
    } inches</span></li>
    <li class="feature backpack__strap">Right strap length:<span> ${
      everydayPack.strapLength.right
    } inches</span></li>
    <li class="feature backpack__lid">Lid status:<span> ${
      everydayPack.lidOpen ? "open" : "closed" //adding ternary operator into template literal 
    }</span></li>
  </ul>
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

// if statement applying 
if (everydayPack.lidOpen === true){
    console.log("Lid is open!");
}else {
    console.log("Lid is close!");
}
/* we can use if/else statement in short hand version of this called a
TERNARY OPERATOR.
The ternary operator looks like this */

console.log(everydayPack.lidOpen ? "open" : "closed");

/* examples for conditional statement using logical operators
* != not equal 
* !== not absolute equal to
*/
if(everydayPack.backpackAge() >= 30) {
    console.log("Backpack is used")
}else{
    console.log("Backpack is new one")
}

// more complex logical operators
// || Or statement tests the Either condition A or B or both
if(everydayPack.volume > 15 && everydayPack.pocketNum >=5) {
    console.log("Backpack is big")
}else{
    console.log("Backpack is small")
}