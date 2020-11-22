/**
 * Descrição: API Rest - QuebraGalho
 * Autor: Wilson Alegre
 * Data de Criação:  21/11/2020
 * 
*/

//Chamadas dos pacotes:
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usuarios = require('./app/routes/usuario');
const servicos = require('./app/routes/servico');
const app = express()

// Config para evitar alguns erros por conta do ES6
mongoose.Promise = global.Promise;

// Conexão local
mongoose.connect('mongodb://localhost:27017/api', { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log('MongoDB Conectado...');
}).catch((error) => {
    console.log('Algo deu errado ao se conectar com o MongoDB: ' + error);
});

// Configuração da variável app para usar o 'bodyParser()':
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// ROTAS DA API
    // Préfixo de usuários
    app.use('/usuarios', usuarios);
    // Préfixo de serviços
    app.use('/servicos', servicos);

// OUTROS
// Definindo a porta da API:
let PORT = process.env.port || 8000;

// Inciiando a aplicação (servidor):
app.listen(PORT, () => {
    console.log("Iniciando a app na porta " + PORT);
});