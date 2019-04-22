const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const database_config = require('./db/database.config');
const estado_controller = require('./controllers/estado.controller');
//const municipio_controller = require('./controllers/municipio.controller');

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(body_parser.urlencoded({extended: true}));

app.use(body_parser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/estados', estado_controller);

//app.use('/municipio', municipio_controller);

app.get('/', (req, res) => {
    res.send('it works');
});

mongoose.connect(database_config.db_url);

app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});