'use strict';
$(function () {
	goneTyping.ui = {};
	//Taking in the random word, and displays it.
	//User have to enter the word as quickly as he can.
	$(document).ready(function () {
		setTimeout(function () {
			$('#popWord').addClass('magictime puffIn');
		}, 2000);
	});
	goneTyping.ui.setPlayerWord = function (word) {
		var playerWord = 'Word: ' + word;
		$('p').append('<p>' + word + '</p>');
		return String(playerWord.toLowerCase());
	};
	//Alerts the rules of the game.
	goneTyping.ui.showRules = function (time) {
		$('#showRules').show();
		setTimeout(function () {
			$('#showRules').hide();

		}, time);


		//$('#popWord').append('<p>' + 'Gone Typing \nThis is the game where you have to type the word displaying in the popup box as quickly as possible.\nIf you however misspell the word you will get penalty time.\nBe sure to write correct AND fast.\nGood luck and have fun.' + '</p>');
		//alert('Gone Typing \nThis is the game where you have to type the word displaying in the popup box as quickly as possible.\nIf you however misspell the word you will get penalty time.\nBe sure to write correct AND fast.\nGood luck and have fun.');
	};

	//A fine little bugtesting board, mainly for bugs but mostly for UI
	goneTyping.ui.displayTypedWords = function (playerWord, randomWord, player) {
		console.log('________________________________');
		console.log('Word was: ' + randomWord);
		console.log(player + ' typed: ' + playerWord);
	};

	//Ask how many players it should should store in the nOP variable.
	goneTyping.ui.getTotalPlayers = function () {
		$('#popWord').append('<p>' + 'Please enter the number of players!');
		return $('#userInput').val();
	};
	//Ask user for name of each player.
	goneTyping.ui.getPlayerNames = function (numberOfPlayer) {
		var grammar = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth', 'tenth'];
		//var playerName = prompt('What is the name of the ' + grammar[numberOfPlayer] + ' player');
		$('#popWord').text('What is the name of the ' + grammar[numberOfPlayer] + ' player');

		return $('#userInput').val();
	};

	//Ask user how many rounds he/she wanna play. Cannot set less than zero or zero.
	goneTyping.ui.getNumberOfTries = function () {
		$('.words').val().each(function () {
			console.log($('#userInputWords'));

		});
	};

	//Prompt user to ready up
	goneTyping.ui.getReady = function (player) {
		alert('Get ready player ' + player);
	};

	//Displaying the winner.
	goneTyping.ui.displayWinner = function (winner, players) {
		console.log('__Scoreboard____________________');
		for (var i = 0; i < players.length; i++) {
			console.log('Player: ' + players[i].player + ' --- ' + 'Time: ' + players[i].playerTime);
		}
		console.log('________________________________');
		alert('The winner is: ' + winner);
	};

});


var hideAllPanels, showSelectedPanel, removeActiveClassFromAllButtons, addActiveClassToSelectedButton, setButtonClick, i,
	buttons = document.querySelectorAll('.menubar > div'),
	panels = document.querySelectorAll('.panel');

hideAllPanels = function () {
	var i;
	for (i = 0; i < panels.length; i = i + 1) {
		panels[i].style.display = 'none';
	}
};
showSelectedPanel = function (index) {
	panels[index].style.display = 'block';

};
removeActiveClassFromAllButtons = function () {
	var i;
	for (i = 0; i < buttons.length; i = i + 1) {
		buttons[i].className = '';
	}

};
addActiveClassToSelectedButton = function (button) {
	button.className = 'menuActive';
};
setButtonClick = function (numberClickedOn) {
	buttons[numberClickedOn].onclick = function () {
		hideAllPanels();
		showSelectedPanel(numberClickedOn);
		removeActiveClassFromAllButtons();
		addActiveClassToSelectedButton(buttons[numberClickedOn]);
	};
};
for (i = 0; i < buttons.length; i = i + 1) {
	setButtonClick(i);
}