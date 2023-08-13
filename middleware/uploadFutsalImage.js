const path  = require('path');
const multer = require('multer');
const { log } = require('console');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'futsalImgs/')
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

const futsalImg = multer ({
    storage: storage,
    fileFilter: function(req, file, callback) {
        if( file.mimetype == "image/png" ||
             file.mimetype == "image/jpg" ||
              file.mimetype == "image/jpeg"){
                callback(null, true)
              } else {
                console.log('only png/jpg/jpeg accepted')
              }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = futsalImg;