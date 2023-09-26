const {speedDetector} = require("./speed");

const readline = require("readline");

//Creates user interaction interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Prompts the user to enter speed
rl.question("Enter your Speed: ", (speed) =>{
  const demerit = speedDetector(speed);
 
 if (demerit >= 12) {
 console.log('License suspended');// Prints license suspended if demerit points is great than 12
 } else if (demerit > 0) {
console.log(`Points: ${demerit}`);// Prints demerit points when they are greater than 0 and less than 12
 }
else {
console.log('Ok');// Prints Ok if your demerit points is 0
  }
    
  rl.close();  
});