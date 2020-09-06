var app = require('../server/server');
var request = require('supertest');
var expect = require('chai').expect;

describe('Books API', function() {

    it ("Should get all the books", function(done) {
        request(app)
            .get('/api/books')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, resp) {
                if (err) throw err;
                expect(resp.body).to.be.an('array');
                done();
            });
    });


});