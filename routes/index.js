const express = require('express');
const path = require('path');
const router = express.Router();

const Message = require('../models/Message');

router.get('/', (req, res) => {
    console.log('Homepage requested');
    
	res.sendFile(path.join(__dirname, '..', 'public', 'homepage.html'), err => {
		if (err) throw err;
	});
});

router.post('/', (req, res) => {
	console.log(req.body);
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;

    console.log(req.headers['x-forwarded-for']);
    console.log(req.headers['x-real-ip']);
    console.log(req.connection.remoteAddress);

	if (!name || !email || !message) {
		console.log('Undefined Value detected');
		res.json({msg: "Submission contained undefined values"});
	} else {
		console.log('==========================================');
		console.log(`Name: ${name}`);
		console.log(`Email: ${email}`);
		console.log(`Message: ${message}`);
		console.log('--------------------------')
		console.log(new Date());
		console.log('--------------------------')
		res.json({msg: "Submission successful"});
	}
});

module.exports = router;