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

router.route('/paths/:pathID').delete(function(req, res) {
  service.deletePath(req.body, function(err) {
    if (err != null) {
      return res.sendStatus(400);
    }
    res.json({ status: "Number of records deleted: " + result.affectedRows});
  });
})

module.exports = router;
