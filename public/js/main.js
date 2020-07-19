function showForm(formId) {
	var element = document.getElementById('contact');

	console.log('function fired');

	if (element.style.display === 'flex') {
		element.style.display = 'none';
	} else {
		element.style.display = 'flex';
	}
}

var elements = document.getElementsByClassName('project-img');
console.log(elements);

for (let e of elements) {
	let animStatus = false;

	e.addEventListener('mouseenter', () => {
		console.log('Entered project-img div');
		let imgSplash = e.getElementsByClassName('img-splash')[0];
		imgSplash.classList.remove('img-splash-hide');
		imgSplash.classList.add('img-splash-show');

		let child = imgSplash.children[0];
		console.log(child);

		child.classList.add('reveal-splash-text');

		/* let children = imgSplash.children;
		console.log(children);
		for (let child of children) {
			child.style.opacity = '1';
		} */
	});

	e.addEventListener('mouseleave', () => {
		console.log('Leaving project-img div');
		let imgSplash = e.getElementsByClassName('img-splash')[0];
		imgSplash.classList.add('img-splash-hide');
		imgSplash.classList.remove('img-splash-show');

		let child = imgSplash.children[0];

		child.classList.remove('reveal-splash-text');
		/* child.style.display = 'none';
		child.style.opacity = '0'; */
		/* let children = imgSplash.children;
		console.log(children);
		for (let child of children) {
			child.style.opacity = '0';
		} */
	});
}

var links = document.querySelectorAll('a.req-anim');

console.log(links);
