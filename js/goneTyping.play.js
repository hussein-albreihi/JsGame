'use strict';

goneTyping.play = function () {
	var players = goneTyping.logic.createPlayers(goneTyping.ui.getTotalPlayers()),
		numberOfTries = goneTyping.ui.getNumberOfTries(),
		playerWord,
		randomWord;

	for (var i = 0; i < players.length; i++) {
		goneTyping.ui.getReady(players[i].player);
		goneTyping.timer.start();
		for (var x = 0; x < numberOfTries; x++) {
			randomWord = goneTyping.logic.getRandomWord();
			playerWord = goneTyping.ui.setPlayerWord(randomWord);
			if (!goneTyping.logic.checkInput(playerWord, randomWord)) {
				goneTyping.timer.penaltyTime();
			}
		}
		goneTyping.timer.stop();
		goneTyping.logic.addTimeToPlayer(players[i], goneTyping.timer.getTime());

	}
	var a = goneTyping.logic.showScores(players);
<<<<<<< HEAD
	console.log('time ' + a[0] + ' player ' + a[1]);

	//goneTyping.ui.showWinner(a);
=======
	goneTyping.ui.showWinner(a[1]);
>>>>>>> dev
};