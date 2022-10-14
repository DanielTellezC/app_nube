const mongoose = require('mongoose');
const { mongodb } = require('./keys');
console.log(mongodb.URL, "Esta es la ur de la conexion de mongo");

mongoose.connect(mongodb.URL,{})
    .then(db => console.log('base de datos conectada'))
    .catch(err => console.error(err));