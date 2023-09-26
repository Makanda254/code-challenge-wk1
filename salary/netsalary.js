// Function to calculate net salary
function netSalary(basicSalary, benefits) {
    
    const taxRate = 0.2; // specifies a constant rate of 0.2 for Paye
    const nhifDeduction = 800; // specifies a constant rate of 800 for NHIF deductions
    const nssfDeduction = 500;// specifies a constant rate of 500 for NSSF deductions

   //Calculates gross salary
    const grossSalary = basicSalary + benefits;
  
   //Calclutaes taxable income
    const taxableIncome = grossSalary - (nhifDeduction + nssfDeduction);
    const payee = taxableIncome * taxRate;
  
    //Calculates netsalary
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;


    const result = {
      grossSalary: grossSalary,// Logs the value of Gross Salary 
      payee: payee, // Logs the value of Payee
      nhifDeductions: nhifDeduction, // Logs the value of NHIF Deductions
      nssfDeductions: nssfDeduction, // Logs the value of NSSF Deductions
      netSalary: netSalary, //Logs the value of Net Salary
    };
  
    return result; // Returns the values of logged results.
  }
   
  // Exports netSalary.js
  module.exports = { netSalary };