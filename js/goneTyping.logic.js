'use strict';
goneTyping.logic = {};

//Get a random word from the list: wordList in goneTyping.words.js
goneTyping.logic.getRandomWord = function () {
	return goneTyping.words.wordList[Math.floor(Math.random() * goneTyping.words.wordList.length)];
};

//Create a new player to a playerFactory object.
goneTyping.logic.playerFactory = function (name, time) {
	var that = {};
	that.player = name;
	that.playerPoints = 0;
	that.playerTime = time;
	return that;
};

//Adds all the players made playerFactory to an array.
goneTyping.logic.createPlayers = function (numberOfPlayers) {
	var players = [];
	for (var i = 0; i < numberOfPlayers; i++) {
		var playerName = goneTyping.ui.getPlayerNames();
		players.push(goneTyping.logic.playerFactory(playerName));
	}
	return players;
};

//K
goneTyping.logic.checkInput = function (playerInput, word) {
	return (playerInput === word);
};

//Do a scoreboard of the best player.
goneTyping.logic.showScores = function () {
	// will add code here.
};

goneTyping.logic.setPoints = function () {

};