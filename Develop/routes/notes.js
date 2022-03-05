// Require
const notes = require('express').Router();
const { v4: uuid } = require('uuid');

// GET /api/notes
notes.get('/api/notes', (req, res) => {
    readFromFile('./Develop/db/db.json').then((data) =>
        res.json(JSON.parse(data))
    );
})

// POST /api/notes
notes.post("/api/notes", (req, res) => {
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
            err ? console.log(err) : console.log("Note Saved")
        );

        res.status(201).json(newNote);
    }
});

  // DELETE /api/notes/:id (optional)

  module.exports = notes;