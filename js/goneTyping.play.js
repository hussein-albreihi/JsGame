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
		goneTyping.ui.getReady(players[i].player);
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
	var a = goneTyping.logic.showScores(players);
	console.log('time ' + a[0] + ' player ' + a[1]);

	//goneTyping.ui.showWinner(a);
};