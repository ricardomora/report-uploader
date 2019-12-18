const fs = require('fs');

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
  let uploadedfile = JSON.parse(rawdata);
  console.log(uploadedfile);

  req.flash('success', { msg: ":)" });
  res.redirect('/api/upload');
};
