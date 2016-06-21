const expect = require('chai').expect;
const app = require('../src/models/apps');
const utool = require('uTool');
const colors = require('colors');

let testApp = {};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Mock App ==========================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
describe('Apps', () => {
  beforeEach(() => {
    const mockApp = {
      title: 'Cool New App',
      description: 'This App is Amazing',
      releaseDate: 'Nov 10, 2016',
      srcTitle: 'Screen Splash',
      srcLink: 'http://i.imgur.com/QQ3O6PO.jpg',
      userID: 1,
    };

    app.create(mockApp, (error) => {
      utool.debug(colors.red('Error creating mock app.'), error);
    }, (newDbApp) => {
      testApp = newDbApp;
    });
  });

  // afterEach

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Read All Apps =====================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  it('Should be able to Read All Apps', (done) => {
    app.findAll((error) => {
      utool.debug(colors.red('Error reading all Apps'), error);
    }, (allApps) => {
      expect(allApps.length).to.be.above(1);
      done();
    });
  });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Read One App ======================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  it('Should be able to Read One App', (done) => {
    app.find(testApp, (error) => utool.debug(colors.red('Error reading One App'), error),
    (oneApp) => {
      expect(oneApp.id).to.be.equal(testApp.id);
      done();
    });
  });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Create App ========================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  it('Should be able to Create', () => {
    expect(testApp.id).to.not.be.null;
  });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Update App ========================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  it('Should be able to Update', (done) => {
    const updateInfo = {
      id: testApp.id,
      title: 'The Amazing App',
      description: 'This game is Crazy Cool',
      releaseDate: 'Dec 25, 2016',
    };
    app.update(updateInfo, (err) => utool.debug(colors.red('App failed to update'), err),
    (updatedDbApp) => {
      expect(updatedDbApp.name).to.be.equal(updateInfo.name);
      testApp = updatedDbApp;
      done();
    });
  });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Delete App ========================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  it('Should be able to Delete', (done) => {
    app.destroy(testApp, (err) => utool.debug(colors.red('App Errored while Destorying'), err),
    (responseFromDestroy) => {
      expect(responseFromDestroy).to.be.equal(1);
      done();
    });
  });
});
