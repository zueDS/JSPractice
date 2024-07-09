
// standard object named greenPack
const greenPack = {
    name: "Yonex",
    color: "green",
    volume: 8,
    pocketNum: 3,
};

const addPack = function(currentPack){
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
    <li>Volume: ${currentPack.volume}</li>
    <li>Color: ${currentPack.color}</li>
    <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
    `;
    return newArticle;
};

// pooping the same variable in console using function
const theArticle = addPack(greenPack)
console.log(theArticle);

const main = document.querySelector("main");
main.append(addPack(greenPack));