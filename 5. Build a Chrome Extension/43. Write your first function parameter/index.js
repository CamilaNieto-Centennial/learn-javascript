const welcomeEl = document.getElementById("welcome-el")

function greetUser(name) {
    // welcomeEl.textContent = "Welcome back, Per Harald Borgen 👋" 
    welcomeEl.textContent = `Welcome back, ${name} 👋`    
}

greetUser("Per")

// ANOTHER EXERCISE
/*
const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting) {
    welcomeEl.textContent = greeting;    
}

greetUser("Welcome back");
*/