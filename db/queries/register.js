const db = require('../connection');


//SEND BACK PROMISE WITH BOOLEAN CHECKING IF EMAIL/USERNAME ALREADY EXIST
const checkExistingUser = (username, email) => {
  const queryParams = [username, email];
  const queryString = `SELECT * FROM users WHERE username = $1 OR email = $2`;
  return db
    .query(queryString, queryParams).then((data) => {
    return data.rows.length > 0;
  });
};


//INSERT ONCE CHECKED
const registerUser = (userDetails) => {
  const insertParams = [
    userDetails.username,
    userDetails.firstName,
    userDetails.lastName,
    userDetails.email,
    userDetails.hashedPassword,
    userDetails.picture
    ];

  const insertString = `INSERT INTO users (username, first_name, last_name, email, password, profile_pic)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;`;

  return db.query(insertString, insertParams)
    .then(data => {
      const user = data.rows[0];
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { registerUser, checkExistingUser };


