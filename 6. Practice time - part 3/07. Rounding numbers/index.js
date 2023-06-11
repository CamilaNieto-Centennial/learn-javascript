// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

let totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
totalPrice = Math.round(totalPrice * 100) / 100;
btn.textContent = `Buy €${ totalPrice }`

