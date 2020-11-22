/**
 * 
 * Descrição: Arquivo de modelo da classe  'Usuário'
 * Autor: Wilson.Alegre
 * Data de Criação: 21/11/2020
 * 
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
    usuario: String,
    senha: String,
    nome: String,
    cpf: String,
    cep: String,
    logradouro: String,
    numero: String,
    complemento: String,
    bairro: String,
    estado: String,
    municipio: String,
    email: String,
    telefone: String,
    telefone_secundario: String,
});

module.exports = mongoose.model('Usuario', UsuarioSchema);