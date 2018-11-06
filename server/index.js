const express = require('express');
const morgan = require('morgan');
const app = express();


const { mongoose } = require('./database');



// configurações
app.set('port', process.env.PORT || 3000);


// middlewares
app.use(morgan('dev'));
app.use(express.json());


// routes
app.use('/api/funcionarios/', require('./routes/routes'));


// starting the server


app.listen(app.get('port'), () => {
    console.log('Server Listen port', app.get('port'));
})