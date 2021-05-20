const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');


const toggleMenu = () => {
	menuElem.classList.toggle('menu-active');
	humburgerElem.classList.toggle('humburger-menu-active');
}

const closeMenu = () => {
	menuElem.classList.remove('menu-active');
	humburgerElem.classList.add('humburger-menu-active');
}

menuElem.addEventListener('click', (event) => {

	const target = event.target;
	if (target.classList.contains('menu-list__link')) closeMenu()
})

humburgerElem.addEventListener('click', toggleMenu);