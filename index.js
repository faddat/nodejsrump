var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.end('Node JS is running on rumprun kernel in express! Requested url: ' + req.url);
});

var port =3000;
app.listen(port);

module.exports = app;
