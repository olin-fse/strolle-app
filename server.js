var express = require('express');
var path = require('path')
var app = express();

app.use(express.static(__dirname +'/frontend/public/')); //serves the index.html

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'frontend/public', 'index.html'))
})

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
