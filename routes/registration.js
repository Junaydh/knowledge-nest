const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const registerQueries = require('../db/queries/register');

router.get('/', (req, res) => {
  res.render('register');
})

router.post('/', (req, res) => {
  const { username, firstName, lastName, email, password, picture } = req.body;

  registerQueries.checkExistingUser(username, email)
    .then((exists) => {
      if (exists) {
        return res.send('<html><body><h1>Error</h1><p>Error: That email or username is already in use. Please choose a different one.</p></body></html>');
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const user = {
        username,
        firstName,
        lastName,
        email,
        hashedPassword,
        picture
      };

      registerQueries.registerUser(user)
        .then(result => {
          console.log('DATA:', result);
          console.log('RESULTS ID:', result.id);
          const userId = result.id;
          req.session.userId = userId; // set the session cookie
          res.redirect('/login');
        })
        .catch((err) => {
          console.error('ERROR:', err.message);
        });
    })
    .catch((err) => {
      console.error('ERROR:', err.message);
    });
})

module.exports = router;
