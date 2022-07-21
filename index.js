let player ={
    name:"Akshay",
    chips:2000
}
let cards = []
let sum = 0;
hasBlackjack = false;
isAlive = false
message = ""

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips
  
function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard;
    renderGame()
}

function getRandomCard(){
    randomNumber = Math.floor(Math.random()*13 + 1)
    if(randomNumber === 1){
        return 11
    }
    else if(randomNumber > 13){
        return 10
    }
    else{
    return randomNumber
    }
}

function renderGame(){
if (sum<=20){
    message = 'do u want to draw a new card'
    }
    else if(sum===21){
        message = 'Woohoo! you have got BlackJack'
        hasBlackjack =true
    }
    else{
    message = 'You are out of the game'
    isAlive = false
    }
    messageEl.innerText = message
    sumEl.innerText = "sum :" + sum
    cardEl.innerText = "Cards :"
    for(i=0;i<cards.length;i++){
        cardEl.textContent += cards[i]+ " "
    }
}
function addNewCard(){
    if(isAlive === true && hasBlackjack === false){
    let card  = getRandomCard()
    sum += card;
    cards.push(card)
    renderGame()
    }
}