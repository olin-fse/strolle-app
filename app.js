var express = require('express');
var path = require('path');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var router = require('./API/api');


var dbConfig = require('./db.config.js')(process.env.NODE_ENV);

var con = mysql.createConnection(dbConfig);

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', router);          // Serve API requests

app.use(express.static(__dirname +'/frontend/public/')); //serves the index.html

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'frontend/public', 'index.html'))
});

con.connect(function(err) {
  if (err) throw err;
  console.log("DB connected to " + process.env.NODE_ENV);
});

app.close = function() {
  con.destroy();
  console.log("DB disconnected");
}

// listen for INT signal e.g. Ctrl-C
//process.on('SIGINT', app.close);

module.exports = app;
