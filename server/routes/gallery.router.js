const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  
  const sqlText =
  `
    SELECT * FROM gallery
       ORDER BY "id";

  `
  pool.query(sqlText)
    .then((result) => {
      console.log(result.rows, "GET return from db");
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error, "Error at db query");
      res.sendStatus(500);
    })
});

module.exports = router;
