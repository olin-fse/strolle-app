var express = require('express');
var path = require('path');


var mysql = require('mysql');


var router = express.Router();

var con = mysql.createConnection({
  host: "localhost",
  user: "strolle_app",
  password: "walk",
  database: "strolle_test"
});

router.route('/paths')
    // Create a new paths.
    .post(function(req, res) {
        var walk = req.body;
        var t = walk.title;
        var loc = walk.location_name;
        var d = walk.description;
        var lt = walk.lat;
        var ln = walk.lng;
        var walk_insert = `INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES ("${t}", "${loc}", "${d}", ${lt}, ${ln})`;
        con.connect(function(err) {
          if (err) throw err;
          con.query(walk_insert, function (err, result) {
            if (err) throw err;
            res.send("1 record inserted");
          });
        });
    })

router.route('/paths/:pathID')
    // Get a path by ID
    .get(function(req, res) {
        var id = req.params.pathID;
        var walk;
        con.connect(function(err) {
          if (err) throw err;
          var walk_get = `SELECT title, location_name, description, latitude, longitude FROM paths WHERE ID = ${id}`;
          con.query(walk_get, function (err, result, fields) {
            if (err) throw err;
            walk = result[0];
            res.json(walk);
          });
        });
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
