const { getMessagesMessage, addMessage } = require('../Controllers/MessageController');

const Router = require('express').Router();

Router.post("/", addMessage);
Router.get("/:chatId", getMessagesMessage);
module.exports = Router;
