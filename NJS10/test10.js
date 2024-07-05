
let a = 5; /*in Javascript = means assignment which means the value on the right side is assigned 
           to the container of the left*/
let b = 4;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);

if (a == b) { /*And also == means for comparison. which means ARE THE VALUES THE SAME!? BUT NOT ABSOLUTELY THE SAME */
  console.log(`Match! let a and let b are the same value.`);
} else {
  console.error(`No match: let a and let b are NOT same value.`);
}

/** SOME SYMBOLS
 * === absolutely equality
 * > lager than
 * < lower than
 * >= either larger or equal
 * <= either lower or equal
 * != not equal to
 */