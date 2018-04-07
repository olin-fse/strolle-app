var express = require('express');
var path = require('path');
var mysql = require('mysql');
var PathService = require('./PathService');

var router = express.Router();
var service = new PathService();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var expressSession = require('express-session');


var fs = require("fs");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var sequelize = new Sequelize(
                'stolle_users',
                'strolle_app',
                'walk',
                {host: 'localhost',
                 dialect: 'mysql'});
var db = {};



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


router.route('/login').post(passport.authenticate('local', { successRedirect: '/users/2',
                                                             failureRedirect: '/login',
                                                             failureFlash: false})
)



// Passport Authentication Stuff
passport.use('login', new LocalStrategy(
    function(email, password, done) {
        console.log('Here!');
        User.findOne({email: email}, function(err, user) {
            if(err) {
                return done(err);
            }
            if(!user) {
                console.log("No User");
                return done(null, false, {message: "Incorrect Username."});
            }
            if(!user.validPassword(password)) {
                console.log("Invalid Password");
                return done(null, false, {message: "Incorrect Password."});
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user._id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

var models = require("./models");
models.sequelize.sync().then(function() {
    console.log("Looks fine");
}).catch(function(err) {
    console.log("Something went wrong");
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
module.exports = router;
