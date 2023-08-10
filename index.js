const express = require('express');
const app = express();
require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');
const routes = require('./routes')

// Middleware para ler JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas da API
app.use('/',routes)

// Rota inicial
app.get('/', (req, res) => {
    res.json({ message: 'Express is running' });
});

mongoose.connect(process.env.DB_PASSWORD, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado ao MongoDB');
        app.listen(process.env.PORT, () => {
            console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
        });
    })
    .catch(e => {
        console.error('Erro ao conectar ao MongoDB:', e.message);
    });
