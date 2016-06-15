const request = require('supertest');
// const routes = ('/api/users', '/api/users/4', '/api/apps', '/api/apps/1')
// const routes = [{
//   title: '/api/users should return all users',
//   route: '/api/users',
//   status: 200,
// }, {
//   title: '/api/users/4 should return one user',
//   route: '/api/users/4',
//   status: 200,
// }, {
//   title: '/api/apps should return all apps',
//   route: '/api/apps',
//   status: 200,
// }, {
//   title: '/api/appss/1',
//   route: '/api/apps/1',
//   status: 200,
// }, done];

describe('API', () => {
  let server;
  beforeEach(() => {
    server = require('../src/server.js');
  });

  afterEach(() => {
    server.close();
  });

  it('/api/users/id should return a user object with blank', (done) => {
    const fakeUserId = 200;
    request(server)
          .get('/api/users/' + fakeUserId)
          .set('Accept', 'application/json')
          .expect('Content-type', /json/)
          .expect(200, {
            username: 'Lord Commander',
            firstName: 'Jon',
            lastName: 'Snow',
            id: 200,
          }, done);
  });
});
