const mongoose = require('mongoose');   // inicializo o mongoose

// defino o meu banco de dados na varival URI
const URI = 'mongodb://localhost:27017/mean-crud';

// abro conexao com o banco de dados mongodb
mongoose.connect(URI, { useNewUrlParser: true })
    .then(db = console.log('DB is connected'))
    .catch(err => console.log(err));


module.exports = mongoose;  // exporto o mongoose