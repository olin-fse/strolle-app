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
  this.con.query(stmt, function(err, result) {
    if (err) cb(err);
    cb(null);
  });
}

PathService.prototype.getPathByID = function(data, cb) {
  var stmt = `SELECT title, location_name, description, latitude, longitude FROM paths WHERE ID =` + data.pathID;
  this.con.query(stmt, function(err, result) {
    if (err) cb(err);
    cb(result[0]);
  });
}
module.exports = PathService;
