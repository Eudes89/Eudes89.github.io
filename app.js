// const express = require('express');
// const app = express();
// const path = require("path");

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/routes/index.html'));
// });

const express = require('express');
const app = express();

app.use(express.static(__dirname));

// app.use('/produtos', express.static(__dirname + '/routes/produtos.html'));
// app.use('/parceiros', express.static(__dirname + '/routes/parceiros.html'));
// app.use('/sobrenos', express.static(__dirname + '/routes/sobrenos.html'));
// app.use('/contato', express.static(__dirname + '/routes/contato.html'));

app.listen(3000);

// console.log('Conectado na Porta 3000');
// // console.log('Rotas conectadas por Express!');
// console.log('Abra localhost:3000 para ver mudanças.');

