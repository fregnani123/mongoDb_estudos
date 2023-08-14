const express = require('express');
const routes = express.Router();
const controllers = require('./controller/controllers')

routes.post('/person', controllers.novoCadastro)

routes.delete('/delete',controllers.deletaCadastro)

routes.get('/todos',controllers.todosOsCadastros)

routes.get ('/person/:id', controllers.encontrarUm)

module.exports = routes;
