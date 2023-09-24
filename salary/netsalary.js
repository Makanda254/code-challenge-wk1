function netSalary(basicSalary, benefits) {
    
    const taxRate = 0.2; 
    const nhifDeduction = 800; 
    const nssfDeduction = 500;

   //Calculates gross salary
    const grossSalary = basicSalary + benefits;
  
   //Calclutaes taxable income
    const taxableIncome = grossSalary - (nhifDeduction + nssfDeduction);
    const payee = taxableIncome * taxRate;
  
    //Calculates netsalary
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    const result = {
      grossSalary: grossSalary,
      payee: payee,
      nhifDeductions: nhifDeduction,
      nssfDeductions: nssfDeduction,
      netSalary: netSalary,
    };
  
    return result;
  }
  
  module.exports = { netSalary };