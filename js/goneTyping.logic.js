'use strict';
goneTyping.logic = {};

goneTyping.logic.getRandomWord = function () {
	return goneTyping.words.wordList[Math.floor(Math.random() * goneTyping.words.wordList.length)];
};

goneTyping.logic.playerFactory = function (name, time) {
	var that = {};
	that.player = name;
	that.playerTime = time;
	return that;
};

goneTyping.logic.createPlayers = function (numberOfPlayers) {
	var players = [];
	for (var i = 0; i < numberOfPlayers; i++) {
		var playerName = goneTyping.ui.getPlayerNames();
		players.push(goneTyping.logic.playerFactory(playerName));
	}
	return players;
};

goneTyping.logic.checkInput = function (playerInput, word) {
	if (playerInput === word) {
		alert('grattis');
	} else {
		alert('turd');
	}
};