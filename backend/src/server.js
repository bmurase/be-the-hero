const app = require('./app');

//chamada listen foi separada do app.js (antigo index.js) para
//que o app.js possa ser testado sem rodar a aplicação na porta 3333
app.listen(3333);