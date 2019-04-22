const mongoose = require('mongoose');


const estado_schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    imd_d: {
        type: Number,
        required: true
    },
    imd_f: {
        type: Number,
        required: true
    },
    imd_i: {
        type: Number,
        required: true
    },
    imd_p: {
        type: Number,
        required: true
    },
    imd_r: {
        type: Number,
        required: true
    },
    imd_e: {
        type: Number,
        required: true
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

module.exports.addEstado = (novo_estado, callback) => {
    novo_estado.save(callback);
}

module.exports.deleteUFById = (id, callback) => {
    let query = {_id: id};
    estados.remove(query, callback);
}