let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}

// Google:
// innerText alternative mdn
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

// Change .innerText to .textContent