const db = require('../connection');

const resourceComments = (resourceID) => {
  return db
  .query(`SELECT owner_id, resource_id, comment as text, users.username, users.profile_pic
  FROM comments
  JOIN users ON owner_id = users.id
  WHERE resource_id = $1;`, [resourceID])
    .then(result => {
      console.log('Resource comments query:', result.rows);
      return result.rows;
    });
};

module.exports = { resourceComments };
