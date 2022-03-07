// Require these modules:
const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');

// Require JSON db file
const db = require('./db/db.json');

// Init express
const app = express();

// PORT
const PORT = process.env.PORT || 3001;

// Static folder
app.use(express.static('public'));

// JSON middleware
app.use(express.json());


// Frontend GET route for index
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// Frontend GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

// Require express
// const express = require('express');

// Import modular routes

// app.use('/notes', notesRouter);

// module.exports = app;

// Require
const notes = require('express').Router();
// const express = require('express');
// const app = express();
const { v4: uuid } = require('uuid');
// const path = require('path');
let noteData = require('/Users/Alyssa/bootcamp/homework/note-taker/Develop/db/db.json');

// Path for the database
const dbPath = path.join(__dirname, '/db/db.json');

// GET /api/notes
app.get('/api/notes', (req, res) => {
    fs.readFile(dbPath).then((data) =>
        res.json(JSON.parse(data))
    );
})

// POST /api/notes
app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;

    // Validate required data is present
    if (!title || !text) {
        res.status(404).json({
            err: "Bad request",
            msg: "Note must have title and body",
        });
    } else {
        const newNote = {
            title,
            text,
            id: uuid()
        };

        noteData.push(newNote);
        fs.writeFileSync(dbPath, JSON.stringify(noteData), err =>
            err ? console.log(err) : console.log('Note Saved')
        );

        res.status(200).json(newNote);
    }
});

  // DELETE /api/notes/:id (optional)

  

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

module.exports = router;