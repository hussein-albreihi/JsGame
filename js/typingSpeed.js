var poangPlayer1 = 0;
var poangPlayer2 = 0;
var name = [];
var player = 0;
var words = [
	'banana',
	'apple',
	'orange',
	'penis'
];
var rndWordPlayer1, rndWordsPlayer1, rndWordPlayer2, rndWordsPlayer2, userTypingPlayer1, userTypingPlayer2, reset, choose;


choose = prompt('choose a game: time or points');
choose = choose.toUpperCase();


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

var pointsGame = function () {
	if (player === 0) {
		alert('Player 1 get ready');
		for (var i = 0; i <= 3; i++) {
			if (userTypingPlayer1 === rndWordsPlayer1) {
				typingPlayer1();
				console.log('grattis');
				poangPlayer1 = poangPlayer1 + 1;
			} else {
				poangPlayer1 = poangPlayer1 - 1;
				console.log('fail');
				typingPlayer1();
			}
		}
		player = player + 1;
	}
	if (player === 1)
		alert('get ready player 2!'); {
		for (var y = 0; y <= 3; y++) {
			if (userTypingPlayer2 === rndWordsPlayer2) {
				typingPlayer2();
				console.log('grattis');
				poangPlayer2 = poangPlayer2 + 1;
			} else {
				poangPlayer2 = poangPlayer2 - 1;
				console.log('fail');
				typingPlayer2();
			}
		}
		if (poangPlayer1 >= poangPlayer2) {
			alert('Grattis! Player1 vann!');
		}
		if (poangPlayer1 === poangPlayer2) {
			alert('it\'s a draw!');
		}
		if (poangPlayer1 <= poangPlayer2) {
			alert('Grattis! Player2 vann!');
		}
		player = player + 1;
	}
	if (player === 2) {
		reset = prompt('would you like to play again? YES or NO');
	}
	if (reset === 'YES') {
		poangPlayer1 = 0;
		poangPlayer2 = 0;
		player = 0;
		pointsGame();
	} else {
		alert('Plz donate money 4 weed');
	}
};

var timeGame = function () {

};

switch (choose) {
case 'POINTS':
	pointsGame();
	break;
case 'TIME':
	timeGame();
	break;
default:
	alert('Please make a choice between time or points');
	choose = prompt('choose a game: time or points');
	choose = choose.toUpperCase();
	break;
}