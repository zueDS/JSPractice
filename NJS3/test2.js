import BadmintonBackpack from "./lining.js";

const newBadminton = new BadmintonBackpack(
    "Lining backpack",
    "XL",
    "Black",
    "Yonex",
    "Lining",
    5,
    20,
    20,
    false
);

console.log("New badminton stuff:", newBadminton);
console.log("Racket num1 name:", newBadminton.racket);