// Require
const express = require('express');
const path = require('path');
const fs = requidre('fs');
const { v4: uuid } = require("uuid");

// PORT
const PORT = process.env.PORT || 3001;

// Init express
const app = express();

app.use(express.static('public'));

// JSON middleware
app.use(express.json());

// GET route for index
app.get('/', (req, res) =>
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