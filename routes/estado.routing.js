const express = require('express');
const estado = require('../models/estado.model');

const router = express.Router();

router.get('/', (req, res) => {
    estado.findAll((err, estados)=> {
      if (err) {
        res.json({success: false, message: 'falha ao listar os estados'});
      } else {
        res.write(JSON.stringify({success: true, estados: estados}, null, 2));
        res.end();
      }
    });
});

router.post('/', (req, res) => {
  res.send('POST request to the homepage')
});

router.delete('/:id', (req,res,next) => {
    res.send('delete route')
});


module.exports = router;