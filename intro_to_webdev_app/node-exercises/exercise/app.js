var express = require('express');
var app = express();

app.get('/cheer.txt', function(request, response) {
    response.end('You have quite lovely eyes.');
});

app.get('/jeer.txt', function(request,response) {
    response.end('You have rather black eyes.');
});

var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});