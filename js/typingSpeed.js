'use strict';

var poangPlayer1 = 0;
var poangPlayer2 = 0;
var player = 1;
var words = [
	'banana',
	'apple',
	'orange',
	'penis'
];
var rndWordPlayer1, rndWordsPlayer1, rndWordPlayer2, rndWordsPlayer2, userTypingPlayer1, userTypingPlayer2, userChoice;

//Kan nog kortas ned. Gör ett obj?(oändligt många spelare.)
//Spelare.
var typingPlayer1 = function () {
	rndWordPlayer1 = Math.floor(Math.random() * words.length);
	rndWordsPlayer1 = words[rndWordPlayer1];
	userTypingPlayer1 = prompt('Type the word before the time runs out! ' + rndWordsPlayer1 + ' Poäng: ' + poangPlayer1);
};

var typingPlayer2 = function () {
	rndWordPlayer2 = Math.floor(Math.random() * words.length);
	rndWordsPlayer2 = words[rndWordPlayer2];
	userTypingPlayer2 = prompt('Type the word before the time runs out! ' + rndWordsPlayer2 + ' Poäng: ' + poangPlayer2);
};
//Experiment
/*
var addPlayers = function (name) {
	var that = {};
	that.playerName = name;
	that.playerPoints = 0;
	return that;
};
*/
// Ställer player om värderna
var resetGame = function () {
	poangPlayer1 = 0;
	poangPlayer2 = 0;
	player = 1;
};
//Själva spelfunktionen med alla finesser.
var pointsGame = function () {
	if (player === 1) {
		alert('Player 1 get ready');
		alert(userTypingPlayer1);
		for (var i = 0; i < 3; i++) {
			//denna ifsats makes no sense( båda är undefined.), måste göras om.
			if (userTypingPlayer1 === rndWordsPlayer1) {
				typingPlayer1();
				poangPlayer1 = poangPlayer1 + 1;
				console.log(poangPlayer1);
			} else {
				poangPlayer1 = poangPlayer1 - 1;
				typingPlayer1();
				console.log(poangPlayer1);
			}
		}
		player = player + 1;
		console.log('____________________________');
	}
	if (player === 2) {
		alert('get ready player 2!'); {
			for (var y = 0; y < 3; y++) {
				if (userTypingPlayer2 === rndWordsPlayer2) {
					typingPlayer2();
					poangPlayer2 = poangPlayer2 + 1;
					console.log(poangPlayer2);

				} else {
					typingPlayer2();
					poangPlayer2 = poangPlayer2 - 1;
					console.log(poangPlayer2);
				}
			}
			player = player + 1;
			if (poangPlayer1 > poangPlayer2) {
				alert('Grattis! Player1 vann!');
			} else if (poangPlayer1 < poangPlayer2) {
				alert('Grattis! Player2 vann!');
			} else if (poangPlayer1 === poangPlayer2) {
				alert('Det blev lika');
			}
		}
	}
};

var timeGame = function () {
	alert('Max game kommer snart implementeras');
};


//Switch funktion som kollar användarens input efter vilket typ av spel den vill köra.
var startOptions = function () {
	resetGame();

	userChoice = prompt('choose a game: time or points').toUpperCase();
	switch (userChoice) {
	case 'POINTS':
		pointsGame();
		break;
	case 'TIME':
		timeGame();
		break;
	default:
		alert('Please make a choice between time or points');
		startOptions();
		break;
	}
};