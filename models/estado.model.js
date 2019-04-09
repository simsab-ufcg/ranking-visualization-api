const mongoose = require('mongoose');


const estado_schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    uf: {
        type: String,
        required: true,
        unique: true
    }
});


const estados = module.exports = mongoose.model('Estado', estado_schema);

module.exports.findAll = (callback) => {
    estados.find(callback);
}