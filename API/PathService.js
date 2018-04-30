var mysql = require('mysql');
var pbkdf2 = require('pbkdf2')
var dbconfig = require('../db.config.js')(process.env.NODE_ENV);
var salt = '22adc9ea14a7a14fe5888e579db67e302ec54892';

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
    var derivedKey = pbkdf2.pbkdf2Sync(data.pass, salt, 1, 32, 'sha512');
    console.log(derivedKey.toString('hex'));
    var stmt = 'INSERT INTO users (first, last, blurb, photo, email, pass) VALUES' +
        `("${data.first}", "${data.last}", "${data.blurb}", "${data.photo}", "${data.email}", "${derivedKey.toString('hex')}")`;
    this.con.query(stmt, function(err, result) {
    if (err) cb(err);
        cb(result);
    });
}

PathService.prototype.getUserByID = function(id, cb) {
  var stmt = `SELECT first, last, blurb, photo, email FROM users WHERE ID =` + id;
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
  var stmt = `SELECT * FROM users WHERE email = "${email}"`;
  this.con.query(stmt, function(err, result) {
    if (err) return cb(err);
    cb(result[0]);
  });
}

module.exports = PathService;
