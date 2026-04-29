let cardCount = 0, DcardCount = 0, playersWins = 0, dealersWins = 0, reset = false;
let cardNumber = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11"];
let DcardNumber = ["Dc1","Dc2","Dc3","Dc4","Dc5","Dc6","Dc7","Dc8","Dc9"];
let cardsValue = [];
let DcardsValue = [];
let CsAdded = 0;
let DCsAdded = 0;
let Dcard1 = 0;
let playerWins = 0
let dealerWins = 0
let deck = [
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", 
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", 
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", 
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
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
  if(reset === false){
    getNumber();
    setTimeout(getDealer, 400);
    if(cardCount == 1){
      setTimeout(getNumber, 650);
      setTimeout(getDealer, 900);
    }
  }
}
function getNumber(){
  if(CsAdded <= 22){
    let card = deck.splice(Math.floor(Math.random() * deck.length), 1)[0]; 
    let currentCard = cardNumber[cardCount];
    document.getElementById(currentCard).innerHTML = card;
    document.getElementById(currentCard).style.display = "inline";
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
    if(DcardCount >= 1){
      document.getElementById(DcurrentCard).innerHTML = Dcard;
    }else{
      Dcard1 = Dcard
    }
    document.getElementById(DcurrentCard).style.display = "inline";
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
    setTimeout(getDealer, 400);
    setTimeout(stand, 200);
    return;
  }
  document.getElementById("Dc1").innerHTML = Dcard1;
  document.getElementById("Dc1").style.backgroundColor = "#E5D0CC";
  reset = true
  document.getElementById('stay').textContent = "Reset";
  if (CsAdded > 21) {
    document.getElementById("suggestion").innerHTML = "Dealer Wins!";
    dealerWins = dealerWins + 1;
  }else if(CsAdded === 21 && cardsValue.length === 2){
    document.getElementById("suggestion").innerHTML = "Player Blackjack!";
    playerWins = playerWins + 1;
  }else if(DCsAdded > 21){
    document.getElementById("suggestion").innerHTML = "You Win!";
    playerWins = playerWins + 1;
  }else if(CsAdded > DCsAdded){
    document.getElementById("suggestion").innerHTML = "You Win!";
    playerWins = playerWins + 1;
  }else if(DCsAdded > CsAdded){
    document.getElementById("suggestion").innerHTML = "Dealer Wins!";
    dealerWins = dealerWins + 1;
  }else{
    document.getElementById("suggestion").innerHTML = "Tie!";
  }
  document.getElementById("playerScore").innerHTML = "You: " + playerWins;
  document.getElementById("dealerScore").innerHTML = "Dealer: " + dealerWins;
}
function resetForNow(){ 
   if(reset === true){
    document.getElementById("suggestion").innerHTML = "Draw to begin";
    document.getElementById("hit").innerHTML = "Draw";
    document.getElementById('stay').textContent = "Stand";
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
    } // Player Card Clear
    document.getElementById("Dc1").style.backgroundColor = '#808080';
    for (let i = 0; i < DcardNumber.length; i++){
      document.getElementById(DcardNumber[i]).innerHTML = "";
      document.getElementById(DcardNumber[i]).style.display = "none";
    } // Dealer Card Clear
    }else{
      stand();
    }
}
