'use strict';
goneTyping.timer = {};
goneTyping.timer = (function () {
	var resultTime;
	var startTime = new Date(),
		endTime = new Date(),
		that = {};
	that.start = function () {
		startTime = new Date();
		console.log('Timer started' + startTime);
	};
	that.stop = function () {
		endTime = new Date();
		console.log('Timer stopped');
	};
	that.getTime = function () {
		resultTime = (endTime.getTime() - startTime.getTime()) / 1000;
		console.log('Timer getting time');
		return resultTime;
	};
	return that;
}());