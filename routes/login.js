require('dotenv').config();
const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const loginQueries = require('../db/queries/login')

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  const { email, password } = req.body;
  const loginEmail = email;

  console.log(loginEmail);

  loginQueries.loginExists(loginEmail)
    .then((user) => {
      console.log(user);
      if (!user) {
        return res.send('Invalid login details');
      }

      if (!bcrypt.compareSync(password, user.password)) {
        return res.send('<html><body><h1>Error</h1><p>Error: The password provided does not match.</p></body></html>');
      } else if (bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.redirect('/');
      }
    })
    .catch((err) => {
      console.error(err);
      res.send('Invalid login details');
    });
});

router.post('/logout', (req, res) => {
  req.session = null;
  res.redirect('/login');
});

module.exports = router;
