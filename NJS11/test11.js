let a = 5;
let b = 4;
let c = 3.2;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);
console.log(`let c: ${c} (${typeof c})`);

//normal math operators
let result = a + b;
let R = a - b;
let E = a / b;
let S = a * b;
let U = (a * b) / c;

//more advanced operators
let L = a % b; // % means modulus, it give us the remainder left over when we divide the first number by the second number.
let T = a ** b // ** (asterisk) mean a to the power of b.

console.log("Result: ", result);
console.log("Result: ", R);
console.log("Result: ", E);
console.log("Result: ", S);
console.log("Result: ", U);
console.log("Result: ", L);
console.log("Result: ", T);