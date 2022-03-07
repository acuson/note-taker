// Require these modules:
const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');

// Require JSON db file
const db = require('./db/db.json');

// Paths
const pagePath = path.join(__dirname, './public/index.html');
const dbPath = path.join(__dirname, './db/db.json');

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
  res.sendFile(pagePath)
);

// Frontend GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(pagePath)
);


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

        db.push(newNote);
        fs.writeFileSync(dbPath, JSON.stringify(db), err =>
            err ? console.log(err) : console.log('Note Saved')
        );

        res.status(200).json(newNote);
    }
});

  // DELETE /api/notes/:id (optional)

  

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
