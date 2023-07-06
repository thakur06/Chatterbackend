const mongoose = require('mongoose');
const ChatModel = new mongoose.Schema({
    members: { type: Array },

}, { timestamps: true });

module.exports = mongoose.model('Chat', ChatModel);
