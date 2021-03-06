var mysql = require('mysql');

function PathService() {
    switch (process.env.NODE_ENV) {
        case 'TEST':
            this.con = mysql.createConnection({
                port: '3306',
                host: 'localhost',
                user: 'strolle_app',
                password: 'walk',
                database: 'strolle_test'
            });
            break;
        case 'PROD':
            this.con = mysql.createConnection({
                port: '3306',
                host: '35.231.72.92',
                user: 'root',
                password: '',
                database: 'strolle_db'
            });
            break;
        default:
            this.con = mysql.createConnection({
                port: '3306',
                host: '35.231.72.92',
                user: 'root',
                password: '',
                database: 'strolle_db'
            });
    }
  // this.con = mysql.createConnection({
  //   port: "3306",
  //   host: "localhost",
  //   user: "strolle_app",
  //   password: "walk",
  //   database: "strolle_test"
  // });
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
module.exports = PathService;
