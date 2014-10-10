'use strict';
(function () {
	var players = [],
		user, checkUserChoice, numberOfTries, randomizedWord;
	var getRandomWord = function () {
		randomizedWord = goneTyping.logic.getRandomWord();
		goneTyping.ui.displayRandomWord(randomizedWord);
	};
	// var clearScreen = function () {
	// 	$('h3').text('');
	// 	$('h2').text('');
	// 	$('#userInput').val('');
	// };

	checkUserChoice = function (buttonSelect) {
		console.log('Button: ' + buttonSelect);
		$('#userInput').unbind('change');
		numberOfTries = 0;
		user = 0;
		//START BUTTON
		if (buttonSelect === 'Start') {
			goneTyping.ui.displayPlayer(players[user].player);
			goneTyping.timer.start();
			getRandomWord();
			$('#userInput').change(function () {
				var input = $(this).val();
				// if (user > players.length) {
				// 	console.log('bajs');
				// 	clearScreen();
				// 	return;
				// } else if (numberOfTries === 2) {
				// 	goneTyping.timer.stop();
				// 	goneTyping.logic.addTimeToPlayer(players[user], goneTyping.timer.getTime());
				// 	getRandomWord();

				// 	goneTyping.ui.displayPlayer(players[user].player);
				// 	goneTyping.timer.start();
				// 	user++;
				// 	numberOfTries = 0;
				// } else if ($(this).val() === randomizedWord) {
				// 	console.log(players[user].player + ' correct word: ' + randomizedWord);
				// 	getRandomWord();
				// 	numberOfTries++;
				// } else if ($(this).val() !== randomizedWord) {
				// 	console.log(players[user].player + ' typed wrong word: ' + randomizedWord);
				// 	goneTyping.timer.penaltyTime();

				// }
				// 					$('#userInput').unbind('change');

				if (numberOfTries === 2) {
					goneTyping.timer.stop();
					goneTyping.logic.addTimeToPlayer(players[user], goneTyping.timer.getTime());
					user++;
					goneTyping.timer.start();
					console.log(user);
					console.log(players.length);
					if (user >= players.length) {
						console.log('End');
						return;
					}
					goneTyping.ui.displayPlayer(players[user].player);
					numberOfTries = 0;
				} else if (input === randomizedWord) {
					console.log('Rett ord');
					numberOfTries++;
				} else if (input !== randomizedWord) {
					console.log('Fel ord');
					goneTyping.timer.penaltyTime();
				}
				getRandomWord();
			});

			//PLAYERS BUTTON
		} else if (buttonSelect === 'Players') {
			$('#randomWord').children('h3').text('Add a player');
			$('#userInput').change(function () {
				players = goneTyping.logic.createPlayers($(this).val());
			});
			console.log(players);

			//DIFFICULTY BUTTON
		} else if (buttonSelect === 'Difficulty') {}

	};

	$('.buttons').children().on('click', function () {
		checkUserChoice($(this).text());
	});
}());