const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let password1El = document.querySelector(".password__1")
let password2El = document.querySelector(".password__2")
let generateButton = document.querySelector(".generateButton")


function generate() {
    var randomIndexOne = Math.floor(Math.random() * characters.length)
    return characters[randomIndexOne]
}


function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < 12; i++) {
        randomPassword += generate()
    }
    return randomPassword

}


function change() {
    const generatedPasswordOne = generateRandomPassword()
    password1El.textContent = generatedPasswordOne
    password2El.textContent = generatedPasswordOne
}