const router = require('express').Router();
const imageController = require('../controllers/imageController');
const upload = require('../middleware/upload');

const imageRouter = (app) => {
  router.post('/', upload.single('myImage'), imageController.uploadFile);

  app.use('/upload', router);
};

module.exports = imageRouter;