let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

// https://www.w3schools.com/js/js_array_methods.asp

largeCountries.shift(); // Removes first item
largeCountries.unshift("China"); // Adds new item at the beggining

largeCountries.pop();
largeCountries.push("Pakistan");

console.log(largeCountries);