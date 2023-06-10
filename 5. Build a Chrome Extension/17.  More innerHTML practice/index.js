
const container = document.getElementById("container")

container.innerHTML = "<button id='buyButton'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
const buyButtonEl = document.getElementById("buyButton");

buyButtonEl.addEventListener("click", ()=> {
    container.innerHTML += "<p>Thank you for buying!</p>";
})
