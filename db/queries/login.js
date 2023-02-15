const db = require('../connection');

const loginExists = (loginEmail) => {
  const queryParams = [loginEmail];
  return db.query(`SELECT users.id, users.password
    FROM users
    WHERE users.email = $1;`, queryParams)
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { loginExists };
