const express = require('express');
const estado = require('../models/estado.model');

const router = express.Router();

// busca e lista todos os estados
router.get('/', (req, res) => {
    estado.findAll((err, estados)=> {
      if (err) {
        res.json({success: false, message: err});
      } else {
        res.write(JSON.stringify({success: true, estados: estados}, null, 2));
        res.end();
      }
    });
});

router.post('/', (req, res) => {
  let novo_estado = new estado({
      nome: req.body.nome,
      uf: req.body.uf
  });
  estado.addEstado(novo_estado, (err, estados) => {
    if (err) {
      res.json({success: false, message: err});
    } else {
      res.json({success: true, message: 'estado cadastrado com sucesso'});
    }
  });
});

router.delete('/:id', (req,res,next) => {
    let id = req.params.id;
    
    estado.deleteUFById(id, (err, estado_removido) =>{
        if (err) {
          res.json({success: false, message: 'falha ao remover o estado'});
        } else if (id) {
          res.json({success: true, message: 'estado removido com sucesso'});
        } else {
          res.json({success: false});
        }
    });
});

module.exports = router;