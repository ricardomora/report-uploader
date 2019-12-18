const fs = require('fs');
const validator = require('../utils/validator');
const schema = require('../models/jsonschema');

/**
 * GET /api/upload
 * File Upload API example.
 */

exports.getFileUpload = (req, res) => {
  if (req.user) {
    res.render('api/upload', {
      title: ''
    });
  } else {
    res.redirect('/login');
  }
};

exports.postFileUpload = (req, res) => {
  let rawdata = fs.readFileSync(req.file.path);
  let uploadedfileContent = JSON.parse(rawdata);

  const result = validator(uploadedfileContent, schema);
  if (result.valid) {
    req.flash('success', { msg: ":) the file was uploded" });
  } else {
    req.flash('errors', { msg: `:( Something is wrong, \n\n ${result.errors}` });
  }
  res.redirect('/api/upload');
};
