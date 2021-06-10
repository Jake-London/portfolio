document.addEventListener('DOMContentLoaded', (e) => {

	const form = document.querySelector('#form-1');

	form.addEventListener('submit', async (e) => {
		e.preventDefault();

		const name = e.target.name.value;
		const email = e.target.email.value;
		const message = e.target.message.value;

		const data = {name, email, message};
		console.log(data);
		console.log(JSON.stringify(data));

		const response = await fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});

		const result = await response.json();

		console.log(result);

		// console.log(e.target.name.value);
		// console.log(e.target.email.value);
		// console.log(e.target.message.value);
	})

});


/* var elements = document.getElementsByClassName('project-img');
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
	});

	e.addEventListener('mouseleave', () => {
		console.log('Leaving project-img div');
		let imgSplash = e.getElementsByClassName('img-splash')[0];
		imgSplash.classList.add('img-splash-hide');
		imgSplash.classList.remove('img-splash-show');

		let child = imgSplash.children[0];

		child.classList.remove('reveal-splash-text');
	});
}

var links = document.querySelectorAll('a.req-anim');

console.log(links); */

var contact = document.querySelector('#contact');
console.log(contact);

window.onload = function() {
	function render() {
		ctx.fillStyle = 'rgb(0,0,0)';
		ctx.fillRect(0, 0, canvasWidth, canvasHeight);
		ctx.lineWidth = 1;

		var hueStart = rnd(0, 360);
		var triSide = 27;
		var halfSide = triSide / 2;
		var rowHeight = Math.floor(triSide * heightScale);
		var columns = Math.ceil(canvasWidth / triSide) + 1;
		var rows = Math.ceil(canvasHeight / rowHeight);

		var col, row;
		for (row = 0; row < rows; row++) {
			var hue = hueStart + row * 3;

			for (col = 0; col < columns; col++) {
				var x = col * triSide;
				var y = row * rowHeight;
				var clr;

				if (row % 2 != 0) {
					x -= halfSide;
				}

				// upward pointing triangle 216°, 97%, 15%
				clr = 'hsl(' + 216 + ', 97%, ' + rnd(10, 20) + '%)';
				ctx.fillStyle = clr;
				ctx.strokeStyle = clr;
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.lineTo(x + halfSide, y + rowHeight);
				ctx.lineTo(x - halfSide, y + rowHeight);
				ctx.closePath();
				ctx.fill();
				ctx.stroke(); // needed to fill antialiased gaps on edges

				// downward pointing triangle
				clr = 'hsl(' + 216 + ', 97%, ' + rnd(10, 20) + '%)';
				ctx.fillStyle = clr;
				ctx.strokeStyle = clr;
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.lineTo(x + triSide, y);
				ctx.lineTo(x + halfSide, y + rowHeight);
				ctx.closePath();
				ctx.fill();
				ctx.stroke();
			}
		}
	}

	function rnd(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function resizeCanvas() {
		canvasWidth = canvas.width = contact.offsetWidth;
		console.log(canvasWidth);
		canvasHeight = canvas.height = contact.offsetHeight / 2;

		contact.appendChild(canvas);

		render();
	}

	var contact = document.querySelector('#contact');
	var canvas = document.querySelector('canvas');
	var canvasWidth = (canvas.width = contact.offsetWidth);
	var canvasHeight = (canvas.height = contact.offsetHeight / 2);
	console.log(contact.offsetHeight);
	var ctx = canvas.getContext('2d');
	var heightScale = 0.866;
	render();
	contact.appendChild(canvas);
	window.addEventListener('resize', resizeCanvas);
};
