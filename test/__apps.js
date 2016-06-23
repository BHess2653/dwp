const expect = require('chai').expect;
const app = require('../src/models/apps');
const utool = require('uTool');

let testApp = {};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Mock App ==========================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
describe('Apps', () => {
  beforeEach((done) => {
    const mockApp = {
      title: 'Cool New App',
      description: 'This App is Amazing',
      releaseDate: 'Nov 10, 2016',
      srcTitle: 'Screen Splash',
      srcLink: 'http://i.imgur.com/QQ3O6PO.jpg',
    };

    app.create(mockApp, (error) => {
      utool.debug('Error creating mock app'.error, error);
    }, (newDbApp) => {
      testApp = newDbApp;
      done();
    });
  });

  // afterEach
  // afterEach((done) => {
  //   app.destroy(testApp, (error) => {
  //     utool.debug('Error unable to delete app'.error, error);
  //   }, (deletedResponse) => {
  //     expect(deletedResponse).to.be.equal(0);
  //     done();
  //   });
  // });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Read All Apps =====================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  it('Should be able to Read All Apps', (done) => {
    app.findAll((error) => {
      utool.debug('Error reading all Apps'.error, error);
    }, (allApps) => {
      expect(allApps.length).to.be.above(0);
      done();
    });
  });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======================= Read One App ======================================
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  it('Should be able to Read One App', (done) => {
    app.find(testApp, (error) => utool.debug('Error reading One App'.error, error),
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
    app.update(updateInfo, (err) => utool.debug('App failed to update'.error, err),
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
    app.destroy(testApp, (err) => utool.debug('App Errored while Destorying'.error, err),
    (responseFromDestroy) => {
      expect(responseFromDestroy).to.be.equal(1);
      done();
    });
  });
});
