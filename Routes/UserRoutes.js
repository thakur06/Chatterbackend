const Router = require('express').Router();
const { signIn, login } = require('../Controllers/UserController');
Router.post('/login', login);
Router.post("/signIn", signIn);
module.exports = Router;
