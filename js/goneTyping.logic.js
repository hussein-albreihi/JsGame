'use strict';
goneTyping.logic = {};

//lägg till i play istället senare
var players = [];

goneTyping.logic.getRandomWord = function () {
	return goneTyping.words.wordList[Math.floor(Math.random() * goneTyping.words.wordList.length)];
};

goneTyping.logic.playerFactory = function (name, time) {
	var that = {};
	that.player = name;
	that.playerTime = time;
	return that;
};

goneTyping.logic.createPlayers = function () {
	var numberOfPlayers = goneTyping.ui.getPlayers();
	for (var i = 0; i < numberOfPlayers; i++) {
		var playerName = goneTyping.ui.getPlayerNames();
		players.push(goneTyping.logic.playerFactory(playerName));
	}
	console.log(players);
};

goneTyping.logic.checkInput = function (playerInput, word) {
	if (playerInput === word) {
		alert('grattis');
	} else {
		alert('turd');
	}
};