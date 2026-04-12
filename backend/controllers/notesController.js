const Note = require('../models/noteModel');
const catchAsyncError = require('../utils/catchAsyncError');

exports.getAllNotes = catchAsyncError(async (req, res) => {
  const notes = await Note.find();
  res.status(200).json({
    data: {
      notes: notes,
      notesCount: notes.length,
    },
  });
});

exports.createNotes = catchAsyncError(async (req, res) => {
  console.log(req.body);
  const note = await Note.create(req.body);
  res.status(201).json({
    message: 'Notes Created',
    data: {
      note: note,
    },
  });
});

exports.getNote = catchAsyncError(async (req, res) => {
  const id = req.params.id;
  const note = await Note.findById(id);
  res.status(200).json({
    message: `Note fetch with ${id}`,
    data: {
      note: note,
    },
  });
});

exports.updateNote = catchAsyncError(async (req, res) => {
  const id = req.params.id;
  const note = await Note.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
  res.status(200).json({
    message: `Notes Updated with id ${id}`,
    note: note,
  });
});
exports.deleteNote = catchAsyncError(async (req, res) => {
  const id = req.params.id;
  await Note.findByIdAndDelete(id);
  res.status(200).json({
    message: `Notes Deleted with id ${id}`,
  });
});
