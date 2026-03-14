const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const notesRouter = require('./routes/notesRouter');

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// CORS
app.use(
  cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(express.json());

// ROUTES
app.use('/api/v1/notes', notesRouter);

module.exports = app;
