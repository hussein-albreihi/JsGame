'use strict';

goneTyping.ui = {};
goneTyping.ui.setPlayerWord = function (word) {
	var playerWord = prompt('Word: ' + word);
	return String(playerWord);
};

goneTyping.ui.getTotalPlayers = function () {
	var numberOfPlayers = prompt('Please enter number of players!');
	if (isNaN(numberOfPlayers)) {
		goneTyping.play();
	}
	return Number(numberOfPlayers);
};

goneTyping.ui.getPlayerNames = function () {
	var playerName = prompt('What is the name of the player');
	return String(playerName);
};

goneTyping.ui.getNumberOfTries = function () {
	var totalTries = prompt('How many times do you want to try?');
	return Number(totalTries);
};

goneTyping.ui.getReady = function (player) {
	alert('Get ready Player ' + player);
};

goneTyping.ui.showWinner = function (x) {
	alert('The winner is: ' + x);
};