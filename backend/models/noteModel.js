const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A note must have a title'],
  },
  content: {
    type: String,
    required: [true, 'A note must have content'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  backlog: {
    type: Boolean,
    default: false,
  },
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
