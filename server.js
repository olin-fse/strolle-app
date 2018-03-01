var express = require('express');
var path = require('path');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var router = require('./API/api');

var con = mysql.createConnection({
  host: "localhost",
  user: "strolle_app",
  password: "walk",
  database: "strolle_test"
});

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', router);          // Serve API requests

app.use(express.static(__dirname +'/frontend/public/')); //serves the index.html

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'frontend/public', 'index.html'))
})


app.listen(3000); //listens on port 3000 -> http://localhost:3000/

con.connect(function(err) {
  if (err) throw err;
  console.log("DB connected");
});

// listen for INT signal e.g. Ctrl-C
process.on ('SIGINT', function() {
  con.end();
  console.log("DB disconnected");
});
