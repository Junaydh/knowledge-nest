const db = require('../connection');

const getProfile = (userId) => {
  const queryString = `SELECT username, first_name, last_name, email, profile_pic
  FROM users
  WHERE users.id = $1;`

  return db.query(queryString, [userId])
    .then(data => {
      return data.rows[0];
    })
};

const updateProfile = (profileDetails) => {
  queryParams = [profileDetails.userId, profileDetails.username, profileDetails.firstName,
    profileDetails.lastName, profileDetails.email, profileDetails.profilePic];

  const queryString = `UPDATE users
  SET username = $2, first_name = $3, last_name = $4, email = $5, profile_pic = $6
  WHERE users.id = $1 RETURNING *;`

  return db.query(queryString, queryParams)
    .then(data => {
      return data.rows[0];
    })
};


module.exports = { getProfile, updateProfile }
