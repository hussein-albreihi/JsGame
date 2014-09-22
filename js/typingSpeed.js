var poangPlayer1 = 0;
var poangPlayer2 = 0;
var name = [];
var player = 0;
var words = [
	'banana',
	'apple',
	'orange'
];

var rndWordPlayer1 = Math.floor(Math.random() * words.length);
var rndWordsPlayer1 = words[rndWordPlayer1];
var rndWordPlayer2 = Math.floor(Math.random() * words.length);
var rndWordsPlayer2 = words[rndWordPlayer2];
var startGame = prompt('To star game please enter GO');
startGame = startGame.toUpperCase();
var hehe;

if (player === 0) {
	var userTyping = prompt('Type the word before the time runs out! ' + rndWordsPlayer1 + ' Poäng: ' + poangPlayer1);
} else {
	userTyping = prompt('Type the word before the time runs out! ' + rndWordsPlayer2 + ' Poäng: ' + poangPlayer2);
}

var typingPlayer1 = function () {
	rndWordPlayer1 = Math.floor(Math.random() * words.length);
	rndWordsPlayer1 = words[rndWordPlayer1];
	var userTypingPlayer1 = prompt('Type the word before the time runs out! ' + rndWordsPlayer1 + ' Poäng: ' + poangPlayer1);
};

var typingPlayer2 = function () {
	rndWordPlayer2 = Math.floor(Math.random() * words.length);
	rndWordsPlayer2 = words[rndWordPlayer2];
	var userTypingPlayer2 = prompt('Type the word before the time runs out! ' + rndWordsPlayer2 + ' Poäng: ' + poangPlayer2);
};

if (startGame === 'GO') {
	if (player === 0) {
		for (var i = 0; i <= 3; i++) {
			if (userTyping === rndWordsPlayer1) {
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
		for (var i = 0; i <= 3; i++) {
			if (userTyping === rndWordsPlayer2) {
				console.log('grattis');
				poangPlayer2 = poangPlayer2 + 1;
				typingPlayer2();
			} else {
				console.log('fail');
				poangPlayer2 = poangPlayer2 - 1;
				typingPlayer2();
			}
		}
	}

} else {
	startGame = prompt('To star game please enter GO');
}