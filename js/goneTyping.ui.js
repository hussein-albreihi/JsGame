'use strict';

goneTyping.ui = {};
goneTyping.ui.setPlayerWord = function (word) {
	var playerWord = prompt('Word: ' + word);
	return playerWord;
};

goneTyping.ui.getPlayers = function () {
	var numberOfPlayers = prompt('Please enter number of players!');
	numberOfPlayers = Number(numberOfPlayers);
	return numberOfPlayers;
};

goneTyping.ui.getPlayerNames = function () {
	var playerName = prompt('what is your name?');
	return playerName;
};