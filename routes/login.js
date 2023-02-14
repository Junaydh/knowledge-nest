const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');

router.get('/', (req, res) => {
  res.render('users');
});

module.exports = router;
