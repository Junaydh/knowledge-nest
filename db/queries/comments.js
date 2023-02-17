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

const insertComment = (owner_id, resource_id, text) => {
  console.log("insertComment owner_id:", owner_id)
  const insertParams = [owner_id, resource_id, text];
  return db
  .query(`INSERT INTO comments (owner_id, resource_id, comment)
  VALUES($1, $2, $3) RETURNING id;`, insertParams)
  .then(result => {
    console.log('Resource comments query:', result);
    return result.rows[0].id;
  })
}

module.exports = { resourceComments, insertComment };
