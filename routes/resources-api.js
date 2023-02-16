const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { getResources } = require('../db/queries/resources');
const resourceCommentQueries = require('../db/queries/get-resource-comments');

router.get('/', (req, res) => {
  getResources().then(rows => {
    res.json(rows);
  })
  .catch(err => {
    console.log(err.message);
    res.status(500).send("unable to resolve query");
  })
})

router.get('/:resourceID/comments', (req, res) => {
  console.log("succeeded api/resources/comments")
  const resourceID = req.params.resourceID;
  resourceCommentQueries.resourceComments(resourceID)
  .then(comments => {
    console.log("sent api/resources/comments")
    res.send(comments)
  })
  .catch(err => {
    console.log("failed api/resources/comments")
    console.error(err);
    res.send(err);
  });

});

module.exports = router;
