var poangPlayer1 = 0;
var poangPlayer2 = 0;
var slutPoang;
var name = [];
var player = 0;
var words = [
	'banana',
	'apple',
	'orange'
];
var rndWordPlayer1, rndWordsPlayer1, rndWordPlayer2, rndWordsPlayer2, userTypingPlayer1, userTypingPlayer2, reset;

var startGame = prompt('To star game please enter GO');
startGame = startGame.toUpperCase();
var hehe;

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

var gameReset = function () {
	if (player === 0) {
		for (var i = 0; i <= 3; i++) {
			if (userTypingPlayer1 === rndWordsPlayer1) {
				console.log('grattis');
				poangPlayer1 = poangPlayer1 + 1;
				typingPlayer1();
			} else {
				console.log('fail');
				poangPlayer1 = poangPlayer1 - 1;
				typingPlayer1();
			}
		}
		player = player + 1;
	}
	if (player === 1) {
		for (var y = 0; y <= 3; y++) {
			if (userTypingPlayer2 === rndWordsPlayer2) {
				console.log('grattis');
				poangPlayer2 = poangPlayer2 + 1;
				typingPlayer2();
			} else {
				console.log('fail');
				poangPlayer2 = poangPlayer2 - 1;
				typingPlayer2();
			}
		}
		if (poangPlayer1 >= poangPlayer2) {
			alert('Grattis! Player1 vann!');
		} else {
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
		gameReset();
	} else {
		alert('Plz donate money 4 weed');
	}
};


if (startGame === 'GO') {
	gameReset();
} else {
	prompt('please write GO to start game');
}