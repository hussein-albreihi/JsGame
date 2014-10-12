'use strict';
goneTyping.logic = {};
var players = [];

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

//Pushes one player to an array
goneTyping.logic.createPlayers = function (name) {
	players.push(goneTyping.logic.playerFactory(name));
	$('#userInput').val('');
	return players;
};

//Just adds time to the player
goneTyping.logic.addTimeToPlayer = function (players, time) {
	players.playerTime = time;
};