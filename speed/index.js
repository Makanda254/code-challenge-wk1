const {speedDetector} = require("./speed");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your Speed: ", (speed) =>{
  const demerit = speedDetector(speed);
 
  
 if (demerit >= 12) {
 console.log('License suspended');
 } else if (demerit > 0) {
console.log(`Points: ${demerit}`);
 }
else {
console.log('Ok');
  }
    
  rl.close();  
});