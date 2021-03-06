const { Sequelize, DataTypes } = require('sequelize');
const image = require('./image');
const {
  database,
  username,
  password,
  host,
  dialect
} = require('../config/db');

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging: false,
  define: { 
    underscored: true 
  }
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.')) 
  .catch((err) => console.log('Unable to connect to the database: \n', err));

module.exports = {
  Image: image(sequelize, DataTypes),
  sequelize
};