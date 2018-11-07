const Funcionario = require('../models/funcionario');

const funcionarioController = {};

// trazer todos os funcionarios
funcionarioController.getFuncionarios = async (req, res) => {
    const funcionarios = await Funcionario.find();
    res.json(funcionarios);
}

// criar um novo funcionario
funcionarioController.createFuncionario = async (req, res) =>  {
    const funcionario = new Funcionario(req.body);
    await funcionario.save();
    res.json(funcionario);
}

// trazer as informações de um funcionario especifico pelo id
funcionarioController.showFuncionario = async (req, res) => {
    const funcionario = await Funcionario.findById(req.params.id);
    res.json({ funcionario });
}

// atualizar informações do funcionario buscando ele pelo id
funcionarioController.updateFuncionario = async (req, res) => {
    const { id } = req.params;
    const funcionario = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }

    funcionarioupdate = Funcionario.findByIdAndUpdate(id, {$set: funcionario}, {new: true});
    res.json({ funcionarioupdate });
}

funcionarioController.deleteFuncionario = async (req, res) => {

}



module.exports = funcionarioController;