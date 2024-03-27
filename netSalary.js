function calculateNetSalary() {
    // Get values
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);
    const benefits = parseFloat(document.getElementById("benefits").value);
  
    // Calculate the gross salary
    const grossSalary = basicSalary + benefits;
  
    // Define tax calculation 
    function calculateTax(grossSalary) {

      return grossSalary * 0.1;
    }
  
    // Define the NHIF deduction calculation 
    function calculateNHIFDeductions(grossSalary) {
      
      if (grossSalary <= 5999) {
        return 150;
      } else if (grossSalary <= 99,999) { 
        return grossSalary * 0.015;
      } else {
        return Math.min(grossSalary * 0.015, 1700); // Replace 'nhifMaximum' with your country's NHIF maximum deduction
      }
    }
  
    // Define NSSF deduction calculation 
    function calculateNSSFDeductions(grossSalary) {
      
      return 200;
    }
    // Calculate the deductions
  const payee = calculateTax(grossSalary);
  const nhifDeductions = calculateNHIFDeductions(grossSalary);
  const nssfDeductions = calculateNSSFDeductions(grossSalary);
  const totalDeductions = payee + nhifDeductions + nssfDeductions;

  // Calculate net salary
  const netSalary = grossSalary - totalDeductions;
}
