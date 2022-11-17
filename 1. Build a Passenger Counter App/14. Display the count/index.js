// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

let count = 0
//camelCase
let countEl = document.getElementById("count-el"); // Pass in arguments: We pass an argument(s) when we call a function
console.log(countEl); // <h2 id="count-el">0</h2>

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

