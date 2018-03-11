var express = require('express');
var path = require('path');
var mysql = require('mysql');
var PathService = require('./PathService');

var router = express.Router();
var service = new PathService();

router.route('/paths').post(function(req, res) {
  service.createPath(req.body, function(err) {
    if (err == null) {
      return res.sendStatus(400);
    }
    res.json(err);
  });
})

router.route('/paths/:pathID').get(function(req, res) {
    service.getPathByID(req.params.pathID, function(cb) {
        console.log(cb);
      if (cb == null) {
        return res.sendStatus(400);
      }
      else {
        return res.json(cb);
      }
    });
})

    // Modify a path
    .put(function(req, res) {
        console.log("Successfully PUTing")
    })

router.route('/paths/:pathID').delete(function(req, res) {
  service.deletePath(req.params.pathID, function(err) {
    if (err != null) {
      return res.sendStatus(400);
    }
    res.json({ status: '1 row deleted'});
  });
})

module.exports = router;
