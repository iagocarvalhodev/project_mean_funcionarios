const express = require('express');
const router = express.Router();

// importando o controle dos funcionarios
const FuncionarioController = require('../controllers/funcionarioController');



router.get('/', FuncionarioController.getFuncionarios);
router.post('/', FuncionarioController.createFuncionario);
router.get('/:id', FuncionarioController.showFuncionario);
router.put('/:id', FuncionarioController.updateFuncionario);
router.delete('/:id', FuncionarioController.deleteFuncionario);


module.exports = router;