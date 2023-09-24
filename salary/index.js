const { netSalary } = require('./netsalary');
const readline = require('readline');

//creates user interaction interface 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//prompts the user to enter basic salary and benefits

rl.question('Enter Basic Salary: ', (basicSalary) => {
  rl.question('Enter Benefits: ', (benefits) => {
    const result = netSalary(parseFloat(basicSalary), parseFloat(benefits));
    
    console.log('Gross Salary: KES', result.grossSalary.toFixed(2));
    console.log('PAYE (Tax): KES', result.payee.toFixed(2));
    console.log('NHIF Deductions: KES', result.nhifDeductions.toFixed(2));
    console.log('NSSF Deductions: KES', result.nssfDeductions.toFixed(2));
    console.log('Net Salary: KES', result.netSalary.toFixed(2));
    
    rl.close();
  });
});