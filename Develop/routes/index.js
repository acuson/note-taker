// Require express
const express = require('express');

// Import modular routes
const notesRouter = require('./notes');

const app = express();
app.use('/notes', notesRouter);

module.exports = app;
