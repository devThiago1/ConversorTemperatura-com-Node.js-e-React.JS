//PREPARAMOS O EXPRESS E TORNAMOS UTILIZAVEL
const express = require('express');
const app = express();

//RECEBE UMA REQUISIÇÃO E DEVOLVE UMA REPOSTA
app.get('/', (req, res) => {
    res.send('ola, Mundo');
});

//MONITORA AS REQUISIÇÕES 
app.listen(8080, () => {
    let data = new Date();
 console.log('Servidor node iniciado e, :' +data);
 });
