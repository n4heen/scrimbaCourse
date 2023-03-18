const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let password1El = document.querySelector(".password__1")
let password2El = document.querySelector(".password__2")
let generateButton = document.querySelector(".generateButton")

function generate() {

    for (var i = 0; i <= 13; i++) {
        var randomIndexOne = Math.floor(Math.random() * characters.length)
        var randomIndexTwo = Math.floor(Math.random() * characters.length)
  
    }

    password1El.textContent = characters[randomIndexOne]
    password2El.textContent = characters[randomIndexTwo]
}

