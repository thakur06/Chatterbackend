const Router = require('express').Router();
const { createChat, userChats, findChat } = require('../Controllers/chatController')
Router.post('/', createChat);
Router.get("/:userId", userChats);
Router.get("/find/:firstId/:secondId", findChat);
module.exports = Router;
