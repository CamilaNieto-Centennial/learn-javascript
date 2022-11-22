let cards = [7, 4]
cards.push(6)
console.log(cards) //(3) [7, 4, 6]

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"


// .push(x): add element to the array
messages.push(newMessage);
console.log(messages); // (4) ["Hey, how's it going?", "I'm great, thank you! How about you?", 'All good. Been working on my portfolio lately.', 'Same here!']


// pop().: remove last item on an array
messages.pop();
console.log(messages); // (3) ["Hey, how's it going?", "I'm great, thank you! How about you?", 'All good. Been working on my portfolio lately.']