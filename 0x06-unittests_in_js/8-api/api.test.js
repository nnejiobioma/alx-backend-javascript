const request = require('supertest');
const expect = require('chai').expect;
const server = require('./api');

describe('Index page', function () {
  it('returns status code 200', function (done) {
    request(server)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('returns the correct result', function (done) {
    request(server)
      .get('/')
      .expect('Welcome to the payment system')
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });

  // Add more test cases as needed
});
