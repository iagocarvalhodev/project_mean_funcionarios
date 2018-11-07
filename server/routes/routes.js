const express = require('express');     //inicializo o express
const router = express.Router();        //chamo o metodo Routes que esta em express para gerenciar minha rotas

// importando o controlador dos funcionarios
const FuncionarioController = require('../controllers/funcionarioController');


// segue todas as rotas do CRUD setando cada uma em uma função no controlador
router.get('/', FuncionarioController.getFuncionarios);
router.post('/', FuncionarioController.createFuncionario);
router.get('/:id', FuncionarioController.showFuncionario);
router.put('/:id', FuncionarioController.updateFuncionario);
router.delete('/:id', FuncionarioController.deleteFuncionario);


module.exports = router;