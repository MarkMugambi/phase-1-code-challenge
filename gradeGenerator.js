function getGrade(marks) {
    // Validate input (0 to 100)
    if (marks < 0 || marks > 100) {
      return "Invalid marks. Enter a value between 0 and 100.";
    }
  
    // Determine grade based on marks
    if (marks > 79) {
      return "Grade: A";
    } else if (marks >= 60) {
      return "Grade: B";
    } else if (marks >= 49) {
      return "Grade: C";
    } else if (marks >= 40) {
      return "Grade: D";
    } else {
      return "Grade: E";
    }
  }
  
  // Ask user for input
  const marks = 74;
  
  // Get and display the grade
  const grade = getGrade(marks);
  console.log(grade);
  
  // Example output
  if (marks !== undefined && !isNaN(marks)) { // Check for valid input
    console.log("Marks entered:", marks);
  }

