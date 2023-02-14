let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.querySelector('#message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')

function renderGame() {

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂 "
    }
    else if (sum == 21) {
        message = "Wohoo! You've got Blackjack! 🥳 "
        hasBlackJack = true
    }
    else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
}

function startGame(){
    renderGame()
}

function newCard() {
    let card=7
    sum+=card
    startGame()
}

