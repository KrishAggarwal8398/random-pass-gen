let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "?", "{", "}", "-", "+", "=", "[", "]", "|", "~", "`", "@"]

let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")
let passThreeEl = document.getElementById("pass-three")
let passFourEl = document.getElementById("pass-four")

let lengthEl = document.getElementById("input-btn")

function getRandomIndex() {
    return Math.floor(Math.random() * characters.length)
}

function setPassLength() {
    let inputValue = lengthEl.value

    if (inputValue >= 1) return inputValue
    return 12
}

function generatePassword(length) {
    let password = ""
    for (let i = 0; i < length; i++) {
        password += characters[getRandomIndex()]
    }
    return password
}

function renderPassword(){
    passOneEl.textContent = ""
    passTwoEl.textContent = ""
    passThreeEl.textContent = ""
    passFourEl.textContent = ""

    let length = setPassLength()

    passOneEl.textContent+=generatePassword(length)
    passTwoEl.textContent+=generatePassword(length)
    passThreeEl.textContent+=generatePassword(length)
    passFourEl.textContent+=generatePassword(length)
}