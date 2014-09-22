var words = [
	'korv',
	'penisballe',
	'rumpnisse',
];

var userScore = 0;
var userScore2 = 0;
var gameTimer = 0;
var gameTimer2 = 0;
var startTimer = new Date();
var endTimer = new Date();
var startTimer2 = new Date();
var endTimer2 = new Date();
var timeSaver = [];
var timeSaver2 = [];

function game() {
	startTimer = new Date();
	console.log(startTimer);
	do {
		rngWords = words[Math.floor(Math.random() * words.length)];
		userInput = prompt(rngWords + ' \n type it motherfucker!');
		if (userInput === rngWords) {
			console.log('good');
			userScore++;
			gameTimer++;
		} else {
			console.log('noob');
			gameTimer++;
			startTimer.setSeconds(startTimer.getSeconds() - 10);
		}
	} while (gameTimer < 3);
	endTimer = new Date();
	var responseTime = (endTimer.getTime() - startTimer.getTime()) / 1000;
	console.log(responseTime + ' player 1');
	timeSaver.push(responseTime);


}

function game2() {
	startTimer2 = new Date();
	do {
		rngWords = words[Math.floor(Math.random() * words.length)];
		userInput = prompt(rngWords + ' \n type it motherfucker!');
		if (userInput === rngWords) {
			console.log('good');
			userScore2++;
			gameTimer2++;
		} else {
			console.log('noob');
			gameTimer2++;
			startTimer2.setSeconds(startTimer2.getSeconds() - 10);
		}
	} while (gameTimer2 < 3);
	endTimer2 = new Date();
	var responseTime2 = (endTimer2.getTime() - startTimer2.getTime()) / 1000;
	console.log(responseTime2);
	timeSaver2.push(responseTime2);

}

game();
alert('get ready player 2');
game2();
results();

function results() {
	if (timeSaver < timeSaver2) {
		console.log('player1 winner ' + timeSaver);
	} else {
		console.log('player 2 winner ' + timeSaver2);
	}
}