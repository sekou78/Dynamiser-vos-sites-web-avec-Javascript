let images = [
  "images/dice-01.png",
  "images/dice-02.png",
  "images/dice-03.png",
  "images/dice-04.png",
  "images/dice-05.png",
  "images/dice-06.png"
];

let dice = document.querySelectorAll("img");

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
    document.querySelector("#ROUND1").innerHTML = (dieValue + 1);
  },
  1000
  );
  
}