const express = require('express');
const database = require('../database');

const router = express.Router();

router.get('/', (req, res) => {
  database.query('SELECT * FROM amiibo', (err, amiibo) => {
    if (err) {
      return res.status(500).send('An error has occurred !');
    }
    res.status(200).json(amiibo);
  });
});

router.get('/:id', (req, res) => {
  const amiiboID = req.params.id;
  database.query('SELECT * FROM amiibo WHERE id = ?', [amiiboID], (err, results) => {
    if (err) {
      res.status(500).send(`Amiibo ${amiiboID} can't be displayed`);
    }
    if (results.length === 0) {
      return res.status(404).send(`Amiibo ${amiiboID} doesn't exist`);
    }
    return res.json(results[0]);
  });
});

module.exports = router;
