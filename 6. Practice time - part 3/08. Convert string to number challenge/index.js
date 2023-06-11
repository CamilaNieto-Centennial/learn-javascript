// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it

const totalPrice = "420.69235632455"
const btn = document.getElementById("buy-btn")
let numberPrice = parseFloat(totalPrice)
console.log(typeof numberPrice)
btn.textContent = `Buy €${ numberPrice.toFixed(2) }`
