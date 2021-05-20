const moreElems = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');


for (let i = 0; i < moreElems.length; i++) {
	const openModal = () => {
		modalElem.classList.remove('hidden');
	};

	const closeModal = () => {
		modalElem.classList.add('hidden');
	};

	moreElems[i].addEventListener('click', openModal);

	modalElem.addEventListener('click', (event) => {
		const target = event.target;
		if (target.classList.contains('overlay') || target.classList.contains('modal__close')) closeModal()
	})
}