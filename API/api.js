var express = require('express');
var path = require('path');
var mysql = require('mysql');
var PathService = require('./PathService');

var router = express.Router();
var service = new PathService();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');



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

router.route('/users/:userID').get(function(req, res) {
    service.getUserByID(req.params.userID, function(cb) {
        if(cb == null) {
            return res.sendStatus(400);
        } else {
            return res.json(cb);
        }
    });
})


router.route('/login').post(passport.authenticate('local', { successRedirect: '/',
                                                             failureRedirect: '/login',
                                                             failureFlash: false})
)



// Passport Authentication Stuff
passport.use(new LocalStrategy(
    function(email, password, done) {
        console.log('Here!');
        User.findOne({email: email}, function(err, user) {
            if(err) {
                return done(err);
            }
            if(!user) {
                return done(null, false, {message: "Incorrect Username."});
            }
            if(!user.validPassword(password)) {
                return done(null, false, {message: "Incorrect Password."});
            }
            return done(null, user);
        });
    }
));

module.exports = router;
