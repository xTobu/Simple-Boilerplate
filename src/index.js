import $ from 'jquery';
import { plus, minus } from './lib/math';

import css from './assets/css/index.css';
import './assets/scss/index.scss';

import gopher_src from './assets/img/gopher.png';

console.log('src/index');
plus(1, 2);
minus(3, 1);

//iife
(function() {
	console.log('IIFE');
})();

//document ready
$(function() {
	console.log('document.ready');
	// $('input').on('click', e => {
	// 	e.preventDefault();
	// 	console.log(e.currentTarget);
	// 	document.body.appendChild(appendImg());
	// });
});

//onload
window.onload = () => {
	console.log('window.onload');

	const appendImg = () => {
		var img = document.createElement('img');
		img.src = gopher_src;
		return img;
	};

	var btnNew = document.getElementById('new');

	btnNew.onclick = () => {
		document.getElementsByClassName('index')[0].appendChild(appendImg());
	};
};
