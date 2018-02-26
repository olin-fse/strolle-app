var express = require('express');
var path = require('path');
var assert = require('assert');

var mysql = require('mysql');


var router = express.Router();

var con = mysql.createConnection({
  host: "localhost",
  user: "strolle_app",
  password: "walk",
  database: "strolle_test"
});

describe("smoke test", function() {
  it("checks equality", function() {
    assert.equal(true, true);
  });
});

// {
//     "title": "Common Stroll",
//     "location_name": "Boston",
//     "description": "Its nice here",
//     "latitude": 25.399999618530273,
//     "longitude": 31.299999237060547
// }
