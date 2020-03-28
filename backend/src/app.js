const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

app.use(cors());

//estou dizendo pro express converter o objeto em formato json que recebeu na requisição
//em um objeto do javascript para que a aplicação possa entende-lo
app.use(express.json());
app.use(routes);

app.use(errors());

module.exports = app;