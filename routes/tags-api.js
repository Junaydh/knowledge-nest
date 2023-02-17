const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { getTags } = require('../db/queries/tags');

router.get('/', (req, res) => {
  getTags().then(rows => {
    res.json(rows);
  })
  .catch(err => {
    console.log(err.message);
    res.status(500).send("unable to resolve query");
  })
})

module.exports = router;
