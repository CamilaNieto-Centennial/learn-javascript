let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.querySelector('#sum-el');


function startGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent += ' ' + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


/* getElementById vs querySelector */
// On getElementById, you just pass the id name inside quotes
// document.getElementById('sum-el');

// In querySelector, you can use it for ids, classes, and tags.
// On querySelector, you need to add a '#', before the id name inside quotes
// document.querySelector('#sum-el');

// If we want to take a class, we should use '.', instead of '#'
// document.querySelector('.sum-el-class');

// Or even you can use a whole tag
// document.querySelector('body');