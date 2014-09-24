'use strict';

goneTyping.play = function () {
	var players = goneTyping.logic.createPlayers(goneTyping.ui.getTotalPlayers()),
		numberOfTries = goneTyping.ui.getNumberOfTries(),
		playerWord,
		points = 0,
		randomWord,
		startTime = new Date(),
		endTime = new Date();


	for (var i = 0; i < players.length; i++) {
		console.log('___________Loop ' + i + ' Start_____________');
		//Försök fixa till spelarnamn?
		goneTyping.ui.getReady(i);
		//Lägg till tidenräknaren här?
		startTime = new Date();
		for (var x = 0; x < numberOfTries; x++) {
			randomWord = goneTyping.logic.getRandomWord();
			playerWord = goneTyping.ui.setPlayerWord(randomWord);
			console.log('randomWord: ' + randomWord + '\n' + 'playerWord: ' + playerWord);
			//Fixa så denna endast gäller för enskild spelare.
			if (goneTyping.logic.checkInput(playerWord, randomWord)) {

				goneTyping.logic.setPoints(points);
			}
			endTime = new Date();
			var resultTime = (endTime.getTime() - startTime.getTime()) / 1000;
			console.log(resultTime);
			console.log('Player ' + i + ' points: ' + points);
			console.log('____________________________________');
		}
		console.log('___________Loop ' + i + ' Finished__________');
	}
	//showScores();
};