const express = require('express');
const morgan = require('morgan');

const app = express();
const notesRouter = require('./routes/notesRouter');
//MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use('/api/v1/notes', notesRouter);

module.exports = app;
