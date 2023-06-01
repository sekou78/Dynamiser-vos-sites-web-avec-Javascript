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
let a;
let zGlobal = document.getElementById('GLOBAL1')
function switchPlayer(Global) {
  
}

function roll() {
  dice.forEach(function(die){
    die.classList.add("shake");
  });
  setTimeout(function(){
    dice.forEach(function(die){
      die.classList.remove("shake");
    });
    
    let dieValue = Math.floor(Math.random() * 6);
    
    console.log((dieValue) + 1);
    document.querySelector("#die").setAttribute("src", images[dieValue]);
    // document.querySelector("#ROUND1").innerHTML = (dieValue + 1);
    a = ((dieValue) + 1)
    roundValue.innerHTML = a;
  },
  1000
  );
  // while(player)
  // if(a = 1) {
  //   a = 0;
  // }
}
let GLOBALE1 = 0 ;
function hold() {
    GLOBALE1 += a;
    zGlobal.innerHTML = GLOBALE1;
    console.log(GLOBALE1);
}







