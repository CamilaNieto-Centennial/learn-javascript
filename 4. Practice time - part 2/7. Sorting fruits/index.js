let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function orderFruits() {
    let applesList = []
    let orangesList = []
    for(let i=0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            applesList.push(fruit[i]);
            console.log(applesList)
            appleShelf.textContent = applesList;
        } else {
            orangesList.push(fruit[i]);
            console.log(orangesList)
            orangeShelf.textContent = orangesList;
        }
    }
}

orderFruits();