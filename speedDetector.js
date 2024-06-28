function calculatePoints(speed) {
    const speedLimit = 70;
    let Points = 0;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        Points = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${Points}`);
    }

    if (Points > 12) {
        console.log("License suspended");
    }
}

let speed = 80;
calculatePoints(speed);
