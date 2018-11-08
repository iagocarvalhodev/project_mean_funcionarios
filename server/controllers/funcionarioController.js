const Funcionario = require('../models/funcionario');   //importo meu modelo para poder fazer operações no banco de dados

const funcionarioController = {};        //inicializo meu controller de funcionarios

// trazer todos os funcionarios
funcionarioController.getFuncionarios = async (req, res) => {
    const funcionarios = await Funcionario.find();
    res.json(funcionarios);
}

// criar um novo funcionario
funcionarioController.createFuncionario = async (req, res) =>  {
    const funcionario = new Funcionario({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
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
    const { id } = req.params; //traz o parametro id da rota
    const funcionario = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    //pega o id e depois atualiza os dados do funcionario contido no objeto funcionario, nao havendo funcionario com o id solicitado criar um novo funcionario. 
    funcionarioupdate = await Funcionario.findByIdAndUpdate(id, {$set: funcionario}, {new: true});   
    res.json({ funcionarioupdate });
}

// deletando funcionario
funcionarioController.deleteFuncionario = async (req, res) => {
    await Funcionario.findByIdAndDelete(req.params.id);
    res.json({ status: 'Funcionario Deletado' });
}



module.exports = funcionarioController;