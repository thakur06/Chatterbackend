const Router = require('express').Router();

Router.post('/',createChat);
Router.get("/:userId",userChats);
Router.get("/find/:firstId/:secondId",findChat);
module.exports = Router;
