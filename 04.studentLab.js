// NEED TO FIX SOME BUGS
/* A teacher has created a gradeLabs function that verifies if student programming labs work. 
This function loops over an array of JavaScript objects that should contain a student property and runLab property. 
The runLab property is expected to be a function containing the student's code. 
The runLab function is called and the result is compared to the expected result. 
If the result and expected results don't match, then the lab is considered a failure.
*/

let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

function gradeLabs(arrayOfStudents) {
  try {
    for (let code in arrayOfStudents) {
      let result = code.runLab(10);
      console.log(
        `${code.student} 's code is working, the answer is ${result}`
      );
    }
  } catch (err) {
    console.log(`Sorry, there is a ${err.name}, the key "runLab" is missing `);
  }
}
gradeLabs(studentLabs2);
