function showForm(formId) {
	var element = document.getElementById('contact');

	console.log('function fired');

	if (element.style.display === 'flex') {
		element.style.display = 'none';
	} else {
		element.style.display = 'flex';
	}
}
