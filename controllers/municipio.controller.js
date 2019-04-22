const mongoose = require('mongoose');


const municipio_schema = mongoose.Schema({
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


const municipios = module.exports = mongoose.model('municipio', municipio_schema);

module.exports.findAll = (callback) => {
    municipios.find(callback);
}

module.exports.addmunicipio = (novo_municipio, callback) => {
    novo_municipio.save(callback);
}

module.exports.deleteMunicipioById = (id, callback) => {
    let query = {_id: id};
    municipios.remove(query, callback);
}