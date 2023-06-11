// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let error = document.getElementById("error");

function errorMessage() {
    error.textContent = "Something went wrong, please try again";
}

//.innerText or .textContent.  ->  .textContent is better to keep spaces