require('dotenv').config();
const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

const app = express();

app.use(cookieSession({
  name: 'session',
  keys: 'saKfsjfiAJmz92maxAJd2r4kHJAc647jfas7fg2uciGGGgfdSFS7'
}));

router.get('/', (req, res) => {
  res.render('users');
});

router.post('/', (req, res) => {

})


module.exports = router;
