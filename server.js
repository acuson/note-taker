// Require
const express = require('express');
const path = require('path');
const fs = requidre('fs');
const { v4: uuid } = require("uuid");

const PORT = process.env.PORT || 3001;
const app = express();


// GET route for notes page

// POST route to save notes

// DELETE notes

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);