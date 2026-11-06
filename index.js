
// Variables

let cardIcons = []
let chosenCards = []
let matchedCount = 0
let matchesThisRound = 0
let attemptsRemaining = 10
let lockBoard = false
let timeLeft = 10

let attemptsDisplay = document.getElementById("attemptsleft")
attemptsDisplay.textContent = attemptsRemaining

let matchesDisplay = document.getElementById("matchesleft")
matchesDisplay.textContent = matchesThisRound - matchedCount

let timeDisplay = document.getElementById("timeleft")
timeDisplay.textContent = timeLeft