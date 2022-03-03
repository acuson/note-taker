// Require
const express = require('express');
const path = require('path');
const api = require('./routes/index');
const fs = require('fs');
const { v4: uuid } = require('uuid');

// PORT
const PORT = process.env.PORT || 3001;

// Init express
const app = express();

app.use(express.static('public'));

// JSON middleware
app.use(express.json());
app.use('/api', api);

// GET route for index
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// POST route to save notes

// DELETE notes

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);