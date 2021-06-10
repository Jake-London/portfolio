const express = require('express');
const mongoose = require('mongoose');
// const mysql = require('mysql');

const app = express();

// const db = mysql.createConnection({
// 	host:		'localhost',
// 	user:		'jake',
// 	password:	'test',
// 	database:	'portfolio'
// });

// db.connect(function(err) {
// 	if (err) {
// 		console.log(err.stack);
// 		return;
// 	}

// 	console.log('Connected to mysql database');
// });

const db = require('./config/keys').MongoURI;



mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
}).then(() => console.log('Connected to MongoDB'));

app.use(express.static('public'));

app.use(express.json());

app.use('/', require('./routes/index'));

app.listen(5000, () => {
	console.log('Listening on port 5000');
});
