 //Imports grading function from grading.js
 const {getGrade} = require("./grading");
const readline = require("readline");

//Creates user interaction interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Prompts the user to enter marks for student
rl.question("Enter the student's mark (between 0 and 100): ", (mark) => {

//Restricts user to enter marks between 0 and 100 else prints invalid input
  if (isNaN(mark) || mark < 0 || mark > 100) {
    console.log('Invalid input. Please enter a valid number between 0 and 100.')
  }else {

// Calls the grading function
  console.log(getGrade(mark));// prints grade
  }
  rl.close();
});