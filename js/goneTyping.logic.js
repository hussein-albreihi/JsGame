'use strict';
goneTyping.logic = {};

//Get a random word from the list: wordList in goneTyping.words.js
goneTyping.logic.getRandomWord = function () {
	return goneTyping.words.wordList[Math.floor(Math.random() * goneTyping.words.wordList.length)];
};

//Create a new player to a playerFactory object.
goneTyping.logic.playerFactory = function (name, points, time) {
	var that = {};
	that.player = name;
	that.playerPoints = points;
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
goneTyping.logic.showScores = function (players) {
	console.log('Scoreboard :\n');
	var min = 0;
	min = players[0].playerTime;

	for (var i = 0; i < players.length; i++) {
		console.log('Player: ' + players[i].player + '\nPlayer score: ' + players[i].playerTime);

		if (players[i].playerTime < min) {
			min = players[i].playerTime;
		}
	}
	console.log('\nPlayer with best time: ' + '\nTime: ' + min);
};