var express = require('express');
var path = require('path');


var mysql = require('mysql');


var router = express.Router();

var con = mysql.createConnection({
  host: "localhost",
  user: "strolle_app",
  password: "walk",
  database: "strolle_db"
});

router.route('/paths')
    // Create a new paths.
    .post(function(req, res) {
        //path = JSON.parse(req.body)
        //console.log(req.body.key, req.body.name);
        res.send(req.body.name);
        // var t = req.title;
        // var loc = req.loc_name;
        // var d = req.description;
        // var lt = req.lat;
        // var ln = req.long;
        // var path_insert = `INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES ("${t}", "${loc}", "${d}", ${lt}, ${ln})`;
        con.connect(function(err) {
          if (err) throw err;
          con.query(path_insert, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
          });
        });
        // console.log("Successfully POSTing")
    })

router.route('/paths/:pathID')
    // Get a path by ID
    .get(function(req, res) {
        var id = req.id;
        var path;
        con.connect(function(err) {
          if (err) throw err;
          var path_get = `SELECT title, location_name, description, latitude, longitude FROM paths WHERE ID = ${id}`;
          con.query(path_get, function (err, result, fields) {
            if (err) throw err;
            path = result[0];
            res.json(path);
          });
        });
        console.log("Successfully GETing")
    })

    // Modify a path
    .put(function(req, res) {

        console.log("Successfully PUTing")
    })

    // Delete a path
    .delete(function(req, res) {
        con.connect(function(err) {
          if (err) throw err;
          var sql = `DELETE FROM paths WHERE ID = ${id}`;
          con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
          });
        });
        console.log("Successfully DELETing")
    })


module.exports = router;

/*

var con = mysql.createConnection({
  host: "localhost",
  user: "strolle_app",
  password: "walk",
  database: "strolle_db"
});


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

*/
