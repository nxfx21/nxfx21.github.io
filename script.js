//ts compile /@HAR1tryhard/Project-XH201-Finale/script.ts /@HAR1tryhard/Project-XH201-Finale/script.js

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

if (menu) {
		menu.addEventListener('click', () => {
				menu.classList.toggle('is-active');
				if (menuLinks) {
						menuLinks.classList.toggle('active');
				}
		});
}

document.addEventListener("DOMContentLoaded", () => {
		const b1 = document.getElementById("b1");

		if (b1) {
				b1.addEventListener("click", () => {
						window.location.href = "https://science.nasa.gov/saturn/moons/titan/";
				});
		}
});