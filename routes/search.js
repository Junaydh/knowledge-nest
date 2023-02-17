const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const {search} = require('../db/queries/search');

// router.post('/', (req, res) => {
//   const { query } = req.body;

//   const postData = {
//     query
//   };

//   search(postData)
//     .then(response => {
//       console.log(response);
//       res.send(response);
//     })
// });

router.get('/', (req, res) => {
  let templateVars;
  console.log(req.query);
  if (!req.query.query) {
    templateVars = {data: null};
    res.render('search', templateVars);
  } else {
    search(req.query)
      .then(rows => {
        templateVars = {data: rows};
        res.render('search', templateVars);
      })
      .catch(err => {
        console.log(err.message);
      })
  }
})
module.exports = router;
