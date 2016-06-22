const db = require('./db');
const utool = require('uTool');

// Create User
exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
  utool.debug('Models user is being' + ' created'.create, payload);
};

// Find All Users
exports.findAll = (err, success) => {
  db.user.findAll().then(success).catch(err);
};

// Find One User
exports.find = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
    // Find all relations defined in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  utool.debug('Models user is being ' + 'searched'.read, payload);
};

// Update User
exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  utool.debug('Models user is being' + ' updated'.update, payload);
};

// Delete User
exports.destroy = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  utool.debug('Models user is being' + ' deleted'.delete, payload);
};
