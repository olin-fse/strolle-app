var express = require('express');
var path = require('path');
var mysql = require('mysql');
var PathService = require('./PathService');

var router = express.Router();
var service = new PathService();

router.route('/paths').post(function(req, res) {
  service.createPath(req.body, function(result) {
    if (result == null) {
      return res.sendStatus(400);
    }
    res.json(result);
  });
})

router.route('/paths/:pathID').get(function(req, res) {
    service.getPathByID(req.params.pathID, function(cb) {
      if (cb == null) {
        return res.sendStatus(400);
      }
      else {
        return res.json(cb);
      }
    });
})

router.route('/paths/:pathID').delete(function(req, res) {
  service.deletePath(req.params.pathID, function(err) {
    if (err != null) {
      return res.sendStatus(400);
    }
    res.json({ status: '1 row deleted'});
  });
})

router.route('/users').post(function(req, res) {
  service.createUser(req.body, function(err) {
    if (err == null) {
      return res.sendStatus(400);
    }
    res.json(err);
  });
})

router.route('/users/:userID').get(function(req, res) {
    service.getUserByID(req.params.userID, function(cb) {
      if (cb == null) {
        return res.sendStatus(400);
      }
      else {
        return res.json(cb);
      }
    });
})

router.route('/users').put(function(req,res) {
    service.updateUser(req.body, function(stat) {
      if (stat == null) {
        return res.sendStatus(400);
      }
      res.json(stat);
    });
})

router.route('/:email').get(function(req, res) {
    service.getUserByEmail(req.params.email, function(cb) {
      if (cb == null) {
        return res.sendStatus(400);
      }
      else {
        return res.json(cb);
      }
    });
})
module.exports = router;
