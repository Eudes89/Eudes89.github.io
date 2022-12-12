const express = require('express');
const app = express();

app.use('/', express.static(__dirname, 'index'));


app.listen(3000);

