var app = require('../../app');
var path = require('path');
var mysql = require('mysql');
const assert = require('assert');
const chai = require("chai");
const expect = chai.expect;
const request = require('supertest');
var dbConfig = require('../../db.config.js')('TEST');

var example = {
  title: "Walk in the park",
  description : "This was fun",
  location_name : "Boston",
  lat : 25.3,
  lng : 23.99,
  userID: 5
};

var example_user = {
  first : "Billy",
  last: "Bob",
  blurb : "I like my farm",
  photo: "cow.png",
  email: "bbob@farmlovers.com",
  pass: "ilovemycow",
  sessionKey: "blahblahblah"
};

var db;

describe('/api', function() {
  before(function(done) {
    db = mysql.createConnection(dbConfig);
    done();
  });

  after(function(done) {
    console.log('DONE ALL');
    app.close();
    done();
  });

  it('/POST /api/paths', async function() {
    try {
      request(app)
        .post('/api/paths')
        .send(example)
        .then(res => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.affectedRows).to.equal(1);
          done();
        });
    } catch (ex) {
      throw ex;
    }
  });

  // it('/GET /api/paths/:pathID', function(done) {
  //   var t = example.title;
  //   var loc = example.location_name;
  //   var d = example.description;
  //   var lt = example.lat;
  //   var ln = example.lng;
  //   var uid = example.userID;
  //   var walk_insert = `INSERT INTO paths (title, location_name, description, latitude, longitude, userID) VALUES ("${t}", "${loc}", "${d}", ${lt}, ${ln}, ${uid})`;
  //
  //   const testFn = async function(id) {
  //     try {
  //       request(app)
  //         .get(`/paths/${id}`)
  //         .then(res => {
  //           console.log(res.body);
  //           expect(res._data).to.equal(example);
  //           done();
  //       });
  //     } catch (ex) {
  //       throw ex;
  //     }
  //   }
  //
  //   db.query(walk_insert, function (err, result) {
  //     if (err) throw err;
  //     testFn(result.insertId);
  //   });
  // });

  it('/DELETE /api/paths/:pathID', async function() {
    try {
      const res = await request(app).delete('/api/paths/1');
      expect(res.body.status).to.equal("1 row deleted");
      expect(res.statusCode).to.equal(200);
    } catch (ex) {
      throw ex;
    }
  });

  it('/POST /api/users/:userID', function() {
    var f = example_user.first;
    var l = example_user.last;
    var blrb = example_user.blurb;
    var ph = example_user.photo;
    var em = example_user.email;
    var ps = example_user.pass;
    var s = example_user.sessionKEy;
    var user_insert = `INSERT INTO users (first, last, blurb, photo, email, pass) VALUES ("${f}", "${l}", "${blrb}", "${ph}", "${em}", "${ps}", "${s}")`;

    const testFn = async function(id) {
      try {
        const res = await request(app).get(`/users/${id}`);
        expect(res._data).to.equal(example_user);
      } catch (ex) {
        throw ex;
      }
    }

    db.query(user_insert, function (err, result) {
      if (err) throw err;
      testFn(result.insertId);
    });
  });
});
