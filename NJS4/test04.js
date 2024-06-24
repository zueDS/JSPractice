import Backpack from "./Backpack.js";


const everydayPack = new Backpack(
    "Lining Backpack",
    30,
    "black",
    10,
    "Yonex",
    "Lining",
    false,
    "June 24, 2024 13:45:00 PST"
);
// this is how create the template literals 
const content = `
    <main>
        <article>
            <h1>${everydayPack.name}</h1> 
            <ul>
                <li>${everydayPack.volume}</li>
                <li>${everydayPack.color}</li>
                <li>${everydayPack.backpackAge()}</li>
                <li>${everydayPack.pocketNum}</li>
                <li>${everydayPack.racket.left}</li>
                <li>${everydayPack.racket.right}</li>
                <li>${everydayPack.lidOpen}</li>
            </ul>
        </article>
    </main>
`;

document.body.innerHTML = content;

//Not this part include.
console.log("EverydayPack object:", everydayPack);
console.log("PocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());