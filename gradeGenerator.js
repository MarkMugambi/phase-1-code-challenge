const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter student marks (between 0 and 100): ', (marks) => {
  marks = parseFloat(marks);

  if (marks >= 0 && marks <= 100) {
    let grade = '';

    if (marks > 79) {
      grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
      grade = 'B';
    } else if (marks >= 49 && marks <= 59) {
      grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
      grade = 'D';
    } else {
      grade = 'E';
    }

    console.log(`Grade: ${grade}`);
  } else {
    console.log('Invalid input. Marks should be between 0 and 100.');
  }

  rl.close();
});