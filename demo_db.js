var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "strolle_app",
  password: "walk"
});

function setup_db() {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE strolle_db", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
    var sql = "CREATE TABLE paths (ID int NOT NULL AUTO_INCREMENT,
       title VARCHAR(255),
       location_name VARCHAR(255),
       description TEXT,
       latitude DOUBLE(3,12),
       longitude DOUBLE(3,12))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

  });
}

function create_path(t, loc_name, blurb, lat, long) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

}
