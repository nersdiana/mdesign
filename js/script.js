//"use strict";

//document.querySelector('#vid').autoplay=true;
let count = 0;
const video = document.querySelector('#vid');
video.autoplay = true;
video.muted = true;
video.loop = true;
video.play();

// //////////////////////////pause btn/////////
let btn = document.querySelector('#btn');
let ps = document.querySelector('.ps');
let pl = document.querySelector('.play');

btn.addEventListener('click', function () {
	count++;
	ps.classList.toggle('none');
	pl.classList.toggle('none');
	if (count % 2 !== 0) {
		video.pause();
	} else {
		video.play();
	}
})

///////////////////dark_mode/////////
let dark_mode = document.querySelector('#dark_mode');
let dark_mode2 = document.querySelector('#dark_mode2');
let pics = document.querySelectorAll('.pics');
let pics2 = document.querySelectorAll('.pics2');
let sec1 = document.querySelector("#sec1");
let h1 = document.querySelector("h1");
let nav = document.querySelector("nav");

dark_mode.addEventListener('click', function (e) { f1(e) })
dark_mode2.addEventListener('click', function (e) { f1(e) })

function f1(e) {
	count++;
	e.preventDefault();
	if (count % 2 !== 0) {
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white';
		pics.forEach(pic => {
			pic.style.backgroundColor = '#1c1b1d';
		});
		pics2.forEach(pic2 => {
			pic2.style.backgroundColor = '#1c1b1d';
		});
		sec1.style.backgroundColor = "#1c1b1d";
		h1.style.color = "white";
		nav.style.backgroundColor = "#1c1b1d";
	} else {
		document.body.style.backgroundColor = '';
		document.body.style.color = '';

		pics.forEach(pic => {
			pic.style.backgroundColor = '#f8f2f6';
		});
		pics2.forEach(pic2 => {
			pic2.style.backgroundColor = '#f8f2f6';
		});
		sec1.style.backgroundColor = "#f8f2f6";
		h1.style.color = "#1c1b1d";
		nav.style.backgroundColor="#F2ECEE";
	}
}



