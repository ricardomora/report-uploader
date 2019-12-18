const fileFilter = (req, file, cb) => {
    if(!file.originalname || file.originalname.match(/\.(json)$/i)) {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};

module.exports = fileFilter;
