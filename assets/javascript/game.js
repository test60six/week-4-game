var randomNumber = Math.floor((Math.random() * 120) + 1);
$("#number").text(randomNumber);
var totalPoints = 0;
var cNumber1;
var cNumber2;
var cNumber3;
var cNumber4;
var wins = 0
var lose = 0

function makeRandom() {
   return Math.floor((Math.random() * 12) + 1);
}

var crystals = $(".crystal");

for (var i = 0; i < crystals.length; i++){
	var $this = crystals.eq(i);
	$this.val(makeRandom());
}

function add (num){
	totalPoints += Number(num);

	$("#score").text(totalPoints);

}

crystals.on('click', function(event) {
	var numberVal = Number ($(this).val());
	add(numberVal);

	if (randomNumber === totalPoints ){
		wins++;
		$("#wins").text(wins)

		reset()


	}

	else if (totalPoints > randomNumber){
		console.log("butts")
		lose++;
		$("#losses").text(lose)

		reset()

	}


});

