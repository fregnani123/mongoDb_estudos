const express = require('express');
const routes = express.Router();
const controllers = require('./controller/controllers')

routes.post('/person', controllers.novoCadastro)

module.exports = routes;
