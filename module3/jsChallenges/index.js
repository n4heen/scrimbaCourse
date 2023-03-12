let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

function fight() {

    let random1 = Math.floor(Math.random() * fighters.length)
    let random2 = Math.floor(Math.random() * fighters.length)
    console.log(fighters[random1] + " vs " + fighters[random2])

    stageEl.textContent = fighters[random1] + " vs " + fighters[random2]
}
