$(document).ready(function () {
// VARIABLES
// =================================
	var randy = Math.floor(Math.random()*101+19);
	var wins = 0;
	var losses = 0;
	var yourScore = 0;
	var crystalBlue = Math.floor(Math.random()*11+1);
	var crystalGreen = Math.floor(Math.random()*11+1);
	var crystalRed = Math.floor(Math.random()*11+1);
	var crystalPurple = Math.floor(Math.random()*11+1);


// VALUES ASSIGNED
// =================================
$("#randomNum").html("Random Number: " + randy);
$("#wins").html("wins: " + wins);
$("#losses").html("losses: " + losses);
$("#score").html("Total Score: " + yourScore);


// FUNCTIONS
// =================================

function youWin(){
	alert("YOU WIN!!");
	wins++;
	$("#wins").html("wins: " + wins);
	reset();
};


function youLose(){
	alert("YOU LOST!! BEEEEYOOOTCH!!")
	losses++;
	$("#losses").html("losses: " + losses);
	reset();
};


// RESET FUNCTION
// =================================

function reset(){
	randy=Math.floor(Math.random()*101+19);
	$("#randomNum").html("Random Number: " + randy);
	crystalBlue = Math.floor(Math.random()*11+1);
	crystalGreen = Math.floor(Math.random()*11+1);
	crystalRed = Math.floor(Math.random()*11+1);
	crystalPurple = Math.floor(Math.random()*11+1);
	yourScore=0;
	$("#score").html(yourScore);
}



// MAIN PROCESS
// =================================

$("#blue").on("click", function(){
	yourScore = yourScore + crystalBlue;
	console.log("new yourScore: " + yourScore);
	$("#score").html(yourScore);
		if (yourScore === randy) {
			youWin();
		}
		else if(yourScore>randy){
			youLose();
		}
});


$("#green").on("click", function(){
	yourScore = yourScore + crystalGreen;
	console.log("new yourScore: " + yourScore);
	$("#score").html(yourScore);
		if (yourScore === randy) {
			youWin();
		}
		else if(yourScore>randy){
			youLose();
		}
});


$("#red").on("click", function(){
	yourScore = yourScore + crystalRed;
	console.log("new yourScore: " + yourScore);
	$("#score").html(yourScore);
		if (yourScore === randy) {
			youWin();
		}
		else if(yourScore>randy){
			youLose();
		}
});


$("#purple").on("click", function(){
	yourScore = yourScore + crystalPurple;
	console.log("new yourScore: " + yourScore);
	$("#score").html(yourScore);
		if (yourScore === randy) {
			youWin();
		}
		else if(yourScore>randy){
			youLose();
		}
});






});
