const request = require('supertest');

describe('API', function() {
    const server

    beforeEach(function() {
        server = require('../src/server.js');
    });

    afterEach(function() {
        server.close();
    });

    it('/ should return specified object.', function testHealth(done) {
        request(server)
            .get('/api/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {
                nav: [{
                    "users": "http://localhost:3000/api/users",
                    "apps": "http://localhost:3000/api/apps",
                    "single user": "http://localhost:3000/api/users/:id",
                    "single app": "http://localhost:3000/api/apps/:id"
                }]
            }, done);
    });

});
