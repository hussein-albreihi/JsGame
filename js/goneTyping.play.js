'use strict';

goneTyping.play = function () {
	var players = goneTyping.logic.createPlayers(goneTyping.ui.getTotalPlayers()),
		numberOfTries = goneTyping.ui.getNumberOfTries(),
		playerWord,
		points = 0,
		randomWord;

	console.log(players);

	for (var i = 0; i < players.length; i++) {
		console.log('___________Loop ' + i + ' Start_____________');
		//Försök fixa till spelarnamn?
<<<<<<< HEAD
		goneTyping.ui.getReady(players[i]);
=======
		goneTyping.ui.getReady(players[i].player);
>>>>>>> 1002d078bad9800bb30ac8102c8822ee7b93068f
		//Lägg till tidenräknaren här?
		goneTyping.timer.start();
		for (var x = 0; x < numberOfTries; x++) {
			randomWord = goneTyping.logic.getRandomWord();
			playerWord = goneTyping.ui.setPlayerWord(randomWord);
			console.log('randomWord: ' + randomWord + '\n' + 'playerWord: ' + playerWord);
			//Fixa så denna endast gäller för enskild spelare.
			if (goneTyping.logic.checkInput(playerWord, randomWord)) {
				points = points + 1;
			}
			console.log('Player ' + i + ' points: ' + points);
			console.log('____________________________________');
		}
		goneTyping.timer.stop();
		var time = goneTyping.timer.getTime();

		players[i].playerTime = time;

		console.log('___________Loop ' + i + ' Finished__________');

	}
	goneTyping.logic.showScores(players);
};