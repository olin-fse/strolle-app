var express = require('express');
var path = require('path');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var router = require('./API/api');



// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use(express.static(__dirname +'/frontend/public/')); //serves the index.html

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'frontend/public', 'index.html'))
})

app.use('/api', router);          // Serve API requests

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
