const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    chatId: {
        type: 'string',
        required: true,
    },
    recieverId: {
        type: 'string',
        required: true
    },

    text: {
        type: 'string',
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);
