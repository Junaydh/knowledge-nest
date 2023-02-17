const express = require('express');
const router  = express.Router();
const myResourcesQueries = require('../db/queries/myResources');


router.get('/owned', (req, res) => {
  const userId = req.session.userId;
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

router.get('/liked', (req, res) => {
  const userId = req.session.userId;
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
