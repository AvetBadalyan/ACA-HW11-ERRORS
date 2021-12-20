/* Convert the code using try...catch.

function reverseString(s) {
typeof s !== "string"
? console.log("s.split is not a function")
: (s = s.split("").reverse().join(""));
console.log(s);
}
*/

function reverseString(s) {
  try {
    if (typeof s !== "string") {
      throw new Error("s.split is not a function");
    } else s = s.split("").reverse().join("");
    return s;
  } catch (err) {
    console.log(`You have a ${err.name}, ${err.message}`);
  }
}
reverseString(2021);
