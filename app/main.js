// Global Variables
var restartButton = document.getElementById('restartButton');
var spaces = document.getElementsByClassName('space');
var symbols = ['O', 'X'];
var turn = 0;

// Wait for page to load before doing anything
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		restartButton.onclick = startGame;
		startGame();
	}
};

function startGame() {
	// reset turn counter
	turn = 0;

	// remove previous winner notification and make sure div is hidden

	// Clear board and add click events on squares
	for (var i = 0; i < spaces.length; i++) {
		spaces[i].innerHTML = ''; // Wipes out board when 'New Game' is clicked
		spaces[i].addEventListener("click", takeSpace);
	}
}

function takeSpace() {
	turn++;
	this.innerHTML = symbols[turn % 2]; // The modulus swaps between 0 and 1 of the symbols array
	this.removeEventListener("click", takeSpace); // `this` is always the object that you're acting on right now
	// console.log(this); <-- Shows in the console the computer remembering which space you were on

	for (var i = 0; i < wins.length; i++) {
		if (checkForWin(wins[i])) {
			alert("winner!");
		}
	}
}

function checkForWin(winArray) {
		return
			spaces[winArray[0]] !== '' && 
			spaces[winArray[0]] === spaces[winArray[1]] && 
			spaces[winArray[0]] === spaces[winArray[2]];
}