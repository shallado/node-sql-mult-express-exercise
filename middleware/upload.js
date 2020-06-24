const path = require('path');
const multer = require('multer');

const uploadsPath = path.join(__dirname, '..', 'resources', 'static', 'assets', 'uploads');

const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image')) {
    return cb('Invalid file please try again', null);
  }
  
  cb(null, true);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-shallado-${file.originalname}`);
  }
});

const upload = multer({ 
  storage, 
  fileFilter 
});

module.exports = upload;

