let cardCount = 0;
let DcardCount = 0;
let Dc1 = 0;
let Dc2 = 0;
let Dc3 = 0;
let Dc4 = 0;
let Dc5 = 0;
let Dc6 = 0;
let Dc7 = 0;
let Dc8 = 0;
let Dc9 = 0;
let DCsAdded = Dc1+Dc2+Dc3+Dc4+Dc5+Dc6+Dc7+Dc8+Dc9;
let deck = [
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", //12
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", //25
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", //38
"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];//51
function getNumber(){
  const number = Math.floor(Math.random() * 52);
  const maxCards = 52 - cardCount - DcardCount;
  if (number < maxCards){
    const card = deck[number];
    if(cardCount == 0){
      const c1 = card
      document.getElementById("C1").innerHTML = card;
      document.getElementById("C1").style.display = "inline";
    }
    if(cardCount == 1){
      const c2 = card
      document.getElementById("C2").innerHTML = card;
      document.getElementById("C2").style.display = "inline";
      document.getElementById('hitButton').textContent = "Hit";
    }
    if(cardCount == 2){
      const c3 = card
      document.getElementById("C3").innerHTML = card;
      document.getElementById("C3").style.display = "inline";
    }
    if(cardCount == 3){
      const c4 = card
      document.getElementById("C4").innerHTML = card;
      document.getElementById("C4").style.display = "inline";
    }
    if(cardCount == 4){
      const c5 = card
      document.getElementById("C5").innerHTML = card;
      document.getElementById("C5").style.display = "inline";
    }
    if(cardCount == 5){
      const c6 = card
      document.getElementById("C6").innerHTML = card;
      document.getElementById("C6").style.display = "inline";
    }
    if(cardCount == 6){
      const c7 = card
      document.getElementById("C7").innerHTML = card;
      document.getElementById("C7").style.display = "inline";
    }
    if(cardCount == 7){
      const c8 = card
      document.getElementById("C8").innerHTML = card;
      document.getElementById("C8").style.display = "inline";
    }
    if(cardCount == 8){
      const c9 = card
      document.getElementById("C9").innerHTML = card;
      document.getElementById("C9").style.display = "inline";
    }
    if(cardCount == 9){
      const c10 = card
      document.getElementById("C10").innerHTML = card;
      document.getElementById("C10").style.display = "inline";
    }
    if(cardCount == 10){
      const c11 = card
      document.getElementById("C11").innerHTML = card;
      document.getElementById("C11").style.display = "inline";
    }
    cardCount = cardCount + 1;
    deck.splice(number, 1);
    if(cardCount == 1){
      const delayForSecondCard = setTimeout(getNumber, 400);
    } //delay
  }else{
    getNumber();
  } //retry if number more than possible from deak
}
function getDealer(){
  const Dnumber = Math.floor(Math.random() * 52);
  const DmaxCards = 52 - DcardCount - cardCount;
  if (Dnumber < DmaxCards){
    let Dcard = deck[Dnumber];
    if (DCsAdded <= 17){ //While DealerCards added up is less than 17 to have loop add later?
      if(DcardCount == 0){
        document.getElementById("DC1").innerHTML = Dcard;
        document.getElementById("DC1").style.display = "inline";
        if(Dcard === "Jack" ||Dcard === "Queen" ||Dcard === "King"){
            Dcard = "10"
        }
        if(Dcard === "Ace"){
            Dcard = "11"
        } //11 Ace
        Dc1 = parseInt(Dcard);
        if(Dc1 == 11){
          DCsAdded = Dc1+Dc2+Dc3+Dc4+Dc5+Dc6+Dc7+Dc8+Dc9;
          if(DCsAdded > 21){
            Dc1 = parseInt(1);
          }
        } //1 Ace
      }
      if(DcardCount == 1){
        document.getElementById("DC2").innerHTML = Dcard;
        document.getElementById("DC2").style.display = "inline";
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
        
      }
      if(DcardCount == 2){
        document.getElementById("DC3").innerHTML = Dcard;
        document.getElementById("DC3").style.display = "inline";
        if(Dcard === "Jack" ||Dcard === "Queen" ||Dcard === "King"){
            Dcard = "10"
        }
        if(Dcard === "Ace"){
            Dcard = "11"
        } //11 Ace
        Dc3 = parseInt(Dcard);  
        if(Dc3 == 11){
          DCsAdded = Dc1+Dc2+Dc3+Dc4+Dc5+Dc6+Dc7+Dc8+Dc9;
          if(DCsAdded > 21){
            Dc3 = parseInt(1);
          }
        } //1 Ace
        
      }
      if(DcardCount == 3){
        document.getElementById("DC4").innerHTML = Dcard;
        document.getElementById("DC4").style.display = "inline";
        if(Dcard === "Jack" ||Dcard === "Queen" ||Dcard === "King"){
            Dcard = "10"
        }
        if(Dcard === "Ace"){
            Dcard = "11"
        } //11 Ace
        Dc4 = parseInt(Dcard);  
        if(Dc4 == 11){
          DCsAdded = Dc1+Dc2+Dc3+Dc4+Dc5+Dc6+Dc7+Dc8+Dc9;
          if(DCsAdded > 21){
            Dc4 = parseInt(1);
          }
        } //1 Ace
        
      }
      if(DcardCount == 4){
        document.getElementById("DC5").innerHTML = Dcard;
        document.getElementById("DC5").style.display = "inline";
        if(Dcard === "Jack" ||Dcard === "Queen" ||Dcard === "King"){
            Dcard = "10"
        }
        if(Dcard === "Ace"){
            Dcard = "11"
        } //11 Ace
        Dc5 = parseInt(Dcard);  
        if(Dc5 == 11){
          DCsAdded = Dc1+Dc2+Dc3+Dc4+Dc5+Dc6+Dc7+Dc8+Dc9;
          if(DCsAdded > 21){
            Dc5 = parseInt(1);
          }
        } //1 Ace
        
      }
      if(DcardCount == 5){
        document.getElementById("DC6").innerHTML = Dcard;
        document.getElementById("DC6").style.display = "inline";
        if(Dcard === "Jack" ||Dcard === "Queen" ||Dcard === "King"){
            Dcard = "10"
        }
        if(Dcard === "Ace"){
            Dcard = "11"
        } //11 Ace
        Dc6 = parseInt(Dcard);  
        if(Dc6 == 11){
          DCsAdded = Dc1+Dc2+Dc3+Dc4+Dc5+Dc6+Dc7+Dc8+Dc9;
          if(DCsAdded > 21){
            Dc6 = parseInt(1);
          }
        } //1 Ace
        
      }
      if(DcardCount == 6){
        document.getElementById("DC7").innerHTML = Dcard;
        document.getElementById("DC7").style.display = "inline";
        if(Dcard === "Jack" ||Dcard === "Queen" ||Dcard === "King"){
            Dcard = "10"
        }
        if(Dcard === "Ace"){
            Dcard = "11"
        } //11 Ace
        Dc7 = parseInt(Dcard);  
        if(Dc7 == 11){
          DCsAdded = Dc1+Dc2+Dc3+Dc4+Dc5+Dc6+Dc7+Dc8+Dc9;
          if(DCsAdded > 21){
            Dc7 = parseInt(1);
          }
        } //1 Ace
        
      }
      if(DcardCount == 7){
        document.getElementById("DC8").innerHTML = Dcard;
        document.getElementById("DC8").style.display = "inline";
        if(Dcard === "Jack" ||Dcard === "Queen" ||Dcard === "King"){
            Dcard = "10"
        }
        if(Dcard === "Ace"){
            Dcard = "11"
        } //11 Ace
        Dc8 = parseInt(Dcard);  
        if(Dc8 == 11){
          DCsAdded = Dc1+Dc2+Dc3+Dc4+Dc5+Dc6+Dc7+Dc8+Dc9;
          if(DCsAdded > 21){
            Dc8 = parseInt(1);
          }
        } //1 Ace
        
      }
      if(DcardCount == 8){
        document.getElementById("DC9").innerHTML = Dcard;
        document.getElementById("DC9").style.display = "inline";
        if(Dcard === "Jack" ||Dcard === "Queen" ||Dcard === "King"){
            Dcard = "10"
        }
        if(Dcard === "Ace"){
            Dcard = "11"
        } //11 Ace
        Dc9 = parseInt(Dcard);  
        if(Dc9 == 11){
          DCsAdded = Dc1+Dc2+Dc3+Dc4+Dc5+Dc6+Dc7+Dc8+Dc9;
          if(DCsAdded > 21){
            Dc9 = parseInt(1);
          }
        } //1 Ace
        
      }
    }
    DcardCount = DcardCount + 1;
    deck.splice(Dnumber, 1);
    if(DcardCount == 1){
      const DdelayForSecondCard = setTimeout(getDealer, 400);
    } //delay for card 2
  }else{
    getDealer();
  } //retry if number more than possible from deak
  DCsAdded = Dc1+Dc2+Dc3+Dc4+Dc5+Dc6+Dc7+Dc8+Dc9; //Keep to fix for ace
  console.log(DCsAdded);
}
function resetForNow(){ 
  cardCount = 0;
  DcardCount = 0;
  deck = [
  "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", //12
  "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", //25
  "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", //38
  "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];//51
  document.getElementById("C1").innerHTML = "";
  document.getElementById("C1").style.display = "none";
  document.getElementById("C2").innerHTML = "";
  document.getElementById("C2").style.display = "none";
  document.getElementById('hitButton').textContent = "Draw";
  document.getElementById("C3").innerHTML = "";
  document.getElementById("C3").style.display = "none";
  document.getElementById("C4").innerHTML = "";
  document.getElementById("C4").style.display = "none";
  document.getElementById("C5").innerHTML = "";
  document.getElementById("C5").style.display = "none"; 
  document.getElementById("C6").innerHTML = "";
  document.getElementById("C6").style.display = "none";
  document.getElementById("C7").innerHTML = "";
  document.getElementById("C7").style.display = "none";
  document.getElementById("C8").innerHTML = "";
  document.getElementById("C8").style.display = "none";
  document.getElementById("C9").innerHTML = "";
  document.getElementById("C9").style.display = "none";
  document.getElementById("C10").innerHTML = "";
  document.getElementById("C10").style.display = "none";
  document.getElementById("C11").innerHTML = "";
  document.getElementById("C11").style.display = "none";
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
  Dc1 = 0;
  Dc2 = 0;
  Dc3 = 0;
  Dc4 = 0;
  Dc5 = 0;
  Dc6 = 0;
  Dc7 = 0;
  Dc8 = 0;
  Dc9 = 0;
  DCsAdded = 0;
} //everything set to origonal
