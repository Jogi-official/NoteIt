const Note = require('../models/noteModel');

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json({
      message: 'All notes are fetched correctly',
      data: {
        notes: notes,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching Notes',
      err: err.message,
    });
  }
};

exports.createNotes = async (req, res) => {
  try {
    console.log(req.body);
    const note = await Note.create(req.body);
    res.status(201).json({
      message: 'Notes Created',
      data: {
        note: note,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: 'Failed to create Notes',
      err: err.message,
    });
  }
};

exports.getNote = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Note.findById(id);
    res.status(200).json({
      message: `Note fetch with ${id}`,
      data: {
        note: note,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: 'Failed to fetch Note',
      err: err.message,
    });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Note.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    res.status(200).json({
      message: `Notes Updated with id ${id}`,
      note: note,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Failed to update Note',
      err: err.message,
    });
  }
};
exports.deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    await Note.findByIdAndDelete(id);
    res.status(200).json({
      message: `Notes Deleted with id ${id}`,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Failed to delete Note',
      err: err.message,
    });
  }
};
