let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times
function sumLaps() {
    let totalTime = lap1 + lap2 + lap3;
    console.log(totalTime)
}

sumLaps(); // 103

//console.log(totalTime) // ReferenceError

// totalTime only exists inside of the function. 