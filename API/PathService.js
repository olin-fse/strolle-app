var mysql = require('mysql');

function PathService() {
  this.con = mysql.createConnection({
    host: "localhost",
    user: "strolle_app",
    password: "walk",
    database: "strolle_test"
  });
}

PathService.prototype.createPath = function(data, cb) {
  var stmt = 'INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES' +
    `("${data.title}", "${data.location_name}", "${data.description}", ${data.lat}, ${data.lng})`;
  var id = null;
  this.con.query(stmt, function(err, result) {
    if (err) cb(err);
    cb(result);
  });
}

PathService.prototype.getPathByID = function(id, cb) {
  var stmt = `SELECT title, location_name, description, latitude, longitude FROM paths WHERE ID =` + id;
  console.log(stmt);
  this.con.query(stmt, function(err, result) {
    console.log(err, result);
    if (err) return cb(err, null);
    console.log(result[0]);
    cb(null, result[0]);
  });
}

PathService.prototype.deletePath = function(id, cb) {
  var stmt = `DELETE FROM paths WHERE ID =` + id;
  this.con.query(stmt, function(err, result) {
    if (err) cb(err);
    cb(null);
  });
}
module.exports = PathService;
