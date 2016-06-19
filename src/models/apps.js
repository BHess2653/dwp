const db = require('./db');
const utool = require('uTool');
const colors = require('colors');

// Create App
exports.create = (payload, err, success) => {
  db.app.create(payload).then(success).catch(err);
  utool.debug(colors.green('Models app is being created', payload));
};

// Find All Apps
exports.findAll = (err, success) => {
  db.app.findAll().then(success).catch(err);
};

// Find One App
exports.find = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
    // Find all relations defined in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  utool.debug(colors.green('Models app is being searched', payload));
};

// Update App
exports.update = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  utool.debug(colors.green('Models app is being updated', payload));
};

// Delete App
exports.destroy = (payload, err, success) => {
  db.app.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  utool.debug(colors.green('Models app is being deleted', payload));
};
