const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smoothScrollElems.forEach(link => {
	link.addEventListener('click', (event) => {

		event.preventDefault() // убрал дефолтную прокрутку
		const id = link.getAttribute('href').substring(1) // достал id у кнопок и убрал #

		document.getElementById(id).scrollIntoView({
			behavior: 'smooth'
		});

	})
})