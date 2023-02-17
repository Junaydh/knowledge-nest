/*
 * Routes for each unique resource page
 *
 */

const express = require('express');
const router  = express.Router();
// const resourceQueries = require('../db/queries/user-resources');
const resourceCommentQueries = require('../db/queries/comments');

router.get('/comments', (req, res) => {
  console.log("api/resources/comments")
  const resourceID = req.params.resourceID;
  resourceCommentQueries.resourceComments(resourceID)
  .then(comments => {
    res.send(comments)
  })
  .catch(err => {
    console.log("failed api/comments/get")
    console.error(err);
    res.send(err);
  });
});



// router.get('/:resourceID', (req, res) => {
//   const resourceID = req.params.resourceID;
//   resourceQueries.getUserResource(resourceID)
//   .then(resources => {
//     res.json({ resources });
//   })
//   .catch (err => {
//     res
//       .status(500)
//       .json({ error: err.message })
//   });
//   //res.render('resource-page');
// });





module.exports = router;
