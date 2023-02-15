/*
 * Routes for each unique resource page
 *
 */

const express = require('express');
const router  = express.Router();
const resourceQueries = require('../db/queries/user-resources');

router.get('/:resourceID', (req, res) => {
  const resourceID = req.params.resourceID;
  resourceQueries.getUserResource(resourceID)
  .then(resources => {
    res.json({ resources });
  })
  .catch (err => {
    res
      .status(500)
      .json({ error: err.message })
  });
  //res.render('resource-page');
});



module.exports = router;
