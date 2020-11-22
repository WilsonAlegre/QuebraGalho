const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario'); 

// Middleware
router.use((req, res, next) => {
    console.log('Requisição: ' + req.method + ' em: ' + req.originalUrl);
    next();
});

// Create Usuario
router.post('/', (req, res) => {
    let usuario = new Usuario();
    
    // Setters
    usuario.usuario = req.body.usuario;
    usuario.senha = req.body.senha;
    usuario.nome = req.body.nome;
    usuario.cpf = req.body.cpf;
    usuario.cep = req.body.cep;
    usuario.logradouro = req.body.logradouro;
    usuario.numero = req.body.numero;
    usuario.complemento = req.body.complemento;
    usuario.bairro = req.body.bairro;
    usuario.estado = req.body.estado;
    usuario.municipio = req.body.municipio;
    usuario.email = req.body.email;
    usuario.telefone = req.body.telefone;
    usuario.telefone_secundario = req.body.telefone_secundario;
    
    usuario.save((error) => {
        if (error)
        res.send('Erro ao tentar salvar o Usuário: ' + error);
        
        res.json({ msg: 'Usuário cadastrado com sucesso!'});
    });
});

// Get Usuário by id
router.get('/:_id', (req, res) => {
    Usuario.findById(req.params._id, (error, usuario) => {
        if(error)
            res.send('Erro ao tentar retornar o usuário: ' + error);
            
        res.json(usuario);
    });
});

// Get all Uusários
router.get('/', (req, res) => {
    Usuario.find((error, usuarios) => {
        if (error)
            res.send('Erro ao tentar retornar todos os usuários: ' + error);
            
        res.json(usuarios);
    });
});

// Update Usuário by id
router.put('/:_id', (req, res) => {
    Usuario.findById(req.params._id, (error, usuario) => {
        if(error) 
            res.send('Erro ao encontrar o usuário: ' + error);
        
         // Setters
        usuario.usuario = req.body.usuario;
        usuario.senha = req.body.senha;
        usuario.nome = req.body.nome;
        usuario.cpf = req.body.cpf;
        usuario.cep = req.body.cep;
        usuario.logradouro = req.body.logradouro;
        usuario.numero = req.body.numero;
        usuario.complemento = req.body.complemento;
        usuario.bairro = req.body.bairro;
        usuario.estado = req.body.estado;
        usuario.municipio = req.body.municipio;
        usuario.email = req.body.email;
        usuario.telefone = req.body.telefone;
        usuario.telefone_secundario = req.body.telefone_secundario;

        usuario.save((error) => {
            if (error)
                res.send('Erro ao atualizar o usuário: ' + error);
            
            res.json({ mgs: 'Usuário atualizado com sucesso!' });
        });
    });
});

// Update Keypass Usuário by id
router.patch('/:_id', (req, res) => {
    Usuario.findById(req.params._id, (error, usuario) => {
        if(error) 
            res.send('Erro ao encontrar o usuário: ' + error);
        
        // Setters
        usuario.senha = req.body.senha;
        
        usuario.save((error) => {
            if (error)
                res.send('Erro ao atualizar a senha do usuário: ' + error);
            
            res.json({ mgs: 'Senha atualizada com sucesso!' });
        });
    });
});

// Delete Usuário by id
router.delete('/:_id', (req, res) => {
    Usuario.deleteOne({
        _id: req.params._id
    }, (error) => {
        if (error)
            res.send('Erro ao encontrar o usuário: ' + error);

        res.json({ msg: 'Usuário excluído com sucesso!' });
    });
});

// Exportando 
module.exports = router;