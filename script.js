let images = [
  "images/dice-01.png",
  "images/dice-02.png",
  "images/dice-03.png",
  "images/dice-04.png",
  "images/dice-05.png",
  "images/dice-06.png"
];

let dice = document.querySelectorAll("img");
let roundValue = document.getElementById('ROUND1')
let roundValue2 = document.getElementById('ROUND2')
let a;
let zGlobal = document.getElementById('GLOBAL1')
let zGlobal2 = document.getElementById('GLOBAL2')
let GLOBALE1 = 0;
let GLOBALE2 = 0;
let tour = 0;

function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    let dieValue = Math.floor(Math.random() * 6);

    console.log((dieValue) + 1);
    document.querySelector("#die").setAttribute("src", images[dieValue]);
    // document.querySelector("#ROUND1").innerHTML = (dieValue + 1);
    a = ((dieValue) + 1)
    if (tour == 0) {
      roundValue.innerHTML = a;
    } else {
      roundValue2.innerHTML = a;
    }
    if (a == 1 && tour == 0) {
      tour++
    } else if (a == 1 && tour == 1) {
      tour--
    }
  },
    1000
  );
}
function hold() {
  if (tour == 0) {
    GLOBALE1 += a;
    zGlobal.innerHTML = GLOBALE1;
    console.log(GLOBALE1);
    a = 0;
    tour++
  } else {
    GLOBALE2 += a;
    zGlobal2.innerHTML = GLOBALE2;
    console.log(GLOBALE2)
    a = 0;
    tour--
  }
}







