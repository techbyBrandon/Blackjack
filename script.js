let cardCount = 0, DcardCount = 0, playersWins = 0, dealersWins = 0, reset = false;
let cardNumber = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11"];
let DcardNumber = ["Dc1","Dc2","Dc3","Dc4","Dc5","Dc6","Dc7","Dc8","Dc9"];
let cardsValue = [];
//MAKE AN ARRAY WITH CARD NUMBERS AND TOTAL FUNCTION WILL ADD THEM OMG DO WE AHVE IT>?????
document.getElementById("suggestion").innerHTML = "Draw to begin";
let deck = [
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", //12
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", //25
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", //38
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];//51
function total(cardsValue){
  let sum = 0
  for (let i = 0; i < cardsValue.length; i++) {
        if (i < cardsValue.length) {
            sum = sum + cardsValue[i];
        }
    }
  return(sum);
}
function updateSuggestion() {
  const totalValue = total(cardNumbers);
  document.getElementById("suggestion").innerHTML = totalValue > 16 ? "Suggestion: Stand" : "Suggestion: Hit";
} //Ai
function getCards(){
  if(reset === false){
    getNumber();
    getDealer();
  }
}
function getNumber(){
  let card = deck.splice(Math.floor(Math.random() * deck.length), 1)[0]; //Aii
  let currentCard = cardNumber[cardCount];
  document.getElementById(currentCard).innerHTML = card;
  document.getElementById(currentCard).style.display = "inline";
  if(cardCount === 1){
    document.getElementById("hitButton").innerHTML = "Hit";
  }
  if(card === "Jack" ||card === "Queen" ||card === "King"){
    card = "10"
  }
  if(card === "Ace"){
    card = "11"
  } //11 Ace
  currentCard = parseInt(card);
  cardsValue.push(currentCard);
  if(currentCard == 11){
    total(card)
    if(CsAdded > 21){
      c1 = parseInt(1);
    }
  } //1 Ace
  cardCount = cardCount + 1;
  if(cardCount == 1){
    const delayForSecondCard = setTimeout(getNumber, 400);
  } //delay
  updateSuggestion();
}
function getDealer(){
  let Dcard = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
  let DcurrentCard = DcardNumber[DcardCount];
  if(DcardCount >= 1){
    document.getElementById(DcurrentCard).innerHTML = Dcard;
  }
  document.getElementById(DcurrentCard).style.display = "inline";
  if(Dcard === "Jack" ||Dcard === "Queen" ||Dcard === "King"){
    Dcard = "10"
  }
  if(Dcard === "Ace"){
    Dcard = "11"
  } //11 Ace
  Dc2 = parseInt(Dcard);  
  if(Dc2 == 11){
    DCsAdded = Dc1+Dc2+Dc3+Dc4+Dc5+Dc6+Dc7+Dc8+Dc9;
    if(DCsAdded > 21){
      Dc2 = parseInt(1);
    }
  } //1 Ace
  DcardCount = DcardCount + 1;
  if(DcardCount == 1){
    const DdelayForSecondCard = setTimeout(getDealer, 400);
  } //delay for card 
  }
function stand(){
  if(DCsAdded < 17){
    getDealer();
    setTimeout(stand, 500);
    return;
  }
  if(reset === true){
       reset = false;
       resetForNow();
  }else{
    document.getElementById("suggestion").innerHTML = "Press Reset to continue";
    document.getElementById("DC1").style.backgroundColor = '#E5D0CC'
    document.getElementById("DC1").innerHTML = Dcard1;
    reset = true
    document.getElementById('stayButton').textContent = "Reset";
    if(CsAdded > 21){
      console.log("DealerWins!")
      dealersWins = dealersWins + 1
    }
    if(DCsAdded > 21 && CsAdded > 21){
      console.log("HouseDefult!")
      dealersWins = dealersWins + 1
    }
    if(CsAdded === 21 && DCsAdded !== 21){
      console.log("PlayerBlackjack!")
      playersWins = playersWins + 1
    }
    if(CsAdded < 21 && DCsAdded < 21){
      if(CsAdded > DCsAdded){
        console.log("PlayerWins!")
        playersWins = playersWins + 1
      }
      if(DCsAdded > CsAdded){
        console.log("DealerWins!")
        dealersWins = dealersWins + 1
      }
    }
    document.getElementById("playerScore").innerHTML = "You: " + playersWins;
    document.getElementById("dealerScore").innerHTML = "Dealer: " + dealersWins;
  }
}
function resetForNow(){ 
  document.getElementById("suggestion").innerHTML = "Draw to begin";
  document.getElementById('stayButton').textContent = "Stand";
  cardCount = 0;
  DcardCount = 0;
  deck = [
  "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", //12
  "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", //25
  "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", //38
  "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];//51
  document.getElementById('hitButton').textContent = "Draw";
  for (let i = 0; i < cardNumber.length; i++){
    document.getElementById(cardNumber[i]).innerHTML = "";
    document.getElementById(cardNUmber[i]).style.display = "none";
  }
  document.getElementById("DC1").style.backgroundColor = '#808080'
  document.getElementById("DC1").innerHTML = "";
  document.getElementById("DC1").style.display = "none";
  document.getElementById("DC2").innerHTML = "";
  document.getElementById("DC2").style.display = "none";
  document.getElementById("DC3").innerHTML = "";
  document.getElementById("DC3").style.display = "none";
  document.getElementById("DC4").innerHTML = "";
  document.getElementById("DC4").style.display = "none";
  document.getElementById("DC5").innerHTML = "";
  document.getElementById("DC5").style.display = "none";
  document.getElementById("DC6").innerHTML = "";
  document.getElementById("DC6").style.display = "none";
  document.getElementById("DC7").innerHTML = "";
  document.getElementById("DC7").style.display = "none";
  document.getElementById("DC8").innerHTML = "";
  document.getElementById("DC8").style.display = "none";
  document.getElementById("DC9").innerHTML = "";
  document.getElementById("DC9").style.display = "none";
} //set everything except win counts to origonal
