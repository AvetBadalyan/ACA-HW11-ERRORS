// Complete the isPositive function below. It has one integer parameter a .
// If the value of a is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:
// 1. If a is 0, throw an Error with message = Zero Error.
// 2. If a is negative, throw an Error with message = Negative Error.

function isPostive(a) {
  try {
    if (a > 0) {
      console.log("Yes");
    }

    if (a === 0) {
      throw new Error("Zero error");
    }

    if (a < 0) {
      throw new Error("Negative error");
    }
    if (isNaN(a)) {
      throw new Error("Please insert a positive number");
    }
  } catch (err) {
    console.log(err.message);
  }
  return a;
}

console.log(isPostive("Avet"));
