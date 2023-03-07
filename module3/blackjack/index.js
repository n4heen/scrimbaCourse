let firstCard = 10
let secondCard = 8
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    if (sum <= 20) {
        messageEl.textContent = "Do you want to draw a new card?"
    }
    else if (sum == 21) {
        messageEl.textContent = "You've got Blackjack!"
        hasBlackJack = true
    }
    else {
        messageEl.textContent = "You're out of the game!"
        isAlive = false

    }
}

function newCard() {
    let drawCard = 8
    sum = sum + drawCard
    renderGame()
}


