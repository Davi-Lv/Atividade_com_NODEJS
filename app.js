const express = require('express');

//Criando um objeto express 
const web = express();

//Manipulando o GET request 
web.get('/', (req, res) => {
    res.send('API rodando')
    res.end()
})

web.get('/pagina%20Em%20Branco', (req, res) => {
    res.send('PAGINA EM BRANCO')
    res.end()
})

//Numero da porta
const PORT = process.env.PORT || 5555;

//Servidor Setup
web.listen(PORT, console.log(`Servidor começou na porta ${PORT}`)); 
