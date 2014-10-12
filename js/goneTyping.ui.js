'use strict';
$(function () {
	goneTyping.ui = {};
	//Taking in the random word, and displays it.
	//User have to enter the word as quickly as he can.
	goneTyping.ui.clearScreen = function () {
		$('h3').text('');
		$('h2').text('');
		$('#userInput').val('');
	};
	goneTyping.ui.displayRandomWord = function (word) {
		$('#randomWord').children('h3').text(word);
		console.log('The word is: ' + word);
	};

	//Prompt user to ready up
	goneTyping.ui.displayPlayer = function (player) {
		$('h2').text(player + '\'s turn');
	};

	goneTyping.ui.showScoreboard = function (players) {
		$(players).each(function (player) {
			$('ul').append('<li>Name: ' + players[player].player + '<br/>Time: ' + players[player].playerTime + '<br/></li>');
		});
	};

});