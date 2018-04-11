var app = require('./../app');

var express = require('express');
var path = require('path');
var mysql = require('mysql');
var PathService = require('./PathService');

var router = express.Router();
var service = new PathService();

// Authentication Modules
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var sess = require('express-session');
var crypto = require('crypto');
var Store = require('express-session').Store;
var BetterMemoryStore = require(__dirname + '/memory');


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


router.route('/login').post(passport.authenticate('local', { successRedirect: '/profile',   //TODO change?
                                                             failureRedirect: '/login',
                                                             failureFlash: true}),
                                                 function(req, res, info){
                                                     res.json(req);
                                                 }
);



// Passport Authentication Stuff
var store = new BetterMemoryStore({expires: 60 * 60 * 1000, debug: true});

app.use(sess({
    name: "JESSION",
    secret: "MYSECRET", //TODO change
    store: store,
    resave: true,
    saveUninitialized: true
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use('local', new LocalStrategy({
    emailField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){
    if(!email || !password) {
        return done(null, false, req.flash('message', 'All fields required.'));
    }
    // var salt = '22adc9ea14a7a14fe5888e579db67e302ec54892'; TODO move to frontend
    // password = password + salt;
    if(checkUserByEmail(email, res)) {      //TODO write
        if(res[0] != email) {
            return done(null, false, req.flash('message', 'User does not exist'));
        }
        if(res[2] != password) {
            return done(null, false, req.flash('message', 'Wrong Password'));
        }
        return done(null, res)
    }
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    findUserID(id, err, res);       //TODO write
    done(err, res);
})

module.exports = db;
module.exports = router;
