let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let pairFighters = []
    for (let i = 0; i < 2; i++){
        let randomIndex = Math.floor(Math.random()*fighters.length);
        let randomFighter = fighters[randomIndex];
        pairFighters.push(randomFighter);
    }
    stageEl.textContent = pairFighters[0] + " vs " + pairFighters[1]; 
})
