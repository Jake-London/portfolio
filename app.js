const express = require('express');
const path = require('path');
/* const mysql = require('mysql'); */

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({
	extended: true
}));

app.get('/', (req, res) => {
	console.log('Homepage requested');
	res.sendFile(path.join(__dirname, 'public', 'index.html'), err => {
		if (err) throw err;
	});
});

app.get('/contact', (req, res) => {
	console.log('contact requested');
	res.sendFile(path.join(__dirname, 'public', 'contact.html'), err => {
		if (err) throw err;
	})
})

app.post('/', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;

	console.log('==========================================');
	console.log(`Name: ${name}`);
	console.log(`Email: ${email}`);
	console.log(`Message: ${message}`);
	console.log('--------------------------')
	console.log(new Date());
	console.log('--------------------------')

	res.redirect('/');
})

app.listen(5000, () => {
	console.log('Listening on port 5000');
});
