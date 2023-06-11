// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function render(items) {
    let container = document.getElementById("container");
    let listImages = "";
    for (let i = 0; i < items.length; i++) {
        listImages += `<img class="team-img" src="${items[i]}" alt="Image ${i}">`
    }
    container.innerHTML = listImages;
}

render(imgs);