'use strict';
$(function () {
	goneTyping.ui = {};
	//Taking in the random word, and displays it.
	//User have to enter the word as quickly as he can.
	goneTyping.ui.setPlayerWord = function (word) {
		var playerWord = 'Word: ' + word;
		$('p').append('<p>' + word + '</p>');
		return String(playerWord.toLowerCase());
	};

<<<<<<< HEAD
goneTyping.ui = {};
//Taking in the random word, and displays it.
//User have to enter the word as quickly as he can.
goneTyping.ui.setPlayerWord = function (word) {
	var playerWord = prompt('Word: ' + word);
	return String(playerWord.toLowerCase());
};

//Alerts the rules of the game.
goneTyping.ui.showRules = function () {
	alert('Gone Typing \nThis is the game where you have to type the word displaying in the popup box as quickly as possible.\nIf you however misspell the word you will get penalty time.\nBe sure to write correct AND fast.\nGood luck and have fun.');
};

goneTyping.ui.displayTypedWords = function (playerWord, randomWord, player) {
	console.log('________________________________');
	console.log('Word was: ' + randomWord);
	console.log(player + ' typed: ' + playerWord);
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

//Ask user how many rounds he/she wanna play. Cannot set less than zero or zero.
goneTyping.ui.getNumberOfTries = function () {
	var totalTries = prompt('How many times do you want to try?');
	if (totalTries <= 0 || isNaN(totalTries)) {
		return goneTyping.ui.getNumberOfTries();
	}
	return Number(totalTries);
};

//Prompt user to ready up
goneTyping.ui.getReady = function (player) {
	alert('Get ready Player ' + player);
};

//Showing the winner.
goneTyping.ui.displayWinner = function (winner, players) {
	console.log('__Scoreboard____________________');
	for (var i = 0; i < players.length; i++) {
		console.log('Player: ' + players[i].player + ' --- ' + 'Time: ' + players[i].playerTime);
	}
	console.log('________________________________');
	alert('The winner is: ' + winner);
};
=======
	//Alerts the rules of the game.
	goneTyping.ui.showRules = function () {
		alert('Gone Typing \nThis is the game where you have to type the word displaying in the popup box as quickly as possible.\nIf you however misspell the word you will get penalty time.\nBe sure to write correct AND fast.\nGood luck and have fun.');
	};

	//A fine little bugtesting board, mainly for bugs but mostly for UI
	goneTyping.ui.displayTypedWords = function (playerWord, randomWord, player) {
		console.log('________________________________');
		console.log('Word was: ' + randomWord);
		console.log(player + ' typed: ' + playerWord);
	};

	//Ask how many players it should should store in the nOP variable.
	goneTyping.ui.getTotalPlayers = function () {
		var numberOfPlayers = prompt('Please enter the number of players!');
		return numberOfPlayers;
	};
	//Ask user for name of each player.
	goneTyping.ui.getPlayerNames = function (numberOfPlayer) {
		var grammar = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth', 'tenth'];
		var playerName = prompt('What is the name of the ' + grammar[numberOfPlayer] + ' player');
		if (playerName === null) {
			return goneTyping.ui.getPlayerNames(numberOfPlayer);
		}
		return String(playerName);
	};

	//Ask user how many rounds he/she wanna play. Cannot set less than zero or zero.
	goneTyping.ui.getNumberOfTries = function () {
		var totalTries = prompt('How many words do you want to write?');
		if (totalTries <= 0 || isNaN(totalTries)) {
			return goneTyping.ui.getNumberOfTries();
		}
		return Number(totalTries);
	};

	//Prompt user to ready up
	goneTyping.ui.getReady = function (player) {
		alert('Get ready player ' + player);
	};

	//Displaying the winner.
	goneTyping.ui.displayWinner = function (winner, players) {
		console.log('__Scoreboard____________________');
		for (var i = 0; i < players.length; i++) {
			console.log('Player: ' + players[i].player + ' --- ' + 'Time: ' + players[i].playerTime);
		}
		console.log('________________________________');
		alert('The winner is: ' + winner);
	};
});
>>>>>>> f4d91bc77a80a62d44eb505483523a3e4c974100
