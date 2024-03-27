(function checkSpeed(speed) { 

    const speedLimit = 70;
    let demeritPoints = 0;
  
    // Calculate demerit points (consider speed limit and increments of 5)
    if (speed > speedLimit) {
      const excessSpeed = speed - speedLimit;
      demeritPoints = Math.floor(excessSpeed / 5);
    }
  
    // Print output based on demerit points
    if (demeritPoints === 0) {
      console.log("Ok");
    } else if (demeritPoints <= 12) {
      console.log("Points:", demeritPoints);
    } else {
      console.log("License suspended");
    }
    })(170);