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

module.exports = PathService;
