let countEl = document.getElementById("count-el") // DOM (Document Object Model): How you use JavaScript to modify a website
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


