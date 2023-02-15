// let firstCard = 10
// let secondCard = 11
// let cards = [firstCard, secondCard] 
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.querySelector('#message-el')
// let sumEl = document.querySelector('#sum-el')
// let cardsEl = document.querySelector('#cards-el')

// function renderGame() {

//     if (sum <= 20) {
//         message = "Do you want to draw a new card? 🙂 "
//     }
//     else if (sum == 21) {
//         message = "Wohoo! You've got Blackjack! 🥳 "
//         hasBlackJack = true
//     }
//     else {
//         message = "You're out of the game! 😭"
//         isAlive = false
//     }
//     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
//     sumEl.textContent = "Sum: " + sum
//     messageEl.textContent = message
// }

// function startGame(){
//     renderGame()
// }

// function newCard() {
//     let card=7
//     sum+=card
//     cards.push(card)
//     console.log(cards)
//     startGame()
// }

let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i]
}