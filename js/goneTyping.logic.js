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
//This function breaks all the rules of namespacing.
//Until no one notices it and complains about it, we will use it.
//Or until someone can give us a better solution.
goneTyping.logic.createPlayers = function (numberOfPlayers) {
	if (isNaN(numberOfPlayers) || numberOfPlayers <= 0) {
		return goneTyping.logic.createPlayers(goneTyping.ui.getTotalPlayers());
	}
	var players = [];
	for (var i = 0; i < numberOfPlayers; i++) {
		var playerName = goneTyping.ui.getPlayerNames();
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

//Do a scoreboard of the best player.
goneTyping.logic.showScores = function (players) {
	var min = 0,
		winner = 0;
	min = players[0].playerTime;
	winner = players[0].player;
	console.log('_________Scoreboard___________');
	for (var i = 0; i < players.length; i++) {
		console.log('| Player: ' + players[i].player + ' | Time: ' + players[i].playerTime + ' |');
		if (players[i].playerTime < min) {
			min = players[i].playerTime;
			winner = players[i].player;
		}
	}
	console.log('_________________________');
	return [min, winner];
};