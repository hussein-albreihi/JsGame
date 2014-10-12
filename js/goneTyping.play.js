'use strict';
(function () {
	var players = [],
		user, checkUserChoice, numberOfTries, randomizedWord;
	var getRandomWord = function () {
		randomizedWord = goneTyping.logic.getRandomWord();
		goneTyping.ui.displayRandomWord(randomizedWord);
	};
	var playSound = function (sound) {
		var audio = document.createElement('audio');
		audio.src = ('sound/' + sound + '.wav');
		audio.play();
	};
	checkUserChoice = function (buttonSelect) {
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
				//If input is correct
				if (input === randomizedWord) {
					playSound('correct');
					numberOfTries = numberOfTries + 1;
					//Checks if number is less than 2, then it shall randomize a new word.
					if (numberOfTries < 2) {
						getRandomWord();
					} // If numberoftries is 2 or larger then go and start round for next player 
					else {
						goneTyping.timer.stop();
						goneTyping.logic.addTimeToPlayer(players[user], goneTyping.timer.getTime());
						user = user + 1;
						goneTyping.timer.start();
						// if users are more than max users, end game and draw a scoreboard.
						if (user >= players.length) {
							goneTyping.ui.clearScreen();
							goneTyping.ui.showScoreboard(players);
							$('#scoreboard').show(1000);
							$('#userInput').unbind('change');
							return;
						}
						goneTyping.ui.displayPlayer(players[user].player);
						getRandomWord();
						numberOfTries = 0;
					}
				} //If input is wrong 
				else if (input !== randomizedWord) {
					playSound('false');
					$('#userInput').effect('shake');
					goneTyping.timer.penaltyTime();
				} else {
					getRandomWord();
				}
			});
		} //PLAYERS BUTTON
		else if (buttonSelect === 'Players') {
			goneTyping.ui.clearScreen();
			$('#randomWord').children('h3').text('Add a player');
			$('#userInput').change(function () {
				players = goneTyping.logic.createPlayers($(this).val());
				$(this).effect('transfer', {
					to: $('#addPlayersButton')
				}, 500);
			});
		}

	};

	$('.buttons').children().on('click', function () {
		checkUserChoice($(this).text());
	});
}());