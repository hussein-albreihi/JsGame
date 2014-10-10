'use strict';
(function () {
	var players = [],
		checkUserChoice, numberOfTries, randomizedWord;

	checkUserChoice = function (buttonSelect) {
		console.log('Button: ' + buttonSelect);
		$('#userInput').unbind('change');
		if (buttonSelect === 'Start') {
			randomizedWord = goneTyping.logic.getRandomWord();
			numberOfTries = 0;

			goneTyping.ui.displayRandomWord(randomizedWord);
			$('#userInput').change(function () {
				console.log('Round: ' + numberOfTries);
				console.log($(this).val());
				if (numberOfTries === 2) {
					return;
				} else if ($(this).val() === randomizedWord) {
					numberOfTries++;
					console.log('correct word');
					randomizedWord = goneTyping.logic.getRandomWord();
					goneTyping.ui.displayRandomWord(randomizedWord);

				} else {

					numberOfTries++;

				}
			});

		} else if (buttonSelect === 'Players') {
			$('#randomWord').children('h3').text('Add a player');
			$('#userInput').change(function () {
				players = goneTyping.logic.createPlayers($(this).val());
			});
			console.log(players);

		} else if (buttonSelect === 'Difficulty') {}

	};

	$('.buttons').children().on('click', function () {
		checkUserChoice($(this).text());
	});
}());