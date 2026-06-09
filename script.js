let cardCount = 0, DcardCount = 0, playerWins = 0, dealerWins = 0, reset = false;
let cardNumber = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11"];
let DcardNumber = ["Dc1","Dc2","Dc3","Dc4","Dc5","Dc6","Dc7","Dc8","Dc9"];
let cardsValue = [];
let DcardsValue = [];
let CsAdded = 0;
let DCsAdded = 0;
let Dcard1 = 0;
let bankroll = 1000;
let currentBet = 0;
let gameInProgress = false;
let deck = [
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", 
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", 
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", 
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

function placeBet(amount) {
  if (amount <= 0 || bankroll <= 0) return; // Prevent negative or zero bets and prevent betting with negative bankroll
  if (bankroll >= amount && !gameInProgress) {
    currentBet += amount;
    bankroll -= amount;
    updateBettingDisplay();
  }
}

function updateBettingDisplay() {
  document.getElementById("bankroll").innerHTML = "Bankroll: $" + bankroll;
  document.getElementById("currentBet").innerHTML = "Current Bet: $" + currentBet;
}

function startGame() {
  if (currentBet > 0 && !gameInProgress) {
    gameInProgress = true;
    resetGame();
    getCards();
  }
}

function total(cardsValue){
  let sum = 0, aceCount = 0;
  for (let i = 0; i < cardsValue.length; i++) {
    if (cardsValue[i] === 11) {
      aceCount = aceCount + 1;  
    }
    sum = sum + cardsValue[i];
  }
  while(aceCount > 0 && sum > 21) {
    sum = sum - 10;
    aceCount = aceCount - 1;
  }
  if(sum === 21){
     resetForNow();
  }
  return(sum);
}
function updateSuggestion(){
  CsAdded = total(cardsValue);
  if(CsAdded > 16){
    document.getElementById("suggestion").innerHTML = "Suggestion: Stand"
  }else{
    document.getElementById("suggestion").innerHTML = "Suggestion: Hit";
  }
}
function getCards(){
  if(!reset){
    getNumber();
    setTimeout(getDealer, 600);
    if(cardCount == 1){
      setTimeout(getNumber, 1100);
      setTimeout(getDealer, 1700);
    }
  }
}
function getNumber(){
  if(CsAdded <= 22){
    let card = deck.splice(Math.floor(Math.random() * deck.length), 1)[0]; 
    let currentCard = cardNumber[cardCount];
    let cardElement = document.getElementById(currentCard);
    
    // Set display and content before animation
    cardElement.innerHTML = card;
    cardElement.style.display = "inline";
    
    // Force reflow to ensure display is applied before animation
    void cardElement.offsetWidth;
    
    // Apply animation
    cardElement.style.animation = 'dealCard 0.6s ease-out forwards';
    
    if(cardCount === 1){
      document.getElementById("hit").innerHTML = "Hit";
    } 
    if(card === "Jack" ||card === "Queen" ||card === "King"){
      card = "10"
    }
    if(card === "Ace"){
      card = "11"
    } 
    currentCard = parseInt(card);
    cardsValue.push(currentCard);
    CsAdded = total(cardsValue);
    cardCount = cardCount + 1
  }
  updateSuggestion();
}
function getDealer(){
  if(DCsAdded < 17){
    let Dcard = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
    let DcurrentCard = DcardNumber[DcardCount];
    let dealerCardElement = document.getElementById(DcurrentCard);
    
    if(DcardCount >= 1){
      dealerCardElement.innerHTML = Dcard;
    }else{
      Dcard1 = Dcard
    }
    dealerCardElement.style.display = "inline";
    
    // Force reflow to ensure display is applied before animation
    void dealerCardElement.offsetWidth;
    
    // Apply animation
    dealerCardElement.style.animation = 'dealCardDealer 0.6s ease-out forwards';
    
    if(Dcard === "Jack" ||Dcard === "Queen" ||Dcard === "King"){
      Dcard = "10"
    }
    if(Dcard === "Ace"){
      Dcard = "11"
    }
    DcurrentCard = parseInt(Dcard);  
    DcardsValue.push(DcurrentCard);
    DcardCount = DcardCount + 1;
    DCsAdded = total(DcardsValue);
  }
}
function stand(){
  if(DCsAdded < 17){
    setTimeout(getDealer, 600);
    setTimeout(stand, 200);
    return;
  }
  document.getElementById("hit").disabled = true;
  setTimeout(() => {
    let dealerCard = document.getElementById("Dc1");
    dealerCard.innerHTML = Dcard1;
    dealerCard.style.backgroundColor = "#E5D0CC";
    
    // Force reflow before animation
    void dealerCard.offsetWidth;
    
    // Trigger flip animation
    dealerCard.style.animation = 'flipCard 0.6s ease-in-out';
  }, 200);
  reset = true
  document.getElementById('stay').textContent = "Reset";
  let winnings = 0;
  if (CsAdded > 21) {
    document.getElementById("suggestion").innerHTML = "Dealer Wins!";
    dealerWins = dealerWins + 1;
    winnings = -currentBet;
  }else if(CsAdded === 21 && cardsValue.length === 2){
    document.getElementById("suggestion").innerHTML = "Player Blackjack!";
    playerWins = playerWins + 1;
    winnings = currentBet * 1.5;
  }else if(DCsAdded > 21){
    document.getElementById("suggestion").innerHTML = "You Win!";
    playerWins = playerWins + 1;
    winnings = currentBet * 1.25;
  }else if(CsAdded > DCsAdded){
    document.getElementById("suggestion").innerHTML = "You Win!";
    playerWins = playerWins + 1;
    winnings = currentBet * 1.25;
  }else if(DCsAdded > CsAdded){
    document.getElementById("suggestion").innerHTML = "Dealer Wins!";
    dealerWins = dealerWins + 1;
    winnings = -currentBet;
  }else{
    document.getElementById("suggestion").innerHTML = "Tie!";
    winnings = 0;
  }
  bankroll += winnings;
  document.getElementById("playerScore").innerHTML = "You: " + playerWins;
  document.getElementById("dealerScore").innerHTML = "Dealer: " + dealerWins;
  document.getElementById("bankroll").innerHTML = "Bankroll: $" + bankroll;
}
function resetGame() {
  cardsValue = [];
  DcardsValue = [];
  CsAdded = 0;
  DCsAdded = 0;
  cardCount = 0;
  DcardCount = 0;
  reset = false;
  deck = [
  "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King",
  "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King",
  "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King",
  "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  for (let i = 0; i < cardNumber.length; i++){
    document.getElementById(cardNumber[i]).innerHTML = "";
    document.getElementById(cardNumber[i]).style.display = "none";
    document.getElementById(cardNumber[i]).style.animation = '';
  } // Player Card Clear
  document.getElementById("Dc1").style.backgroundColor = '#808080';
  for (let i = 0; i < DcardNumber.length; i++){
    document.getElementById(DcardNumber[i]).innerHTML = "";
    document.getElementById(DcardNumber[i]).style.display = "none";
    document.getElementById(DcardNumber[i]).style.animation = '';
  } // Dealer Card Clear
  document.getElementById("hit").disabled = false;
}
function resetForNow(){ 
   if(reset === true){
    document.getElementById("suggestion").innerHTML = "Draw to begin";
    document.getElementById("hit").innerHTML = "Draw";
    document.getElementById('stay').textContent = "Stand";
    resetGame();
    currentBet = 0;
    gameInProgress = false;
    updateBettingDisplay();
    }else{
      stand();
    }
}
