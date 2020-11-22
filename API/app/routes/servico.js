const express = require('express');
const router = express.Router();

const Servico = require('../models/servico'); 

// Middleware
router.use((req, res, next) => {
    console.log('Requisição: ' + req.method + ' em: ' + req.originalUrl);
    next();
});

// Create Serviço
router.post('/', (req, res) => {
    let servico = new Servico();
    
    // Setters
    servico.categoria = req.body.categoria;
    servico.titulo = req.body.titulo;
    servico.valor = req.body.valor;
    servico.situacao = req.body.situacao;
    servico.descricao = req.body.descricao;
    
    
    servico.save((error) => {
        if (error)
        res.send('Erro ao tentar salvar o Serviço: ' + error);
        
        res.json({ msg: 'Serviço cadastrado com sucesso!'});
    });
});

// Get Serviço by id
router.get('/:id', (req, res) => {
    Servico.findById(req.params.id, (error, servico) => {
        if(error)
            res.send('Erro ao tentar retornar o serviço: ' + error);
            
        res.json(servico);
    });
});

// Get all Serviços
router.get('/', (req, res) => {
    Servico.find((error, servicos) => {
        if (error)
            res.send('Erro ao tentar retornar todos os serviços: ' + error);
            
        res.json(servicos);
    });
});

// Update Serviço by id
router.put('/:id', (req, res) => {
    Servico.findById(req.params.id, (error, servico) => {
        if(error) 
            res.send('Erro ao encontrar o serviço: ' + error);
        
        // Setters
        servico.categoria = req.body.categoria;
        servico.titulo = req.body.titulo;
        servico.valor = req.body.valor;
        servico.situacao = req.body.situacao;
        servico.descricao = req.body.descricao;

        servico.save((error) => {
            if (error)
                res.send('Erro ao atualizar o serviço: ' + error);
            
            res.json({ mgs: 'Serviço atualizado com sucesso!' });
        });
    });
});

// Delete Serviço by id
router.delete('/:id', (req, res) => {
    Servico.deleteOne({
        _id: req.params.id
    }, (error) => {
        if (error)
            res.send('Erro ao encontrar o serviço: ' + error);

        res.json({ msg: 'Serviço excluído com sucesso!' });
    });
});

// Exportando 
module.exports = router;