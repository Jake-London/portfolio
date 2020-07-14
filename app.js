const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	console.log('Homepage requested');
	res.sendFile(path.join(__dirname, 'public', 'index.html'), err => {
		if (err) throw err;
	});
});

app.listen(5000, () => {
	console.log('Listening on port 5000');
});
