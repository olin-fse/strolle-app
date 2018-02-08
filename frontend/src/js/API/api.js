var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "strolle_app",
  password: "walk"
});

function setup_db(data source name) {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE strolle_db", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
    var sql = "CREATE TABLE paths (ID int NOT NULL AUTO_INCREMENT, title VARCHAR(255),location_name VARCHAR(255),description TEXT,latitude DOUBLE(3,12),longitude DOUBLE(3,12))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
}

function create_path(title, loc_name, description, lat, long) {
  con.connect(function(err) {
    if (err) throw err;
    t = title;
    loc = loc_name;
    d = description;
    lt = lat;
    ln = long;
    var path_insert = "INSERT INTO paths (title, location_name, description, latitude, longtitude) VALUES (${t}, ${loc}, ${d}, ${lt}, ${ln}";
    con.query(path_insert, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

function fetch_path(id){
  con.connect(function(err) {
  if (err) throw err;
  var path_get = "SELECT title, location_name, description, latitude, longtitude FROM paths WHERE ID == ${id};"
  con.query(path_get, function (err, result, fields) {
    if (err) throw err;
    console.log(result); // do something about this
  });
});
}
