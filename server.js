var express = require('express');
var app = express();

app.use(express.static(__dirname + '/assets'));

var port = process.env.PORT || 3000
app.listen(port);

