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
  lng : 23.99
};

var db;

describe('/api/paths', function() {
  before(function(done) {
    db = mysql.createConnection(dbConfig);
    done();
  });

  after(function(done) {
    app.close();
    done();
  });

  it('/GET /api/paths', async function() {
    try {
      const res = await request(app).post('/api/paths').send(example);
      expect(res.body.status).to.not.equal(null);
      expect(res.statusCode).to.equal(200);
    } catch (ex) {
      throw ex;
    }
  });

  it('/POST /api/paths/:pathID', function() {
    var t = example.title;
    var loc = example.location_name;
    var d = example.description;
    var lt = example.lat;
    var ln = example.lng;
    var walk_insert = `INSERT INTO paths (title, location_name, description, latitude, longitude) VALUES ("${t}", "${loc}", "${d}", ${lt}, ${ln})`;

    const testFn = async function(id) {
      try {
        const res = await request(app).get(`/paths/${id}`);
        expect(res._data).to.equal(example);
      } catch (ex) {
        throw ex;
      }
    }

    db.query(walk_insert, function (err, result) {
      if (err) throw err;
      testFn(result.insertId);
    });
  });

  it('/DELETE /api/paths/:pathID', async function() {
    try {
      const res = await request(app).delete('/api/paths/1');
      expect(res.body.status).to.equal("1 row deleted");
      expect(res.statusCode).to.equal(200);
    } catch (ex) {
      throw ex;
    }
  });
});
