const express = require('express');
const path = require('path');
const router = express.Router();
const nodemailer = require('nodemailer');

const Message = require('../models/Message');
const keys = require('../config/emailKeys');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: keys.user,
        clientId: keys.clientId,
        clientSecret: keys.clientSecret,
        refreshToken: keys.refreshToken,
        accessToken: keys.accessToken
    }
});


router.get('/', (req, res) => {
    console.log('Homepage requested');
    
	res.sendFile(path.join(__dirname, '..', 'public', 'homepage.html'), err => {
		if (err) throw err;
	});
});

router.get('/list', async (req, res) => {
    console.log('Listing Form Submissions');

    const submissions = await Message.find().sort({_id:-1});

    res.json(submissions);
})

router.post('/', async (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
    const message = req.body.message;
    const ip = req.headers['x-real-ip'] || 'No IP found';

	if (!name || !email || !message) {
		console.log('Undefined Value detected');
		res.json({msg: "Submission contained undefined values"});
	} else {

        const mail = {
            from: `Portfolio Form Submission - jakelondon.me <${keys.user}>`,
            to: `${keys.sendTo}`,
            subject: "Contact Form Submitted",
            text: `Name: ${name}, Email: ${email}, Message: ${message}, IP: ${ip}`,
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p><p>IP: ${ip}</p>`
        };

        transporter.sendMail(mail, async function(err, info) {
            let sentEmail;

            if (err) {
                sentEmail = false;
                console.log(err);
            } else {
                sentEmail = true;
                // see https://nodemailer.com/usage
                console.log("info.messageId: " + info.messageId);
                console.log("info.envelope: " + info.envelope);
                console.log("info.accepted: " + info.accepted);
                console.log("info.rejected: " + info.rejected);
                console.log("info.pending: " + info.pending);
                console.log("info.response: " + info.response);
            }

            const newMessage = new Message({name, email, message, ip, sentEmail});
            const submission = await newMessage.save();
            console.log(submission);
            transporter.close();
        });

		res.json({msg: "Submission successful"});
	}
});

module.exports = router;