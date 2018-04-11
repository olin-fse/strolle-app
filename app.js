var express = require('express');
var path = require('path');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var router = require('./API/api');


var sess = require('express-session');
var Store = require('express-session').Store;
var BetterMemoryStore = require('session-memory-store')(sess);
var flash = require('connect-flash');
var passport = require('passport');


var store = new BetterMemoryStore({expires: 60 * 60 * 1000, debug: true});



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


//Passport Stuff
app.use(sess({
    name: "JESSION",
    secret: "MYSECRET", //TODO change
    store: store,
    resave: true,
    saveUninitialized: true
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


// listen for INT signal e.g. Ctrl-C
//process.on('SIGINT', app.close);

module.exports = app;
