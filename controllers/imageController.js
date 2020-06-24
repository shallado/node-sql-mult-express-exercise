const path = require('path');
const fs = require('fs');
const { Image } = require('../models');

exports.uploadFile = (req, res) => {
  const { 
    mimetype: type, 
    originalname: name,
    path: fullPath
  } = req.file;

  Image.create({ 
    type, 
    name, 
    data: fs.readFileSync(fullPath) 
  })
    .then((image) => {
      const tmpPath = path.join(__dirname, '..', 'resources', 'static', 'assets', 'tmp', `${image.get('name')}`);
    
      fs.writeFileSync(tmpPath, image.get('data'));
      
      res.send('Successfully uploaded image');
    })
    .catch((error) => res.status(500).send({
      message: 'Error occurred',
      err: error.stack
    }));
};