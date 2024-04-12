const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the speed of the car: ', (speed) => {
  speed = parseFloat(speed);

  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  const demeritPointsThreshold = 12;

  if (speed <= speedLimit) {
    console.log('Ok');
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints > demeritPointsThreshold) {
      console.log('License suspended');
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }

  rl.close();
});
