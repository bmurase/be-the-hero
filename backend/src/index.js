const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

//estou dizendo pro express converter o objeto em formato json que recebeu na requisição
//em um objeto do javascript para que a aplicação possa entende-lo
app.use(express.json());
app.use(routes);

app.listen(3333);