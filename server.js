const path = require('path');
const express = require('express');
const { sequelize } = require('./models');
const imageRouter = require('./routes/image');

const app = express();
const port = process.env.PORT || 8080;
const publicPath = path.join(__dirname, 'client', 'build');

app.use(express.json());
app.use(express.static(publicPath));

sequelize.sync({ force: true })
  .then(() => {
    console.log('Successfully synced models to the database');
    imageRouter(app);
    app.get('*', (req, res) => res.sendFile(`${publicPath}/index.html`));
  })
  .catch((err) => console.log(
    'Unable to sync models to the database: \n', 
    err
  ));

app.listen(port, () => console.log(
  `Successfully connected to the database on port: ${port}`
));