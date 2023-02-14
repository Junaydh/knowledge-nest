const express = require('express');
const router  = express.Router();
const myResourcesQueries = require('../db/queries/myResources');


router.get('/owned/1', (req, res) => {
  const userId = 1;
  myResourcesQueries.myOwnedResources(userId)
    .then(ownedResources => {
      res.send(ownedResources)
      // res.render('myResources', ownedResources);
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    });
});

router.get('/liked/1', (req, res) => {
  const userId = 1;
  myResourcesQueries.myLikedResources(userId)
    .then(likedResources => {
      res.send(likedResources)
      // res.render('myResources', likedResources);
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    });
});

module.exports = router;
