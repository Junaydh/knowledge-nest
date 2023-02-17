const express = require('express');
const router  = express.Router();
const profileQueries = require('../db/queries/profile');

router.get('/', (req, res) => {
  const userId = req.session.userId;
  console.log(userId);

  profileQueries.getProfile(userId)
    .then((profile) => {
      console.log(profile);
      res.send(profile);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving profile data');
    });
});


module.exports = router;
