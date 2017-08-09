var randomNumber = Math.floor((Math.random() * 120) + 1);
$("#number").text(randomNumber);
var totalPoints = 0;
var wins = 0
var lose = 0
var crystals = $(".crystal");

// Make our randomization a function for re use
function makeRandom() {
   return Math.floor((Math.random() * 12) + 1);
}

// Make our randomize of our crystals into a function so we can re use it
function randomizeCrystals() {
  
  for (var i = 0; i < crystals.length; i++){
    var $this = crystals.eq(i);
    $this.val(makeRandom());
  }
}

function add (num) {
  totalPoints += Number(num);
  $("#score").text(totalPoints);
}

function reset(){
  totalPoints = 0;
  randomNumber = Math.floor((Math.random() * 120) + 1);
  $("#score").text(totalPoints);
  $("#number").text(randomNumber);
  randomizeCrystals();
}

crystals.on('click', function(event) {
  var numberVal = Number($(this).val());
  add(numberVal);
  if (randomNumber === totalPoints ) {
      wins++;
      $("#wins").text(wins)
      reset();
  } else if (totalPoints > randomNumber){
      console.log("butts")
      lose++;
      $("#losses").text(lose);
      reset();
  }
});

// This is our initial start of our game
// This function will fire only once on page load
reset(); // <--- now its reset instead of randomizeCrystals
