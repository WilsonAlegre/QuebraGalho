/**
 * 
 * Descrição: Arquivo de modelo da classe  'Serviço'
 * Autor: Wilson.Alegre
 * Data de Criação: 22/11/2020
 * 
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ServicoSchema = new Schema({
    categoria: String,
    titulo: String,
    valor: Number,
    situacao: String,
    descricao: String,
}); 

module.exports = mongoose.model('Servico', ServicoSchema);