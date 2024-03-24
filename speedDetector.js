function  checkSpeed(speed) {
    // Declare speed limit
    const speedLimit = 70;
    // Compute demerit points
    const demeritPoints = Math.round((speed - speedLimit) /5); 
    //Check for suspension of license
    if (demeritPoints > 12) {
        console.log("License is suspended");
        return;
    }
    
    //Print the result
    if (demeritPoints === 0) {
        console.log("Ok") ;
    } else {
        console.log("Points:", demeritPoints);
    }
    }