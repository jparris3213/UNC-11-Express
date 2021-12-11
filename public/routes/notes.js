const notetake = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');


// GET Route for retrieving all Notes
fb.get('/', (req, res) => {
    console.info(`${req.method} request received for Notes`);
  
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });