'use strict';

goneTyping.ui = {};
goneTyping.ui.setPlayerWord = function (word) {
	var playerWord = prompt('Word: ' + word);
	return String(playerWord);
};
//Ask how many players it should should store in the nOP variable.
goneTyping.ui.getTotalPlayers = function () {
	var numberOfPlayers = prompt('Please enter number of players!');
	return numberOfPlayers;
};
//Ask user for name of each player.
goneTyping.ui.getPlayerNames = function () {
	var playerName = prompt('What is the name of the player');
	if (playerName === null) {
		return goneTyping.ui.getPlayerNames();
	}
	return String(playerName);
};

goneTyping.ui.getNumberOfTries = function () {
	var totalTries = prompt('How many times do you want to try?');
	if (totalTries <= 0 || isNaN(totalTries)) {
		return goneTyping.ui.getNumberOfTries();
	}
	return Number(totalTries);
};

goneTyping.ui.getReady = function (player) {
	alert('Get ready Player ' + player);
};

goneTyping.ui.showWinner = function (x) {
	alert('The winner is: ' + x);
};