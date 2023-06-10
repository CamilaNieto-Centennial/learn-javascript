let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i];
}

// ANOTHER EXERCISE: How do you keep the spaces between the words if I remve them from the array?
/*
let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Answer:
for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}
*/