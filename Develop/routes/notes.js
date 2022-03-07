// // Require
// const notes = require('express').Router();
// const express = require('express');
// const app = express();
// const { v4: uuid } = require('uuid');
// const path = require('path');
// let noteData = require('/Users/Alyssa/bootcamp/homework/note-taker/Develop/db/db.json');

// // Path for the database
// const dbPath = path.join(__dirname, '/db/db.json');

// // GET /api/notes
// app.get('/api/notes', (req, res) => {
//     readFromFile('./db/db.json').then((data) =>
//         res.json(JSON.parse(data))
//     );
// })

// // POST /api/notes
// app.post('/api/notes', (req, res) => {
//     const { title, text } = req.body;

//     // Validate required data is present
//     if (!title || !text) {
//         res.status(404).json({
//             err: "Bad request",
//             msg: "Note must have title and body",
//         });
//     } else {
//         const newNote = {
//             title,
//             text,
//             id: uuid()
//         };

//         noteData.push(newNote);
//         fs.writeFileSync(dbPath, JSON.stringify(noteData), err =>
//             err ? console.log(err) : console.log('Note Saved')
//         );

//         res.status(200).json(newNote);
//     }
// });

//   // DELETE /api/notes/:id (optional)

//   module.exports = app;