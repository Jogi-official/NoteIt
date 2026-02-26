exports.checkId = (req, res, next) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.getAllNotes = (req, res, next) => {
  res.status(200).json({
    message: 'All tours are fetched correctly',
  });
  next();
};
exports.createNotes = (req, res, next) => {
  res.status(200).json({
    message: 'Notes Created',
  });
  next();
};
exports.getNote = (req, res, next) => {
  res.status(200).json({
    message: 'Notes Fetched with id 1',
  });
  next();
};
exports.updateNote = (req, res, next) => {
  res.status(200).json({
    message: 'Notes Updated with id 1',
  });
  next();
};
exports.deleteNote = (req, res, next) => {
  res.status(200).json({
    message: 'Notes Deleted with id 1',
  });
  next();
};
