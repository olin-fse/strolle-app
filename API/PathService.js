var mysql = require('mysql');
var dbconfig = require('../db.config');
function PathService() {
  this.con = mysql.createConnection({ //change to nodeenv
    port: "3306",
    host: 'localhost', // dbconfig.host
    user: 'strolle_app_test', // dbconfig.user
    password: 'walk', // dbconfig.password
    database: 'strolle_test' // dbconfig.database
  });
}

PathService.prototype.createPath = function(data, cb) {
  var stmt = 'INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES' +
    `("${data.title}", "${data.location_name}", "${data.description}", ${data.lat}, ${data.lng})`;
  this.con.query(stmt, function(err, result) {
    if (err) cb(err);
    cb(result);
  });
}

PathService.prototype.getPathByID = function(id, cb) {
  var stmt = `SELECT title, location_name, description, latitude, longitude FROM paths WHERE ID =` + id;
  this.con.query(stmt, function(err, result) {
    if (err) return cb(err);
    cb(result[0]);
  });
}

PathService.prototype.deletePath = function(id, cb) {
  var stmt = `DELETE FROM paths WHERE ID =` + id;
  this.con.query(stmt, function(err, result) {
    if (err) cb(err);
    cb(null);
  });
}

PathService.prototype.createUser = function(data, cb) {
  var stmt = 'INSERT INTO users (name, blurb, photo) VALUES' +
    `("${data.name}", "${data.blurb}", "${data.photo}")`;
  this.con.query(stmt, function(err, result) {
    if (err) cb(err);
    cb(result);
  });
}

module.exports = PathService;
