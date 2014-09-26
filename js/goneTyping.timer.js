'use strict';
goneTyping.timer = {};
goneTyping.timer = (function () {
	var resultTime;
	var startTime = new Date(),
		endTime = new Date(),
		that = {};
	that.start = function () {
		startTime = new Date();
	};
	that.stop = function () {
		endTime = new Date();
	};
	that.getTime = function () {
		resultTime = (endTime.getTime() - startTime.getTime()) / 1000;
		return resultTime;
	};
	that.penaltyTime = function () {
		startTime.setSeconds(startTime.getSeconds() - 3);
	};
	return that;
}());