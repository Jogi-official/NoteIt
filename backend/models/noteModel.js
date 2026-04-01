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
  dueDate: {
    type: Date,
    default: Date.now(),
  },
});

noteSchema.virtual('backlog').get(function () {
  if (this.completed) return false;

  const today = new Date();
  const created = new Date(this.createdAt);

  return created.toDateString() !== today.toDateString();
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
