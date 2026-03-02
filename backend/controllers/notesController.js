const fs = require('fs');

exports.checkId = (req, res, next) => {
  // if (req.params.id * 1 > tours.length) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid ID',
  //   });
  // }
  console.log('>>>Param middleware working fine');
  next();
  console.log('>>>This is working ');
};

exports.getAllNotes = (req, res, next) => {
  res.status(200).json({
    message: 'All tours are fetched correctly',
  });
};
exports.createNotes = (req, res, next) => {
  console.log('>>>>>', req.body);
  res.status(200).json({
    message: 'Notes Created',
  });
};
exports.getNote = (req, res, next) => {
  res.status(200).json({
    message: 'Notes Fetched with id 1',
  });
};
exports.updateNote = (req, res, next) => {
  res.status(200).json({
    message: 'Notes Updated with id 1',
  });
};
exports.deleteNote = (req, res, next) => {
  res.status(200).json({
    message: 'Notes Deleted with id 1',
  });
};
