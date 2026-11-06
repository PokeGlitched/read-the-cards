
// Variables

let gameDeck = []
let cardIcons = ["moon", "sun", "hand", "eye", "skull", "spider", "ghost", "zombie", "bat", "witchhat", "cauldron", "web", "broom", "grave", "potion"]

for (let i = 0; i < cardIcons.length; i++) {
    gameDeck.push(cardIcons[i])
    gameDeck.push(cardIcons[i])
}

let chosenCards = []
let matchedCount = 0
let attemptsRemaining = 10
let lockBoard = false
let timeLeft = 10
let gameBoard = document.getElementById("gameboard")

let attemptsDisplay = document.getElementById("attemptsleft")
attemptsDisplay.textContent = attemptsRemaining

let matchesDisplay = document.getElementById("matchesleft")
matchesDisplay.textContent = matchedCount

let timeDisplay = document.getElementById("timeleft")
timeDisplay.textContent = timeLeft