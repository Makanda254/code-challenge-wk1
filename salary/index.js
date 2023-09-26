const { netSalary } = require('./netsalary');// Imports netSalary function from netSalary.js
const readline = require('readline');

//Creates user interaction interface 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Prompts the user to enter basic salary and benefits
rl.question('Enter Basic Salary: ', (basicSalary) => {
  rl.question('Enter Benefits: ', (benefits) => {
    const result = netSalary(parseFloat(basicSalary), parseFloat(benefits));
    
    console.log('Gross Salary: KES', result.grossSalary.toFixed(2));// Prints Gross Salary
    console.log('PAYE (Tax): KES', result.payee.toFixed(2));// Prints Paye
    console.log('NHIF Deductions: KES', result.nhifDeductions.toFixed(2));// Prints NHIF Deductions
    console.log('NSSF Deductions: KES', result.nssfDeductions.toFixed(2));// Prints NSSF Deductions
    console.log('Net Salary: KES', result.netSalary.toFixed(2));// Prints Net Salary 
    
    rl.close();
  });
});