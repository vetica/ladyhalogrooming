const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');

addEventListener('scroll', () => {
	header.classList.toggle('scrolled', scrollY > 8);
}, { passive: true });

toggle.addEventListener('click', () => {
	const open = nav.classList.toggle('open');
	toggle.setAttribute('aria-expanded', open);
	toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

nav.addEventListener('click', (event) => {
	if (event.target.closest('a')) {
		nav.classList.remove('open');
		toggle.setAttribute('aria-expanded', 'false');
	}
});

document.getElementById('year').textContent = new Date().getFullYear();
