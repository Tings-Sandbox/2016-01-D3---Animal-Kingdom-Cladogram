var express = require('express');
var app = express();

console.log('__dirname',__dirname + '/data/cladogram.json')
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/data/cladogram.json'))

app.listen(3000);
console.log('Listening on port 3000');