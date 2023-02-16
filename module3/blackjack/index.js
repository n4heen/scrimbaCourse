let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.querySelector('#message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')

function getRandomCard() {
  return  Math.floor(Math.random() * 50)
}

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
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' '
    }
}

function startGame() {
    renderGame()
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    startGame()
}

let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i]
}