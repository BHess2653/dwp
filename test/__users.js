const expect = require('chai').expect;
const user = require('../src/models/users');
const util = require('../lib/util');

let testUser = {};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Mock User =========================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
describe('Users', () => {
  beforeEach(() => {
    const mockUser = {
      username: 'Cpt. Hydra',
      firstName: 'John',
      lastName: 'Smith',
    };

    user.create(mockUser, (error) => {
      util.debug('Error creating mock user.', error);
    }, (newDbUser) => {
      testUser = newDbUser;
    });
  });

  // afterEach

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Read All Users ====================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  it('Should be able to Read All Users', (done) => {
    user.findAll((error) => {
      util.debug('Error reading all Users', error);
    }, (allUsers) => {
      expect(allUsers.length).to.be.above(1);
      done();
    });
  });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Read One User =====================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  it('Should be able to Read One User', (done) => {
    user.find(testUser, (error) => util.debug('Error reading One User', error),
    (oneUser) => {
      expect(oneUser.id).to.be.equal(testUser.id);
      done();
    });
  });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Create User =======================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  it('Should be able to Create', () => {
    expect(testUser.id).to.not.be.null;
  });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Update User =======================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  it('Should be able to Update', (done) => {
    const updateInfo = {
      id: testUser.id,
      username: 'Kevin',
      firstName: 'Billy',
      lastName: 'Walks',
    };
    user.update(updateInfo, (err) => util.debug('User failed to update', err),
    (updatedDbUser) => {
      expect(updatedDbUser.name).to.be.equal(updateInfo.name);
      testUser = updatedDbUser;
      done();
    });
  });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Delete User =======================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  it('Should be able to Delete', (done) => {
    user.destroy(testUser, (err) => util.debug('User Errored while Destorying', err),
    (responseFromDestroy) => {
      expect(responseFromDestroy).to.be.equal(1);
      done();
    });
  });
});
