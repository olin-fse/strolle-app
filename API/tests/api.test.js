var express = require('express');
var path = require('path');
var mysql = require('mysql');
const assert = require('assert');
const chai = require("chai");
const expect = chai.expect;
var router = express.Router();
const request = require('superagent');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "strolle_app",
//   password: "walk",
//   database: "strolle_test"
// });
var example = {
    title: "Walk in the park",
    description : "This was fun",
    location_name : "Boston",
    lat : 25.3,
    lng : 23.99
};

describe("smoke test", function() {
  it("checks equality", function() {
    expect(true).to.be.true;
  });
});

describe("post test", function() {
  it("checks that walk gets added to db", function() {
    request
        .post('/api/paths')
        .send(example)
        .then(function(res) {
            expect(res).to.equal("1 record inserted");
        }).catch(function () {
            console.log("Reached the catch");
        });
  });
});

// {
//     "title": "Common Stroll",
//     "location_name": "Boston",
//     "description": "Its nice here",
//     "latitude": 25.399999618530273,
//     "longitude": 31.299999237060547
// }
