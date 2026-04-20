let cardCount = 0, DcardCount = 0, playersWins = 0, dealersWins = 0, reset = false;
let playerValues = Array(11).fill(0), dealerValues = Array(9).fill(0), dealerFirstCard = "";
const playerIds = Array.from({ length: 11 }, (_, i) => `C${i + 1}`);
const dealerIds = Array.from({ length: 9 }, (_, i) => `DC${i + 1}`);
const faceCards = new Set(["Jack", "Queen", "King"]);
const deckTemplate = [
 "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King",
 "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King",
 "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King",
 "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"
];
let deck = [...deckTemplate];
document.getElementById("suggestion").innerHTML = "Draw to begin";


const cardValue = (card) => card === "Ace" ? 11 : faceCards.has(card) ? 10 : parseInt(card, 10);
const total = (values) => values.slice(0, 9).reduce((sum, value) => sum + value, 0);


function updateSuggestion() {
 const totalValue = total(playerValues);
 document.getElementById("suggestion").innerHTML = totalValue > 16 ? "Suggestion: Stand" : "Suggestion: Hit";
}


function getNumber() {
 const card = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
 document.getElementById(playerIds[cardCount]).innerHTML = card;
 document.getElementById(playerIds[cardCount]).style.display = "inline";
 if (cardCount === 0) document.getElementById("suggestion").innerHTML = "Suggestion: Hit";
 if (cardCount === 1) document.getElementById("hitButton").textContent = "Hit";
 playerValues[cardCount] = cardValue(card);
 if (playerValues[cardCount] === 11 && total(playerValues) > 21) playerValues[cardCount] = 1;
 cardCount += 1;
 if (cardCount === 2) setTimeout(() => { getNumber(); updateSuggestion(); }, 400);
 updateSuggestion();
}


function getDealer() {
 const card = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
 document.getElementById(dealerIds[DcardCount]).style.display = "inline";
 if (DcardCount === 0) {
   dealerFirstCard = card;
 } else {
   document.getElementById(dealerIds[DcardCount]).innerHTML = card;
 }
 dealerValues[DcardCount] = cardValue(card);
 if (dealerValues[DcardCount] === 11 && total(dealerValues) > 21) dealerValues[DcardCount] = 1;
 DcardCount += 1;
 if (DcardCount === 2) setTimeout(getDealer, 400);
}


function getCards() {
 if (reset) return;
 getNumber();
 getDealer();
}


function getDealerTotal() {
 return total(dealerValues);
}


function stand() {
 if (getDealerTotal() < 17) {
   getDealer();
   setTimeout(stand, 500);
   return;
 }
 if (reset) {
   reset = false;
   resetForNow();
   return;
 }
 document.getElementById("suggestion").innerHTML = "Press Reset to continue";
 document.getElementById("DC1").style.backgroundColor = "#E5D0CC";
 document.getElementById("DC1").innerHTML = dealerFirstCard;
 reset = true;
 document.getElementById("stayButton").textContent = "Reset";
 const CsAdded = total(playerValues);
 const DCsAdded = getDealerTotal();
 if (CsAdded > 21) dealersWins += 1;
 if (DCsAdded > 21 && CsAdded > 21) dealersWins += 1;
 if (CsAdded === 21 && DCsAdded !== 21) playersWins += 1;
 if (CsAdded < 21 && DCsAdded < 21) {
   if (CsAdded > DCsAdded) playersWins += 1;
   if (DCsAdded > CsAdded) dealersWins += 1;
 }
 document.getElementById("playerScore").innerHTML = "You: " + playersWins;
 document.getElementById("dealerScore").innerHTML = "Dealer: " + dealersWins;
}


function resetForNow() {
 document.getElementById("suggestion").innerHTML = "Draw to begin";
 document.getElementById("stayButton").textContent = "Stand";
 cardCount = 0;
 DcardCount = 0;
 deck = [...deckTemplate];
 playerValues.fill(0);
 dealerValues.fill(0);
 dealerFirstCard = "";
 document.getElementById("hitButton").textContent = "Draw";
 playerIds.concat(dealerIds).forEach((id) => {
   document.getElementById(id).innerHTML = "";
   document.getElementById(id).style.display = "none";
 });
 document.getElementById("DC1").style.backgroundColor = "#808080";
}



