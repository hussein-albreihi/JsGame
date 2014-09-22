var words = [
	'Sausage',
	'Tobacco',
	'Embezzle',
	'Rofl',
	'Lol',
	'snuskastare',
	'lassekronér',
	'Lewbowski',
	'Deathwalka',
	'skit'
];

var startTimer = new Date();
var endTimer = new Date();
var tries = 0;
var gameTime = 0;
var userTyping = prompt('Lets see how fast you can type - Type "GO" to start ');
userTyping = userTyping.toUpperCase();
points = 0;
startTimer = new Date();

var scores = {};
var scoreList = [];

function gameStart() {
	do {
		userTyping = prompt(rngWords = words[Math.floor(Math.random() * words.length)]);
		if (userTyping === rngWords) {
			console.log('correct! points:' + points);
			points++;
			tries++;
		} else {
			console.log('false');
			points--;
			tries++;

		}
	}
	while (tries < 2);

	alert("du vinner");
	if (gameTime === 0) {
		scores.player = (prompt("enter your name: "));
		scores.score = points;
		console.log(scores);
		scoreList.push(scores);
	} else {
		scores.player2 = (prompt("enter your name: "));
		scores.score2 = points;
		console.log(scores);
		scoreList.push(scores);
	}
	tries = 0;
	points = 0;
}

do {
	gameStart();
	gameTime++;
	if (gameTime < 2) {
		alert('get ready player 2');
	} else {
		alert('Whos the winner?');
		if (scores.score === scores.score2) {
			alert('it is a draw');
		}
		if (scores.score > scores.score2) {
			alert(scores.player + ' wins with ' + scores.score + ' points');
		}
		if (scores.score < scores.score2) {
			alert(scores.player2 + ' wins with' + scores.score2 + ' points');
		}
		alert('thank u for playing, donate ples');
		console.log(scoreList);
	}
} while (gameTime < 2);


userTyping = prompt('Restart? Y/N');
if (userTyping === 'Y') {
	GameStart();
}