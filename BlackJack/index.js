
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el") 

let player={
    name : "Mukesh",
    chips : 150
} 

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $"+ player.chips

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}
function renderGame(){
    if(sum <= 20) {
        message = "New Card?"
    }else if(sum === 21){
        message = "Blackjack!!!!"
        hasBlackJack= true
    }else {
        message = "Out of the Game!"
        isAlive = false
    }    
    
    messageEl.textContent = message
    sumEl.textContent = "Sum : "+ sum
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
}

function newGame(){
    if(isAlive && hasBlackJack === false){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}

function getRandomCard(){
    let randomNum = Math.floor((Math.random()*13)) + 1
    if(randomNum === 1){
        randomNum = 11
    }else if(randomNum > 10){
        randomNum = 10
    }else{
        randomNum = randomNum
    }
    return randomNum 
}
