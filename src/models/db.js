const Sequelize = require('sequelize');

// NODE_ENV === 'produtions'
if (!process.env.DB_HOST) require('dotenv').config();

require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

// Users
const user = sequelize.define('users', {
  username: {
    type: Sequelize.STRING,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
});

// Apps
const app = sequelize.define('apps', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  releaseDate: {
    type: Sequelize.STRING,
  },
  srcTitle: {
    type: Sequelize.STRING,
  },
  srcLink: {
    type: Sequelize.STRING,
  },
});

user.hasMany(app, {
  foreignKey: 'userID',
});

sequelize.sync();

exports.sequelize = sequelize;
exports.user = user;
exports.app = app;
