let hands = ["rock", "paper", "scissor"]

function game() {
    let random = Math.floor(Math.random() * hands.length)
    console.log(hands[random])
}

game()

