const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
chatId:{
    typeof: 'string',
    required: true,
},
recieverId:{typeof: 'string', required: true},

text:{typeof: 'string', required: true},

},{timestamps:true});

module.exports=mongoose.model('Chat',ChatSchema);
