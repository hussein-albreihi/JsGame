'use strict';
goneTyping.logic = {};

//Get a random word from the list: wordList in goneTyping.words.js
goneTyping.logic.getRandomWord = function () {
	return String(goneTyping.words.wordList[Math.floor(Math.random() * goneTyping.words.wordList.length)]);
};

//Create a new player to a playerFactory object.
goneTyping.logic.playerFactory = function (name, time) {
	var that = {};
	that.player = name;
	that.playerTime = time;
	return that;
};

//Adds all the players made playerFactory to an array.
//Also cheking what the user typed in. Cannot return less than 0.

//This function breaks all the rules of namespacing.
//Until no one notices or and complains about it, we will use it.
//Or until someone can give us a better solution.
goneTyping.logic.createPlayers = function (numberOfPlayers) {
	parseInt(numberOfPlayers);
	// if (isNaN(numberOfPlayers) || numberOfPlayers <= 0) {
	// 	return goneTyping.logic.createPlayers(goneTyping.ui.getTotalPlayers());
	// }
	var players = [];
	for (var i = 0; i < numberOfPlayers; i++) {
		var playerName = goneTyping.ui.getPlayerNames(i);
		players.push(goneTyping.logic.playerFactory(playerName));
	}
	return players;
};

//Retruns true or false depending if the player word is the same as randomword
goneTyping.logic.checkInput = function (playerWord, randomWord) {
	return (playerWord === randomWord);
};

//Just adds time to the player
goneTyping.logic.addTimeToPlayer = function (players, time) {
	players.playerTime = time;
};

//Return an array of the player with fastest time(name and time).
goneTyping.logic.getScores = function (players) {
	var min = players[0].playerTime,
		winner = players[0].player;
	for (var i = 0; i < players.length; i++) {
		if (players[i].playerTime < min) {
			min = players[i].playerTime;
			winner = players[i].player;
		}
	}
	return [min, winner];
};