const mongoose = require('mongoose');


const municipio_schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    uf_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Estado'}
});


const municipios = module.exports = mongoose.model('Municipio', municipio_schema);

module.exports.findAll = (callback) => {
    municipios.find(callback);
}

module.exports.addMunicipio = (novo_municipio, callback) => {
    novo_municipio.save(callback);
}

module.exports.deleteMunicipioById = (id, callback) => {
    let query = {_id: id};
    municipios.remove(query, callback);
}