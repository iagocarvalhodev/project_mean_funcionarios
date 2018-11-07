const mongoose = require('mongoose');     //inicializo o mongoose
const { Schema } = mongoose;              //inicializo o schema que esta em mongoose para poder criar o schema no banco


// crio o schema com todo os cabos e seus respectivos tipos no banco
const FuncionarioSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true }
});


module.exports = mongoose.model('Funcionario', FuncionarioSchema); //aqui crio o modelo no banco