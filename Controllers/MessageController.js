const MessageModel = require("../Schema/Messages")

const addMessage = async(req,res) => {
const{chatId ,text,senderId} =req.body;
const message =new MessageModel({chatId,text,senderId});

}

const getMessagesMessage = async(req,res) => {

}

module.exports ={addMessage, getMessagesMessage}