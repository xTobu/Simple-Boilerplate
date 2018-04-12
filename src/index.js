import $ from 'jquery';
import axios from 'axios';
import qs from 'qs';

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

	var axiosGetData = () => {
		return new Promise((resolve, reject) => {
			axios
				.get('')
				.then(function(response) {
					//console.log(response.data);
					resolve(response.data);
				})
				.catch(function(error) {
					console.log(error);
				});
		});
	};

	axios
		.get('')
		.then(function(response) {
			console.log(response.data);
		})
		.catch(function(error) {
			console.log(error);
		});

	var jsonBody = {};

	axios
		.post(
			'',
			qs.stringify(jsonBody)
		)
		.then(function(response) {
			console.log(response.data);
		})
		.catch(function(error) {
			console.log(error);
		});

	$.ajax({
		processData: false,
		type: 'POST',
		url: '',
		dataType: 'json',
		contentType: 'application/json; charset=utf-8',
		data: JSON.stringify(jsonBody),
		success: function(data) {
			console.log('device control succeeded');
		},
		error: function() {
			console.log('Device control failed');
		},
	});
	async function get() {
		const x = await axios.get(
			''
		);
		console.log(x.data);
	}
	get();
};
