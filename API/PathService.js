var mysql = require('mysql');
var dbconfig = require('../db.config.js')(process.env.NODE_ENV);
function PathService() {
  this.con = mysql.createConnection(dbconfig);
}

PathService.prototype.createPath = function(data, cb) {
  var stmt = 'INSERT INTO paths (title, location_name, description, latitude, longitude, userID) VALUES' +
    `("${data.title}", "${data.location_name}", "${data.description}", ${data.lat}, ${data.lng}, ${data.userID})`;
  this.con.query(stmt, function(err, result) {
    if (err) cb(err);
    cb(result);
  });
}

PathService.prototype.getPathByID = function(id, cb) {
  var stmt = `SELECT title, location_name, description, latitude, longitude, userID FROM paths WHERE ID =` + id;
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
  var stmt = 'INSERT INTO users (first, last, blurb, photo, email, pass, sessionKey) VALUES' +
    `("${data.first}", "${data.last}", "${data.blurb}", "${data.photo}", "${data.email}", "${data.pass}", "${data.sessionKey}")`;
  this.con.query(stmt, function(err, result) {
    if (err) cb(err);
    cb(result);
  });
}

PathService.prototype.getUserByID = function(id, cb) {
  var stmt = `SELECT first, last, blurb, photo FROM users WHERE ID =` + id;
  this.con.query(stmt, function(err, result) {
    if (err) return cb(err);
    cb(result[0]);
  });
}

PathService.prototype.updateUser = function(data, cb) {
  var changes = '';
  var value;
  for (var key in data) {
    value = data[key];
    changes = changes + key + `= "${value}", `;
  }
  changes = changes.slice(0, changes.length-2);
  var stmt = `UPDATE users SET ` + changes + ` WHERE email = "${data.email}"`;
  this.con.query(stmt, function(err, result) {
    if (err) cb(err);
    cb(result);
  });
}

PathService.prototype.getUserByEmail = function(email, cb) {
  var stmt = `SELECT first, last, blurb, photo FROM users WHERE email = "${email}"`;
  this.con.query(stmt, function(err, result) {
    if (err) return cb(err);
    cb(result[0]);
  });
}
module.exports = PathService;
