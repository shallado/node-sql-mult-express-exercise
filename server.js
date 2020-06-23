const express = require('express');
const { sequelize } = require('./models');

const app = express();
const port = process.env.PORT || 8080;

sequelize.sync({ force: true })
  .then(() => console.log('Successfully synced models to the database'))
  .catch((err) => console.log(
    'Unable to sync models to the database: \n', 
    err
  ));

app.listen(port, () => console.log(
  `Successfully connected to the database on port: ${port}`
));