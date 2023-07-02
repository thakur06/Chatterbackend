const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
chatId:{
    typeof: 'string',
    required: true,
},
recieverId:{typeof: 'string', required: true},

text:{typeof: 'string', required: true},

},{timestamps:true});

module.exports=mongoose.model('Message',MessageSchema);
