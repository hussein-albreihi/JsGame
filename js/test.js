'use strict';


window.addEventListener('DOMContentLoaded', function () {
	console.log('test');
	var h1Item = document.querySelector('h1');

	function setClick() {
		console.dir(h1Item);
		h1Item.className = 'bombRightOut';
	}
	h1Item.onclick = setClick;
});