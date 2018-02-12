var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "strolle_app",
  password: "walk",
  database: "strolle_db"
});

function setup_db() {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE strolle_db", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
  con.end()
}

function setup_paths_table() {
  con.connect(function(err) {
    var sql = "CREATE TABLE paths (ID int NOT NULL AUTO_INCREMENT, title VARCHAR(255),location_name VARCHAR(255),description TEXT,latitude FLOAT(50,25),longitude FLOAT(50,25), primary key (ID))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
}

function create_path(title, loc_name, description, lat, long) {
  t = title;
  loc = loc_name;
  d = description;
  lt = lat;
  ln = long;
  var path_insert = `INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES ("${t}", "${loc}", "${d}", ${lt}, ${ln})`;
  con.connect(function(err) {
    if (err) throw err;
    con.query(path_insert, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
}

function fetch_path(id, output){
  var path;
  con.connect(function(err) {
    if (err) throw err;
    var path_get = `SELECT title, location_name, description, latitude, longitude FROM paths WHERE ID = ${id}`;
    con.query(path_get, function (err, result, fields) {
      if (err) throw err;
      path = result[0];
      output(path)
    });
  });
}

var p = fetch_path(1, function(path));
console.log(p);
//console.log(p[0].title);
