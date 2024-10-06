const menu = document.querySelector('#mobile-menu') as HTMLElement | null;
const menuLinks = document.querySelector('.navbar__menu') as HTMLElement | null;

menu?.addEventListener('click', () => {
		menu?.classList.toggle('is-active');
		menuLinks?.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
	const b1 = document.getElementById("b1") as HTMLButtonElement;

	b1.addEventListener("click", () => {
		window.location.href = "https://science.nasa.gov/saturn/moons/titan/";
	});

});