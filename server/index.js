const express = require('express');   //instanciando o express
const morgan = require('morgan'); //instanciando o morgan para ver as requisições no terminal

// inicializo o express na variavel app
const app = express();


// chamo meu arquivo de conexão com o banco de dados
const { mongoose } = require('./database');



// configurações
// declaro a porta que vou usar no servidor na variavel port
app.set('port', process.env.PORT || 3000);


// middlewares
app.use(morgan('dev'));  //inicializo o morgan
app.use(express.json());  //habilito minha aplicação receber dados em json


// routes
// chamo o arquivo de minhas rotas e declaro um namespace na rotas
app.use('/api/funcionarios/', require('./routes/routes'));


// starting the server

// seto a porta que o meu servidor vai ouvir.
app.listen(app.get('port'), () => {
    console.log('Server Listen port', app.get('port')); //mostra no terminal a porta que o servidor esta usando
})