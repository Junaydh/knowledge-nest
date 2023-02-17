const express = require('express');
const router  = express.Router();
const profileQueries = require('../db/queries/profile');

router.get('/', (req, res) => {
  res.render('profile');
});


router.post('/', (req, res) => {

  const userId = req.session.userId;
  const { username, firstName, lastName, email, profilePic } = req.body;

  console.log('REQ BODY:', req.body)

  const profileDetails = {
    userId,
    username,
    firstName,
    lastName,
    email,
    profile_pic
  };

  console.log('DETAILS:', profileDetails);

  profileQueries.updateProfile(profileDetails)
    .then((newProfile) => {
      console.log(newProfile);
      res.send(newProfile);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving profile data');
    });
});


module.exports = router;
