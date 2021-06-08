const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    ip: { type: String, rqeuired: true }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;