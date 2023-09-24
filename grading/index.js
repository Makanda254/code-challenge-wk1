 const {getGrade} = require("./grading");
const readline = require("readline");

//Creates user interaction interface

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Prompts the user to enter marks for student

rl.question("Enter the student's mark (between 0 and 100): ", (mark) => {
  console.log(getGrade(mark));
  rl.close();
});