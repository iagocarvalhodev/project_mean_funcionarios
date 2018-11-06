const Funcionario = require('../models/funcionario');

const funcionarioController = {};

funcionarioController.getFuncionarios = async (req, res) => {
    const funcionarios = await Funcionario.find();
    res.json(funcionarios);
}

funcionarioController.createFuncionario = async (req, res) =>  {
    const funcionario = new Funcionario(req.body);
    await funcionario.save();
    res.json(funcionario);
}

funcionarioController.showFuncionario = (req, res) => {
    res.json({
        status: 'Mostrar usuario com a id'
    })
}

funcionarioController.updateFuncionario = (req, res) => {

}

funcionarioController.deleteFuncionario = (req, res) => {

}



module.exports = funcionarioController;