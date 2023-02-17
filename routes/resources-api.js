const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { getResources } = require('../db/queries/resources');

router.get('/', (req, res) => {
  getResources().then(rows => {
    res.json(rows);
  })
  .catch(err => {
    console.log(err.message);
    res.status(500).send("unable to resolve query");
  })
})

router.post('/', (req,res) => {

})

module.exports = router;
