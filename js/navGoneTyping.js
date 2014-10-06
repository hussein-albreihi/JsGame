'use strict';
document.addEventListener('DOMContentLoaded', function () {
	console.log('load');
	var buttons = document.getElementById('menuButton');

	buttons.addEventListener('click', function () {
		console.log('derp');

		goneTyping.play();

	});

});