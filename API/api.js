var express = require('express');
var path = require('path');
var mysql = require('mysql');
var PathService = require('./PathService');

var router = express.Router();
var service = new PathService();

router.route('/paths').post(function(req, res) {
  service.createPath(req.body, function(err) {
    if (err != null) {
      return res.sendStatus(400);
    }
    res.json({ status: '1 record inserted' });
  });
})

router.route('/paths/:pathID').get(function(req, res) {
    service.getPathByID(req.body, function(cb) {
      if (cb == err) {
        return res.sendStatus(400);
      }
      else {
        res.json(res);
      }
    });
})

    // Modify a path
    .put(function(req, res) {

        console.log("Successfully PUTing")
    })

    // Delete a path
    .delete(function(req, res) {
        var sql = `DELETE FROM paths WHERE ID = ${id}`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
        console.log("Successfully DELETing")
    })


module.exports = router;

// .get(function(req, res) {
//     var id = req.params.pathID;
//     var walk;
//     var walk_get = `SELECT title, location_name, description, latitude, longitude FROM paths WHERE ID = ${id}`;
//     con.query(walk_get, function (err, result) {
//       if (err) throw err;
//       walk = result[0];
//       res.json(walk);
//     });
// })
