const Chat = require("../Schema/ChatModel");

const createChat = async (req, res) => {
    try {

        const chat = await new Chat({
            members: [req.body.senderId, req.body.recieverId],
        });

        const newChat = await chat.save();
        res.status(200).send(newChat);

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
};

const userChats = async (req, res) => {

    try {

        const chat = await Chat.find({ members: { $in: [req.params.userId] } });

        res.status(200).send(chat);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}
const findChat = async (req, res) => {

    try {

        const chat = await Chat.findOne({ members: { $all: [req.params.firstId, req.params.secondId] } });

        res.status(200).send(chat);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}


module.exports = { userChats, createChat, findChat };