let images = [
  "images/dice-01.png",
  "images/dice-02.png",
  "images/dice-03.png",
  "images/dice-04.png",
  "images/dice-05.png",
  "images/dice-06.png",
];

//let newGame = document.getElementById("new-game");
let active1 = document.getElementById("point-active1")
let active2 = document.getElementById("point-active2")
let dice = document.querySelectorAll("img");
let roundValue = document.getElementById("ROUND1");
let roundValue2 = document.getElementById("ROUND2");
let valeurDuDés;
let GLOBALROUND1 = 0;
let GLOBALROUND2 = 0;
let zGlobal = document.getElementById("GLOBAL1");
let zGlobal2 = document.getElementById("GLOBAL2");
let GLOBALE1 = 0;
let GLOBALE2 = 0;
let tour = 0;
//let endGame;


function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    let dieValue = Math.floor(Math.random() * 6);
    
    console.log(dieValue + 1);
    document.querySelector("#die").setAttribute("src", images[dieValue]);
    // document.querySelector("#ROUND1").innerHTML = (dieValue + 1);
    valeurDuDés = (dieValue + 1);
    
    //affichage du tour/round(Dé)
    if (tour == 0) {
      // active2.style.display = "none";
      GLOBALROUND1 += valeurDuDés;
      roundValue.innerHTML = GLOBALROUND1;
      roundValue2.innerHTML = 0;
    } else {
      // active1.style.display = "none";
      GLOBALROUND2 += valeurDuDés;
      roundValue2.innerHTML = GLOBALROUND2;
      roundValue.innerHTML = 0;
    }
    
    //changement de tour si le joueur fait un 1
    if (valeurDuDés == 1 && tour == 0) {
      tour++;
      valeurDuDés = 0;
      GLOBALROUND1 = 0;
    } else if (valeurDuDés == 1 && tour == 1) {
      tour--;
      valeurDuDés = 0;
      GLOBALROUND2 = 0;
    }
  }, 1000);
}

function hold() {
  if (tour == 0) {
    GLOBALE1 += GLOBALROUND1;
    zGlobal.innerHTML = GLOBALE1;
    console.log(GLOBALE1);
    valeurDuDés = 0;
    roundValue.innerHTML = 0;
    GLOBALROUND1 = 0;
    tour++;
  } else {
    GLOBALE2 += GLOBALROUND2;
    zGlobal2.innerHTML = GLOBALE2;
    console.log(GLOBALE2);
    valeurDuDés = 0;
    roundValue2.innerHTML = 0;
    GLOBALROUND2 = 0;
    tour--;
  }
}


function endGame() {
  if (endGame) {
    GLOBALE1 = 0;
    zGlobal.innerHTML = 0;
    valeurDuDés = 0;
    roundValue.innerHTML = 0;
    GLOBALROUND1 = 0;
  } else if (endGame) {
    GLOBALE2 = 0;
    zGlobal2.innerHTML = 0;
    valeurDuDés = 0;
    roundValue2.innerHTML = 0;
    GLOBALROUND2 = 0;
  }
}

// endGame = document.addEventListener("click", () => {

// }); 


// newGame().addEventListener('click',()=> {
// function newgame() {
//   // if (endGame == 0) {
//     tour == 0;
//     GLOBALE1 = 0;
//     GLOBALE2 = 0;
//     GLOBALROUND1 = 0;
//     GLOBALROUND2 = 0;
//     roundValue.innerHTML = 0;
//     roundValue2.innerHTML = 0;
//     }
  