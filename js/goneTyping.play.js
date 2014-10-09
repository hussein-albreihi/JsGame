'use strict';

(function () {
	// 	goneTyping.ui.showRules();
	// 	//Game starts here
	// 	var players = goneTyping.logic.createPlayers(goneTyping.ui.getTotalPlayers()),
	// 		numberOfTries = goneTyping.ui.getNumberOfTries(),
	// 		playerWord,
	// 		randomWord;
	// 	for (var i = 0; i < players.length; i++) {
	// 		goneTyping.ui.getReady(players[i].player);
	// 		goneTyping.timer.start();
	// 		for (var x = 0; x < numberOfTries; x++) {
	// 			randomWord = goneTyping.logic.getRandomWord();
	// 			playerWord = goneTyping.ui.setPlayerWord(randomWord);
	// 			if (!goneTyping.logic.checkInput(playerWord, randomWord)) {
	// 				goneTyping.timer.penaltyTime();
	// 			}
	// 			goneTyping.ui.displayTypedWords(playerWord, randomWord, players[i].player);
	// 		}
	// 		goneTyping.timer.stop();
	// 		goneTyping.logic.addTimeToPlayer(players[i], goneTyping.timer.getTime());
	// 	}
	// 	var a = goneTyping.logic.getScores(players);
	// 	goneTyping.ui.displayWinner(a[1], players);
	$(function () {
		var numberOfPlayers,
			firstTime = true,
			players;

		$('#startButton').on('click', function () {

			goneTyping.ui.showRules(5000);
			goneTyping.ui.getTotalPlayers();
		});
		$('#userInput').bind('keypress', function (e) {
			if (e.keyCode === 13 && firstTime) {

				numberOfPlayers = $(this).val();
				console.log(numberOfPlayers);
				players = goneTyping.logic.createPlayers(numberOfPlayers);

				firstTime = false;
			}

		});



	});


}());