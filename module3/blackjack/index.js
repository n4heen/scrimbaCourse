
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")



function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber > 10) {
        return 10
    }
    else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
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
    let drawCard = getRandomCard()
    sum = sum + drawCard
    cards.push(drawCard)
    renderGame()
}


