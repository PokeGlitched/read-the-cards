
// Variables
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

let cardIcons = ["moon", "sun", "hand", "eye", "skull", "spider", "ghost", "zombie", "bat", "witchhat", "cauldron", "web", "broom", "grave", "potion"]
let gameDeck = []

for (let i = 0; i < cardIcons.length; i++) {
    gameDeck.push(cardIcons[i])
    gameDeck.push(cardIcons[i])
}

gameDeck.sort(() => Math.random() - 0.5)

for (let i = 0; i < gameDeck.length; i++) {
    let card = document.createElement("div")
    
    card.dataset.icon = gameDeck[i]
    card.classList.add("card")

    gameBoard.appendChild(card)
    
    card.addEventListener("click", () => {
        // console.log("clicked", card.dataset.icon, "!")
        card.textContent = card.dataset.icon
})
}
