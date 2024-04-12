const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Tax rates from the provided link
const taxRates = {
  incomeTax: {
    range1: { min: 0, max: 24586, rate: 10 },
    range2: { min: 24587, max: 70833, rate: 15 },
    range3: { min: 70834, max: 141667, rate: 20 },
    range4: { min: 141668, max: 235833, rate: 25 },
    range5: { min: 235834, max: 327083, rate: 30 },
    range6: { min: 327084, max: Infinity, rate: 35 }
  },
  nhif: 1700,
  nssf: 200
};

rl.question('Enter basic salary: ', (basicSalary) => {
  rl.question('Enter benefits: ', (benefits) => {
    const grossSalary = parseFloat(basicSalary) + parseFloat(benefits);

    // Calculate PAYE
    let paye = 0;
    for (const range in taxRates.incomeTax) {
      const { min, max, rate } = taxRates.incomeTax[range];
      if (grossSalary >= min && grossSalary <= max) {
        paye = (grossSalary - min) * (rate / 100);
        break;
      }
    }

    // Calculate net salary
    const nhifDeductions = taxRates.nhif;
    const nssfDeductions = taxRates.nssf;
    const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;

    console.log(`Gross Salary: KES ${grossSalary}`);
    console.log(`PAYE: KES ${paye}`);
    console.log(`NHIF Deductions: KES ${nhifDeductions}`);
    console.log(`NSSF Deductions: KES ${nssfDeductions}`);
    console.log(`Net Salary: KES ${netSalary}`);

    rl.close();
  });
});
