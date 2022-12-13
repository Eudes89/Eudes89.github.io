const express = require('express');
const app = express();

app.use('/', express.static(__dirname));
app.use('/produtos', express.static(__dirname + '/produtos.html'));
app.use('/parceiros', express.static(__dirname + '/parceiros.html'));
app.use('/sobrenos', express.static(__dirname + '/sobrenos.html'));
app.use('/contato', express.static(__dirname + '/contato.html'));

app.listen(3000);




