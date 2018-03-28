var mysql = require('mysql');
var dbconfig = require('../db.config.js')(process.env.NODE_ENV);
function PathService() {
  this.con = mysql.createConnection(dbconfig);
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
