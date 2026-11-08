
// Variables
let chosenCards = []
let matchedCount = 0
let attemptsRemaining = 15
let lockBoard = false
let timeLeft = 100
let gameBoard = document.getElementById("gameboard")
let cardIcons = ["Moon", "Sun", "Hand", "Eye", "Skull", "Spider", "Ghost", "Zombie", "Bat", "Witch Hat", "Cauldron", "Spider Web", "Broom", "Gravestone", "Potion"]
let matchesPossible = cardIcons.length
let gameOver = false
let winOrLoseDisplay = document.getElementById("winorlosehere")
let explanDisplay = document.getElementById("just in case")

let iconImages = {
    "Sun":  "assets/icons/icon_sun.png",
    "Moon":  "assets/icons/icon_moon.png",
    "Cauldron":  "assets/icons/icon_cauldron.png",
    "Spider Web":  "assets/icons/icon_spiderweb.png",
    "Gravestone":  "assets/icons/icon_gravestone.png",
}

let timer 

function startTimer() {

timer = setInterval( () => {
                timeLeft -= 1
                
                timeDisplay.textContent = timeLeft
                if (timeLeft === 0) {
                    clearInterval(timer)
                    gameOver = true
                    endScreen.classList.remove("hidden")
                    winOrLoseDisplay.textContent = "SUCCUMBED TO"
                    explanDisplay.textContent = "lost"
                    
                }
            }, 1000)
        }
let restartButton = document.getElementById("restartbutton")

let attemptsDisplay = document.getElementById("attemptsleft")
attemptsDisplay.textContent = attemptsRemaining

let matchesDisplay = document.getElementById("matchesleft")
matchesDisplay.textContent = matchesPossible - matchedCount

let timeDisplay = document.getElementById("timeleft")
timeDisplay.textContent = timeLeft

let endScreen = document.getElementById("endscreen")

function buildBoard() {
console.log("running buildBoard()")
let gameDeck = []

for (let i = 0; i < cardIcons.length; i++) {
    gameDeck.push(cardIcons[i])
    gameDeck.push(cardIcons[i])
}

gameDeck.sort(() => Math.random() - 0.5)



for (let i = 0; i < gameDeck.length; i++) {
    let card = document.createElement("div")
    
    card.dataset.icon = gameDeck[i]
    
    let frontImage = document.createElement("img")
    let front = document.createElement("div")
    front.classList.add("card-front", "card-face")
    if (gameDeck[i] in iconImages) {
        frontImage.src = iconImages[gameDeck[i]]
        front.appendChild(frontImage)
    } else {
        let fallbackText = document.createElement("p");
        fallbackText.textContent = gameDeck[i];
        fallbackText.classList.add("card-fallback")
        front.appendChild(fallbackText);
    }
    
    let backImage = document.createElement("img")
    backImage.src = "assets/card_back.png"
    let back = document.createElement("div")
    back.classList.add("card-back", "card-face")
    back.appendChild(backImage)

    let inner = document.createElement("div")
    inner.classList.add("card-inner")
    inner.appendChild(front)
    inner.appendChild(back)

    card.appendChild(inner)

    card.dataset.matched = "false"
    card.classList.add("card")
    gameBoard.appendChild(card)
    
    card.addEventListener("click", () => {
        console.log("clicked", card.dataset.icon, "!") 
    if (lockBoard || gameOver || card.dataset.matched === "true") {
        return
    }
    if (chosenCards.includes(card)) {
            return
        } else {
            chosenCards.push(card)
            card.classList.add("flipped");
            console.log(chosenCards)
        }
    if (chosenCards.length === 2) {
        lockBoard = true
        if (chosenCards[0].dataset.icon === chosenCards[1].dataset.icon) {
            matchedCount += 1
            if (matchedCount === matchesPossible) {
                console.log("YOU WIN!")
                gameOver = true
                endScreen.classList.remove("hidden")
                winOrLoseDisplay.textContent = "ENDURED"
                explanDisplay.textContent = "won"
            }
            matchesDisplay.textContent = matchesPossible - matchedCount
            chosenCards[0].dataset.matched = "true"
            chosenCards[1].dataset.matched = "true" 
            chosenCards[0].classList.add("matched")
            chosenCards[1].classList.add("matched")
            chosenCards.pop()
            chosenCards.pop()
            attemptsDisplay.textContent = attemptsRemaining
            timeLeft += 3
            timeDisplay.textContent = timeLeft
            lockBoard = false
        } else {
            setTimeout(() => {
                chosenCards[0].classList.remove("flipped")
                chosenCards[1].classList.remove("flipped")
                chosenCards.pop()
                chosenCards.pop()
                timeLeft = Math.max(0, (timeLeft - 2))
                if (timeLeft === 0) {
                    clearInterval(timer)
                    gameOver = true
                    endScreen.classList.remove("hidden")    
                }
                timeDisplay.textContent = timeLeft
                lockBoard = false            
                if (attemptsRemaining === 0 && matchedCount !== matchesPossible) {
                console.log("you lose :(")
                gameOver = true
                endScreen.classList.remove("hidden")
                winOrLoseDisplay.textContent = "SUCCUMBED TO"
                explanDisplay.textContent = "lost"
            }
            }, 500)
            attemptsRemaining -= 1
            attemptsDisplay.textContent = attemptsRemaining
        }
    }
    })
}

}

function resetGame() {
        gameBoard.innerHTML = ""

        matchedCount = 0
        attemptsRemaining = 25
        chosenCards = []
        lockBoard = false
        gameOver = false
        timeLeft = 100

        attemptsDisplay.textContent = attemptsRemaining
        matchesDisplay.textContent = matchesPossible - matchedCount
        timeDisplay.textContent = timeLeft

        buildBoard()
        startTimer()

        endScreen.classList.add("hidden")
        
}

restartButton.addEventListener("click", () => {
    resetGame()
})


buildBoard()
startTimer()
